import type { Route } from "./routes";
import { MAKKAH_DAMMAM_FAQS } from "./makkah-to-dammam-route";

/**
 * Makkah intercity + departure routes, merged into the main routes array in
 * data/routes.ts. Kept separate so routes.ts stays readable. Paragraph strings
 * in `sections` may contain inline single-quoted <a href='/...'> links.
 *
 * Long-haul routes (Riyadh, Dammam, AlUla, Abha) honestly note that flying is
 * often faster and position the private car for door-to-door comfort, heavy
 * luggage, and flexible stops. Makkah entry is for Muslims only — routes into
 * Makkah reflect this.
 */
export const makkahRoutes: Route[] = [
  {
    slug: "makkah-to-riyadh",
    from: "Makkah",
    to: "Riyadh",
    category: "intercity",
    distance: "870 km",
    duration: "approx. 9 hours",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to Riyadh taxi is a long-distance private transfer across the heart of the Kingdom, chosen by families and groups who prefer door-to-door comfort over the airport shuffle.",
    about:
      "After completing Umrah, some travellers continue to the capital rather than flying home. Our private Makkah to Riyadh transfer covers roughly 870 km on the modern Highway 40 corridor, with a comfortable vehicle, an experienced driver, and the freedom to stop for meals and prayers along the way.",
    notes: [
      "Long ~9 hour journey — flying is faster, but a private car adds comfort and flexibility",
      "Ideal for families, heavy luggage, and groups travelling together",
      "Planned rest, fuel, and prayer stops along the route",
      "Hotel-to-hotel private service, available 24/7",
    ],
    relatedCitySlugs: ["makkah", "riyadh"],
    metaTitle: "Makkah to Riyadh Taxi – Private Transfer & Chauffeur",
    metaDescription:
      "Travel from Makkah to Riyadh (870 km, about approx. 9 hours) in a comfortable private car with an English-speaking driver. No shared rides, fixed price.",
    keywords: [
      "makkah to riyadh taxi",
      "makkah to riyadh transfer",
      "makkah to riyadh private car",
      "makkah riyadh road trip taxi",
    ],
    sections: [
      {
        heading: "The journey from Makkah to Riyadh",
        paragraphs: [
          "The route east from Makkah to Riyadh runs for around 870 km along well-maintained highways, passing through Taif's highlands before opening onto the central desert plateau. In a private car the drive takes roughly nine hours with stops, and your driver plans the timing around prayers, meals, and the cooler parts of the day.",
          "Honesty matters here: for a straight point-to-point trip, a domestic flight is far quicker at under two hours. A private transfer wins when you are travelling with family, carrying a lot of luggage after Umrah, or simply prefer to travel door-to-door without airports. If speed is your priority, our <a href='/routes/makkah-to-jeddah-airport'>Makkah to Jeddah airport transfer</a> connects you to flights instead.",
        ],
      },
      {
        heading: "Why choose a private transfer for this route",
        paragraphs: [
          "A shared bus on this distance means fixed schedules, multiple stops, and little control over comfort. A private car is yours alone: you leave when you are ready, choose where to break the journey, and keep the same driver from your Makkah hotel to your Riyadh address. For a long desert drive, that control is worth a great deal.",
          "Groups especially benefit, since the per-person cost of a van or minibus becomes very reasonable while the comfort stays high. Explore our wider <a href='/intercity-transfers'>intercity transfer service</a> to see how we handle the Kingdom's long routes.",
        ],
      },
      {
        heading: "Vehicle options for the long drive",
        paragraphs: [
          "For one or two travellers a comfortable sedan is ideal, while families usually choose an SUV for the extra legroom and luggage space. Larger Umrah groups travelling together are best served by a spacious van or a minibus, which keeps everyone in one vehicle for the full nine hours.",
          "Every vehicle is air-conditioned and maintained for long-distance travel, with room for the additional luggage — Zamzam water and gifts included — that pilgrims often carry after their stay in Makkah.",
        ],
      },
      {
        heading: "Rest stops, prayers, and comfort",
        paragraphs: [
          "A nine-hour drive is far more pleasant when it is broken sensibly. Your driver knows the reliable service stations and rest areas along the corridor, so you can pray on time, stretch, and eat without long detours. Because the car is private, these stops happen on your schedule, not a timetable's.",
          "Families with children and elderly relatives find this flexibility invaluable. There is no pressure to rush back to a waiting coach, and the cabin stays cool and calm between stops.",
        ],
      },
      {
        heading: "Fixed pricing with no surprises",
        paragraphs: [
          "The price for your Makkah to Riyadh transfer is agreed before you set off and does not change with traffic, fuel stops, or the hour of travel. There is no meter and no surge, which makes budgeting a long journey straightforward.",
          "That all-in quote covers the vehicle, driver, and fuel for the whole route. Send your details through our <a href='/get-quote'>get a quote</a> page and we confirm a fixed price, usually within minutes.",
        ],
      },
      {
        heading: "Booking your Makkah to Riyadh taxi",
        paragraphs: [
          "Tell us your pickup hotel in Makkah, your destination in Riyadh, your preferred departure time, and the number of passengers and bags. We match the right vehicle and confirm an all-in price, with 24/7 availability for early starts that beat the desert heat.",
          "Continuing your trip or heading home from the capital? Our <a href='/taxi-service/riyadh'>Riyadh taxi service</a> and <a href='/airport-transfer/riyadh-airport'>Riyadh airport transfers</a> pick up seamlessly once you arrive.",
        ],
      },
    ],
    faqs: [
      { question: "How long does the Makkah to Riyadh drive take?", answer: "The journey is about 870 km and takes roughly nine hours by private car including rest and prayer stops. A domestic flight is much faster, so a car suits those who prefer door-to-door travel or are carrying heavy luggage." },
      { question: "Is it better to fly or drive from Makkah to Riyadh?", answer: "Flying is quicker for a simple point-to-point trip. Driving is better for families, groups, or anyone with a lot of luggage who values door-to-door comfort and flexible stops. We offer both by connecting you to Jeddah airport if you prefer to fly." },
      { question: "What vehicle is best for this route?", answer: "A sedan suits one or two passengers, an SUV suits families, and a van or minibus is ideal for larger Umrah groups. All are air-conditioned and maintained for long-distance travel with room for extra luggage." },
      { question: "Can we stop for prayers and meals along the way?", answer: "Yes. Because the transfer is private, your driver stops at reliable rest areas for prayers, meals, and breaks on your schedule rather than a fixed timetable." },
      { question: "Is the price fixed for the whole journey?", answer: "Yes. You agree an all-in fixed price before travel that covers the vehicle, driver, and fuel. There is no meter and no surge pricing regardless of traffic or the time of day." },
      { question: "Is the service available at night?", answer: "Yes, we operate 24/7. Many travellers prefer an early or overnight departure to avoid the daytime heat on the desert stretch, and we can arrange the pickup time to suit you." },
    ],
  },
  {
    slug: "riyadh-to-makkah",
    from: "Riyadh",
    to: "Makkah",
    category: "intercity",
    distance: "870 km",
    duration: "approx. 9 hours",
    lastUpdated: "2026-08-05",
    intro:
      "The Riyadh to Makkah taxi is a private long-distance transfer for pilgrims and residents travelling from the capital to the Holy City for Umrah.",
    about:
      "Our private Riyadh to Makkah transfer carries Muslim travellers roughly 870 km westward from the capital to their Makkah hotel near the Haram. It is a comfortable, flexible alternative to buses and flights for families and groups who want to travel together, door-to-door, with luggage and elders aboard.",
    notes: [
      "For Muslim pilgrims — entry to Makkah is for Muslims only",
      "Miqat stop available for entering ihram before Makkah",
      "Comfortable vehicles and planned rest stops on the ~9 hour route",
      "Direct drop-off at Makkah hotels near the Haram",
    ],
    relatedCitySlugs: ["riyadh", "makkah"],
    metaTitle: "Riyadh to Makkah Taxi – Private Transfer & Chauffeur",
    metaDescription:
      "Book a private taxi from Riyadh to Makkah (870 km, about approx. 9 hours). Professional driver, comfortable vehicle, fixed price agreed before you travel.",
    keywords: [
      "riyadh to makkah taxi",
      "riyadh to makkah umrah transfer",
      "riyadh to makkah private car",
      "riyadh makkah pilgrim taxi",
    ],
    sections: [
      {
        heading: "Travelling from Riyadh to Makkah",
        paragraphs: [
          "The westward road from Riyadh to Makkah spans around 870 km, crossing the central plateau before descending toward the Hejaz. By private car the trip takes about nine hours with stops. Because entry to Makkah is reserved for Muslims, our drivers use the designated pilgrim routes at the city checkpoints and take you directly to your hotel.",
          "As with any long desert route, flying is faster for a simple trip. The private car is the better choice when a family or group wants to travel together without the airport, and it pairs naturally with the return leg on our <a href='/routes/makkah-to-riyadh'>Makkah to Riyadh transfer</a>.",
        ],
      },
      {
        heading: "The miqat and entering ihram",
        paragraphs: [
          "Pilgrims travelling to Makkah for Umrah typically enter ihram at the miqat before reaching the Haram boundaries. If you need to prepare on the way, tell us when booking and your driver will pause at a suitable point so you can make your intention and change unhurried.",
          "This flexibility is central to a proper pilgrimage transfer, and it is part of our wider <a href='/umrah-taxi-service'>Umrah taxi service</a> across the Holy Cities. There is no shared vehicle waiting on you and no meter running during the stop.",
        ],
      },
      {
        heading: "Comfort for families and elderly pilgrims",
        paragraphs: [
          "Long journeys are tiring, and many pilgrims travel with older parents. A private car lets elderly travellers rest in a comfortable seat while the driver handles luggage and navigation, and the whole family stays together in one vehicle rather than being split across a bus.",
          "Child seats can be requested for younger pilgrims, and larger vehicles make getting in and out easier for anyone with mobility needs. Just mention your requirements when you book.",
        ],
      },
      {
        heading: "Vehicles and luggage",
        paragraphs: [
          "Choose a sedan for one or two travellers, an SUV for a family, or a van or minibus for a larger group. Every vehicle is air-conditioned and comfortable for the long drive, with generous luggage space for the bags a pilgrim family carries.",
          "For the onward pilgrimage from Makkah, we also run the <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> to the Prophet's Mosque, keeping your whole journey with one trusted provider.",
        ],
      },
      {
        heading: "Fixed pricing and 24/7 booking",
        paragraphs: [
          "Your Riyadh to Makkah fare is fixed before departure, covering the vehicle, driver, and fuel with no meter and no surge. That makes it easy to budget a family pilgrimage and removes any worry about the cost changing en route.",
          "We operate around the clock, so you can set off early to travel through the cooler hours. Send your plans via our <a href='/get-quote'>get a quote</a> page for a fast, fixed-price confirmation.",
        ],
      },
      {
        heading: "Arriving in Makkah",
        paragraphs: [
          "We drive door-to-door to your hotel, whether it sits in the Abraj Al-Bait complex, Jabal Omar, or the central area near the Haram. Drivers know the access points and prayer-time road management around the mosque and choose the smoothest approach.",
          "Once you arrive, our <a href='/makkah/makkah-hotel-to-haram-transfer'>Makkah hotel to Haram transfer</a> and <a href='/taxi-service/makkah'>Makkah taxi service</a> handle your local rides throughout your stay.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the Riyadh to Makkah journey?", answer: "It is about 870 km and takes roughly nine hours by private car with rest and prayer stops. Travelling overnight or early morning avoids the daytime desert heat." },
      { question: "Can I enter ihram on the way to Makkah?", answer: "Yes. Tell us when booking and your driver will stop at a suitable miqat point so you can make your intention and change into ihram before reaching Makkah." },
      { question: "Can non-Muslims take this transfer to Makkah?", answer: "Entry to Makkah is for Muslims only, so this transfer serves Muslim pilgrims travelling to Makkah hotels. Drivers follow the designated pilgrim routes at the city checkpoints." },
      { question: "What vehicles are available for the trip?", answer: "Sedans for one or two passengers, SUVs for families, and vans or minibuses for larger groups. All are air-conditioned with ample luggage space for a pilgrim family's bags." },
      { question: "Is the price fixed?", answer: "Yes. The fare is agreed before you travel and covers the vehicle, driver, and fuel with no meter and no surge pricing, whatever the traffic or hour." },
      { question: "Do you drop off directly at the hotel?", answer: "Yes, the service is door-to-door to your Makkah hotel near the Haram. Drivers know the access routes and prayer-time diversions around the mosque area." },
    ],
  },
  {
    slug: "makkah-to-kaec",
    from: "Makkah",
    to: "King Abdullah Economic City",
    category: "intercity",
    distance: "180 km",
    duration: "approx. 2 hours",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to King Abdullah Economic City (KAEC) taxi is a smooth coastal transfer north past Jeddah to the modern port and resort city on the Red Sea.",
    about:
      "Our private Makkah to KAEC transfer covers roughly 180 km up the coastal expressway, connecting pilgrims and business travellers to King Abdullah Economic City — home to King Abdullah Port, the Bay La Sun marina, and a growing cluster of resorts and industry north of Jeddah.",
    notes: [
      "Around 180 km / 2 hours via the coastal expressway past Jeddah",
      "Serves KAEC business, port, and Bay La Sun resort areas",
      "Comfortable vehicles for families and business travellers",
      "Hotel-to-address private service, available 24/7",
    ],
    relatedCitySlugs: ["makkah", "jeddah"],
    metaTitle: "Makkah to KAEC Taxi – Private Transfer Service",
    metaDescription:
      "Reserve a private car from Makkah to King Abdullah Economic City (180 km, about 2 hours). Comfortable vehicle, professional driver, fixed price.",
    keywords: [
      "makkah to kaec taxi",
      "makkah to king abdullah economic city transfer",
      "makkah to kaec private car",
      "makkah to bay la sun taxi",
    ],
    sections: [
      {
        heading: "Makkah to King Abdullah Economic City",
        paragraphs: [
          "King Abdullah Economic City sits on the Red Sea coast about 100 km north of Jeddah, and roughly 180 km from Makkah. The drive takes around two hours along the modern coastal expressway, skirting Jeddah before reaching KAEC's port, business district, and the Bay La Sun waterfront.",
          "It is a popular transfer for pilgrims combining Umrah with business at King Abdullah Port, and for travellers heading to KAEC's resorts. If your plans include the airport, our <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a> connects the same corridor.",
        ],
      },
      {
        heading: "Who travels this route",
        paragraphs: [
          "Business travellers form a large share, visiting the port, logistics parks, and the Industrial Valley that anchor KAEC's economy. A private car with a professional driver keeps corporate schedules punctual and comfortable across the two-hour run.",
          "Leisure guests travel it too, heading for the Bay La Sun marina, beaches, and golf. For city stays either side of the trip, see our <a href='/taxi-service/jeddah'>Jeddah taxi service</a> and <a href='/taxi-service/makkah'>Makkah taxi service</a>.",
        ],
      },
      {
        heading: "Vehicle options",
        paragraphs: [
          "Choose a comfortable sedan for solo or business travel, an SUV for families, or a van for groups and heavier luggage. Every vehicle is air-conditioned and well suited to the coastal highway, where summer humidity makes a cool cabin especially welcome.",
          "Tell us your passenger and luggage count when booking and we match the right vehicle, with child seats available on request.",
        ],
      },
      {
        heading: "Comfort and reliability",
        paragraphs: [
          "The coastal expressway is fast and well maintained, and an experienced driver knows the KAEC access points and the Jeddah bypass to keep the journey smooth. Because the transfer is private, you travel directly with no shared stops.",
          "For business guests, punctual door-to-door service removes the uncertainty of finding transport in a still-developing city where taxis can be scarce.",
        ],
      },
      {
        heading: "Fixed pricing and booking",
        paragraphs: [
          "Your fare is fixed before travel and covers the vehicle, driver, and fuel — no meter, no surge. That predictability suits both corporate budgets and family planning.",
          "Send your pickup, destination within KAEC, and timing through our <a href='/get-quote'>get a quote</a> page for a fast fixed-price confirmation, any time of day.",
        ],
      },
      {
        heading: "Onward travel from KAEC",
        paragraphs: [
          "KAEC connects easily to the wider region. We can continue north toward Yanbu on our <a href='/routes/makkah-to-yanbu'>Makkah to Yanbu route</a> pattern, or return you to Jeddah, the airport, or Makkah whenever you need.",
          "Whatever your itinerary, keeping the whole trip with one provider means consistent vehicles, fixed prices, and drivers who know the coast.",
        ],
      },
    ],
    faqs: [
      { question: "How far is KAEC from Makkah?", answer: "King Abdullah Economic City is about 180 km from Makkah, roughly a two-hour drive north along the coastal expressway past Jeddah." },
      { question: "Why take a private car to KAEC?", answer: "KAEC is a developing city where on-demand taxis can be scarce. A private transfer gives punctual, door-to-door service that suits business schedules and family travel alike." },
      { question: "Does this route pass through Jeddah?", answer: "Yes, the coastal expressway skirts Jeddah on the way north to KAEC. We can add a Jeddah stop or connect to the airport if your plans require it." },
      { question: "What areas of KAEC do you serve?", answer: "We serve the whole city, including King Abdullah Port, the business and industrial districts, and the Bay La Sun marina and resort area. Give us your exact destination when booking." },
      { question: "Is the price fixed?", answer: "Yes. You agree an all-in fixed price before travel covering the vehicle, driver, and fuel, with no meter and no surge pricing." },
      { question: "Are larger vehicles available?", answer: "Yes. Choose an SUV, van, or minibus for families and groups, and request child seats when you book." },
    ],
  },
  {
    slug: "makkah-to-yanbu",
    from: "Makkah",
    to: "Yanbu",
    category: "intercity",
    distance: "330 km",
    duration: "approx. 3 hours 30 min",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to Yanbu taxi is a private coastal transfer north to the Red Sea industrial and resort city, popular for both business and leisure travel.",
    about:
      "Our private Makkah to Yanbu transfer covers around 330 km up the Red Sea coast, connecting the Holy City to Yanbu's Royal Commission waterfront, dive resorts, and industrial city. It is a comfortable three-and-a-half-hour drive with an experienced driver and a fixed price.",
    notes: [
      "Around 330 km / 3.5 hours along the Red Sea coast",
      "Serves Yanbu resorts, the waterfront, and the industrial city",
      "Comfortable vehicles for families, divers, and business travellers",
      "Hotel-to-address private service, available 24/7",
    ],
    relatedCitySlugs: ["makkah", "yanbu"],
    metaTitle: "Makkah to Yanbu Taxi Service – Reliable Private Transfer",
    metaDescription:
      "Reserve a private car from Makkah to Yanbu (330 km, about approx. 3 hours 30 min). Comfortable vehicles for solo travellers, families and small groups.",
    keywords: [
      "makkah to yanbu taxi",
      "makkah to yanbu transfer",
      "makkah to yanbu private car",
      "makkah yanbu red sea taxi",
    ],
    sections: [
      {
        heading: "Makkah to Yanbu along the coast",
        paragraphs: [
          "Yanbu lies about 330 km north of Makkah on the Red Sea, roughly a three-and-a-half-hour drive on the coastal route past the KAEC corridor. It is a city of two halves: a busy industrial and port zone, and a relaxed resort coastline known for some of the clearest diving in the Kingdom.",
          "A private transfer suits this route well, delivering you door-to-door whether you are heading to a beach resort or a plant site. Many travellers combine it with the nearby <a href='/routes/makkah-to-madinah'>Makkah to Madinah</a> leg as part of a wider western itinerary.",
        ],
      },
      {
        heading: "Business and leisure travellers",
        paragraphs: [
          "Yanbu's petrochemical and port industries draw a steady flow of business visitors, for whom a punctual private car is far more reliable than scarce local taxis. We keep corporate schedules on time with professional drivers and comfortable vehicles.",
          "Leisure guests head for the Royal Commission waterfront, Sharm Yanbu, and the dive sites. Divers travelling with equipment should choose a larger vehicle — see our <a href='/taxi-service/yanbu'>Yanbu taxi service</a> for local rides once you arrive.",
        ],
      },
      {
        heading: "Vehicle options and luggage",
        paragraphs: [
          "Pick a sedan for one or two travellers, an SUV for families, or a van for groups and dive gear. All vehicles are air-conditioned and comfortable for the coastal drive, where humidity makes a cool cabin welcome.",
          "Tell us how many passengers and bags you have, and whether you are carrying dive or work equipment, so we can send the right vehicle.",
        ],
      },
      {
        heading: "A comfortable coastal drive",
        paragraphs: [
          "The coastal highway is fast and scenic, and your driver plans a sensible break for refreshments and prayers on the three-and-a-half-hour run. Because the ride is private, stops happen when you want them.",
          "Families with children and elderly relatives appreciate travelling together in one calm, cool vehicle rather than a shared bus with fixed timings.",
        ],
      },
      {
        heading: "Fixed pricing and booking",
        paragraphs: [
          "Your Makkah to Yanbu fare is fixed before departure and includes the vehicle, driver, and fuel, with no meter and no surge. Business and family travellers alike get a clear, predictable cost.",
          "Send your pickup, Yanbu destination, and timing through our <a href='/get-quote'>get a quote</a> page for a quick fixed-price confirmation, 24/7.",
        ],
      },
      {
        heading: "Onward travel",
        paragraphs: [
          "From Yanbu, Madinah is a short inland drive, and many guests continue there or to <a href='/taxi-service/alula'>AlUla</a> for heritage sightseeing. We can plan the onward legs with the same vehicle and driver.",
          "Whether your trip is business, diving, or pilgrimage-linked, keeping it with one provider means consistent comfort and fixed prices throughout.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the Makkah to Yanbu drive?", answer: "Yanbu is about 330 km from Makkah, roughly a three-and-a-half-hour drive along the Red Sea coastal route with a break for refreshments and prayers." },
      { question: "Do you serve Yanbu's resorts and industrial city?", answer: "Yes. We transfer to the Royal Commission waterfront, Sharm Yanbu resorts, dive centres, and the industrial and port areas. Give us your exact destination when booking." },
      { question: "Can I bring diving equipment?", answer: "Yes. Choose an SUV or van if you are travelling with dive gear and we will send a vehicle with enough space for your equipment and luggage." },
      { question: "Is a private car better than the bus?", answer: "For comfort and flexibility, yes. A private car is door-to-door, keeps families together, and stops when you want, which local buses on this route cannot match." },
      { question: "Is the price fixed?", answer: "Yes. The fare is agreed before travel and covers the vehicle, driver, and fuel with no meter and no surge pricing." },
      { question: "Is the service available at any time?", answer: "Yes, we operate 24/7 and can arrange early departures to travel through the cooler part of the day." },
    ],
  },
  {
    slug: "makkah-to-alula",
    from: "Makkah",
    to: "AlUla",
    category: "intercity",
    distance: "690 km",
    duration: "approx. 7 hours 30 min",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to AlUla taxi is a long-distance private transfer toward the Kingdom's flagship heritage destination, home to the UNESCO-listed Hegra.",
    about:
      "Our private Makkah to AlUla transfer covers roughly 690 km north through the Hejaz, a scenic but long journey of around seven and a half hours. It suits travellers who want to combine Umrah with a visit to AlUla's ancient Nabataean sites and desert landscapes, door-to-door in comfort.",
    notes: [
      "Long ~7.5 hour drive — flying via Jeddah or Madinah is faster",
      "Best for travellers who prefer door-to-door comfort and stops",
      "Comfortable vehicles with planned rest and fuel breaks",
      "Direct drop-off at AlUla resorts and the Old Town area",
    ],
    relatedCitySlugs: ["makkah", "alula"],
    metaTitle: "Makkah to AlUla Transfer – Private Chauffeur Service",
    metaDescription:
      "Get a private Makkah to AlUla transfer (690 km, about approx. 7 hours 30 min) with rest-stop flexibility and 24/7 booking. Reliable, on-time, fixed price.",
    keywords: [
      "makkah to alula taxi",
      "makkah to alula transfer",
      "makkah to alula private car",
      "makkah to hegra taxi",
    ],
    sections: [
      {
        heading: "The road from Makkah to AlUla",
        paragraphs: [
          "AlUla lies around 690 km north of Makkah, reached via the Hejaz corridor past Madinah's region. By private car the journey takes about seven and a half hours with stops. It is a rewarding overland route for those who want to see the changing desert landscapes on the way to the Kingdom's heritage jewel.",
          "In the interest of honesty, many travellers fly to AlUla via Jeddah or Madinah to save time. A private car is the right call when you prefer door-to-door comfort, want the flexibility to stop, or are travelling as a family with luggage. To fly, connect through our <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a>.",
        ],
      },
      {
        heading: "Why travellers choose the overland transfer",
        paragraphs: [
          "The overland route lets you travel on your own schedule, breaking the journey for meals, prayers, and photographs rather than fitting an airline timetable. The same driver and vehicle stay with you throughout, which is reassuring on a long desert drive.",
          "Groups find the private van or minibus especially good value, and it keeps everyone together. Explore our wider <a href='/intercity-transfers'>intercity transfer service</a> for other long routes across the Kingdom.",
        ],
      },
      {
        heading: "Vehicles for the journey",
        paragraphs: [
          "A comfortable sedan works for one or two travellers, an SUV suits families and desert touring, and a van or minibus carries larger groups. All vehicles are air-conditioned and prepared for long-distance travel with room for luggage.",
          "For touring once you arrive, an SUV is a practical choice given AlUla's spread-out sites, and our <a href='/taxi-service/alula'>AlUla taxi service</a> handles local sightseeing.",
        ],
      },
      {
        heading: "Rest stops and comfort on a long drive",
        paragraphs: [
          "A seven-and-a-half-hour drive is best broken into comfortable stages. Your driver knows the dependable service stations along the route for fuel, food, and prayers, and plans the timing around the cooler hours where possible.",
          "Because the transfer is private, the pace is entirely yours, which matters most for families with children or elderly relatives who need regular breaks.",
        ],
      },
      {
        heading: "Fixed pricing and booking",
        paragraphs: [
          "Your Makkah to AlUla fare is fixed before you travel and covers the vehicle, driver, and fuel for the whole route — no meter, no surge. That certainty is welcome on a long journey.",
          "Share your pickup, timing, and group size through our <a href='/get-quote'>get a quote</a> page and we will confirm a fixed price, with 24/7 availability for early starts.",
        ],
      },
      {
        heading: "Arriving in AlUla",
        paragraphs: [
          "We drop you directly at your AlUla resort or the Old Town area, ready to explore Hegra (Madain Salih), Elephant Rock, and the heritage sites. Many guests continue to Madinah afterwards, which we handle as a separate leg.",
          "Keeping the whole journey with one provider means consistent vehicles, fixed prices, and drivers who understand long desert routes.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the Makkah to AlUla drive?", answer: "AlUla is about 690 km from Makkah, roughly a seven-and-a-half-hour drive by private car with rest stops. Flying via Jeddah or Madinah is faster if time is your priority." },
      { question: "Should I fly or drive to AlUla?", answer: "Flying saves time, while driving offers door-to-door comfort, flexible stops, and keeps families together. We can arrange either by connecting you to the airport if you prefer to fly." },
      { question: "What vehicle suits this long route?", answer: "A sedan for one or two travellers, an SUV for families and touring, or a van or minibus for groups. All are air-conditioned and prepared for long-distance travel." },
      { question: "Can we stop along the way?", answer: "Yes. The private transfer stops for fuel, meals, and prayers on your schedule, planned by a driver who knows the reliable service areas on the route." },
      { question: "Is the price fixed for the whole trip?", answer: "Yes. You agree an all-in fixed price before travel covering the vehicle, driver, and fuel, with no meter and no surge pricing." },
      { question: "Where do you drop off in AlUla?", answer: "We drive door-to-door to your AlUla resort or the Old Town area. Local sightseeing to Hegra and other sites can be arranged through our AlUla taxi service." },
    ],
  },
  {
    // Rendered by its own layout (components/routes/MakkahDammamRouteView.tsx);
    // page copy lives in data/makkah-to-dammam-route.ts. Distance/duration
    // below also feed route cards elsewhere on the site.
    slug: "makkah-to-dammam",
    from: "Makkah",
    to: "Dammam",
    category: "intercity",
    distance: "1,250–1,300 km",
    duration: "approx. 12–13 hours",
    lastUpdated: "2026-11-21",
    h1: "Private Transfer from Makkah to Dammam",
    intro:
      "A long-distance private transfer from Makkah to Dammam, Khobar or Dhahran, about 1,250–1,300 km through Riyadh, for families, groups and travellers with heavy luggage who prefer the road to flying.",
    about:
      "Makkah to Dammam is about 1,250–1,300 km by road, normally through Riyadh, with roughly 12–13 hours of driving before stops. Flying from Jeddah is much faster; the private car suits families, groups and heavy luggage.",
    notes: [
      "About 1,250–1,300 km, roughly 12–13 hours of driving before stops",
      "Flying from Jeddah is much faster; the car suits families, groups and luggage",
      "Stops for prayer, meals and fuel agreed with you; overnight in Riyadh on request",
      "Drop-off in Dammam, Khobar or Dhahran",
    ],
    relatedCitySlugs: ["makkah", "dammam", "riyadh"],
    metaTitle: "Makkah to Dammam Private Transfer | Long-Distance Taxi",
    metaDescription:
      "Need a private transfer from Makkah to Dammam? Request a quote for a long-distance journey with vehicle options for your passengers and luggage.",
    keywords: [
      "makkah to dammam private transfer",
      "makkah to dammam taxi",
      "makkah to dammam by road",
      "makkah to dammam private car",
      "makkah to eastern province taxi",
    ],
    faqs: MAKKAH_DAMMAM_FAQS,
  },
  {
    slug: "makkah-to-abha",
    from: "Makkah",
    to: "Abha",
    category: "intercity",
    distance: "630 km",
    duration: "approx. 7 hours",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to Abha taxi is a private long-distance transfer south to the cool, green highlands of Asir, a favourite summer escape.",
    about:
      "Our private Makkah to Abha transfer covers around 630 km south to the Asir mountains, a scenic seven-hour drive that climbs to over 2,000 metres. It is popular with families seeking cooler weather after Umrah and with travellers exploring Saudi Arabia's green south.",
    notes: [
      "Around 630 km / 7 hours south to the Asir highlands",
      "Flying is quicker; the car suits families and flexible stops",
      "Comfortable vehicles for the climb into cooler mountain air",
      "Direct drop-off at Abha and Khamis Mushait addresses",
    ],
    relatedCitySlugs: ["makkah", "abha"],
    metaTitle: "Book a Makkah to Abha Transfer – Private Car Service",
    metaDescription:
      "Private transfer from Makkah to Abha (630 km, about approx. 7 hours) with a fixed fare and door-to-door service. Reserve online or via WhatsApp.",
    keywords: [
      "makkah to abha taxi",
      "makkah to abha transfer",
      "makkah to abha private car",
      "makkah to asir taxi",
    ],
    sections: [
      {
        heading: "Makkah to the Asir highlands",
        paragraphs: [
          "Abha lies about 630 km south of Makkah in the Asir mountains, and the drive of around seven hours climbs steadily into some of the coolest, greenest country in the Kingdom. The route rewards travellers with changing scenery as the desert gives way to terraced highlands.",
          "Flying to Abha is quicker for a simple trip, but a private car lets families travel door-to-door and stop along the way. Many combine the highlands with a cooler-weather break after the heat of the Holy City; see our <a href='/taxi-service/abha'>Abha taxi service</a> for local sightseeing on arrival.",
        ],
      },
      {
        heading: "A popular summer escape",
        paragraphs: [
          "Asir is one of Saudi Arabia's top domestic destinations in summer, when families head for its mist, mountain viewpoints, and mild temperatures. A private transfer is a comfortable way to reach it without the constraints of flights or buses.",
          "The region around Abha and neighbouring Khamis Mushait offers cable cars, highland resorts at Al Soudah, and the terraced landscapes of the south, all easily explored by private car once you arrive.",
        ],
      },
      {
        heading: "Vehicles for the mountain route",
        paragraphs: [
          "A sedan suits one or two travellers, but families often prefer an SUV for the comfort and stability on the climbing mountain roads, and larger groups take a van or minibus. All vehicles are air-conditioned and well maintained for the gradient.",
          "Tell us your group size and luggage when booking, and request child seats if you are travelling with young children.",
        ],
      },
      {
        heading: "Comfort and rest stops",
        paragraphs: [
          "A seven-hour drive with a mountain climb is best broken with sensible stops for meals, prayers, and photographs. Your driver knows the reliable service areas and the safest pace for the winding final stretch into the highlands.",
          "Because the transfer is private, the timing is yours, which matters for families with children and elderly relatives who value regular breaks.",
        ],
      },
      {
        heading: "Fixed pricing and booking",
        paragraphs: [
          "Your Makkah to Abha fare is fixed before travel and covers the vehicle, driver, and fuel, with no meter and no surge. That predictability makes planning a family trip straightforward.",
          "Share your pickup, timing, and group size through our <a href='/get-quote'>get a quote</a> page for a fast fixed-price confirmation, 24/7.",
        ],
      },
      {
        heading: "Exploring Asir",
        paragraphs: [
          "We drop you directly at your Abha or Khamis Mushait address, ready to enjoy the cable car, Al Soudah, and the mountain viewpoints. Local sightseeing can continue with the same trusted service throughout your stay.",
          "For onward travel across the south toward Najran or Jazan, we can plan the legs with consistent vehicles and fixed prices.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the Makkah to Abha drive?", answer: "Abha is about 630 km from Makkah, roughly a seven-hour drive that climbs into the Asir highlands. Flying is quicker, but a private car offers door-to-door comfort and flexible stops." },
      { question: "Why do people travel from Makkah to Abha?", answer: "Asir is a popular summer escape for its cool, green highlands. Many families visit after Umrah for milder weather, mountain viewpoints, and resorts around Al Soudah." },
      { question: "What vehicle is best for the mountain roads?", answer: "An SUV is a comfortable, stable choice for the climbing roads and families, while vans and minibuses suit larger groups. All vehicles are air-conditioned and maintained for the gradient." },
      { question: "Can we stop along the way?", answer: "Yes. The private transfer stops for meals, prayers, and photos on your schedule, with a driver who knows the reliable service areas and a safe pace for the mountain stretch." },
      { question: "Is the price fixed?", answer: "Yes. The all-in fare is agreed before travel and covers the vehicle, driver, and fuel, with no meter and no surge pricing." },
      { question: "Do you drop off in Khamis Mushait too?", answer: "Yes. We drive door-to-door to both Abha and neighbouring Khamis Mushait, and can arrange local sightseeing across the Asir highlands." },
    ],
  },
  {
    slug: "makkah-to-jeddah-airport",
    from: "Makkah",
    to: "Jeddah Airport",
    category: "airport",
    distance: "95 km",
    duration: "approx. 1 hour 20 min",
    lastUpdated: "2026-08-05",
    intro:
      "The Makkah to Jeddah airport taxi is a private departure transfer for pilgrims flying home, timed carefully around your check-in from your hotel near the Haram.",
    about:
      "Our private Makkah to Jeddah airport transfer covers roughly 95 km from your Makkah hotel to King Abdulaziz International Airport, a journey of about an hour and twenty minutes. We time the pickup to your flight, help with luggage, and drop you at the correct terminal for a calm, unhurried departure.",
    notes: [
      "Pickup from any Makkah hotel near the Haram or Jabal Omar",
      "Drop-off at the correct JED terminal for your airline",
      "Pickup timed to your flight, with luggage assistance",
      "Family vans for pilgrims travelling with extra bags and Zamzam water",
    ],
    relatedCitySlugs: ["makkah", "jeddah"],
    metaTitle: "Private Taxi: Makkah to Jeddah Airport (JED)",
    metaDescription:
      "Travel from Makkah to Jeddah Airport (95 km, about approx. 1 hour 20 min) in a comfortable private vehicle with a professional driver. No shared rides, fixed price.",
    keywords: [
      "makkah to jeddah airport taxi",
      "makkah to jed transfer",
      "makkah hotel to jeddah airport",
      "makkah to jeddah airport departure taxi",
    ],
    sections: [
      {
        heading: "The departure journey from Makkah",
        paragraphs: [
          "When Umrah is complete, the last road of your pilgrimage is usually the one back to Jeddah's King Abdulaziz International Airport. The transfer covers around 95 km and takes about an hour and twenty minutes, but the timing is what matters most — we build in a comfortable margin for check-in, security, and the pilgrim-season crowds.",
          "This is the natural counterpart to our arrival service on the <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a>, closing the loop on your journey with the same reliable, fixed-price care.",
        ],
      },
      {
        heading: "Timed to your flight",
        paragraphs: [
          "Departing pilgrims often underestimate how busy JED becomes during peak Umrah and Hajj seasons. We ask for your flight time and terminal, then set a pickup that gives you a sensible buffer without leaving you waiting for hours. Your driver knows current traffic patterns on the Makkah expressway and the airport approach.",
          "If you are unsure how much time to allow, we advise based on the season and your airline, so you reach the terminal calm rather than rushed.",
        ],
      },
      {
        heading: "Luggage and the right terminal",
        paragraphs: [
          "Pilgrims almost always leave with more than they arrived with — Zamzam water, gifts, and extra bags. We recommend an SUV or van so everything travels comfortably, and your driver helps load and unload at the terminal kerb.",
          "King Abdulaziz Airport operates from Terminal 1 and, in peak season, the dedicated Hajj Terminal. We drop you at the correct one for your airline, so there is no last-minute scramble. Our <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a> page explains the terminal layout in more detail.",
        ],
      },
      {
        heading: "Comfortable for families and elders",
        paragraphs: [
          "After days of worship, a calm final ride matters. A private car keeps your family together, lets elderly travellers rest, and avoids the stress of finding transport at the hotel or negotiating a fare on departure day. Child seats are available on request.",
          "Because the transfer is private, there is no shared waiting and no diversion to collect other passengers — just a direct ride to the airport.",
        ],
      },
      {
        heading: "Fixed pricing and 24/7 pickups",
        paragraphs: [
          "The fare is agreed before travel and does not change with traffic, an early-morning departure, or the pilgrim-season rush. There is no meter and no surge, so your final transfer is as predictable as your first.",
          "Flights leave at all hours, and we operate 24/7 to match. Send your flight details through our <a href='/get-quote'>get a quote</a> page and we confirm a fixed price and a pickup time.",
        ],
      },
      {
        heading: "Booking your departure transfer",
        paragraphs: [
          "Tell us your Makkah hotel, flight date and time, airline, and the number of passengers and bags. We confirm the vehicle, the pickup time, and an all-in price, so your departure is handled from hotel lobby to terminal kerb.",
          "Planning the rest of your trip? Our <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> and <a href='/taxi-service/makkah'>Makkah taxi service</a> cover the days before you fly home.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the transfer from Makkah to Jeddah airport?", answer: "It is about 95 km and normally takes around an hour and twenty minutes, though we build in extra time for check-in and the pilgrim-season crowds at the airport." },
      { question: "How early should the driver collect me for my flight?", answer: "We set the pickup based on your flight time, terminal, and the season, allowing a sensible buffer for traffic, check-in, and security so you arrive calm rather than rushed." },
      { question: "Which terminal will you drop me at?", answer: "King Abdulaziz Airport uses Terminal 1 and, in peak season, the dedicated Hajj Terminal. We drop you at the correct one for your airline so there is no last-minute confusion." },
      { question: "Can you carry extra luggage and Zamzam water?", answer: "Yes. We recommend an SUV or van for the extra bags and Zamzam water pilgrims carry home, and your driver helps load and unload at the terminal." },
      { question: "Is the price fixed for the departure transfer?", answer: "Yes. The fare is agreed before travel with no meter and no surge, so an early departure or heavy traffic will not change what you pay." },
      { question: "Do you operate for very early or late flights?", answer: "Yes, we run 24/7. Whatever the hour of your departure, we time the pickup to your flight and have a vehicle ready." },
    ],
  },
];
