import type { Faq } from "@/data/faqs";

/**
 * /makkah/makkah-ziyarat-tour — content for its own layout
 * (components/makkah/MakkahZiyaratTourView.tsx). The page's metadata and
 * sitemap entry still come from data/point-transfer-v2/makkah.ts.
 *
 * Driving legs checked 21 Nov 2026 with OpenStreetMap-based routing (OSRM),
 * free-flowing traffic, approximate coordinates for each site:
 *   Haram → Jabal al-Noor 10.8 km / 15 min · Jabal al-Noor → Jabal Thawr
 *   17.6 km / 27 min · Jabal Thawr → Mina 12.9 km / 22 min · Mina →
 *   Muzdalifah 6.9 km / 12 min · Muzdalifah → Arafat 9.8 km / 13 min ·
 *   Arafat → Haram 25.4 km / 29 min. Full loop ≈ 84 km / ≈ 2 h; without
 *   Jabal Thawr ≈ 66 km / ≈ 1.5 h. Haram → Jannat al-Mu'alla 5.3 km / 9 min;
 *   Haram → Masjid Aisha (Tan'im) 11.9 km / 15 min.
 * Not stated (unverified): fixed or all-inclusive price, guaranteed 4–5 h /
 * 7–8 h durations, climb step counts or times, opening hours, wheelchair
 * access at any site, driver accompanying climbs.
 */

export const ZIYARAT_PATH = "/makkah/makkah-ziyarat-tour";
export const ZIYARAT_REVIEWED = "2026-11-21";

export const ZIYARAT = {
  hero: {
    kicker: "Private Ziyarat transport in Makkah",
    h1: "Makkah Ziyarat Tour: Private Car and Custom Itinerary",
    intro:
      "Explore Makkah's historic Ziyarat sites with a private vehicle and driver. Choose a shorter visit, or ask for a longer itinerary covering Jabal al-Noor, Jabal Thawr and the Hajj sites around Mina, Muzdalifah and Arafat. Share your preferred stops and schedule, and you'll receive a quotation before you confirm.",
    points: ["A private vehicle and driver", "Custom itinerary options", "Half-day and full-day requests, subject to availability", "A quotation before you confirm"],
    image: {
      src: "/images/ziyarat/makkah-ziyarat-tour.webp",
      alt: "Pilgrims on Jabal al-Rahmah in the plain of Arafat, with the white pillar on its summit",
      caption: "Jabal al-Rahmah, Arafat",
    },
    whatsappMessage: "Hello! I'd like a quote for a private Ziyarat tour in Makkah.",
  },

  glance: {
    heading: "Makkah Ziyarat Tour at a Glance",
    facts: [
      { icon: "tour", label: "Tour type", value: "Private sightseeing and Ziyarat transport" },
      { icon: "pin", label: "Location", value: "Makkah, Saudi Arabia" },
      { icon: "mountain", label: "Possible sites", value: "Jabal al-Noor, Jabal Thawr, Mina, Muzdalifah, Arafat" },
      { icon: "clock", label: "Duration", value: "Half-day or full-day, depending on your stops" },
      { icon: "car", label: "Vehicle", value: "Chosen for your group size" },
      { icon: "quote", label: "Booking", value: "A quotation based on your itinerary" },
      { icon: "access", label: "Accessibility", value: "Tell us about walking and mobility needs first" },
    ],
  },

  circuit: {
    heading: "What the circuit covers",
    intro:
      "A Ziyarat tour visits places around Makkah linked to the early history of Islam and to the rites of Hajj. These visits are optional and are not part of Umrah or Hajj themselves. Below is the usual loop, with the driving distance between stops.",
    loop: [
      { name: "Masjid al-Haram area", short: "Haram", leg: null },
      { name: "Jabal al-Noor", short: "Jabal al-Noor", leg: "11 km" },
      { name: "Jabal Thawr", short: "Jabal Thawr", leg: "18 km" },
      { name: "Mina", short: "Mina", leg: "13 km" },
      { name: "Muzdalifah", short: "Muzdalifah", leg: "7 km" },
      { name: "Arafat", short: "Arafat", leg: "10 km" },
    ],
    returnLeg: "25 km back to the Haram",
    sites: [
      {
        name: "Jabal al-Noor and the Cave of Hira",
        badges: ["Base visit by car", "Optional climb"],
        text: "The Cave of Hira, near the top of Jabal al-Noor, is where the Prophet Muhammad (peace be upon him) received the first revelation of the Qur'an. You can visit the base by car and reflect there. Reaching the cave means a steep, exposed climb on foot, which is demanding for many people.",
        href: "/makkah/makkah-to-cave-of-hira",
        linkLabel: "Cave of Hira visit",
      },
      {
        name: "Jabal Thawr",
        badges: ["Base visit by car", "Optional climb"],
        text: "Jabal Thawr holds the cave where the Prophet (peace be upon him) and Abu Bakr sheltered during the Hijrah to Madinah. It lies south of the city. The climb is longer and steeper than Jabal al-Noor, so many visitors see it from the base.",
        href: "/makkah/makkah-to-jabal-thawr",
        linkLabel: "Jabal Thawr visit",
      },
      {
        name: "Mina",
        badges: ["Visit by vehicle"],
        text: "The valley of tents where pilgrims stay during Hajj, and the site of the Jamarat. Outside the Hajj period it is largely empty, and much of it can be seen from the vehicle.",
        href: "/makkah/makkah-to-mina",
        linkLabel: "Mina visit",
      },
      {
        name: "Muzdalifah",
        badges: ["Visit by vehicle"],
        text: "The open plain between Mina and Arafat where pilgrims spend the night after the Day of Arafah, home to Masjid al-Mash'ar al-Haram.",
        href: "/makkah/makkah-to-muzdalifah",
        linkLabel: "Muzdalifah visit",
      },
      {
        name: "Arafat and Jabal al-Rahmah",
        badges: ["Visit by vehicle", "Short walk optional"],
        text: "The plain where pilgrims stand on the Day of Arafah, the central rite of Hajj. Jabal al-Rahmah, the small hill in the plain, is traditionally associated with the Prophet's Farewell Sermon.",
        href: "/makkah/makkah-to-arafat",
        linkLabel: "Arafat and Jabal al-Rahmah visit",
      },
      {
        name: "Masjid Aisha (Tan'im)",
        badges: ["Optional stop"],
        text: "A mosque at Tan'im, just outside the Haram boundary, where many people staying in Makkah enter ihram for an additional Umrah.",
        href: null,
        linkLabel: null,
      },
      {
        name: "Jannat al-Mu'alla",
        badges: ["Optional stop"],
        text: "The historic cemetery north of the Haram where, according to tradition, Khadijah, the Prophet's first wife, is buried. Entry rules apply, so many visitors pay their respects from the gate.",
        href: null,
        linkLabel: null,
      },
    ],
  },

  planning: {
    heading: "How to Plan Your Makkah Ziyarat Itinerary",
    intro: "There's no single fixed circuit. The order and number of stops depend on:",
    factors: [
      { title: "Your chosen sites", text: "Every extra stop adds driving and visiting time." },
      { title: "Tour length", text: "A half-day request fits fewer stops than a full day." },
      { title: "Traffic", text: "Roads around the Haram and the Hajj sites can be slow." },
      { title: "Time at each site", text: "A quick look and a longer stay are very different days." },
      { title: "Access on the day", text: "Some areas close or change around Hajj and busy periods." },
      { title: "Climbing or not", text: "A climb can add hours. A base visit adds minutes." },
      { title: "Date and season", text: "Heat, Ramadan and the Hajj season all change the plan." },
    ],
  },

  timing: {
    heading: "Realistic timing",
    intro:
      "Driving and visiting are separate things. The road time below is measured; the rest depends on how you spend the day.",
    parts: [
      { label: "Driving between sites", value: "About 2 hours for the full loop", note: "≈84 km in free-flowing traffic; about 1½ hours without Jabal Thawr", measured: true },
      { label: "Time at each site", value: "Your choice", note: "A base visit or photo stop is short; longer reflection takes longer", measured: false },
      { label: "Mountain climbing", value: "Adds a lot of time", note: "Climbing to either cave and back is a long, tiring walk on uneven ground", measured: false },
      { label: "Rest breaks", value: "As you need", note: "Meals, prayers and shade breaks, especially in the heat", measured: false },
    ],
    legsTitle: "Driving time between stops (clear traffic)",
    legs: [
      { from: "Haram", to: "Jabal al-Noor", time: "≈15 min" },
      { from: "Jabal al-Noor", to: "Jabal Thawr", time: "≈27 min" },
      { from: "Jabal Thawr", to: "Mina", time: "≈22 min" },
      { from: "Mina", to: "Muzdalifah", time: "≈12 min" },
      { from: "Muzdalifah", to: "Arafat", time: "≈13 min" },
      { from: "Arafat", to: "Haram", time: "≈29 min" },
    ],
    note: "Traffic during Ramadan, around Hajj and at prayer times can make these much longer.",
  },

  itineraries: {
    heading: "Suggested itineraries",
    intro: "Starting points for your request. Tell us what you'd like to change. None of these timings is guaranteed.",
    items: [
      {
        title: "Short visit",
        tag: "Shortest option",
        stops: ["Jabal al-Noor (base)", "Jannat al-Mu'alla (gate)"],
        note: "The two stops closest to central Makkah, with no climbing. Around 30 minutes of driving in clear traffic, plus your time at each stop.",
      },
      {
        title: "Half-day request",
        tag: "Fewer stops",
        stops: ["Jabal al-Noor (base or partial climb)", "Mina", "Muzdalifah", "Arafat"],
        note: "Leaves out Jabal Thawr to keep the driving to about 1½ hours. A climb at Jabal al-Noor makes it a much longer morning.",
      },
      {
        title: "Full-day request",
        tag: "The whole loop",
        stops: ["Jabal al-Noor", "Jabal Thawr", "Mina", "Muzdalifah", "Arafat", "Jannat al-Mu'alla (optional)"],
        note: "About 2 hours of driving before any visits. Climbing both mountains in one day is very demanding, so most people climb one or none.",
      },
      {
        title: "Family itinerary",
        tag: "Base visits",
        stops: ["Jabal al-Noor (base)", "Jabal Thawr (base)", "Mina", "Arafat"],
        note: "Base visits at both mountains, more time on the open plains, and a planned break for children.",
      },
      {
        title: "Elderly-friendly itinerary",
        tag: "Minimal walking",
        stops: ["Mina", "Muzdalifah", "Arafat", "Mountains viewed from the vehicle"],
        note: "Mostly seen from the vehicle, with short stops only. Tell us about any mobility needs before booking.",
      },
    ],
  },

  vehicles: {
    heading: "Choosing a vehicle",
    intro:
      "For a tour, comfort matters more than luggage: you'll get in and out several times and may spend hours in the car. Choose by passengers first, then by how long the day is.",
    fit: {
      economy: "One or two people on a short visit.",
      comfort: "Couples or three people on a half day.",
      business: "A quieter, roomier sedan for up to three.",
      suv: "Families of up to five; easier for resting between stops.",
      van: "Larger families or groups of up to nine.",
      minibus: "Groups of 10 to 18 travelling together.",
    } as Record<string, string>,
    footnote: "Models are examples. The vehicle is confirmed in your quotation.",
  },

  sitePages: {
    heading: "Individual site pages",
    intro:
      "Prefer just one or two places? Each of these pages covers a single visit in more detail. You can request a full itinerary, or ask about an individual visit.",
    links: [
      { label: "Cave of Hira (Jabal al-Noor)", href: "/makkah/makkah-to-cave-of-hira" },
      { label: "Jabal Thawr", href: "/makkah/makkah-to-jabal-thawr" },
      { label: "Mina", href: "/makkah/makkah-to-mina" },
      { label: "Muzdalifah", href: "/makkah/makkah-to-muzdalifah" },
      { label: "Arafat and Jabal al-Rahmah", href: "/makkah/makkah-to-arafat" },
      { label: "Makkah Historical Sites Tour", href: "/makkah/makkah-historical-sites-tour" },
    ],
  },

  know: {
    heading: "What to know before booking",
    items: [
      { title: "Climbing is optional", text: "Climbing to either cave is a strenuous walk on rough ground. The driver stays with the vehicle and doesn't accompany climbs." },
      { title: "Footwear and preparation", text: "Closed, sturdy shoes, water and sun protection make climbing and walking easier." },
      { title: "Heat", text: "Makkah is very hot for much of the year. Early starts are cooler, especially if you plan to climb." },
      { title: "Seasons and access", text: "Around Hajj, access to the Hajj sites and parts of Makkah is restricted, and some visits may not be possible on your date." },
      { title: "Families and older travellers", text: "Base visits and vehicle viewing let everyone take part without climbing." },
      { title: "Wheelchairs and mobility", text: "Tell us in advance. Much of Mina, Muzdalifah and Arafat can be seen from the vehicle, but we can't promise step-free access at any site." },
      { title: "Who can visit", text: "Entry to Makkah is for Muslims only." },
    ],
  },

  booking: {
    heading: "How booking works",
    steps: [
      "Share your pickup point and preferred sites",
      "Receive a quotation based on the itinerary and vehicle",
      "Review and confirm the arrangements",
      "Travel with your private driver",
    ],
  },

  planner: {
    heading: "Plan your tour and request a quote",
    intro: "Tick the sites you'd like, choose base or climb, then add the plan to your request.",
    durations: ["Short visit", "Half day", "Full day", "Not sure yet"],
    messagePlaceholder: "Share your preferred Ziyarat sites, tour duration, pickup location, passenger count and any walking or accessibility requirements.",
  },

  related: {
    heading: "Other Makkah services",
    links: [
      { href: "/taxi-service/makkah", label: "Makkah Taxi Service", text: "Rides around the city and to the Haram" },
      { href: "/ziyarat-taxi-service", label: "Ziyarat Taxi Service", text: "Ziyarat transport in Makkah and Madinah" },
      { href: "/umrah-taxi-service", label: "Umrah Taxi Service", text: "Airport, hotel and intercity transfers for Umrah" },
    ],
  },

  faqHeading: "Makkah Ziyarat tour questions",

  method: {
    heading: "How we checked this page",
    text: "Driving distances and times between the sites were measured on OpenStreetMap-based routing in clear traffic. Historical descriptions are kept to widely accepted facts. Durations, access and prices are confirmed for each itinerary in your quotation.",
  },

  finalCta: {
    heading: "Ready to plan your Ziyarat day?",
    text: "Tell us where you're staying, which sites you'd like to see and who's coming.",
    primary: "Plan my tour",
    whatsapp: "WhatsApp Us",
  },
};

export const ZIYARAT_FAQS: Faq[] = [
  {
    question: "Which sites are included in a Makkah Ziyarat tour?",
    answer:
      "You choose. Common stops are Jabal al-Noor (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat with Jabal al-Rahmah, and some people add Masjid Aisha at Tan'im or Jannat al-Mu'alla. Your quotation lists the stops you asked for.",
  },
  {
    question: "Can I customise the Ziyarat itinerary?",
    answer: "Yes. Tell us which sites you would like, in what order if it matters, and how long you want the tour to be. The quotation is based on that itinerary.",
  },
  {
    question: "How long does a full Makkah Ziyarat tour take?",
    answer:
      "Driving the full loop takes about 2 hours in clear traffic. The total depends on how long you spend at each site, whether anyone climbs, breaks and traffic, so a full loop usually fills most of a day. A climb adds a lot of time.",
  },
  {
    question: "Can I visit Jabal al-Noor without climbing to the Cave of Hira?",
    answer: "Yes. Many visitors go to the base of the mountain by car and reflect there. Climbing to the cave is optional and physically demanding.",
  },
  {
    question: "Do I have to climb Jabal Thawr?",
    answer: "No. Climbing is optional, and Jabal Thawr's climb is longer and steeper than Jabal al-Noor's. Many visitors see it from the base.",
  },
  {
    question: "Can I visit Mina, Muzdalifah and Arafat outside the Hajj season?",
    answer:
      "Outside the Hajj period they can usually be visited by vehicle. Around Hajj, access is restricted, and visits may not be possible on some dates, so tell us your date when you request a quote.",
  },
  {
    question: "Is the tour suitable for elderly passengers?",
    answer:
      "It can be. An itinerary based on vehicle viewing and short stops avoids climbing and long walks. Tell us about any mobility needs before booking so we can plan around them.",
  },
  {
    question: "Can wheelchair users visit the Hajj sites by vehicle?",
    answer:
      "Much of Mina, Muzdalifah and Arafat can be seen from the vehicle. We cannot promise step-free access at any site, so tell us about wheelchair needs before booking.",
  },
  {
    question: "Can I choose a half-day or full-day itinerary?",
    answer:
      "Yes, you can request either, subject to availability. A half day usually leaves out Jabal Thawr; a full day covers the whole loop. Neither duration is guaranteed for every combination of stops.",
  },
  {
    question: "Which vehicle should I choose for my family or group?",
    answer:
      "Families of up to five usually choose an SUV, groups of up to nine a van, and 10 to 18 people a minibus. For one to three people, a comfort or business sedan works well. The vehicle is confirmed in your quotation.",
  },
  {
    question: "Can I include additional stops?",
    answer: "You can ask for them, such as Masjid Aisha or Jannat al-Mu'alla, or a meal break. Additional stops are included in your quotation if they fit the day.",
  },
  {
    question: "How do I receive a quotation for my Ziyarat tour?",
    answer:
      "Send your pickup point, date, preferred start time, chosen sites and passenger count through the form or WhatsApp. We reply with a quotation for that itinerary, and nothing is booked until you confirm.",
  },
];
