import type { HajjTransfersHubContent } from "@/components/services/HajjTransfersHub";

/**
 * Hajj Transfers page — 2026 heading-structure update.
 *
 * Verified facts only: real route distances/durations (data/routes.ts,
 * matching the figures already published on each route's own page), real
 * airports (data/airports.ts), real cities (data/cities.ts), real vehicle
 * categories (data/vehicles.ts). Deliberately NOT a duplicate of the Umrah
 * page: Hajj involves official permits, fixed group scheduling, and access
 * rules that Umrah doesn't, and this page says clearly that those rules
 * come from the authorities, not from us. No specific current restriction
 * is stated as fact — official Hajj rules change and must be checked
 * against the current, authoritative source, not asserted here. The old
 * "Official Hajj Restrictions: What We Won't Tell You, and Why" heading
 * (awkward, negative) is retired per the brief in favour of "Hajj
 * Transportation and Official Requirements" — same honest content, a
 * more professional framing.
 *
 * Scope note: does not compete with the homepage, Airport Transfers,
 * Intercity Transfers, or the Umrah page — this page owns "private
 * transportation for Hajj travel" specifically and links out to those
 * broader hubs and to individual airport/city/route pages.
 *
 * Previously rendered via ServiceV2View (shared with other service
 * pages). Now rendered via the page-specific HajjTransfersHub component
 * instead, mirroring the Airport/Intercity/Umrah restructuring, so this
 * change doesn't touch any other page.
 */
export const hajjTransportServiceContent: HajjTransfersHubContent = {
  eyebrow: "Hajj Transportation",
  h1: "Private Hajj Transfers in Saudi Arabia",
  dek: "Private transportation for eligible Hajj travellers, subject to applicable Saudi regulations, seasonal restrictions, and service availability — airport pickup, hotel transfers, and transportation between Makkah and Madinah, arranged around an already-confirmed Hajj trip, priced and confirmed before you travel.",
  heroImage: "/images/heroes/makkah.webp",
  heroAlt: "The city of Makkah",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "Plan Your Transfer",
  secondaryCtaHref: "/get-quote",

  coreServiceHeading: "Private Hajj Transportation in Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private transportation for the parts of a Hajj journey we can actually arrange — airport pickup, transfers to supported hotels, transportation between Makkah and Madinah, and coordinated vehicles for a family or group travelling together. Each trip is a private vehicle and driver, booked and priced before you travel.",
    "We are not a Hajj operator, do not issue Hajj permits, and do not claim any official Hajj authorisation. What we arrange is the transportation layer around an already-confirmed Hajj trip, specifically where that transportation isn't already provided as part of an official Hajj package.",
  ],

  routesHeading: "Common Hajj Transfer Routes",
  routesIntro:
    "The most relevant legs of a Hajj journey, with the same distances and times already published on each route's own page — useful for planning around a package that only covers part of your transportation.",
  routeCards: [
    {
      title: "Jeddah Airport to Makkah",
      body: "Around 85 km, roughly 1 hour 15 minutes, direct from Jeddah's airport to your accommodation in Makkah where this leg isn't already covered by your Hajj package.",
      href: "/routes/jeddah-to-makkah",
      linkLabel: "Jeddah to Makkah route",
    },
    {
      title: "Jeddah Airport to Madinah",
      body: "Around 420 km, roughly 4.5–5 hours of driving, for travellers whose itinerary begins in Madinah before continuing to Makkah.",
      href: "/routes/jeddah-to-madinah",
      linkLabel: "Jeddah to Madinah route",
    },
    {
      title: "Madinah Airport to Madinah",
      body: "A short transfer of around 20 km, roughly 20-25 minutes, from Madinah's airport direct to hotels near the Prophet's Mosque.",
      href: "/routes/madinah-airport-to-madinah",
      linkLabel: "Madinah Airport to Madinah route",
    },
    {
      title: "Makkah to Madinah Transfers",
      body: "A long drive of around 450 km, roughly 4.5 hours, with a rest stop planned in for travellers who are tired or elderly.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
    {
      title: "Madinah to Makkah Transfers",
      body: "The reverse leg, the same 450 km and roughly 4.5 hours, for itineraries that begin in Madinah before continuing to Makkah.",
      href: "/routes/madinah-to-makkah",
      linkLabel: "Madinah to Makkah route",
    },
  ],

  airportHeading: "Hajj Airport Transfers",
  airportIntro:
    "Airport-to-accommodation transportation where it isn't already covered by your Hajj package. Share your flight details and group size when booking, so the right vehicle is waiting rather than arranged on the day.",
  airportCards: [
    {
      title: "Jeddah Airport Transfers",
      body: "Meet-and-greet at King Abdulaziz International Airport, with a direct drive to your Makkah or Madinah accommodation where this leg needs arranging separately.",
      href: "/airport-transfer/jeddah-airport",
      linkLabel: "Jeddah Airport transfers",
    },
    {
      title: "Madinah Airport Transfers",
      body: "Meet-and-greet at Prince Mohammad bin Abdulaziz International Airport, with a short direct transfer to hotels near the Prophet's Mosque.",
      href: "/airport-transfer/madinah-airport",
      linkLabel: "Madinah Airport transfers",
    },
    {
      title: "Airport to Hotel Transfers",
      body: "Direct pickup from arrivals to your hotel entrance, timed around your actual flight rather than a fixed schedule, with a vehicle sized to your group and luggage.",
      href: "/airport-transfers",
      linkLabel: "How airport pickup works",
    },
  ],

  citiesHeading: "Makkah and Madinah Hajj Transfers",
  citiesIntro:
    "Private transportation between the two holy cities, outside the areas and periods where movement is restricted to registered Hajj groups by the relevant authorities — the practical part of a trip that already has its official arrangements in place.",
  cityCards: [
    {
      title: "Transfers to Makkah",
      body: "Hotel and accommodation transfers in Makkah, arranged around your confirmed Hajj itinerary rather than assumed as part of it.",
      href: "/taxi-service/makkah",
      linkLabel: "Makkah taxi service",
    },
    {
      title: "Transfers to Madinah",
      body: "Hotel transfers near the Prophet's Mosque, whether Madinah is the first or second stage of your trip.",
      href: "/taxi-service/madinah",
      linkLabel: "Madinah taxi service",
    },
    {
      title: "Makkah to Madinah Private Transfers",
      body: "The genuinely long leg between the two cities, around 450 km — best planned with a rest stop, particularly for elderly or tired travellers.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
  ],

  familyHeading: "Hajj Transfers for Families and Groups",
  familyIntro:
    "Hajj is typically a family or group trip. A single larger vehicle keeps everyone together rather than splitting across separate cars.",
  familyCards: [
    {
      title: "Family Hajj Transportation",
      body: "Tell us your family's total numbers, including children and elderly travellers, so the right vehicle is planned rather than assumed on the day.",
    },
    {
      title: "Group Hajj Transfers",
      body: "Larger Hajj groups are usually better served by one or two bigger vehicles than several separate cars — share your group size so we can plan the combination.",
    },
    {
      title: "Choosing the Right Vehicle",
      body: "Luggage volume affects vehicle choice as much as passenger count — mention both when booking, especially during the busiest weeks of the season.",
    },
  ],

  vehiclesHeading: "Private Vehicles for Hajj Travel",
  vehiclesIntro: "Vehicle choice comes down to passengers and luggage — tell us your numbers honestly when you book.",
  vehicleCards: [
    {
      title: "Private Sedan Transfers",
      body: "Economy and Comfort sedans — Hyundai Accent, Toyota Yaris, Toyota Camry, or Hyundai Sonata — for one to three passengers with two to three bags.",
    },
    {
      title: "Premium Vehicles",
      body: "Mercedes E-Class or Lexus ES for travellers who prefer a premium cabin, seating up to three passengers with three bags.",
    },
    {
      title: "Family Vehicles",
      body: "A Toyota Land Cruiser or GMC Yukon SUV for up to five passengers and four bags, with room for a family and extra luggage.",
    },
    {
      title: "Minivan and Group Transfers",
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers with eight bags, or a Toyota Coaster minibus for larger Hajj groups.",
    },
  ],

  howItWorksBlock: {
    type: "timeline",
    heading: "How to Arrange a Hajj Transfer",
    orientation: "vertical",
    steps: [
      { label: "1. Share Your Journey Details", detail: "Flight details, accommodation, and passenger count for the specific legs you need — sent via WhatsApp or the quote form." },
      { label: "2. Receive Your Quote", detail: "A fixed, all-in price and a vehicle recommendation, matched to your group and luggage, agreed before you travel." },
      { label: "3. Confirm Your Transfer", detail: "Approve the quote and a specific driver is scheduled for your journey, no prepayment required." },
      { label: "4. Meet Your Driver", detail: "Your driver waits at the agreed point and takes you directly to your accommodation or onward destination." },
    ],
    note: "Hajj season is the busiest period of the year for vehicle demand, so earlier booking gives more certainty for the legs you need.",
  },

  requirementsHeading: "Hajj Transportation and Official Requirements",
  requirementsParagraphs: [
    "We provide private transportation — airport transfers, hotel transfers, supported city-to-city transportation, and vehicle or driver coordination. Hajj visas and eligibility, permits and quotas, access to restricted areas during the Hajj period, and official movement schedules for registered Hajj groups are all controlled by the relevant Saudi authorities, not by us.",
    "Booking a private transfer does not itself grant access to areas restricted during the Hajj period — that access is tied to official Hajj permits and registered group arrangements, not to any transportation booking. Hajj rules, permits, and access restrictions can change from year to year and sometimes within a season, so confirm the current position with your Hajj operator or the relevant Saudi authority close to your actual travel dates, rather than relying on this page.",
  ],

  planningHeading: "Preparing for Your Hajj Transfer",
  planningIntro:
    "A few things worth settling before you travel. We can't confirm your permit or official itinerary, but once those are settled with your operator, we can plan the transportation around them.",
  planningItems: [
    "Confirm your travel dates with your Hajj operator",
    "Confirm your pickup and destination for each transfer leg",
    "Provide accurate flight information",
    "Confirm your hotel or accommodation details",
    "Share your passenger and group size",
    "Confirm luggage requirements",
    "Check current Hajj travel restrictions with your operator or the relevant authority",
    "Keep your booking confirmation available",
  ],

  faqHeading: "Frequently Asked Questions About Hajj Transfers",
  faqs: [
    {
      question: "How do I book a private Hajj transfer in Saudi Arabia?",
      answer:
        "Share your flight details, accommodation, and passenger count through WhatsApp or our quote form. We reply with a fixed price and vehicle recommendation — no prepayment required.",
    },
    {
      question: "Can I book a Hajj transfer from Jeddah Airport to Makkah?",
      answer:
        "Yes, where this leg isn't already covered by your Hajj package — around 85 km and 1 hour 15 minutes, direct to your accommodation.",
    },
    {
      question: "Can I arrange transportation from Madinah Airport?",
      answer:
        "Yes. It's a short transfer, around 20 km and 20-25 minutes, direct to hotels near the Prophet's Mosque.",
    },
    {
      question: "Do you provide private transfers between Makkah and Madinah?",
      answer:
        "Yes, in both directions — around 450 km and 4.5 hours, with a rest stop built in, outside any areas or periods restricted to registered Hajj groups.",
    },
    {
      question: "Can families and groups book private Hajj transportation?",
      answer:
        "Yes. Tell us your group size and luggage when booking and we'll coordinate the right combination of vehicles rather than a single car for everyone.",
    },
    {
      question: "Which vehicle should I choose for my Hajj group?",
      answer:
        "It depends on passengers and luggage more than headcount alone — a sedan for one or two, an SUV for a family, or a van or minibus for a larger group.",
    },
    {
      question: "What information do I need to provide when booking?",
      answer:
        "Your flight details, accommodation, and passenger and luggage count matter most — flight number especially, since it lets us adjust pickup around any delay.",
    },
    {
      question: "Does booking a private transfer guarantee access to restricted Hajj areas?",
      answer:
        "No. Access to areas restricted during the Hajj period is controlled by the relevant Saudi authorities and tied to official permits and registered group arrangements, not to a transportation booking. Confirm current requirements with your Hajj operator or the relevant authority.",
    },
  ],

  finalCtaHeading: "Arrange Your Private Hajj Transfer",
  finalCtaText:
    "Share your pickup location, destination, travel date, time, passenger and luggage count, and flight details where applicable, and we'll confirm the right vehicles and a fixed price for the legs of your trip that need arranging.",
};
