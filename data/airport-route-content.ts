import type { Faq } from "./faqs";
import { DMM_STATUS_NOTICE, RUH_STATUS_NOTICE } from "./airport-status";

/**
 * Route-specific editorial content for the 31 Saudi domestic Airport -> City
 * commercial route pages (see lib/route-journey.ts's isAirportToCityRoute
 * and components/routes/AirportRouteView.tsx). Each entry is written for
 * that specific airport + destination — not a template with names swapped.
 * Reuses the real distance/duration/relatedCitySlugs already on the
 * matching Route record in data/routes.ts / data/dammam-routes.ts; this
 * file supplies the deeper, airport-specific narrative content that record
 * doesn't carry (arrival process, road journey, destination arrival,
 * vehicle reasoning, checklist, FAQs).
 *
 * Content discipline: no invented terminal numbers, meeting points, wait
 * -time guarantees, or amenities beyond what's already verified elsewhere
 * on the site (meet-and-greet, flight tracking, fixed price, pay-the-driver
 * model). Pure driving time is always distinguished from total journey
 * time.
 */

export interface AirportRouteContent {
  intro: string;
  arrivalPickup: string[];
  roadJourney: string[];
  destinationArrival: string[];
  vehicleLuggage: string;
  whoSuits: { title: string; description: string }[];
  comparison?: { mode: string; note: string }[];
  checklist: string[];
  faqs: Faq[];
  /** Optional per-route overrides of the shared template copy (see app/(main)/routes/[slug]/page.tsx).
   * Each falls back to the shared default, so routes without them render unchanged. */
  overrides?: AirportRouteOverrides;
}

export interface AirportRouteOverrides {
  /** Dated status notice shown under the hero. */
  notice?: { heading: string; paragraphs: string[]; links?: { label: string; href: string }[] };
  arrivalSteps?: { label: string; detail: string }[];
  bookingSteps?: { label: string; detail: string }[];
  ctaText?: string;
  ctaHref?: string;
  formSubheading?: string;
  /** Facts-box "Pure driving time" value, used when route.duration is not supported for this route. */
  pureDrivingValue?: string;
}

/** RUH arrivals while airport operations are disrupted: no tracking or name-board promises; pickups confirmed case by case. */
function ruhArrivalOverrides(city: string, pureDrivingValue?: string): AirportRouteOverrides {
  return {
    notice: RUH_STATUS_NOTICE,
    pureDrivingValue,
    arrivalSteps: [
      { label: "Check your flight", detail: "Confirm with your airline that your flight is operating and which airport it now uses." },
      { label: "Share your details", detail: `Send your airline, flight number, the airport, your destination in ${city}, and your passenger and luggage numbers.` },
      { label: "Receive your quotation", detail: "Whether a pickup at King Khalid International Airport can be arranged, the meeting point and the price are confirmed in your quotation." },
      { label: "Travel", detail: `Your driver meets you at the point and time confirmed in your quotation and drives you directly to ${city}.` },
    ],
    bookingSteps: [
      { label: "Share your journey details", detail: `Flight number, arrival date and time, and your destination in ${city}.` },
      { label: "Receive your quotation", detail: "The confirmed quotation sets the price and shows what it covers." },
      { label: "Confirm the meeting point", detail: "Any pickup at King Khalid International Airport is confirmed case by case while its operations are disrupted." },
      { label: "Travel directly to your destination", detail: "Door-to-door, with luggage assistance along the way." },
    ],
    ctaText: "Share your flight details and destination — we reply with a quotation, and the confirmed quotation sets the price.",
    ctaHref: `/get-quote?dropoff=${encodeURIComponent(city)}`,
    formSubheading: "Your confirmed quotation sets the price.",
  };
}

/** DMM arrivals (owner-confirmed): flight tracking and free waiting (no stated duration); no name board. */
function dmmArrivalOverrides(city: string, meeting: string): AirportRouteOverrides {
  return {
    notice: DMM_STATUS_NOTICE,
    arrivalSteps: [
      { label: "Flight tracking begins", detail: "We track your flight from the moment you book, so the pickup is planned around your actual landing time." },
      { label: "Your driver meets you", detail: meeting },
      { label: "Direct transfer begins", detail: `Your driver helps with luggage and you're driven directly toward ${city}, at the price in your confirmed quotation.` },
    ],
    bookingSteps: [
      { label: "Share your journey details", detail: `Flight number, arrival date and time, and your destination in ${city}.` },
      { label: "Receive your quotation", detail: "The confirmed quotation sets the price and shows what it covers." },
      { label: "Meet your driver on arrival", detail: "We track your flight, and your driver meets you at the confirmed meeting point. Free waiting time is included." },
      { label: "Travel directly to your destination", detail: "Door-to-door, with luggage assistance along the way." },
    ],
    ctaText: "Share your flight number and destination — we reply with a quotation, and the confirmed quotation sets the price.",
    formSubheading: "Your confirmed quotation sets the price.",
  };
}

export const airportRouteContent: Record<string, AirportRouteContent> = {
  // ── Local airport transfers (same city) ──────────────────────────────
  "riyadh-airport-to-riyadh": {
    overrides: ruhArrivalOverrides("Riyadh"),
    intro:
      "King Khalid International Airport sits well north of central Riyadh, so the first thing most arrivals need isn't a taxi rank — it's a driver who already knows exactly where they're going, whether that's a downtown hotel, an office in the King Abdullah Financial District, or a family home in one of the capital's outer districts.",
    arrivalPickup: [
      "Confirm your flight with your airline first. Whether a pickup at King Khalid International Airport can be arranged, and where you would meet your driver, is confirmed in your quotation.",
      "If your flight schedule changes, message us as soon as you know — we plan around your actual landing time rather than the one printed on the ticket.",
    ],
    roadJourney: [
      "The drive from the airport into the city runs south on the main airport expressway before splitting toward whichever district you're heading to — Olaya and the business core, the Diplomatic Quarter, KAFD, or the residential areas further out. Traffic is the main variable: a quiet mid-morning run can be notably quicker than a weekday evening one, so share your flight details and destination when you request a quote.",
    ],
    destinationArrival: [
      "Because Riyadh is spread across a wide grid of districts rather than one compact center, tell us your exact hotel or address when you book — the driver plans the route to that specific point, not just a general zone.",
    ],
    vehicleLuggage:
      "A sedan comfortably covers a solo traveller or couple with standard luggage. For a family or anyone with several large suitcases, an SUV gives more room without changing the price basis — just tell us your passenger and luggage count when you book so the right vehicle is arranged in advance.",
    whoSuits: [
      { title: "Business travellers", description: "Direct to an office, hotel, or meeting in Olaya, KAFD, or the Diplomatic Quarter, with the pickup timed to your flight rather than a fixed slot." },
      { title: "Families and first-time visitors", description: "One vehicle for the whole group and luggage, with a driver who already knows the destination address." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Terminal, if you already know it",
      "Exact hotel name or address in Riyadh",
      "Number of passengers and suitcases",
      "A contact number for the day of travel",
    ],
    faqs: [
      { question: "How far is King Khalid International Airport from central Riyadh?", answer: "Around 35 km. Driving time depends on traffic and your exact destination in the city." },
      { question: "Will someone be waiting for me after I land?", answer: "Airport pickups are confirmed case by case while operations at King Khalid International Airport are disrupted. Send your flight details and the meeting point is confirmed in your quotation." },
      { question: "Can the driver take me straight to KAFD or the Diplomatic Quarter?", answer: "Yes — tell us the exact address when you book and the driver plans directly to it." },
      { question: "What if my flight is delayed?", answer: "Tell us as soon as your airline confirms a new time, and we'll review the pickup with you." },
      { question: "How is the price set?", answer: "You receive a quotation before you travel. The confirmed quotation sets the price and shows what it covers." },
      { question: "Can I book a family van for a larger group?", answer: "Yes — tell us your passenger and luggage count and we'll arrange a vehicle sized to your group." },
    ],
  },

  "jeddah-airport-to-jeddah": {
    intro:
      "Most travellers landing at King Abdulaziz International Airport are either staying in Jeddah itself — along the Corniche, in the business districts, or near Al-Balad — or about to continue on to Makkah the same day. This route covers the first case: getting from the terminal to somewhere in Jeddah, directly and without a shared shuttle.",
    arrivalPickup: [
      "Jeddah's airport has several terminal areas, including the Hajj Terminal used heavily during the pilgrimage season. Tell us your flight number and we track it and match the pickup to the terminal you actually land at.",
      "Your driver waits in the arrivals area with a name board once you've cleared customs and collected your luggage.",
    ],
    roadJourney: [
      "The drive into Jeddah from the airport is short by Saudi standards — most of it is on the city's main coastal and ring roads. Where the drive gets longer is destination-dependent: the Corniche and northern hotel districts sit further from the airport than the historic Al-Balad area or the business core closer in.",
    ],
    destinationArrival: [
      "Jeddah's hotels and residential areas are spread along the coast and inland, so we ask for your exact hotel name or address rather than just 'Jeddah' — that's what determines whether the drive is closer to 20 minutes or closer to 45.",
    ],
    vehicleLuggage:
      "A sedan suits most solo and couple bookings. Families or groups arriving with beach luggage, extra bags, or young children usually do better in an SUV or van — mention your numbers when you book.",
    whoSuits: [
      { title: "Corniche and hotel-district arrivals", description: "Direct drop-off at your specific hotel rather than a general area." },
      { title: "Travellers staying in Jeddah before Makkah", description: "A same-city transfer now, with the option to book the onward Jeddah to Makkah leg separately when you're ready." },
    ],
    checklist: [
      "Flight number and which terminal, if known (including Hajj Terminal during season)",
      "Exact hotel or address in Jeddah",
      "Passenger and luggage count",
      "Arrival date and time",
    ],
    faqs: [
      { question: "How far is Jeddah Airport from the Corniche hotels?", answer: "Around 25 km, typically 25–35 minutes depending on which part of the Corniche and current traffic." },
      { question: "Do you pick up from the Hajj Terminal?", answer: "Yes, during pilgrimage season we track flights landing at the Hajj Terminal the same way as any other terminal." },
      { question: "Can this transfer continue on to Makkah later?", answer: "This specific route covers Jeddah city. If you're continuing to Makkah, book that as a separate Jeddah Airport to Makkah transfer — we can arrange both around the same trip." },
      { question: "What if I don't know my exact hotel yet?", answer: "Share the area you're staying in when booking and confirm the exact address as soon as you have it, ideally before your flight lands." },
      { question: "Is luggage assistance included?", answer: "Yes, your driver helps load luggage into the vehicle at the airport." },
    ],
  },

  "madinah-airport-to-madinah": {
    intro:
      "Prince Mohammad bin Abdulaziz International Airport is the arrival point for most pilgrims and visitors beginning their time in Madinah, and the short drive into the city is usually the first thing on their mind after a long flight — getting to a hotel near the Prophet's Mosque without navigating an unfamiliar city themselves.",
    arrivalPickup: [
      "We track your flight and your driver waits in the arrivals hall once you've cleared customs, with a name board so you're easy to find.",
      "If you're travelling with elderly family members or young children, mention it when booking — it doesn't change the process, but it helps the driver plan pacing at pickup.",
    ],
    roadJourney: [
      "At roughly 20 km, this is one of the shortest airport transfers on the network — a direct run from the airport into the central Madinah area, without a long highway leg.",
    ],
    destinationArrival: [
      "Most hotels near the Haram sit in the Central (Markaziyah) area, north and south of the mosque itself. We confirm your exact hotel before you travel so the driver can plan the closest practical drop-off point, since vehicle access right up to the mosque plaza itself is restricted.",
    ],
    vehicleLuggage:
      "Families travelling for Umrah or Ziyarat often carry more luggage than a typical city trip — an SUV or van gives the extra room without changing how the price works. Tell us your group size and luggage count when booking.",
    whoSuits: [
      { title: "Pilgrims arriving for Umrah or Ziyarat", description: "Direct to a hotel near the Haram, with luggage help and no shared shuttle." },
      { title: "Families and elderly travellers", description: "One vehicle for the whole group, sized to comfort and luggage needs rather than a default sedan." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Hotel name in the Central (Markaziyah) area, or elsewhere in Madinah",
      "Number of passengers and luggage pieces",
      "Any elderly or child-specific needs worth flagging to the driver",
    ],
    faqs: [
      { question: "How far is Madinah Airport from the Prophet's Mosque area?", answer: "About 20 km, usually a 20–25 minute drive depending on the exact hotel and traffic." },
      { question: "Can the driver drop us right at the Haram?", answer: "The driver takes you to the closest practical drop-off point to your hotel — vehicle access directly to the mosque plaza is restricted, as it is for all traffic." },
      { question: "Do you track flights for pilgrim season arrivals?", answer: "Yes, flight tracking and pickup timing work the same during Ramadan, Hajj, and Umrah peak periods as at any other time." },
      { question: "Can we book a larger vehicle for an extended family?", answer: "Yes — tell us your group size and we arrange an SUV or van as needed." },
      { question: "Is this transfer only for pilgrims?", answer: "No, it's a standard private transfer suitable for any traveller arriving at Madinah Airport, though it is our most common booking for Umrah and Ziyarat visitors." },
    ],
  },

  "alula-airport-to-alula": {
    intro:
      "AlUla International Airport was built for a destination that didn't exist as a tourism hub a decade ago, and most arrivals are heading somewhere specific within the AlUla area — a resort in Ashar Valley, a hotel near AlUla Old Town, or accommodation closer to Hegra and Elephant Rock.",
    arrivalPickup: [
      "Your flight is tracked and your driver waits in the arrivals area once you've collected your luggage, holding a name board.",
      "AlUla's tourism infrastructure is newer and more spread out than an established city, so confirming your exact resort or hotel name in advance matters more here than on a typical city transfer.",
    ],
    roadJourney: [
      "At around 30 km, the drive from the airport into the AlUla area is short, running through open desert landscape rather than dense traffic — journey time is fairly consistent regardless of time of day.",
    ],
    destinationArrival: [
      "Ashar Valley resorts, AlUla Old Town, and sites near Elephant Rock are in different parts of the AlUla area, so the exact drop-off point genuinely changes the drive — tell us precisely where you're staying rather than just 'AlUla'.",
    ],
    vehicleLuggage:
      "Most AlUla visitors carry touring and camera gear alongside standard luggage — an SUV is a practical default here even for smaller groups, given the terrain and the amount of gear many travellers bring for desert excursions.",
    whoSuits: [
      { title: "Resort and heritage-site visitors", description: "Direct transfer to a specific resort or hotel in Ashar Valley, Old Town, or near the main sites." },
      { title: "Travellers combining AlUla with onward trips", description: "A same-area arrival now, with the option to book a separate transfer onward to Madinah, Tabuk, or elsewhere once your AlUla stay is booked." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact resort or hotel name (Ashar Valley, Old Town, or elsewhere in AlUla)",
      "Passenger and luggage count, including touring/camera gear",
      "Any onward travel plans worth mentioning when booking",
    ],
    faqs: [
      { question: "How far is the airport from AlUla's resorts?", answer: "About 30 km, typically a 25–30 minute drive depending on which resort or hotel." },
      { question: "Do you know the different resort areas in AlUla?", answer: "Yes — Ashar Valley, AlUla Old Town, and the area near Elephant Rock are all served; just confirm your exact hotel or resort name when booking." },
      { question: "Is an SUV necessary, or is a sedan enough?", answer: "A sedan works for light luggage, but most AlUla visitors bring touring gear, so we generally recommend an SUV — mention your luggage when booking and we'll advise." },
      { question: "Can I book an onward transfer to Madinah or Tabuk from here?", answer: "Yes, that's a separate route (AlUla Airport to Madinah, or AlUla Airport to Tabuk) which we can arrange alongside this one." },
    ],
  },

  // ── Regional airport transfers ────────────────────────────────────────
  "dammam-airport-to-khobar": {
    intro:
      "At about 30 minutes, this is one of the shortest airport transfers in our network — short enough that it's used less as a standalone trip and more as the first leg of something else: a business visitor heading straight to a Khobar office, a hotel guest starting a Corniche stay, or a traveller continuing on to Bahrain the same day without stopping in Khobar city at all.",
    arrivalPickup: [
      "King Fahd International Airport is a large, single-terminal airport, so there's no terminal-matching to worry about — your driver tracks your flight and waits in the arrivals hall once you've cleared customs.",
    ],
    roadJourney: [
      "The drive south from the airport into Al Khobar runs along the main Dammam–Khobar corridor. It's a short, largely uneventful drive by regional standards, with the main variable being exactly where in Khobar you're headed — the Corniche waterfront sits a little further than the inland business districts.",
    ],
    destinationArrival: [
      "Al Khobar's hotel and business areas run along and near the Corniche. If your onward plan is the King Fahd Causeway to Bahrain, mention it when booking — the driver can route toward the causeway directly rather than into central Khobar first.",
    ],
    vehicleLuggage:
      "A sedan comfortably covers this short transfer for most travellers. For business trips with equipment or families with beach luggage headed to the Corniche, an SUV gives more space at no change to how the price works.",
    whoSuits: [
      { title: "Business travellers", description: "A quick, direct run to a Khobar office or hotel without the wait of a shared shuttle." },
      { title: "Travellers continuing to Bahrain", description: "The driver can route toward the King Fahd Causeway directly if that's your same-day plan." },
    ],
    comparison: [
      { mode: "Private transfer", note: "Direct, door-to-door, no waiting for other passengers — a practical choice given how short the drive already is." },
      { mode: "Rental car", note: "Only worth arranging if you need a car for the rest of your Eastern Province stay, not just the airport leg." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Hotel or office address in Al Khobar",
      "Whether you're continuing to the Bahrain Causeway the same day",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is King Fahd Airport from Al Khobar?", answer: "About 35 km, typically a 30-minute drive." },
      { question: "Can you take me straight to the King Fahd Causeway instead of Khobar city?", answer: "Yes — tell us when booking and the driver routes directly toward the causeway rather than into central Khobar." },
      { question: "Is this transfer private, or shared with other passengers?", answer: "Fully private for your booking, with no other passengers." },
      { question: "What happens if my flight lands early or late?", answer: "We track your flight and adjust the pickup time automatically." },
    ],
  },

  "dammam-airport-to-dhahran": {
    intro:
      "Dhahran is a short hop from King Fahd International Airport and is best known as Saudi Aramco's home city — most travellers on this route are heading to the Aramco residential area, KFUPM, or the Ithra cultural centre rather than a typical hotel district.",
    arrivalPickup: [
      "Your flight is tracked and your driver waits in the arrivals hall once you've collected your luggage.",
    ],
    roadJourney: [
      "At around 25 km, this is a short, direct drive with minimal variation — one of the quickest airport transfers in the Eastern Province network.",
    ],
    destinationArrival: [
      "Dhahran's Aramco residential area operates with its own access arrangements, and KFUPM and Ithra are both distinct destinations within the wider Dhahran area — confirm your exact drop-off point when booking so the driver plans accordingly.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for most bookings on this short route. Academic or business travellers with equipment should mention it so a larger vehicle can be arranged if needed.",
    whoSuits: [
      { title: "Aramco, KFUPM, and business visitors", description: "Direct transfer to a specific address within Dhahran rather than a general city drop-off." },
      { title: "Ithra visitors", description: "A straightforward transfer for those visiting the King Abdulaziz Center for World Culture." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact destination — Aramco area, KFUPM, Ithra, or elsewhere in Dhahran",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is King Fahd Airport from Dhahran?", answer: "About 25 km, typically a 25-minute drive." },
      { question: "Can you take me to KFUPM or the Aramco residential area?", answer: "Yes, tell us the specific destination when booking." },
      { question: "Is a return transfer from Dhahran to the airport available?", answer: "Yes, the reverse direction can be booked the same way." },
    ],
  },

  "dammam-airport-to-jubail": {
    intro:
      "Jubail is the Kingdom's largest industrial city, and most travellers on this route are contractors, engineers, or project staff flying in for work at the Royal Commission industrial zone rather than tourists — the transfer is built around that reality.",
    arrivalPickup: [
      "Flight tracking and arrivals-hall pickup work the same as any other airport route — your driver waits with a name board once you've cleared customs.",
    ],
    roadJourney: [
      "At about 70 km, this is a genuine regional drive north from the airport, mostly along open highway rather than city traffic, taking roughly 50 minutes under normal conditions.",
    ],
    destinationArrival: [
      "Jubail Industrial City and the Royal Commission area are large, purpose-built zones — confirm the specific site, accommodation, or gate you need before you travel, since 'Jubail' alone covers a wide area.",
    ],
    vehicleLuggage:
      "Project staff often travel with work equipment alongside personal luggage — mention this at booking so the vehicle is sized appropriately from the start rather than needing a second trip.",
    whoSuits: [
      { title: "Contractors and project staff", description: "A direct transfer timed to fly-in schedules, suited to work travel rather than tourism." },
      { title: "Corporate accounts", description: "Repeat bookings for staff rotating in and out of Jubail can be arranged through the same booking process each time." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact site, accommodation, or gate within Jubail Industrial City",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How far is Jubail from King Fahd Airport?", answer: "About 70 km, typically a 50-minute drive." },
      { question: "Can this be booked for regular staff rotations?", answer: "Yes — the same booking process (WhatsApp or the quote form) works for repeat or corporate bookings." },
      { question: "Can you drop off at a specific Royal Commission gate?", answer: "Yes, provide the exact gate or site address when booking." },
    ],
  },

  "dammam-airport-to-qatif": {
    intro:
      "Qatif is one of the Eastern Province's oldest cities, known for its historic market and old town rather than the newer commercial districts nearby — travellers on this route are usually heading to the Central Market area or visiting family in the older parts of the city.",
    arrivalPickup: [
      "Standard flight tracking and arrivals-hall pickup apply — your driver waits once you've cleared customs and collected luggage.",
    ],
    roadJourney: [
      "At about 30 km, this is a short, direct drive taking roughly 28 minutes, running north from the airport toward the coast.",
    ],
    destinationArrival: [
      "Qatif's old town and central market area have narrower streets than the newer parts of the Eastern Province — confirm your exact destination so the driver can plan the closest practical drop-off point.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for most travellers on this short route. Families visiting for gatherings or events should mention their numbers so a larger vehicle is arranged if needed.",
    whoSuits: [
      { title: "Heritage and old-town visitors", description: "Direct transfer to Qatif's central market or historic areas." },
      { title: "Family visits", description: "A straightforward, private option for travellers visiting relatives in Qatif rather than staying in a hotel." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact address — Qatif Central Market, old town, or elsewhere",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is Qatif from King Fahd Airport?", answer: "About 30 km, typically a 28-minute drive." },
      { question: "Can the driver navigate Qatif's old town streets?", answer: "Yes, drivers on this route are familiar with the area; confirm your exact destination when booking." },
    ],
  },

  "dammam-airport-to-ras-tanura": {
    intro:
      "Ras Tanura is a Gulf coast refinery and port town, and this route serves two fairly different travellers — Aramco-linked business visitors heading to the industrial facilities, and beach-day travellers heading to the town's public coastal areas.",
    arrivalPickup: [
      "Flight tracking and arrivals-hall pickup work the same as on any other route from King Fahd International Airport.",
    ],
    roadJourney: [
      "At about 65 km, this is a genuine regional drive north along the Gulf coast, taking roughly 45 minutes.",
    ],
    destinationArrival: [
      "Ras Tanura town and its public beach areas are distinct from the refinery and port facilities — tell us which you're headed to, since access and drop-off points differ.",
    ],
    vehicleLuggage:
      "A sedan suits most bookings. Beach-day travellers with extra gear, or business visitors with equipment, should mention it so the right vehicle is arranged.",
    whoSuits: [
      { title: "Aramco and industrial visitors", description: "Direct transfer toward the refinery and port area for work-related travel." },
      { title: "Beach-day travellers", description: "A direct run to Ras Tanura's public coastal areas rather than a shared or self-driven option." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Whether you're headed to the town/beach area or the industrial facilities",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is Ras Tanura from King Fahd Airport?", answer: "About 65 km, typically a 45-minute drive." },
      { question: "Can I book this for a beach day rather than business travel?", answer: "Yes, this route is used for both — just confirm your destination within Ras Tanura when booking." },
    ],
  },

  "dammam-airport-to-saihat": {
    intro:
      "Saihat is a coastal town between Dammam and Qatif, smaller and less known to international visitors than its neighbours — this route exists mainly for travellers visiting family or local business contacts there rather than tourism.",
    arrivalPickup: [
      "Standard flight tracking and arrivals-hall pickup apply, the same as every route from King Fahd International Airport.",
    ],
    roadJourney: [
      "At about 40 km, the drive to Saihat takes roughly 32 minutes, running along the coastal corridor north of Dammam.",
    ],
    destinationArrival: [
      "Saihat is a smaller town without the district complexity of Dammam or Khobar — a specific address or landmark is all the driver needs for a direct drop-off.",
    ],
    vehicleLuggage:
      "A sedan is sufficient for the great majority of bookings on this route; mention your luggage count if travelling with more than standard cases.",
    whoSuits: [
      { title: "Family visits", description: "A direct, private option for travellers visiting relatives in Saihat." },
      { title: "Local business travel", description: "Point-to-point transfer for short business trips into the town." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact address or landmark in Saihat",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is Saihat from King Fahd Airport?", answer: "About 40 km, typically a 32-minute drive." },
      { question: "Is this route available 24/7 like the others?", answer: "Yes, the same booking process and availability apply as on every route." },
    ],
  },

  "dammam-airport-to-abqaiq": {
    intro:
      "Abqaiq is an Aramco processing town rather than a tourist destination, and almost every booking on this route is a contractor, engineer, or business visitor heading to facility-adjacent accommodation or the town itself.",
    arrivalPickup: [
      "Flight tracking and arrivals-hall pickup work the same as on any other airport route.",
    ],
    roadJourney: [
      "At about 80 km, this is a genuine regional drive taking roughly 55 minutes, mostly along open highway.",
    ],
    destinationArrival: [
      "Abqaiq town and the facility gate area are distinct destinations — confirm which one you need, since access arrangements differ.",
    ],
    vehicleLuggage:
      "A sedan covers most individual business travel. Teams travelling together with equipment should mention their numbers so a larger vehicle is arranged.",
    whoSuits: [
      { title: "Contractors and project staff", description: "A direct, work-oriented transfer timed to flight schedules rather than a tourism-focused trip." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Abqaiq town or facility gate — specify which",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How far is Abqaiq from King Fahd Airport?", answer: "About 80 km, typically a 55-minute drive." },
      { question: "Can this be arranged for a team arriving on different flights?", answer: "Yes, book each traveller's flight separately and we coordinate pickups accordingly." },
    ],
  },

  "dammam-airport-to-hofuf": {
    intro:
      "Hofuf is the gateway to Al-Ahsa, the UNESCO-listed oasis region — the longest of the Dammam Airport regional routes, and one used by both business travellers and visitors heading to the Qaisariah Souq and Ibrahim Palace heritage sites.",
    arrivalPickup: [
      "Standard flight tracking and arrivals-hall pickup apply — your driver waits once you've cleared customs.",
    ],
    roadJourney: [
      "At about 155 km, this is the longest of the Dammam Airport regional transfers, taking roughly 1 hour 40 minutes on the highway south from the airport toward Al-Ahsa.",
    ],
    destinationArrival: [
      "Hofuf's Qaisariah Souq and Ibrahim Palace sit in the older heritage core of the city, while hotels and business addresses are more spread out — tell us your exact destination so the driver plans directly to it.",
    ],
    vehicleLuggage:
      "Given the longer distance, an SUV is worth considering for families or anyone with more than standard luggage, though a sedan remains a reasonable choice for solo or light-luggage travel.",
    whoSuits: [
      { title: "Heritage and oasis visitors", description: "Direct transfer to the Qaisariah Souq, Ibrahim Palace, or other Al-Ahsa heritage sites." },
      { title: "Business travellers", description: "A longer regional transfer suited to those with meetings or projects in Hofuf." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact hotel, heritage site, or business address in Hofuf",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How far is Hofuf from King Fahd Airport?", answer: "About 155 km, typically 1 hour 40 minutes of driving." },
      { question: "Can the driver take us to Qaisariah Souq directly?", answer: "Yes, confirm this as your destination when booking." },
      { question: "Is this a long enough drive to need rest stops?", answer: "It's manageable in one stretch for most travellers, but if you'd prefer a stop, mention it when booking." },
    ],
  },

  "red-sea-airport-to-umluj": {
    intro:
      "Red Sea International Airport serves a newly developed luxury coastal destination, and most arrivals are continuing south to Umluj's beaches, dive sites, and coastal resorts rather than staying near the airport itself.",
    arrivalPickup: [
      "Your flight is tracked and your driver waits in the arrivals area once you've cleared customs, the same as on any other route.",
    ],
    roadJourney: [
      "At about 95 km, the drive south to Umluj takes roughly 1 hour 10 minutes along the Red Sea coastal road.",
    ],
    destinationArrival: [
      "Umluj's resorts, chalets, and marinas are spread along the coastline — confirm your exact accommodation so the driver can plan the closest practical route rather than a generic 'Umluj' drop-off.",
    ],
    vehicleLuggage:
      "Diving and beach trips often mean extra equipment alongside standard luggage — an SUV gives more room if you're travelling with gear, though a sedan is fine for a lighter trip.",
    whoSuits: [
      { title: "Diving and beach travellers", description: "Direct transfer to a specific resort, chalet, or marina in Umluj." },
      { title: "Couples and small groups", description: "A private, door-to-door option for a coastal getaway without arranging a rental car." },
    ],
    checklist: [
      "Flight number and arrival time",
      "Exact resort, chalet, or marina name in Umluj",
      "Passenger and luggage/equipment count",
    ],
    faqs: [
      { question: "How far is Umluj from Red Sea International Airport?", answer: "About 95 km, typically a 1 hour 10 minute drive." },
      { question: "Can you drop off directly at a dive marina?", answer: "Yes, confirm the marina or resort name when booking." },
    ],
  },

  // ── Long-distance airport transfers ───────────────────────────────────
  "taif-airport-to-makkah": {
    intro:
      "Taif's regional airport is a smaller, quieter alternative to flying into Jeddah for pilgrims and visitors whose real destination is Makkah — the appeal is less about the airport itself and more about what comes after: a scenic descent down the Al Hada mountain road rather than a flat highway drive.",
    arrivalPickup: [
      "Taif Regional Airport has a single, straightforward arrivals area — your driver tracks your flight and waits there once you've cleared customs, holding a name board.",
    ],
    roadJourney: [
      "The route down to Makkah follows the Al Hada mountain road, descending from Taif's elevated, cooler climate toward the lower desert plain around the Holy City. At roughly 100 km and 1.5 hours, it's a shorter journey than most other airport-to-Makkah routes, but the mountain descent itself is part of the experience — expect switchbacks and a change in scenery rather than a flat, monotonous drive.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a point near the Haram, confirmed with you in advance, since vehicle access directly to the mosque plaza is restricted for all traffic, not just private transfers.",
    ],
    vehicleLuggage:
      "Family vans are common on this route given how many bookings are pilgrim families travelling with luggage for an extended Umrah stay — mention your group size and bag count when booking so the right vehicle is ready.",
    whoSuits: [
      { title: "Umrah pilgrims arriving via Taif", description: "A direct, comfortable descent to a Makkah hotel near the Haram, avoiding the busier Jeddah airport route." },
      { title: "Families with luggage", description: "One vehicle for the whole group rather than splitting across shared transport." },
    ],
    checklist: [
      "Flight number and arrival time at Taif Regional Airport",
      "Makkah hotel name or area (Clock Tower, Ajyad, or elsewhere near the Haram)",
      "Passenger and luggage count",
      "Any mobility needs for the mountain descent, if relevant",
    ],
    faqs: [
      { question: "How long does the drive from Taif Airport to Makkah take?", answer: "Around 1 hour 30 minutes for roughly 100 km, mostly along the Al Hada mountain road." },
      { question: "Is the mountain road safe for a private transfer?", answer: "Yes, it's a well-used route between Taif and Makkah; drivers on this route are experienced with the descent." },
      { question: "Can the driver drop us near the Haram?", answer: "Yes, at a point near the Haram confirmed with you before travel — vehicle access to the mosque plaza itself is restricted for all traffic." },
      { question: "Why fly into Taif instead of Jeddah for Umrah?", answer: "Some travellers find Taif's smaller airport quicker to clear, and the road into Makkah is shorter than from Jeddah — it's a matter of personal preference and flight availability." },
      { question: "Can I book a family van for this route?", answer: "Yes, tell us your passenger and luggage count and we'll arrange a vehicle sized to your group." },
    ],
  },

  "taif-airport-to-madinah": {
    intro:
      "This is one of the longer airport transfers in the network — pilgrims and visitors who land in Taif but are heading first to Madinah rather than Makkah, usually because of flight scheduling rather than geography, since Taif sits much closer to Makkah than to Madinah.",
    arrivalPickup: [
      "Your flight into Taif Regional Airport is tracked, and your driver waits in the arrivals area once you've cleared customs.",
    ],
    roadJourney: [
      "At around 530 km and roughly 5 hours of driving, this is a genuine long-distance leg — longer than the Taif to Makkah route by a wide margin, since it involves travelling north past Makkah's surrounding region toward Madinah. Rest-stop pacing is worked out with you at booking rather than fixed in advance.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a hotel near the Prophet's Mosque, confirmed with you before you travel.",
    ],
    vehicleLuggage:
      "Given the distance, an SUV or van is generally a better choice than a sedan for comfort over the five-hour drive, particularly for families or anyone travelling with pilgrim luggage.",
    whoSuits: [
      { title: "Pilgrims beginning in Madinah", description: "Suited to travellers whose itinerary starts at the Prophet's Mosque before continuing to Makkah later." },
      { title: "Families and groups with luggage", description: "One vehicle for the full five-hour journey, with the pacing agreed at booking." },
    ],
    checklist: [
      "Flight number and arrival time at Taif Regional Airport",
      "Madinah hotel name or area near the Haram",
      "Preferred pacing — one long drive or a stop along the way",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long is the drive from Taif Airport to Madinah?", answer: "Around 5 hours for roughly 530 km of driving — one of the longer airport transfers we offer." },
      { question: "Is there a shorter way to reach Madinah?", answer: "Flying directly into Madinah's own airport is shorter if your itinerary allows it; this route exists for travellers whose flights land in Taif first." },
      { question: "Can we stop along the way?", answer: "Yes, tell us your preference when booking — one continuous drive or a planned stop." },
      { question: "What vehicle is best for this journey?", answer: "We generally recommend an SUV or van given the distance, especially for families with luggage." },
    ],
  },

  "alula-airport-to-madinah": {
    intro:
      "Many travellers build an itinerary that pairs AlUla's heritage sites with a Madinah visit, and this transfer covers the leg between them — flying into AlUla first, then driving across the northwest to the Prophet's Mosque rather than booking a separate domestic flight.",
    arrivalPickup: [
      "Your flight into AlUla International Airport is tracked, and your driver waits in the arrivals area once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 330 km and 3.5 hours, the drive runs south through the northwestern desert landscape that AlUla itself is known for, before arriving in Madinah. It's a genuine cross-region drive rather than a short hop, so pacing and any preferred stops are agreed with you at booking.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a hotel near the Prophet's Mosque, confirmed with you before travel.",
    ],
    vehicleLuggage:
      "Given the 3.5-hour distance and that most travellers on this route are also carrying AlUla touring gear, an SUV is a practical default — mention your luggage when booking.",
    whoSuits: [
      { title: "Multi-destination itineraries", description: "Suited to travellers combining an AlUla heritage stay with a Madinah visit in one trip." },
      { title: "Pilgrims and history travellers alike", description: "Works equally for religious travel and heritage tourism, since the route itself is the same." },
    ],
    checklist: [
      "Flight number and arrival time at AlUla International Airport",
      "Madinah hotel name or area near the Haram",
      "Passenger and luggage count, including any AlUla touring gear",
    ],
    faqs: [
      { question: "How long does the AlUla to Madinah drive take?", answer: "Around 3 hours 30 minutes for roughly 330 km." },
      { question: "Can I combine this with sightseeing in AlUla first?", answer: "Yes — this route is commonly booked after an AlUla stay, once you're ready to continue to Madinah." },
      { question: "Is the road well maintained for a long drive?", answer: "Yes, it's a standard highway route between the two regions." },
    ],
  },

  "alula-airport-to-tabuk": {
    intro:
      "This route links AlUla's heritage tourism with the Tabuk region in the northwest — used by travellers exploring the north of the Kingdom who don't want to backtrack through a domestic flight connection.",
    arrivalPickup: [
      "Your flight into AlUla International Airport is tracked and your driver waits in the arrivals area once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 330 km and 3.5 hours, the drive heads north across open desert terrain toward Tabuk, a genuinely different landscape from AlUla's immediate surroundings.",
    ],
    destinationArrival: [
      "Tabuk's hotels and business addresses are spread across the city — confirm your exact destination so the driver plans directly to it.",
    ],
    vehicleLuggage:
      "An SUV suits most bookings on this route given the distance and the amount of gear many AlUla-to-Tabuk travellers carry.",
    whoSuits: [
      { title: "Northwest touring itineraries", description: "Suited to travellers exploring AlUla and the Tabuk region as part of one trip." },
      { title: "Business travellers", description: "A direct alternative to a domestic flight connection for those working across both regions." },
    ],
    checklist: [
      "Flight number and arrival time at AlUla International Airport",
      "Exact hotel or address in Tabuk",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long is the AlUla to Tabuk transfer?", answer: "Around 3 hours 30 minutes for roughly 330 km." },
      { question: "Is this route used mainly for business or tourism?", answer: "Both — it serves travellers combining AlUla heritage visits with Tabuk business or onward travel toward NEOM." },
    ],
  },

  "alula-airport-to-neom": {
    intro:
      "One of the longer routes in the network, connecting AlUla's heritage tourism with the NEOM development in the far northwest — used by travellers and business visitors moving between the two rather than arranging separate flights.",
    arrivalPickup: [
      "Your flight into AlUla International Airport is tracked and your driver waits once you've collected your luggage.",
    ],
    roadJourney: [
      "At around 500 km and 5–6 hours, this is a genuine long-distance drive northwest across the desert toward the Red Sea and the NEOM region. Rest stops and pacing are agreed with you at booking rather than fixed in advance.",
    ],
    destinationArrival: [
      "NEOM is a large, still-developing region with several distinct project sectors — confirm your exact destination within NEOM when booking, since it significantly affects the final leg of the drive.",
    ],
    vehicleLuggage:
      "Given the distance, an SUV or van is the practical choice for comfort — mention your group size and luggage when booking.",
    whoSuits: [
      { title: "NEOM project staff and business visitors", description: "A direct alternative to connecting flights for those working across both regions." },
      { title: "Heritage-to-megaproject itineraries", description: "Suited to travellers combining an AlUla stay with a NEOM visit." },
    ],
    checklist: [
      "Flight number and arrival time at AlUla International Airport",
      "Exact NEOM sector or destination",
      "Preferred pacing — continuous drive or a planned stop",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the AlUla to NEOM transfer take?", answer: "Around 5 to 6 hours for roughly 500 km, depending on the exact NEOM destination." },
      { question: "Can you drop off at a specific NEOM project sector?", answer: "Yes, provide the exact destination when booking." },
      { question: "Is a rest stop included on a drive this long?", answer: "We can plan one in if you'd like — mention your preference when booking." },
    ],
  },

  "jeddah-airport-to-madinah": {
    intro:
      "Some pilgrims deliberately begin their journey in Madinah rather than Makkah, flying into Jeddah — the Kingdom's busiest pilgrim gateway — and travelling north first, before continuing on to Makkah later in their trip.",
    arrivalPickup: [
      "King Abdulaziz International Airport runs the Hajj Terminal during pilgrimage season alongside its regular terminals — we track your flight and match the pickup to whichever terminal you actually land at.",
    ],
    roadJourney: [
      "At about 420 km and 4 hours, this is a genuine long-distance drive north from Jeddah. Rest-stop flexibility is built into the booking rather than assuming a single non-stop run — particularly useful for pilgrims travelling with elderly family members.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a hotel near the Prophet's Mosque, confirmed with you before you travel.",
    ],
    vehicleLuggage:
      "Family vans are common on this route given how many bookings are pilgrim groups travelling with substantial luggage for an extended stay — mention your numbers when booking.",
    whoSuits: [
      { title: "Pilgrims beginning in Madinah", description: "A direct, comfortable route for those whose Umrah or Hajj itinerary starts at the Prophet's Mosque." },
      { title: "Families and elderly travellers", description: "Rest-stop flexibility built into the four-hour journey rather than a forced non-stop drive." },
    ],
    checklist: [
      "Flight number and which terminal (including Hajj Terminal during season)",
      "Madinah hotel name or area near the Haram",
      "Passenger and luggage count",
      "Any elderly or mobility considerations worth flagging",
    ],
    faqs: [
      { question: "How long does the Jeddah Airport to Madinah drive take?", answer: "Around 4 hours for roughly 420 km." },
      { question: "Do you pick up from the Hajj Terminal?", answer: "Yes, we track flights landing at the Hajj Terminal the same way as any other terminal during pilgrimage season." },
      { question: "Can we stop for prayer or rest along the way?", answer: "Yes, mention your preference when booking and the driver plans accordingly." },
      { question: "Why fly into Jeddah instead of Madinah directly for a Madinah-first itinerary?", answer: "Often it comes down to flight availability and pricing — Jeddah has more international connections, so some pilgrims fly there even when Madinah is their first stop." },
    ],
  },

  "jeddah-airport-to-riyadh": {
    intro:
      "At 950 km, this is one of the longest domestic transfers we operate, and travellers who book it from the airport itself have usually already weighed it against a short domestic flight and chosen the road anyway — often because they're continuing straight on from an international arrival and would rather avoid a second flight and a second security queue the same day.",
    arrivalPickup: [
      "King Abdulaziz International Airport has multiple terminal areas including the Hajj Terminal — your flight is tracked and the pickup is matched to whichever terminal you land at.",
    ],
    roadJourney: [
      "The drive covers the same cross-country distance as the general Jeddah to Riyadh route, but starts from the airport rather than a Jeddah hotel — around 950 km and 9 hours, with rest and fuel stops built into the plan rather than left to chance. Given the length, we're happy to discuss departure timing and pacing that suits you, rather than defaulting to a single rigid schedule.",
    ],
    destinationArrival: [
      "Riyadh's districts are spread widely — Olaya, KAFD, the Diplomatic Quarter, and the outer residential areas are all served, but the exact address matters, so confirm it before you travel.",
    ],
    vehicleLuggage:
      "For a journey of this length we generally recommend an SUV or van over a sedan, both for comfort and for the additional luggage space most travellers arriving internationally need.",
    whoSuits: [
      { title: "International arrivals continuing to Riyadh", description: "Skips a second flight and security queue the same day as a long-haul arrival." },
      { title: "Families and groups with luggage", description: "One vehicle for the whole nine-hour journey, at a fixed price regardless of stops." },
    ],
    comparison: [
      { mode: "Domestic connecting flight", note: "Faster in the air, but adds a second security process and boarding wait straight after an international arrival." },
      { mode: "Private road transfer", note: "One vehicle, no second flight, and flexible pacing — the trade-off is roughly nine hours of driving instead of about two hours flying." },
    ],
    checklist: [
      "Flight number and which JED terminal you land at",
      "Exact hotel or address in Riyadh",
      "Preferred pacing — one long push or planned stops",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Jeddah Airport to Riyadh transfer take?", answer: "Around 9 hours of driving for 950 km, with rest stops built into the plan." },
      { question: "Is it better to fly domestically instead?", answer: "A domestic flight is faster in the air, but this route suits travellers who'd rather avoid a second flight and security queue right after landing internationally, or who are travelling with a full vehicle-load of luggage." },
      { question: "Can the driver wait if my international flight is delayed?", answer: "Yes, we track your flight and adjust the pickup time to your actual landing time." },
      { question: "What vehicle should I book for this distance?", answer: "We recommend an SUV or van for comfort and luggage space on a journey this long." },
    ],
  },

  "riyadh-airport-to-jeddah": {
    overrides: ruhArrivalOverrides("Jeddah", "Confirmed in your quotation"),
    intro:
      "This route serves the reverse direction of the Kingdom's longest domestic corridor — travellers landing at King Khalid International Airport in the capital who are continuing straight to Jeddah, often diplomatic or business visitors whose itinerary starts in Riyadh before the coast.",
    arrivalPickup: [
      "King Khalid International Airport has several terminals — share your flight number and terminal. Any airport pickup is confirmed case by case in your quotation.",
    ],
    roadJourney: [
      "At about 950–990 km, this mirrors the return direction of the Jeddah to Riyadh route, but starts from the airport. We plan rest and fuel stops into every booking rather than treating it as a single unbroken drive, and the exact pacing is worked out with you when you book.",
    ],
    destinationArrival: [
      "Jeddah's Corniche hotels, business districts, and residential areas are spread along the coast — confirm your exact address so the driver plans directly to it rather than a general area.",
    ],
    vehicleLuggage:
      "Given the length of the journey, an SUV or van is generally the more comfortable choice, particularly for business travellers with equipment or families relocating between cities.",
    whoSuits: [
      { title: "Business and diplomatic travellers", description: "A direct, private option for those whose trip starts in the capital before continuing to the coast." },
      { title: "Families and groups with luggage", description: "One vehicle for the whole long-distance journey rather than a domestic connecting flight." },
    ],
    comparison: [
      { mode: "Domestic connecting flight", note: "Quicker in the air, but requires a second check-in and boarding process straight after landing." },
      { mode: "Private road transfer", note: "No second flight, flexible stops, and one vehicle for the whole journey and your luggage, priced in a quotation you confirm." },
    ],
    checklist: [
      "Flight number and RUH terminal",
      "Exact hotel or address in Jeddah",
      "Preferred pacing for the long drive",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Riyadh Airport to Jeddah drive take?", answer: "The road distance is about 950–990 km. Driving time depends on traffic and the rest stops you agree, and is discussed when you request a quote." },
      { question: "Is this route mostly business travellers?", answer: "It's common among business and diplomatic travellers, but also used by families and tourists who prefer one vehicle over a connecting flight." },
      { question: "Can I request an early-morning or overnight departure?", answer: "Yes, departure timing is agreed with you at booking rather than fixed to one schedule." },
    ],
  },

  "riyadh-airport-to-makkah": {
    overrides: ruhArrivalOverrides("Makkah", "Confirmed in your quotation"),
    intro:
      "For pilgrims who fly into the capital rather than Jeddah — often because of flight availability or an onward business stop in Riyadh — this route covers the long drive west to Makkah, avoiding a domestic flight connection into the Hejaz.",
    arrivalPickup: [
      "King Khalid International Airport has several terminals — share your terminal and flight number. Any airport pickup is confirmed case by case in your quotation.",
    ],
    roadJourney: [
      "At roughly 870–905 km, this is a substantial cross-country drive. Given the pilgrim context of most bookings, we can coordinate a stop at a designated miqat location along the way for those entering ihram, discussed and confirmed with you at booking rather than assumed automatically.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a point near the Haram, in the Clock Tower, Ajyad, or nearby hotel areas, confirmed with you before travel — vehicle access to the mosque plaza itself is restricted for all traffic.",
    ],
    vehicleLuggage:
      "Family vans are common on this route given the combination of pilgrim luggage and the length of the drive — mention your group size when booking.",
    whoSuits: [
      { title: "Umrah and Hajj pilgrims via Riyadh", description: "A direct alternative for pilgrims whose flights land in the capital rather than Jeddah." },
      { title: "Families with luggage for an extended stay", description: "One vehicle for the whole journey." },
    ],
    checklist: [
      "Flight number and RUH terminal",
      "Whether you need a miqat stop for ihram",
      "Makkah hotel name or area near the Haram",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Riyadh Airport to Makkah transfer take?", answer: "The road distance is roughly 870–905 km. Driving time depends on traffic, rest stops and any miqat stop you request." },
      { question: "Can the driver stop at a miqat for ihram?", answer: "Yes, mention this when booking and we coordinate a stop at the appropriate point along the route." },
      { question: "Why fly into Riyadh instead of Jeddah for Umrah?", answer: "Some pilgrims combine a Riyadh business stop with their pilgrimage, or simply find better flight availability into the capital." },
      { question: "Is this transfer suitable for a large family group?", answer: "Tell us your passenger and luggage numbers, and suitable vehicles are offered in your quotation." },
    ],
  },

  "riyadh-airport-to-madinah": {
    overrides: ruhArrivalOverrides("Madinah", "Confirmed in your quotation"),
    intro:
      "This route serves travellers who land in the capital but are heading first to Madinah — sometimes pilgrims combining a business trip with Umrah, sometimes simply a matter of which city had the better flight into the Kingdom.",
    arrivalPickup: [
      "Share your flight number and terminal at King Khalid International Airport. Any airport pickup and meeting point are confirmed case by case in your quotation.",
    ],
    roadJourney: [
      "At roughly 850 km, this is a long cross-country drive northwest from the capital toward Madinah, with rest-stop pacing agreed with you at booking.",
    ],
    destinationArrival: [
      "Drop-off is arranged at a hotel near the Prophet's Mosque, in the Central (Markaziyah) area, confirmed with you before travel.",
    ],
    vehicleLuggage:
      "Given the length of the drive, an SUV or van generally makes more sense than a sedan, particularly for families or anyone with pilgrim luggage.",
    whoSuits: [
      { title: "Pilgrims and business travellers combining trips", description: "A direct route for those whose itinerary links a Riyadh stop with Madinah." },
      { title: "Families with luggage", description: "One vehicle for the whole drive rather than a domestic flight connection." },
    ],
    checklist: [
      "Flight number and RUH terminal",
      "Madinah hotel name or area near the Haram",
      "Preferred pacing for the long drive",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Riyadh Airport to Madinah drive take?", answer: "The road distance is roughly 850 km. Driving time depends on traffic and the rest stops you agree." },
      { question: "Can this be combined with a later Madinah to Makkah leg?", answer: "Yes, that's a separate route we can arrange alongside this one once your Madinah stay is planned." },
    ],
  },

  "dammam-airport-to-riyadh": {
    overrides: dmmArrivalOverrides("Riyadh", "King Fahd International Airport has a single main passenger terminal. Share your flight number — we track your flight, and your driver meets you at the meeting point confirmed in your booking. Free waiting time is included if your flight lands late."),
    intro:
      "This is one of the more frequently booked long-distance airport routes, linking the Eastern Province's main airport with the capital — used heavily by energy-sector business travellers moving between Dammam's industrial base and Riyadh's corporate headquarters.",
    arrivalPickup: [
      "King Fahd International Airport has a single main passenger terminal. Share your flight number — we track your flight, and your driver meets you at the meeting point confirmed in your booking. Free waiting time is included if your flight lands late.",
    ],
    roadJourney: [
      "At about 400 km by road, this is a substantial but manageable drive west across the peninsula toward Riyadh — roughly four hours of driving without stops, before traffic in Riyadh and any rest stops you agree.",
    ],
    destinationArrival: [
      "Riyadh's business districts and hotels are spread across the city — confirm your exact address, whether that's KAFD, Olaya, or elsewhere, so the driver plans directly to it.",
    ],
    vehicleLuggage:
      "A sedan is a reasonable choice for solo business travel on this route; families or those with more luggage should consider an SUV.",
    whoSuits: [
      { title: "Energy-sector business travellers", description: "A direct, private option between the Eastern Province and the capital, timed to flight schedules." },
      { title: "Families and relocating travellers", description: "One vehicle for luggage-heavy trips between the two regions." },
    ],
    comparison: [
      { mode: "Domestic flight", note: "Faster overall, but adds a second airport process straight after arrival — worth it mainly if you're not carrying much luggage and value speed over convenience." },
      { mode: "Private road transfer", note: "Door-to-door with no second flight, priced in a quotation you confirm before you travel." },
    ],
    checklist: [
      "Flight number and arrival time at King Fahd Airport",
      "Exact business address or hotel in Riyadh",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Dammam Airport to Riyadh drive take?", answer: "The road distance is about 400 km, roughly four hours of driving without stops. Traffic in Riyadh, your exact address and any rest stops add to the total." },
      { question: "My Riyadh flight was moved to Dammam — can you drive me to Riyadh?", answer: "Yes. Share your flight number and your Riyadh address; we track your flight, and the pickup and price are confirmed in your quotation." },
      { question: "Is this route mainly used for business travel?", answer: "It's especially popular with energy-sector business travellers, though it's open to any traveller making this journey." },
      { question: "Can I book this transfer for a same-day return?", answer: "Yes, book the return leg (Riyadh to Dammam Airport) separately for the same or a later day." },
    ],
  },

  "madinah-airport-to-riyadh": {
    intro:
      "Travellers on this route are usually pilgrims or visitors who began their trip in Madinah and are now continuing to the capital — for business, an onward international flight from Riyadh, or simply to see more of the Kingdom before departing.",
    arrivalPickup: [
      "Your flight into Prince Mohammad bin Abdulaziz International Airport is tracked, and your driver waits in the arrivals area once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 850 km and 8 hours, this is a long cross-country drive southeast toward the capital, with pacing and any rest stops agreed with you at booking.",
    ],
    destinationArrival: [
      "Riyadh's hotels, business districts, and residential areas are spread across the city — confirm your exact address before travel.",
    ],
    vehicleLuggage:
      "An SUV or van is generally the more comfortable choice for this distance, particularly for pilgrims travelling with luggage accumulated during their Madinah stay.",
    whoSuits: [
      { title: "Pilgrims continuing to Riyadh", description: "A direct route for those extending their trip beyond Madinah to the capital." },
      { title: "Business travellers combining a Madinah visit", description: "One vehicle for the full eight-hour journey." },
    ],
    checklist: [
      "Flight number and arrival time at Madinah Airport",
      "Exact hotel or address in Riyadh",
      "Preferred pacing for the eight-hour drive",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Madinah Airport to Riyadh drive take?", answer: "Around 8 hours for roughly 850 km." },
      { question: "Is this a common route after finishing a Madinah pilgrimage stay?", answer: "Yes, it's frequently booked by travellers continuing to Riyadh for business or an onward flight after their time in Madinah." },
    ],
  },

  "jeddah-airport-to-taif": {
    intro:
      "Taif's cool mountain climate has long made it a summer escape from Jeddah's heat, and this route covers the airport-to-mountain leg for travellers heading up rather than staying on the coast — the drive itself, up the Al Hada pass, is part of what makes the trip worthwhile.",
    arrivalPickup: [
      "Your flight into King Abdulaziz International Airport is tracked across its terminals, including the Hajj Terminal during pilgrimage season, and your driver waits once you've cleared customs.",
    ],
    roadJourney: [
      "At 175 km and 2 hours, the drive climbs from Jeddah's coastal plain up the Al Hada mountain road into Taif's higher elevation — a noticeable change in scenery and temperature over the course of the journey.",
    ],
    destinationArrival: [
      "Taif's hotels and resorts are spread across the city and the surrounding highlands — confirm your exact destination so the driver plans the most direct route up.",
    ],
    vehicleLuggage:
      "A sedan is comfortable for most travellers on this route; families with more luggage for an extended mountain stay should consider an SUV.",
    whoSuits: [
      { title: "Summer escape travellers", description: "A direct, private route up to Taif's cooler climate, away from Jeddah's coastal heat." },
      { title: "Umrah pilgrims extending their trip", description: "Suited to those combining a Jeddah/Makkah pilgrimage with a Taif stay." },
    ],
    checklist: [
      "Flight number and JED terminal",
      "Exact hotel or resort in Taif",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Jeddah Airport to Taif drive take?", answer: "Around 2 hours for 175 km, including the climb up the Al Hada mountain road." },
      { question: "Is the mountain road difficult for a private transfer?", answer: "No, it's a well-travelled route between Jeddah and Taif that drivers on this route know well." },
      { question: "Is this route busier in summer?", answer: "Yes, demand rises in the warmer months as travellers head up to Taif's cooler climate." },
    ],
  },

  "alula-airport-to-riyadh": {
    intro:
      "At 1,050 km, this is the longest airport transfer in our network — a genuine cross-country journey for travellers who've finished an AlUla heritage visit and are continuing to the capital rather than flying, whether for business, an onward international flight, or simply preference for one vehicle over a connection.",
    arrivalPickup: [
      "Your flight into AlUla International Airport is tracked, and your driver waits in the arrivals area once you've collected your luggage.",
    ],
    roadJourney: [
      "At around 10 hours of driving, this is the longest domestic transfer we offer. Rest and fuel stops are planned into every booking, and departure timing — early morning, overnight, or a full-day drive — is worked out with you rather than fixed to one schedule.",
    ],
    destinationArrival: [
      "Riyadh's districts are spread widely across the capital — confirm your exact hotel, office, or address so the driver plans directly to it, including onward drop-off at King Khalid International Airport if that's your next stop.",
    ],
    vehicleLuggage:
      "Given the length of this journey, an SUV or van is strongly recommended over a sedan, both for comfort and for the touring luggage most AlUla travellers carry.",
    whoSuits: [
      { title: "Multi-region itineraries", description: "Suited to travellers combining an AlUla heritage visit with business or onward international travel from Riyadh." },
      { title: "Groups avoiding a domestic flight connection", description: "One vehicle for the entire ten-hour journey at a fixed price." },
    ],
    comparison: [
      { mode: "Domestic connecting flight", note: "Significantly faster, and worth considering seriously given the length of this particular drive." },
      { mode: "Private road transfer", note: "Chosen mainly by those who want one vehicle for a full group and luggage, or who are combining this leg with sightseeing along the way." },
    ],
    checklist: [
      "Flight number and arrival time at AlUla International Airport",
      "Exact destination in Riyadh, including onward airport drop-off if relevant",
      "Preferred departure timing and pacing",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long is the AlUla Airport to Riyadh transfer?", answer: "Around 10 hours for roughly 1,050 km — the longest route we offer." },
      { question: "Should I consider flying instead, given the distance?", answer: "It's worth considering if speed matters more than travelling with a full vehicle-load of luggage or group — a domestic flight is significantly faster on this specific route." },
      { question: "Can the departure be planned overnight to arrive by morning?", answer: "Yes, discuss your preferred departure timing when booking." },
    ],
  },

  "alula-airport-to-jeddah": {
    intro:
      "This route connects AlUla's heritage destination with the Red Sea coast — used by travellers finishing an AlUla stay and continuing to Jeddah for a flight home, a coastal extension to their trip, or business.",
    arrivalPickup: [
      "Your flight into AlUla International Airport is tracked, and your driver waits once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 720 km and 7 hours, this is a long southward drive from the northwest desert region down to the coast, with rest stops planned into the journey.",
    ],
    destinationArrival: [
      "Jeddah's Corniche, hotel districts, and the airport itself (for onward flights) are all valid destinations — confirm your exact address or whether you're heading to King Abdulaziz Airport for a connecting flight.",
    ],
    vehicleLuggage:
      "Given the seven-hour distance and typical AlUla touring luggage, an SUV is a practical default for this route.",
    whoSuits: [
      { title: "AlUla-to-coast itineraries", description: "Suited to travellers finishing heritage sightseeing and continuing to Jeddah." },
      { title: "Onward international travellers", description: "Direct drop-off at Jeddah's airport if that's your next connection." },
    ],
    checklist: [
      "Flight number and arrival time at AlUla International Airport",
      "Exact address in Jeddah, or airport drop-off if continuing onward",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the AlUla to Jeddah transfer take?", answer: "Around 7 hours for roughly 720 km." },
      { question: "Can you drop me at Jeddah Airport for a connecting flight?", answer: "Yes, tell us this when booking and the driver takes you directly to the terminal." },
    ],
  },

  "abha-airport-to-jeddah": {
    intro:
      "This route links the cooler southern highlands around Abha with the Red Sea coast — travellers finishing a highland stay and continuing to Jeddah, whether for an onward flight or to extend their trip along the coast.",
    arrivalPickup: [
      "Your flight into Abha International Airport is tracked, and your driver waits in the arrivals area once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 620 km and 6.5 hours, the drive descends from the Asir highlands down toward the coastal plain and Jeddah, a genuine change in landscape and climate over the course of the journey.",
    ],
    destinationArrival: [
      "Jeddah's hotel districts, the Corniche, and the airport for onward connections are all valid destinations — confirm your exact address when booking.",
    ],
    vehicleLuggage:
      "Given the 6.5-hour distance, an SUV or van is generally the more comfortable option, particularly for families.",
    whoSuits: [
      { title: "Highlands-to-coast itineraries", description: "Suited to travellers combining an Asir highlands stay with a Jeddah leg." },
      { title: "Onward international travellers", description: "Direct drop-off at Jeddah's airport if continuing to a connecting flight." },
    ],
    checklist: [
      "Flight number and arrival time at Abha International Airport",
      "Exact address in Jeddah, or airport drop-off",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Abha to Jeddah transfer take?", answer: "Around 6 hours 30 minutes for roughly 620 km." },
      { question: "Is the road from the highlands down to the coast manageable in one drive?", answer: "Yes, it's a standard highway route; mention if you'd prefer a stop along the way." },
    ],
  },

  "abha-airport-to-riyadh": {
    intro:
      "Travellers on this route are usually finishing a stay in the southern Asir highlands and continuing to the capital — for business, an onward flight, or simply to see more of the Kingdom without backtracking through a domestic connection.",
    arrivalPickup: [
      "Your flight into Abha International Airport is tracked, and your driver waits once you've collected your luggage.",
    ],
    roadJourney: [
      "At about 950 km and 9 hours, this is a substantial cross-country drive north across the southern desert into Riyadh, with rest stops planned into the journey.",
    ],
    destinationArrival: [
      "Riyadh's districts and business areas are spread across the capital — confirm your exact hotel, office, or address before travel.",
    ],
    vehicleLuggage:
      "Given the nine-hour distance, an SUV or van is the recommended choice over a sedan for comfort on this journey.",
    whoSuits: [
      { title: "Highlands-to-capital travellers", description: "A direct route for those combining an Asir highlands stay with business or onward travel from Riyadh." },
      { title: "Families and groups with luggage", description: "One vehicle for the full nine-hour drive." },
    ],
    checklist: [
      "Flight number and arrival time at Abha International Airport",
      "Exact destination in Riyadh",
      "Preferred pacing for the nine-hour drive",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Abha to Riyadh drive take?", answer: "Around 9 hours for roughly 950 km." },
      { question: "Should I consider a domestic flight instead?", answer: "Worth considering if speed matters most — a flight is significantly faster on this route than the nine-hour drive." },
    ],
  },

  "jeddah-airport-to-yanbu": {
    intro:
      "Yanbu combines Red Sea resorts with a major industrial city, and travellers on this route are typically heading to one or the other — a coastal getaway or a corporate assignment — after landing at the Kingdom's busiest international gateway.",
    arrivalPickup: [
      "Your flight into King Abdulaziz International Airport is tracked across its terminals, and your driver waits once you've cleared customs.",
    ],
    roadJourney: [
      "At 330 km and roughly 3 hours 15 minutes, the drive runs north along the coastal highway from Jeddah toward Yanbu, a manageable distance in one stretch for most travellers.",
    ],
    destinationArrival: [
      "Yanbu's resort areas, the Royal Commission waterfront, and the industrial city are distinct destinations — confirm which one you're headed to so the driver plans accordingly.",
    ],
    vehicleLuggage:
      "A sedan suits most business travel on this route; families heading to Yanbu's beach resorts with extra gear should consider an SUV.",
    whoSuits: [
      { title: "Red Sea resort travellers", description: "Direct transfer to a specific Yanbu resort rather than a general drop-off." },
      { title: "Petrochemical and industrial-sector business travellers", description: "A direct route to Yanbu Industrial City for corporate travel." },
    ],
    checklist: [
      "Flight number and JED terminal",
      "Exact resort, hotel, or business address in Yanbu",
      "Passenger and luggage count",
    ],
    faqs: [
      { question: "How long does the Jeddah Airport to Yanbu drive take?", answer: "Around 3 hours 15 minutes for 330 km." },
      { question: "Is this route used for business or leisure?", answer: "Both — it serves petrochemical-sector business travellers and Red Sea resort visitors alike." },
    ],
  },
};
