import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** The closing CTA — one clear ask. */
export function AboutFinalCTA() {
  return (
    <section className="bg-midnight py-16 text-white sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to plan your journey?</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
          Share your pickup, destination and travel date, and we&apos;ll arrange the right
          private transfer — a quotation you confirm before you travel.
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
