import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Clock,
  FileText,
  Flag,
  Luggage,
  ShieldCheck,
  SignpostBig,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * "Border Departure Planner" — the dedicated visual identity for Saudi
 * City -> Border route pages. These are NOT international crossings: the
 * service ends at the Saudi-side border facility, with onward travel into
 * the neighbouring country arranged separately. That is the one fact every
 * other route shell (GccRouteView, GccToSaudiRouteView) doesn't need to
 * make visually unmissable — so this shell's signature feature is a
 * "What This Transfer Covers" scope panel placed right under the hero,
 * before any other content, so a traveler can't mistake this for a
 * through-service into the neighbouring country. RTL-safe (logical
 * ps-/pe-, rtl:rotate-180 arrows), reused as-is for Arabic pages.
 */

export interface CityToBorderFact {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface CityToBorderStep {
  label: string;
  detail?: string;
}

export interface CityToBorderScenario {
  title: string;
  description: string;
}

export interface CityToBorderLinkItem {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface CityToBorderRouteViewProps {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  originLabel: string;
  borderLabel: string;
  facts: CityToBorderFact[];
  mapOrigin?: string;
  mapDestination?: string;
  mapNote?: string;

  scopeHeading: string;
  coversLabel: string;
  covers: string[];
  doesNotCoverLabel: string;
  doesNotCover: string[];
  scopeNote?: string;

  roadJourneyHeading: string;
  roadJourneyParagraphs: string[];
  timelineHeading: string;
  timeline: CityToBorderStep[];

  departureHeading: string;
  departureIntro: string;
  departurePoints: string[];

  handoverHeading: string;
  handoverParagraphs: string[];
  companyControlsLabel: string;
  companyControls: string[];
  authorityControlsLabel: string;
  authorityControls: string[];
  borderPageHref?: string;
  borderPageLabel?: string;

  documentsHeading: string;
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;

  vehicleHeading: string;
  vehicleText: string;

  whoSuitsHeading: string;
  whoSuits: CityToBorderScenario[];

  comparisonHeading?: string;
  comparisonText?: string;

  checklistHeading: string;
  checklist: string[];

  bookingHeading: string;
  bookingSteps: CityToBorderStep[];

  reverseHeading?: string;
  reverseText?: string;
  reverseLinkLabel?: string;
  reverseHref?: string;

  relatedRoutesHeading?: string;
  relatedRoutes: CityToBorderLinkItem[];

  hubLinksHeading?: string;
  hubLinks: CityToBorderLinkItem[];

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
}

export function CityToBorderRouteView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  originLabel,
  borderLabel,
  facts,
  mapOrigin,
  mapDestination,
  mapNote,
  scopeHeading,
  coversLabel,
  covers,
  doesNotCoverLabel,
  doesNotCover,
  scopeNote,
  roadJourneyHeading,
  roadJourneyParagraphs,
  timelineHeading,
  timeline,
  departureHeading,
  departureIntro,
  departurePoints,
  handoverHeading,
  handoverParagraphs,
  companyControlsLabel,
  companyControls,
  authorityControlsLabel,
  authorityControls,
  borderPageHref,
  borderPageLabel,
  documentsHeading,
  documentsIntro,
  documentsItems,
  documentsDisclaimer,
  vehicleHeading,
  vehicleText,
  whoSuitsHeading,
  whoSuits,
  comparisonHeading,
  comparisonText,
  checklistHeading,
  checklist,
  bookingHeading,
  bookingSteps,
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
}: CityToBorderRouteViewProps) {
  return (
    <>
      {/* Hero — city -> border badge. */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-midnight/70" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/80 to-midnight/50"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <Building2 className="size-3.5" /> {originLabel}
            </span>
            <ArrowRight className="size-4 text-brass rtl:rotate-180" />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <SignpostBig className="size-3.5" /> {borderLabel}
            </span>
          </div>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85">{dek}</p>
        </div>
      </section>

      {/* Journey snapshot facts. */}
      <section className="border-b border-hairline bg-white py-8">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {facts.map((f) => (
              <span
                key={f.label}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium ${
                  f.emphasis ? "border-brass/40 bg-brass/10 text-ink" : "border-hairline bg-sand/30 text-ink"
                }`}
              >
                <span className="text-ink-muted">{f.label}:</span> {f.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service scope — the signature panel, placed before anything else. */}
      <section className="bg-brass/[0.07] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{scopeHeading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brass/30 bg-white p-5">
              <div className="flex items-center gap-2.5">
                <Check className="size-4 text-brass" />
                <p className="text-sm font-semibold text-ink">{coversLabel}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {covers.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-hairline bg-white p-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-ink-muted" />
                <p className="text-sm font-semibold text-ink">{doesNotCoverLabel}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {doesNotCover.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {scopeNote && <p className="mt-4 max-w-2xl text-xs italic leading-relaxed text-ink-muted">{scopeNote}</p>}
        </div>
      </section>

      {/* Road journey + timeline. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{roadJourneyHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {roadJourneyParagraphs.map((p, i) => (
              <p key={i}>{inlineLinks(p)}</p>
            ))}
          </div>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-muted">{timelineHeading}</h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((step, i) => (
              <li key={step.label} className="flex gap-3 rounded-xl border border-hairline bg-sand/30 p-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-midnight text-xs font-bold text-brass">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{step.label}</span>
                  {step.detail && <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">{step.detail}</span>}
                </span>
              </li>
            ))}
          </ol>
          {mapOrigin && mapDestination && (
            <div className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-hairline">
                <iframe
                  title={`${originLabel} to ${borderLabel} route map`}
                  src={`https://maps.google.com/maps?saddr=${encodeURIComponent(mapOrigin)}&daddr=${encodeURIComponent(mapDestination)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full sm:h-96"
                />
              </div>
              {mapNote && <p className="mt-2 text-xs text-ink-muted">{mapNote}</p>}
            </div>
          )}
        </div>
      </section>

      {/* When should I leave? */}
      <section className="bg-sand/40 py-14 sm:py-20">
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

      {/* At the border / handover. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
              <Flag className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{handoverHeading}</h2>
              <div className="mt-3 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {handoverParagraphs.map((p, i) => (
                  <p key={i}>{inlineLinks(p)}</p>
                ))}
              </div>
              {borderPageHref && borderPageLabel && (
                <Link
                  href={borderPageHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                >
                  {borderPageLabel}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              )}
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-sand/30 p-5">
              <p className="text-sm font-semibold text-ink">{companyControlsLabel}</p>
              <ul className="mt-3 space-y-2">
                {companyControls.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-hairline bg-midnight/[0.03] p-5">
              <p className="text-sm font-semibold text-ink">{authorityControlsLabel}</p>
              <ul className="mt-3 space-y-2">
                {authorityControls.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-midnight/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document preparation. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight text-brass">
                <FileText className="size-4" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-ink">{documentsHeading}</h2>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">{documentsIntro}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {documentsItems.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic leading-relaxed text-ink-muted">{documentsDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* Vehicle/luggage + who this suits. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
            <aside className="rounded-2xl border border-hairline bg-sand/30 p-5">
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

      {/* Comparison note — only rendered when genuinely useful. */}
      {comparisonHeading && comparisonText && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{comparisonHeading}</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{comparisonText}</p>
          </div>
        </section>
      )}

      {/* Checklist + booking. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
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
          </div>
        </div>
      </section>

      {/* Reverse route + related routes + hub links + booking form. */}
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
