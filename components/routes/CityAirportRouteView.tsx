import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Check, Clock, Luggage, MapPin, Plane } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";
import { RouteStatusNotice, type RouteStatusNoticeContent } from "@/components/routes/RouteStatusNotice";

/**
 * "Airport Departure Planner" — the dedicated visual identity for Saudi
 * domestic City -> Airport commercial route pages. Deliberately distinct
 * from both RouteJourneyView (city-to-city) and AirportRouteView (the
 * arrival-focused Airport -> City identity): this one leads with departure
 * planning ("When should I leave?") directly under the hero, before the
 * generic facts strip, because that's the one question a departing
 * traveler actually opens the page to answer — the visual entry point
 * itself signals a different intent from the arrival-timeline-first
 * Airport -> City pages. RTL-safe (logical ps-/pe-, rtl:rotate-180 arrows),
 * reused as-is for the Arabic pages.
 */

export interface CityAirportFact {
  label: string;
  value: string;
}

export interface CityAirportStep {
  label: string;
  detail?: string;
}

export interface CityAirportScenario {
  title: string;
  description: string;
}

export interface CityAirportComparisonRow {
  mode: string;
  note: string;
}

export interface CityAirportLinkItem {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface CityAirportRouteViewProps {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  originLabel: string;
  airportLabel: string;
  facts: CityAirportFact[];
  departureHeading: string;
  departureIntro: string;
  departurePoints: string[];
  journeyTimeHeading: string;
  pureDrivingLabel: string;
  pureDrivingValue: string;
  totalJourneyNote: string;
  pickupHeading: string;
  pickupParagraphs: string[];
  roadJourneyHeading: string;
  roadJourneyParagraphs: string[];
  dropoffHeading: string;
  dropoffParagraphs: string[];
  vehicleHeading: string;
  vehicleText: string;
  whoSuitsHeading: string;
  whoSuits: CityAirportScenario[];
  delayHeading: string;
  delayIntro: string;
  delayFactors: string[];
  comparisonHeading?: string;
  comparisonIntro?: string;
  comparison?: CityAirportComparisonRow[];
  bookingHeading: string;
  bookingSteps: CityAirportStep[];
  checklistHeading: string;
  checklist: string[];
  reverseHeading?: string;
  reverseText?: string;
  reverseLinkLabel?: string;
  reverseHref?: string;
  relatedRoutesHeading?: string;
  relatedRoutes: CityAirportLinkItem[];
  hubLinksHeading?: string;
  hubLinks: CityAirportLinkItem[];
  faqsHeading: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  formHeading: string;
  formSubheading: string;
  formSlot: ReactNode;
  crumbs: Crumb[];
  /** Optional dated status notice under the hero; omitted routes render unchanged. */
  notice?: RouteStatusNoticeContent;
}

export function CityAirportRouteView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  originLabel,
  airportLabel,
  facts,
  departureHeading,
  departureIntro,
  departurePoints,
  journeyTimeHeading,
  pureDrivingLabel,
  pureDrivingValue,
  totalJourneyNote,
  pickupHeading,
  pickupParagraphs,
  roadJourneyHeading,
  roadJourneyParagraphs,
  dropoffHeading,
  dropoffParagraphs,
  vehicleHeading,
  vehicleText,
  whoSuitsHeading,
  whoSuits,
  delayHeading,
  delayIntro,
  delayFactors,
  comparisonHeading,
  comparisonIntro,
  comparison,
  bookingHeading,
  bookingSteps,
  checklistHeading,
  checklist,
  reverseHeading,
  reverseText,
  reverseLinkLabel,
  reverseHref,
  relatedRoutesHeading,
  relatedRoutes,
  hubLinksHeading,
  hubLinks,
  faqsHeading,
  faqs,
  ctaHeading,
  ctaText,
  ctaLabel,
  ctaHref,
  formHeading,
  formSubheading,
  formSlot,
  crumbs,
  notice,
}: CityAirportRouteViewProps) {
  return (
    <>
      {/* Hero — city -> airport badge (reversed from AirportRouteView). */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-midnight/65" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/75 to-midnight/45"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <div className="mt-4 flex items-center gap-3 text-sm font-medium text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <MapPin className="size-3.5" /> {originLabel}
            </span>
            <ArrowRight className="size-4 text-brass rtl:rotate-180" />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <Plane className="size-3.5" /> {airportLabel}
            </span>
          </div>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85">{dek}</p>
        </div>
      </section>

      {notice && <RouteStatusNotice notice={notice} />}

      {/* "When should I leave?" — the signature departure-planning panel, placed
          directly under the hero rather than buried mid-page. */}
      <section className="border-b border-hairline bg-brass/[0.07] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
              <Clock className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{departureHeading}</h2>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{departureIntro}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {departurePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey snapshot facts. */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {facts.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-sand/30 px-4 py-2 text-sm font-medium text-ink"
              >
                <span className="text-ink-muted">{f.label}:</span> {f.value}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-sand/30 px-4 py-2 text-sm font-medium text-ink">
              <span className="text-ink-muted">{pureDrivingLabel}:</span> <span className="text-brass">{pureDrivingValue}</span>
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-ink-muted">{journeyTimeHeading}: {totalJourneyNote}</p>
        </div>
      </section>

      {/* Pickup planning + road journey. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{pickupHeading}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {pickupParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{roadJourneyHeading}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {roadJourneyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport drop-off. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{dropoffHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {dropoffParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle/luggage + who this suits. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
            <aside className="rounded-2xl border border-hairline bg-white p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-midnight text-brass">
                <Luggage className="size-4" />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">{vehicleHeading}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{vehicleText}</p>
            </aside>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{whoSuitsHeading}</h2>
              <dl className="mt-5 space-y-4">
                {whoSuits.map((item) => (
                  <div key={item.title} className="border-s-4 border-brass/40 ps-4">
                    <dt className="font-semibold text-ink">{item.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* What can delay the journey — distinct cautionary panel, not a promise. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline bg-sand/30 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight text-brass">
                <AlertTriangle className="size-4" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-ink">{delayHeading}</h2>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">{delayIntro}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {delayFactors.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison — only rendered when genuinely useful. */}
      {comparison && comparison.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {comparisonHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{comparisonHeading}</h2>}
            {comparisonIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{comparisonIntro}</p>}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {comparison.map((row) => (
                <div key={row.mode} className="rounded-xl border border-hairline bg-white p-5">
                  <p className="text-sm font-semibold text-ink">{row.mode}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking process + practical checklist. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{bookingHeading}</h2>
              <ol className="mt-6 space-y-4">
                {bookingSteps.map((step, i) => (
                  <li key={step.label} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-midnight text-xs font-bold text-brass">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{step.label}</span>
                      {step.detail && <span className="block text-sm leading-relaxed text-ink-soft">{step.detail}</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{checklistHeading}</h2>
              <ul className="mt-6 space-y-2.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse route + booking form. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {reverseHref && reverseText && (
                <div className="rounded-2xl border border-hairline bg-white p-6">
                  <h2 className="text-lg font-bold text-ink">{reverseHeading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{reverseText}</p>
                  {reverseLinkLabel && (
                    <Link
                      href={reverseHref}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                    >
                      {reverseLinkLabel}
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </Link>
                  )}
                </div>
              )}

              {relatedRoutes.length > 0 && (
                <div className="mt-8">
                  {relatedRoutesHeading && <h2 className="text-lg font-bold text-ink">{relatedRoutesHeading}</h2>}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {relatedRoutes.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="group flex flex-col justify-between rounded-xl border border-hairline bg-white p-4 transition-colors hover:border-brass"
                      >
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                          {r.label}
                          <ArrowRight className="size-3.5 shrink-0 text-brass rtl:rotate-180" />
                        </span>
                        {(r.distance || r.duration) && (
                          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                            {[r.distance, r.duration].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {hubLinks.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {hubLinksHeading && <p className="text-sm font-semibold text-ink">{hubLinksHeading}</p>}
                  <div className="flex flex-wrap gap-2.5">
                    {hubLinks.map((h) => (
                      <Link
                        key={h.href}
                        href={h.href}
                        className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                      >
                        {h.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-brass/30 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-ink">{formHeading}</h2>
                <p className="mt-1 text-sm text-ink-soft">{formSubheading}</p>
                <div className="mt-4">{formSlot}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading={faqsHeading} background="white" />

      <section className="border-t border-hairline bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-hairline bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-ink">{ctaHeading}</h2>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-soft">{ctaText}</p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft"
            >
              {ctaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
