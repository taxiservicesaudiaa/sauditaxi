import type { Faq } from "@/data/faqs";

/**
 * /airport-transfer/riyadh-airport — content for its own layout
 * (components/airport-transfer/RiyadhAirportView.tsx). Metadata still comes
 * from data/airports.ts (riyadh-airport); the other 12 airport pages keep the
 * shared AirportTransferHub.
 *
 * RUH policy (owner, Nov 2026): pickups and drop-offs at King Khalid
 * International Airport are subject to availability and confirmed
 * individually; the meeting point is confirmed in the quotation; pricing is
 * quotation-based. Not stated here: flight tracking, automatic adjustments,
 * arrivals-hall pickup, name boards, free waiting, 24/7, terminal allocation.
 *
 * Road distances: OSRM (OpenStreetMap routing) from the airport, clear traffic,
 * checked 23 Nov 2026 — central Riyadh (Al Batha) 36 km / 26 min; Olaya 39 km /
 * 28 min; KAFD 33 km / 24 min; Diplomatic Quarter 45 km / 32 min.
 * The dated RUH status notice (2 Nov) and "is the airport operating" FAQ are
 * intentionally omitted: they can't be re-verified for this release.
 */

export const RUH_PAGE_REVIEWED = "2026-11-23";

export const RUH_PAGE = {
  hero: {
    kicker: "King Khalid International Airport · RUH",
    h1: "Private Riyadh Airport Transfers (RUH)",
    intro: [
      "King Khalid International Airport is Riyadh's main airport, north of the city. We arrange private, pre-booked road transfers to and from it: to your hotel, home or office in the capital, or straight on to another Saudi city.",
      "Tell us your flight, your destination and who's travelling, and we reply with a quotation. Every airport pickup and drop-off is subject to availability and confirmed individually, and the quotation sets out the meeting point and the price before anything is booked.",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer involving King Khalid International Airport (RUH).",
    ctaPrimary: "Request a Quotation",
    ctaWhatsapp: "Ask on WhatsApp",
  },

  panel: {
    title: "Your airport transfer",
    airportLabel: "King Khalid International Airport (RUH)",
    note: "Pickups and drop-offs are confirmed individually in your quotation.",
  },

  essentials: {
    heading: "King Khalid International Airport at a glance",
    card: [
      { k: "Airport", v: "King Khalid International Airport" },
      { k: "IATA code", v: "RUH" },
      { k: "City", v: "Riyadh, Saudi Arabia" },
      { k: "Location", v: "North of the city, about 35 km by road from central Riyadh" },
    ],
    text: [
      "The airport sits on the northern edge of the capital, so most journeys into the city run south towards districts such as Olaya and the King Abdullah Financial District. The drive time depends heavily on the time of day and traffic.",
      "Before you travel, check your flight, terminal and timings with your airline. Then send us those details with your request.",
    ],
    note: "Road distance measured with OpenStreetMap-based routing from the airport to central Riyadh (Al Batha), clear traffic.",
  },

  pickup: {
    heading: "How airport pickup works",
    intro: "Five steps, with nothing assumed. The meeting point is agreed in your quotation, not taken for granted.",
    steps: [
      { icon: "plane", title: "Share your flight and destination", text: "Airline, flight number, date and time, plus where you're going, how many people and how many bags." },
      { icon: "file", title: "Receive a quotation", text: "A quotation for your transfer, with a vehicle suggestion and the price." },
      { icon: "check", title: "Confirm the quotation and pickup", text: "When you confirm, the pickup time and the meeting point are set out for you." },
      { icon: "pin", title: "Meet your driver", text: "At the location confirmed individually in your quotation, at the agreed time.", highlight: true },
      { icon: "car", title: "Travel to your destination", text: "A private, direct drive to your hotel, home, office or onward destination." },
    ],
    changes: "Flight changed or delayed? Message us with the new details as soon as you know, and we'll tell you what can be rearranged.",
  },

  routes: {
    heading: "Popular transfers from Riyadh airport",
    intro: "Journeys that start at King Khalid International Airport. Each is quoted individually.",
    cards: [
      { slug: "riyadh-airport-to-riyadh", to: "Riyadh city", text: "Hotels, homes and offices across the capital" },
      { slug: "riyadh-airport-to-makkah", to: "Makkah", text: "A long road journey west for Umrah travellers" },
      { slug: "riyadh-airport-to-madinah", to: "Madinah", text: "North-west by road to the Prophet's city" },
      { slug: "riyadh-airport-to-jeddah", to: "Jeddah", text: "Across the Kingdom to the Red Sea coast" },
    ],
    dropoff: { slug: "riyadh-to-riyadh-airport", label: "Going to the airport instead?", text: "Riyadh to King Khalid International Airport drop-offs" },
    note: "Heading somewhere else from the airport, such as Dammam or Qassim? Request it in the same quote form and it will be quoted individually.",
  },

  districts: {
    heading: "Riyadh hotels and districts",
    text: [
      "Most arrivals are heading into the city: a hotel in Olaya, a meeting in the King Abdullah Financial District, an embassy appointment in the Diplomatic Quarter, or a family home. Give us the exact hotel or address when you request a quote.",
      "For a specific hotel, our [Riyadh hotel transfers](/cities/riyadh) page lists the hotels we cover. For rides around the city during your stay, see our [Riyadh taxi service](/taxi-service/riyadh).",
    ],
    image: { src: "/images/journey/riyadh-skyline.jpg", alt: "The towers of King Abdullah Financial District in Riyadh under a cloudy sky", caption: "King Abdullah Financial District" },
    tableTitle: "Approximate road distance from the airport",
    rows: [
      { place: "King Abdullah Financial District", km: "≈33 km", min: "≈24 min" },
      { place: "Central Riyadh (Al Batha)", km: "≈36 km", min: "≈26 min" },
      { place: "Olaya", km: "≈39 km", min: "≈28 min" },
      { place: "Diplomatic Quarter", km: "≈45 km", min: "≈32 min" },
    ],
    tableNote: "OpenStreetMap-based routing in clear traffic. Your exact address and the time of day change these, and peak-hour traffic can add a lot.",
  },

  families: {
    heading: "Families, groups and special requirements",
    intro: "Tell us who's travelling, and the quotation will suggest a vehicle that fits.",
    items: [
      { icon: "users", title: "Families", text: "Give the number of adults and children so everyone travels together." },
      { icon: "baby", title: "Child seats", text: "Ask for child seats in your request; availability is confirmed in your quotation." },
      { icon: "heart", title: "Older passengers", text: "Mention anyone who needs extra time or help, so it can be planned." },
      { icon: "luggage", title: "Lots of luggage", text: "Count the bags, including any large or unusual items." },
      { icon: "bus", title: "Larger groups", text: "Vans and minibuses can be requested for bigger parties." },
      { icon: "access", title: "Mobility needs", text: "Tell us about wheelchairs or other requirements before you confirm." },
    ],
  },

  vehicles: {
    heading: "Which vehicle suits your group?",
    intro: "Capacities per vehicle class. Models are examples, and the vehicle is confirmed in your quotation.",
    cta: "Quote with this vehicle",
    passengerParam: { economy: "2", comfort: "3", business: "3", suv: "5", van: "7+", minibus: "7+" } as Record<string, string>,
    fit: {
      economy: "Solo travellers or couples with light bags.",
      comfort: "Up to three people with standard luggage.",
      business: "Business travel and executive arrivals.",
      suv: "Families of up to five with extra bags.",
      van: "Groups of up to nine, or lots of luggage.",
      minibus: "Ten to eighteen people travelling together.",
    } as Record<string, string>,
  },

  onward: {
    heading: "Onward journeys and other airports",
    text: "Sometimes your journey involves a different Saudi airport, or your plans change. If you're flying into another airport and need to reach Riyadh by road, we can quote that too:",
    links: [
      { href: "/routes/qassim-to-riyadh", label: "Qassim to Riyadh", note: "including Qassim's airport" },
      { href: "/routes/dammam-airport-to-riyadh", label: "Dammam Airport to Riyadh", note: "from King Fahd International (DMM)" },
      { href: "/routes/jeddah-airport-to-riyadh", label: "Jeddah Airport to Riyadh", note: "from King Abdulaziz International (JED)" },
      { href: "/routes/madinah-airport-to-riyadh", label: "Madinah Airport to Riyadh", note: "from Prince Mohammad bin Abdulaziz (MED)" },
    ],
    airports: [
      { href: "/airport-transfer/jeddah-airport", label: "Jeddah airport transfers" },
      { href: "/airport-transfer/madinah-airport", label: "Madinah airport transfers" },
      { href: "/airport-transfer/dammam-airport", label: "Dammam airport transfers" },
    ],
    umrah: "Travelling for Umrah? Our [Umrah taxi service](/umrah-taxi-service) covers the transfers pilgrims usually need between airports, Makkah and Madinah.",
  },

  booking: {
    heading: "How to book",
    steps: ["Submit your journey details", "Receive a quotation", "Confirm the quotation", "Travel at the confirmed time and pickup point"],
    note: "Requesting a quotation is free and doesn't book anything. Your transfer is only booked once you confirm the quotation.",
  },

  form: {
    heading: "Send your transfer details",
    text: "Add your airline and flight number if you have them, plus any special requirements such as child seats or extra luggage.",
    messagePlaceholder: "Airline and flight number, terminal if known, child seats, mobility needs or extra luggage.",
  },

  faqHeading: "Riyadh airport transfer questions",

  method: {
    heading: "How we checked this page",
    text: "Airport identity and code are standard public facts; road distances were measured on OpenStreetMap-based routing from the airport in clear traffic. Pickup availability, meeting points and prices are confirmed individually in your quotation, not promised on this page.",
  },

  finalCta: {
    heading: "Request Your Riyadh Airport Transfer Quotation",
    text: "Send your journey details: there's no payment to request a quotation, and nothing is booked until you confirm it.",
  },
};

export const RUH_PAGE_FAQS: Faq[] = [
  {
    question: "Where is King Khalid International Airport?",
    answer: "King Khalid International Airport (RUH) is on the northern edge of Riyadh, about 35 km by road from central Riyadh. The drive time depends on traffic and your exact address.",
  },
  {
    question: "How do I request a Riyadh airport transfer?",
    answer: "Send your flight details, destination, travel date, passengers and luggage through the quote form or WhatsApp. We reply with a quotation, and your transfer is booked only once you confirm it.",
  },
  {
    question: "Can I request airport pickup and drop-off?",
    answer: "Yes, you can request either. Each pickup or drop-off at King Khalid International Airport is subject to availability and confirmed individually in your quotation.",
  },
  {
    question: "How is the meeting point confirmed?",
    answer: "The meeting point and time are set out in your quotation. Follow those confirmed details rather than assuming a particular hall or sign.",
  },
  {
    question: "What if my flight changes?",
    answer: "Message us with the new flight details as soon as you know. We will tell you what can be rearranged; changes are not made automatically.",
  },
  {
    question: "Can I travel from RUH to Makkah?",
    answer: "Yes, you can request a private road transfer from King Khalid International Airport to Makkah. It is a long journey across the country, and the details are confirmed in your quotation.",
  },
  {
    question: "Can I travel from RUH to another Saudi city?",
    answer: "Yes. Airport-origin transfers to Riyadh city, Makkah, Madinah and Jeddah have their own pages, and you can request other destinations, such as Dammam or Qassim, through the same quote form.",
  },
  {
    question: "What details are needed for a quotation?",
    answer: "Your airline and flight number, travel date and time, pickup point, destination, number of passengers and pieces of luggage, and any special requirements such as child seats.",
  },
  {
    question: "Which vehicle should I choose?",
    answer: "Choose by passengers and luggage: a sedan for one to three people, an SUV for families of up to five, a van for up to nine people, and a minibus for larger groups. The vehicle is confirmed in your quotation.",
  },
  {
    question: "Can I request child seats?",
    answer: "Yes, ask for child seats in your request and say how many you need. Availability is confirmed in your quotation.",
  },
  {
    question: "Can I arrange a transfer if my flight uses another airport?",
    answer: "Yes. If your flight uses another Saudi airport, such as Qassim, Dammam, Jeddah or Madinah, we can quote a road transfer between that airport and your address in Riyadh.",
  },
];
