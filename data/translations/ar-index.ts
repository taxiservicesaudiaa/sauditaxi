/**
 * Lightweight index over data/translations/ar.ts's arPages — slug, enPath,
 * type, and h1 only, no content (intro/sections/faqs/contentHtml). Generated
 * by scripts/generate-ar-index.mjs — NOT computed at runtime from arPages,
 * deliberately, so that importing this file never pulls the ~26,700-line
 * content dataset into a bundle that imports it (client components in
 * particular: Header, Footer, LanguageSwitcher). Covers every consumer that
 * only ever needed slug/enPath/type/h1 — nav links, the language switcher,
 * proxy.ts's redirect maps, and sitemap generation.
 *
 * Regenerate with `node --experimental-strip-types scripts/generate-ar-index.mjs`
 * whenever arPages gains, loses, or renames an entry.
 * scripts/check-ar-index-sync.mjs verifies this file stays in sync with
 * arPages and fails if they drift.
 */
export interface ArPageIndexEntry {
  slug: string;
  enPath: string;
  type: string;
  h1: string;
  /** Mirrors ArPage.notEnTranslation: not hreflang-paired with enPath. */
  notEnTranslation?: true;
}

export const arPageIndex: ArPageIndexEntry[] = [
  {
    "slug": "من-نحن",
    "enPath": "/about",
    "type": "about",
    "h1": "خدمة نقل خاص موثوقة في جميع أنحاء المملكة"
  },
  {
    "slug": "اتصل-بنا",
    "enPath": "/contact",
    "type": "contactV2",
    "h1": "تواصل مع نقل خاص السعودي"
  },
  {
    "slug": "اطلب-عرض-سعر",
    "enPath": "/get-quote",
    "type": "quoteV2",
    "h1": "اطلب عرض سعر لنقل خاص"
  },
  {
    "slug": "خدماتنا",
    "enPath": "/services",
    "type": "servicesV2",
    "h1": "خدمات النقل الخاص في السعودية"
  },
  {
    "slug": "نقل-من-المطار",
    "enPath": "/airport-transfers",
    "type": "serviceV2",
    "h1": "نقل خاص من مطارات المملكة"
  },
  {
    "slug": "تنقلات-المدينة",
    "enPath": "/city-transfers",
    "type": "serviceV2",
    "h1": "تنقلات خاصة داخل المدن السعودية"
  },
  {
    "slug": "النقل-بين-المدن",
    "enPath": "/intercity-transfers",
    "type": "serviceV2",
    "h1": "نقل خاص بين المدن السعودية"
  },
  {
    "slug": "النقل-عبر-الحدود",
    "enPath": "/border-transfers",
    "type": "serviceV2",
    "h1": "نقل خاص عبر حدود السعودية إلى دول الخليج"
  },
  {
    "slug": "نقل-الفنادق",
    "enPath": "/services/hotel-transfers",
    "type": "serviceV2",
    "h1": "نقل خاص من الفندق إلى الفندق"
  },
  {
    "slug": "نقل-العمرة",
    "enPath": "/umrah-taxi-service",
    "type": "serviceV2",
    "h1": "نقل خاص لرحلات العمرة"
  },
  {
    "slug": "نقل-الحج",
    "enPath": "/hajj-transport-service",
    "type": "serviceV2",
    "h1": "تخطيط النقل لرحلات الحج"
  },
  {
    "slug": "نقل-الزيارة",
    "enPath": "/ziyarat-taxi-service",
    "type": "serviceV2",
    "h1": "نقل خاص لجولات الزيارة"
  },
  {
    "slug": "نقل-مطار-جدة",
    "enPath": "/airport-transfer/jeddah-airport",
    "type": "airport",
    "h1": "نقل خاص من مطار الملك عبدالعزيز الدولي بجدة"
  },
  {
    "slug": "نقل-مطار-الرياض",
    "enPath": "/airport-transfer/riyadh-airport",
    "type": "airport",
    "h1": "نقل خاص من مطار الملك خالد الدولي بالرياض"
  },
  {
    "slug": "تنقلات-جدة",
    "enPath": "/taxi-service/jeddah",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل مدينة جدة"
  },
  {
    "slug": "تاكسي-الرياض",
    "enPath": "/taxi-service/riyadh",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل مدينة الرياض"
  },
  {
    "slug": "تاكسي-مكة",
    "enPath": "/taxi-service/makkah",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل مكة المكرمة"
  },
  {
    "slug": "تاكسي-المدينة",
    "enPath": "/taxi-service/madinah",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل المدينة المنورة"
  },
  {
    "slug": "تاكسي-العلا",
    "enPath": "/taxi-service/alula",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل العلا"
  },
  {
    "slug": "نقل-فنادق-مكة",
    "enPath": "/cities/makkah",
    "type": "city-hub",
    "h1": "نقل فنادق مكة المكرمة من المطار"
  },
  {
    "slug": "نقل-فنادق-المدينة",
    "enPath": "/cities/madinah",
    "type": "city-hub",
    "h1": "نقل فنادق المدينة المنورة من المطار"
  },
  {
    "slug": "نقل-فنادق-جدة",
    "enPath": "/cities/jeddah",
    "type": "city-hub",
    "h1": "نقل فنادق جدة من المطار"
  },
  {
    "slug": "نقل-فنادق-الرياض",
    "enPath": "/cities/riyadh",
    "type": "city-hub",
    "h1": "نقل فنادق الرياض من المطار"
  },
  {
    "slug": "نقل-فنادق-الدمام",
    "enPath": "/cities/dammam",
    "type": "city-hub",
    "h1": "نقل فنادق الدمام من المطار"
  },
  {
    "slug": "نقل-من-جدة-الى-مكة",
    "enPath": "/routes/jeddah-to-makkah",
    "type": "route",
    "h1": "تاكسي خاص من جدة إلى مكة المكرمة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-هيلتون-جدة",
    "enPath": "/jeddah/king-abdulaziz-airport-to-jeddah-hilton",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق هيلتون جدة"
  },
  {
    "slug": "دليل-تاكسي-من-مطار-جدة-الى-مكة",
    "enPath": "/blog/jeddah-airport-to-makkah-taxi-service-guide",
    "type": "blog",
    "h1": "دليل تاكسي من مطار جدة إلى مكة المكرمة: الدليل الكامل لعام 2027"
  },
  {
    "slug": "نقل-الى-غار-حراء-جبل-النور",
    "enPath": "/makkah/makkah-to-cave-of-hira",
    "type": "pointTransferV2",
    "h1": "غار حراء وجبل النور: رحلة خاصة من مكة"
  },
  {
    "slug": "جولة-زيارة-مكة",
    "enPath": "/makkah/makkah-ziyarat-tour",
    "type": "pointTransferV2",
    "h1": "جولة زيارة مكة: المسار الكامل بسيارة خاصة"
  },
  {
    "slug": "نقل-الى-جبل-ثور",
    "enPath": "/makkah/makkah-to-jabal-thawr",
    "type": "pointTransferV2",
    "h1": "جبل ثور وغار ثور: رحلة خاصة من مكة"
  },
  {
    "slug": "نقل-من-مكة-الى-منى",
    "enPath": "/makkah/makkah-to-mina",
    "type": "pointTransferV2",
    "h1": "منى: رحلة خاصة من مكة"
  },
  {
    "slug": "نقل-من-مكة-الى-مزدلفة",
    "enPath": "/makkah/makkah-to-muzdalifah",
    "type": "pointTransferV2",
    "h1": "مزدلفة: رحلة خاصة من مكة"
  },
  {
    "slug": "نقل-من-مكة-الى-عرفات",
    "enPath": "/makkah/makkah-to-arafat",
    "type": "pointTransferV2",
    "h1": "عرفات وجبل الرحمة: رحلة خاصة من مكة"
  },
  {
    "slug": "نقل-من-المدينة-الى-مسجد-قباء",
    "enPath": "/madinah/madinah-to-quba-mosque",
    "type": "pointTransferV2",
    "h1": "مسجد قباء: رحلة خاصة من المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-الى-جبل-أحد",
    "enPath": "/madinah/madinah-to-mount-uhud",
    "type": "pointTransferV2",
    "h1": "جبل أحد ومقبرة الشهداء: رحلة خاصة من المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-الى-مسجد-القبلتين",
    "enPath": "/madinah/madinah-to-qiblatain-mosque",
    "type": "pointTransferV2",
    "h1": "مسجد القبلتين: رحلة خاصة من المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-الى-المساجد-السبعة",
    "enPath": "/madinah/madinah-to-seven-mosques",
    "type": "pointTransferV2",
    "h1": "المساجد السبعة: رحلة خاصة من المدينة المنورة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-المدينة",
    "enPath": "/routes/jeddah-airport-to-madinah",
    "type": "route",
    "h1": "نقل خاص من مطار جدة إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-الى-مطار-جدة",
    "enPath": "/routes/madinah-to-jeddah-airport",
    "type": "route",
    "h1": "نقل خاص من المدينة المنورة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-أنوار-المدينة-موفنبيك",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-anwar-al-madinah-movenpick",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق أنوار المدينة موفنبيك"
  },
  {
    "slug": "نقل-من-فندق-أنوار-المدينة-موفنبيك-الى-مطار-المدينة",
    "enPath": "/madinah/anwar-al-madinah-movenpick-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق أنوار المدينة موفنبيك إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-بولمان-زمزم-المدينة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-pullman-zamzam-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق بولمان زمزم المدينة"
  },
  {
    "slug": "نقل-من-فندق-بولمان-زمزم-المدينة-الى-مطار-المدينة",
    "enPath": "/madinah/pullman-zamzam-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق بولمان زمزم المدينة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-دار-التقوى",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-dar-al-taqwa-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق دار التقوى"
  },
  {
    "slug": "نقل-من-فندق-دار-التقوى-الى-مطار-المدينة",
    "enPath": "/madinah/dar-al-taqwa-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق دار التقوى إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-إنتركونتيننتال-دار-الإيمان",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-intercontinental-dar-al-iman-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق إنتركونتيننتال دار الإيمان"
  },
  {
    "slug": "نقل-من-فندق-إنتركونتيننتال-دار-الإيمان-الى-مطار-المدينة",
    "enPath": "/madinah/intercontinental-dar-al-iman-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق إنتركونتيننتال دار الإيمان إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-هيلتون-المدينة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-madinah-hilton",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق هيلتون المدينة"
  },
  {
    "slug": "نقل-من-فندق-هيلتون-المدينة-الى-مطار-المدينة",
    "enPath": "/madinah/madinah-hilton-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق هيلتون المدينة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-فرونتال-الحارثية",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-frontel-al-harithia-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق فرونتال الحارثية"
  },
  {
    "slug": "نقل-من-فندق-فرونتال-الحارثية-الى-مطار-المدينة",
    "enPath": "/madinah/frontel-al-harithia-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق فرونتال الحارثية إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-إيلاف-طيبة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-elaf-taiba-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق إيلاف طيبة"
  },
  {
    "slug": "نقل-من-فندق-إيلاف-طيبة-الى-مطار-المدينة",
    "enPath": "/madinah/elaf-taiba-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق إيلاف طيبة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-شذا-المدينة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-shaza-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق شذا المدينة"
  },
  {
    "slug": "نقل-من-فندق-شذا-المدينة-الى-مطار-المدينة",
    "enPath": "/madinah/shaza-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق شذا المدينة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-كراون-بلازا-المدينة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-crowne-plaza-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق كراون بلازا المدينة"
  },
  {
    "slug": "نقل-من-فندق-كراون-بلازا-المدينة-الى-مطار-المدينة",
    "enPath": "/madinah/crowne-plaza-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق كراون بلازا المدينة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-فندق-دلة-طيبة",
    "enPath": "/madinah/prince-mohammad-bin-abdulaziz-airport-to-dallah-taibah-madinah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار المدينة إلى فندق دلة طيبة"
  },
  {
    "slug": "نقل-من-فندق-دلة-طيبة-الى-مطار-المدينة",
    "enPath": "/madinah/dallah-taibah-madinah-to-prince-mohammad-bin-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق دلة طيبة إلى مطار المدينة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-رافلز-مكة-بالاس",
    "enPath": "/makkah/king-abdulaziz-airport-to-raffles-makkah-palace",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق رافلز مكة بالاس"
  },
  {
    "slug": "نقل-من-فندق-رافلز-مكة-بالاس-الى-مطار-جدة",
    "enPath": "/makkah/raffles-makkah-palace-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق رافلز مكة بالاس إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-أنجم-مكة",
    "enPath": "/makkah/king-abdulaziz-airport-to-anjum-hotel-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق أنجم مكة"
  },
  {
    "slug": "نقل-من-فندق-أنجم-مكة-الى-مطار-جدة",
    "enPath": "/makkah/anjum-hotel-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق أنجم مكة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-هيلتون-مكة-للمؤتمرات",
    "enPath": "/makkah/king-abdulaziz-airport-to-hilton-makkah-convention-hotel",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق هيلتون مكة للمؤتمرات"
  },
  {
    "slug": "نقل-من-فندق-هيلتون-مكة-للمؤتمرات-الى-مطار-جدة",
    "enPath": "/makkah/hilton-makkah-convention-hotel-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق هيلتون مكة للمؤتمرات إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-موفنبيك-برج-هاجر-مكة",
    "enPath": "/makkah/king-abdulaziz-airport-to-movenpick-hajar-tower-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق موفنبيك برج هاجر مكة"
  },
  {
    "slug": "نقل-من-فندق-موفنبيك-برج-هاجر-مكة-الى-مطار-جدة",
    "enPath": "/makkah/movenpick-hajar-tower-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق موفنبيك برج هاجر مكة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-دار-التوحيد",
    "enPath": "/makkah/king-abdulaziz-airport-to-intercontinental-dar-al-tawhid-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق إنتركونتيننتال دار التوحيد"
  },
  {
    "slug": "نقل-من-فندق-دار-التوحيد-الى-مطار-جدة",
    "enPath": "/makkah/intercontinental-dar-al-tawhid-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق إنتركونتيننتال دار التوحيد إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-لوميريديان-تاورز-مكة",
    "enPath": "/makkah/king-abdulaziz-airport-to-le-meridien-towers-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق لوميريديان تاورز مكة"
  },
  {
    "slug": "نقل-من-فندق-لوميريديان-تاورز-مكة-الى-مطار-جدة",
    "enPath": "/makkah/le-meridien-towers-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق لوميريديان تاورز مكة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-إيلاف-أجياد",
    "enPath": "/makkah/king-abdulaziz-airport-to-elaf-ajyad-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق إيلاف أجياد"
  },
  {
    "slug": "نقل-من-فندق-إيلاف-أجياد-الى-مطار-جدة",
    "enPath": "/makkah/elaf-ajyad-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق إيلاف أجياد إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-إيلاف-كندة",
    "enPath": "/makkah/king-abdulaziz-airport-to-elaf-kinda-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق إيلاف كندة"
  },
  {
    "slug": "نقل-من-فندق-إيلاف-كندة-الى-مطار-جدة",
    "enPath": "/makkah/elaf-kinda-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق إيلاف كندة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-فوكو-مكة",
    "enPath": "/makkah/king-abdulaziz-airport-to-voco-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق فوكو مكة"
  },
  {
    "slug": "نقل-من-فندق-فوكو-مكة-الى-مطار-جدة",
    "enPath": "/makkah/voco-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق فوكو مكة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-فندق-روف-مكة",
    "enPath": "/makkah/king-abdulaziz-airport-to-rove-makkah",
    "type": "hotel-transfer",
    "h1": "نقل خاص من مطار جدة إلى فندق روف مكة"
  },
  {
    "slug": "نقل-من-فندق-روف-مكة-الى-مطار-جدة",
    "enPath": "/makkah/rove-makkah-to-king-abdulaziz-airport",
    "type": "hotel-transfer",
    "h1": "نقل خاص من فندق روف مكة إلى مطار جدة"
  },
  {
    "slug": "السعودية-في-أغسطس-الطقس-والازدحام-ونصائح-السفر",
    "enPath": "/blog/saudi-arabia-in-august-weather-crowds-travel-tips",
    "type": "blog",
    "h1": "السعودية في أغسطس: الطقس والازدحام ونصائح عملية للسفر"
  },
  {
    "slug": "هل-السعودية-آمنة-للسياح-المنفردين-2026",
    "enPath": "/blog/is-saudi-arabia-safe-for-solo-tourists-2026",
    "type": "blog",
    "h1": "هل السعودية آمنة للسياح المنفردين في 2026؟"
  },
  {
    "slug": "دليل-واي-فاي-مطارات-السعودية",
    "enPath": "/blog/saudi-arabia-airport-wifi-guide",
    "type": "blog",
    "h1": "دليل واي فاي مطارات السعودية: أي المطارات لديها إنترنت جيد فعليًا؟"
  },
  {
    "slug": "ماذا-يحدث-إذا-تأخرت-رحلتك-إلى-السعودية",
    "enPath": "/blog/what-happens-if-flight-to-saudi-arabia-delayed",
    "type": "blog",
    "h1": "ماذا يحدث إذا تأخرت رحلتك إلى السعودية؟"
  },
  {
    "slug": "السفر-إلى-السعودية-مع-الوالدين-كبار-السن",
    "enPath": "/blog/saudi-arabia-with-elderly-parents-travel-tips",
    "type": "blog",
    "h1": "السعودية مع الوالدين كبار السن: نصائح عملية للسفر بعيدًا عن العمرة"
  },
  {
    "slug": "افضل-تطبيقات-الدفع-اللاتلامسي-للسياح-في-السعودية",
    "enPath": "/blog/best-cashless-payment-apps-saudi-arabia",
    "type": "blog",
    "h1": "أفضل تطبيقات الدفع اللاتلامسي التي يمكن للسياح استخدامها في السعودية"
  },
  {
    "slug": "نصائح-السفر-حول-صلاة-الجمعة-في-السعودية",
    "enPath": "/blog/friday-prayer-travel-tips-saudi-arabia",
    "type": "blog",
    "h1": "نصائح السفر حول صلاة الجمعة: ما يجب أن يعرفه السياح قبل تخطيط يومهم"
  },
  {
    "slug": "ما-يجب-معرفته-قبل-حجز-فندق-قرب-الحرم",
    "enPath": "/blog/hotel-near-haram-what-to-know-before-booking",
    "type": "blog",
    "h1": "ما يتمنى السياح لو عرفوه قبل حجز فندق قرب الحرم"
  },
  {
    "slug": "احتيالات-السفر-في-السعودية-التي-يجب-الحذر-منها",
    "enPath": "/blog/saudi-arabia-travel-scams-tourists-should-know",
    "type": "blog",
    "h1": "احتيالات السفر في السعودية التي يجب أن يحذر منها السياح"
  },
  {
    "slug": "التخطيط-بالذكاء-الاصطناعي-مقابل-الخبراء-المحليين",
    "enPath": "/blog/ai-travel-planning-vs-local-experts-saudi-arabia",
    "type": "blog",
    "h1": "التخطيط بالذكاء الاصطناعي مقابل الخبراء المحليين: من يقدم نصيحة سفر أفضل للسعودية؟"
  },
  {
    "slug": "دليل-رحلة-الرياض-الى-العلا-بالسيارة",
    "enPath": "/blog/riyadh-to-alula-road-trip-guide",
    "type": "blog",
    "h1": "الرياض إلى العلا بالسيارة: المسافة والطريق وهل تستحق القيادة فعلاً؟"
  },
  {
    "slug": "دليل-نقل-المدينة-المنورة-الى-ينبع",
    "enPath": "/blog/madinah-to-yanbu-transfer-guide",
    "type": "blog",
    "h1": "دليل نقل المدينة المنورة إلى ينبع: المسافة والطريق ونصائح الحجز"
  },
  {
    "slug": "دليل-السفر-من-الدمام-الى-البحرين",
    "enPath": "/blog/dammam-to-bahrain-travel-guide",
    "type": "blog",
    "h1": "كيف تسافر من الدمام إلى البحرين: التاكسي والجسر والمستندات"
  },
  {
    "slug": "دليل-جسر-الملك-فهد",
    "enPath": "/blog/king-fahd-causeway-guide",
    "type": "blog",
    "h1": "كل ما تحتاج معرفته عن جسر الملك فهد قبل العبور إلى البحرين"
  },
  {
    "slug": "دليل-تاكسي-مكة-الى-المدينة-الخاص",
    "enPath": "/blog/makkah-to-madinah-private-taxi-guide",
    "type": "blog",
    "h1": "تاكسي مكة إلى المدينة المنورة: التكلفة ووقت الرحلة ودليل الحجز",
    "notEnTranslation": true
  },
  {
    "slug": "دليل-تاكسي-الرياض-الى-الدمام",
    "enPath": "/blog/riyadh-to-dammam-taxi-guide",
    "type": "blog",
    "h1": "تاكسي الرياض إلى الدمام: المسافة والتكلفة ودليل الحجز"
  },
  {
    "slug": "دليل-تاكسي-جدة-الى-الطائف",
    "enPath": "/blog/jeddah-to-taif-taxi-guide",
    "type": "blog",
    "h1": "تاكسي جدة إلى الطائف: التكلفة والوقت ودليل الطريق"
  },
  {
    "slug": "دليل-سفر-الأعمال-بين-البحرين-والدمام",
    "enPath": "/blog/business-travel-bahrain-dammam-guide",
    "type": "blog",
    "h1": "سفر الأعمال بين البحرين والدمام: دليل للشركات"
  },
  {
    "slug": "دليل-سفر-العائلات-من-البحرين-الى-السعودية",
    "enPath": "/blog/family-travel-bahrain-to-saudi-arabia",
    "type": "blog",
    "h1": "سفر العائلات من البحرين إلى السعودية: دليل للوالدين"
  },
  {
    "slug": "دليل-سفر-مقيمي-الخليج-بالسيارة-الى-السعودية",
    "enPath": "/blog/gcc-residents-road-travel-to-saudi-arabia",
    "type": "blog",
    "h1": "سفر مقيمي دول الخليج برًا إلى السعودية: ما الذي يختلف فعليًا"
  },
  {
    "slug": "افضل-مركبة-للسفر-عبر-الحدود",
    "enPath": "/blog/best-vehicle-for-cross-border-travel",
    "type": "blog",
    "h1": "أفضل مركبة للسفر عبر الحدود في السعودية والخليج"
  },
  {
    "slug": "من-البحرين-الى-السعودية-بالسيارة",
    "enPath": "/blog/bahrain-to-saudi-arabia-by-road",
    "type": "blog",
    "h1": "من البحرين إلى السعودية برًا: أي المدن يمكنك الوصول إليها فعليًا؟"
  },
  {
    "slug": "مستندات-السفر-من-البحرين-الى-السعودية",
    "enPath": "/blog/travel-documents-bahrain-to-saudi-arabia",
    "type": "blog",
    "h1": "مستندات السفر من البحرين إلى السعودية: القائمة الكاملة"
  },
  {
    "slug": "نقل-من-الرياض-الى-الخبر",
    "enPath": "/routes/riyadh-to-khobar",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى الخبر"
  },
  {
    "slug": "نقل-من-الخبر-الى-الرياض",
    "enPath": "/routes/khobar-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من الخبر إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-الجبيل",
    "enPath": "/routes/riyadh-to-jubail",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى الجبيل"
  },
  {
    "slug": "نقل-من-الجبيل-الى-الرياض",
    "enPath": "/routes/jubail-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من الجبيل إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-الهفوف",
    "enPath": "/routes/riyadh-to-hofuf",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى الهفوف"
  },
  {
    "slug": "نقل-من-الهفوف-الى-الرياض",
    "enPath": "/routes/hofuf-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من الهفوف إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-القصيم",
    "enPath": "/routes/riyadh-to-qassim",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى القصيم"
  },
  {
    "slug": "نقل-من-القصيم-الى-الرياض",
    "enPath": "/routes/qassim-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من القصيم إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-حائل",
    "enPath": "/routes/riyadh-to-hail",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى حائل"
  },
  {
    "slug": "نقل-من-حائل-الى-الرياض",
    "enPath": "/routes/hail-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من حائل إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-المدينة-المنورة",
    "enPath": "/routes/riyadh-to-madinah",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-المنورة-الى-الرياض",
    "enPath": "/routes/madinah-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من المدينة المنورة إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-الطائف",
    "enPath": "/routes/riyadh-to-taif",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى الطائف"
  },
  {
    "slug": "نقل-من-الطائف-الى-الرياض",
    "enPath": "/routes/taif-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من الطائف إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-ابها",
    "enPath": "/routes/riyadh-to-abha",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى أبها"
  },
  {
    "slug": "نقل-من-ابها-الى-الرياض",
    "enPath": "/routes/abha-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من أبها إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-تبوك",
    "enPath": "/routes/riyadh-to-tabuk",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى تبوك"
  },
  {
    "slug": "نقل-من-تبوك-الى-الرياض",
    "enPath": "/routes/tabuk-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من تبوك إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-ينبع",
    "enPath": "/routes/riyadh-to-yanbu",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى ينبع"
  },
  {
    "slug": "نقل-من-ينبع-الى-الرياض",
    "enPath": "/routes/yanbu-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من ينبع إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-نيوم",
    "enPath": "/routes/riyadh-to-neom",
    "type": "route",
    "h1": "تاكسي خاص من الرياض إلى نيوم"
  },
  {
    "slug": "نقل-من-نيوم-الى-الرياض",
    "enPath": "/routes/neom-to-riyadh",
    "type": "route",
    "h1": "تاكسي خاص من نيوم إلى الرياض"
  },
  {
    "slug": "دليل-نقل-مكة-المدينة-بالتاكسي-الخاص",
    "enPath": "/blog/makkah-to-madinah-private-taxi-guide",
    "type": "blog",
    "h1": "التنقل من مكة المكرمة إلى المدينة المنورة: دليل الرحلة الخاصة"
  },
  {
    "slug": "دليل-وصول-مطار-جدة-للسياح-والمقيمين",
    "enPath": "/blog/what-to-do-after-landing-at-jeddah-airport",
    "type": "blog",
    "h1": "الوصول إلى مطار جدة: دليل السياح والمقيمين لخيارات النقل"
  },
  {
    "slug": "دليل-عبور-جسر-الملك-فهد-بالتاكسي-الخاص",
    "enPath": "/blog/saudi-to-bahrain-taxi-king-fahd-causeway",
    "type": "blog",
    "h1": "عبور جسر الملك فهد بالتاكسي الخاص: كل ما تحتاج معرفته"
  },
  {
    "slug": "دليل-مطار-الرياض-الصالات-والنقل-إلى-المدينة",
    "enPath": "/blog/riyadh-airport-transfer-business-travelers",
    "type": "blog",
    "h1": "مطار الملك خالد الدولي: دليل الصالات والنقل إلى الرياض"
  },
  {
    "slug": "دليل-نقل-العمرة-الشامل-2025",
    "enPath": "/blog/umrah-transport-makkah-madinah-guide",
    "type": "blog",
    "h1": "دليل نقل العمرة الشامل 2025: من المطار إلى الحرم وما بعده"
  },
  {
    "slug": "تاكسي-خاص-مقابل-كريم-اوبر-السعودية",
    "enPath": "/blog/uber-vs-careem-vs-private-transfer-saudi-arabia",
    "type": "blog",
    "h1": "تاكسي خاص مقابل كريم وأوبر في السعودية: مقارنة شاملة وصادقة"
  },
  {
    "slug": "دليل-تنقل-موسم-الرياض",
    "enPath": "/blog/riyadh-season-transport-guide",
    "type": "blog",
    "h1": "دليل التنقل في موسم الرياض: كيف تصل بين المناطق الترفيهية"
  },
  {
    "slug": "تاكسي-الدرعية-من-الرياض",
    "enPath": "/blog/diriyah-taxi-transfer-guide",
    "type": "blog",
    "h1": "دليل تاكسي الدرعية: كيف تصل من الرياض إلى حي الطريف"
  },
  {
    "slug": "دليل-نقل-الحج-مكة-منى-عرفات",
    "enPath": "/blog/hajj-transport-guide-makkah-mina-arafat",
    "type": "blog",
    "h1": "دليل نقل الحج: كيف تصل إلى مكة ومنى وعرفات"
  },
  {
    "slug": "نظام-مقعد-الطفل-في-السيارة-بالسعودية",
    "enPath": "/blog/child-car-seat-law-saudi-arabia",
    "type": "blog",
    "h1": "نظام مقعد الطفل في السيارة بالسعودية: دليل للأهل"
  },
  {
    "slug": "نقل-من-جدة-الى-الرياض",
    "enPath": "/routes/jeddah-to-riyadh",
    "type": "route",
    "h1": "تاكسي ونقل خاص من جدة إلى الرياض"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-الرياض",
    "enPath": "/routes/jeddah-airport-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مطار جدة الدولي إلى الرياض"
  },
  {
    "slug": "نقل-من-مطار-الرياض-الى-جدة",
    "enPath": "/routes/riyadh-airport-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من مطار الملك خالد بالرياض إلى جدة"
  },
  {
    "slug": "نقل-من-تبوك-الى-نيوم",
    "enPath": "/routes/tabuk-to-neom",
    "type": "route",
    "h1": "نقل خاص وتاكسي من تبوك إلى نيوم"
  },
  {
    "slug": "نقل-من-نيوم-الى-تبوك",
    "enPath": "/routes/neom-to-tabuk",
    "type": "route",
    "h1": "نقل خاص من نيوم إلى تبوك ومطار تبوك"
  },
  {
    "slug": "نقل-من-جدة-الى-العلا",
    "enPath": "/routes/jeddah-to-alula",
    "type": "route",
    "h1": "نقل سياحي خاص من جدة إلى العلا"
  },
  {
    "slug": "نقل-من-العلا-الى-الرياض",
    "enPath": "/routes/alula-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من العلا إلى الرياض"
  },
  {
    "slug": "نقل-من-العلا-الى-جدة",
    "enPath": "/routes/alula-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من العلا إلى جدة ومطار جدة"
  },
  {
    "slug": "نقل-من-مطار-الرياض-الى-مكة",
    "enPath": "/routes/riyadh-airport-to-makkah",
    "type": "route",
    "h1": "نقل خاص للمعتمرين من مطار الرياض إلى مكة المكرمة"
  },
  {
    "slug": "نقل-من-جدة-الى-الدمام",
    "enPath": "/routes/jeddah-to-dammam",
    "type": "route",
    "h1": "نقل خاص من جدة إلى الدمام والمنطقة الشرقية"
  },
  {
    "slug": "نقل-من-الدمام-الى-جدة",
    "enPath": "/routes/dammam-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى جدة"
  },
  {
    "slug": "نقل-من-العلا-الى-المدينة-المنورة",
    "enPath": "/routes/alula-to-madinah",
    "type": "route",
    "h1": "نقل خاص من العلا إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-مطار-الرياض-الى-المدينة-المنورة",
    "enPath": "/routes/riyadh-airport-to-madinah",
    "type": "route",
    "h1": "نقل خاص من مطار الرياض الدولي إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-ابها-الى-جدة",
    "enPath": "/routes/abha-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من أبها وعسير إلى جدة"
  },
  {
    "slug": "نقل-من-تبوك-الى-المدينة-المنورة",
    "enPath": "/routes/tabuk-to-madinah",
    "type": "route",
    "h1": "نقل خاص من تبوك إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-المنورة-الى-تبوك",
    "enPath": "/routes/madinah-to-tabuk",
    "type": "route",
    "h1": "نقل خاص من المدينة المنورة إلى تبوك"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-الرياض",
    "enPath": "/routes/dammam-airport-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مطار الملك فهد بالدمام إلى الرياض"
  },
  {
    "slug": "نقل-من-مطار-المدينة-الى-الرياض",
    "enPath": "/routes/madinah-airport-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مطار المدينة المنورة إلى الرياض"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-الطائف",
    "enPath": "/routes/jeddah-airport-to-taif",
    "type": "route",
    "h1": "نقل خاص من مطار جدة الدولي إلى الطائف"
  },
  {
    "slug": "نقل-من-الطائف-الى-مطار-جدة",
    "enPath": "/routes/taif-to-jeddah-airport",
    "type": "route",
    "h1": "نقل خاص من الطائف إلى مطار جدة الدولي"
  },
  {
    "slug": "نقل-من-المدينة-المنورة-الى-ينبع",
    "enPath": "/routes/madinah-to-yanbu",
    "type": "route",
    "h1": "نقل خاص من المدينة المنورة إلى ينبع"
  },
  {
    "slug": "نقل-من-ينبع-الى-المدينة-المنورة",
    "enPath": "/routes/yanbu-to-madinah",
    "type": "route",
    "h1": "نقل خاص من ينبع إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-الطائف-الى-المدينة-المنورة",
    "enPath": "/routes/taif-to-madinah",
    "type": "route",
    "h1": "نقل خاص من الطائف إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-المنورة-الى-الطائف",
    "enPath": "/routes/madinah-to-taif",
    "type": "route",
    "h1": "نقل خاص من المدينة المنورة إلى الطائف"
  },
  {
    "slug": "نقل-من-جدة-الى-ابها",
    "enPath": "/routes/jeddah-to-abha",
    "type": "route",
    "h1": "نقل خاص من جدة إلى أبها وعسير"
  },
  {
    "slug": "نقل-من-العلا-الى-ينبع",
    "enPath": "/routes/alula-to-yanbu",
    "type": "route",
    "h1": "نقل سياحي خاص من العلا إلى ينبع"
  },
  {
    "slug": "نقل-من-ينبع-الى-العلا",
    "enPath": "/routes/yanbu-to-alula",
    "type": "route",
    "h1": "نقل خاص من ينبع إلى العلا"
  },
  {
    "slug": "نقل-من-حائل-الى-المدينة-المنورة",
    "enPath": "/routes/hail-to-madinah",
    "type": "route",
    "h1": "نقل خاص من حائل إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-المدينة-المنورة-الى-حائل",
    "enPath": "/routes/madinah-to-hail",
    "type": "route",
    "h1": "نقل خاص من المدينة المنورة إلى حائل"
  },
  {
    "slug": "نقل-من-مطار-العلا-الى-الرياض",
    "enPath": "/routes/alula-airport-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مطار العلا الدولي إلى الرياض"
  },
  {
    "slug": "نقل-من-مطار-العلا-الى-جدة",
    "enPath": "/routes/alula-airport-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من مطار العلا الدولي إلى جدة"
  },
  {
    "slug": "نقل-من-مطار-ابها-الى-جدة",
    "enPath": "/routes/abha-airport-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من مطار أبها الدولي إلى جدة"
  },
  {
    "slug": "نقل-من-مطار-ابها-الى-الرياض",
    "enPath": "/routes/abha-airport-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مطار أبها إلى الرياض"
  },
  {
    "slug": "نقل-من-ينبع-الى-مطار-جدة",
    "enPath": "/routes/yanbu-to-jeddah-airport",
    "type": "route",
    "h1": "نقل خاص من ينبع إلى مطار جدة الدولي"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-ينبع",
    "enPath": "/routes/jeddah-airport-to-yanbu",
    "type": "route",
    "h1": "نقل خاص من مطار جدة الدولي إلى ينبع"
  },
  {
    "slug": "نقل-من-الرياض-الى-جازان",
    "enPath": "/routes/riyadh-to-jizan",
    "type": "route",
    "h1": "نقل خاص من الرياض إلى جازان"
  },
  {
    "slug": "نقل-من-جازان-الى-الرياض",
    "enPath": "/routes/jizan-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من جازان إلى الرياض"
  },
  {
    "slug": "نقل-من-الدمام-الى-منفذ-سلوى-قطر",
    "enPath": "/routes/dammam-to-qatar-border",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى منفذ سلوى الحدودي مع قطر"
  },
  {
    "slug": "نقل-مطار-البحر-الأحمر-الدولي",
    "enPath": "/airport-transfer/red-sea-airport",
    "type": "airport",
    "h1": "نقل خاص من مطار البحر الأحمر الدولي (RSI)"
  },
  {
    "slug": "نقل-مطار-الملك-خالد-إلى-مركز-الملك-عبدالله-المالي",
    "enPath": "/riyadh/king-khalid-airport-to-kafd",
    "type": "pointTransferV2",
    "h1": "نقل خاص من مطار الملك خالد إلى مركز الملك عبدالله المالي (KAFD)"
  },
  {
    "slug": "نقل-محطة-قطار-مكة-إلى-فنادق-الحرم",
    "enPath": "/makkah/makkah-train-station-to-haram-hotels",
    "type": "pointTransferV2",
    "h1": "نقل خاص من محطة قطار الحرمين بمكة إلى فنادق الحرم"
  },
  {
    "slug": "نقل-محطة-قطار-المدينة-إلى-المسجد-النبوي",
    "enPath": "/madinah/madinah-train-station-to-prophets-mosque",
    "type": "pointTransferV2",
    "h1": "نقل خاص من محطة قطار المدينة إلى المسجد النبوي وفنادق المركزية"
  },
  {
    "slug": "نقل-مطار-خليج-نيوم",
    "enPath": "/airport-transfer/neom-bay-airport",
    "type": "airport",
    "h1": "نقل خاص من مطار خليج نيوم (NUM)"
  },
  {
    "slug": "نقل-خاص-من-الرياض-إلى-الدرعية",
    "enPath": "/riyadh/riyadh-to-diriyah-transfers",
    "type": "pointTransferV2",
    "h1": "نقل خاص من الرياض إلى الدرعية التاريخية ومطل البجيري"
  },
  {
    "slug": "نقل-مطار-الرياض-إلى-مركز-المعارض-والمؤتمرات",
    "enPath": "/riyadh/king-khalid-airport-to-ricec-exhibition-center",
    "type": "pointTransferV2",
    "h1": "نقل خاص من مطار الرياض إلى مراكز المعارض والمؤتمرات"
  },
  {
    "slug": "نقل-مطار-العلا-إلى-منتجعات-وادي-عشار",
    "enPath": "/alula/alula-airport-to-habitas-and-banyan-tree",
    "type": "pointTransferV2",
    "h1": "نقل خاص من مطار العلا إلى منتجعات هابيتاس وبانيان تري ووادي عشار"
  },
  {
    "slug": "توصيل-من-مطار-الرياض-إلى-الرياض",
    "enPath": "/routes/riyadh-airport-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من مطار الملك خالد إلى مدينة الرياض"
  },
  {
    "slug": "توصيل-من-الرياض-إلى-مطار-الرياض",
    "enPath": "/routes/riyadh-to-riyadh-airport",
    "type": "route",
    "h1": "توصيل خاص من الرياض إلى مطار الملك خالد الدولي"
  },
  {
    "slug": "توصيل-من-مطار-جدة-إلى-جدة",
    "enPath": "/routes/jeddah-airport-to-jeddah",
    "type": "route",
    "h1": "توصيل خاص من مطار الملك عبدالعزيز إلى مدينة جدة"
  },
  {
    "slug": "توصيل-من-جدة-إلى-مطار-جدة",
    "enPath": "/routes/jeddah-to-jeddah-airport",
    "type": "route",
    "h1": "توصيل خاص من مدينة جدة إلى مطار الملك عبدالعزيز"
  },
  {
    "slug": "توصيل-من-مطار-المدينة-إلى-المدينة",
    "enPath": "/routes/madinah-airport-to-madinah",
    "type": "route",
    "h1": "توصيل خاص من مطار المدينة المنورة إلى المنطقة المركزية"
  },
  {
    "slug": "توصيل-من-المدينة-إلى-مطار-المدينة",
    "enPath": "/routes/madinah-to-madinah-airport",
    "type": "route",
    "h1": "توصيل خاص من فنادق المدينة إلى مطار الأمير محمد بن عبدالعزيز"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-الخرج",
    "enPath": "/routes/riyadh-to-al-kharj",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى الخرج"
  },
  {
    "slug": "تاكسي-من-الخرج-إلى-الرياض",
    "enPath": "/routes/al-kharj-to-riyadh",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الخرج إلى الرياض"
  },
  {
    "slug": "توصيل-من-الرياض-إلى-الدرعية",
    "enPath": "/routes/riyadh-to-diriyah",
    "type": "route",
    "h1": "توصيل خاص وفاخر من الرياض إلى الدرعية التاريخية"
  },
  {
    "slug": "توصيل-من-الدرعية-إلى-الرياض",
    "enPath": "/routes/diriyah-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من الدرعية التاريخية إلى مدينة الرياض"
  },
  {
    "slug": "توصيل-من-الخبر-إلى-مطار-البحرين",
    "enPath": "/routes/khobar-to-bahrain-airport",
    "type": "route",
    "h1": "توصيل خاص من الخبر إلى مطار البحرين الدولي عبر الجسر"
  },
  {
    "slug": "توصيل-من-مطار-البحرين-إلى-الخبر",
    "enPath": "/routes/bahrain-airport-to-khobar",
    "type": "route",
    "h1": "توصيل خاص من مطار البحرين الدولي إلى مدينة الخبر"
  },
  {
    "slug": "توصيل-من-الدمام-إلى-مطار-البحرين",
    "enPath": "/routes/dammam-to-bahrain-airport",
    "type": "route",
    "h1": "توصيل خاص من الدمام إلى مطار البحرين الدولي"
  },
  {
    "slug": "توصيل-من-مطار-البحرين-إلى-الدمام",
    "enPath": "/routes/bahrain-airport-to-dammam",
    "type": "route",
    "h1": "توصيل خاص من مطار البحرين الدولي إلى مدينة الدمام"
  },
  {
    "slug": "توصيل-من-ميناء-جدة-إلى-مكة",
    "enPath": "/routes/jeddah-port-to-makkah",
    "type": "route",
    "h1": "توصيل خاص من ميناء جدة الإسلامي إلى مكة المكرمة"
  },
  {
    "slug": "توصيل-من-مكة-إلى-ميناء-جدة",
    "enPath": "/routes/makkah-to-jeddah-port",
    "type": "route",
    "h1": "توصيل خاص من مكة المكرمة إلى ميناء جدة الإسلامي"
  },
  {
    "slug": "توصيل-من-مطار-البحر-الأحمر-إلى-أملج",
    "enPath": "/routes/red-sea-airport-to-umluj",
    "type": "route",
    "h1": "توصيل خاص من مطار البحر الأحمر الدولي إلى أملج"
  },
  {
    "slug": "توصيل-من-أملج-إلى-مطار-البحر-الأحمر",
    "enPath": "/routes/umluj-to-red-sea-airport",
    "type": "route",
    "h1": "توصيل خاص من أملج إلى مطار البحر الأحمر الدولي"
  },
  {
    "slug": "توصيل-من-مطار-العلا-إلى-العلا",
    "enPath": "/routes/alula-airport-to-alula",
    "type": "route",
    "h1": "توصيل خاص من مطار العلا الدولي إلى منتجعات وفنادق العلا"
  },
  {
    "slug": "توصيل-من-العلا-إلى-مطار-العلا",
    "enPath": "/routes/alula-to-alula-airport",
    "type": "route",
    "h1": "توصيل خاص من منتجعات العلا إلى مطار العلا الدولي"
  },
  {
    "slug": "تاكسي-من-مكة-إلى-المدينة-المنورة",
    "enPath": "/routes/makkah-to-madinah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من مكة إلى المدينة المنورة"
  },
  {
    "slug": "تاكسي-من-المدينة-المنورة-إلى-مكة",
    "enPath": "/routes/madinah-to-makkah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من المدينة المنورة إلى مكة المكرمة"
  },
  {
    "slug": "تاكسي-من-جدة-إلى-المدينة-المنورة",
    "enPath": "/routes/jeddah-to-madinah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من جدة إلى المدينة المنورة"
  },
  {
    "slug": "تاكسي-من-المدينة-المنورة-إلى-جدة",
    "enPath": "/routes/madinah-to-jeddah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من المدينة المنورة إلى جدة"
  },
  {
    "slug": "تاكسي-من-مكة-إلى-مدينة-جدة",
    "enPath": "/routes/makkah-to-jeddah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من مكة المكرمة إلى جدة"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-مدينة-الدمام",
    "enPath": "/routes/riyadh-to-dammam",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى الدمام"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-مدينة-الرياض",
    "enPath": "/routes/dammam-to-riyadh",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الدمام إلى الرياض"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-مدينة-جدة",
    "enPath": "/routes/riyadh-to-jeddah",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى جدة"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-العلا",
    "enPath": "/routes/riyadh-to-alula",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى العلا"
  },
  {
    "slug": "تاكسي-من-المدينة-المنورة-إلى-العلا",
    "enPath": "/routes/madinah-to-alula",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من المدينة المنورة إلى العلا"
  },
  {
    "slug": "تاكسي-من-الخبر-إلى-مملكة-البحرين",
    "enPath": "/routes/khobar-to-bahrain",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الخبر إلى البحرين"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-مملكة-البحرين",
    "enPath": "/routes/dammam-to-bahrain",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الدمام إلى البحرين"
  },
  {
    "slug": "تاكسي-من-البحرين-إلى-مدينة-الخبر",
    "enPath": "/routes/bahrain-to-khobar",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من البحرين إلى الخبر"
  },
  {
    "slug": "توصيل-من-مطار-الدمام-إلى-مدينة-الخبر",
    "enPath": "/routes/dammam-airport-to-khobar",
    "type": "route",
    "h1": "توصيل خاص من مطار الملك فهد إلى مدينة الخبر"
  },
  {
    "slug": "توصيل-من-مطار-الدمام-إلى-مملكة-البحرين",
    "enPath": "/routes/dammam-airport-to-bahrain",
    "type": "route",
    "h1": "توصيل خاص من مطار الملك فهد إلى مملكة البحرين عبر الجسر"
  },
  {
    "slug": "توصيل-من-مطار-الدمام-إلى-مدينة-الظهران",
    "enPath": "/routes/dammam-airport-to-dhahran",
    "type": "route",
    "h1": "توصيل خاص من مطار الملك فهد إلى مدينة الظهران"
  },
  {
    "slug": "توصيل-من-الظهران-إلى-مطار-الدمام-الدولي",
    "enPath": "/routes/dhahran-to-dammam-airport",
    "type": "route",
    "h1": "توصيل خاص من مدينة الظهران إلى مطار الملك فهد الدولي"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-الهفوف-الأحساء",
    "enPath": "/routes/dammam-to-hofuf",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الدمام إلى الهفوف (الأحساء)"
  },
  {
    "slug": "تاكسي-من-الهفوف-إلى-مدينة-الدمام",
    "enPath": "/routes/hofuf-to-dammam",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الهفوف إلى الدمام"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-مدينة-بقيق",
    "enPath": "/routes/dammam-to-abqaiq",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الدمام إلى بقيق"
  },
  {
    "slug": "تاكسي-من-بقيق-إلى-مدينة-الدمام",
    "enPath": "/routes/abqaiq-to-dammam",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من بقيق إلى الدمام"
  },
  {
    "slug": "توصيل-من-الدمام-إلى-منفذ-البطحاء-الإمارات",
    "enPath": "/routes/dammam-to-al-batha-border",
    "type": "route",
    "h1": "توصيل خاص من الدمام إلى منفذ البطحاء الحدودي (الإمارات)"
  },
  {
    "slug": "توصيل-من-الدمام-إلى-منفذ-الخفجي-الكويت",
    "enPath": "/routes/dammam-to-khafji-border",
    "type": "route",
    "h1": "توصيل خاص من الدمام إلى منفذ الخفجي الحدودي (الكويت)"
  },
  {
    "slug": "توصيل-من-الرياض-إلى-منفذ-سلوى-قطر",
    "enPath": "/routes/riyadh-to-qatar-border",
    "type": "route",
    "h1": "توصيل خاص من الرياض إلى منفذ سلوى الحدودي (قطر)"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-دولة-الكويت",
    "enPath": "/routes/dammam-to-kuwait-city",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الدمام إلى مدينة الكويت"
  },
  {
    "slug": "المسافة-بين-جدة-ومكة",
    "enPath": "/distance/jeddah-to-makkah-distance",
    "type": "distanceV2",
    "h1": "المسافة بين جدة ومكة: كم كيلومترًا وكم تستغرق الرحلة؟"
  },
  {
    "slug": "المسافة-بين-مكة-والمدينة-المنورة",
    "enPath": "/distance/makkah-to-madinah-distance",
    "type": "distanceV2",
    "h1": "المسافة بين مكة والمدينة المنورة: الطرق ومدة الرحلة"
  },
  {
    "slug": "المسافة-من-المدينة-المنورة-إلى-مكة",
    "enPath": "/distance/madinah-to-makkah-distance",
    "type": "distanceV2",
    "h1": "المسافة من المدينة المنورة إلى مكة: المسافة والميقات"
  },
  {
    "slug": "المسافة-بين-جدة-والمدينة-المنورة",
    "enPath": "/distance/jeddah-to-madinah-distance",
    "type": "distanceV2",
    "h1": "المسافة بين جدة والمدينة المنورة: الطريق والطيران والقطار"
  },
  {
    "slug": "المسافة-بين-الرياض-والدمام",
    "enPath": "/distance/riyadh-to-dammam-distance",
    "type": "distanceV2",
    "h1": "المسافة بين الرياض والدمام: الطريق والقطار"
  },
  {
    "slug": "المسافة-من-الدمام-إلى-الرياض",
    "enPath": "/distance/dammam-to-riyadh-distance",
    "type": "distanceV2",
    "h1": "المسافة من الدمام إلى الرياض: القيادة والقطار من المطار وجسر الملك فهد"
  },
  {
    "slug": "المسافة-بين-الرياض-وجدة",
    "enPath": "/distance/riyadh-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة بين الرياض وجدة: هل القيادة عملية؟"
  },
  {
    "slug": "المسافة-بين-الرياض-والعلا",
    "enPath": "/distance/riyadh-to-alula-distance",
    "type": "distanceV2",
    "h1": "المسافة بين الرياض والعلا: القيادة أم الطيران؟"
  },
  {
    "slug": "المسافة-من-المدينة-المنورة-إلى-العلا",
    "enPath": "/distance/madinah-to-alula-distance",
    "type": "distanceV2",
    "h1": "المسافة من المدينة المنورة إلى العلا: لماذا تُقطع غالبًا بالسيارة"
  },
  {
    "slug": "المسافة-بين-جدة-والطائف",
    "enPath": "/distance/jeddah-to-taif-distance",
    "type": "distanceV2",
    "h1": "المسافة بين جدة والطائف: طريق الهدا الجبلي"
  },
  {
    "slug": "المسافة-بين-الخبر-والبحرين",
    "enPath": "/distance/khobar-to-bahrain-distance",
    "type": "distanceV2",
    "h1": "المسافة بين الخبر والبحرين: جسر الملك فهد ووقت العبور"
  },
  {
    "slug": "المسافة-بين-الدمام-والبحرين",
    "enPath": "/distance/dammam-to-bahrain-distance",
    "type": "distanceV2",
    "h1": "المسافة بين الدمام والبحرين: القيادة عبر الجسر أم الطيران؟"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-الحدود-القطرية",
    "enPath": "/distance/riyadh-to-qatar-border-distance",
    "type": "distanceV2",
    "h1": "المسافة من الرياض إلى الحدود القطرية: منفذ سلوى"
  },
  {
    "slug": "المسافة-بين-مطار-الدمام-والخبر",
    "enPath": "/distance/dammam-airport-to-khobar-distance",
    "type": "distanceV2",
    "h1": "المسافة بين مطار الدمام والخبر: النقل الواقعي من المطار"
  },
  {
    "slug": "المسافة-من-مكة-إلى-جدة",
    "enPath": "/distance/makkah-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة من مكة إلى جدة: المطار أم وسط المدينة؟"
  },
  {
    "slug": "المسافة-من-المدينة-المنورة-إلى-جدة",
    "enPath": "/distance/madinah-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة من المدينة المنورة إلى جدة: التخطيط ليوم المغادرة الدولية"
  },
  {
    "slug": "المسافة-من-الطائف-إلى-جدة",
    "enPath": "/distance/taif-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة من الطائف إلى جدة: النزول من طريق الهدا"
  },
  {
    "slug": "المسافة-بين-جدة-وينبع",
    "enPath": "/distance/jeddah-to-yanbu-distance",
    "type": "distanceV2",
    "h1": "المسافة بين جدة وينبع عبر الساحل"
  },
  {
    "slug": "المسافة-من-ينبع-إلى-جدة",
    "enPath": "/distance/yanbu-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة من ينبع إلى جدة والاتصال بمطارها"
  },
  {
    "slug": "المسافة-بين-جدة-ومدينة-الملك-عبدالله-الاقتصادية",
    "enPath": "/distance/jeddah-to-kaec-distance",
    "type": "distanceV2",
    "h1": "المسافة بين جدة ومدينة الملك عبدالله الاقتصادية وقطار الحرمين"
  },
  {
    "slug": "المسافة-من-مدينة-الملك-عبدالله-الاقتصادية-إلى-جدة",
    "enPath": "/distance/kaec-to-jeddah-distance",
    "type": "distanceV2",
    "h1": "المسافة من مدينة الملك عبدالله الاقتصادية إلى جدة والاتصال بمطارها"
  },
  {
    "slug": "المسافة-من-مطار-الدمام-إلى-البحرين",
    "enPath": "/distance/dammam-airport-to-bahrain-distance",
    "type": "distanceV2",
    "h1": "المسافة من مطار الدمام إلى البحرين عبر جسر الملك فهد"
  },
  {
    "slug": "المسافة-من-مطار-البحرين-إلى-الدمام",
    "enPath": "/distance/bahrain-airport-to-dammam-distance",
    "type": "distanceV2",
    "h1": "المسافة من مطار البحرين إلى الدمام"
  },
  {
    "slug": "المسافة-من-البحرين-إلى-الخبر",
    "enPath": "/distance/bahrain-to-khobar-distance",
    "type": "distanceV2",
    "h1": "المسافة من البحرين إلى الخبر: أقصر عبور سعودي بحريني"
  },
  {
    "slug": "المسافة-من-المنامة-إلى-الدمام",
    "enPath": "/distance/manama-to-dammam-distance",
    "type": "distanceV2",
    "h1": "المسافة من المنامة إلى الدمام: الرحلة من العاصمة البحرينية"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-البحرين",
    "enPath": "/distance/riyadh-to-bahrain-distance",
    "type": "distanceV2",
    "h1": "المسافة من الرياض إلى البحرين: رحلة الطريق إلى المنامة"
  },
  {
    "slug": "المسافة-من-البحرين-إلى-الرياض",
    "enPath": "/distance/bahrain-to-riyadh-distance",
    "type": "distanceV2",
    "h1": "المسافة من البحرين إلى الرياض: رحلة الطريق إلى العاصمة"
  },
  {
    "slug": "المسافة-من-الدمام-إلى-مدينة-الكويت",
    "enPath": "/distance/dammam-to-kuwait-city-distance",
    "type": "distanceV2",
    "h1": "المسافة من الدمام إلى مدينة الكويت عبر منفذ الخفجي"
  },
  {
    "slug": "المسافة-من-مدينة-الكويت-إلى-الدمام",
    "enPath": "/distance/kuwait-city-to-dammam-distance",
    "type": "distanceV2",
    "h1": "المسافة من مدينة الكويت إلى الدمام: الرحلة الجنوبية"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-مدينة-الكويت",
    "enPath": "/distance/riyadh-to-kuwait-city-distance",
    "type": "distanceV2",
    "h1": "المسافة من الرياض إلى مدينة الكويت: أطول رحلة برية خليجية"
  },
  {
    "slug": "المسافة-من-مدينة-الكويت-إلى-الرياض",
    "enPath": "/distance/kuwait-city-to-riyadh-distance",
    "type": "journeyV2",
    "h1": "مدينة الكويت إلى الرياض: رحلة برية كاملة اليوم عبر الحدود"
  },
  {
    "slug": "المسافة-من-مطار-الدمام-إلى-منفذ-الخفجي",
    "enPath": "/distance/dammam-airport-to-khafji-border-distance",
    "type": "journeyV2",
    "h1": "مطار الدمام إلى منفذ الخفجي: مرحلة المطار إلى مدينة الحدود"
  },
  {
    "slug": "المسافة-من-منفذ-الخفجي-إلى-مطار-الدمام",
    "enPath": "/distance/khafji-border-to-dammam-airport-distance",
    "type": "journeyV2",
    "h1": "منفذ الخفجي إلى مطار الدمام: التخطيط حول رحلة طيرانك"
  },
  {
    "slug": "المسافة-من-الدمام-إلى-مطار-الكويت",
    "enPath": "/distance/dammam-to-kuwait-airport-distance",
    "type": "journeyV2",
    "h1": "الدمام إلى مطار الكويت: المسافة والمعبر الحدودي"
  },
  {
    "slug": "المسافة-من-مطار-الكويت-إلى-الدمام",
    "enPath": "/distance/kuwait-airport-to-dammam-distance",
    "type": "journeyV2",
    "h1": "مطار الكويت إلى الدمام: الهبوط ثم قيادة طويلة عبر الحدود"
  },
  {
    "slug": "المسافة-من-مطار-الدمام-إلى-الدوحة",
    "enPath": "/distance/dammam-airport-to-doha-distance",
    "type": "journeyV2",
    "h1": "مطار الدمام إلى الدوحة: رحلة وصول عابرة للحدود"
  },
  {
    "slug": "المسافة-من-الدوحة-إلى-مطار-الدمام",
    "enPath": "/distance/doha-to-dammam-airport-distance",
    "type": "journeyV2",
    "h1": "الدوحة إلى مطار الدمام: التخطيط حول رحلتك الجوية"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-الدوحة",
    "enPath": "/distance/riyadh-to-doha-distance",
    "type": "journeyV2",
    "h1": "الرياض إلى الدوحة: الرحلة البرية الطويلة بين عاصمتين"
  },
  {
    "slug": "المسافة-من-الدوحة-إلى-الرياض",
    "enPath": "/distance/doha-to-riyadh-distance",
    "type": "journeyV2",
    "h1": "الدوحة إلى الرياض: العبور إلى السعودية والطريق الطويل إلى العاصمة"
  },
  {
    "slug": "المسافة-من-الخبر-إلى-الدوحة",
    "enPath": "/distance/al-khobar-to-doha-distance",
    "type": "journeyV2",
    "h1": "الخبر إلى الدوحة: المسار الأقصر من المنطقة الشرقية"
  },
  {
    "slug": "المسافة-من-الدوحة-إلى-الخبر",
    "enPath": "/distance/doha-to-al-khobar-distance",
    "type": "journeyV2",
    "h1": "الدوحة إلى الخبر: رحلة إقليمية عابرة للحدود"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-دبي",
    "enPath": "/distance/riyadh-to-dubai-distance",
    "type": "journeyV2",
    "h1": "الرياض إلى دبي: الرحلة البرية الطويلة نحو الإمارات"
  },
  {
    "slug": "المسافة-من-دبي-إلى-الرياض",
    "enPath": "/distance/dubai-to-riyadh-distance",
    "type": "journeyV2",
    "h1": "دبي إلى الرياض: العبور إلى السعودية والطريق الطويل نحو العاصمة"
  },
  {
    "slug": "المسافة-من-الدمام-إلى-دبي",
    "enPath": "/distance/dammam-to-dubai-distance",
    "type": "journeyV2",
    "h1": "الدمام إلى دبي: المسار الأقصر من المنطقة الشرقية نحو الإمارات"
  },
  {
    "slug": "المسافة-من-دبي-إلى-الدمام",
    "enPath": "/distance/dubai-to-dammam-distance",
    "type": "journeyV2",
    "h1": "دبي إلى الدمام: من الحدود الإماراتية إلى المنطقة الشرقية"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-أبوظبي",
    "enPath": "/distance/riyadh-to-abu-dhabi-distance",
    "type": "distanceV2",
    "h1": "دليل المسافة والرحلة الدولية بالطريق البري"
  },
  {
    "slug": "المسافة-من-أبوظبي-إلى-الرياض",
    "enPath": "/distance/abu-dhabi-to-riyadh-distance",
    "type": "distanceV2",
    "h1": "دليل رحلة العودة والدخول إلى السعودية"
  },
  {
    "slug": "المسافة-من-الرياض-إلى-منفذ-البطحاء",
    "enPath": "/distance/riyadh-to-al-batha-border-distance",
    "type": "distanceV2",
    "h1": "دليل المسافة من الرياض إلى المعبر الحدودي"
  },
  {
    "slug": "المسافة-من-منفذ-البطحاء-إلى-الرياض",
    "enPath": "/distance/al-batha-border-to-riyadh-distance",
    "type": "distanceV2",
    "h1": "دليل الرحلة البرية من المعبر إلى الرياض"
  },
  {
    "slug": "المسافة-من-الدمام-إلى-منفذ-البطحاء",
    "enPath": "/distance/dammam-to-al-batha-border-distance",
    "type": "distanceV2",
    "h1": "دليل الطريق من المنطقة الشرقية إلى المعبر الحدودي"
  },
  {
    "slug": "سياسة-الخصوصية",
    "enPath": "/privacy-policy",
    "type": "legal",
    "h1": "سياسة الخصوصية"
  },
  {
    "slug": "الشروط-والأحكام",
    "enPath": "/terms-and-conditions",
    "type": "legal",
    "h1": "الشروط والأحكام"
  },
  {
    "slug": "نقل-من-جدة-الى-الطائف",
    "enPath": "/routes/jeddah-to-taif",
    "type": "route",
    "h1": "نقل خاص من جدة إلى الطائف"
  },
  {
    "slug": "نقل-من-الطائف-الى-جدة",
    "enPath": "/routes/taif-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من الطائف إلى جدة"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-الطائف",
    "enPath": "/routes/makkah-to-taif",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى الطائف"
  },
  {
    "slug": "نقل-من-الطائف-الى-مكة-المكرمة",
    "enPath": "/routes/taif-to-makkah",
    "type": "route",
    "h1": "نقل خاص من الطائف إلى مكة المكرمة"
  },
  {
    "slug": "نقل-من-العلا-الى-تبوك",
    "enPath": "/routes/alula-to-tabuk",
    "type": "route",
    "h1": "نقل خاص من العلا إلى تبوك"
  },
  {
    "slug": "نقل-من-تبوك-الى-العلا",
    "enPath": "/routes/tabuk-to-alula",
    "type": "route",
    "h1": "نقل خاص من تبوك إلى العلا"
  },
  {
    "slug": "نقل-من-العلا-الى-نيوم",
    "enPath": "/routes/alula-to-neom",
    "type": "route",
    "h1": "نقل خاص من العلا إلى نيوم"
  },
  {
    "slug": "نقل-من-نيوم-الى-العلا",
    "enPath": "/routes/neom-to-alula",
    "type": "route",
    "h1": "نقل خاص من نيوم إلى العلا"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-العلا",
    "enPath": "/routes/makkah-to-alula",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى العلا"
  },
  {
    "slug": "نقل-من-الدمام-الى-الخبر",
    "enPath": "/routes/dammam-to-khobar",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى الخبر"
  },
  {
    "slug": "نقل-من-الخبر-الى-الدمام",
    "enPath": "/routes/khobar-to-dammam",
    "type": "route",
    "h1": "نقل خاص من الخبر إلى الدمام"
  },
  {
    "slug": "نقل-من-الدمام-الى-الظهران",
    "enPath": "/routes/dammam-to-dhahran",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى الظهران"
  },
  {
    "slug": "نقل-من-الظهران-الى-الدمام",
    "enPath": "/routes/dhahran-to-dammam",
    "type": "route",
    "h1": "نقل خاص من الظهران إلى الدمام"
  },
  {
    "slug": "نقل-من-الدمام-الى-الجبيل",
    "enPath": "/routes/dammam-to-jubail",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى الجبيل"
  },
  {
    "slug": "نقل-من-الجبيل-الى-الدمام",
    "enPath": "/routes/jubail-to-dammam",
    "type": "route",
    "h1": "نقل خاص من الجبيل إلى الدمام"
  },
  {
    "slug": "نقل-من-الدمام-الى-رأس-تنورة",
    "enPath": "/routes/dammam-to-ras-tanura",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى رأس تنورة"
  },
  {
    "slug": "نقل-من-رأس-تنورة-الى-الدمام",
    "enPath": "/routes/ras-tanura-to-dammam",
    "type": "route",
    "h1": "نقل خاص من رأس تنورة إلى الدمام"
  },
  {
    "slug": "نقل-من-الدمام-الى-القطيف",
    "enPath": "/routes/dammam-to-qatif",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى القطيف"
  },
  {
    "slug": "نقل-من-القطيف-الى-الدمام",
    "enPath": "/routes/qatif-to-dammam",
    "type": "route",
    "h1": "نقل خاص من القطيف إلى الدمام"
  },
  {
    "slug": "نقل-من-الدمام-الى-سيهات",
    "enPath": "/routes/dammam-to-saihat",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى سيهات"
  },
  {
    "slug": "نقل-من-سيهات-الى-الدمام",
    "enPath": "/routes/saihat-to-dammam",
    "type": "route",
    "h1": "نقل خاص من سيهات إلى الدمام"
  },
  {
    "slug": "نقل-من-جدة-الى-ينبع",
    "enPath": "/routes/jeddah-to-yanbu",
    "type": "route",
    "h1": "نقل خاص من جدة إلى ينبع"
  },
  {
    "slug": "نقل-من-ينبع-الى-جدة",
    "enPath": "/routes/yanbu-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من ينبع إلى جدة"
  },
  {
    "slug": "نقل-من-جدة-الى-مدينة-الملك-عبدالله-الاقتصادية",
    "enPath": "/routes/jeddah-to-kaec",
    "type": "route",
    "h1": "نقل خاص من جدة إلى مدينة الملك عبدالله الاقتصادية"
  },
  {
    "slug": "نقل-من-مدينة-الملك-عبدالله-الاقتصادية-الى-جدة",
    "enPath": "/routes/kaec-to-jeddah",
    "type": "route",
    "h1": "نقل خاص من مدينة الملك عبدالله الاقتصادية إلى جدة"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-الرياض",
    "enPath": "/routes/makkah-to-riyadh",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى الرياض"
  },
  {
    "slug": "نقل-من-الرياض-الى-مكة-المكرمة",
    "enPath": "/routes/riyadh-to-makkah",
    "type": "route",
    "h1": "نقل خاص من الرياض إلى مكة المكرمة"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-مدينة-الملك-عبدالله-الاقتصادية",
    "enPath": "/routes/makkah-to-kaec",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى مدينة الملك عبدالله الاقتصادية"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-ينبع",
    "enPath": "/routes/makkah-to-yanbu",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى ينبع"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-الدمام",
    "enPath": "/routes/makkah-to-dammam",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى الدمام"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-أبها",
    "enPath": "/routes/makkah-to-abha",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى أبها"
  },
  {
    "slug": "نقل-من-الدمام-الى-الخفجي",
    "enPath": "/routes/dammam-to-al-khafji",
    "type": "route",
    "h1": "نقل خاص من الدمام إلى الخفجي"
  },
  {
    "slug": "نقل-من-الخفجي-الى-الدمام",
    "enPath": "/routes/al-khafji-to-dammam",
    "type": "route",
    "h1": "نقل خاص من الخفجي إلى الدمام"
  },
  {
    "slug": "نقل-من-مطار-الطائف-الى-مكة-المكرمة",
    "enPath": "/routes/taif-airport-to-makkah",
    "type": "route",
    "h1": "نقل خاص من مطار الطائف إلى مكة المكرمة"
  },
  {
    "slug": "نقل-من-مطار-الطائف-الى-المدينة-المنورة",
    "enPath": "/routes/taif-airport-to-madinah",
    "type": "route",
    "h1": "نقل خاص من مطار الطائف إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-مطار-العلا-الى-المدينة-المنورة",
    "enPath": "/routes/alula-airport-to-madinah",
    "type": "route",
    "h1": "نقل خاص من مطار العلا إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-مطار-العلا-الى-تبوك",
    "enPath": "/routes/alula-airport-to-tabuk",
    "type": "route",
    "h1": "نقل خاص من مطار العلا إلى تبوك"
  },
  {
    "slug": "نقل-من-مطار-العلا-الى-نيوم",
    "enPath": "/routes/alula-airport-to-neom",
    "type": "route",
    "h1": "نقل خاص من مطار العلا إلى نيوم"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-الجبيل",
    "enPath": "/routes/dammam-airport-to-jubail",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى الجبيل"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-القطيف",
    "enPath": "/routes/dammam-airport-to-qatif",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى القطيف"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-رأس-تنورة",
    "enPath": "/routes/dammam-airport-to-ras-tanura",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى رأس تنورة"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-سيهات",
    "enPath": "/routes/dammam-airport-to-saihat",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى سيهات"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-بقيق",
    "enPath": "/routes/dammam-airport-to-abqaiq",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى بقيق"
  },
  {
    "slug": "نقل-من-مطار-الدمام-الى-الهفوف",
    "enPath": "/routes/dammam-airport-to-hofuf",
    "type": "route",
    "h1": "نقل خاص من مطار الدمام إلى الهفوف"
  },
  {
    "slug": "نقل-من-مكة-المكرمة-الى-مطار-جدة",
    "enPath": "/routes/makkah-to-jeddah-airport",
    "type": "route",
    "h1": "نقل خاص من مكة المكرمة إلى مطار جدة"
  },
  {
    "slug": "نقل-من-الخبر-الى-مطار-الدمام",
    "enPath": "/routes/khobar-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من الخبر إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-الجبيل-الى-مطار-الدمام",
    "enPath": "/routes/jubail-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من الجبيل إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-القطيف-الى-مطار-الدمام",
    "enPath": "/routes/qatif-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من القطيف إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-رأس-تنورة-الى-مطار-الدمام",
    "enPath": "/routes/ras-tanura-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من رأس تنورة إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-سيهات-الى-مطار-الدمام",
    "enPath": "/routes/saihat-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من سيهات إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-بقيق-الى-مطار-الدمام",
    "enPath": "/routes/abqaiq-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من بقيق إلى مطار الدمام"
  },
  {
    "slug": "نقل-من-الهفوف-الى-مطار-الدمام",
    "enPath": "/routes/hofuf-to-dammam-airport",
    "type": "route",
    "h1": "نقل خاص من الهفوف إلى مطار الدمام"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-مملكة-البحرين",
    "enPath": "/routes/riyadh-to-bahrain",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى البحرين"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-دولة-الكويت",
    "enPath": "/routes/riyadh-to-kuwait-city",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الرياض إلى مدينة الكويت"
  },
  {
    "slug": "توصيل-من-الدمام-إلى-مطار-الكويت",
    "enPath": "/routes/dammam-to-kuwait-airport",
    "type": "route",
    "h1": "توصيل خاص من الدمام إلى مطار الكويت الدولي"
  },
  {
    "slug": "توصيل-من-مطار-الدمام-إلى-الدوحة",
    "enPath": "/routes/dammam-airport-to-doha",
    "type": "route",
    "h1": "توصيل خاص من مطار الدمام إلى الدوحة عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-الدوحة",
    "enPath": "/routes/riyadh-to-doha",
    "type": "route",
    "h1": "توصيل خاص من الرياض إلى الدوحة عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-الخبر-إلى-الدوحة",
    "enPath": "/routes/al-khobar-to-doha",
    "type": "route",
    "h1": "توصيل خاص من الخبر إلى الدوحة عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-دبي",
    "enPath": "/routes/riyadh-to-dubai",
    "type": "route",
    "h1": "توصيل خاص من الرياض إلى دبي عبر منفذ البطحاء"
  },
  {
    "slug": "تاكسي-من-الدمام-إلى-دبي",
    "enPath": "/routes/dammam-to-dubai",
    "type": "route",
    "h1": "توصيل خاص من الدمام إلى دبي عبر منفذ البطحاء"
  },
  {
    "slug": "تاكسي-من-الرياض-إلى-أبوظبي",
    "enPath": "/routes/riyadh-to-abu-dhabi",
    "type": "route",
    "h1": "الرياض إلى أبوظبي: رحلة الطريق الدولية الكاملة"
  },
  {
    "slug": "تاكسي-من-جدة-إلى-دبي",
    "enPath": "/routes/jeddah-to-dubai",
    "type": "route",
    "h1": "توصيل خاص من جدة إلى دبي عبر منفذ البطحاء"
  },
  {
    "slug": "تاكسي-من-المنامة-إلى-الدمام",
    "enPath": "/routes/manama-to-dammam",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من المنامة إلى الدمام"
  },
  {
    "slug": "تاكسي-من-البحرين-إلى-الرياض",
    "enPath": "/routes/bahrain-to-riyadh",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من البحرين إلى الرياض"
  },
  {
    "slug": "تاكسي-من-الكويت-إلى-الدمام",
    "enPath": "/routes/kuwait-city-to-dammam",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الكويت إلى الدمام"
  },
  {
    "slug": "تاكسي-من-الكويت-إلى-الرياض",
    "enPath": "/routes/kuwait-city-to-riyadh",
    "type": "route",
    "h1": "خدمة تاكسي وتوصيل خاص من الكويت إلى الرياض"
  },
  {
    "slug": "توصيل-من-مطار-الكويت-إلى-الدمام",
    "enPath": "/routes/kuwait-airport-to-dammam",
    "type": "route",
    "h1": "توصيل خاص من مطار الكويت الدولي إلى الدمام"
  },
  {
    "slug": "توصيل-من-الدوحة-إلى-مطار-الدمام",
    "enPath": "/routes/doha-to-dammam-airport",
    "type": "route",
    "h1": "توصيل خاص من الدوحة إلى مطار الدمام عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-الدوحة-إلى-الرياض",
    "enPath": "/routes/doha-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من الدوحة إلى الرياض عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-الدوحة-إلى-الخبر",
    "enPath": "/routes/doha-to-al-khobar",
    "type": "route",
    "h1": "توصيل خاص من الدوحة إلى الخبر عبر منفذ سلوى"
  },
  {
    "slug": "تاكسي-من-دبي-إلى-الرياض",
    "enPath": "/routes/dubai-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من دبي إلى الرياض عبر منفذ الغويفات"
  },
  {
    "slug": "تاكسي-من-دبي-إلى-الدمام",
    "enPath": "/routes/dubai-to-dammam",
    "type": "route",
    "h1": "توصيل خاص من دبي إلى الدمام عبر منفذ الغويفات"
  },
  {
    "slug": "تاكسي-من-أبوظبي-إلى-الرياض",
    "enPath": "/routes/abu-dhabi-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من أبوظبي إلى الرياض: دليل الوصول عبر الحدود"
  },
  {
    "slug": "تاكسي-من-دبي-إلى-جدة",
    "enPath": "/routes/dubai-to-jeddah",
    "type": "route",
    "h1": "توصيل خاص من دبي إلى جدة عبر منفذ الغويفات"
  },
  {
    "slug": "توصيل-من-الرياض-إلى-منفذ-البطحاء-الإمارات",
    "enPath": "/routes/riyadh-to-al-batha-border",
    "type": "route",
    "h1": "توصيل خاص من الرياض إلى منفذ البطحاء الحدودي (الإمارات)"
  },
  {
    "slug": "توصيل-من-مطار-الدمام-إلى-منفذ-الخفجي",
    "enPath": "/routes/dammam-airport-to-khafji-border",
    "type": "route",
    "h1": "توصيل خاص من مطار الدمام إلى منفذ الخفجي الحدودي"
  },
  {
    "slug": "توصيل-من-منفذ-الخفجي-إلى-مطار-الدمام",
    "enPath": "/routes/khafji-border-to-dammam-airport",
    "type": "route",
    "h1": "توصيل خاص من منفذ الخفجي الحدودي إلى مطار الدمام"
  },
  {
    "slug": "توصيل-من-منفذ-البطحاء-إلى-الرياض",
    "enPath": "/routes/al-batha-border-to-riyadh",
    "type": "route",
    "h1": "توصيل خاص من منفذ البطحاء الحدودي إلى الرياض"
  },
  {
    "slug": "توصيل-من-منفذ-البطحاء-إلى-الدمام",
    "enPath": "/routes/al-batha-border-to-dammam",
    "type": "route",
    "h1": "توصيل خاص من منفذ البطحاء الحدودي إلى الدمام"
  },
  {
    "slug": "توصيل-من-منفذ-الخفجي-إلى-الدمام",
    "enPath": "/routes/khafji-border-to-dammam",
    "type": "route",
    "h1": "توصيل خاص من منفذ الخفجي الحدودي إلى الدمام"
  },
  {
    "slug": "توصيل-من-تبوك-إلى-عمان",
    "enPath": "/routes/tabuk-to-amman",
    "type": "route",
    "h1": "توصيل خاص من تبوك إلى عمان"
  },
  {
    "slug": "توصيل-من-عمان-إلى-تبوك",
    "enPath": "/routes/amman-to-tabuk",
    "type": "route",
    "h1": "توصيل خاص من عمان إلى تبوك"
  },
  {
    "slug": "توصيل-من-العلا-إلى-عمان",
    "enPath": "/routes/alula-to-amman",
    "type": "route",
    "h1": "توصيل خاص من العلا إلى عمان"
  },
  {
    "slug": "توصيل-من-عمان-إلى-العلا",
    "enPath": "/routes/amman-to-alula",
    "type": "route",
    "h1": "توصيل خاص من عمان إلى العلا"
  },
  {
    "slug": "توصيل-من-المدينة-المنورة-إلى-عمان",
    "enPath": "/routes/madinah-to-amman",
    "type": "route",
    "h1": "توصيل خاص من المدينة المنورة إلى عمان"
  },
  {
    "slug": "توصيل-من-عمان-إلى-المدينة-المنورة",
    "enPath": "/routes/amman-to-madinah",
    "type": "route",
    "h1": "توصيل خاص من عمان إلى المدينة المنورة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-البلد",
    "enPath": "/jeddah/jeddah-airport-to-al-balad",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى البلد"
  },
  {
    "slug": "نقل-من-البلد-الى-مطار-جدة",
    "enPath": "/jeddah/al-balad-to-jeddah-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من البلد إلى مطار جدة"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-البلد",
    "enPath": "/jeddah/hotels-to-al-balad",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى البلد"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-كورنيش-جدة",
    "enPath": "/jeddah/jeddah-airport-to-jeddah-corniche",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى كورنيش جدة"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-كورنيش-جدة",
    "enPath": "/jeddah/hotels-to-jeddah-corniche",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى الكورنيش"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-نافورة-الملك-فهد",
    "enPath": "/jeddah/jeddah-airport-to-king-fahd-fountain",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى نافورة الملك فهد"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-نافورة-الملك-فهد",
    "enPath": "/jeddah/hotels-to-king-fahd-fountain",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى نافورة الملك فهد"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-ريد-سي-مول",
    "enPath": "/jeddah/jeddah-airport-to-red-sea-mall",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى ريد سي مول"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-ريد-سي-مول",
    "enPath": "/jeddah/hotels-to-red-sea-mall",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى ريد سي مول"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-مول-العرب",
    "enPath": "/jeddah/jeddah-airport-to-mall-of-arabia",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى مول العرب"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-مول-العرب",
    "enPath": "/jeddah/hotels-to-mall-of-arabia",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى مول العرب"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-جدة-بارك",
    "enPath": "/jeddah/jeddah-airport-to-jeddah-park",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى جدة بارك"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-جدة-بارك",
    "enPath": "/jeddah/hotels-to-jeddah-park",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى جدة بارك"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-ميناء-جدة-الاسلامي",
    "enPath": "/jeddah/jeddah-airport-to-jeddah-islamic-port",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى ميناء جدة الإسلامي"
  },
  {
    "slug": "نقل-من-ميناء-جدة-الاسلامي-الى-مطار-جدة",
    "enPath": "/jeddah/jeddah-islamic-port-to-jeddah-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من ميناء جدة الإسلامي إلى مطار جدة"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-ميناء-جدة-الاسلامي",
    "enPath": "/jeddah/hotels-to-jeddah-islamic-port",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى ميناء جدة الإسلامي"
  },
  {
    "slug": "نقل-من-ميناء-جدة-الاسلامي-الى-فنادق-جدة",
    "enPath": "/jeddah/jeddah-islamic-port-to-hotels",
    "type": "pointTransferV2",
    "h1": "تاكسي من ميناء جدة الإسلامي إلى فنادق جدة"
  },
  {
    "slug": "نقل-من-مطار-جدة-الى-محطة-قطار-السليمانية",
    "enPath": "/jeddah/jeddah-airport-to-jeddah-sulaymaniyah-railway-station",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار جدة إلى محطة قطار السليمانية"
  },
  {
    "slug": "نقل-من-محطة-قطار-السليمانية-الى-مطار-جدة",
    "enPath": "/jeddah/jeddah-sulaymaniyah-railway-station-to-jeddah-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من محطة قطار السليمانية إلى مطار جدة"
  },
  {
    "slug": "نقل-من-فنادق-جدة-الى-محطة-قطار-السليمانية",
    "enPath": "/jeddah/hotels-to-jeddah-sulaymaniyah-railway-station",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق جدة إلى محطة قطار السليمانية"
  },
  {
    "slug": "نقل-من-محطة-قطار-السليمانية-الى-فنادق-جدة",
    "enPath": "/jeddah/jeddah-sulaymaniyah-railway-station-to-hotels",
    "type": "pointTransferV2",
    "h1": "تاكسي من محطة قطار السليمانية إلى فنادق جدة"
  },
  {
    "slug": "نقل-سائق-خاص-في-جدة",
    "enPath": "/jeddah/private-chauffeur-service-jeddah",
    "type": "pointTransferV2",
    "h1": "خدمة سائق خاص في جدة"
  },
  {
    "slug": "استئجار-سائق-بالساعة-جدة",
    "enPath": "/jeddah/hourly-chauffeur-jeddah",
    "type": "pointTransferV2",
    "h1": "استئجار سائق خاص بالساعة في جدة"
  },
  {
    "slug": "خدمة-سيارة-تنفيذية-جدة",
    "enPath": "/jeddah/executive-car-service-jeddah",
    "type": "pointTransferV2",
    "h1": "خدمة سيارة تنفيذية في جدة"
  },
  {
    "slug": "نقل-أعمال-جدة",
    "enPath": "/jeddah/business-transfers-jeddah",
    "type": "pointTransferV2",
    "h1": "نقل أعمال في جدة"
  },
  {
    "slug": "جولة-جدة-السياحية",
    "enPath": "/jeddah/jeddah-city-tour",
    "type": "pointTransferV2",
    "h1": "جولة جدة السياحية بسيارة خاصة"
  },
  {
    "slug": "جولة-جدة-نصف-اليوم",
    "enPath": "/jeddah/half-day-jeddah-tour",
    "type": "pointTransferV2",
    "h1": "جولة جدة نصف اليوم"
  },
  {
    "slug": "جولة-جدة-ليوم-كامل",
    "enPath": "/jeddah/full-day-jeddah-tour",
    "type": "pointTransferV2",
    "h1": "جولة جدة ليوم كامل"
  },
  {
    "slug": "نقل-من-مطار-الملك-فهد-الى-مدينة-الدمام",
    "enPath": "/dammam/dammam-airport-to-dammam-city",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار الملك فهد إلى مدينة الدمام"
  },
  {
    "slug": "نقل-من-مدينة-الدمام-الى-مطار-الملك-فهد",
    "enPath": "/dammam/dammam-city-to-dammam-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من مدينة الدمام إلى مطار الملك فهد"
  },
  {
    "slug": "نقل-من-مطار-الملك-فهد-الى-كورنيش-الدمام",
    "enPath": "/dammam/dammam-airport-to-dammam-corniche",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار الملك فهد إلى كورنيش الدمام"
  },
  {
    "slug": "نقل-من-كورنيش-الدمام-الى-مطار-الملك-فهد",
    "enPath": "/dammam/dammam-corniche-to-dammam-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من كورنيش الدمام إلى مطار الملك فهد"
  },
  {
    "slug": "نقل-من-مطار-الملك-فهد-الى-الحي-التجاري-بالدمام",
    "enPath": "/dammam/dammam-airport-to-business-district",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار الملك فهد إلى الحي التجاري بالدمام"
  },
  {
    "slug": "نقل-من-الحي-التجاري-بالدمام-الى-مطار-الملك-فهد",
    "enPath": "/dammam/business-district-to-dammam-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من الحي التجاري بالدمام إلى مطار الملك فهد"
  },
  {
    "slug": "نقل-من-مطار-الملك-فهد-الى-فنادق-الدمام",
    "enPath": "/dammam/dammam-airport-to-hotels",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار الملك فهد إلى فنادق الدمام"
  },
  {
    "slug": "نقل-من-فنادق-الدمام-الى-مطار-الملك-فهد",
    "enPath": "/dammam/hotels-to-dammam-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق الدمام إلى مطار الملك فهد"
  },
  {
    "slug": "نقل-من-مطار-الملك-فهد-الى-ميناء-الملك-عبدالعزيز",
    "enPath": "/dammam/dammam-airport-to-king-abdulaziz-port",
    "type": "pointTransferV2",
    "h1": "تاكسي من مطار الملك فهد إلى ميناء الملك عبدالعزيز"
  },
  {
    "slug": "نقل-من-ميناء-الملك-عبدالعزيز-الى-مطار-الملك-فهد",
    "enPath": "/dammam/king-abdulaziz-port-to-dammam-airport",
    "type": "pointTransferV2",
    "h1": "تاكسي من ميناء الملك عبدالعزيز إلى مطار الملك فهد"
  },
  {
    "slug": "نقل-من-فنادق-الدمام-الى-ميناء-الملك-عبدالعزيز",
    "enPath": "/dammam/dammam-hotels-to-king-abdulaziz-port",
    "type": "pointTransferV2",
    "h1": "تاكسي من فنادق الدمام إلى ميناء الملك عبدالعزيز"
  },
  {
    "slug": "نقل-من-ميناء-الملك-عبدالعزيز-الى-فنادق-الدمام",
    "enPath": "/dammam/king-abdulaziz-port-to-dammam-hotels",
    "type": "pointTransferV2",
    "h1": "تاكسي من ميناء الملك عبدالعزيز إلى فنادق الدمام"
  },
  {
    "slug": "نقل-من-مدينة-الدمام-الى-ميناء-الملك-عبدالعزيز",
    "enPath": "/dammam/dammam-city-to-king-abdulaziz-port",
    "type": "pointTransferV2",
    "h1": "تاكسي من مدينة الدمام إلى ميناء الملك عبدالعزيز"
  },
  {
    "slug": "نقل-من-ميناء-الملك-عبدالعزيز-الى-مدينة-الدمام",
    "enPath": "/dammam/king-abdulaziz-port-to-dammam-city",
    "type": "pointTransferV2",
    "h1": "تاكسي من ميناء الملك عبدالعزيز إلى مدينة الدمام"
  },
  {
    "slug": "جولة-المواقع-التاريخية-في-مكة",
    "enPath": "/makkah/makkah-historical-sites-tour",
    "type": "pointTransferV2",
    "h1": "جولة المواقع التاريخية في مكة بسيارة خاصة"
  },
  {
    "slug": "نقل-عمرة-من-مطار-جدة-الى-مكة",
    "enPath": "/makkah/jeddah-airport-to-makkah-umrah",
    "type": "pointTransferV2",
    "h1": "نقل عمرة من مطار جدة إلى مكة"
  },
  {
    "slug": "نقل-من-فندق-مكة-الى-الحرم",
    "enPath": "/makkah/makkah-hotel-to-haram-transfer",
    "type": "pointTransferV2",
    "h1": "نقل من فندق مكة إلى الحرم"
  },
  {
    "slug": "تاكسي-الدمام",
    "enPath": "/taxi-service/dammam",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الدمام"
  },
  {
    "slug": "تاكسي-الخبر",
    "enPath": "/taxi-service/khobar",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الخبر"
  },
  {
    "slug": "تاكسي-الجبيل",
    "enPath": "/taxi-service/jubail",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الجبيل"
  },
  {
    "slug": "تاكسي-الطائف",
    "enPath": "/taxi-service/taif",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الطائف"
  },
  {
    "slug": "تاكسي-أبها",
    "enPath": "/taxi-service/abha",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل أبها"
  },
  {
    "slug": "تاكسي-تبوك",
    "enPath": "/taxi-service/tabuk",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل تبوك"
  },
  {
    "slug": "تاكسي-ينبع",
    "enPath": "/taxi-service/yanbu",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل ينبع"
  },
  {
    "slug": "تاكسي-حائل",
    "enPath": "/taxi-service/hail",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل حائل"
  },
  {
    "slug": "تاكسي-نجران",
    "enPath": "/taxi-service/najran",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل نجران"
  },
  {
    "slug": "تاكسي-جازان",
    "enPath": "/taxi-service/jazan",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل جازان"
  },
  {
    "slug": "تاكسي-بريدة",
    "enPath": "/taxi-service/buraidah",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل بريدة"
  },
  {
    "slug": "تاكسي-الهفوف",
    "enPath": "/taxi-service/hofuf",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الهفوف"
  },
  {
    "slug": "تاكسي-الأحساء",
    "enPath": "/taxi-service/al-ahsa",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل الأحساء"
  },
  {
    "slug": "تاكسي-خميس-مشيط",
    "enPath": "/taxi-service/khamis-mushait",
    "type": "city",
    "h1": "تاكسي خاص للتنقل داخل خميس مشيط"
  },
  {
    "slug": "دليل-مطار-أبها-الدولي",
    "enPath": "/blog/abha-airport-arrival-guide",
    "type": "blog",
    "h1": "مطار أبها الدولي: دليل الوصول لمرتفعات عسير"
  },
  {
    "slug": "دليل-مطار-الطائف-الإقليمي",
    "enPath": "/blog/taif-regional-airport-arrival-guide",
    "type": "blog",
    "h1": "مطار الطائف الإقليمي: دليل المسافر للوصول إلى الجبال"
  },
  {
    "slug": "دليل-مطار-ينبع",
    "enPath": "/blog/yanbu-airport-arrival-guide",
    "type": "blog",
    "h1": "مطار ينبع: دليل عملي للوصول إلى ساحل البحر الأحمر"
  },
  {
    "slug": "الرياض-الى-أبها-دليل-النقل",
    "enPath": "/blog/riyadh-to-abha-transfer-guide",
    "type": "blog",
    "h1": "من الرياض إلى أبها: هل تستحق الرحلة البرية أم يُفضَّل الطيران؟"
  },
  {
    "slug": "خدمة-الاستقبال-في-مطارات-السعودية",
    "enPath": "/blog/meet-and-greet-airport-service-saudi-arabia",
    "type": "blog",
    "h1": "خدمة الاستقبال داخل صالة المطار في السعودية: كيف تعمل فعليًا؟"
  },
  {
    "slug": "دليل-مطار-تبوك",
    "enPath": "/blog/tabuk-regional-airport-arrival-guide",
    "type": "blog",
    "h1": "مطار تبوك: دليل الوصول إلى نيوم والعلا ومدينة تبوك"
  },
  {
    "slug": "دليل-ميناء-جدة-الإسلامي",
    "enPath": "/blog/jeddah-islamic-port-passenger-guide",
    "type": "blog",
    "h1": "ميناء جدة الإسلامي: التنقل إلى الفندق أو المطار أو مكة بعد الوصول"
  },
  {
    "slug": "جدة-لأول-مرة",
    "enPath": "/blog/first-time-in-jeddah-guide",
    "type": "blog",
    "h1": "جدة لأول مرة: ما تحتاج معرفته قبل الوصول"
  },
  {
    "slug": "استقبال-السائق-في-مطار-الرياض",
    "enPath": "/blog/riyadh-airport-driver-meeting-point",
    "type": "blog",
    "h1": "مطار الرياض: أين تلتقي سائقك في كل صالة"
  },
  {
    "slug": "الرياض-لأول-مرة",
    "enPath": "/blog/first-time-in-riyadh-guide",
    "type": "blog",
    "h1": "الرياض لأول مرة: ماذا تعرف قبل وصولك"
  },
  {
    "slug": "زيارة-المدينة-قبل-مكة-من-جدة",
    "enPath": "/blog/jeddah-to-madinah-transfer-guide",
    "type": "blog",
    "h1": "الهبوط في جدة والتوجه إلى المدينة المنورة أولاً"
  },
  {
    "slug": "نقل-فعالية-كراون-جول-الرياض",
    "enPath": "/blog/wwe-crown-jewel-riyadh-transfer",
    "type": "blog",
    "h1": "دليل النقل والسائق الخاص إلى WWE Crown Jewel 2026 في الرياض"
  },
  {
    "slug": "نقل-مؤتمر-بلاك-هات-الرياض",
    "enPath": "/blog/black-hat-mea-riyadh-transfer",
    "type": "blog",
    "h1": "دليل النقل والسائق الخاص إلى Black Hat MEA 2026 في الرياض"
  },
  {
    "slug": "نقل-كأس-الخليج-27-جدة",
    "enPath": "/blog/gulf-cup-27-jeddah-transfer",
    "type": "blog",
    "h1": "دليل النقل والسائق الخاص لكأس الخليج 27 في جدة 2026"
  },
  {
    "slug": "نقل-سباق-جائزة-السعودية-الكبرى-فورمولا-1-جدة-2027",
    "enPath": "/blog/saudi-arabian-grand-prix-2027-jeddah-transfer",
    "type": "blog",
    "h1": "دليل التنقل إلى سباق جائزة السعودية الكبرى للفورمولا 1 في جدة 2027"
  },
  {
    "slug": "نقل-رالي-السعودية-دبليو-آر-سي",
    "enPath": "/blog/wrc-rally-saudi-arabia-transfer",
    "type": "blog",
    "h1": "دليل النقل والمواصلات لرالي السعودية WRC 2026"
  },
  {
    "slug": "نقل-جائزة-جدة-الكبرى-f1h2o",
    "enPath": "/blog/f1h2o-jeddah-grand-prix-transfer",
    "type": "blog",
    "h1": "جائزة جدة الكبرى F1H2O 2026: دليل النقل والتنقل"
  },
  {
    "slug": "استقبال-السائق-في-مطار-جدة",
    "enPath": "/blog/jeddah-airport-driver-meeting-point",
    "type": "blog",
    "h1": "مطار جدة: أين تلتقي سائقك في كل صالة"
  },
  {
    "slug": "ينبع-مدينتان-التخطيط-للرحلة-من-جدة",
    "enPath": "/blog/jeddah-to-yanbu-transfer-guide",
    "type": "blog",
    "h1": "ينبع مدينتان: التخطيط لرحلتك من جدة"
  },
  {
    "slug": "مطار-جدة-أو-المدينة-للعمرة",
    "enPath": "/blog/jeddah-vs-madinah-airport-for-umrah",
    "type": "blog",
    "h1": "مطار جدة أم المدينة للعمرة: كيف تختار؟"
  },
  {
    "slug": "النقل-من-المطار-ليلاً-في-السعودية",
    "enPath": "/blog/late-night-airport-transfers-saudi-arabia",
    "type": "blog",
    "h1": "النقل من المطار ليلاً وفجرًا في السعودية"
  }
];

/** Full /ar/{slug} path for an index entry — mirrors arPath() in ar.ts. */
export function arIndexPath(entry: ArPageIndexEntry): string {
  return `/ar/${entry.slug}`;
}

// Lazy, cached lookups — same pattern as ar.ts's own getArPathForEnPath/
// getEnPathForArPath, so the cost of building these maps is paid once per
// warm isolate/bundle load, only if something actually calls them.
let _enToAr: Record<string, string> | undefined;
function enToAr(): Record<string, string> {
  return (_enToAr ??= Object.fromEntries(
    arPageIndex.filter((p) => !p.notEnTranslation).map((p) => [p.enPath, arIndexPath(p)])
  ));
}

/** Lightweight equivalent of ar.ts's getArPathForEnPath — same result, without
 *  pulling in that module's ~26,700-line content dataset. */
export function getArPathForEnPathLight(enPath: string): string | undefined {
  return enToAr()[enPath];
}

let _arToEn: Record<string, string> | undefined;
function arToEn(): Record<string, string> {
  return (_arToEn ??= Object.fromEntries(arPageIndex.map((p) => [arIndexPath(p), p.enPath])));
}

/** Lightweight equivalent of ar.ts's getEnPathForArPath. */
export function getEnPathForArPathLight(arPathStr: string): string {
  return arToEn()[arPathStr] ?? "/";
}
