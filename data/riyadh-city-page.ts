import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/riyadh — copy for components/city-transfer/RiyadhCityView.tsx.
 *
 * Facts (checked 25 Nov 2026):
 * - Riyadh: capital of Saudi Arabia, in the Riyadh Region.
 * - King Khalid International Airport (RUH) lies north of the city. Routing
 *   (OSRM / Valhalla): RUH → Kingdom Centre, Olaya 37 km, 27–30 min; → KAFD
 *   32–33 km, 24–28 min; → Diplomatic Quarter 46–49 km, 34–40 min; → At-Turaif
 *   38–39 km, 28–34 min; → Riyadh Front 22 km, 17 min; → Masmak 45–47 km,
 *   33–39 min. Olaya → At-Turaif 16–18 km; Olaya → KAFD 9–10 km; Olaya → DQ
 *   10–13 km. Free-flow estimates; traffic adds time.
 * - RUH status: news reports (Anadolu, Gulf Business, Time Out Riyadh) describe
 *   Terminals 1 and 2 resuming on 25 October 2026; the official airport notice
 *   could not be reached on 25 Nov, so no dated status is shown. The page only
 *   asks travellers to confirm their terminal with the airline.
 * - At-Turaif, in Diriyah on the north-western edge of Riyadh, is a UNESCO
 *   World Heritage Site (photo record; UNESCO 2010).
 * - Route cards show no figures (route pages hold them). riyadh-to-jeddah and
 *   riyadh-to-alula times were corrected on 25 Nov (report 65).
 * - Not claimed: fixed prices or day-rates, flight tracking, name boards,
 *   arrivals-hall meetings, waiting between appointments, same driver, full-day
 *   chauffeur service, round trips with waiting, 24/7, hotel partnerships,
 *   multi-leg packages.
 */

export const RIYADH_REVIEWED = "2026-11-25";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type RiyadhPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa2: ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"],
  by3pl: ["CC BY 3.0 PL", "https://creativecommons.org/licenses/by/3.0/pl/deed.en"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string], file: string): Credit => ({
  title: file.replace(/\s*\.(jpe?g|png)$/i, ""),
  author,
  licence: lic[0],
  licenceUrl: lic[1],
  source: commons(file),
});

export const RIYADH_PHOTOS = {
  skyline: {
    src: "/images/riyadh/riyadh-skyline-sunset.webp",
    alt: "The Riyadh skyline at sunset, with the Kingdom Centre tower and the towers of King Abdullah Financial District behind",
    caption: "Riyadh at sunset, with the Kingdom Centre and KAFD on the skyline",
    w: 1600, h: 1067,
    credit: cr("B.alotaby", L.bysa4, "Riyadh Skyline showing the King Abdullah Financial District (KAFD) and the famous Kingdom Tower .jpg"),
  },
  airport: {
    src: "/images/riyadh/king-khalid-airport-terminal.webp",
    alt: "Cars on the departures road in front of the arched terminal buildings at King Khalid International Airport",
    caption: "The terminal frontage at King Khalid International Airport",
    w: 1600, h: 1188,
    credit: cr("Kharbaan Ghaltaan", L.bysa4, "Riyadh 1749852957748.jpg"),
  },
  kingdom: {
    src: "/images/riyadh/kingdom-centre.webp",
    alt: "The Kingdom Centre tower with its arched top rising above a street in Olaya, Riyadh",
    caption: "The Kingdom Centre in Olaya, beside King Fahd Road",
    w: 1600, h: 1063,
    credit: cr("Wajahat Mahmood", L.bysa2, "Kingdom Centre, Riyadh (6129688934).jpg"),
  },
  kafd: {
    src: "/images/riyadh/kafd-skyline.webp",
    alt: "The towers of King Abdullah Financial District rising above a highway interchange in northern Riyadh",
    caption: "King Abdullah Financial District (KAFD)",
    w: 1600, h: 1200,
    credit: cr("Ahmed", L.bysa4, "King Abdullah Financial District 20230411 114859.jpg"),
  },
  dq: {
    src: "/images/riyadh/diplomatic-quarter-view.webp",
    alt: "The Riyadh skyline on the horizon at dusk, seen across trees from the Diplomatic Quarter",
    caption: "The city skyline seen from the Diplomatic Quarter",
    w: 1600, h: 1200,
    credit: cr("Thesadcactus", L.bysa4, "Riyadh skyline.jpg"),
  },
  turaif: {
    src: "/images/riyadh/at-turaif.webp",
    alt: "Restored mud-brick walls and buttressed towers of the At-Turaif district in Diriyah under a blue sky",
    caption: "At-Turaif in Diriyah, a UNESCO World Heritage Site",
    w: 1600, h: 1067,
    credit: cr("xiquinhosilva", L.by2, "At-Turaif District.jpg"),
  },
  diriyah: {
    src: "/images/riyadh/diriyah-gardens.webp",
    alt: "Landscaped gardens and palms looking across to the mud-brick buildings of At-Turaif in Diriyah",
    caption: "Gardens looking across to At-Turaif",
    w: 1600, h: 1200,
    credit: cr("Radosław Botev", L.by3pl, "At-Turaif District in ad-Dir'iyah (2).jpg"),
  },
} satisfies Record<string, RiyadhPhoto>;

export const RIYADH = {
  hero: {
    kicker: "Riyadh Region · The capital",
    h1: "Private Transfers in Riyadh",
    intro:
      "Saudi Arabia's capital is a city of long highways and far-apart districts: an airport in the north, towers along King Fahd Road and in KAFD, embassies in the Diplomatic Quarter and the mud-brick heritage of Diriyah on its edge. Request one private vehicle for the journey you need, across the city or on to another region, and receive a quotation before you confirm.",
  },
  facts: [
    { k: "Region", v: "Riyadh Region" },
    { k: "Airport", v: "King Khalid International (RUH)" },
    { k: "RUH to Olaya", v: "≈37 km" },
    { k: "Nearest regional city", v: "Dammam, ≈400–415 km east" },
  ],

  intro: {
    heading: "A capital built for the car",
    paragraphs: [
      "Riyadh spreads across a wide plateau, and most journeys here are measured in kilometres, not blocks. The airport is a half-hour drive or more from the main districts, and moving between Olaya, the financial district, the Diplomatic Quarter and Diriyah can mean crossing much of the city.",
      "People ask for private transport here for all kinds of reasons: arriving or leaving through King Khalid International Airport, getting between meetings, moving a family and their luggage to a hotel, visiting Diriyah, or setting off on a long drive to Dammam, Qassim or the Hijaz. Tell us where you are, where you are going and when, and we will reply with a quotation.",
    ],
  },

  airport: {
    heading: "Riyadh Airport transfers",
    paragraphs: [
      "King Khalid International Airport (RUH) is north of the city. By road it is about 32–37 km to KAFD and Olaya and about 46–49 km to the Diplomatic Quarter; with ordinary traffic that is roughly 25–45 minutes, longer at busy times.",
      "You can request a transfer from the airport to a hotel, office, home or onward destination, or the reverse journey back to the airport. Share your flight details and destination when you ask for a quotation; pickup arrangements are confirmed with you individually.",
    ],
    notice:
      "Terminal arrangements at King Khalid International Airport can change. Please confirm your flight and terminal with your airline before you travel.",
    link: { href: "/airport-transfer/riyadh-airport", label: "Riyadh Airport transfers" },
    distances: [
      { to: "Riyadh Front", km: "≈22 km" },
      { to: "KAFD", km: "≈32–33 km" },
      { to: "Olaya / Kingdom Centre", km: "≈37 km" },
      { to: "At-Turaif, Diriyah", km: "≈38–39 km" },
      { to: "Diplomatic Quarter", km: "≈46–49 km" },
    ],
  },

  business: {
    heading: "Business travel across Riyadh",
    intro:
      "Much of the city's business life sits along a few corridors, and they are far enough apart that a car is the practical way between them.",
    districts: [
      { name: "Olaya and King Fahd Road", text: "Offices, hotels and the Kingdom Centre along the city's main north–south spine.", photo: "kingdom" as const },
      { name: "King Abdullah Financial District", text: "KAFD's towers in the north, about 9–10 km from Olaya.", photo: "kafd" as const },
      { name: "Diplomatic Quarter", text: "Embassies and organisations on the western side, with its own entry arrangements.", photo: "dq" as const },
    ],
    text:
      "Send your meeting schedule, the addresses and your timings, and we will quote for the journeys you need. For exhibitions and conferences at Riyadh Front, or during Riyadh Season, many people prefer to arrange their transport in advance.",
  },

  intercity: {
    heading: "From Riyadh to other cities",
    intro: "Each journey has its own page with the route, distance and what to expect. Every transfer is arranged by quotation.",
    routes: [
      { href: "/routes/riyadh-to-dammam", name: "Dammam", dir: "East", text: "To the Eastern Province and the Gulf coast." },
      { href: "/routes/riyadh-to-qassim", name: "Qassim", dir: "North-west", text: "Buraidah, Unaizah and the Qassim farmlands." },
      { href: "/routes/riyadh-to-jeddah", name: "Jeddah", dir: "West", text: "Across the country to the Red Sea." },
      { href: "/routes/riyadh-to-makkah", name: "Makkah", dir: "West", text: "For Umrah and onward pilgrim travel." },
      { href: "/routes/riyadh-to-madinah", name: "Madinah", dir: "North-west", text: "To the city of the Prophet's Mosque." },
      { href: "/routes/riyadh-to-alula", name: "AlUla", dir: "North-west", text: "To AlUla's sandstone valleys and heritage sites." },
    ],
  },

  hotels: {
    heading: "Hotel transfers",
    text:
      "Staying in Riyadh? Give us your hotel name or address and we can quote for the airport transfer, a ride to your meetings or a journey across the city. Our Riyadh hotel directory lists airport transfers for individual hotels.",
    link: { href: "/cities/riyadh", label: "Riyadh hotel transfers" },
  },

  culture: {
    heading: "Diriyah and At-Turaif",
    paragraphs: [
      "On Riyadh's north-western edge, Diriyah was the first capital of the Saudi state. Its At-Turaif district, a restored mud-brick citadel, is a UNESCO World Heritage Site, and the area around it now has gardens, restaurants and walkways.",
      "From Olaya it is about 16–18 km. Request a transfer there, and if you would like a ride back, mention your plans and preferred time in your request.",
    ],
  },

  groups: {
    heading: "Families, groups and delegations",
    items: [
      { title: "Families", text: "Tell us how many adults, children and bags, and a suitable vehicle can be suggested in your quotation." },
      { title: "Groups and delegations", text: "Larger vehicles can be requested for groups travelling together, including visitors to exhibitions and events." },
      { title: "Child seats", text: "Child seats can be provided on request. Tell us how many you need and the children's ages so availability can be confirmed." },
    ],
  },

  pickup: {
    heading: "Pickup and drop-off places",
    intro: "These are some of the places people ask for. Any exact address in Riyadh can be given.",
    groups: [
      { title: "Airport", items: ["King Khalid International Airport (RUH)"] },
      { title: "Business", items: ["Olaya and King Fahd Road", "Kingdom Centre", "KAFD", "Diplomatic Quarter"] },
      { title: "Events and culture", items: ["Riyadh Front", "Diriyah and At-Turaif"] },
      { title: "Everyday", items: ["Hotels", "Homes and compounds", "Offices"] },
    ],
  },

  regional: {
    heading: "Riyadh's regional connections",
    intro: "Riyadh sits near the centre of the country, so most long-distance journeys start here.",
    groups: [
      { dir: "East", links: [{ href: "/routes/riyadh-to-dammam", label: "Dammam" }, { href: "/routes/riyadh-to-khobar", label: "Khobar" }, { href: "/routes/riyadh-to-jubail", label: "Jubail" }] },
      { dir: "North", links: [{ href: "/routes/riyadh-to-qassim", label: "Qassim" }, { href: "/routes/riyadh-to-hail", label: "Hail" }] },
      { dir: "West", links: [{ href: "/routes/riyadh-to-jeddah", label: "Jeddah" }, { href: "/routes/riyadh-to-makkah", label: "Makkah" }, { href: "/routes/riyadh-to-madinah", label: "Madinah" }, { href: "/routes/riyadh-to-alula", label: "AlUla" }, { href: "/routes/riyadh-to-yanbu", label: "Yanbu" }] },
      { dir: "South", links: [{ href: "/routes/riyadh-to-abha", label: "Abha" }] },
    ],
    note: "Each journey is quoted individually, based on your pickup, destination, date and group.",
  },

  booking: {
    heading: "How to book a Riyadh transfer",
    steps: [
      { title: "Pickup", text: "Where you would like to be collected." },
      { title: "Destination", text: "Where you are going, in Riyadh or beyond." },
      { title: "Date and time", text: "Your date and preferred time." },
      { title: "Passengers and luggage", text: "How many people and bags." },
      { title: "Quotation", text: "Review it, then confirm if you are happy." },
    ],
    form: {
      dropoffPlaceholder: "e.g. hotel in Olaya, KAFD, Riyadh Airport or Dammam",
      messagePlaceholder: "Anything else? e.g. flight number, meeting schedule, child seats",
    },
  },

  final: {
    heading: "Travelling in or from Riyadh?",
    text: "Send your pickup, destination, date and number of passengers, and we will reply with a quotation.",
  },
};

export const RIYADH_FAQS: Faq[] = [
  { question: "How far is King Khalid International Airport from central Riyadh?", answer: "About 32–37 km by road to KAFD and Olaya, roughly 25–45 minutes with ordinary traffic. The Diplomatic Quarter is about 46–49 km." },
  { question: "Can I request a private airport transfer to a Riyadh hotel?", answer: "Yes. Share your flight details and hotel when you request a quotation; pickup arrangements are confirmed with you individually." },
  { question: "Can I request a return transfer to the airport?", answer: "Yes. Give your pickup address and flight time, and confirm your terminal with your airline before you travel." },
  { question: "Can I request transport to King Abdullah Financial District?", answer: "Yes. Give the building or address in KAFD when you request your quotation." },
  { question: "Can I book transport for business meetings in Riyadh?", answer: "Yes. Send your meeting schedule, addresses and timings, and we will quote for the journeys you need." },
  { question: "Can I travel between several places in Riyadh on the same day?", answer: "Yes. List all your stops and times in your request, and the quotation will cover the plan." },
  { question: "What vehicle can I request for a family?", answer: "Tell us the number of passengers and bags, and a suitable vehicle will be suggested in your quotation." },
  { question: "Can I request child seats?", answer: "Child seats can be provided on request. Tell us how many you need and the children's ages so availability can be confirmed." },
  { question: "Can I book a transfer to Diriyah or At-Turaif?", answer: "Yes. Diriyah is about 16–18 km from Olaya. Mention any return plans and timings in your request." },
  { question: "Can I travel from Riyadh to Dammam, Jeddah or Makkah?", answer: "Yes. Each route has its own page, and every journey is arranged by quotation." },
  { question: "How do I receive a quotation?", answer: "Send your pickup, destination, date, time, passengers and luggage through the form on this page or on WhatsApp, and we will reply with a quotation." },
];
