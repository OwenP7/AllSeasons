"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Strains", href: "/strains" },
  { label: "Store Locator", href: "/stores" },
];

const socials = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "X" },
  { href: "https://www.youtube.com", label: "YouTube" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/media/all-seasons-logo.png"
            alt="All Seasons Farms"
            width={140}
            height={60}
            className="h-auto w-32"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-1 transition-colors ${
                pathname === item.href ? "text-white" : "text-white/70"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ${
                  pathname === item.href ? "scale-x-100" : "md:hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "translate-y-1 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition ${
              open ? "-translate-y-1 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-3 top-16 mx-auto flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 p-6 text-sm uppercase tracking-wide md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 transition ${
                  pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 text-white/70">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
