import { addEmailSubscriber } from "@/lib/newsletter";
import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_TIME_MS = 1_500;
const requestBuckets = new Map<string, number[]>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string, nowMs: number) {
  const recent = (requestBuckets.get(ip) || []).filter(
    (timestamp) => nowMs - timestamp <= RATE_LIMIT_WINDOW_MS,
  );
  recent.push(nowMs);
  requestBuckets.set(ip, recent);

  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      email?: unknown;
      website?: unknown;
      formStartedAt?: unknown;
    };
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";
    const formStartedAt =
      typeof body.formStartedAt === "number" ? body.formStartedAt : null;
    const now = Date.now();

    if (honeypot) {
      return NextResponse.json(
        { ok: false, message: "Something went wrong. Try again." },
        { status: 400 },
      );
    }

    if (!formStartedAt || now - formStartedAt < MIN_FORM_FILL_TIME_MS) {
      return NextResponse.json(
        { ok: false, message: "Please wait a moment and try again." },
        { status: 400 },
      );
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp, now)) {
      return NextResponse.json(
        { ok: false, message: "Too many attempts. Please try again shortly." },
        { status: 429 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email." },
        { status: 400 },
      );
    }

    const result = await addEmailSubscriber(email);
    if (!result.success && result.duplicate) {
      return NextResponse.json(
        { ok: false, message: "You're already subscribed." },
        { status: 409 },
      );
    }

    if (!result.success) {
      return NextResponse.json(
        { ok: false, message: "Something went wrong. Try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }
}

