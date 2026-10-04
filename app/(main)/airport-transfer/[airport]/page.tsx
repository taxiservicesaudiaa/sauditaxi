import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AirportTransferHub, type AirportTransferHubContent, type AirportTransferStep } from "@/components/airport-transfer/AirportTransferHub";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { airports, getAirport, type Airport } from "@/data/airports";
import { getRoute, type Route } from "@/data/routes";
import type { HomeSectionCard } from "@/components/home/HomeSectionCards";
import { vehicles } from "@/data/vehicles";
import { buildMetadata } from "@/lib/seo";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { breadcrumbSchema, serviceSchema, taxiServiceSchema, faqSchema, howToSchema } from "@/lib/schema";

// 2026 restructuring — new page-specific AirportTransferHub component (see
// components/airport-transfer/AirportTransferHub.tsx), distinct from the
// shared AirportHubView (kept untouched; still used by the Arabic border/
// airport pages). Universal sections shared across all 13 airports (meet &
// greet flow, vehicle options, booking steps, family/group note) are built
// once below and interpolated with each airport's name/code, mirroring the
// site's existing pattern of building `pickupSteps` once per page render.
// Airport-specific content (core-service paragraph, popular routes from the
// real route inventory, arrival context, and the "major destinations"
// customization section) comes from data/airports.ts + data/airport-guides.ts.
type Params = { airport: string };

export function generateStaticParams() {
  return airports.map((a) => ({ airport: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { airport: slug } = await params;
  const airport = getAirport(slug);
  if (!airport) return {};
  const path = `/airport-transfer/${airport.slug}`;
  const arPath = getArPathForEnPathLight(path);
  return buildMetadata({
    title: airport.metaTitle ?? `Private ${airport.city} Airport Transfer (${airport.code}) | Saudi Private Transfers`,
    description:
      airport.metaDescription ??
      `Private ${airport.city} airport transfer from ${airport.name} (${airport.code}). Meet-and-greet pickup with fixed quotes.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

/** Normalizes a route's endpoint against the airport's own city so a
 * route stored in either direction (e.g. "tabuk-to-neom" for the NEOM
 * airport page) still resolves to the *other* city as the destination. */
function routeDestinationName(r: Route, airport: Airport): string {
  const norm = (s: string) => s.toLowerCase().replace(/\s*(international\s+)?airport\b/g, "").trim();
  const city = norm(airport.city);
  if (norm(r.from).includes(city)) return r.to;
  if (norm(r.to).includes(city)) return r.from;
  return r.to;
}

function buildPopularCards(airport: Airport): HomeSectionCard[] {
  const seen = new Set<string>();
  const cards: HomeSectionCard[] = [];
  for (const slug of airport.popularRoutes ?? []) {
    const r = getRoute(slug);
    if (!r) continue;
    const destination = routeDestinationName(r, airport);
    const key = destination.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    cards.push({
      title: `${airport.city} Airport to ${destination}`,
      body: `${r.distance} · about ${r.duration}. A private, direct transfer with a fixed price agreed before you travel — no meter, no surge pricing.`,
      href: `/routes/${slug}`,
      linkLabel: `${destination} transfer details`,
    });
    if (cards.length >= 5) break;
  }
  return cards;
}

function meetGreetSteps(airport: Airport): AirportTransferStep[] {
  return [
    {
      title: "Before Your Flight",
      detail:
        "Share your flight number, arrival date, and destination when you book. We track your flight from that point, so an early or delayed landing is already accounted for before you travel.",
    },
    {
      title: "After Landing",
      detail: `Clear immigration and collect your luggage as normal at ${airport.name}. There's no separate desk or rental counter to find — just head straight for the arrivals hall with your bags.`,
    },
    {
      title: "Meeting Your Driver",
      detail: `Your driver waits in the arrivals hall at ${airport.code} with a name board, ready as soon as you clear customs, and helps carry your luggage to the vehicle for the drive to your destination.`,
    },
  ];
}

function vehicleCards(): HomeSectionCard[] {
  const byId = (id: string) => vehicles.find((v) => v.id === id);
  const economy = byId("economy");
  const comfort = byId("comfort");
  const business = byId("business");
  const suv = byId("suv");
  const van = byId("van");
  const minibus = byId("minibus");
  return [
    {
      title: "Standard Sedan",
      body: `${economy?.name} and ${comfort?.name} sedans (${economy?.examples}) for ${economy?.passengers} with ${economy?.luggage} — a practical, comfortable choice for solo travellers, couples, and business trips.`,
    },
    {
      title: "Premium Vehicle",
      body: `A ${business?.name}-class sedan (${business?.examples}) for executive arrivals and corporate travel, seating ${business?.passengers} with ${business?.luggage} in a premium, air-conditioned cabin.`,
    },
    {
      title: "Family or Group Vehicle",
      body: `An ${suv?.name} (${suv?.examples}) for ${suv?.passengers} and ${suv?.luggage}, with room for a family or small group travelling together, plus space for extra luggage.`,
    },
    {
      title: "Minivan",
      body: `A ${van?.name} (${van?.examples}) for ${van?.passengers} with ${van?.luggage}, or a ${minibus?.name} for larger pilgrim, family, and corporate groups travelling as one party.`,
    },
  ];
}

function bookingSteps(airport: Airport): AirportTransferStep[] {
  return [
    { title: "1. Send Your Journey Details", detail: "Your flight number, arrival date, and destination — hotel, city, or onward route — sent by WhatsApp or our quote form." },
    { title: "2. Receive Your Quote", detail: "A fixed, all-in price and a vehicle recommendation, agreed before you travel with no hidden charges added later." },
    { title: "3. Confirm Your Transfer", detail: "Approve the quote and a driver is scheduled for your flight, no prepayment required to hold the booking." },
    { title: "4. Meet Your Driver", detail: `Your driver waits in the arrivals hall at ${airport.name} with a name board when you land, ready to help with luggage.` },
  ];
}

function familyParagraph(airport: Airport): string {
  return `Travelling with children, an elderly relative, or a larger group? Tell us your passenger and luggage numbers when you book so an SUV, van, or minibus is ready rather than assumed on the day. Child seats can be requested for your ${airport.city} Airport transfer, and drivers assist with luggage from the arrivals hall all the way to the vehicle, so nobody is left managing bags alone.`;
}

export default async function AirportPage({ params }: { params: Promise<Params> }) {
  const { airport: slug } = await params;
  const airport = getAirport(slug);
  if (!airport) notFound();

  const faqs = (airport.faqs ?? []).slice(0, 8);
  const path = `/airport-transfer/${airport.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${airport.city} Airport`, path },
  ];

  const h1 = `Private ${airport.city} Airport Transfers (${airport.code})`;
  const popularCards = buildPopularCards(airport);
  const meetGreet = meetGreetSteps(airport);
  const booking = bookingSteps(airport);

  const content: AirportTransferHubContent = {
    eyebrow: "Airport Transfer",
    h1,
    dek: airport.intro,
    heroImage: airport.heroImage ?? "/images/heroes/airport.webp",
    heroAlt: airport.heroAlt ?? `${airport.name} arrivals`,
    facts: [
      { label: "IATA Code", value: airport.code },
      { label: "City", value: airport.city },
      { label: "Region", value: airport.region },
    ],
    primaryCtaLabel: `Get a ${airport.city} Airport Quote`,
    primaryCtaHref: `/get-quote?pickup=${encodeURIComponent(`${airport.name} (${airport.code})`)}`,
    secondaryCtaLabel: airport.citySlug ? `${airport.city} Taxi Service` : undefined,
    secondaryCtaHref: airport.citySlug ? `/taxi-service/${airport.citySlug}` : undefined,

    coreServiceHeading: `Private Transfers from ${airport.city} Airport`,
    coreServiceParagraph:
      airport.coreServiceParagraph ??
      `We provide private, pre-booked transportation from ${airport.name} to your hotel or destination. Your driver tracks your flight, meets you in arrivals, and drives you directly to your destination at a fixed price agreed before you travel.`,

    popularHeading: `Popular Transfers from ${airport.city} Airport`,
    popularIntro:
      popularCards.length > 0
        ? `Fixed-price private transfers directly from ${airport.name} to these destinations, booked before you land and ready the moment you arrive.`
        : `Explore ${airport.city}'s local taxi service for transportation around the city and to nearby destinations, booked before you land.`,
    popularCards,

    arrivingHeading: `Arriving at ${airport.name}`,
    arrivingParagraphs: airport.arrivingParagraphs ?? [
      `After landing at ${airport.name}, clear immigration and collect your luggage, then head to the arrivals hall where your driver is waiting with a name board.`,
    ],

    meetGreetHeading: "Airport Pickup and Driver Meet & Greet",
    meetGreetIntro: `Here's exactly what happens between booking and getting in the car at ${airport.code}, so there are no surprises on arrival.`,
    meetGreetSteps: meetGreet,

    destinationsHeading: `Transfers from ${airport.city} Airport to Major Destinations`,
    destinationsIntro: airport.destinationClusters?.length
      ? `The most common journeys travellers arrange from ${airport.name}, each priced and confirmed before you travel.`
      : undefined,
    destinationClusters: airport.destinationClusters ?? [],

    familyHeading: "Private Airport Transfers for Families and Groups",
    familyParagraph: familyParagraph(airport),

    vehiclesHeading: `Choosing the Right Vehicle for Your ${airport.city} Transfer`,
    vehiclesIntro:
      "Vehicle choice comes down to passengers and luggage more than personal preference — tell us your numbers honestly when you book so the right vehicle is waiting.",
    vehicleCards: vehicleCards(),

    bookingHeading: `How to Book a ${airport.city} Airport Transfer`,
    bookingIntro: "A simple four-step process from first message to confirmed pickup, usually completed in a few minutes.",
    bookingSteps: booking,

    faqHeading: `${airport.city} Airport Transfer Questions`,
    faqs,

    finalCtaHeading: `Book Your Private ${airport.city} Airport Transfer`,
    finalCtaText: `Add your flight number and destination — we reply with a fixed price and meet you in arrivals at ${airport.code}.`,
  };

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `${airport.city} Airport Transfer`,
            description: airport.intro,
            path,
            serviceType: "Airport Transfer",
            areaServed: `${airport.city}, Saudi Arabia`,
            dateModified: airport.lastUpdated,
          }),
          howToSchema({
            name: `How pickup works at ${airport.name}`,
            description: `Step-by-step process for a private airport transfer from ${airport.name} (${airport.code}).`,
            steps: meetGreet.map((s) => ({ name: s.title, text: s.detail })),
          }),
          faqSchema(faqs),
        ]}
      />
      <AirportTransferHub content={content} crumbs={crumbs} />
    </>
  );
}
