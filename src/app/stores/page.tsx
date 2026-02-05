"use client";

import { stores } from "@/data/stores";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function StoresPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return stores.filter(
      (store) =>
        store.name.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="bg-black px-6 py-24 text-white md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-3">
          <p className="font-heading text-4xl tracking-[0.15em] md:text-5xl">
            FIND ALL SEASONS NEAR YOU
          </p>
          <p className="text-white/70">
            Search by neighborhood or city. Quick links to directions and
            contact.
          </p>
          <div className="flex flex-wrap gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Los Angeles, Venice, Hollywood..."
              className="w-full max-w-md rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-white/40 focus:ring-white/10"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <iframe
              title="All Seasons Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423285.5080608014!2d-118.69191530285668!3d34.020161306584576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c34afec3f7%3A0x7238c7a7be0e81d5!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-4">
            {filtered.map((store, i) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card-surface space-y-2 p-5"
              >
                <p className="text-lg font-semibold">{store.name}</p>
                <p className="text-sm text-white/70">
                  {store.address} · {store.city}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <a
                    href={store.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary h-10 px-4 py-2 text-xs"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${store.phone.replace(/[^0-9]/g, "")}`}
                    className={cn(
                      "rounded-lg border border-white/20 px-3 py-2 text-xs uppercase tracking-wide transition hover:border-white hover:text-white",
                    )}
                  >
                    {store.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
