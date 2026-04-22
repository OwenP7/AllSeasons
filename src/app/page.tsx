"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [formStartedAt] = useState(() => Date.now());

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatusType("error");
      setStatusMessage("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setStatusType("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          website: honeypot,
          formStartedAt,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatusType("error");
        setStatusMessage(data.message ?? "Something went wrong. Try again.");
        return;
      }

      setStatusType("success");
      setStatusMessage("Thanks for signing up. You're on the list.");
      setEmail("");
    } catch {
      setStatusType("error");
      setStatusMessage("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <HeroVideo />

      <section className="relative min-h-[500px] h-[600px] md:h-screen w-full">
        <div className="absolute inset-0">
          {/* Mobile-specific cropped image */}
          <Image
            src="/MediaSources/PasssingJointCropped.png"
            alt="All Seasons lifestyle"
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Desktop image remains unchanged */}
          <Image
            src="/MediaSources/PassingJointLogo.jpeg"
            alt="All Seasons lifestyle"
            fill
            className="hidden md:block object-cover"
            priority
          />
          <div
            className="landing-smoke-gradient pointer-events-none absolute inset-0"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-8 py-8 md:justify-start md:py-0">
          <div className="max-w-2xl w-full text-center md:text-left">
            <h2 className="landing-section-title mb-6 text-6xl font-black tracking-[-0.02em] text-white md:text-7xl">
              ABOUT US
            </h2>
            <div className="landing-copy-panel mb-8">
              <div className="landing-copy-panel__inner">
                <p className="landing-section-body text-lg leading-relaxed text-white/90 md:text-xl md:text-white/95">
                  All Seasons was built for people who truly care about smoking
                  great flower. We're longtime friends and Los Angeles natives
                  committed to rare genetics, exceptional quality, and craft
                  cultivation that can't be replicated.
                </p>
              </div>
            </div>
            <Link href="/about" className="btn-boutique rounded-sm px-10 py-3.5">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <section
        id="strains"
        className="relative min-h-[500px] h-[600px] md:h-screen w-full"
      >
        <div className="absolute inset-0">
          <Image
            src="/MediaSources/UpcloseWeed1.jpeg"
            alt="Cannabis flower close up"
            fill
            className="object-cover"
          />
          <div
            className="landing-smoke-gradient--end pointer-events-none absolute inset-0"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-8 py-8 md:justify-end md:py-0">
          <div className="flex max-w-2xl w-full flex-col items-center text-center md:items-end md:text-right">
            <h2 className="landing-section-title mb-6 text-6xl font-black tracking-[-0.02em] text-white md:text-7xl">
              STRAINS
            </h2>
            <div className="landing-copy-panel mb-8">
              <div className="landing-copy-panel__inner">
                <p className="landing-section-body text-lg leading-relaxed text-white/90 md:text-xl md:text-white/95">
                  Rare genetics. Loud terpenes. Elevated craft. Each strain is
                  hand-selected and cultivated to deliver top-tier cannabis without
                  compromise. From candy-forward hybrids to fuel-driven classics.
                </p>
              </div>
            </div>
            <Link
              href="/strains"
              className="btn-boutique self-center rounded-sm px-10 py-3.5 md:self-end"
            >
              VIEW ALL STRAINS
            </Link>
          </div>
        </div>
      </section>

      <section className="relative min-h-[500px] h-[600px] md:h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/MediaSources/SmellingPic.jpeg"
            alt="All Seasons lifestyle"
            fill
            className="object-cover"
          />
          <div
            className="landing-smoke-gradient pointer-events-none absolute inset-0"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-8 py-8 md:justify-start md:py-0">
          <div className="max-w-2xl w-full text-center md:text-left">
            <h2 className="landing-section-title mb-6 text-6xl font-black tracking-[-0.02em] text-white md:text-7xl">
              STORE LOCATOR
            </h2>
            <div className="landing-copy-panel mb-8">
              <div className="landing-copy-panel__inner">
                <p className="landing-section-body text-lg leading-relaxed text-white/90 md:text-xl md:text-white/95">
                  Find All Seasons at premium dispensaries across California. We
                  partner with top-tier retailers who share our commitment to
                  quality and craft.
                </p>
              </div>
            </div>
            <Link
              href="/store-locator"
              className="btn-boutique rounded-sm px-10 py-3.5"
            >
              FIND STORES
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h3 className="section-heading mb-4 text-4xl text-white">STAY UPDATED</h3>
          <p className="text-caption mb-8 text-lg leading-[1.6] text-secondary">
            Get notified about new drops, events, and releases.
          </p>
          <form
            className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8"
            onSubmit={handleNewsletterSubmit}
          >
            <label className="sr-only" htmlFor="newsletter-website">
              Website
            </label>
            <input
              id="newsletter-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              className="hidden"
            />
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
              required
              className="text-caption min-w-0 flex-1 border-0 border-b border-white/35 bg-transparent py-3 text-white placeholder:text-secondary focus:border-white focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-boutique shrink-0 self-start rounded-sm px-10 py-3.5 sm:self-auto"
            >
              {isSubmitting ? "SUBMITTING..." : "SIGN UP"}
            </button>
          </form>
          <p
            className={`text-caption mt-4 text-xs leading-[1.6] ${
              statusType === "error"
                ? "text-red-300"
                : statusType === "success"
                  ? "text-green-300"
                  : "text-secondary"
            }`}
          >
            {statusMessage || "Get notified about drops, events, and releases."}
          </p>
        </div>
      </section>
    </>
  );
}
