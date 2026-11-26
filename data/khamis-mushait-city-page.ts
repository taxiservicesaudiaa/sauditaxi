import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/khamis-mushait — copy for components/city-transfer/KhamisMushaitCityView.tsx.
 *
 * Facts (checked 25 Nov 2026):
 * - Khamis Mushait: largest city in the Asir Region (2022 census: 535,065 in
 *   the city, citypopulation.de / GASTAT); Abha, the regional capital, 334,290
 *   (Saudipedia: Abha is second after Khamis Mushait).
 * - Name: "Khamis" means Thursday; named after a weekly Thursday market of the
 *   Mushait clan (Britannica; Wikipedia: known by this name since the 1760s).
 * - Airport: Abha International Airport (AHB) serves both cities; no separate
 *   Khamis Mushait airport.
 * - Routing (OSRM / Valhalla; central Khamis Mushait 18.30, 42.7333):
 *   AHB → Khamis 20 km, 21–36 min; Khamis → AHB 21–23 km, 22–34 min;
 *   Khamis → central Abha 33–37 km, 26–51 min; Khamis → Al Soudah 57–60 km,
 *   47–74 min; Khamis → Najran 230–231 km, 2.9–3.5 h; Khamis → Jazan
 *   228–230 km, 2.7–3.4 h; Khamis → Riyadh 917–923 km, 11.1–11.4 h.
 * - Heritage: Al-Mushait Palaces (Visit Saudi listing, south of the city);
 *   Bin Hamsan Heritage Village (Discover Aseer). "Al Mahalah Heritage
 *   Village" (old page) could not be verified and is not used.
 * - Not claimed: fixed prices, flight tracking, arrivals-hall meetings, name
 *   boards, waiting, luggage help, driver familiarity, business accounts,
 *   sightseeing packages, 24/7.
 */

export const KHAMIS_REVIEWED = "2026-11-25";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type KhamisPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  bysa3: ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string] | "pd", file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  ...(lic === "pd" ? { licence: "Public domain" } : { licence: lic[0], licenceUrl: lic[1] }),
  source: commons(file),
});

export const KHAMIS_PHOTOS = {
  city: {
    src: "/images/khamis-mushait/khamis-mushait-city-view.webp",
    alt: "Khamis Mushait spread across the Asir plateau under heavy grey clouds, seen from a green hillside",
    caption: "Khamis Mushait on the Asir plateau",
    w: 1600, h: 1200,
    credit: cr("Aiman titi", L.bysa3, "Khamis Mushayt.jpg"),
  },
  boulevard: {
    src: "/images/khamis-mushait/khamis-mushait-boulevard.webp",
    alt: "A palm-lined walking boulevard beside a road in Khamis Mushait in late-afternoon light",
    caption: "A walking boulevard in the city",
    w: 1600, h: 1200,
    credit: cr("Aiman titi", L.bysa3, "Khamis Mushayt Field walk.jpg"),
  },
  mosque: {
    src: "/images/khamis-mushait/khamis-mushait-mosque.webp",
    alt: "A white mosque with two minarets under a deep blue sky in Khamis Mushait",
    caption: "The Custodian of the Two Holy Mosques mosque in Khamis Mushait",
    w: 1600, h: 1200,
    credit: cr("Aiman titi", L.bysa3, "Mosque in Khamis Mushayt.jpg"),
  },
  heritage: {
    src: "/images/khamis-mushait/khamis-mushait-heritage-area.webp",
    alt: "A large Arabic coffee-pot sculpture in front of a building painted in colourful Asiri stripes in Khamis Mushait's heritage area",
    caption: "The heritage area in Khamis Mushait",
    w: 1600, h: 1200,
    credit: cr("Aiman titi", L.bysa3, "Khamis Mushayt Heritage area Statue of coffee.jpg"),
  },
  twinCities: {
    src: "/images/asir/iss-abha-khamis-mushait.webp",
    alt: "The lights of Abha and Khamis Mushait at night, seen from the International Space Station",
    caption: "Abha and Khamis Mushait at night, photographed from the International Space Station in May 2025",
    w: 1600, h: 1067,
    credit: cr("NASA Johnson Space Center", "pd", "The Saudi Arabian cities of Abha and Khamis Mushait (iss073e0175700).jpg"),
  },
  abha: {
    src: "/images/asir/abha-city-view.webp",
    alt: "Abha spread across its green highland basin with mountains behind",
    caption: "Abha, the regional capital, in its highland basin",
    w: 1600, h: 1200,
    credit: cr("Aiman titi", L.bysa3, "Abha 12.jpg"),
  },
  soudah: {
    src: "/images/asir/al-soudah-green-slopes.webp",
    alt: "Green terraced slopes in the mountains near Al Soudah in the Asir highlands",
    caption: "Green slopes near Al Soudah",
    w: 1600, h: 1200,
    credit: cr("Irshadpp", L.bysa4, "Al Sowda Hill top 06.jpg"),
  },
} satisfies Record<string, KhamisPhoto>;

export const KHAMIS = {
  hero: {
    kicker: "Asir Region · Southern highlands",
    h1: "Private Transfers in Khamis Mushait",
    intro:
      "The name means \"Mushait's Thursday\", after the weekly market that once drew traders onto this high plateau. Today Khamis Mushait is the largest city in the Asir Region, a short drive from Abha and its airport. Ask for a private transfer across the city, from the airport or on to the rest of the south-west, and we will send you a quotation.",
  },

  facts: [
    { k: "Region", v: "Asir, south-west Saudi Arabia" },
    { k: "Population", v: "Largest city in Asir (2022 census)" },
    { k: "Airport", v: "Abha International (AHB), ≈20 km" },
    { k: "Neighbour", v: "Abha, ≈33–37 km" },
  ],

  story: {
    heading: "A market town that became Asir's largest city",
    paragraphs: [
      "Khamis Mushait grew up on the Asir plateau as a trading place, where the Thursday market gave the town its name. The plateau is high and green by Saudi standards, and the climate is noticeably cooler than on the coast or in Riyadh.",
      "It is now the biggest city in the region and a busy commercial centre, with markets, shops, hotels, hospitals and residential districts spreading across the plain. Abha, the regional capital, sits just to the west. The two cities are close enough that many people live in one and work, shop or stay in the other.",
      "That makes Khamis Mushait a practical place to start journeys around the south-west: to the airport, to Abha and the mountain viewpoints beyond it, or further on to Najran and Jazan.",
    ],
  },

  airport: {
    heading: "Arriving through Abha International Airport",
    paragraphs: [
      "Khamis Mushait has no airport of its own. Flights arrive at Abha International Airport (AHB), which sits between the two cities, about 20 km by road from central Khamis Mushait. The drive usually takes around 20–35 minutes, depending on traffic and your address.",
      "You can request a transfer from the airport to your hotel, home or office in Khamis Mushait. Share your flight details and destination when you ask for a quotation; the pickup point and arrangements are confirmed with you when you book.",
    ],
    link: { href: "/airport-transfer/abha-airport", label: "Abha Airport transfers" },
    guide: { href: "/blog/abha-airport-arrival-guide", label: "Abha Airport arrival guide" },
  },

  compare: {
    heading: "Khamis Mushait or Abha: where should you stay?",
    intro:
      "The two cities are about 33–37 km apart and share the same airport, but they suit different plans. Neither is better; it depends on what you came for.",
    khamis: {
      name: "Khamis Mushait",
      points: [
        "The region's largest city, with markets, shopping and business addresses",
        "Convenient if your work, family or appointments are here",
        "Close to the airport on the eastern side",
        "A practical base for the road east to Najran",
      ],
    },
    abha: {
      name: "Abha",
      points: [
        "The regional capital, set in a greener mountain basin",
        "Most visitor attractions, viewpoints and the cable car",
        "Closer to Al Soudah, Habala and the western escarpment",
        "Plenty of hotels aimed at holidaymakers",
      ],
      link: { href: "/taxi-service/abha", label: "Private transfers in Abha" },
    },
    note: "Staying in one and visiting the other? You can request a transfer between the two cities as well.",
  },

  city: {
    heading: "Getting around Khamis Mushait",
    paragraphs: [
      "Ask for a ride between hotels, homes, offices, hospitals, markets and shopping centres, or anywhere else in the city. Give the exact pickup and drop-off addresses and we will quote for the journey.",
      "If you would like to see the city's older side, you can request a transfer to the Al-Mushait Palaces in the south of the city or to Bin Hamsan Heritage Village. Check opening times with the venue before you travel.",
    ],
  },

  highlands: {
    heading: "Into the Asir highlands",
    text:
      "The best-known mountain viewpoints lie west of Abha. Al Soudah is about 57–60 km from central Khamis Mushait, roughly an hour or a little more by road. Tell us the places you would like to visit and the time you have, and the quotation will reflect your plan.",
    link: { href: "/taxi-service/abha", label: "More about the Abha area" },
  },

  regional: {
    heading: "Journeys beyond Khamis Mushait",
    intro: "Onward journeys are quoted individually. Distances are from central Khamis Mushait.",
    items: [
      { name: "Abha", km: "≈33–37 km", time: "≈30–50 min", text: "The regional capital, just to the west.", href: "/taxi-service/abha", label: "Abha city transfers" },
      { name: "Najran", km: "≈230 km", time: "≈3–3.5 hours", text: "East across the plateau to Najran.", href: "/taxi-service/najran", label: "Najran city transfers" },
      { name: "Jazan", km: "≈230 km", time: "≈3–3.5 hours", text: "Down the escarpment to the Red Sea coast.", href: "/taxi-service/jazan", label: "Jazan city transfers" },
      { name: "Riyadh", km: "≈920 km", time: "≈11–11.5 hours", text: "A full day north-east to the capital, via Bisha.", href: "/routes/abha-to-riyadh", label: "Abha to Riyadh route (via Khamis Mushait)" },
    ],
  },

  pickup: {
    heading: "Pickup and drop-off places",
    intro: "Common requests include the places below. Any exact address in or around the city can be given.",
    items: [
      "Abha International Airport (AHB)",
      "Hotels and furnished apartments",
      "Homes and residential districts",
      "Offices and business addresses",
      "Hospitals and clinics",
      "Markets and shopping centres",
      "Al-Mushait Palaces and Bin Hamsan Heritage Village",
      "Abha and the highland viewpoints",
    ],
  },

  booking: {
    heading: "How to request a transfer",
    steps: [
      { title: "Pickup", text: "Where you would like to be collected." },
      { title: "Destination", text: "Where you are going, in the city or beyond." },
      { title: "Date and passengers", text: "The date, time and number of passengers." },
      { title: "Luggage and requests", text: "Bags and anything else we should know." },
      { title: "Quotation", text: "Review it, then confirm if you are happy." },
    ],
    form: {
      dropoffPlaceholder: "e.g. hotel in Khamis Mushait, Abha, Abha Airport or Najran",
      messagePlaceholder: "Anything else? e.g. flight number, stops, luggage",
    },
  },

  final: {
    heading: "Travelling in or from Khamis Mushait?",
    text: "Send your pickup, destination, date and number of passengers, and we will reply with a quotation.",
  },
};

export const KHAMIS_FAQS: Faq[] = [
  { question: "Which airport serves Khamis Mushait?", answer: "Abha International Airport (AHB). Khamis Mushait has no airport of its own; AHB lies between the two cities." },
  { question: "How far is Khamis Mushait from Abha Airport?", answer: "About 20 km by road from central Khamis Mushait, usually around 20–35 minutes depending on traffic and your address." },
  { question: "What is the difference between staying in Khamis Mushait and Abha?", answer: "Khamis Mushait is the larger commercial city, convenient for business, shopping and family visits. Abha, the regional capital, is closer to most visitor attractions and mountain viewpoints. They are about 33–37 km apart." },
  { question: "Can I request a transfer to Abha?", answer: "Yes. Transfers between Khamis Mushait and any address in Abha can be requested; it is about 33–37 km." },
  { question: "Can I travel from Khamis Mushait to Najran or Jazan?", answer: "Yes. Each is about 230 km, roughly 3–3.5 hours by road. Request a quotation with your exact pickup and destination." },
  { question: "Can I visit the Asir highlands from Khamis Mushait?", answer: "Yes. Al Soudah is about 57–60 km away. Tell us the places you would like to visit and the time you have, and the quotation will reflect your plan." },
  { question: "Can I request a transfer to a heritage site in Khamis Mushait?", answer: "Yes. You can request a ride to the Al-Mushait Palaces or Bin Hamsan Heritage Village. Check opening times with the venue first." },
  { question: "Can I be picked up from a hotel or business address?", answer: "Yes. Give the exact address of your hotel, home or office when you request a quotation." },
  { question: "Can I book a transfer to Riyadh?", answer: "Yes. It is about 920 km from Khamis Mushait, roughly 11–11.5 hours of driving before breaks." },
  { question: "How do I receive a quotation?", answer: "Send your pickup, destination, date, time, passengers and luggage through the form on this page or on WhatsApp, and we will reply with a quotation." },
];
