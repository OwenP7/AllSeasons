"use client";

import AgeGate from "@/components/AgeGate";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const AGE_SESSION_KEY = "asf_age_verified_session";
const AGE_LOCAL_KEY = "asf_age_verified";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [ageVerified, setAgeVerified] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    try {
      const sessionOk = sessionStorage.getItem(AGE_SESSION_KEY) === "true";
      setAgeVerified(sessionOk);
    } catch {
      setAgeVerified(false);
    }
  }, []);

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
        onAllow={() => {
          setDenied(false);
          setAgeVerified(true);
          try {
            sessionStorage.setItem(AGE_SESSION_KEY, "true");
            localStorage.setItem(AGE_LOCAL_KEY, new Date().toISOString());
          } catch {
            // ignore
          }
        }}
        onDeny={() => {
          setDenied(true);
          if (typeof window !== "undefined") {
            window.location.href = "https://www.google.com";
          }
        }}
      />
      <div
        className={`min-h-screen bg-black text-white transition-opacity duration-500 ${
          ageVerified ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!ageVerified}
      >
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pt-20"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
