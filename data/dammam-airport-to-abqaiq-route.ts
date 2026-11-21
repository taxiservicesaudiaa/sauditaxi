import type { Faq } from "@/data/faqs";

/**
 * /routes/dammam-airport-to-abqaiq — content for its own layout
 * (components/routes/DmmAbqaiqRouteView.tsx).
 *
 * OSRM, checked 21 Nov 2026:
 *   King Fahd International Airport (DMM) → Abqaiq town ≈ 100 km, ≈ 72 min
 *   (≈ 55 km on Route 615, ≈ 26 km on King Fahd Road).
 *   Dammam city → Abqaiq ≈ 82 km — the old page's "80 km / 55 min" matches
 *   the city, not the airport.
 * Owner decisions (report 47): flight tracking — yes; meeting point confirmed
 * individually (no arrivals-hall / pickup-zone promise, no name board); no
 * free-waiting allowance advertised; separate-flight team coordination on
 * request, confirmed in the quotation; equipment subject to dimensions,
 * quantity and vehicle suitability; no 24/7 claim; quotation-based pricing.
 * No affiliation with Saudi Aramco is stated or implied; restricted-site
 * access is never promised. City-origin intent belongs to
 * /routes/dammam-to-abqaiq (linked, not duplicated).
 */

export const DMM_ABQAIQ_PATH = "/routes/dammam-airport-to-abqaiq";
export const DMM_ABQAIQ_REVIEWED = "2026-11-21";

export const DMM_ABQAIQ = {
  hero: {
    kicker: "Airport transfer · DMM → Abqaiq",
    h1: "Private Transfer from Dammam Airport to Abqaiq",
    lead: "Landed at King Fahd International? We'll take it from the terminal to your Abqaiq address.",
    body:
      "Arriving at King Fahd International Airport (DMM) and travelling to Abqaiq? Request a private transfer to your accommodation, to Abqaiq town or to another confirmed destination. Share your flight details, pickup requirements, passenger count and luggage information, so we can review your journey and send a quotation before you confirm.",
    points: [
      "A private transfer for your travelling group",
      "Airport pickup arrangements confirmed before you travel",
      "Drop-off at your Abqaiq destination, subject to access",
      "A quotation before you confirm",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Dammam Airport (DMM) to Abqaiq.",
  },

  quickForm: {
    title: "Your arrival",
    destinations: [
      { label: "Abqaiq town", value: "Abqaiq town" },
      { label: "Accommodation / compound", value: "Accommodation in Abqaiq – " },
      { label: "Facility meeting point", value: "Facility meeting point, Abqaiq – " },
    ],
    note: "Your flight number goes with your pickup details to the next step.",
  },

  board: {
    heading: "Dammam Airport to Abqaiq at a Glance",
    rows: [
      { k: "FROM", v: "King Fahd International Airport (DMM)" },
      { k: "TO", v: "Abqaiq, Eastern Province, Saudi Arabia" },
      { k: "DISTANCE", v: "About 95–105 km by road" },
      { k: "DRIVE", v: "Roughly 1 hr to 1 hr 15 min (estimate)" },
      { k: "SERVICE", v: "Private airport transfer" },
      { k: "FOR", v: "Individual travellers, contractors, engineers, business visitors" },
    ],
    answer:
      "Abqaiq is about 100 km south-west of King Fahd International Airport, with roughly an hour to an hour and a quarter of driving. Your total time from landing is longer, because passport control, baggage reclaim and finding your pickup point all come first. Your exact destination and traffic change the driving time too.",
  },

  arrival: {
    heading: "Arrival and Pickup at King Fahd International Airport",
    intro: "This is how a DMM pickup works when you book with us:",
    steps: [
      { title: "Send your flight details", text: "Give us your flight number and scheduled arrival time when you request the quote. We track your flight." },
      { title: "Clear arrivals and collect bags", text: "Go through passport control (for international flights) and baggage reclaim as normal." },
      { title: "Go to the confirmed meeting point", text: "Follow the pickup and meeting-point instructions we confirm with you before you travel." },
      { title: "Drive to Abqaiq", text: "Continue straight to your confirmed destination in Abqaiq." },
    ],
    delay: "Because we track your flight, a delay or schedule change is picked up and your pickup is reconfirmed with you. Waiting arrangements are set out in your quotation.",
  },

  destination: {
    heading: "Travelling to Abqaiq Town or an Industrial Facility?",
    intro:
      "Abqaiq is a small town in the Eastern Province that grew up around a major Saudi Aramco oil-processing centre. For a transfer, the difference that matters is whether you're going into town or to a controlled site.",
    town: {
      title: "Abqaiq town, hotels and accommodation",
      text: "Homes, hotels, accommodation and business addresses in and around the town. Give us the name and a map pin, and we'll take you to the door.",
      send: ["Exact address or accommodation name", "A map pin, if you have one"],
    },
    facility: {
      title: "Industrial facilities and project sites",
      text: "Restricted sites need prior permission, which is arranged by your employer or sponsor, not by us. We drop off at the gate or approved meeting point you confirm, and we don't guarantee access to any facility.",
      send: ["Facility or compound name", "Gate or approved meeting point", "Any access requirements you've been given"],
    },
    disclaimer: "Saudi Private Transfers is an independent transfer service and is not affiliated with Saudi Aramco.",
  },

  road: {
    heading: "The Road Journey from Dammam Airport to Abqaiq",
    paragraphs: [
      "From the airport, the road heads south along King Fahd Road past the western side of Dammam, then follows Route 615 for the longer run to Abqaiq. Allow about 95 to 105 km, and roughly an hour to an hour and a quarter of driving.",
      "Those are estimates. Rush-hour traffic around Dammam, and exactly where in Abqaiq you're going, make the biggest difference. Some sites sit outside the town itself.",
      "Not flying in? If you're starting from an address in the city, our [Dammam to Abqaiq transfer](/routes/dammam-to-abqaiq) is the right page, and it's a shorter drive.",
    ],
    compare: [
      { from: "From King Fahd International Airport", km: 100 },
      { from: "From central Dammam", km: 82 },
    ],
  },

  teams: {
    heading: "Airport Transfers for Contractors and Business Travellers",
    paragraphs: [
      "Most people on this route are travelling for work: engineers on a rotation, contractors starting a project, or visitors with meetings in Abqaiq. Book as an individual, or send one request for a team.",
      "For a team, send each person's flight. The passenger count and the amount of luggage or equipment decide which vehicle you need. If people land on different flights, you can ask us to coordinate the pickups; how that works is confirmed in your quotation.",
    ],
    manifest: {
      title: "Example: what to send for a team",
      columns: ["Traveller", "Flight", "Lands", "Bags / equipment"],
      rows: [
        ["Traveller 1", "Flight number", "Date and time", "2 bags"],
        ["Traveller 2", "Flight number", "Date and time", "1 bag + tool case (size)"],
        ["Traveller 3", "Flight number", "Date and time", "2 bags"],
      ],
    },
  },

  vehicles: {
    heading: "Choosing a Vehicle for Your Passengers and Equipment",
    intro: "Capacities below are per vehicle. Each bag icon is one standard suitcase.",
    bags: { economy: 2, comfort: 3, business: 3, suv: 4, van: 8, minibus: 0 } as Record<string, number>,
    equipment:
      "Carrying tools or equipment? Tell us how many items there are and their approximate dimensions. Whether they fit, and in which vehicle, is confirmed in your quotation; we can't promise every item can travel.",
  },

  ready: {
    heading: "What to Have Ready Before Your Airport Pickup",
    items: [
      "Flight number",
      "Arrival date and scheduled time",
      "Passenger count",
      "Luggage count",
      "Exact Abqaiq destination",
      "Facility or gate details, where relevant",
      "Special equipment or accessibility needs",
    ],
  },

  booking: {
    heading: "How booking works",
    steps: ["Share your journey details", "Receive and review your quotation", "Confirm the pickup arrangements", "Travel to your confirmed destination"],
  },

  returnTrip: {
    heading: "Return Transfer from Abqaiq to Dammam Airport",
    text: "Flying out again? Request the return on our [Abqaiq to Dammam Airport transfer](/routes/abqaiq-to-dammam-airport) page. Send your exact pickup address in Abqaiq and your departure flight details, and you'll receive a quotation for the trip.",
  },

  form: {
    heading: "Request your DMM to Abqaiq quote",
    text: "Share your flight, destination, passenger and luggage details, and you'll receive a quotation to review before you confirm.",
    messagePlaceholder: "Share your Abqaiq destination, facility or gate name, flight details, passenger count and luggage or equipment requirements.",
  },

  related: {
    heading: "More from King Fahd International Airport",
    hub: { href: "/airport-transfer/dammam-airport", label: "King Fahd International Airport transfers", text: "Everything about DMM pickups and drop-offs" },
    routes: [
      // hideMeta: these records' distance/duration figures don't match OSRM
      // (report 46 A1); the cards show no figures until the records are fixed.
      { slug: "dammam-airport-to-khobar", text: "To Al Khobar", hideMeta: true },
      { slug: "dammam-airport-to-dhahran", text: "To Dhahran", hideMeta: true },
      { slug: "dammam-airport-to-jubail", text: "North to Jubail", hideMeta: true },
      { slug: "dammam-airport-to-riyadh", text: "Inland to the capital" },
    ],
    city: { href: "/taxi-service/dammam", label: "Dammam Taxi", text: "Local rides around Dammam" },
  },

  faqHeading: "DMM to Abqaiq: questions and answers",

  method: {
    heading: "How we checked this page",
    text: "We measured the road distance and driving time on OpenStreetMap-based routing from King Fahd International Airport to Abqaiq town, and from central Dammam for comparison. Pickup arrangements, waiting and access are confirmed with each booking, not promised here.",
  },

  finalCta: {
    heading: "Flying into DMM for Abqaiq?",
    text: "Send your flight and destination, and we'll come back with a quotation.",
    primary: "Request a Quote",
    whatsapp: "WhatsApp Us",
  },
};

export const DMM_ABQAIQ_FAQS: Faq[] = [
  {
    question: "How far is Abqaiq from King Fahd International Airport?",
    answer: "About 95 to 105 km by road, depending on your exact destination in or around Abqaiq. From central Dammam it is shorter, at about 80 km.",
  },
  {
    question: "How long does the transfer from Dammam Airport to Abqaiq take?",
    answer:
      "Roughly an hour to an hour and a quarter of driving. Your total time from landing is longer, because passport control, baggage reclaim and reaching the pickup point come first. Traffic and your exact destination also affect it.",
  },
  {
    question: "Can I book a transfer from DMM to an industrial facility near Abqaiq?",
    answer:
      "You can request a drop-off at a facility's gate or approved meeting point. Access to restricted sites needs prior permission arranged by your employer or sponsor, and we do not guarantee access to any facility.",
  },
  {
    question: "Can the driver drop me at my accommodation in Abqaiq?",
    answer: "Yes. Give us the accommodation name and address, or a map pin. If it is inside a compound with controlled entry, tell us the gate.",
  },
  {
    question: "What flight details should I provide when booking?",
    answer: "Your flight number, arrival date and scheduled arrival time. We track your flight, and if it changes, your pickup is reconfirmed with you.",
  },
  {
    question: "Can you arrange transfers for a team arriving on different flights?",
    answer:
      "Yes, you can request it. Send each traveller's flight details, and how the separate arrivals are coordinated is confirmed in your quotation.",
  },
  {
    question: "Can I travel with work equipment and extra luggage?",
    answer:
      "Tell us the number of items and their approximate dimensions. Whether they fit, and in which vehicle, is confirmed in your quotation; not every item can be carried.",
  },
  {
    question: "Where will the driver meet me at Dammam Airport?",
    answer: "The meeting point is confirmed individually when you book, and you will receive the pickup instructions before you travel.",
  },
  {
    question: "Can I book a return transfer from Abqaiq to Dammam Airport?",
    answer: "Yes. Request it on our Abqaiq to Dammam Airport page with your pickup address and departure flight details, and you will receive a quotation.",
  },
  {
    question: "How do I receive and confirm my transfer quotation?",
    answer:
      "Send your details through the quote form or WhatsApp. We reply with a quotation covering the vehicle, price and pickup arrangements, and nothing is booked until you confirm it.",
  },
];
