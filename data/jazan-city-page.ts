import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/jazan — copy for components/city-transfer/JazanCityView.tsx.
 *
 * Fact sheet (24 Nov 2026):
 * - Jazan (Jizan): capital of Jazan Province on the south-western Red Sea coast,
 *   ≈4 m above sea level (Wikipedia; Copernicus DEM). Port of Jazan in the city.
 * - Farasan Islands: archipelago ≈40 km off the coast; Farasan Islands
 *   Governorate of Jazan Province; protected area a UNESCO Biosphere Reserve
 *   (2021) (Wikipedia).
 * - Jazan-side ferry terminal: OpenStreetMap amenity=ferry_terminal at 16.8932,
 *   42.5342 in Al-Sahil, beside a ferry-passenger car park; ≈4 km by road from
 *   the city centre, ≈7 km from the airport (OSRM). No schedules, fares or
 *   operator procedures are stated on the page.
 * - Airport: King Abdullah bin Abdulaziz International Airport (GIZ), also known
 *   as Jizan airport (Wikipedia); ≈4 km by road from the centre (OSRM).
 * - Corniche: North Corniche ≈6 km, South Corniche to the south (OpenStreetMap).
 * - Fayfa (Fifa) Mountains: around the town of Fayfa, 17.26 N 43.11 E (Wikipedia
 *   / Nominatim); ≈100 km by road from Jazan (OSRM); Fayfa town ≈1,690 m (DEM).
 * - Jazan City for Primary and Downstream Industries (formerly Jazan Economic
 *   City): planned industrial city focused on energy and manufacturing (Wikipedia);
 *   ≈73 km north by road (OSRM). Current status not described beyond that.
 * - Intercity (OSRM / Valhalla, central points): Jazan → Abha 200 / 216 km,
 *   2.4 / 2.8 h → "about 200–215 km, roughly 2.5–3 hours"; Jazan → Najran
 *   326 / 328 km, 4.7 / 5.7 h → "about 325–330 km, roughly 5–6 hours";
 *   Jazan → Riyadh 1,140 / 1,192 km, 13.7 / 15.2 h. The Jizan–Riyadh route
 *   records were corrected to 1,140–1,190 km / ≈13.5–15 h (report 57).
 * - Operations: quotation-based; GIZ meeting point confirmed individually; no
 *   flight tracking, name boards, free waiting or luggage help; child seats on
 *   request, subject to availability; road transfers to the Jazan ferry terminal
 *   and return pickups from it (owner confirmed 24 Nov 2026); the crossing,
 *   tickets, schedules and transport on Farasan are not included.
 * - Photos: Wikimedia Commons, licences checked via the Wikipedia API
 *   (commercial use permitted; attribution shown on the page).
 */

export const JAZAN_REVIEWED = "2026-11-24";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type JazanPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa3: ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string] | "pd", file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  ...(lic === "pd" ? { licence: "Public domain" } : { licence: lic[0], licenceUrl: lic[1] }),
  source: commons(file),
});

export const JAZAN_PHOTOS = {
  sunset: {
    src: "/images/jazan/jazan-sunset-corniche.webp",
    alt: "The sun setting over the Red Sea from a beach on Jazan's South Corniche",
    caption: "Sunset over the Red Sea from Jazan's South Corniche",
    w: 1800, h: 1350,
    credit: cr("MrJoker07", L.bysa3, "Sunset in Jazan.jpg"),
  },
  mangroves: {
    src: "/images/jazan/jazan-mangroves.webp",
    alt: "Flamingos wading in shallow water in front of mangrove trees on the Jazan coast",
    caption: "Mangroves and flamingos on the Jazan shoreline",
    w: 1600, h: 900,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "Mangrove Trees Enhance Biodiversity on Jazan's Shores (2025).jpg"),
  },
  mangroves2: {
    src: "/images/jazan/jazan-mangroves-2.webp",
    alt: "A flock of flamingos taking off over shallow water beside mangroves on the Jazan coast",
    caption: "Birdlife among the coastal mangroves",
    w: 1400, h: 788,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "Mangrove Trees Enhance Biodiversity on Jazan's Shores (2) - 2025.jpg"),
  },
  farasanSea: {
    src: "/images/jazan/farasan-red-sea.webp",
    alt: "Clear turquoise Red Sea water beside a rocky breakwater on Farasan Island",
    caption: "The Red Sea at Farasan Island",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Red Sea at Farasan Island, Jazan Region, Saudi Arabia.jpg"),
  },
  farasanPort: {
    src: "/images/jazan/farasan-port.webp",
    alt: "A white passenger ferry moored at the port on Farasan Island under a blue sky",
    caption: "A passenger ferry at the port on Farasan Island, the island end of the crossing",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Farasan Island port, Jazan Region, Saudi Arabia (1).jpg"),
  },
  farasanFort: {
    src: "/images/jazan/farasan-fort.webp",
    alt: "A low stone Ottoman-era fort on rocky ground on the Farasan Islands",
    caption: "The Ottoman fort on the Farasan Islands",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Ottoman fort on Farasan Islands.jpg"),
  },
  farasanHouse: {
    src: "/images/jazan/farasan-house.webp",
    alt: "Carved plaster arches and decoration inside an early 20th-century pearl merchant's house on Farasan Island",
    caption: "Carved interior of an early 20th-century pearl merchant's house on Farasan",
    w: 1200, h: 900,
    credit: cr("Richard Mortel", L.by2, "Detail of pearl merchant's house, early 20th century, Farasan Island, Jazan Region, Saudi Arabia (2).jpg"),
  },
  flamingos: {
    src: "/images/jazan/farasan-flamingos.webp",
    alt: "Flamingos standing in shallow water off Farasan Island with low hills behind",
    caption: "Flamingos off Farasan Island",
    w: 1400, h: 933,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "Flamingos in Farasan Island, Saudi Arabia (2025).jpg"),
  },
  iss: {
    src: "/images/jazan/iss-farasan.webp",
    alt: "Photograph from the International Space Station showing the Farasan Islands and reefs off the Saudi Red Sea coast",
    caption: "The Farasan Islands off the Jazan coast, photographed from the International Space Station",
    w: 1400, h: 924,
    credit: cr("NASA Earth Science and Remote Sensing Unit", "pd", "ISS042-E-237341 - View of Saudi Arabia - Farasan Islands - Red Sea (cropped).jpg"),
  },
  fayfa: {
    src: "/images/jazan/fayfa-mountains.webp",
    alt: "Aerial view of houses and green terraces in the Fayfa Mountains with the coastal plain far below",
    caption: "Homes and terraces across the Fayfa Mountains, with the coastal plain below",
    w: 1400, h: 788,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "Jazan's Fayfa Mountains (2025).jpg"),
  },
  fayfa2: {
    src: "/images/jazan/fayfa-mountains-2.webp",
    alt: "Houses scattered across steep green slopes in the Fayfa Mountains, linked by winding roads under hazy cloud",
    caption: "Winding roads across the Fayfa Mountains",
    w: 1400, h: 788,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "جبال محافظة فيفا بمنطقة جازان جنوب غربي السعودية (2025).jpg"),
  },
} satisfies Record<string, JazanPhoto>;

/** Road distances from central Jazan (OSRM; intercity ranges include Valhalla). */
export const RULER = [
  { name: "Airport (GIZ)", km: 4, label: "≈4 km" },
  { name: "Ferry terminal", km: 4, label: "≈4 km" },
  { name: "North Corniche", km: 6, label: "≈6 km" },
  { name: "Industrial city (JCPDI)", km: 73, label: "≈73 km" },
  { name: "Fayfa Mountains", km: 100, label: "≈100 km" },
  { name: "Abha", km: 208, label: "≈200–215 km" },
  { name: "Najran", km: 327, label: "≈325–330 km" },
] as const;

export const JAZAN = {
  hero: {
    eyebrow: "Jazan Province · south-western Red Sea coast",
    h1: "Private Transfers in Jazan",
    intro: [
      "Jazan sits low on Saudi Arabia's south-western Red Sea coast, a warm port city with a long corniche, mangrove-lined shores and the Farasan Islands about 40 km offshore. Inland, the land rises to the green Fayfa Mountains, and roads run north to Abha and east to Najran.",
      "Each of those journeys is different: a short ride from the airport, a timed drop at the ferry terminal, a climb into the mountains, or a longer drive to another city. Private transfers can be requested for all of them, with the details confirmed in a quotation before you travel.",
    ],
    tide: [
      { k: "Coast", v: "Corniche ≈6 km" },
      { k: "Islands", v: "Ferry terminal ≈4 km" },
      { k: "Highlands", v: "Fayfa ≈100 km" },
    ],
  },

  triptych: {
    heading: "Coast, islands and highlands",
    intro:
      "Three very different landscapes sit within a couple of hours of each other. What you need to tell us depends on which one you're heading for.",
    parts: [
      {
        name: "The coast",
        photo: "mangroves",
        text: "Jazan city, its North and South Corniche, waterfront hotels, the port and the city's residential and business districts, all within a few kilometres of each other on flat coastal land.",
        type: "Local transfer",
        send: "The exact hotel, address or map pin, since districts and corniche sections are spread along the shore.",
      },
      {
        name: "The islands",
        photo: "farasanSea",
        text: "The Farasan Islands, about 40 km out in the Red Sea, with clear water, reefs, birdlife and historic buildings. They're reached by sea, not by road.",
        type: "Transfer to the ferry terminal",
        send: "Your ferry departure time (or arrival time for a return pickup), passengers, luggage and any equipment. The crossing is arranged separately.",
      },
      {
        name: "The highlands",
        photo: "fayfa",
        text: "The Fayfa Mountains rise steeply inland to around 1,700 m, with villages and terraces clinging to green slopes far above the coastal heat.",
        type: "Mountain transfer",
        send: "Where in the mountains you're going, whether you need a return, and any time you'd like there.",
      },
    ],
  },

  ruler: {
    heading: "How far things are from central Jazan",
    note: "Road distances measured with OpenStreetMap routing (OSRM; intercity ranges cross-checked with Valhalla) from central Jazan, rounded. Your exact pickup and drop-off points change them.",
  },

  airport: {
    heading: "Arriving at Jazan Airport",
    intro:
      "King Abdullah bin Abdulaziz International Airport (GIZ), usually called Jazan Airport, is only about 4 km by road from the city centre, so most hotel transfers are short. Longer journeys from the airport, to the mountains or another city, start the same way.",
    steps: [
      { t: "Share your flight details", d: "Airline, flight number, arrival date and time, sent when you request a quotation." },
      { t: "Give the exact address", d: "Hotel name, residence or map pin, or the ferry terminal if you're continuing to Farasan." },
      { t: "Receive your quotation", d: "Pickup availability and the meeting point are confirmed individually with your booking." },
      { t: "Tell us about changes", d: "If your flight time changes, message us as soon as you know; flights aren't tracked automatically." },
    ],
    link: "Airport-specific details are on our [Jazan Airport transfers](/airport-transfer/jazan-airport) page.",
  },

  ferry: {
    heading: "Farasan Islands: getting to the ferry terminal",
    intro:
      "The Farasan Islands are one of the reasons many people come to Jazan: a protected archipelago, recognised as a UNESCO Biosphere Reserve in 2021, with turquoise water, reefs, migrating birds and old coral-stone houses. The islands are reached by ferry from Jazan.",
    journey: [
      { label: "Hotel or residence", sub: "Your pickup in Jazan", ours: true },
      { label: "Private road transfer", sub: "≈4 km from the centre", ours: true },
      { label: "Jazan ferry terminal", sub: "Port area, Al-Sahil", ours: true },
      { label: "Ferry crossing", sub: "Arranged separately", ours: false },
      { label: "Farasan Islands", sub: "≈40 km offshore", ours: false },
    ],
    returnLeg: {
      title: "Coming back from Farasan",
      text: "We can also arrange a return pickup from the Jazan ferry terminal when you arrive back from the islands, to your hotel, the airport or onward. Share your expected ferry arrival time and confirm the return transfer in advance, just like the outbound one.",
    },
    notIncluded:
      "Our service is the road transfer to and from the Jazan ferry terminal. Ferry tickets, sailing schedules, the crossing itself and transport within the Farasan Islands are not included. We can't guarantee ferry timings or availability, and each road transfer is confirmed separately.",
    points: [
      { t: "Check the ferry first", d: "Confirm current sailing times, booking and boarding requirements with the ferry operator before you request a transfer." },
      { t: "Give us your ferry times", d: "Share the expected departure time for the outbound transfer, and the expected arrival time back in Jazan for a return pickup. Each road transfer is confirmed in advance." },
      { t: "Allow time before sailing", d: "Follow the operator's guidance on how early to arrive, and add a margin for check-in and luggage." },
      { t: "Describe luggage and equipment", d: "Tell us about suitcases, coolers or diving equipment with rough sizes. Whether they fit is confirmed in the quotation." },
      { t: "If the sailing changes", d: "Ferry timings aren't guaranteed. If your departure or return sailing moves, message us as soon as you know so the road transfer can be reviewed." },
    ],
  },

  highlands: {
    heading: "Fayfa Mountains and inland journeys",
    paragraphs: [
      "Within about two hours of the coast, the landscape changes completely. The Fayfa Mountains, around the town of Fayfa roughly 100 km from Jazan by road, climb from the plain to around 1,700 m, with houses and terraces spread across steep green slopes.",
      "The mountain roads are steep and winding, and cloud can settle over the higher ground, so these trips take longer than the distance suggests. Plan extra time, and travel in daylight where you can.",
    ],
    compare: {
      heading: "Transfer or tour?",
      transfer: {
        title: "Point-to-point transfer",
        items: ["From your Jazan address to a named place in the mountains", "A return can be requested separately or in the same quotation", "Priced for the drive you describe"],
      },
      tour: {
        title: "Sightseeing day",
        items: ["Several stops, with time at each", "Waiting time only if it's in the quotation", "No guide is included; the driver provides the transport"],
      },
    },
    send: "When you request a mountain transfer, send the place name or map pin, how many people, whether you need a return and roughly how long you want there.",
  },

  city: {
    heading: "Travelling around Jazan city",
    paragraphs: [
      "Most local journeys are short: between hotels, homes, offices, the corniche, shopping areas and the port. The city stretches along the shore, with a North Corniche and a South Corniche some distance apart, so the exact pickup and drop-off points matter more than the city name.",
      "About 73 km to the north is Jazan City for Primary and Downstream Industries, the planned industrial city formerly known as Jazan Economic City. Business transfers there can be requested; access to industrial or controlled sites depends on your own arrangements with the site and isn't guaranteed.",
    ],
    tips: ["Share a hotel name or map pin, not just \"the corniche\"", "Mention the entrance or gate for large sites", "For business trips, include a site contact"],
  },

  journeys: {
    heading: "Choose your journey",
    items: [
      { n: "01", title: "Jazan Airport to hotel", text: "A short ride from GIZ to your hotel or address.", href: "/airport-transfer/jazan-airport", link: "Jazan Airport transfers" },
      { n: "02", title: "Hotel to Jazan Airport", text: "A drop-off timed for your flight. Share your departure time.", href: "/airport-transfer/jazan-airport", link: "Jazan Airport transfers" },
      { n: "03", title: "Farasan ferry terminal", text: "To the terminal for your sailing, and a return pickup when you arrive back.", href: "#ferry", link: "Ferry terminal guide" },
      { n: "04", title: "Jazan to the Fayfa Mountains", text: "A climb of about 100 km to the highlands, one way or return.", href: "#highlands", link: "Mountain journeys" },
      { n: "05", title: "Jazan to Abha", text: "About 200–215 km north to the Asir highlands.", href: "/taxi-service/abha", link: "Transfers in Abha" },
      { n: "06", title: "Jazan to Najran", text: "About 325–330 km east to Najran.", href: "/taxi-service/najran", link: "Transfers in Najran" },
      { n: "07", title: "Business and corporate", text: "Offices, the port and the industrial city, with site details.", href: "#city", link: "Around Jazan city" },
      { n: "08", title: "Families and groups", text: "Larger vehicles and child seats on request.", href: "#families", link: "Vehicles and luggage" },
    ],
  },

  connections: {
    heading: "Jazan to other southern Saudi cities",
    intro: "Longer journeys from Jazan. Distances are between city centres; the quotation uses your exact addresses.",
    rows: [
      { to: "Abha", dist: "≈200–215 km", time: "≈2.5–3 hours", href: "/taxi-service/abha", link: "Transfers in Abha", note: "North into the Asir highlands" },
      { to: "Najran", dist: "≈325–330 km", time: "≈5–6 hours", href: "/taxi-service/najran", link: "Transfers in Najran", note: "East to Najran" },
      { to: "Riyadh", dist: "≈1,140–1,190 km", time: "≈13.5–15 hours", href: "/routes/jizan-to-riyadh", link: "Jizan to Riyadh", note: "Via Abha and Bisha; a very long road journey" },
    ],
    note: "There's no dedicated route page yet for Jazan to Abha or Najran, so those links go to the city pages; request either journey through the form below. Return journeys from Riyadh: [Riyadh to Jizan](/routes/riyadh-to-jizan).",
  },

  families: {
    heading: "Families, groups and luggage",
    intro:
      "Ferry trips, family holidays and business visits need very different amounts of space. Tell us exactly how many people and bags are travelling, and the quotation suggests a vehicle; any particular model is subject to availability.",
    equipment:
      "Heading to Farasan with dive gear, coolers or other equipment? Describe each item and its rough size when you enquire. Whether it fits, and in which vehicle, is confirmed in your quotation; specialist equipment isn't guaranteed to fit.",
    childSeats:
      "Child seats can be provided on request, subject to availability. Please share the number of seats required and the children's ages when enquiring.",
    fit: {
      economy: "One or two people around the city",
      comfort: "Couples and small families",
      business: "Business visitors",
      suv: "Families with luggage; mountain trips",
      van: "Larger families and ferry groups",
      minibus: "Groups travelling together",
    } as Record<string, string>,
  },

  checklist: {
    heading: "Your Jazan travel checklist",
    prep: [
      "Exact pickup address",
      "Exact destination",
      "Travel date and preferred time",
      "Number of passengers",
      "Number of bags",
      "Flight number, if you're flying",
      "Ferry departure or arrival time, for terminal transfers",
      "Special equipment or other requirements",
      "Child seats needed (number and ages)",
    ],
    prepNote: "Preparation for you: things to have ready before you ask.",
    confirmed: ["Vehicle and capacity", "Pickup point and time", "Any stops or waiting", "Child-seat availability", "The price and what it covers"],
    confirmedNote: "Confirmed in your quotation, not assumed.",
  },

  request: {
    heading: "How to request a Jazan transfer",
    steps: [
      "Share your pickup and destination.",
      "Provide the date, time, passengers and luggage.",
      "Add flight details or the ferry departure time where relevant.",
      "Receive a quotation.",
      "Confirm the quotation before you travel.",
    ],
    note: "The confirmed quotation sets the agreed price and explains what it covers.",
    dropoffPlaceholder: "Hotel, address, ferry terminal, Fayfa or another city",
    messagePlaceholder: "Flight details, ferry departure time, equipment sizes, child seats (number and ages), stops or a return trip.",
  },

  final: {
    heading: "Planning a journey in Jazan?",
    text: "Send your pickup, destination, date, time, passengers and luggage, plus any flight or ferry times, equipment or child seats. We'll reply with a quotation, and nothing is booked until you confirm it.",
  },

  method:
    "Reviewed 24 November 2026. Road distances from OpenStreetMap routing (OSRM, with Valhalla for intercity ranges); locations from OpenStreetMap and Wikipedia; elevations from the Copernicus DEM. Ferry schedules, fares and boarding rules are set by the ferry operator and aren't covered here.",
};

export const JAZAN_FAQS: Faq[] = [
  { question: "How do I book a private transfer in Jazan?", answer: "Use the form on this page or WhatsApp to tell us where you are starting, where you are going in or around Jazan, and when. We reply with a quotation; once you confirm it, the transfer is booked." },
  { question: "Can I arrange a transfer from Jazan Airport to my hotel?", answer: "Yes. GIZ is only about 4 km from central Jazan, so most hotel transfers are short. Include your flight number and the hotel name or map pin in your request." },
  { question: "Where will I meet my driver at Jazan Airport?", answer: "The meeting point at GIZ is confirmed individually when you book, and you receive it with your confirmed quotation. There is no standard spot or sign to look for." },
  { question: "Can I book a transfer to the Farasan Islands ferry terminal?", answer: "Yes. The road transfer takes you to the Jazan ferry terminal, about 4 km from the city centre; give us your ferry departure time so the pickup can be planned around it." },
  { question: "Can you pick me up at the ferry terminal when I return from Farasan?", answer: "Yes, a return pickup from the Jazan ferry terminal can be arranged. Share your expected ferry arrival time and confirm the road transfer in advance; ferry timings aren't guaranteed, so message us if your sailing changes." },
  { question: "Does the transfer include the ferry crossing?", answer: "No. Ferry tickets, sailing schedules, the crossing itself and transport within the Farasan Islands are not included. They're handled by the ferry operator, and we can't guarantee them." },
  { question: "How early should I reach the Farasan ferry terminal?", answer: "Follow the ferry operator's guidance for your sailing and allow a margin for check-in and luggage. Tell us the departure time and we'll plan the transfer to arrive in good time." },
  { question: "Can I travel from Jazan to the Fayfa Mountains?", answer: "Yes. Fayfa is about 100 km from Jazan by road, on steep and winding mountain roads, so allow extra time. Say whether you need a return or waiting time so it can be quoted." },
  { question: "Can I book a transfer from Jazan to Abha?", answer: "Yes. Abha is about 200–215 km north of Jazan, roughly 2.5–3 hours of driving. Request it through the form with your exact addresses." },
  { question: "Can I travel from Jazan to Najran?", answer: "Yes, it can be requested. Najran is about 325–330 km from Jazan, roughly 5–6 hours of driving." },
  { question: "Are private vehicles available for families and groups?", answer: "SUVs, vans and minibuses can be requested for larger parties; the vehicle is confirmed in your quotation based on passengers and luggage, subject to availability." },
  { question: "Can I carry luggage and diving equipment?", answer: "Describe your luggage and equipment, with rough sizes, when you enquire. Whether it fits, and in which vehicle, is confirmed in the quotation." },
  { question: "Are child seats available?", answer: "Child seats can be provided on request, subject to availability. Share the number of seats and the children's ages when you enquire." },
  { question: "Can I request multiple stops?", answer: "Yes, for example the corniche, a shopping stop and the ferry terminal. Name each stop and the time you want there; stops and waiting count only when your quotation lists them." },
  { question: "How is the transfer quotation calculated?", answer: "Distance, the vehicle needed for your group and luggage, the time of travel, and any extra stops, returns or waiting. The confirmed quotation sets the price and explains what it covers." },
];
