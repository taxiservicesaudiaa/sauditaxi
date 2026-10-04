import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityTransferHub, type CityTransferHubContent } from "@/components/city-transfer/CityTransferHub";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { cities, getCity } from "@/data/cities";
import { cityHero } from "@/lib/hero";
import { buildMetadata } from "@/lib/seo";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { breadcrumbSchema, faqSchema, serviceSchema, taxiServiceSchema } from "@/lib/schema";

// 2026 deep-content restructuring. Unlike the fixed-architecture hubs built
// for the service and airport pages, city pages intentionally do NOT share
// one section template — data/cities.ts (+ data/city-guides.ts) supplies a
// bespoke `sections` array per city (see CityTransferHub), so the count and
// kind of H2 sections genuinely varies by city rather than being forced
// into a uniform shape. Rendered via a new page-only CityTransferHub
// component so the shared CityHubView — still used by the Arabic city
// pages — is untouched.
type Params = { city: string };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const path = `/taxi-service/${city.slug}`;
  const arPath = getArPathForEnPathLight(path);
  return buildMetadata({
    title: city.metaTitle ?? `Private Transfers in ${city.name} | Saudi Private Transfers`,
    description:
      city.metaDescription ??
      `Private transportation in ${city.name} — airport pickup, hotel transfers, and intercity rides, priced before you travel.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  if (!city.sections || city.sections.length === 0 || !city.introParagraphs) notFound();

  const path = `/taxi-service/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "City Transfers", path: "/city-transfers" },
    { name: `${city.name} Taxi`, path },
  ];

  const faqs = (city.faqs ?? []).slice(0, 8);

  const content: CityTransferHubContent = {
    eyebrow: city.region,
    h1: `Private Transfers in ${city.name}`,
    dek: city.intro,
    heroImage: city.heroImage ?? cityHero(city.slug, city.name).src,
    heroAlt: city.heroAlt ?? cityHero(city.slug, city.name).alt,
    facts: [
      { label: "Region", value: city.region },
      ...(city.popularDestinations[0] ? [{ label: "Popular Corridor", value: `${city.name} ↔ ${city.popularDestinations[0]}` }] : []),
    ],
    primaryCtaLabel: `Get a ${city.name} Quote`,
    primaryCtaHref: `/get-quote?pickup=${encodeURIComponent(city.name)}`,
    secondaryCtaLabel: "City Transfers Overview",
    secondaryCtaHref: "/city-transfers",

    introHeading: `Private Transfers in ${city.name}`,
    introParagraphs: city.introParagraphs,

    sections: city.sections,

    faqHeading: `${city.name} Transfer Questions`,
    faqs,

    finalCtaHeading: `Book Your Private ${city.name} Transfer`,
    finalCtaText: "Share your pickup, destination, date, and passenger details — we reply with a fixed price before you travel.",
  };

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `Taxi Service in ${city.name}`,
            description: city.intro,
            path,
            serviceType: "City Taxi Service",
            areaServed: `${city.name}, Saudi Arabia`,
            dateModified: city.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />
      <CityTransferHub content={content} crumbs={crumbs} />
    </>
  );
}
