/**
 * Airport-specific content merged into data/airports.ts, powering the 13
 * individual /airport-transfer/{airport} pages (rendered via
 * components/airport-transfer/AirportTransferHub.tsx). Kept separate so the
 * base airport records in data/airports.ts stay readable.
 *
 * 2026 restructuring: replaced the old generic-travel-guide `sections`
 * (terminal deep-dives, "travel tips", tourist highlights) with a
 * commercially focused set of fields — a core-service paragraph, arrival
 * context, and a per-airport "major destinations" cluster (the one section
 * each page customizes, per the page architecture brief) — plus a trimmed,
 * airport-specific FAQ (6-8 questions). The meet & greet flow, vehicle
 * options, and booking steps are shared/universal across every airport (the
 * same real service, just interpolated with the airport's name and code)
 * and are built once in app/(main)/airport-transfer/[airport]/page.tsx
 * rather than repeated here.
 *
 * Content invents no terminal numbers, parking policies, meet-and-greet
 * procedures, or vehicle models beyond what data/vehicles.ts and
 * data/routes.ts actually support.
 */
import type { Faq } from "./faqs";

export interface AirportDestinationCluster {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

/** Per-airport overrides of base fields in data/airports.ts (guide values are spread over the base record). */
export interface AirportGuide {
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  about?: string;
  heroImage?: string;
  heroAlt?: string;
  hubOverrides?: import("@/data/airports").AirportHubOverrides;
  /** H2 #1 "Private Transfers from [Airport]" — no H3s. */
  coreServiceParagraph?: string;
  /** H2 #3 "Arriving at [Official Airport Name]" — no H3s. */
  arrivingParagraphs?: string[];
  /** H2 #5 "Transfers from [Airport] to Major Destinations" — the per-airport customization point. No H3s (prose cards). */
  destinationClusters?: AirportDestinationCluster[];
  /** Airport-specific FAQs (overrides the generated defaults; capped at 8). */
  faqs?: Faq[];
  /** Target keywords for this page (documentation/reference only). */
  keywords?: string[];
  /** ISO date this guide's content was last substantively reviewed/updated. */
  lastUpdated?: string;
}

export const airportGuides: Record<string, AirportGuide> = {
  // ── RIYADH · RUH ──────────────────────────────────────────────────────────
  "riyadh-airport": {
    lastUpdated: "2026-11-02",
    keywords: ["riyadh airport taxi", "king khalid airport transfer", "RUH airport pickup", "riyadh airport to hotel", "private transfer from riyadh airport"],
    coreServiceParagraph:
      "We provide private, pre-booked road transfers to and from Riyadh — hotels, offices and homes in the city, and onward journeys to other Saudi cities and neighbouring countries. Tell us your pickup point, destination, travel date, passengers and luggage, and we reply with a quotation; the confirmed quotation sets the price and shows what it covers. Pickups and drop-offs at King Khalid International Airport can be requested; each is subject to availability and confirmed individually in your quotation.",
    arrivingParagraphs: [
      "Before arranging anything, confirm with your airline that your flight is operating and which airport and terminal it now uses. King Khalid International Airport is organised across several terminals, so share your airline and flight number when you request a quote.",
      "If your flight now uses a different airport, tell us which one — we can quote a road transfer between that airport and your address in Riyadh. Whether a pickup or drop-off at King Khalid International Airport can be arranged, and where you would meet your driver, is confirmed in your quotation.",
    ],
    destinationClusters: [
      {
        title: "Riyadh Business and Corporate Transfers",
        body: "Private transfers to Olaya, King Abdullah Financial District and the Diplomatic Quarter for business travellers and visiting teams, priced in a quotation you confirm before you travel.",
        href: "/taxi-service/riyadh",
        linkLabel: "Riyadh taxi service",
      },
      {
        title: "Riyadh Hotel Transfers",
        body: "Pickup and drop-off at hotels across the capital, arranged and priced in a quotation before you travel.",
        href: "/cities/riyadh",
        linkLabel: "Riyadh hotel coverage",
      },
      {
        title: "Eastern Province and Qassim Intercity",
        body: "Private long-distance transfers from Riyadh toward Dammam, Khobar, Qassim and Hail, including Qassim airport on the Qassim–Riyadh route.",
        href: "/intercity-transfers",
        linkLabel: "Intercity transfer service",
      },
      {
        title: "Jeddah, Makkah, and Madinah Connections",
        body: "Overland transfers from Riyadh toward the western region, including Umrah journeys to Makkah and Madinah for pilgrims travelling by road.",
        href: "/umrah-taxi-service",
        linkLabel: "Umrah transfer service",
      },
    ],
    faqs: [
      {
        question: "Which terminal will I use at King Khalid International Airport?",
        answer:
          "Terminal arrangements at King Khalid International Airport can change. Confirm your flight and your arrival or departure terminal with your airline before you travel, and include the terminal in your request if you know it.",
      },
      {
        question: "Can you pick me up or drop me off at Riyadh airport?",
        answer:
          "Yes, you can request a pickup or drop-off at King Khalid International Airport. Each transfer is subject to availability and confirmed individually: send your flight number, terminal, pickup requirements and destination, and the meeting point and price are confirmed in your quotation.",
      },
      {
        question: "My flight was moved to another airport. Can you drive me to Riyadh?",
        answer:
          "Yes. We can quote road transfers to Riyadh from Qassim (including Prince Naif bin Abdulaziz International Airport), Dammam Airport, Madinah Airport and Jeddah Airport. Share the airport, your flight number and your Riyadh address.",
      },
      {
        question: "Can I travel by road from Riyadh to another Saudi city or a neighbouring country?",
        answer:
          "Yes. We arrange private transfers from Riyadh to other Saudi cities, and on our listed routes to Bahrain, Qatar, Kuwait and the UAE. For cross-border journeys we coordinate the transport; passengers and drivers must confirm the applicable travel documents, entry requirements, insurance, permits, border-crossing requirements and fees.",
      },
      {
        question: "How is the price for a Riyadh transfer set?",
        answer:
          "You receive a quotation for your journey before you travel. The confirmed quotation sets the price and shows what it covers, so check that it includes anything you need, such as extra stops or waiting time.",
      },
      {
        question: "Can families or groups book a private transfer?",
        answer:
          "Yes. Tell us your passenger and luggage numbers when you request a quote and a suitable vehicle is offered in your quotation. If you need child seats, ask before you confirm.",
      },
      {
        question: "What information do you need for a quote?",
        answer:
          "Your pickup point and destination, travel date and preferred time, number of passengers and pieces of luggage, and your airline and flight number if your journey connects to a flight.",
      },
      {
        question: "How far in advance should I request a transfer?",
        answer:
          "Send your request as soon as your plans are confirmed. Availability for your date and time is confirmed in your quotation.",
      },
    ],
  },

  // ── JEDDAH · JED ──────────────────────────────────────────────────────────
  "jeddah-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["jeddah airport taxi", "king abdulaziz airport transfer", "jeddah airport to makkah", "JED to madinah taxi", "private transfer from jeddah airport"],
    coreServiceParagraph:
      "King Abdulaziz International Airport is the Kingdom's busiest pilgrim gateway, and we provide private transfers from arrivals straight to your Jeddah hotel or onward to Makkah and Madinah. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price — with luggage assistance and time allowed for prayer or rest stops on longer journeys. The price is agreed before you fly, so a long immigration queue or a late landing never changes what you pay. Larger vehicles are available on request for pilgrim groups travelling with extra luggage or Zamzam water.",
    arrivingParagraphs: [
      "JED handles both a main international terminal and a dedicated Hajj Terminal used during peak Hajj and Umrah seasons. Share your airline and flight number when booking so your driver waits at the correct arrivals hall rather than another part of the airport.",
      "After immigration, baggage claim, and customs, your driver is waiting in the arrivals hall with a name board — useful during the large banks of pilgrim flights that can make immigration queues longer than usual, so you can move at your own pace without worrying about the wait.",
    ],
    destinationClusters: [
      {
        title: "Jeddah Airport to Makkah",
        body: "Direct private transfers from JED to Makkah hotels near the Haram, roughly 90 km, commonly arranged as part of an Umrah journey.",
        href: "/umrah-taxi-service",
        linkLabel: "Umrah transfer service",
      },
      {
        title: "Jeddah Airport to Madinah",
        body: "A longer private drive onward to Madinah, about 420 km, with flexible rest and prayer stops for pilgrims travelling to the Prophet's Mosque.",
        href: "/routes/jeddah-to-madinah",
        linkLabel: "Jeddah to Madinah route",
      },
      {
        title: "Jeddah City and Hotel Transfers",
        body: "Fixed-price pickup to hotels near the Corniche and across Jeddah, plus local trips, sightseeing, and business travel around the city.",
        href: "/taxi-service/jeddah",
        linkLabel: "Jeddah taxi service",
      },
      {
        title: "Taif and Yanbu Connections",
        body: "Onward private transfers from JED to the cool mountain city of Taif or the Red Sea resort coast at Yanbu, for travellers continuing their trip.",
        href: "/routes/jeddah-to-taif",
        linkLabel: "Jeddah to Taif route",
      },
    ],
    faqs: [
      {
        question: "How long is the transfer from Jeddah Airport to Makkah?",
        answer:
          "Makkah is about 90 km from King Abdulaziz Airport, typically a 60–90 minute drive door-to-door to your hotel, depending on traffic and the time of day you land.",
      },
      {
        question: "Can you take me from Jeddah Airport to Madinah?",
        answer:
          "Yes. Madinah is roughly 420 km from JED. We drive directly to your hotel, with flexible rest and prayer stops on this longer route for your comfort.",
      },
      {
        question: "Which terminal handles Umrah and Hajj flights at JED?",
        answer:
          "The main terminal handles most international arrivals year-round, while the dedicated Hajj Terminal operates in peak Hajj and Umrah seasons. Confirm your terminal with your airline before travel.",
      },
      {
        question: "Where will I meet my driver at Jeddah Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear customs and collect your bags. Your driver helps with luggage on the way to the vehicle.",
      },
      {
        question: "What happens if my flight to Jeddah is delayed?",
        answer:
          "We track your flight and your driver waits regardless of arrival time, with free wait time included, so a delay never changes your fixed price or your booking.",
      },
      {
        question: "Can I book a Jeddah Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and passenger count, and we'll confirm a driver and a fixed price for direct pickup to your Jeddah hotel.",
      },
      {
        question: "Can families or pilgrim groups book private transfers from JED?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups travelling with luggage or Zamzam water, and request child seats when you book your transfer.",
      },
      {
        question: "How far ahead should I book during Ramadan or peak Umrah season?",
        answer:
          "Book at least a week ahead where possible during Ramadan and busy Umrah months, when flight banks are largest and vehicle demand is at its highest.",
      },
    ],
  },

  // ── MADINAH · MED ─────────────────────────────────────────────────────────
  "madinah-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["madinah airport taxi", "prince mohammad airport transfer", "MED airport pickup", "madinah airport to makkah", "private transfer from madinah airport"],
    coreServiceParagraph:
      "Prince Mohammad bin Abdulaziz International Airport sits close to the Prophet's Mosque, and we provide private transfers from arrivals directly to your Madinah hotel or onward to Makkah and Ziyarat sites. Your driver tracks your flight, meets you in the arrivals hall, and drives you door-to-door at a fixed price agreed before you travel, with time allowed for prayer or rest stops on longer legs. Luggage assistance is included, and larger vehicles are available on request for families or groups travelling together.",
    arrivingParagraphs: [
      "MED handles both international and domestic flights through a single, straightforward arrivals flow — immigration, baggage claim, then the arrivals hall where your driver waits with a name board, ready as soon as you come through.",
      "Central Madinah around the Prophet's Mosque has entry rules for non-Muslim visitors; please verify the current regulations that apply to your trip before you travel and let us know your hotel so we can plan the most direct route to your door.",
      "Because MED is one of the shortest airport-to-Haram distances in the Kingdom, many travellers are checked into their hotel within half an hour of landing.",
    ],
    destinationClusters: [
      {
        title: "Madinah Hotel Transfers",
        body: "Direct pickup and drop-off at hotels near the Haram, with luggage assistance and a fixed price agreed before you travel, day or night.",
        href: "/taxi-service/madinah",
        linkLabel: "Madinah taxi service",
      },
      {
        title: "Madinah Airport to Makkah",
        body: "A private door-to-door transfer to Makkah, roughly 420 km, with flexible rest and prayer stops along the way for a comfortable journey.",
        href: "/routes/madinah-to-makkah",
        linkLabel: "Madinah to Makkah route",
      },
      {
        title: "Ziyarat Transportation",
        body: "Private transport to Ziyarat sites such as Quba Mosque and Mount Uhud, arranged around your Madinah stay with a driver who waits between stops.",
        href: "/ziyarat-taxi-service",
        linkLabel: "Ziyarat transfer service",
      },
      {
        title: "AlUla Connections",
        body: "Onward private transfers from Madinah toward AlUla for travellers continuing to the northwest heritage region after their Madinah stay.",
        href: "/airport-transfer/alula-airport",
        linkLabel: "AlUla Airport transfers",
      },
    ],
    faqs: [
      {
        question: "How far is Madinah Airport from the Prophet's Mosque?",
        answer:
          "The airport is about 15 km from the Prophet's Mosque, usually a 20–30 minute drive door-to-door to hotels around the Haram, depending on traffic.",
      },
      {
        question: "Can non-Muslims travel into central Madinah?",
        answer:
          "Central Madinah around the Prophet's Mosque has entry rules for non-Muslim visitors. Please verify the current regulations that apply to your trip before you travel.",
      },
      {
        question: "Can you drive me from Madinah Airport to Makkah?",
        answer:
          "Yes. We provide private door-to-door transfers from Madinah to Makkah, roughly 420 km, with flexible rest and prayer stops on the way for your comfort.",
      },
      {
        question: "Do you arrange Ziyarat transfers from Madinah?",
        answer:
          "Yes. We provide private transport to Ziyarat sites such as Quba Mosque and the Uhud area, with a driver and vehicle for your group who waits between stops.",
      },
      {
        question: "Where will I meet my driver at Madinah Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear customs and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to Madinah is delayed?",
        answer:
          "We track your flight and adjust pickup automatically, with free wait time included, so your driver is waiting whenever you actually land.",
      },
      {
        question: "Can I book a Madinah Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and pickup time, and we'll confirm a fixed price and a driver for direct pickup to your Madinah hotel.",
      },
      {
        question: "How far in advance should I book a Madinah airport transfer?",
        answer:
          "A day or two ahead is usually sufficient outside peak season. During Ramadan and busy Umrah periods, book at least a week ahead to secure your preferred vehicle class.",
      },
    ],
  },

  // ── DAMMAM · DMM ──────────────────────────────────────────────────────────
  "dammam-airport": {
    lastUpdated: "2026-11-21",
    keywords: ["dammam airport taxi", "king fahd airport transfer", "DMM to khobar taxi", "dammam airport to bahrain", "private transfer from dammam airport"],
    coreServiceParagraph:
      "King Fahd International Airport serves the whole Eastern Province metro of Dammam, Khobar, and Dhahran, and we provide private transfers from the airport directly to your hotel, office, or onward across the King Fahd Causeway to Bahrain. We track your flight, your driver meets you at the confirmed meeting point, and the confirmed quotation sets the price before you travel — the same process whether you're arriving for business or leisure. Larger vehicles can be requested for groups or corporate teams travelling together.",
    arrivingParagraphs: [
      "International and domestic flights share a single main terminal at DMM, with a clear arrivals flow. Share your airline and flight number when booking so your driver is ready and positioned correctly when you land.",
      "After immigration and baggage claim, head to the meeting point confirmed in your booking. Because we track your flight, your pickup is reconfirmed if your landing time changes — useful for business travellers moving quickly to a meeting across the Eastern Province.",
    ],
    destinationClusters: [
      {
        title: "Khobar and Jubail Transfers",
        body: "Direct transfers from DMM to Khobar's corniche hotels, Dhahran, and the industrial hub of Jubail, priced and confirmed before you land.",
        href: "/taxi-service/dammam",
        linkLabel: "Dammam taxi service",
      },
      {
        title: "Dammam Hotel and Business Transfers",
        body: "Pickup to hotels and corporate destinations across the Eastern Province, priced in a quotation you confirm before you travel, with a driver who knows the area.",
        href: "/dammam/dammam-airport-to-hotels",
        linkLabel: "Dammam Airport to hotels",
      },
      {
        title: "Abqaiq and Project Sites",
        body: "Direct transfers from DMM to Abqaiq town, accommodation and confirmed project-site meeting points about 100 km away. Restricted sites need your own access permission.",
        href: "/routes/dammam-airport-to-abqaiq",
        linkLabel: "Dammam Airport to Abqaiq transfer",
      },
      {
        title: "Bahrain Causeway Crossing",
        body: "Private cross-border transfers over the King Fahd Causeway to Manama, with valid travel documents required for the crossing on both sides.",
        href: "/border-transfers/bahrain-causeway",
        linkLabel: "Bahrain Causeway transfer",
      },
      {
        title: "Riyadh and Eastern Province Intercity",
        body: "Private long-distance transfers from DMM toward Riyadh and other Eastern Province destinations, for travellers continuing overland rather than flying.",
        href: "/intercity-transfers",
        linkLabel: "Intercity transfer service",
      },
    ],
    faqs: [
      {
        question: "How far is King Fahd Airport from Khobar and Dammam?",
        answer:
          "By road, the airport is roughly 35–45 km from central Dammam and the Corniche, and about 55–60 km from central Al Khobar, depending on your district. Drive time depends on traffic and the time of day; share your address when you request a quote.",
      },
      {
        question: "Can you take me from Dammam Airport to Bahrain?",
        answer:
          "Yes. We provide private transfers over the King Fahd Causeway to Manama and anywhere in Bahrain. You'll need valid travel documents; please verify current visa rules before you travel.",
      },
      {
        question: "Where will I meet my driver at Dammam Airport?",
        answer:
          "At the meeting point confirmed individually when you book. You receive the pickup instructions before you travel.",
      },
      {
        question: "Do you serve Jubail and Dhahran from DMM?",
        answer:
          "Yes. We run private transfers from the airport to Jubail, Dhahran, Abqaiq and Khobar's corniche hotels, priced in your quotation. Drop-offs at industrial or restricted sites are made at a gate or approved meeting point, and site access needs your own permission.",
      },
      {
        question: "What happens if my flight to Dammam is delayed?",
        answer:
          "We track your flight and plan the pickup around your actual landing time. Waiting arrangements are set out in your quotation.",
      },
      {
        question: "Can I book a Dammam Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and arrival time — we reply with a quotation, and the confirmed quotation sets the price.",
      },
      {
        question: "Are vehicles suitable for business and corporate travel from DMM?",
        answer:
          "Yes. Choose a Comfort or Premium vehicle for corporate trips, or an SUV, van, or minibus for groups and extra luggage travelling together.",
      },
      {
        question: "How far in advance should I book a Dammam airport transfer?",
        answer:
          "A day ahead is typically enough for a standard pickup. For a Bahrain crossing, book a little earlier so the trip can be planned around border timing and queues.",
      },
    ],
  },

  // ── TAIF · TIF ────────────────────────────────────────────────────────────
  "taif-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["taif airport taxi", "taif regional airport transfer", "taif airport to makkah", "private transfer from taif airport", "taif to jeddah transfer"],
    coreServiceParagraph:
      "Taif Regional Airport serves the cool mountain city above Makkah, and we provide private transfers from arrivals to your Taif hotel or onward down the mountain to Makkah and Jeddah. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price agreed before you travel, with luggage assistance and a larger vehicle available on request.",
    arrivingParagraphs: [
      "Taif's single terminal keeps arrivals simple: clear immigration, collect your bags, and meet your driver in the arrivals hall. Share your flight number and hotel when you book so your driver is ready as you exit.",
      "Taif's higher altitude — around 1,800 metres — makes it noticeably cooler than Makkah and Jeddah, a detail worth knowing if you're arriving straight from the coast and packed for the heat.",
    ],
    destinationClusters: [
      {
        title: "Taif Airport Transfers to Makkah",
        body: "A private drive down the Al Hada mountain road to Makkah, roughly 90 km, commonly used by pilgrims combining Umrah with a highland stay.",
        href: "/routes/taif-to-makkah",
        linkLabel: "Taif to Makkah route",
      },
      {
        title: "Taif Airport Transfers to Jeddah",
        body: "Onward private transfers from Taif to Jeddah city and Jeddah Airport, with a fixed price agreed before you travel down the mountain.",
        href: "/routes/taif-to-jeddah",
        linkLabel: "Taif to Jeddah route",
      },
      {
        title: "Taif City and Hotel Transfers",
        body: "Direct pickup to Taif hotels and local trips around the city, arranged as part of your arrival or booked separately for your stay.",
        href: "/taxi-service/taif",
        linkLabel: "Taif taxi service",
      },
    ],
    faqs: [
      {
        question: "How long is the drive from Taif Airport to Makkah?",
        answer:
          "Makkah is about 90 km from Taif via the Al Hada mountain road, usually around a 90 minute drive with careful handling of the switchbacks by an experienced local driver.",
      },
      {
        question: "Can you take me from Taif Airport to Jeddah?",
        answer:
          "Yes. We provide private transfers from Taif to Jeddah city and Jeddah Airport, with fixed pricing agreed before you travel down the mountain.",
      },
      {
        question: "Where will I meet my driver at Taif Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear immigration and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to Taif is delayed?",
        answer:
          "We track your flight and your driver waits, with free wait time included, so a delay doesn't affect your fixed price or your booking.",
      },
      {
        question: "Can families or groups book private transfers from Taif Airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for families or groups, and request child seats when you book your transfer.",
      },
      {
        question: "Can I book a Taif Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and passenger count, and we'll confirm a fixed price and a driver for direct pickup to your hotel.",
      },
      {
        question: "How far ahead should I book during Taif's summer escape season?",
        answer:
          "Book a few days ahead during the peak summer months, when Taif sees the most demand as a cool-weather retreat from Makkah and Jeddah.",
      },
      {
        question: "Can I combine a Taif Airport arrival with an onward Umrah trip to Makkah?",
        answer:
          "Yes. Many travellers land at Taif, spend a day or two in the highlands, then continue down the Al Hada road to Makkah — mention this plan when you book so both legs are arranged together.",
      },
    ],
  },

  // ── ABHA · AHB ────────────────────────────────────────────────────────────
  "abha-airport": {
    // AHB consistency pass (24 Nov 2026). Abha airport operating arrangements are NOT
    // owner-confirmed: no name-board / arrivals-hall meet-and-greet, no automatic flight
    // tracking, no free waiting, no luggage-help or fixed-price claims. Meeting point is
    // confirmed individually; quotation-based pricing. Child seats on request (owner).
    // Distances OSRM: airport → central Abha ≈20 km, → central Khamis Mushait ≈20 km.
    lastUpdated: "2026-11-24",
    keywords: ["abha airport taxi", "abha international airport transfer", "khamis mushait airport pickup", "private transfer from abha airport", "asir highlands transfer"],
    metaTitle: "Abha Airport Transfers (AHB) | Private Pickup to Abha",
    metaDescription:
      "Private transfers from Abha International Airport (AHB) to Abha, Khamis Mushait and the Asir highlands. Share your flight and destination to receive a quotation.",
    about:
      "Private transfers from Abha International Airport to hotels and addresses in Abha and Khamis Mushait, mountain destinations such as Al-Soudah, and onward cities, each arranged by quotation.",
    heroImage: "/images/asir/abha-city-view.webp",
    heroAlt: "View over Abha's buildings towards mountains under heavy cloud",
    coreServiceParagraph:
      "Abha International Airport (AHB) lies about 20 km by road east of central Abha, towards Khamis Mushait. We provide private, pre-booked transfers from the airport to hotels, homes and offices in Abha and Khamis Mushait, to highland destinations such as Al-Soudah, and onward to other cities. Share your flight details and exact destination when you request a quotation; the meeting point is confirmed individually with your booking, and the confirmed quotation sets the price and explains what it covers.",
    arrivingParagraphs: [
      "After landing, complete arrival formalities and collect your luggage as usual, then go to the pickup point confirmed with your booking. Please follow those instructions rather than expecting a particular meeting arrangement in the terminal.",
      "Abha's altitude of over 2,000 metres keeps it noticeably cooler and often misty compared with much of the Kingdom, which is worth knowing if you're arriving from a warmer city.",
    ],
    destinationClusters: [
      {
        title: "Abha and Khamis Mushait",
        body: "Transfers to hotels, homes and offices in both cities, plus local trips around Abha, each priced in a quotation you confirm.",
        href: "/taxi-service/abha",
        linkLabel: "Private transfers in Abha",
      },
      {
        title: "Al-Soudah and the highlands",
        body: "Transfers towards Al-Soudah, among the highest ground in Saudi Arabia, and other mountain destinations. Mountain fog can affect timing; any stops or waiting are set out in your quotation.",
      },
      {
        title: "Jazan and Najran connections",
        body: "Private intercity transfers linking Abha with the coast at Jazan and inland to Najran can be requested and quoted for a combined southern itinerary.",
        href: "/airport-transfer/jazan-airport",
        linkLabel: "Jazan Airport transfers",
      },
    ],
    hubOverrides: {
      popularIntro: "Long-distance road transfers from Abha International Airport, each priced in a quotation you confirm.",
      popularCardBody: undefined,
      meetGreetHeading: "Airport pickup at Abha International Airport",
      meetGreetIntro: "How a pickup at AHB is arranged, from your request to the start of the drive.",
      meetGreetSteps: [
        { title: "Before your flight", detail: "Share your airline, flight number, arrival date and time and your destination when you request a quotation." },
        { title: "Your quotation", detail: "The meeting point is confirmed individually with your booking, together with the vehicle and the price. If your flight changes, message us." },
        { title: "After landing", detail: "Collect your luggage and go to the pickup point confirmed with your booking for the drive to your destination." },
      ],
      familyParagraph:
        "Travelling with children, older relatives or a larger group? Tell us your passenger and luggage numbers when you enquire so a suitable SUV, van or minibus can be quoted. Child seats can be provided on request, subject to availability: please share the number of seats and the children's ages.",
      bookingIntro: "Four steps from your first message to a confirmed pickup.",
      bookingSteps: [
        { title: "1. Send your journey details", detail: "Your flight details, arrival date and destination (hotel, city or onward route) by WhatsApp or the quote form." },
        { title: "2. Receive your quotation", detail: "A price and a vehicle recommendation. The confirmed quotation sets the price and explains what it covers." },
        { title: "3. Confirm", detail: "Nothing is booked until you confirm; the quotation sets out its payment and cancellation terms." },
        { title: "4. Follow your pickup arrangements", detail: "Go to the meeting point confirmed individually with your booking at Abha International Airport." },
      ],
      finalCtaText: "Add your flight details and destination, and we'll reply with a quotation; the meeting point is confirmed with your booking.",
    },
    faqs: [
      {
        question: "How far is Abha Airport from Abha and Khamis Mushait?",
        answer: "About 20 km by road to central Abha, and about the same to central Khamis Mushait. Your exact address sets the distance.",
      },
      {
        question: "Can I arrange a transfer to Al-Soudah from Abha Airport?",
        answer: "Yes, it can be requested. Al-Soudah is in the mountains beyond Abha; mention any stops or waiting time so they can be included in your quotation.",
      },
      {
        question: "Where will I meet my driver at Abha Airport?",
        answer: "At the meeting point confirmed individually with your booking. Please follow those instructions rather than expecting a particular spot or sign.",
      },
      {
        question: "What happens if my flight to Abha is delayed?",
        answer: "Message us with the new arrival time as soon as you know it. Any waiting arrangements are set out in your confirmed quotation.",
      },
      {
        question: "Can families or groups book private transfers from Abha Airport?",
        answer: "Yes. Share your passenger and luggage numbers so a suitable vehicle can be quoted. Child seats can be provided on request, subject to availability; tell us the number of seats and the children's ages.",
      },
      {
        question: "Can I book an Abha Airport to hotel transfer?",
        answer: "Yes. Share your hotel name, flight details and arrival time; you receive a quotation, and the confirmed quotation sets the price and explains what it covers.",
      },
      {
        question: "How far ahead should I book in the summer season?",
        answer: "As early as you can. Summer brings Abha's highest visitor numbers, so an early request gives the best chance of confirming the vehicle you need.",
      },
      {
        question: "Can I travel from Abha Airport to Riyadh or Jeddah by road?",
        answer: "Yes. Riyadh is about 935–950 km and Jeddah about 695–705 km from the airport by road; both are long single-day journeys quoted individually.",
      },
    ],
  },


  // ── TABUK · TUU ───────────────────────────────────────────────────────────
  "tabuk-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["tabuk airport taxi", "tabuk regional airport transfer", "tabuk to neom taxi", "private transfer from tabuk airport", "tabuk airport pickup"],
    coreServiceParagraph:
      "Tabuk Regional Airport serves the northwest of the Kingdom, and we provide private transfers from arrivals to Tabuk hotels, NEOM project areas, and onward toward AlUla. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price agreed before you travel, with a comfortable vehicle for the region's longer distances.",
    arrivingParagraphs: [
      "Tabuk's single terminal keeps arrivals straightforward, and your driver waits in the hall with a name board. Tell us your flight and destination when you book — whether it's a city hotel, a project site, or an onward drive.",
      "Winters in the Tabuk highlands can be genuinely cold, occasionally with frost, so pack accordingly if you're travelling outside the warmer months.",
    ],
    destinationClusters: [
      {
        title: "Transfers from Tabuk Airport to NEOM",
        body: "Private transfers from TUU toward NEOM project areas, roughly 180 km, with comfortable vehicles and planned rest stops for the distance involved.",
        href: "/routes/tabuk-to-neom",
        linkLabel: "Tabuk to NEOM route",
      },
      {
        title: "Transfers from Tabuk Airport to AlUla",
        body: "Onward private transfers toward AlUla for heritage sightseeing at Hegra and the Old Town, with a driver experienced on the northwest's longer routes.",
        href: "/routes/tabuk-to-alula",
        linkLabel: "Tabuk to AlUla route",
      },
      {
        title: "Tabuk City and Hotel Transfers",
        body: "Direct pickup to Tabuk hotels and local trips around the city for business and leisure travellers, priced before you land.",
        href: "/taxi-service/tabuk",
        linkLabel: "Tabuk taxi service",
      },
    ],
    faqs: [
      {
        question: "Can you take me from Tabuk Airport to NEOM?",
        answer:
          "Yes. We provide private transfers from Tabuk Airport toward NEOM project areas, roughly 180 km, with comfortable vehicles and rest stops for the distance involved.",
      },
      {
        question: "How far is AlUla from Tabuk Airport?",
        answer:
          "AlUla is a long drive from Tabuk across the northwest. We provide private transfers with comfortable vehicles for the distance; request a fixed quote with your timing and travel date.",
      },
      {
        question: "Where will I meet my driver at Tabuk Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear immigration and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to Tabuk is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price or your booking.",
      },
      {
        question: "Can I book a Tabuk Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and pickup time, and we'll confirm a fixed price and a driver for direct pickup to your hotel.",
      },
      {
        question: "Can families or business groups book private transfers from Tabuk Airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups or extra luggage, and request child seats when you book your transfer.",
      },
      {
        question: "How should NEOM-bound business travellers book from Tabuk Airport?",
        answer:
          "Share your project site or meeting location and arrival time when booking. For frequent trips, ask our team about a corporate account for recurring bookings.",
      },
      {
        question: "Is the fare fixed for long routes like Tabuk to NEOM or AlUla?",
        answer:
          "Yes, the price is agreed and fixed before you travel based on your exact destination, regardless of how long the drive takes on the day.",
      },
    ],
  },

  // ── YANBU · YNB ───────────────────────────────────────────────────────────
  "yanbu-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["yanbu airport taxi", "yanbu airport transfer", "yanbu to madinah taxi", "private transfer from yanbu airport", "yanbu resort transfer"],
    coreServiceParagraph:
      "Yanbu Airport serves the Red Sea industrial and resort city, and we provide private transfers from arrivals to Yanbu resorts, the industrial city, and onward to Madinah and Jeddah. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price agreed before you travel, with space for dive gear or extra luggage on request.",
    arrivingParagraphs: [
      "Yanbu's single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage. Tell us your flight and destination and your driver will be ready on arrival.",
      "The coast is hot and humid for much of the year, so vehicles are air-conditioned throughout and drivers carry water on longer trips such as the inland drive to Madinah.",
    ],
    destinationClusters: [
      {
        title: "Yanbu Airport to Madinah",
        body: "A private inland transfer to Madinah, commonly arranged alongside an Umrah or Ziyarat itinerary, with rest and prayer stops on the way.",
        href: "/routes/yanbu-to-madinah",
        linkLabel: "Yanbu to Madinah route",
      },
      {
        title: "Yanbu Resort and Corniche Transfers",
        body: "Direct pickup to Yanbu's Red Sea resorts, the corniche, and the Royal Commission waterfront, priced before you land.",
        href: "/taxi-service/yanbu",
        linkLabel: "Yanbu taxi service",
      },
      {
        title: "Yanbu Airport to Jeddah",
        body: "Onward private transfers from Yanbu to Jeddah city and Jeddah Airport for connecting travel or an international departure.",
        href: "/routes/yanbu-to-jeddah",
        linkLabel: "Yanbu to Jeddah route",
      },
    ],
    faqs: [
      {
        question: "Can you take me from Yanbu Airport to Madinah?",
        answer:
          "Yes. We provide private transfers from Yanbu to Madinah, an inland drive, door-to-door to your hotel with rest and prayer stops available.",
      },
      {
        question: "Do you serve Yanbu's beach resorts and industrial city?",
        answer:
          "Yes. We transfer to Red Sea resorts, the corniche, the Royal Commission waterfront, and the industrial city, with meet & greet on arrival.",
      },
      {
        question: "Where will I meet my driver at Yanbu Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear immigration and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to Yanbu is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price or your booking.",
      },
      {
        question: "Can I book a Yanbu Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and pickup time, and we'll confirm a fixed price and a driver for direct pickup to your hotel.",
      },
      {
        question: "Can families or dive groups book private transfers from Yanbu Airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups, families, or dive teams carrying equipment, and request child seats when you book.",
      },
      {
        question: "How much luggage or dive equipment can I bring?",
        answer:
          "A sedan suits standard luggage; for dive gear or extra bags, choose an SUV or van when you book so there's enough space for everything.",
      },
      {
        question: "Can I book a return transfer from Yanbu back to the airport in advance?",
        answer:
          "Yes. You can book your return airport transfer at the same time as your arrival pickup, which is useful if you're on a tight departure schedule.",
      },
    ],
  },

  // ── ALULA · ULH ───────────────────────────────────────────────────────────
  "alula-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["alula airport taxi", "alula international airport transfer", "alula airport to hegra", "private transfer from alula airport", "alula resort transfer"],
    coreServiceParagraph:
      "AlUla International Airport is the gateway to one of the Kingdom's flagship heritage destinations, and we provide private transfers from arrivals to AlUla's resorts and onward for sightseeing across your stay. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price agreed before you travel, with a driver available for touring beyond the initial pickup.",
    arrivingParagraphs: [
      "AlUla's single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage. Tell us your resort or hotel and arrival time and we'll plan a direct transfer.",
      "AlUla is a managed destination with a busy cooler-season events calendar, so days can be warm with cooler evenings — worth knowing if you're arriving during the peak visitor months.",
    ],
    destinationClusters: [
      {
        title: "AlUla Resort and Hotel Transfers",
        body: "Direct pickup to AlUla's resorts and the Old Town, plus a driver available for sightseeing between sites across your whole stay.",
        href: "/taxi-service/alula",
        linkLabel: "AlUla taxi service",
      },
      {
        title: "Tabuk and NEOM Connections",
        body: "Onward private transfers from AlUla toward Tabuk and the NEOM region for travellers continuing across the northwest by road.",
        href: "/routes/alula-to-tabuk",
        linkLabel: "AlUla to Tabuk route",
      },
      {
        title: "Riyadh and Jeddah Long-Distance Transfers",
        body: "Private long-distance transfers from AlUla Airport to Riyadh or Jeddah for onward domestic or international flight connections.",
        href: "/routes/alula-airport-to-riyadh",
        linkLabel: "AlUla Airport to Riyadh route",
      },
    ],
    faqs: [
      {
        question: "How far is AlUla Airport from the Old Town and Hegra?",
        answer:
          "The airport is a short drive from AlUla's resorts and Old Town, with the heritage sites at Hegra a little further out — all reached comfortably by private car.",
      },
      {
        question: "Can you provide a driver for touring AlUla?",
        answer:
          "Yes. We can arrange a private driver and vehicle for hotel transfers and sightseeing across your stay, moving between sites at your own pace rather than a fixed tour schedule.",
      },
      {
        question: "Can you take me from AlUla Airport to Tabuk?",
        answer:
          "Yes. We provide private onward transfers from AlUla to Tabuk, with comfortable vehicles for the desert route and planned rest stops.",
      },
      {
        question: "Where will I meet my driver at AlUla Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear immigration and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to AlUla is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price or your booking.",
      },
      {
        question: "Can I book an AlUla Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel or resort name, flight details, and pickup time, and we'll confirm a fixed price and a driver for direct pickup.",
      },
      {
        question: "Can families or groups book private transfers from AlUla Airport?",
        answer:
          "Yes. Choose an SUV or van for families and groups with luggage, and request child seats when you book your transfer.",
      },
      {
        question: "How far ahead should I book during AlUla's peak events season?",
        answer:
          "Book well ahead during the cooler-season events calendar, when AlUla's resorts and transfers see their highest demand of the year.",
      },
    ],
  },

  // ── JAZAN · GIZ ───────────────────────────────────────────────────────────
  "jazan-airport": {
    // GIZ consistency pass (24 Nov 2026). GIZ arrangements are NOT owner-confirmed: no
    // name-board / arrivals-hall meet-and-greet, no automatic flight tracking, no free
    // waiting, no luggage-help or fixed-price claims; meeting point confirmed individually;
    // quotation-based pricing; child seats on request. Ferry: road transfer to/from the Jazan
    // ferry terminal only (owner confirmed return pickups, 24 Nov 2026); crossing, tickets,
    // schedules and on-island transport not included. OSRM: airport → centre ≈4 km, →
    // ferry terminal ≈7 km, → Fayfa ≈100 km, → Abha ≈200–215 km, → Riyadh 1,140 km.
    lastUpdated: "2026-11-24",
    keywords: ["jazan airport taxi", "jazan airport transfer", "private transfer from jazan airport", "jazan airport to farasan ferry", "jazan airport pickup"],
    metaTitle: "Jazan Airport Transfers (GIZ) | Private Pickup in Jazan",
    intro:
      "Jazan Airport (GIZ) is about 4 km from central Jazan, with private transfers to the city and corniche, the Farasan Islands ferry terminal, the Fayfa Mountains and onward cities.",
    metaDescription:
      "Private transfers from Jazan Airport (GIZ) to Jazan hotels, the Farasan ferry terminal, the Fayfa Mountains, Abha and Najran. Share your flight details for a quotation.",
    about:
      "Private transfers from Jazan Airport (GIZ) to hotels and addresses in Jazan, the Farasan Islands ferry terminal, the Fayfa Mountains and onward cities, each arranged by quotation.",
    heroImage: "/images/jazan/jazan-mangroves.webp",
    heroAlt: "Flamingos wading in shallow water in front of mangrove trees on the Jazan coast",
    coreServiceParagraph:
      "Jazan Airport (GIZ), officially King Abdullah bin Abdulaziz International Airport, is only about 4 km by road from central Jazan. We provide private, pre-booked transfers from the airport to hotels, homes and offices in Jazan, to the Farasan Islands ferry terminal, inland to the Fayfa Mountains and onward to other cities. Share your flight details and exact destination when you request a quotation; the meeting point is confirmed individually with your booking, and the confirmed quotation sets the price and explains what it covers.",
    arrivingParagraphs: [
      "After landing, complete arrival formalities and collect your luggage, then go to the pickup point confirmed with your booking. Please follow those instructions rather than expecting a particular meeting arrangement in the terminal. If your flight time changes, message us as soon as you know.",
      "Jazan is hot and humid for much of the year, and the airport is close to the city, so most hotel transfers are short.",
    ],
    destinationClusters: [
      {
        title: "Jazan city and the corniche",
        body: "Transfers to hotels, homes and offices across Jazan, including the North and South Corniche, each priced in a quotation you confirm.",
        href: "/taxi-service/jazan",
        linkLabel: "Private transfers in Jazan",
      },
      {
        title: "Farasan Islands ferry terminal",
        body: "Road transfers to the Jazan ferry terminal, about 7 km from the airport, and return pickups when you arrive back from the islands. Ferry tickets, schedules, the crossing and transport on Farasan are not included.",
        href: "/taxi-service/jazan",
        linkLabel: "Ferry terminal guide",
      },
      {
        title: "Fayfa Mountains",
        body: "Transfers inland to the Fayfa Mountains, about 100 km from Jazan on steep, winding roads. Any stops or waiting are set out in your quotation.",
      },
      {
        title: "Abha, Najran and Riyadh",
        body: "Longer road transfers to Abha (about 200–215 km), Najran (about 325–330 km) and Riyadh (about 1,140–1,190 km), each quoted individually.",
        href: "/routes/jizan-to-riyadh",
        linkLabel: "Jizan to Riyadh",
      },
    ],
    hubOverrides: {
      meetGreetHeading: "Airport pickup at Jazan Airport",
      meetGreetIntro: "How a pickup at GIZ is arranged, from your request to the start of the drive.",
      meetGreetSteps: [
        { title: "Before your flight", detail: "Share your airline, flight number, arrival date and time and your destination (hotel, address or the ferry terminal) when you request a quotation." },
        { title: "Your quotation", detail: "The meeting point is confirmed individually with your booking, together with the vehicle and the price. If your flight changes, message us." },
        { title: "After landing", detail: "Collect your luggage and go to the pickup point confirmed with your booking for the drive to your destination." },
      ],
      familyParagraph:
        "Travelling with children, a larger group or extra luggage for Farasan? Tell us your passenger and luggage numbers, and describe any equipment with rough sizes, so a suitable vehicle can be quoted. Child seats can be provided on request, subject to availability: please share the number of seats and the children's ages.",
      bookingIntro: "Four steps from your first message to a confirmed pickup.",
      bookingSteps: [
        { title: "1. Send your journey details", detail: "Your flight details, arrival date and destination, plus your ferry departure time if you're continuing to Farasan." },
        { title: "2. Receive your quotation", detail: "A price and a vehicle recommendation. The confirmed quotation sets the price and explains what it covers." },
        { title: "3. Confirm", detail: "Nothing is booked until you confirm; the quotation sets out its payment and cancellation terms." },
        { title: "4. Follow your pickup arrangements", detail: "Go to the meeting point confirmed individually with your booking at Jazan Airport." },
      ],
      finalCtaText: "Add your flight details and destination, and we'll reply with a quotation; the meeting point is confirmed with your booking.",
    },
    faqs: [
      {
        question: "How far is Jazan Airport from the city and the ferry terminal?",
        answer: "About 4 km by road to central Jazan and about 7 km to the Jazan ferry terminal for the Farasan Islands.",
      },
      {
        question: "Can you take me from Jazan Airport to the Farasan ferry?",
        answer: "Yes, a road transfer to the Jazan ferry terminal can be arranged. Check sailing times with the ferry operator and give us your departure time; ferry tickets, schedules, the crossing and transport on Farasan are not included.",
      },
      {
        question: "Where will I meet my driver at Jazan Airport?",
        answer: "At the meeting point confirmed individually with your booking. Please follow those instructions rather than expecting a particular spot or sign.",
      },
      {
        question: "What happens if my flight to Jazan is delayed?",
        answer: "Message us with the new arrival time as soon as you know it. Any waiting arrangements are set out in your confirmed quotation.",
      },
      {
        question: "Can I book a Jazan Airport to hotel transfer?",
        answer: "Yes. Share your hotel name, flight details and arrival time; you receive a quotation, and the confirmed quotation sets the price and explains what it covers.",
      },
      {
        question: "Can families or groups book private transfers from Jazan Airport?",
        answer: "Yes. Share your passenger and luggage numbers so a suitable vehicle can be quoted. Child seats can be provided on request, subject to availability; tell us the number of seats and the children's ages.",
      },
      {
        question: "Can you connect Jazan Airport with Abha, Najran or Riyadh?",
        answer: "Yes, these journeys can be requested: Abha is about 200–215 km, Najran about 325–330 km and Riyadh about 1,140–1,190 km by road. Each is quoted individually.",
      },
      {
        question: "How far ahead should I book a Jazan airport transfer?",
        answer: "As early as you can, particularly if you're timing the transfer around a Farasan ferry sailing, so the vehicle and timing can be confirmed in good time.",
      },
    ],
  },


  // ── HAIL · HAS ────────────────────────────────────────────────────────────
  "hail-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["hail airport taxi", "hail regional airport transfer", "private transfer from hail airport", "hail airport pickup", "hail to alula transfer"],
    coreServiceParagraph:
      "Hail Regional Airport serves the historic northern desert city, and we provide private transfers from arrivals to Hail hotels and onward toward AlUla and Madinah. Your driver tracks your flight, meets you in the arrivals hall, and drives directly to your destination at a fixed price agreed before you travel, with rest stops planned for the region's longer routes.",
    arrivingParagraphs: [
      "Hail's single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage. Hail is a practical gateway toward AlUla and the northern region.",
      "Hail's desert climate brings hot summers and cold winters that occasionally bring frost, so pack accordingly if you're arriving outside the warmer months.",
    ],
    destinationClusters: [
      {
        title: "Hail City and Hotel Transfers",
        body: "Direct pickup to Hail hotels and local trips around the city, arranged as part of your arrival or separately.",
        href: "/taxi-service/hail",
        linkLabel: "Hail taxi service",
      },
      {
        title: "AlUla and Madinah Connections",
        body: "Private onward transfers from Hail toward AlUla or Madinah, with rest stops planned for the longer desert routes between towns.",
        href: "/airport-transfer/alula-airport",
        linkLabel: "AlUla Airport transfers",
      },
      {
        title: "Riyadh and Qassim Intercity",
        body: "Private intercity transfers from Hail toward Riyadh and Qassim for onward travel across the northern desert region by road.",
        href: "/routes/hail-to-riyadh",
        linkLabel: "Hail to Riyadh route",
      },
    ],
    faqs: [
      {
        question: "Can you drive me from Hail Airport to AlUla?",
        answer:
          "Yes. We provide private transfers from Hail toward AlUla, with planned rest stops on the longer desert route between the two.",
      },
      {
        question: "Can you take me from Hail Airport to Madinah?",
        answer:
          "Yes. We provide private transfers from Hail toward Madinah, with a comfortable vehicle and planned stops for the distance involved.",
      },
      {
        question: "Where will I meet my driver at Hail Airport?",
        answer:
          "In the arrivals hall, holding a name board, ready as soon as you clear immigration and collect your luggage from the belt.",
      },
      {
        question: "What happens if my flight to Hail is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price or your booking.",
      },
      {
        question: "Can I book a Hail Airport to hotel transfer?",
        answer:
          "Yes. Share your hotel name, flight details, and pickup time, and we'll confirm a fixed price and a driver for direct pickup to your hotel.",
      },
      {
        question: "Can families or groups book private transfers from Hail Airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for families or groups, and request child seats when you book your transfer.",
      },
      {
        question: "How far in advance should I book a Hail airport transfer?",
        answer:
          "A day ahead is usually sufficient. For a longer desert leg toward AlUla or Madinah, let us know your timing early so the route and rest stops can be planned properly.",
      },
      {
        question: "Can you arrange transport from Hail toward Qassim as well as AlUla?",
        answer:
          "Yes. Besides the route toward AlUla, we run private intercity transfers from Hail toward Qassim and Riyadh for onward travel.",
      },
    ],
  },

  // ── RED SEA INTERNATIONAL · RSI ──────────────────────────────────────────
  "red-sea-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["red sea airport transfer", "red sea international airport taxi", "RSI airport chauffeur", "red sea resort private transfer", "private transfer from red sea airport"],
    coreServiceParagraph:
      "Red Sea International Airport is the dedicated gateway to the Red Sea destination's island resorts and mainland properties. Because car rentals and street taxis aren't available at this destination, we provide pre-arranged private transfers from arrivals to the marine jetties, coastal resorts, and onward connections to Umluj and Yanbu, with luggage and dive-gear space and a fixed price agreed before you travel. Booking ahead means a vehicle and driver are already assigned before your flight lands.",
    arrivingParagraphs: [
      "RSI handles both commercial and private charter flights from Riyadh, Jeddah, and international hubs. Your driver tracks your flight, meets you in the arrivals concourse with a name board, and assists with luggage and dive equipment on the way to the vehicle.",
      "Because the destination is access-managed with no rental counters on site, arranging your onward transport before you fly is the only practical way to reach your resort or the marine jetty on arrival.",
    ],
    destinationClusters: [
      {
        title: "Marine Jetty and Island Resort Transfers",
        body: "Private transfers from RSI to the coastal marine jetties, where a boat transfer arranged by your resort connects onward to the island properties.",
      },
      {
        title: "Red Sea Airport to Umluj",
        body: "A direct coastal transfer from RSI to Umluj's hotels, beaches, and diving marinas, roughly 95 km south along the coast.",
        href: "/routes/red-sea-airport-to-umluj",
        linkLabel: "Red Sea Airport to Umluj route",
      },
      {
        title: "Yanbu Connections",
        body: "Onward mainland transfers connecting RSI with Yanbu's coastal hotels and dive centres further south along the Red Sea.",
        href: "/airport-transfer/yanbu-airport",
        linkLabel: "Yanbu Airport transfers",
      },
      {
        title: "Desert Rock and Inland Transfers",
        body: "Private transport inland to the granite canyon resorts, with a driver and vehicle suited to the terrain.",
      },
    ],
    faqs: [
      {
        question: "How do I reach the island resorts from RSI Airport?",
        answer:
          "Your private transfer takes you from RSI Airport directly to the coastal marine jetty, where your resort's own boat transfer connects onward to the island property.",
      },
      {
        question: "Where will my driver meet me at Red Sea International Airport?",
        answer:
          "Your driver waits inside the arrivals concourse with a name board, assists with your luggage, and guides you directly to your private vehicle.",
      },
      {
        question: "Can I book a transfer from RSI Airport to Umluj or Yanbu?",
        answer:
          "Yes. We provide fixed-price transfers from RSI Airport south to Umluj and onward to Yanbu, agreed before you travel with no hidden charges.",
      },
      {
        question: "What happens if my inbound flight to RSI is delayed?",
        answer:
          "We track all flights landing at RSI in real time. Your pickup time adjusts automatically with free wait time included, so a delay never costs you the ride.",
      },
      {
        question: "What vehicle is used for a Red Sea Airport transfer?",
        answer:
          "A private SUV or van with space for resort luggage and dive gear, matched to your passenger count when you book your transfer.",
      },
      {
        question: "Can I book a transfer for a family or group at RSI?",
        answer:
          "Yes. Tell us your passenger and luggage count when you book and we'll recommend an SUV or van sized for your group.",
      },
      {
        question: "Can I book a Red Sea Airport to hotel transfer in advance?",
        answer:
          "Yes. Since car rentals aren't available at this destination, booking your transfer before you fly is the practical way to reach your resort or the marine jetty on arrival.",
      },
      {
        question: "How far in advance should I book a Red Sea Airport transfer?",
        answer:
          "Book as early as you can once your resort and arrival flight are confirmed, since pre-arranged transport is the only way to reach the destination from RSI.",
      },
    ],
  },

  // ── NEOM BAY · NUM ───────────────────────────────────────────────────────
  "neom-bay-airport": {
    lastUpdated: "2026-09-17",
    keywords: ["neom bay airport transfer", "neom bay airport taxi", "NUM airport chauffeur", "sindalah island transfer neom", "private transfer from neom bay airport"],
    coreServiceParagraph:
      "NEOM Bay Airport is the primary aviation hub serving the NEOM region on the Gulf of Aqaba coast. Because the development's geography spans long distances with no public transit, we provide pre-booked private transfers from arrivals to NEOM communities, coastal marinas, and onward to Tabuk, with a fixed price agreed before you travel. Vehicles and drivers are assigned to your flight in advance, so there's nothing to arrange on arrival.",
    arrivingParagraphs: [
      "NUM handles commercial and private charter flights connecting Riyadh, Jeddah, and regional hubs. Your driver tracks your flight, meets you in the arrivals hall with a name board, and helps with luggage on the way to the vehicle.",
      "With no public transit across NEOM's development sectors, a pre-booked private transfer is the practical way to move between the airport, accommodation, and coastal sites during your visit.",
    ],
    destinationClusters: [
      {
        title: "Sindalah Island Marine Terminal",
        body: "Private transfers from NUM to the coastal marina departure point for boat connections to Sindalah Island.",
      },
      {
        title: "NEOM Community Transfers",
        body: "Door-to-door transport between the airport and NEOM's community and coastal districts for visitors, consultants, and residents.",
      },
      {
        title: "Sharma and Coastal Districts",
        body: "Private transfers to the coastal districts and beachfronts around Sharma for both business and leisure visitors.",
      },
      {
        title: "Tabuk Intercity Connection",
        body: "Long-distance private transfers connecting NEOM Bay Airport with Tabuk city and Tabuk Regional Airport, roughly 180 km away.",
        href: "/routes/tabuk-to-neom",
        linkLabel: "Tabuk to NEOM route",
      },
    ],
    faqs: [
      {
        question: "How far is NEOM Bay Airport from the Sindalah Island boat departure dock?",
        answer:
          "The coastal marina departure point for Sindalah Island is a short private-vehicle drive from NUM Airport, arranged as part of your transfer booking.",
      },
      {
        question: "Where will my driver meet me at NEOM Bay Airport?",
        answer:
          "Your driver waits inside the arrivals hall with a name board, helps with your luggage, and escorts you directly to your vehicle.",
      },
      {
        question: "Can you provide transfers between NEOM Bay Airport and Tabuk?",
        answer:
          "Yes. We operate private transfers between NEOM Bay Airport and Tabuk, roughly 180 km, with fixed pricing agreed in advance of your trip.",
      },
      {
        question: "What happens if my inbound flight to NUM is delayed?",
        answer:
          "We track your flight in real time and your pickup time adjusts automatically, with free wait time included, so a delay never changes your price.",
      },
      {
        question: "Are child seats available for family travel in NEOM?",
        answer:
          "Yes. Child seats can be arranged on request when you book, along with a larger vehicle if your family needs the extra room.",
      },
      {
        question: "Can I book a transfer for a business or group visit to NEOM?",
        answer:
          "Yes. Tell us your passenger count and destination within NEOM when you book, and we'll recommend a suitable vehicle for your group.",
      },
      {
        question: "Can I book a NEOM Bay Airport to hotel or accommodation transfer?",
        answer:
          "Yes. Share your accommodation location within NEOM and your flight details, and we'll confirm a fixed price and a driver for direct pickup.",
      },
      {
        question: "How far in advance should I book a NEOM Bay Airport transfer?",
        answer:
          "Book as early as you can once your flight and accommodation are confirmed, since there's no public transit across NEOM's development sectors.",
      },
    ],
  },
};
