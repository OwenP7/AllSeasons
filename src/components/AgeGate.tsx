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
          className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center bg-black px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex w-full max-w-xl flex-col items-center gap-10 text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/MediaSources/UpdatedLogo-2-removebg-preview.png"
                alt="All Seasons Farms"
                width={340}
                height={140}
                priority
                className="h-auto w-72 md:w-80"
              />
              <p className="text-2xl font-light tracking-wide text-white">
                ARE YOU OVER 21 YEARS OF AGE?
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={onAllow}
              >
                Yes
              </button>
              <button
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              <p className="text-caption text-xs leading-[1.6] text-secondary">
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
