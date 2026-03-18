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

      // Hard cut into the macro framing at the target time
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
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Wide/contain pass */}
      <motion.video
        ref={videoRef}
        src="/MediaSources/UpdatedHero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full bg-black object-contain transition-opacity duration-75"
        style={{ y, scale: 1, opacity: isDesktop ? (isMacro ? 0 : 1) : 0 }}
      />

      {/* Macro/cover pass */}
      <motion.video
        src="/MediaSources/UpdatedHero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full bg-black object-cover transition-opacity duration-75"
        style={{ y, scale: 1, opacity: isDesktop ? (isMacro ? 1 : 0) : 1 }}
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-lg text-white/80 md:text-xl">
          Premium California Cannabis
        </p>
        <div className="flex gap-4">
          <a className="btn-primary" href="#strains">
            Explore Our Strains
          </a>
          <Link
            className="btn-primary border-white/50 text-white/80"
            href="/stores"
          >
            Find Stores
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-white/70 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-14 w-px bg-white/30" />
        <span className="text-xs tracking-[0.3em]">SCROLL</span>
      </motion.div>
    </section>
  );
}

