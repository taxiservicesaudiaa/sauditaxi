import type { Faq } from "@/data/faqs";

/**
 * /airport-transfer/dammam-airport — page copy for the dedicated DMM layout
 * (components/airport-transfer/DammamAirportView.tsx).
 *
 * Owner rules for DMM (21 Nov 2026, report 47; lib/airport-ops.ts): flight
 * tracking YES; meeting point confirmed individually (no arrivals-hall, name
 * board or pickup-zone promise); no free-waiting allowance; no luggage-help,
 * 24/7, child-seat or vehicle-availability promises; quotation-based pricing;
 * restricted facilities need the customer's own permission.
 *
 * Distances: OSRM (OpenStreetMap routing), King Fahd International Airport
 * terminal area → each place, measured 24 Nov 2026, rounded to a range:
 * Dammam centre 37 km / Corniche 41 km; Dhahran 52 km; Al Khobar centre and
 * Corniche 57 km; Jubail town 84 km / industrial city 81 km; Abqaiq town
 * 100 km; Manama 102 km (excluding the Causeway crossing); Riyadh 398 km.
 * No drive times are published: they depend on traffic and the crossing.
 */

export const DMM_PAGE_REVIEWED = "2026-11-24";

const AIRPORT = "King Fahd International Airport (DMM)";

export type DmmDestination = {
  id: string;
  name: string;
  /** Rounded road distance from the airport (see header). */
  km: string;
  kind: string;
  /** [longitude, latitude] for the schematic map (city centre). */
  ll: [number, number];
  intro: string;
  who: string;
  send: string;
  link: { href: string; label: string };
  more?: { href: string; label: string };
  caution?: string;
};

export const DMM_PAGE = {
  airport: AIRPORT,

  hero: {
    eyebrow: "King Fahd International Airport · DMM",
    h1: "Dammam Airport Transfers: Your Journey Across the Eastern Province",
    intro:
      "Arriving at King Fahd International Airport? From here, private transfers run to Dammam, Al Khobar, Dhahran, Jubail and Abqaiq, and across the King Fahd Causeway to Bahrain when that journey is confirmed. This guide walks you from landing to the right destination, the right vehicle and a quotation you can check before anything is booked.",
    board: [
      { to: "Dammam", note: "City, Corniche, business districts" },
      { to: "Al Khobar", note: "Corniche, hotels, offices" },
      { to: "Dhahran", note: "Business and institutional" },
      { to: "Jubail", note: "Industrial city and compounds" },
      { to: "Abqaiq", note: "Town; facilities need permission" },
      { to: "Bahrain", note: "Via the King Fahd Causeway" },
    ],
    quick: {
      title: "Start a quotation",
      text: "Pick a destination and date. You'll add your flight details on the next page.",
      destinations: ["Dammam", "Al Khobar", "Dhahran", "Jubail", "Abqaiq", "Bahrain (Manama)", "Riyadh", "Other"],
    },
  },

  index: [
    { id: "airport", label: "The airport" },
    { id: "arrival", label: "Your arrival" },
    { id: "region", label: "The region" },
    { id: "destinations", label: "Destinations" },
    { id: "routes", label: "Routes" },
    { id: "travellers", label: "Who travels" },
    { id: "vehicles", label: "Vehicles" },
    { id: "prepare", label: "Checklist" },
    { id: "booking", label: "Booking" },
    { id: "faq", label: "FAQs" },
  ],

  airportFacts: {
    heading: "King Fahd International Airport at a glance",
    answer:
      "King Fahd International Airport (IATA code DMM) is the main airport of Saudi Arabia's Eastern Province. It lies north-west of Dammam, about 35–45 km by road from the city centre, and is the usual air gateway for Dammam, Al Khobar, Dhahran and Jubail.",
    facts: [
      { k: "Official name", v: "King Fahd International Airport" },
      { k: "IATA code", v: "DMM" },
      { k: "Serves", v: "Dammam and the wider Eastern Province" },
      { k: "Location", v: "North-west of Dammam, about 35–45 km by road from the centre" },
      { k: "By road to Al Khobar", v: "About 55–60 km" },
      { k: "Nearest border crossing", v: "King Fahd Causeway to Bahrain, beyond Al Khobar" },
    ],
    note: "Distances are measured with OpenStreetMap routing from the airport and rounded; your exact address changes them. Check flight times, terminals and airport notices with your airline.",
  },

  arrival: {
    heading: "Your arrival, from landing to pickup",
    intro:
      "If you've never flown into Dammam, the airport can feel a long way from everything, because it is: most destinations are a proper drive away. Knowing how the pickup works before you board takes the guesswork out of the first hour.",
    steps: [
      {
        title: "Before you fly",
        text: "Send your airline, flight number, arrival date and destination when you request a quotation. These are what we plan your pickup around.",
      },
      {
        title: "While you're in the air",
        text: "We track your flight and use its arrival information to coordinate your pickup, so an early or late landing isn't a surprise on our side.",
      },
      {
        title: "After landing",
        text: "Complete passport control or the domestic exit, collect your bags and clear customs as usual. Take your time; nothing about the pickup needs you to rush.",
      },
      {
        title: "Meeting your driver",
        text: "Go to the meeting point confirmed individually with your booking. It's set out with your confirmed quotation rather than assumed, so follow those instructions, not a sign you might expect to see.",
        key: true,
      },
      {
        title: "On the road",
        text: "Your driver takes you to the destination agreed in your confirmed quotation, whether that's a hotel ten minutes from the Corniche or a compound gate in Jubail.",
      },
    ],
    aside:
      "Waiting arrangements aren't advertised as free or fixed. If your flight changes, message us; anything about waiting is set out in your confirmed quotation.",
  },

  region: {
    heading: "Understanding the Eastern Province from DMM",
    answer:
      "The airport sits inland, north-west of the coastal cities. Dammam, Al Khobar and Dhahran form one metropolitan area on the Gulf coast; Jubail is a separate industrial city to the north; Abqaiq lies inland to the south-west; and Bahrain is a neighbouring country reached over the King Fahd Causeway.",
    groups: [
      {
        title: "The metropolitan area",
        text: "Dammam, Al Khobar and Dhahran run into each other along the coast. Travellers often say “Dammam” for all three, but the drive to Al Khobar is noticeably longer than to central Dammam, so name your district.",
      },
      {
        title: "Industrial destinations",
        text: "Jubail and Abqaiq are working towns built around large industrial sites. The town is one destination; a restricted facility is another, and getting inside one is up to your own permission.",
      },
      {
        title: "Cross-border",
        text: "Bahrain is a separate country. A transfer there depends on valid travel documents, your eligibility to enter, and the journey being confirmed in your quotation.",
      },
      {
        title: "Beyond the province",
        text: "Riyadh is about 400 km inland. Some travellers land at DMM and continue to the capital by road rather than taking a connecting flight.",
      },
    ],
    mapCaption:
      "Schematic map: positions follow real coordinates but the coastline is simplified. Figures are rounded road distances from the airport.",
  },

  destinations: [
    {
      id: "dammam",
      name: "Dammam",
      km: "35–45 km",
      kind: "City transfer",
      ll: [50.09, 26.42],
      intro:
        "The provincial capital, with the Corniche, the port and busy commercial streets. Hotels, homes and offices are spread widely, so the district matters more than the city name.",
      who: "Business visitors, families visiting relatives, travellers staying near the Corniche.",
      send: "Hotel name or full address, ideally a map pin.",
      link: { href: "/dammam/dammam-airport-to-hotels", label: "Dammam Airport to hotels" },
      more: { href: "/taxi-service/dammam", label: "Getting around Dammam" },
    },
    {
      id: "khobar",
      name: "Al Khobar",
      km: "55–60 km",
      kind: "City transfer",
      ll: [50.21, 26.28],
      intro:
        "South along the coast, Al Khobar is known for its Corniche, hotels, malls and residential districts, and it's the Saudi end of the King Fahd Causeway.",
      who: "Hotel guests, residents returning home, visitors heading for the Corniche.",
      send: "The hotel, compound or street address in Al Khobar.",
      link: { href: "/routes/dammam-airport-to-khobar", label: "Dammam Airport to Al Khobar" },
      more: { href: "/taxi-service/khobar", label: "Al Khobar taxi service" },
    },
    {
      id: "dhahran",
      name: "Dhahran",
      km: "50–55 km",
      kind: "City transfer",
      ll: [50.11, 26.29],
      intro:
        "Between Dammam and Al Khobar, Dhahran is home to major corporate and institutional campuses and residential areas. Many of them have their own gates and visitor procedures.",
      who: "Business travellers, visiting academics, residents of gated communities.",
      send: "The exact building, campus gate or address, and any visitor instructions you've been given.",
      link: { href: "/routes/dammam-airport-to-dhahran", label: "Dammam Airport to Dhahran" },
    },
    {
      id: "jubail",
      name: "Jubail",
      km: "80–85 km",
      kind: "Intercity transfer",
      ll: [49.63, 27.01],
      intro:
        "North along the coast, Jubail combines an older town with a large industrial city. Many arrivals are heading for a residential compound or company accommodation rather than a hotel.",
      who: "Contractors, project staff, engineers on rotation and their families.",
      send: "Compound or accommodation name, gate details, and a contact if the site has one.",
      link: { href: "/routes/dammam-airport-to-jubail", label: "Dammam Airport to Jubail" },
      more: { href: "/taxi-service/jubail", label: "Jubail taxi service" },
    },
    {
      id: "abqaiq",
      name: "Abqaiq",
      km: "95–105 km",
      kind: "Regional transfer",
      ll: [49.67, 25.93],
      intro:
        "Inland to the south-west, Abqaiq is a small town next to major oil facilities. The town and its accommodation are ordinary destinations; the facilities are not.",
      who: "Project and contractor staff, visitors staying in town accommodation.",
      send: "Whether you're going to the town or a facility; for a facility, the gate or meeting point and your site contact.",
      link: { href: "/routes/dammam-airport-to-abqaiq", label: "Dammam Airport to Abqaiq" },
      caution: "Restricted facilities need your own permission and access arrangements. Access is never guaranteed.",
    },
    {
      id: "bahrain",
      name: "Bahrain",
      km: "about 100 km to Manama",
      kind: "Cross-border transfer",
      ll: [50.59, 26.22],
      intro:
        "Across the King Fahd Causeway from Al Khobar, Bahrain's capital Manama is close enough that some travellers fly into DMM and continue by road.",
      who: "Travellers with onward plans in Bahrain who hold the right documents.",
      send: "Passport nationality, visa or residency status, and your address in Bahrain. Border time is not included in the distance.",
      link: { href: "/routes/dammam-airport-to-bahrain", label: "Dammam Airport to Bahrain" },
      more: { href: "/border-transfers/bahrain-causeway", label: "Crossing the King Fahd Causeway" },
      caution: "Subject to valid travel documents, entry eligibility and confirmation of the journey in your quotation.",
    },
  ] satisfies DmmDestination[],

  compare: {
    heading: "Comparing destinations at a glance",
    columns: ["Destination", "Journey type", "The booking detail that matters"],
    rows: [
      ["Dammam", "City transfer", "Hotel or full address; the district changes the drive"],
      ["Al Khobar", "City transfer", "Hotel, compound or street address"],
      ["Dhahran", "City transfer", "Exact building or gate, plus any visitor instructions"],
      ["Jubail", "Intercity transfer", "Compound or accommodation, gate details, site contact"],
      ["Abqaiq", "Regional transfer", "Town or facility? Facilities need your own permission"],
      ["Bahrain", "Cross-border transfer", "Travel documents and entry eligibility, confirmed before travel"],
      ["Riyadh", "Long-distance transfer", "Full address in Riyadh and a realistic departure time"],
    ],
  },

  routes: {
    heading: "Airport routes and onward connections",
    intro: "Each of these has its own page with the details of that journey.",
    featured: [
      { href: "/routes/dammam-airport-to-khobar", title: "DMM to Al Khobar", text: "The coastal run to the Corniche hotels and the Causeway end of the metro." },
      { href: "/routes/dammam-airport-to-dhahran", title: "DMM to Dhahran", text: "For campus gates, corporate offices and residential communities." },
      { href: "/routes/dammam-airport-to-jubail", title: "DMM to Jubail", text: "North to the industrial city, its compounds and the old town." },
      { href: "/routes/dammam-airport-to-abqaiq", title: "DMM to Abqaiq", text: "Inland to the town, with clear rules for facility access." },
      { href: "/routes/dammam-airport-to-bahrain", title: "DMM to Bahrain", text: "Over the King Fahd Causeway to Manama, documents permitting." },
      { href: "/routes/dammam-airport-to-riyadh", title: "DMM to Riyadh", text: "About 400 km inland to the capital, when the road suits you better than a connection." },
    ],
    more: [
      { href: "/routes/dammam-airport-to-qatif", label: "To Qatif" },
      { href: "/routes/dammam-airport-to-saihat", label: "To Saihat" },
      { href: "/routes/dammam-airport-to-ras-tanura", label: "To Ras Tanura" },
      { href: "/routes/dammam-airport-to-hofuf", label: "To Al Hofuf" },
    ],
    hubs: [
      { href: "/airport-transfers", label: "All airport transfers" },
      { href: "/intercity-transfers", label: "Intercity transfers" },
    ],
  },

  travellers: {
    heading: "Who uses Dammam Airport transfers?",
    groups: [
      { title: "Business travellers", text: "Often landing for a meeting the same day. Give the office address and your landing time, and say if you'd prefer a business-class sedan." },
      { title: "Contractors and project staff", text: "Usually heading to a compound, camp or site gate in Jubail, Abqaiq or Dhahran. Send the gate or meeting point and a site contact; access itself is arranged by you and the site." },
      { title: "Families", text: "Count every suitcase, pushchair and car seat you need. If you'd like a child seat, ask for it; whether one can be provided is confirmed in your quotation." },
      { title: "Visitors to Al Khobar or Dhahran", text: "Both are further from the airport than central Dammam. A hotel name or map pin avoids a scenic tour of the wrong district." },
      { title: "Travellers continuing to Jubail", text: "Jubail is the furthest of the coastal destinations here. If several people arrive on different flights, list each flight; how they're grouped is confirmed in the quotation." },
      { title: "Cross-border travellers", text: "Check your entry eligibility for Bahrain before you book. Border procedures and queues aren't in our control, and the journey is confirmed only once the documents question is settled." },
    ],
  },

  vehicles: {
    heading: "Choosing a suitable vehicle",
    intro:
      "Passenger numbers and luggage decide the vehicle more than taste does. Give accurate counts and the quotation will suggest a suitable class; a particular vehicle is subject to availability.",
    fit: {
      economy: "One or two people with light bags into Dammam.",
      comfort: "A comfortable default for most city transfers.",
      business: "Arriving for meetings in Dhahran or Al Khobar.",
      suv: "Families or small teams with more luggage.",
      van: "Larger families and crews travelling together.",
      minibus: "Groups arriving together for a project or event.",
    } as Record<string, string>,
  },

  checklist: {
    heading: "What to prepare before requesting a quotation",
    flight: ["Airline", "Flight number", "Arrival date", "Scheduled landing time"],
    trip: ["Destination address or map pin", "Number of passengers", "Number and size of bags", "Vehicle preference, if any", "Special requirements, such as a child seat"],
    border: ["Passport nationality", "Visa or residency for Bahrain", "Your address in Bahrain"],
  },

  booking: {
    heading: "How booking works",
    steps: [
      { title: "Send your details", text: "Flight, destination, passengers and luggage, by the form below or WhatsApp." },
      { title: "Receive a quotation", text: "With the suggested vehicle and what the price covers." },
      { title: "Review and confirm", text: "Nothing is booked until you confirm. The confirmed quotation sets the price and the agreed arrangements, including its payment and cancellation terms." },
      { title: "Follow your pickup arrangements", text: "Use the meeting point confirmed individually with your booking." },
    ],
  },

  form: {
    heading: "Request your Dammam Airport quotation",
    text: "Add your flight and destination. We'll reply with a quotation for you to review.",
    dropoffPlaceholder: "Hotel, address, compound or city (e.g. Al Khobar Corniche)",
    messagePlaceholder: "Airline and landing time, gate or compound details, site contact, child seat, or Bahrain travel-document notes.",
  },

  final: {
    heading: "Your Eastern Province Journey Starts at DMM",
    text: "Share your flight, destination, passenger count and luggage, and we'll send a quotation for you to confirm before you travel.",
  },

  method:
    "Facts on this page were reviewed on 24 November 2026. Road distances come from OpenStreetMap routing from the airport and are rounded; no drive times are given because traffic and border queues vary. Pickup arrangements, vehicle and price are set out in your confirmed quotation.",
};

export const DMM_PAGE_FAQS: Faq[] = [
  {
    question: "Where is King Fahd International Airport?",
    answer:
      "North-west of Dammam in Saudi Arabia's Eastern Province, about 35–45 km by road from central Dammam and about 55–60 km from central Al Khobar.",
  },
  {
    question: "How do I arrange a transfer from Dammam Airport?",
    answer:
      "Send your flight details, destination, passengers and luggage through the quote form or WhatsApp. You receive a quotation, and the transfer is booked only when you confirm it.",
  },
  {
    question: "Do you track flights arriving at DMM?",
    answer: "Yes. We track your flight and use its arrival information to coordinate your pickup.",
  },
  {
    question: "Where will I meet my driver at Dammam Airport?",
    answer:
      "At the meeting point confirmed individually with your booking. Follow those instructions rather than expecting a particular spot or sign.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Because your flight is tracked, the pickup is coordinated around the actual arrival. Waiting isn't advertised as free; any waiting arrangements are set out in your confirmed quotation.",
  },
  {
    question: "Can I travel from Dammam Airport to Al Khobar or Dhahran?",
    answer:
      "Yes. Al Khobar is about 55–60 km by road and Dhahran about 50–55 km. Give the hotel, building or gate so the quotation is accurate.",
  },
  {
    question: "Can I arrange a transfer from DMM to Jubail?",
    answer:
      "Yes, about 80–85 km north. For a compound or company accommodation, include the gate details and a site contact.",
  },
  {
    question: "Can I travel from Dammam Airport to Abqaiq?",
    answer:
      "Yes, to the town and its accommodation, about 95–105 km away. Restricted facilities need your own permission and access arrangements, and access is never guaranteed.",
  },
  {
    question: "Can you arrange a transfer from Dammam Airport to Bahrain?",
    answer:
      "A cross-border journey over the King Fahd Causeway can be requested. It depends on valid travel documents, your eligibility to enter Bahrain and the journey being confirmed in your quotation.",
  },
  {
    question: "What details are needed for a quotation?",
    answer:
      "Airline, flight number, arrival date and landing time; destination address; passengers; luggage; any vehicle preference or special requirement; and, for Bahrain, your travel-document situation.",
  },
  {
    question: "Which vehicle should I choose for my luggage and group?",
    answer:
      "Sedans suit up to three passengers with a few bags, an SUV up to five, a van up to nine and a minibus larger groups. Give accurate counts and the quotation will suggest a class.",
  },
  {
    question: "Can I request a transfer to a business or project destination?",
    answer:
      "Yes. Send the address, gate or meeting point and a contact. Whether a project site can be served is confirmed in your quotation, and site access remains your own arrangement.",
  },
];
