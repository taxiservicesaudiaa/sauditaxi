import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/hofuf — copy for components/city-transfer/HofufCityView.tsx.
 *
 * Facts (checked 25 Nov 2026):
 * - Al-Ahsa Oasis, an Evolving Cultural Landscape: UNESCO World Heritage List,
 *   2018, criteria (iii)(iv)(v). UNESCO describes it as the largest oasis in the
 *   world, with more than 2.5 million palm trees. Its listed components include
 *   Qasr Ibrahim (in central Al-Hofuf), Suq al-Qaysariyah (Qaisariah Souq) and
 *   Jabal al-Qarah (whc.unesco.org/en/list/1563).
 * - Hofuf: the main city of the oasis (Al-Ahsa Governorate, Eastern Province).
 * - Qaisariah Souq: covered market in central Hofuf; the photo record dates it
 *   to "1822 and after" (Richard Mortel).
 * - Al-Ahsa International Airport (IATA HOF, ICAO OEAH), GACA; south-west of
 *   central Hofuf.
 * - Routing (OSRM / Valhalla; endpoints from Nominatim; central Hofuf 25.3797,
 *   49.5865 by Qasr Ibrahim):
 *   HOF → Hofuf 17 / 20 km, 17 / 26 min; Hofuf → HOF 17 km, 17 / 23 min;
 *   Hofuf → Jabal Al-Qarah (25.4098, 49.6879) 14 km, 18 / 28 min;
 *   Hofuf → Dammam 151 / 178 km, 107 / 117 min; → Khobar 149 / 173 km,
 *   105 / 113 min; → Riyadh 326 km, 224 / 223 min; → DMM 169 / 193 km,
 *   116 / 122 min. (The two engines take different roads to the coast.)
 * - Not claimed: flight tracking, name boards, meet-and-greet, waiting,
 *   luggage help, fixed prices, sightseeing packages or guides, admission,
 *   opening hours, border clearance, 24/7.
 */

export const HOFUF_REVIEWED = "2026-11-25";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type HofufPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string], file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  licence: lic[0],
  licenceUrl: lic[1],
  source: commons(file),
});

export const HOFUF_PHOTOS = {
  palace: {
    src: "/images/hofuf/qasr-ibrahim-from-above.webp",
    alt: "Qasr Ibrahim in central Hofuf seen from above, with its white domed mosque, mud-brick walls and round corner tower",
    caption: "Qasr Ibrahim in the centre of Hofuf",
    w: 1600, h: 1068,
    credit: cr("Heritage Commission", L.bysa4, "قصر ابراهيم.jpg"),
  },
  dome: {
    src: "/images/hofuf/qasr-ibrahim-dome.webp",
    alt: "The white dome and slender minaret with a carved wooden gallery at Qasr Ibrahim against a blue sky",
    caption: "The dome and minaret of Qasr Ibrahim's mosque",
    w: 1600, h: 1067,
    credit: cr("Richard Mortel", L.by2, "Qasr Ibrahim, al-Hofuf.jpg"),
  },
  souqGate: {
    src: "/images/hofuf/qaisariah-souq-gate.webp",
    alt: "The tall pale facade of the Qaisariah Souq with arched windows, carved wooden screens and a decorated entrance",
    caption: "A gateway to the Qaisariah Souq",
    w: 1600, h: 1067,
    credit: cr("Richard Mortel", L.by2, "Al-Qaysariyya Market, 1822 and after, al-Hofuf.jpg"),
  },
  souqLane: {
    src: "/images/hofuf/qaisariah-souq-interior.webp",
    alt: "A covered lane inside the Qaisariah Souq lined with shops selling cloth and traditional goods",
    caption: "Inside the covered lanes of the souq",
    w: 1600, h: 1067,
    credit: cr("Yafa.naif", L.bysa4, "سوق القيصريةW5253.jpg"),
  },
  qarah: {
    src: "/images/hofuf/jabal-al-qarah-passage.webp",
    alt: "Visitors walking along a path between tall eroded limestone walls at Jabal Al-Qarah",
    caption: "A passage between the rock walls of Jabal Al-Qarah",
    w: 1600, h: 1200,
    credit: cr("Shijan Kaakkara", L.bysa4, "Jabal Al Qara Cave - Al Hassa 04.jpg"),
  },
  palms: {
    src: "/images/hofuf/al-ahsa-palm-groves.webp",
    alt: "Tall date palms rising above a farm wall beside a road in the Al-Ahsa Oasis",
    caption: "Date palms in the Al-Ahsa Oasis",
    w: 1600, h: 977,
    credit: cr("Yafa.naif", L.bysa4, "ALahsaa n.jpg"),
  },
} satisfies Record<string, HofufPhoto>;

export const HOFUF = {
  hero: {
    kicker: "Eastern Province · Al-Ahsa Oasis",
    h1: "Private Transfers in Hofuf",
    intro:
      "Hofuf is the old heart of the Al-Ahsa Oasis, a city of mud-brick palaces and covered markets surrounded by millions of date palms. Request a private transfer from the airport, around the city and its heritage sites, or on to Dammam, Khobar and Riyadh, and receive a quotation before you confirm.",
  },
  facts: [
    { k: "Region", v: "Eastern Province" },
    { k: "Oasis", v: "Al-Ahsa, UNESCO World Heritage (2018)" },
    { k: "Airport", v: "Al-Ahsa International (HOF), ≈17–20 km" },
    { k: "Main coastal route", v: "Hofuf ↔ Dammam, ≈150–180 km" },
  ],

  story: {
    heading: "A city grown from the oasis",
    paragraphs: [
      "Al-Ahsa is one of the great oases of the world. UNESCO, which added it to the World Heritage List in 2018 as \"an evolving cultural landscape\", counts more than 2.5 million palm trees, watered for centuries by springs and canals. Hofuf grew up at its centre as the oasis's market town and main city.",
      "You can still read that history in the streets. The Ottoman-era fortress of Qasr Ibrahim stands in the old centre, the covered lanes of the Qaisariah Souq run nearby, and a short drive east the eroded rock walls of Jabal Al-Qarah rise above the palm groves. All three are part of the UNESCO-listed oasis.",
      "Today Hofuf is also a practical base for the wider Eastern Province, with Dammam and Khobar on the coast and Riyadh to the west. Tell us where you are going and we will reply with a quotation.",
    ],
  },

  airport: {
    heading: "Arriving through Al-Ahsa International Airport",
    paragraphs: [
      "Al-Ahsa International Airport (HOF) serves Hofuf and the wider oasis. It lies south-west of the city, about 17–20 km by road from the historic centre, usually around 20–30 minutes.",
      "You can request a private transfer from the airport to your hotel, home, office or any other address. Share your flight details and destination when you ask for a quotation; pickup arrangements are confirmed with you individually.",
    ],
    note: "Flying into Dammam instead? King Fahd International Airport is a different airport, about 170–195 km from Hofuf.",
    noteLink: { href: "/routes/hofuf-to-dammam-airport", label: "Hofuf and Dammam Airport transfers" },
  },

  heritage: {
    heading: "Discovering the Al-Ahsa Oasis",
    intro:
      "Hofuf's three best-known heritage sites are all part of the UNESCO-listed oasis, and they are close enough that many visitors see more than one in a day.",
    sites: [
      {
        name: "Qaisariah Souq",
        where: "Central Hofuf",
        text: "A historic covered market dating from the early 19th century, with lanes of shops selling cloth, spices, dates and traditional goods behind tall carved facades.",
        photo: "souqGate" as const,
      },
      {
        name: "Qasr Ibrahim",
        where: "Old centre of Hofuf",
        text: "Also called Ibrahim Palace, this mud-brick fortress from the Ottoman period has thick walls, round towers and a white-domed mosque at its heart.",
        photo: "dome" as const,
      },
      {
        name: "Jabal Al-Qarah",
        where: "About 14 km east of the centre",
        text: "A limestone hill eroded into narrow passages and caves, whose shaded passages stay noticeably cooler than the open ground around them.",
        photo: "qarah" as const,
      },
    ],
  },

  multiStop: {
    heading: "Visiting several places in one day",
    text:
      "Planning to see the souq, Qasr Ibrahim and Jabal Al-Qarah on the same day, or adding a farm or spring in the oasis? List the places you would like to visit and your timings in your request, and we will send a quotation for the journeys you need. Please check opening times with each site before you travel.",
  },

  intercity: {
    heading: "Private transfers from Hofuf to other cities",
    intro: "Each route has its own page, and every journey is arranged by quotation.",
    routes: [
      { href: "/routes/hofuf-to-dammam", name: "Dammam", text: "North-east to the Gulf coast, about 150–180 km." },
      { href: "/routes/hofuf-to-riyadh", name: "Riyadh", text: "West across the desert to the capital, about 325–330 km." },
      { href: "/routes/hofuf-to-dammam-airport", name: "Dammam Airport (DMM)", text: "To King Fahd International Airport, about 170–195 km." },
    ],
  },

  regional: {
    heading: "Regional connections from Hofuf",
    paragraphs: [
      "Hofuf sits in the south of the Eastern Province. The coastal cities of Dammam and Khobar are roughly 1¾–2 hours away by road, and Riyadh is about 325–330 km to the west.",
      "Heading for Bahrain? You can request a road transfer towards the King Fahd Causeway, which starts on the Khobar side of the coast. The transfer is the road journey only: travel documents, entry permission and border formalities are your own responsibility.",
    ],
    links: [
      { href: "/taxi-service/dammam", label: "Private transfers in Dammam" },
      { href: "/taxi-service/khobar", label: "Private transfers in Khobar" },
      { href: "/border-transfers/bahrain-causeway", label: "King Fahd Causeway guide" },
      { href: "/taxi-service/al-ahsa", label: "Transfers across the wider Al-Ahsa area" },
    ],
  },

  pickup: {
    heading: "Pickup and drop-off places",
    intro: "These are places people often ask for. Any exact address in or around Hofuf can be given.",
    items: [
      "Al-Ahsa International Airport (HOF)",
      "Hotels in Hofuf",
      "Homes and offices",
      "Qaisariah Souq",
      "Qasr Ibrahim",
      "Jabal Al-Qarah",
    ],
  },

  booking: {
    heading: "How to request a Hofuf transfer",
    steps: [
      { title: "Pickup", text: "Where you would like to be collected." },
      { title: "Destination or stops", text: "Where you are going, or the heritage sites you want to visit." },
      { title: "Date and time", text: "Your date and preferred time." },
      { title: "Passengers and luggage", text: "How many people and bags." },
      { title: "Quotation", text: "Review it, then confirm if you are happy." },
    ],
    form: {
      dropoffPlaceholder: "e.g. hotel in Hofuf, Jabal Al-Qarah, Dammam or Riyadh",
      messagePlaceholder: "Anything else? e.g. flight number, heritage stops you want to visit, luggage",
    },
  },

  final: {
    heading: "Travelling in or from Hofuf?",
    text: "Send your pickup, destination, date and number of passengers, and we will reply with a quotation.",
  },
};

export const HOFUF_FAQS: Faq[] = [
  { question: "Which airport serves Hofuf?", answer: "Al-Ahsa International Airport (HOF), south-west of the city. It is a different airport from King Fahd International Airport in Dammam." },
  { question: "How far is Hofuf from Al-Ahsa International Airport?", answer: "About 17–20 km by road to the historic centre, usually around 20–30 minutes." },
  { question: "What is the Al-Ahsa Oasis known for?", answer: "Its millions of date palms, springs and historic settlements. UNESCO added it to the World Heritage List in 2018 as an evolving cultural landscape." },
  { question: "Can I visit Qaisariah Souq and Qasr Ibrahim on the same trip?", answer: "Yes. Both are in central Hofuf. Mention them in your request, and check opening times with each site before you travel." },
  { question: "Can I request a transfer to Jabal Al-Qarah?", answer: "Yes. It is about 14 km east of central Hofuf." },
  { question: "Can I request transport between several heritage sites?", answer: "Yes. List the places and timings in your request, and we will quote for the journeys you need." },
  { question: "Can I travel from Hofuf to Dammam or Khobar?", answer: "Yes. Both are roughly 150–180 km away, about 1¾–2 hours by road." },
  { question: "Is a private transfer available from Hofuf to Riyadh?", answer: "Yes. It is about 325–330 km, roughly 3.5–4 hours by road." },
  { question: "Can I request a transfer towards the Bahrain Causeway?", answer: "Yes, as a road transfer towards the King Fahd Causeway. Travel documents, entry permission and border formalities are your own responsibility." },
  { question: "How do I receive a quotation for a Hofuf transfer?", answer: "Send your pickup, destination or stops, date, time, passengers and luggage through the form on this page or on WhatsApp, and we will reply with a quotation." },
];
