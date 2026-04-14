"use client";

import { motion } from "framer-motion";

const headlineLines = [
  "BUILT BY PEOPLE WHO LOVE THE PLANT.",
  "MADE FOR PEOPLE WHO LOVE IT TOO.",
  "RARE GENETICS.",
  "HIGH QUALITY STANDARDS.",
  "EVERY SEASON.",
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid items-stretch gap-6 lg:grid-cols-[1.2fr,1.8fr] lg:gap-8"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }}
              className="flex min-h-[220px] flex-col justify-center border-l-2 border-[#f6c34a]/75 pl-4 md:min-h-[300px] md:pl-6 lg:min-h-[620px]"
            >
              <p className="font-heading text-xs tracking-[0.35em] text-[#f6c34a] md:text-sm">
                IN THE FIELD
              </p>
              <div className="mt-3 space-y-2 md:space-y-3">
                {headlineLines.map((line) => (
                  <motion.p
                    key={line}
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <div className="relative isolate min-h-[420px] overflow-hidden rounded-2xl border border-[#f6c34a]/35 md:min-h-[560px] lg:min-h-[620px]">
              <video
                src="/MediaSources/ALL SEASONS_GROW_R1_WIDE 2.MP4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#f6c34a]/20" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-heading text-4xl tracking-[0.15em] text-white md:text-5xl">
            About Us
          </p>
          <div className="text-caption mt-8 space-y-5 text-base leading-[1.6] text-secondary md:text-[15px]">
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
