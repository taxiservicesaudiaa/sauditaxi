import type { Faq } from "@/data/faqs";
import type { GalleryImage } from "@/components/sections/ImageGallery";
import { airportGuides } from "@/data/airport-guides";
import { DMM_STATUS_NOTICE } from "@/data/airport-status";

export interface Airport {
  slug: string;
  name: string;
  /** IATA code for unique content + schema. */
  code: string;
  city: string;
  /** Slug of the city page this airport serves, if present in data/cities. */
  citySlug?: string;
  region: string;
  intro: string;
  about: string;
  /** Terminals / arrival notes — used for unique content. */
  terminals: string[];
  /** Popular destinations served from this airport (display strings). */
  popularDestinations: string[];
  /**
   * Route slugs for popular onward long-distance transfers from this airport.
   * When populated, the airport page renders linked route cards and a RouteGrid
   * section — providing direct internal link authority to commercial route pages.
   */
  popularRoutes?: string[];
  /**
   * Short slug used in hotel-transfer URLs, e.g. "king-abdulaziz-airport" for
   * `/jeddah/king-abdulaziz-airport-to-jeddah-hilton`. Derived from the airport
   * name when omitted (see lib/hotel-transfers.ts).
   */
  transferSlug?: string;
  /** Short display name used in transfer content, e.g. "King Abdulaziz Airport". */
  transferName?: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
  /** H2 "Private Transfers from [Airport]" paragraph — no H3s. */
  coreServiceParagraph?: string;
  /** H2 "Arriving at [Official Airport Name]" paragraphs — no H3s. */
  arrivingParagraphs?: string[];
  /** H2 "Transfers to Major Destinations" — the per-airport customization section (no H3s, prose cards). */
  destinationClusters?: { title: string; body: string; href?: string; linkLabel?: string }[];
  /** Airport-specific FAQs (overrides the generated defaults; capped at 8). */
  faqs?: Faq[];
  /** Target keywords for this page (documentation/reference only). */
  keywords?: string[];
  /** Nearby hotels for internal linking (display name + optional href). */
  nearbyHotels?: { name: string; href?: string }[];
  /** Optional gallery images (rendered only once files are added). */
  images?: GalleryImage[];
  /** ISO date this page's content was last substantively reviewed/updated. */
  lastUpdated?: string;
  /**
   * Optional per-airport replacements for the shared hub copy built in
   * app/(main)/airport-transfer/[airport]/page.tsx (e.g. while an airport's
   * operations are disrupted). Every field falls back to the shared default,
   * so airports without overrides render exactly as before.
   */
  hubOverrides?: AirportHubOverrides;
}

export interface AirportHubOverrides {
  /** Dated status notice rendered under the hero. */
  notice?: { heading: string; paragraphs: string[]; links?: { label: string; href: string }[] };
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  popularHeading?: string;
  popularIntro?: string;
  /** Card title prefix, e.g. "Riyadh to" instead of "Riyadh Airport to". */
  popularTitlePrefix?: string;
  /** Card body used for every popular-route card. */
  popularCardBody?: string;
  arrivingHeading?: string;
  meetGreetHeading?: string;
  meetGreetIntro?: string;
  meetGreetSteps?: { title: string; detail: string }[];
  familyParagraph?: string;
  bookingIntro?: string;
  bookingSteps?: { title: string; detail: string }[];
  finalCtaHeading?: string;
  finalCtaText?: string;
}

const baseAirports: Airport[] = [
  {
    slug: "riyadh-airport",
    name: "King Khalid International Airport",
    code: "RUH",
    city: "Riyadh",
    citySlug: "riyadh",
    region: "Riyadh Province",
    intro:
      "King Khalid International Airport (RUH) is the main airport serving the Saudi capital. Check your flight with your airline, then tell us your journey — we confirm what can be arranged in a quotation.",
    about:
      "We arrange private, pre-booked road transfers to and from Riyadh. While operations at King Khalid International Airport are disrupted, any pickup or drop-off at the airport is confirmed case by case in the customer's quotation.",
    terminals: ["Terminal 1 & 2 (international)", "Terminal 3 & 4 (domestic)", "Terminal 5 (low-cost)"],
    popularDestinations: ["Riyadh city", "Diriyah", "Dammam", "Qassim", "AlUla"],
    // City-origin routes while RUH operations are disrupted (the riyadh-airport-to-* routes
    // advertise airport pickups that are not currently confirmed). Restore when RUH service is confirmed.
    popularRoutes: [
      "riyadh-to-qassim",
      "riyadh-to-dammam",
      "riyadh-to-jeddah",
      "riyadh-to-bahrain",
      "riyadh-to-doha",
    ],
    metaTitle: "Private Riyadh Airport Transfer (RUH) | Saudi Private Transfers",
    metaDescription:
      "Riyadh airport (RUH) transfers and onward road travel. Check your flight with your airline, then request a quote — your confirmed quotation sets the price.",
    hubOverrides: {
      notice: {
        heading: "Riyadh airport status — last checked 22 October 2026",
        paragraphs: [
          "Saudi Arabia's General Authority of Civil Aviation (GACA) announced on 10 October 2026 that operations at King Khalid International Airport were temporarily suspended, and on 12 October that the suspension had been extended for safety checks. We have not found an official GACA announcement that scheduled flights have resumed, and reports since then have differed. Confirm your flight's status directly with your airline before you travel.",
          "Airport operations and our road transfers are separate matters. We are not confirming pickups or drop-offs at King Khalid International Airport in advance; if your journey involves the airport, send us your flight details and any airport pickup or drop-off is confirmed case by case in your quotation.",
          "If your airline has moved your flight to another airport, we can quote a road transfer to or from Riyadh:",
        ],
        links: [
          { label: "Qassim (incl. Qassim airport) to Riyadh", href: "/routes/qassim-to-riyadh" },
          { label: "Dammam Airport to Riyadh", href: "/routes/dammam-airport-to-riyadh" },
          { label: "Madinah Airport to Riyadh", href: "/routes/madinah-airport-to-riyadh" },
          { label: "Jeddah Airport to Riyadh", href: "/routes/jeddah-airport-to-riyadh" },
          { label: "Intercity transfers during flight disruptions", href: "/blog/saudi-arabia-intercity-transfers-flight-disruptions" },
        ],
      },
      primaryCtaLabel: "Request a Riyadh Transfer Quote",
      primaryCtaHref: "/get-quote?dropoff=Riyadh",
      popularHeading: "Popular Transfers from Riyadh",
      popularIntro: "Private road transfers we arrange from Riyadh. Each journey is confirmed in a quotation before you travel.",
      popularTitlePrefix: "Riyadh to",
      popularCardBody: "A private, direct transfer for your group. Your confirmed quotation sets the price and shows what it covers.",
      arrivingHeading: "If Your Journey Involves King Khalid International Airport",
      meetGreetHeading: "Airport Pickups While RUH Operations Are Disrupted",
      meetGreetIntro: "What to check before you request a transfer that involves King Khalid International Airport.",
      meetGreetSteps: [
        {
          title: "Check Your Flight",
          detail: "Confirm with your airline that your flight is operating, which airport it now uses, and its arrival or departure time.",
        },
        {
          title: "Share Your Details",
          detail: "Send your airline, flight number, the airport, your pickup or destination address, and your passenger and luggage numbers.",
        },
        {
          title: "Confirm the Meeting Point",
          detail: "If an airport pickup or drop-off can be arranged, the meeting point and time are confirmed in your quotation before you travel.",
        },
      ],
      familyParagraph:
        "Travelling with children, older relatives or a larger group? Tell us your passenger and luggage numbers when you request a quote so a suitable vehicle can be offered in your quotation. If you need child seats, ask before you confirm.",
      bookingIntro: "Four steps from first message to a confirmed transfer.",
      bookingSteps: [
        { title: "1. Send Your Journey Details", detail: "Your pickup point, destination, travel date and time, passengers, luggage, and any flight details — by WhatsApp or our quote form." },
        { title: "2. Receive Your Quotation", detail: "A quotation with a vehicle recommendation. The confirmed quotation sets the price and shows what it covers." },
        { title: "3. Confirm Your Transfer", detail: "Approve the quotation to book; its terms explain what is needed to confirm." },
        { title: "4. Travel", detail: "Your driver meets you at the pickup point and time confirmed in your quotation." },
      ],
      finalCtaHeading: "Request a Riyadh Transfer Quote",
      finalCtaText: "Tell us your pickup point, destination and travel date — we reply with a quotation, and the confirmed quotation sets the price.",
    },
  },
  {
    slug: "jeddah-airport",
    name: "King Abdulaziz International Airport",
    code: "JED",
    city: "Jeddah",
    citySlug: "jeddah",
    region: "Makkah Province",
    intro:
      "King Abdulaziz International Airport (JED) is the busiest pilgrim gateway in the Kingdom, with direct private transfers to Makkah, Madinah, and Jeddah hotels.",
    about:
      "JED is the first stop for most Umrah and Hajj pilgrims. We provide meet-and-greet at the Hajj Terminal, Terminal 1, and the North Terminal, then drive directly to Makkah hotels near the Haram or onward to Madinah and Taif. Drivers assist with luggage and understand pilgrim schedules.",
    terminals: ["Terminal 1 (North)", "Hajj Terminal", "Domestic terminal"],
    popularDestinations: ["Makkah", "Madinah", "Jeddah city", "Taif"],
    popularRoutes: [
      "jeddah-airport-to-jeddah",
      "jeddah-to-makkah",
      "jeddah-to-madinah",
      "jeddah-to-taif",
      "jeddah-to-yanbu",
      "jeddah-to-kaec",
      "jeddah-airport-to-riyadh",
    ],
    metaTitle: "Private Jeddah Airport Transfer (JED) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from King Abdulaziz Airport (JED) to Makkah, Madinah, or your Jeddah hotel. Meet-and-greet pickup, flight tracking, fixed price.",
  },
  {
    slug: "madinah-airport",
    name: "Prince Mohammad bin Abdulaziz International Airport",
    code: "MED",
    city: "Madinah",
    citySlug: "madinah",
    region: "Madinah Province",
    intro:
      "Prince Mohammad bin Abdulaziz International Airport (MED) serves pilgrims visiting the Prophet's Mosque, with private transfers to hotels and onward to Makkah and AlUla.",
    about:
      "Our MED airport service offers meet-and-greet arrivals, direct transfers to hotels around the Haram, and private long-distance rides to Makkah, Yanbu, and AlUla. Drivers are familiar with prayer-time routing and pilgrim luggage needs.",
    terminals: ["International terminal", "Domestic terminal"],
    popularDestinations: ["Madinah city", "Makkah", "AlUla", "Yanbu"],
    popularRoutes: [
      "madinah-airport-to-madinah",
      "madinah-to-makkah",
      "madinah-to-alula",
      "madinah-airport-to-riyadh",
    ],
    metaTitle: "Private Madinah Airport Transfer (MED) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Madinah Airport (MED) to hotels near the Haram, plus onward transfers to Makkah, Ziyarat sites, and AlUla. Fixed price, meet-and-greet.",
  },
  {
    slug: "dammam-airport",
    name: "King Fahd International Airport",
    code: "DMM",
    city: "Dammam",
    citySlug: "dammam",
    region: "Eastern Province",
    intro:
      "King Fahd International Airport (DMM) is the gateway to the Eastern Province and the Bahrain Causeway, with private transfers across the Dammam metro and beyond.",
    about:
      "DMM is the largest airport in the world by land area and serves the energy capital of the Kingdom. We provide private airport pickups with flight tracking, transfers to Khobar, Dhahran, and Jubail, and cross-border rides to Bahrain via the King Fahd Causeway.",
    terminals: ["Main terminal (international & domestic)"],
    popularDestinations: ["Dammam", "Khobar", "Jubail", "Bahrain", "Riyadh"],
    popularRoutes: [
      "dammam-airport-to-khobar",
      "dammam-airport-to-jubail",
      "dammam-airport-to-dhahran",
      "dammam-airport-to-bahrain",
      "dammam-airport-to-riyadh",
      "dammam-airport-to-hofuf",
    ],
    metaTitle: "Private Dammam Airport Transfer (DMM) | Saudi Private Transfers",
    metaDescription:
      "Private transfers from King Fahd Airport (DMM) to Khobar, Jubail, Dhahran, Riyadh and Bahrain, with flight tracking. Your confirmed quotation sets the price.",
    // DMM service rules (owner, Oct 2026): flight tracking and free waiting are offered (no stated
    // duration); name-board meet-and-greet is not. Card figures removed until each is verified.
    hubOverrides: {
      notice: DMM_STATUS_NOTICE,
      popularIntro:
        "Private transfers from King Fahd International Airport to these destinations, priced in a quotation you confirm before you travel.",
      popularCardBody: "A private, direct transfer with flight tracking. Your confirmed quotation sets the price and shows what it covers.",
      meetGreetHeading: "Airport Pickup at King Fahd International Airport",
      meetGreetSteps: [
        {
          title: "Before Your Flight",
          detail:
            "Share your flight number, arrival date, and destination when you book. We track your flight from that point, so an early or delayed landing is already accounted for before you travel.",
        },
        {
          title: "After Landing",
          detail:
            "Clear immigration and collect your luggage as normal at King Fahd International Airport, then head to the meeting point confirmed in your booking.",
        },
        {
          title: "Meeting Your Driver",
          detail:
            "Your driver meets you at the confirmed meeting point and helps carry your luggage to the vehicle. Free waiting time is included if your flight lands late.",
        },
      ],
      familyParagraph:
        "Travelling with children, an elderly relative, or a larger group? Tell us your passenger and luggage numbers when you book so an SUV, van, or minibus is ready rather than assumed on the day. Child seats can be requested for your Dammam Airport transfer, and drivers help with luggage from the meeting point to the vehicle, so nobody is left managing bags alone.",
      bookingSteps: [
        { title: "1. Send Your Journey Details", detail: "Your flight number, arrival date, and destination — hotel, city, or onward route — sent by WhatsApp or our quote form." },
        { title: "2. Receive Your Quotation", detail: "A price and a vehicle recommendation. The confirmed quotation sets the price and shows what it covers." },
        { title: "3. Confirm Your Transfer", detail: "Approve your quotation and a driver is scheduled for your flight; the quotation sets out its payment and cancellation terms." },
        { title: "4. Meet Your Driver", detail: "We track your flight, and your driver meets you at the confirmed meeting point at King Fahd International Airport, ready to help with luggage." },
      ],
      finalCtaText:
        "Add your flight number and destination — we track your flight and reply with a quotation; the confirmed quotation sets the price.",
    },
  },
  {
    slug: "taif-airport",
    name: "Taif Regional Airport",
    code: "TIF",
    city: "Taif",
    citySlug: "taif",
    region: "Makkah Province",
    intro:
      "Taif Regional Airport (TIF) serves the cool mountain city above Makkah, with private transfers to Taif resorts, Makkah, and Jeddah.",
    about:
      "Our TIF airport service provides meet-and-greet arrivals and scenic transfers down the Al Hada mountain road to Makkah, plus rides to Taif's rose farms and the cable car. A popular choice for pilgrims combining Umrah with a highland stay.",
    terminals: ["Main terminal"],
    popularDestinations: ["Taif", "Makkah", "Jeddah", "Al Hada"],
    popularRoutes: [
      "taif-to-riyadh",
      "taif-to-makkah",
      "taif-to-jeddah",
    ],
    metaTitle: "Private Taif Airport Transfer (TIF) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Taif Airport (TIF) down the Al Hada road to Makkah, or onward to Jeddah and Taif hotels. Fixed price, meet-and-greet pickup.",
  },
  {
    slug: "abha-airport",
    name: "Abha International Airport",
    code: "AHB",
    city: "Abha",
    citySlug: "abha",
    region: "Asir Province",
    intro:
      "Abha International Airport (AHB) is the gateway to the green Asir highlands, with private transfers to Abha, Khamis Mushait, and mountain resorts.",
    about:
      "Our AHB airport service offers meet-and-greet arrivals and transfers to Abha and Khamis Mushait hotels, the cable car, and Asir highland resorts at Al Soudah. Ideal for families exploring Saudi Arabia's cooler southern mountains.",
    terminals: ["Main terminal"],
    popularDestinations: ["Abha", "Khamis Mushait", "Al Soudah", "Najran"],
    popularRoutes: [
      "abha-airport-to-jeddah",
      "abha-airport-to-riyadh",
    ],
    metaTitle: "Private Abha Airport Transfer (AHB) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Abha Airport (AHB) to Abha and Khamis Mushait hotels or the Al Soudah highland resorts. Fixed price, meet-and-greet pickup.",
  },
  {
    slug: "tabuk-airport",
    name: "Tabuk Regional Airport",
    code: "TUU",
    city: "Tabuk",
    citySlug: "tabuk",
    region: "Tabuk Province",
    intro:
      "Tabuk Regional Airport (TUU) serves the northwest and the NEOM region, with private transfers to Tabuk city and project areas.",
    about:
      "Our TUU airport service provides meet-and-greet arrivals and transfers to Tabuk hotels, NEOM project sites, and historic landmarks. A practical gateway for business travellers and tourists heading to the Red Sea northwest.",
    terminals: ["Main terminal"],
    popularDestinations: ["Tabuk", "NEOM", "AlUla", "Red Sea coast"],
    popularRoutes: [
      "tabuk-to-riyadh",
      "tabuk-to-alula",
      "tabuk-to-neom",
    ],
    metaTitle: "Private Tabuk Airport Transfer (TUU) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Tabuk Airport (TUU) to Tabuk hotels, NEOM project areas, or onward to AlUla. Fixed price, meet-and-greet pickup.",
  },
  {
    slug: "yanbu-airport",
    name: "Yanbu Airport",
    code: "YNB",
    city: "Yanbu",
    citySlug: "yanbu",
    region: "Madinah Province",
    intro:
      "Yanbu Airport (YNB) serves the Red Sea industrial and resort city, with private transfers to beaches, the industrial city, and Madinah.",
    about:
      "Our YNB airport service offers meet-and-greet arrivals and transfers to Yanbu resorts, the Royal Commission waterfront, and intercity rides to Madinah and Jeddah for both leisure and corporate travellers.",
    terminals: ["Main terminal"],
    popularDestinations: ["Yanbu", "Madinah", "Jeddah", "AlUla"],
    popularRoutes: [
      "yanbu-to-madinah",
      "yanbu-to-jeddah",
      "yanbu-to-riyadh",
    ],
    metaTitle: "Private Yanbu Airport Transfer (YNB) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Yanbu Airport (YNB) to Red Sea resorts, the Royal Commission waterfront, or onward to Madinah and Jeddah. Fixed price.",
  },
  {
    slug: "alula-airport",
    name: "Prince Abdul Majeed bin Abdulaziz Airport (AlUla)",
    code: "ULH",
    city: "AlUla",
    citySlug: "alula",
    region: "Madinah Province",
    intro:
      "AlUla International Airport (ULH) is the gateway to Hegra and the Kingdom's flagship heritage destination, with private transfers to resorts and heritage sites.",
    about:
      "Our ULH airport service provides meet-and-greet arrivals and transfers to AlUla resorts, the Old Town, Hegra (Madain Salih), and Maraya. Comfortable vehicles make desert touring and onward trips to Madinah and Tabuk easy.",
    terminals: ["Main terminal"],
    popularDestinations: ["AlUla", "Hegra", "Madinah", "Tabuk"],
    popularRoutes: [
      "alula-airport-to-alula",
      "alula-to-tabuk",
      "alula-to-neom",
      "alula-airport-to-riyadh",
      "alula-airport-to-jeddah",
    ],
    metaTitle: "Private AlUla Airport Transfer (ULH) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from AlUla Airport (ULH) to your resort or the Old Town, plus onward rides to Tabuk, NEOM, Riyadh, and Jeddah. Fixed price.",
  },
  {
    slug: "jazan-airport",
    name: "Jazan Airport",
    code: "GIZ",
    city: "Jazan",
    citySlug: "jazan",
    region: "Jazan Province",
    intro:
      "Jazan Airport (GIZ) serves the tropical southwest coast, with private transfers to the Farasan ferry terminal, the corniche, and the Fifa Mountains.",
    about:
      "Our GIZ airport service offers meet-and-greet arrivals and transfers to Jazan hotels, the Farasan Islands ferry terminal, and the Fifa Mountains, plus intercity rides to Abha and Najran.",
    terminals: ["Main terminal"],
    popularDestinations: ["Jazan", "Farasan ferry", "Abha", "Najran"],
    metaTitle: "Private Jazan Airport Transfer (GIZ) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Jazan Airport (GIZ) to the Farasan Islands ferry terminal, Jazan hotels, or onward to Abha and Najran. Fixed price.",
  },
  {
    slug: "hail-airport",
    name: "Hail Regional Airport",
    code: "HAS",
    city: "Hail",
    citySlug: "hail",
    region: "Hail Province",
    intro:
      "Hail Regional Airport (HAS) serves the historic northern desert city, with private transfers to Hail hotels, rock-art sites, and onward to AlUla.",
    about:
      "Our HAS airport service provides meet-and-greet arrivals and transfers to Hail city, A'arif Fort, the Jubbah rock-art sites, and intercity rides toward AlUla and Qassim.",
    terminals: ["Main terminal"],
    popularDestinations: ["Hail", "Jubbah", "AlUla", "Buraidah"],
    popularRoutes: [
      "hail-to-riyadh",
      "hail-to-madinah",
    ],
    metaTitle: "Private Hail Airport Transfer (HAS) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Hail Airport (HAS) to Hail city hotels, or onward to AlUla and Madinah. Fixed price, meet-and-greet pickup.",
  },
  {
    slug: "red-sea-airport",
    name: "Red Sea International Airport",
    code: "RSI",
    city: "Red Sea",
    region: "Tabuk Province",
    intro:
      "Red Sea International Airport (RSI) is the luxury aviation gateway to the Red Sea destination, with private transfers to island jetties, Umluj, and coastal resorts.",
    about:
      "We provide personalized meet-and-greet pickups at RSI, transferring guests in luxury 4x4 vehicles and executive vans to the Red Sea marine jetties, coastal island terminals, and mainland resorts. Flight monitoring ensures seamless connection with all international and domestic flights.",
    terminals: ["Main Passenger Terminal", "Private Aviation Terminal"],
    popularDestinations: ["St. Regis Red Sea Jetty", "Nujuma Ritz-Carlton Reserve", "Shebara Island Terminal", "Umluj", "Yanbu"],
    popularRoutes: [
      "red-sea-airport-to-umluj",
    ],
    metaTitle: "Private Red Sea Airport Transfer (RSI) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from Red Sea International Airport (RSI) to marine jetties, island resort connections, and onward to Umluj and Yanbu.",
  },
  {
    slug: "neom-bay-airport",
    name: "NEOM Bay Airport",
    code: "NUM",
    city: "NEOM",
    region: "Tabuk Province",
    intro:
      "NEOM Bay Airport (NUM) serves the Kingdom's flagship futuristic region, with private transfers to the NEOM Community, Sindalah Island connections, and Sharma.",
    about:
      "We provide executive meet-and-greet transfers from NEOM Bay Airport (NUM) to NEOM project sectors, Sharma, and coastal boat departures for Sindalah. Professional drivers and premium SUVs ensure smooth, punctual travel across the northwest.",
    terminals: ["Commercial Terminal", "Executive Aviation Terminal"],
    popularDestinations: ["Sindalah Marina Link", "NEOM Community 1 & 2", "Sharma", "Gayal", "Tabuk"],
    popularRoutes: [
      "tabuk-to-neom",
      "alula-to-neom",
    ],
    metaTitle: "Private NEOM Airport Transfer (NUM) | Saudi Private Transfers",
    metaDescription:
      "Private transfer from NEOM Bay Airport (NUM) to NEOM community sectors, Sindalah boat connections, or onward to Tabuk. Fixed price.",
  },
];

/** Base airport records enriched with long-form guide content by slug. */
export const airports: Airport[] = baseAirports.map((a) => ({
  ...a,
  ...airportGuides[a.slug],
}));

export const airportMap: Record<string, Airport> = Object.fromEntries(
  airports.map((a) => [a.slug, a])
);

export function getAirport(slug: string): Airport | undefined {
  return airportMap[slug];
}
