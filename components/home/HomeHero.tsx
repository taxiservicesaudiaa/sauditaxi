import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeBookingPanel } from "@/components/home/HomeBookingPanel";

const trustPoints = ["Private vehicle, every trip", "Quotation before you confirm", "24/7 availability"];

/**
 * The new homepage hero — 2026 visual reset. Real photography (Riyadh
 * skyline, already licensed and in use elsewhere on the site — see
 * data/journey-pages.ts) instead of the old dark gradient + gold-blob hero.
 * Functionally independent of the old HeroSection component (still used by
 * the Arabic homepage, app/ar/page.tsx, and left untouched).
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <Image
        src="/images/journey/riyadh-skyline.jpg"
        alt="Riyadh skyline at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      {/* Base wash for overall depth, then a left-to-right gradient concentrated
          behind the copy (left) and easing off toward the booking panel (right),
          plus a bottom anchor so the section doesn't read as flat. */}
      <div className="absolute inset-0 bg-midnight/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/75 to-midnight/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass drop-shadow-sm">
              Private Transfers · Saudi Arabia &amp; the GCC
            </p>
            <h1 className="mt-5 max-w-xl text-[2.25rem] font-bold leading-[1.08] tracking-tight drop-shadow-sm sm:text-5xl lg:text-[3.75rem]">
              Private Transfers Across Saudi Arabia
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Book a private, pre-arranged vehicle for airport pickups, city-to-city journeys,
              Umrah and Hajj transfers, day trips, and chauffeur-driven travel across Saudi
              Arabia, plus selected transfers into the GCC. Every trip is door-to-door, in
              your own vehicle, with a quotation you confirm before you travel. Request a quote
              and we&apos;ll confirm your driver in advance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
              >
                Get a Quote
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/intercity-transfers"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Explore Routes
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-white/75">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-brass" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <HomeBookingPanel />
        </div>
      </div>
    </section>
  );
}
