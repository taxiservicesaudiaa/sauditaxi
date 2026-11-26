import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/khobar — copy for components/city-transfer/KhobarCityView.tsx.
 *
 * Facts (checked 26 Nov 2026):
 * - Al Khobar: coastal city on the Arabian Gulf, Eastern Province. It was a small
 *   fishing settlement before oil; a pier was completed there in 1935 and, after
 *   commercial oil was found at Dammam Well No. 7 near Dhahran in 1938, the town
 *   grew into a commercial centre for the region (AramcoWorld "Seven Wells of
 *   Dammam"; Saudipedia "Al-Khobar Port"; Saudipedia "Dammam No. Seven").
 * - Khobar, Dammam and Dhahran form the Dammam metropolitan area.
 * - Khobar Corniche / Waterfront: recreational area along the Al-Khobar corniche,
 *   developed by the Eastern Province Municipality (Saudipedia "Al-Khobar
 *   Waterfront"). Khobar Water Tower stands on the Corniche. Sources disagree
 *   on the Corniche's length, so no length is given.
 * - King Fahd Causeway: about 25 km, opened in November 1986, from Al-Aziziyah
 *   south of Khobar to Al-Jasra in Bahrain; the border facilities are on an
 *   artificial island part-way across (Saudipedia; Wikipedia).
 * - Ithra (King Abdulaziz Center for World Culture), Dhahran: built by Saudi
 *   Aramco, designed by Snøhetta, inaugurated December 2016 (Wikipedia; Aramco;
 *   Snøhetta). No opening hours or ticket details are stated.
 * - Half Moon Bay: bay south-west of Khobar and Dhahran. Part of the shore is a
 *   private Saudi Aramco beach (Wikipedia "Saudi Aramco Beach").
 * - King Fahd International Airport (DMM), GACA: serves the Eastern Province;
 *   north-west of Dammam (gaca.gov.sa).
 * - Routing (OSRM / Valhalla; endpoints from Nominatim; central Khobar 26.3040,
 *   50.1960; Corniche Seawalk 26.2942, 50.2250):
 *   DMM → Khobar 53 / 55 km, 38 / 42 min; Khobar → DMM 55 / 57 km, 39 / 45 min;
 *   DMM → Corniche 58 / 60 km, 43 / 46 min (DMM hub page: 55–60 km);
 *   Khobar → causeway border island (26.1863, 50.3202) 25 km (times differ:
 *   23 / 56 min, so no time is given);
 *   Khobar → Ithra 11 km; → Half Moon Bay 37 km, 32 / 37 min;
 *   → central Dammam 21 km; → Riyadh 422 km, 243 / 256 min.
 * - Not claimed: flight tracking, name boards, arrivals-hall meetings, waiting,
 *   luggage help, fixed prices, 24/7, hotel or venue partnerships, sightseeing
 *   packages, border clearance or crossing times, business accounts, day rates.
 */

export const KHOBAR_REVIEWED = "2026-11-26";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type KhobarPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa2: ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string], file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  licence: lic[0],
  licenceUrl: lic[1],
  source: commons(file),
});

export const KHOBAR_PHOTOS = {
  waterTower: {
    src: "/images/khobar/water-tower-corniche.webp",
    alt: "The Khobar Water Tower, a tall white tower with a domed top, rising above trees on the Corniche beside the Arabian Gulf",
    caption: "The Khobar Water Tower on the Corniche",
    w: 1600, h: 1200,
    credit: cr("Ahsan Ismail", L.bysa4, "Khobar water Tower.JPG"),
  },
  fishermen: {
    src: "/images/khobar/corniche-fishermen.webp",
    alt: "Two men fishing from the rocks on the Khobar Corniche, with palm trees and seafront buildings behind them",
    caption: "Fishing from the rocks on the Corniche",
    w: 1600, h: 1200,
    credit: cr("marviikad", L.bysa2, "Fishermen along khobar Corniche (2914401909).jpg"),
  },
  lawns: {
    src: "/images/khobar/corniche-lawns.webp",
    alt: "Families sitting on the grass of a Corniche park in Khobar in late-afternoon light, with the sea behind a line of trees",
    caption: "Late afternoon on the Corniche lawns",
    w: 1600, h: 1158,
    credit: cr("Francisco Anzola", L.by2, "Al Khobar Corniche (12482233074).jpg"),
  },
  causeway: {
    src: "/images/khobar/king-fahd-causeway.webp",
    alt: "A long section of the King Fahd Causeway bridge crossing the blue water of the Gulf between Saudi Arabia and Bahrain",
    caption: "A bridge section of the King Fahd Causeway",
    w: 1600, h: 1200,
    credit: cr("Greens n cornbread", L.by2, "King Fahd Causeway bridge num4.jpg"),
  },
  ithra: {
    src: "/images/khobar/ithra-fountain.webp",
    alt: "Rows of fountain jets in a wide paved plaza in the grounds of Ithra in Dhahran, with palm trees and lamp posts",
    caption: "Fountains in the grounds of Ithra, Dhahran",
    w: 1600, h: 900,
    credit: cr("AhmadElq", L.bysa4, "King Abdulaziz Center for World Culture, Fountain.jpg"),
  },
  skyline: {
    src: "/images/khobar/khobar-skyline.webp",
    alt: "Office towers and bank buildings along a busy street in Al Khobar under a clear blue sky",
    caption: "Office towers in Al Khobar",
    w: 1600, h: 1205,
    credit: cr("IamMoaz", L.bysa4, "Skyline Of Al Khobar Eastern.jpg"),
  },
} satisfies Record<string, KhobarPhoto>;

export const KHOBAR = {
  hero: {
    kicker: "Eastern Province · Arabian Gulf coast",
    h1: "Private Transfers in Khobar",
    intro:
      "Al Khobar is the Eastern Province's waterfront city: a Corniche of parks and hotels on the Arabian Gulf, neighbour to Dhahran and Dammam, and the Saudi end of the causeway to Bahrain. Request a private transfer from the airport, along the coast, across the region or towards the causeway, and receive a quotation before you confirm.",
  },
  facts: [
    { k: "Region", v: "Eastern Province, on the Arabian Gulf" },
    { k: "Airport", v: "King Fahd International (DMM), ≈55–60 km" },
    { k: "Bahrain", v: "King Fahd Causeway, ≈25 km to the border island" },
    { k: "Neighbours", v: "Dhahran and Dammam, one metro area" },
  ],

  story: {
    heading: "Discovering Khobar",
    paragraphs: [
      "Before oil, Al Khobar was a small fishing settlement on the shore of the Gulf. In the 1930s a pier was built there to land equipment for the oil explorers working inland at Dhahran, and when commercial oil was found at Dammam Well No. 7 in 1938, the village began to grow into the commercial town of the new oil region.",
      "That history explains the city's shape today. Dhahran, home to Saudi Aramco, sits just inland; Dammam lies a short drive to the north; and Khobar itself faces the water, with its Corniche, hotels, shops and residential districts running along the coast. The three cities have grown into one connected metropolitan area.",
      "People stay in Khobar for many reasons: a seafront hotel for a family weekend, meetings in Dhahran or Dammam, a visit to Ithra, or a base close to the causeway before a journey to Bahrain. Whatever brings you here, a private transfer gets you from door to door, and we confirm every journey by quotation.",
    ],
    timeline: [
      { year: "1935", text: "A pier is completed at the fishing settlement of Al Khobar." },
      { year: "1938", text: "Commercial oil is found at Dammam Well No. 7, near Dhahran." },
      { year: "1986", text: "The King Fahd Causeway to Bahrain opens." },
      { year: "2016", text: "Ithra opens in Dhahran." },
    ],
  },

  waterfront: {
    heading: "Khobar's waterfront and Corniche",
    paragraphs: [
      "The Corniche is where Khobar comes outside. Its parks, lawns and seafront paths fill with families, walkers and fishermen in the late afternoon and evening, and the white Khobar Water Tower stands over the water as the city's best-known landmark.",
      "Many of Khobar's hotels are on or near the waterfront. You can request a transfer from your hotel to the Corniche, a restaurant, a mall or any other address, and back again later, by giving each journey in your request.",
    ],
    spots: [
      { name: "Khobar Corniche", text: "Seafront parks and promenades along the Gulf." },
      { name: "Khobar Water Tower", text: "The landmark tower on the Corniche." },
      { name: "Waterfront hotels", text: "Give your hotel's name for pickup or drop-off." },
    ],
  },

  airport: {
    heading: "Airport transfers via Dammam",
    paragraphs: [
      "King Fahd International Airport (DMM), north-west of Dammam, is the airport for Khobar and the rest of the Eastern Province. Central Khobar is about 55–60 km away by road, usually around 40–50 minutes, depending on where in the city you are going and on traffic.",
      "You can request a transfer from the airport to your Khobar hotel, home or office, or from Khobar back to the airport for a departure. Share your flight number, arrival or departure time and address with your request; pickup arrangements are confirmed with you individually.",
    ],
    link: { href: "/airport-transfer/dammam-airport", label: "Dammam Airport (DMM) arrivals guide" },
    routes: [
      { href: "/routes/dammam-airport-to-khobar", label: "Dammam Airport to Khobar" },
      { href: "/routes/khobar-to-dammam-airport", label: "Khobar to Dammam Airport" },
    ],
  },

  causeway: {
    heading: "Khobar and the Bahrain causeway",
    intro:
      "The King Fahd Causeway, opened in 1986, leaves the Saudi coast just south of Khobar and runs about 25 km across the Gulf to Bahrain. The border facilities are on an island part-way across, about 25 km by road from central Khobar, which makes Khobar the natural Saudi starting point for a road journey to Bahrain.",
    parts: [
      {
        title: "The road transfer",
        text: "Your private transfer between Khobar and the causeway, or onward across it, as agreed in your quotation.",
      },
      {
        title: "The border crossing",
        text: "Passport and customs checks on the border island. Processing times depend on the authorities and are outside our control.",
      },
    ],
    note:
      "Travel documents, entry permission and border formalities are your own responsibility. Queues vary and can be longer at busy times such as weekends and public holidays, so leave extra time if you have a flight or appointment in Bahrain.",
    links: [
      { href: "/border-transfers/bahrain-causeway", label: "King Fahd Causeway guide" },
      { href: "/routes/khobar-to-bahrain", label: "Khobar to Bahrain" },
      { href: "/routes/khobar-to-bahrain-airport", label: "Khobar to Bahrain Airport" },
    ],
  },

  region: {
    heading: "Khobar, Dammam and Dhahran: one connected region",
    intro:
      "The three cities run into one another, so many journeys here are short hops between them. Here is how they fit together.",
    cities: [
      {
        name: "Khobar",
        role: "Waterfront, hotels and shopping",
        text: "The coastal side of the metro area, with the Corniche, many of the region's hotels and the road to the causeway.",
        links: [] as { href: string; label: string }[],
      },
      {
        name: "Dhahran",
        role: "Ithra, Aramco and business",
        text: "Just inland from Khobar. Ithra, the King Abdulaziz Center for World Culture, is about 11 km by road from central Khobar.",
        links: [
          { href: "/routes/dammam-airport-to-dhahran", label: "Dammam Airport to Dhahran" },
        ],
      },
      {
        name: "Dammam",
        role: "Regional capital and airport city",
        text: "To the north, about 21 km by road from central Khobar to central Dammam, with the airport beyond it.",
        links: [
          { href: "/routes/khobar-to-dammam", label: "Khobar to Dammam" },
          { href: "/taxi-service/dammam", label: "Private transfers in Dammam" },
        ],
      },
    ],
    ithra: {
      heading: "Visiting Ithra",
      text:
        "Ithra, the King Abdulaziz Center for World Culture, was built by Saudi Aramco in Dhahran and opened in 2016, with a museum, library, theatre and exhibition spaces in a building designed by Snøhetta. Request a transfer there from your hotel or home, and check the centre's own website for opening times and events before you travel.",
    },
  },

  leisure: {
    heading: "Family and leisure journeys",
    intro:
      "Khobar is a city for days out. Tell us your pickup, where you want to go and any stops along the way, and we will quote for the journeys you need.",
    items: [
      {
        name: "Half Moon Bay",
        where: "About 37 km by road, around 35–40 minutes",
        text: "A curved bay south of Khobar and Dhahran with beaches and resorts along its shore. Part of the shoreline is a private beach, so check access for the beach you plan to visit.",
      },
      {
        name: "The Corniche",
        where: "Along Khobar's seafront",
        text: "Parks, lawns and promenades that are at their busiest in the evening, when the heat eases.",
      },
      {
        name: "Shopping and dining",
        where: "Across Khobar",
        text: "Malls such as Al Rashid Mall, restaurants and cafés across the city. Give us the name of the place you want to go.",
      },
    ],
  },

  business: {
    heading: "Business travel in Khobar",
    paragraphs: [
      "Khobar's offices, Dhahran's energy sector and Dammam's commercial districts make this one of the busiest business areas in the Kingdom. Visitors often stay in a Khobar hotel and travel each day to meetings across the three cities.",
      "Share each meeting location, the times you need to arrive and leave, and the number of travellers, and we will quote for those journeys. A single airport transfer, a day of separate journeys or a return trip can all be requested.",
    ],
  },

  routes: {
    heading: "Regional connections from Khobar",
    intro: "Each journey has its own page, and every transfer is arranged by quotation.",
    items: [
      { href: "/routes/khobar-to-riyadh", name: "Khobar to Riyadh", text: "West to the capital, about 420 km, around 4–4½ hours." },
      { href: "/routes/khobar-to-bahrain", name: "Khobar to Bahrain", text: "Across the King Fahd Causeway to Bahrain." },
      { href: "/routes/al-khobar-to-doha", name: "Khobar to Doha", text: "South to Qatar through the Salwa border." },
      { href: "/routes/khobar-to-dammam", name: "Khobar to Dammam", text: "North to the regional capital, about 21 km." },
    ],
    more: [
      { href: "/taxi-service/jubail", label: "Private transfers in Jubail" },
      { href: "/taxi-service/hofuf", label: "Private transfers in Hofuf" },
      { href: "/city-transfers", label: "All city transfers" },
    ],
  },

  pickup: {
    heading: "Pickup and drop-off places",
    intro: "These are places people often ask for. You can give any exact address in or around Khobar.",
    items: [
      "King Fahd International Airport (DMM)",
      "Hotels on and near the Corniche",
      "Homes, compounds and offices",
      "Khobar Corniche",
      "Al Rashid Mall",
      "Ithra, Dhahran",
      "Half Moon Bay",
      "King Fahd Causeway",
    ],
  },

  booking: {
    heading: "How to request a Khobar transfer",
    steps: [
      { title: "Pickup and destination", text: "Where you would like to be collected and where you are going." },
      { title: "Date and time", text: "Your travel date and preferred pickup time." },
      { title: "Passengers and luggage", text: "How many people and bags, so a suitable vehicle can be quoted." },
      { title: "Stops or requirements", text: "Any stops on the way, child seats or other requests." },
      { title: "Quotation", text: "Review the quotation and confirm the arrangements." },
    ],
    form: {
      dropoffPlaceholder: "e.g. Corniche hotel, Ithra, Half Moon Bay or King Fahd Causeway",
      messagePlaceholder: "Anything else? e.g. flight number, stops on the way, luggage, child seats",
    },
  },

  final: {
    heading: "Book Your Private Khobar Transfer",
    text: "Send your pickup, destination, date and number of passengers, and we will reply with a quotation.",
  },
};

export const KHOBAR_FAQS: Faq[] = [
  { question: "How far is Khobar from King Fahd International Airport?", answer: "About 55–60 km by road to central Khobar and the Corniche, usually around 40–50 minutes depending on traffic and your exact address." },
  { question: "Can I book a transfer from Khobar to the Bahrain Causeway?", answer: "Yes. The border island on the King Fahd Causeway is about 25 km by road from central Khobar. Tell us whether you need a transfer to the causeway or onward into Bahrain, and we will quote for that journey." },
  { question: "Is the Bahrain border crossing included in a road transfer?", answer: "The transfer covers the road journey. Passport and customs checks are carried out by the border authorities, processing times vary, and travel documents and entry permission are your own responsibility." },
  { question: "Can I travel between Khobar, Dammam and Dhahran?", answer: "Yes. The three cities form one metropolitan area; central Dammam is about 21 km from central Khobar and Dhahran is just inland. Give us each address and we will quote." },
  { question: "Can I book a transfer to Ithra?", answer: "Yes. Ithra, the King Abdulaziz Center for World Culture, is in Dhahran, about 11 km by road from central Khobar. Please check the centre's opening times and events before you travel." },
  { question: "Can I request a transfer to Half Moon Bay?", answer: "Yes. Half Moon Bay is about 37 km by road from central Khobar, around 35–40 minutes. Name the beach or resort you are going to, and add the return journey if you need one." },
  { question: "Do you cover hotels along the Khobar Corniche?", answer: "Yes. Give us the hotel's name or address for pickup or drop-off, whether you are arriving from the airport or travelling around the region." },
  { question: "Can families request a larger vehicle?", answer: "Yes. Tell us how many passengers and bags you have, and a suitable vehicle will be confirmed in your quotation. Child seats can be provided on request: tell us how many you need and the children's ages so availability can be confirmed." },
  { question: "Can I arrange a transfer from Khobar to Riyadh?", answer: "Yes. Riyadh is about 420 km west of Khobar, around 4–4½ hours by road. Send your pickup address in Khobar and your destination in Riyadh for a quotation." },
  { question: "How do I request a quotation?", answer: "Send your pickup, destination, date, time, passengers and luggage, plus any stops, through the form on this page or on WhatsApp, and we will reply with a quotation." },
];
