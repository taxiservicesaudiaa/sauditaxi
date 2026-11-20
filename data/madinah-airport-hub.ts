import type { Faq } from "@/data/faqs";

/**
 * Content for the redesigned /cities/madinah page (Madinah airport ⇄ hotel
 * transfers). English only — the Arabic counterpart (/ar/نقل-فنادق-المدينة) is
 * unchanged and listed for native-reviewed parity work.
 *
 * Accuracy rules applied (owner-confirmed service rules, Oct–Nov 2026):
 *  - Flight tracking IS offered at Madinah (MED). Free waiting IS offered, but no
 *    allowance is stated. Name-board meet-and-greet is NOT offered.
 *  - Prices are set in the customer's confirmed quotation ("fixed price" /
 *    "all-inclusive" wording is not used).
 *  - Distances come from data/hotels.ts (17–18 km), cross-checked by road
 *    routing on 20 Nov 2026 (MED → Al-Masjid an-Nabawi area 17.7–18.7 km,
 *    21–23 min in free-flowing traffic). Times are shown as approximate.
 *  - Meeting point, terminal and stop arrangements are confirmed per booking —
 *    never asserted here.
 */

export const MADINAH_HUB = {
  path: "/cities/madinah",
  lastUpdated: "2026-11-20",
  meta: {
    // Kept distinct from /airport-transfer/madinah-airport ("Private Madinah
    // Airport Transfer (MED) | …") so the two pages don't compete for one title.
    title: "Madinah Airport to Hotel Transfers | Private MED Taxi",
    description:
      "Private transfers from Madinah Airport (MED) to your hotel near the Prophet's Mosque. Choose a vehicle, share your flight details and request a quote.",
  },
  breadcrumbName: "Madinah Airport Transfers",
  hero: {
    eyebrow: "Madinah Airport Transfers · MED",
    h1: "Madinah Airport Transfers to Hotels & City",
    lead: "Private rides from MED to your Madinah hotel",
    body: "Your flight lands at Prince Mohammad bin Abdulaziz International Airport (MED), and only the road into the city stands between you and your hotel in Madinah. Arrange that last stretch before you fly: tell us your flight, your hotel and how many of you are travelling, choose a vehicle with room for your luggage, and receive a quote to confirm before the journey.",
    points: [
      "A private vehicle just for you — travelling alone or with family or a group",
      "Price set in a quotation you confirm",
      "Hotels near Al-Masjid an-Nabawi and across the city",
    ],
    whatsappMessage:
      "Hello! I'd like a quote for a private transfer from Madinah Airport (MED) to my hotel.",
  },
  essentials: [
    { label: "Airport", value: "Prince Mohammad bin Abdulaziz International Airport" },
    { label: "IATA code", value: "MED" },
    { label: "Service", value: "Private airport transfer" },
    { label: "Destination", value: "Madinah hotels and city locations" },
    { label: "Vehicle options", value: "Sedan to minibus, subject to availability" },
    { label: "Journey time", value: "Varies with destination and traffic" },
  ],
  arrival: {
    heading: "Private Transfers from Madinah Airport to Your Hotel",
    // Inline links use [anchor](/path) — rendered by RichText in MadinahAirportHubView.
    paragraphs: [
      "For most visitors, the journey begins at [Prince Mohammad bin Abdulaziz International Airport](/airport-transfer/madinah-airport), Madinah's airport, known by its IATA code MED. Pilgrims arrive here for Umrah and Hajj, alongside business travellers and families visiting relatives — and almost all of them are heading to the same place: the hotels around Al-Masjid an-Nabawi, the Prophet's Mosque, about 17–18 km south-west of the airport by road.",
      "A private transfer turns that drive into one simple arrangement. Before you travel, you send your arrival date, flight number, hotel name, passenger count and luggage. We reply with a quotation and a suitable vehicle, and once you confirm it, the price is settled before you land — nothing to negotiate on arrival after a long flight.",
      "The right vehicle depends on people and bags more than preference. A sedan comfortably carries one to three travellers with standard luggage; a family with several suitcases, or a pilgrim group travelling together, will usually be happier in an SUV, van or minibus. Not sure? Compare the [vehicle options](#vehicles) below, or describe your group and ask for a recommendation.",
    ],
  },
  pickup: {
    heading: "What to Know Before Your Madinah Airport Pickup",
    intro: "A smooth pickup starts with a complete message. Include these details when you request your quote, so the right vehicle and pickup time can be arranged:",
    items: [
      "Arrival date and flight number",
      "Hotel name and full address in Madinah",
      "Number of passengers",
      "Number of suitcases and any large items",
      "A WhatsApp number we can reach you on",
      "Accessibility needs or child-seat requests",
    ],
    notes: [
      "Flights into Madinah don't always land on time, so we track your flight, and free waiting time is included if it arrives late.",
      "Where you will meet your driver, and any pickup instructions, are confirmed with you before you travel — not left to chance on the day.",
    ],
  },
  hotels: {
    heading: "Madinah Hotels We Transfer To",
    intro:
      "Most arrivals end their journey within sight of the Prophet's Mosque. These ten frequently requested hotels sit mainly in the central area around the Haram — choose yours to request a quote with the hotel already filled in.",
    footnote:
      "Distances are measured by road from Prince Mohammad bin Abdulaziz International Airport. Drive times assume free-flowing traffic; the roads around the Haram are busier at peak times and can be restricted around prayer times, so allow extra time then.",
    notListed: {
      title: "Hotel not listed?",
      text: "Staying somewhere else? Send us your hotel's name and address — transfers to any hotel or address in Madinah can be quoted.",
      cta: "Request a quote",
    },
  },
  vehicles: {
    heading: "Choose the Right Vehicle for Your Trip",
    intro:
      "From a solo traveller with one suitcase to an Umrah group with luggage for everyone, there is a vehicle size for every arrival. Capacities are a guide; the vehicle offered for your journey is confirmed in your quotation.",
    cta: "Ask for a vehicle recommendation",
  },
  steps: {
    heading: "How Booking Works",
    items: [
      { title: "Send your trip details", text: "Tell us your flight, hotel, travel date, passengers and luggage — through the form above or on WhatsApp." },
      { title: "Receive a quote and vehicle recommendation", text: "We reply with a quotation for your journey and a vehicle that suits your passengers and luggage." },
      { title: "Confirm and travel", text: "Confirm the quotation; the meeting point and pickup details are agreed before you travel, so on arrival day you simply meet your driver." },
    ],
  },
  returnTransfer: {
    heading: "Madinah Hotel to Madinah Airport Transfers",
    text: "When your stay ends, the journey runs in reverse. Share your hotel address, your departure flight time, your preferred pickup time and your passenger and luggage numbers, and we agree a pickup time with you that leaves room for the drive to MED and airport check-in.",
    link: { label: "Madinah to Madinah Airport transfer", href: "/routes/madinah-to-madinah-airport" },
  },
  pilgrims: {
    heading: "Travelling to Madinah for Umrah or Ziyarat?",
    intro:
      "For many visitors, the airport transfer is only the first journey of the trip. If Madinah is part of your Umrah, the same booking conversation can cover the journeys that follow — each one requested with your quote and confirmed in your quotation. For the wider picture, see our [Umrah transfer service](/umrah-taxi-service).",
    items: [
      {
        title: "Hotel-to-airport journeys",
        text: "On departure day, a transfer from your hotel near the Haram back to MED, timed around your flight.",
        link: { label: "Hotel to airport transfer", href: "/routes/madinah-to-madinah-airport" },
      },
      {
        title: "Ziyarat visits",
        text: "Many pilgrims set aside time for Ziyarat — visits to places such as [Mount Uhud](/madinah/madinah-to-mount-uhud) and [Masjid al-Qiblatain](/madinah/madinah-to-qiblatain-mosque) — usually arranged as a separate trip from the airport transfer.",
        link: { label: "Madinah Ziyarat service", href: "/ziyarat-taxi-service" },
      },
      {
        title: "Quba Mosque",
        text: "Quba Mosque, south of the Haram, is a stop many visitors ask for; it can be requested on the way to or from your hotel when you ask for a quote.",
        link: { label: "Madinah to Quba Mosque", href: "/madinah/madinah-to-quba-mosque" },
      },
      {
        title: "Onward to Makkah",
        text: "When Madinah is the first stop, Makkah is often the next. A private intercity transfer can take you from your hotel — or straight from the airport — to Makkah, with rest stops agreed in advance.",
        link: { label: "Madinah to Makkah transfer", href: "/routes/madinah-to-makkah" },
      },
      {
        title: "Dhul Hulaifah (Abyar Ali)",
        text: "On the road from Madinah to Makkah, about 14 km from the Haram, lies Dhul Hulaifah — also known as Abyar Ali — the miqat for travellers setting out from Madinah. Pilgrims can ask for a stop there on the way to Makkah.",
        link: { label: "Miqat locations guide", href: "/blog/miqat-locations-for-umrah" },
      },
    ],
  },
  destinations: {
    heading: "Related Madinah Transfers",
    intro:
      "Not every arrival comes through MED — some travellers land in Jeddah and continue by road, and others simply need a ride across the city once they have settled in. These are the journeys most often booked around a Madinah stay.",
    links: [
      { label: "Madinah Airport to Madinah", text: "Airport to any city address", href: "/routes/madinah-airport-to-madinah" },
      { label: "Madinah to Madinah Airport", text: "Hotel to airport for departures", href: "/routes/madinah-to-madinah-airport" },
      { label: "Madinah to Makkah", text: "Private intercity transfer", href: "/routes/madinah-to-makkah" },
      { label: "Madinah to Jeddah", text: "City or airport in Jeddah", href: "/routes/madinah-to-jeddah" },
      { label: "Jeddah Airport to Madinah", text: "Arriving via Jeddah instead", href: "/routes/jeddah-airport-to-madinah" },
      { label: "Madinah Ziyarat service", text: "Historic sites and mosques", href: "/ziyarat-taxi-service" },
      { label: "Madinah city taxi", text: "Getting around Madinah", href: "/taxi-service/madinah" },
      { label: "Madinah Airport (MED) guide", text: "Airport transfer overview", href: "/airport-transfer/madinah-airport" },
    ],
  },
  guides: {
    heading: "Guides for Your Madinah Visit",
    // Curated, not rotated, and Madinah-specific only (owner, Nov 2026).
    // madinah-airport-driver-pickup-guide is deliberately excluded until its
    // name-board / fixed-price wording is corrected. The general miqat guide is
    // linked from the Dhul Hulaifah item instead of appearing here.
    slugs: [
      "first-time-visiting-madinah-guide",
      "madinah-ziyarat-historic-sites-guide",
      "jeddah-vs-madinah-airport-for-umrah",
      "umrah-transport-makkah-madinah-guide",
      "makkah-to-madinah-private-taxi-guide",
      "makkah-madinah-train-vs-taxi",
    ],
  },
  finalCta: {
    heading: "Arrange Your Madinah Airport Transfer",
    text: "Wherever your journey to Madinah begins, the last part can be arranged before you set off. Send your flight details, hotel, travel date and number of passengers, and we'll reply with a quote for a suitable private vehicle.",
    primary: "Request Your Transfer",
    whatsapp: "Contact Us on WhatsApp",
  },
} as const;

export const MADINAH_HUB_FAQS: Faq[] = [
  {
    question: "How far is Madinah Airport from hotels near the Prophet's Mosque?",
    answer:
      "Hotels around Al-Masjid an-Nabawi are about 17–18 km from Prince Mohammad bin Abdulaziz International Airport (MED) by road.",
  },
  {
    question: "How long does an airport transfer to central Madinah take?",
    answer:
      "Around 20–25 minutes in free-flowing traffic. Allow longer at busy times and around prayer times, when roads near the Haram can be restricted.",
  },
  {
    question: "Can I book a private transfer from Madinah Airport to my hotel?",
    answer:
      "Yes. Send your flight number, arrival date, hotel, passengers and luggage, and we reply with a quotation for a private vehicle. You confirm it before you travel.",
  },
  {
    question: "Do you cover hotels close to the Prophet's Mosque?",
    answer:
      "Yes — the hotels listed on this page are mostly in the central area near the Haram, and other hotels and addresses in Madinah can be quoted too.",
  },
  {
    question: "Do you provide return transfers to Madinah Airport?",
    answer:
      "Yes. Share your hotel address, departure flight time, preferred pickup time, passengers and luggage, and the pickup is agreed in your quotation.",
  },
  {
    question: "Can I book a van for my Umrah group?",
    answer:
      "Yes. A van takes up to 9 passengers with about 8 bags, and a minibus 10–18 passengers. Tell us your group size and luggage; the vehicle offered is confirmed in your quotation.",
  },
  {
    question: "Can I request a stop at Quba Mosque?",
    answer:
      "Yes, you can request a stop at Quba Mosque or another Ziyarat site when you ask for a quote. Each stop is confirmed in your quotation.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We track your flight into Madinah, and free waiting time is included if it lands late. If your flight is rescheduled, message us with the new time.",
  },
  {
    question: "Can you pick me up if my hotel is not listed?",
    answer:
      "Yes. Send your hotel's name and address, and we can quote a transfer to any hotel or address in Madinah.",
  },
  {
    question: "How can I request a transfer quote?",
    answer:
      "Use the quote form on this page or message us on WhatsApp with your flight, hotel, date, passengers and luggage. No payment is needed to receive a quote.",
  },
  {
    question: "Can I travel from Madinah Airport directly to Makkah?",
    answer:
      "Yes, you can request a private transfer from Madinah Airport straight to Makkah. It is a long intercity journey; rest stops and a stop at Dhul Hulaifah (Abyar Ali) can be requested.",
  },
  {
    question: "How is the price for my transfer set?",
    answer:
      "You receive a quotation for your journey before you travel. The confirmed quotation sets the price and shows what it covers.",
  },
];
