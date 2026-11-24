import type { Faq } from "@/data/faqs";

/**
 * /taxi-service/jeddah — copy for components/city-transfer/JeddahCityView.tsx.
 *
 * Facts (24 Nov 2026):
 * - Jeddah: largest city in Makkah Province, on the Red Sea; principal gateway to
 *   Makkah, ≈65 km east (Wikipedia).
 * - King Abdulaziz International Airport (JED): ≈19 km north of Jeddah; three
 *   several passenger terminals, including Terminal 1 and the Hajj and Umrah
 *   terminals (Wikipedia). In Sep–Oct 2026 the former South Terminal reopened as
 *   Terminal 4 and North Terminal flights moved to T4 and the Hajj and Umrah
 *   terminals (Saudi Gazette, Arabian Business, Khaleej Times), so the copy names
 *   no terminal per airline. OSRM airport → central Jeddah ≈26 km.
 * - Jeddah Corniche / Waterfront: ≈30 km coastal area with King Fahd's Fountain
 *   (tallest fountain in the world) and the Al-Rahmah Mosque (Wikipedia).
 * - Al-Balad: the historic centre (Historic Jeddah), Hijazi houses with roshan
 *   windows (Wikipedia).
 * - Route figures (route records cross-checked with OSRM, central Jeddah):
 *   Makkah 85 km (OSRM 83); Madinah 420 km (OSRM 411); Taif 165–175 km (report
 *   58); Yanbu 330 km (OSRM 337); Riyadh 950 km (OSRM 945). Only distances are
 *   shown here: some route records' times differ from routing (flagged).
 * - Not claimed: flight tracking, driver assignment, meeting points, free waiting,
 *   luggage help, fixed prices or day-rates, prepayment terms, miqat or prayer
 *   stops, hotel partnerships, same-driver availability.
 * - Photos: Wikimedia Commons, licences checked via the Wikipedia API; credited
 *   in captions.
 */

export const JEDDAH_REVIEWED = "2026-11-24";

type Credit = { author: string; licence: string };
export type JeddahPhoto = { src: string; alt: string; caption: string; credit: Credit };

export const JEDDAH_PHOTOS = {
  waterfront: {
    src: "/images/jeddah/jeddah-waterfront-aerial.webp",
    alt: "Aerial view of the Jeddah Waterfront, with the Corniche road, a mosque on the shore and towers beside the Red Sea",
    caption: "The Jeddah Waterfront and Corniche on the Red Sea",
    credit: { author: "Saudi Press Agency", licence: "CC BY-SA 4.0" },
  },
  airport: {
    src: "/images/jeddah/kaia-hajj-terminal.webp",
    alt: "Pilgrims walking with their bags under the white tent canopies of the Hajj Terminal at King Abdulaziz International Airport",
    caption: "The Hajj Terminal at King Abdulaziz International Airport",
    credit: { author: "Shah134pk", licence: "CC BY-SA 4.0" },
  },
  rahmah: {
    src: "/images/jeddah/al-rahmah-mosque.webp",
    alt: "The white Al-Rahmah Mosque standing over the water on the Jeddah Corniche, beside a large bronze sculpture",
    caption: "The Al-Rahmah Mosque on the Corniche",
    credit: { author: "xiquinhosilva", licence: "CC BY 4.0" },
  },
  fountain: {
    src: "/images/jeddah/king-fahd-fountain.webp",
    alt: "King Fahd's Fountain shooting a jet of water into an orange sunset sky above palm trees",
    caption: "King Fahd's Fountain at sunset",
    credit: { author: "Saudi Press Agency", licence: "CC BY-SA 4.0" },
  },
  gate: {
    src: "/images/jeddah/al-balad-gate.webp",
    alt: "A restored coral-stone city gate with round towers in historic Al-Balad, Jeddah",
    caption: "A restored gate in historic Al-Balad",
    credit: { author: "xiquinhosilva", licence: "CC BY 4.0" },
  },
  balad: {
    src: "/images/jeddah/bait-al-balad.webp",
    alt: "Traditional Hijazi houses with wooden balconies around a square in Al-Balad, Jeddah",
    caption: "Traditional houses around Bait Al Balad in the old town",
    credit: { author: "Tahir mq", licence: "CC BY-SA 4.0" },
  },
  corniche: {
    src: "/images/taif/jeddah-corniche.webp",
    alt: "The Jeddah Corniche promenade with street lamps and towers beside the Red Sea",
    caption: "The Corniche promenade",
    credit: { author: "Tahir mq", licence: "CC BY-SA 4.0" },
  },
} satisfies Record<string, JeddahPhoto>;

export const JEDDAH = {
  hero: {
    eyebrow: "Makkah Province · Red Sea coast",
    h1: "Private Transfers in Jeddah",
    intro:
      "Jeddah is where many journeys in Saudi Arabia begin: a busy Red Sea city, a major airport, and the gateway to Makkah. Whether you're landing at King Abdulaziz International Airport, moving between hotels and the Corniche, heading to a meeting or continuing to another city, you can request a private transfer from your exact pickup point to your destination.",
    highlights: ["Airport arrivals", "Hotels and the Corniche", "Makkah and Madinah", "Business travel"],
  },

  finder: {
    heading: "Where are you heading?",
    items: [
      { title: "From the airport", text: "King Abdulaziz International Airport to your hotel, home or next destination.", href: "#airport" },
      { title: "To Makkah or Madinah", text: "Onward journeys for Umrah, Hajj, family visits and work.", href: "#makkah-madinah" },
      { title: "Around the city", text: "Hotels, the Corniche, Al-Balad and everyday trips across Jeddah.", href: "#city" },
      { title: "For business", text: "Offices, meetings and hotels on your schedule.", href: "#business" },
      { title: "Beyond Jeddah", text: "Taif, Yanbu, Riyadh and other Saudi cities.", href: "#regional" },
    ],
  },

  about: {
    heading: "Private transfers across Jeddah",
    paragraphs: [
      "Jeddah is the largest city on Saudi Arabia's Red Sea coast and the country's main commercial centre, stretching for kilometres along the shore. For centuries it has been the port through which travellers reach Makkah, about 65 km inland, and today most arrive by air instead.",
      "People ask us for very different journeys here: a ride from the airport after a long flight, a family moving between hotels, a morning of meetings, an evening on the Corniche, or a drive to Makkah, Madinah or Taif. Each starts with the same simple step: tell us where you are, where you're going and when, and we'll send you a quotation.",
    ],
  },

  airport: {
    heading: "Arriving at Jeddah airport",
    paragraphs: [
      "King Abdulaziz International Airport (JED) lies about 19 km north of the city centre. It has several passenger terminals, including the Hajj Terminal with its tent-like roofs, and a number of airlines changed terminals in late 2026, so check with your airline which terminal your flight uses.",
      "You can request a transfer from the airport to your hotel, accommodation or straight on to another city. Share your flight details and destination when you ask for a quotation; the pickup point and arrangements are confirmed with you individually when you book.",
    ],
    link: { href: "/airport-transfer/jeddah-airport", label: "More about Jeddah Airport transfers" },
    guide: { href: "/blog/jeddah-airport-terminal-guide-jed", label: "Guide to JED's terminals" },
  },

  makkahMadinah: {
    heading: "Onward to Makkah and Madinah",
    intro: "Two of the most requested journeys from Jeddah. Each has its own page with the details of the route.",
    routes: [
      { href: "/routes/jeddah-to-makkah", title: "Jeddah to Makkah", dist: "≈85 km", text: "Inland to Makkah, for hotels near the Haram and addresses across the city." },
      { href: "/routes/jeddah-to-madinah", title: "Jeddah to Madinah", dist: "≈410–420 km", text: "North to Madinah, a longer journey with breaks along the way." },
    ],
    note: "Arriving by sea? See [Jeddah Islamic Port to Makkah](/routes/jeddah-port-to-makkah).",
  },

  pilgrims: {
    heading: "Umrah and Hajj travel from Jeddah",
    paragraphs: [
      "Many visitors to Jeddah are pilgrims on their way to Makkah and Madinah, often travelling as a family or group with several suitcases. A private vehicle keeps everyone and everything together, from the airport or hotel to the door of your accommodation.",
      "When you request a quotation, tell us how many people are travelling and how much luggage you have, so a suitable vehicle can be suggested. If you'd like a stop along the way or have any particular requirements, just mention them in your request and they'll be discussed with you.",
    ],
    links: [
      { href: "/umrah-taxi-service", label: "Umrah transport" },
      { href: "/hajj-transport-service", label: "Hajj transport" },
    ],
  },

  city: {
    heading: "The Corniche, hotels and city destinations",
    paragraphs: [
      "Jeddah's waterfront runs for around 30 km along the Red Sea, with the Corniche road, parks, King Fahd's Fountain (the tallest fountain in the world) and the Al-Rahmah Mosque standing over the water. Inland, Al-Balad is the historic heart of the city, known for its coral-stone houses and carved wooden roshan windows.",
      "You can request point-to-point transfers between hotels, homes, attractions, shopping areas and restaurants anywhere in the city. For a specific hotel, browse our [Jeddah hotel transfer directory](/cities/jeddah) or send us the address with your request.",
    ],
    places: [
      { title: "Jeddah Corniche and Waterfront", text: "Promenades, parks and seafront hotels.", photo: "rahmah" },
      { title: "King Fahd's Fountain", text: "A landmark on the central waterfront.", photo: "fountain" },
      { title: "Al-Balad (Historic Jeddah)", text: "The old town's lanes, souqs and traditional houses.", photo: "gate" },
    ],
  },

  business: {
    heading: "Business travel in Jeddah",
    paragraphs: [
      "As the Kingdom's main commercial centre, Jeddah is busy with meetings, conferences and site visits. Private transfers can be requested between hotels, offices, business districts and the airport.",
      "If you have several appointments, send your schedule with your request and you'll receive a quotation for the journeys you need.",
    ],
  },

  areas: {
    heading: "Pickup and destination areas",
    intro: "A few of the places customers ask about most. You can request a transfer from or to any exact address; just include it with your request.",
    groups: [
      { title: "Arrivals", items: ["King Abdulaziz International Airport (JED)", "Jeddah Islamic Port"] },
      { title: "Waterfront", items: ["Jeddah Corniche", "King Fahd's Fountain", "Al-Rahmah Mosque"] },
      { title: "Historic centre", items: ["Al-Balad (Historic Jeddah)", "Bait Al Balad"] },
      { title: "Across the city", items: ["Hotels and serviced apartments", "Homes and residential districts", "Offices and business districts"] },
    ],
  },

  regional: {
    heading: "Regional connections from Jeddah",
    intro: "Jeddah is a natural starting point for journeys across western Saudi Arabia. Approximate road distances from central Jeddah:",
    routes: [
      { href: "/routes/jeddah-to-taif", title: "Taif", dist: "≈165–175 km" },
      { href: "/routes/jeddah-to-yanbu", title: "Yanbu", dist: "≈330–340 km" },
      { href: "/routes/jeddah-to-madinah", title: "Madinah", dist: "≈410–420 km" },
      { href: "/routes/jeddah-to-riyadh", title: "Riyadh", dist: "≈945–950 km" },
    ],
  },

  request: {
    heading: "How to request a Jeddah transfer",
    steps: [
      { t: "Share your journey", d: "Pickup, destination, date and time." },
      { t: "Add the details", d: "Number of passengers and luggage, plus flight details or any stop you'd like." },
      { t: "Receive your quotation", d: "With the suggested vehicle and the price." },
      { t: "Review and confirm", d: "Your transfer is arranged once you confirm the quotation." },
    ],
    dropoffPlaceholder: "Hotel, address, airport or city (e.g. Makkah)",
    messagePlaceholder: "Flight details, number of bags, any stop you'd like, child seats or other requirements.",
  },

  guides: [
    { href: "/blog/first-time-in-jeddah-guide", label: "First time in Jeddah" },
    { href: "/blog/jeddah-airport-terminal-guide-jed", label: "Jeddah Airport terminals" },
    { href: "/blog/jeddah-islamic-port-passenger-guide", label: "Jeddah Islamic Port passengers" },
  ],

  final: {
    heading: "Planning a journey in Jeddah?",
    text: "Tell us your pickup, destination, date, passengers and luggage, and we'll reply with a quotation for you to review and confirm.",
  },
};

export const JEDDAH_FAQS: Faq[] = [
  { question: "Can I request a private transfer from Jeddah Airport?", answer: "Yes. Share your flight details and destination when you request a quotation; the pickup point and arrangements are confirmed with you when you book." },
  { question: "Can I travel from Jeddah to Makkah?", answer: "Yes. Makkah is about 85 km from central Jeddah. Send your Jeddah pickup and your Makkah hotel or address to receive a quotation." },
  { question: "Can I book a transfer from Jeddah to Madinah?", answer: "Yes. Madinah is about 410–420 km north of Jeddah by road; see the Jeddah to Madinah page and request a quotation with your details." },
  { question: "Which areas of Jeddah can I request pickup from?", answer: "You can request pickup from any address in Jeddah, including the airport, hotels, homes, offices, the Corniche and Al-Balad. Include the exact address in your request." },
  { question: "Can I request a transfer to a Jeddah hotel?", answer: "Yes. Give the hotel name or address, or find it in our Jeddah hotel transfer directory." },
  { question: "Can families request a larger vehicle?", answer: "Yes. Tell us how many people are travelling and how much luggage you have, and a suitable vehicle such as an SUV, van or minibus can be suggested in your quotation." },
  { question: "Can I request a stop during my journey?", answer: "Yes. Mention the stop when you request your quotation and the arrangements will be confirmed with you." },
  { question: "How do I receive a quotation?", answer: "Send your pickup, destination, date, time, passengers and luggage through the form on this page or WhatsApp. We reply with a quotation for you to review and confirm." },
  { question: "Can I request a transfer for business travel?", answer: "Yes. Send the addresses and times you need, or your schedule if you have several appointments, and you'll receive a quotation for those journeys." },
];
