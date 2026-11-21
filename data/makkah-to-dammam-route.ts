import type { Faq } from "@/data/faqs";
import type { LongRouteContent } from "@/components/routes/LongDistanceRouteView";

/**
 * /routes/makkah-to-dammam — page-specific content for the dedicated
 * long-distance layout (components/routes/MakkahDammamRouteView.tsx).
 *
 * Copy may contain [anchor](/path) or [anchor](#id) links, rendered as real
 * <a href> elements in the sentence they belong to (Google link guidance:
 * descriptive anchors, words around each link, no chains of links).
 *
 * Figures: road distance and driving time were checked on 21 Nov 2026 with
 * OpenStreetMap-based routing (OSRM), city centre to city centre:
 *   Makkah (Haram) → Dammam ≈ 1,280 km · Makkah → Riyadh ≈ 870 km ·
 *   Riyadh → Dammam ≈ 410 km · Makkah → Khobar ≈ 1,290 km.
 * They're shown as ranges ("about", "roughly"), never as exact promises.
 * Nothing here states a price, a fee, a fixed-price policy, a driver-rest
 * rule or a guaranteed departure time: those are confirmed per quotation.
 */

export const MAKKAH_DAMMAM_PATH = "/routes/makkah-to-dammam";
export const MAKKAH_DAMMAM_REVIEWED = "2026-11-21";

export const MAKKAH_DAMMAM: LongRouteContent = {
  path: MAKKAH_DAMMAM_PATH,
  reviewed: MAKKAH_DAMMAM_REVIEWED,
  hero: {
    eyebrow: "Long-distance private transfer",
    h1: "Private Transfer from Makkah to Dammam",
    lead: "One car and one driver, from the Red Sea side of the Kingdom to the Gulf.",
    body:
      "Makkah to Dammam is about as far as you can drive without leaving Saudi Arabia: roughly 1,250 to 1,300 km, most of a day on the road. Most people fly, and we'll tell you so. Some would rather not. Think of a family with more suitcases than an airline allows, grandparents who find airports harder than a long car ride, or a group that wants to stay together. For them, we quote a private car from a Makkah hotel or home to an address in Dammam, Khobar or Dhahran.",
    points: [
      "Door to door, from your Makkah hotel or home to your Eastern Province address",
      "Vehicles from a three-seat sedan to an 18-seat minibus, matched to your passengers and bags",
      "Stops for prayer, meals and rest planned around your group, or a night in Riyadh if you ask",
    ],
    whatsappMessage: "Hello! I'd like a quote for a private transfer from Makkah to Dammam.",
  },

  panel: {
    pickup: "Makkah",
    dropoff: "Dammam",
    eyebrow: "Makkah to Dammam",
    title: "Request your long-distance transfer",
    dropoffPlaceholder: "Your address in Dammam, Khobar or Dhahran",
  },

  /** Answer-first summary (the passage an assistant or snippet would quote). */
  quickAnswer:
    "Makkah to Dammam is about 1,250–1,300 km by road, normally through Riyadh, with roughly 12–13 hours of driving before stops. Flying from Jeddah is much faster. A private transfer is the better fit when you're a family or group, carry a lot of luggage, or would simply rather stay on the ground.",

  glance: {
    heading: "Makkah to Dammam at a glance",
    caption: "Makkah to Dammam journey facts",
    rows: [
      { label: "Road distance", value: "About 1,250–1,300 km", note: "Depends on your exact pickup and drop-off" },
      { label: "Driving time", value: "Roughly 12–13 hours", note: "Time at the wheel, before any stops" },
      { label: "Stops", value: "Added on top", note: "Prayer, meals and fuel, agreed with you" },
      { label: "Usual way", value: "Makkah → Riyadh → Dammam", note: "Riyadh is about two-thirds of the way" },
      { label: "Flying instead", value: "About 2 hours in the air", note: "Jeddah to Dammam, plus time at both airports" },
      { label: "Price", value: "Set out in your quotation", note: "Before you travel. Asking costs nothing" },
    ],
    legsHeading: "The road in two legs",
    stops: ["Makkah", "Riyadh", "Dammam"],
    legs: [
      { distance: "about 870 km", time: "around 9 hours" },
      { distance: "about 400 km", time: "around 4 hours" },
    ],
    stopNote: { index: 1, text: "optional overnight stop" },
    legsNote:
      "Leg times are typical driving times between city centres. Traffic around Riyadh, the time of day and your exact addresses all move them a little.",
  },

  journey: {
    heading: "What the journey is actually like",
    paragraphs: [
      "Plenty of these trips begin in the evening. The bags go in at your hotel near the Haram or outside your building in Aziziyah, someone finds a comfortable seat for the oldest passenger, and within the hour the city is behind you. From there the road settles into long, straight desert highway heading east across the Najd. On a summer night that's cooler, quieter driving than the same road at midday.",
      "Riyadh comes roughly two-thirds of the way through, about 870 km in. It's the natural place for a proper meal and a stretch. It's also where people break the trip altogether: some book the first leg as a [Makkah to Riyadh transfer](/routes/makkah-to-riyadh), spend a night in the capital and carry on in the morning.",
      "The last stretch is around 400 km of wide, busy highway between the capital and the Eastern Province. It's the road our [Riyadh to Dammam transfer](/routes/riyadh-to-dammam) covers on its own, and it brings you into Dammam with Khobar and Dhahran a short drive further on. If you'd like the detail on that final leg, our [Riyadh to Dammam distance guide](/distance/riyadh-to-dammam-distance) breaks it down.",
      "The figures on this page are estimates for city centre to city centre. Yours depend on where we collect you, where you're going (Khobar is a little further than central Dammam), how often you stop, and the traffic around Riyadh.",
    ],
  },

  compare: {
    heading: "Driving or flying: an honest comparison",
    intro:
      "Makkah has no airport of its own, so flying means a road trip to King Abdulaziz International in Jeddah first. Even so, the plane is much faster. Here's how the two really compare.",
    caption: "Private car compared with flying from Jeddah to Dammam",
    columns: ["Private car", "Flight via Jeddah"],
    rows: [
      { label: "Total time", car: "Most of a day: 12–13 hours of driving plus stops", flight: "Much shorter: road to Jeddah airport, check-in, about 2 hours in the air, then on from Dammam's airport" },
      { label: "Luggage", car: "Limited by the vehicle's space, not an airline's allowance", flight: "The airline's baggage allowance and charges apply" },
      { label: "Your group", car: "Everyone in one vehicle, one booking", flight: "Every traveller needs a seat and a ticket" },
      { label: "Breaks", car: "When your group needs them", flight: "None until you land" },
      { label: "Older travellers and children", car: "Room to rest and stop when needed, but a long time sitting", flight: "Shorter overall, but terminals mean walking, queues and waiting" },
      { label: "Door to door", car: "Yes, from your Makkah address to your Eastern Province address", flight: "You still need a transfer at each end" },
    ],
    verdict:
      "Our honest advice: if time matters most, fly. We can take you to the plane with a [Jeddah airport transfer](/airport-transfer/jeddah-airport) and meet you off it with a [Dammam airport transfer](/airport-transfer/dammam-airport). If your flight has been changed or cancelled, the road becomes a real option, and our guide to [intercity transfers during flight disruptions](/blog/saudi-arabia-intercity-transfers-flight-disruptions) explains how that works.",
  },

  suits: {
    heading: "Who should consider the road",
    intro: "The people who book this route usually fit one of these descriptions.",
    items: [
      {
        title: "Families going home after Umrah",
        text: "You've finished your Umrah, the family is tired, and the bags are heavier than when you arrived. One car that goes from the hotel door to your own front door is often easier than splitting everyone across flights.",
      },
      {
        title: "Groups who'd rather stay together",
        text: "Relatives, friends or a small group from the same community can travel in one van or minibus, with the same driver all the way, instead of coordinating several tickets.",
      },
      {
        title: "Travellers with more luggage than a plane allows",
        text: "Moving belongings, carrying gifts or travelling with bulky items is simpler when the only limit is the space in the vehicle.",
      },
      {
        title: "People who prefer not to fly",
        text: "Some passengers find airports stressful, some have a flight that's been changed, and some just like to see the country from the road.",
      },
    ],
  },

  vehicles: {
    heading: "Choosing a vehicle for 12+ hours",
    intro:
      "On a short city ride almost any car will do. On a journey this long, legroom and boot space decide how everyone feels when you arrive. These are the vehicle classes you can request:",
    fit: {
      economy: "Fine for one or two people with light bags, but it's the tightest cabin for this distance. Most long-distance travellers step up.",
      comfort: "A sensible minimum for the full journey: more legroom than economy and room for 3 bags.",
      business: "The quietest, most comfortable sedan option for up to three passengers.",
      suv: "Our usual suggestion for a family of four or five who want space to rest.",
      van: "For larger families or small groups, and anyone carrying a lot: up to 9 passengers and about 8 bags.",
      minibus: "When 10 to 18 people want to make the trip together in one vehicle.",
    },
    footnote:
      "Models are examples and bag counts are a guide for standard suitcases. Tell us the real number and size of your bags, plus any wheelchair, pushchair or child-seat needs, and we'll confirm the vehicle in your quotation.",
  },

  stops: {
    heading: "Rest stops and breaking the journey",
    cards: [
      {
        icon: "car",
        title: "Stopping along the way",
        text: "Larger service stations along the highway have fuel, food and somewhere to pray, so the day can follow the prayer times and your group's needs. Tell us when you book if anyone needs more frequent breaks, especially older passengers or young children. Our guide on [Umrah for elderly pilgrims](/blog/umrah-for-elderly-pilgrims) has more ideas for keeping older family members comfortable.",
      },
      {
        icon: "moon",
        title: "A night in Riyadh",
        text: "If you'd rather not do it all in one go, ask for an overnight stop in Riyadh when you request the quote. You arrange your own hotel; we confirm in the quotation how the two days are run and what they cost.",
      },
      {
        icon: "user",
        title: "The driver's rest matters too",
        text: "On a journey of this length, ask us how the driver arrangement works for your date. It's confirmed in your quotation before you travel.",
      },
    ],
    checklist: {
      heading: "Before you set off",
      items: [
        "Water and a few snacks for the car",
        "Medicines in a hand bag, not in the boot",
        "A phone charger or power bank",
        "Passports or ID within easy reach, as there are checkpoints on Saudi highways",
        "The exact drop-off address or map pin for Dammam, Khobar or Dhahran",
        "A quick word to us about wheelchairs, child seats or extra stops",
      ],
    },
  },

  pickup: {
    heading: "Where we collect you and where we drop you off",
    from: {
      title: "Pickup in Makkah",
      items: [
        "Hotels around Masjid al-Haram",
        "Homes and apartments anywhere in Makkah, such as Aziziyah",
        "Straight after your Umrah, at the time you choose",
      ],
      note: "During Hajj season, access to Makkah is controlled. Mention your date and we'll confirm what's possible. If you need local rides before you leave, our [Makkah taxi service](/taxi-service/makkah) covers them.",
    },
    to: {
      title: "Drop-off in the Eastern Province",
      items: ["Any address in Dammam", "Khobar, including hotels on the Corniche", "Dhahran"],
      note: "Other Eastern Province destinations can be requested and are quoted individually. Once you're there, our [Dammam taxi service](/taxi-service/dammam) and [Khobar taxi service](/taxi-service/khobar) handle local trips.",
    },
  },

  steps: {
    heading: "How booking works",
    items: [
      { title: "Send your details", text: "Pickup address in Makkah, drop-off address, date, number of passengers and bags. Mention an overnight stop or extra breaks if you want them." },
      { title: "Get your quotation", text: "We reply with the vehicle, the price and the timing. Nothing is booked until you agree, and asking costs nothing." },
      { title: "Travel", text: "Your driver collects you at the agreed time and takes you door to door, with the stops you planned." },
    ],
  },

  formSection: {
    heading: "Send the full details now",
    text: "Prefer to give us everything in one go? Add your luggage, preferred vehicle and any notes, such as an overnight stop in Riyadh. The flight number field is optional and only matters if you're connecting with a flight.",
  },

  quoteForm: { serviceType: "Makkah to Dammam transfer", route: "Makkah to Dammam", pickup: "Makkah", dropoff: "Dammam" },

  related: {
    heading: "Other routes from Makkah and into the Eastern Province",
    intro: "Splitting the trip, heading somewhere else first, or already in the east? These pages cover the journeys people most often pair with this one.",
    routes: [
      { slug: "makkah-to-riyadh", text: "First leg, if you stop in the capital" },
      { slug: "riyadh-to-dammam", text: "Second leg, from Riyadh to the coast" },
      { slug: "makkah-to-madinah", text: "If you're visiting Madinah first" },
      { slug: "makkah-to-jeddah", text: "For flights from Jeddah airport" },
      { slug: "makkah-to-taif", text: "A short trip to the highlands" },
    ],
    cities: [
      { href: "/taxi-service/dammam", label: "Dammam Taxi", text: "Local rides and the Bahrain causeway" },
      { href: "/taxi-service/khobar", label: "Khobar Taxi", text: "Hotels, Corniche and business trips" },
      { href: "/taxi-service/riyadh", label: "Riyadh Taxi", text: "Getting around the capital" },
    ],
  },

  guides: {
    heading: "Guides for planning this trip",
    slugs: [
      "riyadh-to-dammam-taxi-guide",
      "saudi-arabia-intercity-taxi-services-guide",
      "dammam-travel-guide",
      "umrah-for-elderly-pilgrims",
    ],
  },

  faqHeading: "Makkah to Dammam Transfer Questions",

  method: {
    heading: "How we checked this page",
    text: "We measured the road distance and driving time on OpenStreetMap-based routing between central Makkah and central Dammam, then cross-checked them against the two legs on our Makkah to Riyadh and Riyadh to Dammam pages. Prices, vehicles and timings are never promised on this page; they're confirmed in your quotation.",
  },

  finalCta: {
    heading: "Planning the drive from Makkah to Dammam?",
    text: "Send us the date, the addresses and who's travelling. We'll come back with the right vehicle and a quotation, so you can decide between the road and the plane with the facts in front of you.",
    primary: "Request a Quote",
    whatsapp: "Ask on WhatsApp",
  },
};

export const MAKKAH_DAMMAM_FAQS: Faq[] = [
  {
    question: "How far is Makkah from Dammam by road?",
    answer:
      "About 1,250 to 1,300 km, depending on exactly where you start and finish. The usual road goes east through Riyadh, which is roughly 870 km from Makkah. Dammam is then about another 400 km beyond the capital.",
  },
  {
    question: "How long does the drive from Makkah to Dammam take?",
    answer:
      "Plan on roughly 12 to 13 hours of driving. Stops for prayer, meals and fuel come on top of that, so the whole trip usually fills most of a day or a night. Traffic around Riyadh and the number of breaks make the biggest difference.",
  },
  {
    question: "Is it quicker to fly from Makkah to Dammam?",
    answer:
      "Yes, much quicker. Makkah has no airport, so you would travel to King Abdulaziz International Airport in Jeddah, and the flight to Dammam takes around two hours. Driving makes sense when luggage, group size or a preference for the road matter more than time.",
  },
  {
    question: "Can we stop overnight in Riyadh?",
    answer:
      "You can ask for it when you request a quote. Riyadh is roughly two-thirds of the way, so it is the natural place to break the trip. You arrange your own hotel, and we confirm in the quotation how the two legs are run and priced.",
  },
  {
    question: "Which vehicle is best for a family with a lot of luggage?",
    answer:
      "For four or five people, an SUV such as a Toyota Land Cruiser or GMC Yukon takes up to 5 passengers and about 4 bags. With more bags or more people, a van such as a Toyota Hiace or Hyundai Staria takes up to 9 passengers and about 8 bags. Tell us the actual number of suitcases so we can confirm the right size.",
  },
  {
    question: "Can you collect us from our hotel near the Haram?",
    answer:
      "Yes. Pickups are from hotels, homes and other addresses in Makkah. Give us the hotel name and the time you want to leave. During Hajj season access to Makkah is controlled, so mention your date and we will confirm what is possible.",
  },
  {
    question: "Do you drop off in Khobar and Dhahran as well as Dammam?",
    answer:
      "Yes. Give us the full address in Dammam, Khobar or Dhahran. Other Eastern Province destinations can be requested and are quoted individually.",
  },
  {
    question: "How is the price for a Makkah to Dammam transfer worked out?",
    answer:
      "Every journey is quoted individually. The price depends on the vehicle, the number of passengers, the date and anything extra, such as an overnight stop. It is set out in your quotation before you travel, and asking for a quote costs nothing.",
  },
  {
    question: "Can we travel overnight?",
    answer:
      "Yes, you can ask for an evening or overnight departure. Some travellers prefer it to avoid the daytime heat, especially in summer. Your departure time is confirmed in the quotation.",
  },
  {
    question: "Can I also book the return from Dammam to Makkah?",
    answer:
      "Yes. Send the return details through the quote form, or mention the return date in the same request, and we will quote both journeys.",
  },
];
