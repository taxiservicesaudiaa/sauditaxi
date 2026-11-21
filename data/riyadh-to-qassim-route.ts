import type { Faq } from "@/data/faqs";

/**
 * /routes/riyadh-to-qassim — content for its own layout
 * (components/routes/RiyadhQassimRouteView.tsx).
 *
 * Qassim is a region (Al-Qassim Province), not one city, so figures are given
 * per destination. OSRM, checked 21 Nov 2026:
 *   central Riyadh → central Buraidah ≈ 346 km, ≈ 3.3 h (northern Riyadh
 *   pickup ≈ 335 km; southern ≈ 361 km); ≈ 331 km of it on Route 65.
 *   central Riyadh → Unaizah ≈ 350 km. Buraidah ↔ Unaizah ≈ 30 km.
 * Removed as unverified: "among the largest livestock markets in the world",
 * camel-market trading hours, "regularly serve farm visits", fixed/all-in
 * price, no tolls anywhere, 24/7, no deposit, driver familiarity claims.
 * Stays distinct from /routes/qassim-to-riyadh and /routes/riyadh-to-hail.
 */

export const RIYADH_QASSIM_PATH = "/routes/riyadh-to-qassim";
export const RIYADH_QASSIM_REVIEWED = "2026-11-21";

export const RIYADH_QASSIM = {
  hero: {
    kicker: "Riyadh to the Qassim region",
    h1: "Private Transfer from Riyadh to Qassim",
    lead: "Buraidah, Unaizah, a family farm or a hotel: tell us the exact address and we'll take you to the door.",
    body:
      "Travelling from Riyadh to Qassim? You might be heading to Buraidah or Unaizah, visiting family, or going to a business or farm address. A private transfer takes you directly to your destination, wherever in the region it is. Share your exact pickup location, destination, travel date, passenger count and luggage, and we'll help you choose a suitable vehicle. You'll receive a quotation to review before you confirm the journey.",
    points: [
      "A private vehicle for your travelling group",
      "Transfers to confirmed destinations across Qassim",
      "A quotation based on your exact pickup and drop-off",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Riyadh to Qassim.",
  },

  quickForm: {
    title: "Where in Qassim are you going?",
    chips: [
      { label: "Buraidah", value: "Buraidah" },
      { label: "Unaizah", value: "Unaizah" },
      { label: "A farm", value: "Farm in Qassim – " },
      { label: "A hotel", value: "Hotel in Qassim – " },
      { label: "Business address", value: "Business address in Qassim – " },
    ],
    placeholder: "Buraidah, Unaizah, hotel, farm or full address in Qassim",
  },

  glance: {
    heading: "Riyadh to Qassim at a glance",
    answer:
      "Qassim is a region north-west of Riyadh, and its main city is Buraidah. By road, Buraidah is about 345 km from central Riyadh, with roughly 3¼ to 3½ hours of driving, almost all of it on Highway 65. Unaizah is about 30 km south of Buraidah and similar in distance from Riyadh. Farms and other addresses vary, so every quotation is based on your exact drop-off.",
    destinations: [
      { name: "Buraidah", role: "Regional capital", distance: "about 345 km", time: "roughly 3¼–3½ hours" },
      { name: "Unaizah", role: "Historic town, ~30 km from Buraidah", distance: "about 350 km", time: "roughly 3½ hours" },
      { name: "Farms & other addresses", role: "Confirmed individually", distance: "varies", time: "quoted on your address" },
    ],
    facts: [
      { label: "Origin", value: "Riyadh" },
      { label: "Destination", value: "Qassim Region (Al-Qassim Province)" },
      { label: "Main city", value: "Buraidah" },
      { label: "Main road", value: "Highway 65, northbound" },
      { label: "Journey type", value: "Private regional transfer" },
    ],
    note: "Driving times are estimates between city centres, before any stops. A pickup in northern Riyadh is about 10 km shorter; one in the south is about 15 km longer.",
  },

  route: {
    heading: "Riyadh to Qassim Distance and Travel Time",
    paragraphs: [
      "Leaving Riyadh, the road heads north-west on Highway 65, which carries you most of the way. Buraidah is about 345 km from the city centre, and the drive usually takes 3¼ to 3½ hours if you don't stop. Unaizah sits roughly 30 km south of Buraidah, and the total from Riyadh comes out at a similar figure.",
      "Treat those as estimates, not promises. The biggest variables are where you start (traffic getting out of Riyadh can be slow at busy times), the exact drop-off address, and whether you take a break. A farm well outside town can add a fair distance, which is why we always ask for a map pin.",
      "Qassim is also the first part of the longer road north. If your trip actually ends in Hail, our [Riyadh to Hail private transfer](/routes/riyadh-to-hail) covers the full journey.",
    ],
  },

  destinations: {
    heading: "Where Can You Travel in Qassim?",
    intro: "We take you to the address you give us, not to a general point in the region. These are the destinations people ask for most:",
    items: [
      { icon: "city", title: "Buraidah", text: "Homes, hotels and businesses in the regional capital. Share the district or a map pin." },
      { icon: "landmark", title: "Unaizah", text: "Addresses across Unaizah, including the old quarter, about 30 km from Buraidah." },
      { icon: "sprout", title: "Farms", text: "Farm addresses across the region, confirmed individually. Send a map pin and mention any unpaved access road." },
      { icon: "hotel", title: "Hotels and homes", text: "Any hotel or residential address in the region, given in full when you request your quote." },
      { icon: "briefcase", title: "Business addresses", text: "Offices, factories and agricultural businesses. Tell us the gate or reception point." },
      { icon: "pin", title: "Somewhere else?", text: "Other towns and locations in Qassim can be requested and are confirmed in your quotation." },
    ],
    footnote: "We confirm every drop-off in your quotation. We don't promise coverage of every location until we've seen the address. Once you're in the region, our [Buraidah taxi service](/taxi-service/buraidah) handles local trips.",
  },

  expect: {
    heading: "What to expect on the journey",
    rows: [
      { label: "Pickup", title: "Collected in Riyadh", text: "Your driver meets you at your home, hotel or office at the agreed time." },
      { label: "On the road", title: "North-west on Highway 65", text: "A long highway run out of the capital, with Qassim's farmland and centre-pivot fields appearing as you get closer." },
      { label: "Breaks", title: "Stops you agreed", text: "Ask for a prayer, coffee or fuel stop when you request the quote. Many people manage the drive in one go; others prefer a break." },
      { label: "Arrival", title: "At your exact address", text: "Drop-off at the address or map pin you gave us, whether that's in Buraidah, in Unaizah or at a farm gate." },
    ],
  },

  who: {
    heading: "Who should consider a private transfer?",
    items: [
      { q: "Visiting family?", text: "One vehicle from your Riyadh door to a relative's house in Buraidah, Unaizah or out on a farm, with the whole family and the gifts in one place." },
      { q: "Travelling for business?", text: "Arrive at a meeting with a farm, factory or agricultural company without driving the highway yourself." },
      { q: "Seeing Buraidah or Unaizah?", text: "Go straight to your hotel and spend your time in the region instead of arranging transport on arrival." },
      { q: "Going to a farm or a rural address?", text: "Give us a map pin and we'll quote for that exact place, not a nearby town." },
    ],
  },

  region: {
    heading: "Qassim: the region you're travelling to",
    intro: "Some context for first-time visitors. None of these visits is included in a transfer unless you ask for it and it appears in your quotation.",
    features: [
      {
        place: "Across the region",
        title: "Farmland and dates",
        text: "Qassim is one of Saudi Arabia's main farming regions. On the approach you'll see green centre-pivot fields of wheat and fodder, and the region is known for its dates. Buraidah's date market is at its busiest around the harvest season.",
      },
      {
        place: "Buraidah",
        title: "The camel market",
        text: "Buraidah's camel market is one of the best-known in the Kingdom. Trading days and hours vary, so check locally before you plan a visit around it. If you'd like to be dropped there, give us the location when you request a quote.",
      },
      {
        place: "Unaizah",
        title: "Heritage and old houses",
        text: "Unaizah has a historic old quarter of traditional mud-brick buildings and heritage houses such as Al Bassam Heritage House. The Lebanese-American writer Ameen Rihani once called the town the “Paris of Najd”.",
      },
    ],
  },

  vehicles: {
    heading: "Match the vehicle to your group",
    intro: "Start from your group size. Each row shows the vehicle class we'd usually suggest, with its passenger and bag capacity.",
    groups: [
      { who: "1–2 people, light bags", ids: ["economy", "comfort"] },
      { who: "Up to 3 people, or business travel", ids: ["comfort", "business"] },
      { who: "A family of up to 5", ids: ["suv"] },
      { who: "Up to 9 people or lots of luggage", ids: ["van"] },
      { who: "10 to 18 people together", ids: ["minibus"] },
    ],
    footnote: "Models are examples and bag counts are a guide for standard suitcases. For farm addresses with rough access roads, mention it so we can confirm a suitable vehicle in your quotation.",
  },

  planning: {
    heading: "Planning your journey",
    items: [
      { icon: "clock", title: "Timing", text: "Choose your departure time and we'll confirm it in your quotation. Leaving early avoids the worst of Riyadh's traffic and the midday heat in summer." },
      { icon: "coffee", title: "Rest and extra stops", text: "Ask for a rest stop, or an extra stop on the way such as collecting a relative, when you request the quote. Any extra stop is confirmed in your quotation." },
      { icon: "accessibility", title: "Special requirements", text: "Child seats, wheelchairs, extra luggage or an onward leg to Hail: mention it up front so we can confirm it in your quotation." },
    ],
  },

  returnTrip: {
    heading: "Heading back from Qassim to Riyadh?",
    text: "The return runs the same Highway 65 south. Book it on our [Qassim to Riyadh private transfer](/routes/qassim-to-riyadh) page, or put your return date in this request and we'll quote both directions together.",
  },

  form: {
    heading: "Request your Riyadh to Qassim quote",
    text: "Share your exact pickup and drop-off locations, travel date, passengers and luggage requirements to receive a quotation. Review it before confirming your journey.",
    note: "Please enter the exact drop-off (for example “Unaizah, Al Bassam district” or a farm name with a map link) rather than just “Qassim”. The flight-number field only appears for airport trips.",
  },

  related: {
    heading: "Related routes",
    routes: [
      { slug: "qassim-to-riyadh", text: "The return journey" },
      { slug: "riyadh-to-hail", text: "Continue north past Qassim" },
      { slug: "riyadh-to-alula", text: "The long road north-west" },
      { slug: "riyadh-to-dammam", text: "East to the Gulf coast" },
      { slug: "riyadh-to-jeddah", text: "West to the Red Sea" },
    ],
    cities: [
      { href: "/taxi-service/riyadh", label: "Riyadh Taxi", text: "Rides around the capital" },
      { href: "/taxi-service/buraidah", label: "Buraidah Taxi", text: "Local trips once you arrive" },
    ],
  },

  faqHeading: "Riyadh to Qassim questions",

  method: {
    heading: "How we checked this page",
    text: "We measured road distances and driving times on OpenStreetMap-based routing from central Riyadh to central Buraidah and Unaizah, with northern and southern Riyadh pickups for comparison. The routing confirms Highway 65 carries most of the journey. Prices, vehicles and coverage are confirmed in your quotation, not promised here.",
  },

  finalCta: {
    heading: "Tell us where in Qassim you're going",
    text: "Send the exact address, your date and who's travelling. We'll suggest a vehicle and send a quotation you can review first.",
    primary: "Request a Quote",
    whatsapp: "WhatsApp Us",
  },
};

export const RIYADH_QASSIM_FAQS: Faq[] = [
  {
    question: "How far is Qassim from Riyadh?",
    answer:
      "It depends on where in Qassim you are going. Buraidah, the main city, is about 345 km from central Riyadh by road, and Unaizah is about 350 km. Farms and other addresses vary, so your quotation is based on your exact drop-off.",
  },
  {
    question: "How long does the drive from Riyadh to Buraidah take?",
    answer:
      "Roughly 3¼ to 3½ hours of driving, almost all on Highway 65. That is an estimate before stops; traffic leaving Riyadh and any breaks you ask for add time.",
  },
  {
    question: "Is Buraidah part of Qassim?",
    answer: "Yes. Buraidah is the capital of the Qassim Region (Al-Qassim Province). Unaizah is the region's other main town.",
  },
  {
    question: "Can you drop me in Unaizah?",
    answer: "Yes. Give us the full address in Unaizah when you request a quote. It is about 30 km from Buraidah and a similar distance from Riyadh.",
  },
  {
    question: "Can I request a farm pickup or drop-off?",
    answer:
      "You can request one. Send the farm's map pin and mention any unpaved access road. Farm addresses are confirmed individually in your quotation.",
  },
  {
    question: "Can you take me to Buraidah camel market?",
    answer:
      "You can ask for the camel market as your drop-off point; give us the location when you request a quote. A visit or waiting time at the market is not included unless it is set out in your quotation.",
  },
  {
    question: "What is the best time to visit the camel market?",
    answer:
      "Trading days and hours vary, so check locally before you plan your trip around a visit. Once you know when you want to be there, tell us the time and we will plan the departure from Riyadh.",
  },
  {
    question: "Are rest stops available?",
    answer: "Yes. Ask for a rest stop when you request your quote and it will be planned into the journey.",
  },
  {
    question: "Can I continue from Qassim to Hail?",
    answer:
      "You can request an onward leg; mention it with your itinerary and it will be quoted individually. If Hail is your final destination, our Riyadh to Hail transfer covers the whole trip.",
  },
  {
    question: "Is a return transfer from Qassim to Riyadh available?",
    answer: "Yes. Book it on our Qassim to Riyadh page, or include your return date in the same request and we will quote both journeys.",
  },
  {
    question: "What vehicle should I choose?",
    answer:
      "One or two people with light bags can take an economy or comfort sedan. Families of up to five usually choose an SUV (about 4 bags), groups of up to nine a van (about 8 bags), and 10 to 18 people a minibus. Mention a rough farm access road so we can confirm a suitable vehicle.",
  },
  {
    question: "What details are needed to request a quote?",
    answer:
      "Your pickup address in Riyadh, the exact drop-off in Qassim (town, district or map pin), the date and time, the number of passengers and bags, and any extra stops or special requirements.",
  },
];
