import type { PointTransferV2Page } from "./types";

/**
 * Makkah V2 point-transfer pages — Ziyarat/attraction, railway and service
 * pages redesigned onto PointTransferV2View. Replaces the corresponding
 * entries in data/makkah/attractions.ts, railway.ts and services.ts (see
 * lib/point-transfers-v2.ts). Written respectfully and factually about the
 * sacred sites — no invented hadith, dates, rulings, prices or facilities;
 * Makkah entry is for Muslims only, and the audience throughout is pilgrims.
 */
export const makkahPointTransfersV2: PointTransferV2Page[] = [
  {
    slug: "makkah-ziyarat-tour",
    citySlug: "makkah",
    from: "Makkah",
    to: "Ziyarat Tour",
    isPointToPoint: false,
    // Rendered by components/makkah/MakkahZiyaratTourView.tsx (copy and FAQs
    // in data/makkah-ziyarat-tour.ts). This entry still supplies the metadata,
    // static params and sitemap entry; its content blocks are not rendered.
    h1: "Makkah Ziyarat Tour: Private Car and Custom Itinerary",
    metaTitle: "Makkah Ziyarat Tour by Private Car | Full-Day & Half-Day",
    metaDescription:
      "Explore Makkah's historic Ziyarat sites by private car. Request a half-day or full-day itinerary covering Jabal al-Noor, Jabal Thawr and the Hajj sites.",
    duration: "Half-day or full-day, depending on your stops",
    heroAlt: "Historic Islamic Ziyarat sites around Makkah",
    content: {
      category: "attraction",
      eyebrow: "The full Ziyarat circuit, one booking",
      dek: "One private car and driver, one fixed price — Jabal al-Noor and the Cave of Hira, Jabal Thawr, and the Hajj sites of Mina, Muzdalifah and Arafat, in a single well-planned circuit.",
      stats: [
        { label: "Half day", value: "4-5 hrs" },
        { label: "Full day", value: "7-8 hrs", emphasis: true },
        { label: "Total loop distance", value: "~60-80 km" },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "What the circuit covers",
          image: { src: "/images/ziyarat/makkah-ziyarat-tour.webp", alt: "Historic Islamic Ziyarat sites around Makkah" },
          paragraphs: [
            "A Ziyarat tour visits the historic Islamic sites around Makkah tied to the Hajj and to the earliest events of the Prophet Muhammad's (peace be upon him) life. Rather than booking each site separately, this combined tour links them into one logical driving circuit: Jabal al-Noor and the Cave of Hira, Jabal Thawr, and the three Hajj sites — Mina, Muzdalifah, and Arafat with Jabal al-Rahmah — plus, time permitting, Masjid Aisha (the Tan'im miqat) and Jannat al-Mu'alla cemetery. Each site also has its own dedicated page if you'd rather book a single stop.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "The logical order for a full-circuit day",
          paragraphs: [
            "The most efficient circuit starts at Jabal al-Noor in the early morning (5-7 a.m.) while temperatures are lowest and the climb least crowded. From there the route heads south to Jabal Thawr (~12-14 km), then turns east toward the Hajj sites — Mina, then Muzdalifah (~4-5 km further), then Arafat (~10-12 km further) — broadly the same sequence pilgrims travel during Hajj itself. A full-day circuit closes back toward central Makkah, often with a stop at Jannat al-Mu'alla.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Realistic timing",
          stats: [
            { label: "Driving between stops", value: "~2-2.5 hrs total" },
            { label: "Jabal al-Noor climb alone", value: "2-2.5 hrs if to the cave" },
          ],
          paragraphs: [
            "During Ramadan and the weeks around Hajj, both driving and visiting times increase noticeably at every stop — a full-day booking sometimes needs to drop one or two sites to stay realistic, which your driver can advise on at the time.",
          ],
        },
        {
          type: "scenarios",
          heading: "Suggested itineraries",
          items: [
            { title: "Half day (4-5 hrs)", description: "Jabal al-Noor (base visit or partial climb) plus the three Hajj sites, skipping Jabal Thawr to keep the day manageable." },
            { title: "Full day (7-8 hrs)", description: "The complete circuit — both mountains, all three Hajj sites, plus Jannat al-Mu'alla." },
            { title: "Family itinerary", description: "Base-level visits at both mountains, more time at the Hajj plains where children can move safely, a mid-morning break built in." },
            { title: "Elderly-friendly itinerary", description: "The three Hajj sites plus a drive-past view of both mountains from their base car parks — no climbing required." },
            { title: "2-hour taster", description: "Jabal al-Noor base visit and Jannat al-Mu'alla only — the two most accessible, high-significance stops closest to central Makkah." },
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Choosing a vehicle for the full circuit",
          paragraphs: [
            "A sedan suits solo travellers and couples for the day; an SUV is worth it for extra legroom on a 7-8 hour booking, and gives families room to rest between stops. Groups of six or more are best served by a van or minibus for one shared price. Wheelchair users can reach the Hajj plain sites largely by vehicle with minimal walking, but the mountain summits (Hira, Thawr) are not accessible — mention this in advance so we can plan a circuit built entirely around the accessible stops.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Individual site pages",
          links: [
            { label: "Cave of Hira (Jabal al-Noor)", href: "/makkah/makkah-to-cave-of-hira" },
            { label: "Jabal Thawr", href: "/makkah/makkah-to-jabal-thawr" },
            { label: "Mina", href: "/makkah/makkah-to-mina" },
            { label: "Muzdalifah", href: "/makkah/makkah-to-muzdalifah" },
            { label: "Arafat & Jabal al-Rahmah", href: "/makkah/makkah-to-arafat" },
            { label: "Makkah Historical Sites Tour", href: "/makkah/makkah-historical-sites-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What sites does the tour cover?", answer: "Typically Jabal al-Noor (Cave of Hira), Jabal Thawr, and the three Hajj sites — Mina, Muzdalifah, and Arafat with Jabal al-Rahmah — plus, time permitting, Masjid Aisha and Jannat al-Mu'alla." },
        { question: "What order are the sites visited in?", answer: "Typically Jabal al-Noor at dawn, south to Jabal Thawr, then east to the Hajj sites in sequence — Mina, Muzdalifah, Arafat — closing back toward central Makkah." },
        { question: "Do we have to climb both mountains?", answer: "No — climbing is optional at both. Many visitors view Jabal Thawr from the base given its steeper ascent, while still climbing Jabal al-Noor if time and fitness allow." },
        { question: "Can I visit the Hajj sites outside the Hajj season?", answer: "Yes — outside the official Hajj days, all three sites are open, quiet and straightforward to visit by private car. During Hajj itself, access is restricted to pilgrims performing the official rites." },
        { question: "Is the price fixed for the whole day?", answer: "Yes — one fixed, all-inclusive price agreed before the tour, covering the vehicle, driver, and waiting time at every stop." },
        { question: "How early should the tour start?", answer: "5 to 7 a.m. is strongly recommended if Jabal al-Noor is included — the climb is far more comfortable and less crowded before mid-morning." },
      ],
    },
  },
  {
    slug: "makkah-to-cave-of-hira",
    citySlug: "makkah",
    from: "Makkah",
    to: "Cave of Hira (Jabal al-Noor)",
    h1: "Cave of Hira (Jabal al-Noor): Private Taxi Tour from Makkah",
    metaTitle: "Cave of Hira & Jabal al-Noor Tour | Private Taxi Makkah",
    metaDescription:
      "Private car and waiting driver from your Makkah hotel to Jabal al-Noor and the Cave of Hira — distances, best visiting times, the climb, and fixed pricing.",
    distance: "~5 km northeast of the Haram",
    duration: "2-3 hrs with waiting (add 2+ hrs if climbing)",
    heroAlt: "Jabal al-Noor mountain near Makkah, home to the Cave of Hira",
    content: {
      category: "attraction",
      eyebrow: "Where the first revelation came",
      dek: "A demanding 1,650-step climb to a small cave near the summit — best attempted at dawn, and meaningful even as a base-level visit.",
      stats: [
        { label: "From the Haram", value: "~5 km" },
        { label: "Climb (each way)", value: "45 min - 1.5 hrs", emphasis: true },
        { label: "Best departure", value: "5-7 a.m." },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/cave-of-hira-jabal-al-noor.webp", alt: "Jabal al-Noor mountain near Makkah, home to the Cave of Hira" },
          paragraphs: [
            "Near the summit of Jabal al-Noor sits the Cave of Hira, where the Prophet Muhammad (peace be upon him) received the first revelation of the Qur'an. He is reported to have retreated here regularly beforehand to reflect in solitude. The mountain sits away from the Haram's pedestrian network with no organised public transport, so a private transfer with a waiting driver is the practical way most pilgrims reach it — visits range from a 20-minute base viewing to a 2.5-hour full ascent.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From Clock Tower hotels", value: "~5 km, 12-18 min" },
            { label: "From Aziziyah hotels", value: "~2-4 km, shortest start" },
            { label: "From Jeddah Airport", value: "~85 km" },
          ],
          paragraphs: [
            "Best departure is 5-7 a.m., straight after Fajr — cooler temperatures, quieter roads, and a shorter queue at the cave entrance, which becomes congested from mid-morning. During Ramadan and the weeks around Hajj, the same drive can take 30-45 minutes and the climb queue lengthens considerably.",
          ],
          note: "From May through September, the exposed, shadeless climb is genuinely demanding — an early slot is close to essential, and carrying more water than you think you need is standard local advice.",
        },
        {
          type: "vehiclePlanning",
          heading: "The climb, accessibility, and vehicle choice",
          paragraphs: [
            "The climb covers roughly 1,650 uneven stone steps, a genuine hike over rough terrain rather than a paved path — demanding even for fit visitors in summer heat. Many pilgrims, especially those with elderly relatives, young children, or joint/heart conditions, choose to view and reflect from the base instead, which is a fully appropriate way to complete the visit. The summit and cave are not wheelchair accessible; the base and viewing area, reached by vehicle, are accessible to all.",
            "A sedan suits solo travellers and couples; an SUV gives families room for those resting in the vehicle while others climb; groups of six or more are best served by a van or minibus. Sturdy, closed footwear is essential — not sandals.",
          ],
        },
        {
          type: "checklist",
          heading: "Practical checklist",
          items: [
            "No entry fee, gate or fixed hours — access is limited only by the climb itself",
            "Photography is fine at the base and on the climb; keep it brief inside the small cave, which holds only two or three people at a time",
            "Mention any mobility needs in advance so we can plan a base-level visit with the closest possible drop-off",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Jabal Thawr (12-14 km away)", href: "/makkah/makkah-to-jabal-thawr" },
            { label: "Full Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
            { label: "Makkah Hotel to Haram Transfer", href: "/makkah/makkah-hotel-to-haram-transfer" },
          ],
        },
      ],
      faqs: [
        { question: "How many steps are there to the Cave of Hira?", answer: "Approximately 1,650 uneven stone steps; most fit adults take 45 minutes to 1.5 hours each way." },
        { question: "Is the climb difficult?", answer: "Yes — a genuine hike over rough terrain with no shade, demanding even for fit visitors. Many pilgrims choose to view and reflect from the base instead." },
        { question: "What is the best time to visit?", answer: "Between 5 and 7 a.m., ideally straight after Fajr — cooler temperatures, lighter traffic, and a shorter queue at the cave entrance." },
        { question: "Will my driver wait while I climb?", answer: "Yes — at the base for however long your visit takes, whether 20 minutes or several hours." },
        { question: "Is there an entry fee?", answer: "No — no ticket, gate or fixed closing time; access is limited only by daylight and the physical climb." },
        { question: "Can I combine this with Jabal Thawr the same day?", answer: "Yes, many pilgrims do — the two mountains are roughly 12-14 km apart, though a full-day booking gives more comfortable time at each." },
      ],
    },
  },
  {
    slug: "makkah-to-jabal-thawr",
    citySlug: "makkah",
    from: "Makkah",
    to: "Jabal Thawr",
    h1: "Jabal Thawr & the Cave of Thawr: Private Taxi Tour from Makkah",
    metaTitle: "Jabal Thawr Transfer | Cave of Thawr Private Taxi",
    metaDescription:
      "Private car and waiting driver from your Makkah hotel to Jabal Thawr, the Cave of Thawr — distances, climb difficulty, best times, fixed pricing.",
    distance: "~8 km south of the Haram",
    duration: "2-3 hrs with waiting (longer if climbing)",
    heroAlt: "Jabal Thawr mountain south of Makkah",
    content: {
      category: "attraction",
      eyebrow: "Where the Prophet sheltered during the Hijrah",
      dek: "The steeper, quieter sister site to Jabal al-Noor — a rougher scramble over natural rock, and comparatively few visitors make the climb.",
      stats: [
        { label: "From the Haram", value: "~8 km" },
        { label: "Climb (each way)", value: "1.5-2.5 hrs", emphasis: true },
        { label: "Best departure", value: "Before 8 a.m." },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/jabal-thawr.webp", alt: "Jabal Thawr mountain south of Makkah" },
          paragraphs: [
            "The Cave of Thawr sheltered the Prophet Muhammad (peace be upon him) and Abu Bakr al-Siddiq for three nights during the Hijrah — the migration to Madinah in 622 CE — while the Quraysh searched for them below. Tradition holds that a spider's web and a dove's nest at the entrance discouraged the pursuers from looking inside. Unlike Jabal al-Noor, Thawr remains comparatively undeveloped and quiet, and for those who make the climb, the relative solitude is often part of the experience.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~8 km, 15-20 min" },
            { label: "From Jeddah Airport", value: "~90 km" },
            { label: "From Jabal al-Noor", value: "~12-14 km" },
          ],
          paragraphs: [
            "Best time is early morning, ideally before 8 a.m. Ramadan and peak season add modest delays, generally less than at Jabal al-Noor given Thawr's lower visitor numbers.",
          ],
          note: "Because the area sits away from central Makkah, independent onward transport is genuinely hard to find — a waiting driver matters more here than at more central sites.",
        },
        {
          type: "vehiclePlanning",
          heading: "A harder climb than Jabal al-Noor",
          paragraphs: [
            "The path is long, steep and rocky with no formal stepped path — a rougher scramble over natural rock, generally considered the harder of the two mountain climbs in the circuit, at 1.5-2.5 hours each way. Many visitors, including families and older pilgrims, choose to view and reflect from the base instead, which remains a fully meaningful way to visit. The summit is not wheelchair accessible; the base and mountain view are reachable entirely by vehicle.",
          ],
        },
        {
          type: "checklist",
          heading: "Practical checklist",
          items: [
            "Sturdy, closed hiking-appropriate footwear is more important here than at almost any other Ziyarat site",
            "No entry fee or fixed hours",
            "Photography is generally permitted throughout, including near the cave entrance, given the lower visitor volume",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Cave of Hira (Jabal al-Noor)", href: "/makkah/makkah-to-cave-of-hira" },
            { label: "Full Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
          ],
        },
      ],
      faqs: [
        { question: "Is the climb harder than Jabal al-Noor?", answer: "Yes — a long, steep, rocky scramble with no formal stepped path, generally considered the more demanding of the two." },
        { question: "What is the significance of the Cave of Thawr?", answer: "The Prophet Muhammad (peace be upon him) and Abu Bakr al-Siddiq sheltered here for three nights during the Hijrah in 622 CE." },
        { question: "Does the driver wait while I climb?", answer: "Yes — which matters especially here, since taxis are very hard to find in Thawr's quieter surroundings." },
        { question: "Can elderly pilgrims or children climb?", answer: "Not recommended given the difficulty — a base-level visit is a complete and meaningful alternative." },
        { question: "Is there an entry fee?", answer: "No — no gate, ticket or fixed hours; access is limited only by daylight and the climb's difficulty." },
        { question: "Can I visit both mountains in one day?", answer: "Possible but demanding — many pilgrims split them across separate mornings, or budget a full day for a full climb of one and a base visit of the other." },
      ],
    },
  },
  {
    slug: "makkah-historical-sites-tour",
    citySlug: "makkah",
    from: "Makkah",
    to: "Historical Sites Tour",
    isPointToPoint: false,
    h1: "Makkah Historical Sites Tour by Private Car",
    metaTitle: "Makkah Historical Sites Tour | Private Heritage Car Tour",
    metaDescription:
      "Private Makkah historical sites tour by car — the Makkah Museum, Hudaybiyyah, heritage landmarks and the Hajj plains, with a knowledgeable driver.",
    duration: "Half day",
    content: {
      category: "attraction",
      eyebrow: "A heritage view of the city",
      dek: "Where the Ziyarat tour focuses on the spiritual sites, this one takes a broader civic-history view — museums, historic areas and landmarks.",
      stats: [
        { label: "Duration", value: "Half day", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "What the tour covers",
          paragraphs: [
            "The Makkah Museum, housed in the historic Al-Zahir Palace, gathers artefacts and exhibits on the city's history and the development of the two Holy Mosques. To the west lies the historic area associated with Hudaybiyyah, remembered for the treaty of that name, where Masjid al-Hudaybiyyah stands near the Haram boundary. A historical tour naturally passes the plains of Mina, Arafat and Muzdalifah too, and back in the centre, the Abraj Al-Bait Clock Tower represents modern Makkah's transformation.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "How it complements the Ziyarat tour",
          paragraphs: [
            "This tour is private and flexible, so you dwell on what interests you most. It complements rather than repeats the Makkah Ziyarat Tour, and many visitors do both on separate days — this one for civic and heritage context, that one for the spiritually significant sites.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related tours",
          links: [
            { label: "Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
            { label: "Ziyarat taxi service", href: "/ziyarat-taxi-service" },
          ],
        },
      ],
      faqs: [
        { question: "How is this different from the Ziyarat tour?", answer: "The Ziyarat tour focuses on the spiritual sites of the Hajj and the Prophet's life; this one takes a broader heritage view — museums, historic areas and landmarks." },
        { question: "What does the tour include?", answer: "Typically the Makkah Museum, the Hudaybiyyah area, context on the Hajj plains, and the modern Clock Tower district." },
        { question: "Will the driver explain the sites?", answer: "Yes — accurate historical and practical context, while leaving religious interpretation to you." },
        { question: "Is the price fixed?", answer: "Yes, agreed before the tour, including the driver's waiting time." },
      ],
    },
  },
  {
    slug: "makkah-to-mina",
    citySlug: "makkah",
    from: "Makkah",
    to: "Mina",
    h1: "Mina: Private Taxi Tour from Makkah",
    metaTitle: "Makkah to Mina Transfer | Private Taxi Tour",
    metaDescription:
      "Private car and waiting driver from your Makkah hotel to Mina, the valley of the Hajj tent city — distances, visiting outside Hajj season, fixed pricing.",
    distance: "~6 km east of the Haram",
    duration: "1-2 hrs with waiting (longer during Hajj)",
    heroAlt: "Mina valley near Makkah, site of the Hajj tent city",
    content: {
      category: "attraction",
      eyebrow: "The valley of the Hajj tent city",
      dek: "Home to the Jamarat and one of the largest temporary settlements in the world — quiet and open for most of the year outside Hajj.",
      stats: [
        { label: "From the Haram", value: "~6 km — closest of the three" },
        { label: "Visit duration", value: "30-45 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/mina.webp", alt: "Mina valley near Makkah, site of the Hajj tent city" },
          paragraphs: [
            "Mina's vast tent city houses millions of pilgrims during Hajj, and its Jamarat — three stone pillars where pilgrims perform the symbolic stoning ritual (Ramy al-Jamarat) — are now housed within a large, multi-level pedestrian bridge built to safely manage the crowds. Pilgrims spend the nights of 8, 10, 11 and 12 Dhul Hijjah here during Hajj. Outside the season, the valley is far quieter and the permanent fireproof tents stand largely empty.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and access",
          stats: [
            { label: "From central hotels", value: "~6 km, 10-15 min" },
            { label: "From Muzdalifah", value: "~4-5 km" },
            { label: "From Arafat", value: "~10-14 km" },
          ],
          paragraphs: [
            "During the Hajj days themselves (8-13 Dhul Hijjah), access is reserved for pilgrims performing the official rites and general sightseeing transfers aren't appropriate. Outside that window, any time of day works well.",
          ],
        },
        {
          type: "checklist",
          heading: "Visiting Mina",
          items: [
            "Generally open outside the Hajj period; no formal visitor facilities since the infrastructure is built around the Hajj days themselves",
            "Reachable by vehicle with minimal walking — one of the more accessible Hajj-site stops",
            "Naturally paired with Muzdalifah (4-5 km) and Arafat (10-14 km) on the same trip",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Muzdalifah", href: "/makkah/makkah-to-muzdalifah" },
            { label: "Arafat & Jabal al-Rahmah", href: "/makkah/makkah-to-arafat" },
            { label: "Full Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What is Mina known for?", answer: "Its vast tent city, which houses millions of pilgrims during Hajj, and the Jamarat, where pilgrims perform the symbolic stoning ritual." },
        { question: "Can I visit Mina year-round?", answer: "Outside the Hajj season, yes. During the Hajj days themselves, access is restricted to pilgrims performing the official rites." },
        { question: "How long should I plan for a visit?", answer: "30-45 minutes for a typical drive-through and viewing visit of the tent city and Jamarat area." },
        { question: "Is Mina wheelchair accessible?", answer: "Yes — the main roads through the valley are reachable by vehicle with minimal walking." },
      ],
    },
  },
  {
    slug: "makkah-to-muzdalifah",
    citySlug: "makkah",
    from: "Makkah",
    to: "Muzdalifah",
    h1: "Muzdalifah: Private Taxi Tour from Makkah",
    metaTitle: "Makkah to Muzdalifah Transfer | Private Taxi Tour",
    metaDescription:
      "Private car and waiting driver from your Makkah hotel to Muzdalifah, the open plain between Mina and Arafat — distances, visiting details, fixed pricing.",
    distance: "~9 km east of the Haram",
    duration: "1-2 hrs with waiting (longer during Hajj)",
    heroAlt: "Muzdalifah plain near Makkah, between Mina and Arafat",
    content: {
      category: "attraction",
      eyebrow: "Where pilgrims spend a night in the open",
      dek: "The open plain between Mina and Arafat, tied specifically to a single night of Hajj — quiet and largely undeveloped the rest of the year.",
      stats: [
        { label: "From the Haram", value: "~9 km" },
        { label: "Visit duration", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/muzdalifah.webp", alt: "Muzdalifah plain near Makkah, between Mina and Arafat" },
          paragraphs: [
            "During Hajj, pilgrims travel to Muzdalifah after the Day of Arafah to spend the night sleeping in the open under the sky — a rite known as Mabit — and it's traditionally where many gather the pebbles used the next day at Mina's Jamarat. Unlike Mina or Arafat, Muzdalifah has comparatively little permanent infrastructure, since its significance is tied to a single night rather than a longer stay.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and access",
          stats: [
            { label: "From central hotels", value: "~9 km, 15-20 min" },
            { label: "From Mina", value: "~4-5 km" },
            { label: "From Arafat", value: "~10-12 km" },
          ],
          paragraphs: [
            "Muzdalifah sits roughly midway between Mina and Arafat, so most visitors see all three together. An open plain with minimal shade — an early or late visit is more comfortable in the hottest months.",
          ],
        },
        {
          type: "checklist",
          heading: "Visiting Muzdalifah",
          items: [
            "The shortest of the three Hajj-site stops — most visitors see it as a drive-through rather than a site with features to explore at length",
            "No entry fee or fixed hours outside the Hajj period",
            "Reachable by vehicle with minimal walking",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Mina", href: "/makkah/makkah-to-mina" },
            { label: "Arafat & Jabal al-Rahmah", href: "/makkah/makkah-to-arafat" },
            { label: "Full Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What happens at Muzdalifah during Hajj?", answer: "Pilgrims travel here after the Day of Arafah to spend the night sleeping in the open (Mabit) and traditionally gather pebbles for the stoning ritual at Mina." },
        { question: "Can I visit year-round?", answer: "Outside the Hajj period, yes. During the Hajj days, access is managed for pilgrims performing the official rites." },
        { question: "Is there much to see outside Hajj?", answer: "It's a largely open, undeveloped plain — most visitors see it as a brief stop to understand its place in the wider Hajj route." },
        { question: "How far from Mina and Arafat?", answer: "Mina is ~4-5 km away, Arafat ~10-12 km — Muzdalifah sits roughly midway, making all three easy to combine." },
      ],
    },
  },
  {
    slug: "makkah-to-arafat",
    citySlug: "makkah",
    from: "Makkah",
    to: "Arafat",
    h1: "Arafat & Jabal al-Rahmah: Private Taxi Tour from Makkah",
    metaTitle: "Arafat & Jabal al-Rahmah Transfer | Private Taxi",
    metaDescription:
      "Private car and waiting driver from your Makkah hotel to Arafat and Jabal al-Rahmah — distances, best visiting times, what to expect, fixed pricing.",
    distance: "~20 km southeast of the Haram",
    duration: "2-3 hrs with waiting (longer during Hajj)",
    heroAlt: "The plain of Arafat and Jabal al-Rahmah near Makkah",
    content: {
      category: "attraction",
      eyebrow: "Site of the Farewell Sermon",
      dek: "The longest of the three Hajj-site legs — the plain where standing on the Day of Arafah is considered the central rite of Hajj.",
      stats: [
        { label: "From the Haram", value: "~20 km", emphasis: true },
        { label: "Drive time", value: "30-40 min" },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/arafat-jabal-al-rahmah.webp", alt: "The plain of Arafat and Jabal al-Rahmah near Makkah" },
          paragraphs: [
            "Standing at Arafat on the Day of Arafah (9 Dhul Hijjah) is considered the central rite of Hajj. Jabal al-Rahmah, the Mount of Mercy, is the plain's most recognised landmark — a modest granite hill pilgrims climb for the view, and the site where the Prophet Muhammad (peace be upon him) delivered his Farewell Sermon during his final Hajj in 632 CE. Outside the Hajj season the plain is quiet and open, a striking contrast to the up-to-two-million pilgrims who gather here on the Day of Arafah itself.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~20 km, 30-40 min" },
            { label: "From Mina", value: "~10-14 km" },
            { label: "From Jeddah Airport", value: "~95-100 km" },
          ],
          paragraphs: [
            "Best time is early-to-mid morning, for cooler temperatures on the uneven walk up Jabal al-Rahmah and to avoid the strongest midday sun on the exposed plain.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "The climb and accessibility",
          paragraphs: [
            "Jabal al-Rahmah is modest in height — a comfortable 10-15 minute walk for most visitors — but the terrain is genuinely uneven and unpaved, so sturdy footwear helps. The plain itself is reachable by vehicle, but the hill's surface is not wheelchair accessible; visitors with mobility concerns can view the hill and plain from the base. An SUV suits families well given the longer drive; groups of six or more are better served by a van or minibus.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Mina", href: "/makkah/makkah-to-mina" },
            { label: "Muzdalifah", href: "/makkah/makkah-to-muzdalifah" },
            { label: "Full Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What is Jabal al-Rahmah?", answer: "The Mount of Mercy, a modest granite hill on the plain of Arafat and the site of the Prophet's Farewell Sermon during his final Hajj in 632 CE." },
        { question: "Can I visit Arafat outside Hajj season?", answer: "Yes — outside the official Hajj days, the plain and hill are open and quiet to visit. During Hajj itself, the site is reserved for pilgrims performing the standing rite." },
        { question: "Do I need to climb Jabal al-Rahmah?", answer: "No, climbing is optional — the hill is modest but the ground is genuinely uneven, so comfortable footwear helps if you do." },
        { question: "Why is the Day of Arafah important?", answer: "Standing at Arafat on the Day of Arafah is considered the central rite of Hajj — tradition holds there is no valid Hajj without this standing." },
      ],
    },
  },
  {
    slug: "makkah-train-station-to-haram-hotels",
    citySlug: "makkah",
    from: "Makkah Haramain High-Speed Railway Station (Rusaifah)",
    to: "Masjid al-Haram & Makkah Hotels",
    h1: "Makkah Train Station to Haram Hotels Transfer",
    metaTitle: "Makkah Train Station to Haram Hotels | Private Taxi",
    metaDescription:
      "Book private taxi transfer from Makkah Haramain Train Station (Rusaifah) to Haram & Clock Tower hotels. Fixed price, luggage help, 24/7.",
    distance: "~6-9 km depending on hotel district",
    duration: "15-25 min",
    content: {
      category: "railway",
      eyebrow: "Bullet train to hotel door",
      dek: "The Haramain line reaches speeds up to 300 km/h between Makkah, Jeddah, KAEC and Madinah — the last mile into the Haram district needs a driver who knows the prayer-time road closures.",
      stats: [
        { label: "Distance", value: "~6-9 km" },
        { label: "Drive time", value: "15-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before your train arrives",
          items: [
            "Share your train time so the driver is positioned at the passenger exit when you arrive",
            "Mention if you're travelling with elderly relatives, wheelchairs or heavy pilgrim luggage",
            "A return transfer to the station can be booked in advance for your onward train",
          ],
        },
        {
          type: "locationContext",
          heading: "Where the station sits",
          paragraphs: [
            "Makkah's Haramain station is in the Al Rusaifah district, roughly 6-9 km west of the Grand Mosque. Traffic routing around the central Haram precinct is heavily regulated and changes dynamically around the five daily prayer times — drivers on this route know the access tunnels, underground drop-off loops, and current checkpoint patterns for Abraj Al-Bait/Clock Tower, Jabal Omar, Ajyad, Ibrahim Al Khalil Road, and Aziziyah.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Vehicles for families and luggage",
          paragraphs: [
            "Pilgrims travelling between the holy cities often carry substantial luggage, including large suitcases and ihram garments. Spacious multi-passenger vans and full-size SUVs keep families and elderly relatives together in one vehicle without splitting into separate cabs.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
            { label: "Makkah to Madinah transfer", href: "/routes/makkah-to-madinah" },
          ],
        },
      ],
      faqs: [
        { question: "How far is the station from Masjid al-Haram?", answer: "Approximately 6-9 km; the drive typically takes 15-25 minutes depending on traffic and prayer-time diversions." },
        { question: "Where will my driver meet me?", answer: "At the designated passenger pickup lane or station exit, coordinated via WhatsApp, with assistance for your luggage." },
        { question: "Can you drop off directly at Clock Tower or Jabal Omar hotels?", answer: "Yes — our drivers know the underground vehicular arrival ramps and hotel lobby entrances for Abraj Al-Bait, Jabal Omar and surrounding properties." },
        { question: "Can I book a return to the station for my onward train?", answer: "Yes — return transfers can be booked in advance to reach the station with plenty of time before departure." },
      ],
    },
  },
  {
    slug: "jeddah-airport-to-makkah-umrah",
    citySlug: "makkah",
    from: "Jeddah Airport",
    to: "Makkah Umrah Transfer",
    h1: "Jeddah Airport to Makkah Umrah Transfer",
    metaTitle: "Jeddah Airport to Makkah Umrah Transfer | Private Taxi",
    metaDescription:
      "Private Umrah transfer from Jeddah airport (JED) to your Makkah hotel near the Haram. Meet and greet, miqat stop, luggage help and fixed prices, 24/7.",
    distance: "~95 km",
    duration: "~1 hr 20 min",
    content: {
      category: "service",
      eyebrow: "The first journey of your Umrah",
      dek: "A calm, private transfer from arrivals straight to your Makkah hotel — with a miqat stop if you need it, distinct in focus from a standard Jeddah-to-Makkah city ride.",
      stats: [
        { label: "Distance", value: "~95 km" },
        { label: "Drive time", value: "~1 hr 20 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you fly",
          items: [
            "Tell us if you need a miqat/ihram stop on the way — we build the time into the journey",
            "Share flight number, passenger count and hotel so we match the right vehicle",
            "Entry to Makkah is for Muslims only — drivers use the designated pilgrim lanes at checkpoints",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Meet and greet, then the miqat if needed",
          paragraphs: [
            "Your driver tracks the flight, positions at the correct terminal, and greets you by name before helping with luggage. If you haven't entered ihram at the airport or in flight, the driver pauses at a suitable point so you can prepare — there's no meter running and no shared vehicle waiting on you, since the car is fully private.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "How this differs from a standard city transfer",
          paragraphs: [
            "It's the same ~95 km road as our general Jeddah to Makkah route, but focused specifically on Umrah arrivals — meet and greet at the terminal, the miqat stop, and vehicles sized for pilgrim luggage (which often grows on the return trip with Zamzam water and gifts). For a general city-to-city ride without the Umrah-specific planning, see our standard route page instead.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "Makkah Hotel to Haram Transfer", href: "/makkah/makkah-hotel-to-haram-transfer" },
            { label: "Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
            { label: "Jeddah to Makkah (standard route)", href: "/routes/jeddah-to-makkah" },
          ],
        },
      ],
      faqs: [
        { question: "Can the driver stop at the miqat so I can enter ihram?", answer: "Yes — tell us when booking and the driver pauses at a suitable point; there's no rush and no extra charge for the stop." },
        { question: "Is this different from a normal Jeddah to Makkah taxi?", answer: "Same road, but focused on Umrah arrivals — meet and greet, a miqat stop if needed, and vehicles sized for pilgrim luggage." },
        { question: "Can non-Muslims take this transfer?", answer: "Entry to Makkah is for Muslims only; this transfer is specifically for pilgrims, and the driver follows the designated pilgrim routes at city checkpoints." },
        { question: "What if my flight is delayed or arrives at night?", answer: "We track your flight and the driver waits regardless of arrival time, with reasonable wait time included at no extra charge." },
      ],
    },
  },
  {
    slug: "makkah-hotel-to-haram-transfer",
    citySlug: "makkah",
    from: "Makkah",
    to: "Hotel to Haram Transfer",
    isPointToPoint: false,
    h1: "Makkah Hotel to Haram Transfer",
    metaTitle: "Makkah Hotel to Haram Transfer | Private Car Service",
    metaDescription:
      "Private hotel to Masjid al-Haram transfers in Makkah. Short, comfortable rides for elderly and family pilgrims, with waiting time and fixed prices, 24/7.",
    duration: "Flexible / on request",
    content: {
      category: "service",
      eyebrow: "Short, repeated rides to the Haram",
      dek: "For pilgrims staying a little further out, or anyone who'd rather not walk in the heat — especially around prayer times, several times a day.",
      stats: [
        { label: "Structure", value: "Single ride or standing arrangement" },
        { label: "Pricing", value: "Fixed local rate" },
      ],
      blocks: [
        {
          type: "scenarios",
          heading: "Who this transfer is for",
          items: [
            { title: "Elderly pilgrims", description: "After a long day of Tawaf and Sa'i, the walk back from Jabal Omar or the outer central area can be exhausting — a waiting car makes a real difference over a multi-day stay." },
            { title: "Families with young children", description: "Especially for Fajr and Isha, when little ones are tired — the family travels together in one private vehicle rather than carrying children through busy streets." },
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Prayer-time routing",
          paragraphs: [
            "Roads immediately around the Haram are heavily managed, with closures tightening in the minutes before and after each congregational prayer. Drivers know these patterns and choose drop-off/pickup points that get you as close as possible within the traffic rules, then advise the best gate for your direction.",
          ],
        },
        {
          type: "bookingSteps",
          heading: "How to arrange your stay's transport",
          steps: [
            "Tell us your hotel and how many pilgrims are travelling",
            "Choose a one-way drop, a return, or several runs through the day",
            "We confirm a fixed price — a single trip, or a standing arrangement for your whole stay",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "Jeddah Airport to Makkah Umrah Transfer", href: "/makkah/jeddah-airport-to-makkah-umrah" },
            { label: "Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
          ],
        },
      ],
      faqs: [
        { question: "Can the driver wait while we pray?", answer: "Yes — arrange a drop-off with a later pickup, a short wait, or several runs across the day." },
        { question: "Is this suitable for elderly or wheelchair users?", answer: "Yes — one of the most popular choices for elderly and less mobile pilgrims; request a larger vehicle and mention mobility needs when booking." },
        { question: "How close to the Haram can you drop us?", answer: "As close as traffic management allows, which tightens around prayer times — drivers advise the best gate on the day." },
        { question: "Can I book several trips a day for my whole stay?", answer: "Yes — a driver on call or repeated daily runs can be arranged with a clear price agreed in advance." },
      ],
    },
  },
];
