"use client";

import AgeGate from "@/components/AgeGate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [ageVerified, setAgeVerified] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = ageVerified ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ageVerified]);

  return (
    <>
      <AgeGate
        active={!ageVerified}
        denied={denied}
        onAllow={() => setAgeVerified(true)}
        onDeny={() => setDenied(true)}
      />
      <div
        className={`min-h-screen bg-black text-white transition-opacity duration-500 ${
          ageVerified ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!ageVerified}
      >
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
