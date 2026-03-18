"use client";

import dynamic from "next/dynamic";

import type { StoreLocation } from "@/components/StoreMap";

const Map = dynamic(() => import("../../components/StoreMap"), { ssr: false });

// Use existing locations data with these coordinates:
const locations: StoreLocation[] = [
  {
    id: 1,
    name: "Example Dispensary 1",
    address: "123 Main St, Los Angeles, CA 90001",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: 2,
    name: "Example Dispensary 2",
    address: "456 Ocean Ave, Santa Monica, CA 90401",
    lat: 34.0195,
    lng: -118.4912,
  },
  {
    id: 3,
    name: "Example Dispensary 3",
    address: "789 Sunset Blvd, Los Angeles, CA 90028",
    lat: 34.0901,
    lng: -118.3617,
  },
];

export default function StoresPage() {
  return (
    <div className="bg-black px-6 py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="space-y-3 md:max-w-xl">
          <p className="font-heading text-sm uppercase tracking-[0.26em] text-white/60">
            FIND ALL SEASONS NEAR YOU
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
          <div className="h-96 w-full overflow-hidden rounded-2xl border border-white/5 bg-black">
            <Map locations={locations} />
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-white/60">
            AVAILABLE LOCATIONS
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="store-card space-y-3 p-5">
              <p className="text-sm font-semibold tracking-[0.02em]">
                Example Dispensary 1
              </p>
              <p className="text-xs leading-relaxed text-white/60">
                123 Main St, Los Angeles, CA 90001
              </p>
              <a
                href="#"
                className="mt-2 inline-flex w-full items-center justify-center border border-white/30 bg-transparent px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-150 hover:bg-white hover:text-black"
              >
                GET DIRECTIONS
              </a>
            </div>
            <div className="store-card space-y-3 p-5">
              <p className="text-sm font-semibold tracking-[0.02em]">
                Example Dispensary 2
              </p>
              <p className="text-xs leading-relaxed text-white/60">
                456 Ocean Ave, Santa Monica, CA 90401
              </p>
              <a
                href="#"
                className="mt-2 inline-flex w-full items-center justify-center border border-white/30 bg-transparent px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-150 hover:bg-white hover:text-black"
              >
                GET DIRECTIONS
              </a>
            </div>
            <div className="store-card space-y-3 p-5">
              <p className="text-sm font-semibold tracking-[0.02em]">
                Example Dispensary 3
              </p>
              <p className="text-xs leading-relaxed text-white/60">
                789 Sunset Blvd, Los Angeles, CA 90028
              </p>
              <a
                href="#"
                className="mt-2 inline-flex w-full items-center justify-center border border-white/30 bg-transparent px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-150 hover:bg-white hover:text-black"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
