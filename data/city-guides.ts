import type { Faq } from "./faqs";
import type { CitySection } from "@/components/city-transfer/CityTransferHub";

/**
 * Per-city enrichment merged onto the base City record in cities.ts, the same
 * split used for airports (airports.ts + airport-guides.ts). Keeps cities.ts
 * lean while letting each city carry unique FAQs and local context instead of
 * templated, find-replace copy. Invents no prices, wait times, or guarantees.
 */
export interface CityGuide {
  lastUpdated?: string;
  /** Short paragraph covering business districts, events/seasonality, transport options, and local travel advice. */
  localInsight?: string;
  /** Unique FAQs for the general /taxi-service/{city} page (max 8). */
  faqs?: Faq[];
  /** Additional unique FAQs for the /cities/{city} airport-hotel hub page (hub cities only). */
  hubFaqs?: Faq[];
  /** H2 #1 "Private Transfers in [City]" intro paragraphs (~100-160 words), for the deep /taxi-service/{city} page. */
  introParagraphs?: string[];
  /** The flexible, per-city body sections for /taxi-service/{city} — count and kind vary by city. */
  sections?: CitySection[];
}

export const cityGuides: Record<string, CityGuide> = {
  riyadh: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Riyadh's business travel centres on King Fahd Road, Olaya, and the Diplomatic Quarter, with King Abdullah Financial District (KAFD) now a major pickup and drop-off point for corporate riders. Riyadh Season (winter) and major exhibitions at Riyadh Front pull in heavy short-notice demand, so booking a day or two ahead is worthwhile during peak weeks. Getting around the city by private transfer is generally easier than relying on ride-hailing during large events, since a booked car has your route and pickup point confirmed in advance rather than searching for a match. For business trips, request a car with WhatsApp confirmation the night before so your driver is outside your hotel or office at the exact time you asked for.",
    introParagraphs: [
      "Riyadh is the Kingdom's capital and its largest business centre, so most private-transfer demand here is corporate: airport arrivals heading straight to a meeting, teams moving between offices in KAFD and Olaya, and executives who need a driver waiting between appointments rather than a taxi hailed on the street. The city's sheer size — spreading well beyond the historic core into Olaya, the Diplomatic Quarter, and the newer financial district — makes a pre-booked, fixed-price car more predictable than arranging transport on arrival.",
      "The city is also a hub for longer journeys — travellers routing through Riyadh to reach Jeddah, Makkah, Madinah, the Eastern Province, or AlUla commonly book a private car for the whole leg rather than switching between transport types. Pre-booking matters most during Riyadh Season and major exhibitions at Riyadh Front, when short-notice demand spikes across the city and vehicle availability tightens quickly.",
    ],
    sections: [
      {
        heading: "Riyadh Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "King Khalid International Airport (RUH) sits north of the city, roughly 30-45 minutes from central districts like Olaya or KAFD depending on traffic. Your driver tracks your flight and meets you in the arrivals hall with a name board, then drives directly to your hotel, office, or onward destination at a fixed price agreed before you travel — the same price whether your flight lands early or is delayed.",
            "The reverse leg works the same way — a driver collects you from your hotel or office and drives to the terminal for your departure, timed around your flight, with time built in for Airport Road traffic. See our <a href='/airport-transfer/riyadh-airport'>Riyadh Airport transfer page</a> for the full arrival process and vehicle options.",
          ],
        },
      },
      {
        heading: "Business and Corporate Transportation in Riyadh",
        block: {
          kind: "prose",
          paragraphs: [
            "King Abdullah Financial District (KAFD) is one of the most-requested Riyadh pickup points for corporate travel, alongside King Fahd Road and the Diplomatic Quarter. For a full day of meetings, send your schedule of stops on WhatsApp and we'll quote a fixed day-rate with the same driver and vehicle waiting between them, rather than booking a separate ride each time.",
            "During Riyadh Season, major exhibitions, or large conferences, demand rises quickly and a booked car has your route and pickup point confirmed in advance — generally more reliable than searching for a ride-hailing match during a large event. Booking a day or two ahead is worthwhile during peak weeks.",
          ],
        },
      },
      {
        heading: "Private Transfers from Riyadh to Other Cities",
        block: {
          kind: "cards",
          intro: "A selection of the most-requested long-distance journeys from Riyadh, each a fixed-price private transfer.",
          columns: 3,
          cards: [
            { title: "Riyadh to Jeddah", body: "A cross-country transfer connecting the capital with the Red Sea coast.", href: "/routes/riyadh-to-jeddah", linkLabel: "Riyadh to Jeddah route" },
            { title: "Riyadh to Makkah", body: "A direct private transfer for pilgrims travelling on to Umrah.", href: "/routes/riyadh-to-makkah", linkLabel: "Riyadh to Makkah route" },
            { title: "Riyadh to Madinah", body: "A private long-distance transfer to the Prophet's Mosque.", href: "/routes/riyadh-to-madinah", linkLabel: "Riyadh to Madinah route" },
            { title: "Riyadh to Dammam", body: "A private transfer across to the Eastern Province and Khobar metro area.", href: "/routes/riyadh-to-dammam", linkLabel: "Riyadh to Dammam route" },
            { title: "Riyadh to AlUla", body: "A private long-distance transfer to the heritage sites and resorts of AlUla.", href: "/routes/riyadh-to-alula", linkLabel: "Riyadh to AlUla route" },
            { title: "Riyadh to Qassim", body: "A private transfer north to Buraidah, Unaizah and the wider Qassim region.", href: "/routes/riyadh-to-qassim", linkLabel: "Riyadh to Qassim route" },
          ],
        },
      },
      {
        heading: "Riyadh Hotel Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Fixed-price private transfers are available between King Khalid Airport and hotels across Olaya, KAFD, the Diplomatic Quarter, and greater Riyadh. Browse our <a href='/cities/riyadh'>Riyadh hotel transfer directory</a> for a specific hotel, or send us your hotel's name and address directly and we'll arrange a private transfer to the door.",
            "Guests staying for a multi-day business trip often book a return airport transfer at the same time as the arrival pickup, which removes the need to arrange departure transport separately once the meetings are done.",
          ],
        },
      },
      {
        heading: "Diriyah and Cultural Destination Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Diriyah and At-Turaif, the birthplace of the first Saudi state, sit on the opposite side of the city from many hotel districts, so private transfers here are booked as a fixed-price round trip with waiting time included if you'd like the same driver for the return leg. The same applies to Riyadh Front and other major event venues during Riyadh Season.",
          ],
        },
      },
      {
        heading: "Families, Groups, and Business Delegations",
        block: {
          kind: "prose",
          paragraphs: [
            "For families visiting during Riyadh Season, a larger sedan or van suits most groups depending on passenger count and luggage — mention numbers and any car seats needed when requesting a quote. For a visiting business delegation, a van keeps the whole group together for one fixed price, and a full-day chauffeur booking removes the need to arrange separate local transport between venues.",
          ],
        },
      },
      {
        heading: "Pickup Areas in Riyadh",
        block: {
          kind: "bullets",
          intro: "Common pickup and drop-off points our drivers know well:",
          items: ["King Khalid International Airport", "Kingdom Centre Tower and King Fahd Road", "King Abdullah Financial District (KAFD)", "Diplomatic Quarter", "Diriyah and At-Turaif", "Riyadh Front"],
        },
      },
      {
        heading: "Riyadh's Regional Connections",
        block: {
          kind: "prose",
          paragraphs: [
            "Riyadh functions as a hub for journeys across central and eastern Saudi Arabia — private intercity transfers run east to Dammam, Khobar, and Jubail, north toward Qassim and Hail, and west toward Jeddah, Makkah, Madinah, and AlUla. Long-distance travellers frequently route through Riyadh rather than book each leg separately, particularly when a trip combines a business stop in the capital with onward pilgrimage or leisure travel.",
            "For any of these longer routes, the price is agreed and fixed before you travel, so the length of the drive or the time of day doesn't change what you pay.",
          ],
        },
      },
      {
        heading: "How to Book a Riyadh Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or pickup address, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is King Khalid International Airport from central Riyadh?",
        answer: "King Khalid International Airport sits north of the city, roughly a 30-45 minute drive to central districts like Olaya or KAFD depending on traffic. We track your flight so pickup timing adjusts automatically.",
      },
      {
        question: "Can I book a taxi in Riyadh for a full business day?",
        answer: "Yes. Send us your schedule of meetings or venues on WhatsApp and we'll quote a fixed day-rate with the same driver and vehicle waiting between stops.",
      },
      {
        question: "Is there a taxi service near King Abdullah Financial District (KAFD)?",
        answer: "Yes, KAFD is one of our most requested Riyadh pickup points for corporate travel. We recommend booking with your office or hotel address as the exact pickup location.",
      },
      {
        question: "What vehicle should I book for a family visiting Riyadh Season?",
        answer: "For families we recommend a larger sedan or van depending on group size and luggage — mention passenger count and any car seats needed when requesting your quote.",
      },
      {
        question: "How much notice do I need to book a Riyadh taxi during major events?",
        answer: "During Riyadh Season, exhibitions, or large conferences, demand rises quickly, so booking at least a day in advance gives you more vehicle choice, though we do accept same-day requests when available.",
      },
      {
        question: "Do you offer transfers between Riyadh and Diriyah?",
        answer: "Yes, private transfers to Diriyah and At-Turaif are available as a fixed-price ride from anywhere in Riyadh, including waiting time if you'd like a round trip.",
      },
      {
        question: "Can I get a taxi from Riyadh to Dammam or the Eastern Province?",
        answer: "Yes, intercity private transfers from Riyadh to Dammam, Khobar, and other Eastern Province cities are available with a fixed price agreed before you travel.",
      },
      {
        question: "Are your Riyadh drivers familiar with the Diplomatic Quarter's access rules?",
        answer: "Yes, our drivers regularly serve the Diplomatic Quarter and are used to its entry procedures; just confirm your exact building or gate when booking so the driver can plan accordingly.",
      },
    ],
    hubFaqs: [
      {
        question: "How long does the transfer from King Khalid Airport to my Riyadh hotel take?",
        answer: "Travel time depends on your hotel's district — expect roughly 30-45 minutes to central areas like Olaya or KAFD, longer during peak traffic hours.",
      },
      {
        question: "Do you serve hotels in Riyadh's Diplomatic Quarter and KAFD?",
        answer: "Yes, hotels across the Diplomatic Quarter, KAFD, Olaya, and greater Riyadh are all covered — choose your hotel from the list below or send us the address directly.",
      },
      {
        question: "Can I book a return transfer from my hotel back to King Khalid Airport?",
        answer: "Yes, every hotel route listed has a matching return leg back to the airport — open the route page and follow the reverse-transfer link, or just tell us your departure flight details.",
      },
      {
        question: "Is airport pickup available for early morning or late night Riyadh flights?",
        answer: "Yes, pickups and drop-offs run 24/7 at King Khalid International Airport regardless of your flight's arrival or departure time.",
      },
      {
        question: "What if my hotel isn't listed in the Riyadh transfer list?",
        answer: "Send us your hotel's name and address on WhatsApp or through the quote form and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
      {
        question: "Do you provide larger vehicles for groups arriving at Riyadh Airport?",
        answer: "Yes, family vans and larger vehicles are available for groups with extra luggage — mention your group size when requesting a quote so we match the right vehicle.",
      },
    ],
  },

  jeddah: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Jeddah's business activity concentrates along the Corniche and around the King Abdulaziz International Airport business district, while Al Balad and the Red Sea waterfront draw most leisure and pilgrim sightseeing. Umrah season and Hajj bring the heaviest travel demand, especially around the Hajj Terminal, so early booking matters most during those periods. Outside peak pilgrimage dates, transfers to Makkah and along the Corniche run smoothly with normal lead times. For anyone combining Jeddah with an Umrah trip, it's worth booking the Jeddah-to-Makkah leg and hotel transfer together so both are confirmed before you land.",
    introParagraphs: [
      "Jeddah is the busiest entry point for Umrah and Hajj pilgrims in the Kingdom, and most private-transfer demand here follows that pattern: an arrival at King Abdulaziz International Airport followed by a direct drive to Makkah, a Corniche hotel, or onward to Madinah. Because Jeddah sits closer to Makkah than any other major airport gateway, it's the natural starting point for the vast majority of Umrah journeys.",
      "Outside pilgrimage season, Jeddah also functions as a Red Sea business and leisure hub in its own right, with steady demand for Corniche hotel transfers and intercity trips to Taif, Yanbu, and Riyadh. Booking the airport leg and any onward journey together, before you land, is the most reliable way to have both confirmed on arrival rather than arranging each separately.",
    ],
    sections: [
      {
        heading: "Jeddah Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "King Abdulaziz International Airport (JED) is the Kingdom's busiest pilgrim gateway, with a dedicated Hajj Terminal used during peak Hajj and Umrah seasons alongside the main terminal. Your driver tracks your flight and meets you in the arrivals hall with a name board, then drives directly to your hotel or onward to Makkah or Madinah.",
            "Because so many arrivals continue straight to the holy cities, we position drivers to move quickly from the terminal to the highway. See our <a href='/airport-transfer/jeddah-airport'>Jeddah Airport transfer page</a> for the full arrival process and vehicle options.",
          ],
        },
      },
      {
        heading: "Jeddah to Makkah and Madinah Transfers",
        block: {
          kind: "cards",
          intro: "The two most-booked journeys out of Jeddah, both available as fixed-price private transfers.",
          columns: 2,
          cards: [
            { title: "Jeddah to Makkah", body: "Roughly 90 km, typically a 60-90 minute drive to hotels near the Haram.", href: "/routes/jeddah-to-makkah", linkLabel: "Jeddah to Makkah route" },
            { title: "Jeddah to Madinah", body: "A longer intercity transfer, roughly 420 km, with rest stops available on request.", href: "/routes/jeddah-to-madinah", linkLabel: "Jeddah to Madinah route" },
          ],
        },
      },
      {
        heading: "Transportation for Umrah and Hajj Travellers",
        block: {
          kind: "prose",
          paragraphs: [
            "Many pilgrims arrive already in ihram or intending to enter it during the journey, so drivers allow time for prayer and comfort stops and can plan a stop at a miqat point such as Qarn al-Manazil or Yalamlam if you haven't entered ihram before landing — mention this when you book.",
            "Pilgrim groups often travel with Zamzam water and multiple suitcases, so an SUV, van, or minibus is worth requesting for extra space. Demand rises sharply during Ramadan and peak Umrah months, so booking earlier than usual is worthwhile during those periods, since vehicle availability tightens as flight banks land in quick succession.",
            "Elderly relatives travelling as part of a family group are common on this route, and a driver who allows unhurried time at immigration and baggage claim, without a meter running, tends to matter more here than on an ordinary city transfer.",
          ],
        },
      },
      {
        heading: "Jeddah Corniche and Hotel Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "We cover the full Corniche stretch, Al-Balad, the King Fahd Fountain area, and nearby hotel districts for both sightseeing and point-to-point transfers. For a specific hotel, browse our <a href='/cities/jeddah'>Jeddah hotel transfer directory</a>, or send us the address directly and we'll arrange a private transfer to the door.",
            "Guests staying near the airport business district for meetings can combine a hotel transfer with a full-day booking, keeping the same driver and vehicle available between appointments rather than arranging separate rides.",
          ],
        },
      },
      {
        heading: "Business Travel in Jeddah",
        block: {
          kind: "prose",
          paragraphs: [
            "Business activity concentrates along the Corniche and around the airport business district. For a full business day, send your schedule of meetings on WhatsApp and we'll quote a fixed day-rate rather than booking each trip separately.",
          ],
        },
      },
      {
        heading: "Pickup Areas in Jeddah",
        block: {
          kind: "bullets",
          intro: "Common pickup and drop-off points our drivers know well:",
          items: ["King Abdulaziz International Airport", "Hajj Terminal", "Jeddah Corniche", "Al-Balad historic district", "King Fahd Fountain"],
        },
      },
      {
        heading: "Regional Connections from Jeddah",
        block: {
          kind: "prose",
          paragraphs: [
            "Jeddah is a common starting point for private transfers beyond the holy cities too — the scenic mountain route to Taif, coastal trips to Yanbu, and cross-country transfers to Riyadh, Dammam, and AlUla are all available as fixed-price journeys agreed before you travel. Many travellers combine a Jeddah stay with one of these onward legs rather than flying separately to each destination.",
          ],
        },
      },
      {
        heading: "How to Book a Jeddah Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your pickup location, destination, date, time, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver assigned to your flight or pickup time, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How long is the drive from Jeddah Airport to Makkah?",
        answer: "The drive from King Abdulaziz International Airport to central Makkah typically takes around 1-1.5 hours depending on traffic and your exact hotel location.",
      },
      {
        question: "Do you offer transfers from the Hajj Terminal specifically?",
        answer: "Yes, we handle pickups from the Hajj Terminal as well as the main North Terminal (T1), so tell us which terminal your flight uses when you book.",
      },
      {
        question: "Can I stop at a miqat on the way from Jeddah to Makkah?",
        answer: "Yes, many pilgrims request a stop at a miqat point such as Qarn al-Manazil or Yalamlam en route — just mention this when booking so your driver plans the stop into the journey.",
      },
      {
        question: "Is Jeddah to Madinah a long drive?",
        answer: "Jeddah to Madinah is a longer intercity trip; we provide a fixed-price private transfer for the full route, with rest stops available on request.",
      },
      {
        question: "What areas of Jeddah does your Corniche transfer service cover?",
        answer: "We cover the full Corniche stretch along with Al-Balad, the King Fahd Fountain area, and nearby hotel districts for both sightseeing and point-to-point transfers.",
      },
      {
        question: "Do prices change during Umrah or Hajj season in Jeddah?",
        answer: "We quote a fixed price for your specific trip before you travel; during peak Umrah and Hajj periods we recommend booking earlier since demand for vehicles rises sharply.",
      },
      {
        question: "Can I book a Jeddah taxi for a family with elderly pilgrims?",
        answer: "Yes, we offer comfortable vehicles suited to elderly or less mobile travellers — mention any mobility needs when requesting your quote so we assign an appropriate car.",
      },
      {
        question: "Is there a private transfer option from Jeddah to Taif?",
        answer: "Yes, the Jeddah to Taif mountain route is available as a private transfer, popular with travellers seeking the cooler highland climate above Makkah.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Jeddah hotels from King Abdulaziz International Airport?",
        answer: "Travel time varies by hotel location — Corniche and central Jeddah hotels are typically 20-40 minutes from the airport depending on traffic and terminal.",
      },
      {
        question: "Do you cover hotels near the Jeddah Corniche and Al-Balad?",
        answer: "Yes, hotels along the Corniche, near Al-Balad, and across central Jeddah are all served — select your hotel below or send us the address.",
      },
      {
        question: "Can I book a Jeddah Airport transfer that continues on to Makkah?",
        answer: "Yes, many guests combine a Jeddah hotel stay with an onward Makkah transfer — mention both legs when booking and we'll quote each as a fixed price.",
      },
      {
        question: "Is a return transfer to Jeddah Airport included for hotel guests?",
        answer: "Every hotel route has a matching return leg back to the airport; open the route page for the reverse-direction transfer or tell us your departure flight when ready.",
      },
      {
        question: "Which terminal will my Jeddah Airport transfer driver meet me at?",
        answer: "Your driver waits at the terminal matching your flight, whether that's the Hajj Terminal or the main North Terminal (T1) — confirm your flight number so we plan accordingly.",
      },
      {
        question: "Do you provide transfers for large pilgrim groups from Jeddah Airport?",
        answer: "Yes, group and family vans are available for larger parties arriving with more luggage — let us know your group size when requesting a quote.",
      },
    ],
  },

  makkah: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Most of Makkah's traveller activity clusters around the Haram and the Abraj Al-Bait (Clock Tower) hotel district, with Ziyarat sites like Jabal al-Noor, Mina, and Arafat drawing half-day and full-day tour bookings. Demand is highly seasonal — Ramadan, Umrah season, and Hajj bring the busiest periods, when booking a day or more ahead is strongly recommended. Outside those peaks, transfers within Makkah and onward to Madinah run on normal lead times. Vehicles serving the Haram area need to respect pedestrian zones and designated pickup points near the mosque, so confirm your exact meeting point with your driver in advance.",
    introParagraphs: [
      "Makkah is the destination of every Umrah and Hajj journey, so private transportation here almost always connects to a pilgrimage: an arrival from Jeddah Airport, a hotel near the Haram, a Ziyarat tour of the historic Islamic sites, or an onward journey to Madinah. Very little of the demand in Makkah is ordinary city-to-city travel — nearly every booking traces back to a pilgrim's itinerary.",
      "Because Makkah has no airport of its own, nearly every visit begins with a transfer from King Abdulaziz International Airport in Jeddah, roughly 90 km away. Calm, reliable transport matters here more than in most cities — pilgrims are often travelling with family, elders, and extra luggage, and vehicles need to work around the pedestrian zones near the Haram rather than promising a specific drop-off gate.",
    ],
    sections: [
      {
        heading: "Airport Arrivals via Jeddah",
        block: {
          kind: "prose",
          paragraphs: [
            "Most Makkah arrivals land at King Abdulaziz International Airport (JED), roughly 90 km away — typically a 60-90 minute drive to hotels near the Haram, depending on traffic and your exact hotel. Your driver tracks your flight and meets you in the arrivals hall, then drives directly to your Makkah hotel at a fixed price agreed before you travel. See our <a href='/airport-transfer/jeddah-airport'>Jeddah Airport transfer page</a> for the full arrival process.",
            "A smaller number of arrivals connect through Taif Regional Airport, particularly pilgrims combining Umrah with a highland stay — the drive down the Al Hada mountain road takes roughly 90 minutes.",
          ],
        },
      },
      {
        heading: "Makkah to Madinah Transfers",
        block: {
          kind: "cards",
          intro: "The main onward journey most pilgrims arrange from Makkah.",
          columns: 2,
          cards: [
            { title: "Makkah to Madinah", body: "A private intercity transfer to the Prophet's Mosque, with rest and prayer stops available on request.", href: "/routes/makkah-to-madinah", linkLabel: "Makkah to Madinah route" },
            { title: "Makkah to Taif", body: "A private drive up the Al Hada mountain road to the cooler highland city above Makkah.", href: "/routes/makkah-to-taif", linkLabel: "Makkah to Taif route" },
          ],
        },
      },
      {
        heading: "Hotels Near the Haram",
        block: {
          kind: "prose",
          paragraphs: [
            "Most hotel demand sits around the Haram and the Abraj Al-Bait (Clock Tower) district. Since vehicles can't enter the pedestrian zone directly around the mosque, your driver will confirm a nearby designated pickup point with you in advance rather than promising a specific gate.",
            "For guests staying further from the Haram, the same fixed-price model applies — share your hotel name and address and we'll confirm the transfer before you travel, whether it's an initial airport pickup or a later change of hotel.",
          ],
        },
      },
      {
        heading: "Ziyarat Transportation",
        block: {
          kind: "prose",
          paragraphs: [
            "Private transport to Ziyarat sites such as Jabal al-Noor (Cave of Hira), Mina, Arafat, and Jabal Thawr is arranged as a half-day or full-day trip — tell us which sites you want to include when requesting a quote. See our <a href='/ziyarat-taxi-service'>Ziyarat transfer service</a> for the full range of Makkah and Madinah destinations.",
            "Most Ziyarat bookings start and end at your hotel, with the driver waiting between stops rather than dropping you and returning separately, which keeps a multi-site itinerary simple for a family or small group.",
          ],
        },
      },
      {
        heading: "Families and Groups",
        block: {
          kind: "prose",
          paragraphs: [
            "Family and group vans are available for pilgrims travelling with luggage or Zamzam water, sized to fit passengers and bags comfortably. Demand rises significantly during Ramadan, Umrah season, and Hajj, so booking your Makkah transfers as early as possible during those periods is worthwhile.",
            "Elderly or less mobile pilgrims are common on Makkah routes, and mentioning any mobility needs when booking lets us assign a suitable vehicle and allow extra time at pickup rather than rushing between the hotel and the Haram.",
          ],
        },
      },
      {
        heading: "What Information Do I Need to Provide?",
        block: {
          kind: "bullets",
          intro: "Share as much of this as you can when you book:",
          items: ["Hotel name or pickup location", "Flight number, if arriving by air", "Travel date and time", "Number of passengers", "Luggage amount", "Any mobility or elderly-traveller needs"],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Makkah",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Masjid al-Haram", "Abraj Al-Bait (Clock Tower)", "Jabal al-Noor (Cave of Hira)", "Mina and Arafat", "Jabal Thawr"],
        },
      },
      {
        heading: "How to Book a Makkah Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, arrival date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Can I book transfers between the Haram and my Makkah hotel?",
        answer: "Yes, short transfers between the Haram area and hotels around the Clock Tower district are available, with a fixed price agreed before pickup.",
      },
      {
        question: "How long does a Ziyarat tour of Mina and Arafat usually take?",
        answer: "A typical Ziyarat tour covering Mina, Arafat, and Jabal al-Noor runs as a half-day private trip; tell us which sites you want to include when requesting a quote.",
      },
      {
        question: "Is Jabal Thawr included in Ziyarat tour packages?",
        answer: "Jabal Thawr can be added to your Ziyarat route on request — mention it when booking so your driver includes it in the itinerary.",
      },
      {
        question: "How far is Makkah from Jeddah Airport?",
        answer: "Makkah is roughly 1-1.5 hours from King Abdulaziz International Airport in Jeddah by private transfer, depending on traffic and your exact hotel.",
      },
      {
        question: "Can I book a private transfer from Makkah to Madinah?",
        answer: "Yes, private Makkah to Madinah transfers are available as a fixed-price intercity ride, with rest stops available on request for the longer journey.",
      },
      {
        question: "Do you provide family vans for pilgrims travelling with luggage in Makkah?",
        answer: "Yes, family and group vans are available for pilgrims carrying extra luggage, sized to fit both passengers and bags comfortably.",
      },
      {
        question: "Is booking a Makkah taxi harder during Ramadan or Hajj?",
        answer: "Demand rises significantly during Ramadan, Umrah season, and Hajj, so we recommend booking your Makkah transfers as early as possible during these periods.",
      },
      {
        question: "Where does my driver pick me up near the Haram?",
        answer: "Since vehicles can't enter the pedestrian zone directly around the Haram, your driver will confirm a nearby designated pickup point with you in advance.",
      },
    ],
    hubFaqs: [
      {
        question: "How long is the transfer from Jeddah Airport to my Makkah hotel?",
        answer: "The drive from King Abdulaziz International Airport to hotels around the Haram and Clock Tower district typically takes around 1-1.5 hours, depending on traffic.",
      },
      {
        question: "Do you cover hotels near the Clock Tower (Abraj Al-Bait)?",
        answer: "Yes, hotels around the Clock Tower district and across Makkah are all covered — choose your hotel from the list below or send us the address.",
      },
      {
        question: "Can I book a return transfer from my Makkah hotel to Jeddah Airport?",
        answer: "Yes, every hotel route listed has a matching return leg back to Jeddah Airport — open the route page and follow the reverse-transfer link.",
      },
      {
        question: "Is airport-to-hotel pickup available 24/7 for Makkah arrivals?",
        answer: "Yes, pickups and drop-offs run 24/7 regardless of your flight's arrival or departure time, including flights landing at the Hajj Terminal.",
      },
      {
        question: "What if my Makkah hotel isn't listed in the transfer list?",
        answer: "Send us your hotel's name and address on WhatsApp or through the quote form and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
      {
        question: "Do you provide family vans for pilgrims arriving with luggage in Makkah?",
        answer: "Yes, family and group vans are available for pilgrims with extra luggage — mention your group size when requesting a quote so we match the right vehicle.",
      },
    ],
  },

  madinah: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Madinah's travel patterns follow prayer times and pilgrim schedules more than typical business hours, and most hotel demand sits within walking distance of the Prophet's Mosque. Ziyarat requests to Quba, Uhud, and Masjid al-Qiblatain are common half-day add-ons to an airport or hotel transfer. The city sees seasonal peaks around Ramadan and Hajj travel windows either side of Makkah visits, when booking ahead is advisable. Drivers serving central Madinah are used to working around prayer-time road closures near the Haram, so allow some flexibility in pickup timing close to prayer times.",
    introParagraphs: [
      "Madinah, home to the Prophet's Mosque, welcomes pilgrims year-round through Prince Mohammad bin Abdulaziz International Airport — one of the shortest airport-to-Haram distances of any holy city gateway in the Kingdom. Most private-transfer demand here follows pilgrim schedules rather than typical business hours, and most visits are one stage of a wider Umrah or Hajj itinerary rather than a standalone trip.",
      "Beyond the airport leg, travellers commonly arrange Ziyarat trips to Quba, Uhud, and the historic mosques, an onward transfer to Makkah, or a longer drive to AlUla to extend a pilgrimage with heritage sightseeing. Drivers serving central Madinah plan routes around prayer-time road closures near the Haram, so allow some flexibility in pickup timing close to prayer times.",
    ],
    sections: [
      {
        heading: "Madinah Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Prince Mohammad bin Abdulaziz International Airport (MED) is about 15 km from the Prophet's Mosque, usually a 20-30 minute drive to hotels near the Haram. Your driver tracks your flight and meets you in the arrivals hall with a name board, then drives directly to your hotel. See our <a href='/airport-transfer/madinah-airport'>Madinah Airport transfer page</a> for the full arrival process and vehicle options.",
            "Because the airport-to-Haram distance is short, many pilgrims arrive, check in, and reach the mosque within an hour of landing — one of the quickest turnarounds of any holy-city gateway.",
          ],
        },
      },
      {
        heading: "Madinah to Makkah and AlUla Transfers",
        block: {
          kind: "cards",
          intro: "The two most-requested onward journeys from Madinah.",
          columns: 2,
          cards: [
            { title: "Madinah to Makkah", body: "A private intercity transfer, roughly 420 km, with rest and prayer stops available on request.", href: "/routes/madinah-to-makkah", linkLabel: "Madinah to Makkah route" },
            { title: "Madinah to AlUla", body: "A private transfer extending a pilgrimage visit with AlUla's heritage sites.", href: "/routes/madinah-to-alula", linkLabel: "Madinah to AlUla route" },
          ],
        },
      },
      {
        heading: "Ziyarat Transportation",
        block: {
          kind: "prose",
          paragraphs: [
            "A combined Ziyarat tour covering Quba Mosque, Mount Uhud, and Masjid al-Qiblatain can be arranged as a single half-day private trip, commonly added on to an airport or hotel transfer. See our <a href='/ziyarat-taxi-service'>Ziyarat transfer service</a> for the full range of Madinah and Makkah destinations.",
            "The driver waits between stops rather than dropping you and returning separately, which keeps a multi-site Ziyarat itinerary simple for a family or small group travelling together.",
          ],
        },
      },
      {
        heading: "Hotels Near the Prophet's Mosque",
        block: {
          kind: "prose",
          paragraphs: [
            "Most hotel demand sits within walking distance of the Haram. Browse our <a href='/cities/madinah'>Madinah hotel transfer directory</a> for a specific hotel, or send us the address directly and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
            "Guests changing hotels partway through a longer Madinah stay can book the move as a simple point-to-point transfer, with luggage assistance included.",
          ],
        },
      },
      {
        heading: "Families and Elderly Travellers",
        block: {
          kind: "prose",
          paragraphs: [
            "Vehicles suited to elderly or less mobile travellers are available for both airport transfers and Ziyarat tours — mention any mobility needs when booking. Family and group vans are available for pilgrims with extra luggage.",
          ],
        },
      },
      {
        heading: "Regional Connections from Madinah",
        block: {
          kind: "prose",
          paragraphs: [
            "Beyond Makkah and AlUla, private transfers connect Madinah with Yanbu on the Red Sea coast, and with Tabuk and Hail to the north — useful for travellers continuing a wider northwest itinerary after their pilgrimage visit.",
          ],
        },
      },
      {
        heading: "What Information Do I Need to Provide?",
        block: {
          kind: "bullets",
          intro: "Share as much of this as you can when you book:",
          items: ["Hotel name or pickup location", "Flight number, if arriving by air", "Travel date and time", "Number of passengers", "Luggage amount", "Any mobility or elderly-traveller needs"],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Madinah",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Al-Masjid an-Nabawi", "Quba Mosque", "Mount Uhud", "Masjid al-Qiblatain", "Prince Mohammad bin Abdulaziz Airport"],
        },
      },
      {
        heading: "How to Book a Madinah Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, arrival date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Madinah Airport from the Prophet's Mosque area?",
        answer: "Prince Mohammad bin Abdulaziz International Airport is roughly 20-30 minutes from central Madinah hotels near the Prophet's Mosque, depending on traffic.",
      },
      {
        question: "Can I visit Quba Mosque and Uhud on the same Ziyarat trip?",
        answer: "Yes, a combined Ziyarat tour covering Quba Mosque, Mount Uhud, and Masjid al-Qiblatain can be arranged as a single half-day private trip.",
      },
      {
        question: "Is transport affected around prayer times in Madinah?",
        answer: "Roads near the Haram can see temporary restrictions around prayer times; your driver will plan pickup and drop-off timing accordingly, so build in some flexibility close to prayer times.",
      },
      {
        question: "Can I book a private transfer from Madinah to AlUla?",
        answer: "Yes, our <a href='/routes/madinah-to-alula'>private Madinah to AlUla transfer</a> is available as a fixed-price intercity ride, popular with travellers combining a pilgrimage visit with AlUla's heritage sites.",
      },
      {
        question: "How long is the drive from Madinah to Makkah?",
        answer: "The Madinah to Makkah drive is a longer intercity journey; we offer it as a fixed-price private transfer with rest stops available on request.",
      },
      {
        question: "Do you provide comfortable vehicles for elderly pilgrims in Madinah?",
        answer: "Yes, we offer vehicles suited to elderly or less mobile travellers for both airport transfers and Ziyarat tours — mention any needs when booking.",
      },
      {
        question: "Can I book a Madinah to Yanbu transfer for the Red Sea coast?",
        answer: "Yes, private transfers from Madinah to Yanbu are available for travellers heading to the Red Sea coast after their Madinah visit.",
      },
      {
        question: "Is airport pickup available for late-night flights into Madinah?",
        answer: "Yes, meet-and-greet pickup at Madinah Airport runs 24/7 regardless of your flight's arrival time.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Madinah hotels from Prince Mohammad bin Abdulaziz Airport?",
        answer: "Most central Madinah hotels near the Prophet's Mosque are roughly 20-30 minutes from the airport, depending on traffic and exact location.",
      },
      {
        question: "Do you cover hotels close to the Prophet's Mosque?",
        answer: "Yes, hotels within walking distance of the Haram as well as further out in Madinah are all covered — select your hotel below or send us the address.",
      },
      {
        question: "Can I add a Ziyarat stop to my Madinah airport transfer?",
        answer: "Yes, you can request a Ziyarat stop such as Quba Mosque on the way to or from your hotel — mention it when booking so the driver plans the route.",
      },
      {
        question: "Is a return transfer to Madinah Airport included for hotel guests?",
        answer: "Every hotel route has a matching return leg back to the airport; open the route page for the reverse transfer or share your departure flight details.",
      },
      {
        question: "Do you provide family vans for Madinah airport-to-hotel transfers?",
        answer: "Yes, family and group vans are available for larger parties with extra luggage — mention your group size when requesting a quote.",
      },
      {
        question: "What if my hotel near the Haram isn't listed?",
        answer: "Send us your hotel's name and address and we'll arrange a private transfer to the door, even if it isn't in our standard Madinah list yet.",
      },
    ],
  },

  dammam: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Dammam's business travel is concentrated around Dhahran's energy-sector offices and the Khobar Corniche waterfront, with the King Fahd Causeway a constant source of cross-border demand toward Bahrain. Weekend traffic toward the Causeway and Half Moon Bay tends to build up on Thursday and Friday afternoons, so allowing extra time then is sensible. The Dammam-Khobar-Dhahran metro area is well connected by private transfer, making it practical to combine a business meeting in Dhahran with a Corniche hotel stay in the same trip. For Bahrain crossings, confirm your travel documents are in order before booking, since border processing time varies and isn't something we can guarantee in advance.",
    introParagraphs: [
      "Dammam anchors the Eastern Province and its energy-sector economy, so private-transfer demand here splits between business travel around Dhahran's offices and cross-border trips to Bahrain via the King Fahd Causeway — both needing a reliable, pre-booked car rather than a ride hailed on the spot. As the largest airport in the world by land area, King Fahd International Airport also handles arrivals for the whole Eastern Province, not just Dammam itself.",
      "The city sits at the centre of one connected metro area with Khobar and Dhahran, so a single private transfer plan can combine a King Fahd Airport pickup, a Dhahran meeting, and a Khobar Corniche hotel stay. Longer intercity transfers toward Riyadh and Jubail are also common from Dammam.",
    ],
    sections: [
      {
        heading: "Dammam Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "King Fahd International Airport (DMM) serves the whole Dammam-Khobar-Dhahran metro area through a single main terminal. Your driver tracks your flight and meets you in the arrivals hall with a name board, then drives directly to your hotel or office. See our <a href='/airport-transfer/dammam-airport'>Dammam Airport transfer page</a> for the full arrival process and vehicle options.",
          ],
        },
      },
      {
        heading: "Bahrain Causeway Crossings",
        block: {
          kind: "prose",
          paragraphs: [
            "The drive from Dammam to the King Fahd Causeway border point typically takes around 30-45 minutes, though border processing time itself varies and isn't something we can guarantee. Thursday and Friday afternoons see heavier Causeway-bound traffic as weekend travellers head to Bahrain, so allow extra time then. See our <a href='/border-transfers/bahrain-causeway'>Bahrain Causeway transfer</a> for the full crossing details.",
            "We handle the driving and the route to the border, not the paperwork — confirm your travel documents are in order before booking, since document requirements can change and are set by Saudi and Bahraini authorities rather than us.",
          ],
        },
      },
      {
        heading: "Business Travel Across the Eastern Province",
        block: {
          kind: "prose",
          paragraphs: [
            "We handle corporate and business travel across the whole Dammam-Khobar-Dhahran metro area, including multi-stop days on request — combining a Dhahran meeting with a Khobar Corniche hotel or a Dammam site visit in one booking.",
          ],
        },
      },
      {
        heading: "Private Transfers from Dammam to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Dammam.",
          columns: 3,
          cards: [
            { title: "Dammam to Riyadh", body: "A private intercity transfer to the capital.", href: "/routes/dammam-to-riyadh", linkLabel: "Dammam to Riyadh route" },
            { title: "Dammam to Jubail", body: "A private transfer to the industrial city, popular with energy-sector travellers.", href: "/routes/dammam-to-jubail", linkLabel: "Dammam to Jubail route" },
            { title: "Dammam to Jeddah", body: "A cross-country transfer connecting the Eastern Province with the Red Sea coast.", href: "/routes/dammam-to-jeddah", linkLabel: "Dammam to Jeddah route" },
          ],
        },
      },
      {
        heading: "Dammam Hotel Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Fixed-price private transfers are available between King Fahd International Airport and hotels across Dammam, Khobar, and Dhahran. Browse our <a href='/cities/dammam'>Dammam hotel transfer directory</a> for a specific hotel, or send us the address directly.",
          ],
        },
      },
      {
        heading: "What Information Do I Need to Provide?",
        block: {
          kind: "bullets",
          intro: "Share as much of this as you can when you book:",
          items: ["Pickup location and destination", "Flight number, if arriving by air", "Travel date and time", "Number of passengers", "Luggage amount", "Vehicle preference, if you have one"],
        },
      },
      {
        heading: "How to Book a Dammam Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, pickup and destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
      {
        heading: "Pickup Areas in Dammam",
        block: {
          kind: "bullets",
          intro: "Common pickup and drop-off points our drivers know well:",
          items: ["King Fahd International Airport", "King Fahd Causeway", "Dammam Corniche", "Half Moon Bay", "Dhahran"],
        },
      },
    ],
    faqs: [
      {
        question: "How long does it take to reach the Bahrain Causeway from Dammam?",
        answer: "The drive from Dammam to the King Fahd Causeway border point typically takes around 30-45 minutes, though border processing time itself varies and isn't something we can guarantee.",
      },
      {
        question: "Can I book a Dammam taxi for business travel across Dhahran and Khobar?",
        answer: "Yes, we handle corporate and business travel across the whole Dammam-Khobar-Dhahran metro area, including multi-stop days on request.",
      },
      {
        question: "How far is King Fahd International Airport from central Dammam?",
        answer: "King Fahd International Airport is a fair distance from central Dammam; we track your flight and quote transfer time based on your exact hotel or destination.",
      },
      {
        question: "Do you offer intercity transfers from Dammam to Riyadh?",
        answer: "Yes, private intercity transfers from Dammam to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is weekend traffic heavier toward the Bahrain Causeway?",
        answer: "Thursday and Friday afternoons tend to see heavier traffic toward the Causeway as weekend travellers head to Bahrain, so allow extra time if travelling then.",
      },
      {
        question: "Can I book a transfer from Dammam to Jubail for work?",
        answer: "Yes, transfers between Dammam and Jubail Industrial City are available, popular with energy and petrochemical-sector business travellers.",
      },
      {
        question: "Do you serve hotels along the Dammam Corniche?",
        answer: "Yes, hotels along the Dammam Corniche and Half Moon Bay area are covered for both airport transfers and point-to-point rides.",
      },
      {
        question: "What documents do I need for a Dammam to Bahrain crossing?",
        answer: "Border document requirements can change, so we recommend checking official Saudi and Bahraini government sources before travelling; we handle the driving, not the paperwork.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Dammam hotels from King Fahd International Airport?",
        answer: "Travel time depends on your hotel's location across the Dammam-Khobar-Dhahran metro area — we track your flight and quote based on your exact destination.",
      },
      {
        question: "Do you cover hotels in Khobar and Dhahran as well as Dammam?",
        answer: "Yes, since King Fahd International Airport serves the whole metro area, we cover hotels across Dammam, Khobar, and Dhahran from this hub.",
      },
      {
        question: "Can I book a return transfer to King Fahd Airport from my hotel?",
        answer: "Yes, every hotel route has a matching return leg back to the airport — open the route page for the reverse transfer or share your departure flight.",
      },
      {
        question: "Is airport pickup available for early or late flights into Dammam?",
        answer: "Yes, pickups run 24/7 at King Fahd International Airport regardless of arrival time.",
      },
      {
        question: "Do you provide larger vehicles for business groups arriving in Dammam?",
        answer: "Yes, we offer larger vehicles for business groups or families with extra luggage — mention your group size when requesting a quote.",
      },
      {
        question: "What if my Khobar or Dhahran hotel isn't listed?",
        answer: "Send us your hotel's name and address and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
    ],
  },

  khobar: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Khobar's waterfront hotels and malls along the Corniche draw both business and leisure travellers, and the city sits close enough to the King Fahd Causeway that a Bahrain day trip is a common add-on to a Khobar stay. Weekend afternoons see heavier Causeway-bound traffic as travellers cross for the weekend, so factor in extra time on Thursdays and Fridays. Khobar, Dammam, and Dhahran form one connected metro area, so combining a Khobar hotel with a Dhahran business meeting or a Dammam Corniche visit in the same private transfer plan is straightforward.",
    introParagraphs: [
      "Al Khobar is the lively coastal twin of Dammam, and most private-transfer demand here comes from two directions: waterfront hotel guests along the Corniche, and travellers using Khobar as the closest Saudi base for a Bahrain crossing via the King Fahd Causeway.",
      "Khobar, Dammam, and Dhahran effectively function as one metro area, so a single transfer plan can combine a King Fahd Airport pickup, a Dhahran meeting, and a Khobar hotel stay without booking separate rides for each leg.",
    ],
    sections: [
      {
        heading: "Khobar to Bahrain Causeway Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Khobar is one of the closest Saudi cities to the King Fahd Causeway, typically a short drive to the border point — actual crossing time varies with border processing, which we can't guarantee in advance. Thursday and Friday afternoons see the heaviest Causeway-bound traffic as weekend travellers cross, so allow extra time then. See our <a href='/border-transfers/bahrain-causeway'>Bahrain Causeway transfer</a> for the full crossing details.",
          ],
        },
      },
      {
        heading: "Airport Transfers via Dammam",
        block: {
          kind: "prose",
          paragraphs: [
            "Khobar is served by King Fahd International Airport (DMM). Your driver tracks your flight and meets you in the arrivals hall, then drives directly to your Khobar hotel or destination with flight tracking included. See our <a href='/airport-transfer/dammam-airport'>Dammam Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Corniche and Waterfront Hotel Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Waterfront hotels along the Corniche and areas near Al Rashid Mall are covered for both airport and point-to-point transfers, along with short trips to Half Moon Bay for a beach day or family outing.",
          ],
        },
      },
      {
        heading: "Private Transfers to Riyadh and the Eastern Province",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Khobar to Riyadh are available with a fixed price agreed before you travel, along with short trips within the metro area to Dammam, Dhahran, and Ithra (King Abdulaziz Center for World Culture).",
          ],
        },
      },
      {
        heading: "Business and Family Transfers in Khobar",
        block: {
          kind: "prose",
          paragraphs: [
            "Corniche hotels see a mix of business travellers attending meetings in Dhahran and families visiting for a waterfront weekend, sometimes combined with a short Bahrain crossing. Larger vehicles are available for families or groups with extra luggage — mention your numbers when requesting a quote.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Khobar",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Khobar Corniche", "King Fahd Causeway", "Al Rashid Mall", "Half Moon Bay", "Ithra (Dhahran)"],
        },
      },
      {
        heading: "How to Book a Khobar Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your pickup location, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Khobar from the Bahrain Causeway?",
        answer: "Khobar is one of the closest Saudi cities to the King Fahd Causeway, typically a short drive; actual border processing time varies and isn't something we can guarantee.",
      },
      {
        question: "Can I book a Khobar taxi from King Fahd International Airport?",
        answer: "Yes, we provide private transfers from King Fahd International Airport to hotels and destinations across Khobar with flight tracking included.",
      },
      {
        question: "Do you cover hotels along the Khobar Corniche and Al Rashid Mall?",
        answer: "Yes, waterfront hotels along the Corniche and areas near Al Rashid Mall are all covered for both airport and point-to-point transfers.",
      },
      {
        question: "Is weekend traffic worse toward Bahrain from Khobar?",
        answer: "Thursday and Friday afternoons typically see heavier traffic as weekend travellers cross to Bahrain, so allow extra time if travelling during those windows.",
      },
      {
        question: "Can I book a transfer from Khobar to Ithra in Dhahran?",
        answer: "Yes, transfers to Ithra (King Abdulaziz Center for World Culture) in Dhahran are available as a short private ride from Khobar.",
      },
      {
        question: "Do you offer intercity transfers from Khobar to Riyadh?",
        answer: "Yes, private intercity transfers from Khobar to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Half Moon Bay accessible by private transfer from Khobar?",
        answer: "Yes, Half Moon Bay is a popular short trip from Khobar, suitable for a beach day or family outing.",
      },
      {
        question: "Can I book a family van for a Khobar to Dammam transfer?",
        answer: "Yes, family and group vans are available for transfers across the Dammam metro area, including Khobar to Dammam or Dhahran.",
      },
    ],
  },

  jubail: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Jubail's transfer demand is dominated by industrial and petrochemical-sector logistics — project-site pickups inside Jubail Industrial City and shift-schedule airport runs from Dammam are the norm rather than leisure travel. Because many riders work fixed shift patterns, on-time pickup matters more here than in most cities, so confirming your exact gate or site entrance in advance helps avoid delays. Fanateer Beach and the Jubail Corniche offer the main leisure options for workers based in the city on days off.",
    introParagraphs: [
      "Jubail is the largest industrial city in the region, and private-transfer demand here is dominated by logistics rather than leisure — project-site pickups inside Jubail Industrial City, shift-schedule airport runs, and intercity trips for engineers and contractors moving between assignments.",
      "Because many riders work fixed shift patterns, on-time pickup matters more here than in most cities, so confirming your exact gate or site entrance in advance helps the driver avoid delays at a large, multi-gate industrial site.",
    ],
    sections: [
      {
        heading: "Corporate and Project-Site Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "We handle project-site pickups inside Jubail Industrial City — share your exact gate or site entrance when booking so the driver can plan access. Corporate and project-site accounts are available for companies with regular staff transport needs; contact us on WhatsApp to discuss your requirements.",
            "We regularly handle early-morning and late-night pickups for shift workers — book with your exact time and location and we'll confirm the driver in advance.",
          ],
        },
      },
      {
        heading: "Airport Transfers via Dammam",
        block: {
          kind: "prose",
          paragraphs: [
            "Jubail is served by King Fahd International Airport (DMM), a fair distance to the south. We track your flight and quote transfer time to your exact site or hotel. See our <a href='/airport-transfer/dammam-airport'>Dammam Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Intercity Transfers from Jubail",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Jubail to Riyadh are available with a fixed price agreed before you travel, along with shorter trips to Khobar and Dammam for business or weekend visits within the Eastern Province.",
          ],
        },
      },
      {
        heading: "Leisure Time in Jubail",
        block: {
          kind: "prose",
          paragraphs: [
            "Fanateer Beach and the Jubail Corniche offer the main leisure options for workers based in the city on days off, both a short private transfer from most accommodation and industrial-city gates.",
          ],
        },
      },
      {
        heading: "Pickup Areas in Jubail",
        block: {
          kind: "bullets",
          intro: "Common pickup and drop-off points our drivers know well:",
          items: ["Jubail Industrial City", "Royal Commission area", "Fanateer Beach", "Jubail Corniche"],
        },
      },
      {
        heading: "How to Book a Jubail Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your pickup location or site entrance, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Do you provide transfers to specific sites inside Jubail Industrial City?",
        answer: "Yes, we handle project-site pickups inside Jubail Industrial City — share your exact gate or site entrance when booking so the driver can plan access.",
      },
      {
        question: "How far is Jubail from Dammam Airport?",
        answer: "Jubail is a fair distance north of King Fahd International Airport in Dammam; we track your flight and quote transfer time to your exact site or hotel.",
      },
      {
        question: "Can you accommodate shift-schedule pickups in Jubail?",
        answer: "Yes, we regularly handle early-morning and late-night pickups for shift workers — book with your exact time and location and we'll confirm the driver in advance.",
      },
      {
        question: "Do you offer corporate accounts for companies based in Jubail?",
        answer: "Yes, we work with corporate and project-site accounts for regular staff transport — contact us on WhatsApp to discuss your company's needs.",
      },
      {
        question: "Can I book a Jubail to Riyadh intercity transfer?",
        answer: "Yes, private intercity transfers from Jubail to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Fanateer Beach a common short trip from Jubail?",
        answer: "Yes, Fanateer Beach and the Jubail Corniche are popular short leisure trips for residents and visiting workers.",
      },
      {
        question: "Do you offer transfers between Jubail and Khobar?",
        answer: "Yes, transfers between Jubail and Khobar are available, commonly used for business trips or weekend visits within the Eastern Province.",
      },
      {
        question: "Can I book a taxi for a group of colleagues arriving in Jubail together?",
        answer: "Yes, larger vehicles are available for groups of colleagues travelling together — mention your group size when requesting a quote.",
      },
    ],
  },

  taif: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Taif's appeal is almost entirely seasonal and altitude-driven — its cooler mountain climate on the Al Hada road draws the heaviest visitor numbers during summer, when Saudi and Gulf travellers escape the coastal heat. The rose harvest season adds another short but distinct visitor spike tied to the local farms. The drive up from Makkah climbs steadily along a scenic mountain road, so travellers prone to motion sickness may want to request a short break partway up.",
    introParagraphs: [
      "Taif is the cool mountain retreat above Makkah, and most private-transfer demand follows that relationship directly: pilgrims and residents escaping the coastal heat via the scenic Al Hada road, and travellers arriving at Taif's own regional airport before heading down to Makkah or Jeddah.",
      "Demand is strongly seasonal — summer and the short rose-harvest window bring the heaviest visitor numbers, when booking a little ahead is worthwhile. Outside those peaks, transfers run on normal lead times.",
    ],
    sections: [
      {
        heading: "Taif Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Taif Regional Airport (TIF) is a short transfer from central Taif. Your driver tracks your flight and meets you in the arrivals hall with a name board, then drives directly to your hotel. See our <a href='/airport-transfer/taif-airport'>Taif Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "The Makkah to Taif Mountain Road",
        block: {
          kind: "prose",
          paragraphs: [
            "The Makkah to Taif route climbs the Al Hada mountain road, typically a 1.5-2 hour drive depending on traffic and conditions. The steady climb and curves mean travellers prone to motion sickness may want to mention it when booking so the driver can plan a short stop along the way.",
          ],
        },
      },
      {
        heading: "Private Transfers from Taif to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Taif.",
          columns: 3,
          cards: [
            { title: "Taif to Jeddah", body: "A private transfer down to the Red Sea coast and Jeddah Airport.", href: "/routes/taif-to-jeddah-airport", linkLabel: "Taif to Jeddah Airport route" },
            { title: "Taif to Madinah", body: "A private intercity transfer to the Prophet's Mosque.", href: "/routes/taif-to-madinah", linkLabel: "Taif to Madinah route" },
            { title: "Taif to Riyadh", body: "A private long-distance transfer to the capital.", href: "/routes/taif-to-riyadh", linkLabel: "Taif to Riyadh route" },
          ],
        },
      },
      {
        heading: "Families and Umrah Groups Combining Taif with Makkah",
        block: {
          kind: "prose",
          paragraphs: [
            "Many travellers land at Taif, spend a day or two in the cooler highlands, then continue down the Al Hada road to Makkah — mention this plan when booking so both legs are arranged together. Families and groups can request an SUV or van for extra space on the mountain road.",
          ],
        },
      },
      {
        heading: "Pickup Areas in Taif",
        block: {
          kind: "bullets",
          intro: "Common pickup and drop-off points our drivers know well:",
          items: ["Taif Regional Airport", "Al Hada Mountain", "Taif Cable Car", "Al Shafa", "Shubra Palace"],
        },
      },
      {
        heading: "How to Book a Taif Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How long does the drive from Makkah to Taif take?",
        answer: "The Makkah to Taif mountain route typically takes around 1.5-2 hours depending on traffic and conditions on the Al Hada road.",
      },
      {
        question: "Is Taif busiest during a particular season?",
        answer: "Yes, Taif sees its highest visitor numbers in summer when Saudi and Gulf travellers head to its cooler mountain climate, and briefly during the rose harvest season.",
      },
      {
        question: "Can I book a Taif cable car and rose-farm day trip?",
        answer: "Yes, we offer sightseeing rides combining the Taif Cable Car and nearby rose farms as a private day trip.",
      },
      {
        question: "Is the drive up to Taif difficult for those prone to motion sickness?",
        answer: "The mountain road involves a steady climb with curves, so if you're prone to motion sickness, mention it when booking and your driver can plan a short stop along the way.",
      },
      {
        question: "How far is Taif from its own regional airport?",
        answer: "Taif Regional Airport is a short transfer from central Taif; we provide meet-and-greet pickup with flight tracking included.",
      },
      {
        question: "Can I visit Al Shafa on a Taif sightseeing trip?",
        answer: "Yes, Al Shafa is a popular addition to a Taif sightseeing itinerary — mention it when booking your day trip.",
      },
      {
        question: "Do you offer transfers from Taif to Jeddah?",
        answer: "Yes, private intercity transfers from Taif to Jeddah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Taif a good stop between Makkah and Abha?",
        answer: "Yes, some travellers combine Taif with an onward trip toward Abha; ask us about a multi-city itinerary and we'll quote each leg.",
      },
    ],
  },

  abha: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Abha's tourism season peaks in summer, when its cooler, misty highland climate draws domestic visitors escaping the heat elsewhere in the Kingdom, and again briefly around any local cultural festivals in the Asir region. The Al Soudah cable car and Green Mountain area see the heaviest sightseeing traffic, and mountain roads can be foggy in the early morning, so allow a little extra travel time during those hours. Abha also functions as a practical base for day trips to Khamis Mushait and further south toward Najran and Jazan.",
    introParagraphs: [
      "Abha is the green, mist-covered capital of Asir, and its cooler highland climate makes it Saudi Arabia's most popular domestic mountain retreat — driving steady demand for airport transfers and private transport between the city and its highland resorts.",
      "Because Abha's sights are spread across the highlands rather than concentrated in one district, private transport is the practical way to move between them. The city also functions as a base for day trips to Khamis Mushait, Najran, and Jazan further south.",
    ],
    sections: [
      {
        heading: "Abha Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Abha International Airport (AHB) has a simple arrivals flow, and your driver waits in the hall with a name board, ready to drive you directly to your hotel or destination. See our <a href='/airport-transfer/abha-airport'>Abha Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Asir Highlands Transportation",
        block: {
          kind: "prose",
          paragraphs: [
            "The Al Soudah cable car and Green Mountain area see the heaviest sightseeing traffic, and mountain roads can be foggy in the early morning, so allow a little extra travel time during those hours. Habala and Abha Dam Lake are also popular private day trips from the city.",
          ],
        },
      },
      {
        heading: "Regional Connections from Abha",
        block: {
          kind: "prose",
          paragraphs: [
            "Abha to Khamis Mushait is a short, frequently requested transfer given the two cities' close proximity, and private intercity transfers to both Najran and Jazan are available with a fixed price agreed before you travel — useful for a combined southern-Saudi itinerary.",
          ],
        },
      },
      {
        heading: "Private Transfers from Abha to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Abha.",
          columns: 2,
          cards: [
            { title: "Abha to Jeddah", body: "A scenic long-distance transfer from the Asir highlands down to the Red Sea coast.", href: "/routes/abha-to-jeddah", linkLabel: "Abha to Jeddah route" },
            { title: "Abha to Riyadh", body: "A private long-distance transfer to the capital.", href: "/routes/abha-to-riyadh", linkLabel: "Abha to Riyadh route" },
          ],
        },
      },
      {
        heading: "Family Sightseeing in Asir",
        block: {
          kind: "prose",
          paragraphs: [
            "Comfortable family vehicles are available for highland day trips — mention passenger count and any specific stops such as Habala or the cable car when requesting a quote. Weather can change quickly at altitude, so drivers plan routes around fog and busy holiday traffic.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Abha",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Abha International Airport", "Green Mountain (Jabal Thera)", "Al Soudah", "Habala", "Abha Dam Lake"],
        },
      },
      {
        heading: "How to Book an Abha Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "When is the best time to visit Abha for cooler weather?",
        answer: "Summer is Abha's peak season, when its highland climate is noticeably cooler than most of Saudi Arabia, drawing domestic visitors to the Asir mountains.",
      },
      {
        question: "How far is Abha Airport from the Al Soudah cable car?",
        answer: "Al Soudah and the Green Mountain cable car area are a scenic drive from Abha International Airport; travel time depends on road conditions in the highlands.",
      },
      {
        question: "Is fog common on the Abha highland roads?",
        answer: "Early mornings in the Asir highlands can see fog, particularly around Al Soudah and Green Mountain, so allow a little extra travel time during those hours.",
      },
      {
        question: "Can I book a day trip to Habala from Abha?",
        answer: "Yes, Habala is a popular day-trip destination from Abha, known for its hanging village and mountain scenery.",
      },
      {
        question: "Do you offer transfers from Abha to Khamis Mushait?",
        answer: "Yes, Abha to Khamis Mushait is a short, frequently requested transfer given the two cities' close proximity.",
      },
      {
        question: "Can I book an intercity transfer from Abha to Najran or Jazan?",
        answer: "Yes, private intercity transfers from Abha to both Najran and Jazan are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Abha Dam Lake accessible by private taxi?",
        answer: "Yes, Abha Dam Lake is a short, popular sightseeing trip from central Abha.",
      },
      {
        question: "Do you provide family-friendly vehicles for highland sightseeing in Abha?",
        answer: "Yes, comfortable family vehicles are available for highland day trips — mention passenger count and any specific stops when requesting a quote.",
      },
    ],
  },

  tabuk: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Tabuk's transfer demand splits between NEOM-related business travel and heritage tourism at the Hejaz Railway station and Tabuk Castle. NEOM project areas can involve longer drives and specific site-access procedures, so confirming your exact destination and any site-entry requirements when booking helps the driver plan the route. Tabuk also functions as a practical staging point for travellers heading onward to the Red Sea coast or AlUla.",
    introParagraphs: [
      "Tabuk is the gateway to NEOM and the historic northwest, and its transfer demand reflects that split identity: business travellers heading to NEOM project areas need reliable, pre-booked transport across long distances, while heritage visitors arrive for the Hejaz Railway station and Tabuk Castle.",
      "Tabuk also functions as a practical staging point for travellers heading onward to AlUla or the Red Sea coast, making it a common stop rather than only a final destination.",
    ],
    sections: [
      {
        heading: "Tabuk Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Tabuk Regional Airport (TUU) has a simple arrivals flow, and your driver waits in the hall with a name board, ready to drive you directly to a city hotel, a project site, or an onward destination. See our <a href='/airport-transfer/tabuk-airport'>Tabuk Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "NEOM Business Transportation",
        block: {
          kind: "prose",
          paragraphs: [
            "NEOM project areas can involve longer drives and specific site-access procedures, so confirming your exact destination and any site-entry requirements when booking helps the driver plan the route. We work with business travellers making regular NEOM-related trips — contact us on WhatsApp to discuss your travel pattern.",
          ],
        },
      },
      {
        heading: "Heritage Sites and Onward Travel",
        block: {
          kind: "prose",
          paragraphs: [
            "Tabuk Castle and the historic Hejaz Railway Station are close together and commonly visited on the same private sightseeing trip, a short drive from the airport.",
          ],
        },
      },
      {
        heading: "Private Transfers from Tabuk to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Tabuk.",
          columns: 3,
          cards: [
            { title: "Tabuk to NEOM", body: "A private transfer to NEOM project areas, roughly 180 km.", href: "/routes/tabuk-to-neom", linkLabel: "Tabuk to NEOM route" },
            { title: "Tabuk to AlUla", body: "A private transfer to the heritage sites of AlUla.", href: "/routes/tabuk-to-alula", linkLabel: "Tabuk to AlUla route" },
            { title: "Tabuk to Madinah", body: "A longer intercity transfer with rest stops available on request.", href: "/routes/tabuk-to-madinah", linkLabel: "Tabuk to Madinah route" },
          ],
        },
      },
      {
        heading: "Winter Travel and Vehicle Needs",
        block: {
          kind: "prose",
          paragraphs: [
            "Tabuk's highland winters can be genuinely cold, occasionally with frost, though the transfer itself is unaffected — vehicles are comfortable and climate-controlled year-round. Families and groups can request an SUV or van for extra space and luggage.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Tabuk",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Tabuk Regional Airport", "Tabuk Castle", "Hejaz Railway Station", "NEOM region"],
        },
      },
      {
        heading: "How to Book a Tabuk Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Do you provide transfers to NEOM project areas from Tabuk?",
        answer: "Yes, we provide rides to NEOM project areas from Tabuk — share your exact destination and any site-access details when booking so the driver can plan accordingly.",
      },
      {
        question: "How far is the Hejaz Railway Station from Tabuk Airport?",
        answer: "The historic Hejaz Railway Station is a short drive from Tabuk Regional Airport, commonly combined with a Tabuk Castle visit on the same trip.",
      },
      {
        question: "Can I book a Tabuk to AlUla transfer?",
        answer: "Yes, private intercity transfers from Tabuk to AlUla are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Tabuk a good base for heading to the Red Sea coast?",
        answer: "Yes, Tabuk is commonly used as a staging point for onward travel toward the Red Sea coast; ask us about combining legs into one itinerary.",
      },
      {
        question: "Do you offer business travel accounts for NEOM-related trips from Tabuk?",
        answer: "Yes, we work with business travellers making regular NEOM-related trips — contact us on WhatsApp to discuss your travel pattern.",
      },
      {
        question: "Can I visit Tabuk Castle and the Hejaz Railway on the same day?",
        answer: "Yes, both sites are close together and commonly visited on the same private sightseeing trip from Tabuk.",
      },
      {
        question: "How far is Tabuk from Madinah?",
        answer: "Tabuk to Madinah is a longer intercity route; we offer it as a fixed-price private transfer with rest stops available on request.",
      },
      {
        question: "Do you provide airport pickup for late or early Tabuk flights?",
        answer: "Yes, meet-and-greet pickup at Tabuk Regional Airport runs 24/7 regardless of flight time.",
      },
    ],
  },

  alula: {
    lastUpdated: "2026-09-17",
    localInsight:
      "AlUla's visitor season runs heaviest in the cooler months (roughly October through April), when the desert climate is far more comfortable for touring Hegra, Elephant Rock, and the Old Town. Many resorts and heritage sites sit some distance apart across the AlUla valley, so private transfers between accommodation and sites are the practical way to get around rather than walking between them. Travellers often combine an AlUla stay with an onward transfer to Madinah or Tabuk.",
    introParagraphs: [
      "AlUla is Saudi Arabia's premier heritage destination, and because its resorts and heritage sites sit some distance apart across the valley, private transport is the practical way to get around rather than walking between them — most demand here is airport-to-resort transfers and touring between sites during a stay.",
      "The cooler months, roughly October through April, are AlUla's peak season, when the desert climate is far more comfortable for touring. Many guests also combine an AlUla stay with an onward transfer to Madinah, Tabuk, or further afield.",
    ],
    sections: [
      {
        heading: "AlUla Airport and Resort Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "AlUla International Airport (ULH) has a simple arrivals flow, and your driver meets you in the hall with a name board, ready to drive you directly to your resort. See our <a href='/airport-transfer/alula-airport'>AlUla Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Touring Between AlUla's Heritage Sites",
        block: {
          kind: "prose",
          paragraphs: [
            "Hegra (Madain Salih), Elephant Rock, the Old Town, and the Maraya Concert Hall are commonly combined into a single private sightseeing trip. We can arrange a driver for hotel transfers and sightseeing across your whole stay, rather than booking a separate ride for each day.",
          ],
        },
      },
      {
        heading: "Private Transfers from AlUla to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from AlUla.",
          columns: 3,
          cards: [
            { title: "AlUla to Madinah", body: "A private transfer connecting heritage sightseeing with a pilgrimage visit.", href: "/routes/alula-to-madinah", linkLabel: "AlUla to Madinah route" },
            { title: "AlUla to Tabuk", body: "A private transfer north across the desert.", href: "/routes/alula-to-tabuk", linkLabel: "AlUla to Tabuk route" },
            { title: "AlUla to Riyadh", body: "A private long-distance transfer to the capital.", href: "/routes/alula-to-riyadh", linkLabel: "AlUla to Riyadh route" },
          ],
        },
      },
      {
        heading: "Desert Touring for Families and Groups",
        block: {
          kind: "prose",
          paragraphs: [
            "AlUla's desert setting means warm days and cooler evenings, especially in the peak visitor months. SUVs and vans suit families and groups with luggage, and our vehicles are comfortable for a full day moving between hotel transfers, restaurants, viewpoints, and heritage experiences.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in AlUla",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["AlUla International Airport", "Hegra (Madain Salih)", "Elephant Rock", "AlUla Old Town", "Maraya Concert Hall"],
        },
      },
      {
        heading: "How to Book an AlUla Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or resort details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "When is the best season to visit AlUla?",
        answer: "The cooler months, roughly October through April, are AlUla's peak visitor season, offering more comfortable conditions for touring Hegra and the surrounding desert sites.",
      },
      {
        question: "How far is Hegra from AlUla Airport?",
        answer: "Hegra (Madain Salih) is a drive from AlUla International Airport across the valley; we provide direct transfers with flight tracking for arrivals.",
      },
      {
        question: "Can I visit Elephant Rock and the Old Town on the same trip?",
        answer: "Yes, Elephant Rock and AlUla Old Town are commonly combined into a single private sightseeing trip.",
      },
      {
        question: "Do resorts in AlUla require private transfers to reach the sites?",
        answer: "Yes, many resorts sit some distance from the main heritage sites across the valley, so a private transfer is the practical way to move between accommodation and sites.",
      },
      {
        question: "Can I book a transfer from AlUla to Madinah?",
        answer: "Yes, private intercity transfers from AlUla to Madinah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there transfer service to the Maraya Concert Hall?",
        answer: "Yes, transfers to Maraya Concert Hall are available for event nights and general sightseeing.",
      },
      {
        question: "Do you offer transfers from AlUla to Tabuk or Yanbu?",
        answer: "Yes, private intercity transfers from AlUla to both Tabuk and Yanbu are available with a fixed price agreed before you travel.",
      },
      {
        question: "Are your AlUla vehicles suitable for desert touring?",
        answer: "Yes, our vehicles are comfortable for AlUla's desert touring routes; mention any specific sites or a full-day itinerary when requesting a quote.",
      },
    ],
  },

  yanbu: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Yanbu's traveller mix splits between the petrochemical workforce commuting around the Royal Commission waterfront and leisure visitors drawn to the Red Sea's diving and beach sites at Sharm Yanbu. The clearer diving conditions typically run through the cooler months, which is when leisure bookings pick up alongside steady year-round corporate transfer demand.",
    introParagraphs: [
      "Yanbu has a dual identity that shapes its transfer demand — a Red Sea resort and diving destination at Sharm Yanbu, and an industrial city built around the Royal Commission waterfront. Private transport here ranges from beach-resort airport pickups to steady year-round corporate transfers for the petrochemical workforce.",
      "Yanbu is also a practical stop for pilgrims combining a Red Sea stay with a visit to Madinah, a scenic inland drive of a couple of hours.",
    ],
    sections: [
      {
        heading: "Yanbu Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Yanbu Airport (YNB) has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage. See our <a href='/airport-transfer/yanbu-airport'>Yanbu Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Red Sea Resort and Dive-Site Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Hotels and resorts along the Yanbu Royal Commission Waterfront and the Sharm Yanbu dive area are covered for airport and point-to-point transfers. Larger vehicles are available for dive groups with gear and extra luggage — mention your group size and equipment when requesting a quote. The cooler months generally offer clearer diving conditions, which is when leisure bookings pick up.",
          ],
        },
      },
      {
        heading: "Corporate Transfers for the Industrial City",
        block: {
          kind: "prose",
          paragraphs: [
            "We work with corporate accounts for regular staff transport around the Yanbu Royal Commission Waterfront and Yanbu Industrial City, alongside the resort and leisure transfers.",
          ],
        },
      },
      {
        heading: "Private Transfers from Yanbu to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Yanbu.",
          columns: 2,
          cards: [
            { title: "Yanbu to Madinah", body: "A scenic inland transfer, commonly paired with a Red Sea stay.", href: "/routes/yanbu-to-madinah", linkLabel: "Yanbu to Madinah route" },
            { title: "Yanbu to Jeddah", body: "A private transfer south along the Red Sea coast.", href: "/routes/yanbu-to-jeddah-airport", linkLabel: "Yanbu to Jeddah Airport route" },
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Yanbu",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Yanbu Royal Commission Waterfront", "Yanbu Airport", "Sharm Yanbu", "Yanbu Industrial City"],
        },
      },
      {
        heading: "How to Book a Yanbu Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Yanbu Airport from the Red Sea resort area?",
        answer: "The Red Sea resort and dive area at Sharm Yanbu is a drive from Yanbu Airport; we track your flight and quote transfer time to your exact resort.",
      },
      {
        question: "When is the best time for diving trips from Yanbu?",
        answer: "The cooler months generally offer clearer diving conditions at Sharm Yanbu, which is when leisure diving bookings tend to increase.",
      },
      {
        question: "Do you provide corporate transfers for Yanbu's industrial workforce?",
        answer: "Yes, we work with corporate accounts for regular staff transport around the Yanbu Royal Commission Waterfront and Yanbu Industrial City.",
      },
      {
        question: "Can I book a transfer from Yanbu to Madinah?",
        answer: "Yes, private intercity transfers from Yanbu to Madinah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a private transfer from Yanbu to Jeddah?",
        answer: "Yes, Yanbu to Jeddah is available as a fixed-price intercity private transfer.",
      },
      {
        question: "Do you cover hotels around the Yanbu waterfront?",
        answer: "Yes, hotels and resorts along the Yanbu Royal Commission Waterfront and nearby beach areas are all covered.",
      },
      {
        question: "Can I book a group transfer for a diving trip to Yanbu?",
        answer: "Yes, larger vehicles are available for dive groups with gear and extra luggage — mention your group size and equipment when requesting a quote.",
      },
      {
        question: "Do you offer transfers between Yanbu and AlUla?",
        answer: "Yes, private intercity transfers from Yanbu to AlUla are available with a fixed price agreed before you travel.",
      },
    ],
  },

  hail: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Hail serves mainly as a heritage and desert-touring base, with the Jubbah rock-art site and the Aja and Salma mountains drawing most sightseeing trips, plus a role as a practical stopover for travellers driving the northern route toward AlUla. Weather is generally more comfortable outside the height of summer, and the desert stretches between sites can involve longer drive times than in more compact cities.",
    introParagraphs: [
      "Hail is the historic northern city at the crossroads of old caravan routes, and most private-transfer demand here is airport arrivals heading to desert heritage sites, plus travellers using Hail as a practical stopover on the long northern route toward AlUla.",
      "Distances between sites in Hail's desert and mountain terrain can be longer than in more compact cities, so a private car with a local driver is the comfortable way to cover them.",
    ],
    sections: [
      {
        heading: "Hail Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Hail Regional Airport (HAS) has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage. See our <a href='/airport-transfer/hail-airport'>Hail Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Desert and Heritage Sightseeing",
        block: {
          kind: "prose",
          paragraphs: [
            "A'arif Fort and the Aja Mountains are commonly combined into a single private sightseeing trip from Hail, and the UNESCO-listed Jubbah rock-art site is a popular longer trip out into the desert — a local driver used to the open routes makes the distance comfortable.",
          ],
        },
      },
      {
        heading: "Private Transfers from Hail to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Hail.",
          columns: 2,
          cards: [
            { title: "Hail to Riyadh", body: "A private long-distance transfer to the capital.", href: "/routes/hail-to-riyadh", linkLabel: "Hail to Riyadh route" },
            { title: "Hail to Madinah", body: "A private transfer along the northern corridor toward the Prophet's Mosque.", href: "/routes/hail-to-madinah", linkLabel: "Hail to Madinah route" },
          ],
        },
      },
      {
        heading: "Stopover Travel Toward AlUla and Qassim",
        block: {
          kind: "prose",
          paragraphs: [
            "Hail is often used as a practical stopover point for travellers on the northern route toward AlUla, and private intercity transfers toward Qassim are also available — ask us about combining legs into one itinerary rather than booking each separately.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Hail",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Hail Regional Airport", "A'arif Fort", "Aja Mountains", "Jubbah rock art"],
        },
      },
      {
        heading: "How to Book a Hail Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Jubbah rock art from Hail Airport?",
        answer: "The Jubbah rock-art site is a drive from Hail Regional Airport across desert roads; we provide private transfers with flight tracking for arrivals.",
      },
      {
        question: "Can I visit A'arif Fort and the Aja Mountains on the same day?",
        answer: "Yes, A'arif Fort and the Aja Mountains are commonly combined into a single private sightseeing trip from Hail.",
      },
      {
        question: "Is Hail a good stopover between Riyadh and AlUla?",
        answer: "Yes, Hail is often used as a practical stopover point for travellers on the northern route toward AlUla; ask us about combining legs into one itinerary.",
      },
      {
        question: "Do you offer transfers from Hail to Buraidah?",
        answer: "Yes, private intercity transfers from Hail to Buraidah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a transfer from Hail to Tabuk?",
        answer: "Yes, Hail to Tabuk is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Are Hail's desert sightseeing routes long drives?",
        answer: "Distances between sites in Hail's desert and mountain terrain can be longer than in more compact cities, so allow extra time when planning a multi-site day trip.",
      },
      {
        question: "Do you provide airport pickup for all Hail Regional Airport flights?",
        answer: "Yes, meet-and-greet pickup at Hail Regional Airport is available for arriving flights with flight tracking included.",
      },
      {
        question: "Can I book a transfer from Hail toward Riyadh?",
        answer: "Yes, private intercity transfers from Hail to Riyadh are available with a fixed price agreed before you travel.",
      },
    ],
  },

  najran: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Najran's character comes from its mud-brick heritage architecture and oasis farms near the southern frontier, with the Al-Ukhdood archaeological site and Najran Dam the main sightseeing draws. As a southern city without its own major international airport hub in our network, most visitors arrive via Abha or overland from Jazan, so plan onward or connecting legs when booking.",
    introParagraphs: [
      "Najran is the distinctive southern city of mud-brick palaces and oasis farms near the Yemeni frontier. As a city without a major international airport hub in our network, most private-transfer demand here is a connecting leg — arriving via Abha or overland from Jazan — followed by heritage sightseeing and onward intercity travel.",
      "Because the long desert routes to and from Najran take real time, planning the connecting leg alongside your Najran transfer when you book helps both parts of the trip fit together.",
    ],
    sections: [
      {
        heading: "Reaching Najran",
        block: {
          kind: "prose",
          paragraphs: [
            "Najran is typically reached via a connecting flight through Abha or an overland transfer from Jazan; we can arrange either leg with a fixed price agreed in advance. Our vehicles are comfortable for the longer desert legs to and from Najran — mention your route and any rest-stop preferences when requesting a quote.",
          ],
        },
      },
      {
        heading: "Heritage Sightseeing in Najran",
        block: {
          kind: "prose",
          paragraphs: [
            "Al-Ukhdood and Najran Dam are close together and commonly combined into a single private sightseeing trip, alongside visits to Najran's traditional mud-brick palaces such as Aan Palace.",
          ],
        },
      },
      {
        heading: "Regional Connections from Najran",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Najran to Abha and Jazan are available with a fixed price agreed before you travel, along with longer routes toward Riyadh — a rest stop can be arranged on request for the desert leg.",
          ],
        },
      },
      {
        heading: "Families and Heritage Groups",
        block: {
          kind: "prose",
          paragraphs: [
            "Family-friendly vehicles are available for heritage sightseeing in Najran — mention passenger count when requesting a quote, particularly for a full day touring Al-Ukhdood, Najran Dam, and the mud-brick palaces together.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Najran",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Najran Domestic Airport", "Al-Ukhdood", "Najran Dam", "Aan Palace"],
        },
      },
      {
        heading: "How to Book a Najran Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your connecting flight or arrival details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How do most visitors reach Najran?",
        answer: "Najran is typically reached via a connecting flight through Abha or an overland transfer from Jazan; we can arrange either leg with a fixed price agreed in advance.",
      },
      {
        question: "Can I visit Al-Ukhdood and Najran Dam on the same trip?",
        answer: "Yes, Al-Ukhdood and Najran Dam are close together and commonly combined into a single private sightseeing trip.",
      },
      {
        question: "Do you offer transfers from Najran to Abha?",
        answer: "Yes, private intercity transfers from Najran to Abha are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a transfer service from Najran to Jazan?",
        answer: "Yes, Najran to Jazan is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Can I see Najran's mud-brick palaces by private taxi?",
        answer: "Yes, we offer heritage sightseeing trips to Najran's traditional mud-brick palaces, including Aan Palace.",
      },
      {
        question: "Do you provide transfers from Najran toward Riyadh?",
        answer: "Yes, private intercity transfers from Najran to Riyadh are available, though it is a long desert route — a rest stop can be arranged on request.",
      },
      {
        question: "Are your vehicles suited to Najran's long desert routes?",
        answer: "Yes, our vehicles are comfortable for Najran's longer desert legs; mention your route and any rest-stop preferences when requesting a quote.",
      },
      {
        question: "Can I book a family transfer for a Najran heritage tour?",
        answer: "Yes, family-friendly vehicles are available for heritage sightseeing in Najran — mention passenger count when requesting a quote.",
      },
    ],
  },

  jazan: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Jazan's transfer demand centres on the ferry terminal serving the Farasan Islands and the growing economic-city workforce along the Red Sea south coast, with the Fifa Mountains offering a cooler highland day-trip option nearby. Ferry departure times for Farasan should be confirmed directly with the ferry operator, since we handle the road transfer to the terminal rather than the sailing schedule itself.",
    introParagraphs: [
      "Jazan is the lush southwestern coastal region and the launch point for the Farasan Islands, so much of its private-transfer demand centres on the ferry terminal, alongside the growing economic-city workforce along the Red Sea south coast.",
      "The Fifa Mountains offer a cooler highland day trip inland, and Jazan connects naturally to Abha and Najran for travellers building a wider southern-Saudi itinerary.",
    ],
    sections: [
      {
        heading: "Jazan Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Jazan Airport (GIZ) has a simple arrivals flow, and your driver meets you in the hall with a name board. See our <a href='/airport-transfer/jazan-airport'>Jazan Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Farasan Islands Ferry Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "We provide transfers to the Jazan ferry terminal for Farasan Islands departures; please confirm sailing times directly with the ferry operator, since we handle the road transfer rather than the crossing itself. Larger vehicles are available for groups travelling to the terminal with extra luggage or diving gear.",
          ],
        },
      },
      {
        heading: "Fifa Mountains and Regional Connections",
        block: {
          kind: "prose",
          paragraphs: [
            "The Fifa Mountains are a popular highland day trip from Jazan, offering cooler temperatures than the coastal city. Private intercity transfers to Abha and Najran are available with a fixed price agreed before you travel.",
          ],
        },
      },
      {
        heading: "Jazan Corniche and Business Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Hotels and resorts along the Jazan Corniche are covered for both airport transfers and point-to-point rides, and we handle business travel around the growing Jazan economic-city workforce area — contact us on WhatsApp to discuss your travel pattern.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Jazan",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Jazan Airport", "Farasan Islands ferry terminal", "Fifa Mountains", "Jazan Corniche"],
        },
      },
      {
        heading: "How to Book a Jazan Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or hotel details, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Do you provide transfers to the Farasan Islands ferry terminal?",
        answer: "Yes, we provide transfers to the Jazan ferry terminal for Farasan Islands departures; please confirm sailing times directly with the ferry operator since we handle the road transfer, not the crossing.",
      },
      {
        question: "Can I visit the Fifa Mountains from Jazan?",
        answer: "Yes, the Fifa Mountains are a popular highland day trip from Jazan, offering cooler temperatures than the coastal city.",
      },
      {
        question: "Do you offer transfers between Jazan and Abha?",
        answer: "Yes, private intercity transfers from Jazan to Abha are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a transfer service from Jazan to Najran?",
        answer: "Yes, Jazan to Najran is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Do you cover hotels along the Jazan Corniche?",
        answer: "Yes, hotels and resorts along the Jazan Corniche are covered for both airport transfers and point-to-point rides.",
      },
      {
        question: "Can I book a business transfer for the Jazan economic city area?",
        answer: "Yes, we handle business travel around the Jazan economic-city workforce area — contact us on WhatsApp to discuss your travel pattern.",
      },
      {
        question: "Do you provide transfers for groups heading to Farasan with luggage or gear?",
        answer: "Yes, larger vehicles are available for groups travelling to the ferry terminal with extra luggage or diving gear.",
      },
    
      {
        question: "Can I book a private long-distance transfer from Jazan to Riyadh?",
        answer:
          "Yes, we provide cross-country private chauffeur transfers connecting the southern port city and Farasan ferry terminal with the capital via our <a href='/routes/jizan-to-riyadh'>private Jizan to Riyadh transfer</a>.",
      },
    ],
  },

  buraidah: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Buraidah's biggest travel spike ties directly to the annual Qassim Date Festival, when demand for both airport transfers and local rides rises sharply across the city. Outside festival season, most transfer activity is intercity — Buraidah sits on the Riyadh-Hail corridor, making it a frequent stop for longer central-Kingdom road trips rather than a standalone leisure destination.",
    introParagraphs: [
      "Buraidah is the agricultural capital of Al Qassim, and outside its annual date-festival season most private-transfer demand here is intercity rather than local sightseeing — the city sits on the Riyadh-Hail corridor, making it a frequent stop for longer central-Kingdom road trips.",
      "Demand rises sharply during the Qassim Date Festival, when both airport transfers and local rides across the city pick up noticeably, so booking a little earlier during that period is worthwhile.",
    ],
    sections: [
      {
        heading: "Qassim Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Prince Naif bin Abdulaziz Airport (Qassim) is a short transfer from central Buraidah. We track your flight and provide meet-and-greet pickup with a name board in the arrivals hall.",
          ],
        },
      },
      {
        heading: "Private Transfers from Buraidah to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Buraidah.",
          columns: 2,
          cards: [
            { title: "Buraidah to Riyadh", body: "A private intercity transfer along the central-Kingdom corridor.", href: "/routes/qassim-to-riyadh", linkLabel: "Buraidah to Riyadh route" },
          ],
        },
      },
      {
        heading: "Buraidah on the Riyadh-Hail Corridor",
        block: {
          kind: "prose",
          paragraphs: [
            "Buraidah is a frequent stop or waypoint for travellers making the longer central-Kingdom journey between Riyadh and Hail, and private transfers to both Madinah and Makkah are available with a fixed price agreed before you travel.",
          ],
        },
      },
      {
        heading: "Date Festival Season Travel",
        block: {
          kind: "prose",
          paragraphs: [
            "Demand rises noticeably during the Qassim Date Festival, so booking your Buraidah transfers a little earlier during that period is worthwhile. Our vehicles are suited to Buraidah's longer central-Kingdom desert routes; mention your route when requesting a quote.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Buraidah",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Prince Naif bin Abdulaziz Airport (Qassim)", "Buraidah Date City", "Al Bukayriyah", "Qassim Date Festival grounds"],
        },
      },
      {
        heading: "How to Book a Buraidah Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or pickup address, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Does the Qassim Date Festival affect taxi availability in Buraidah?",
        answer: "Yes, demand rises noticeably during the Date Festival season, so booking your Buraidah transfers a little earlier during that period is worthwhile.",
      },
      {
        question: "How far is Qassim Airport from central Buraidah?",
        answer: "Prince Naif bin Abdulaziz Airport (Qassim) is a short transfer from central Buraidah; we track your flight and provide meet-and-greet pickup.",
      },
      {
        question: "Is Buraidah a common stop on the Riyadh to Hail route?",
        answer: "Yes, Buraidah sits on the Riyadh-Hail corridor and is a frequent stop or waypoint for travellers making that longer central-Kingdom journey.",
      },
      {
        question: "Can I book a transfer from Buraidah to Riyadh?",
        answer: "Yes, private intercity transfers from Buraidah to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Do you offer transfers from Buraidah to Madinah or Makkah?",
        answer: "Yes, private intercity transfers from Buraidah to both Madinah and Makkah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I visit Al Bukayriyah from Buraidah?",
        answer: "Yes, Al Bukayriyah is a short trip from Buraidah, commonly combined with a city tour.",
      },
      {
        question: "Do you provide comfortable vehicles for long desert legs from Buraidah?",
        answer: "Yes, our vehicles are suited to Buraidah's longer central-Kingdom desert routes; mention your route when requesting a quote.",
      },
      {
        question: "Can I book a transfer from Buraidah to Hail?",
        answer: "Yes, Buraidah to Hail is available as a fixed-price private intercity transfer.",
      },
    ],
  },

  hofuf: {
    lastUpdated: "2026-09-17",
    localInsight:
      "Hofuf is the main gateway to the Al-Ahsa Oasis, a UNESCO World Heritage site, so most transfer requests centre on heritage tours of the Qaisariah Souq and Ibrahim Palace alongside the Jabal Al-Qarah caves. As the principal city of the oasis, Hofuf also handles most onward intercity demand toward the Eastern Province coast rather than being a pure business destination.",
    introParagraphs: [
      "Hofuf is the principal city of the Al-Ahsa Oasis, a UNESCO World Heritage site, so most private-transfer demand here centres on heritage tours within the city itself — the Qaisariah Souq, Ibrahim Palace, and the nearby Jabal Al-Qarah caves — alongside onward intercity travel toward the Eastern Province coast.",
      "As the oasis's principal city, Hofuf functions as a practical base for exploring the surrounding palm groves and heritage towns; for transfers across the wider oasis governorate, see our Al-Ahsa taxi service.",
    ],
    sections: [
      {
        heading: "Al-Ahsa International Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Al-Ahsa International Airport is a short transfer from central Hofuf. We track your flight and provide meet-and-greet pickup with a name board in the arrivals hall.",
          ],
        },
      },
      {
        heading: "Heritage Sightseeing in Hofuf",
        block: {
          kind: "prose",
          paragraphs: [
            "Qaisariah Souq and Ibrahim Palace sit close together in Hofuf and are commonly combined into one heritage sightseeing trip, along with a visit to the Jabal Al-Qarah caves, a short private transfer from the city centre.",
          ],
        },
      },
      {
        heading: "Private Transfers from Hofuf to Other Cities",
        block: {
          kind: "cards",
          intro: "Fixed-price long-distance transfers from Hofuf.",
          columns: 2,
          cards: [
            { title: "Hofuf to Riyadh", body: "A private intercity transfer to the capital.", href: "/routes/hofuf-to-riyadh", linkLabel: "Hofuf to Riyadh route" },
          ],
        },
      },
      {
        heading: "Regional Connections from Hofuf",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Hofuf to Dammam and Khobar are available with a fixed price agreed before you travel, along with transfers toward the Bahrain Causeway crossing for travellers continuing across the border.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Hofuf",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Al-Ahsa International Airport", "Qaisariah Souq", "Ibrahim Palace", "Jabal Al-Qarah"],
        },
      },
      {
        heading: "How to Book a Hofuf Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or pickup address, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Hofuf from Al-Ahsa International Airport?",
        answer: "Al-Ahsa International Airport is a short transfer from central Hofuf; we track your flight and provide meet-and-greet pickup.",
      },
      {
        question: "Can I visit Qaisariah Souq and Ibrahim Palace on the same trip?",
        answer: "Yes, Qaisariah Souq and Ibrahim Palace are close together in Hofuf and commonly combined into one heritage sightseeing trip.",
      },
      {
        question: "Are the Jabal Al-Qarah caves accessible from Hofuf?",
        answer: "Yes, the Jabal Al-Qarah caves are a short private transfer from central Hofuf.",
      },
      {
        question: "Do you offer transfers from Hofuf to Dammam or Riyadh?",
        answer: "Yes, private intercity transfers from Hofuf to both Dammam and Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Hofuf a good base for exploring the Al-Ahsa Oasis?",
        answer: "Yes, as the principal city of the oasis, Hofuf is a practical base for touring the palm groves, springs, and heritage sites of Al-Ahsa.",
      },
      {
        question: "Can I book a transfer from Hofuf to the Bahrain Causeway?",
        answer: "Yes, private transfers from Hofuf toward the Bahrain Causeway crossing are available with a fixed price agreed before you travel.",
      },
      {
        question: "Do you provide family vehicles for oasis sightseeing in Hofuf?",
        answer: "Yes, comfortable family vehicles are available for oasis and heritage sightseeing — mention passenger count when requesting a quote.",
      },
      {
        question: "Can I book a transfer from Hofuf to Khobar?",
        answer: "Yes, Hofuf to Khobar is available as a fixed-price private intercity transfer.",
      },
    ],
  },

  "al-ahsa": {
    lastUpdated: "2026-09-17",
    localInsight:
      "Al-Ahsa is the wider oasis governorate around Hofuf — millions of palm trees, natural springs, and heritage towns spread across the UNESCO-listed area, so transfers here often involve moving between several sites rather than a single fixed destination. Most travellers pair an Al-Ahsa sightseeing day with an intercity leg to Dammam, Riyadh, or onward toward the Bahrain Causeway.",
    introParagraphs: [
      "Al-Ahsa is the vast UNESCO-listed oasis governorate around Hofuf — millions of palm trees, natural springs, and heritage towns spread across the area — so transfers here typically involve moving between several sites across a day rather than reaching one fixed destination.",
      "Most travellers pair an Al-Ahsa sightseeing day with an intercity leg to Dammam, Riyadh, or onward toward the Bahrain Causeway, making a single multi-stop private transfer more practical than booking separate rides.",
    ],
    sections: [
      {
        heading: "Touring the Al-Ahsa Oasis",
        block: {
          kind: "prose",
          paragraphs: [
            "We arrange multi-stop days covering palm groves, natural springs, and heritage sites across Al-Ahsa — mention your preferred stops when requesting a quote. The Jabal Al-Qarah caves and Yellow Lake are commonly included alongside the palm groves and springs.",
          ],
        },
      },
      {
        heading: "Al-Ahsa Airport Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "Al-Ahsa International Airport is a short transfer from most oasis heritage sites and palm groves. We track your flight and quote based on your exact destination.",
          ],
        },
      },
      {
        heading: "Regional Connections from Al-Ahsa",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Al-Ahsa to Dammam and Riyadh are available with a fixed price agreed before you travel, along with transfers toward the Bahrain Causeway crossing.",
          ],
        },
      },
      {
        heading: "Families and Full-Day Oasis Tours",
        block: {
          kind: "prose",
          paragraphs: [
            "Comfortable family vehicles are available for full-day oasis touring — mention passenger count and preferred stops when requesting a quote, particularly for a day combining the palm groves, springs, and heritage sites in one booking.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Al-Ahsa",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Al-Ahsa International Airport", "Al-Ahsa Oasis palm groves", "Jabal Al-Qarah", "Yellow Lake"],
        },
      },
      {
        heading: "How to Book an Al-Ahsa Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or pickup address, preferred stops, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What is the difference between Al-Ahsa and Hofuf for transfers?",
        answer: "Hofuf is the main city within the wider Al-Ahsa oasis governorate; we cover both under the same service, including transfers between outlying towns and heritage sites across the oasis.",
      },
      {
        question: "How far is Al-Ahsa International Airport from the oasis sites?",
        answer: "Al-Ahsa International Airport is a short transfer from most oasis heritage sites and palm groves; we track your flight and quote based on your exact destination.",
      },
      {
        question: "Can I tour multiple Al-Ahsa oasis sites in one day?",
        answer: "Yes, we can arrange a multi-stop day covering palm groves, springs, and heritage sites across Al-Ahsa — mention your preferred stops when requesting a quote.",
      },
      {
        question: "Is Yellow Lake accessible by private taxi from Al-Ahsa?",
        answer: "Yes, Yellow Lake is a popular sightseeing stop reachable by private transfer from central Al-Ahsa.",
      },
      {
        question: "Do you offer transfers from Al-Ahsa to Dammam or Riyadh?",
        answer: "Yes, private intercity transfers from Al-Ahsa to both Dammam and Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a transfer from Al-Ahsa toward the Bahrain Causeway?",
        answer: "Yes, private transfers from Al-Ahsa toward the Bahrain Causeway crossing are available with a fixed price agreed before you travel.",
      },
      {
        question: "Are Jabal Al-Qarah caves included in Al-Ahsa sightseeing routes?",
        answer: "Yes, the Jabal Al-Qarah caves are commonly included in an Al-Ahsa oasis sightseeing itinerary alongside the palm groves and springs.",
      },
      {
        question: "Do you provide family vehicles for a full-day Al-Ahsa oasis tour?",
        answer: "Yes, comfortable family vehicles are available for full-day oasis touring — mention passenger count and preferred stops when requesting a quote.",
      },
    ],
  },

  "khamis-mushait": {
    lastUpdated: "2026-09-17",
    localInsight:
      "Khamis Mushait functions as the larger commercial twin to nearby Abha, sharing the same airport and highland climate but with more of the region's markets and city-centre business activity. It's a practical base for travellers who want highland sightseeing during the day but a more commercial city base at night, and it sits well-placed for onward trips south toward Najran and Jazan.",
    introParagraphs: [
      "Khamis Mushait is the largest city of the Asir region and the commercial twin of nearby Abha, sharing the same airport and highland climate but with more of the region's markets and city-centre business activity — a practical base for travellers who want highland sightseeing during the day but a more commercial city at night.",
      "Its central southern location also makes it well placed for onward trips toward Najran and Jazan, and for travellers comparing where to base themselves against neighbouring Abha.",
    ],
    sections: [
      {
        heading: "Airport Transfers via Abha",
        block: {
          kind: "prose",
          paragraphs: [
            "Khamis Mushait shares Abha International Airport (AHB) with nearby Abha; the transfer typically takes a similar amount of time to reaching central Abha. See our <a href='/airport-transfer/abha-airport'>Abha Airport transfer page</a> for the full arrival process.",
          ],
        },
      },
      {
        heading: "Khamis Mushait or Abha: Where to Base Yourself",
        block: {
          kind: "prose",
          paragraphs: [
            "Khamis Mushait is the larger commercial city with more markets and city-centre business activity, while Abha leans more toward tourism and highland scenery — both share the same airport and climate, and Asir highland sites including Al Soudah and Green Mountain are reachable as day trips from either.",
          ],
        },
      },
      {
        heading: "Regional Connections from Khamis Mushait",
        block: {
          kind: "prose",
          paragraphs: [
            "Private intercity transfers from Khamis Mushait to both Najran and Jazan are available with a fixed price agreed before you travel, alongside longer routes north to Riyadh.",
          ],
        },
      },
      {
        heading: "City and Market Transfers",
        block: {
          kind: "prose",
          paragraphs: [
            "We provide city and market transfers around central Khamis Mushait in addition to airport and intercity trips, along with sightseeing rides to Al Mahalah Heritage Village, a short private transfer from the centre.",
          ],
        },
      },
      {
        heading: "Landmarks and Pickup Points in Khamis Mushait",
        block: {
          kind: "bullets",
          intro: "Places our drivers regularly serve:",
          items: ["Abha International Airport", "Al Mahalah Heritage Village", "Asir highlands", "Khamis Mushait city centre"],
        },
      },
      {
        heading: "How to Book a Khamis Mushait Transfer",
        block: {
          kind: "prose",
          paragraphs: [
            "Send your flight number or pickup address, destination, date, and passenger count on WhatsApp or through our quote form. We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How far is Khamis Mushait from Abha Airport?",
        answer: "Khamis Mushait shares Abha International Airport with nearby Abha; the transfer typically takes a similar amount of time to reaching central Abha.",
      },
      {
        question: "What's the difference between staying in Khamis Mushait or Abha?",
        answer: "Khamis Mushait is the larger commercial city with more markets and city-centre business activity, while Abha leans more toward tourism and highland scenery — both share the same airport and climate.",
      },
      {
        question: "Can I do Asir highland sightseeing from Khamis Mushait?",
        answer: "Yes, Asir highland sites including Al Soudah and Green Mountain are reachable as day trips from Khamis Mushait, similar to from Abha.",
      },
      {
        question: "Do you offer transfers from Khamis Mushait to Najran or Jazan?",
        answer: "Yes, private intercity transfers from Khamis Mushait to both Najran and Jazan are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Al Mahalah Heritage Village accessible from Khamis Mushait?",
        answer: "Yes, Al Mahalah Heritage Village is a short private transfer from central Khamis Mushait.",
      },
      {
        question: "Can I book a market or city-centre transfer in Khamis Mushait?",
        answer: "Yes, we provide city and market transfers around central Khamis Mushait in addition to airport and intercity trips.",
      },
      {
        question: "Do you offer transfers from Khamis Mushait to Riyadh?",
        answer: "Yes, private intercity transfers from Khamis Mushait to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a business account for regular Khamis Mushait travel?",
        answer: "Yes, we work with corporate and business travel accounts for regular Khamis Mushait trips — contact us on WhatsApp to set this up.",
      },
    ],
  },
};

export function getCityGuide(slug: string) {
  return cityGuides[slug];
}
