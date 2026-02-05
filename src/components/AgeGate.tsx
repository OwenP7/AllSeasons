"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  active: boolean;
  denied: boolean;
  onAllow: () => void;
  onDeny: () => void;
};

export default function AgeGate({ active, denied, onAllow, onDeny }: Props) {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-age-gate",
      active ? "locked" : "open",
    );
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex max-w-xl flex-col items-center gap-8 text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/media/all-seasons-logo.png"
                alt="All Seasons Farms"
                width={220}
                height={80}
                priority
                className="h-auto w-48"
              />
              <p className="text-2xl font-semibold tracking-[0.2em] text-white">
                ARE YOU OVER 21 YEARS OF AGE?
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn-primary" onClick={onAllow}>
                Yes
              </button>
              <button
                className="btn-primary border-white/60 text-white/80 hover:text-black"
                onClick={onDeny}
              >
                No
              </button>
            </div>
            {denied ? (
              <p className="text-sm text-red-200">
                You must be of legal age to enter this site.
              </p>
            ) : (
              <p className="text-xs text-white/60">
                By entering this site you are agreeing to the Terms of Use and
                Privacy Policy.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
