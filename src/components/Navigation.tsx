"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Strains", href: "/strains" },
  { label: "Store Locator", href: "/store-locator" },
];

const socials = [
  { href: "https://www.instagram.com/allseasonsfarms/", label: "Instagram" },
  { href: "https://x.com/Allseasonsfarms", label: "X" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 h-20 transition-colors duration-300",
        scrolled ? "bg-black/90 backdrop-blur-xl" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/MediaSources/UpdatedLogo-2-removebg-preview.png"
            alt="All Seasons Farms"
            width={160}
            height={70}
            priority
            className="h-auto w-32 md:w-36"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              const isStoreLocator = item.label === "Store Locator";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "nav-label relative pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
                    isStoreLocator ? "nav-label--mono" : "",
                    active ? "text-white" : "nav-muted-link",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-white transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </div>

          <div className="nav-label nav-label--mono ml-6 flex items-center gap-2">
            <a
              href="https://www.instagram.com/allseasonsfarms/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-muted-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Instagram
            </a>
            <span className="text-[color:var(--footer-link)] opacity-70">/</span>
            <a
              href="https://x.com/Allseasonsfarms"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-muted-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              X
            </a>
          </div>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span
            className={[
              "absolute block h-0.5 w-5 bg-white transition-transform duration-300",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-0.5 w-5 bg-white transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-0.5 w-5 bg-white transition-transform duration-300",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0",
            ].join(" ")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-nav"
              className="fixed right-0 top-0 z-50 h-dvh w-[86vw] max-w-sm border-l border-white/10 bg-black/95 p-8 md:hidden"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mt-16 flex flex-col gap-4">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  const isStoreLocator = item.label === "Store Locator";
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "nav-label rounded-xl border border-white/10 px-4 py-3 transition-[border-color,background-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
                        isStoreLocator ? "nav-label--mono" : "",
                        active
                          ? "border-white/25 bg-white/5 text-white"
                          : "nav-muted-link hover:border-white/25",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="nav-label nav-label--mono mt-10 flex items-center gap-2">
                <a
                  href="https://www.instagram.com/allseasonsfarms/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-muted-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Instagram
                </a>
                <span className="text-[color:var(--footer-link)] opacity-70">/</span>
                <a
                  href="https://x.com/Allseasonsfarms"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-muted-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  X
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

