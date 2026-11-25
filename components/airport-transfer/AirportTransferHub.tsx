import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";

export interface AirportTransferStep {
  title: string;
  detail: string;
}

export interface AirportTransferCluster {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

export interface AirportTransferHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: { label: string; value: string }[];
  /** Optional dated status notice shown directly under the hero (e.g. airport
   * disruption). Rendered only when supplied, so airports without one are unchanged. */
  notice?: { heading: string; paragraphs: string[]; links?: { label: string; href: string }[] };
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;

  coreServiceHeading: string;
  coreServiceParagraph: string;

  popularHeading: string;
  popularIntro?: string;
  popularCards: HomeSectionCard[];

  arrivingHeading: string;
  arrivingParagraphs: string[];

  meetGreetHeading: string;
  meetGreetIntro?: string;
  meetGreetSteps: AirportTransferStep[];

  destinationsHeading: string;
  destinationsIntro?: string;
  destinationClusters: AirportTransferCluster[];

  familyHeading: string;
  familyParagraph: string;

  vehiclesHeading: string;
  vehiclesIntro?: string;
  vehicleCards: HomeSectionCard[];

  bookingHeading: string;
  bookingIntro?: string;
  bookingSteps: AirportTransferStep[];

  faqHeading: string;
  faqs: Faq[];

  finalCtaHeading: string;
  finalCtaText: string;
}

/**
 * Dedicated view for the 13 individual /airport-transfer/{airport} pages
 * only — a new sibling to AirportHubView, not a replacement. AirportHubView
 * stays untouched because it's also reused by the Arabic border/airport
 * pages (app/ar/[...slug]/page.tsx) with a different, leaner prop set, so
 * restructuring it here would risk breaking those pages. This component
 * renders the same page for every airport slug via
 * app/(main)/airport-transfer/[airport]/page.tsx, with all copy supplied
 * per-airport (or shared-and-interpolated for the universal sections —
 * meet & greet, vehicles, booking) from data/airports.ts +
 * data/airport-guides.ts.
 */
export function AirportTransferHub({ content, crumbs }: { content: AirportTransferHubContent; crumbs: Crumb[] }) {
  const {
    eyebrow,
    h1,
    dek,
    heroImage,
    heroAlt,
    facts,
    notice,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    coreServiceHeading,
    coreServiceParagraph,
    popularHeading,
    popularIntro,
    popularCards,
    arrivingHeading,
    arrivingParagraphs,
    meetGreetHeading,
    meetGreetIntro,
    meetGreetSteps,
    destinationsHeading,
    destinationsIntro,
    destinationClusters,
    familyHeading,
    familyParagraph,
    vehiclesHeading,
    vehiclesIntro,
    vehicleCards,
    bookingHeading,
    bookingIntro,
    bookingSteps,
    faqHeading,
    faqs,
    finalCtaHeading,
    finalCtaText,
  } = content;

  return (
    <>
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src={heroImage} alt={heroAlt} fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-midnight/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/70 to-midnight/40" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85">{dek}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
            >
              {primaryCtaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            {secondaryCtaHref && secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>

        {facts.length > 0 && (
          <div className="relative border-t border-white/10 bg-midnight/40 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1200px] flex-wrap divide-x divide-white/10 px-4 sm:px-6 lg:px-8 rtl:divide-x-reverse">
              {facts.map((f) => (
                <div key={f.label} className="min-w-[9rem] flex-1 py-4 pe-4">
                  <p className="text-sm font-semibold text-white">{f.value}</p>
                  <p className="mt-0.5 text-xs text-white/60">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {notice && (
        <section className="border-b border-brass/30 bg-brass/10 py-8 sm:py-10" aria-labelledby="airport-status-notice">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 id="airport-status-notice" className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                {notice.heading}
              </h2>
              {notice.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              {notice.links && notice.links.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {notice.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-ink underline decoration-brass underline-offset-4 hover:text-brass">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* H2 #1 — Private Transfers from [Airport] (no H3s) */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{coreServiceHeading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{coreServiceParagraph}</p>
          </div>
        </div>
      </section>

      {/* H2 #2 — Popular Transfers from [Airport] (H3 x<=5, real routes only) */}
      {popularCards.length > 0 ? (
        <HomeSectionCards eyebrow="Onward Travel" heading={popularHeading} intro={popularIntro} tone="sand" columns={popularCards.length >= 4 ? 4 : popularCards.length === 3 ? 3 : 2} cards={popularCards} />
      ) : (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{popularHeading}</h2>
            {popularIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{popularIntro}</p>}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 space-y-12">
        {/* H2 #3 — Arriving at [Official Airport Name] (no H3s) */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{arrivingHeading}</h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
            {arrivingParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* H2 #4 — Airport Pickup and Driver Meet & Greet (H3 x3) */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{meetGreetHeading}</h2>
          {meetGreetIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{meetGreetIntro}</p>}
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {meetGreetSteps.map((step) => (
              <li key={step.title} className="rounded-xl border border-hairline bg-sand/40 p-4">
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* H2 #5 — Transfers from [Airport] to Major Destinations (airport-specific customization, no H3s) */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{destinationsHeading}</h2>
          {destinationsIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{destinationsIntro}</p>}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinationClusters.map((cluster) => (
              <div key={cluster.title} className="rounded-2xl border border-hairline bg-white p-5">
                <p className="font-semibold text-ink">{cluster.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{cluster.body}</p>
                {cluster.href && cluster.linkLabel && (
                  <Link href={cluster.href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass">
                    {cluster.linkLabel}
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 #6 — Families and Groups (no H3s) */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{familyHeading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{familyParagraph}</p>
          </div>
        </div>
      </section>

      {/* H2 #7 — Choosing the Right Vehicle (H3 x4) */}
      <HomeSectionCards eyebrow="The Fleet" heading={vehiclesHeading} intro={vehiclesIntro} columns={4} cards={vehicleCards} />

      {/* H2 #8 — How to Book (H3 x4) */}
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{bookingHeading}</h2>
        {bookingIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{bookingIntro}</p>}
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => (
            <li key={step.title} className="rounded-xl border border-hairline bg-sand/40 p-4">
              <h3 className="font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* H2 #9 — FAQ (H3 questions) */}
      <HomeFAQSection faqs={faqs} heading={faqHeading} />

      {/* H2 #10 — Final CTA (real H2: 9 numbered content H2s + this CTA = 10, within the brief's own 8-10 target) */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{finalCtaHeading}</h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/70">{finalCtaText}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
            >
              {primaryCtaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            {secondaryCtaHref && secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
