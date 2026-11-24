import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/abha — copy for components/city-transfer/AbhaCityView.tsx.
 *
 * Fact sheet (24 Nov 2026):
 * - Abha: capital of the Asir Region, south-western Saudi Arabia; ≈2,220 m
 *   (Copernicus DEM via Open-Meteo at 18.2164, 42.5053).
 * - Positions (Nominatim / OpenStreetMap): Green Mountain (Al-Jabal Al-Akhdar)
 *   18.2045, 42.5063, ≈1.3 km south of the centre; Abha Dam 18.2119, 42.4882,
 *   ≈2 km west; Habala Park 18.0306, 42.8535.
 * - Road distances from central Abha (OSRM): Abha International Airport ≈20 km;
 *   Al-Soudah ≈23 km; Khamis Mushait ≈30 km; Rijal Almaa ≈52 km; Habala Park
 *   ≈55 km. Elevations (DEM): Khamis Mushait ≈1,990 m; Al-Soudah ≈2,960 m;
 *   Habala clifftop ≈2,400 m; Rijal Almaa ≈1,130 m.
 * - Intercity (OSRM + Valhalla): Abha ↔ Riyadh 940–960 km, ≈11–12 h; AHB →
 *   Riyadh 935–950 km, ≈11–12 h; Abha ↔ Jeddah 680–690 km, ≈7.5–8 h; AHB →
 *   Jeddah 695–705 km, ≈7.5–8 h. Makkah → Abha not re-measured: no figure.
 * - Operations: quotation-based pricing; AHB arrangements NOT confirmed (no
 *   flight tracking, arrivals hall, name board, free waiting or luggage help);
 *   child seats on request, subject to availability (number + ages); overnight
 *   stops not offered on Abha–Riyadh. Sightseeing, waiting and guided visits
 *   are not part of an ordinary transfer unless quoted.
 * - Photos: Wikimedia Commons; licences re-checked via the Wikipedia API
 *   (commercial use permitted, attribution shown on the page).
 */

export const ABHA_CITY_REVIEWED = "2026-11-24";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type CityPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa2: ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"],
  bysa3: ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string] | "pd", file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  ...(lic === "pd" ? { licence: "Public domain" } : { licence: lic[0], licenceUrl: lic[1] }),
  source: commons(file),
});

export const CITY_PHOTOS = {
  greenMountain: {
    src: "/images/asir/green-mountain-night.webp",
    alt: "Green Mountain in Abha lit up in green at night above the city's buildings",
    caption: "Green Mountain (Al-Jabal Al-Akhdar) lit up above Abha at night",
    w: 1400, h: 1050,
    credit: cr("Basheer Olakara", L.by2, "Green Mountain - Abha, Saudi Arabia (6702611457).jpg"),
  },
  iss: {
    src: "/images/asir/iss-abha-khamis-mushait.webp",
    alt: "Night-time photograph from the International Space Station showing the lights of Abha and Khamis Mushait",
    caption: "Abha and Khamis Mushait at night, photographed from the International Space Station in May 2025",
    w: 1400, h: 933,
    credit: cr("NASA Johnson Space Center", "pd", "The Saudi Arabian cities of Abha and Khamis Mushait (iss073e0175700).jpg"),
  },
  city: {
    src: "/images/asir/abha-city-view.webp",
    alt: "View over Abha's buildings towards mountains under heavy cloud",
    caption: "Abha spread across its highland basin",
    w: 1400, h: 1050,
    credit: cr("Aiman titi", L.bysa3, "Abha 12.jpg"),
  },
  street: {
    src: "/images/asir/abha-street-mountains.webp",
    alt: "A road curving past buildings in Abha with wooded hills behind",
    caption: "A street in Abha with the hills close behind",
    w: 1400, h: 965,
    credit: cr("Basheer Olakara", L.by2, "ABHA (6348527614).jpg"),
  },
  cablecar: {
    src: "/images/asir/abha-cable-car.webp",
    alt: "A cable car cabin crossing above Abha under grey cloud",
    caption: "A cable car crossing above the city",
    w: 1400, h: 1050,
    credit: cr("Aiman titi", L.bysa3, "Abha 29.jpg"),
  },
  dam: {
    src: "/images/asir/abha-dam-lake.webp",
    alt: "The reservoir of Abha Dam with the city's buildings around it",
    caption: "Abha Dam Lake, on the western edge of the city",
    w: 1200, h: 1200,
    credit: cr("Aboluay", L.bysa4, "Abha Dam Lake.jpg"),
  },
  soudah: {
    src: "/images/asir/al-soudah-mountains.webp",
    alt: "Forested ridges and deep valleys in the mountains at Al-Soudah, Asir region",
    caption: "The mountains at Al-Soudah",
    w: 1600, h: 1200,
    credit: cr("marviikad", L.bysa2, "Al Sawda peak.jpg"),
  },
  slopes: {
    src: "/images/asir/al-soudah-green-slopes.webp",
    alt: "Steep, tree-covered mountain slopes near the summit area at Al-Soudah",
    caption: "Green slopes near Al-Soudah",
    w: 1400, h: 788,
    credit: cr("Irshadpp", L.bysa4, "Al Sowda Hill top 06.jpg"),
  },
  habala: {
    src: "/images/asir/habala-valley.webp",
    alt: "Sandstone cliffs on the edge of the Habala valley",
    caption: "The cliffs at Habala",
    w: 1200, h: 797,
    credit: cr("Wajahatmr", L.bysa3, "Living on the verge of Habala Valley.jpg"),
  },
  rijal: {
    src: "/images/asir/rijal-almaa-village.webp",
    alt: "Multi-storey stone houses of the historic village of Rijal Almaa against green mountains",
    caption: "Rijal Almaa, on the western slopes below Abha",
    w: 1200, h: 900,
    credit: cr("Richard Mortel", L.by2, "Rijal Almaa village 2021.jpg"),
  },
} satisfies Record<string, CityPhoto>;

/** Orientation diagram: straight-line offsets from central Abha (km, east +, north +), from coordinates above. */
export const ORIENTATION = [
  { name: "Green Mountain", x: 0.1, y: -1.3, road: "≈1 km", ring: "city" },
  { name: "Abha Dam Lake", x: -1.8, y: -0.5, road: "≈2 km", ring: "city" },
  { name: "Abha Airport (AHB)", x: 15.9, y: 2.7, road: "≈20 km by road", ring: "near" },
  { name: "Khamis Mushait", x: 24.0, y: 9.3, road: "≈30 km by road", ring: "near" },
  { name: "Al-Soudah", x: -14.6, y: 5.6, road: "≈23 km by road", ring: "near" },
  { name: "Rijal Almaa", x: -24.8, y: -0.1, road: "≈52 km by road", ring: "far" },
  { name: "Habala", x: 36.7, y: -20.6, road: "≈55 km by road", ring: "far" },
] as const;

export const ABHA_CITY = {
  hero: {
    eyebrow: "Asir Region · south-western Saudi Arabia",
    h1: "Private Transfers in Abha",
    intro: [
      "Abha sits at around 2,200 m in the Asir highlands, a green, often cloudy city that feels a world away from the heat of the coast and the central plateau. Visitors come for the cooler air, the mountain views and a regional culture all its own.",
      "Getting around takes some planning. The airport is outside the city, Khamis Mushait is a separate city next door, and the best-known viewpoints and villages are spread across the mountains. Private transfers can be requested between the airport, hotels, homes, attractions and other cities, each confirmed in a quotation before you travel.",
    ],
    facts: [
      { k: "Region", v: "Asir" },
      { k: "Altitude", v: "≈2,200 m" },
      { k: "Airport", v: "AHB, ≈20 km" },
    ],
  },

  index: [
    { id: "region", label: "Abha and Asir" },
    { id: "airport", label: "From the airport" },
    { id: "destinations", label: "Around Abha" },
    { id: "journeys", label: "Journey types" },
    { id: "planning", label: "Sightseeing days" },
    { id: "vehicles", label: "Families and groups" },
    { id: "intercity", label: "Other cities" },
    { id: "request", label: "Request a quote" },
    { id: "faq", label: "FAQs" },
  ],

  region: {
    heading: "Abha and the wider Asir region",
    answer:
      "Abha is the capital of the Asir Region and a natural base for exploring the highlands. Most visitors divide their time between the city itself, its larger neighbour Khamis Mushait, and mountain destinations 20 to 60 km away. That spread is why many stays involve more than one transfer.",
    paragraphs: [
      "Inside Abha, Green Mountain and Abha Dam Lake are only a kilometre or two from the centre. Abha International Airport lies about 20 km east by road, on the way towards Khamis Mushait, which is about 30 km from central Abha and noticeably more urban.",
      "Beyond the two cities the landscape changes quickly. Al-Soudah, among the highest ground in Saudi Arabia, is about 23 km away. Rijal Almaa sits far lower on the western slopes, about 52 km by a steep road, and Habala's cliffs are about 55 km to the south-east.",
    ],
    diagramCaption:
      "Orientation diagram: positions are straight-line offsets from central Abha, drawn to scale; labels give rounded road distances (OpenStreetMap routing).",
  },

  airport: {
    heading: "Getting from Abha Airport to your destination",
    intro:
      "Abha International Airport (AHB) is about 20 km by road from central Abha. Arrivals usually head into Abha, to Khamis Mushait, or straight on to a mountain hotel.",
    steps: [
      { t: "Share your flight details", d: "When you request a quotation, include your airline, flight number, arrival date and time." },
      { t: "Give the exact address", d: "A hotel name, residence or map pin, not just the city, so the distance and timing are right." },
      { t: "Receive your quotation", d: "Pickup availability and the meeting point are confirmed individually in your quotation." },
      { t: "Follow the confirmed arrangements", d: "Go to the pickup point confirmed with your booking; don't assume a particular meeting arrangement at the terminal." },
    ],
    note: "Airport-specific details, including drop-offs for departures, are on our [Abha Airport transfers](/airport-transfer/abha-airport) page.",
  },

  destinations: {
    heading: "Travelling around Abha and Asir",
    intro:
      "What these places are like, and what that means for transport. A destination you can request as a transfer isn't the same as a guided visit: sightseeing time, waiting and stops are only included when your quotation says so.",
    items: [
      {
        id: "green-mountain",
        name: "Green Mountain (Al-Jabal Al-Akhdar)",
        photo: "greenMountain",
        where: "≈1 km from the centre, inside Abha",
        type: "Local transfer",
        text: "A hill in the middle of the city, famous for being lit up in green at night, with views across Abha.",
        plan: "An evening visit is popular. Expect busy roads in holiday periods.",
      },
      {
        id: "dam",
        name: "Abha Dam Lake",
        photo: "dam",
        where: "≈2 km west of the centre",
        type: "Local transfer",
        text: "The reservoir behind Abha Dam on the city's western edge, with parks and walkways around it.",
        plan: "A short hop from most hotels; easy to combine with other in-city stops in one request.",
      },
      {
        id: "soudah",
        name: "Al-Soudah",
        photo: "soudah",
        where: "≈23 km by road",
        type: "Sightseeing request",
        text: "High mountain country close to 3,000 m, with juniper woodland and wide views. Noticeably cooler than Abha.",
        plan: "Fog is common, especially early in the day; allow flexible timing and say if the driver needs to wait.",
      },
      {
        id: "habala",
        name: "Habala",
        photo: "habala",
        where: "≈55 km by road, south-east",
        type: "Sightseeing request",
        text: "A clifftop area above a deep valley, known for its views and the hanging village reached by cable car.",
        plan: "A half-day or longer outing; list it with any other stops so the whole plan is quoted together.",
      },
      {
        id: "rijal",
        name: "Rijal Almaa",
        photo: "rijal",
        where: "≈52 km by road, west",
        type: "Sightseeing request",
        text: "A historic village of tall stone houses on the western slopes, around 1,100 m: over a kilometre lower than Abha.",
        plan: "The road down the escarpment is steep and winding; allow time each way.",
      },
      {
        id: "khamis",
        name: "Khamis Mushait",
        photo: "",
        where: "≈30 km by road, east",
        type: "City-to-city transfer",
        text: "Abha's larger neighbour, a busy commercial city on the road towards the airport and Riyadh.",
        plan: "A straightforward transfer; give the exact address or business name.",
        href: "/taxi-service/khamis-mushait",
        linkLabel: "Khamis Mushait taxi service",
      },
    ],
  },

  journeys: {
    heading: "Which type of journey do you need?",
    items: [
      { n: "01", title: "Airport to hotel", text: "From Abha International Airport to your hotel, home or office.", href: "/airport-transfer/abha-airport", link: "Abha Airport transfers" },
      { n: "02", title: "Hotel to airport", text: "A drop-off timed for your departure. Share your flight time.", href: "/airport-transfer/abha-airport", link: "Abha Airport transfers" },
      { n: "03", title: "Hotel to attraction", text: "Green Mountain, the dam lake or a mountain viewpoint, one way or return.", href: "#destinations", link: "Places around Abha" },
      { n: "04", title: "Attraction to attraction", text: "Several stops in one day, listed together in a single request.", href: "#planning", link: "Plan a sightseeing day" },
      { n: "05", title: "Abha to Khamis Mushait", text: "About 30 km between the two cities.", href: "/taxi-service/khamis-mushait", link: "Khamis Mushait taxi" },
      { n: "06", title: "Abha to another city", text: "Long-distance transfers to Riyadh, Jeddah and beyond.", href: "#intercity", link: "Intercity routes" },
      { n: "07", title: "Families and groups", text: "SUVs, vans and minibuses for larger parties; child seats on request.", href: "#vehicles", link: "Choose a vehicle" },
    ],
    hotelNote: "Staying in a hotel elsewhere in Saudi Arabia too? See our [hotel transfers](/services/hotel-transfers) service.",
  },

  planning: {
    heading: "Planning a sightseeing day in Abha",
    intro: "General travel advice for the highlands, not a description of included services.",
    tips: [
      { t: "Decide your stops first", d: "Listing every place you want to visit lets the quotation reflect the real distances, and avoids surprises on the day." },
      { t: "Watch the mountain weather", d: "Cloud, fog and rain can roll in quickly at altitude, and outdoor viewpoints can disappear in the mist. Keep plans flexible." },
      { t: "Allow for fog on high roads", d: "Visibility on roads around Al-Soudah and the escarpment can drop, especially early in the morning. Build in extra time." },
      { t: "Expect busy periods", d: "Summer and holidays bring many domestic visitors to Abha, with heavier traffic around the main attractions." },
      { t: "Count passengers and bags", d: "The number of people and what they carry decides the vehicle more than anything else." },
      { t: "Ask for several stops in one quotation", d: "Name each stop and roughly how long you'd like there. Whether the driver waits, and for how long, is set out in the quotation, not assumed." },
    ],
  },

  vehicles: {
    heading: "Family and group travel",
    intro:
      "Vehicles are matched to your passenger and luggage count in the quotation; a particular model is subject to availability. Capacities below come from our fleet guide.",
    childSeats:
      "Child seats can be provided on request, subject to availability. Please share the number of seats required and the children's ages when you enquire.",
    fit: {
      economy: "One or two people around the city",
      comfort: "Couples and small families",
      business: "Business visitors",
      suv: "Families with luggage, mountain day trips",
      van: "Larger families and groups",
      minibus: "Groups travelling together",
    } as Record<string, string>,
  },

  intercity: {
    heading: "Abha to other Saudi cities",
    intro: "Long-distance routes that start or end in Abha. Each page covers its own journey.",
    routes: [
      { href: "/routes/abha-to-riyadh", label: "Abha to Riyadh", meta: "≈940–960 km · approx. 11–12 hours", text: "North to the capital as a single-day journey." },
      { href: "/routes/riyadh-to-abha", label: "Riyadh to Abha", meta: "≈940–960 km · approx. 11–12 hours", text: "The climb from the capital into the Asir mountains." },
      { href: "/routes/abha-airport-to-riyadh", label: "Abha Airport to Riyadh", meta: "≈935–950 km · approx. 11–12 hours", text: "From the terminal straight to Riyadh by road." },
      { href: "/routes/abha-to-jeddah", label: "Abha to Jeddah", meta: "≈680–690 km · approx. 7.5–8 hours", text: "West to the Red Sea coast." },
      { href: "/routes/jeddah-to-abha", label: "Jeddah to Abha", meta: "≈680–690 km · approx. 7.5–8 hours", text: "Into the highlands from Jeddah." },
      { href: "/routes/makkah-to-abha", label: "Makkah to Abha", meta: "", text: "South from Makkah." },
      { href: "/routes/abha-airport-to-jeddah", label: "Abha Airport to Jeddah", meta: "≈695–705 km · approx. 7.5–8 hours", text: "From AHB to Jeddah by road." },
    ],
    note: "Figures are shown only where the route has been re-measured; open each page for its details. Weighing the road against a flight? Read our [Riyadh to Abha guide](/blog/riyadh-to-abha-transfer-guide).",
  },

  request: {
    heading: "How to request a private transfer",
    steps: [
      "Share your pickup and destination.",
      "Add the date, time, passengers and luggage.",
      "Mention flight details, extra stops or child seats where relevant.",
      "Receive a quotation.",
      "Confirm the quotation before the journey.",
    ],
    note: "The confirmed quotation sets the agreed price and explains what is covered.",
    dropoffPlaceholder: "Hotel, address, attraction or city (e.g. Al-Soudah)",
    messagePlaceholder: "Flight details, extra stops and how long at each, child seats (number and ages), luggage or other needs.",
  },

  final: {
    heading: "Planning a journey in Abha?",
    text: "Send your pickup, destination, date, passengers and luggage, plus any stops, flight details or child seats. We'll review it and reply with a quotation; nothing is booked until you confirm it.",
  },

  method:
    "Reviewed 24 November 2026. Distances from OpenStreetMap routing (OSRM), positions from OpenStreetMap, elevations from the Copernicus DEM; all rounded. Attractions are described for planning; inclusion of stops, waiting or sightseeing time depends on your confirmed quotation.",
};

export const ABHA_CITY_FAQS: Faq[] = [
  { question: "How do I book a private transfer in Abha?", answer: "Send your pickup, destination, date, time, passengers and luggage through the quote form or WhatsApp. You receive a quotation, and the transfer is booked once you confirm it." },
  { question: "Can I arrange a transfer from Abha Airport to my hotel?", answer: "Yes. Share your flight details and hotel address when you request a quotation. Abha International Airport is about 20 km from central Abha by road." },
  { question: "Where will I meet my driver at Abha Airport?", answer: "At the pickup point confirmed individually with your booking. Please follow those instructions rather than expecting a particular meeting arrangement." },
  { question: "Can I travel from Abha to Khamis Mushait?", answer: "Yes. The two cities are about 30 km apart by road; give the exact address in Khamis Mushait when you enquire." },
  { question: "Can I arrange transport to Al-Soudah?", answer: "Yes, as a transfer or a sightseeing request. Al-Soudah is about 23 km from Abha; mention whether you need a return trip or waiting time so it can be quoted." },
  { question: "Can I visit Habala from Abha?", answer: "You can request it. Habala is about 55 km south-east of Abha by road, so it's usually planned as a half-day or longer outing." },
  { question: "Is Abha suitable for family sightseeing?", answer: "Yes. The cooler climate, parks and viewpoints suit families; plan for changeable mountain weather and tell us your group size so a suitable vehicle is quoted." },
  { question: "Can I request multiple stops?", answer: "Yes. List each stop and how long you'd like there. Stops and any waiting are included only when they are set out in your quotation." },
  { question: "Which vehicle should I choose for my group?", answer: "Sedans take up to three passengers, an SUV up to five, a van up to nine and a minibus 10–18. The vehicle is confirmed in your quotation based on passengers and luggage." },
  { question: "Are child seats available?", answer: "Child seats can be provided on request, subject to availability. Share the number of seats and the children's ages when you enquire." },
  { question: "Can I book a transfer from Abha to Riyadh?", answer: "Yes. It is about 940–960 km, roughly 11–12 hours of driving before breaks, planned as a single-day journey. See the Abha to Riyadh page for details." },
  { question: "Can I travel from Abha to Jeddah?", answer: "Yes. It is about 680–690 km by road, roughly 7.5–8 hours of driving before breaks, down to the coast and north along Highway 5." },
  { question: "How is the quotation calculated?", answer: "It is based on your route, distance, vehicle, timing and any stops or waiting you ask for. The confirmed quotation sets the price and explains what it covers." },
  { question: "How far in advance should I request a transfer?", answer: "As early as you can, especially for summer and holiday periods or larger vehicles, so availability can be confirmed in good time." },
];
