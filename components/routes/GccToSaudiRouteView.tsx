import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  FileText,
  Flag,
  Luggage,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * "Cross-Border Arrival Journey" — the dedicated visual identity for GCC ->
 * Saudi road-transfer route pages. Deliberately NOT a mirror of
 * GccRouteView (the Saudi -> GCC identity): the border section sits early
 * (right after GCC-side departure prep, before the Saudi-side driving
 * narrative) rather than late, reflecting that for this direction the
 * crossing genuinely happens near the start of the trip, not as its final
 * stage. The "before / after the border" split panel and the horizontal
 * stepper timeline are visually distinct from the reverse-direction shell.
 * RTL-safe (logical ps-/pe-, rtl:rotate-180 arrows), reused as-is for
 * Arabic pages.
 */

export interface GccToSaudiFact {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface GccToSaudiStep {
  label: string;
  detail?: string;
}

export interface GccToSaudiScenario {
  title: string;
  description: string;
}

export interface GccToSaudiComparisonRow {
  criterion: string;
  road: string;
  flight: string;
}

export interface GccToSaudiLinkItem {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface GccToSaudiRouteViewProps {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  originLabel: string;
  destinationLabel: string;
  facts: GccToSaudiFact[];
  mapOrigin?: string;
  mapDestination?: string;
  mapNote?: string;

  timelineHeading: string;
  timeline: GccToSaudiStep[];

  departureHeading: string;
  departureParagraphs: string[];

  borderHeading: string;
  beforeBorderLabel: string;
  beforeBorderText: string;
  afterBorderLabel: string;
  afterBorderText: string;
  borderParagraphs: string[];
  borderPageHref?: string;
  borderPageLabel?: string;

  responsibilityHeading: string;
  responsibilityIntro?: string;
  companyControlsLabel: string;
  companyControls: string[];
  authorityControlsLabel: string;
  authorityControls: string[];

  documentsHeading: string;
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;

  saudiJourneyHeading: string;
  saudiJourneyParagraphs: string[];

  destinationHeading: string;
  destinationParagraphs: string[];

  vehicleHeading: string;
  vehicleText: string;

  whoSuitsHeading: string;
  whoSuits: GccToSaudiScenario[];

  comparisonHeading?: string;
  comparisonIntro?: string;
  comparison?: GccToSaudiComparisonRow[];

  checklistHeading: string;
  checklist: string[];

  bookingHeading: string;
  bookingSteps: GccToSaudiStep[];

  reverseHeading?: string;
  reverseText?: string;
  reverseLinkLabel?: string;
  reverseHref?: string;

  relatedRoutesHeading?: string;
  relatedRoutes: GccToSaudiLinkItem[];

  hubLinksHeading?: string;
  hubLinks: GccToSaudiLinkItem[];

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

export function GccToSaudiRouteView({
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
  timelineHeading,
  timeline,
  departureHeading,
  departureParagraphs,
  borderHeading,
  beforeBorderLabel,
  beforeBorderText,
  afterBorderLabel,
  afterBorderText,
  borderParagraphs,
  borderPageHref,
  borderPageLabel,
  responsibilityHeading,
  responsibilityIntro,
  companyControlsLabel,
  companyControls,
  authorityControlsLabel,
  authorityControls,
  documentsHeading,
  documentsIntro,
  documentsItems,
  documentsDisclaimer,
  saudiJourneyHeading,
  saudiJourneyParagraphs,
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
}: GccToSaudiRouteViewProps) {
  return (
    <>
      {/* Hero — GCC departure -> Saudi arrival badge. */}
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
              <Building2 className="size-3.5" /> {destinationLabel}, Saudi Arabia
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

      {/* Horizontal stepper timeline — visually distinct from GccRouteView's card grid. */}
      <section className="bg-sand/40 py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{timelineHeading}</h2>
          <ol className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {timeline.map((step, i) => (
              <li key={step.label} className="flex min-w-[200px] flex-1 items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-midnight text-xs font-bold text-brass">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && <span className="mt-1 h-px w-full grow bg-brass/30 sm:hidden" aria-hidden="true" />}
                </div>
                <div className="border-b-2 border-brass/30 pb-3 sm:border-b-0">
                  <span className="block text-sm font-semibold text-ink">{step.label}</span>
                  {step.detail && <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">{step.detail}</span>}
                </div>
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

      {/* GCC-side departure prep — comes before the border, unlike the reverse shell. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
              <Flag className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{departureHeading}</h2>
              <div className="mt-3 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {departureParagraphs.map((p, i) => (
                  <p key={i}>{inlineLinks(p)}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Border crossing — before/after split panel, the signature visual. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{borderHeading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{beforeBorderLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{beforeBorderText}</p>
            </div>
            <div className="rounded-2xl border border-brass/30 bg-brass/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{afterBorderLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{afterBorderText}</p>
            </div>
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
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
      </section>

      {/* Company vs government responsibility. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{responsibilityHeading}</h2>
          {responsibilityIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{responsibilityIntro}</p>}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-sand/30 p-5">
              <div className="flex items-center gap-2.5">
                <Building2 className="size-4 text-brass" />
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

      {/* Document preparation advisory. */}
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

      {/* Saudi-side road journey — a separate section from GCC departure. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{saudiJourneyHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {saudiJourneyParagraphs.map((p, i) => (
              <p key={i}>{inlineLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi destination arrival. */}
      <section className="bg-sand/40 py-14 sm:py-20">
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

      {/* Road vs flying — only rendered when genuinely useful. */}
      {comparison && comparison.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {comparisonHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{comparisonHeading}</h2>}
            {comparisonIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{comparisonIntro}</p>}
            <div className="mt-6 overflow-x-auto rounded-2xl border border-hairline">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-white text-start">
                    <th className="p-4 text-start font-semibold text-ink">&nbsp;</th>
                    <th className="p-4 text-start font-semibold text-ink">Private road transfer</th>
                    <th className="p-4 text-start font-semibold text-ink">Flying</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criterion} className="border-t border-hairline bg-white">
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

      {/* Checklist + booking process. */}
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
