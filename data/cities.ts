import type { Faq } from "./faqs";
import { cityGuides } from "./city-guides";
import type { CitySection } from "@/components/city-transfer/CityTransferHub";

export interface City {
  slug: string;
  name: string;
  region: string;
  /** Short unique lead paragraph shown in the hero / intro. */
  intro: string;
  /** Longer unique descriptive paragraph used in the body. */
  about: string;
  /** City-specific selling points rendered as a highlight list. */
  highlights: string[];
  /** Notable pickup/drop-off landmarks used for unique content + alt text. */
  landmarks: string[];
  /** Common destinations travellers ask for from this city (display strings). */
  popularDestinations: string[];
  /**
   * Route slugs for the most-requested intercity transfers FROM this city.
   * When populated, the city page renders a linked RouteGrid instead of a
   * plain-text destination list — improving internal linking to route pages.
   */
  popularRoutes?: string[];
  /** Slug of the airport that serves this city, if any. */
  nearestAirportSlug?: string;
  /** Optional SEO overrides; generated automatically when omitted. */
  metaTitle?: string;
  metaDescription?: string;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
  /** Enrichment merged in from city-guides.ts. */
  lastUpdated?: string;
  localInsight?: string;
  faqs?: Faq[];
  hubFaqs?: Faq[];
  /** H2 #1 "Private Transfers in [City]" intro paragraphs (~100-160 words), for the deep /taxi-service/{city} page. */
  introParagraphs?: string[];
  /** The flexible, per-city body sections for /taxi-service/{city} — count and kind vary by city. */
  sections?: CitySection[];
}

const baseCities: City[] = [
  {
    slug: "riyadh",
    name: "Riyadh",
    region: "Riyadh Province",
    intro:
      "Riyadh is the capital and largest city of Saudi Arabia, a sprawling business hub where reliable private transfers matter from the moment you land at King Khalid International Airport.",
    about:
      "As the political and commercial heart of the Kingdom, Riyadh sees constant demand for airport pickups, corporate travel, and long-distance trips to the Eastern Province and the Holy Cities. Our Riyadh taxi service connects every district — from the financial towers of King Fahd Road to Diriyah, Olaya, and the Diplomatic Quarter — with fixed-quote private cars.",
    highlights: [
      "Meet-and-greet pickup at King Khalid International Airport",
      "Corporate and business travel accounts",
      "Long-distance transfers to Dammam, Jeddah, and AlUla",
      "24/7 WhatsApp booking and English-speaking drivers",
    ],
    landmarks: [
      "King Khalid International Airport",
      "Kingdom Centre Tower",
      "Diriyah / At-Turaif",
      "Diplomatic Quarter",
      "Riyadh Front",
    ],
    popularDestinations: ["Dammam", "Jeddah", "AlUla", "Qassim", "Qatar Border"],
    popularRoutes: [
      "riyadh-to-al-kharj",
      "riyadh-to-diriyah",
      "riyadh-to-jeddah",
      "riyadh-to-makkah",
      "riyadh-to-madinah",
      "riyadh-to-alula",
      "riyadh-to-dammam",
      "riyadh-to-qatar-border",
      "riyadh-to-khobar",
      "riyadh-to-jubail",
      "riyadh-to-neom",
      "riyadh-to-taif",
      "riyadh-to-jizan",
    ],
    nearestAirportSlug: "riyadh-airport",
    metaTitle: "Riyadh Taxi Service – Private Airport & City Transfers",
    metaDescription:
      "Book a private taxi in Riyadh for airport pickups, business travel, and city rides. Fixed pricing, professional drivers, 24/7 WhatsApp booking.",
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    region: "Makkah Province",
    intro:
      "Jeddah is the gateway to the Holy Cities and the busiest entry point for Umrah and Hajj pilgrims arriving at King Abdulaziz International Airport.",
    about:
      "Most pilgrims and Red Sea visitors begin their journey in Jeddah. Our Jeddah taxi service specialises in smooth airport-to-Makkah transfers, hotel pickups along the Corniche, and onward travel to Madinah and Taif. Drivers are familiar with the Hajj Terminal, the North Terminal (T1), and every pilgrim hotel district.",
    highlights: [
      "Jeddah airport to Makkah private transfers",
      "Hajj Terminal and Terminal 1 pickups",
      "Red Sea Corniche and Al Balad sightseeing rides",
      "Onward transfers to Madinah and Taif",
    ],
    landmarks: [
      "King Abdulaziz International Airport",
      "Jeddah Corniche",
      "Al-Balad historic district",
      "King Fahd Fountain",
      "Hajj Terminal",
    ],
    popularDestinations: ["Makkah", "Madinah", "Taif", "Riyadh", "Yanbu"],
    popularRoutes: [
      "jeddah-port-to-makkah",
      "jeddah-to-makkah",
      "jeddah-to-madinah",
      "jeddah-to-riyadh",
      "jeddah-to-alula",
      "jeddah-to-dammam",
      "jeddah-to-taif",
      "jeddah-to-abha",
    ],
    nearestAirportSlug: "jeddah-airport",
    metaTitle: "Private Transfers in Jeddah | Airport, City & Makkah",
    metaDescription:
      "Private transfers in Jeddah: King Abdulaziz Airport arrivals, hotels, the Corniche, business travel and onward journeys to Makkah and Madinah. Request a quotation.",
  },
  {
    slug: "makkah",
    name: "Makkah",
    region: "Makkah Province",
    intro:
      "Makkah is the holiest city in Islam and the destination of every Umrah and Hajj pilgrim, where calm, reliable transfers make a real difference.",
    about:
      "Our Makkah taxi service handles arrivals from Jeddah and Taif airports, hotel transfers around the Haram and Clock Tower district, Ziyarat tours of the historic Islamic sites, and private rides to Madinah. Vehicles are comfortable and family-friendly for pilgrims travelling with luggage and elders.",
    highlights: [
      "Jeddah airport to Makkah hotel transfers",
      "Ziyarat tours of Mina, Arafat, Jabal al-Noor",
      "Private Makkah to Madinah transfers",
      "Family vans for pilgrims with luggage",
    ],
    landmarks: [
      "Masjid al-Haram",
      "Abraj Al-Bait (Clock Tower)",
      "Jabal al-Noor (Cave of Hira)",
      "Mina and Arafat",
      "Jabal Thawr",
    ],
    popularDestinations: ["Madinah", "Jeddah", "Taif", "Jeddah Airport"],
    popularRoutes: [
      "makkah-to-jeddah-port",
      "makkah-to-madinah",
      "makkah-to-jeddah",
      "makkah-to-taif",
      "makkah-to-riyadh",
    ],
    nearestAirportSlug: "jeddah-airport",
    metaTitle: "Makkah Taxi Service – Private Umrah & Ziyarat Transfers",
    metaDescription:
      "Private taxi and transfer service in Makkah for pilgrims and visitors, covering hotel pickups near the Haram, Ziyarat sites, and Jeddah Airport transfers.",
  },
  {
    slug: "madinah",
    name: "Madinah",
    region: "Madinah Province",
    intro:
      "Madinah, home to the Prophet's Mosque, welcomes pilgrims year-round through Prince Mohammad bin Abdulaziz International Airport.",
    about:
      "Our Madinah taxi service provides airport meet-and-greet, hotel transfers around the Haram, Ziyarat tours of Quba, Uhud, and the historic mosques, and private long-distance trips to Makkah and AlUla. Drivers understand pilgrim schedules and prayer-time considerations.",
    highlights: [
      "Madinah airport to hotel transfers",
      "Ziyarat tours: Quba, Uhud, Qiblatain",
      "Private Madinah to Makkah and AlUla transfers",
      "Comfortable vehicles for elders and families",
    ],
    landmarks: [
      "Al-Masjid an-Nabawi",
      "Quba Mosque",
      "Mount Uhud",
      "Masjid al-Qiblatain",
      "Prince Mohammad bin Abdulaziz Airport",
    ],
    popularDestinations: ["Makkah", "AlUla", "Jeddah", "Yanbu"],
    popularRoutes: [
      "madinah-to-makkah",
      "madinah-to-jeddah",
      "madinah-to-alula",
      "madinah-to-tabuk",
      "madinah-to-riyadh",
      "madinah-to-yanbu",
      "madinah-to-taif",
      "madinah-to-hail",
    ],
    nearestAirportSlug: "madinah-airport",
    metaTitle: "Madinah Taxi Service – Private Ziyarat & Airport Transfers",
    metaDescription:
      "Book a private taxi in Madinah for airport pickups, hotel transfers near the Prophet's Mosque, and Ziyarat site visits. Fixed price, 24/7 booking.",
  },
  {
    slug: "dammam",
    name: "Dammam",
    region: "Eastern Province",
    intro:
      "Dammam anchors the Eastern Province oil region and connects travellers to Bahrain via the King Fahd Causeway.",
    about:
      "Our Dammam taxi service covers King Fahd International Airport pickups, transfers across the Dammam–Khobar–Dhahran metro area, and cross-border rides to Bahrain. It is a popular choice for energy-sector business travellers and families heading to the Causeway.",
    highlights: [
      "King Fahd International Airport transfers",
      "Dammam to Bahrain Causeway rides",
      "Business travel across Dhahran and Khobar",
      "Intercity transfers to Riyadh and Jubail",
    ],
    landmarks: [
      "King Fahd International Airport",
      "King Fahd Causeway",
      "Dammam Corniche",
      "Half Moon Bay",
      "Dhahran",
    ],
    popularDestinations: ["Khobar", "Bahrain Border", "Riyadh", "Jubail"],
    popularRoutes: [
      "dammam-to-bahrain-airport",
      "dammam-to-bahrain",
      "dammam-to-riyadh",
      "dammam-to-jeddah",
      "dammam-to-jubail",
      "dammam-to-khobar",
      "dammam-to-qatar-border",
    ],
    nearestAirportSlug: "dammam-airport",
    metaTitle: "Dammam Taxi Service – Private Airport & Bahrain Transfers",
    metaDescription:
      "Private taxi service in Dammam covering King Fahd Airport pickups, Bahrain Causeway crossings, and business travel across Khobar and Dhahran.",
  },
  {
    slug: "khobar",
    name: "Khobar",
    region: "Eastern Province",
    intro:
      "Al Khobar is the lively coastal city of the Eastern Province, minutes from the Bahrain Causeway and full of waterfront hotels.",
    about:
      "Our Khobar taxi service handles King Fahd Airport pickups, Corniche hotel transfers, and the popular Khobar to Bahrain crossing. It is well suited to weekend travellers, families, and business visitors moving between Khobar, Dammam, and Dhahran.",
    highlights: [
      "Khobar to Bahrain Causeway transfers",
      "King Fahd Airport pickups",
      "Waterfront hotel and mall transfers",
      "Rides across the Dammam metro area",
    ],
    landmarks: [
      "Khobar Corniche",
      "King Fahd Causeway",
      "Al Rashid Mall",
      "Half Moon Bay",
      "Ithra (Dhahran)",
    ],
    popularDestinations: ["Bahrain Border", "Dammam", "Riyadh", "Jubail"],
    popularRoutes: [
      "khobar-to-bahrain-airport",
      "khobar-to-riyadh",
      "riyadh-to-khobar",
      "khobar-to-bahrain",
    ],
    nearestAirportSlug: "dammam-airport",
    metaTitle: "Khobar Taxi Service – Private Corniche & Causeway Transfers",
    metaDescription:
      "Book a private taxi in Khobar for Corniche hotel pickups, King Fahd Airport transfers, and the popular crossing to Bahrain. Fixed price, 24/7.",
  },
  {
    slug: "jubail",
    name: "Jubail",
    region: "Eastern Province",
    intro:
      "Jubail is the largest industrial city in the region, drawing engineers and contractors who need dependable corporate transfers.",
    about:
      "Our Jubail taxi service focuses on industrial-city logistics: airport transfers from Dammam, project-site pickups in Jubail Industrial City, and intercity rides to Dammam, Khobar, and Riyadh for the energy and petrochemical workforce.",
    highlights: [
      "Dammam airport to Jubail transfers",
      "Corporate and project-site accounts",
      "Intercity rides to Riyadh and Khobar",
      "On-time pickups for shift schedules",
    ],
    landmarks: [
      "Jubail Industrial City",
      "Fanateer Beach",
      "Jubail Corniche",
      "Royal Commission area",
    ],
    popularDestinations: ["Dammam", "Khobar", "Riyadh", "Bahrain Border"],
    popularRoutes: [
      "jubail-to-riyadh",
      "riyadh-to-jubail",
    ],
    nearestAirportSlug: "dammam-airport",
    metaTitle: "Jubail Taxi Service – Private Corporate & Airport Transfers",
    metaDescription:
      "Private taxi service in Jubail for project-site pickups, corporate accounts, and airport transfers from Dammam. On-time drivers for shift schedules.",
  },
  {
    slug: "taif",
    name: "Taif",
    region: "Makkah Province",
    intro:
      "Taif is the cool mountain retreat above Makkah, famous for its roses, fruit farms, and scenic Al Hada road.",
    about:
      "Our Taif taxi service offers airport transfers, the scenic Makkah to Taif mountain route, and sightseeing rides to Al Shafa and the cable car. It is a favourite summer escape for pilgrims and families seeking the cooler highlands.",
    highlights: [
      "Makkah to Taif mountain transfers",
      "Taif airport pickups",
      "Al Hada and Al Shafa sightseeing",
      "Cable car and rose-farm day trips",
    ],
    landmarks: [
      "Al Hada Mountain",
      "Taif Cable Car",
      "Al Shafa",
      "Shubra Palace",
      "Taif Regional Airport",
    ],
    popularDestinations: ["Makkah", "Jeddah", "Madinah", "Abha"],
    popularRoutes: [
      "taif-to-riyadh",
      "riyadh-to-taif",
      "taif-to-jeddah-airport",
      "taif-to-madinah",
    ],
    nearestAirportSlug: "taif-airport",
    metaTitle: "Taif Taxi Service – Private Al Hada Mountain Transfers",
    metaDescription:
      "Book a private taxi in Taif for airport transfers, the scenic Al Hada mountain road from Makkah, and rose-farm or cable car day trips.",
  },
  {
    slug: "abha",
    name: "Abha",
    region: "Asir Province",
    intro:
      "Abha is the green, mist-covered capital of Asir, a top domestic tourism destination in the southern highlands.",
    about:
      "Our Abha taxi service covers Abha International Airport pickups, transfers to mountain resorts and the cable car, and sightseeing across the Asir highlands including Habala and Green Mountain. Ideal for families exploring Saudi Arabia's cooler south.",
    highlights: [
      "Abha airport transfers",
      "Asir highlands and cable-car sightseeing",
      "Habala and Al Soudah day trips",
      "Onward rides to Khamis Mushait and Najran",
    ],
    landmarks: [
      "Abha International Airport",
      "Green Mountain (Jabal Thera)",
      "Al Soudah",
      "Habala",
      "Abha Dam Lake",
    ],
    popularDestinations: ["Khamis Mushait", "Najran", "Jazan", "Taif"],
    popularRoutes: [
      "abha-to-riyadh",
      "abha-to-jeddah",
      "riyadh-to-abha",
    ],
    nearestAirportSlug: "abha-airport",
    metaTitle: "Private Transfers in Abha | Airport, City & Asir Trips",
    metaDescription:
      "Private transfers around Abha and the Asir highlands: airport, hotels, Al-Soudah, Habala and Khamis Mushait. Share your plans to receive a quotation.",
  },
  {
    slug: "tabuk",
    name: "Tabuk",
    region: "Tabuk Province",
    intro:
      "Tabuk is the gateway to NEOM and the historic northwest, blending desert heritage with the Kingdom's most ambitious mega-project.",
    about:
      "Our Tabuk taxi service provides airport transfers, rides to NEOM project areas, and trips to historic sites like the Hejaz Railway station and Tabuk Castle. It serves both business travellers and tourists heading toward the Red Sea coast.",
    highlights: [
      "Tabuk airport transfers",
      "NEOM project-area rides",
      "Historic Hejaz Railway and Tabuk Castle tours",
      "Onward travel toward the Red Sea coast",
    ],
    landmarks: [
      "Tabuk Regional Airport",
      "Tabuk Castle",
      "Hejaz Railway Station",
      "NEOM region",
    ],
    popularDestinations: ["AlUla", "Madinah", "NEOM", "Yanbu"],
    popularRoutes: [
      "tabuk-to-riyadh",
      "tabuk-to-alula",
      "tabuk-to-neom",
      "tabuk-to-madinah",
    ],
    nearestAirportSlug: "tabuk-airport",
    metaTitle: "Tabuk Taxi Service – Private Airport & NEOM Transfers",
    metaDescription:
      "Book a private taxi in Tabuk for airport pickups, NEOM project-area rides, and visits to the Hejaz Railway station and Tabuk Castle.",
  },
  {
    slug: "alula",
    name: "AlUla",
    region: "Madinah Province",
    intro:
      "AlUla is Saudi Arabia's premier heritage destination, home to the UNESCO-listed Hegra and dramatic desert landscapes.",
    about:
      "Our AlUla taxi service handles airport transfers, resort pickups, and guided-style rides to Hegra (Madain Salih), Elephant Rock, and the Old Town. Many guests combine AlUla with private transfers to Madinah, Tabuk, and Riyadh.",
    highlights: [
      "AlUla airport and resort transfers",
      "Hegra, Elephant Rock, and Old Town rides",
      "Private transfers to Madinah and Riyadh",
      "Comfortable vehicles for desert touring",
    ],
    landmarks: [
      "Hegra (Madain Salih)",
      "Elephant Rock",
      "AlUla Old Town",
      "Maraya Concert Hall",
      "AlUla International Airport",
    ],
    popularDestinations: ["Madinah", "Tabuk", "Riyadh", "Yanbu"],
    popularRoutes: [
      "alula-to-tabuk",
      "alula-to-neom",
      "alula-to-riyadh",
      "alula-to-jeddah",
      "alula-to-madinah",
      "alula-to-yanbu",
    ],
    nearestAirportSlug: "alula-airport",
    metaTitle: "AlUla Taxi Service – Private Hegra & Resort Transfers",
    metaDescription:
      "Private taxi and chauffeur service in AlUla for airport and resort transfers, plus rides to Hegra, Elephant Rock, and AlUla Old Town.",
  },
  {
    slug: "yanbu",
    name: "Yanbu",
    region: "Madinah Province",
    intro:
      "Yanbu is a Red Sea industrial and resort city known for clear waters, diving, and the Royal Commission waterfront.",
    about:
      "Our Yanbu taxi service offers airport transfers, beach-resort pickups, and intercity rides to Madinah and Jeddah. It serves both the petrochemical workforce and leisure travellers enjoying the Red Sea coast.",
    highlights: [
      "Yanbu airport transfers",
      "Red Sea resort and dive-site pickups",
      "Intercity rides to Madinah and Jeddah",
      "Corporate transfers for the industrial city",
    ],
    landmarks: [
      "Yanbu Royal Commission Waterfront",
      "Yanbu Airport",
      "Sharm Yanbu",
      "Yanbu Industrial City",
    ],
    popularDestinations: ["Madinah", "Jeddah", "AlUla", "Makkah"],
    popularRoutes: [
      "yanbu-to-riyadh",
      "riyadh-to-yanbu",
      "yanbu-to-madinah",
      "yanbu-to-alula",
      "yanbu-to-jeddah-airport",
    ],
    nearestAirportSlug: "yanbu-airport",
    metaTitle: "Yanbu Taxi Service – Private Airport & Resort Transfers",
    metaDescription:
      "Book a private taxi in Yanbu for airport pickups, Red Sea resort and dive-site transfers, and intercity rides to Madinah and Jeddah.",
  },
  {
    slug: "hail",
    name: "Hail",
    region: "Hail Province",
    intro:
      "Hail is the historic northern city famed for its rock art, the Aja and Salma mountains, and warm desert hospitality.",
    about:
      "Our Hail taxi service provides airport transfers, city rides, and trips to the UNESCO rock-art sites at Jubbah. It is a practical base for travellers exploring the northern desert and the route toward AlUla.",
    highlights: [
      "Hail airport transfers",
      "Jubbah rock-art and A'arif Fort tours",
      "Desert and mountain sightseeing",
      "Onward rides toward AlUla and Qassim",
    ],
    landmarks: [
      "Hail Regional Airport",
      "A'arif Fort",
      "Aja Mountains",
      "Jubbah rock art",
    ],
    popularDestinations: ["AlUla", "Buraidah", "Riyadh", "Tabuk"],
    popularRoutes: [
      "hail-to-riyadh",
      "riyadh-to-hail",
      "hail-to-madinah",
    ],
    nearestAirportSlug: "hail-airport",
    metaTitle: "Hail Taxi Service – Private Airport & City Transfers",
    metaDescription:
      "Private taxi service in Hail covering airport pickups, city rides, and trips to the UNESCO Jubbah rock-art site and A'arif Fort in the northern desert.",
  },
  {
    slug: "najran",
    name: "Najran",
    region: "Najran Province",
    intro:
      "Najran is the distinctive southern city of mud-brick palaces and oasis farms near the Yemeni frontier.",
    about:
      "Our Najran taxi service covers airport transfers, city rides to the Al-Ukhdood archaeological site and Najran Dam, and intercity travel toward Abha and Jazan. Vehicles are well suited to the long desert legs of the south.",
    highlights: [
      "Najran airport transfers",
      "Al-Ukhdood and Najran Dam sightseeing",
      "Heritage mud-brick palace visits",
      "Intercity rides to Abha and Jazan",
    ],
    landmarks: [
      "Najran Domestic Airport",
      "Al-Ukhdood",
      "Najran Dam",
      "Aan Palace",
    ],
    popularDestinations: ["Abha", "Jazan", "Khamis Mushait", "Riyadh"],
    metaTitle: "Najran Taxi Service – Private Airport & City Transfers",
    metaDescription:
      "Book a private taxi in Najran for airport transfers, visits to Al-Ukhdood and Najran Dam, and intercity rides to Abha and Jazan.",
  },
  {
    slug: "jazan",
    name: "Jazan",
    region: "Jazan Province",
    intro:
      "Jazan is the lush southwestern coastal region, the launch point for the Farasan Islands and the Kingdom's tropical agriculture belt.",
    about:
      "Our Jazan taxi service offers airport transfers, ferry-terminal drop-offs for the Farasan Islands, and rides into the Fifa Mountains. It serves both leisure travellers and the growing economic-city workforce on the Red Sea south.",
    highlights: [
      "Jazan airport transfers",
      "Farasan Islands ferry-terminal transfers",
      "Fifa Mountains sightseeing",
      "Coastal corniche and resort rides",
    ],
    landmarks: [
      "Jazan Airport",
      "Farasan Islands ferry terminal",
      "Fifa Mountains",
      "Jazan Corniche",
    ],
    popularDestinations: ["Abha", "Najran", "Khamis Mushait", "Farasan"],
    popularRoutes: [
      "jizan-to-riyadh",
    ],
    nearestAirportSlug: "jazan-airport",
    metaTitle: "Private Transfers in Jazan | Airport, Farasan Ferry & Fayfa",
    metaDescription:
      "Private transfers in Jazan: the airport, hotels, the Farasan Islands ferry terminal, the Fayfa Mountains, Abha and Najran. Share your plans to receive a quotation.",
  },
  {
    slug: "buraidah",
    name: "Buraidah",
    region: "Al Qassim Province",
    intro:
      "Buraidah is the agricultural capital of Al Qassim, famous for the world's largest date festival and central-Kingdom road links.",
    about:
      "Our Buraidah taxi service provides airport transfers, city rides, and intercity travel across central Saudi Arabia. The city's position on the Riyadh–Hail corridor makes it a frequent stop for long-distance private transfers.",
    highlights: [
      "Qassim airport transfers",
      "Buraidah Date Festival season rides",
      "Central-Kingdom intercity transfers",
      "Comfortable vehicles for long desert legs",
    ],
    landmarks: [
      "Prince Naif bin Abdulaziz Airport (Qassim)",
      "Buraidah Date City",
      "Al Bukayriyah",
      "Qassim Date Festival grounds",
    ],
    popularDestinations: ["Riyadh", "Hail", "Madinah", "Makkah"],
    popularRoutes: [
      "qassim-to-riyadh",
      "riyadh-to-qassim",
    ],
    metaTitle: "Buraidah Taxi Service – Private Airport & Intercity Transfers",
    metaDescription:
      "Book a private taxi in Buraidah for Qassim airport transfers and long-distance intercity rides across central Saudi Arabia. Fixed price, 24/7.",
  },
  {
    slug: "hofuf",
    name: "Hofuf",
    region: "Eastern Province",
    intro:
      "Hofuf is the principal city of the Al-Ahsa Oasis, a UNESCO World Heritage site of palm groves, springs, and historic markets.",
    about:
      "Our Hofuf taxi service covers Al-Ahsa airport transfers, heritage tours of Qaisariah Souq and Ibrahim Palace, and intercity rides to Dammam, Khobar, and Riyadh. It is a comfortable way to explore the largest oasis in the world.",
    highlights: [
      "Al-Ahsa airport transfers",
      "Qaisariah Souq and Ibrahim Palace tours",
      "Jabal Al-Qarah cave visits",
      "Intercity rides to Dammam and Riyadh",
    ],
    landmarks: [
      "Al-Ahsa International Airport",
      "Qaisariah Souq",
      "Ibrahim Palace",
      "Jabal Al-Qarah",
    ],
    popularDestinations: ["Dammam", "Khobar", "Riyadh", "Bahrain Border"],
    popularRoutes: [
      "hofuf-to-riyadh",
      "riyadh-to-hofuf",
    ],
    metaTitle: "Hofuf Taxi Service – Private Al-Ahsa Oasis Transfers",
    metaDescription:
      "Private taxi service in Hofuf covering Al-Ahsa airport transfers, Qaisariah Souq heritage tours, and intercity rides to Dammam and Riyadh.",
  },
  {
    slug: "al-ahsa",
    name: "Al Ahsa",
    region: "Eastern Province",
    intro:
      "Al-Ahsa is the vast UNESCO-listed oasis governorate of the Eastern Province, with millions of palm trees and natural springs.",
    about:
      "Our Al-Ahsa taxi service connects the airport, the oasis heritage sites, and the surrounding towns with private transfers. Travellers use it for sightseeing across the palm groves and for intercity trips to Dammam, Riyadh, and the Bahrain Causeway.",
    highlights: [
      "Al-Ahsa airport transfers",
      "Oasis and spring sightseeing tours",
      "Heritage souq and palace visits",
      "Intercity rides to Dammam and Riyadh",
    ],
    landmarks: [
      "Al-Ahsa International Airport",
      "Al-Ahsa Oasis palm groves",
      "Jabal Al-Qarah",
      "Yellow Lake",
    ],
    popularDestinations: ["Dammam", "Khobar", "Riyadh", "Bahrain Border"],
    metaTitle: "Al-Ahsa Taxi Service – Private Oasis & Airport Transfers",
    metaDescription:
      "Book a private taxi in Al-Ahsa for airport transfers, oasis and heritage sightseeing, and intercity rides to Dammam, Riyadh, and Bahrain.",
  },
  {
    slug: "khamis-mushait",
    name: "Khamis Mushait",
    region: "Asir Province",
    intro:
      "Khamis Mushait is the largest city of the Asir region and the commercial twin of nearby Abha in the southern highlands.",
    about:
      "Our Khamis Mushait taxi service offers Abha airport transfers, city rides, and highland sightseeing across the Asir mountains. Its central location makes it a practical base for trips to Abha, Najran, and Jazan.",
    highlights: [
      "Abha airport to Khamis Mushait transfers",
      "Asir highland sightseeing",
      "City and market transfers",
      "Onward rides to Najran and Jazan",
    ],
    landmarks: [
      "Abha International Airport",
      "Al Mahalah Heritage Village",
      "Asir highlands",
      "Khamis Mushait city centre",
    ],
    popularDestinations: ["Abha", "Najran", "Jazan", "Riyadh"],
    nearestAirportSlug: "abha-airport",
    metaTitle: "Khamis Mushait Taxi – Private Abha Airport Transfers",
    metaDescription:
      "Private taxi service in Khamis Mushait covering Abha Airport transfers, city rides, and highland sightseeing across the Asir mountains.",
  },
];

export const cities: City[] = baseCities.map((c) => ({
  ...c,
  ...cityGuides[c.slug],
}));

export const cityMap: Record<string, City> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
);

export function getCity(slug: string): City | undefined {
  return cityMap[slug];
}
