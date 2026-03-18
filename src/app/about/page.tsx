"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const headlineLines = [
  "BUILT BY PEOPLE WHO LOVE THE PLANT.",
  "MADE FOR PEOPLE WHO LOVE IT TOO.",
  "RARE GENETICS.",
  "HIGH QUALITY STANDARDS.",
  "EVERY SEASON.",
];

const polaroids = [
  {
    src: "/MediaSources/PassingJointLogo.jpeg",
    alt: "All Seasons logo",
    className:
      "left-2 top-8 rotate-2 z-20 w-[58%] md:left-0 md:top-10 md:w-[52%]",
  },
  {
    src: "/MediaSources/SmellingPic.jpeg",
    alt: "Smelling flower",
    className:
      "right-6 top-0 -rotate-3 z-10 w-[52%] md:right-0 md:top-2 md:w-[46%]",
  },
  {
    src: "/MediaSources/SmokingPic.jpeg",
    alt: "Smoking",
    className:
      "left-10 top-[38%] rotate-1 z-30 w-[54%] md:left-12 md:top-[40%] md:w-[48%]",
  },
  {
    src: "/MediaSources/UpcloseWeed1.jpeg",
    alt: "Flower close-up",
    className:
      "right-2 top-[44%] rotate-2 z-20 w-[50%] md:right-6 md:top-[46%] md:w-[44%]",
  },
  {
    src: "/MediaSources/UpcloseWeed2.jpeg",
    alt: "Flower close-up",
    className:
      "left-6 top-[62%] -rotate-2 z-10 w-[56%] md:left-2 md:top-[66%] md:w-[50%]",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[2fr,3fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="space-y-6"
          >
            <div className="space-y-3">
              {headlineLines.map((line) => (
                <motion.p
                  key={line}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-4xl font-bold leading-tight md:text-5xl"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto h-[520px] w-full max-w-[760px]"
          >
            {polaroids.map((p, idx) => (
              <motion.div
                key={`${p.alt}-${idx}`}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={[
                  "absolute select-none rounded-sm bg-white p-3 pb-10 shadow-2xl",
                  "border border-black/10",
                  "transition-transform duration-300 hover:-translate-y-2",
                  p.className,
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="rounded-sm object-cover"
                    sizes="(max-width: 768px) 60vw, 420px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
            About Us
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75 md:text-[15px]">
            <p>
              All Seasons was built for people who truly care about smoking great
              flower.
            </p>
            <p>
              The ones who notice the difference.
              <br />
              The ones always searching for the strain no one else has.
              <br />
              The ones who know quality when they see it.
            </p>
            <p>
              We're longtime friends and Los Angeles natives who grew up in the
              cannabis culture of the San Fernando Valley. Cannabis has always
              been part of our lives, and over time that passion turned into an
              obsession with the craft of cultivation.
            </p>
            <p>
              All Seasons started with a simple idea: grow the kind of cannabis
              we always wished we could share more with friends and family.
            </p>
            <p>
              From the beginning, we built our farms ourselves — not investors
              chasing trends, but growers and operators committed to doing things
              the right way. Every part of the process is driven by respect for
              the plant and for the people who enjoy it.
            </p>
            <p>
              Over the years we've spent countless hours refining our genetics,
              running trials, and dialing in every detail of our cultivation.
              Along the way we leaned on our community — friends, connoisseurs,
              and industry tastemakers — putting our flower through blind taste
              tests until we knew it met the standard.
            </p>
            <p>The result is cannabis that stands on its own.</p>
            <p>
              All Seasons focuses on rare genetics, exceptional quality, and
              authenticity that can't be replicated or outsourced. With every
              harvest, our goal is simple: deliver top-tier cannabis at scale
              without ever compromising the craft.
            </p>
            <p className="pt-2 text-lg font-semibold text-white md:text-xl">
              Because at the end of the day, we only put one thing in our bags:
              <br />
              Flower we are proud to smoke ourselves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
