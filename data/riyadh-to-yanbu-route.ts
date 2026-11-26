import type { Faq } from "@/data/faqs";

/**
 * /routes/riyadh-to-yanbu — copy for components/routes/RiyadhYanbuRouteView.tsx.
 *
 * Route facts (checked 25 Nov 2026; central Riyadh 24.7136, 46.6753):
 * - Riyadh → Yanbu Al-Bahr centre (24.0895, 38.0618): OSRM 1,058 km / 10.3 h;
 *   Valhalla 1,062 km / 9.8 h.
 * - Riyadh → Yanbu Industrial City (≈23.96, 38.26): OSRM 1,037 km / 10.1 h;
 *   Valhalla 1,041 km / 9.6 h.
 * - Yanbu Al-Bahr → Riyadh: OSRM 1,055 km / 10.4 h; Valhalla 1,063 km / 9.9 h.
 *   Published: about 1,040–1,060 km, roughly 9.5–10.5 hours of driving
 *   before breaks. The old page said ~950 km / 9 h 30 min.
 * - Geometry (OSRM): north-west through the Al-Qassim area (≈340 km, passing
 *   near Buraydah and Unaizah), west across open desert (Al Henakiyah ≈720 km),
 *   past the outskirts of Madinah (≈820 km), then down to the coast. Road
 *   numbers are not shown; signage and OSM references differ.
 * - Yanbu Industrial City lies south-east of Yanbu Al-Bahr, ≈20–30 km depending
 *   on the address (Royal Commission city guide: ≈20 km; OSRM to an industrial-
 *   city point 29 km). Run by the Royal Commission for Jubail and Yanbu.
 * - Yanbu Al-Bahr: historic quarter with coral-stone houses and wooden
 *   rawasheen (Richard Mortel photos); Al-Sanusi Mosque (built 1838 per the
 *   photo record); fringing reefs visible from space (NASA/ISS); dive centres
 *   operate from the city (Kempinski destination page).
 * - Not claimed: tolls (no reliable nationwide source either way), road
 *   condition, fastest/only route, tracking, driver experience, fixed prices,
 *   included stops, 24/7, deposits, industrial-site access.
 */

export const YANBU_PATH = "/routes/riyadh-to-yanbu";
export const YANBU_REVIEWED = "2026-11-25";

type Credit = { title: string; author: string; licence: string; licenceUrl?: string; source: string };
export type YanbuPhoto = { src: string; alt: string; caption: string; w: number; h: number; credit: Credit };

const commons = (f: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
const L = {
  by2: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  bysa4: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
} as const;
const cr = (author: string, lic: readonly [string, string] | "pd", file: string): Credit => ({
  title: file.replace(/\.(jpe?g|png)$/i, ""),
  author,
  ...(lic === "pd" ? { licence: "Public domain" } : { licence: lic[0], licenceUrl: lic[1] }),
  source: commons(file),
});

export const YANBU_PHOTOS = {
  space: {
    src: "/images/yanbu/yanbu-from-space.webp",
    alt: "Yanbu Al-Bahr seen from the International Space Station, with the city grid, harbour and turquoise fringing reef along the Red Sea",
    caption: "Yanbu Al-Bahr and its fringing reef, photographed from the International Space Station",
    w: 1600, h: 1060,
    credit: cr("NASA (ISS crew)", "pd", "Fm nasa yanbu saudi arabia.jpg"),
  },
  street: {
    src: "/images/yanbu/old-yanbu-street.webp",
    alt: "Restored coral-stone houses with carved wooden balconies on a street in old Yanbu",
    caption: "Restored houses in the historic quarter of Yanbu Al-Bahr",
    w: 1600, h: 1200,
    credit: cr("Richard Mortel", L.by2, "Traditional architecture in old Yanbu, Saudi Arabia (9).jpg"),
  },
  house: {
    src: "/images/yanbu/old-yanbu-house.webp",
    alt: "A whitewashed house in old Yanbu with dark wooden rawasheen balconies against a blue sky",
    caption: "Wooden rawasheen balconies in old Yanbu",
    w: 1600, h: 1200,
    credit: cr("Richard Mortel", L.by2, "Traditional architecture in old Yanbu, Saudi Arabia (4).jpg"),
  },
  night: {
    src: "/images/yanbu/old-yanbu-night.webp",
    alt: "Lit wooden balconies of a traditional house in old Yanbu at night",
    caption: "The historic quarter in the evening",
    w: 1600, h: 1200,
    credit: cr("Richard Mortel", L.by2, "Traditional architecture in old Yanbu, Saudi Arabia.jpg"),
  },
  minaret: {
    src: "/images/yanbu/al-sanusi-minaret.webp",
    alt: "The white minaret of the Al-Sanusi Mosque in Yanbu with a carved wooden gallery, against a clear sky",
    caption: "The minaret of the Al-Sanusi Mosque, first built in 1838",
    w: 1600, h: 1067,
    credit: cr("Richard Mortel", L.by2, "Al-Sanusi Mosque, originally built in 1838; Yanbu, Saudi Arabia.jpg"),
  },
  suwaiqa: {
    src: "/images/yanbu/suwaiqa-radwa.webp",
    alt: "The old Suwaiqa quarter of Yanbu with a mosque minaret and the Radwa mountains behind",
    caption: "Suwaiqa in Yanbu, with the Radwa mountains in the background",
    w: 1280, h: 853,
    credit: cr("Averroex", L.bysa4, "سويقة ينبع.jpg"),
  },
  industrial: {
    src: "/images/yanbu/yanbu-industrial-housing.webp",
    alt: "Rows of white villas and landscaped streets in a residential district of Yanbu Industrial City, seen from above",
    caption: "A residential district in Yanbu Industrial City",
    w: 1600, h: 1058,
    credit: cr("Aaiq2005", L.bysa4, "السكن في ينبع الصناعية.JPG"),
  },
} satisfies Record<string, YanbuPhoto>;

export const YANBU = {
  hero: {
    kicker: "Capital to the Red Sea",
    h1: "Private Transfer from Riyadh to Yanbu",
    intro:
      "A full day's drive takes you from the centre of Saudi Arabia to its Red Sea coast. Whether you are heading for a hotel near the sea in Yanbu Al-Bahr or an office in Yanbu Industrial City, you can request one private vehicle for the whole journey and receive a quotation before you decide.",
  },

  glance: {
    answer:
      "Riyadh to Yanbu is about 1,040–1,060 km by road, roughly 9.5–10.5 hours of driving before breaks. The road runs north-west through the Al-Qassim area, west across the desert past Madinah, and down to the Red Sea coast. A private transfer can be requested to Yanbu Al-Bahr or Yanbu Industrial City, with a quotation sent before you confirm.",
    stats: [
      { k: "Road distance", v: "≈1,040–1,060 km" },
      { k: "Typical driving time", v: "≈9.5–10.5 hours" },
      { k: "From", v: "Anywhere in Riyadh" },
      { k: "To", v: "Yanbu Al-Bahr or Yanbu Industrial City" },
    ],
    note: "Estimates from two routing services, for central Riyadh to Yanbu. Your exact addresses, traffic and breaks change the total.",
  },

  stages: [
    { km: 0, label: "Riyadh", title: "Leave from your Riyadh address", text: "Your journey starts wherever you ask to be collected: a home, hotel, office or the airport." },
    { km: 340, label: "Al-Qassim area", title: "North-west across Najd", text: "The first stretch heads north-west through central Arabia, passing the farming towns of the Al-Qassim area." },
    { km: 820, label: "Madinah outskirts", title: "West across the desert", text: "The longest part of the day: open desert towards the Madinah region, where the road passes the outskirts of the city." },
    { km: 1050, label: "Yanbu", title: "Down to the coast", text: "The final stretch drops towards the Red Sea and ends at the address in Yanbu you gave us." },
  ],
  stagesNote:
    "If you would like a break for a meal, prayer or rest, mention it in your request. Stops are agreed with you when the transfer is confirmed.",

  service: {
    heading: "One vehicle from Riyadh to your door in Yanbu",
    paragraphs: [
      "Tell us where to collect you in Riyadh and where you are going in Yanbu, and we will suggest a vehicle for your group and luggage and send you a quotation. You review it, and the journey is booked only when you confirm.",
      "Please give the exact destination: a hotel name, a street address, or the office or accommodation you are visiting. Some industrial and company sites have controlled entry, so drop-off at those is arranged at a point you are allowed to use; entry permits are for you or your host to arrange.",
    ],
  },

  suits: [
    {
      title: "Families and holidaymakers",
      text: "Travelling together with suitcases, beach bags or diving gear, without a flight and a second taxi at the other end.",
    },
    {
      title: "Business and industrial-sector travellers",
      text: "Heading to an office, project or company accommodation in Yanbu Industrial City, timed around your own schedule.",
    },
    {
      title: "Residents moving between the two cities",
      text: "Going home, starting a new job or visiting relatives, with all your luggage in one vehicle.",
    },
  ],

  destinations: {
    heading: "Two Yanbus: choose where you are going",
    intro:
      "Yanbu is really two places. Tell us which one you need, because they are some distance apart.",
    bahr: {
      name: "Yanbu Al-Bahr",
      tag: "The coastal city",
      text:
        "The original town on the sea, with hotels, the waterfront and a historic quarter of coral-stone houses and wooden balconies. Reefs fringe the coast, and dive centres operate from the city.",
      points: ["Hotels and holiday accommodation", "The waterfront and Corniche", "The historic quarter", "Dive centres and beaches"],
    },
    industrial: {
      name: "Yanbu Industrial City",
      tag: "The planned industrial city",
      text:
        "A separate planned city about 20–30 km south-east of Yanbu Al-Bahr, run by the Royal Commission for Jubail and Yanbu, with refineries, petrochemical plants, offices and residential districts.",
      points: ["Offices and business addresses", "Company and residential accommodation", "Hotels in the industrial city", "Exact site details from you or your host"],
    },
  },

  road: {
    heading: "The road from Riyadh to the Red Sea",
    paragraphs: [
      "For most of the day the road crosses the wide, open interior of Arabia. Leaving Riyadh you head north-west through the Najd plateau and the Al-Qassim area, then turn west into long desert stretches towards the Madinah region.",
      "After passing the outskirts of Madinah, the road continues west and descends towards the coast, where the land flattens out by the Red Sea. You do not need to plan the route; the driver takes the usual highway roads.",
    ],
  },

  planning: {
    heading: "Planning a long journey",
    items: [
      { title: "An early start", text: "Many people leave in the morning so that most of the drive is in daylight." },
      { title: "Breaks", text: "Ten hours is a long day. Mention any breaks you would like when you request your quotation." },
      { title: "Choosing a vehicle", text: "With this much time on the road, choose a vehicle with room to spare for your group and luggage." },
      { title: "Your exact address", text: "Give the hotel, street or site name in Yanbu so the quotation fits the real journey." },
    ],
  },

  vehicles: {
    heading: "Choosing a vehicle",
    intro:
      "Our vehicle categories are listed below with their usual passenger and luggage guide. Tell us how many people and bags you have, including anything bulky such as diving equipment, and the quotation will suggest a suitable vehicle.",
  },

  onward: {
    heading: "Return journey and onward connections",
    links: [
      { href: "/routes/yanbu-to-riyadh", label: "Yanbu to Riyadh", text: "The return journey from Yanbu to the capital." },
      { href: "/routes/yanbu-to-jeddah", label: "Yanbu to Jeddah", text: "South along the coast to Jeddah." },
      { href: "/routes/yanbu-to-madinah", label: "Yanbu to Madinah", text: "Inland to Madinah." },
      { href: "/taxi-service/riyadh", label: "Private transfers in Riyadh", text: "Airport, city and onward journeys in the capital." },
    ],
  },

  booking: {
    heading: "How to request your transfer",
    steps: [
      { title: "Pickup and destination", text: "Your Riyadh pickup and your address in Yanbu Al-Bahr or Yanbu Industrial City." },
      { title: "Date and details", text: "Your date, preferred departure time, number of passengers and luggage." },
      { title: "Receive a quotation", text: "We reply with a quotation and a suggested vehicle." },
      { title: "Review and confirm", text: "Check the details, then confirm if you are happy with them." },
    ],
    form: {
      dropoffPlaceholder: "e.g. hotel in Yanbu Al-Bahr, or address in Yanbu Industrial City",
      messagePlaceholder: "Anything else? e.g. preferred departure time, breaks, bulky luggage or diving equipment",
    },
  },

  final: {
    heading: "Ready for the drive to the Red Sea?",
    text: "Send your Riyadh pickup, Yanbu destination, date and group size, and we will reply with a quotation.",
  },

  method:
    "How we checked: distance and driving time from OSRM and Valhalla (OpenStreetMap data) on 25 November 2026, between central Riyadh and central Yanbu Al-Bahr and Yanbu Industrial City. Times are driving estimates before breaks, not guaranteed journey times.",
};

export const YANBU_FAQS: Faq[] = [
  { question: "How far is Yanbu from Riyadh?", answer: "About 1,040–1,060 km by road from central Riyadh, depending on whether you are going to Yanbu Al-Bahr or Yanbu Industrial City." },
  { question: "How long does the drive from Riyadh to Yanbu take?", answer: "Roughly 9.5–10.5 hours of driving, before any breaks. Traffic, your exact addresses and stops can change the total." },
  { question: "Can I travel to Yanbu Al-Bahr?", answer: "Yes. You can request a transfer to a hotel, home or other address in Yanbu Al-Bahr, the coastal city with the historic quarter and waterfront." },
  { question: "Can I request a transfer to Yanbu Industrial City?", answer: "Yes. Give the office, accommodation or site details. Where a site has controlled entry, drop-off is at a point you are allowed to use, and entry permits are for you or your host to arrange." },
  { question: "Which vehicle should I request for such a long journey?", answer: "Tell us how many people and bags you have, including anything bulky, and the quotation will suggest a suitable vehicle. Extra room helps on a ten-hour drive." },
  { question: "Can I ask for a stop during the journey?", answer: "Yes. Mention the breaks you would like when you request your quotation; stops are agreed with you when the transfer is confirmed." },
  { question: "Does the road go through Madinah?", answer: "The usual route passes the outskirts of Madinah before continuing west to the coast." },
  { question: "Can I book the return journey to Riyadh?", answer: "Yes. See the Yanbu to Riyadh page, or mention both directions in one request." },
  { question: "What do you need to send me a quotation?", answer: "Your pickup in Riyadh, your destination in Yanbu, the date and preferred time, the number of passengers and luggage, and any stops or special requirements." },
  { question: "Can I continue from Yanbu to Jeddah or Madinah?", answer: "Yes. Onward transfers from Yanbu to Jeddah and to Madinah can also be requested; see the links on this page." },
];
