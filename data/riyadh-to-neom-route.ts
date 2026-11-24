import type { Faq } from "@/data/faqs";

/**
 * /routes/riyadh-to-neom — content for its own editorial layout
 * (components/routes/RiyadhNeomRouteView.tsx).
 *
 * OSRM (OpenStreetMap routing), checked 23 Nov 2026, city centre / airport
 * reference points:
 *   Riyadh → Hail 614 km / 5.9 h · Hail → Tabuk 673 km / 8.0 h
 *   Riyadh → Tabuk via Hail 1,287 km / 13.9 h (Highway 65 for most of the way
 *   north) · Tabuk → NEOM Bay Airport area (Sharma) 174 km / 2.2 h
 *   Riyadh → NEOM Bay Airport area 1,521 km / 15.9 h · Hail → NEOM Bay area 844 km / 10.1 h
 * The old page's "~1,150 km / 11 h 30" understated the trip. Removed as
 * unverified or wrong: drop-off at Sindalah (an island — not reachable by
 * road), fixed/all-in price, "tracked service", "no toll roads anywhere",
 * "longest route we offer", coordinated multi-vehicle moves, "well-maintained
 * highway for the whole length".
 * Images: desert-highway.jpg (genuine photo, location not identified — never
 * captioned as NEOM); riyadh-skyline.jpg (genuine, KAFD). No NEOM or Tabuk
 * photographs exist in the project — see report 50.
 */

export const NEOM_PATH = "/routes/riyadh-to-neom";
export const NEOM_REVIEWED = "2026-11-23";

export const NEOM = {
  hero: {
    kicker: "Long-distance private transfer · Riyadh → NEOM",
    h1: "Private Transfer from Riyadh to NEOM",
    intro:
      "Leaving Riyadh for NEOM isn't an ordinary city transfer. It's a journey of well over a thousand kilometres to the far north-west of Saudi Arabia, and the distance, the landscape and your exact destination all shape how it should be planned. Whether you're going for work, a project assignment or a family reason that favours the road, a private transfer gives your group one vehicle from start to finish. Tell us exactly where you're going, when, and who and what is coming, and you'll receive a quotation to review before you confirm anything.",
    image: { src: "/images/journey/desert-highway.jpg", alt: "A two-lane desert highway curving through red sand dunes under a hazy orange sky" },
    facts: [
      { label: "From", value: "Riyadh" },
      { label: "To", value: "NEOM, Tabuk Province" },
      { label: "By road", value: "≈1,450–1,550 km" },
      { label: "Driving", value: "≈15–16 hours" },
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Riyadh to NEOM.",
    ctaPrimary: "Request a Quotation",
    ctaSecondary: "Explore the journey",
  },

  chapters: [
    { id: "glance", label: "At a glance" },
    { id: "riyadh", label: "Leaving Riyadh" },
    { id: "road", label: "The road north-west" },
    { id: "neom", label: "Where in NEOM?" },
    { id: "road-or-air", label: "Road or air?" },
    { id: "planning", label: "Planning the trip" },
    { id: "vehicles", label: "Your vehicle" },
    { id: "checklist", label: "Checklist" },
    { id: "request", label: "Request a quote" },
    { id: "faq", label: "Questions" },
  ],

  glance: {
    heading: "Riyadh to NEOM at a glance",
    answer:
      "A Riyadh to NEOM transfer is a private, long-distance road journey from Saudi Arabia's capital to the NEOM development region in Tabuk Province, in the country's north-west. By road it is roughly 1,450–1,550 km, with about 15–16 hours of driving before any stops, so most people treat it as a two-day trip. The exact figures depend on where in NEOM you are going.",
    rows: [
      { k: "Origin", v: "Riyadh, Saudi Arabia" },
      { k: "Destination", v: "NEOM region, Tabuk Province, north-west Saudi Arabia" },
      { k: "Journey type", v: "Long-distance private transfer" },
      { k: "Road distance", v: "About 1,450–1,550 km, depending on your NEOM destination" },
      { k: "Driving time", v: "About 15–16 hours, before stops and any overnight break" },
      { k: "Gateway city", v: "Tabuk, about 1,300–1,350 km from Riyadh" },
    ],
    note: "Figures are OpenStreetMap-based routing estimates from central Riyadh to the NEOM Bay Airport area on the Gulf of Aqaba coast, checked 23 November 2026. Other NEOM locations will differ.",
  },

  riyadh: {
    heading: "The journey begins in Riyadh",
    paragraphs: [
      "Most Riyadh to NEOM trips start early, from a hotel in Olaya, an office near the King Abdullah Financial District or a family home on the edge of the city. Before the car moves, the important decisions have usually been made: how many people are going, how much is coming with them, and whether the journey will be done in one long push or split over two days.",
      "Within an hour the capital is behind you and the road heads north. If the trip is for a project assignment, the boot is often full of equipment as well as suitcases, and that is one of the main reasons people choose to drive rather than fly. For local trips around the capital before you set off, see our [Riyadh taxi service](/taxi-service/riyadh).",
    ],
    image: { src: "/images/journey/riyadh-skyline.jpg", alt: "Towers of the King Abdullah Financial District in Riyadh beneath low cloud", caption: "Riyadh, King Abdullah Financial District" },
  },

  road: {
    heading: "Understanding the road north-west",
    answer:
      "The usual road runs north on Highway 65 through Qassim and Hail, then west across the north of the country to Tabuk, and on to the NEOM area near the Gulf of Aqaba coast.",
    stops: [
      { place: "Riyadh", km: 0, note: "Departure" },
      { place: "Buraidah (Qassim)", km: 345, note: "A natural first break" },
      { place: "Hail", km: 615, note: "A common place to break the journey" },
      { place: "Tabuk", km: 1290, note: "Gateway city · another common break" },
      { place: "NEOM coast (NEOM Bay Airport area)", km: 1460, note: "One reference point; your destination may differ" },
    ],
    paragraphs: [
      "The figures in the route panel are rounded and cumulative. Traffic, weather, roadworks and the number and length of your breaks all add time, and your exact pickup and drop-off points change the distance.",
      "If you only need to reach Tabuk, our [Riyadh to Tabuk transfer](/routes/riyadh-to-tabuk) covers that shorter journey. For the final stretch from the gateway city, see [Tabuk to NEOM](/routes/tabuk-to-neom).",
    ],
    splits: {
      title: "Two common ways to split the journey",
      options: [
        { title: "Overnight in Hail", text: "About 615 km (roughly 6 hours) on day one, then about 840 km (roughly 10 hours) on day two. Our [Riyadh to Hail transfer](/routes/riyadh-to-hail) page describes the first leg." },
        { title: "Overnight in Tabuk", text: "A long first day of about 1,300 km (roughly 14 hours), then a short final leg of around 175 km (about 2 hours) to the coast." },
      ],
      note: "Accommodation isn't included in a transfer. If you want an overnight stop, ask for it in your request; how it works and what it costs is confirmed in your quotation.",
    },
  },

  neom: {
    heading: "Where in NEOM are you travelling?",
    answer:
      "NEOM is a large development region in Tabuk Province, not a single address. Its locations are spread along the Gulf of Aqaba and Red Sea coasts and into the mountains, so the drop-off point you give us changes the distance, the time and the vehicle you need.",
    paragraphs: [
      "Some NEOM locations are ordinary towns, hotels or offices reached by public roads. Others are construction or project sites with controlled access, where any drop-off point has to be agreed with the site itself. Some, such as the island of Sindalah, can't be reached by road at all, and need separate arrangements that a road transfer doesn't include.",
    ],
    table: {
      caption: "What to send us for different kinds of NEOM destination",
      columns: ["Destination type", "What to send us", "Good to know"],
      rows: [
        ["Hotel or accommodation", "Name and location or map pin", "Drop-off at the entrance"],
        ["Project or work site", "Project name, gate or meeting point, contact on site", "Site access needs your own permission; it is never guaranteed by us"],
        ["Town or general area", "Exact address or map pin", "Distances are quoted on your exact point"],
        ["Island or non-road location", "The mainland point where your onward transport starts", "A road transfer stops at the mainland point"],
      ],
    },
    guide: "For background on the region itself, read our [NEOM travel guide](/blog/neom-travel-guide-2026).",
  },

  roadOrAir: {
    heading: "Is driving from Riyadh to NEOM right for you?",
    answer:
      "For many individual travellers, flying is the more practical choice. Check current flights to Tabuk and the NEOM area directly with the airlines, as schedules change. The road makes more sense in the situations below.",
    columns: ["", "Private road transfer", "Flying, plus a local transfer"],
    rows: [
      ["Travel time", "Usually a two-day trip, or around 15–16 hours of driving in one go", "Much shorter in the air; add airport time and the drive from the airport"],
      ["Door to door", "Yes, from your Riyadh address to your NEOM drop-off point", "Needs a separate transfer from the airport"],
      ["Luggage and equipment", "Limited by vehicle space rather than airline allowances", "Airline baggage rules apply"],
      ["Groups", "Everyone in one vehicle, one booking", "A seat and ticket for each traveller"],
      ["Flexibility", "Your departure time and breaks; ask about an overnight stop", "Fixed flight times"],
      ["Destination access", "Ends at a road-accessible point you confirm", "Same; airport transfers also end at road-accessible points"],
    ],
    links: "Flying instead? For the drive onward from the airport, see our [NEOM Bay Airport](/airport-transfer/neom-bay-airport) and [Tabuk Regional Airport](/airport-transfer/tabuk-airport) transfer pages.",
  },

  planning: {
    heading: "Planning a long-distance journey",
    cards: [
      { icon: "sunrise", title: "Departure time", text: "An early start makes the most of daylight, especially if you plan to cover the whole distance in one day. Your departure time is agreed in your quotation." },
      { icon: "coffee", title: "Breaks", text: "Ask for the breaks your group needs: prayer, meals, fuel and stretching. On a journey this long they add up, so build them into your plan." },
      { icon: "users", title: "Passenger comfort", text: "More space matters over two days. Tell us about children, older passengers or anyone who needs extra rest." },
      { icon: "luggage", title: "Luggage and equipment", text: "Count every bag and describe any equipment with rough dimensions so the vehicle can be confirmed." },
      { icon: "cloud", title: "Weather and roads", text: "Heat, dust, rain and roadworks can all slow the journey. Times on this page are estimates, not promises." },
      { icon: "moon", title: "Overnight stops", text: "Overnight accommodation isn't included automatically. Ask about it, and it will be discussed and confirmed in your quotation." },
    ],
  },

  vehicles: {
    heading: "Choosing your vehicle",
    intro: "On a two-day journey, comfort and luggage space count for more than on a city ride. These are the vehicle classes you can request; the vehicle is confirmed in your quotation.",
    fit: {
      economy: "Not ideal for this distance, but possible for one person travelling light.",
      comfort: "A comfortable minimum for up to three people.",
      business: "The quietest sedan for business travellers.",
      suv: "Our usual suggestion for families or small teams with bags.",
      van: "Groups of up to nine, or extra luggage; equipment is confirmed in your quotation.",
      minibus: "Ten to eighteen people travelling together.",
    } as Record<string, string>,
  },

  checklist: {
    heading: "Your Riyadh to NEOM preparation checklist",
    intro: "Tick these off before you request your quote. The more precise you are, the more accurate the quotation.",
    items: [
      "Exact NEOM destination, project or accommodation name",
      "Pickup address in Riyadh",
      "Travel date",
      "Preferred departure time",
      "Number of passengers",
      "Number and size of bags",
      "Work equipment, with rough dimensions",
      "Site access or permission requirements",
      "Overnight-stop preference, if any",
      "Special needs: child seats, mobility, health",
    ],
  },

  request: {
    heading: "How to request your transfer",
    steps: [
      "Share your pickup and NEOM destination",
      "Add your date, passengers and luggage",
      "Explain any special requirements",
      "Receive a quotation",
      "Review what the quotation covers",
      "Confirm according to the quotation terms",
    ],
    formHeading: "Request your Riyadh to NEOM quotation",
    formText: "Nothing is booked until you confirm the quotation, and asking costs nothing.",
    messagePlaceholder: "Exact NEOM destination or project, overnight-stop preference, equipment, access requirements or special needs.",
  },

  related: {
    heading: "Related routes and travel guides",
    links: [
      { href: "/routes/neom-to-riyadh", label: "NEOM to Riyadh", text: "The return journey" },
      { href: "/routes/riyadh-to-tabuk", label: "Riyadh to Tabuk", text: "As far as the gateway city" },
      { href: "/routes/tabuk-to-neom", label: "Tabuk to NEOM", text: "The final stretch to the coast" },
      { href: "/routes/riyadh-to-hail", label: "Riyadh to Hail", text: "First leg, if you stop in Hail" },
      { href: "/taxi-service/tabuk", label: "Tabuk Taxi", text: "Local rides in Tabuk" },
      { href: "/intercity-transfers", label: "Intercity transfers", text: "Long-distance travel across the Kingdom" },
      { href: "/blog/neom-travel-guide-2026", label: "NEOM travel guide", text: "Background on the region" },
    ],
  },

  method: {
    heading: "How we checked this page",
    text: "Distances and driving times come from OpenStreetMap-based routing between central Riyadh, Hail, Tabuk and the NEOM Bay Airport area. Descriptions of NEOM are kept to publicly documented facts. Prices, vehicles, access and overnight arrangements are confirmed in your quotation, not promised here.",
  },

  finalCta: {
    heading: "Planning the road to NEOM?",
    text: "Send your exact destination, date and group details. You'll get a quotation to review, with no obligation to book.",
  },
};

export const NEOM_FAQS: Faq[] = [
  { question: "How far is NEOM from Riyadh?", answer: "By road, roughly 1,450–1,550 km, depending on where in NEOM you are going. The gateway city of Tabuk is about 1,300–1,350 km from Riyadh." },
  { question: "How long does a private road transfer from Riyadh to NEOM take?", answer: "About 15–16 hours of driving before stops. With breaks, most travellers plan it as a two-day journey with an overnight stop." },
  { question: "Does the distance depend on my NEOM destination?", answer: "Yes. NEOM is a large region, not one address, so your exact drop-off point changes both the distance and the driving time. Your quotation is based on that point." },
  { question: "Is driving better than flying to NEOM?", answer: "For many individual travellers, flying is more practical. Driving suits groups, people with a lot of luggage or equipment, and anyone who prefers one vehicle door to door." },
  { question: "Can a private transfer reach a project site?", answer: "You can ask for one. Send the project name, the meeting point the site has given you and a contact on site; whether that point can be served is confirmed in your quotation, and access is never guaranteed." },
  { question: "Are restricted facilities accessible?", answer: "Access to restricted or controlled sites needs your own permission, arranged with the site. We never guarantee access, and locations that can't be reached by road, such as islands, need separate arrangements." },
  { question: "Can I arrange an overnight stop?", answer: "You can ask for one, commonly in Hail or Tabuk. Accommodation isn't included automatically; how the overnight stop works and what it costs is confirmed in your quotation." },
  { question: "What vehicle should I choose for Riyadh to NEOM?", answer: "Families and small teams usually choose an SUV, groups of up to nine a van, and 10 to 18 people a minibus. For one to three people, a comfort or business sedan is the minimum we'd suggest for this distance." },
  { question: "Can I travel with work equipment?", answer: "Describe the equipment and its rough dimensions in your request. Whether it fits, and in which vehicle, is confirmed in your quotation." },
  { question: "What information is needed for a quotation?", answer: "Your Riyadh pickup address, exact NEOM destination, travel date and time, passengers, luggage, any equipment, access requirements and whether you want an overnight stop." },
  { question: "Is a return transfer from NEOM to Riyadh available?", answer: "Yes. Request it on our NEOM to Riyadh page, or include your return date in the same request and both journeys will be quoted." },
];
