"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DESKTOP_MIN_WIDTH = 1024;
const MACRO_START_SECONDS = 10.52;

export function HeroVideo() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMacro, setIsMacro] = useState(false);
  const [bgColor, setBgColor] = useState("#000000");

  useEffect(() => {
    const updateIsDesktop = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH);

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isDesktop) return;

    const handleTimeUpdate = () => {
      const t = video.currentTime;

      if (t < MACRO_START_SECONDS) {
        setIsMacro(false);
        return;
      }

      setIsMacro(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    handleTimeUpdate();

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isDesktop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

        let darkestIndex = 0;
        let darkestLuma = 255;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

          if (luma < darkestLuma) {
            darkestLuma = luma;
            darkestIndex = i;
          }
        }

        const r = data[darkestIndex];
        const g = data[darkestIndex + 1];
        const b = data[darkestIndex + 2];

        const toHex = (v: number) => v.toString(16).padStart(2, "0");
        const color = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

        setBgColor(color);
      } catch {
        // If sampling fails for any reason, we just keep pure black.
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <motion.video
        ref={videoRef}
        src="/MediaSources/UpdatedHero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full bg-black object-contain object-center transition-opacity duration-75"
        style={{ y, scale: 1, opacity: isDesktop ? (isMacro ? 0 : 1) : 0 }}
      />

      <motion.video
        src="/MediaSources/UpdatedHero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full bg-black object-cover object-center transition-opacity duration-75"
        style={{ y, scale: 1, opacity: isDesktop ? (isMacro ? 1 : 0) : 1 }}
      />

      {/* Desktop: vignette + flat wash; mobile: uniform dim so type reads like editorial overlays */}
      <div
        className="absolute inset-0 z-10 hidden pointer-events-none md:block"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 45%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.82) 100%)",
        }}
      />
      <div className="absolute inset-0 z-10 hidden bg-black/35 pointer-events-none md:block" />
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none md:hidden" aria-hidden />

      <Link
        href="/strains"
        className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="View strains"
      />

      <h1
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[min(92vw,26rem)] max-w-[min(92vw,52rem)] -translate-x-1/2 -translate-y-1/2 px-4 text-center font-heading font-semibold tracking-[0.08em] text-[clamp(1.875rem,7vw+0.35rem,2.85rem)] text-white/90 mix-blend-difference max-md:[text-shadow:none] md:bottom-auto md:left-auto md:right-[5%] md:top-[75%] md:w-auto md:max-w-[min(92vw,52rem)] md:translate-x-0 md:-translate-y-1/2 md:text-right md:text-[clamp(0.875rem,3.2vw,2.75rem)] md:text-white"
        style={{
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}
      >
        <span className="inline-block max-md:text-balance md:whitespace-nowrap md:text-right">
          Premium California Cannabis
        </span>
      </h1>

      <motion.div
        className="text-caption pointer-events-none absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-secondary"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div
          className="h-14 shrink-0"
          style={{
            width: 0.5,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <span className="text-xs leading-[1.6] tracking-[0.3em]">SCROLL</span>
      </motion.div>
    </section>
  );
}
