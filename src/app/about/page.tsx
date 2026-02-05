"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Quality",
    body: "Every batch graded, tested, and held to uncompromising standards.",
  },
  {
    title: "Craft",
    body: "Slow, meticulous processes that protect flavor, potency, and texture.",
  },
  {
    title: "Community",
    body: "Rooted in California culture with respect for the plant and the people.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <video
          src="/media/AllSeasonsVid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-5xl tracking-[0.2em] md:text-6xl">
            MORE THAN A LIFESTYLE
          </p>
          <p className="mt-4 text-lg text-white/75">
            A culture built on precision, respect, and modern design.
          </p>
          <a className="btn-primary mt-6 inline-flex" href="#story">
            Our Story
          </a>
        </div>
      </section>

      <section id="story" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
              BRAND STORY
            </p>
            <div className="space-y-4 text-base text-white/75">
              <p>
                All Seasons was founded on the belief that cannabis deserves the
                same design rigor as luxury streetwear and the same craft as
                high-end culinary. Every decision is intentional—from genetics
                to packaging.
              </p>
              <p>
                Our facilities balance precision tech with hands-on care. We
                monitor every microclimate, every cure, and every trim, ensuring
                each drop feels rare, collectible, and reliable.
              </p>
              <p>
                The result: elevated product, minimal aesthetic, and a brand
                that moves with confidence.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="card-surface relative flex min-h-[320px] items-end overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black to-black" />
            <div className="relative z-10">
              <p className="text-2xl font-semibold">National Geographic Tour</p>
              <p className="text-sm text-white/70">
                Immersive cultivation walkthrough—coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0c0c0c] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl space-y-10">
          <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
            MISSION & VALUES
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-surface space-y-3 p-6"
              >
                <div className="h-10 w-10 rounded-full border border-white/20 bg-white/5" />
                <p className="text-lg font-semibold">{value.title}</p>
                <p className="text-sm text-white/70">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="card-surface h-[260px] bg-gradient-to-br from-white/5 via-black to-black p-8"
          >
            <p className="text-xl font-semibold text-white">Team</p>
            <p className="mt-3 text-sm text-white/70">
              Meet the cultivators, designers, and operators shaping All
              Seasons. (Imagery placeholder)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card-surface h-[260px] bg-gradient-to-br from-white/10 via-black to-black p-8"
          >
            <p className="text-xl font-semibold text-white">Facilities</p>
            <p className="mt-3 text-sm text-white/70">
              Purpose-built rooms, filtration, and curing environments tuned for
              terpene preservation. (Imagery placeholder)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
