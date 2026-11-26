import type { Faq } from "@/data/faqs";

/**
 * /routes/jubail-to-dammam — copy for components/routes/JubailDammamRouteView.tsx.
 *
 * Route facts (checked 25 Nov 2026; endpoints from OpenStreetMap/Nominatim):
 * - Old Jubail (27.005, 49.658) → central Dammam (26.4367, 50.1039):
 *   OSRM 84 km / 58 min; Valhalla 84 km / 68 min.
 * - Jubail Industrial City (27.0651, 49.4813) → central Dammam:
 *   OSRM 107 km / 75 min; Valhalla 113 km / 75 min.
 * - Royal Commission offices (27.1017, 49.5647) → central Dammam:
 *   OSRM 101 km / 70 min; Valhalla 101 km / 71 min.
 * - Al Fanateer (≈27.074, 49.565) → central Dammam: OSRM 98 km / 67 min;
 *   Valhalla 98 km / 70 min.
 * - Reverse (central Dammam → old Jubail / Industrial City): 84–85 km and
 *   106–108 km, 58–72 min.
 * - Old Jubail → King Fahd International Airport (DMM): 79 km, 53–63 min;
 *   Jubail Industrial City → DMM: 102–108 km, 67–70 min.
 *   Published: about 85–110 km depending on the pickup point, typically about
 *   1–1.5 hours with ordinary traffic. Old page: 90 km / 1 hour (close for old
 *   Jubail, short for the industrial city).
 * - The drive follows the coastal highway south between the two cities; road
 *   numbers are not shown.
 * - Not claimed: fixed prices, 24/7, shift schedules, regular or dedicated
 *   arrangements, site access, flight tracking, guaranteed connections.
 */

export const JUBAIL_DAMMAM_PATH = "/routes/jubail-to-dammam";
export const JUBAIL_DAMMAM_REVIEWED = "2026-11-25";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type JubailDammamPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;

export const JUBAIL_DAMMAM_PHOTOS = {
  corniche: {
    src: "/images/jubail/dammam-corniche.webp",
    alt: "A wide palm-lined promenade on the Dammam Corniche beside the Gulf, with towers in the distance",
    caption: "The Dammam Corniche on the Gulf",
    w: 1600, h: 1200,
    credit: { title: "Dammam Corniche (1)", author: "Radosław Botev", licence: "CC BY 3.0 PL", licenceUrl: "https://creativecommons.org/licenses/by/3.0/pl/deed.en", source: commons("Dammam Corniche (1).jpg") },
  },
  fanateer: {
    src: "/images/jubail/al-fanateer-corniche.webp",
    alt: "The Gulf at dusk seen between trees from the Al-Fanateer Corniche in Jubail Industrial City",
    caption: "The Al-Fanateer Corniche in Jubail Industrial City",
    w: 1200, h: 1600,
    credit: { title: "Al-Fanateer Corniche in Jubail Industrial City, Saudi Arabia", author: "إبراهيم الشعيبي", licence: "CC0", licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/", source: commons("Al-Fanateer Corniche in Jubail Industrial City, Saudi Arabia.jpg") },
  },
  spiral: {
    src: "/images/jubail/dammam-corniche-spiral-tower.webp",
    alt: "The white spiral tower on the Dammam Corniche behind ornate street lamps and a rock sea wall",
    caption: "The spiral tower on the Dammam Corniche",
    w: 1400, h: 1050,
    credit: { title: "Dammam Corniche", author: "King Eliot", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: commons("Dammam Corniche.jpg") },
  },
} satisfies Record<string, JubailDammamPhoto>;

export const JUBAIL_DAMMAM = {
  hero: {
    kicker: "Regional transfer · Eastern Province",
    h1: "Private Transfer from Jubail to Dammam",
    intro:
      "Jubail and Dammam sit an hour or so apart on the Gulf coast. Request a private transfer from your home, hotel, business address or another agreed pickup point in Jubail to wherever you are going in Dammam, and receive a quotation before you confirm.",
  },

  glance: {
    answer:
      "Jubail to Dammam is about 85–110 km by road, depending on where you are collected: about 85 km from old Jubail and 100–110 km from Jubail Industrial City. The drive is typically about 1–1.5 hours with ordinary traffic, south along the coastal highway.",
    stats: [
      { k: "Road distance", v: "≈85–110 km" },
      { k: "Typical driving time", v: "≈1–1.5 hours" },
      { k: "Journey type", v: "Regional transfer" },
    ],
    note: "Estimates from two routing services. Your exact pickup point, destination and traffic change the total.",
  },

  steps: [
    { title: "Pickup in Jubail", text: "From the address you give us: old Jubail, Jubail Industrial City or the Royal Commission area, a hotel, a home or a business address." },
    { title: "South along the coast", text: "The coastal highway takes you south towards Dammam. Most of the trip is open highway driving." },
    { title: "Arrival in Dammam", text: "Drop-off at your requested destination: a home, hotel, office, the city centre or King Fahd International Airport." },
  ],

  service: {
    heading: "What you can request",
    intro:
      "Jubail is more than its industrial city: it has an old town, residential districts, hotels, beaches and offices. Give your exact pickup address and destination, and we will suggest a vehicle and send a quotation.",
    note:
      "Some compounds, plants and project sites have controlled entry. Pickup there is at a point you are allowed to use, and any access permission is arranged by you or your employer.",
  },

  suits: [
    {
      title: "Business and project travel",
      text: "Travel between an office, project or accommodation in Jubail and a meeting, hotel or office in Dammam.",
      link: null as null | { href: string; label: string },
    },
    {
      title: "Airport connections",
      text: "Going to King Fahd International Airport? Request a quotation for the whole journey from Jubail and include your flight time.",
      link: { href: "/airport-transfer/dammam-airport", label: "Dammam Airport transfers" },
    },
    {
      title: "Families and personal journeys",
      text: "Private travel between homes, hotels, shopping and family visits, with room for your luggage.",
      link: null as null | { href: string; label: string },
    },
  ],

  pickup: {
    heading: "Pickup in Jubail",
    items: [
      "Old Jubail (Jubail city)",
      "Jubail Industrial City",
      "The Royal Commission area",
      "Al Fanateer and nearby accommodation",
      "Hotels and residential addresses",
      "Business or project addresses, subject to access",
    ],
  },
  dropoff: {
    heading: "Drop-off in Dammam",
    items: [
      "Dammam city centre",
      "Hotels and residential addresses",
      "Offices and business addresses",
      "King Fahd International Airport (DMM)",
      "Other destinations confirmed in your quotation",
    ],
  },

  returnTrip: {
    heading: "Planning your return journey",
    text: "Travelling back the other way? You can request the journey from Dammam to Jubail too, or mention both directions in one request.",
    link: { href: "/routes/dammam-to-jubail", label: "Dammam to Jubail" },
  },

  booking: {
    heading: "How to request a transfer",
    steps: [
      { title: "Your Jubail pickup", text: "The address where you would like to be collected." },
      { title: "Your Dammam destination", text: "Home, hotel, office, city centre or airport." },
      { title: "Date and passengers", text: "The date, preferred time and number of passengers." },
      { title: "Luggage and requests", text: "Luggage and anything else we should know." },
      { title: "Your quotation", text: "Review the quotation, then confirm if you are happy." },
    ],
    form: {
      dropoffPlaceholder: "e.g. hotel or address in Dammam, or King Fahd International Airport",
      messagePlaceholder: "Anything else? e.g. pickup point in Jubail, flight time, luggage",
    },
  },

  related: {
    heading: "Related journeys and services",
    links: [
      { href: "/routes/dammam-to-jubail", label: "Dammam to Jubail", text: "The same journey in the other direction." },
      { href: "/routes/jubail-to-dammam-airport", label: "Jubail to Dammam Airport", text: "Straight to King Fahd International Airport." },
      { href: "/routes/jubail-to-riyadh", label: "Jubail to Riyadh", text: "West across the desert to the capital." },
      { href: "/routes/riyadh-to-dammam", label: "Riyadh to Dammam", text: "From the capital to the Eastern Province." },
      { href: "/taxi-service/jubail", label: "Transfers in Jubail", text: "Getting around Jubail." },
      { href: "/taxi-service/dammam", label: "Transfers in Dammam", text: "Getting around Dammam." },
      { href: "/airport-transfer/dammam-airport", label: "Dammam Airport (DMM)", text: "Arrivals and departures at King Fahd International." },
      { href: "/city-transfers", label: "City transfers", text: "Private transfers in other Saudi cities." },
    ],
  },

  final: {
    heading: "Heading from Jubail to Dammam?",
    text: "Send your pickup, destination, date and number of passengers, and we will reply with a quotation.",
  },

  method:
    "How we checked: distances and driving times from OSRM and Valhalla (OpenStreetMap data) on 25 November 2026, from old Jubail, Jubail Industrial City, the Royal Commission offices and Al Fanateer to central Dammam. Times are driving estimates, not guaranteed journey times.",
};

export const JUBAIL_DAMMAM_FAQS: Faq[] = [
  { question: "How far is Jubail from Dammam?", answer: "About 85–110 km by road: around 85 km from old Jubail and 100–110 km from Jubail Industrial City to central Dammam." },
  { question: "How long does the private transfer usually take?", answer: "Typically about 1–1.5 hours with ordinary traffic. Your pickup point, destination and traffic can change this." },
  { question: "Can you collect me from Jubail Industrial City?", answer: "Yes. Give the exact address. If it is inside a compound or site with controlled entry, pickup is at a point you are allowed to use." },
  { question: "Can I request pickup from the Royal Commission area?", answer: "Yes. Share the address or building name when you request your quotation." },
  { question: "Can I travel from Jubail to Dammam Airport?", answer: "Yes. Request the airport as your destination and include your flight time so the pickup time can be agreed." },
  { question: "Is this transfer suitable for business or project travel?", answer: "Yes. You can request transport between business addresses, project accommodation and offices in Jubail and Dammam." },
  { question: "Can I give a specific pickup and drop-off address?", answer: "Yes. Exact addresses help us prepare an accurate quotation." },
  { question: "Which vehicle should I request?", answer: "Tell us the number of passengers and bags; the quotation will suggest a suitable vehicle." },
  { question: "Can I book the return journey from Dammam to Jubail?", answer: "Yes. See the Dammam to Jubail page, or mention both directions in one request." },
  { question: "How do I receive a quotation?", answer: "Send your pickup, destination, date, time, passengers and luggage through the form on this page or on WhatsApp, and we will reply with a quotation." },
];
