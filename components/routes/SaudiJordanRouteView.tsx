import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Compass,
  FileText,
  Flag,
  Landmark,
  Luggage,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * "Saudi-Jordan International Journey" — the dedicated visual identity for
 * the Saudi <-> Jordan long-haul route pages (Tabuk/AlUla/Madinah <->
 * Amman, both directions). Distinct from every GCC-focused shell
 * (GccRouteView, GccToSaudiRouteView, CityToBorderRouteView,
 * BorderToCityRouteView): these are full point-to-point international
 * road journeys crossing a single land border (Al Haditha/Al Omari), often
 * long enough that the honest comparison is against flying rather than
 * against a same-day alternative. The optional heritageLink section (used
 * only by the AlUla <-> Amman pair, Petra/Hegra) and the optional overnight
 * planning content are what let routes genuinely diverge in structure
 * rather than following one fixed template. RTL-safe (logical ps-/pe-,
 * rtl:rotate-180 arrows), reused as-is for Arabic pages.
 */

export interface SaudiJordanFact {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface SaudiJordanStep {
  label: string;
  detail?: string;
}

export interface SaudiJordanScenario {
  title: string;
  description: string;
}

export interface SaudiJordanComparisonRow {
  criterion: string;
  road: string;
  flight: string;
}

export interface SaudiJordanLinkItem {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface SaudiJordanRouteViewProps {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  originLabel: string;
  destinationLabel: string;
  facts: SaudiJordanFact[];
  mapOrigin?: string;
  mapDestination?: string;
  mapNote?: string;

  journeyHeading: string;
  journeyParagraphs: string[];
  timelineHeading: string;
  timeline: SaudiJordanStep[];

  heritageLinkHeading?: string;
  heritageLinkParagraphs?: string[];

  borderHeading: string;
  borderParagraphs: string[];
  responsibilityIntro?: string;
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

  planningHeading: string;
  planningIntro: string;
  planningPoints: string[];

  destinationHeading: string;
  destinationParagraphs: string[];

  vehicleHeading: string;
  vehicleText: string;

  whoSuitsHeading: string;
  whoSuits: SaudiJordanScenario[];

  comparisonHeading?: string;
  comparisonIntro?: string;
  comparison?: SaudiJordanComparisonRow[];

  checklistHeading: string;
  checklist: string[];

  bookingHeading: string;
  bookingSteps: SaudiJordanStep[];

  reverseHeading?: string;
  reverseText?: string;
  reverseLinkLabel?: string;
  reverseHref?: string;

  relatedRoutesHeading?: string;
  relatedRoutes: SaudiJordanLinkItem[];

  hubLinksHeading?: string;
  hubLinks: SaudiJordanLinkItem[];

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

export function SaudiJordanRouteView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  originLabel,
  destinationLabel,
  facts,
  mapOrigin,
  mapDestination,
  mapNote,
  journeyHeading,
  journeyParagraphs,
  timelineHeading,
  timeline,
  heritageLinkHeading,
  heritageLinkParagraphs,
  borderHeading,
  borderParagraphs,
  responsibilityIntro,
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
  planningHeading,
  planningIntro,
  planningPoints,
  destinationHeading,
  destinationParagraphs,
  vehicleHeading,
  vehicleText,
  whoSuitsHeading,
  whoSuits,
  comparisonHeading,
  comparisonIntro,
  comparison,
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
}: SaudiJordanRouteViewProps) {
  return (
    <>
      {/* Hero — Saudi <-> Jordan badge. */}
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
              <Compass className="size-3.5" /> {originLabel}
            </span>
            <ArrowRight className="size-4 text-brass rtl:rotate-180" />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5">
              <Landmark className="size-3.5" /> {destinationLabel}
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

      {/* Journey story / road journey + timeline. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{journeyHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {journeyParagraphs.map((p, i) => (
              <p key={i}>{inlineLinks(p)}</p>
            ))}
          </div>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-muted">{timelineHeading}</h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step, i) => (
              <li key={step.label} className="flex gap-3 rounded-xl border border-hairline bg-white p-4">
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
                  title={`${originLabel} to ${destinationLabel} route map`}
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

      {/* Heritage link — only rendered for the AlUla <-> Amman pair. */}
      {heritageLinkHeading && heritageLinkParagraphs && heritageLinkParagraphs.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-brass/30 bg-brass/[0.06] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-ink">{heritageLinkHeading}</h2>
              <div className="mt-2 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-soft">
                {heritageLinkParagraphs.map((p, i) => (
                  <p key={i}>{inlineLinks(p)}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Border crossing. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
              <Flag className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{borderHeading}</h2>
              <div className="mt-3 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {borderParagraphs.map((p, i) => (
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
        </div>
      </section>

      {/* Company vs authority responsibility. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {responsibilityIntro && <p className="max-w-2xl text-[15px] text-ink-soft">{responsibilityIntro}</p>}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-5">
              <div className="flex items-center gap-2.5">
                <Check className="size-4 text-brass" />
                <p className="text-sm font-semibold text-ink">{companyControlsLabel}</p>
              </div>
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
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-midnight" />
                <p className="text-sm font-semibold text-ink">{authorityControlsLabel}</p>
              </div>
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
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline bg-sand/30 p-6 sm:p-8">
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

      {/* When should I leave / planning. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
              <Clock className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{planningHeading}</h2>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{planningIntro}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {planningPoints.map((p) => (
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

      {/* Destination arrival. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{destinationHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {destinationParagraphs.map((p, i) => (
              <p key={i}>{inlineLinks(p)}</p>
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

      {/* Road vs flying — only rendered when genuinely useful. */}
      {comparison && comparison.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {comparisonHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{comparisonHeading}</h2>}
            {comparisonIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{comparisonIntro}</p>}
            <div className="mt-6 overflow-x-auto rounded-2xl border border-hairline">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-sand/40 text-start">
                    <th className="p-4 text-start font-semibold text-ink">&nbsp;</th>
                    <th className="p-4 text-start font-semibold text-ink">Private road transfer</th>
                    <th className="p-4 text-start font-semibold text-ink">Flying</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criterion} className="border-t border-hairline">
                      <td className="p-4 font-medium text-ink">{row.criterion}</td>
                      <td className="p-4 text-ink-soft">{row.road}</td>
                      <td className="p-4 text-ink-soft">{row.flight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Checklist + booking. */}
      <section className="bg-sand/40 py-14 sm:py-20">
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
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {reverseHref && reverseText && (
                <div className="rounded-2xl border border-hairline bg-sand/30 p-6">
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
