import type { UmrahTransfersHubContent } from "@/components/services/UmrahTransfersHub";

/**
 * Umrah Transfers page — 2026 heading-structure update.
 *
 * Verified facts only: real route distances/durations (data/routes.ts,
 * matching the figures already published on each route's own page), real
 * airports (data/airports.ts), real cities (data/cities.ts), real vehicle
 * categories (data/vehicles.ts). No religious rulings, no visa/eligibility
 * claims, no official pilgrimage-authorisation claims — this is a
 * transportation service and says so plainly, matching the tone already
 * established on this page before this update.
 *
 * Scope note: does not compete with the homepage (broad "Private Transfers
 * Across Saudi Arabia"), Airport Transfers ("Private Airport Transfers
 * Across Saudi Arabia"), or Intercity Transfers ("Private City-to-City
 * Transfers Across Saudi Arabia") — this page owns "private transportation
 * for Umrah travellers" specifically and links out to those broader hubs
 * and to individual airport/city/route pages rather than duplicating them.
 *
 * Previously rendered via ServiceV2View (shared with 6 other service
 * pages). Now rendered via the page-specific UmrahTransfersHub component
 * instead, mirroring the Airport Transfers and Intercity Transfers
 * restructuring, so this change doesn't touch any other page.
 */
export const umrahTaxiServiceContent: UmrahTransfersHubContent = {
  eyebrow: "Umrah Transportation",
  h1: "Private Umrah Transfers in Saudi Arabia",
  dek: "Pre-booked private transportation for the practical stages of an Umrah journey — airport pickup, the drive to Makkah or Madinah, transfers between the two holy cities, and hotel-to-hotel moves in between. A specific driver is waiting when you land, and the price is agreed before you travel, not negotiated on arrival.",
  heroImage: "/images/heroes/madina.webp",
  heroAlt: "A street in Madinah near the Prophet's Mosque",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Umrah Routes",
  secondaryCtaHref: "/umrah-taxi-service#routes",

  coreServiceHeading: "Private Umrah Transportation in Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private, pre-arranged transportation for Umrah travellers — meet-and-greet airport pickup, a direct drive to Makkah or Madinah, transfers between the two holy cities, and hotel transfers in between. Each trip is a single private vehicle for your group, not a shared ride.",
    "This is a transportation service, not religious guidance — we don't offer rulings on Umrah practice and don't claim any official pilgrimage authorisation. What we arrange is the practical part: a driver and vehicle for the journeys an Umrah trip typically involves, booked and priced before you travel.",
  ],

  routesHeading: "Popular Umrah Transfer Routes",
  routesIntro:
    "The most-travelled legs of an Umrah journey, with the same distances and times already published on each route's own page, so you can plan realistic timing before you book.",
  routeCards: [
    {
      title: "Jeddah Airport to Makkah",
      body: "The most-travelled leg of an Umrah journey — around 85 km, roughly 1 hour 15 minutes, timed around your flight from Jeddah's airport direct to your Makkah hotel.",
      href: "/routes/jeddah-to-makkah",
      linkLabel: "Jeddah to Makkah route",
    },
    {
      title: "Jeddah Airport to Madinah",
      body: "For travellers beginning their visit in Madinah before continuing to Makkah — around 420 km, roughly 4.5–5 hours of driving, direct to a hotel near the Prophet's Mosque.",
      href: "/routes/jeddah-to-madinah",
      linkLabel: "Jeddah to Madinah route",
    },
    {
      title: "Makkah to Madinah Transfers",
      body: "A long drive between the two holy cities, around 450 km, roughly 4.5 hours, with a rest stop planned in for travellers who are tired or elderly.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
    {
      title: "Madinah to Makkah Transfers",
      body: "The reverse leg for itineraries that begin in Madinah — the same 450 km, roughly 4.5 hours, for travellers continuing on to Makkah.",
      href: "/routes/madinah-to-makkah",
      linkLabel: "Madinah to Makkah route",
    },
  ],

  airportHeading: "Airport Transfers for Umrah Travellers",
  airportIntro:
    "Many travellers arrive tired after a long flight, sometimes already in ihram, and want the journey from the airport to feel calm rather than rushed.",
  airportCards: [
    {
      title: "Jeddah Airport Transfers",
      body: "Meet-and-greet at King Abdulaziz International Airport, including the Hajj Terminal and Terminal 1, with a direct drive to your Makkah or Madinah hotel.",
      href: "/airport-transfer/jeddah-airport",
      linkLabel: "Jeddah Airport transfers",
    },
    {
      title: "Madinah Airport Transfers",
      body: "Meet-and-greet at Prince Mohammad bin Abdulaziz International Airport, with hotel transfers near the Prophet's Mosque for travellers starting their trip in Madinah.",
      href: "/airport-transfer/madinah-airport",
      linkLabel: "Madinah Airport transfers",
    },
    {
      title: "Airport Pickup to Your Hotel",
      body: "Share your flight details, group size, and hotel name when booking, and mention if you'll be arriving in ihram so the handover stays simple and unhurried.",
      href: "/airport-transfers",
      linkLabel: "How airport pickup works",
    },
  ],

  citiesHeading: "Makkah and Madinah Transfers",
  citiesIntro:
    "Most Umrah itineraries follow one of two patterns — Jeddah into Makkah first, or Madinah first before continuing to Makkah. Either order works from a transportation standpoint; which one suits you is a personal decision we don't advise on.",
  cityCards: [
    {
      title: "Transfers to Makkah",
      body: "Hotel transfers around the Haram, arriving either directly from Jeddah Airport or after the Makkah-Madinah drive, depending on your itinerary.",
      href: "/taxi-service/makkah",
      linkLabel: "Makkah taxi service",
    },
    {
      title: "Transfers to Madinah",
      body: "Hotel transfers near the Prophet's Mosque, whether Madinah is your first stop from the airport or the second stage after Makkah.",
      href: "/taxi-service/madinah",
      linkLabel: "Madinah taxi service",
    },
    {
      title: "Makkah to Madinah Private Transfers",
      body: "The genuinely long leg of the trip, around 450 km — best planned with a rest stop rather than driven straight through, particularly for elderly or tired travellers.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
  ],

  hotelHeading: "Hotel Transfers During Your Umrah Trip",
  hotelIntro:
    "Beyond the airport legs, many Umrah travellers also need a hotel-to-hotel transfer — moving accommodation between the Makkah and Madinah stages, or relocating partway through a longer stay.",
  hotelCards: [
    {
      title: "Airport to Hotel Transfers",
      body: "Direct pickup from arrivals to your hotel entrance in Makkah or Madinah, at a time built around your actual flight rather than a fixed schedule.",
    },
    {
      title: "Hotel to Hotel Transfers",
      body: "Pickup from your current hotel and drop-off at the next one, at a time that suits your schedule rather than a flight — the same approach as any hotel transfer.",
    },
    {
      title: "Private Hotel Pickup and Drop-Off",
      body: "Collected from your hotel's entrance and taken directly to your destination — not a designated pickup point you have to find and walk to.",
    },
  ],

  familyHeading: "Umrah Transfers for Families and Groups",
  familyIntro:
    "Umrah is frequently a family or group trip — parents travelling with children, adult children accompanying elderly parents, or a group travelling together.",
  familyCards: [
    {
      title: "Family Umrah Transfers",
      body: "A single larger vehicle keeps everyone together rather than splitting across separate cars. Tell us your total numbers, including children, when you book.",
    },
    {
      title: "Group Umrah Transportation",
      body: "Larger Umrah parties are usually better served by one or two bigger vehicles than several separate cars — share your group size so we can plan the combination.",
    },
    {
      title: "Choosing the Right Vehicle",
      body: "Luggage tends to be heavier on the return leg, with Zamzam water and gifts — mention this when booking so the right vehicle is arranged from the start.",
    },
  ],

  vehiclesHeading: "Private Vehicles for Umrah Travel",
  vehiclesIntro: "Vehicle choice comes down to passengers and luggage more than personal preference — tell us your numbers honestly when you book.",
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
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers with eight bags, or a Toyota Coaster minibus for larger Umrah groups.",
    },
  ],

  howItWorksBlock: {
    type: "timeline",
    heading: "How to Book an Umrah Transfer",
    orientation: "vertical",
    steps: [
      { label: "1. Share Your Journey Details", detail: "Flight number, arrival airport, hotel name, and passenger count — sent via WhatsApp or the quote form." },
      { label: "2. Receive Your Quote", detail: "A fixed, all-in price and a vehicle recommendation, agreed before you travel." },
      { label: "3. Confirm Your Transfer", detail: "Approve the quote and a specific driver is scheduled for your flight, no prepayment required." },
      { label: "4. Meet Your Driver", detail: "Your driver waits in arrivals with a name board and takes you directly to your hotel." },
    ],
    note: "We track your flight number, so pickup timing is planned around your actual landing rather than the original schedule.",
  },

  bookingInfoHeading: "What Information Do I Need to Provide?",
  bookingInfoIntro:
    "Share as much of this as you can when you book. Flight number matters most of all — it's what lets us adjust your pickup automatically if your flight is early or delayed.",
  bookingInfoItems: [
    "Arrival airport and flight number",
    "Travel date and approximate arrival time",
    "Hotel name or address in Makkah or Madinah",
    "Number of passengers",
    "Luggage amount",
    "Vehicle preference, if you have one",
    "Whether you'll be arriving already in ihram",
    "A WhatsApp number we can reach you on",
  ],

  planningHeading: "Planning Your Umrah Transportation",
  planningIntro:
    "A few things worth settling before you travel, so the transportation side of your Umrah trip is one less thing to plan once you land.",
  planningItems: [
    "Book your transportation in advance, especially during busy Umrah periods",
    "Confirm your arrival airport and flight details",
    "Confirm your hotel name or address in Makkah and Madinah",
    "Check your passenger and luggage requirements",
    "Allow extra time for immigration and baggage during peak season",
    "Keep your booking confirmation and contact details available",
  ],

  requirementsHeading: "Transportation and Umrah Travel Requirements",
  requirementsParagraphs: [
    "We provide transportation — airport, hotel, and inter-city transfers for your Umrah trip. Umrah visa issuance and eligibility, religious rulings and requirements for performing Umrah, and official pilgrimage regulations are all determined by the relevant religious and government authorities, not by us.",
    "Travellers remain responsible for their own required travel documents, and applicable Umrah, immigration, airport, and road regulations may apply. These requirements can change, so confirm current rules through the appropriate official sources rather than relying on this page.",
  ],

  faqHeading: "Frequently Asked Questions About Umrah Transfers",
  faqs: [
    {
      question: "How do I book a private Umrah transfer in Saudi Arabia?",
      answer:
        "Share your flight details, hotel name, and passenger count through WhatsApp or our quote form. We reply with a fixed price and vehicle recommendation — no prepayment required.",
    },
    {
      question: "Can I book a transfer from Jeddah Airport to Makkah?",
      answer:
        "Yes — this is our most-requested route. A driver meets you after you land and drives you directly to your Makkah hotel, around 85 km and 1 hour 15 minutes.",
    },
    {
      question: "Can I book a transfer from Jeddah Airport to Madinah?",
      answer:
        "Yes. It's a longer drive, around 420 km and 4 hours, direct to a hotel near the Prophet's Mosque, for itineraries that begin in Madinah.",
    },
    {
      question: "Do you provide private transfers between Makkah and Madinah?",
      answer:
        "Yes, in both directions — around 450 km and 4.5 hours, with a rest stop built in, often appreciated by elderly or tired travellers.",
    },
    {
      question: "Can I arrange an airport transfer for my Umrah trip?",
      answer:
        "Yes. We cover Jeddah and Madinah airports with meet-and-greet pickup, flight tracking, and a direct drive to your hotel in Makkah or Madinah.",
    },
    {
      question: "Can families and groups book private Umrah transportation?",
      answer:
        "Yes. Tell us your group size and luggage when booking and we'll match the vehicle — a larger SUV, van, or minibus for a family or group travelling together.",
    },
    {
      question: "What information do I need to provide when booking?",
      answer:
        "Your flight details, hotel name, and passenger and luggage count matter most — flight number especially, since it lets us adjust pickup automatically around any delay.",
    },
    {
      question: "Can I choose a vehicle based on my group size and luggage?",
      answer:
        "Yes. Tell us your numbers and we'll recommend a sedan, SUV, van, or minibus to match, including extra space for Zamzam water or gifts on the return leg.",
    },
  ],

  finalCtaHeading: "Arrange Your Private Umrah Transfer",
  finalCtaText:
    "Share your pickup location, destination, date, time, passenger and luggage count, and flight details where applicable, and we'll confirm a specific driver and a fixed price before you travel — for the airport leg, the Makkah-Madinah drive, or a hotel transfer in between.",
};
