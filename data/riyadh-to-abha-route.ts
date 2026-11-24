import type { Faq } from "@/data/faqs";

/**
 * /routes/riyadh-to-abha — copy for components/routes/RiyadhAbhaRouteView.tsx.
 *
 * Route facts (checked 24 Nov 2026):
 * - OSRM (router.project-osrm.org), central Riyadh → central Abha: 946 km,
 *   11.3 h. Valhalla (valhalla1.openstreetmap.de): 955 km, 12.2 h. Abha →
 *   Riyadh (OSRM) 945 km. King Khalid International Airport → Abha 977 km.
 *   Published as "about 940–960 km" and "roughly 11–12 hours of driving".
 * - The OSRM route leaves Riyadh westwards, runs south-west across the
 *   Riyadh Region plateau, passes within ~11 km of Bisha (≈690 km) and
 *   through Khamis Mushait (≈910 km). Only Bisha and Khamis Mushait are
 *   named as waypoints; other reverse-geocoded names were governorates.
 * - Elevations: Open-Meteo elevation API (Copernicus DEM), sampled every
 *   ~20 km along the OSRM geometry. Riyadh ≈630 m, Bisha ≈1,160 m, Khamis
 *   Mushait ≈1,990 m, Abha ≈2,220 m, Al-Soudah ≈2,900 m+, Habala Park
 *   ≈2,400 m (clifftop), Rijal Almaa ≈1,100 m.
 * - From Abha (OSRM): Abha airport ≈20 km, Al-Soudah ≈23 km, Khamis
 *   Mushait ≈30 km, Rijal Almaa ≈52 km, Habala Park ≈55 km.
 * - Photos: Wikimedia Commons. Licence metadata re-checked 24 Nov 2026 via the
 *   Wikipedia API (LicenseShortName, UsageTerms, AttributionRequired,
 *   Restrictions): all CC BY / CC BY-SA / public domain, commercial use
 *   permitted, no extra restrictions. Flickr-sourced files: "ABHA" and "Rijal
 *   Almaa village 2021" reviewed by FlickreviewR; "Al Sawda peak" imported by
 *   the Flickr upload bot. The Abha Dam photo (credited to saudipics.com, no
 *   recorded permission) was removed as unverifiable. Riyadh photo is an
 *   existing project asset.
 * - Operations (owner, 24 Nov 2026): overnight stops are NOT offered; child
 *   seats can be provided on request, availability confirmed per enquiry.
 */

export const ABHA_PATH = "/routes/riyadh-to-abha";
export const ABHA_REVIEWED = "2026-11-24";

export type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type Photo = { src: string; alt: string; caption: string; w: number; h: number; credit?: Credit };

const CC = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa2: ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"],
  bysa3: ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`;
const credit = (author: string, lic: readonly [string, string] | "pd", file: string): Credit => {
  const title = file.replace(/\.(jpe?g|png)$/i, "");
  return lic === "pd"
    ? { title, author, licence: "Public domain", source: commons(file) }
    : { title, author, licence: lic[0], licenceUrl: lic[1], source: commons(file) };
};

export const PHOTOS = {
  hero: {
    src: "/images/asir/al-soudah-mountains.webp",
    alt: "Forested ridges and deep valleys in the mountains at Al-Soudah, Asir region",
    caption: "The mountains at Al-Soudah, about 23 km from Abha",
    w: 1600, h: 1200,
    credit: credit("marviikad", CC.bysa2, "Al Sawda peak.jpg"),
  },
  riyadh: {
    src: "/images/journey/riyadh-skyline.jpg",
    alt: "Towers of the King Abdullah Financial District in Riyadh beneath low cloud",
    caption: "Riyadh, where the journey begins at about 630 m above sea level",
    w: 1920, h: 2560,
  },
  bisha: {
    src: "/images/asir/bisha-old-fort.webp",
    alt: "Historical photograph of an old mud-brick fort and a street in Bisha",
    caption: "Bisha's old fort in a historical photograph. The road passes Bisha roughly 690 km from Riyadh",
    w: 1400, h: 961,
    credit: credit("Harry F. Cameron, US Army Corps of Engineers", "pd", "513 Cameron old fortress - USACE-p15141coll5-15779.jpeg"),
  },
  slopes: {
    src: "/images/asir/al-soudah-green-slopes.webp",
    alt: "Steep, tree-covered mountain slopes near the summit area at Al-Soudah",
    caption: "Green slopes near Al-Soudah: the highlands at the end of the climb",
    w: 1400, h: 788,
    credit: credit("Irshadpp", CC.bysa4, "Al Sowda Hill top 06.jpg"),
  },
  street: {
    src: "/images/asir/abha-street-mountains.webp",
    alt: "A road curving past buildings in Abha with wooded hills behind",
    caption: "Arriving in Abha, with the hills close behind the city",
    w: 1400, h: 965,
    credit: credit("Basheer Olakara", CC.by2, "ABHA (6348527614).jpg"),
  },
  city: {
    src: "/images/asir/abha-city-view.webp",
    alt: "View over Abha's buildings towards mountains under heavy cloud",
    caption: "Abha spread across its highland basin",
    w: 1400, h: 1050,
    credit: credit("Aiman titi", CC.bysa3, "Abha 12.jpg"),
  },
  cablecar: {
    src: "/images/asir/abha-cable-car.webp",
    alt: "A cable car cabin crossing above Abha under grey cloud",
    caption: "A cable car above the city",
    w: 1400, h: 1050,
    credit: credit("Aiman titi", CC.bysa3, "Abha 29.jpg"),
  },
  rijal: {
    src: "/images/asir/rijal-almaa-village.webp",
    alt: "Multi-storey stone houses of the historic village of Rijal Almaa against green mountains",
    caption: "Rijal Almaa, on the western slopes below Abha",
    w: 1200, h: 900,
    credit: credit("Richard Mortel", CC.by2, "Rijal Almaa village 2021.jpg"),
  },
  habala: {
    src: "/images/asir/habala-valley.webp",
    alt: "Sandstone cliffs on the edge of the Habala valley",
    caption: "The cliffs at Habala",
    w: 1200, h: 797,
    credit: credit("Wajahatmr", CC.bysa3, "Living on the verge of Habala Valley.jpg"),
  },
} satisfies Record<string, Photo>;

/** [km along the OSRM route, metres above sea level] — sampled every ~20 km. */
export const ELEVATION: [number, number][] = [
  [0, 634], [20, 674], [40, 820], [60, 658], [80, 723], [100, 706], [120, 691], [140, 644], [160, 666], [180, 739],
  [200, 807], [220, 802], [240, 777], [260, 711], [280, 734], [300, 781], [320, 823], [340, 805], [360, 922], [380, 934],
  [400, 981], [420, 1080], [440, 1043], [460, 1004], [480, 985], [500, 869], [520, 814], [540, 848], [560, 874], [580, 938],
  [600, 988], [620, 1026], [640, 1070], [660, 1088], [680, 1166], [700, 1244], [720, 1273], [740, 1360], [760, 1449], [780, 1533],
  [800, 1638], [820, 1673], [840, 1759], [860, 1827], [880, 1863], [900, 1948], [920, 2047], [939, 2224],
];

export const ABHA = {
  hero: {
    eyebrow: "Long-distance private transfer · Riyadh Region to Asir",
    h1: "Riyadh to Abha Private Transfer: A Journey into the Asir Mountains",
    intro:
      "Travel south from Riyadh to Abha with a private road transfer. It is a long day: about 950 km from the capital's plateau to a city more than 2,000 m up in the Asir mountains. Explore the journey below, plan your stops, and share your destination and travel details to request a quotation.",
    stats: [
      { k: "By road", v: "≈940–960 km" },
      { k: "Driving", v: "≈11–12 h" },
      { k: "Climb", v: "630 m → 2,220 m" },
    ],
  },

  chapters: [
    { id: "glance", label: "At a glance", alt: "630 m" },
    { id: "riyadh", label: "Leaving Riyadh", alt: "630 m" },
    { id: "route", label: "The route", alt: "→ 1,160 m" },
    { id: "landscape", label: "The landscape", alt: "→ 1,990 m" },
    { id: "abha", label: "Abha", alt: "2,220 m" },
    { id: "road-or-air", label: "Road or air", alt: "" },
    { id: "planning", label: "Planning", alt: "" },
    { id: "beyond", label: "Beyond Abha", alt: "" },
    { id: "vehicles", label: "Vehicles", alt: "" },
    { id: "prepare", label: "Checklist", alt: "" },
    { id: "booking", label: "Booking", alt: "" },
    { id: "faq", label: "FAQs", alt: "" },
  ],

  glance: {
    heading: "The journey at a glance",
    answer:
      "Abha is about 940–960 km from Riyadh by road, which is roughly 11–12 hours of driving before any stops. The road runs south-west across the plateau of the Riyadh Region, past Bisha and through Khamis Mushait, climbing from about 630 m to about 2,220 m above sea level.",
    facts: [
      { k: "Origin", v: "Riyadh" },
      { k: "Destination", v: "Abha, Asir Region" },
      { k: "Road distance", v: "About 940–960 km" },
      { k: "Driving time", v: "Roughly 11–12 hours, before stops" },
      { k: "Journey type", v: "Long-distance private transfer" },
      { k: "Waypoints", v: "Bisha (≈690 km), Khamis Mushait (≈910 km)" },
    ],
    note:
      "Two routing engines agree closely: OSRM gives 946 km and about 11.3 hours, Valhalla 955 km and about 12.2 hours, between central Riyadh and central Abha. Neither includes breaks, prayer stops, traffic or roadworks, so allow more time than the driving figure.",
  },

  riyadh: {
    heading: "Leaving Riyadh: where the journey begins",
    paragraphs: [
      "The day starts at the Riyadh address you give us: a home, a hotel or an office. Before the car leaves, the details that matter on a long drive have already been settled in your quotation: how many people are travelling, how many bags there are and which vehicle suits them.",
      "Most travellers leave early. With eleven or twelve hours of driving ahead and breaks on top, an early start means arriving in Abha with some daylight left, which matters most on the final mountain stretch. The capital thins out quickly, and before long the road is running out across open country towards the south-west.",
      "It helps to think of this as what it is: a substantial intercity journey, comparable in length to driving from Riyadh to Jeddah. For trips around the capital before you leave, see our [Riyadh taxi service](/taxi-service/riyadh).",
    ],
  },

  route: {
    heading: "Understanding the route",
    answer:
      "The usual road leaves Riyadh heading west, then turns south-west across the Riyadh Region for several hundred kilometres before entering Asir Province, passing Bisha and climbing through Khamis Mushait to Abha.",
    profileTitle: "Height above sea level along the road",
    profileNote:
      "Elevation from the Copernicus digital elevation model (via Open-Meteo), sampled about every 20 km along the routed road. Distances are cumulative from central Riyadh and rounded.",
    marks: [
      { km: 0, label: "Riyadh", alt: 630 },
      { km: 690, label: "Bisha", alt: 1160 },
      { km: 910, label: "Khamis Mushait", alt: 1990 },
      { km: 946, label: "Abha", alt: 2220 },
    ],
    paragraphs: [
      "For most of the first 600 km the land rises only gently, between about 650 and 1,000 m. After that the climb becomes steady: Bisha sits at around 1,160 m, Khamis Mushait at nearly 2,000 m, and the last stretch into Abha takes you above 2,200 m.",
      "The distance figures here are rounded and measured from central Riyadh; a pickup at King Khalid International Airport adds roughly 30 km. Your own pickup and drop-off points change the total, and the quotation is based on them.",
    ],
  },

  landscape: {
    heading: "The changing landscape: from central Saudi Arabia to Asir",
    stages: [
      {
        title: "The central plateau",
        text: "Leaving the Riyadh Region, the road crosses wide, open country: gravel plains, low ridges and long straight sections with few towns. It is the part of the journey where the hours pass and the scenery changes slowly.",
      },
      {
        title: "The rising south-west",
        text: "Past the halfway point the ground starts to climb. By Bisha, an oasis town in Asir Province, you are over 1,000 m up, and the land beyond keeps rising towards the highlands.",
      },
      {
        title: "Into the Asir highlands",
        text: "Around Khamis Mushait and Abha the air is cooler and the hills greener. The Asir mountains form part of the escarpment along Saudi Arabia's south-west, with juniper woodland on the higher slopes and steep drops to the west.",
      },
    ],
  },

  abha: {
    heading: "Approaching Abha: the mountain destination",
    paragraphs: [
      "Abha is the capital of the Asir Region in south-western Saudi Arabia. The city sits at around 2,200 m, which gives it a much milder climate than Riyadh. Summer is when many Saudi families head here to escape the heat, and cloud, fog and rain are part of the mountain weather at times of year.",
      "The region has a distinctive cultural identity. Asir's stone and mud-brick architecture and Al-Qatt Al-Asiri, the brightly painted interior decoration traditionally made by women, are recognised parts of Saudi heritage; Al-Qatt Al-Asiri is on UNESCO's list of intangible cultural heritage.",
      "Your transfer ends at the Abha address you confirm, whether a hotel, a family home or holiday accommodation. If you're staying around Abha after you arrive, our [Abha taxi service](/taxi-service/abha) covers local trips.",
    ],
  },

  roadOrAir: {
    heading: "Is travelling by road right for you?",
    answer:
      "For one or two people travelling light, flying to Abha is usually quicker. A road transfer makes more sense for families and groups, people with a lot of luggage, or anyone who prefers one vehicle from door to door.",
    columns: ["", "Private road transfer", "Flying, plus a local transfer"],
    rows: [
      ["Time", "A long day: roughly 11–12 hours of driving plus breaks", "Much shorter in the air; add airport time at both ends"],
      ["Door to door", "From your Riyadh address to your Abha address", "Needs a transfer to and from each airport"],
      ["Groups", "Everyone in one vehicle on one quotation", "A ticket for each traveller"],
      ["Luggage", "Limited by the vehicle, not airline allowances", "Airline baggage rules apply"],
      ["Departure", "You choose the time, agreed in the quotation", "Set by the flight schedule"],
      ["Comfort", "Long time seated; breaks help", "Short flight; airport waiting"],
    ],
    links:
      "Flying instead? See our [Abha Airport transfer](/airport-transfer/abha-airport) page for the drive from the terminal, or [Riyadh Airport transfers](/airport-transfer/riyadh-airport) for getting to your flight.",
  },

  planning: {
    heading: "Planning a long-distance journey",
    intro: "General road-travel advice for a drive of this length. It isn't a description of included services.",
    tips: [
      { title: "Choose your departure time", text: "An early start leaves room for breaks and gets you onto the final hill stretch in daylight." },
      { title: "Allow time for breaks", text: "Plan for regular stops for rest, prayer and fuel. They add real time to the driving estimate." },
      { title: "Plan food and essentials", text: "Bring water, snacks and anything you'll need on the way; don't rely on a particular stop having what you want." },
      { title: "Keep essentials to hand", text: "Medication, chargers, documents and a warm layer for Abha's cooler air, in a bag inside the car rather than the boot." },
      { title: "Think about comfort", text: "Children, older travellers and anyone with health needs may want more frequent breaks. Say so in your request." },
      { title: "Discuss special requirements first", text: "Extra stops or other needs should be agreed and confirmed in your quotation before you travel." },
      { title: "Request child seats early", text: "Child seats can be provided on request. Mention how many you need and the children's ages when you enquire, so availability can be confirmed." },
      { title: "Add a margin", text: "Arrive with time to spare if anything depends on the timing. Treat the driving estimate as the minimum, not the plan." },
    ],
    overnight:
      "Overnight stops and accommodation aren't offered on this route. The transfer is planned as a single-day journey with breaks along the way, so an early start matters.",
  },

  beyond: {
    heading: "Beyond Abha: optional destinations and onward travel",
    intro:
      "A Riyadh to Abha transfer takes you to one Abha address. If you want to visit places around the city, that's a separate request: tell us where you'd like to go and whether it's part of the same day, and it will be quoted on its own terms. Extra stops and waiting aren't included unless your quotation says so.",
    places: [
      { name: "Al-Soudah", photo: "hero", km: "≈23 km from Abha", text: "High mountain country north-west of the city, among the highest ground in Saudi Arabia at close to 3,000 m. Cooler still than Abha." },
      { name: "Rijal Almaa", photo: "rijal", km: "≈52 km from Abha", text: "A historic village of tall stone houses on the western slopes, much lower than Abha at around 1,100 m. The road down is steep and winding." },
      { name: "Habala", photo: "habala", km: "≈55 km from Abha", text: "A clifftop area above a deep valley, south-east of Abha, known for its views and cable car." },
      { name: "Khamis Mushait", photo: "", km: "≈30 km from Abha", text: "Abha's larger neighbour on the road in from Riyadh, and a city in its own right.", href: "/taxi-service/khamis-mushait", linkLabel: "Khamis Mushait taxi service" },
    ],
    note: "Access to private, restricted or ticketed sites depends on the site, not on the transfer.",
  },

  vehicles: {
    heading: "Choosing the right vehicle",
    intro:
      "The right vehicle depends on your actual passenger and luggage count, and it is confirmed in your quotation. Capacities below are from our fleet guide; a particular model is subject to availability. Child seats can be provided on request: say how many you need when you enquire so availability can be confirmed.",
    fit: {
      economy: ["One or two people travelling light", "Compact for a 12-hour day; fine for a solo traveller"],
      comfort: ["Couples or small parties", "More room and luggage space for a long drive"],
      business: ["Business travellers", "The quietest cabin of the sedans"],
      suv: ["Families or small groups", "Extra legroom and luggage space"],
      van: ["Larger families or groups", "Room to move and space for luggage"],
      minibus: ["Groups travelling together", "One vehicle for a large party"],
    } as Record<string, [string, string]>,
  },

  checklist: {
    heading: "What to prepare before requesting a quotation",
    items: [
      "Riyadh pickup address",
      "Abha destination address",
      "Travel date",
      "Preferred departure time",
      "Number of passengers",
      "Number and size of bags",
      "Preferred vehicle category, if any",
      "Child seats needed (number and ages)",
      "Other special requirements",
      "Any additional destinations or stops you'd like",
    ],
  },

  booking: {
    heading: "How booking works",
    steps: [
      { title: "Share your journey details", text: "Pickup, destination, date, passengers and luggage, through the form or WhatsApp." },
      { title: "Receive a quotation", text: "With a vehicle recommendation and what the price covers." },
      { title: "Review and confirm", text: "Nothing is booked until you confirm. The confirmed quotation sets the price and the arrangements." },
      { title: "Travel as confirmed", text: "Your journey runs according to the arrangements in your confirmed quotation." },
    ],
    form: {
      dropoffPlaceholder: "Hotel or address in Abha (or another Asir destination)",
      messagePlaceholder: "Departure time, luggage sizes, extra stops or destinations, child seats needed (number and ages) or other needs.",
    },
  },

  related: {
    heading: "Related journeys and guides",
    links: [
      { href: "/routes/abha-to-riyadh", label: "Abha to Riyadh", text: "The return journey north" },
      { href: "/routes/jeddah-to-abha", label: "Jeddah to Abha", text: "Into Asir from the Red Sea coast" },
      { href: "/routes/makkah-to-abha", label: "Makkah to Abha", text: "South from Makkah" },
      { href: "/taxi-service/abha", label: "Abha taxi service", text: "Local trips once you've arrived" },
      { href: "/airport-transfer/abha-airport", label: "Abha Airport transfers", text: "If you decide to fly" },
      { href: "/blog/riyadh-to-abha-transfer-guide", label: "Riyadh to Abha guide", text: "Transfer, flight or drive?" },
      { href: "/intercity-transfers", label: "Intercity transfers", text: "Other long-distance journeys" },
    ],
  },

  final: {
    heading: "Planning Your Journey to Abha?",
    text: "Share your Riyadh pickup address, Abha destination, travel date and passenger details. We will review your request and provide a quotation for you to confirm.",
  },

  method:
    "Reviewed 24 November 2026. Road distances and times from OSRM and Valhalla (OpenStreetMap data); elevations from the Copernicus DEM via Open-Meteo. Figures are rounded estimates for planning, not guarantees. Prices, vehicles, stops and child-seat availability are set out in your confirmed quotation.",
};

export const ABHA_FAQS: Faq[] = [
  { question: "How far is Abha from Riyadh by road?", answer: "About 940–960 km from central Riyadh to central Abha. Two routing engines give 946 km and 955 km; your exact pickup and drop-off points change the figure." },
  { question: "How long does the Riyadh to Abha drive take?", answer: "Roughly 11–12 hours of driving, before breaks. With rest, prayer and fuel stops, plan for a full day." },
  { question: "Is it better to fly or travel by road?", answer: "Flying is usually quicker for one or two people with light luggage. The road suits families, groups, people with a lot of luggage and anyone who wants one vehicle door to door." },
  { question: "What is the road like approaching Abha?", answer: "The last few hundred kilometres climb steadily, from about 1,160 m at Bisha to nearly 2,000 m at Khamis Mushait and around 2,220 m in Abha, with cooler air and greener hills." },
  { question: "Can I request a transfer to Al-Soudah?", answer: "Yes, as a destination or an extra stop. Al-Soudah is about 23 km from Abha by road; include it in your request so it is priced in your quotation." },
  { question: "Can I travel from Riyadh to Rijal Almaa?", answer: "You can ask for it. Rijal Almaa is about 52 km beyond Abha on the western slopes, so it is quoted as part of the journey or as a separate trip." },
  { question: "Which vehicle is suitable for this journey?", answer: "It depends on passengers and luggage: sedans take up to three people, an SUV up to five, a van up to nine and a minibus 10–18. The vehicle is confirmed in your quotation." },
  { question: "Can families and larger groups travel together?", answer: "Yes. An SUV, van or minibus keeps everyone in one vehicle, subject to the passenger and luggage numbers you give and availability." },
  { question: "Can I request a child seat?", answer: "Yes. Child seats can be provided on request. Mention how many you need and the children's ages when you enquire, so availability can be confirmed in your quotation." },
  { question: "Can the journey be split with an overnight stop?", answer: "No. Overnight stops and accommodation aren't offered on this route; the transfer is a single-day journey with breaks along the way." },
  { question: "Are rest stops possible during the journey?", answer: "Yes. A drive of this length needs breaks; tell us your preferences, such as frequency or prayer times, when you request a quote." },
  { question: "Can I request additional stops?", answer: "You can. Detours, sightseeing stops or waiting time must be listed in your request and confirmed in the quotation." },
  { question: "What information is needed to receive a quotation?", answer: "Riyadh pickup address, Abha destination, date, preferred departure time, passengers, number and size of bags, any vehicle preference, child seats needed, other special requirements and extra stops." },
  { question: "Is a return Abha to Riyadh transfer available?", answer: "Yes. See the Abha to Riyadh page, or ask for both directions in one request." },
];
