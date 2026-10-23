import type { Faq } from "./faqs";
import type { AirportRouteOverrides } from "./airport-route-content";
import { RUH_STATUS_NOTICE } from "./airport-status";

/**
 * Route-specific editorial content for the 17 Saudi domestic City -> Airport
 * commercial departure route pages (see lib/route-journey.ts's
 * isCityToAirportRoute and components/routes/CityAirportRouteView.tsx).
 * Departure-intent content — distinct from data/airport-route-content.ts,
 * which covers the arrival direction. Reuses the real distance/duration
 * already on the matching Route record in data/routes.ts /
 * data/dammam-routes.ts.
 *
 * Content discipline: no invented official airline/airport check-in cutoff
 * times, terminal numbers, or guaranteed arrival times. "When to leave"
 * advice is framed as planning guidance, not an official requirement.
 */

export interface CityAirportRouteContent {
  departureIntro: string;
  departurePoints: string[];
  pickupPlanning: string[];
  roadJourney: string[];
  airportDropoff: string[];
  vehicleLuggage: string;
  whoSuits: { title: string; description: string }[];
  delayIntro: string;
  delayFactors: string[];
  comparison?: { mode: string; note: string }[];
  checklist: string[];
  faqs: Faq[];
  /** Optional per-route overrides of the shared template copy; each falls back to the default. */
  overrides?: AirportRouteOverrides;
}

const ruhDepartureOverrides: AirportRouteOverrides = {
  notice: RUH_STATUS_NOTICE,
  bookingSteps: [
    { label: "Share your flight details", detail: "Flight number, departure date and time, and your pickup address in Riyadh." },
    { label: "Receive your quotation", detail: "The confirmed quotation sets the price and shows what it covers." },
    { label: "Confirm the drop-off", detail: "Whether a drop-off at King Khalid International Airport can be arranged is confirmed in your quotation while its operations are disrupted." },
    { label: "Travel", detail: "Your driver collects you at the time confirmed in your quotation." },
  ],
  ctaText: "Share your flight details and pickup address — we reply with a quotation, and the confirmed quotation sets the price.",
  ctaHref: "/get-quote?pickup=Riyadh",
  formSubheading: "Your confirmed quotation sets the price.",
};

export const cityAirportRouteContent: Record<string, CityAirportRouteContent> = {
  // ── Local departures (same city) ──────────────────────────────────────
  "riyadh-to-riyadh-airport": {
    overrides: ruhDepartureOverrides,
    departureIntro:
      "King Khalid International Airport is far enough from central Riyadh that traffic, not distance, is usually what decides whether you arrive comfortably or rushed. Riyadh's road network moves very differently at 6am than at 5pm.",
    departurePoints: [
      "Allow more buffer for a weekday evening departure than an early-morning one",
      "International flights generally warrant an earlier check-in than domestic ones",
      "The exact time to leave depends on your flight time, not a fixed rule",
      "Tell us your flight time when booking and we help plan the pickup accordingly",
    ],
    pickupPlanning: [
      "We collect you from any hotel, home, or office across Riyadh — Olaya, KAFD, the Diplomatic Quarter, and the outer residential districts are all served the same way, direct to your exact address.",
      "Share your pickup address and flight details when you book so the driver plans the most direct route to King Khalid International Airport from your specific location.",
    ],
    roadJourney: [
      "The drive north to the airport runs along Riyadh's main airport expressway. At around 35 km, it's a manageable drive on its own — the variable is how busy that expressway and the connecting roads are at your departure time.",
    ],
    airportDropoff: [
      "Whether a drop-off at King Khalid International Airport can be arranged, and where, is confirmed case by case in your quotation; share your airline and terminal if you know them.",
    ],
    vehicleLuggage:
      "A sedan suits a solo traveller or couple with standard luggage. Families or anyone with several large suitcases should consider an SUV — mention your numbers when booking.",
    whoSuits: [
      { title: "Business travellers", description: "Predictable, direct pickup from an office or hotel timed to an early or late flight." },
      { title: "Families departing together", description: "One vehicle for the whole group and luggage, with a driver who already knows the route." },
    ],
    delayIntro: "The 35 km distance itself is short — what actually varies is traffic on the approach roads.",
    delayFactors: [
      "Weekday evening rush-hour traffic on the airport expressway",
      "Major events or exhibitions that increase citywide traffic",
      "Road works or incidents affecting the direct route",
      "Your own readiness at pickup time",
    ],
    checklist: [
      "Flight number and departure time",
      "Terminal, if you already know it",
      "Pickup address in Riyadh",
      "Passenger and luggage count",
      "A contact number for the day of travel",
    ],
    faqs: [
      { question: "How early should I leave for my flight from Riyadh?", answer: "It depends on your flight time and traffic — tell us your flight details when booking and we'll help plan a sensible pickup time, with extra buffer for evening rush hour." },
      { question: "Can I be picked up from my hotel or office?", answer: "Yes, we collect from any hotel, home, or office address in Riyadh." },
      { question: "What if traffic causes delays on the way?", answer: "We build a reasonable buffer into the pickup time based on your flight, but traffic is genuinely unpredictable — the earlier you can leave, the more margin you have." },
      { question: "Can I book an early-morning airport transfer?", answer: "Early departures can be requested; any drop-off at King Khalid International Airport is confirmed case by case in your quotation while its operations are disrupted." },
      { question: "How much luggage can the vehicle take?", answer: "A sedan handles standard luggage for 1-2 travellers; for more bags or a family, mention it when booking and we'll arrange an SUV." },
      { question: "Is this a private or shared transfer?", answer: "Fully private for your booking, with no other passengers." },
    ],
  },

  "jeddah-to-jeddah-airport": {
    departureIntro:
      "King Abdulaziz International Airport handles both everyday travellers and, during pilgrimage season, very large volumes of Umrah and Hajj passengers — which is worth factoring into how early you leave, especially if you're flying during a busy period.",
    departurePoints: [
      "Leave extra time during Ramadan, Hajj season, and other pilgrim peak periods",
      "International departures generally need more buffer than domestic ones",
      "Corniche and northern hotel areas sit further from the airport than the city core",
      "Share your flight time when booking so we can advise on a sensible pickup time",
    ],
    pickupPlanning: [
      "We collect from any hotel, residence, or business address in Jeddah — Corniche resorts, Al-Balad, and the business districts are all served with a direct pickup at your specific address.",
    ],
    roadJourney: [
      "The drive to the airport is short by regional standards, around 25 km, mostly on Jeddah's main ring and coastal roads. Journey time genuinely depends on where in the city you start — the Corniche and northern areas take longer than central Jeddah.",
    ],
    airportDropoff: [
      "Drop-off is arranged at the terminal matching your flight — including the Hajj Terminal during pilgrimage season — with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "A sedan is enough for most travellers. Pilgrim groups or families with additional luggage for the journey home should consider an SUV or van — mention your numbers when booking.",
    whoSuits: [
      { title: "Pilgrims departing after Umrah or Hajj", description: "Direct pickup from a Jeddah hotel with time built in for peak-season traffic." },
      { title: "Business and leisure travellers", description: "A straightforward, direct transfer timed to your flight." },
    ],
    delayIntro: "The distance itself is short, but Jeddah's traffic and pilgrim season both genuinely affect journey time.",
    delayFactors: [
      "Ramadan, Hajj, and Umrah peak-season traffic and terminal congestion",
      "Weekday rush-hour traffic on the ring roads",
      "Distance from your specific hotel or address — Corniche and northern areas take longer",
      "Road works or events affecting the direct route",
    ],
    checklist: [
      "Flight number and departure time",
      "Terminal, including Hajj Terminal if relevant",
      "Pickup address in Jeddah",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How early should I leave for the Hajj Terminal during pilgrimage season?", answer: "Significantly earlier than a regular flight — terminal volumes are much higher during peak season, so build in extra time beyond a normal buffer." },
      { question: "Can you pick me up from a Corniche hotel?", answer: "Yes, any hotel or address in Jeddah, including the Corniche, is covered." },
      { question: "How long does the drive to the airport take?", answer: "Around 25-35 minutes under normal conditions, depending on your exact starting point and traffic." },
      { question: "Can I book this for a group of pilgrims?", answer: "Yes, tell us your group size and luggage and we'll arrange a suitably sized vehicle." },
    ],
  },

  "madinah-to-madinah-airport": {
    departureIntro:
      "Most travellers on this route are finishing a visit to the Prophet's Mosque and heading home, so timing the departure around the flight — not the short drive itself — is what matters most.",
    departurePoints: [
      "The drive itself is short, so the flight time and check-in requirements matter more than the journey",
      "International departures generally need more buffer than domestic ones",
      "Families with elderly travellers may prefer a slightly earlier pickup for an unhurried pace",
      "Share your flight details when booking so we can advise on pickup timing",
    ],
    pickupPlanning: [
      "We collect from any hotel in the Central (Markaziyah) area near the Haram, or elsewhere in Madinah, direct to your address.",
    ],
    roadJourney: [
      "At around 20 km, this is one of the shortest airport transfers in the network — a direct run from central Madinah to Prince Mohammad bin Abdulaziz International Airport.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal matching your flight, with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "Families travelling home after an extended pilgrimage stay often carry more luggage than they arrived with — an SUV or van gives extra room; mention your group size and bag count when booking.",
    whoSuits: [
      { title: "Pilgrims departing after Ziyarat or Umrah", description: "A short, direct transfer from a Haram-area hotel to the airport." },
      { title: "Families and elderly travellers", description: "An unhurried pace can be arranged with an earlier pickup time." },
    ],
    delayIntro: "This is a short drive, so delays are less about distance and more about timing and terminal volume.",
    delayFactors: [
      "Peak pilgrimage season traffic and terminal congestion",
      "Time needed to check out of your hotel with a larger group",
      "Weekday traffic near the Central Area",
    ],
    checklist: [
      "Flight number and departure time",
      "Hotel name in Madinah",
      "Passenger and luggage count",
      "Any elderly or mobility considerations worth flagging to the driver",
    ],
    faqs: [
      { question: "How long does the drive from Madinah to the airport take?", answer: "Around 20-25 minutes under normal conditions, for roughly 20 km." },
      { question: "Should I leave extra time during pilgrimage season?", answer: "Yes, terminal volumes rise significantly during peak season, so build in more buffer than usual." },
      { question: "Can the driver help with extra luggage collected during our stay?", answer: "Yes, mention your luggage count when booking so an appropriately sized vehicle is arranged." },
    ],
  },

  "alula-to-alula-airport": {
    departureIntro:
      "AlUla's resorts and hotels are spread across a wider area than a typical city, so pickup timing depends more on which part of AlUla you're staying in than on the short drive to the airport itself.",
    departurePoints: [
      "Confirm your exact resort or hotel name when booking — pickup timing varies more by location here than in a typical city",
      "AlUla's newer tourism infrastructure means allowing a little extra margin is sensible",
      "International or connecting flights generally warrant more buffer than a short domestic hop",
    ],
    pickupPlanning: [
      "We collect from Ashar Valley resorts, AlUla Old Town, or hotels near the main heritage sites — confirm your exact accommodation so the driver plans directly to it.",
    ],
    roadJourney: [
      "At around 30 km, the drive to the airport runs through open desert landscape, with fairly consistent timing regardless of time of day.",
    ],
    airportDropoff: [
      "Drop-off is at the departure area of AlUla International Airport, with time to unload luggage and touring gear before check-in.",
    ],
    vehicleLuggage:
      "Most AlUla visitors carry touring and camera gear alongside standard luggage — an SUV is a practical default even for smaller groups, given the amount of gear many travellers bring.",
    whoSuits: [
      { title: "Resort guests wrapping up a stay", description: "A direct transfer from a specific resort or hotel to the airport." },
      { title: "Multi-destination travellers", description: "Suited to those continuing onward after AlUla, timed to a connecting flight." },
    ],
    delayIntro: "The short desert drive is fairly predictable — the main variable is your exact resort location and checkout timing.",
    delayFactors: [
      "Checkout and luggage loading time at a spread-out resort property",
      "Distance from your specific area within AlUla — Ashar Valley vs Old Town vs elsewhere",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact resort or hotel name",
      "Passenger and luggage/gear count",
    ],
    faqs: [
      { question: "How long does the drive to AlUla Airport take?", answer: "Around 25-30 minutes for roughly 30 km." },
      { question: "Do you collect from all the resort areas in AlUla?", answer: "Yes — Ashar Valley, Old Town, and other AlUla accommodation are all covered; confirm your exact hotel when booking." },
    ],
  },

  // ── Regional departures ────────────────────────────────────────────────
  "makkah-to-jeddah-airport": {
    departureIntro:
      "Many pilgrims choose to fly out of Jeddah rather than a closer airport, since Jeddah's international connections are broader — which means this transfer is often booked as the final leg of an Umrah or Hajj trip, timed carefully around a return flight.",
    departurePoints: [
      "Build in more buffer than the drive time alone suggests, especially during peak pilgrimage periods",
      "International departures generally need more time than domestic ones",
      "Traffic around the Haram area at prayer times can affect pickup timing from central hotels",
      "Share your flight time and hotel area when booking so we can advise appropriately",
    ],
    pickupPlanning: [
      "We collect from any hotel in Makkah, including those near the Haram in the Clock Tower and Ajyad areas — vehicle access to the mosque plaza itself is restricted, so drop-off/pickup is arranged at the closest practical point.",
    ],
    roadJourney: [
      "At about 95 km, the drive to Jeddah Airport takes roughly 1 hour 20 minutes under normal conditions, heading west out of Makkah toward the coast.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal matching your flight, including the Hajj Terminal during pilgrimage season, with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "Pilgrim groups often carry more luggage on departure than arrival — family vans are common on this route; mention your group size and bag count when booking.",
    whoSuits: [
      { title: "Pilgrims departing after Umrah or Hajj", description: "A direct transfer from a Makkah hotel to Jeddah Airport, timed around your return flight." },
      { title: "Families and groups with luggage", description: "One vehicle for the whole group rather than splitting across shared transport." },
    ],
    delayIntro: "This is a genuine cross-region drive, so several factors can affect timing beyond the pure driving time.",
    delayFactors: [
      "Peak pilgrimage season traffic and terminal congestion at Jeddah Airport",
      "Prayer-time traffic around the Haram area affecting pickup",
      "Weekday traffic on the Jeddah–Makkah highway",
      "Road works or incidents on the route",
    ],
    checklist: [
      "Flight number and departure time, including which terminal (Hajj Terminal or Terminal 1)",
      "Makkah hotel name or area",
      "Passenger and luggage count",
      "Preferred pickup time given prayer-time considerations",
    ],
    faqs: [
      { question: "How long does the drive from Makkah to Jeddah Airport take?", answer: "Around 1 hour 20 minutes for roughly 95 km under normal traffic." },
      { question: "How early should I leave Makkah for a Jeddah Airport departure?", answer: "Allow more time than the drive alone, particularly during Hajj or Umrah peak season when both road traffic and terminal volumes rise." },
      { question: "Can the driver collect me from near the Haram?", answer: "Yes, at the closest practical pickup point to your hotel — vehicle access directly to the mosque plaza is restricted for all traffic." },
      { question: "Do you go to the Hajj Terminal specifically?", answer: "Yes, tell us this is your terminal when booking and the driver goes there directly." },
      { question: "Can this be booked for a large family group?", answer: "Yes, tell us your numbers and we arrange a van or multiple vehicles as needed." },
    ],
  },

  "khobar-to-dammam-airport": {
    departureIntro:
      "At around 30 minutes, this is one of the shorter airport transfers we offer — short enough that the main planning question is less about the drive and more about King Fahd International Airport's large size, which means extra walking time inside the terminal.",
    departurePoints: [
      "The airport's large land area means allowing extra time for the walk to check-in once you arrive",
      "International flights generally warrant more buffer than domestic ones",
      "The drive itself is quick, so this is mainly a timing-around-your-flight question",
    ],
    pickupPlanning: [
      "We collect from any hotel or office in Al Khobar, including the Corniche area, direct to your address.",
    ],
    roadJourney: [
      "At about 35 km, the drive north to the airport takes roughly 30 minutes along the main Dammam–Khobar corridor.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in given King Fahd International Airport's large size — expect more walking than a compact airport.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for most departures on this short route. Business travellers with equipment or families with more luggage should mention it when booking.",
    whoSuits: [
      { title: "Business travellers", description: "A quick, direct transfer from a Khobar office or hotel." },
      { title: "Families and leisure travellers", description: "Straightforward pickup and drop-off for a short regional flight departure." },
    ],
    delayIntro: "The short drive is fairly predictable — the airport's size is the main planning factor here.",
    delayFactors: [
      "The airport's large land area adds walking time once inside the terminal",
      "Weekday traffic on the short Khobar–Dammam corridor",
    ],
    checklist: [
      "Flight number and departure time",
      "Pickup address in Al Khobar",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Khobar to the airport take?", answer: "About 30 minutes for roughly 35 km under normal conditions." },
      { question: "Why should I allow extra time if the drive is short?", answer: "King Fahd International Airport covers a large area, so once you arrive, allow more walking time to check-in than at a smaller airport." },
      { question: "Is a return transfer from the airport to Khobar available?", answer: "Yes, that's a separate route we can arrange the same way." },
    ],
  },

  "dhahran-to-dammam-airport": {
    departureIntro:
      "Most departures on this route start from Aramco residential areas, KFUPM, or Ithra — a short, predictable transfer to King Fahd International Airport.",
    departurePoints: [
      "The drive is short, so timing mainly comes down to your flight and check-in needs",
      "The airport's large land area means extra walking time inside the terminal",
    ],
    pickupPlanning: [
      "We collect from the Aramco residential area, KFUPM, Ithra, or elsewhere in Dhahran, direct to your address.",
    ],
    roadJourney: [
      "At about 25 km, this is a short, direct drive taking roughly 25 minutes under normal conditions.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the walk to check-in given the airport's size.",
    ],
    vehicleLuggage:
      "A sedan covers most individual departures. Academic or business travellers with equipment should mention it so a larger vehicle can be arranged if needed.",
    whoSuits: [
      { title: "Aramco, KFUPM, and Ithra-linked travellers", description: "A direct transfer timed to a work or academic departure." },
    ],
    delayIntro: "This is a short, predictable drive — the main consideration is the airport's own size once you arrive.",
    delayFactors: [
      "The airport's large land area adds walking time inside the terminal",
      "Weekday traffic on the short route",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact pickup address in Dhahran",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Dhahran to the airport take?", answer: "About 25 minutes for roughly 25 km." },
      { question: "Can you collect me from KFUPM?", answer: "Yes, tell us the exact address when booking." },
    ],
  },

  "jubail-to-dammam-airport": {
    departureIntro:
      "Most travellers on this route are contractors or project staff flying out after a work assignment in Jubail Industrial City, so the transfer is planned around shift and flight schedules rather than tourism timing.",
    departurePoints: [
      "This is a genuine regional drive, so allow more buffer than a short city hop",
      "International departures generally need more time than domestic ones",
      "Confirm your exact pickup point within the large industrial zone when booking",
    ],
    pickupPlanning: [
      "We collect from Jubail Industrial City or the Royal Commission area — confirm the specific site or accommodation, since the zone covers a wide area.",
    ],
    roadJourney: [
      "At about 70 km, the drive south to the airport takes roughly 50 minutes along open highway.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the airport's large size.",
    ],
    vehicleLuggage:
      "Project staff often travel with work equipment alongside personal luggage — mention this at booking so the vehicle is sized appropriately.",
    whoSuits: [
      { title: "Contractors and project staff", description: "A direct, work-oriented transfer timed to flight and rotation schedules." },
    ],
    delayIntro: "This is a genuine regional drive, so a few more factors are worth planning around than on a short city hop.",
    delayFactors: [
      "Distance and highway traffic between Jubail and the airport",
      "Time needed to reach your pickup point within the large industrial zone",
    ],
    checklist: [
      "Flight number and departure date",
      "Exact site or accommodation within Jubail Industrial City",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How long does the drive from Jubail to the airport take?", answer: "About 50 minutes for roughly 70 km." },
      { question: "Can this be arranged for staff rotating out on different flights?", answer: "Yes, book each traveller's flight separately and we coordinate pickups accordingly." },
    ],
  },

  "qatif-to-dammam-airport": {
    departureIntro:
      "Qatif's older town layout means a specific pickup address matters more than in a newer district — this transfer is straightforward once that's confirmed.",
    departurePoints: [
      "Confirm your exact pickup address, including old-town locations, when booking",
      "The drive itself is short, so flight timing is the main planning factor",
    ],
    pickupPlanning: [
      "We collect from Qatif's old town, the central market area, or Tarout Island, direct to your address.",
    ],
    roadJourney: [
      "At about 30 km, the drive to the airport takes roughly 28 minutes under normal conditions.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in given the airport's large size.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for most travellers on this short route.",
    whoSuits: [
      { title: "Family and business departures", description: "A direct, private transfer from Qatif's older districts or newer areas alike." },
    ],
    delayIntro: "A short, generally predictable drive — the main factor is your exact pickup location.",
    delayFactors: [
      "Narrower streets in Qatif's old town, worth flagging for pickup",
      "Weekday traffic on the route north",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact pickup address, including old-town landmarks if relevant",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "Can the driver find an address in Qatif's old town?", answer: "Yes, drivers on this route are familiar with the area — confirm your exact location when booking." },
      { question: "How long is the drive to the airport?", answer: "About 28 minutes for roughly 30 km." },
    ],
  },

  "ras-tanura-to-dammam-airport": {
    departureIntro:
      "Departures from Ras Tanura are usually Aramco-linked business travel or the end of a coastal visit — either way, a straightforward regional drive to King Fahd International Airport.",
    departurePoints: [
      "This is a genuine regional drive, so allow a reasonable buffer beyond the pure driving time",
      "Confirm whether pickup is in the town or a coastal/industrial area",
    ],
    pickupPlanning: [
      "We collect from Ras Tanura town or its coastal areas — confirm which when booking.",
    ],
    roadJourney: [
      "At about 65 km, the drive south to the airport takes roughly 45 minutes along the Gulf coast.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the airport's large size.",
    ],
    vehicleLuggage:
      "A sedan suits most bookings; business travellers with equipment should mention it so a larger vehicle can be arranged.",
    whoSuits: [
      { title: "Aramco and industrial-sector travellers", description: "A direct transfer timed to work travel schedules." },
      { title: "Coastal-visit departures", description: "A straightforward option after a stay in Ras Tanura." },
    ],
    delayIntro: "A genuine regional drive — traffic and your exact pickup point are the main variables.",
    delayFactors: [
      "Highway traffic along the coastal route to the airport",
      "Distance from your exact pickup point within Ras Tanura",
    ],
    checklist: [
      "Flight number and departure time",
      "Whether pickup is in town or a coastal/industrial area",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Ras Tanura to the airport take?", answer: "About 45 minutes for roughly 65 km." },
    ],
  },

  "saihat-to-dammam-airport": {
    departureIntro:
      "Saihat is a smaller coastal town, and departures here are usually straightforward — a specific address is all the driver needs for a direct pickup.",
    departurePoints: [
      "The drive is short, so flight timing and check-in needs are the main planning factor",
    ],
    pickupPlanning: [
      "We collect from any address in Saihat, direct to the airport.",
    ],
    roadJourney: [
      "At about 40 km, the drive takes roughly 32 minutes along the coastal corridor north of Dammam.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the airport's large size.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for the great majority of bookings on this route.",
    whoSuits: [
      { title: "Local departures", description: "A straightforward, private transfer for travellers leaving from Saihat." },
    ],
    delayIntro: "A short, generally predictable drive.",
    delayFactors: [
      "Weekday traffic along the coastal corridor",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact address in Saihat",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long is the drive from Saihat to the airport?", answer: "About 32 minutes for roughly 40 km." },
      { question: "Is this transfer available 24/7?", answer: "Yes, the same booking process and availability apply as on every route." },
    ],
  },

  "abqaiq-to-dammam-airport": {
    departureIntro:
      "Almost every departure on this route is a contractor, engineer, or business traveller heading out after work in Abqaiq — a direct, work-oriented transfer to the airport.",
    departurePoints: [
      "This is a genuine regional drive, so allow a reasonable buffer beyond the pure driving time",
      "Confirm whether pickup is in Abqaiq town or the facility gate area",
    ],
    pickupPlanning: [
      "We collect from Abqaiq town or the facility gate area — confirm which when booking.",
    ],
    roadJourney: [
      "At about 80 km, the drive to the airport takes roughly 55 minutes along open highway.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the airport's large size.",
    ],
    vehicleLuggage:
      "A sedan covers most individual business travel; teams travelling together with equipment should mention their numbers.",
    whoSuits: [
      { title: "Contractors and project staff", description: "A direct, work-oriented transfer timed to flight schedules." },
    ],
    delayIntro: "A genuine regional drive — highway traffic is the main variable.",
    delayFactors: [
      "Highway traffic between Abqaiq and the airport",
      "Time to reach your pickup point from the facility gate area",
    ],
    checklist: [
      "Flight number and departure date",
      "Abqaiq town or facility gate — specify which",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How long does the drive from Abqaiq to the airport take?", answer: "About 55 minutes for roughly 80 km." },
      { question: "Can this be arranged for a team leaving on different flights?", answer: "Yes, book each traveller separately and we coordinate pickups." },
    ],
  },

  "hofuf-to-dammam-airport": {
    departureIntro:
      "The longest of the Dammam Airport regional routes — travellers leaving Hofuf and the Al-Ahsa Oasis for a flight should allow the most buffer of any route in this regional group.",
    departurePoints: [
      "This is the longest regional drive to Dammam Airport, so build in a solid buffer",
      "International departures generally need more time than domestic ones",
      "Confirm your exact pickup point given Hofuf's spread-out layout",
    ],
    pickupPlanning: [
      "We collect from anywhere in Hofuf or the wider Al-Ahsa Oasis area, direct to your address.",
    ],
    roadJourney: [
      "At about 155 km, this is the longest of the Dammam Airport regional transfers, taking roughly 1 hour 40 minutes along the highway north.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal, with extra time built in for the airport's large size.",
    ],
    vehicleLuggage:
      "Given the longer distance, an SUV is worth considering for families or anyone with more than standard luggage, though a sedan remains reasonable for solo or light-luggage travel.",
    whoSuits: [
      { title: "Heritage-region departures", description: "A direct transfer from Hofuf's hotels or heritage areas to the airport." },
      { title: "Business travellers", description: "A longer regional transfer suited to those finishing work in Hofuf." },
    ],
    delayIntro: "This is the longest regional route in the group, so treat the driving time as a starting point, not the whole picture.",
    delayFactors: [
      "Highway traffic on the longer Hofuf-to-Dammam route",
      "Extra time needed given the distance if your flight timing is tight",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact hotel or address in Hofuf",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Hofuf to the airport take?", answer: "About 1 hour 40 minutes for roughly 155 km — the longest of our Dammam Airport regional routes." },
      { question: "Should I leave earlier given the distance?", answer: "Yes, this is the longest regional drive in the group, so build in more buffer than the shorter Eastern Province routes." },
    ],
  },

  "umluj-to-red-sea-airport": {
    departureIntro:
      "Most departures on this route follow a beach or diving stay in Umluj, heading to Red Sea International Airport for a flight home or onward travel.",
    departurePoints: [
      "Confirm your exact resort, chalet, or marina so pickup timing is planned correctly",
      "International or connecting flights generally warrant more buffer",
    ],
    pickupPlanning: [
      "We collect from any resort, chalet, or marina in Umluj, direct to your address.",
    ],
    roadJourney: [
      "At about 95 km, the drive north to the airport takes roughly 1 hour 10 minutes along the Red Sea coastal road.",
    ],
    airportDropoff: [
      "Drop-off is at the departure area of Red Sea International Airport, with time to unload luggage and diving/beach gear before check-in.",
    ],
    vehicleLuggage:
      "Diving and beach trips often mean extra equipment alongside standard luggage — an SUV gives more room if you're travelling with gear.",
    whoSuits: [
      { title: "Diving and beach travellers", description: "A direct transfer from a specific Umluj resort or marina to the airport." },
      { title: "Couples and small groups", description: "A private, door-to-door option to close out a coastal trip." },
    ],
    delayIntro: "A fairly predictable coastal drive — resort checkout timing is the main variable.",
    delayFactors: [
      "Checkout and luggage/gear loading time at a resort or marina",
      "Coastal road traffic, though generally light outside peak periods",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact resort, chalet, or marina name in Umluj",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How long does the drive from Umluj to the airport take?", answer: "About 1 hour 10 minutes for roughly 95 km." },
      { question: "Can you collect diving gear along with luggage?", answer: "Yes, mention your equipment when booking so the right vehicle is arranged." },
    ],
  },

  // ── Long-distance departures ───────────────────────────────────────────
  "madinah-to-jeddah-airport": {
    departureIntro:
      "Many pilgrims fly home from Jeddah rather than Madinah's own airport, particularly when their return flight only operates from JED — which makes this one of the longer departure transfers in the network, and one where planning the departure time properly really matters.",
    departurePoints: [
      "This is a genuine long-distance drive, so plan your departure from Madinah well ahead of your flight",
      "International departures generally need significant buffer beyond the four-hour drive itself",
      "Rest-stop pacing can be planned into the journey rather than treated as a single forced push",
      "Share your flight time when booking so we can help plan a realistic departure window from your hotel",
    ],
    pickupPlanning: [
      "We collect from any hotel in Madinah, including those near the Haram, direct to your address.",
    ],
    roadJourney: [
      "At about 420 km, the drive to Jeddah Airport takes roughly 4 hours under normal conditions. Given the distance, rest-stop pacing is agreed with you at booking rather than assumed.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal matching your flight, including the Hajj Terminal during pilgrimage season, with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "Given the four-hour distance and typical pilgrim luggage, an SUV or van is generally more comfortable than a sedan — mention your group size when booking.",
    whoSuits: [
      { title: "Pilgrims flying home via Jeddah", description: "A direct, long-distance transfer for those whose return flight departs from JED rather than Madinah's own airport." },
      { title: "Families and groups with luggage", description: "One vehicle for the full four-hour journey rather than a domestic flight connection." },
    ],
    delayIntro: "At 420 km, this is a genuine long-distance drive — treat the four-hour estimate as pure driving time, not a door-to-door guarantee.",
    delayFactors: [
      "Highway traffic along the Madinah–Jeddah route",
      "Rest stops, which add time but are worth planning for a journey this long",
      "Peak pilgrimage season congestion at Jeddah Airport itself",
    ],
    checklist: [
      "Flight number, terminal, and departure time",
      "Madinah hotel name or pickup address",
      "Preferred pacing — one continuous drive or a planned stop",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Madinah to Jeddah Airport take?", answer: "Around 4 hours for roughly 420 km under normal conditions — allow more time overall given the distance and your flight." },
      { question: "Why fly from Jeddah instead of Madinah's own airport?", answer: "Often it comes down to flight availability — Jeddah has more international connections, so some pilgrims' return flights only operate from JED." },
      { question: "Can we stop for prayer or rest along the way?", answer: "Yes, mention your preference when booking and the driver plans accordingly." },
      { question: "How early should we leave Madinah for an international flight from Jeddah?", answer: "Well ahead of the four-hour drive alone — factor in the full journey plus a sensible check-in buffer for an international departure." },
    ],
  },

  "taif-to-jeddah-airport": {
    departureIntro:
      "Taif's mountain elevation means the drive down to Jeddah Airport is a genuine descent, not just a distance — worth factoring into departure planning alongside the usual traffic considerations.",
    departurePoints: [
      "Allow more buffer than the two-hour drive time alone, particularly for an international flight",
      "The Al Hada mountain road adds a different driving character than a flat highway",
      "Share your flight time when booking so we can advise on a sensible departure from your Taif hotel",
    ],
    pickupPlanning: [
      "We collect from any hotel, resort, or residence in Taif, direct to your address.",
    ],
    roadJourney: [
      "At about 175 km, the drive descends via the Al Hada mountain road from Taif's elevated, cooler climate down to Jeddah's coastal plain, taking roughly 2 hours.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal matching your flight, with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "A sedan suits most travellers; families with more luggage for the mountain descent should consider an SUV.",
    whoSuits: [
      { title: "Summer-stay travellers heading home", description: "A direct transfer from Taif's cooler climate back down to the coast for a flight." },
      { title: "Pilgrims combining a Taif stay with Umrah", description: "Suited to those extending a Makkah/Jeddah trip with time in Taif." },
    ],
    delayIntro: "The mountain road adds a variable that a flat highway drive doesn't have.",
    delayFactors: [
      "Weekend and summer-season traffic on the Al Hada mountain road",
      "Weather conditions affecting the mountain descent, though rare",
      "General Jeddah-area traffic on the final approach to the airport",
    ],
    checklist: [
      "Flight number and departure time",
      "Hotel or resort name in Taif",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Taif to Jeddah Airport take?", answer: "Around 2 hours for roughly 175 km, including the descent via the Al Hada mountain road." },
      { question: "Is the mountain road manageable for an airport transfer?", answer: "Yes, it's a well-travelled route that drivers on this route know well." },
      { question: "Should I leave more time in summer?", answer: "The mountain road can see more weekend traffic during the summer season when Taif is popular as a cooler retreat — build in a little extra buffer." },
    ],
  },

  "yanbu-to-jeddah-airport": {
    departureIntro:
      "Yanbu combines Red Sea resorts and a major industrial city, so departures on this route come from two fairly different starting points — a coastal resort winding down a stay, or an industrial-sector business trip ending.",
    departurePoints: [
      "This is a genuine long-distance drive, so plan departure from Yanbu well ahead of your flight",
      "Confirm whether pickup is at a resort, the industrial city, or elsewhere in Yanbu",
      "International departures generally need more buffer than domestic ones",
    ],
    pickupPlanning: [
      "We collect from Yanbu Al Bahr resorts, Yanbu Al Sinaiyah (the industrial city), or elsewhere in Yanbu — confirm the specific area when booking.",
    ],
    roadJourney: [
      "At about 330 km, the drive south to Jeddah Airport takes roughly 3 hours 15 minutes along the coastal highway.",
    ],
    airportDropoff: [
      "Drop-off is at the terminal matching your flight, with time to unload luggage before check-in.",
    ],
    vehicleLuggage:
      "Given the distance, an SUV or van is generally the more comfortable option, particularly for resort travellers with beach gear or business travellers with equipment.",
    whoSuits: [
      { title: "Red Sea resort guests heading home", description: "A direct, long-distance transfer from a Yanbu resort to the airport." },
      { title: "Petrochemical and industrial-sector business travellers", description: "A direct route from Yanbu Industrial City for corporate travel." },
    ],
    delayIntro: "At over three hours of driving, this deserves the same planning care as any long-distance transfer.",
    delayFactors: [
      "Coastal highway traffic, generally lighter than a major city route but not negligible",
      "Rest stops, worth planning for a drive of this length",
      "Jeddah-area traffic on the final approach to the airport",
    ],
    checklist: [
      "Flight number and departure time",
      "Exact resort, hotel, or business address in Yanbu",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the drive from Yanbu to Jeddah Airport take?", answer: "Around 3 hours 15 minutes for 330 km under normal conditions." },
      { question: "Is this route used for business or leisure?", answer: "Both — it serves petrochemical-sector business travellers and Red Sea resort guests alike." },
      { question: "Can we stop along the way?", answer: "Yes, mention your preference when booking." },
    ],
  },
};
