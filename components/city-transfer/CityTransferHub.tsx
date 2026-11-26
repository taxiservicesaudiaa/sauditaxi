import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

export interface CitySectionCardsBlock {
  kind: "cards";
  intro?: string;
  columns?: 2 | 3 | 4;
  cards: HomeSectionCard[];
}
export interface CitySectionProseBlock {
  kind: "prose";
  paragraphs: string[];
}
export interface CitySectionBulletsBlock {
  kind: "bullets";
  intro?: string;
  items: string[];
}
export interface CitySectionLinksBlock {
  kind: "links";
  intro?: string;
  links: { label: string; href: string }[];
}
export type CitySectionBlock = CitySectionCardsBlock | CitySectionProseBlock | CitySectionBulletsBlock | CitySectionLinksBlock;

export interface CitySection {
  heading: string;
  block: CitySectionBlock;
}

export interface CityTransferHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: { label: string; value: string }[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;

  introHeading: string;
  introParagraphs: string[];

  /** The flexible, per-city body — sections vary in count and kind by city. No two cities need share the same shape. */
  sections: CitySection[];

  faqHeading: string;
  faqs: Faq[];

  finalCtaHeading: string;
  finalCtaText: string;
}

function SectionBody({ block }: { block: CitySectionBlock }) {
  if (block.kind === "prose") {
    return (
      <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
        {block.paragraphs.map((p, i) => (
          <p key={i}>{inlineLinks(p)}</p>
        ))}
      </div>
    );
  }
  if (block.kind === "bullets") {
    return (
      <>
        {block.intro && <p className="mt-3 max-w-2xl text-[15px] text-ink-soft">{block.intro}</p>}
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
  if (block.kind === "links") {
    return (
      <>
        {block.intro && <p className="mt-3 max-w-2xl text-[15px] text-ink-soft">{block.intro}</p>}
        <div className="mt-5 flex flex-wrap gap-2">
          {block.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg border border-hairline bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </>
    );
  }
  return null;
}

/**
 * Dedicated view for the 19 individual /taxi-service/{city} pages — a new
 * sibling to CityHubView, not a replacement. CityHubView stays untouched
 * because it's also reused by the Arabic city pages (app/ar/[...slug]/
 * page.tsx) with a leaner prop set, so restructuring it here would risk
 * breaking those pages.
 *
 * Unlike the fixed-architecture hubs built for the service pages and
 * airport pages, this component intentionally has no fixed section list —
 * `sections` is an ordered array of heading + block, and each city's data
 * file entry decides which sections exist and in what order, per the
 * brief's explicit requirement that city pages must NOT share one
 * templated heading structure. A `cards` block renders its titles as H3s
 * (reusing the same generic HomeSectionCards used elsewhere on the site);
 * `prose`, `bullets`, and `links` blocks render no H3s.
 */
export function CityTransferHub({ content, crumbs }: { content: CityTransferHubContent; crumbs: Crumb[] }) {
  const {
    eyebrow,
    h1,
    dek,
    heroImage,
    heroAlt,
    facts,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    introHeading,
    introParagraphs,
    sections,
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

      {/* H2 #1 — the city-specific introduction (no H3s) */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{introHeading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {introParagraphs.map((p, i) => (
              <p key={i}>{inlineLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The flexible, per-city section list */}
      {sections.map((section, i) => {
        if (section.block.kind === "cards") {
          const cols = section.block.columns ?? (section.block.cards.length >= 4 ? 4 : section.block.cards.length === 3 ? 3 : 2);
          return (
            <HomeSectionCards
              key={section.heading}
              eyebrow=""
              heading={section.heading}
              intro={section.block.intro}
              tone={i % 2 === 0 ? "sand" : "white"}
              columns={cols}
              cards={section.block.cards}
            />
          );
        }
        return (
          <section key={section.heading} className={i % 2 === 0 ? "bg-sand/40 py-14 sm:py-20" : "bg-white py-14 sm:py-20"}>
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{section.heading}</h2>
              <SectionBody block={section.block} />
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <HomeFAQSection faqs={faqs} heading={faqHeading} />

      {/* Final CTA */}
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
