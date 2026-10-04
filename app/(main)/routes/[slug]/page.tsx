import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { routeHero } from "@/lib/hero";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { routes, getRoute } from "@/data/routes";
import { RouteCustomBody } from "@/components/routes/RouteBlocks";
import { RouteJourneyView } from "@/components/routes/RouteJourneyView";
import { AirportRouteView } from "@/components/routes/AirportRouteView";
import { CityAirportRouteView } from "@/components/routes/CityAirportRouteView";
import { GccRouteView } from "@/components/routes/GccRouteView";
import { GccToSaudiRouteView } from "@/components/routes/GccToSaudiRouteView";
import { CityToBorderRouteView } from "@/components/routes/CityToBorderRouteView";
import { BorderToCityRouteView } from "@/components/routes/BorderToCityRouteView";
import { SaudiJordanRouteView } from "@/components/routes/SaudiJordanRouteView";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { getBorder } from "@/data/borders";
import { getDistancePage } from "@/data/distance-pages";
import { getDistanceGuideV2Page } from "@/data/distance-guide-v2";
import {
  isDomesticCityRoute,
  isAirportToCityRoute,
  isCityToAirportRoute,
  isSaudiToGccRoute,
  gccCountryFor,
  isGccToSaudiRoute,
  gccCountryForOrigin,
  isCityToBorderRoute,
  borderCountryFor,
  isBorderToCityRoute,
  borderCountryForOrigin,
  isSaudiJordanRoute,
  saudiJordanDirection,
  classifyRoute,
  journeyTypeLabels,
} from "@/lib/route-journey";
import { buildRouteBlocks, buildRouteFaqs } from "@/lib/route-composer";
import { airportRouteContent } from "@/data/airport-route-content";
import { cityAirportRouteContent } from "@/data/city-airport-route-content";
import { gccRouteContent, gccCountryFacts } from "@/data/gcc-route-content";
import { gccToSaudiRouteContent, gccToSaudiCountryFacts } from "@/data/gcc-to-saudi-route-content";
import { cityToBorderRouteContent, cityToBorderCrossingFacts } from "@/data/city-to-border-route-content";
import { borderToCityRouteContent, borderToCityCrossingFacts } from "@/data/border-to-city-route-content";
import { saudiJordanRouteContent, saudiJordanCrossingFacts } from "@/data/saudi-jordan-route-content";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

const gccCountryDisplayName: Record<string, string> = {
  bahrain: "Bahrain",
  qatar: "Qatar",
  kuwait: "Kuwait",
  uae: "United Arab Emirates",
};

/** Strips a trailing "+ border" / "(plus border)" / "driving" qualifier from
 * a Route's duration string, leaving just the pure driving-time estimate. */
function pureDrivingTime(duration: string): string {
  return duration
    .replace(/\s*[(+].*$/, "")
    .replace(/\s*driving\s*$/i, "")
    .trim();
}

/** Finds a matching distance guide (either data source) for a route slug,
 * if one exists — never fabricated, only linked when genuinely present. */
function findDistancePage(slug: string): { href: string; label: string } | undefined {
  const v2 = getDistanceGuideV2Page(`${slug}-distance`);
  if (v2) return { href: `/distance/${v2.slug}`, label: "Read the road-distance guide" };
  const v1 = getDistancePage(`${slug}-distance`);
  if (v1) return { href: `/distance/${v1.slug}`, label: "Read the road-distance guide" };
  return undefined;
}

type Params = { slug: string };

const pickupPoints = [
  "Airport",
  "Hotel",
  "Home address",
  "Business location",
  "Railway or bus station",
  "Religious site",
];
const dropoffPoints = [
  "Hotel",
  "Airport",
  "City center",
  "Religious destination",
  "Tourist location",
  "Border point",
];

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  const path = `/routes/${route.slug}`;
  const arPath = getArPathForEnPathLight(path);
  return buildMetadata({
    title:
      route.metaTitle ??
      `${route.from} to ${route.to} Taxi | Private Transfer`,
    description:
      route.metaDescription ??
      `Book a private ${route.from} to ${route.to} taxi (${route.distance}, approx. ${route.duration}). Fixed price, professional driver, easy WhatsApp booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function routeFaqs(from: string, to: string): Faq[] {
  return [
    {
      question: `How can I book a taxi from ${from} to ${to}?`,
      answer: `You can book by sending your trip details through WhatsApp or our quote form. We reply with a fixed price for the ${from} to ${to} transfer.`,
    },
    {
      question: `Is the ${from} to ${to} transfer private?`,
      answer: `Yes, the transfer is fully private for your booking — no shared rides and no waiting for other passengers.`,
    },
    {
      question: `Can I choose the vehicle type for ${from} to ${to}?`,
      answer: `Yes. You can request economy, comfort, business, SUV, van, or minibus depending on your group size and availability.`,
    },
  ];
}

export default async function RoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const faqs = (route.faqs ?? routeFaqs(route.from, route.to)).slice(0, 15);
  const rich = route.richLayout;
  const activePickupPoints = rich ? rich.pickupPoints : pickupPoints;
  const activeDropoffPoints = rich ? rich.dropoffPoints : dropoffPoints;
  const path = `/routes/${route.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/intercity-transfers" },
    { name: `${route.from} to ${route.to}`, path },
  ];

  // 1. Find exact reverse route if it exists
  const reverseRoute = routes.find(
    (r) =>
      r.slug !== route.slug &&
      r.from.toLowerCase() === route.to.toLowerCase() &&
      r.to.toLowerCase() === route.from.toLowerCase()
  );

  // 2. Smart related routes prioritization:
  //    - Reverse route first
  //    - Shared origin routes
  //    - Shared destination routes
  //    - Regionally / contextually connected routes
  const candidateRoutes: string[] = [];
  if (reverseRoute) candidateRoutes.push(reverseRoute.slug);

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.from.toLowerCase() === route.from.toLowerCase()
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.to.toLowerCase() === route.to.toLowerCase() &&
        !candidateRoutes.includes(r.slug)
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        !candidateRoutes.includes(r.slug) &&
        (r.category === route.category ||
          r.relatedCitySlugs.some((c) => route.relatedCitySlugs.includes(c)))
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  const relatedRoutes = candidateRoutes.slice(0, 6);

  // Airport -> City commercial routes get the dedicated "Airport Arrival
  // Journey Guide" shell (components/routes/AirportRouteView.tsx), with
  // hand-written per-route content in data/airport-route-content.ts.
  if (isAirportToCityRoute(route) && airportRouteContent[route.slug]) {
    const content = airportRouteContent[route.slug];
    const airportSlug = route.slug.split("-to-")[0];
    const airport = getAirport(airportSlug);
    const destinationCity = getCity(
      route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.to.toLowerCase()) ??
        route.relatedCitySlugs[0] ??
        ""
    );
    const cityToAirportReverse = routes.find((r) => r.from === route.to && r.to === route.from);

    const relatedAirportRoutes = routes
      .filter(
        (r) =>
          r.slug !== route.slug &&
          isAirportToCityRoute(r) &&
          (r.from === route.from || r.to === route.to)
      )
      .slice(0, 4)
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const hubLinks = [
      ...(airport ? [{ label: `${airport.name} (${airport.code}) hub`, href: `/airport-transfer/${airport.slug}` }] : []),
      ...(destinationCity ? [{ label: `${destinationCity.name} taxi service`, href: `/taxi-service/${destinationCity.slug}` }] : []),
    ];

    const arrivalSteps = [
      {
        label: "Flight tracking begins",
        detail: "We track your flight from the moment you book, so the pickup time adjusts automatically to your actual landing time.",
      },
      { label: "Your driver meets you in arrivals", detail: content.arrivalPickup[0] },
      ...(content.arrivalPickup[1] ? [{ label: "What to expect", detail: content.arrivalPickup[1] }] : []),
      {
        label: "Direct transfer begins",
        detail: `Your driver helps with luggage and you're driven directly toward ${route.to}, at the fixed price agreed when you booked.`,
      },
    ];

    const bookingSteps = [
      { label: "Share your journey details", detail: `Flight number, arrival date and time, and your destination in ${route.to}.` },
      { label: "Receive a fixed price", detail: "Confirmed before you travel — no meter, no surge pricing." },
      { label: "Meet your driver on arrival", detail: "Your driver waits in the arrivals area, tracking your flight for any delay." },
      { label: "Travel directly to your destination", detail: "Door-to-door, with luggage assistance along the way." },
    ];

    const faqs = content.faqs;

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            serviceSchema({
              name: `${route.from} to ${route.to} Airport Transfer`,
              description: route.intro,
              path,
              serviceType: "Airport Transfer",
              dateModified: route.lastUpdated,
            }),
            faqSchema(faqs),
          ]}
        />
        <AirportRouteView
          eyebrow="Airport Transfer"
          h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
          dek={content.intro}
          heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
          heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
          airportLabel={route.from}
          cityLabel={route.to}
          facts={[
            { label: "Road Distance", value: route.distance },
            { label: "Category", value: "Airport Transfer" },
          ]}
          journeyTimeHeading="Journey Time"
          pureDrivingLabel="Pure driving time"
          pureDrivingValue={route.duration}
          totalJourneyNote="This is driving time under normal conditions. Your total journey — including clearing customs, collecting luggage, and traffic — can run longer, so it's a baseline for the drive itself, not a door-to-door guarantee."
          arrivalHeading={`Arrival & Pickup at ${route.from}`}
          arrivalSteps={arrivalSteps}
          roadJourneyHeading="The Road Journey"
          roadJourneyParagraphs={content.roadJourney}
          destinationHeading={`Arriving in ${route.to}`}
          destinationParagraphs={content.destinationArrival}
          vehicleHeading="Vehicle & Luggage"
          vehicleText={content.vehicleLuggage}
          whoSuitsHeading="Who This Transfer Suits"
          whoSuits={content.whoSuits}
          comparisonHeading={content.comparison ? "Private Transfer vs Other Options" : undefined}
          comparisonIntro={content.comparison ? "A balanced look at the alternatives for this specific journey." : undefined}
          comparison={content.comparison}
          bookingHeading="How Booking Works"
          bookingSteps={bookingSteps}
          checklistHeading="What to Have Ready"
          checklist={content.checklist}
          reverseHeading={cityToAirportReverse ? "Planning the Return Journey" : undefined}
          reverseText={
            cityToAirportReverse
              ? `Need to get back to the airport afterward? We also provide a private transfer from ${cityToAirportReverse.from} to ${cityToAirportReverse.to}, timed to your departure flight.`
              : undefined
          }
          reverseLinkLabel={cityToAirportReverse ? `${cityToAirportReverse.from} to ${cityToAirportReverse.to}` : undefined}
          reverseHref={cityToAirportReverse ? `/routes/${cityToAirportReverse.slug}` : undefined}
          relatedRoutesHeading={relatedAirportRoutes.length > 0 ? "Related Airport Transfers" : undefined}
          relatedRoutes={relatedAirportRoutes}
          hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
          hubLinks={hubLinks}
          faqsHeading="Frequently Asked Questions"
          faqs={faqs}
          ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
          ctaText="Share your flight number and destination — we reply with a fixed price before you travel."
          ctaLabel="Get a Quote"
          ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
          formHeading={`${route.from} → ${route.to} Quote`}
          formSubheading="Fixed price for your airport transfer."
          formSlot={
            <QuoteForm
              serviceType={`${route.from} to ${route.to} transfer`}
              route={`${route.from} to ${route.to}`}
              defaultPickup={route.from}
              defaultDropoff={route.to}
            />
          }
          crumbs={crumbs}
        />
      </>
    );
  }

  // City -> Airport departure routes get the dedicated "Airport Departure
  // Planner" shell (components/routes/CityAirportRouteView.tsx) — distinct
  // from the arrival-focused Airport -> City shell above.
  if (isCityToAirportRoute(route) && cityAirportRouteContent[route.slug]) {
    const content = cityAirportRouteContent[route.slug];
    const airport = getAirport(route.to.toLowerCase().replace(/ /g, "-"));
    const originCity = getCity(
      route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.from.toLowerCase()) ??
        route.relatedCitySlugs[0] ??
        ""
    );

    const airportToCityReverse = routes.find((r) => r.from === route.to && r.to === route.from);

    const relatedCityAirportRoutes = routes
      .filter(
        (r) =>
          r.slug !== route.slug &&
          isCityToAirportRoute(r) &&
          (r.from === route.from || r.to === route.to)
      )
      .slice(0, 4)
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const hubLinks = [
      ...(originCity ? [{ label: `${originCity.name} taxi service`, href: `/taxi-service/${originCity.slug}` }] : []),
      ...(airport ? [{ label: `${airport.name} (${airport.code}) hub`, href: `/airport-transfer/${airport.slug}` }] : []),
    ];

    const bookingSteps = [
      { label: "Select this route and share your flight details", detail: `Flight number, departure date and time, and your pickup address in ${route.from}.` },
      { label: "Receive a fixed price", detail: "Confirmed before you travel — no meter, no surge pricing." },
      { label: "Confirm your pickup", detail: "We agree the pickup time with you, factoring in your flight and typical traffic." },
      { label: "Meet your driver and travel to the airport", detail: "Door-to-door, with luggage assistance and drop-off at your terminal." },
    ];

    const faqs = content.faqs;

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            serviceSchema({
              name: `${route.from} to ${route.to} Airport Transfer`,
              description: route.intro,
              path,
              serviceType: "Airport Transfer",
              dateModified: route.lastUpdated,
            }),
            faqSchema(faqs),
          ]}
        />
        <CityAirportRouteView
          eyebrow="Airport Departure"
          h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
          dek={content.departureIntro}
          heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
          heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
          originLabel={route.from}
          airportLabel={route.to}
          facts={[{ label: "Road Distance", value: route.distance }]}
          departureHeading="When Should I Leave?"
          departureIntro={content.departureIntro}
          departurePoints={content.departurePoints}
          journeyTimeHeading="Total journey time"
          pureDrivingLabel="Pure driving time"
          pureDrivingValue={route.duration}
          totalJourneyNote="can run longer once you add traffic, pickup timing, and time inside the terminal — treat the driving time as a baseline for the road itself, not a guaranteed door-to-check-in time."
          pickupHeading="Pickup Planning"
          pickupParagraphs={content.pickupPlanning}
          roadJourneyHeading="The Road Journey"
          roadJourneyParagraphs={content.roadJourney}
          dropoffHeading={`Arrival at ${route.to}`}
          dropoffParagraphs={content.airportDropoff}
          vehicleHeading="Vehicle & Luggage"
          vehicleText={content.vehicleLuggage}
          whoSuitsHeading="Who This Transfer Suits"
          whoSuits={content.whoSuits}
          delayHeading="What Can Delay the Journey?"
          delayIntro={content.delayIntro}
          delayFactors={content.delayFactors}
          comparisonHeading={content.comparison ? "Private Transfer vs Other Options" : undefined}
          comparisonIntro={content.comparison ? "A balanced look at the alternatives for this specific journey." : undefined}
          comparison={content.comparison}
          bookingHeading="How Booking Works"
          bookingSteps={bookingSteps}
          checklistHeading="Practical Departure Checklist"
          checklist={content.checklist}
          reverseHeading={airportToCityReverse ? "Arranging Both Legs of Your Trip?" : undefined}
          reverseText={
            airportToCityReverse
              ? `Need a pickup from the airport as well? We also provide a private transfer from ${airportToCityReverse.from} to ${airportToCityReverse.to}, timed to your arriving flight.`
              : undefined
          }
          reverseLinkLabel={airportToCityReverse ? `${airportToCityReverse.from} to ${airportToCityReverse.to}` : undefined}
          reverseHref={airportToCityReverse ? `/routes/${airportToCityReverse.slug}` : undefined}
          relatedRoutesHeading={relatedCityAirportRoutes.length > 0 ? "Related Airport Departures" : undefined}
          relatedRoutes={relatedCityAirportRoutes}
          hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
          hubLinks={hubLinks}
          faqsHeading="Frequently Asked Questions"
          faqs={faqs}
          ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
          ctaText="Share your flight number and pickup address — we reply with a fixed price before you travel."
          ctaLabel="Get a Quote"
          ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
          formHeading={`${route.from} → ${route.to} Quote`}
          formSubheading="Fixed price for your airport departure."
          formSlot={
            <QuoteForm
              serviceType={`${route.from} to ${route.to} transfer`}
              route={`${route.from} to ${route.to}`}
              defaultPickup={route.from}
              defaultDropoff={route.to}
            />
          }
          crumbs={crumbs}
        />
      </>
    );
  }

  // Saudi -> GCC international road-transfer routes get the dedicated
  // "International Road Journey" shell. riyadh-to-abu-dhabi already carries
  // its own hand-built customLayout (map/facts/timeline/prose/comparison/
  // scenarios/checklist/cta) from an earlier pass — that content is reused
  // directly rather than duplicated into data/gcc-route-content.ts.
  const gccCountry = gccCountryFor(route);
  if (isSaudiToGccRoute(route) && gccCountry) {
    const countryFacts = gccCountryFacts[gccCountry];
    const content = gccRouteContent[route.slug];

    if (content) {
      const countryName = gccCountryDisplayName[gccCountry];
      const originCity = getCity(
        route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.from.toLowerCase()) ??
          route.relatedCitySlugs[0] ??
          ""
      );

      const relatedGccRoutes = routes
        .filter(
          (r) =>
            r.slug !== route.slug &&
            r.slug !== reverseRoute?.slug &&
            isSaudiToGccRoute(r) &&
            (r.from === route.from || gccCountryFor(r) === gccCountry)
        )
        .slice(0, 4)
        .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

      const distancePage = findDistancePage(route.slug);
      const hubLinks = [
        ...(originCity ? [{ label: `${originCity.name} taxi service`, href: `/taxi-service/${originCity.slug}` }] : []),
        { label: "Border transfer services", href: "/border-transfers" },
        ...(distancePage ? [distancePage] : []),
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} International Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <GccRouteView
            eyebrow="International Road Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.intro}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            destinationLabel={route.to}
            facts={[
              { label: "Road distance", value: route.distance, emphasis: true },
              { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
              { label: "Border crossing", value: countryFacts.crossingName },
              { label: "Countries crossed", value: `Saudi Arabia → ${countryName}` },
            ]}
            mapOrigin={content.mapOrigin}
            mapDestination={content.mapDestination}
            mapNote="The map shows a typical driving route. Your exact starting point and current road/border conditions will affect the real distance and time."
            timelineHeading={content.timelineHeading}
            timeline={content.timeline}
            introHeading={content.introHeading}
            introParagraphs={content.introParagraphs}
            borderHeading={content.borderHeading}
            borderParagraphs={content.borderParagraphs}
            borderPageHref={countryFacts.borderPageHref}
            borderPageLabel={countryFacts.borderPageLabel}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border journey involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={countryFacts.companyControlsLabel}
            companyControls={countryFacts.companyControls}
            authorityControlsLabel={countryFacts.authorityControlsLabel}
            authorityControls={countryFacts.authorityControls}
            documentsHeading="Documents to Prepare"
            documentsIntro={countryFacts.documentsIntro}
            documentsItems={countryFacts.documentsItems}
            documentsDisclaimer={countryFacts.documentsDisclaimer}
            destinationHeading={content.destinationHeading}
            destinationParagraphs={content.destinationParagraphs}
            vehicleHeading="Vehicle & Luggage"
            vehicleText={content.vehicleText}
            whoSuitsHeading="Who This Route Suits"
            whoSuits={content.whoSuits}
            comparisonHeading={content.comparison ? "Road Transfer vs Flying" : undefined}
            comparisonIntro={content.comparisonIntro}
            comparison={content.comparison}
            checklistHeading="Practical Checklist"
            checklist={content.checklist}
            bookingHeading="How Booking Works"
            bookingSteps={content.bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need the return journey? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedGccRoutes.length > 0 ? `Other Saudi to ${countryName} Routes` : undefined}
            relatedRoutes={relatedGccRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point, destination, and travel date — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your international transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }

    // riyadh-to-abu-dhabi: reuse its existing hand-built customLayout blocks
    // rather than duplicating that already-verified content into a second
    // file. Convert each block type into the equivalent GccRouteView props.
    if (route.customLayout) {
      const blocks = route.customLayout;
      const factsBlock = blocks.find((b) => b.type === "facts");
      const mapBlock = blocks.find((b) => b.type === "map");
      const timelineBlock = blocks.find((b) => b.type === "timeline");
      const proseBlocks = blocks.filter((b) => b.type === "prose");
      const comparisonBlock = blocks.find((b) => b.type === "comparison");
      const scenariosBlock = blocks.find((b) => b.type === "scenarios");
      const checklistBlock = blocks.find((b) => b.type === "checklist");
      const countryName = gccCountryDisplayName[gccCountry];

      const relatedGccRoutes = routes
        .filter(
          (r) =>
            r.slug !== route.slug &&
            r.slug !== reverseRoute?.slug &&
            isSaudiToGccRoute(r) &&
            (r.from === route.from || gccCountryFor(r) === gccCountry)
        )
        .slice(0, 4)
        .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

      const distancePage = findDistancePage(route.slug);
      const hubLinks = [
        { label: "Border transfer services", href: "/border-transfers" },
        ...(distancePage ? [distancePage] : []),
      ];

      const bookingSteps = [
        { label: "Share pickup, date & group size", detail: `Your ${route.from} pickup point, preferred date, and passenger/luggage count.` },
        { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed before you travel." },
        { label: "Driver meets you", detail: "At your address, with rest stops planned for the long drive." },
        { label: "Border crossing & arrival", detail: `${countryFacts.crossingName} handled by your driver, then on to ${route.to}.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} International Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <GccRouteView
            eyebrow="International Road Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.about}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            destinationLabel={route.to}
            facts={
              factsBlock && factsBlock.type === "facts"
                ? factsBlock.items
                : [
                    { label: "Road distance", value: route.distance, emphasis: true },
                    { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
                    { label: "Border crossing", value: countryFacts.crossingName },
                  ]
            }
            mapOrigin={mapBlock && mapBlock.type === "map" ? mapBlock.origin : undefined}
            mapDestination={mapBlock && mapBlock.type === "map" ? mapBlock.destination : undefined}
            mapNote={mapBlock && mapBlock.type === "map" ? mapBlock.note : undefined}
            timelineHeading={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.heading : "What the Journey Actually Looks Like"}
            timeline={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.steps : []}
            introHeading={proseBlocks[0]?.type === "prose" ? proseBlocks[0].heading : "The Road Journey"}
            introParagraphs={proseBlocks[0]?.type === "prose" ? proseBlocks[0].paragraphs : []}
            borderHeading={proseBlocks[1]?.type === "prose" ? proseBlocks[1].heading : "Crossing the Border"}
            borderParagraphs={proseBlocks[1]?.type === "prose" ? proseBlocks[1].paragraphs : []}
            borderPageHref={countryFacts.borderPageHref}
            borderPageLabel={countryFacts.borderPageLabel}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border journey involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={countryFacts.companyControlsLabel}
            companyControls={countryFacts.companyControls}
            authorityControlsLabel={countryFacts.authorityControlsLabel}
            authorityControls={countryFacts.authorityControls}
            documentsHeading="Documents to Prepare"
            documentsIntro={countryFacts.documentsIntro}
            documentsItems={countryFacts.documentsItems}
            documentsDisclaimer={countryFacts.documentsDisclaimer}
            destinationHeading={`Arriving in ${route.to}`}
            destinationParagraphs={
              scenariosBlock && scenariosBlock.type === "scenarios"
                ? []
                : proseBlocks[2]?.type === "prose"
                  ? proseBlocks[2].paragraphs
                  : []
            }
            vehicleHeading="Vehicle & Luggage"
            vehicleText="We size the vehicle — sedan, SUV or van — to your group and bags, which suits relocation-style trips as well as normal travel. Tell us your volume when booking."
            whoSuitsHeading="Who This Route Works Best For"
            whoSuits={scenariosBlock && scenariosBlock.type === "scenarios" ? scenariosBlock.items : []}
            comparisonHeading={comparisonBlock && comparisonBlock.type === "comparison" ? comparisonBlock.heading : undefined}
            comparisonIntro={comparisonBlock && comparisonBlock.type === "comparison" ? comparisonBlock.intro : undefined}
            comparison={
              comparisonBlock && comparisonBlock.type === "comparison"
                ? comparisonBlock.rows.map((r) => ({ criterion: r.criterion, road: r.a, flight: r.b }))
                : undefined
            }
            checklistHeading={checklistBlock && checklistBlock.type === "checklist" ? checklistBlock.heading : "Planning the Journey"}
            checklist={checklistBlock && checklistBlock.type === "checklist" ? checklistBlock.items : []}
            bookingHeading="How Booking Works"
            bookingSteps={bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need the return journey? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedGccRoutes.length > 0 ? `Other Saudi to ${countryName} Routes` : undefined}
            relatedRoutes={relatedGccRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point, preferred date and group size — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your international transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }
  }

  // GCC -> Saudi international road-transfer routes get the "Cross-Border
  // Arrival Journey" shell — the reverse-direction counterpart to the
  // Saudi -> GCC pages above, with its own editorial identity (the border
  // section sits early, right after GCC-side departure prep, since for this
  // direction the crossing genuinely happens near the start of the trip).
  // abu-dhabi-to-riyadh already carries its own hand-built customLayout from
  // an earlier pass — that content is reused directly rather than
  // duplicated into data/gcc-to-saudi-route-content.ts.
  const gccOriginCountry = gccCountryForOrigin(route);
  if (isGccToSaudiRoute(route) && gccOriginCountry) {
    const originCountryFacts = gccToSaudiCountryFacts[gccOriginCountry];
    const content = gccToSaudiRouteContent[route.slug];

    if (content) {
      const destinationCity = getCity(
        route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.to.toLowerCase()) ??
          route.relatedCitySlugs[0] ??
          ""
      );

      const relatedGccToSaudiRoutes = routes
        .filter(
          (r) =>
            r.slug !== route.slug &&
            r.slug !== reverseRoute?.slug &&
            isGccToSaudiRoute(r) &&
            (r.to === route.to || gccCountryForOrigin(r) === gccOriginCountry)
        )
        .slice(0, 4)
        .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

      const distancePage = findDistancePage(route.slug);
      const hubLinks = [
        ...(destinationCity ? [{ label: `${destinationCity.name} taxi service`, href: `/taxi-service/${destinationCity.slug}` }] : []),
        { label: "Border transfer services", href: "/border-transfers" },
        ...(distancePage ? [distancePage] : []),
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} International Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <GccToSaudiRouteView
            eyebrow="Cross-Border Arrival"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.intro}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            destinationLabel={route.to}
            facts={[
              { label: "Road distance", value: route.distance, emphasis: true },
              { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
              { label: "Border crossing", value: originCountryFacts.crossingName },
            ]}
            mapOrigin={content.mapOrigin}
            mapDestination={content.mapDestination}
            mapNote="The map shows a typical driving route. Your exact starting point and current road/border conditions will affect the real distance and time."
            timelineHeading={content.timelineHeading}
            timeline={content.timeline}
            departureHeading={content.departureHeading}
            departureParagraphs={content.departureParagraphs}
            borderHeading={content.borderHeading}
            beforeBorderLabel={content.beforeBorderLabel}
            beforeBorderText={content.beforeBorderText}
            afterBorderLabel={content.afterBorderLabel}
            afterBorderText={content.afterBorderText}
            borderParagraphs={content.borderParagraphs}
            borderPageHref={originCountryFacts.borderPageHref}
            borderPageLabel={originCountryFacts.borderPageLabel}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border journey involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={originCountryFacts.companyControlsLabel}
            companyControls={originCountryFacts.companyControls}
            authorityControlsLabel={originCountryFacts.authorityControlsLabel}
            authorityControls={originCountryFacts.authorityControls}
            documentsHeading="Documents to Prepare"
            documentsIntro={originCountryFacts.documentsIntro}
            documentsItems={originCountryFacts.documentsItems}
            documentsDisclaimer={originCountryFacts.documentsDisclaimer}
            saudiJourneyHeading={content.saudiJourneyHeading}
            saudiJourneyParagraphs={content.saudiJourneyParagraphs}
            destinationHeading={content.destinationHeading}
            destinationParagraphs={content.destinationParagraphs}
            vehicleHeading="Vehicle & Luggage"
            vehicleText={content.vehicleText}
            whoSuitsHeading="Who This Route Suits"
            whoSuits={content.whoSuits}
            comparisonHeading={content.comparison ? "Road Transfer vs Flying" : undefined}
            comparisonIntro={content.comparisonIntro}
            comparison={content.comparison}
            checklistHeading="Practical Checklist"
            checklist={content.checklist}
            bookingHeading="How Booking Works"
            bookingSteps={content.bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need the return journey? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedGccToSaudiRoutes.length > 0 ? "Other Cross-Border Arrivals" : undefined}
            relatedRoutes={relatedGccToSaudiRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point, destination, and travel date — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your international transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }

    // abu-dhabi-to-riyadh: reuse its existing hand-built customLayout blocks.
    if (route.customLayout) {
      const blocks = route.customLayout;
      const factsBlock = blocks.find((b) => b.type === "facts");
      const mapBlock = blocks.find((b) => b.type === "map");
      const timelineBlock = blocks.find((b) => b.type === "timeline");
      const proseBlocks = blocks.filter((b) => b.type === "prose");
      const borderBlock = blocks.find((b) => b.type === "borderPanel");
      const comparisonBlock = blocks.find((b) => b.type === "comparison");

      const relatedGccToSaudiRoutes = routes
        .filter(
          (r) =>
            r.slug !== route.slug &&
            r.slug !== reverseRoute?.slug &&
            isGccToSaudiRoute(r) &&
            (r.to === route.to || gccCountryForOrigin(r) === gccOriginCountry)
        )
        .slice(0, 4)
        .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

      const distancePage = findDistancePage(route.slug);
      const hubLinks = [
        { label: "Border transfer services", href: "/border-transfers" },
        ...(distancePage ? [distancePage] : []),
      ];

      const bookingSteps = [
        { label: "Share pickup, date & group size", detail: `Your ${route.from} pickup point, preferred date, and passenger/luggage count.` },
        { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed before you travel." },
        { label: "Driver meets you", detail: "At your address, with rest stops planned for the long drive." },
        { label: "Border crossing & arrival", detail: `${originCountryFacts.crossingName} handled by your driver, then on to ${route.to}.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} International Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <GccToSaudiRouteView
            eyebrow="Cross-Border Arrival"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.about}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            destinationLabel={route.to}
            facts={
              factsBlock && factsBlock.type === "facts"
                ? factsBlock.items
                : [
                    { label: "Road distance", value: route.distance, emphasis: true },
                    { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
                    { label: "Border crossing", value: originCountryFacts.crossingName },
                  ]
            }
            mapOrigin={mapBlock && mapBlock.type === "map" ? mapBlock.origin : undefined}
            mapDestination={mapBlock && mapBlock.type === "map" ? mapBlock.destination : undefined}
            mapNote={mapBlock && mapBlock.type === "map" ? mapBlock.note : undefined}
            timelineHeading={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.heading : "How the Journey Unfolds"}
            timeline={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.steps : []}
            departureHeading={proseBlocks[0]?.type === "prose" ? proseBlocks[0].heading : "Before You Leave"}
            departureParagraphs={proseBlocks[0]?.type === "prose" ? proseBlocks[0].paragraphs : []}
            borderHeading={borderBlock && borderBlock.type === "borderPanel" ? borderBlock.heading : "Crossing Into Saudi Arabia"}
            beforeBorderLabel={`On the ${route.from.replace(/\s*Airport\s*/i, "").trim()} side`}
            beforeBorderText="Departure formalities and the approach to the crossing, handled by your driver."
            afterBorderLabel="On the Saudi side"
            afterBorderText="Saudi entry procedures, then the onward road journey to your destination."
            borderParagraphs={borderBlock && borderBlock.type === "borderPanel" ? borderBlock.paragraphs : []}
            borderPageHref={originCountryFacts.borderPageHref}
            borderPageLabel={originCountryFacts.borderPageLabel}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border journey involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={originCountryFacts.companyControlsLabel}
            companyControls={originCountryFacts.companyControls}
            authorityControlsLabel={originCountryFacts.authorityControlsLabel}
            authorityControls={originCountryFacts.authorityControls}
            documentsHeading="Documents to Prepare"
            documentsIntro={originCountryFacts.documentsIntro}
            documentsItems={originCountryFacts.documentsItems}
            documentsDisclaimer={originCountryFacts.documentsDisclaimer}
            saudiJourneyHeading={proseBlocks[1]?.type === "prose" ? proseBlocks[1].heading : "The Saudi-Side Drive"}
            saudiJourneyParagraphs={proseBlocks[1]?.type === "prose" ? proseBlocks[1].paragraphs : []}
            destinationHeading={proseBlocks[2]?.type === "prose" ? proseBlocks[2].heading : `Arriving in ${route.to}`}
            destinationParagraphs={proseBlocks[2]?.type === "prose" ? proseBlocks[2].paragraphs : []}
            vehicleHeading="Vehicle & Luggage"
            vehicleText="We size the vehicle — sedan, SUV or van — to your group and bags. Tell us your luggage volume when booking."
            whoSuitsHeading="Who This Route Works Best For"
            whoSuits={[
              { title: "Travellers with heavy or awkward luggage", description: "Equipment, samples or gear that's expensive or impractical to fly — one uninterrupted vehicle trip avoids changing cars at the border." },
              { title: "Families avoiding two sets of check-in queues", description: "Everyone and everything moves in one car rather than juggling connections and baggage claims at both ends." },
              { title: "Private groups who'd rather travel together", description: "One vehicle keeps the group together instead of coordinating separate flight arrivals." },
              { title: "Travellers connecting UAE and Saudi business meetings", description: "A single scheduled arrival with a predictable, private itinerary instead of an airport transfer chain." },
            ]}
            comparisonHeading={comparisonBlock && comparisonBlock.type === "comparison" ? comparisonBlock.heading : undefined}
            comparisonIntro={undefined}
            comparison={
              comparisonBlock && comparisonBlock.type === "comparison"
                ? comparisonBlock.rows.map((r) => ({ criterion: r.criterion, road: r.a, flight: r.b }))
                : undefined
            }
            checklistHeading="Practical Checklist"
            checklist={[
              "Valid passport and any Saudi visa/entry permit required for your nationality",
              `Exact pickup point in ${route.from} and destination in ${route.to}`,
              "Passenger and luggage count",
              "A comfortable buffer for the border crossing",
              "Emergency contact details",
            ]}
            bookingHeading="How Booking Works"
            bookingSteps={bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need the return journey? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedGccToSaudiRoutes.length > 0 ? "Other Cross-Border Arrivals" : undefined}
            relatedRoutes={relatedGccToSaudiRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point, preferred date and group size — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your international transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }
  }

  // Saudi City -> Border routes get the "Border Departure Planner" shell —
  // a Saudi-side-only drop-off service, distinct from both GccRouteView and
  // GccToSaudiRouteView (which cross the border and continue). The
  // signature "what this transfer covers / doesn't cover" scope panel is
  // the one thing every route here must make unmissable: the service ends
  // at the Saudi-side facility. riyadh-to-al-batha-border and
  // dammam-to-al-batha-border already carry hand-built customLayout from an
  // earlier pass — that content is reused directly for the parts that map
  // cleanly (map/facts/timeline/prose/scenarios), with the scope panel
  // authored directly here since their existing checklist blocks don't
  // share one consistent shape to auto-map.
  const borderCountry = borderCountryFor(route);
  if (isCityToBorderRoute(route) && borderCountry) {
    const crossingFacts = cityToBorderCrossingFacts[borderCountry];
    const content = cityToBorderRouteContent[route.slug];

    const relatedCityToBorderRoutes = routes
      .filter(
        (r) =>
          r.slug !== route.slug &&
          r.slug !== reverseRoute?.slug &&
          isCityToBorderRoute(r) &&
          (r.from === route.from || borderCountryFor(r) === borderCountry)
      )
      .slice(0, 4)
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const distancePage = findDistancePage(route.slug);
    const hubLinks = [
      { label: `${route.from.replace(/\s*Airport\s*/i, "").trim()} taxi service`, href: `/taxi-service/${(getCity(route.relatedCitySlugs[0] ?? "")?.slug) ?? ""}` },
      { label: "Border transfer services", href: "/border-transfers" },
      ...(distancePage ? [distancePage] : []),
    ].filter((l) => !l.href.endsWith("/"));

    if (content) {
      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} Border Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <CityToBorderRouteView
            eyebrow="Saudi-Side Border Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.intro}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            borderLabel={route.to}
            facts={[
              { label: "Road distance", value: route.distance, emphasis: true },
              { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
              { label: "Border crossing", value: crossingFacts.crossingName },
            ]}
            mapOrigin={content.mapOrigin}
            mapDestination={content.mapDestination}
            mapNote="The map shows a typical driving route. Your exact starting point and current road conditions will affect the real distance and time."
            scopeHeading="What This Transfer Covers"
            coversLabel="Included in this transfer"
            covers={[
              `Door-to-door pickup anywhere in ${route.from}`,
              "The full Saudi-side road journey to the border",
              "Drop-off at the Saudi-side border facility",
              "A fixed price agreed before you travel",
            ]}
            doesNotCoverLabel="Not included — arranged separately"
            doesNotCover={[
              "Crossing the border itself",
              `${crossingFacts.authorityControlsLabel.replace("What ", "")}`,
              "Onward transport on the other side of the border",
            ]}
            scopeNote="This is a Saudi-side-only service. If you need the complete cross-border journey instead, check whether a through-route to your final destination exists on this site."
            roadJourneyHeading={content.roadJourneyHeading}
            roadJourneyParagraphs={content.roadJourneyParagraphs}
            timelineHeading="How the Journey Unfolds"
            timeline={content.timeline}
            departureHeading="When Should I Leave?"
            departureIntro={content.departureIntro}
            departurePoints={content.departurePoints}
            handoverHeading="At the Border"
            handoverParagraphs={content.handoverParagraphs}
            companyControlsLabel={crossingFacts.companyControlsLabel}
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel={crossingFacts.authorityControlsLabel}
            authorityControls={crossingFacts.authorityControls}
            borderPageHref={crossingFacts.borderPageHref}
            borderPageLabel={crossingFacts.borderPageLabel}
            documentsHeading="Documents to Prepare"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            vehicleHeading="Vehicle & Luggage"
            vehicleText={content.vehicleText}
            whoSuitsHeading="Who This Route Suits"
            whoSuits={content.whoSuits}
            comparisonHeading={content.comparisonText ? "Considering the Full Cross-Border Journey?" : undefined}
            comparisonText={content.comparisonText}
            checklistHeading="Practical Checklist"
            checklist={content.checklist}
            bookingHeading="How Booking Works"
            bookingSteps={content.bookingSteps}
            reverseHeading={reverseRoute ? "Coming the Other Way?" : undefined}
            reverseText={
              reverseRoute
                ? `We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedCityToBorderRoutes.length > 0 ? "Other Border Transfers" : undefined}
            relatedRoutes={relatedCityToBorderRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point and travel date — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your Saudi-side border transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }

    // riyadh-to-al-batha-border / dammam-to-al-batha-border: reuse existing
    // hand-built customLayout blocks for the parts that map cleanly; the
    // scope panel is authored directly since their checklist blocks don't
    // share one consistent shape (one is a service-inclusion list, the
    // other a practical prep list).
    if (route.customLayout) {
      const blocks = route.customLayout;
      const factsBlock = blocks.find((b) => b.type === "facts");
      const mapBlock = blocks.find((b) => b.type === "map");
      const timelineBlock = blocks.find((b) => b.type === "timeline");
      const proseBlocks = blocks.filter((b) => b.type === "prose");
      const scenariosBlock = blocks.find((b) => b.type === "scenarios");

      const bookingSteps = [
        { label: "Share pickup, date & group size", detail: `Your ${route.from} pickup point, preferred date, and passenger/luggage count.` },
        { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed before you travel." },
        { label: "Driver meets you", detail: "At your address, with a rest stop planned for the drive." },
        { label: "Drop-off at the border", detail: `At the Saudi-side ${route.to} facility, ready for exit formalities.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} Border Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <CityToBorderRouteView
            eyebrow="Saudi-Side Border Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.about}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            borderLabel={route.to}
            facts={
              factsBlock && factsBlock.type === "facts"
                ? factsBlock.items
                : [
                    { label: "Road distance", value: route.distance, emphasis: true },
                    { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
                    { label: "Border crossing", value: crossingFacts.crossingName },
                  ]
            }
            mapOrigin={mapBlock && mapBlock.type === "map" ? mapBlock.origin : undefined}
            mapDestination={mapBlock && mapBlock.type === "map" ? mapBlock.destination : undefined}
            mapNote={mapBlock && mapBlock.type === "map" ? mapBlock.note : undefined}
            scopeHeading="What This Transfer Covers"
            coversLabel="Included in this transfer"
            covers={[
              `Door-to-door pickup anywhere in ${route.from}`,
              "The full Saudi-side road journey to the border",
              "One planned rest stop along the way",
              "Drop-off at the Saudi-side border point",
              "A fixed price agreed before you travel",
            ]}
            doesNotCoverLabel="Not included — arranged separately"
            doesNotCover={[
              "Crossing into the UAE",
              "Emirati entry formalities and mandatory UAE vehicle insurance",
              "Onward UAE transport or a company car handover on the other side",
            ]}
            scopeNote="This is a Saudi-side-only service. For the complete cross-border journey into the UAE, see the related routes below."
            roadJourneyHeading={proseBlocks[0]?.type === "prose" ? proseBlocks[0].heading : "The Road Journey"}
            roadJourneyParagraphs={proseBlocks[0]?.type === "prose" ? proseBlocks[0].paragraphs : []}
            timelineHeading={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.heading : "How the Journey Unfolds"}
            timeline={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.steps : []}
            departureHeading="When Should I Leave?"
            departureIntro="Plan your departure with the drive time and a realistic border buffer in mind — we don't control UAE-side timing, so build in flexibility rather than assuming an exact crossing time."
            departurePoints={[
              "Several hours of driving before the border itself",
              "UAE-side processing reported from well under an hour to a few hours at busy periods",
              "Weekends and holidays tend to see busier crossings",
              "Share any onward connection timing when booking",
            ]}
            handoverHeading="What Happens After You Reach the Border?"
            handoverParagraphs={
              proseBlocks
                .slice(1)
                .filter((b): b is Extract<typeof b, { type: "prose" }> => b.type === "prose")
                .flatMap((b) => b.paragraphs)
                .slice(0, 3)
            }
            companyControlsLabel={crossingFacts.companyControlsLabel}
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel={crossingFacts.authorityControlsLabel}
            authorityControls={crossingFacts.authorityControls}
            borderPageHref={crossingFacts.borderPageHref}
            borderPageLabel={crossingFacts.borderPageLabel}
            documentsHeading="Documents to Prepare"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            vehicleHeading="Vehicle & Luggage"
            vehicleText="We size the vehicle — sedan, SUV or van — to your group and bags. Tell us your luggage volume when booking."
            whoSuitsHeading="Who Typically Books This Route?"
            whoSuits={scenariosBlock && scenariosBlock.type === "scenarios" ? scenariosBlock.items : []}
            comparisonHeading="Considering the Full Cross-Border Journey?"
            comparisonText={`If you need the complete journey into the UAE rather than just the Saudi-side leg, our ${route.from} to Abu Dhabi and ${route.from} to Dubai transfers cross the border and continue all the way.`}
            checklistHeading="Practical Checklist"
            checklist={[
              "Valid passport and any UAE visa/entry permit required for your nationality",
              `Exact pickup point in ${route.from}`,
              "Passenger and luggage count",
              "Onward UAE-side transport arranged or being arranged",
              "A realistic buffer for the border process",
            ]}
            bookingHeading="How Booking Works"
            bookingSteps={bookingSteps}
            reverseHeading={reverseRoute ? "Coming the Other Way?" : undefined}
            reverseText={
              reverseRoute
                ? `We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedCityToBorderRoutes.length > 0 ? "Other Border Transfers" : undefined}
            relatedRoutes={relatedCityToBorderRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point and travel date — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your Saudi-side border transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }
  }

  // Border -> City / Border -> Airport routes get the "Saudi Arrival
  // Transfer" shell — the reverse-direction counterpart to City -> Border
  // (the journey starts at the border rather than ending there). Signature
  // features: a "What Happens After the Border?" flow placed right after
  // the snapshot facts, and a dedicated "Meeting Your Driver" section that
  // is honest about pickup coordination being timing-flexible rather than
  // a fixed point/slot. al-batha-border-to-riyadh already carries hand-built
  // customLayout from an earlier pass — reused directly for the parts that
  // map cleanly.
  const borderOriginCountry = borderCountryForOrigin(route);
  if (isBorderToCityRoute(route) && borderOriginCountry) {
    const crossingFacts = borderToCityCrossingFacts[borderOriginCountry];
    const content = borderToCityRouteContent[route.slug];
    const destinationAirport = /airport/i.test(route.to) ? getAirport(route.to.toLowerCase().replace(/ /g, "-")) : undefined;

    const relatedBorderToCityRoutes = routes
      .filter(
        (r) =>
          r.slug !== route.slug &&
          r.slug !== reverseRoute?.slug &&
          isBorderToCityRoute(r) &&
          (r.to === route.to || borderCountryForOrigin(r) === borderOriginCountry)
      )
      .slice(0, 4)
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const distancePage = findDistancePage(route.slug);
    const destinationCity = !destinationAirport
      ? getCity(route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.to.toLowerCase()) ?? route.relatedCitySlugs[0] ?? "")
      : undefined;
    const hubLinks = [
      ...(destinationAirport ? [{ label: `${destinationAirport.name} (${destinationAirport.code}) hub`, href: `/airport-transfer/${destinationAirport.slug}` }] : []),
      ...(destinationCity ? [{ label: `${destinationCity.name} taxi service`, href: `/taxi-service/${destinationCity.slug}` }] : []),
      { label: "Border transfer services", href: "/border-transfers" },
      ...(distancePage ? [distancePage] : []),
    ];

    if (content) {
      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} Arrival Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <BorderToCityRouteView
            eyebrow="Saudi Arrival Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.intro}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            borderLabel={route.from}
            destinationLabel={route.to}
            facts={[
              { label: "Road distance", value: route.distance, emphasis: true },
              { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
              { label: "Border crossing", value: crossingFacts.crossingName },
            ]}
            mapOrigin={content.mapOrigin}
            mapDestination={content.mapDestination}
            mapNote="The map shows a typical driving route. Your exact meeting point and current road conditions will affect the real distance and time."
            afterBorderHeading="What Happens After the Border?"
            afterBorderIntro={content.afterBorderIntro}
            afterBorderSteps={content.afterBorderSteps}
            meetingHeading="Meeting Your Driver"
            meetingParagraphs={content.meetingParagraphs}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border arrival involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={crossingFacts.companyControlsLabel}
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel={crossingFacts.authorityControlsLabel}
            authorityControls={crossingFacts.authorityControls}
            borderPageHref={crossingFacts.borderPageHref}
            borderPageLabel={crossingFacts.borderPageLabel}
            documentsHeading="Documents to Have Ready"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            roadJourneyHeading={content.roadJourneyHeading}
            roadJourneyParagraphs={content.roadJourneyParagraphs}
            destinationHeading={content.destinationHeading}
            destinationParagraphs={content.destinationParagraphs}
            planningHeading="When Should I Book This Transfer?"
            planningIntro={content.planningIntro}
            planningPoints={content.planningPoints}
            vehicleHeading="Vehicle & Luggage"
            vehicleText={content.vehicleText}
            whoSuitsHeading="Who This Transfer Suits"
            whoSuits={content.whoSuits}
            checklistHeading="Practical Arrival Checklist"
            checklist={content.checklist}
            bookingHeading="How Booking Works"
            bookingSteps={content.bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need to reach the border from ${reverseRoute.from} instead? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedBorderToCityRoutes.length > 0 ? "Other Border Arrivals" : undefined}
            relatedRoutes={relatedBorderToCityRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your expected crossing time and destination — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your Saudi arrival transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }

    // al-batha-border-to-riyadh: reuse its existing hand-built customLayout
    // blocks for the parts that map cleanly (timeline/map/facts/checklist);
    // the remaining narrative is drawn from its own prose blocks.
    if (route.customLayout) {
      const blocks = route.customLayout;
      const factsBlock = blocks.find((b) => b.type === "facts");
      const mapBlock = blocks.find((b) => b.type === "map");
      const timelineBlock = blocks.find((b) => b.type === "timeline");
      const proseBlocks = blocks.filter((b) => b.type === "prose");
      const checklistBlock = blocks.find((b) => b.type === "checklist");

      const bookingSteps = [
        { label: "Share your crossing time & destination", detail: `Your expected clearance time and ${route.to} destination or flight details.` },
        { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before your travel day." },
        { label: "Driver meets you at the border", detail: `At an agreed point once you've cleared ${route.from}.` },
        { label: "Arrival", detail: `Drop-off at your ${route.to} address or terminal.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} Arrival Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <BorderToCityRouteView
            eyebrow="Saudi Arrival Transfer"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.about}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            borderLabel={route.from}
            destinationLabel={route.to}
            facts={
              factsBlock && factsBlock.type === "facts"
                ? factsBlock.items
                : [
                    { label: "Road distance", value: route.distance, emphasis: true },
                    { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
                    { label: "Border crossing", value: crossingFacts.crossingName },
                  ]
            }
            mapOrigin={mapBlock && mapBlock.type === "map" ? mapBlock.origin : undefined}
            mapDestination={mapBlock && mapBlock.type === "map" ? mapBlock.destination : undefined}
            mapNote={mapBlock && mapBlock.type === "map" ? mapBlock.note : undefined}
            afterBorderHeading={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.heading : "What Happens After the Border?"}
            afterBorderIntro={proseBlocks[0]?.type === "prose" ? proseBlocks[0].paragraphs[0] : undefined}
            afterBorderSteps={timelineBlock && timelineBlock.type === "timeline" ? timelineBlock.steps : []}
            meetingHeading={proseBlocks[1]?.type === "prose" ? proseBlocks[1].heading : "Meeting Your Driver"}
            meetingParagraphs={proseBlocks[1]?.type === "prose" ? proseBlocks[1].paragraphs : []}
            responsibilityHeading="What We Handle vs What the Border Controls"
            responsibilityIntro="A cross-border arrival involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={crossingFacts.companyControlsLabel}
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel={crossingFacts.authorityControlsLabel}
            authorityControls={crossingFacts.authorityControls}
            borderPageHref={crossingFacts.borderPageHref}
            borderPageLabel={crossingFacts.borderPageLabel}
            documentsHeading="Documents to Have Ready"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            roadJourneyHeading="The Saudi Highway Journey"
            roadJourneyParagraphs={[
              "Once your driver has you on the road, the route heads west on Highway 10 via Al Kharj and Haradh — a long, flat desert drive with a rest stop built in for a journey of this length.",
            ]}
            destinationHeading={proseBlocks[2]?.type === "prose" ? proseBlocks[2].heading : `Arriving in ${route.to}`}
            destinationParagraphs={proseBlocks[2]?.type === "prose" ? proseBlocks[2].paragraphs : []}
            planningHeading="When Should I Book This Transfer?"
            planningIntro="Coordination matters more than exact timing on this leg — share your crossing estimate and we handle the rest."
            planningPoints={checklistBlock && checklistBlock.type === "checklist" ? checklistBlock.items : []}
            vehicleHeading="Vehicle & Luggage"
            vehicleText="We size the vehicle — sedan, SUV or van — to your group and bags. Tell us your luggage volume when booking."
            whoSuitsHeading="Who This Transfer Suits"
            whoSuits={[
              { title: "Travellers arranging pickup before crossing", description: "A confirmed vehicle waiting on the Saudi side rather than negotiating a ride at the border itself." },
              { title: "Travellers continuing to a flight from Riyadh", description: "Drop-off timed around your departure rather than the city centre by default." },
              { title: "Business travellers and groups", description: "A vehicle sized to your party for the long highway drive." },
            ]}
            checklistHeading="Practical Arrival Checklist"
            checklist={[
              "Passport and Saudi entry documentation accessible as you clear the crossing",
              "Exact Riyadh destination or flight details",
              "Booking confirmation or driver contact details, if supplied",
              "Passenger and luggage count",
              "A realistic buffer, since border-clearance timing varies",
            ]}
            bookingHeading="How Booking Works"
            bookingSteps={bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need to reach the border from ${reverseRoute.from} instead? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedBorderToCityRoutes.length > 0 ? "Other Border Arrivals" : undefined}
            relatedRoutes={relatedBorderToCityRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your expected crossing time and destination — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your Saudi arrival transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }
  }

  // Saudi <-> Jordan international road routes get the "Saudi-Jordan
  // International Journey" shell — a single small route family (both
  // directions share one component with direction-aware content, unlike
  // the larger GCC clusters which got two separate shells). The heritage
  // link (Petra/Hegra) only appears for the AlUla <-> Amman pair, and the
  // road-vs-flying comparison and overnight-stop planning are framed very
  // differently for the ~600km Tabuk leg vs the ~1,300km Madinah leg —
  // genuine content variation rather than one fixed template.
  const jordanDirection = saudiJordanDirection(route);
  if (isSaudiJordanRoute(route) && jordanDirection) {
    const content = saudiJordanRouteContent[route.slug];

    if (content) {
      const isSaudiOrigin = jordanDirection === "saudi-to-jordan";
      const saudiSideLabel = isSaudiOrigin ? route.from : route.to;
      const originSaudiCity = getCity(
        route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === saudiSideLabel.toLowerCase()) ??
          route.relatedCitySlugs[0] ??
          ""
      );

      const relatedSaudiJordanRoutes = routes
        .filter((r) => r.slug !== route.slug && r.slug !== reverseRoute?.slug && isSaudiJordanRoute(r))
        .slice(0, 4)
        .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

      const distancePage = findDistancePage(route.slug);
      const hubLinks = [
        ...(originSaudiCity ? [{ label: `${originSaudiCity.name} taxi service`, href: `/taxi-service/${originSaudiCity.slug}` }] : []),
        { label: "Jordan border transfers", href: "/border-transfers/jordan-border" },
        { label: "Intercity transfers", href: "/intercity-transfers" },
        ...(distancePage ? [distancePage] : []),
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(crumbs),
              serviceSchema({
                name: `${route.from} to ${route.to} International Transfer`,
                description: route.intro,
                path,
                serviceType: "Border Transfer",
                dateModified: route.lastUpdated,
              }),
              faqSchema(faqs),
            ]}
          />
          <SaudiJordanRouteView
            eyebrow="Saudi-Jordan International Journey"
            h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
            dek={route.intro}
            heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
            heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
            originLabel={route.from}
            destinationLabel={route.to}
            facts={[
              { label: "Road distance", value: route.distance, emphasis: true },
              { label: "Pure driving time", value: pureDrivingTime(route.duration), emphasis: true },
              { label: "Border crossing", value: saudiJordanCrossingFacts.crossingName },
            ]}
            mapOrigin={content.mapOrigin}
            mapDestination={content.mapDestination}
            mapNote="The map shows a typical driving route. Your exact starting point and current road/border conditions will affect the real distance and time."
            journeyHeading={content.journeyHeading}
            journeyParagraphs={content.journeyParagraphs}
            timelineHeading={content.timelineHeading}
            timeline={content.timeline}
            heritageLinkHeading={content.heritageLinkHeading}
            heritageLinkParagraphs={content.heritageLinkParagraphs}
            borderHeading={content.borderHeading}
            borderParagraphs={content.borderParagraphs}
            responsibilityIntro="A cross-border journey involves two different kinds of responsibility — it's worth being clear about which is which."
            companyControlsLabel={saudiJordanCrossingFacts.companyControlsLabel}
            companyControls={saudiJordanCrossingFacts.companyControls}
            authorityControlsLabel={saudiJordanCrossingFacts.authorityControlsLabel}
            authorityControls={saudiJordanCrossingFacts.authorityControls}
            borderPageHref={saudiJordanCrossingFacts.borderPageHref}
            borderPageLabel={saudiJordanCrossingFacts.borderPageLabel}
            documentsHeading="Documents to Prepare"
            documentsIntro={saudiJordanCrossingFacts.documentsIntro}
            documentsItems={saudiJordanCrossingFacts.documentsItems}
            documentsDisclaimer={saudiJordanCrossingFacts.documentsDisclaimer}
            planningHeading={content.planningHeading}
            planningIntro={content.planningIntro}
            planningPoints={content.planningPoints}
            destinationHeading={content.destinationHeading}
            destinationParagraphs={content.destinationParagraphs}
            vehicleHeading="Vehicle & Luggage"
            vehicleText={content.vehicleText}
            whoSuitsHeading="Who This Route Suits"
            whoSuits={content.whoSuits}
            comparisonHeading={content.comparison ? "Road Transfer vs Flying" : undefined}
            comparisonIntro={content.comparisonIntro}
            comparison={content.comparison}
            checklistHeading="Practical Checklist"
            checklist={content.checklist}
            bookingHeading="How Booking Works"
            bookingSteps={content.bookingSteps}
            reverseHeading={reverseRoute ? "Travelling the Other Direction?" : undefined}
            reverseText={
              reverseRoute
                ? `Need the return journey? We also provide a private transfer from ${reverseRoute.from} to ${reverseRoute.to}, planned around what changes travelling that way.`
                : undefined
            }
            reverseLinkLabel={reverseRoute ? `${reverseRoute.from} to ${reverseRoute.to}` : undefined}
            reverseHref={reverseRoute ? `/routes/${reverseRoute.slug}` : undefined}
            relatedRoutesHeading={relatedSaudiJordanRoutes.length > 0 ? "Other Saudi-Jordan Routes" : undefined}
            relatedRoutes={relatedSaudiJordanRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="Frequently Asked Questions"
            faqs={faqs}
            ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
            ctaText="Share your pickup point, destination, and travel date — we reply with a fixed price before you travel."
            ctaLabel="Get a Quote"
            ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
            formHeading={`${route.from} → ${route.to} Quote`}
            formSubheading="Fixed price for your international transfer."
            formSlot={
              <QuoteForm
                serviceType={`${route.from} to ${route.to} transfer`}
                route={`${route.from} to ${route.to}`}
                defaultPickup={route.from}
                defaultDropoff={route.to}
              />
            }
            crumbs={crumbs}
          />
        </>
      );
    }
  }

  // Phase 3: Saudi domestic city-to-city routes get the new journey-type
  // shell (components/routes/RouteJourneyView.tsx). Airport/border/
  // international routes fall through to the unchanged design below.
  if (isDomesticCityRoute(route)) {
    const journeyType = classifyRoute(route);
    const domesticFaqs = buildRouteFaqs(route, journeyType);
    const blocks =
      route.customLayout ?? buildRouteBlocks(route, journeyType, reverseRoute ? `/routes/${reverseRoute.slug}` : undefined);

    // Related-route links stay within the domestic city-to-city batch — a
    // Riyadh-to-Jeddah page shouldn't surface Riyadh-to-Bahrain just because
    // they share an origin; that's a different commercial intent (border
    // transfer), out of scope for this phase.
    const relatedRouteItems = relatedRoutes
      .map((s) => getRoute(s))
      .filter((r): r is NonNullable<typeof r> => r !== undefined)
      .filter((r) => isDomesticCityRoute(r))
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const relatedCityItems = route.relatedCitySlugs
      .map((s) => {
        const c = getCity(s);
        return c ? { label: `${c.name} Taxi`, href: `/taxi-service/${s}` } : null;
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            serviceSchema({
              name: `${route.from} to ${route.to} Taxi Transfer`,
              description: route.intro,
              path,
              serviceType: "Intercity Transfer",
              dateModified: route.lastUpdated,
            }),
            faqSchema(domesticFaqs),
          ]}
        />
        <RouteJourneyView
          eyebrow={journeyTypeLabels[journeyType]}
          h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
          dek={route.intro}
          heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
          heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
          facts={[
            { label: "Distance", value: route.distance },
            { label: "Typical Driving Time", value: route.duration },
            { label: "Journey Type", value: journeyTypeLabels[journeyType] },
          ]}
          from={route.from}
          to={route.to}
          blocks={blocks}
          pickupHeading="Pickup Locations"
          pickupPoints={activePickupPoints ?? []}
          dropoffHeading="Drop-off Locations"
          dropoffPoints={activeDropoffPoints ?? []}
          relatedRoutesHeading={relatedRouteItems.length > 0 ? "Related Routes" : undefined}
          relatedRoutes={relatedRouteItems}
          relatedCitiesHeading={relatedCityItems.length > 0 ? "Taxi Service in Cities on This Route" : undefined}
          relatedCities={relatedCityItems}
          faqsHeading="Frequently Asked Questions"
          faqs={domesticFaqs}
          ctaHeading="Planning This Journey?"
          ctaText={`Share your pickup time and passenger details for the ${route.from} to ${route.to} transfer — we reply with a fixed price.`}
          ctaLabel="Get a Quote"
          ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
          formHeading={`${route.from} → ${route.to} Quote`}
          formSubheading="Fixed price for your private transfer."
          formSlot={
            <QuoteForm
              serviceType={`${route.from} to ${route.to} transfer`}
              route={`${route.from} to ${route.to}`}
              defaultPickup={route.from}
              defaultDropoff={route.to}
            />
          }
          crumbs={crumbs}
        />
      </>
    );
  }

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${route.from} to ${route.to} Taxi Transfer`,
            description: route.intro,
            path,
            serviceType: "Intercity Transfer",
            dateModified: route.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={route.h1 ?? `${route.from} to ${route.to} Taxi Service`}
        subtitle={route.intro}
        crumbs={crumbs}
        backgroundImage={route.heroImage ?? routeHero(route.from, route.to).src}
        backgroundAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
        whatsappMessage={`Hello! I'd like a quote for a ${route.from} to ${route.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {route.customLayout ? (
              <RouteCustomBody blocks={route.customLayout} from={route.from} to={route.to} />
            ) : (
              <>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
                Key takeaways
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>
                  • {route.from} to {route.to}: {route.distance}, approximately {route.duration} by private transfer.
                </li>
                <li>• Fixed price agreed before you travel — no meter, no surge, no toll surprises.</li>
                <li>• Door-to-door pickup and drop-off, available 24/7.</li>
                {route.lastUpdated && <li>• Page reviewed {route.lastUpdated}.</li>}
              </ul>
            </div>

            {rich && rich.journeyFlow.length > 0 && (
              <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  How This Journey Unfolds
                </h3>
                <ol className="mt-4 flex min-w-max items-stretch gap-2 sm:min-w-0 sm:flex-wrap">
                  {rich.journeyFlow.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-2">
                      <div className="w-40 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2.5 sm:w-44">
                        <p className="text-xs font-semibold text-navy">{step.label}</p>
                        {step.detail && (
                          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{step.detail}</p>
                        )}
                      </div>
                      {i < rich.journeyFlow.length - 1 && (
                        <ArrowRight className="size-4 shrink-0 text-gold rtl:rotate-180" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {rich && rich.journeyFacts.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {rich.journeyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className={
                      fact.emphasis
                        ? "rounded-lg border border-gold/40 bg-gold/[0.06] p-4"
                        : "rounded-lg border border-border bg-muted/40 p-4"
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">{fact.value}</p>
                  </div>
                ))}
              </div>
            )}

            {rich && rich.mapOrigin && rich.mapDestination && (
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Route Map</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-border shadow-sm">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
                    <iframe
                      title={`${route.from} to ${route.to} route map`}
                      src={`https://maps.google.com/maps?saddr=${encodeURIComponent(rich.mapOrigin)}&daddr=${encodeURIComponent(rich.mapDestination)}&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 size-full border-0"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{rich.mapNote}</p>
              </div>
            )}

            {reverseRoute && (
              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Return Journey Available
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Planning your return trip? We also provide private transfers in the opposite direction from{" "}
                  <Link
                    href={`/routes/${reverseRoute.slug}`}
                    className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
                  >
                    {reverseRoute.from} to {reverseRoute.to}
                  </Link>{" "}
                  with fixed fares and door-to-door pickup.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <Clock className="size-4 text-gold" /> Approx. {route.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <MapPin className="size-4 text-gold" /> {route.distance}
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-navy">
              Private transfer from {route.from} to {route.to}
            </h2>
            <p className="mt-3 text-muted-foreground">{route.about}</p>
            {!rich?.hideGenericIntro && (
              <p className="mt-3 text-muted-foreground">
                Our private transfer service is suitable for tourists, families,
                business travellers, Umrah passengers, and groups travelling with
                luggage.
              </p>
            )}

            <h2 className="mt-10 text-xl font-bold text-navy">
              Good to know about this route
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {route.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {n}
                </li>
              ))}
            </ul>

            {activePickupPoints && activeDropoffPoints && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <h3 className="font-semibold text-navy">Pickup locations</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {activePickupPoints.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <ArrowRight className="size-3.5 text-gold" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <h3 className="font-semibold text-navy">Drop-off locations</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {activeDropoffPoints.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <ArrowRight className="size-3.5 text-gold" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <h2 className="mt-10 text-xl font-bold text-navy">
              Booking details required
            </h2>
            <p className="mt-3 text-muted-foreground">
              To confirm your quote, please provide your pickup and drop-off
              locations, date and time, passenger and luggage count, your flight
              number if it&apos;s an airport pickup, and a contact number.
            </p>

            {/* Rich long-form sections (international / cross-border routes) */}
            {route.sections && route.sections.length > 0 && (
              <div className="mt-10 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
                {route.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
              </>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {route.from} → {route.to} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your private transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${route.from} to ${route.to} transfer`}
                  route={`${route.from} to ${route.to}`}
                  defaultPickup={route.from}
                  defaultDropoff={route.to}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      {!route.customLayout && <HowItWorks background="white" />}

      {relatedRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading="Related Routes"
          subheading="Other popular private transfers you may need."
          only={relatedRoutes}
        />
      )}

      {route.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="white"
          heading="Taxi Service in Cities on This Route"
          subheading="Local transfers in the cities connected by this journey."
          only={route.relatedCitySlugs}
        />
      )}

      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="muted" pageKey={route.slug} />
      <CTASection
        title={`Book Your ${route.from} to ${route.to} Taxi`}
        whatsappMessage={`Hello! I'd like to book a ${route.from} to ${route.to} taxi.`}
      />
    </>
  );
}
