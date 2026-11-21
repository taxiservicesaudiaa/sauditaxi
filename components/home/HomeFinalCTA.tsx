import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The closing CTA — one clear ask, no aggressive sales language.
 *
 * Deliberately a styled <p>, not an <h2>: the heading-structure brief lists
 * exactly 12 numbered H2 sections (Core Service Introduction through FAQ)
 * and treats this closing CTA as the page's wrap-up, not a 13th topic
 * section — keeping the total at the brief's stated "maximum 12" H2 cap.
 */
export function HomeFinalCTA() {
  return (
    <section className="bg-midnight py-16 text-white sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-3xl font-bold tracking-tight sm:text-4xl">Book a Private Transfer in Saudi Arabia</p>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
          Tell us your pickup, destination, and travel date, and we&apos;ll send a quotation and a
          driver before you travel — whether it&apos;s an airport transfer, a city-to-city journey, an
          Umrah or Hajj transfer, a day trip, or a cross-border trip into the GCC.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
