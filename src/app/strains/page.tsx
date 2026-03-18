"use client";

import { strains, Strain, StrainType } from "@/data/strains";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const filters: Array<"ALL" | StrainType> = ["ALL", "INDICA", "SATIVA", "HYBRID"];

export default function StrainsPage() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | StrainType>("ALL");
  const [selected, setSelected] = useState<Strain | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "ALL") return strains;
    return strains.filter((s) => s.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-black px-6 py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.26em] text-white/60">
              OUR STRAINS
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
              A tightly edited menu of house favorites. Clean, consistent, and crafted for everyday rituals.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.26em] font-medium",
                  activeFilter === filter
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-white/60 hover:border-white/40 hover:text-white",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((strain) => (
              <motion.div
                key={strain.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col gap-6 text-left"
              >
                <div className="relative overflow-hidden rounded-lg bg-black">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={strain.image}
                      alt={`${strain.name} artwork`}
                      fill
                      className="object-contain bg-black transition-transform duration-150 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-semibold tracking-[0.02em]">
                      {strain.name}
                    </p>
                    <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60">
                      {strain.type}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelected(strain)}
                    className={cn(
                      "mt-2 inline-flex w-full items-center justify-center border border-white/30 bg-transparent px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em]",
                      "transition-colors duration-150 hover:bg-white hover:text-black",
                    )}
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-hidden rounded-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-black" />
              <div className="relative z-10 flex max-h-[88vh] flex-col overflow-y-auto p-8 gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold tracking-[0.02em]">
                      {selected.name}
                    </p>
                    <span className="mt-3 inline-flex rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60">
                      {selected.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex h-9 min-w-[88px] items-center justify-center border border-white/40 bg-transparent px-4 text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-150 hover:bg-white hover:text-black"
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr,1.1fr] md:items-start">
                  <div className="overflow-hidden rounded-xl bg-black">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={selected.image}
                        alt={`${selected.name} artwork`}
                        fill
                        className="object-contain bg-black"
                        sizes="(max-width: 768px) 90vw, 420px"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-white/75">
                    {selected.description.split("\n\n").map((para, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
