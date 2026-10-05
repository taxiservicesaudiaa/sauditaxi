import type { Metadata } from "next";
import { QuotePageView } from "@/components/quote/QuotePageView";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/data/services";
import { pageHeroes } from "@/lib/hero";

// New design only — same URL (/get-quote), same canonical, same form
// submission logic (QuoteForm's fields, validation, and /api/leads call are
// untouched). This page is form-first and conversion-focused: the form sits
// above the fold and dominates the layout, distinct from /contact
// (conversational) and /services (discovery hub).
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Get Quote", path: "/get-quote" },
];

export const metadata: Metadata = buildMetadata({
  title: "Request a Private Transfer Quote | Saudi Private Transfers",
  description:
    "Share your journey details and request a fixed-price private transfer quote in Saudi Arabia — airport, city, intercity, border, and pilgrim transport.",
  path: "/get-quote",
  alternateLanguages: { en: "/get-quote", ar: "/ar/اطلب-عرض-سعر" },
});

export default function GetQuotePage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <QuotePageView
        eyebrow="Get a Quote"
        h1="Request a Private Transfer Quote"
        dek="Tell us your journey details below and we'll review your requirements and reply with a fixed price before you travel."
        heroImage={pageHeroes.intercity}
        heroAlt="Planning a private transfer journey in Saudi Arabia"
        formSlot={
          // Pre-fill from the homepage hero quick form's query params happens
          // in the browser (prefillFromQuery) so this page stays prerendered.
          <QuoteForm serviceType="Get Quote page" prefillFromQuery />
        }
        infoHeading="What Information Should I Provide?"
        infoItems={[
          "Pickup location and destination",
          "Travel date and time",
          "Number of passengers and luggage",
          "Flight number, if arriving by air",
          "Any special requirements, such as a child seat",
        ]}
        processHeading="How the Quote Process Works"
        processSteps={[
          { label: "Share your transfer details", text: "Complete the form with your journey information." },
          { label: "Your request is reviewed", text: "We check the route, timing, and vehicle your trip needs." },
          { label: "You receive a quote", text: "We reply with a fixed price and the vehicle assigned to your journey." },
        ]}
        journeyHeading="Types of Journeys You Can Request"
        journeyTypes={services.map((s) => ({ label: s.name, href: s.href }))}
        complexHeading="Planning a Complex Journey?"
        complexText="Travelling with a large group, significant luggage, arriving at an airport, or crossing a border? Include those details in your message and we'll match the right vehicle to your journey."
        resourcesHeading="Useful Planning Resources"
        resources={[
          { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
          { label: "Riyadh to Jeddah distance", href: "/distance/riyadh-to-jeddah-distance" },
          { label: "Border transfer guides", href: "/border-transfers" },
          { label: "Travel guides", href: "/blog" },
        ]}
        crumbs={crumbs}
      />
    </>
  );
}
