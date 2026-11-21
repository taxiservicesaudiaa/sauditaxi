import type { Faq } from "@/data/faqs";

/**
 * Hotels served by our airport-transfer route system.
 *
 * Each hotel belongs to a city (`citySlug`, matching data/cities.ts) and the
 * transfer routes to/from that city's airport are generated automatically in
 * lib/hotel-transfers.ts — no per-hotel page is ever hand-written. Add a hotel
 * here and its two route pages (airport → hotel and hotel → airport), the city
 * hub listing, breadcrumbs, internal links, sitemap entries, and structured
 * data all appear on the next build.
 *
 * To extend to a new city (Riyadh, Makkah, …) simply add hotels with that
 * city's slug; the same system builds `/riyadh/...` pages with zero new code.
 */
export interface Hotel {
  /** URL-safe slug, unique within the city. Used in the route path. */
  slug: string;
  /** Display name. */
  name: string;
  /** City slug this hotel sits in (must exist in data/cities.ts). */
  citySlug: string;
  /** Star classification — drives filtering on the city hub. */
  stars: 3 | 4 | 5;
  /** District / area, used in content and as a filter facet. */
  area: string;
  /** Approximate driving distance from the serving airport, in km. null = not yet verified (not shown). */
  distanceKm: number | null;
  /** Approximate driving time from the serving airport, in minutes. null = not yet verified (not shown). */
  durationMin: number | null;
  /** Unique one-line description of the hotel for card + intro content. */
  blurb: string;
  /** Landmarks / attractions near the hotel, for unique on-page content. */
  nearby: string[];

  // ── Hand-written per-hotel content (optional). Rendered only when present —
  // no fallback, no generated substitute. See app/(main)/[city]/[route]/page.tsx.

  /** Exact terminal + door/meeting point for pickup. */
  terminalPickup?: string;
  /** Where the vehicle can physically stop for drop-off. */
  dropoffDetail?: string;
  /** Lowest vehicle-class price for this transfer, in SAR. */
  priceFrom?: number;
  /** What changes the price (vehicle class, time of day, etc). */
  priceNotes?: string;
  /** Distance measured for this specific hotel (not the generic city figure). */
  realDistanceKm?: number;
  /** Typical drive time for this hotel — not the best-case figure. */
  realDurationMin?: number;
  /** Drive time during prayer times / Ramadan / Hajj peak. */
  peakDurationMin?: number;
  /** Hotel-side arrangements: shuttle, porter, vehicle entrance. */
  hotelArrangements?: string;
  /** Things learned from actually driving this hotel's transfer. */
  operatorNotes?: string[];
  /** Hotel-specific FAQs. Replaces the generated FAQ set when present. */
  customFaqs?: Faq[];
  /** Real photographs of this hotel/pickup point (not stock, not reused). */
  photos?: { src: string; alt: string }[];
}

export const hotels: Hotel[] = [
  // ── Jeddah — 5-star ────────────────────────────────────────────────────────
  {
    slug: "waldorf-astoria-jeddah",
    name: "Waldorf Astoria Jeddah – Qasr Al Sharq",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 35,
    durationMin: 40,
    blurb:
      "A palatial Red Sea landmark on the Corniche, known for its gold-accented suites and waterfront dining.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "ritz-carlton-jeddah",
    name: "The Ritz-Carlton, Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 34,
    durationMin: 38,
    blurb:
      "A grand seafront resort set in landscaped gardens along the northern Corniche, popular for business and leisure stays.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Jeddah Yacht Club"],
  },
  {
    slug: "rosewood-jeddah",
    name: "Rosewood Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 33,
    durationMin: 37,
    blurb:
      "A sleek business tower on the Corniche with panoramic Red Sea views and a rooftop pool.",
    nearby: ["Jeddah Corniche", "Al Shallal Theme Park", "Stars Avenue Mall"],
  },
  {
    slug: "park-hyatt-jeddah",
    name: "Park Hyatt Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 32,
    durationMin: 36,
    blurb:
      "A tranquil low-rise retreat of Andalusian courtyards and private marina moorings on the Corniche.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "shangri-la-jeddah",
    name: "Shangri-La Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Shati / Corniche",
    distanceKm: 26,
    durationMin: 30,
    blurb:
      "A modern high-rise hotel overlooking the waterfront, with a spa and family-friendly leisure floors.",
    nearby: ["Jeddah Corniche", "Al Shati district", "Red Sea Mall"],
  },
  {
    slug: "intercontinental-jeddah",
    name: "InterContinental Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 31,
    durationMin: 35,
    blurb:
      "A long-established seafront hotel with its own private beach and Corniche promenade access.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Balad historic district"],
  },
  {
    slug: "assila-luxury-collection-jeddah",
    name: "Assila, a Luxury Collection Hotel, Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Rawdah / Tahlia Street",
    distanceKm: 24,
    durationMin: 30,
    blurb:
      "A contemporary art-filled hotel steps from the boutiques and cafés of Tahlia Street.",
    nearby: ["Tahlia Street", "Stars Avenue Mall", "Jeddah Corniche"],
  },
  {
    slug: "jeddah-hilton",
    name: "Jeddah Hilton",
    citySlug: "jeddah",
    stars: 5,
    area: "North Corniche",
    distanceKm: 22,
    durationMin: 26,
    blurb:
      "A resort-style hotel on the northern Corniche with a private beach, marina, and multiple restaurants.",
    nearby: ["Jeddah Corniche", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "jeddah-marriott-hotel",
    name: "Jeddah Marriott Hotel",
    citySlug: "jeddah",
    stars: 5,
    area: "Madinah Road / Al Hamra",
    distanceKm: 27,
    durationMin: 32,
    blurb:
      "A central business hotel on Madinah Road, well placed for the Corniche and the commercial district.",
    nearby: ["Madinah Road", "Jeddah Corniche", "Al-Balad historic district"],
  },
  {
    slug: "swissotel-jeddah-al-hamra",
    name: "Swissôtel Jeddah Al Hamra",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra",
    distanceKm: 30,
    durationMin: 35,
    blurb:
      "A polished city hotel in the Al Hamra district, blending Swiss hospitality with easy Corniche access.",
    nearby: ["Jeddah Corniche", "Tahlia Street", "King Fahd Fountain"],
  },
  {
    slug: "crowne-plaza-jeddah",
    name: "Crowne Plaza Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Andalus / Madinah Road",
    distanceKm: 25,
    durationMin: 30,
    blurb:
      "A dependable business hotel on Al Andalus Road, minutes from shopping and the ring-road network.",
    nearby: ["Red Sea Mall", "Madinah Road", "Jeddah Corniche"],
  },

  // ── Jeddah — 4-star ────────────────────────────────────────────────────────
  {
    slug: "four-points-sheraton-jeddah-corniche",
    name: "Four Points by Sheraton Jeddah Corniche",
    citySlug: "jeddah",
    stars: 4,
    area: "Corniche",
    distanceKm: 28,
    durationMin: 33,
    blurb:
      "A comfortable Corniche-side hotel with sea-view rooms and a rooftop pool, popular with families.",
    nearby: ["Jeddah Corniche", "Al Shallal Theme Park", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "mercure-jeddah-al-hamra",
    name: "Mercure Jeddah Al Hamra",
    citySlug: "jeddah",
    stars: 4,
    area: "Al Hamra",
    distanceKm: 29,
    durationMin: 34,
    blurb:
      "A value-focused Al Hamra hotel within walking distance of the Corniche waterfront.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Tahlia Street"],
  },
  {
    slug: "best-western-plus-jeddah-madinah-road",
    name: "Best Western Plus Jeddah Hotel Madinah Road",
    citySlug: "jeddah",
    stars: 4,
    area: "Madinah Road",
    distanceKm: 23,
    durationMin: 29,
    blurb:
      "A practical mid-scale hotel on Madinah Road, central for shopping and business meetings.",
    nearby: ["Madinah Road", "Red Sea Mall", "Stars Avenue Mall"],
  },
  {
    slug: "radisson-blu-jeddah",
    name: "Radisson Blu Hotel, Jeddah",
    citySlug: "jeddah",
    stars: 4,
    area: "Madinah Road",
    distanceKm: 20,
    durationMin: 26,
    blurb:
      "A well-connected business hotel on Madinah Road with a fitness centre and event facilities.",
    nearby: ["Madinah Road", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "holiday-inn-jeddah-gateway",
    name: "Holiday Inn Jeddah Gateway",
    citySlug: "jeddah",
    stars: 4,
    area: "Airport Road",
    distanceKm: 6,
    durationMin: 10,
    blurb:
      "The closest full-service hotel to the airport, ideal for short layovers and early departures.",
    nearby: ["King Abdulaziz International Airport", "Jeddah Season events", "Madinah Road"],
  },
  {
    slug: "elaf-jeddah",
    name: "Elaf Jeddah Hotel",
    citySlug: "jeddah",
    stars: 4,
    area: "Al Balad / Downtown",
    distanceKm: 30,
    durationMin: 38,
    blurb:
      "A downtown hotel on the edge of historic Al-Balad, close to the old souqs and heritage houses.",
    nearby: ["Al-Balad historic district", "Souq Al Alawi", "Naseef House"],
  },

  // ── Jeddah — 3-star ────────────────────────────────────────────────────────
  {
    slug: "ibis-jeddah-city-center",
    name: "ibis Jeddah City Center",
    citySlug: "jeddah",
    stars: 3,
    area: "Al Madinah Road / City Center",
    distanceKm: 24,
    durationMin: 30,
    blurb:
      "A budget-friendly city-centre hotel on Madinah Road with straightforward, modern rooms.",
    nearby: ["Madinah Road", "Al-Balad historic district", "Jeddah Corniche"],
  },
  {
    slug: "ibis-jeddah-malik-road",
    name: "ibis Jeddah Malik Road",
    citySlug: "jeddah",
    stars: 3,
    area: "Malik Road",
    distanceKm: 19,
    durationMin: 25,
    blurb:
      "An economical hotel on Malik Road, convenient for the airport and northern business area.",
    nearby: ["Malik Road", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "red-sea-palace-jeddah",
    name: "Red Sea Palace Hotel",
    citySlug: "jeddah",
    stars: 3,
    area: "Al-Balad (Old Jeddah)",
    distanceKm: 31,
    durationMin: 39,
    blurb:
      "A long-standing waterfront hotel in Al-Balad, within walking distance of the historic quarter.",
    nearby: ["Al-Balad historic district", "Souq Al Alawi", "Jeddah Corniche"],
  },

  // ── Riyadh — 5-star / luxury ───────────────────────────────────────────────
  // Served by King Khalid International Airport (RUH), north of the city.
  {
    slug: "four-seasons-hotel-riyadh",
    name: "Four Seasons Hotel Riyadh at Kingdom Centre",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya / Kingdom Centre",
    distanceKm: 35,
    durationMin: 36,
    blurb:
      "A landmark address occupying the upper floors of the Kingdom Tower, crowned by its floodlit Sky Bridge over Olaya.",
    nearby: ["Kingdom Centre", "Al Faisaliah Tower", "Olaya Street"],
  },
  {
    slug: "the-ritz-carlton-riyadh",
    name: "The Ritz-Carlton, Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Diplomatic Quarter / Mekkah Road",
    distanceKm: 37,
    durationMin: 40,
    blurb:
      "A palatial hotel of grand halls and formal gardens beside the Diplomatic Quarter, long favoured for state and executive stays.",
    nearby: ["Diplomatic Quarter", "King Fahd Library", "Salam Park"],
  },
  {
    slug: "mandarin-oriental-al-faisaliah-riyadh",
    name: "Mandarin Oriental Al Faisaliah, Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya / Al Faisaliah",
    distanceKm: 35,
    durationMin: 37,
    blurb:
      "A refined hotel set within the iconic golden-globe Al Faisaliah Tower, a byword for polished service in the heart of Olaya.",
    nearby: ["Al Faisaliah Tower", "Kingdom Centre", "Olaya Street"],
  },
  {
    slug: "burj-rafal-kempinski-riyadh",
    name: "Burj Rafal Hotel Kempinski Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "King Fahd Road / Al Mohammadiyah",
    distanceKm: 31,
    durationMin: 33,
    blurb:
      "A soaring residential-style tower on King Fahd Road, blending Kempinski hospitality with sweeping city views.",
    nearby: ["King Fahd Road", "Kingdom Centre", "Al Nakheel Mall"],
  },
  {
    slug: "hyatt-regency-riyadh-olaya",
    name: "Hyatt Regency Riyadh Olaya",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya",
    distanceKm: 34,
    durationMin: 35,
    blurb:
      "A contemporary Olaya tower steps from the shopping and dining of Olaya Street, popular with corporate travellers.",
    nearby: ["Olaya Street", "Kingdom Centre", "Al Faisaliah Tower"],
  },
  {
    slug: "the-st-regis-riyadh",
    name: "The St. Regis Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Diplomatic Quarter / Um Al Hamam",
    distanceKm: 37,
    durationMin: 40,
    blurb:
      "A discreet, butler-serviced hotel on the green edge of the Diplomatic Quarter, near the trails of Wadi Hanifah.",
    nearby: ["Diplomatic Quarter", "Wadi Hanifah", "King Fahd Library"],
  },
  {
    slug: "fairmont-riyadh",
    name: "Fairmont Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Northern Ring Road / Business Gate",
    distanceKm: 23,
    durationMin: 24,
    blurb:
      "A striking northern tower close to the business gateway and the King Abdullah Financial District, built for the corporate traveller.",
    nearby: ["King Abdullah Financial District", "Riyadh Front", "Northern Ring Road"],
  },
  {
    slug: "intercontinental-riyadh",
    name: "InterContinental Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Diplomatic Quarter / Ma'athar Street",
    distanceKm: 36,
    durationMin: 39,
    blurb:
      "A long-established garden hotel near the ministries and embassies, known for its expansive grounds and event halls.",
    nearby: ["Diplomatic Quarter", "King Fahd Library", "Salam Park"],
  },
  {
    slug: "movenpick-hotel-riyadh",
    name: "Mövenpick Hotel Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya",
    distanceKm: 33,
    durationMin: 35,
    blurb:
      "A dependable business hotel beside the Riyadh exhibition scene in Olaya, with easy access to the King Fahd Road corridor.",
    nearby: ["Olaya Street", "Kingdom Centre", "Riyadh International Convention Centre"],
  },
  {
    slug: "narcissus-hotel-spa-riyadh",
    name: "Narcissus Hotel & Spa Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya / Tahlia Street",
    distanceKm: 34,
    durationMin: 36,
    blurb:
      "An opulent boutique hotel near Tahlia Street, all chandeliers and marble, a short hop from the Olaya towers.",
    nearby: ["Tahlia Street", "Kingdom Centre", "Olaya Street"],
  },
  {
    slug: "voco-riyadh",
    name: "voco Riyadh",
    citySlug: "riyadh",
    stars: 5,
    area: "Olaya / King Fahd Road",
    distanceKm: 32,
    durationMin: 34,
    blurb:
      "A stylish upscale hotel on the Olaya–King Fahd Road spine, well placed for both shopping and business districts.",
    nearby: ["King Fahd Road", "Kingdom Centre", "Al Faisaliah Tower"],
  },
  {
    slug: "hilton-riyadh-hotel-residences",
    name: "Hilton Riyadh Hotel & Residences",
    citySlug: "riyadh",
    stars: 5,
    area: "Eastern Ring Road",
    distanceKm: 25,
    durationMin: 28,
    blurb:
      "A vast convention and leisure complex on the Eastern Ring Road, with extensive pools, dining, and meeting space.",
    nearby: ["Eastern Ring Road", "Granada Mall", "Riyadh Front"],
  },

  // ── Riyadh — 4-star / business ─────────────────────────────────────────────
  {
    slug: "riyadh-marriott-hotel",
    name: "Riyadh Marriott Hotel",
    citySlug: "riyadh",
    stars: 4,
    area: "Airport Road",
    distanceKm: 17,
    durationMin: 20,
    blurb:
      "A well-placed business hotel on Airport Road with lush gardens, handy for both the airport and the exhibition centre.",
    nearby: ["Airport Road", "Riyadh Front", "Eastern Ring Road"],
  },
  {
    slug: "courtyard-by-marriott-riyadh-olaya",
    name: "Courtyard by Marriott Riyadh Olaya",
    citySlug: "riyadh",
    stars: 4,
    area: "Olaya",
    distanceKm: 33,
    durationMin: 35,
    blurb:
      "A practical, modern hotel in the thick of Olaya, designed around the needs of the working traveller.",
    nearby: ["Olaya Street", "Kingdom Centre", "Al Faisaliah Tower"],
  },
  {
    slug: "crowne-plaza-riyadh-rdc",
    name: "Crowne Plaza Riyadh RDC Hotel & Convention",
    citySlug: "riyadh",
    stars: 4,
    area: "RDC / Airport Road",
    distanceKm: 14,
    durationMin: 18,
    blurb:
      "A large conference hotel beside the Riyadh convention grounds, one of the closest full-service options to the airport.",
    nearby: ["Riyadh Convention & Exhibition Center", "King Khalid International Airport", "Airport Road"],
  },
  {
    slug: "radisson-blu-riyadh",
    name: "Radisson Blu Hotel, Riyadh",
    citySlug: "riyadh",
    stars: 4,
    area: "Al Izdihar / Eastern Ring Road",
    distanceKm: 24,
    durationMin: 27,
    blurb:
      "A comfortable business hotel on the Eastern Ring Road, close to Granada shopping and the northern office parks.",
    nearby: ["Eastern Ring Road", "Granada Mall", "Riyadh Front"],
  },
  {
    slug: "holiday-inn-riyadh-izdihar",
    name: "Holiday Inn Riyadh - Izdihar",
    citySlug: "riyadh",
    stars: 4,
    area: "Al Izdihar",
    distanceKm: 26,
    durationMin: 29,
    blurb:
      "A straightforward, family-friendly hotel in the Izdihar district, handy for the ring road and eastern malls.",
    nearby: ["Granada Mall", "Eastern Ring Road", "Riyadh Front"],
  },
  {
    slug: "novotel-riyadh-sahafah",
    name: "Novotel Riyadh Sahafah",
    citySlug: "riyadh",
    stars: 4,
    area: "Al Sahafah",
    distanceKm: 24,
    durationMin: 26,
    blurb:
      "A crisp, contemporary hotel in the fast-growing northern Sahafah district, near the financial quarter.",
    nearby: ["King Abdullah Financial District", "Northern Ring Road", "Riyadh Front"],
  },
  {
    slug: "grand-millennium-al-wahda-riyadh",
    name: "Grand Millennium Al Wahda Riyadh",
    citySlug: "riyadh",
    stars: 4,
    area: "King Abdullah Road / Al Wahda",
    distanceKm: 29,
    durationMin: 32,
    blurb:
      "A polished business hotel on King Abdullah Road, central for meetings and the Al Wahda commercial area.",
    nearby: ["King Abdullah Road", "Al Wahda district", "Kingdom Centre"],
  },

  // ── Riyadh — 3-star ────────────────────────────────────────────────────────
  {
    slug: "centro-olaya-riyadh",
    name: "Centro Olaya Riyadh by Rotana",
    citySlug: "riyadh",
    stars: 3,
    area: "Olaya",
    distanceKm: 34,
    durationMin: 36,
    blurb:
      "A smart, value-focused hotel in Olaya for travellers who want a central base without the five-star price.",
    nearby: ["Olaya Street", "Kingdom Centre", "Tahlia Street"],
  },
  {
    slug: "ibis-riyadh-olaya-street",
    name: "ibis Riyadh Olaya Street",
    citySlug: "riyadh",
    stars: 3,
    area: "Olaya Street",
    distanceKm: 33,
    durationMin: 35,
    blurb:
      "A reliable budget hotel right on Olaya Street, ideal for short business trips and easy city access.",
    nearby: ["Olaya Street", "Al Faisaliah Tower", "Kingdom Centre"],
  },
  {
    slug: "premier-inn-riyadh-olaya",
    name: "Premier Inn Riyadh Olaya",
    citySlug: "riyadh",
    stars: 3,
    area: "Olaya",
    distanceKm: 33,
    durationMin: 35,
    blurb:
      "A simple, consistent hotel in Olaya offering good-value rooms close to the district's towers and malls.",
    nearby: ["Olaya Street", "Kingdom Centre", "Al Faisaliah Tower"],
  },

  // ── Makkah — served by Jeddah (JED) airport, ~90 km / clustered by the Haram ─
  {
    slug: "fairmont-makkah-clock-royal-tower",
    name: "Fairmont Makkah Clock Royal Tower",
    citySlug: "makkah",
    stars: 5,
    area: "Abraj Al-Bait (Clock Tower)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "The landmark tower crowning the Abraj Al-Bait complex, its rooms and clock-facing suites overlooking the Masjid al-Haram just steps away.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "King Abdulaziz Gate"],
  },
  {
    slug: "swissotel-makkah",
    name: "Swissôtel Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Abraj Al-Bait (Clock Tower)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "A refined five-star tower within the Abraj Al-Bait complex, favoured by families for its direct, sheltered walkway toward the Haram.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "Zamzam Well area"],
  },
  {
    slug: "swissotel-al-maqam-makkah",
    name: "Swissôtel Al Maqam Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Abraj Al-Bait (Clock Tower)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "The Al Maqam tower of the Abraj Al-Bait, offering quiet, spacious family rooms moments from the King Abdulaziz Gate of the Haram.",
    nearby: ["Masjid al-Haram", "King Abdulaziz Gate", "Abraj Al-Bait Clock Tower"],
  },
  {
    slug: "hilton-suites-makkah",
    name: "Hilton Suites Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "An all-suite hotel above the Hilton shopping mall, a short level walk from the Haram and popular with longer-staying pilgrim families.",
    nearby: ["Masjid al-Haram", "Hilton Makkah Mall", "Ajyad district"],
  },
  {
    slug: "pullman-zamzam-makkah",
    name: "Pullman ZamZam Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Abraj Al-Bait (Clock Tower)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "A large five-star hotel in the ZamZam tower of the Abraj Al-Bait, known for its wide buffet halls that suit big Umrah groups.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "Safa and Marwah area"],
  },
  {
    slug: "makkah-hotel",
    name: "Makkah Hotel & Towers",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 84,
    blurb:
      "A long-established hotel facing the Haram piazza, valued for its uninterrupted views of the mosque and its central location.",
    nearby: ["Masjid al-Haram", "King Abdulaziz Gate", "Al-Masaa (Safa-Marwah)"],
  },
  {
    slug: "conrad-makkah",
    name: "Conrad Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A polished luxury tower in the Jabal Omar development, linked to the Haram by covered walkways and popular with business-class pilgrims.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "Abraj Al-Bait Clock Tower"],
  },
  {
    slug: "address-jabal-omar-makkah",
    name: "Address Jabal Omar Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A contemporary five-star Address property in Jabal Omar, offering elevated Haram views and a calm setting a short walk from the mosque.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "King Fahd Gate"],
  },
  {
    slug: "jabal-omar-marriott-makkah",
    name: "Jabal Omar Marriott Hotel Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A Marriott tower in the Jabal Omar district with spacious rooms and easy pedestrian access to the Haram via the development's walkways.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "King Fahd Gate"],
  },
  {
    slug: "doubletree-by-hilton-makkah",
    name: "DoubleTree by Hilton Makkah Jabal Omar",
    citySlug: "makkah",
    stars: 4,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A comfortable four-star option in Jabal Omar, giving good-value access to the Haram for families and independent pilgrims.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "King Fahd Gate"],
  },
  {
    slug: "raffles-makkah-palace",
    name: "Raffles Makkah Palace",
    citySlug: "makkah",
    stars: 5,
    area: "Abraj Al-Bait (Clock Tower)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "An all-suite palace hotel atop the Abraj Al-Bait complex, one of the most exclusive addresses overlooking the Haram.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "Zamzam Well area"],
  },
  {
    slug: "anjum-hotel-makkah",
    name: "Anjum Hotel Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Ajyad / Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "A well-known Ajyad-district hotel a short walk from the Haram, popular with returning Umrah groups for its central location.",
    nearby: ["Masjid al-Haram", "Ajyad district", "King Abdulaziz Gate"],
  },
  {
    slug: "hilton-makkah-convention-hotel",
    name: "Hilton Makkah Convention Hotel",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "A large convention-standard Hilton property near the Haram, distinct from the Hilton Suites tower and geared toward bigger groups.",
    nearby: ["Masjid al-Haram", "Hilton Makkah Mall", "Ajyad district"],
  },
  {
    slug: "movenpick-hajar-tower-makkah",
    name: "Mövenpick Hajar Tower Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 84,
    blurb:
      "A five-star tower named for the Hajar pillar, offering Haram-facing rooms a short covered walk from the mosque.",
    nearby: ["Masjid al-Haram", "King Abdulaziz Gate", "Abraj Al-Bait Clock Tower"],
  },
  {
    slug: "intercontinental-dar-al-tawhid-makkah",
    name: "InterContinental Dar Al Tawhid Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "A long-established five-star hotel directly overlooking the Haram, one of the closest towers to the mosque's King Fahd Gate.",
    nearby: ["Masjid al-Haram", "King Fahd Gate", "Abraj Al-Bait Clock Tower"],
  },
  {
    slug: "le-meridien-towers-makkah",
    name: "Le Méridien Towers Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 95,
    durationMin: 85,
    blurb:
      "A twin-tower five-star hotel close to the Haram, popular for its spacious family suites during peak Umrah season.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "Ajyad district"],
  },
  {
    slug: "elaf-ajyad-makkah",
    name: "Elaf Ajyad",
    citySlug: "makkah",
    stars: 4,
    area: "Ajyad",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "A practical four-star hotel in Ajyad, a short walk from the Haram and good value for independent pilgrims.",
    nearby: ["Masjid al-Haram", "Ajyad district", "King Abdulaziz Gate"],
  },
  {
    slug: "elaf-kinda-makkah",
    name: "Elaf Kinda",
    citySlug: "makkah",
    stars: 4,
    area: "Central Area (near Haram)",
    distanceKm: 94,
    durationMin: 85,
    blurb:
      "A mid-tier hotel close to the mosque, part of the Elaf group's cluster of good-value Haram-adjacent properties.",
    nearby: ["Masjid al-Haram", "Abraj Al-Bait Clock Tower", "King Abdulaziz Gate"],
  },
  {
    slug: "voco-makkah",
    name: "voco Makkah",
    citySlug: "makkah",
    stars: 5,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A contemporary upscale hotel in the Jabal Omar development, connected to the Haram by covered walkways.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "King Fahd Gate"],
  },
  {
    slug: "rove-makkah",
    name: "Rove Makkah",
    citySlug: "makkah",
    stars: 4,
    area: "Jabal Omar",
    distanceKm: 94,
    durationMin: 86,
    blurb:
      "A modern, value-focused hotel in Jabal Omar aimed at younger and independent travellers wanting easy Haram access.",
    nearby: ["Masjid al-Haram", "Jabal Omar", "King Fahd Gate"],
  },

  // ── Madinah — served by Prince Mohammad bin Abdulaziz Airport (MED) ─────────
  // Nearly all Madinah hotels cluster tightly in the Central Area immediately
  // around Masjid an-Nabawi, so distance/duration vary only slightly between
  // them — consistent with how the Makkah cluster above is modelled.
  {
    slug: "anwar-al-madinah-movenpick",
    name: "Anwar Al Madinah Mövenpick",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A five-star tower directly facing Masjid an-Nabawi, prized for uninterrupted views of the Green Dome from its upper floors.",
    nearby: ["Masjid an-Nabawi", "Al-Baqi Cemetery", "King Fahd Gate"],
  },
  {
    slug: "pullman-zamzam-madinah",
    name: "Pullman Zamzam Madinah",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A large five-star hotel moments from the mosque's northern gates, known for spacious rooms suited to bigger Umrah groups.",
    nearby: ["Masjid an-Nabawi", "King Fahd Gate", "Al-Baqi Cemetery"],
  },
  {
    slug: "dar-al-taqwa-madinah",
    name: "Dar Al Taqwa Hotel",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 17,
    durationMin: 21,
    blurb:
      "Part of the Dar Al Taqwa complex directly beside the mosque's western side, a short covered walk from the Haram courtyard.",
    nearby: ["Masjid an-Nabawi", "Bab Al Salam", "Al-Baqi Cemetery"],
  },
  {
    slug: "intercontinental-dar-al-iman-madinah",
    name: "InterContinental Dar Al Iman",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area / Qurban Gate",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A long-established five-star hotel near the Qurban Gate side of the mosque, popular with returning pilgrim families.",
    nearby: ["Masjid an-Nabawi", "Qurban Gate", "Al-Baqi Cemetery"],
  },
  {
    slug: "madinah-hilton",
    name: "Madinah Hilton",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A modern high-rise a few minutes' walk from the mosque, with dining floors overlooking the Central Area skyline.",
    nearby: ["Masjid an-Nabawi", "King Fahd Gate", "Madinah Museum"],
  },
  {
    slug: "frontel-al-harithia-madinah",
    name: "Frontel Al Harithia Hotel",
    citySlug: "madinah",
    stars: 4,
    area: "Al Harithia / Central Area",
    distanceKm: 17,
    durationMin: 21,
    blurb:
      "A comfortable mid-tier hotel in the Al Harithia district, a short walk from the mosque's southern gates.",
    nearby: ["Masjid an-Nabawi", "Al-Baqi Cemetery", "Central Market"],
  },
  {
    slug: "elaf-taiba-madinah",
    name: "Elaf Taiba Hotel",
    citySlug: "madinah",
    stars: 4,
    area: "Central Area (near Haram)",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A practical four-star option close to the mosque, favoured by pilgrim groups wanting a shorter walk without the five-star price.",
    nearby: ["Masjid an-Nabawi", "King Fahd Gate", "Al-Baqi Cemetery"],
  },
  {
    slug: "shaza-madinah",
    name: "Shaza Madinah",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area / King Fahd Gate",
    distanceKm: 18,
    durationMin: 22,
    blurb:
      "A boutique five-star hotel near King Fahd Gate, known for personalised service and a quieter, more intimate atmosphere.",
    nearby: ["Masjid an-Nabawi", "King Fahd Gate", "Al-Baqi Cemetery"],
  },
  {
    slug: "crowne-plaza-madinah",
    name: "Crowne Plaza Madinah",
    citySlug: "madinah",
    stars: 5,
    area: "Central Area (near Haram)",
    distanceKm: 17,
    durationMin: 21,
    blurb:
      "A dependable international-standard hotel a short walk from the mosque, popular with business and pilgrim travellers alike.",
    nearby: ["Masjid an-Nabawi", "Al-Baqi Cemetery", "Central Market"],
  },
  {
    slug: "dallah-taibah-madinah",
    name: "Dallah Taibah Hotel",
    citySlug: "madinah",
    stars: 4,
    area: "Central Area (near Haram)",
    distanceKm: 17,
    durationMin: 21,
    blurb:
      "A well-located mid-tier hotel close to the mosque's eastern side, a good-value base for extended Umrah stays.",
    nearby: ["Masjid an-Nabawi", "Al-Baqi Cemetery", "Qurban Gate"],
  },

  // ── Dammam — served by King Fahd International Airport (DMM) ────────────────
  {
    slug: "sheraton-dammam-hotel-convention-centre",
    name: "Sheraton Dammam Hotel & Convention Centre",
    citySlug: "dammam",
    stars: 5,
    area: "Dammam Corniche / Al Shati",
    distanceKm: 44, // OSRM from DMM terminal, 2026-11-21
    durationMin: 33,
    blurb:
      "A landmark waterfront hotel on the Corniche with extensive convention facilities, popular with business travellers and conference guests.",
    nearby: ["Dammam Corniche", "King Fahd Park", "Half Moon Bay"],
  },
  {
    slug: "braira-dammam-hotel",
    name: "Braira Dammam Hotel",
    citySlug: "dammam",
    stars: 4,
    area: "Prince Mohammed bin Fahd Road",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "An all-suite hotel on Prince Mohammed bin Fahd Road, favoured by families and longer-staying business guests for its spacious rooms.",
    nearby: ["Prince Mohammed Bin Fahd Stadium", "Marina Mall", "Dammam Corniche"],
  },
  {
    slug: "park-inn-by-radisson-dammam",
    name: "Park Inn by Radisson Dammam",
    citySlug: "dammam",
    stars: 4,
    area: "City Centre / King Saud Street",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A dependable mid-scale business hotel in the city centre, close to King Saud Street's offices and shopping.",
    nearby: ["King Saud Street", "Dammam Regional Museum", "Dammam Corniche"],
  },
  {
    slug: "wyndham-garden-dammam",
    name: "Wyndham Garden Dammam",
    citySlug: "dammam",
    stars: 4,
    area: "Prince Mohammed bin Fahd Road",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A modern business hotel on Prince Mohammed bin Fahd Road with easy access to the stadium district and the Corniche.",
    nearby: ["Prince Mohammed Bin Fahd Stadium", "Dammam Corniche", "Rashid Mall"],
  },
  {
    slug: "novotel-dammam-business-park",
    name: "Novotel Dammam Business Park",
    citySlug: "dammam",
    stars: 4,
    area: "Dammam Business Park",
    distanceKm: 45, // OSRM from DMM terminal, 2026-11-21
    durationMin: 34,
    blurb:
      "A purpose-built business hotel inside Dammam's commercial park, one of the closest full-service options to the airport.",
    nearby: ["Dammam Business Park", "King Fahd Road", "Dhahran"],
  },
  {
    slug: "golden-tulip-dammam-corniche",
    name: "Golden Tulip Dammam Corniche",
    citySlug: "dammam",
    stars: 4,
    area: "Dammam Corniche",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A comfortable waterfront hotel directly on the Corniche, popular with families for its sea-facing rooms and promenade access.",
    nearby: ["Dammam Corniche", "Al Shatea Park", "King Fahd Park"],
  },
  {
    slug: "boudl-al-shatea",
    name: "Boudl Al Shatea",
    citySlug: "dammam",
    stars: 3,
    area: "Al Shatea / Corniche",
    distanceKm: 45, // OSRM from DMM terminal, 2026-11-21
    durationMin: 34,
    blurb:
      "A value-focused apart-hotel steps from the Al Shatea waterfront, well suited to families wanting extra space.",
    nearby: ["Al Shatea Park", "Dammam Corniche", "Half Moon Bay"],
  },
  {
    slug: "dana-rayhaan-by-rotana",
    name: "Dana Rayhaan by Rotana",
    citySlug: "dammam",
    stars: 5,
    area: "Dammam Corniche",
    distanceKm: 44, // OSRM from DMM terminal, 2026-11-21
    durationMin: 34,
    blurb:
      "An iconic curved tower on the Dammam Corniche, one of the city's best-known five-star addresses with sweeping Gulf views.",
    nearby: ["Dammam Corniche", "King Fahd Park", "Marina Mall"],
  },
  {
    slug: "swiss-spirit-hotel-suites-dammam",
    name: "Swiss Spirit Hotel & Suites Dammam",
    citySlug: "dammam",
    stars: 4,
    area: "City Centre",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A polished city-centre hotel offering both rooms and suites, a practical base for business trips and short family stays.",
    nearby: ["King Saud Street", "Dammam Regional Museum", "Rashid Mall"],
  },
  {
    slug: "howard-johnson-by-wyndham-dammam",
    name: "Howard Johnson by Wyndham Dammam",
    citySlug: "dammam",
    stars: 3,
    area: "City Centre / Al Amir Mohammed Street",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A straightforward, good-value hotel in the city centre, convenient for offices along Al Amir Mohammed Street.",
    nearby: ["King Saud Street", "Dammam Corniche", "Rashid Mall"],
  },
  {
    slug: "ramada-by-wyndham-dammam-khaleej-road",
    name: "Ramada by Wyndham Dammam Khaleej Road",
    citySlug: "dammam",
    stars: 4,
    area: "Khaleej Road",
    distanceKm: 45, // OSRM from DMM terminal, 2026-11-21
    durationMin: 34,
    blurb:
      "A well-placed business hotel on Khaleej Road, one of the quickest airport runs in the city thanks to its northern location.",
    nearby: ["Khaleej Road", "Dammam Business Park", "Dhahran"],
  },
  {
    slug: "residence-inn-by-marriott-dammam",
    name: "Residence Inn by Marriott Dammam",
    citySlug: "dammam",
    stars: 4,
    area: "Business District / King Fahd Road",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "An extended-stay Marriott property with kitchen-equipped suites, popular with energy-sector business travellers on longer assignments.",
    nearby: ["King Fahd Road", "Dammam Business Park", "Prince Mohammed Bin Fahd Stadium"],
  },
  {
    slug: "carlton-al-moaibed-hotel",
    name: "Carlton Al Moaibed Hotel",
    citySlug: "dammam",
    stars: 4,
    area: "City Centre / King Saud Street",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A long-established city-centre hotel near King Saud Street, known among regular visitors for its central, walkable location.",
    nearby: ["King Saud Street", "Dammam Corniche", "Dammam Regional Museum"],
  },
  {
    slug: "lavona-hotel-dammam",
    name: "Lavona Hotel Dammam",
    citySlug: "dammam",
    stars: 3,
    area: "City Centre",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "A simple, comfortable city-centre hotel offering good value for solo travellers and short business visits.",
    nearby: ["King Saud Street", "Rashid Mall", "Dammam Corniche"],
  },
  {
    slug: "maskan-al-dyafah-hotel-apartments",
    name: "Maskan Al Dyafah Hotel Apartments",
    citySlug: "dammam",
    stars: 3,
    area: "Al Danah / City Centre",
    distanceKm: null, // unverified: removed 2026-11-21 (was a ~20 km estimate; DMM is ~40 km from central Dammam)
    durationMin: null,
    blurb:
      "Self-catering hotel apartments in the Al Danah district, a practical choice for families and longer stays close to the centre.",
    nearby: ["Al Danah district", "King Saud Street", "Dammam Corniche"],
  },
];

export const hotelMap: Record<string, Hotel> = Object.fromEntries(
  hotels.map((h) => [`${h.citySlug}/${h.slug}`, h])
);

/** All hotels sitting in a given city. */
export function hotelsForCity(citySlug: string): Hotel[] {
  return hotels.filter((h) => h.citySlug === citySlug);
}

/** Look up a single hotel by city + slug. */
export function getHotel(citySlug: string, slug: string): Hotel | undefined {
  return hotelMap[`${citySlug}/${slug}`];
}
