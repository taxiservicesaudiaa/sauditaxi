export interface Vehicle {
  id: string;
  name: string;
  nameAr: string;
  /** Example vehicle models for context — brand/model names, not translated. */
  examples: string;
  passengers: string;
  passengersAr: string;
  luggage: string;
  luggageAr: string;
  description: string;
  descriptionAr: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "economy",
    name: "Economy",
    nameAr: "اقتصادية",
    examples: "Hyundai Accent, Toyota Yaris",
    passengers: "1–3 passengers",
    passengersAr: "1–3 ركاب",
    luggage: "2 bags",
    luggageAr: "حقيبتان",
    description: "Affordable private rides for solo travellers and short city trips.",
    descriptionAr: "رحلات خاصة بأسعار معقولة للمسافرين الفرديين والرحلات القصيرة داخل المدينة.",
  },
  {
    id: "comfort",
    name: "Comfort",
    nameAr: "مريحة",
    examples: "Toyota Camry, Hyundai Sonata",
    passengers: "1–3 passengers",
    passengersAr: "1–3 ركاب",
    luggage: "3 bags",
    luggageAr: "3 حقائب",
    description: "A roomier sedan for airport runs and longer intercity journeys.",
    descriptionAr: "سيارة سيدان أوسع لرحلات المطار والرحلات الطويلة بين المدن.",
  },
  {
    id: "business",
    name: "Business",
    nameAr: "رجال الأعمال",
    examples: "Mercedes E-Class, Lexus ES",
    passengers: "1–3 passengers",
    passengersAr: "1–3 ركاب",
    luggage: "3 bags",
    luggageAr: "3 حقائب",
    description: "Premium executive cars for corporate travel and VIP arrivals.",
    descriptionAr: "سيارات تنفيذية فاخرة لرحلات العمل واستقبالات كبار الشخصيات.",
  },
  {
    id: "suv",
    name: "SUV",
    nameAr: "دفع رباعي",
    examples: "Toyota Land Cruiser, GMC Yukon",
    passengers: "1–5 passengers",
    passengersAr: "1–5 ركاب",
    luggage: "4 bags",
    luggageAr: "4 حقائب",
    description: "Spacious 4x4 comfort for families and desert routes like AlUla.",
    descriptionAr: "راحة دفع رباعي واسعة للعائلات والطرق الصحراوية مثل العلا.",
  },
  {
    id: "van",
    name: "Van",
    nameAr: "فان",
    examples: "Toyota Hiace, Hyundai Staria",
    passengers: "1–9 passengers",
    passengersAr: "1–9 ركاب",
    luggage: "8 bags",
    luggageAr: "8 حقائب",
    description: "Ideal for pilgrim groups and families travelling with luggage.",
    descriptionAr: "مثالية لمجموعات المعتمرين والعائلات المسافرة مع الأمتعة.",
  },
  {
    id: "minibus",
    name: "Minibus",
    nameAr: "حافلة صغيرة",
    examples: "Toyota Coaster",
    passengers: "10–18 passengers",
    passengersAr: "10–18 راكب",
    luggage: "Group luggage",
    luggageAr: "أمتعة جماعية",
    description: "Group transport for large Umrah, Hajj, and corporate parties.",
    descriptionAr: "نقل جماعي لمجموعات العمرة والحج الكبيرة والفعاليات المؤسسية.",
  },
];

/** Vehicle type values offered in the quote form. */
export const vehicleOptions = vehicles.map((v) => v.name);
