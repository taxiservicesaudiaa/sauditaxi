import type { Faq } from "@/data/faqs";
import type { LongRouteContent } from "@/components/routes/LongDistanceRouteView";

/**
 * /routes/riyadh-to-hail — page-specific content for the long-distance layout
 * (components/routes/LongDistanceRouteView.tsx).
 *
 * Figures were checked on 21 Nov 2026 with OpenStreetMap-based routing (OSRM),
 * city centre to city centre:
 *   Riyadh → Hail ≈ 614 km, ≈ 6 h driving; ≈ 570 km of it on Highway 65
 *   (Qassim Expressway, then Qassim–Hail Expressway).
 *   Riyadh → Buraidah ≈ 346 km · Buraidah → Hail ≈ 269 km.
 * Shown as ranges. No toll, price, fixed-price, deposit, tracking, 24/7 or
 * driver-knowledge claims: those are not confirmed and are left to the
 * quotation. Written to stay distinct from /routes/hail-to-riyadh (this page
 * owns the outbound journey and the Hail destination information).
 */

export const RIYADH_HAIL_PATH = "/routes/riyadh-to-hail";
export const RIYADH_HAIL_REVIEWED = "2026-11-21";

export const RIYADH_HAIL: LongRouteContent = {
  path: RIYADH_HAIL_PATH,
  reviewed: RIYADH_HAIL_REVIEWED,

  hero: {
    eyebrow: "Long-distance private transfer",
    h1: "Private Transfer from Riyadh to Hail",
    lead: "North from the capital to the city between two mountain ranges.",
    body:
      "Travelling from Riyadh to Hail takes you north out of Saudi Arabia's capital, through the farmland of Qassim, towards a region known for its mountains and its long history. You might be visiting family, heading to a meeting or finally seeing Hail for yourself. Either way, a private transfer lets your group travel together in one vehicle. Tell us where to collect you, where you're going, when, and how many people and bags are coming, and we'll suggest a suitable vehicle and send a quotation before you confirm anything.",
    points: [
      "A private vehicle just for your travelling group",
      "Vehicle options matched to your passengers and luggage",
      "A quotation to review before you confirm the journey",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Riyadh to Hail.",
  },

  panel: {
    pickup: "Riyadh",
    dropoff: "Hail",
    eyebrow: "Riyadh to Hail",
    title: "Request your transfer to Hail",
    dropoffPlaceholder: "Your address or hotel in Hail",
  },

  quickAnswer:
    "Hail is about 600–640 km north-west of Riyadh by road, almost all of it on Highway 65 through Qassim, with roughly 6 to 6½ hours of driving before stops. A private transfer takes your group in one vehicle from your Riyadh address to your door in Hail, with the breaks you choose along the way.",

  glance: {
    heading: "Riyadh to Hail at a glance",
    caption: "Riyadh to Hail journey facts",
    rows: [
      { label: "Origin", value: "Riyadh", note: "Homes, hotels and offices across the city" },
      { label: "Destination", value: "Hail", note: "Capital of Hail Province, northern Saudi Arabia" },
      { label: "Road distance", value: "About 600–640 km", note: "Depends on your exact pickup and drop-off" },
      { label: "Driving time", value: "Roughly 6–6½ hours", note: "Time at the wheel, before any stops" },
      { label: "Route", value: "Highway 65 via Qassim", note: "Through the Buraidah area, about halfway" },
      { label: "Journey type", value: "Long-distance private transfer", note: "One vehicle, door to door" },
      { label: "Price", value: "Set out in your quotation", note: "Review it before you confirm" },
    ],
    legsHeading: "The road in two legs",
    stops: ["Riyadh", "Buraidah, Qassim", "Hail"],
    legs: [
      { distance: "about 345 km", time: "around 3½ hours" },
      { distance: "about 270 km", time: "around 2½–3 hours" },
    ],
    stopNote: { index: 1, text: "a natural halfway break" },
    legsNote:
      "Leg times are typical driving times between city centres. Traffic leaving Riyadh, the weather and your exact addresses all move them a little.",
  },

  journey: {
    heading: "Riyadh to Hail Distance and Travel Time",
    paragraphs: [
      "By road, Hail is about 600 to 640 km from Riyadh. Without stops the drive takes roughly 6 to 6½ hours. Add a meal, prayer times and a fuel stop and it becomes a longer day, how much longer depending on the breaks your group wants.",
      "Almost the entire journey is on Highway 65. You leave the capital on the Qassim Expressway, reach the Buraidah area about halfway, then continue on the Qassim–Hail Expressway for the last 270 km or so. If Buraidah is as far as you need to go, our [Riyadh to Qassim transfer](/routes/riyadh-to-qassim) covers that shorter trip.",
      "Your own figure depends on where you start and finish. A pickup in northern Riyadh takes a little off the distance; a southern pickup or a destination outside Hail city adds to it. Busy traffic leaving Riyadh, dust or rain can also slow the day, which is why every time on this page is an estimate rather than a promise.",
      "If arriving quickly matters more than anything else, Hail has its own airport, and a flight will be faster than the road. Our [Hail airport transfers](/airport-transfer/hail-airport) can meet you when you land.",
    ],
    aside: {
      heading: "What to expect on the journey",
      steps: [
        { title: "Leaving Riyadh", text: "Your driver collects you from your home, hotel or office. At busy times, getting clear of the city traffic is the slowest part of the day." },
        { title: "North on Highway 65", text: "Then it's open highway heading north-west across the Najd plateau towards Qassim." },
        { title: "A break in Qassim", text: "Around halfway, the Buraidah area is a natural place to eat, pray or stretch. Stop more often if your group needs to." },
        { title: "Into Hail", text: "The rocky outline of Jabal Aja and Jabal Salma tells you you're close. Your driver takes you to the address you gave us." },
      ],
    },
  },

  suits: {
    heading: "Who should consider a private transfer?",
    intro: "A private car isn't always the cheapest or the fastest option. It's the most convenient when these things matter to you.",
    items: [
      {
        title: "Families travelling together",
        text: "Parents, children and grandparents ride in one vehicle from your Riyadh door to a relative's home in Hail, stopping when the youngest or oldest passengers need a break.",
      },
      {
        title: "Groups with luggage",
        text: "Everyone and everything goes in one van or minibus, so there's no splitting people across cars or worrying about baggage limits.",
      },
      {
        title: "Business travellers",
        text: "A quiet car means you can work, take calls or rest on the way and arrive at your meeting without changing transport.",
      },
      {
        title: "Visitors exploring Hail",
        text: "Arrive straight at your hotel, ready to see the mountains and heritage sites. Some visitors carry on towards AlUla, and our [Riyadh to AlUla road trip guide](/blog/riyadh-to-alula-road-trip-guide) explains how a stop in Hail fits into that journey.",
      },
    ],
  },

  vehicles: {
    heading: "Vehicle options for the drive north",
    intro:
      "Six hours is long enough for legroom and boot space to matter. These are the vehicle classes you can request; we'll suggest one based on your group.",
    fit: {
      economy: "Workable for one or two travellers with light bags, though many prefer more room for six hours.",
      comfort: "A comfortable sedan for up to three people, with space for 3 bags.",
      business: "The quietest sedan cabin, often chosen by people who want to work or rest on the way.",
      suv: "A good fit for families of up to five who want extra space for the long stretch.",
      van: "For bigger families, small groups or a lot of luggage: up to 9 passengers and about 8 bags.",
      minibus: "For 10 to 18 people travelling together, such as extended families or organised groups.",
    },
    footnote:
      "Models are examples and bag counts are a guide for standard suitcases. Tell us your real bag count, plus any child-seat or wheelchair needs, and we'll confirm the vehicle in your quotation.",
  },

  stops: {
    heading: "Rest stops and journey planning",
    cards: [
      {
        icon: "clock",
        title: "Choosing your departure time",
        text: "You choose the time and we confirm it in your quotation. An early-morning start gets you to Hail in daylight, but afternoon and evening departures can be requested too.",
      },
      {
        icon: "car",
        title: "Breaks on the way",
        text: "Ask for the stops your group needs, whether for prayer, food or simply stretching your legs. If older passengers or small children are travelling, tell us in advance so the timing allows for it.",
      },
      {
        icon: "moon",
        title: "Night travel and splitting the trip",
        text: "Overnight departures can be requested and are confirmed in your quotation. If you'd rather not do the whole drive in one day, ask about stopping overnight in Qassim; you arrange the hotel.",
      },
      {
        icon: "user",
        title: "The driver and the road",
        text: "On a drive of 600 km or more the driver's rest matters as much as yours, so ask us how the driver arrangement works for your date. Dust and rain can slow the highway, which is why we treat every time as an estimate.",
      },
    ],
    checklist: {
      heading: "What to have ready for your quote",
      items: [
        "Your pickup address or hotel in Riyadh",
        "The full destination address in Hail, or a map pin",
        "Travel date and preferred departure time",
        "Number of passengers, including children and older travellers",
        "Number and size of bags",
        "Any stops, child seats or wheelchair needs",
        "Onward plans, for example towards AlUla",
      ],
    },
  },

  destination: {
    heading: "Arriving in Hail",
    paragraphs: [
      "Hail is the capital of Hail Province in northern Saudi Arabia. It sits between two mountain ranges, Jabal Aja and Jabal Salma, which run through centuries of Arabic poetry and Bedouin storytelling. The city was once the seat of the Al Rashid emirate, and historic buildings from that era still stand.",
      "Most transfers end at a home, hotel or office in the city, so give us the full address or a map pin when you ask for a quote. For short trips once you've arrived, our [Hail taxi service](/taxi-service/hail) covers rides around the city.",
    ],
    highlights: [
      { icon: "mountain", title: "Jabal Aja and Jabal Salma", text: "The two ranges that frame Hail and give the region its distinctive skyline." },
      { icon: "landmark", title: "Rock art of the Hail region", text: "Jubbah and Shuwaymis are listed together by UNESCO as a World Heritage Site for their ancient rock art." },
      { icon: "landmark", title: "A'arif Fort and Al Qishlah Palace", text: "Two of the best-known historic buildings in the city." },
    ],
    returnTrip: {
      heading: "Travelling from Hail back to Riyadh?",
      text: "The return journey runs the same Highway 65 in reverse. You can book it on our [Hail to Riyadh private transfer](/routes/hail-to-riyadh) page, or mention your return date in this request and we'll quote both directions together.",
    },
  },

  pickup: {
    heading: "Pickup and drop-off locations",
    from: {
      title: "Pickup in Riyadh",
      items: ["Homes and apartments across Riyadh", "Hotels and serviced apartments", "Offices and business addresses"],
      note: "Pickups at King Khalid International Airport can be requested and are confirmed individually in your quotation. For getting around the capital before you leave, see our [Riyadh taxi service](/taxi-service/riyadh).",
    },
    to: {
      title: "Drop-off in Hail",
      items: ["Homes and family addresses in Hail", "Hotels in the city", "Business addresses"],
      note: "Destinations outside the city, such as Jubbah, and onward trips can be requested and are quoted individually.",
    },
  },

  steps: {
    heading: "What happens after you request a quote",
    items: [
      { title: "Send your journey details", text: "Pickup, destination, date, time, passengers and luggage, through the form or WhatsApp." },
      { title: "We suggest a vehicle", text: "We look at your group and bags and suggest a vehicle that fits. You can ask for a different one." },
      { title: "Review your quotation", text: "It's based on your pickup, destination, travel date, passengers, luggage and vehicle. Nothing is booked until you agree." },
      { title: "Travel", text: "Your driver collects you at the agreed time and takes you door to door, with the breaks you planned." },
    ],
  },

  formSection: {
    heading: "Prefer to send everything at once?",
    text: "Use the full form to add your luggage, preferred vehicle and notes, such as a stop in Qassim or plans to continue from Hail. The flight number field is optional; leave it empty unless you're connecting with a flight.",
  },

  quoteForm: { serviceType: "Riyadh to Hail transfer", route: "Riyadh to Hail", pickup: "Riyadh", dropoff: "Hail" },

  related: {
    heading: "More routes from Riyadh and around Hail",
    intro: "Coming back, stopping short in Qassim or carrying on beyond Hail? These are the journeys that connect with this one.",
    routes: [
      { slug: "hail-to-riyadh", text: "The return journey south" },
      { slug: "riyadh-to-qassim", text: "If Buraidah is far enough" },
      { slug: "riyadh-to-alula", text: "Further north-west to AlUla" },
      { slug: "hail-to-madinah", text: "Onward from Hail to Madinah" },
      { slug: "riyadh-to-jeddah", text: "West to the Red Sea coast" },
      { slug: "riyadh-to-dammam", text: "East to the Gulf coast" },
    ],
    cities: [
      { href: "/taxi-service/riyadh", label: "Riyadh Taxi", text: "Rides around the capital" },
      { href: "/taxi-service/hail", label: "Hail Taxi", text: "Getting around once you arrive" },
    ],
  },

  guides: {
    heading: "Guides for planning this trip",
    slugs: ["riyadh-to-alula-road-trip-guide", "saudi-arabia-intercity-taxi-services-guide"],
  },

  faqHeading: "Riyadh to Hail Transfer Questions",

  method: {
    heading: "How we checked this page",
    text: "We measured the road distance and driving time on OpenStreetMap-based routing between central Riyadh and central Hail. The same routing confirms that the journey follows Highway 65 through Qassim. Prices, vehicles and timings are never promised on this page; they're confirmed in your quotation.",
  },

  finalCta: {
    heading: "Planning your trip to Hail?",
    text: "Send us the date, your addresses and who's travelling. We'll suggest the right vehicle and send a quotation you can review before you confirm.",
    primary: "Request a Quote",
    whatsapp: "Ask on WhatsApp",
  },
};

export const RIYADH_HAIL_FAQS: Faq[] = [
  {
    question: "How far is Hail from Riyadh?",
    answer:
      "About 600 to 640 km by road, depending on where in Riyadh you start and where in Hail you finish. Almost the whole way is on Highway 65, through the Qassim region.",
  },
  {
    question: "How long does the Riyadh to Hail drive take?",
    answer:
      "Roughly 6 to 6½ hours of driving. Breaks for prayer, meals and fuel come on top of that, so allow extra time for the stops your group wants.",
  },
  {
    question: "Is the journey suitable for families?",
    answer:
      "Yes. The whole family travels in one vehicle from your door in Riyadh to your address in Hail, and you can plan stops around the children and older relatives. Mention if you need a child seat so we can confirm it in your quotation.",
  },
  {
    question: "What vehicle should I choose for Riyadh to Hail?",
    answer:
      "For up to three people with a few bags, a comfort or business sedan works well. Families of up to five usually choose an SUV, which takes about 4 bags. Larger groups choose a van (up to 9 passengers and about 8 bags) or a minibus (10 to 18 passengers). Tell us your bag count and we will confirm the right size.",
  },
  {
    question: "Can I request rest stops?",
    answer:
      "Yes. Ask for the breaks you need when you request a quote. The Qassim area, roughly halfway, is a natural point for a longer break.",
  },
  {
    question: "Is overnight travel available?",
    answer:
      "You can request an evening or overnight departure, and the timing is confirmed in your quotation. Some travellers prefer an early-morning start so they arrive in Hail in daylight.",
  },
  {
    question: "What is Hail known for?",
    answer:
      "Hail is known for the Aja and Salma mountain ranges and its history as the seat of the Al Rashid emirate. It also has historic sites such as A'arif Fort and Al Qishlah Palace, and the ancient rock art at Jubbah and Shuwaymis, which UNESCO lists as a World Heritage Site.",
  },
  {
    question: "Can I continue from Hail towards AlUla?",
    answer:
      "You can ask for it. Mention your full itinerary when you request a quote, and onward journeys are quoted individually. If you are planning the whole trip from Riyadh, see our Riyadh to AlUla transfer page.",
  },
  {
    question: "Is a return transfer from Hail to Riyadh available?",
    answer:
      "Yes. Book it on our Hail to Riyadh page, or include your return date in the same request and we will quote both journeys.",
  },
  {
    question: "What information is needed to request a quote?",
    answer:
      "Your pickup address in Riyadh, your destination in Hail, the date and preferred time, the number of passengers and bags, and anything extra such as stops or a child seat.",
  },
  {
    question: "Can elderly passengers travel comfortably?",
    answer:
      "A private car lets older passengers rest and stop when they need to, without changing vehicles. For six hours or more on the road, a roomier vehicle such as an SUV helps. Tell us about any mobility needs when you request a quote.",
  },
  {
    question: "Which pickup and drop-off locations are supported?",
    answer:
      "Pickups are from homes, hotels and offices in Riyadh, and pickups at King Khalid International Airport are confirmed individually. Drop-offs are at homes, hotels and businesses in Hail. Destinations outside the city are quoted individually.",
  },
];

/** Extra data used only by the Riyadh to Hail layout (RiyadhHailRouteView). */
export const RIYADH_HAIL_DESIGN = {
  stats: [
    { value: "600–640", unit: "km", label: "Road distance" },
    { value: "6–6½", unit: "hours", label: "Driving, before stops" },
    { value: "65", unit: "highway", label: "Almost the whole way" },
    { value: "Qassim", unit: "", label: "About halfway" },
  ],
  /** Proportional positions on the kilometre strip (city-centre routing). */
  markers: [
    { label: "Riyadh", km: 0, note: "Pickup" },
    { label: "Buraidah", km: 345, note: "Qassim · halfway break" },
    { label: "Hail", km: 615, note: "Drop-off" },
  ],
  totalKm: 615,
  faqIntro:
    "Straight answers to what people ask before booking the drive north. If yours isn't here, send it with your quote request.",
};
