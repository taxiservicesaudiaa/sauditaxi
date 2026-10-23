import type { PointTransferV2Page } from "./types";
import { DMM_STATUS_NOTICE } from "../airport-status";

/**
 * Dammam V2 point-transfer pages — city/Corniche/business-district transfers,
 * hotel transfers and King Abdulaziz Port pages redesigned onto
 * PointTransferV2View. Replaces the corresponding entries in
 * data/dammam/attractions.ts and port.ts (see lib/point-transfers-v2.ts).
 */
export const dammamPointTransfersV2: PointTransferV2Page[] = [
  // ── Airport ↔ City centre ────────────────────────────────────────────────
  {
    slug: "dammam-airport-to-dammam-city",
    citySlug: "dammam",
    from: "King Fahd International Airport",
    to: "Dammam City",
    h1: "King Fahd Airport to Dammam City Taxi",
    metaTitle: "King Fahd Airport to Dammam City Taxi | Private Transfer",
    metaDescription:
      "Book a fixed-price King Fahd Airport (DMM) to Dammam City taxi with meet and greet, flight tracking and English-speaking drivers. Door-to-door, 24/7.",
    distance: "~22 km",
    duration: "22-28 min",
    content: {
      category: "attraction",
      eyebrow: "Airport arrival to the city centre",
      dek: "King Fahd International is the largest airport in the world by land area, and sits well north of the city it serves — a reliable ride matters from the moment you land.",
      stats: [
        { label: "Distance", value: "~22 km" },
        { label: "Drive time", value: "22-28 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you land",
          items: [
            "Allow extra time for the walk from your gate to the pickup point — the terminal is unusually large",
            "Share your flight number so the pickup adjusts automatically to your actual landing time",
            "Mention if you need a child seat so it's ready before you arrive",
          ],
        },
        {
          type: "journeyOverview",
          heading: "The drive into Dammam",
          paragraphs: [
            "The route runs south along the main highway network, passing the growing business park district before reaching central Dammam and its King Saud Street commercial core. Peak commuting hours and prayer times can push the drive toward the upper end of the window, but the fixed fare doesn't move with it.",
          ],
        },
        {
          type: "checklist",
          heading: "Practical checklist",
          items: [
            "Door-to-door to any city address — hotel, office or home",
            "Ask about a short stop at the Corniche en route if you'd like to see the waterfront first",
            "Business travellers: corporate receipts available on request",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Dammam City to King Fahd Airport", href: "/dammam/dammam-city-to-dammam-airport" },
            { label: "King Fahd Airport to Dammam Corniche", href: "/dammam/dammam-airport-to-dammam-corniche" },
          ],
        },
      ],
      faqs: [
        { question: "How far is King Fahd Airport from Dammam city centre?", answer: "Around 22 km, a 22-28 minute drive — plus a few extra minutes to walk from arrivals to the pickup point given the airport's scale." },
        { question: "Where will my driver meet me?", answer: "Inside the arrivals hall with a printed name board, after you clear the terminal and collect your luggage." },
        { question: "Is the price fixed even in heavy traffic?", answer: "Yes — agreed before you travel, with no meter and no surge pricing." },
        { question: "Can you drop me at a specific hotel or office?", answer: "Yes, door-to-door to any address — share the exact location when you book." },
      ],
    },
  },
  {
    slug: "dammam-city-to-dammam-airport",
    citySlug: "dammam",
    from: "Dammam City",
    to: "King Fahd International Airport",
    h1: "Dammam City to King Fahd Airport Taxi",
    metaTitle: "Dammam City to King Fahd Airport Taxi | Private Transfer",
    metaDescription:
      "Reliable Dammam city to King Fahd Airport (DMM) transfer with on-time pickup, luggage help and fixed prices. Professional drivers, door-to-door, 24/7.",
    distance: "~22 km",
    duration: "22-28 min",
    content: {
      category: "attraction",
      eyebrow: "Departure planning for a large airport",
      dek: "Because King Fahd Airport sits well outside the city and is unusually spread out, leaving enough time matters more here than at a compact terminal.",
      stats: [
        { label: "Distance", value: "~22 km" },
        { label: "Drive time", value: "22-28 min", emphasis: true },
        { label: "Suggested lead time", value: "~3 hrs before international" },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "How early to leave",
          stats: [
            { label: "International flights", value: "~3 hrs before departure" },
            { label: "Domestic flights", value: "~2 hrs before departure" },
          ],
          paragraphs: [
            "That guide already accounts for the roughly 25-minute drive plus a traffic buffer. We also factor in the time needed to walk from drop-off to check-in once you arrive, since the terminal complex is large.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Door to door, no street hailing",
          paragraphs: [
            "Your driver meets you at the hotel lobby or entrance at the agreed time and loads your luggage into an air-conditioned vehicle. If you're checking out, we can time the pickup around checkout so there's no awkward wait in reception with bags.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Fahd Airport to Dammam City", href: "/dammam/dammam-airport-to-dammam-city" },
            { label: "Dammam Corniche to King Fahd Airport", href: "/dammam/dammam-corniche-to-dammam-airport" },
          ],
        },
      ],
      faqs: [
        { question: "How early should I leave Dammam city for my flight?", answer: "About three hours before an international flight and two for domestic, plus the ~25-minute drive and a traffic buffer." },
        { question: "Will you collect me from any address?", answer: "Yes — door-to-door from any hotel, office or home in the city." },
        { question: "Which terminal will you drop me at?", answer: "The entrance for the terminal your airline uses — share your flight details and we'll confirm in advance." },
        { question: "Can I book a very early or late departure?", answer: "Yes, 24/7 — many Dammam flights leave before dawn or late at night." },
      ],
    },
  },

  // ── Airport ↔ Corniche ───────────────────────────────────────────────────
  {
    slug: "dammam-airport-to-dammam-corniche",
    citySlug: "dammam",
    from: "King Fahd International Airport",
    to: "Dammam Corniche",
    h1: "King Fahd Airport to Dammam Corniche Taxi",
    metaTitle: "King Fahd Airport to Dammam Corniche Taxi | Transfer",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to Dammam Corniche taxi with meet and greet, flight tracking and door-to-door service to the waterfront. Available 24/7.",
    distance: "~24 km",
    duration: "25-32 min",
    content: {
      category: "attraction",
      eyebrow: "Airport arrival to the waterfront",
      dek: "Dammam's showcase waterfront — parks, promenades and family attractions along the Gulf — reached directly from arrivals.",
      stats: [
        { label: "Distance", value: "~24 km" },
        { label: "Drive time", value: "25-32 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "What's at the Corniche",
          paragraphs: [
            "The Corniche stretches along the Gulf with landscaped parks, fountains, waterfront restaurants and family-friendly promenades, and is home to several of the city's best-known hotels. Your driver takes you as close to your hotel or a specific park entrance as road access allows.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Family arrivals",
          paragraphs: [
            "Families flying in for a waterfront break particularly value this route, since it removes the need to negotiate transport with young children and luggage in tow — a child seat can be arranged in advance at no extra cost.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Dammam Corniche to King Fahd Airport", href: "/dammam/dammam-corniche-to-dammam-airport" },
            { label: "King Fahd Airport to Dammam City", href: "/dammam/dammam-airport-to-dammam-city" },
          ],
        },
      ],
      faqs: [
        { question: "How far is the airport from the Corniche?", answer: "Around 24 km, a 25-32 minute drive — allow a little extra time for the walk from your gate given the airport's size." },
        { question: "Can you drop us right at our Corniche hotel?", answer: "Yes, door-to-door as close as road access allows." },
        { question: "Do you provide child seats?", answer: "Yes, on request when booking, at no extra cost." },
        { question: "Is the price fixed even with airport delays?", answer: "Yes — we track your flight, so a delay shifts the pickup time, not the price." },
      ],
    },
  },
  {
    slug: "dammam-corniche-to-dammam-airport",
    citySlug: "dammam",
    from: "Dammam Corniche",
    to: "King Fahd International Airport",
    h1: "Dammam Corniche to King Fahd Airport Taxi",
    metaTitle: "Dammam Corniche to King Fahd Airport Taxi | Transfer",
    metaDescription:
      "Book a fixed-price Dammam Corniche to King Fahd Airport (DMM) transfer with on-time pickup, luggage help and comfortable vehicles. Door-to-door, 24/7.",
    distance: "~24 km",
    duration: "25-32 min",
    content: {
      category: "attraction",
      eyebrow: "Waterfront departure",
      dek: "Finishing a beach and waterfront stay — a comfortable ride back inland to a very large airport, with extra time built in.",
      stats: [
        { label: "Distance", value: "~24 km" },
        { label: "Drive time", value: "25-32 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing your departure",
          paragraphs: [
            "Aim to reach the airport around three hours before an international departure and two before domestic, plus the drive and a sensible buffer — the terminal's unusual size means extra walking time from drop-off to check-in.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Family luggage",
          paragraphs: [
            "Families finishing a beach and waterfront stay often carry extra luggage — this is accounted for when the vehicle is matched to your group, with larger vans available at no separate charge.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Fahd Airport to Dammam Corniche", href: "/dammam/dammam-airport-to-dammam-corniche" },
            { label: "Dammam City to King Fahd Airport", href: "/dammam/dammam-city-to-dammam-airport" },
          ],
        },
      ],
      faqs: [
        { question: "How long from the Corniche to the airport?", answer: "Around 24 km, usually 25-32 minutes, plus extra time for the large terminal itself." },
        { question: "Will the driver collect me from my hotel lobby?", answer: "Yes, door-to-door from your hotel entrance or address." },
        { question: "Can you carry a family with beach luggage and strollers?", answer: "Yes — vehicles are sized to your group and bags, with larger vans available at no separate charge." },
        { question: "Is the fare fixed if the drive takes longer?", answer: "Yes, agreed before travel regardless of traffic." },
      ],
    },
  },

  // ── Airport ↔ Business district ─────────────────────────────────────────
  {
    slug: "dammam-airport-to-business-district",
    citySlug: "dammam",
    from: "King Fahd International Airport",
    to: "Dammam Business District",
    h1: "King Fahd Airport to Dammam Business District Taxi",
    metaTitle: "King Fahd Airport to Dammam Business District Taxi",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to Dammam business district transfer with flight tracking and meet and greet. Trusted by energy-sector travellers, 24/7.",
    distance: "~19 km",
    duration: "20-25 min",
    content: {
      category: "service",
      eyebrow: "For the working traveller",
      dek: "Dammam is the commercial heart of the Eastern Province's energy and petrochemical sector — this is one of the quicker legs from the terminal.",
      stats: [
        { label: "Distance", value: "~19 km" },
        { label: "Drive time", value: "20-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "Into the commercial core",
          paragraphs: [
            "The route runs south past the business park district toward the office towers and commercial streets that anchor Dammam's economy — whether your destination is an energy-company headquarters, a bank, or a meeting venue, your driver takes you directly there.",
          ],
        },
        {
          type: "checklist",
          heading: "For corporate travellers",
          items: [
            "Corporate receipts and repeat-booking arrangements available",
            "Every airport pickup includes flight tracking, so a delayed inbound flight never means a missed connection to your meeting",
            "Onward transfers across the metro area (Khobar, Dhahran) available at the same fixed-price standard",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Business District to King Fahd Airport", href: "/dammam/business-district-to-dammam-airport" },
            { label: "King Fahd Airport to Al Khobar", href: "/routes/dammam-airport-to-khobar" },
          ],
        },
      ],
      faqs: [
        { question: "How long is the drive to the business district?", answer: "Around 19 km, usually 20-25 minutes — one of the quicker routes from the terminal." },
        { question: "Can you provide a receipt for corporate travel?", answer: "Yes, and companies with recurring travel can set up a repeat-booking arrangement." },
        { question: "Can you carry laptop bags and equipment cases?", answer: "Yes, vehicles are sized to your luggage and equipment, handled with care at no extra charge." },
        { question: "Is the price fixed for business bookings?", answer: "Yes, agreed before travel with no meter and no surge pricing." },
      ],
    },
  },
  {
    slug: "business-district-to-dammam-airport",
    citySlug: "dammam",
    from: "Dammam Business District",
    to: "King Fahd International Airport",
    h1: "Dammam Business District to King Fahd Airport Taxi",
    metaTitle: "Dammam Business District to King Fahd Airport Taxi",
    metaDescription:
      "Book a fixed-price Dammam business district to King Fahd Airport (DMM) transfer with on-time pickup and corporate booking options. Door-to-door, 24/7.",
    distance: "~19 km",
    duration: "20-25 min",
    content: {
      category: "service",
      eyebrow: "Meeting to flight, on schedule",
      dek: "A late pickup can mean a missed flight after a full day of meetings — this leg is planned around your actual meeting schedule, not a fixed clock.",
      stats: [
        { label: "Distance", value: "~19 km" },
        { label: "Drive time", value: "20-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Timed around your meeting schedule",
          paragraphs: [
            "If your meeting runs long, a quick message lets us adjust the pickup — the fixed price stays the same. Business travellers moving between Dammam, Khobar and Dhahran on the same day often build a transfer straight into their itinerary, and we can coordinate multiple pickups across a single visit.",
          ],
        },
        {
          type: "checklist",
          heading: "For corporate travellers",
          items: [
            "Direct pickup from your office entrance or lobby — no waiting on the street",
            "Corporate accounts and receipts available",
            "Space for equipment cases and business luggage",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Fahd Airport to Business District", href: "/dammam/dammam-airport-to-business-district" },
            { label: "Dammam to Riyadh", href: "/routes/dammam-to-riyadh" },
          ],
        },
      ],
      faqs: [
        { question: "How long from the business district to the airport?", answer: "Around 19 km, usually 20-25 minutes, one of the quicker airport runs in the city." },
        { question: "Can the pickup be arranged around a meeting schedule?", answer: "Yes — tell us your expected meeting end time and flight; if plans change, a quick message lets us adjust." },
        { question: "Do you offer corporate accounts?", answer: "Yes, for recurring travel with receipts through our team." },
        { question: "Can you handle multiple pickups across one visit?", answer: "Yes — for example between meetings in Dammam, Khobar and Dhahran." },
      ],
    },
  },

  // ── Airport ↔ Hotels (generic, city-wide) ───────────────────────────────
  {
    slug: "dammam-airport-to-hotels",
    citySlug: "dammam",
    from: "King Fahd International Airport",
    to: "Dammam Hotels",
    h1: "King Fahd Airport to Dammam Hotels Transfer",
    metaTitle: "King Fahd Airport to Dammam Hotels | Private Taxi",
    metaDescription:
      "Private transfer from King Fahd Airport (DMM) to any Dammam hotel, with flight tracking and free waiting time. Your confirmed quotation sets the price. 24/7.",
    distance: "35-45 km",
    content: {
      category: "hotel",
      eyebrow: "One transfer, every hotel in the city",
      dek: "Whether a Corniche-facing five-star or a value-focused city-centre property, the same private airport pickup applies — with flight tracking and a price set in your confirmed quotation.",
      stats: [
        { label: "Distance", value: "35-45 km" },
        { label: "Flight tracking", value: "Included", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: DMM_STATUS_NOTICE.heading,
          paragraphs: DMM_STATUS_NOTICE.paragraphs,
        },
        {
          type: "pickupPlanning",
          heading: "Airport pickup, wherever you're staying",
          paragraphs: [
            "We track your flight, and your driver meets you at the meeting point confirmed in your booking, so once you clear the terminal you're heading straight for your hotel. Free waiting time is included for delayed landings and slow immigration queues.",
          ],
        },
        {
          type: "locationContext",
          heading: "Every district covered",
          paragraphs: [
            "Dammam's hotels span several distinct districts — the Corniche waterfront, the city centre around King Saud Street, Prince Mohammed bin Fahd Road, and the business park near the airport. Drivers know each district well, so whichever area your hotel sits in, the route is planned efficiently rather than generically.",
          ],
        },
        {
          type: "checklist",
          heading: "Booking checklist",
          items: [
            "Share your hotel name and we confirm the fare and pickup directly",
            "Child seats and larger vehicles available on request",
            "24/7 for early and late arrivals",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Dammam Hotels to King Fahd Airport", href: "/dammam/hotels-to-dammam-airport" },
            { label: "Dammam Airport transfers", href: "/airport-transfer/dammam-airport" },
          ],
        },
      ],
      faqs: [
        { question: "Do you cover every hotel in Dammam?", answer: "Yes — private transfers to every major hotel, from five-star Corniche properties to business and budget hotels in the centre, priced in your quotation." },
        { question: "How far is my hotel from the airport?", answer: "Hotels in central Dammam and on the Corniche are roughly 35-45 km from the airport by road; drive time depends on your district and traffic." },
        { question: "Where will my driver meet me?", answer: "At the meeting point confirmed in your booking. We track your flight, and free waiting time is included." },
        { question: "How is the price set?", answer: "Share your hotel and flight details and we reply with a quotation; the confirmed quotation sets the price, since different hotels sit at different distances." },
      ],
    },
  },
  {
    slug: "hotels-to-dammam-airport",
    citySlug: "dammam",
    from: "Dammam Hotels",
    to: "King Fahd International Airport",
    h1: "Dammam Hotels to King Fahd Airport Transfer",
    metaTitle: "Dammam Hotels to King Fahd Airport | Private Taxi",
    metaDescription:
      "Private transfer from any Dammam hotel to King Fahd Airport (DMM), with lobby pickup and luggage help. Your confirmed quotation sets the price. 24/7.",
    distance: "35-45 km",
    content: {
      category: "hotel",
      eyebrow: "From any hotel, to your flight",
      dek: "Because King Fahd Airport is unusually large by land area, we plan a comfortable buffer beyond the drive itself.",
      stats: [
        { label: "Distance", value: "35-45 km", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: DMM_STATUS_NOTICE.heading,
          paragraphs: [DMM_STATUS_NOTICE.paragraphs[0]],
        },
        {
          type: "timingPanel",
          heading: "Timing your pickup",
          paragraphs: [
            "Aim to reach the airport around three hours before an international departure and two before domestic, plus the drive and a margin for the terminal's size. Share your flight time and hotel name and we'll recommend a suitable pickup.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Lobby pickup, any hotel",
          paragraphs: [
            "Your driver meets you at the lobby and loads your luggage into an air-conditioned vehicle sized to your group — applying equally to five-star Corniche hotels, business properties, and value-focused city-centre options.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Fahd Airport to Dammam Hotels", href: "/dammam/dammam-airport-to-hotels" },
            { label: "Dammam Airport transfers", href: "/airport-transfer/dammam-airport" },
          ],
        },
      ],
      faqs: [
        { question: "Do you collect from every hotel?", answer: "Yes — every major hotel in the city, from Corniche five-star to city-centre budget options." },
        { question: "How early should I leave?", answer: "About three hours before international departures, two for domestic, plus the drive time." },
        { question: "Will the driver collect me from the lobby?", answer: "Yes, door-to-door from your hotel entrance." },
        { question: "How is the fare set?", answer: "Share your hotel and flight time and we reply with a quotation; the confirmed quotation sets the price for your specific starting point." },
      ],
    },
  },

  // ── King Abdulaziz Port ──────────────────────────────────────────────────
  {
    slug: "dammam-airport-to-king-abdulaziz-port",
    citySlug: "dammam",
    from: "King Fahd International Airport",
    to: "King Abdulaziz Port",
    h1: "King Fahd Airport to King Abdulaziz Port Transfer",
    metaTitle: "King Fahd Airport to King Abdulaziz Port | Taxi",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to King Abdulaziz Port transfer with meet and greet, flight tracking and luggage help. For cruise guests and crew, 24/7.",
    distance: "~30 km",
    duration: "32-38 min",
    content: {
      category: "port",
      eyebrow: "Flying in to board",
      dek: "King Fahd Airport arrivals connecting to a ship or crew join at Dammam's principal Gulf seaport — planned around your boarding window, not a generic drop-off time.",
      stats: [
        { label: "Distance", value: "~30 km" },
        { label: "Drive time", value: "32-38 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you fly",
          items: [
            "Give us your reporting or boarding time alongside your flight number so the pickup accounts for both",
            "A berth number or terminal reference from your shipping agent helps position the car precisely",
            "Crew changes: one vehicle can carry several people and their kit together",
          ],
        },
        {
          type: "locationContext",
          heading: "Getting through the port",
          paragraphs: [
            "King Abdulaziz Port handles cargo, container and passenger traffic for the Eastern Province, and terminal approaches can be busy around shift changes and cargo movements. Drivers know which access roads apply and take you as close to embarkation as port security permits.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Abdulaziz Port to King Fahd Airport", href: "/dammam/king-abdulaziz-port-to-dammam-airport" },
            { label: "Dammam Hotels to King Abdulaziz Port", href: "/dammam/dammam-hotels-to-king-abdulaziz-port" },
          ],
        },
      ],
      faqs: [
        { question: "Can you get me there in time for embarkation?", answer: "Share your flight and boarding window when booking and we'll build in a margin for terminal formalities on top of the drive." },
        { question: "Do you help with luggage and kit bags?", answer: "Yes, the vehicle is sized to your group and bags in advance." },
        { question: "Can you transfer a whole ship's crew together?", answer: "Yes, a vehicle large enough for several people and their kit in one trip." },
        { question: "Is the price fixed if my flight is delayed?", answer: "Yes — we track your flight and reasonable waiting is included." },
      ],
    },
  },
  {
    slug: "king-abdulaziz-port-to-dammam-airport",
    citySlug: "dammam",
    from: "King Abdulaziz Port",
    to: "King Fahd International Airport",
    h1: "King Abdulaziz Port to King Fahd Airport Transfer",
    metaTitle: "King Abdulaziz Port to King Fahd Airport | Taxi",
    metaDescription:
      "Book a fixed-price King Abdulaziz Port to King Fahd Airport (DMM) transfer with on-time pickup from the port gate and luggage help. Cruise and crew, 24/7.",
    distance: "~30 km",
    duration: "32-38 min",
    content: {
      category: "port",
      eyebrow: "Disembarking to catch a flight",
      dek: "Cruise and crew clearance at King Abdulaziz Port rarely runs to a published clock — the pickup is planned around your flight, worked backward from your departure time.",
      stats: [
        { label: "Distance", value: "~30 km" },
        { label: "Drive time", value: "32-38 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing the pickup",
          paragraphs: [
            "Cruise lines publish disembarkation groups and a clearance time; ships assign crew sign-off times. Tell us your flight departure and expected clearance time and we work backward from it — as a guide, aim to reach the airport around three hours before an international departure, two for domestic.",
          ],
          note: "A margin for slow disembarkation is already built into the pickup we quote — it won't cost extra.",
        },
        {
          type: "scenarios",
          heading: "Who this is for",
          items: [
            { title: "Cruise passengers flying home", description: "The final step of the holiday — we get you to DMM without hunting for a taxi on a busy turnaround morning." },
            { title: "Crew signing off", description: "Sign-off timing can slip; we stay flexible and the price stays fixed regardless of when you clear the gate." },
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Fahd Airport to King Abdulaziz Port", href: "/dammam/dammam-airport-to-king-abdulaziz-port" },
            { label: "King Abdulaziz Port to Dammam Hotels", href: "/dammam/king-abdulaziz-port-to-dammam-hotels" },
          ],
        },
      ],
      faqs: [
        { question: "What time will you pick me up from the port?", answer: "We work back from your flight — roughly three hours before international, two for domestic, plus drive time and buffer." },
        { question: "What if disembarkation is delayed?", answer: "We plan around your expected clearance and reasonable waiting is included." },
        { question: "Can you take a group of crew together?", answer: "Yes, vehicles large enough for several crew and their kit in one trip." },
        { question: "Can you offer an intercity trip instead?", answer: "Yes — routes like Dammam to Riyadh at fixed prices." },
      ],
    },
  },
  {
    slug: "dammam-hotels-to-king-abdulaziz-port",
    citySlug: "dammam",
    from: "Dammam Hotels",
    to: "King Abdulaziz Port",
    h1: "Dammam Hotels to King Abdulaziz Port Transfer",
    metaTitle: "Dammam Hotels to King Abdulaziz Port | Cruise Taxi",
    metaDescription:
      "Fixed-price transfer from your Dammam hotel to King Abdulaziz Port with a professional driver, luggage help and no surge pricing. Cruise guests, 24/7.",
    distance: "8-20 km",
    duration: "12-25 min",
    content: {
      category: "port",
      eyebrow: "Local hop to embarkation",
      dek: "For guests who spent a night or two in Dammam before their cruise — a short, well-timed hotel-to-quay run.",
      stats: [
        { label: "Distance", value: "8-20 km" },
        { label: "Drive time", value: "12-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Lobby pickup, timed to checkout",
          paragraphs: [
            "Collected at your hotel entrance, timed around checkout if needed. City-centre hotels near the port road are closer; Corniche properties sit a little further away.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Planning your departure",
          paragraphs: [
            "Work back from your boarding or reporting time; roads near the port can slow at peak hours and prayer times, so we build in a sensible buffer.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Abdulaziz Port to Dammam Hotels", href: "/dammam/king-abdulaziz-port-to-dammam-hotels" },
            { label: "King Fahd Airport to King Abdulaziz Port", href: "/dammam/dammam-airport-to-king-abdulaziz-port" },
          ],
        },
      ],
      faqs: [
        { question: "How far is my hotel from the port?", answer: "Most hotels are 8-20 km away, about 12-25 minutes; city-centre hotels are usually closer." },
        { question: "When should I leave to reach the port on time?", answer: "We work back from your boarding time with a sensible traffic buffer." },
        { question: "Will the driver collect me from the lobby?", answer: "Yes, and we can time it around checkout." },
        { question: "Do you also transfer from the port back to a hotel?", answer: "Yes — see our King Abdulaziz Port to Dammam Hotels transfer." },
      ],
    },
  },
  {
    slug: "king-abdulaziz-port-to-dammam-hotels",
    citySlug: "dammam",
    from: "King Abdulaziz Port",
    to: "Dammam Hotels",
    h1: "King Abdulaziz Port to Dammam Hotels Transfer",
    metaTitle: "King Abdulaziz Port to Dammam Hotels | Cruise Taxi",
    metaDescription:
      "Just arrived by sea? Book a fixed-price King Abdulaziz Port to Dammam hotel transfer with meet and greet at the terminal and luggage help. Door-to-door, 24/7.",
    distance: "8-20 km",
    duration: "12-25 min",
    content: {
      category: "port",
      eyebrow: "Arriving by sea",
      dek: "King Abdulaziz Port handles cargo, container and passenger traffic in equal measure — disembarkation timing depends on which queue you're in, so the pickup is planned loosely rather than to the minute.",
      stats: [
        { label: "Distance", value: "8-20 km" },
        { label: "Drive time", value: "12-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Meeting you after disembarkation",
          paragraphs: [
            "Immigration and, for many, checked-baggage collection mean the exact moment you reach the pickup point can shift — your driver holds an agreed meeting point near the terminal rather than a fixed slot. Sharing your ship name and expected clearance time helps position the car precisely.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who this serves",
          items: [
            { title: "Cruise passengers exploring the city", description: "A relaxed introduction to Dammam before checking into a hotel." },
            { title: "Crew on shore leave", description: "A comfortable change from the gangway and gate before the next rotation." },
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Dammam Hotels to King Abdulaziz Port", href: "/dammam/dammam-hotels-to-king-abdulaziz-port" },
            { label: "King Abdulaziz Port to King Fahd Airport", href: "/dammam/king-abdulaziz-port-to-dammam-airport" },
          ],
        },
      ],
      faqs: [
        { question: "Where will the driver meet me?", answer: "At an agreed point near the terminal — share your ship name and clearance time so we can position the car precisely." },
        { question: "What if disembarkation takes a long time?", answer: "Immigration and baggage queues vary by sailing, so the pickup allows for that rather than assuming a fixed clearance time." },
        { question: "Can you take me onward to another city?", answer: "Yes — many arrivals rest at a hotel first, then continue via routes like Dammam to Riyadh." },
        { question: "Do you operate for late-night arrivals by sea?", answer: "Yes, 24/7 — ships clear at all hours." },
      ],
    },
  },
  {
    slug: "dammam-city-to-king-abdulaziz-port",
    citySlug: "dammam",
    from: "Dammam City",
    to: "King Abdulaziz Port",
    h1: "Dammam City to King Abdulaziz Port Transfer",
    metaTitle: "Dammam City to King Abdulaziz Port | Private Taxi",
    metaDescription:
      "Fixed-price Dammam city to King Abdulaziz Port transfer with a professional driver and door-to-door pickup from any city address. Available 24/7.",
    distance: "~8 km",
    duration: "12-15 min",
    content: {
      category: "port",
      eyebrow: "The shortest local hop in Dammam",
      dek: "The port sits close to central Dammam — one of the quickest transfers we run in the city, for cruise, crew or business visits alike.",
      stats: [
        { label: "Distance", value: "~8 km" },
        { label: "Drive time", value: "12-15 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "A quick trip, still worth planning",
          paragraphs: [
            "Because the trip is short, timing still matters — port access and gate procedures can add a few minutes at the other end, so we build in a small buffer for your boarding or reporting window.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who books this",
          items: [
            { title: "Cruise and crew", description: "A short, well-timed run from home, office or hotel to the terminal gate." },
            { title: "Business visitors and port callers", description: "Shipping agents and contractors value a professional, punctual option for a time-sensitive trip." },
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "King Abdulaziz Port to Dammam City", href: "/dammam/king-abdulaziz-port-to-dammam-city" },
            { label: "King Fahd Airport to King Abdulaziz Port", href: "/dammam/dammam-airport-to-king-abdulaziz-port" },
          ],
        },
      ],
      faqs: [
        { question: "How far is central Dammam from the port?", answer: "Only around 8 km, usually 12-15 minutes — one of the shortest transfers we run." },
        { question: "Will you collect me from my exact address?", answer: "Yes, door-to-door from any home, office or hotel in central Dammam." },
        { question: "Is the price fixed for such a short trip?", answer: "Yes, agreed before travel with no meter." },
        { question: "Do you also offer the reverse trip?", answer: "Yes — see our King Abdulaziz Port to Dammam City transfer." },
      ],
    },
  },
  {
    slug: "king-abdulaziz-port-to-dammam-city",
    citySlug: "dammam",
    from: "King Abdulaziz Port",
    to: "Dammam City",
    h1: "King Abdulaziz Port to Dammam City Transfer",
    metaTitle: "King Abdulaziz Port to Dammam City | Private Taxi",
    metaDescription:
      "Book a fixed-price King Abdulaziz Port to Dammam city transfer with meet and greet at the terminal and door-to-door delivery. Available 24/7.",
    distance: "~8 km",
    duration: "12-15 min",
    content: {
      category: "port",
      eyebrow: "Arriving by sea, into the city",
      dek: "One of our shortest transfers — the port sits close enough to central Dammam that this is a quick introduction to the city, not a long haul.",
      stats: [
        { label: "Distance", value: "~8 km" },
        { label: "Drive time", value: "12-15 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Meeting you after disembarkation",
          paragraphs: [
            "We track your arrival and stay flexible rather than working to a rigid slot — sharing your ship name and expected clearance time helps us position the car precisely.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "A quick introduction to the city",
          paragraphs: [
            "The short drive takes you straight into central Dammam, past the port district toward the King Saud Street commercial core or wherever your destination lies — your driver can point out landmarks if it's your first visit.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Dammam City to King Abdulaziz Port", href: "/dammam/dammam-city-to-king-abdulaziz-port" },
            { label: "King Abdulaziz Port to Dammam Hotels", href: "/dammam/king-abdulaziz-port-to-dammam-hotels" },
          ],
        },
      ],
      faqs: [
        { question: "Where will the driver meet me?", answer: "At an agreed point near the terminal — sharing your ship name and clearance time helps us position the car precisely." },
        { question: "How long is the drive into the city?", answer: "Only around 8 km, usually 12-15 minutes." },
        { question: "Can you drop me at any address?", answer: "Yes, door-to-door to any home, office or hotel in central Dammam." },
        { question: "Do you operate for late-night arrivals by sea?", answer: "Yes, 24 hours a day." },
      ],
    },
  },
];
