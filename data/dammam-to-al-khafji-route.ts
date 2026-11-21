import type { Faq } from "@/data/faqs";

/**
 * /routes/dammam-to-al-khafji — content for its own layout
 * (components/routes/DammamKhafjiRouteView.tsx).
 *
 * Figures checked on 21 Nov 2026 with OpenStreetMap-based routing (OSRM):
 *   central Dammam → central Al Khafji ≈ 298 km, ≈ 3.3 h; 271 km of it on
 *   Route 95 (Abu Hadriyah road), passing inland of Jubail.
 *   King Fahd International Airport → Al Khafji ≈ 286 km.
 * The old page said "180 km / 2 hours", which the routing doesn't support.
 *
 * Scope: this page owns the "Al Khafji town" intent. Border-crossing and
 * Kuwait intent belong to /routes/dammam-to-khafji-border,
 * /border-transfers/kuwait-border and /routes/dammam-to-kuwait-city, which
 * are linked rather than duplicated. No fixed-price, 24/7, popularity or
 * cross-border-inclusion claims.
 */

export const DAMMAM_KHAFJI_PATH = "/routes/dammam-to-al-khafji";
export const DAMMAM_KHAFJI_REVIEWED = "2026-11-21";

export const DAMMAM_KHAFJI = {
  hero: {
    kicker: "Eastern Province · up the Gulf coast",
    h1: "Private Transfer from Dammam to Al Khafji",
    lead: "About three hours north, from your door in Dammam to your door at the other end.",
    body:
      "Travelling from Dammam to Al Khafji? Maybe you're going to a family home, checking in to a hotel or heading to work. Either way, a private transfer means your group travels directly together in one vehicle, without changing cars along the way. Tell us your pickup location, destination, travel date, passenger count and luggage, and we'll help you choose a suitable vehicle. You'll receive a quotation to review before you confirm the journey.",
    points: [
      "A private vehicle for your travelling group",
      "Pickup and drop-off at your confirmed addresses",
      "A quotation to review before you confirm",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Dammam to Al Khafji.",
  },

  /** Highway-sign style facts row. */
  signs: [
    { top: "Al Khafji", big: "~300", unit: "km", sub: "By road from central Dammam" },
    { top: "Driving time", big: "3–3½", unit: "hrs", sub: "Estimate, before any stops" },
    { top: "Highway", big: "95", unit: "", sub: "North on the Abu Hadriyah road" },
    { top: "Country", big: "KSA", unit: "", sub: "Domestic trip, not into Kuwait" },
  ],

  quick: {
    question: "How far is Al Khafji from Dammam?",
    answer:
      "About 300 km north by road, mostly on Highway 95, with roughly 3 to 3½ hours of driving. Al Khafji is a Saudi town in the Eastern Province near the Kuwaiti border. This private transfer takes you into the town, not across the border.",
  },

  facts: [
    { label: "Origin", value: "Dammam, Saudi Arabia" },
    { label: "Destination", value: "Al Khafji, Saudi Arabia" },
    { label: "Region", value: "Eastern Province, northern Gulf coast" },
    { label: "Road distance", value: "About 290–310 km" },
    { label: "Driving time", value: "Around 3–3½ hours (estimate)" },
    { label: "Journey type", value: "Private city-to-city transfer" },
  ],

  route: {
    heading: "Dammam to Al Khafji Distance and Travel Time",
    paragraphs: [
      "By road, Al Khafji is about 290 to 310 km north of Dammam. The drive usually takes around 3 to 3½ hours, and that's an estimate for normal traffic with no stops, not a guarantee.",
      "Almost the whole way is on Highway 95, the Abu Hadriyah road, which heads north roughly parallel to the Gulf coast and passes inland of Jubail. If Jubail is really where you're going, our [Dammam to Jubail transfer](/routes/dammam-to-jubail) is the shorter trip you need.",
      "Your own figure depends on where we collect you and where you finish. A pickup at King Fahd International Airport is slightly closer than central Dammam, while a pickup in Khobar adds a little. Rush-hour traffic leaving Dammam, roadworks and weather can all add time.",
    ],
  },

  expect: {
    heading: "What to expect on the day",
    steps: [
      { title: "Pickup in Dammam", text: "Your driver meets you at your home, hotel, office or the airport at the time in your quotation." },
      { title: "North on Highway 95", text: "Once you're clear of the city, it's a long, straight highway north towards the Kuwaiti border region." },
      { title: "A stop, if you want one", text: "Ask for a break for prayer, coffee or fuel when you request the quote. The Jubail area, just over a quarter of the way, is a natural point." },
      { title: "Drop-off in Al Khafji", text: "Straight to the address you confirmed, whether that's a home, a hotel or a workplace in town." },
    ],
  },

  border: {
    heading: "Travelling to Al Khafji, not crossing into Kuwait",
    intro:
      "Al Khafji is a Saudi town on the northern Gulf coast, close to the border with Kuwait. Because the names overlap, a trip to the town is easily confused with a trip to the border crossing. This page is about the town.",
    included: {
      title: "This transfer covers",
      items: [
        "Dammam to an address in Al Khafji, Saudi Arabia",
        "A domestic journey within the Eastern Province",
        "No international border crossing",
      ],
    },
    separate: {
      title: "Going further?",
      text: "This transfer covers the journey from Dammam to Al Khafji within Saudi Arabia. The border crossing itself is a different booking: see our [Dammam to Khafji border transfer](/routes/dammam-to-khafji-border). For the trip into Kuwait, our [Kuwait border guide](/border-transfers/kuwait-border) explains how cross-border journeys work.",
    },
  },

  who: {
    heading: "Who uses this transfer?",
    items: [
      {
        title: "Families visiting relatives",
        text: "One vehicle from your door in Dammam to a family home in town, with room for children, older relatives and the bags a visit brings.",
      },
      {
        title: "Business travellers",
        text: "Make it to a meeting up north without driving three hours each way yourself, and work, rest or take calls on the road.",
      },
      {
        title: "Oil-sector staff",
        text: "Al Khafji is home to Khafji Joint Operations, the Saudi–Kuwaiti oil venture, so some people on this road are travelling for work. If you're going to a site with controlled access, tell us the gate or meeting point.",
      },
      {
        title: "Visitors and hotel guests",
        text: "Staying at a hotel or with friends? Give us the address and arrive straight there, with no need to arrange a car in town.",
      },
    ],
  },

  vehicles: {
    heading: "Pick a vehicle for three hours on the road",
    intro: "These are the vehicle classes you can request. The bars show how many passengers each one takes.",
    fit: {
      economy: "Fine for one or two people with light bags.",
      comfort: "A roomier sedan for up to three, with space for 3 bags.",
      business: "Quiet and comfortable for business trips of up to three.",
      suv: "Families of up to five, or anyone who wants extra space.",
      van: "Larger families or work crews: up to 9 passengers and about 8 bags.",
      minibus: "For 10 to 18 people travelling together.",
    } as Record<string, string>,
    /** Max passengers per vehicle class, for the capacity bars (from data/vehicles.ts). */
    maxSeats: { economy: 3, comfort: 3, business: 3, suv: 5, van: 9, minibus: 18 } as Record<string, number>,
    footnote:
      "Models are examples and bag counts are a guide for standard suitcases. Tell us your real passenger and bag count, and we'll confirm the vehicle in your quotation.",
  },

  pickup: {
    heading: "Pickup and drop-off locations",
    from: {
      title: "Pickup in Dammam",
      items: ["Homes and apartments", "Hotels", "Offices and business addresses", "King Fahd International Airport (DMM)"],
      note: "Starting in Khobar or Dhahran? Mention it, as it adds a little distance. Landing at the airport first? Our [Dammam airport transfer](/airport-transfer/dammam-airport) page explains how airport pickups work.",
    },
    to: {
      title: "Drop-off in Al Khafji",
      items: ["Homes and family addresses", "Hotels", "Offices and workplaces"],
      note: "At work sites with controlled access, the driver can only go as far as the site's rules allow, so tell us the gate or meeting point. A drop-off at the border crossing is a separate service.",
    },
  },

  returnTrip: {
    heading: "Coming back from Al Khafji?",
    text: "Book the reverse trip on our [Al Khafji to Dammam transfer](/routes/al-khafji-to-dammam) page, or add your return date to this request and we'll quote both journeys together.",
  },

  form: {
    heading: "Request your Dammam to Al Khafji quote",
    text: "Share your journey details and receive a quotation based on your pickup, destination, travel date, passengers, luggage and vehicle requirements. Review the quotation before confirming your transfer.",
    steps: ["Send your details here or on WhatsApp", "We suggest a vehicle and send your quotation", "You confirm, and your driver collects you"],
    flightNote: "The flight-number field only appears if your pickup or drop-off is an airport.",
  },

  related: {
    heading: "Related routes and local taxis",
    groups: [
      {
        title: "Back the other way",
        links: [{ href: "/routes/al-khafji-to-dammam", label: "Al Khafji to Dammam", text: "The return journey south" }],
      },
      {
        title: "Heading to the border or into Kuwait",
        links: [
          { href: "/routes/dammam-to-khafji-border", label: "Dammam to Khafji Border", text: "To the crossing itself" },
          { href: "/routes/dammam-to-kuwait-city", label: "Dammam to Kuwait City", text: "A separate international journey" },
        ],
      },
      {
        title: "Elsewhere from Dammam",
        links: [
          { href: "/routes/dammam-to-jubail", label: "Dammam to Jubail", text: "The shorter trip up the same road" },
          { href: "/routes/dammam-to-riyadh", label: "Dammam to Riyadh", text: "West to the capital" },
        ],
      },
      {
        title: "Local taxis",
        links: [
          { href: "/taxi-service/dammam", label: "Dammam Taxi", text: "Rides around Dammam" },
          { href: "/taxi-service/jubail", label: "Jubail Taxi", text: "Rides in Jubail" },
        ],
      },
    ],
  },

  faqHeading: "Dammam to Al Khafji: your questions answered",

  method: {
    heading: "How we checked this page",
    text: "We measured the road distance and driving time on OpenStreetMap-based routing between the two town centres. The same routing shows the journey follows Highway 95 for most of the way. Prices, vehicles and timings aren't promised here; they're confirmed in your quotation.",
  },

  finalCta: {
    heading: "Heading north up the coast?",
    text: "Tell us when you're travelling and who's coming, and we'll send a quotation for the right vehicle.",
    primary: "Request a Quote",
    whatsapp: "WhatsApp Us",
  },
};

export const DAMMAM_KHAFJI_FAQS: Faq[] = [
  {
    question: "How far is Al Khafji from Dammam?",
    answer:
      "About 290 to 310 km by road, depending on your exact pickup and drop-off. Almost all of it is on Highway 95, heading north towards the Kuwaiti border region.",
  },
  {
    question: "How long does the drive from Dammam to Al Khafji take?",
    answer:
      "Usually around 3 to 3½ hours of driving. That is an estimate: traffic leaving Dammam, the time of day and any stops you ask for can change it.",
  },
  {
    question: "Is Al Khafji in Saudi Arabia or Kuwait?",
    answer: "Al Khafji is in Saudi Arabia. It is a town in the Eastern Province on the Gulf coast, close to the border with Kuwait.",
  },
  {
    question: "Does this transfer include crossing into Kuwait?",
    answer:
      "No. This transfer ends at your address in Al Khafji, within Saudi Arabia. A trip to the border crossing is a separate booking on our Dammam to Khafji border page, and travel into Kuwait is a separate international journey.",
  },
  {
    question: "Can I request home, hotel or workplace pickup?",
    answer:
      "Yes. Pickups are from homes, hotels and business addresses in Dammam, and from King Fahd International Airport. Drop-offs are at homes, hotels and workplaces in Al Khafji. For sites with controlled access, tell us the gate or meeting point.",
  },
  {
    question: "Which vehicle should I choose?",
    answer:
      "One to three people usually choose a comfort or business sedan. An SUV suits families of up to five with about 4 bags, and a van takes up to 9 passengers and about 8 bags. Tell us your passenger and bag count and we will confirm the vehicle in your quotation.",
  },
  {
    question: "Can I request an early-morning or late-night pickup?",
    answer: "You can request any pickup time, including early morning or late at night. The time is confirmed in your quotation before you travel.",
  },
  {
    question: "Is this a private or shared transfer?",
    answer: "Private. The vehicle is booked for you and your group only, and no other passengers are picked up on the way.",
  },
  {
    question: "How is the quotation calculated?",
    answer:
      "It is based on your pickup, destination, travel date, number of passengers, luggage and the vehicle you need. You review the quotation before confirming, and nothing is booked until you agree.",
  },
  {
    question: "Can I book the return journey from Al Khafji to Dammam?",
    answer: "Yes. Book it on our Al Khafji to Dammam page, or include your return date in the same request and we will quote both journeys.",
  },
];
