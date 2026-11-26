import type { Faq } from "@/data/faqs";
import { RIYADH_PHOTOS } from "@/data/riyadh-city-page";
import { JEDDAH_PHOTOS } from "@/data/jeddah-city-page";
import { TAIF_PHOTOS } from "@/data/jeddah-to-taif-route";
import { CITY_PHOTOS as ABHA_PHOTOS } from "@/data/abha-city-page";
import { JAZAN_PHOTOS } from "@/data/jazan-city-page";
import { HOFUF_PHOTOS } from "@/data/hofuf-city-page";
import { YANBU_PHOTOS } from "@/data/riyadh-to-yanbu-route";
import { KHAMIS_PHOTOS } from "@/data/khamis-mushait-city-page";
import { JUBAIL_DAMMAM_PHOTOS } from "@/data/jubail-to-dammam-route";

/**
 * Homepage copy (English) for components/home/HomeView.tsx (task 71).
 *
 * Accuracy rules (reports 51–69, owner decisions):
 * - Quotation-based pricing; no fixed prices, day-rates, "no prepayment".
 * - No 24/7, vetted/professional-driver, corporate-account, guaranteed-waiting
 *   or universal meet-and-greet / name-board / flight-tracking claims.
 *   Flight tracking is owner-confirmed only at Dammam (DMM).
 * - Route figures only where the route record was re-verified (OSRM/Valhalla,
 *   Nov 2026). Makkah–Madinah and Riyadh–Dammam records differ slightly from
 *   routing and are shown without figures.
 * - Photos: only images already credited on /image-credits (credits live in
 *   each page's photo set). Makkah/Madinah/AlUla/GCC/vehicles: no licensed
 *   photos on file, so those sections use no photos.
 */

export const HOME_REVIEWED = "2026-11-25";

/** Credited photos reused on the homepage (credits already on /image-credits). */
export const HOME_PHOTOS = {
  hero: RIYADH_PHOTOS.skyline,
  ruh: RIYADH_PHOTOS.airport,
  jed: JEDDAH_PHOTOS.airport,
  dmm: JUBAIL_DAMMAM_PHOTOS.spiral,
  taif: TAIF_PHOTOS.plateau,
  abha: ABHA_PHOTOS.city,
  jazan: JAZAN_PHOTOS.mangroves,
  riyadh: RIYADH_PHOTOS.kingdom,
  jeddah: JEDDAH_PHOTOS.waterfront,
  dammam: JUBAIL_DAMMAM_PHOTOS.corniche,
  jubail: JUBAIL_DAMMAM_PHOTOS.fanateer,
  taifCity: TAIF_PHOTOS.shafa,
  abhaCity: ABHA_PHOTOS.greenMountain,
  khamis: KHAMIS_PHOTOS.city,
  jazanCity: JAZAN_PHOTOS.sunset,
  hofuf: HOFUF_PHOTOS.palace,
  yanbu: YANBU_PHOTOS.street,
  diriyah: RIYADH_PHOTOS.turaif,
  alHada: TAIF_PHOTOS.switchbacks,
} as const;
export type HomePhotoKey = keyof typeof HOME_PHOTOS;

export type HomeCopy = typeof HOME_EN;

export const HOME_EN = {
  meta: {
    title: "Private Transfers Across Saudi Arabia | Airports, Cities & Umrah",
    description:
      "Private, pre-arranged transfers across Saudi Arabia: airport pickups, city and intercity journeys, Umrah and Hajj transport, day trips and selected road journeys to neighbouring countries. Request a quotation.",
  },
  hero: {
    kicker: "Saudi Private Transfers",
    h1: "Private Transfers Across Saudi Arabia",
    intro:
      "From airport arrivals and journeys between Saudi cities to Umrah, Hajj and selected cross-border transfers, request a private vehicle for your journey and receive a quotation before you confirm.",
    coverage: ["13 airports", "19 cities", "Holy cities", "Neighbouring countries"],
    primary: "Get a Quote",
    secondary: "Explore Routes",
    formEyebrow: "Plan your journey",
    formTitle: "Request a private transfer",
  },
  overview: {
    kicker: "One service, the whole Kingdom",
    h2: "Private transport that connects Saudi Arabia",
    paragraphs: [
      "Saudi Arabia is a country of long distances. An arrival in Jeddah often continues to Makkah, a stay in Madinah ends with a drive to the airport, and a business trip to Riyadh can turn into a journey to the Eastern Province. We arrange private, pre-booked road transport for those journeys: one vehicle for your group, from the address you give us to the place you need to be.",
      "Tell us where you are starting, where you are going, when, and how many people and bags are travelling. We reply with a quotation and a suggested vehicle; you review it and confirm only when it suits you.",
    ],
    pillars: [
      { title: "Airports", text: "Arrivals and departures at 13 Saudi airports." },
      { title: "Cities and hotels", text: "Hotels, homes, offices and landmarks across 19 cities." },
      { title: "Holy cities", text: "Makkah, Madinah and the journeys between them." },
      { title: "Between cities", text: "Long-distance routes across the Kingdom." },
      { title: "Cross-border", text: "Selected road journeys to Bahrain, Kuwait, Qatar, the UAE, Oman, Jordan, Iraq and Yemen." },
    ],
  },
  airports: {
    kicker: "Airport transfers",
    h2: "Airport transfers across Saudi Arabia",
    intro:
      "Request a private transfer from the airport to your hotel, home or next city, or back to the airport for your flight. Pickup arrangements are confirmed with you individually for each booking.",
    cards: [
      { code: "RUH", city: "Riyadh", name: "King Khalid International Airport", text: "North of the capital, about 32–37 km from Olaya and KAFD.", href: "/airport-transfer/riyadh-airport", photo: "ruh" as HomePhotoKey },
      { code: "JED", city: "Jeddah", name: "King Abdulaziz International Airport", text: "Jeddah's gateway, about 100–110 km by road from Makkah; several terminals including the Hajj Terminal.", href: "/airport-transfer/jeddah-airport", photo: "jed" as HomePhotoKey },
      { code: "DMM", city: "Dammam", name: "King Fahd International Airport", text: "For Dammam, Khobar and Dhahran. Flights are tracked to coordinate DMM pickups.", href: "/airport-transfer/dammam-airport", photo: "dmm" as HomePhotoKey },
      { code: "MED", city: "Madinah", name: "Prince Mohammad bin Abdulaziz International Airport", text: "For hotels near the Prophet's Mosque and journeys to Makkah.", href: "/airport-transfer/madinah-airport", photo: null },
      { code: "TIF", city: "Taif", name: "Taif Regional Airport", text: "For Taif's mountain resorts and the road down to Makkah or Jeddah.", href: "/airport-transfer/taif-airport", photo: "taif" as HomePhotoKey },
      { code: "AHB", city: "Abha", name: "Abha International Airport", text: "Between Abha and Khamis Mushait in the Asir highlands.", href: "/airport-transfer/abha-airport", photo: "abha" as HomePhotoKey },
      { code: "GIZ", city: "Jazan", name: "King Abdullah bin Abdulaziz International Airport", text: "About 4 km from central Jazan and close to the Farasan ferry terminal.", href: "/airport-transfer/jazan-airport", photo: "jazan" as HomePhotoKey },
    ],
    more: [
      { label: "AlUla (ULH)", href: "/airport-transfer/alula-airport" },
      { label: "Tabuk (TUU)", href: "/airport-transfer/tabuk-airport" },
      { label: "Yanbu (YNB)", href: "/airport-transfer/yanbu-airport" },
      { label: "Hail (HAS)", href: "/airport-transfer/hail-airport" },
      { label: "Red Sea (RSI)", href: "/airport-transfer/red-sea-airport" },
      { label: "NEOM Bay (NUM)", href: "/airport-transfer/neom-bay-airport" },
    ],
    hubLabel: "All airport transfers",
    hubHref: "/airport-transfers",
  },
  pilgrims: {
    kicker: "Umrah, Hajj and Ziyarat",
    h2: "Transport for Umrah, Hajj and Ziyarat journeys",
    intro:
      "A pilgrimage involves several journeys: from the airport to your hotel, between Makkah and Madinah, and to the historic sites. You can request private transport for each of them, sized to your family or group and their luggage.",
    items: [
      { title: "Jeddah Airport to Makkah", text: "About 100–110 km from King Abdulaziz Airport to hotels near the Haram.", href: "/makkah/jeddah-airport-to-makkah-umrah" },
      { title: "Makkah and Madinah", text: "The journey between the two holy cities, in either direction.", href: "/routes/makkah-to-madinah" },
      { title: "Madinah Airport to your hotel", text: "From Prince Mohammad bin Abdulaziz Airport to hotels near the Prophet's Mosque.", href: "/routes/madinah-airport-to-madinah" },
      { title: "Hotel transfers", text: "Between hotels, stations and addresses in Makkah and Madinah.", href: "/services/hotel-transfers" },
    ],
    services: [
      { label: "Umrah transport", href: "/umrah-taxi-service", text: "Airport, hotel and intercity journeys for Umrah travellers." },
      { label: "Hajj transport", href: "/hajj-transport-service", text: "Ground transport around an already-arranged Hajj trip." },
      { label: "Ziyarat transport", href: "/ziyarat-taxi-service", text: "Private transport to historic sites you choose to visit." },
    ],
    cities: [
      { label: "Transfers in Makkah", href: "/taxi-service/makkah" },
      { label: "Transfers in Madinah", href: "/taxi-service/madinah" },
    ],
    note:
      "We provide private road transport only. We are not a Hajj or Umrah operator and do not issue permits or arrange packages.",
  },
  routes: {
    kicker: "City to city",
    h2: "Private transfers between Saudi cities",
    intro: "A selection of the journeys people request most. Each route page explains the distance, the road and what to expect.",
    cards: [
      { from: "Jeddah", to: "Makkah", href: "/routes/jeddah-to-makkah", fig: "≈85 km · about 1–1¼ hours" },
      { from: "Jeddah", to: "Madinah", href: "/routes/jeddah-to-madinah", fig: "≈420 km · 4.5–5 hours" },
      { from: "Makkah", to: "Madinah", href: "/routes/makkah-to-madinah", fig: null },
      { from: "Riyadh", to: "Jeddah", href: "/routes/riyadh-to-jeddah", fig: "≈950 km · 9.5–10.5 hours" },
      { from: "Riyadh", to: "Dammam", href: "/routes/riyadh-to-dammam", fig: null },
      { from: "Riyadh", to: "AlUla", href: "/routes/riyadh-to-alula", fig: "≈1,035–1,045 km · 10.5–11 hours" },
      { from: "Jeddah", to: "Taif", href: "/routes/jeddah-to-taif", fig: "≈165–175 km · 2–2.5 hours" },
      { from: "Riyadh", to: "Abha", href: "/routes/riyadh-to-abha", fig: "≈940–960 km · 11–12 hours" },
    ],
    figNote: "Driving-time estimates before breaks; traffic and exact addresses change the total.",
    allLabel: "All intercity routes",
    allHref: "/intercity-transfers",
  },
  destinations: {
    kicker: "Destinations",
    h2: "Travel across Saudi Arabia's cities",
    intro: "Each city page explains the local journeys you can request: airports, hotels, landmarks and onward routes.",
    featured: [
      { city: "Riyadh", text: "The capital: KAFD, Olaya, the Diplomatic Quarter and Diriyah.", href: "/taxi-service/riyadh", photo: "riyadh" as HomePhotoKey },
      { city: "Jeddah", text: "The Red Sea gateway to Makkah, with Al-Balad and the Corniche.", href: "/taxi-service/jeddah", photo: "jeddah" as HomePhotoKey },
      { city: "Dammam", text: "The Eastern Province's capital on the Gulf coast.", href: "/taxi-service/dammam", photo: "dammam" as HomePhotoKey },
      { city: "Taif", text: "The mountain city above Makkah, known for its roses.", href: "/taxi-service/taif", photo: "taifCity" as HomePhotoKey },
      { city: "Abha", text: "The Asir highlands, Green Mountain and Al Soudah.", href: "/taxi-service/abha", photo: "abhaCity" as HomePhotoKey },
      { city: "Hofuf", text: "The heart of the UNESCO-listed Al-Ahsa Oasis.", href: "/taxi-service/hofuf", photo: "hofuf" as HomePhotoKey },
      { city: "Jazan", text: "The southern Red Sea coast and the Farasan ferry.", href: "/taxi-service/jazan", photo: "jazanCity" as HomePhotoKey },
      { city: "Khamis Mushait", text: "Asir's largest city, next to Abha.", href: "/taxi-service/khamis-mushait", photo: "khamis" as HomePhotoKey },
    ],
    more: [
      { label: "Makkah", href: "/taxi-service/makkah" },
      { label: "Madinah", href: "/taxi-service/madinah" },
      { label: "Khobar", href: "/taxi-service/khobar" },
      { label: "Jubail", href: "/taxi-service/jubail" },
      { label: "Al-Ahsa", href: "/taxi-service/al-ahsa" },
      { label: "AlUla", href: "/taxi-service/alula" },
      { label: "Yanbu", href: "/taxi-service/yanbu" },
      { label: "Tabuk", href: "/taxi-service/tabuk" },
      { label: "Hail", href: "/taxi-service/hail" },
      { label: "Najran", href: "/taxi-service/najran" },
      { label: "Buraidah", href: "/taxi-service/buraidah" },
    ],
    allLabel: "All city transfers",
    allHref: "/city-transfers",
  },
  dayTrips: {
    kicker: "Day trips",
    h2: "Private day trips and destination journeys",
    intro:
      "Planning a day out? Share the places you want to visit and your timings, and we will quote for the transport you need. Return journeys and any waiting are agreed in your quotation.",
    items: [
      { title: "Riyadh to Diriyah", text: "To At-Turaif, the UNESCO-listed old capital on Riyadh's edge.", href: "/routes/riyadh-to-diriyah", photo: "diriyah" as HomePhotoKey },
      { title: "Jeddah to Taif", text: "Up the Al Hada mountain road to Taif's cooler plateau.", href: "/routes/jeddah-to-taif", photo: "alHada" as HomePhotoKey },
      { title: "AlUla", text: "Airport, resort and heritage-site transfers in AlUla.", href: "/taxi-service/alula", photo: null },
    ],
  },
  chauffeur: {
    kicker: "Private journeys",
    h2: "Chauffeur-driven and private vehicle journeys",
    intro: "Beyond single transfers, you can ask for transport arranged around your plans.",
    items: [
      { title: "Business travel", text: "Send your meeting schedule and addresses, and we will quote for the journeys you need.", href: "/taxi-service/riyadh" },
      { title: "Several stops in a day", text: "List your stops and timings; the quotation covers the plan you send.", href: "/city-transfers" },
      { title: "Families and groups", text: "Tell us the number of passengers and bags, and a suitable vehicle will be suggested.", href: "/services" },
    ],
  },
  gcc: {
    kicker: "Across the border",
    h2: "Road journeys from Saudi Arabia to neighbouring countries",
    intro: "Selected private road transfers from Saudi Arabia into the Gulf states, Jordan, Iraq and Yemen.",
    items: [
      { country: "Bahrain", via: "King Fahd Causeway", href: "/border-transfers/bahrain-causeway" },
      { country: "UAE", via: "Al Batha (Ghuwaifat) border", href: "/border-transfers/uae-border" },
      { country: "Qatar", via: "Salwa (Abu Samra) border", href: "/border-transfers/qatar-border" },
      { country: "Kuwait", via: "Al Khafji (Nuwaiseeb) border", href: "/border-transfers/kuwait-border" },
      { country: "Jordan", via: "Al Haditha and Al Durra crossings", href: "/border-transfers/jordan-border" },
      { country: "Oman", via: "Crossing confirmed in your quotation", href: null },
      { country: "Iraq", via: "Crossing confirmed in your quotation", href: null },
      { country: "Yemen", via: "Crossing confirmed in your quotation", href: null },
    ],
    note:
      "Travel documents, entry permission and border formalities are the traveller's responsibility, and crossing times vary. The transfer is the road journey only.",
    hubLabel: "All border transfers",
    hubHref: "/border-transfers",
  },
  why: {
    kicker: "Why private",
    h2: "Why request a private transfer?",
    items: [
      { title: "Your own vehicle", text: "One vehicle for your group, with no other passengers or detours." },
      { title: "Planned before you travel", text: "Pickup, destination and timing are agreed in advance." },
      { title: "Sized to your group", text: "A vehicle suggested for your passengers and luggage." },
      { title: "A quotation first", text: "You see the price and what it covers before you confirm." },
    ],
  },
  how: {
    kicker: "How it works",
    h2: "How the quotation process works",
    steps: [
      { title: "Share your journey", text: "Pickup, destination, date, time, passengers and luggage, by form or WhatsApp." },
      { title: "Receive a quotation", text: "We reply with a price and a suggested vehicle." },
      { title: "Review and confirm", text: "Check the details and confirm if they suit you." },
      { title: "Travel", text: "Your private transfer runs as arranged in your confirmed booking." },
    ],
  },
  vehicles: {
    kicker: "Vehicles",
    h2: "Vehicle categories",
    intro: "Typical categories and their usual passenger and luggage guide. Availability varies by city and date and is confirmed in your quotation.",
  },
  trust: {
    kicker: "About the service",
    h2: "Who we are",
    paragraphs: [
      "Saudi Private Transfers arranges private, pre-booked road transport across Saudi Arabia and on selected routes to neighbouring countries. Quotations and bookings are handled by email and WhatsApp.",
      "We publish the limits of what we do: road transport only, no Hajj or Umrah packages, and border formalities handled by travellers themselves.",
    ],
    contact: [
      { label: "Bookings and quotations", value: "booking@saudiprivatetransfers.com", href: "mailto:booking@saudiprivatetransfers.com" },
      { label: "General questions", value: "info@saudiprivatetransfers.com", href: "mailto:info@saudiprivatetransfers.com" },
    ],
    aboutLabel: "About us",
    contactLabel: "Contact",
    trustpilot: "Travelled with us? Share your experience on Trustpilot.",
  },
  faqHeading: "Questions about private transfers in Saudi Arabia",
  final: {
    h2: "Plan your private journey across Saudi Arabia",
    text: "Share your pickup location, destination, date and number of passengers, and we will reply with a quotation.",
    primary: "Get a Quote",
    secondary: "Explore Routes",
    whatsapp: "WhatsApp",
  },
};

export const HOME_FAQS_EN: Faq[] = [
  { question: "Which areas of Saudi Arabia do you cover?", answer: "Airports, cities and intercity routes across the Kingdom, including Riyadh, Jeddah, Makkah, Madinah, the Eastern Province, Taif, the Asir region, Jazan, Al-Ahsa and AlUla, plus selected road journeys to Bahrain, Kuwait, Qatar, the UAE, Oman, Jordan, Iraq and Yemen." },
  { question: "How do I request a private transfer?", answer: "Send your pickup, destination, date, time, passengers and luggage through the quote form or WhatsApp. We reply with a quotation, and the booking is made when you confirm it." },
  { question: "Can I book an airport transfer?", answer: "Yes. You can request a transfer to or from 13 Saudi airports. Pickup arrangements are confirmed with you individually for each booking." },
  { question: "Do you provide transfers between Makkah and Madinah?", answer: "Yes, in either direction, as well as hotel transfers in both cities and journeys from Jeddah and Madinah airports." },
  { question: "Can I arrange transport for Umrah or Hajj?", answer: "Yes, private road transport for the journeys around your trip. We are not a Hajj or Umrah operator and do not issue permits or packages." },
  { question: "Can I request Ziyarat transport?", answer: "Yes. Tell us the historic sites you would like to visit and your timings, and we will quote for the transport." },
  { question: "Do you offer long-distance transfers?", answer: "Yes. Routes such as Riyadh to Jeddah, Riyadh to AlUla and Riyadh to Abha are arranged as private journeys by quotation." },
  { question: "Can I request a family or group vehicle?", answer: "Yes. Tell us the number of passengers and bags, and a suitable vehicle will be suggested in your quotation, subject to availability." },
  { question: "Do you offer transfers to neighbouring countries?", answer: "Selected road transfers to Bahrain, Kuwait, Qatar, the UAE, Oman, Jordan, Iraq and Yemen can be requested; the route and crossing are confirmed in your quotation. Travel documents, entry permission and border formalities are your own responsibility." },
  { question: "How is the quotation confirmed?", answer: "Review the quotation we send; the booking is made when you confirm it, and any payment or cancellation terms are set out in the quotation." },
];
