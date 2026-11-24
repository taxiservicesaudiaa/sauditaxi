import type { Faq } from "@/data/faqs";

/**
 * /routes/jeddah-to-taif — copy for components/routes/JeddahTaifRouteView.tsx.
 *
 * Verified 24 Nov 2026 (see report 58 for the full table):
 * - Central Jeddah (21.4858, 39.1925) → central Taif (21.2703, 40.4158):
 *   OSRM fastest 165 km / 2 h 04; forced via Al Hada 171 km / 2 h 09.
 *   Valhalla fastest 171 km / 1 h 58; via Al Hada 177 km / 2 h 04.
 *   → "about 165–175 km, roughly 2–2.5 hours" (Al Hada road).
 * - Forced via As-Sayl Al-Kabir: OSRM 205 km / 2 h 26; Valhalla 222 km / 2 h 32
 *   → "about 205–225 km, roughly 2.5–3 hours". Both still pass through Makkah.
 * - Routed around Makkah (north via Al-Jumum, then As-Sayl): OSRM 225–236 km,
 *   2 h 44–3 h 28 → "around 225–240 km" (approximate; route confirmed in quotation).
 * - Elevations (Copernicus DEM via Open-Meteo along the Al Hada route): Jeddah
 *   ≈10 m; Makkah ≈280 m (Wikipedia 277 m) at ≈75 km; escarpment foot ≈600 m at
 *   ≈120 km; Al Hada ≈1,970 m at ≈145–150 km (Wikipedia: Jabal Hada ≈2,000 m);
 *   Taif centre ≈1,670 m (Wikipedia: city 1,879 m). Al Shafa ≈2,100 m.
 * - Taif → Al Hada ≈20 km; Taif → Al Shafa ≈32 km; Jeddah airport (KAIA) → Taif
 *   ≈184 km (OSRM).
 * - Makkah: non-Muslims may not enter (Saudi law; Arab News, Saudi Gazette);
 *   during Hajj season entry can be restricted to permit holders (Arab News).
 * - Al Hada road: closed for maintenance 1 Jan – 20 Feb 2025 with traffic advised
 *   to use the As-Sayl Al-Kabir road (Roads General Authority via Saudi Gazette);
 *   precautionary closures in heavy rain (Saudi Gazette 2022; Sabq).
 * - Al Hada cable car: reported operating in summer 2026 (SPA, 18 Jul 2026);
 *   hours and fares vary by source and it can stop in high wind → no hours,
 *   prices or availability stated; customers check with the operator.
 * - Haramain High Speed Railway serves Jeddah, Makkah and Madinah, not Taif.
 * - Photos: Wikimedia Commons; licence metadata read via the Wikipedia API.
 */

export const TAIF_PATH = "/routes/jeddah-to-taif";
export const TAIF_REVIEWED = "2026-11-24";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type TaifPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  by4: ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string], file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  licence: lic[0],
  licenceUrl: lic[1],
  source: commons(file),
});

export const TAIF_PHOTOS = {
  hero: {
    src: "/images/taif/al-hada-escarpment-road.webp",
    alt: "The Al Hada mountain road curving on a viaduct along a steep granite escarpment near Taif",
    caption: "The Al Hada mountain road on the escarpment below Taif",
    w: 1800, h: 1200,
    credit: cr("Richard Mortel", L.by2, "Al-Hada mountain road, al-Taif, Saudi Arabia (1).jpg"),
  },
  corniche: {
    src: "/images/taif/jeddah-corniche.webp",
    alt: "The Jeddah Corniche promenade with street lamps and towers beside the Red Sea",
    caption: "The Jeddah Corniche on the Red Sea, where many journeys begin",
    w: 1400, h: 788,
    credit: cr("Tahir mq", L.bysa4, "Jeddah Corniche.jpg"),
  },
  switchbacks: {
    src: "/images/taif/al-hada-switchbacks.webp",
    alt: "A road winding through a deep valley between hazy mountain ridges on the Al Hada escarpment",
    caption: "The road winding up through the Al Hada mountains",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Al-Hada mountain road, al-Taif, Saudi Arabia (3).jpg"),
  },
  night: {
    src: "/images/taif/al-hada-road-night.webp",
    alt: "Light trails tracing the hairpin bends of the Al Hada road at night",
    caption: "Traffic tracing the Al Hada hairpins after dark",
    w: 1400, h: 726,
    credit: cr("Sajith Erattupetta", L.by4, "Al hada hill way.JPG"),
  },
  rockcut: {
    src: "/images/taif/al-hada-rock-cut.webp",
    alt: "A divided road passing through a cutting in rugged mountains on the Al Hada road",
    caption: "A cutting on the Al Hada road through the granite mountains",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Al-Hada mountain road, al-Taif, Saudi Arabia (5).jpg"),
  },
  mountains: {
    src: "/images/taif/al-hada-mountains.webp",
    alt: "Rocky slopes and a mountain road at Al Hada under a cloudy sky",
    caption: "Mountain country at Al Hada, near Taif",
    w: 1400, h: 1050,
    credit: cr("Richard Mortel", L.by2, "Al-Hada, near al-Taif, Saudi Arabia (2).jpg"),
  },
  haze: {
    src: "/images/taif/al-hada-haze.webp",
    alt: "Layers of mountain ridges fading into haze and low cloud at Al Hada",
    caption: "Haze and cloud over the ridges at Al Hada",
    w: 1400, h: 933,
    credit: cr("Richard Mortel", L.by2, "Al-Hada sunset, al-Taif, Saudi Arabia (3).jpg"),
  },
  plateau: {
    src: "/images/taif/taif-plateau.webp",
    alt: "Rolling hills dotted with shrubs on the high plateau around Taif under white clouds",
    caption: "The high plateau around Taif",
    w: 1400, h: 1050,
    credit: cr("Nick Shields", L.by2, "Taif Mountains (8355942584).jpg"),
  },
  shafa: {
    src: "/images/taif/al-shafa.webp",
    alt: "Juniper trees and scattered houses on the hills at Al Shafa near Taif",
    caption: "Al Shafa, in the hills south of Taif",
    w: 1400, h: 1050,
    credit: cr("Ziyad Alsufyani", L.bysa4, "Alshafa20.JPG"),
  },
  roses: {
    src: "/images/taif/taif-rose-harvest.webp",
    alt: "Freshly picked pink Taif roses piled in a sack and spread on the floor during the harvest",
    caption: "Taif roses during the 2026 harvest",
    w: 1400, h: 933,
    credit: cr("Saudi Press Agency (SPA)", L.bysa4, "حصاد الورد الطائفي في السعودية سنة 2026م.jpg"),
  },
  shubra: {
    src: "/images/taif/shubra-palace-door.webp",
    alt: "A carved wooden doorway framed by white walls and ornate window screens at Shubra Palace in Taif",
    caption: "A doorway at the historic Shubra Palace in central Taif",
    w: 1200, h: 800,
    credit: cr("Richard Mortel", L.by2, "Shubra Palace, 1905, al-Taif, Saudi Arabia.jpg"),
  },
} satisfies Record<string, TaifPhoto>;

export const TAIF = {
  hero: {
    label: "Route · Jeddah → Taif",
    h1: "Private Transfer from Jeddah to Taif",
    intro:
      "In about two hours the road takes you from the warm, humid Red Sea coast to a cool plateau more than 1,600 m up. Past Makkah, the land rises to the foot of the escarpment, and the Al Hada road climbs it in a series of hairpin bends before levelling out above Taif. A private transfer covers the whole climb, door to door.",
    stats: [
      { k: "By road", v: "≈165–175 km" },
      { k: "Driving", v: "≈2–2.5 h" },
      { k: "Climb", v: "10 m → ≈1,970 m" },
    ],
  },

  index: [
    { id: "glance", label: "At a glance" },
    { id: "journey", label: "The journey" },
    { id: "roads", label: "The mountain road" },
    { id: "mountains", label: "Mountain conditions" },
    { id: "taif", label: "Beyond arrival" },
    { id: "families", label: "Families" },
    { id: "checklist", label: "Checklist" },
    { id: "options", label: "Road or other options" },
    { id: "vehicles", label: "Vehicles" },
    { id: "arrange", label: "Arrange" },
    { id: "faq", label: "FAQs" },
  ],

  glance: {
    heading: "The journey at a glance",
    answer:
      "Taif is about 165–175 km from Jeddah by road, roughly 2–2.5 hours of driving. The road heads east past Makkah, then climbs into the mountains through Al Hada, where you can ask to stop along the way. Distances are between the city centres and vary slightly with your exact addresses.",
    facts: [
      { k: "From", v: "Jeddah, on the Red Sea coast (≈10 m)" },
      { k: "To", v: "Taif, on a plateau in the Sarawat (Hijaz) Mountains (≈1,700–1,900 m)" },
      { k: "Road distance", v: "About 165–175 km via Al Hada" },
      { k: "Driving time", v: "Roughly 2–2.5 hours, before any stops" },
      { k: "The route", v: "East past Makkah, then up the Al Hada mountain road" },
      { k: "On the way", v: "A stop at Al Hada can be requested" },
    ],
    why: "Few road journeys in the Kingdom change so much in so short a distance: from sea level to nearly 2,000 m in under 150 km, most of that climb packed into about 25 km of mountain road.",
    method:
      "Distances and times from two routing engines on OpenStreetMap data (OSRM and Valhalla), centre to centre; elevations from the Copernicus digital elevation model. Traffic and any stops add time.",
  },

  journey: {
    heading: "The journey unfolds",
    intro: "Distances are cumulative from central Jeddah along the Al Hada road, rounded; heights are approximate.",
    chapters: [
      { km: "0 km", alt: 10, title: "Leaving Jeddah", photo: "corniche", text: "The journey starts at your Jeddah address: a hotel near the Corniche, a home in the north of the city or an office. Traffic in Jeddah can add time, so allow for it when you choose a departure time." },
      { km: "≈75 km", alt: 280, title: "Travelling inland past Makkah", photo: "", text: "The road heads east across the coastal plain and through the valleys around Makkah, still under 300 m above sea level. Makkah itself is open only to Muslims; if anyone in your group is not Muslim, just let us know when you enquire and we'll plan the journey accordingly." },
      { km: "≈120 km", alt: 600, title: "Approaching the mountains", photo: "rockcut", text: "Beyond Makkah the land rises gradually to around 600 m. Ahead, the granite wall of the escarpment fills the windscreen: the edge of the Sarawat mountains." },
      { km: "≈120–145 km", alt: 1970, title: "The climb to Al Hada", photo: "switchbacks", text: "This is the highlight: the road climbs roughly 1,300 m in about 25 km on hairpin bends and viaducts, with wide views back over the escarpment. At the top is Al Hada, a lovely place to stop for the views if you'd like to; just mention it when you request your quotation." },
      { km: "≈165–175 km", alt: 1700, title: "Reaching Taif", photo: "plateau", text: "At the top the road crosses Al Hada, at almost 2,000 m, and runs on across the plateau into Taif. The air is noticeably cooler and drier than on the coast, and your transfer ends at the hotel, home or address you confirmed." },
    ],
  },

  roads: {
    heading: "The road up the mountain",
    intro:
      "Most journeys climb to Taif on the Al Hada road, a spectacular mountain drive. You don't need to choose or plan the route: we take care of that and confirm it in your quotation.",
    columns: ["", "What to expect"],
    rows: [
      ["The road", "A mountain road with hairpin bends, viaducts and cuttings through the granite"],
      ["The climb", "Roughly 1,300 m in about 25 km, from the foot of the escarpment up to Al Hada"],
      ["The views", "Wide views back over the mountains, especially near the top"],
      ["For passengers", "The bends are the twistiest part of the trip; let us know if anyone is prone to travel sickness"],
    ],
    stop: {
      title: "Fancy a stop at Al Hada?",
      text: "You're welcome to ask for a stop at Al Hada on the way up, whether for the viewpoints, the cable car or simply a break. Mention it when you request your quotation and the arrangements will be confirmed with you.",
    },
    makkah: {
      title: "Travelling with non-Muslim passengers",
      text: "Makkah is open only to Muslims, and the usual road passes through it. If anyone in your group is not Muslim, just tell us when you enquire and we'll plan the journey around the city; it takes a little longer.",
    },
    closure: "Occasionally the mountain road closes for maintenance or after heavy rain. If that happens on your day, we use the other road up to Taif and let you know. During the Hajj season, mention your travel dates so we can plan around access to Makkah.",
  },

  mountains: {
    heading: "A closer look at the mountain landscape",
    paragraphs: [
      "Taif sits in the Sarawat mountains, the long range that runs down western Arabia. Jeddah and Makkah lie in the hot lowlands at their foot; Taif and Al Hada are on the high ground above, where the extra height brings a much milder climate. That's why Taif has long been a summer retreat from the coast.",
      "The climate difference is the point of the trip for many people. Cloud sometimes drifts over the escarpment, winter evenings at the top are cool, and summer weekends bring plenty of traffic on the climb, so it's worth allowing a little extra time and packing a light layer.",
    ],
  },

  taif: {
    heading: "Taif beyond the arrival point",
    intro:
      "Your transfer takes you to your Taif hotel or address. Stops on the way and trips around Taif can be added to your request and confirmed in your quotation.",
    tiers: [
      {
        name: "Your destination",
        note: "Where your transfer takes you",
        items: [
          { title: "Taif city", text: "Hotels, homes, offices and the historic centre, including the area around Shubra Palace.", photo: "shubra" },
          { title: "Al Hada resorts", text: "Hotels and resorts at Al Hada, about 20 km before central Taif on the Al Hada road.", photo: "mountains" },
        ],
      },
      {
        name: "Stops on the way",
        note: "Just mention them when you request your quotation",
        items: [
          { title: "Al Hada, viewpoints and the cable car", text: "Many travellers like to pause at Al Hada for the views over the escarpment or a ride on the cable car. Ask for the stop in your request and the arrangements will be confirmed in your quotation.", photo: "night" },
        ],
      },
      {
        name: "Trips around Taif",
        note: "Ask when you enquire; arranged as a separate trip",
        items: [
          { title: "Al Shafa", text: "Cooler hills about 32 km south of Taif, at around 2,100 m, with farms and viewpoints.", photo: "shafa" },
          { title: "Rose-growing areas", text: "Taif is known for its fragrant roses, harvested each spring for rose water and oil.", photo: "roses" },
        ],
      },
    ],
  },

  families: {
    heading: "Travelling with families",
    items: [
      { t: "Children", d: "Plan around naps and snacks; the climb itself takes less than an hour. Ask for a short stop at the top if little ones need a break." },
      { t: "Older passengers", d: "Mention mobility needs and how often you'd like to stop, and we'll plan the journey around them." },
      { t: "Motion sickness", d: "The hairpin bends below Al Hada are the twistiest part. Let us know when you enquire so we can plan a comfortable pace; eating lightly beforehand and keeping water to hand both help." },
      { t: "Luggage", d: "Count suitcases, pushchairs and anything bulky so the vehicle in your quotation has room for them." },
    ],
    childSeats:
      "Child seats can be provided on request. Please tell us how many you need and the children's ages when you enquire so availability can be confirmed.",
  },

  checklist: {
    heading: "Route planning checklist",
    provide: [
      "Exact Jeddah pickup address",
      "Exact Taif destination or hotel",
      "Travel date and departure time",
      "Number of passengers",
      "Number of bags",
      "Child seats (number and ages)",
      "Any stop you'd like, such as Al Hada",
      "Mobility or accessibility needs",
      "Whether any passenger is not Muslim (so we can plan the route)",
    ],
    confirmed: ["Vehicle", "Pickup time and point", "Your route and any stops you've asked for", "Child-seat availability", "The price and what it covers"],
  },

  options: {
    heading: "Road travel and the alternatives",
    intro: "A private transfer isn't the only way to reach Taif. What suits you depends on your group, luggage and plans.",
    columns: ["", "Private road transfer", "Other options"],
    rows: [
      ["Door to door", "From your Jeddah address to your Taif address", "Usually needs extra connections at each end"],
      ["Groups", "One vehicle and one quotation for everyone", "Seats or tickets for each traveller"],
      ["Luggage", "Limited by the vehicle you're quoted", "Set by each operator's rules"],
      ["Time", "Roughly 2–2.5 hours of driving", "Depends on schedules and connections"],
      ["Airport connections", "Pickup at King Abdulaziz International Airport can be requested", "Taif has its own airport; check current flights with airlines"],
    ],
    note: "The Haramain High Speed Railway links Jeddah with Makkah and Madinah, but not Taif.",
  },

  vehicles: {
    heading: "Choosing a vehicle",
    intro: "Capacities are from our fleet guide; the vehicle is confirmed in your quotation and a particular model is subject to availability.",
    fit: {
      economy: "One or two people with light bags",
      comfort: "Couples and small families",
      business: "Business travel to Taif",
      suv: "Families; more room on the climb",
      van: "Larger families and groups",
      minibus: "Groups travelling together",
    } as Record<string, string>,
  },

  arrange: {
    heading: "How to arrange the transfer",
    steps: [
      { t: "Send journey details", d: "Pickup, destination, date, time, passengers, luggage and any stop or special needs." },
      { t: "Receive a quotation", d: "With the suggested vehicle, any stops you've asked for and the price." },
      { t: "Review it", d: "Check the vehicle, terms and arrangements; ask about anything that isn't clear." },
      { t: "Confirm", d: "Nothing is booked until you confirm. The confirmed quotation sets the price and explains what it covers." },
      { t: "Travel", d: "According to the pickup details confirmed with your booking." },
    ],
    messagePlaceholder: "Taif hotel or address, departure time, child seats (number and ages), any stop, mobility needs, and whether any passenger is not Muslim.",
  },

  related: {
    heading: "Related journeys and guides",
    links: [
      { href: "/routes/taif-to-jeddah", label: "Taif to Jeddah", text: "The descent back to the coast" },
      { href: "/routes/jeddah-airport-to-taif", label: "From Jeddah Airport to Taif", text: "Straight from King Abdulaziz International Airport" },
      { href: "/routes/jeddah-to-makkah", label: "Jeddah to Makkah", text: "The holy city on the way" },
      { href: "/routes/jeddah-to-madinah", label: "Jeddah to Madinah", text: "North to the Prophet's city" },
      { href: "/taxi-service/taif", label: "Getting around Taif", text: "Local trips once you've arrived" },
      { href: "/airport-transfer/taif-airport", label: "Taif Airport transfers", text: "If you're flying from Taif" },
      { href: "/airport-transfer/jeddah-airport", label: "Jeddah Airport transfers", text: "Arriving by air in Jeddah" },
      { href: "/distance/jeddah-to-taif-distance", label: "Jeddah–Taif distance guide", text: "Distance and timing in detail" },
    ],
  },

  final: {
    heading: "Ready for the climb to Taif?",
    text: "Send your pickup, Taif destination, date, passengers and luggage. Add a stop at Al Hada if you'd like one. We'll reply with a quotation confirming the vehicle, arrangements and price, ready for you to confirm.",
  },

  method:
    "Reviewed 24 November 2026. Distances and times: OSRM and Valhalla (OpenStreetMap data), centre to centre. Elevations: Copernicus DEM via Open-Meteo, Wikipedia. Road information: Roads General Authority announcements reported by Saudi Gazette; Saudi Press Agency.",
};

export const TAIF_FAQS: Faq[] = [
  { question: "How far is Taif from Jeddah?", answer: "About 165–175 km by road between the city centres." },
  { question: "How long does the road journey take?", answer: "Roughly 2–2.5 hours of driving, plus any stops you'd like along the way, such as Al Hada." },
  { question: "What is the difference between the Al Hada and As-Sayl roads?", answer: "Al Hada is the shorter, more scenic mountain road with hairpin bends; As-Sayl is a longer road that climbs more gently. You don't need to choose: we plan the road for your journey and confirm it in your quotation." },
  { question: "Can non-Muslim passengers travel between Jeddah and Taif?", answer: "Yes. Makkah is open only to Muslims, so just let us know when you enquire and we'll plan the journey around the city. It takes a little longer, and the route is confirmed in your quotation." },
  { question: "Does the journey pass through Makkah?", answer: "The usual road does. If anyone in your group is not Muslim, or you're travelling during the Hajj season, mention it when you enquire and we'll plan accordingly." },
  { question: "Can we stop at Al Hada or the cable car on the way?", answer: "Yes, you can request a stop at Al Hada, whether for the viewpoints, the cable car or a break. Mention it when you ask for your quotation and the arrangements will be confirmed with you." },
  { question: "Can we visit Al Shafa?", answer: "Yes. Al Shafa is about 32 km south of Taif in the hills. Mention it when you enquire and it can be arranged as a separate trip." },
  { question: "Is the mountain road suitable for children?", answer: "Yes, most children manage it well. The hairpin bends can bring on travel sickness, so mention it when you enquire and we'll plan a comfortable pace, with a break if needed." },
  { question: "What happens if there is fog or a road closure?", answer: "Cloud sometimes reduces visibility on the escarpment, and the mountain road occasionally closes for maintenance or after heavy rain. If that happens, we use the other road up to Taif and let you know." },
  { question: "Are child seats available?", answer: "Child seats can be provided on request. Please tell us how many you need and the children's ages when you enquire so availability can be confirmed." },
  { question: "Can we request a return transfer?", answer: "Yes. Include the return date and time in the same request, or see our Taif to Jeddah page for the journey back." },
  { question: "Can we travel directly to a Taif hotel or resort?", answer: "Yes. Give the hotel or resort name, or a map pin, whether it's in Taif city, at Al Hada or elsewhere on the plateau." },
  { question: "What information is required for a quotation?", answer: "Your pickup address, Taif destination, date and time, passengers, luggage, child seats, any stop you'd like (such as Al Hada), mobility needs, and whether any passenger is not Muslim." },
];
