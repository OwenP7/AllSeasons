"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const processCards = [
  {
    title: "Craft Cultivation",
    body: "Small-batch, precise environments, and relentless QC for every run.",
  },
  {
    title: "Premium Quality",
    body: "Hand-trimmed, slow cured, and graded for potency, flavor, and clarity.",
  },
  {
    title: "California Grown",
    body: "Born in Los Angeles, crafted with a coastal mindset and global standards.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <motion.video
          src="/media/AllSeasonsVid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="font-heading text-5xl tracking-[0.3em] text-white md:text-7xl">
            ALL SEASONS
          </p>
          <p className="text-lg text-white/80 md:text-xl">
            Premium California Cannabis
          </p>
          <div className="flex gap-4">
            <a className="btn-primary" href="#strains">
              Explore Our Strains
            </a>
            <Link className="btn-primary border-white/50 text-white/80" href="/stores">
              Find Stores
            </Link>
          </div>
        </div>
        <motion.div
          className="absolute bottom-10 flex flex-col items-center text-white/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-14 w-px bg-white/30" />
          <span className="text-xs tracking-[0.3em]">SCROLL</span>
        </motion.div>
      </section>

      <section
        id="story"
        className="relative bg-black px-6 pb-24 pt-20 md:pt-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="font-heading text-4xl tracking-[0.15em] text-white md:text-5xl">
              CULTIVATED WITH PURPOSE
            </p>
            <div className="space-y-4 text-base text-white/75">
              <p>
                All Seasons crafts elevated cannabis for those who demand more
                from every detail. Precision environments, curated genetics, and
                a relentless pursuit of quality come together in each release.
              </p>
              <p>
                From coastal climate to curated curing, every step is designed
                to honor the plant and the people who enjoy it. This is modern
                California cannabis—refined, intentional, and unforgettable.
              </p>
            </div>
            <a className="btn-primary w-fit" href="/about">
              Discover the story
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black to-black shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(212,175,55,0.1),transparent_40%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
            <div className="absolute left-6 top-6 flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-white/70">
              <span>Crafted</span>
              <span>In California</span>
            </div>
            <div className="absolute bottom-6 left-6 text-white/80">
              <p className="text-2xl font-semibold">Purpose-Built Spaces</p>
              <p className="text-sm text-white/60">
                Controlled light, climate, and care in every room.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0c0c0c] px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
              OUR PROCESS
            </p>
            <p className="text-white/70">
              Clean lines, controlled environments, and a relentless eye on
              detail.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-surface flex flex-col gap-3 p-6"
              >
                <div className="h-10 w-10 rounded-full border border-white/20 bg-white/5" />
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="text-sm text-white/70">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="strains"
        className="bg-black px-6 py-24 md:py-28 lg:py-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
              MOBILE ACCESS
            </p>
            <p className="text-base text-white/70">
              Exclusive drops, alerts, and updates—all in your pocket. Modeled
              after the Doja Pak experience with All Seasons branding.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary border-white/70 text-white/90">
                App Store
              </button>
              <button className="btn-primary border-white/70 text-white/90">
                Google Play
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto h-[420px] w-[240px] rotate-3 overflow-hidden rounded-[34px] border-2 border-white/20 bg-gradient-to-b from-white/10 via-black to-black shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_35%)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
              <Image
                src="/media/all-seasons-logo.png"
                alt="All Seasons"
                width={140}
                height={60}
                className="h-auto w-28"
              />
              <p className="text-lg font-semibold tracking-wide text-white">
                DOJA PAK AT YOUR FINGERTIPS
              </p>
              <p className="text-sm text-white/70">
                Clean, fast access to drops, store updates, and exclusive
                releases.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
