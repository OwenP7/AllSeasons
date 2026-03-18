 "use client";

import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <>
      <HeroVideo />

      <section className="relative min-h-[500px] h-[600px] md:h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/MediaSources/PassingJointLogo.jpeg"
            alt="All Seasons lifestyle"
            fill
            className="object-cover object-[50%_0%] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              ABOUT US
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              All Seasons was built for people who truly care about smoking
              great flower. We're longtime friends and Los Angeles natives
              committed to rare genetics, exceptional quality, and craft
              cultivation that can't be replicated.
            </p>
            <Link
              href="/about"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <section
        id="strains"
        className="relative min-h-[500px] h-[600px] md:h-screen w-full"
      >
        <div className="absolute inset-0">
          <Image
            src="/MediaSources/UpcloseWeed1.jpeg"
            alt="Cannabis flower close up"
            fill
            className="object-cover object-[50%_0%] md:object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              STRAINS
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Rare genetics. Loud terpenes. Elevated craft. Each strain is
              hand-selected and cultivated to deliver top-tier cannabis without
              compromise. From candy-forward hybrids to fuel-driven classics.
            </p>
            <Link
              href="/strains"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW ALL STRAINS
            </Link>
          </div>
        </div>
      </section>

      <section className="relative min-h-[500px] h-[600px] md:h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/MediaSources/SmellingPic.jpeg"
            alt="All Seasons lifestyle"
            fill
            className="object-cover object-[50%_0%] md:object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              STORE LOCATOR
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Find All Seasons at premium dispensaries across California. We
              partner with top-tier retailers who share our commitment to
              quality and craft.
            </p>
            <Link
              href="/store-locator"
              className="inline-flex border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              FIND STORES
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">STAY UPDATED</h3>
          <p className="text-lg text-gray-400 mb-8">
            Get notified about new drops, events, and releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-md"
            />
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300">
              SIGN UP
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            (Email collection coming soon)
          </p>
        </div>
      </section>
    </>
  );
}
