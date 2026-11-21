import type { Metadata } from "next";
import { ServicesHubView } from "@/components/services-hub/ServicesHubView";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageHeroes } from "@/lib/hero";

// New design only — same URL (/services), same canonical. This page is the
// service-discovery hub: it routes visitors to the right one of the 8
// service pages based on journey intent, rather than repeating their
// detailed content (which stays the authority on its own page — see
// data/services.ts / the 8 rebuilt service route files). Distinct in
// structure from /contact and /get-quote, and from every individual
// service page: no big hero image, no single card grid, three differently
// composed clusters instead.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata: Metadata = buildMetadata({
  title: "Private Transfer Services in Saudi Arabia | Saudi Private Transfers",
  description:
    "Find the right private transfer service for your journey in Saudi Arabia — airport, city, intercity, border, and pilgrim transport, each quoted before you travel.",
  path: "/services",
  alternateLanguages: { en: "/services", ar: "/ar/خدماتنا" },
});

export default function ServicesPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <ServicesHubView
        eyebrow="Service Discovery"
        h1="Private Transfer Services in Saudi Arabia"
        intro="Every journey is different — an airport arrival, a ride across a city, a long drive between cities, or a pilgrim journey to the Holy Cities. Find the service that matches yours below."
        heroImage={pageHeroes.city}
        heroAlt="Private transfer services across Saudi Arabia"
        everydayHeading="Everyday & Business Travel"
        everydayIntro="For airport arrivals, local rides, and hotel pickups within a single city or trip."
        everydayServices={[
          {
            icon: "airport",
            scenario: "Arriving at an airport",
            name: "Airport Transfers",
            tagline: "Meet-and-greet pickup with flight tracking at every major Saudi airport.",
            href: "/airport-transfers",
          },
          {
            icon: "city",
            scenario: "Travelling within a city",
            name: "City Transfers",
            tagline: "Local rides, hotel pickups, and full-day driver hire in 19+ Saudi cities.",
            href: "/city-transfers",
          },
          {
            icon: "hotel",
            scenario: "Moving to or from a hotel",
            name: "Hotel Transfers",
            tagline: "Door-to-door hotel pickups, drop-offs, and hotel-to-hotel moves.",
            href: "/services/hotel-transfers",
          },
        ]}
        longDistanceHeading="Long-Distance Travel"
        longDistanceIntro="For journeys between Saudi cities and across the Kingdom's land borders."
        longDistanceServices={[
          {
            icon: "intercity",
            scenario: "Travelling between cities",
            name: "Intercity Transfers",
            tagline: "A private, door-to-door vehicle for long-distance journeys between any two Saudi cities, with rest-stop flexibility on the longer routes.",
            href: "/intercity-transfers",
            image: pageHeroes.intercity,
            alt: "A long-distance highway journey between Saudi cities",
          },
          {
            icon: "border",
            scenario: "Crossing an international border",
            name: "Border Transfers",
            tagline: "Private cross-border rides to Bahrain, Qatar, the UAE, Kuwait, and Jordan, with guidance on documentation before you travel.",
            href: "/border-transfers",
            image: pageHeroes.border,
            alt: "A private vehicle approaching a Saudi land border crossing",
          },
        ]}
        pilgrimageHeading="Pilgrimage Travel"
        pilgrimageIntro="For Umrah, Hajj, and Ziyarat journeys between Makkah, Madinah, and the surrounding pilgrim sites."
        pilgrimageServices={[
          {
            icon: "umrah",
            scenario: "Performing Umrah",
            name: "Umrah Taxi Service",
            tagline: "Airport pickup, hotel transfers, and Makkah–Madinah journeys for Umrah pilgrims.",
            href: "/umrah-taxi-service",
          },
          {
            icon: "hajj",
            scenario: "Travelling for Hajj",
            name: "Hajj Transport Service",
            tagline: "Group transport for Hajj pilgrims between airports, hotels, and the pilgrim sites.",
            href: "/hajj-transport-service",
          },
          {
            icon: "ziyarat",
            scenario: "Visiting historic sites",
            name: "Ziyarat Taxi Service",
            tagline: "Private visits to the historic Islamic sites of Makkah and Madinah.",
            href: "/ziyarat-taxi-service",
          },
        ]}
        journeyHeading="Real Journeys, Matched to a Service"
        journeyIntro="A few examples of common journeys and the service that covers them."
        journeyExamples={[
          { scenario: "Arriving at Riyadh or Jeddah airport", serviceLabel: "Airport Transfers", serviceHref: "/airport-transfers" },
          { scenario: "Getting around within a single city", serviceLabel: "City Transfers", serviceHref: "/city-transfers" },
          { scenario: "Travelling between Makkah and Madinah for Umrah", serviceLabel: "Umrah Taxi Service", serviceHref: "/umrah-taxi-service" },
          { scenario: "Group travel during the Hajj season", serviceLabel: "Hajj Transport Service", serviceHref: "/hajj-transport-service" },
          { scenario: "Visiting historic sites in Makkah or Madinah", serviceLabel: "Ziyarat Taxi Service", serviceHref: "/ziyarat-taxi-service" },
          { scenario: "Crossing into Bahrain from Dammam or Khobar", serviceLabel: "Border Transfers", serviceHref: "/border-transfers" },
          { scenario: "Moving between a hotel and the airport", serviceLabel: "Hotel Transfers", serviceHref: "/services/hotel-transfers" },
        ]}
        closingHeading="Not Sure Which Service Fits Your Journey?"
        closingText="Share your journey details and we'll match you with the right service and a quotation before you travel."
        primaryCtaLabel="Get a Quote"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
        crumbs={crumbs}
      />
    </>
  );
}
