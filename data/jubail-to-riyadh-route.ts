import type { Faq } from "@/data/faqs";

/**
 * /routes/jubail-to-riyadh — content for its own layout
 * (components/routes/JubailRiyadhRouteView.tsx).
 *
 * OSRM, checked 21 Nov 2026:
 *   central Jubail → central Riyadh ≈ 458 km, ≈ 4.6 h; Jubail Industrial City
 *   → Riyadh ≈ 468 km; Jubail → King Khalid International Airport ≈ 455 km.
 *   ≈ 354 km on Highway 40 (Dammam–Riyadh expressway), reached by a link road.
 * The old page's "coastal Route 5 then Highway 95" is wrong: Route 5 is the
 * Red Sea coastal road and Highway 95 runs north to Al Khafji.
 * Removed as unverified: flight tracking / automatic pickup adjustment,
 * "drivers familiar with gate layouts", coordinated multi-vehicle crew moves,
 * "every trip is tracked", shift-change traffic claims, "one of the world's
 * largest industrial cities", fixed/all-in price, 24/7, no deposit.
 */

export const JUBAIL_RIYADH_PATH = "/routes/jubail-to-riyadh";
export const JUBAIL_RIYADH_REVIEWED = "2026-11-21";

export const JUBAIL_RIYADH = {
  hero: {
    kicker: "Eastern Province → the capital",
    h1: "Private Transfer from Jubail to Riyadh",
    lead: "From your compound gate in Jubail to your door, or your terminal, in Riyadh.",
    body:
      "Travelling from Jubail to Riyadh? You might be leaving from a residential compound, a hotel, an office or somewhere else in Jubail. A private transfer lets your group travel directly to your chosen destination in the capital. Share your pickup details, travel date, passenger count and luggage, and tell us if you're connecting to a flight at King Khalid International Airport. We'll review your journey and send a quotation for you to consider before you confirm.",
    points: [
      "A private vehicle for your travelling group",
      "Pickup from a confirmed Jubail location",
      "Drop-off at your chosen Riyadh destination",
      "A quotation before you confirm",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Jubail to Riyadh.",
  },

  tabs: {
    city: { label: "Riyadh address", dropoff: "Riyadh", placeholder: "Home, hotel, office or district in Riyadh" },
    airport: {
      label: "King Khalid Airport",
      dropoff: "King Khalid International Airport (RUH), Riyadh",
      hint: "Add your airline and flight departure time on the next step, and we'll plan the pickup time around it.",
    },
  },

  glance: {
    heading: "Jubail to Riyadh at a glance",
    answer:
      "Riyadh is about 450–470 km south-west of Jubail by road, most of it on Highway 40, the Dammam–Riyadh expressway. The drive usually takes around 4½ hours before stops. A private transfer collects you from a confirmed point in Jubail, whether a compound gate, a hotel or an office, and takes you to your address or to King Khalid International Airport.",
    spec: [
      { icon: "start", label: "Origin", value: "Jubail, Saudi Arabia" },
      { icon: "end", label: "Destination", value: "Riyadh, Saudi Arabia" },
      { icon: "road", label: "Road distance", value: "About 450–470 km" },
      { icon: "clock", label: "Driving time", value: "Around 4½ hours (estimate)" },
      { icon: "highway", label: "Main road", value: "Highway 40 (Dammam–Riyadh)" },
      { icon: "car", label: "Journey type", value: "Private intercity transfer" },
    ],
    note: "Estimates are for normal traffic without stops. A pickup inside Jubail Industrial City is around 10 km further than the city centre, and your Riyadh drop-off changes the figure too.",
  },

  pickup: {
    heading: "Pickup from Jubail Industrial City and Residential Areas",
    paragraphs: [
      "Jubail is really two places: the older city on the coast, and Jubail Industrial City to the north and west, one of the Kingdom's main industrial centres, with its plants, offices and residential compounds. Where we collect you depends on which part you're in. For short rides around town before you set off, our [Jubail taxi service](/taxi-service/jubail) can help.",
      "Many compounds and industrial sites control who can drive in. We won't assume we can reach your front door. Tell us the compound or site name and the gate you'll use, and the meeting point is agreed in your quotation.",
    ],
    types: [
      { icon: "home", title: "Residential compounds", text: "At the compound gate or inside, if the compound allows visiting vehicles." },
      { icon: "hotel", title: "Hotels", text: "At the hotel entrance in Jubail city or the industrial city." },
      { icon: "office", title: "Offices", text: "At reception, or at the visitor gate for secured sites." },
      { icon: "factory", title: "Industrial-area meeting points", text: "At a gate or meeting point you confirm with us in advance." },
    ],
    access: "Send the exact gate name or a map pin. Access inside any site depends on that site's rules, not on us.",
  },

  route: {
    heading: "Jubail to Riyadh Distance and Travel Time",
    paragraphs: [
      "From Jubail, the road heads south-west to join Highway 40, the expressway that runs between Dammam and Riyadh. Depending on traffic and where you're collected, drivers reach it either through the Dammam area or by an inland link road. After that it's a long, straight run across the desert to the capital.",
      "Allow about 450 to 470 km and around 4½ hours of driving. Treat that as an estimate, not a promise: traffic getting out of the Jubail area at busy times, congestion entering Riyadh, roadworks and the breaks you ask for all affect the day.",
      "If you're starting in Dammam or Khobar instead, our [Dammam to Riyadh transfer](/routes/dammam-to-riyadh) is the shorter trip you need.",
    ],
    segments: [
      { label: "Link road from Jubail", km: 85, tone: "light" },
      { label: "Highway 40", km: 354, tone: "dark" },
      { label: "Into Riyadh", km: 20, tone: "brass" },
    ],
  },

  expect: {
    heading: "What to expect on the journey",
    steps: [
      { title: "Collected at your confirmed point", text: "Your driver meets you at the compound gate, hotel or office we agreed, at the time in your quotation." },
      { title: "On to Highway 40", text: "Once you're through the Jubail area, the expressway carries you most of the way to Riyadh." },
      { title: "A break if you want one", text: "Ask for a rest stop when you request the quote, for prayer, coffee or simply to stretch." },
      { title: "Dropped where you need to be", text: "At your home, hotel or office in Riyadh, or at King Khalid International Airport." },
    ],
  },

  airport: {
    heading: "Private Transfer from Jubail to King Khalid International Airport",
    intro:
      "If you're flying out of Riyadh, you can ask for King Khalid International Airport (RUH) as your drop-off. Airport drop-offs are subject to availability and confirmed individually in your quotation. Work backwards from your flight:",
    timeline: [
      { label: "Your flight", text: "Departure time from your ticket" },
      { label: "Airline check-in", text: "Your airline's recommended arrival time" },
      { label: "The drive", text: "Around 4½ hours, plus a margin for traffic and stops" },
      { label: "Pickup in Jubail", text: "Confirmed in your quotation" },
    ],
    send: {
      title: "Please send us",
      items: ["Airline and flight number", "Flight departure time", "Your pickup point in Jubail", "Number of passengers and bags"],
    },
    caveat:
      "We can't guarantee an arrival time at the airport, so leave a comfortable margin. For arrivals and other airport services, see our [Riyadh airport transfers](/airport-transfer/riyadh-airport) page.",
  },

  groups: {
    heading: "Families and work groups travelling together",
    intro:
      "A family moving between compounds, or colleagues travelling to the same Riyadh office, can share one vehicle and one booking. Pick the vehicle from your headcount and bags. Each dot below is a passenger seat.",
    multi: "Need more seats than one vehicle has? Ask about more than one vehicle in your request; whether that's possible is confirmed in your quotation.",
    footnote: "Models are examples and bag counts are a guide for standard suitcases.",
    fit: {
      economy: "One or two travellers with light bags.",
      comfort: "Up to three people with 3 bags.",
      business: "Business travel for up to three.",
      suv: "Families of up to five with 4 bags.",
      van: "Up to 9 people and about 8 bags.",
      minibus: "10 to 18 people together.",
    } as Record<string, string>,
    seats: { economy: 3, comfort: 3, business: 3, suv: 5, van: 9, minibus: 18 } as Record<string, number>,
  },

  planning: {
    heading: "Journey planning",
    before: {
      title: "Tell us before you travel",
      items: [
        "Compound or site name, and the gate you'll use",
        "Your preferred departure time",
        "Any rest stop you'd like on the way",
        "Extra luggage, or work equipment with rough sizes",
        "Flight details, if you're going to the airport",
      ],
    },
    day: {
      title: "On the day",
      items: [
        "Be at the agreed gate or entrance at pickup time",
        "Keep your ID handy for site gates and highway checkpoints",
        "Allow for traffic: times on this page are estimates",
        "Message us if your plans change",
      ],
    },
  },

  dropoff: {
    heading: "Where we drop you off in Riyadh",
    items: ["Homes and apartments", "Hotels", "Offices", "Business districts such as Olaya or KAFD", "King Khalid International Airport (confirmed individually)", "Other agreed locations"],
    note: "Every drop-off is confirmed in your quotation. For getting around the capital afterwards, see our [Riyadh taxi service](/taxi-service/riyadh).",
  },

  returnTrip: {
    heading: "Coming back to Jubail?",
    text: "Book the opposite direction on our [Riyadh to Jubail private transfer](/routes/riyadh-to-jubail) page, or put your return date in this request and we'll quote both journeys together.",
  },

  form: {
    heading: "Request your Jubail to Riyadh quote",
    text: "Share your pickup and drop-off details, travel date, passenger count and luggage requirements to receive a quotation. Review the quotation before confirming your journey.",
    messagePlaceholder: "Share your compound or gate name, Riyadh destination, flight details or any special pickup instructions.",
  },

  related: {
    routes: [
      { href: "/routes/riyadh-to-jubail", label: "Riyadh to Jubail", text: "The return journey" },
      { href: "/routes/jubail-to-dammam", label: "Jubail to Dammam", text: "Down the coast to Dammam" },
      { href: "/routes/dammam-to-riyadh", label: "Dammam to Riyadh", text: "If you start in Dammam" },
      { href: "/airport-transfer/riyadh-airport", label: "Riyadh Airport Transfers", text: "Arrivals and departures at RUH" },
    ],
    cities: [
      { href: "/taxi-service/jubail", label: "Jubail Taxi", text: "Local rides in Jubail" },
      { href: "/taxi-service/riyadh", label: "Riyadh Taxi", text: "Getting around the capital" },
      { href: "/taxi-service/dammam", label: "Dammam Taxi", text: "Rides around Dammam" },
    ],
  },

  faqHeading: "Jubail to Riyadh questions",
  faqGroups: [
    { title: "Distance and pickup", range: [0, 4] },
    { title: "Airport and timing", range: [4, 6] },
    { title: "Groups, vehicles and booking", range: [6, 12] },
  ] as { title: string; range: [number, number] }[],

  method: {
    heading: "How we checked this page",
    text: "We measured road distances and driving times on OpenStreetMap-based routing from central Jubail and Jubail Industrial City to central Riyadh and to King Khalid International Airport. The routing shows Highway 40 carries most of the journey. Prices, access arrangements and airport drop-offs are confirmed in your quotation, not promised here.",
  },

  finalCta: {
    quote: { title: "Request a quote", text: "Pickup point, Riyadh destination, date and headcount. We'll reply with a quotation." },
    whatsapp: { title: "Prefer WhatsApp?", text: "Send your compound or gate name and travel date, and we'll take it from there." },
  },
};

export const JUBAIL_RIYADH_FAQS: Faq[] = [
  {
    question: "How far is Jubail from Riyadh?",
    answer:
      "About 450 to 470 km by road, depending on where in Jubail you start and where in Riyadh you finish. Most of the drive is on Highway 40, the Dammam–Riyadh expressway.",
  },
  {
    question: "How long does a private transfer from Jubail to Riyadh take?",
    answer:
      "Usually around 4½ hours of driving. That is an estimate: traffic leaving the Jubail area, congestion entering Riyadh and any rest stops can add time.",
  },
  {
    question: "Can you collect me from Jubail Industrial City?",
    answer:
      "Yes, from a confirmed meeting point. Tell us the site or compound name and the gate you will use, and the pickup point is agreed in your quotation. Access inside a site depends on its own rules.",
  },
  {
    question: "Can the driver collect me from a residential compound or a specific gate?",
    answer:
      "You can request a specific gate. Many compounds control vehicle access, so the driver may meet you at the gate rather than inside. Share the gate name or a map pin when you request a quote.",
  },
  {
    question: "Can I book a transfer to King Khalid International Airport?",
    answer:
      "You can request King Khalid International Airport as your drop-off. Airport drop-offs are subject to availability and confirmed individually in your quotation. Send your airline, flight number and departure time.",
  },
  {
    question: "How much time should I allow before my flight?",
    answer:
      "Work backwards from your airline's recommended check-in time. Add around 4½ hours for the drive, then a margin for traffic and any stops. We cannot guarantee an airport arrival time, so leave enough buffer.",
  },
  {
    question: "Can a family or work group travel together?",
    answer:
      "Yes. A van takes up to 9 passengers and a minibus 10 to 18. If your group needs more than one vehicle, ask in your request, and whether that is possible will be confirmed in your quotation.",
  },
  {
    question: "Which vehicle should I choose?",
    answer:
      "One to three people usually choose a comfort or business sedan. An SUV suits families of up to five with about 4 bags, and a van suits up to 9 people with about 8 bags. Tell us your headcount and luggage and we will confirm the vehicle.",
  },
  {
    question: "Can I request a rest stop?",
    answer: "Yes. Ask for a rest stop when you request your quote and it will be planned into the journey.",
  },
  {
    question: "How is the quotation calculated?",
    answer:
      "It is based on your pickup and drop-off points, travel date, passenger count, luggage and the vehicle you need. You review the quotation before confirming, and nothing is booked until you agree.",
  },
  {
    question: "Is a return transfer from Riyadh to Jubail available?",
    answer: "Yes. Book it on our Riyadh to Jubail page, or include your return date in the same request and we will quote both journeys.",
  },
  {
    question: "Can I transport work equipment or tools?",
    answer:
      "Describe the items and their rough dimensions in your request. Whether they can travel with you, and in which vehicle, is confirmed in your quotation.",
  },
];
