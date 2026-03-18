import { addEmailSubscriber } from "@/lib/airtable";
import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email." },
        { status: 400 },
      );
    }

    const result = await addEmailSubscriber(email);
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

