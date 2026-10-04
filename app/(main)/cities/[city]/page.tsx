import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelTransferHubView, type HotelTransferHubFactCard } from "@/components/city-hub/HotelTransferHubView";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { routes } from "@/data/routes";
import { hotelsForCity } from "@/data/hotels";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  serviceSchema,
  taxiServiceSchema,
  faqSchema,
} from "@/lib/schema";
import { citiesWithHotels, airportTransferName } from "@/lib/hotel-transfers";
import { cityAirportFacts } from "@/lib/city-hub-facts";

type Params = { city: string };

// dynamicParams intentionally left at its default (true). This page used to
// set it to false, but that was the one route-segment-config difference
// between this page (plus [city]/[route]/page.tsx) and every other dynamic
// route on the site (routes/[slug], blog/[slug], airport-transfer/[airport],
// taxi-service/[city], border-transfers/[border], distance/[slug] — none of
// which set dynamicParams and all of which serve reliably in production).
// With it false, a request for one of the 5 valid cities had no fallback if
// the Cloudflare/OpenNext edge ever failed to resolve the prebuilt static
// asset for that exact path — it would hard-404/503 with no recovery path,
// which matches the intermittent failures observed on these exact URLs
// against this exact config in production. The `if (!city) notFound()` guard
// below already rejects invalid slugs, so dropping this flag only adds an
// on-demand-render fallback for valid cities if a static asset is ever
// momentarily missing at the edge — it does not change behavior for invalid
// slugs, which still 404.
export function generateStaticParams() {
  return citiesWithHotels().map((city) => ({ city }));
}

// Hand-written per-city metadata for the 5 hotel-transfer hub pages. Distinct
// from both /taxi-service/{city} (general city taxi intent) and
// /airport-transfer/{airport} (general airport intent) — these pages are
// specifically about the hotel<->airport leg, so the metadata leads with that.
const HUB_META: Record<string, { title: string; description: string }> = {
  jeddah: {
    title: "Jeddah Hotel Transfers – Private Airport Pickup (JED)",
    description:
      "Book a private transfer between Jeddah's King Abdulaziz Airport and your hotel. Fixed price, meet-and-greet, and flight tracking for every stay.",
  },
  riyadh: {
    title: "Riyadh Hotel Transfers – Private Airport Pickup (RUH)",
    description:
      "Book a private transfer between King Khalid International Airport and your Riyadh hotel. Fixed price, meet-and-greet, flight tracking included.",
  },
  makkah: {
    title: "Makkah Hotel Transfers – Private Pickup from Jeddah Airport",
    description:
      "Book a private transfer from Jeddah Airport to your Makkah hotel near the Haram. Fixed price, meet-and-greet, and pilgrim-friendly vehicles.",
  },
  madinah: {
    title: "Madinah Hotel Transfers – Private Airport Pickup (MED)",
    description:
      "Book a private transfer between Prince Mohammad bin Abdulaziz Airport and your Madinah hotel near the Prophet's Mosque. Fixed price, 24/7.",
  },
  dammam: {
    title: "Dammam Hotel Transfers – Private Airport Pickup (DMM)",
    description:
      "Book a private transfer between King Fahd International Airport and your Dammam hotel. Fixed price, meet-and-greet, flight tracking included.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  const aName = airport ? airportTransferName(airport) : `${city.name} Airport`;
  const path = `/cities/${city.slug}`;
  const arPath = getArPathForEnPath(path);
  const hub = HUB_META[city.slug];
  return buildMetadata({
    title: hub?.title ?? `${city.name} Airport Transfers | Hotel Taxi from ${aName}`,
    description:
      hub?.description ??
      `Private ${city.name} airport transfers between ${aName} and every major 3, 4 & 5-star hotel. Fixed prices, meet & greet, flight tracking, and 24/7 booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function fallbackHubFaqs(cityName: string, aName: string): Faq[] {
  return [
    {
      question: `How do I book an airport transfer in ${cityName}?`,
      answer: `Choose your hotel route below, or send your flight number, arrival date, and hotel on WhatsApp or the quote form. We reply with a fixed price for your private ${aName} transfer.`,
    },
    {
      question: `Do you cover every hotel in ${cityName}?`,
      answer: `We operate transfers to all major 3, 4, and 5-star hotels in ${cityName}. If your hotel isn't listed, send us the address and we'll arrange a private transfer to the door.`,
    },
    {
      question: `Is the transfer from ${aName} private?`,
      answer: `Yes. Every ${cityName} airport transfer is a private, direct ride for your booking only — no shared vehicles and no waiting for other passengers.`,
    },
    {
      question: `What if my flight is delayed?`,
      answer: `We track your flight and adjust the pickup time automatically, with free waiting time included, so a delay never costs you the ride.`,
    },
    {
      question: `Can I book a return transfer back to ${aName}?`,
      answer: `Yes. Every hotel has a matching return route back to ${aName}. Open any route page and follow the link to its reverse transfer.`,
    },
  ];
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  if (!airport) notFound();

  const aName = airportTransferName(airport);
  const hotels = hotelsForCity(city.slug);
  const facts = cityAirportFacts[city.slug];

  // Real distance/duration range, computed from data/hotels.ts (never invented).
  const distances = hotels.map((h) => h.distanceKm);
  const durations = hotels.map((h) => h.durationMin);
  const distanceRange =
    distances.length > 0 ? { min: Math.min(...distances), max: Math.max(...distances) } : null;
  const durationRange =
    durations.length > 0 ? { min: Math.min(...durations), max: Math.max(...durations) } : null;

  const path = `/cities/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${city.name} Hotel Transfers`, path },
  ];

  // Popular tourist / intercity routes touching this city.
  const cityRoutes = routes
    .filter((r) => r.relatedCitySlugs.includes(city.slug))
    .map((r) => r.slug);

  const faqs = (city.hubFaqs ?? fallbackHubFaqs(city.name, aName)).slice(0, 12);

  const hotelCount = hotels.length;

  const factCards: HotelTransferHubFactCard[] = [
    ...(distanceRange && durationRange
      ? [
          {
            heading: `Distance from ${airport.name}`,
            icon: "distance" as const,
            text: `Our ${hotelCount} ${city.name} hotels sit between ${distanceRange.min}${
              distanceRange.min === distanceRange.max ? "" : `–${distanceRange.max}`
            } km from ${airport.name} (${airport.code}) — roughly ${durationRange.min}${
              durationRange.min === durationRange.max ? "" : `–${durationRange.max}`
            } minutes by car, depending on traffic.`,
          },
        ]
      : []),
    {
      heading: `Terminals at ${airport.name}`,
      icon: "terminals" as const,
      lines: airport.terminals,
    },
    ...(facts?.dropoffConstraint ? [{ heading: "Drop-off", text: facts.dropoffConstraint }] : []),
    ...(facts?.miqat ? [{ heading: "Miqat", text: facts.miqat }] : []),
    ...(facts?.seasonal ? [{ heading: "Seasonal timing", text: facts.seasonal, wide: true }] : []),
  ];

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `${city.name} Airport Hotel Transfers`,
            description: `Private airport transfers between ${airport.name} (${airport.code}) and hotels across ${city.name}.`,
            path,
            serviceType: "Airport Transfer",
            areaServed: `${city.name}, Saudi Arabia`,
            dateModified: city.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <HotelTransferHubView
        eyebrow="Airport ⇄ Hotel Directory"
        h1={`${city.name} Airport Transfers`}
        dek={`Private transfers between ${airport.name} (${airport.code}) and ${hotelCount} of the most-requested hotels in ${city.name}, in both directions. Every ride is private and door-to-door, with a professional chauffeur, a fixed price agreed before you travel, and meet-and-greet pickup for arrivals.`}
        crumbs={crumbs}
        stats={[
          { label: "Hotels covered", value: `${hotelCount}`, emphasis: true },
          ...(distanceRange
            ? [{ label: "Distance", value: `${distanceRange.min}${distanceRange.min === distanceRange.max ? "" : `–${distanceRange.max}`} km` }]
            : []),
          ...(durationRange
            ? [{ label: "Drive time", value: `${durationRange.min}${durationRange.min === durationRange.max ? "" : `–${durationRange.max}`} min` }]
            : []),
        ]}
        linkCards={[
          { label: `${city.name} airport transfer overview`, href: `/airport-transfer/${airport.slug}`, icon: "airport" },
          { label: `${city.name} city taxi service`, href: `/taxi-service/${city.slug}`, icon: "city" },
        ]}
        factsHeading={`${city.name} airport transfer essentials`}
        factCards={factCards}
        hotelsHeading={`Every ${city.name} hotel we transfer to`}
        hotelsIntro={`${hotelCount} hotels, both directions, fixed price agreed before you travel.`}
        hotels={hotels.map((h) => ({
          slug: h.slug,
          name: h.name,
          area: h.area,
          stars: h.stars,
          distanceKm: h.distanceKm,
          durationMin: h.durationMin,
          quoteHref: `/get-quote?pickup=${encodeURIComponent(airport.name)}&dropoff=${encodeURIComponent(h.name)}`,
        }))}
        tableLabels={{
          hotel: "Hotel",
          district: "District",
          stars: "Stars",
          distance: "Distance",
          duration: "Duration",
          quote: "Quote",
          quoteLabel: "Get a quote",
        }}
      />

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {/* Popular tourist / intercity destinations from this city */}
      {cityRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading={`Popular Destinations from ${city.name}`}
          subheading="Private intercity and tourist transfers beyond the airport run."
          only={cityRoutes}
        />
      )}

      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" pageKey={city.slug} />
      <CTASection
        title={`Book Your ${city.name} Airport Transfer`}
        whatsappMessage={`Hello! I'd like to book an airport transfer in ${city.name}.`}
      />
    </>
  );
}
