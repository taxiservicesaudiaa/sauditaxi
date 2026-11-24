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
import { AbhaCityView } from "@/components/city-transfer/AbhaCityView";
import { ABHA_CITY, ABHA_CITY_FAQS, ABHA_CITY_REVIEWED, CITY_PHOTOS } from "@/data/abha-city-page";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { JazanCityView } from "@/components/city-transfer/JazanCityView";
import { JAZAN, JAZAN_FAQS, JAZAN_PHOTOS, JAZAN_REVIEWED } from "@/data/jazan-city-page";
import { JeddahCityView } from "@/components/city-transfer/JeddahCityView";
import { JEDDAH, JEDDAH_FAQS, JEDDAH_PHOTOS, JEDDAH_REVIEWED } from "@/data/jeddah-city-page";

/** Destination geo meta for cities with a dedicated, fact-checked layout. */
const CITY_GEO: Record<string, { region: string; placename: string; lat: number; lon: number; image: string }> = {
  abha: { region: "SA-14", placename: "Abha, Asir Region, Saudi Arabia", lat: 18.2164, lon: 42.5053, image: CITY_PHOTOS.greenMountain.src },
  jazan: { region: "SA-09", placename: "Jazan, Jazan Province, Saudi Arabia", lat: 16.8892, lon: 42.5611, image: JAZAN_PHOTOS.sunset.src },
};

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
  const meta = buildMetadata({
    title: city.metaTitle ?? `Private Transfers in ${city.name} | Saudi Private Transfers`,
    description:
      city.metaDescription ??
      `Private transportation in ${city.name} — airport pickup, hotel transfers, and intercity rides, priced before you travel.`,
    path,
    ...(CITY_GEO[city.slug] ? { image: CITY_GEO[city.slug].image } : city.slug === "jeddah" ? { image: JEDDAH_PHOTOS.waterfront.src } : {}),
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
  const g = CITY_GEO[city.slug];
  if (!g) return meta;
  return {
    ...meta,
    other: {
      "geo.region": g.region,
      "geo.placename": g.placename,
      "geo.position": `${g.lat};${g.lon}`,
      ICBM: `${g.lat}, ${g.lon}`,
    },
  };
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

  // Abha has its own highlands layout (data/abha-city-page.ts).
  if (city.slug === "abha") {
    const pageUrl = absoluteUrl(path);
    const hero = CITY_PHOTOS.greenMountain;
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: city.metaTitle,
              description: city.metaDescription,
              inLanguage: "en",
              isPartOf: { "@id": `${siteConfig.url}/#website` },
              about: { "@id": `${pageUrl}#service` },
              dateModified: ABHA_CITY_REVIEWED,
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(hero.src),
                caption: hero.alt,
                creditText: hero.credit.author,
                creator: { "@type": "Person", name: hero.credit.author },
                ...(hero.credit.licenceUrl ? { license: hero.credit.licenceUrl } : {}),
                acquireLicensePage: hero.credit.source,
              },
            },
            {
              ...serviceSchema({
                name: "Private Transfers in Abha",
                description: ABHA_CITY.hero.intro.join(" "),
                path,
                serviceType: "Private Transfer",
                dateModified: ABHA_CITY_REVIEWED,
              }),
              "@id": `${pageUrl}#service`,
              areaServed: {
                "@type": "City",
                name: "Abha",
                containedInPlace: { "@type": "AdministrativeArea", name: "Asir Region" },
                geo: { "@type": "GeoCoordinates", latitude: 18.2164, longitude: 42.5053 },
              },
            },
            faqSchema(ABHA_CITY_FAQS),
          ]}
        />
        <AbhaCityView faqs={ABHA_CITY_FAQS} crumbs={crumbs} />
      </>
    );
  }

  // Jeddah has its own "gateway city" layout (data/jeddah-city-page.ts).
  if (city.slug === "jeddah") {
    const pageUrl = absoluteUrl(path);
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: city.metaTitle,
              description: city.metaDescription,
              inLanguage: "en",
              isPartOf: { "@id": `${siteConfig.url}/#website` },
              about: { "@id": `${pageUrl}#service` },
              dateModified: JEDDAH_REVIEWED,
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(JEDDAH_PHOTOS.waterfront.src),
                caption: JEDDAH_PHOTOS.waterfront.alt,
                creditText: JEDDAH_PHOTOS.waterfront.credit.author,
                license: "https://creativecommons.org/licenses/by-sa/4.0/",
              },
            },
            {
              ...serviceSchema({
                name: "Private Transfers in Jeddah",
                description: JEDDAH.hero.intro,
                path,
                serviceType: "Private Transfer",
                dateModified: JEDDAH_REVIEWED,
              }),
              "@id": `${pageUrl}#service`,
              areaServed: {
                "@type": "City",
                name: "Jeddah",
                containedInPlace: { "@type": "AdministrativeArea", name: "Makkah Province" },
              },
            },
            faqSchema(JEDDAH_FAQS),
          ]}
        />
        <JeddahCityView faqs={JEDDAH_FAQS} crumbs={crumbs} />
      </>
    );
  }

  // Jazan has its own coastal layout (data/jazan-city-page.ts).
  if (city.slug === "jazan") {
    const pageUrl = absoluteUrl(path);
    const hero = JAZAN_PHOTOS.sunset;
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: city.metaTitle,
              description: city.metaDescription,
              inLanguage: "en",
              isPartOf: { "@id": `${siteConfig.url}/#website` },
              about: { "@id": `${pageUrl}#service` },
              dateModified: JAZAN_REVIEWED,
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(hero.src),
                caption: hero.alt,
                creditText: hero.credit.author,
                creator: { "@type": "Person", name: hero.credit.author },
                ...(hero.credit.licenceUrl ? { license: hero.credit.licenceUrl } : {}),
                acquireLicensePage: hero.credit.source,
              },
            },
            {
              ...serviceSchema({
                name: "Private Transfers in Jazan",
                description: JAZAN.hero.intro.join(" "),
                path,
                serviceType: "Private Transfer",
                dateModified: JAZAN_REVIEWED,
              }),
              "@id": `${pageUrl}#service`,
              areaServed: {
                "@type": "City",
                name: "Jazan",
                alternateName: "Jizan",
                containedInPlace: { "@type": "AdministrativeArea", name: "Jazan Province" },
                geo: { "@type": "GeoCoordinates", latitude: 16.8892, longitude: 42.5611 },
              },
            },
            faqSchema(JAZAN_FAQS),
          ]}
        />
        <JazanCityView faqs={JAZAN_FAQS} crumbs={crumbs} />
      </>
    );
  }

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
    finalCtaText: "Share your pickup, destination, date, and passenger details — we reply with a quotation for you to confirm before you travel.",
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
