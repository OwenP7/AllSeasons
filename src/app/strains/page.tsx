"use client";

import { strains, Strain, StrainType } from "@/data/strains";
import { cn } from "@/lib/cn";
import {
  filterChipClasses,
  strainCardActionDetailsClasses,
  strainCardActionRootClasses,
  strainCardActionTypeClasses,
  typeBadgeClasses,
} from "@/lib/strainStyles";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const filters: Array<"ALL" | StrainType> = ["ALL", "HYBRID", "INDICA", "SATIVA"];

const TYPE_SORT: Record<StrainType, number> = {
  HYBRID: 0,
  INDICA: 1,
  SATIVA: 2,
};

export default function StrainsPage() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | StrainType>("ALL");
  const [selected, setSelected] = useState<Strain | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list =
      activeFilter === "ALL"
        ? [...strains]
        : strains.filter((s) => s.type === activeFilter);
    list.sort((a, b) => {
      const byType = TYPE_SORT[a.type] - TYPE_SORT[b.type];
      if (byType !== 0) return byType;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [activeFilter]);

  return (
    <div className="bg-black px-6 py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading font-sans text-sm tracking-[0.15em] text-white">
              OUR STRAINS
            </p>
            <p className="text-caption mt-3 max-w-xl text-sm leading-[1.6] text-secondary">
              A tightly edited menu of house favorites. Clean, consistent, and crafted for everyday rituals.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "cursor-pointer text-left transition-colors duration-150",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50",
                  filterChipClasses(filter, activeFilter === filter),
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((strain, index) => {
              const isActive = activeCard === strain.name;

              return (
              <motion.div
                key={strain.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="strain-card-shell relative flex flex-col"
              >
                <div className="relative flex min-h-[260px] flex-1 items-end justify-center px-1 pb-2 md:min-h-[300px]">
                  <div className="relative w-full max-w-[300px]">
                    <div
                      className={cn(
                        "strain-art-core relative h-[220px] w-full md:h-[260px]",
                        isActive && "strain-art-core--active",
                      )}
                    >
                      <Image
                        src={strain.image}
                        alt={`${strain.name} artwork`}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                        priority={index < 3}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="relative z-10 flex justify-center pt-4"
                  onMouseEnter={() => setActiveCard(strain.name)}
                  onMouseLeave={() => setActiveCard((prev) => (prev === strain.name ? null : prev))}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(strain)}
                    onFocus={() => setActiveCard(strain.name)}
                    onBlur={() => setActiveCard((prev) => (prev === strain.name ? null : prev))}
                    className={cn(
                      "strain-action-root group/action",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45",
                      isActive && "strain-action-root--active",
                      strainCardActionRootClasses(strain.type),
                    )}
                  >
                    <span className={strainCardActionTypeClasses(strain.type)}>
                      {strain.type}
                    </span>
                    <span className={strainCardActionDetailsClasses()}>
                      VIEW DETAILS
                    </span>
                  </button>
                </div>
              </motion.div>
              );
            })}
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
                    <span
                      className={cn(
                        "mt-3 inline-flex items-center",
                        typeBadgeClasses(selected.type),
                      )}
                    >
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

                <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:gap-8">
                  <div className="text-caption min-w-0 space-y-4 text-sm text-secondary">
                    {selected.description.split("\n\n").map((para, idx) => (
                      <p key={idx} className="leading-[1.6]">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="min-w-0">
                    <div className="strain-art-modal relative aspect-[4/3] w-full overflow-visible">
                      <Image
                        src={selected.image}
                        alt={`${selected.name} artwork`}
                        fill
                        className="object-contain mix-blend-screen"
                        sizes="(max-width: 768px) 90vw, 420px"
                      />
                    </div>
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
