import type { IntercityTransfersHubContent } from "@/components/services/IntercityTransfersHub";

/**
 * Intercity (city-to-city) Transfers hub page — 2026 heading-structure
 * update.
 *
 * Verified facts only: real route distances/durations (data/routes.ts,
 * matching the figures already published on each route's own page), real
 * cities (data/cities.ts), real vehicle categories (data/vehicles.ts), and
 * the site's actual booking model — no online payment, no Hajj-permit or
 * government-authorisation claims.
 *
 * This is deliberately the page restructured for "Private City-to-City
 * Transfers Across Saudi Arabia" rather than /city-transfers: on this site,
 * /city-transfers is a distinct, already-established page for short trips
 * WITHIN one city (hotel to a meeting, home to a station), while this page
 * (/intercity-transfers) is the one that already covered city-to-city
 * routes like Jeddah-Makkah and Riyadh-Jeddah before this update, and still
 * does — restructuring /city-transfers instead would have meant abandoning
 * its own established local-transfer identity and duplicating this page's
 * route content. See the execution log in docs/seo-topic-clusters-plan.md
 * or the relevant commit message for the full reasoning.
 *
 * Previously rendered via ServiceV2View (shared with 7 other service
 * pages). Now rendered via the page-specific IntercityTransfersHub
 * component instead, mirroring the Airport Transfers restructuring, so
 * this change doesn't touch any other page.
 */
export const intercityTransfersContent: IntercityTransfersHubContent = {
  eyebrow: "Intercity Transfers",
  h1: "Private City-to-City Transfers Across Saudi Arabia",
  dek: "Pre-booked private transportation between Saudi cities — a direct drive to a hotel, a residence, a business meeting, or on to Makkah or Madinah. One vehicle for your whole group, one departure time, no shared stops along the way, with the price agreed and a driver confirmed before you travel.",
  heroImage: "/images/journey/desert-highway.jpg",
  heroAlt: "An open highway between Saudi cities",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Popular Routes",
  secondaryCtaHref: "/intercity-transfers#routes",

  coreServiceHeading: "Private City-to-City Transfers in Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private, pre-booked transportation between Saudi cities — a single vehicle and driver for the whole journey, door-to-door, with no shared stops along the way. The same booking model covers a hotel-to-hotel transfer, an airport-to-city connection, or a longer drive on to Makkah or Madinah, depending on your itinerary.",
    "Coverage spans Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif, and AlUla. Most journeys are business travel, Umrah or Hajj connections, or families and groups moving between cities together, each priced and confirmed before you travel rather than negotiated on the day.",
  ],

  routesBlock: {
    type: "routeCards",
    heading: "Popular City-to-City Transfers",
    intro: "The distances and times below match the figures already published on each route's own page, so you can check the journey and plan realistic timing before you book. Each route links through to fuller detail, including rest-stop guidance for the longer drives.",
    routes: [
      { from: "Jeddah", to: "Makkah", distance: "85 km", duration: "1h 15m", href: "/routes/jeddah-to-makkah", note: "The most-travelled pilgrim route in the network, timed around your flight from Jeddah's airport, often the same day you land, sometimes still in ihram." },
      { from: "Jeddah", to: "Madinah", distance: "420 km", duration: "4.5–5 hours", href: "/routes/jeddah-to-madinah", note: "The longer of the two Jeddah pilgrim corridors, for travellers heading north to Madinah before Makkah on a combined itinerary." },
      { from: "Makkah", to: "Madinah", distance: "450 km", duration: "4.5 hours", href: "/routes/makkah-to-madinah", note: "A long drive between the two holy cities, often taken with elderly or tired travellers, with a rest stop built into the plan." },
      { from: "Riyadh", to: "Jeddah", distance: "950 km", duration: "9.5–10.5 hours", href: "/routes/riyadh-to-jeddah", note: "One of the longest regular intercity routes in the network — a full-day drive best planned with an early departure and rest stops." },
      { from: "Riyadh", to: "Dammam", distance: "400 km", duration: "3h 45m", href: "/routes/riyadh-to-dammam", note: "A common business route across the peninsula, manageable in a single sitting without an overnight stop." },
    ],
  },

  citiesHeading: "Cities We Cover Across Saudi Arabia",
  citiesIntro: "Private city-to-city transfers connect all eight cities below — each also has its own dedicated local taxi service page for trips within the city itself.",
  cityCards: [
    {
      title: "Riyadh",
      body: "The capital and largest city, with meet-and-greet pickup at King Khalid International Airport and long-distance connections across the country.",
      href: "/taxi-service/riyadh",
      linkLabel: "Riyadh taxi service",
    },
    {
      title: "Jeddah",
      body: "The gateway to the holy cities, with the busiest airport for Umrah and Hajj arrivals and onward routes to Makkah, Madinah, and Taif.",
      href: "/taxi-service/jeddah",
      linkLabel: "Jeddah taxi service",
    },
    {
      title: "Makkah",
      body: "Hotel transfers around the Haram, with direct road connections to Jeddah and Madinah for pilgrims continuing their journey.",
      href: "/taxi-service/makkah",
      linkLabel: "Makkah taxi service",
    },
    {
      title: "Madinah",
      body: "Hotel transfers near the Prophet's Mosque, with routes on to Makkah and AlUla for travellers combining destinations.",
      href: "/taxi-service/madinah",
      linkLabel: "Madinah taxi service",
    },
    {
      title: "Dammam",
      body: "The Eastern Province hub, with routes to Riyadh and cross-border connections to Bahrain over the King Fahd Causeway.",
      href: "/taxi-service/dammam",
      linkLabel: "Dammam taxi service",
    },
    {
      title: "Al Khobar",
      body: "A coastal Eastern Province city minutes from the Bahrain Causeway, with routes to Dammam and Riyadh.",
      href: "/taxi-service/khobar",
      linkLabel: "Al Khobar taxi service",
    },
    {
      title: "Taif",
      body: "The cool mountain city above Jeddah and Makkah, popular for a change of climate, with a scenic route down to the coast.",
      href: "/taxi-service/taif",
      linkLabel: "Taif taxi service",
    },
    {
      title: "AlUla",
      body: "Saudi Arabia's heritage destination, with private long-distance connections to Madinah and Riyadh for travellers extending their trip.",
      href: "/taxi-service/alula",
      linkLabel: "AlUla taxi service",
    },
  ],

  umrahHajjHeading: "City Transfers for Umrah and Hajj Travel",
  umrahHajjIntro:
    "Private road transfers between the cities an Umrah or Hajj journey typically involves. We arrange the transportation itself — travellers remain responsible for their own visa, permit, and entry requirements.",
  umrahHajjCards: [
    {
      title: "Jeddah to Makkah Transfers",
      body: "The most-requested transfer in the network — a direct drive from Jeddah to your Makkah hotel near the Haram, for travellers arriving tired after a long flight, sometimes already in ihram.",
      href: "/routes/jeddah-to-makkah",
      linkLabel: "Jeddah to Makkah route",
    },
    {
      title: "Jeddah to Madinah Transfers",
      body: "A longer drive from Jeddah directly to Madinah, for itineraries that visit Madinah first, with hotel drop-off near the Prophet's Mosque.",
      href: "/routes/jeddah-to-madinah",
      linkLabel: "Jeddah to Madinah route",
    },
    {
      title: "Makkah to Madinah Transfers",
      body: "A comfortable private drive between the two holy cities, with rest-stop flexibility built in for families and elderly travellers.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
  ],

  businessHeading: "Private City Transfers for Business Travel",
  businessIntro: "A fixed pickup time and a firm, pre-agreed price for the parts of a business trip that can't slip.",
  businessCards: [
    {
      title: "Corporate City-to-City Transfers",
      body: "Corporate travel accounts and reliable long-distance pickups between cities, with drivers who plan around your schedule rather than a rigid timetable.",
    },
    {
      title: "Business Meetings and Events",
      body: "We treat a requested pickup or arrival time as firm, planning the route with enough margin for normal traffic rather than cutting it close.",
    },
    {
      title: "Multi-Stop Business Travel",
      body: "A series of stops across one trip — a hotel, then a client site, then a meeting in another city — arranged as one continuous booking rather than several separate ones.",
    },
  ],

  familyHeading: "Private City Transfers for Families and Groups",
  familyIntro: "One vehicle for the whole group, sized to your passengers and luggage, rather than splitting across multiple bookings.",
  familyCards: [
    {
      title: "Family Transfers",
      body: "An SUV or van for a family travelling between cities with children, luggage, and often a child-seat requirement — tell us when you book.",
    },
    {
      title: "Group Transfers",
      body: "Umrah parties, tour groups, and larger families are usually better served by one or two larger vehicles than several separate cars.",
    },
    {
      title: "Private Vehicles for Longer Journeys",
      body: "On routes running several hours, legroom and boot space matter more than on a short trip — we match the vehicle to the distance, not just the headcount.",
    },
  ],

  howItWorksBlock: {
    type: "timeline",
    heading: "How to Book a City-to-City Transfer",
    orientation: "vertical",
    steps: [
      { label: "1. Share Your Journey Details", detail: "Pickup city, destination city, date, and passenger count — sent via WhatsApp or the quote form." },
      { label: "2. Receive Your Quote", detail: "A fixed, all-in price and a vehicle recommendation, matched to your group and luggage." },
      { label: "3. Confirm Your Transfer", detail: "Approve the quote and a driver is scheduled for your departure time, no prepayment required." },
      { label: "4. Meet Your Driver", detail: "Your driver arrives at the agreed pickup point and drives you directly to your destination city." },
    ],
    note: "For routes over roughly 300 km, we build in at least one rest stop rather than driving straight through.",
  },

  bookingInfoHeading: "What Information Do I Need to Book a City Transfer?",
  bookingInfoIntro:
    "Share as much of this as you can when you request a quote. The more detail we have before you travel, the more accurate the price and the more suitable the vehicle waiting for you.",
  bookingInfoItems: [
    "Pickup city and exact location",
    "Destination city and address",
    "Travel date and preferred departure time",
    "Number of passengers",
    "Luggage amount",
    "Vehicle preference, if you have one",
    "Any planned stops along the route",
    "A WhatsApp number we can reach you on",
  ],

  vehiclesHeading: "Choose the Right Vehicle for Your City Transfer",
  vehiclesIntro: "Vehicle choice comes down to passengers, luggage, and distance — tell us your numbers honestly when you book.",
  vehicleCards: [
    {
      title: "Private Sedan Transfers",
      body: "Economy and Comfort sedans — Hyundai Accent, Toyota Yaris, Toyota Camry, or Hyundai Sonata — for one to three passengers with two to three bags on shorter routes.",
    },
    {
      title: "Premium and Executive Vehicles",
      body: "Mercedes E-Class or Lexus ES for corporate travel between cities, seating up to three passengers with three bags in a premium cabin.",
    },
    {
      title: "Family and Group Vehicles",
      body: "A Toyota Land Cruiser or GMC Yukon SUV for up to five passengers and four bags, with the legroom longer drives need.",
    },
    {
      title: "Minivan Transfers",
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers with eight bags, or a Toyota Coaster minibus for larger Umrah and Hajj groups.",
    },
  ],

  benefitsHeading: "Why Choose a Private City Transfer?",
  benefitsIntro: "Practical reasons travellers choose a pre-booked private transfer over a flight, bus, or train for a city-to-city journey.",
  benefitCards: [
    {
      title: "Door-to-Door Transportation",
      body: "Collected from your exact address and dropped at your exact destination — a hotel, a home, or a business meeting — with no station or airport connection needed at either end.",
    },
    {
      title: "Direct Travel Between Cities",
      body: "One departure, one destination, and no shared stops along the way — unlike a bus route or a shared shuttle picking up other passengers.",
    },
    {
      title: "Private Vehicle for Your Journey",
      body: "The car is yours for the whole trip, sized to your passengers and luggage rather than a fixed airline-style allowance.",
    },
    {
      title: "Flexible Pickup and Drop-Off",
      body: "You set the departure time and the exact pickup and destination addresses, rather than working around a fixed timetable.",
    },
  ],

  faqHeading: "Frequently Asked Questions About Saudi City Transfers",
  faqs: [
    {
      question: "How do I book a private city-to-city transfer in Saudi Arabia?",
      answer:
        "Share your pickup city, destination city, date, and passenger count through WhatsApp or our quote form. We reply with a fixed price and vehicle recommendation — no prepayment required.",
    },
    {
      question: "Which Saudi cities do you cover?",
      answer:
        "Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif, and AlUla — each with its own dedicated taxi service page alongside the city-to-city routes between them.",
    },
    {
      question: "Can I book a transfer from Jeddah to Makkah?",
      answer:
        "Yes — this is the most-requested route in the network. We drive directly from Jeddah to your Makkah hotel near the Haram, about 85 km and 1 hour 15 minutes.",
    },
    {
      question: "Can I travel privately from Jeddah to Madinah?",
      answer:
        "Yes. It's a longer drive, around 420 km and 4 hours, with hotel drop-off near the Prophet's Mosque.",
    },
    {
      question: "Do you provide transfers between Makkah and Madinah?",
      answer:
        "Yes — around 450 km and 4.5 hours, with rest-stop flexibility built in for families and elderly travellers.",
    },
    {
      question: "Can I book a private transfer between Riyadh and Jeddah?",
      answer:
        "Yes. It's one of the longest regular routes we cover, around 950 km and 9 hours, best planned with an early departure and a rest stop.",
    },
    {
      question: "Can families and groups book private city transfers?",
      answer:
        "Yes. Tell us your group size and luggage when booking and we'll match the vehicle — an SUV for a family, or a van or minibus for a larger group.",
    },
    {
      question: "Can I choose a vehicle based on my passenger and luggage requirements?",
      answer:
        "Yes. Tell us your passenger and bag count and we'll recommend a sedan, SUV, van, or minibus to match, rather than assuming a default vehicle size.",
    },
  ],

  finalCtaHeading: "Plan Your Private City Transfer",
  finalCtaText:
    "Share your pickup city, destination, travel date, time, and passenger and luggage count, and we'll confirm a specific driver and a fixed price before you travel — whether it's a short business route or a longer drive on to Makkah or Madinah.",
};
