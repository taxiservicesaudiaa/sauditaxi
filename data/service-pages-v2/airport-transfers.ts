import type { AirportTransfersHubContent } from "@/components/services/AirportTransfersHub";

/**
 * Airport Transfers hub page — 2026 heading-structure update.
 *
 * Verified facts only: real airport names/codes (data/airports.ts), real
 * route distances (data/routes.ts), real vehicle categories (data/vehicles.ts),
 * and the site's actual booking model (WhatsApp/quote form, pay the driver
 * directly — no online payment platform, no specific wait-time guarantee,
 * none of which exist in the real system). No Hajj-permit, visa, or
 * government-authorisation claims — see the Umrah/Hajj section note.
 *
 * Previously rendered via ServiceV2View (data/service-pages-v2/airport-transfers.ts
 * + components/services/ServiceV2View.tsx, shared with 7 other service
 * pages). Now rendered via the page-specific AirportTransfersHub component
 * instead, so this restructuring doesn't touch the other 7 pages that still
 * use ServiceV2View unchanged.
 */
export const airportTransfersContent: AirportTransfersHubContent = {
  eyebrow: "Airport Transfers",
  h1: "Private Airport Transfers Across Saudi Arabia",
  dek: "Pre-booked private transportation between Saudi Arabia's airports and your actual destination — a hotel, a residence, a business meeting, or straight on to Makkah or Madinah. A specific driver is already waiting when you land, and the price is agreed before you fly, not negotiated in a busy arrivals hall.",
  heroImage: "/images/heroes/airport.webp",
  heroAlt: "An airport terminal in Saudi Arabia",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Airport Coverage",
  secondaryCtaHref: "/airport-transfers#coverage",

  coreServiceHeading: "Private Airport Transfers in Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private, pre-arranged airport transportation across Saudi Arabia — meet-and-greet pickup when you land, and a direct drop-off at your hotel, residence, or business address. The same service covers the return leg, taking you back to the airport for a departure flight.",
    "Most journeys fall into a few common patterns: a hotel or business transfer within the arrival city, a longer drive on to Makkah or Madinah for Umrah or Hajj travel, or a connection to another Saudi city entirely. Each trip is a single private vehicle for your group, booked and priced before you travel, with a driver already assigned rather than found on the day.",
  ],

  airportsHeading: "Airports We Cover Across Saudi Arabia",
  airportsIntro:
    "Private airport transfers are available at the Kingdom's four busiest international gateways, each with its own dedicated coverage page covering local meeting points, terminal detail, and onward routes.",
  airportCards: [
    {
      title: "King Khalid International Airport (RUH)",
      body: "Riyadh's airport, serving the capital's hotels and business districts across all five terminals, with corporate travel accounts available for regular bookings and onward transfers across the country.",
      href: "/airport-transfer/riyadh-airport",
      linkLabel: "Riyadh Airport transfers",
    },
    {
      title: "King Abdulaziz International Airport (JED)",
      body: "The busiest gateway for Umrah and Hajj arrivals, including the Hajj Terminal and Terminal 1, with direct transfers to Makkah, Corniche hotels, and onward travel to Madinah or Taif.",
      href: "/airport-transfer/jeddah-airport",
      linkLabel: "Jeddah Airport transfers",
    },
    {
      title: "Prince Mohammad bin Abdulaziz International Airport (MED)",
      body: "Madinah's airport, with hotel transfers near the Prophet's Mosque and private long-distance connections on to Makkah, timed around pilgrim schedules and prayer times.",
      href: "/airport-transfer/madinah-airport",
      linkLabel: "Madinah Airport transfers",
    },
    {
      title: "King Fahd International Airport (DMM)",
      body: "Dammam's airport, covering the Dammam, Khobar, and Dhahran metro area, plus cross-border transfers to Bahrain over the King Fahd Causeway for business travellers and families.",
      href: "/airport-transfer/dammam-airport",
      linkLabel: "Dammam Airport transfers",
    },
  ],
  moreAirportsNote: {
    text: "We also cover",
    links: [
      { label: "Taif Regional Airport (TIF)", href: "/airport-transfer/taif-airport" },
      { label: "AlUla — Prince Abdul Majeed bin Abdulaziz Airport (ULH)", href: "/airport-transfer/alula-airport" },
    ],
  },

  destinationsBlock: {
    type: "routeCards",
    heading: "Popular Airport Transfer Destinations",
    intro:
      "The distances and times below are the same figures published on each route's own page, so you can check the journey before you book. Airport-to-city transfers that stay within the arrival city itself — hotels, business districts, or residential addresses — are covered by the airport pages above rather than a separate route page.",
    routes: [
      { from: "Jeddah Airport", to: "Makkah", distance: "~85 km", duration: "~1h 15m", href: "/routes/jeddah-to-makkah", note: "The most-requested airport transfer in the network — most pilgrims travel this leg the same day they land, often still in ihram." },
      { from: "Jeddah Airport", to: "Madinah", distance: "~420 km", duration: "~4.5–5 hours", href: "/routes/jeddah-to-madinah", note: "A long transfer for travellers combining both holy cities in one Umrah itinerary, with rest stops along the way." },
      { from: "Riyadh Airport", to: "Riyadh", distance: "~35 km", duration: "~30-45 min", href: "/routes/riyadh-airport-to-riyadh", note: "Direct drop-off at hotels and business districts across Olaya, KAFD, and the Diplomatic Quarter, with flight tracking on arrival." },
      { from: "Dammam Airport", to: "Al Khobar", distance: "~35 km", duration: "~30 min", href: "/routes/dammam-airport-to-khobar", note: "A short, direct run for Eastern Province business travel and Bahrain-bound connections." },
      { from: "Jeddah Airport", to: "Taif", distance: "~170 km", duration: "~2 hours", href: "/routes/jeddah-to-taif", note: "For travellers continuing to Taif's cooler mountain climate after landing on the coast, a genuinely different pace of trip." },
    ],
  },

  umrahHajjHeading: "Airport Transfers for Umrah and Hajj Travel",
  umrahHajjIntro:
    "Practical transportation for the airport legs of an Umrah or Hajj journey. We arrange the transfer itself — travellers remain responsible for their own visa, permit, and entry requirements.",
  umrahHajjCards: [
    {
      title: "Jeddah Airport Transfers to Makkah",
      body: "A direct drive from the Hajj Terminal or Terminal 1 to your Makkah hotel near the Haram, for travellers arriving tired after a long flight, sometimes already in ihram.",
      href: "/routes/jeddah-to-makkah",
      linkLabel: "Jeddah to Makkah route",
    },
    {
      title: "Jeddah Airport Transfers to Madinah",
      body: "A longer transfer from Jeddah's airport directly to Madinah, for itineraries that combine both holy cities, with hotel drop-off near the Prophet's Mosque.",
      href: "/routes/jeddah-to-madinah",
      linkLabel: "Jeddah to Madinah route",
    },
    {
      title: "Madinah Airport Transfers",
      body: "Meet-and-greet pickup at Madinah's own airport, with a direct drive to hotels around the Haram and onward private transfers to Makkah when your itinerary continues.",
      href: "/airport-transfer/madinah-airport",
      linkLabel: "Madinah Airport transfers",
    },
  ],

  howItWorksBlock: {
    type: "timeline",
    heading: "How Our Airport Transfer Service Works",
    orientation: "vertical",
    steps: [
      { label: "1. Share Your Flight Details", detail: "Flight number, arrival airport, destination, and passenger count — sent via WhatsApp or the quote form." },
      { label: "2. Receive Your Transfer Quote", detail: "A fixed, all-in price and a vehicle recommendation, agreed before you travel." },
      { label: "3. Confirm Your Booking", detail: "Approve the quote and a specific driver is scheduled for your flight, no prepayment required." },
      { label: "4. Meet Your Driver", detail: "Your driver waits in arrivals with a name board and takes you directly to your destination." },
    ],
    note: "We track your flight number, so pickup timing is planned around your actual landing rather than the original schedule.",
  },

  bookingInfoHeading: "What Information Do I Need to Book an Airport Transfer?",
  bookingInfoIntro:
    "Share as much of this as you can when you request a quote. Flight number matters most of all — it's what lets us plan around a delay automatically, rather than you needing to notice and tell us.",
  bookingInfoItems: [
    "Arrival airport and flight number",
    "Travel date and approximate arrival time",
    "Pickup location (or arrival terminal)",
    "Destination address — hotel name or exact address",
    "Number of passengers",
    "Luggage amount",
    "Vehicle preference, if you have one",
    "A WhatsApp number we can reach you on",
  ],

  vehiclesHeading: "Choose the Right Vehicle for Your Airport Transfer",
  vehiclesIntro: "Vehicle choice comes down to passengers and luggage more than personal preference — tell us your numbers honestly when you book.",
  vehicleCards: [
    {
      title: "Private Sedan Transfers",
      body: "Economy and Comfort sedans — Hyundai Accent, Toyota Yaris, Toyota Camry, or Hyundai Sonata — for one to three passengers with two to three bags.",
    },
    {
      title: "Premium and Executive Vehicles",
      body: "Mercedes E-Class or Lexus ES for corporate travel and VIP arrivals, seating up to three passengers with three bags in a premium cabin.",
    },
    {
      title: "Family and Group Transfers",
      body: "A Toyota Land Cruiser or GMC Yukon SUV for up to five passengers and four bags, with room for a family or extra luggage.",
    },
    {
      title: "Minivan Transfers",
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers with eight bags, or a Toyota Coaster minibus for larger Umrah and Hajj groups.",
    },
  ],

  travellersHeading: "Airport Transfers for Every Type of Traveller",
  travellersIntro: "Practical requirements differ by traveller — tell us yours when you book so the right vehicle is waiting.",
  travellerCards: [
    {
      title: "Families and Groups",
      body: "More luggage than a couple travelling alone, and often a child-seat requirement — tell us both so the right vehicle is confirmed in advance, not swapped at the kerb.",
    },
    {
      title: "Umrah and Hajj Travellers",
      body: "Direct transfers to Makkah or Madinah hotels near the Haram, with vehicles sized for group luggage and miqat stops for ihram where the route allows.",
    },
    {
      title: "Business Travellers",
      body: "A fixed pickup time matters more than flexibility. We treat your requested time as firm and plan the route to a meeting or hotel accordingly.",
    },
    {
      title: "Couples and Solo Travellers",
      body: "A sedan is usually the most cost-effective choice for one or two travellers with normal luggage — no need to book a larger vehicle than the trip requires.",
    },
  ],

  benefitsHeading: "Why Book a Private Airport Transfer?",
  benefitsIntro: "Practical reasons travellers choose a pre-booked private transfer over an airport-rank taxi or a ride-hailing app.",
  benefitCards: [
    {
      title: "Door-to-Door Transportation",
      body: "Collected from the arrivals hall and driven directly to your hotel, residence, or business address — not a shared shuttle with other stops along the way.",
    },
    {
      title: "Pre-Booked Pickup",
      body: "The price and vehicle are agreed before you fly, so there's no on-the-spot negotiation and no surge pricing in the arrivals hall.",
    },
    {
      title: "Private Vehicle for Your Group",
      body: "The car is yours for the whole trip, sized to your passengers and luggage — a sedan for one or two, or an SUV or van for a family or group.",
    },
    {
      title: "Direct Transfer to Your Destination",
      body: "One journey, no shared stops — whether you're headed to a hotel in the arrival city or straight on to Makkah or Madinah.",
    },
  ],

  planningBlock: {
    type: "checklist",
    heading: "Planning Your Saudi Airport Transfer",
    intro:
      "A short checklist to work through before you fly — it's the fastest, most reliable way to a smooth pickup once you land, rather than sorting details out in the arrivals hall.",
    items: [
      "Confirm the correct arrival airport",
      "Share accurate flight information",
      "Confirm passenger count and luggage amount",
      "Confirm pickup and destination details",
      "Mention any child seat or accessibility requirement",
      "Allow extra time for immigration and baggage during Umrah, Hajj, or peak season",
      "Review your transfer confirmation before you fly",
    ],
  },

  faqHeading: "Frequently Asked Questions About Saudi Airport Transfers",
  faqs: [
    {
      question: "How do I book a private airport transfer in Saudi Arabia?",
      answer:
        "Share your flight number, arrival airport, destination, and passenger count through WhatsApp or our quote form. We reply with a fixed price and vehicle recommendation — no prepayment required.",
    },
    {
      question: "Which airports in Saudi Arabia do you cover?",
      answer:
        "Riyadh (RUH), Jeddah (JED), Madinah (MED), Dammam (DMM), Taif (TIF), and AlUla (ULH) — each with its own dedicated airport transfer page.",
    },
    {
      question: "Can I book a transfer from Jeddah Airport to Makkah?",
      answer:
        "Yes — this is our most-requested route. We meet you at the Hajj Terminal or Terminal 1 and drive directly to your Makkah hotel near the Haram.",
    },
    {
      question: "Can I book an airport transfer to Madinah?",
      answer:
        "Yes. From Jeddah Airport it's a longer transfer of around 420 km; from Madinah's own airport it's a short, direct drive to hotels near the Prophet's Mosque.",
    },
    {
      question: "Can I arrange an airport transfer for Umrah?",
      answer:
        "Yes. We provide the transportation between the airport, Makkah, and Madinah — you remain responsible for your own visa and entry requirements, which we cannot confirm on your behalf.",
    },
    {
      question: "What flight information do I need to provide?",
      answer:
        "Your flight number and arrival airport matter most — they let us track your actual landing time and adjust pickup automatically if your flight is early or delayed.",
    },
    {
      question: "Can I choose a vehicle based on passenger and luggage requirements?",
      answer:
        "Yes. Tell us your passenger and bag count when booking and we'll match the vehicle — a sedan for light travel, an SUV or van for a family or group.",
    },
    {
      question: "What happens if my flight schedule changes?",
      answer:
        "Message us on WhatsApp as soon as you know. Pickup is planned around your actual arrival rather than the original schedule, so a delay doesn't mean a missed transfer.",
    },
  ],

  finalCtaHeading: "Arrange Your Private Airport Transfer",
  finalCtaText:
    "Share your arrival airport, flight number, travel date, destination, and passenger and luggage count, and we'll confirm a specific driver and a fixed price before you fly — whether you're headed to a hotel, a business meeting, or straight on to Makkah or Madinah.",
};
