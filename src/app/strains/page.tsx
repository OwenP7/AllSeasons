"use client";

import { strains, Strain, StrainType } from "@/data/strains";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const filters: Array<"All" | StrainType> = ["All", "Indica", "Sativa", "Hybrid"];

export default function StrainsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | StrainType>("All");
  const [selected, setSelected] = useState<Strain | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return strains;
    return strains.filter((s) => s.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-black px-6 py-24 text-white md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
              OUR STRAINS
            </p>
            <p className="text-white/70">
              Curated lineup, filter by expression. Hover for details, click for
              full breakdown.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm uppercase tracking-wide transition",
                  activeFilter === filter
                    ? "border-white bg-white text-black"
                    : "border-white/30 text-white/70 hover:border-white hover:text-white",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((strain) => (
              <motion.button
                key={strain.name}
                onClick={() => setSelected(strain)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-6 text-left shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.9)), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.85))`,
                }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-60 blur-2xl transition group-hover:opacity-80",
                    `bg-gradient-to-br ${strain.tone}`,
                  )}
                />
                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                      {strain.type}
                    </p>
                    <p className="text-2xl font-semibold">{strain.name}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>THC {strain.thc}</span>
                    <span>CBD {strain.cbd}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
                  <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition group-hover:opacity-100">
                    View Details
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black to-black" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                      {selected.type}
                    </p>
                    <p className="text-3xl font-semibold">{selected.name}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-primary h-10 min-w-[80px] px-4 py-2 text-xs"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-white/70">
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    THC {selected.thc}
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1">
                    CBD {selected.cbd}
                  </span>
                  {selected.effects.map((effect) => (
                    <span
                      key={effect}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/75">{selected.description}</p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  {selected.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
