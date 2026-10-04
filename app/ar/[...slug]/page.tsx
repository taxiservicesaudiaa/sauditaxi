import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { arPages, getArPage, arPath, getArPathForEnPath, pointTransferCityNameAr, type ArPage } from "@/data/translations/ar";
import { pageHeroes } from "@/lib/hero";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { getRoute, routes } from "@/data/routes";
import { hotelsForCity } from "@/data/hotels";
import {
  isDomesticCityRoute,
  isAirportToCityRoute,
  isCityToAirportRoute,
  isSaudiToGccRoute,
  gccCountryFor,
  isGccToSaudiRoute,
  gccCountryForOrigin,
  isCityToBorderRoute,
  borderCountryFor,
  isBorderToCityRoute,
  borderCountryForOrigin,
  isSaudiJordanRoute,
  saudiJordanDirection,
  classifyRoute,
  type GccCountry,
} from "@/lib/route-journey";
import { buildArabicRouteBlocks, parseArabicFromTo } from "@/lib/route-composer";
import { RouteJourneyView } from "@/components/routes/RouteJourneyView";
import { AirportRouteView } from "@/components/routes/AirportRouteView";
import { CityAirportRouteView } from "@/components/routes/CityAirportRouteView";
import { GccRouteView } from "@/components/routes/GccRouteView";
import { GccToSaudiRouteView } from "@/components/routes/GccToSaudiRouteView";
import { CityToBorderRouteView } from "@/components/routes/CityToBorderRouteView";
import { BorderToCityRouteView } from "@/components/routes/BorderToCityRouteView";
import { SaudiJordanRouteView } from "@/components/routes/SaudiJordanRouteView";
import { airportTransferName } from "@/lib/hotel-transfers";
import { cityAirportFactsAr } from "@/lib/city-hub-facts";
import { JourneyPageView } from "@/components/journey/JourneyPageView";
import { DistanceGuideV2View } from "@/components/distance-v2/DistanceGuideV2View";
import { JourneyGuideV2View } from "@/components/journey-v2/JourneyGuideV2View";
import { PointTransferV2View } from "@/components/point-transfer-v2/PointTransferV2View";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { ContactPageView } from "@/components/contact/ContactPageView";
import { QuotePageView } from "@/components/quote/QuotePageView";
import { ServicesHubView } from "@/components/services-hub/ServicesHubView";
import { CityHubView, type CityHubLinkItem, type CityHubContent } from "@/components/city-hub/CityHubView";
import { HotelTransferHubView, type HotelTransferHubFactCard } from "@/components/city-hub/HotelTransferHubView";
import { AirportHubView } from "@/components/airport-hub/AirportHubView";

const arServiceV2Labels = { faqHeading: "أسئلة شائعة" };

const arGccCountryNames: Record<GccCountry, string> = {
  bahrain: "البحرين",
  qatar: "قطر",
  kuwait: "الكويت",
  uae: "الإمارات العربية المتحدة",
};

interface ArGccCountryFacts {
  crossingName: string;
  companyControls: string[];
  authorityControls: string[];
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;
}

const arGccCountryFacts: Record<GccCountry, ArGccCountryFacts> = {
  bahrain: {
    crossingName: "جسر الملك فهد (جزيرة الجوازات)",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "رسوم عبور الجسر ووثائق المركبة العابرة للحدود", "توقيت المغادرة حول أوقات الذروة المعروفة عند المنفذ", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج السعودي والدخول البحريني", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك وأي قواعد على البضائع المحظورة", "مدة الانتظار الفعلية عند جزيرة الجوازات في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا، وتأشيرة بحرينية لمعظم المسافرين من خارج دول الخليج.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول بحريني إذا لزم لجنسيتك", "الإقامة السعودية مع جواز السفر إن كنت مقيمًا", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف قواعد التأشيرة والجمارك باختلاف الجنسية وتتغير من وقت لآخر. تأكد من المتطلبات الحالية من مصادر بحرينية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود السعوديين والبحرينيين، لا لنا.",
  },
  qatar: {
    crossingName: "منفذ سلوى (أبو سمرة)",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "تخطيط المسار ومحطات الراحة للرحلة الصحراوية", "متابعة رحلتك الجوية إذا كان الاستلام من مطار", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج السعودي والدخول القطري", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك وأي قواعد على البضائع المحظورة", "مدة معالجة منفذ سلوى في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وتصريح الدخول المناسب لقطر حسب جنسيتك.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول قطري إذا لزم لجنسيتك", "الإقامة السعودية مع جواز السفر إن كنت مقيمًا", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف متطلبات الدخول القطرية باختلاف الجنسية وتُحدَّث من وقت لآخر. تأكد من القواعد الحالية من مصادر قطرية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود السعوديين والقطريين، لا لنا.",
  },
  kuwait: {
    crossingName: "منفذ الخفجي (النويصيب)",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "تخطيط المسار ومحطات الراحة للرحلة الشمالية الطويلة", "متابعة رحلتك الجوية إذا كان الاستلام أو التوصيل من مطار", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج السعودي والدخول الكويتي", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك — قواعد الكويت على البضائع المحظورة صارمة", "مدة معالجة منفذ الخفجي/النويصيب في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وتصريح الدخول الكويتي المناسب. تختلف قواعد التأشيرة باختلاف الجنسية وتتغير مع الوقت.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول كويتي إذا لزم لجنسيتك", "الإقامة السعودية مع جواز السفر إن كنت مقيمًا", "الانتباه إلى صرامة القواعد الكويتية على البضائع المحظورة"],
    documentsDisclaimer: "تختلف متطلبات الدخول والجمارك الكويتية باختلاف الجنسية وتتغير مع الوقت. تأكد من القواعد الحالية من مصادر كويتية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود السعوديين والكويتيين، لا لنا.",
  },
  uae: {
    crossingName: "منفذ البطحاء (الغويفات)",
    companyControls: ["تنسيق الاستلام والمركبة طويلة المسافة لكامل الرحلة", "تخطيط محطات راحة حقيقية ليوم قيادة كامل", "ترتيب وثائق المركبة الصحيحة لعبور الحدود", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج السعودي والدخول الإماراتي", "أهلية الجواز والتأشيرة حسب جنسيتك", "تأمين المركبة الإماراتي الإلزامي، يُشترى عادة عند المنفذ", "مدة معالجة منفذ البطحاء/الغويفات في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا، وأي تأشيرة تلزم جنسيتك، ووثائق المركبة الصحيحة لعبور حدودي بمركبة.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول إماراتي إذا لزم لجنسيتك", "وثائق المركبة الصحيحة لعبور الحدود، تُرتَّب عند الحجز", "العلم بأن تأمين المركبة الإماراتي الإلزامي يُشترى عادة عند المنفذ نفسه"],
    documentsDisclaimer: "تختلف متطلبات الدخول والمركبة الإماراتية باختلاف الجنسية وتُحدَّث من وقت لآخر. تأكد من القواعد الحالية من مصادر إماراتية رسمية قبل السفر — نرتب الأوراق التي نستطيع التحكم بها، لكن قرارات الأهلية تعود لضباط الحدود السعوديين والإماراتيين، لا لنا.",
  },
};

function arPureDrivingTime(duration: string): string {
  return duration
    .replace(/\s*\+.*$/, "")
    .replace(/\s*قيادة\s*$/, "")
    .trim();
}

interface ArGccToSaudiCountryFacts {
  crossingName: string;
  companyControls: string[];
  authorityControls: string[];
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;
}

const arGccToSaudiCountryFacts: Record<GccCountry, ArGccToSaudiCountryFacts> = {
  bahrain: {
    crossingName: "جسر الملك فهد (جزيرة الجوازات)",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "رسوم عبور الجسر ووثائق المركبة العابرة للحدود", "توقيت المغادرة حول أوقات الذروة المعروفة عند المنفذ", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج البحريني والدخول السعودي", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك وأي قواعد على البضائع المحظورة", "مدة الانتظار الفعلية عند جزيرة الجوازات في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وأي تأشيرة أو تصريح دخول سعودي يلزم جنسيتك.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول سعودي إذا لزم لجنسيتك", "وثائق إقامتك في البحرين مع جواز السفر إن كنت مقيمًا هناك", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتتغير من وقت لآخر. تأكد من المتطلبات الحالية من مصادر سعودية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود البحرينيين والسعوديين، لا لنا.",
  },
  qatar: {
    crossingName: "منفذ سلوى (أبو سمرة)",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "تخطيط المسار ومحطات الراحة للرحلة الصحراوية", "متابعة رحلتك الجوية إذا كانت الرحلة تنتهي في مطار سعودي", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج القطري والدخول السعودي", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك وأي قواعد على البضائع المحظورة", "مدة معالجة منفذ سلوى في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وأي تأشيرة أو تصريح دخول سعودي يلزم جنسيتك.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول سعودي إذا لزم لجنسيتك", "وثائق إقامتك في قطر مع جواز السفر إن كنت مقيمًا هناك", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتُحدَّث من وقت لآخر. تأكد من القواعد الحالية من مصادر سعودية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود القطريين والسعوديين، لا لنا.",
  },
  kuwait: {
    crossingName: "منفذ النويصيب / الخفجي",
    companyControls: ["تنسيق الاستلام والمركبة لكامل الرحلة", "تخطيط المسار ومحطات الراحة للرحلة الجنوبية الطويلة", "متابعة رحلتك الجوية إذا كان الاستلام أو التوصيل من مطار", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج الكويتي والدخول السعودي", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص الجمارك — قواعد الكويت على البضائع المحظورة قد تكون صارمة", "مدة معالجة منفذ النويصيب/الخفجي في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وأي تأشيرة أو تصريح دخول سعودي يلزم جنسيتك. تختلف قواعد التأشيرة باختلاف الجنسية وتتغير مع الوقت.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول سعودي إذا لزم لجنسيتك", "وثائق إقامتك في الكويت مع جواز السفر إن كنت مقيمًا هناك", "الانتباه إلى أن قواعد الجمارك الكويتية على الخروج قد تكون صارمة"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتتغير مع الوقت. تأكد من القواعد الحالية من مصادر سعودية رسمية قبل السفر — قرارات الأهلية تعود لضباط الحدود الكويتيين والسعوديين، لا لنا.",
  },
  uae: {
    crossingName: "منفذ الغويفات (الإمارات) / البطحاء (السعودية)",
    companyControls: ["تنسيق الاستلام والمركبة طويلة المسافة لكامل الرحلة", "تخطيط محطات راحة حقيقية ليوم قيادة كامل", "ترتيب وثائق المركبة الصحيحة لعبور الحدود", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["قرارات الخروج الإماراتي والدخول السعودي", "أهلية الجواز والتأشيرة حسب جنسيتك", "فحص المركبة والتحقق من وثائق عبور الحدود", "مدة معالجة منفذ الغويفات/البطحاء في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا، وأي تأشيرة أو تصريح دخول سعودي يلزم جنسيتك، ووثائق المركبة الصحيحة لعبور حدودي بمركبة.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول سعودي إذا لزم لجنسيتك", "وثائق المركبة الصحيحة لعبور الحدود، تُرتَّب عند الحجز", "وثائق إقامتك في الإمارات مع جواز السفر إن كنت مقيمًا هناك"],
    documentsDisclaimer: "تختلف متطلبات الدخول والمركبة السعودية باختلاف الجنسية وتُحدَّث من وقت لآخر. تأكد من القواعد الحالية من مصادر سعودية رسمية قبل السفر — نرتب الأوراق التي نستطيع التحكم بها، لكن قرارات الأهلية تعود لضباط الحدود الإماراتيين والسعوديين، لا لنا.",
  },
};

interface ArCityToBorderCrossingFacts {
  crossingName: string;
  companyControls: string[];
  authorityControls: string[];
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;
}

const arCityToBorderCrossingFacts: Record<GccCountry, ArCityToBorderCrossingFacts> = {
  qatar: {
    crossingName: "منفذ سلوى (أبو سمرة)",
    companyControls: ["تنسيق الاستلام والمركبة للجانب السعودي من الرحلة", "تخطيط المسار ومحطات الراحة للرحلة الصحراوية", "التوصيل عند نقطة المنفذ السعودية", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج السعودية والفحص البيومتري", "قرارات الدخول القطري وأهلية التأشيرة حسب جنسيتك", "فحص الجمارك والمركبة عند المنفذ", "مدة معالجة منفذ سلوى في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وتصريح الدخول القطري المناسب لمواصلة رحلتك — تختلف المتطلبات حسب الجنسية.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول قطري إذا لزم لجنسيتك", "وثائق المركبة والتأمين إذا كنت تقود سيارتك الخاصة عبر المنفذ", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف متطلبات الدخول القطرية باختلاف الجنسية وتتغير مع الوقت. تأكد من القواعد الحالية من مصادر قطرية رسمية قبل السفر — نقدم إرشادًا حول الجانب السعودي، لكن قرارات الدخول تعود لضباط الحدود القطريين، لا لنا.",
  },
  uae: {
    crossingName: "البطحاء (الجانب السعودي) / الغويفات (الجانب الإماراتي)",
    companyControls: ["تنسيق الاستلام والمركبة طويلة المسافة للجانب السعودي", "تخطيط محطات راحة حقيقية للرحلة", "التوصيل عند نقطة المنفذ السعودية", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج السعودية", "قرارات الدخول الإماراتي وأهلية التأشيرة حسب جنسيتك", "فحص المركبة وتأمين المركبة الإماراتي الإلزامي، يُشترى عند المنفذ", "مدة معالجة منفذ البطحاء/الغويفات في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا، وأي تأشيرة إماراتية تلزم جنسيتك، ووثائق المركبة الصحيحة إن كنت تواصل بريًا.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول إماراتي إذا لزم لجنسيتك", "وثائق المركبة الصحيحة إذا كنت تواصل بريًا", "العلم بأن تأمين المركبة الإماراتي الإلزامي يُشترى عادة عند المنفذ نفسه"],
    documentsDisclaimer: "تختلف متطلبات الدخول والمركبة الإماراتية باختلاف الجنسية وتُحدَّث من وقت لآخر. تأكد من القواعد الحالية من مصادر إماراتية رسمية قبل السفر — نقدم إرشادًا حول الجانب السعودي، لكن قرارات الدخول تعود لضباط الحدود الإماراتيين، لا لنا.",
  },
  kuwait: {
    crossingName: "الخفجي (الجانب السعودي) / النويصيب (الجانب الكويتي)",
    companyControls: ["تنسيق الاستلام ومتابعة الرحلة الجوية إذا كان الاستلام من مطار", "القيادة شمالًا نحو المنفذ", "التوصيل عند نقطة المنفذ السعودية", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج السعودية", "قرارات الدخول الكويتي وأهلية التأشيرة حسب جنسيتك", "فحص الجمارك والمركبة عند المنفذ", "مدة معالجة منفذ الخفجي/النويصيب في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وتصريح الدخول الكويتي المناسب لمواصلة رحلتك.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول كويتي إذا لزم لجنسيتك", "وثائق المركبة إذا كنت تقود سيارتك الخاصة عبر المنفذ", "الانتباه إلى أن قواعد الجمارك الكويتية على البضائع المحظورة قد تكون صارمة"],
    documentsDisclaimer: "تختلف متطلبات الدخول الكويتية باختلاف الجنسية وتتغير مع الوقت. تأكد من القواعد الحالية من مصادر كويتية رسمية قبل السفر — نقدم إرشادًا حول الجانب السعودي، لكن قرارات الدخول تعود لضباط الحدود الكويتيين، لا لنا.",
  },
  bahrain: {
    crossingName: "جسر الملك فهد (جزيرة الجوازات)",
    companyControls: ["تنسيق الاستلام والمركبة للجانب السعودي من الرحلة", "رسوم عبور الجسر", "التوصيل عند نقطة المنفذ السعودية", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج السعودية", "قرارات الدخول البحريني وأهلية التأشيرة حسب جنسيتك", "فحص الجمارك والمركبة عند جزيرة الجوازات", "مدة المعالجة في ذلك اليوم"],
    documentsIntro: "تحتاج جواز سفر ساريًا وتصريح الدخول البحريني المناسب لمواصلة رحلتك.",
    documentsItems: ["جواز سفر ساري", "تأشيرة أو تصريح دخول بحريني إذا لزم لجنسيتك", "وثائق المركبة والتأمين إذا كنت تقود سيارتك الخاصة عبر الجسر", "أي مستندات لبضائع تريد التصريح عنها عند الجمارك"],
    documentsDisclaimer: "تختلف متطلبات الدخول البحرينية باختلاف الجنسية وتتغير مع الوقت. تأكد من القواعد الحالية من مصادر بحرينية رسمية قبل السفر.",
  },
};

interface ArBorderToCityCrossingFacts {
  crossingName: string;
  companyControls: string[];
  authorityControls: string[];
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;
}

const arBorderToCityCrossingFacts: Record<GccCountry, ArBorderToCityCrossingFacts> = {
  qatar: {
    crossingName: "منفذ سلوى (أبو سمرة)",
    companyControls: ["السائق والمركبة بانتظارك على الجانب السعودي", "تنسيق موعد الاستلام حسب وقت عبورك الفعلي", "رحلة الطريق على الجانب السعودي حتى وجهتك", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج القطرية قبل وصولك للجانب السعودي", "قرارات الدخول السعودي وإجراءات الجوازات", "فحص الجمارك والمركبة عند المنفذ", "مدة معالجة منفذ سلوى في ذلك اليوم"],
    documentsIntro: "احتفظ بجواز سفرك وأي مستندات استُخدمت لدخولك السعودية في متناول يدك عند عبور المنفذ.",
    documentsItems: ["جواز سفر ساري، مستخدم بالفعل لدخول السعودية", "أي تصريح دخول أو تأشيرة سعودية من المنفذ", "تأكيد الحجز أو بيانات التواصل مع السائق إن وُجدت", "وجهتك النهائية أو تفاصيل رحلتك الجوية لمشاركتها مع السائق"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتتغير مع الوقت — يُفترض أنها تأكدت بالفعل قبل عبورك. نقدم إرشادًا حول تنسيق الاستلام، لكن قرارات الدخول اتخذها ضباط الحدود السعوديون والقطريون، لا نحن.",
  },
  uae: {
    crossingName: "البطحاء (الجانب السعودي) / الغويفات (الجانب الإماراتي)",
    companyControls: ["السائق والمركبة طويلة المسافة بانتظارك على الجانب السعودي", "تنسيق موعد الاستلام حسب وقت عبورك عبر واتساب", "رحلة الطريق على الجانب السعودي حتى وجهتك", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج الإماراتية قبل وصولك للجانب السعودي", "قرارات الدخول السعودي وإجراءات الجوازات", "فحص المركبة عند المنفذ", "مدة معالجة منفذ البطحاء/الغويفات في ذلك اليوم"],
    documentsIntro: "احتفظ بجواز سفرك وأي مستندات دخول سعودية في متناول يدك عند عبور المنفذ.",
    documentsItems: ["جواز سفر ساري، مستخدم بالفعل لدخول السعودية", "أي تصريح دخول أو تأشيرة سعودية من المنفذ", "تأكيد الحجز أو بيانات التواصل مع السائق إن وُجدت", "وجهتك النهائية أو تفاصيل رحلتك الجوية لمشاركتها مع السائق"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتُحدَّث دوريًا — يُفترض أنها تأكدت بالفعل قبل عبورك. ننسق الاستلام، لكن قرارات الدخول تعود لضباط الحدود السعوديين والإماراتيين، لا لنا.",
  },
  kuwait: {
    crossingName: "الخفجي (الجانب السعودي) / النويصيب (الجانب الكويتي)",
    companyControls: ["السائق والمركبة بانتظارك على الجانب السعودي", "تنسيق موعد الاستلام حسب وقت عبورك الفعلي", "رحلة الطريق على الجانب السعودي حتى وجهتك", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج الكويتية قبل وصولك للجانب السعودي", "قرارات الدخول السعودي وإجراءات الجوازات", "فحص الجمارك والمركبة عند المنفذ", "مدة معالجة منفذ الخفجي/النويصيب في ذلك اليوم"],
    documentsIntro: "احتفظ بجواز سفرك وأي مستندات دخول سعودية في متناول يدك عند عبور المنفذ.",
    documentsItems: ["جواز سفر ساري، مستخدم بالفعل لدخول السعودية", "أي تصريح دخول أو تأشيرة سعودية من المنفذ", "تأكيد الحجز أو بيانات التواصل مع السائق إن وُجدت", "وجهتك النهائية أو تفاصيل رحلتك الجوية لمشاركتها مع السائق"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتتغير مع الوقت — يُفترض أنها تأكدت بالفعل قبل عبورك. ننسق الاستلام، لكن قرارات الدخول تعود لضباط الحدود السعوديين والكويتيين، لا لنا.",
  },
  bahrain: {
    crossingName: "جسر الملك فهد (جزيرة الجوازات)",
    companyControls: ["السائق والمركبة بانتظارك على الجانب السعودي", "تنسيق موعد الاستلام حسب وقت عبورك الفعلي", "رحلة الطريق على الجانب السعودي حتى وجهتك", "سعر ثابت متفق عليه قبل السفر"],
    authorityControls: ["إجراءات الخروج البحرينية قبل وصولك للجانب السعودي", "قرارات الدخول السعودي وإجراءات الجوازات", "فحص الجمارك والمركبة عند جزيرة الجوازات", "مدة المعالجة في ذلك اليوم"],
    documentsIntro: "احتفظ بجواز سفرك وأي مستندات دخول سعودية في متناول يدك عند عبور المنفذ.",
    documentsItems: ["جواز سفر ساري، مستخدم بالفعل لدخول السعودية", "أي تصريح دخول أو تأشيرة سعودية من المنفذ", "تأكيد الحجز أو بيانات التواصل مع السائق إن وُجدت", "وجهتك النهائية أو تفاصيل رحلتك الجوية لمشاركتها مع السائق"],
    documentsDisclaimer: "تختلف متطلبات الدخول السعودية باختلاف الجنسية وتتغير مع الوقت. ننسق الاستلام، لكن قرارات الدخول تعود لضباط الحدود السعوديين والبحرينيين، لا لنا.",
  },
};

const arSaudiJordanCrossingFacts = {
  crossingName: "الحديثة (الجانب السعودي) / العمري (الجانب الأردني)",
  companyControlsLabel: "ما نتولاه",
  companyControls: [
    "تنسيق الاستلام والمركبة طويلة المسافة لكامل الرحلة",
    "تخطيط المسار ومحطات الراحة لرحلة طويلة حقيقية",
    "ترتيب وثائق المركبة التي نستطيع التحكم بها قبل السفر",
    "سعر ثابت متفق عليه قبل السفر",
  ],
  authorityControlsLabel: "ما تتحكم به سلطات الحدود",
  authorityControls: [
    "قرارات الخروج والدخول السعودية والأردنية",
    "أهلية الجواز والتأشيرة حسب جنسيتك",
    "فحص الجمارك والمركبة عند المنفذ",
    "مدة معالجة منفذ الحديثة/العمري في ذلك اليوم",
  ],
  documentsIntro:
    "تحتاج جواز سفر ساريًا وتصريح الدخول المناسب لجنسيتك — تختلف المتطلبات فعليًا حسب الجنسية وحسب إقامتك السعودية إن وُجدت، وتُحدَّث من وقت لآخر.",
  documentsItems: [
    "جواز سفر ساري",
    "تأشيرة أو تصريح دخول مناسب لجنسيتك، للبلد الذي تدخله",
    "وثائق المركبة والتأمين العابر للحدود للسيارة التي تسافر بها",
    "الإقامة السعودية مع جواز السفر، إن كنت مقيمًا سعوديًا عابرًا إلى الأردن",
  ],
  documentsDisclaimer:
    "تختلف متطلبات التأشيرة والإقامة والتأمين العابر للحدود باختلاف الجنسية وتتغير مع الوقت. تأكد من المتطلبات الحالية من مصادر سعودية أو أردنية رسمية قبل السفر — نقدم إرشادًا حول العملية العامة ونرتب ما نستطيع التحكم به، لكن قرارات الدخول تعود لضباط الحدود السعوديين والأردنيين، لا لنا.",
  borderPageHref: "/border-transfers/jordan-border",
  borderPageLabel: "اقرأ دليل حدود الأردن لدينا",
};

const arDistanceV2Labels = {
  faqHeading: "أسئلة شائعة حول هذا الطريق",
  sourcesHeading: "المصادر",
  sourceFootnote:
    "المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المتبع، وظروف المعبر الحدودي، وحركة السير. آخر تحقق:",
};

const arJourneyV2Labels = {
  faqHeading: "أسئلة شائعة حول هذه الرحلة",
  sourcesHeading: "المصادر",
  sourceFootnote:
    "المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المتبع، وظروف المعبر الحدودي، وحركة السير. آخر تحقق:",
};

const arPointTransferV2Labels = {
  faqHeading: "الأسئلة الشائعة",
  quoteHeading: "احصل على عرض سعر",
  quoteSubheading: "سعر ثابت لنقلك الخاص عبر واتساب.",
};

const arJourneyLabels = {
  home: "الرئيسية",
  quickAnswer: "الإجابة السريعة",
  journeyAtAGlance: "الرحلة في لمحة",
  routeMap: "خريطة المسار",
  mapCaption: "بيانات الخريطة من خرائط جوجل.",
  distanceExplained: "المسافة بالتفصيل",
  howLong: "كم تستغرق الرحلة؟",
  understandingRoute: "فهم المسار",
  borderCrossing: "معلومات المعبر الحدودي",
  planYourJourney: "خطط لرحلتك",
  waysToTravel: "طرق السفر",
  ctaPrompt: "هل تخطط لهذه الرحلة بسيارة خاصة؟ اطّلع على",
  faqHeading: "الأسئلة الشائعة",
  relatedJourneys: "رحلات ذات صلة",
  sources: "المصادر",
  sourceFootnote:
    "المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المتبع، وظروف المعبر الحدودي، وحركة السير. آخر تحقق:",
  conclusion: "الخلاصة",
};

const heroFor = (page: ArPage): string => {
  if (page.type === "airport" || page.type === "hotel-transfer") return pageHeroes.airport;
  if (page.type === "attraction") return page.enPath.startsWith("/madinah/") ? pageHeroes.madinah : pageHeroes.makkah;
  if (page.type === "route" || page.type === "blog" || page.type === "distance") return pageHeroes.makkah;
  if (page.type === "city" || page.type === "city-hub") return pageHeroes.city;
  return pageHeroes.home;
};

/** /cities/{city} -> {city}, for the city-hub type only (enPath is always in this form). */
const citySlugFor = (page: ArPage): string => page.enPath.replace("/cities/", "");

const dict = getDictionary("ar");

export function generateStaticParams() {
  // The 41 hotel-transfer entries 301-redirect to their city-hub anchor
  // (proxy.ts, built from the same arPages array) and are excluded here —
  // see lib/city-hub-facts.ts / the "city-hub" type above. Data stays in
  // arPages (needed to build the redirect map); only static generation and
  // the sitemap (app/sitemap.ts) exclude them.
  return arPages.filter((p) => p.type !== "hotel-transfer").map((p) => ({ slug: p.slug.split("/") }));
}

// Old Arabic slugs that were only ever referenced from breadcrumbs (never
// built as real pages) but already have a live page covering the same
// topic. Redirecting avoids duplicating content that would otherwise
// cannibalize the live page for the same query. next.config.ts's
// redirects() did not reliably match these non-ASCII source paths in
// testing, so the alias is resolved here instead.
const LEGACY_AR_ALIASES: Record<string, string> = {
  "تاكسي-عمرة": "نقل-العمرة",
  "النقل-الحدودي": "النقل-عبر-الحدود",
};

// Next.js already decodes dynamic segments before they reach this component,
// so decodeURIComponent here is normally a no-op — but if a proxy/CDN layer
// ever forwards an already-decoded or malformed value, decodeURIComponent
// throws URIError, which previously propagated as an unhandled exception
// (HTTP 500) instead of a normal "page doesn't exist" 404.
function safeSlug(slugParts: string[]): string {
  const joined = slugParts.join("/");
  try {
    return decodeURIComponent(joined);
  } catch {
    return joined;
  }
}

function resolve(slugParts: string[]): ArPage | undefined {
  return getArPage(safeSlug(slugParts));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: arPath(page),
    alternateLanguages: { en: page.enPath, ar: arPath(page) },
  });
}

const serviceTypeFor = (type: ArPage["type"]): string =>
  ({
    service: "Taxi Service",
    airport: "Airport Transfer",
    city: "Taxi Service",
    route: "Intercity Transfer",
    "hotel-transfer": "Airport Transfer",
    about: "Taxi Service",
    contact: "Taxi Service",
    blog: "Taxi Service",
    attraction: "Private Transfer",
    "city-hub": "Airport Transfer",
    distance: "Distance Information",
    journey: "Distance Information",
    distanceV2: "Distance Information",
    journeyV2: "Distance Information",
    serviceV2: "Taxi Service",
    legal: "Taxi Service",
    contactV2: "Taxi Service",
    quoteV2: "Taxi Service",
    servicesV2: "Taxi Service",
    pointTransferV2: "Private Transfer",
  })[type];

type QuoteSearchParams = {
  pickup?: string;
  dropoff?: string;
  date?: string;
  time?: string;
  passengers?: string;
};

export default async function ArabicPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<QuoteSearchParams>;
}) {
  const { slug } = await params;
  const key = safeSlug(slug);
  const alias = LEGACY_AR_ALIASES[key];
  // HTTP headers must be ASCII — an un-encoded Arabic destination in the
  // Location header throws (Node: "Invalid character in header content"),
  // which itself produced a 500. Percent-encode it.
  if (alias) redirect(`/ar/${encodeURIComponent(alias)}`);

  const page = resolve(slug);
  if (!page) notFound();

  if (page.type === "distanceV2" && page.distanceV2) {
    return (
      <>
        <SchemaScript
          schema={[breadcrumbSchema(page.breadcrumbs), faqSchema(page.distanceV2.faqs)]}
        />
        <DistanceGuideV2View
          {...page.distanceV2}
          h1={page.h1}
          from={page.distanceV2From ?? ""}
          to={page.distanceV2To ?? ""}
          crumbs={page.breadcrumbs}
          labels={arDistanceV2Labels}
        />
      </>
    );
  }

  if (page.type === "journeyV2" && page.journeyV2) {
    return (
      <>
        <SchemaScript
          schema={[breadcrumbSchema(page.breadcrumbs), faqSchema(page.journeyV2.faqs)]}
        />
        <JourneyGuideV2View
          {...page.journeyV2}
          h1={page.h1}
          from={page.journeyV2From ?? ""}
          to={page.journeyV2To ?? ""}
          crumbs={page.breadcrumbs}
          labels={arJourneyV2Labels}
        />
      </>
    );
  }

  if (page.type === "pointTransferV2" && page.pointTransferV2) {
    const citySlug = page.pointTransferV2CitySlug ?? "";
    const cityName = pointTransferCityNameAr[citySlug] ?? citySlug;
    const isPointToPoint = page.pointTransferV2IsPointToPoint !== false;
    const from = page.pointTransferV2From ?? "";
    const to = page.pointTransferV2To ?? "";
    const label = isPointToPoint ? `${from} → ${to}` : to;
    const serviceTypeLabel =
      page.pointTransferV2.category === "port"
        ? "نقل من/إلى الميناء"
        : page.pointTransferV2.category === "railway"
          ? "نقل من/إلى محطة القطار"
          : page.pointTransferV2.category === "service"
            ? "خدمة شوفير خاص"
            : "نقل خاص";
    // relatedLinks hrefs are authored as English /{city}/{slug} paths (shared
    // with the English data); resolve each to its Arabic counterpart when one
    // exists so an Arabic page never link-switches a reader into English —
    // falls back to the English href only for the ~45 pages without an
    // Arabic version yet.
    const localizedContent = {
      ...page.pointTransferV2,
      blocks: page.pointTransferV2.blocks.map((block) =>
        block.type === "relatedLinks"
          ? {
              ...block,
              links: block.links.map((l) => ({
                ...l,
                href: getArPathForEnPath(l.href) ?? l.href,
              })),
            }
          : block
      ),
    };
    return (
      <PointTransferV2View
        h1={page.h1}
        from={from}
        to={to}
        isPointToPoint={isPointToPoint}
        crumbs={page.breadcrumbs}
        cityName={cityName}
        serviceType={serviceTypeLabel}
        areaServed={`${cityName}, المملكة العربية السعودية`}
        quoteServiceType={`${cityName} - ${serviceTypeLabel}`}
        whatsappMessage={
          isPointToPoint
            ? `مرحبًا! أرغب في الحصول على عرض سعر لرحلة من ${from} إلى ${to}.`
            : `مرحبًا! أرغب في الحصول على عرض سعر لـ${to} في ${cityName}.`
        }
        latestGuidesKey={page.enPath.replace(/^\//, "")}
        content={localizedContent}
        labels={arPointTransferV2Labels}
      />
    );
  }

  if (page.type === "legal" && page.legal) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <LegalPageView {...page.legal} crumbs={page.breadcrumbs} />
      </>
    );
  }

  if (page.type === "contactV2" && page.contactV2) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <ContactPageView
          {...page.contactV2}
          crumbs={page.breadcrumbs}
          formSlot={<QuoteForm serviceType="صفحة اتصل بنا" twoColumn={false} />}
        />
      </>
    );
  }

  if (page.type === "quoteV2" && page.quoteV2) {
    const sp = await searchParams;
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <QuotePageView
          {...page.quoteV2}
          crumbs={page.breadcrumbs}
          formSlot={
            <QuoteForm
              serviceType="صفحة اطلب عرض سعر"
              defaultPickup={sp.pickup ?? ""}
              defaultDropoff={sp.dropoff ?? ""}
              defaultDate={sp.date ?? ""}
              defaultTime={sp.time ?? ""}
              defaultPassengers={sp.passengers || "2"}
            />
          }
        />
      </>
    );
  }

  if (page.type === "servicesV2" && page.servicesHub) {
    return (
      <>
        <SchemaScript schema={breadcrumbSchema(page.breadcrumbs)} />
        <ServicesHubView {...page.servicesHub} crumbs={page.breadcrumbs} />
      </>
    );
  }

  if (page.type === "city") {
    const enCity = getCity(page.enPath.replace("/taxi-service/", ""));
    const eyebrow = page.breadcrumbs[1]?.name ?? "دليل المدينة";

    let airportCard: CityHubContent["airportCard"];
    if (enCity?.nearestAirportSlug) {
      const arAirport = arPages.find(
        (p) => p.type === "airport" && p.enPath === `/airport-transfer/${enCity.nearestAirportSlug}`
      );
      if (arAirport) {
        airportCard = {
          heading: "النقل من المطار",
          text: `تحتاج استقبالًا من المطار أيضًا؟ نغطي ${arAirport.h1}.`,
          linkLabel: "عرض نقل المطار",
          href: arPath(arAirport),
        };
      }
    }

    const nearbyCities: CityHubLinkItem[] = arPages
      .filter((p) => p.type === "city" && p.slug !== page.slug)
      .map((p) => ({
        label: p.breadcrumbs[p.breadcrumbs.length - 1]?.name ?? p.h1,
        href: arPath(p),
      }));

    const services: CityHubLinkItem[] = [
      { label: "النقل بين المدن", href: "/ar/النقل-بين-المدن" },
      { label: "نقل من المطار", href: "/ar/نقل-من-المطار" },
      ...(["تنقلات-جدة", "تاكسي-مكة", "تاكسي-المدينة"].includes(page.slug)
        ? [
            { label: "نقل العمرة", href: "/ar/نقل-العمرة" },
            { label: "نقل الزيارة", href: "/ar/نقل-الزيارة" },
          ]
        : []),
    ];

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: "City Taxi Service",
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.faqs),
          ]}
        />
        <CityHubView
          eyebrow={eyebrow}
          h1={page.h1}
          dek={page.intro}
          heroImage={page.heroImage ?? heroFor(page)}
          heroAlt={page.heroAlt ?? page.h1}
          facts={[]}
          extraSections={page.sections}
          airportCard={airportCard}
          nearbyCitiesHeading={nearbyCities.length > 0 ? "مدن قريبة" : undefined}
          nearbyCities={nearbyCities}
          servicesHeading="خدمات ذات صلة"
          services={services}
          faqsHeading="الأسئلة الشائعة"
          faqs={page.faqs}
          ctaHeading="جاهز لحجز نقلك؟"
          ctaText="شاركنا تفاصيل رحلتك، ونرد بسعر ثابت قبل السفر."
          ctaLabel="اطلب عرض سعر"
          ctaHref="/ar/اطلب-عرض-سعر"
          crumbs={page.breadcrumbs}
        />
      </>
    );
  }

  if (page.type === "city-hub") {
    const hubCity = getCity(citySlugFor(page));
    const hubAirport = hubCity?.nearestAirportSlug ? getAirport(hubCity.nearestAirportSlug) : undefined;

    if (hubCity && hubAirport) {
      const hubHotels = hotelsForCity(hubCity.slug);
      const hubFacts = cityAirportFactsAr[hubCity.slug];
      const distances = hubHotels.map((h) => h.distanceKm);
      const durations = hubHotels.map((h) => h.durationMin);
      const hubDistanceRange = distances.length > 0 ? { min: Math.min(...distances), max: Math.max(...distances) } : null;
      const hubDurationRange = durations.length > 0 ? { min: Math.min(...durations), max: Math.max(...durations) } : null;
      const hotelCount = hubHotels.length;

      const cityArPage = arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${hubCity.slug}`);
      const airportHref = getArPathForEnPath(`/airport-transfer/${hubAirport.slug}`) ?? `/airport-transfer/${hubAirport.slug}`;
      const hubCityNameAr = pointTransferCityNameAr[hubCity.slug] ?? hubCity.name;

      const factCards: HotelTransferHubFactCard[] = [
        ...(hubDistanceRange && hubDurationRange
          ? [
              {
                heading: `المسافة من ${hubAirport.name}`,
                icon: "distance" as const,
                text: `فنادقنا في ${hubCityNameAr} (${hotelCount}) تبعد بين ${hubDistanceRange.min}${
                  hubDistanceRange.min === hubDistanceRange.max ? "" : `–${hubDistanceRange.max}`
                } كم عن ${hubAirport.name} (${hubAirport.code}) — نحو ${hubDurationRange.min}${
                  hubDurationRange.min === hubDurationRange.max ? "" : `–${hubDurationRange.max}`
                } دقيقة بالسيارة، حسب حركة السير.`,
              },
            ]
          : []),
        {
          heading: `صالات ${hubAirport.name}`,
          icon: "terminals" as const,
          lines: hubAirport.terminals,
        },
        ...(hubFacts?.dropoffConstraint ? [{ heading: "نقطة النزول", text: hubFacts.dropoffConstraint }] : []),
        ...(hubFacts?.miqat ? [{ heading: "الميقات", text: hubFacts.miqat }] : []),
        ...(hubFacts?.seasonal ? [{ heading: "التوقيت الموسمي", text: hubFacts.seasonal, wide: true }] : []),
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Airport Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />

          <HotelTransferHubView
            eyebrow="دليل المطار ⇄ الفنادق"
            h1={page.h1}
            dek={page.intro}
            crumbs={page.breadcrumbs}
            stats={[
              { label: "عدد الفنادق", value: `${hotelCount}`, emphasis: true },
              ...(hubDistanceRange
                ? [{ label: "المسافة", value: `${hubDistanceRange.min}${hubDistanceRange.min === hubDistanceRange.max ? "" : `–${hubDistanceRange.max}`} كم` }]
                : []),
              ...(hubDurationRange
                ? [{ label: "مدة القيادة", value: `${hubDurationRange.min}${hubDurationRange.min === hubDurationRange.max ? "" : `–${hubDurationRange.max}`} دقيقة` }]
                : []),
            ]}
            linkCards={[
              { label: `نظرة عامة على نقل مطار ${hubCityNameAr}`, href: airportHref, icon: "airport" },
              ...(cityArPage
                ? [{ label: `خدمة تاكسي ${hubCityNameAr}`, href: arPath(cityArPage), icon: "city" as const }]
                : []),
            ]}
            factsHeading={`أساسيات النقل من مطار ${hubCityNameAr}`}
            factCards={factCards}
            hotelsHeading={`كل فنادق ${hubCityNameAr} التي ننقل إليها`}
            hotelsIntro={`${hotelCount} فندقًا، بالاتجاهين، سعر ثابت متفق عليه قبل السفر.`}
            hotels={hubHotels.map((h) => ({
              slug: h.slug,
              name: h.name,
              area: h.area,
              stars: h.stars,
              distanceKm: h.distanceKm,
              durationMin: h.durationMin,
              quoteHref: `/get-quote?pickup=${encodeURIComponent(hubAirport.name)}&dropoff=${encodeURIComponent(h.name)}`,
            }))}
            tableLabels={{
              hotel: "الفندق",
              district: "الحي",
              stars: "النجوم",
              distance: "المسافة",
              duration: "المدة",
              quote: "عرض السعر",
              quoteLabel: dict.cta.getAQuote,
            }}
          />

          <VehicleOptions
            heading="اختر مركبتك"
            subheading="من السيارات الاقتصادية إلى الحافلات الصغيرة الجماعية — اختر ما يناسب مجموعتك وأمتعتك."
            background="muted"
            lang="ar"
          />
          <HowItWorks background="white" />
          <FAQSection faqs={page.faqs} heading="الأسئلة الشائعة" background="muted" />
          <CTASection
            title={`احجز نقل مطار ${hubCityNameAr}`}
            whatsappMessage={`مرحبًا! أرغب في حجز نقل من مطار ${hubCityNameAr}.`}
          />
        </>
      );
    }
  }

  if (page.type === "airport") {
    const enAirport = getAirport(page.enPath.replace("/airport-transfer/", ""));
    const journeySteps = [
      { label: "تبدأ متابعة رحلتك الجوية", detail: "نتابع رقم رحلتك فور الحجز لمعرفة موعد الهبوط الفعلي حتى لو تغيّر." },
      { label: "يستقبلك السائق في صالة الوصول", detail: "ينتظرك سائقك داخل صالة الوصول بلافتة تحمل اسمك، بعد استلام الأمتعة مباشرة." },
      { label: "مساعدة في حمل الأمتعة", detail: "يساعدك السائق في حمل أمتعتك من صالة الوصول إلى المركبة." },
      { label: "نقل مباشر إلى وجهتك", detail: "تُنقل مباشرة إلى فندقك أو وجهتك بالسعر الثابت المتفق عليه عند الحجز." },
    ];

    const cityArPage = enAirport?.citySlug
      ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${enAirport.citySlug}`)
      : undefined;

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: "Airport Transfer",
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.faqs),
          ]}
        />
        <AirportHubView
          eyebrow="نقل من المطار"
          h1={page.h1}
          dek={page.intro}
          heroImage={page.heroImage ?? heroFor(page)}
          heroAlt={page.heroAlt ?? page.h1}
          facts={[
            ...(page.distance ? [{ label: "المسافة", value: page.distance }] : []),
            ...(page.duration ? [{ label: "المدة", value: page.duration }] : []),
          ]}
          journeyHeading="كيف يعمل استقبال المطار"
          journeySteps={journeySteps}
          guideSections={page.sections}
          cityCard={
            cityArPage
              ? {
                  heading: `خدمة تاكسي في ${cityArPage.breadcrumbs[cityArPage.breadcrumbs.length - 1]?.name ?? ""}`,
                  text: "تحتاج تنقلًا داخل المدينة أيضًا؟ نغطي الرحلات المحلية والفندقية.",
                  linkLabel: "عرض خدمة التاكسي في المدينة",
                  href: arPath(cityArPage),
                }
              : undefined
          }
          faqsHeading="الأسئلة الشائعة"
          faqs={page.faqs}
          ctaHeading="جاهز لحجز نقلك من المطار؟"
          ctaText="شاركنا رقم رحلتك ووجهتك، ونرد بسعر ثابت قبل السفر."
          ctaLabel="اطلب عرض سعر"
          ctaHref="/ar/اطلب-عرض-سعر"
          crumbs={page.breadcrumbs}
        />
      </>
    );
  }

  // Arabic domestic city-to-city route pages get the same new journey-type
  // shell as their English counterparts (Phase 3 redesign). Reuses each
  // page's own already-real Arabic sections/faqs — content is not
  // re-authored here, only restructured into the new design. Airport/
  // border/international Arabic route pages (out of scope) fall through to
  // the generic renderer below, unchanged.
  if (page.type === "route") {
    const enSlug = page.enPath.replace("/routes/", "");
    const enRoute = getRoute(enSlug);
    if (enRoute && isDomesticCityRoute(enRoute)) {
      const journeyType = classifyRoute(enRoute);
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const reverseEnRoute = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const reverseArPage = reverseEnRoute
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${reverseEnRoute.slug}`)
        : undefined;

      const blocks = buildArabicRouteBlocks(
        journeyType,
        arFrom,
        arTo,
        distance,
        duration,
        page.sections,
        reverseArPage ? arPath(reverseArPage) : undefined,
        reverseArPage ? parseArabicFromTo(reverseArPage.h1)?.to ?? reverseArPage.h1 : undefined
      );

      // Related routes/cities: only ever link to a real Arabic page — never
      // fall back to an English internal link for these, per the "don't
      // automatically send Arabic users to English pages" rule.
      const candidateEnSlugs = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== reverseEnRoute?.slug &&
            (r.from === enRoute.from || r.to === enRoute.to) &&
            isDomesticCityRoute(r)
        )
        .slice(0, 6);
      const relatedRouteItems = candidateEnSlugs
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const relatedCityItems = enRoute.relatedCitySlugs
        .map((s) => arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${s}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .map((p) => ({ label: p.breadcrumbs[p.breadcrumbs.length - 1]?.name ?? p.h1, href: arPath(p) }));

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Intercity Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <RouteJourneyView
            eyebrow="نقل خاص بين المدن"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            facts={[
              { label: "المسافة", value: distance },
              { label: "مدة القيادة التقريبية", value: duration },
            ]}
            from={arFrom}
            to={arTo}
            blocks={blocks}
            pickupHeading="نقاط الانطلاق الشائعة"
            pickupPoints={["المطار", "الفندق", "المنزل", "مقر العمل"]}
            dropoffHeading="نقاط الوصول الشائعة"
            dropoffPoints={["الفندق", "المطار", "وسط المدينة", "الوجهة السياحية"]}
            relatedRoutesHeading={relatedRouteItems.length > 0 ? "رحلات ذات صلة" : undefined}
            relatedRoutes={relatedRouteItems}
            relatedCitiesHeading={relatedCityItems.length > 0 ? "خدمة التاكسي في مدن هذه الرحلة" : undefined}
            relatedCities={relatedCityItems}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذه الرحلة؟"
            ctaText={`شاركنا وقت الانطلاق وعدد الركاب لرحلة ${arFrom} إلى ${arTo}، ونرد بسعر ثابت.`}
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك الخاصة."
            formSlot={
              <QuoteForm
                serviceType={`رحلة ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    if (enRoute && isAirportToCityRoute(enRoute)) {
      const parsed = parseArabicFromTo(page.h1);
      const arAirport = parsed?.from ?? enRoute.from;
      const arCity = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const airportSlug = enRoute.slug.split("-to-")[0];
      const enAirport = getAirport(airportSlug);
      const arAirportPage = enAirport
        ? arPages.find((p) => p.type === "airport" && p.enPath === `/airport-transfer/${enAirport.slug}`)
        : undefined;
      const destinationEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.to.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = destinationEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${destinationEnCity.slug}`)
        : undefined;

      const cityToAirportEnReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = cityToAirportEnReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${cityToAirportEnReverse.slug}`)
        : undefined;

      const relatedArAirportRoutes = routes
        .filter((r) => r.slug !== enRoute.slug && isAirportToCityRoute(r) && (r.from === enRoute.from || r.to === enRoute.to))
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const hubLinks = [
        ...(arAirportPage ? [{ label: `مركز ${arAirportPage.breadcrumbs[arAirportPage.breadcrumbs.length - 1]?.name ?? "نقل المطار"}`, href: arPath(arAirportPage) }] : []),
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
      ];

      const arrivalSteps = [
        { label: "تبدأ متابعة رحلتك الجوية", detail: "نتابع رقم رحلتك فور الحجز، لنعرف موعد هبوطها الفعلي حتى لو تغيّر." },
        { label: "يستقبلك السائق في صالة الوصول", detail: page.sections[0]?.paragraphs[0] ?? "ينتظرك سائقك داخل صالة الوصول بلافتة تحمل اسمك، بعد استلام الأمتعة مباشرة." },
        ...(page.sections[0]?.paragraphs[1] ? [{ label: "الطريق إلى الوجهة", detail: page.sections[0].paragraphs[1] }] : []),
        { label: "الانطلاق مباشرة إلى وجهتك", detail: `يساعدك السائق بأمتعتك، وتُنقل مباشرة نحو ${arCity} بالسعر الثابت المتفق عليه عند الحجز.` },
      ];

      const bookingSteps = [
        { label: "شارك تفاصيل رحلتك", detail: `رقم الرحلة، تاريخ ووقت الوصول، ووجهتك في ${arCity}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "استقبل سائقك عند الوصول", detail: "ينتظرك السائق في صالة الوصول، مع متابعة رحلتك في حال أي تأخير." },
        { label: "انطلق مباشرة إلى وجهتك", detail: "نقل مباشر من الباب إلى الباب، مع المساعدة في حمل الأمتعة." },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Airport Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <AirportRouteView
            eyebrow="نقل من المطار"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            airportLabel={arAirport}
            cityLabel={arCity}
            facts={[
              { label: "المسافة", value: distance },
              { label: "الفئة", value: "نقل من المطار" },
            ]}
            journeyTimeHeading="مدة الرحلة"
            pureDrivingLabel="مدة القيادة الصافية"
            pureDrivingValue={duration}
            totalJourneyNote="هذه مدة القيادة في ظروف طبيعية. قد تطول رحلتك الكاملة بسبب إجراءات الوصول واستلام الأمتعة وحركة السير، فاعتبرها تقديرًا لزمن الطريق نفسه لا وعدًا بموعد وصول محدد."
            arrivalHeading={`الاستقبال في ${arAirport}`}
            arrivalSteps={arrivalSteps}
            roadJourneyHeading="رحلة الطريق"
            roadJourneyParagraphs={page.sections[0]?.paragraphs ?? [page.intro]}
            destinationHeading={`الوصول إلى ${arCity}`}
            destinationParagraphs={page.sections[1]?.paragraphs ?? page.sections.slice(1).flatMap((s) => s.paragraphs)}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="سيارة صالون تكفي مسافرًا منفردًا أو زوجين بأمتعة معتادة، بينما تناسب سيارة SUV أو فان العائلات أو من لديهم أمتعة أكثر — أخبرنا بعدد الركاب والحقائب عند الحجز."
            whoSuitsHeading="من تناسبه هذه الرحلة"
            whoSuits={[
              { title: "المسافرون القادمون جوًا", description: `نقل مباشر من ${arAirport} إلى ${arCity} دون انتظار حافلة مشتركة.` },
              { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة والأمتعة، بحجم يُحدَّد عند الحجز." },
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            checklistHeading="ما تحتاج تجهيزه"
            checklist={["رقم الرحلة وتاريخ الوصول", `عنوان أو اسم الفندق في ${arCity}`, "عدد الركاب والحقائب", "رقم تواصل ليوم السفر"]}
            reverseHeading={arReversePage ? "التخطيط لرحلة العودة" : undefined}
            reverseText={
              arReversePage
                ? `تحتاج العودة إلى المطار لاحقًا؟ نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتوقيت يناسب رحلة مغادرتك.`
                : undefined
            }
            reverseLinkLabel={arReversePage ? (parseArabicFromTo(arReversePage.h1)?.from ? `${parseArabicFromTo(arReversePage.h1)!.from} إلى ${parseArabicFromTo(arReversePage.h1)!.to}` : arReversePage.h1) : undefined}
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArAirportRoutes.length > 0 ? "رحلات مطار ذات صلة" : undefined}
            relatedRoutes={relatedArAirportRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText={`شاركنا رقم رحلتك ووجهتك في ${arCity}، ونرد بسعر ثابت قبل السفر.`}
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arAirport} ← ${arCity}`}
            formSubheading="سعر ثابت لنقل مطارك."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arAirport} إلى ${arCity}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    if (enRoute && isCityToAirportRoute(enRoute)) {
      const parsed = parseArabicFromTo(page.h1);
      const arCity = parsed?.from ?? enRoute.from;
      const arAirport = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const enAirport = getAirport(enRoute.to.toLowerCase().replace(/ /g, "-"));
      const arAirportPage = enAirport
        ? arPages.find((p) => p.type === "airport" && p.enPath === `/airport-transfer/${enAirport.slug}`)
        : undefined;
      const originEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.from.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = originEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${originEnCity.slug}`)
        : undefined;

      const airportToCityEnReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = airportToCityEnReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${airportToCityEnReverse.slug}`)
        : undefined;

      const relatedArCityAirportRoutes = routes
        .filter((r) => r.slug !== enRoute.slug && isCityToAirportRoute(r) && (r.from === enRoute.from || r.to === enRoute.to))
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const hubLinks = [
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        ...(arAirportPage ? [{ label: `مركز ${arAirportPage.breadcrumbs[arAirportPage.breadcrumbs.length - 1]?.name ?? "نقل المطار"}`, href: arPath(arAirportPage) }] : []),
      ];

      const bookingSteps = [
        { label: "اختر هذا المسار وشارك تفاصيل رحلتك", detail: `رقم الرحلة، تاريخ ووقت المغادرة، وعنوان الاستلام في ${arCity}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "أكّد موعد الاستلام", detail: "نتفق معك على موعد الاستلام مع مراعاة رحلتك الجوية وحركة السير المعتادة." },
        { label: "استقبل سائقك وانطلق نحو المطار", detail: "نقل مباشر من الباب إلى الباب، مع المساعدة في حمل الأمتعة والتوصيل عند الصالة." },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Airport Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <CityAirportRouteView
            eyebrow="المغادرة إلى المطار"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            originLabel={arCity}
            airportLabel={arAirport}
            facts={[{ label: "المسافة", value: distance }]}
            departureHeading="متى يجب أن أغادر؟"
            departureIntro={page.sections[0]?.paragraphs[0] ?? page.intro}
            departurePoints={[
              "يعتمد موعد المغادرة على وقت رحلتك الجوية أكثر من مدة القيادة وحدها",
              "يُنصح بهامش وقت أكبر للرحلات الدولية مقارنة بالرحلات الداخلية",
              "شاركنا وقت رحلتك عند الحجز لنساعدك في تحديد موعد استلام مناسب",
            ]}
            journeyTimeHeading="زمن الرحلة الكلي"
            pureDrivingLabel="مدة القيادة الصافية"
            pureDrivingValue={duration}
            totalJourneyNote="قد يطول بسبب حركة السير وتوقيت الاستلام والوقت داخل الصالة — اعتبر مدة القيادة تقديرًا لزمن الطريق نفسه لا وعدًا بموعد وصول محدد."
            pickupHeading={`التخطيط للاستلام من ${arCity}`}
            pickupParagraphs={page.sections[0]?.paragraphs ?? [page.intro]}
            roadJourneyHeading="رحلة الطريق"
            roadJourneyParagraphs={page.sections[1]?.paragraphs.slice(0, 1) ?? [page.intro]}
            dropoffHeading={`الوصول إلى ${arAirport}`}
            dropoffParagraphs={page.sections[1]?.paragraphs.slice(1) ?? []}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="سيارة صالون تكفي مسافرًا منفردًا أو زوجين بأمتعة معتادة، بينما تناسب سيارة SUV أو فان العائلات أو من لديهم أمتعة أكثر — أخبرنا بعدد الركاب والحقائب عند الحجز."
            whoSuitsHeading="من تناسبه هذه الرحلة"
            whoSuits={[
              { title: "المسافرون لعمل أو رحلة", description: `استلام مباشر من ${arCity} بتوقيت يناسب رحلتك الجوية من ${arAirport}.` },
              { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة والأمتعة، بحجم يُحدَّد عند الحجز." },
            ]}
            delayHeading="ما الذي قد يؤخر الرحلة؟"
            delayIntro="مدة القيادة تقدير في ظروف طبيعية — عدة عوامل قد تؤثر على الوقت الفعلي."
            delayFactors={[
              "ازدحام ساعات الذروة على الطريق",
              "أعمال طرق أو حوادث على المسار",
              "فعاليات كبرى قد تزيد الازدحام في المدينة",
              "وقت استعدادك الشخصي عند موعد الاستلام",
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            checklistHeading="قائمة التحقق قبل المغادرة"
            checklist={["رقم الرحلة وموعد المغادرة", `عنوان الاستلام في ${arCity}`, "عدد الركاب والحقائب", "رقم تواصل ليوم السفر"]}
            reverseHeading={arReversePage ? "تخطط لرحلتي الذهاب والعودة؟" : undefined}
            reverseText={
              arReversePage
                ? `تحتاج استقبالًا من المطار أيضًا؟ نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتوقيت يناسب رحلة وصولك.`
                : undefined
            }
            reverseLinkLabel={arReversePage ? (parseArabicFromTo(arReversePage.h1)?.from ? `${parseArabicFromTo(arReversePage.h1)!.from} إلى ${parseArabicFromTo(arReversePage.h1)!.to}` : arReversePage.h1) : undefined}
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArCityAirportRoutes.length > 0 ? "رحلات مغادرة ذات صلة" : undefined}
            relatedRoutes={relatedArCityAirportRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText={`شاركنا رقم رحلتك وعنوان الاستلام في ${arCity}، ونرد بسعر ثابت قبل السفر.`}
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arCity} ← ${arAirport}`}
            formSubheading="سعر ثابت لرحلة مغادرتك."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arCity} إلى ${arAirport}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    const gccCountry = enRoute ? gccCountryFor(enRoute) : null;
    if (enRoute && gccCountry && isSaudiToGccRoute(enRoute)) {
      const countryFacts = arGccCountryFacts[gccCountry];
      const countryName = arGccCountryNames[gccCountry];
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const enReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = enReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${enReverse.slug}`)
        : undefined;

      const relatedArGccRoutes = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== enReverse?.slug &&
            isSaudiToGccRoute(r) &&
            (r.from === enRoute.from || gccCountryFor(r) === gccCountry)
        )
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const originEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.from.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = originEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${originEnCity.slug}`)
        : undefined;
      const arDistancePage = arPages.find((p) => p.type === "distance" && p.enPath === `/distance/${enRoute.slug}-distance`);

      const hubLinks = [
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        { label: "خدمات النقل عبر الحدود", href: "/ar/النقل-عبر-الحدود" },
        ...(arDistancePage ? [{ label: "دليل المسافة بالطريق", href: arPath(arDistancePage) }] : []),
      ];

      const introHeading = page.sections[0]?.heading ?? "رحلة الطريق";
      const introParagraphs = page.sections[0]?.paragraphs ?? [page.intro];
      const borderHeading = page.sections[1]?.heading ?? "عبور الحدود";
      const borderParagraphs = page.sections[1]?.paragraphs ?? [];
      const destinationHeading = page.sections[2]?.heading ?? `الوصول إلى ${arTo}`;
      const destinationParagraphs = page.sections[2]?.paragraphs ?? [];

      const bookingSteps = [
        { label: "شارك موقع الاستلام والوجهة والتاريخ", detail: `نقطة استلامك في ${arFrom} ووجهتك في ${arTo}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "يستقبلك السائق", detail: "في موعدك المتفق عليه، مع تخطيط مسبق لمحطات الراحة." },
        { label: "عبور الحدود والوصول", detail: `يتولى سائقك إجراءات ${countryFacts.crossingName}، ثم يواصل إلى ${arTo}.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Border Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <GccRouteView
            eyebrow="نقل دولي بري"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            originLabel={arFrom}
            destinationLabel={arTo}
            facts={[
              { label: "المسافة", value: distance, emphasis: true },
              { label: "مدة القيادة الصافية", value: arPureDrivingTime(duration), emphasis: true },
              { label: "المنفذ الحدودي", value: countryFacts.crossingName },
              { label: "الدول المعبورة", value: `السعودية ← ${countryName}` },
            ]}
            timelineHeading="كيف تسير الرحلة"
            timeline={[
              { label: `الاستلام من ${arFrom}`, detail: "من عنوانك المحدد." },
              { label: "رحلة الطريق", detail: "القيادة نحو المنفذ الحدودي." },
              { label: "عبور الحدود", detail: `إجراءات ${countryFacts.crossingName}.` },
              { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
            ]}
            introHeading={introHeading}
            introParagraphs={introParagraphs}
            borderHeading={borderHeading}
            borderParagraphs={borderParagraphs}
            responsibilityHeading="ما نتولاه مقابل ما تتحكم به سلطات الحدود"
            responsibilityIntro="تنطوي أي رحلة عابرة للحدود على نوعين مختلفين من المسؤولية — من المفيد توضيح الفرق بينهما."
            companyControlsLabel="ما نتولاه"
            companyControls={countryFacts.companyControls}
            authorityControlsLabel={`ما تتحكم به السلطات السعودية و${countryName === "الإمارات العربية المتحدة" ? "الإماراتية" : "المقابلة"}`}
            authorityControls={countryFacts.authorityControls}
            documentsHeading="المستندات المطلوب تجهيزها"
            documentsIntro={countryFacts.documentsIntro}
            documentsItems={countryFacts.documentsItems}
            documentsDisclaimer={countryFacts.documentsDisclaimer}
            destinationHeading={destinationHeading}
            destinationParagraphs={destinationParagraphs}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="نحدد حجم المركبة — صالون أو SUV أو فان — حسب عدد ركابك وأمتعتك. أخبرنا بالتفاصيل عند طلب عرض السعر."
            whoSuitsHeading="لمن تناسب هذه الرحلة"
            whoSuits={[
              { title: "المسافرون لعمل", description: "رحلة واحدة متابَعة بدلًا من تنسيق مرحلتين منفصلتين." },
              { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة والأمتعة عبر الحدود." },
              { title: "من يفضل الطريق على الطيران", description: "خدمة حقيقية من الباب للباب دون حدود وزن أو تسجيل دخول." },
            ]}
            checklistHeading="قائمة تحقق عملية"
            checklist={[
              "جواز سفر ساري وأي تأشيرة تلزم جنسيتك",
              `نقطة الاستلام الدقيقة في ${arFrom} والوجهة في ${arTo}`,
              "عدد الركاب والأمتعة",
              "هامش زمني مريح لعبور الحدود",
              "رقم تواصل ليوم السفر",
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            reverseHeading={arReversePage ? "تخطط للرحلة في الاتجاه المعاكس؟" : undefined}
            reverseText={arReversePage ? "نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتخطيط يراعي ما يختلف عند السفر بهذا الشكل." : undefined}
            reverseLinkLabel={
              arReversePage
                ? (() => {
                    const t = parseArabicFromTo(arReversePage.h1);
                    return t ? `${t.from} إلى ${t.to}` : arReversePage.h1;
                  })()
                : undefined
            }
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArGccRoutes.length > 0 ? `مسارات أخرى من السعودية إلى ${countryName}` : undefined}
            relatedRoutes={relatedArGccRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText="شاركنا نقطة الاستلام والوجهة وتاريخ السفر، ونرد بسعر ثابت قبل السفر."
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك الدولية."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    const gccOriginCountry = enRoute ? gccCountryForOrigin(enRoute) : null;
    if (enRoute && gccOriginCountry && isGccToSaudiRoute(enRoute)) {
      const originCountryFacts = arGccToSaudiCountryFacts[gccOriginCountry];
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const enReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = enReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${enReverse.slug}`)
        : undefined;

      const relatedArGccToSaudiRoutes = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== enReverse?.slug &&
            isGccToSaudiRoute(r) &&
            (r.to === enRoute.to || gccCountryForOrigin(r) === gccOriginCountry)
        )
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const destinationEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.to.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = destinationEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${destinationEnCity.slug}`)
        : undefined;
      const arDistancePage = arPages.find((p) => p.type === "distance" && p.enPath === `/distance/${enRoute.slug}-distance`);

      const hubLinks = [
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        { label: "خدمات النقل عبر الحدود", href: "/ar/النقل-عبر-الحدود" },
        ...(arDistancePage ? [{ label: "دليل المسافة بالطريق", href: arPath(arDistancePage) }] : []),
      ];

      const departureHeading = page.sections[0]?.heading ?? "قبل المغادرة";
      const departureParagraphs = page.sections[0]?.paragraphs ?? [page.intro];
      const borderHeading = page.sections[1]?.heading ?? "عبور الحدود";
      const borderParagraphs = page.sections[1]?.paragraphs ?? [];
      const saudiJourneyHeading = page.sections[2]?.heading ?? "الطريق داخل السعودية";
      const saudiJourneyParagraphs = page.sections[2]?.paragraphs ?? [];

      const bookingSteps = [
        { label: "شارك موقع الاستلام والوجهة والتاريخ", detail: `نقطة استلامك في ${arFrom} ووجهتك في ${arTo}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "يستقبلك السائق", detail: "في موعدك المتفق عليه، مع تخطيط مسبق لمحطات الراحة." },
        { label: "عبور الحدود والوصول", detail: `يتولى سائقك إجراءات ${originCountryFacts.crossingName}، ثم يواصل إلى ${arTo}.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Border Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <GccToSaudiRouteView
            eyebrow="وصول عبر الحدود"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            originLabel={arFrom}
            destinationLabel={arTo}
            facts={[
              { label: "المسافة", value: distance, emphasis: true },
              { label: "مدة القيادة الصافية", value: arPureDrivingTime(duration), emphasis: true },
              { label: "المنفذ الحدودي", value: originCountryFacts.crossingName },
            ]}
            timelineHeading="كيف تسير الرحلة"
            timeline={[
              { label: `الاستلام من ${arFrom}`, detail: "من عنوانك المحدد." },
              { label: "عبور الحدود", detail: `إجراءات ${originCountryFacts.crossingName}.` },
              { label: "الطريق داخل السعودية", detail: "القيادة نحو وجهتك." },
              { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
            ]}
            departureHeading={departureHeading}
            departureParagraphs={departureParagraphs}
            borderHeading={borderHeading}
            beforeBorderLabel={`في ${arFrom}`}
            beforeBorderText="الاستلام من عنوانك المحدد، ثم التوجه نحو المنفذ الحدودي."
            afterBorderLabel="داخل السعودية"
            afterBorderText={`الطريق المتبقي نحو ${arTo}، بحسب المسافة الفعلية.`}
            borderParagraphs={borderParagraphs}
            responsibilityHeading="ما نتولاه مقابل ما تتحكم به سلطات الحدود"
            responsibilityIntro="تنطوي أي رحلة عابرة للحدود على نوعين مختلفين من المسؤولية — من المفيد توضيح الفرق بينهما."
            companyControlsLabel="ما نتولاه"
            companyControls={originCountryFacts.companyControls}
            authorityControlsLabel="ما تتحكم به سلطات الحدود"
            authorityControls={originCountryFacts.authorityControls}
            documentsHeading="المستندات المطلوب تجهيزها"
            documentsIntro={originCountryFacts.documentsIntro}
            documentsItems={originCountryFacts.documentsItems}
            documentsDisclaimer={originCountryFacts.documentsDisclaimer}
            saudiJourneyHeading={saudiJourneyHeading}
            saudiJourneyParagraphs={saudiJourneyParagraphs}
            destinationHeading={`الوصول إلى ${arTo}`}
            destinationParagraphs={saudiJourneyParagraphs.length > 0 ? [saudiJourneyParagraphs[saudiJourneyParagraphs.length - 1]] : []}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="نحدد حجم المركبة — صالون أو SUV أو فان — حسب عدد ركابك وأمتعتك. أخبرنا بالتفاصيل عند طلب عرض السعر."
            whoSuitsHeading="لمن تناسب هذه الرحلة"
            whoSuits={[
              { title: "المسافرون لعمل", description: "رحلة واحدة متابَعة بدلًا من تنسيق مرحلتين منفصلتين." },
              { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة والأمتعة عبر الحدود." },
              { title: "من يفضل الطريق على الطيران", description: "خدمة حقيقية من الباب للباب دون حدود وزن أو تسجيل دخول." },
            ]}
            checklistHeading="قائمة تحقق عملية"
            checklist={[
              "جواز سفر ساري وأي تأشيرة سعودية تلزم جنسيتك",
              `نقطة الاستلام الدقيقة في ${arFrom} والوجهة في ${arTo}`,
              "عدد الركاب والأمتعة",
              "هامش زمني مريح لعبور الحدود",
              "رقم تواصل ليوم السفر",
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            reverseHeading={arReversePage ? "تخطط للرحلة في الاتجاه المعاكس؟" : undefined}
            reverseText={arReversePage ? "نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتخطيط يراعي ما يختلف عند السفر بهذا الشكل." : undefined}
            reverseLinkLabel={
              arReversePage
                ? (() => {
                    const t = parseArabicFromTo(arReversePage.h1);
                    return t ? `${t.from} إلى ${t.to}` : arReversePage.h1;
                  })()
                : undefined
            }
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArGccToSaudiRoutes.length > 0 ? "رحلات عبور حدودي أخرى" : undefined}
            relatedRoutes={relatedArGccToSaudiRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText="شاركنا نقطة الاستلام والوجهة وتاريخ السفر، ونرد بسعر ثابت قبل السفر."
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك الدولية."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    const borderCountry = enRoute ? borderCountryFor(enRoute) : null;
    if (enRoute && borderCountry && isCityToBorderRoute(enRoute)) {
      const crossingFacts = arCityToBorderCrossingFacts[borderCountry];
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;

      const enReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = enReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${enReverse.slug}`)
        : undefined;

      const relatedArCityToBorderRoutes = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== enReverse?.slug &&
            isCityToBorderRoute(r) &&
            (r.from === enRoute.from || borderCountryFor(r) === borderCountry)
        )
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const originEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.from.toLowerCase().replace(/\s*airport\s*/i, "")) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = originEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${originEnCity.slug}`)
        : undefined;
      const arDistancePage = arPages.find((p) => p.type === "distance" && p.enPath === `/distance/${enRoute.slug}-distance`);

      const hubLinks = [
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        { label: "خدمات النقل عبر الحدود", href: "/ar/النقل-عبر-الحدود" },
        ...(arDistancePage ? [{ label: "دليل المسافة بالطريق", href: arPath(arDistancePage) }] : []),
      ];

      const roadJourneyHeading = page.sections[0]?.heading ?? "رحلة الطريق";
      const roadJourneyParagraphs = page.sections[0]?.paragraphs ?? [page.intro];
      const handoverHeading = page.sections[1]?.heading ?? "عند الحدود";
      const handoverParagraphs = page.sections[1]?.paragraphs ?? [];
      const extraParagraphs = page.sections[2]?.paragraphs ?? [];

      const bookingSteps = [
        { label: "شارك موقع الاستلام والتاريخ", detail: `نقطة استلامك في ${arFrom}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
        { label: "يستقبلك السائق", detail: "في موعدك المتفق عليه، مع تخطيط مسبق لمحطة راحة." },
        { label: "التوصيل عند المنفذ", detail: `عند نقطة ${arTo} السعودية، جاهزًا لإجراءات الخروج.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Border Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <CityToBorderRouteView
            eyebrow="نقل للجانب السعودي فقط"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            originLabel={arFrom}
            borderLabel={arTo}
            facts={[
              { label: "المسافة", value: distance, emphasis: true },
              { label: "مدة القيادة الصافية", value: arPureDrivingTime(duration), emphasis: true },
              { label: "المنفذ الحدودي", value: crossingFacts.crossingName },
            ]}
            scopeHeading="ما تغطيه هذه الرحلة"
            coversLabel="المشمول في هذه الرحلة"
            covers={[
              `الاستلام من الباب في أي مكان في ${arFrom}`,
              "رحلة الطريق الكاملة على الجانب السعودي حتى المنفذ",
              "التوصيل عند المنشأة الحدودية السعودية",
              "سعر ثابت متفق عليه قبل السفر",
            ]}
            doesNotCoverLabel="غير مشمول — يُرتَّب بشكل منفصل"
            doesNotCover={["عبور المنفذ نفسه", "إجراءات الدخول على الجانب الآخر من الحدود", "النقل اللاحق بعد عبور الحدود"]}
            scopeNote="هذه خدمة للجانب السعودي فقط. إذا كنت تحتاج الرحلة الكاملة عبر الحدود، تحقق مما إذا كان هناك مسار مباشر إلى وجهتك النهائية على هذا الموقع."
            roadJourneyHeading={roadJourneyHeading}
            roadJourneyParagraphs={roadJourneyParagraphs}
            timelineHeading="كيف تسير الرحلة"
            timeline={[
              { label: `الاستلام من ${arFrom}`, detail: "من عنوانك المحدد." },
              { label: "رحلة الطريق", detail: "القيادة نحو المنفذ الحدودي." },
              { label: `الوصول إلى ${arTo}`, detail: "التوصيل عند نقطة المنفذ السعودية." },
            ]}
            departureHeading="متى يجب أن أغادر؟"
            departureIntro="احسب هامشًا واقعيًا لإجراءات المنفذ نفسها، لا لمدة القيادة فقط — فحوصات الجوازات والمركبة تضيف وقتًا يتفاوت حسب ازدحام المنفذ."
            departurePoints={[
              "مدة القيادة الصافية تقدير لا وعد بموعد وصول محدد",
              "تضيف إجراءات المنفذ وقتًا يتجاوز مدة القيادة",
              "عطلات نهاية الأسبوع والأعياد أكثر ازدحامًا عادة",
              "شاركنا أي موعد اتصال لاحق عند الحجز",
            ]}
            handoverHeading={handoverHeading}
            handoverParagraphs={[...handoverParagraphs, ...extraParagraphs]}
            companyControlsLabel="ما نتولاه"
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel="ما تتحكم به سلطات الحدود"
            authorityControls={crossingFacts.authorityControls}
            documentsHeading="المستندات المطلوب تجهيزها"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="نحدد حجم المركبة — صالون أو SUV أو فان — حسب عدد ركابك وأمتعتك. أخبرنا بالتفاصيل عند طلب عرض السعر."
            whoSuitsHeading="لمن تناسب هذه الرحلة"
            whoSuits={[
              { title: "المسافرون الذين رتّبوا اتصالهم الخاص", description: "من نظّم بالفعل النقل على الجانب الآخر ويحتاج فقط رحلة موثوقة على الجانب السعودي." },
              { title: "مسافرو الأعمال والطواقم", description: "رحلة واحدة بسعر ثابت إلى المنفذ، مع هامش زمني لإجراءات العبور." },
              { title: "العائلات والمجموعات بأمتعة", description: "مركبة SUV أو فان تُبقي الجميع وأمتعتهم معًا طوال الرحلة." },
            ]}
            checklistHeading="قائمة تحقق عملية"
            checklist={[
              "جواز سفر ساري وتصريح الدخول اللازم لجنسيتك على الجانب الآخر",
              `نقطة الاستلام الدقيقة في ${arFrom}`,
              "عدد الركاب والأمتعة",
              "ترتيب النقل اللاحق بعد عبور الحدود",
              "هامش زمني واقعي لإجراءات المنفذ",
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            reverseHeading={arReversePage ? "قادم من الاتجاه الآخر؟" : undefined}
            reverseText={arReversePage ? "نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتخطيط يراعي ما يختلف عند السفر بهذا الشكل." : undefined}
            reverseLinkLabel={
              arReversePage
                ? (() => {
                    const t = parseArabicFromTo(arReversePage.h1);
                    return t ? `${t.from} إلى ${t.to}` : arReversePage.h1;
                  })()
                : undefined
            }
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArCityToBorderRoutes.length > 0 ? "رحلات حدودية أخرى" : undefined}
            relatedRoutes={relatedArCityToBorderRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText="شاركنا نقطة الاستلام وتاريخ السفر، ونرد بسعر ثابت قبل السفر."
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك إلى الحدود."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    const borderOriginCountry = enRoute ? borderCountryForOrigin(enRoute) : null;
    if (enRoute && borderOriginCountry && isBorderToCityRoute(enRoute)) {
      const crossingFacts = arBorderToCityCrossingFacts[borderOriginCountry];
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;
      const destinationEnAirport = /airport/i.test(enRoute.to) ? getAirport(enRoute.to.toLowerCase().replace(/ /g, "-")) : undefined;

      const enReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = enReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${enReverse.slug}`)
        : undefined;

      const relatedArBorderToCityRoutes = routes
        .filter(
          (r) =>
            r.slug !== enRoute.slug &&
            r.slug !== enReverse?.slug &&
            isBorderToCityRoute(r) &&
            (r.to === enRoute.to || borderCountryForOrigin(r) === borderOriginCountry)
        )
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const destinationEnCity = !destinationEnAirport
        ? getCity(
            enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === enRoute.to.toLowerCase()) ??
              enRoute.relatedCitySlugs[0] ??
              ""
          )
        : undefined;
      const arAirportPage = destinationEnAirport
        ? arPages.find((p) => p.type === "airport" && p.enPath === `/airport-transfer/${destinationEnAirport.slug}`)
        : undefined;
      const arCityPage = destinationEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${destinationEnCity.slug}`)
        : undefined;
      const arDistancePage = arPages.find((p) => p.type === "distance" && p.enPath === `/distance/${enRoute.slug}-distance`);

      const hubLinks = [
        ...(arAirportPage ? [{ label: `مركز ${arAirportPage.breadcrumbs[arAirportPage.breadcrumbs.length - 1]?.name ?? "نقل المطار"}`, href: arPath(arAirportPage) }] : []),
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        { label: "خدمات النقل عبر الحدود", href: "/ar/النقل-عبر-الحدود" },
        ...(arDistancePage ? [{ label: "دليل المسافة بالطريق", href: arPath(arDistancePage) }] : []),
      ];

      const afterBorderSteps = [
        { label: "عبور الحدود", detail: "تُنجز إجراءات الدخول السعودية." },
        { label: "لقاء السائق", detail: "عند نقطة متفق عليها على الجانب السعودي." },
        { label: "ركوب المركبة", detail: "تحميل الأمتعة، ثم انطلاق الرحلة." },
        { label: "رحلة الطريق", detail: "القيادة نحو وجهتك." },
        { label: `الوصول إلى ${arTo}`, detail: "التوصيل عند عنوانك أو المبنى الطرفي." },
      ];

      const meetingParagraphs = page.sections[0]?.paragraphs ?? [page.intro];
      const roadJourneyHeading = page.sections[1]?.heading ?? "الطريق حتى الوجهة";
      const roadJourneyParagraphs = page.sections[1]?.paragraphs ?? [];
      const destinationHeading = page.sections[2]?.heading ?? `الوصول إلى ${arTo}`;
      const destinationParagraphs = page.sections[2]?.paragraphs ?? [];

      const bookingSteps = [
        { label: "شارك وقت عبورك ووجهتك", detail: `وقت عبورك المتوقع ووجهتك في ${arTo}.` },
        { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل يوم سفرك." },
        { label: "يستقبلك السائق عند الحدود", detail: `عند نقطة متفق عليها بعد عبورك ${arFrom}.` },
        { label: "الوصول", detail: `التوصيل عند عنوانك في ${arTo} أو المبنى الطرفي.` },
      ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Border Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <BorderToCityRouteView
            eyebrow="نقل الوصول السعودي"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            borderLabel={arFrom}
            destinationLabel={arTo}
            facts={[
              { label: "المسافة", value: distance, emphasis: true },
              { label: "مدة القيادة الصافية", value: arPureDrivingTime(duration), emphasis: true },
              { label: "المنفذ الحدودي", value: crossingFacts.crossingName },
            ]}
            afterBorderHeading="ماذا يحدث بعد الحدود؟"
            afterBorderIntro={page.intro}
            afterBorderSteps={afterBorderSteps}
            meetingHeading="لقاء سائقك"
            meetingParagraphs={meetingParagraphs}
            responsibilityHeading="ما نتولاه مقابل ما تتحكم به سلطات الحدود"
            responsibilityIntro="تنطوي أي رحلة وصول عابرة للحدود على نوعين مختلفين من المسؤولية — من المفيد توضيح الفرق بينهما."
            companyControlsLabel="ما نتولاه"
            companyControls={crossingFacts.companyControls}
            authorityControlsLabel="ما تتحكم به سلطات الحدود"
            authorityControls={crossingFacts.authorityControls}
            borderPageHref={undefined}
            borderPageLabel={undefined}
            documentsHeading="المستندات التي يجب تجهيزها"
            documentsIntro={crossingFacts.documentsIntro}
            documentsItems={crossingFacts.documentsItems}
            documentsDisclaimer={crossingFacts.documentsDisclaimer}
            roadJourneyHeading={roadJourneyHeading}
            roadJourneyParagraphs={roadJourneyParagraphs}
            destinationHeading={destinationHeading}
            destinationParagraphs={destinationParagraphs}
            planningHeading="متى يجب حجز هذا النقل؟"
            planningIntro="احسب توقيتك بالرجوع من وقت وصولك المطلوب أو موعد رحلتك الجوية، مع مراعاة عدم اليقين في عبور الحدود كهامش لا كرقم ثابت."
            planningPoints={[
              "مدة القيادة الصافية تقدير لا وعد بموعد وصول محدد",
              "توقيت عبور الحدود هو المتغير الأكبر، لا القيادة نفسها",
              "شاركنا وقت عبورك المتوقع عند الحجز",
              "أخبرنا إن كنت تواصل رحلة جوية لنخطط الهامش المناسب",
            ]}
            vehicleHeading="المركبة والأمتعة"
            vehicleText="نحدد حجم المركبة — صالون أو SUV أو فان — حسب عدد ركابك وأمتعتك. أخبرنا بالتفاصيل عند طلب عرض السعر."
            whoSuitsHeading="لمن يناسب هذا النقل"
            whoSuits={[
              { title: "المسافرون الداخلون بريًا إلى السعودية", description: "مركبة مؤكدة بانتظارك على الجانب السعودي بدلًا من ترتيب توصيلة عند الحدود نفسها." },
              { title: "مسافرو الأعمال والمجموعات", description: "رحلة واحدة بسعر ثابت حتى وجهتك، مع هامش زمني لعدم اليقين الحدودي." },
              { title: "العائلات القادمة برًا", description: "مركبة SUV أو فان تُبقي الجميع وأمتعتهم معًا طوال الرحلة." },
            ]}
            checklistHeading="قائمة تحقق عملية للوصول"
            checklist={[
              "جواز سفر ومستندات الدخول السعودي في متناول يدك عند العبور",
              `وجهتك الدقيقة في ${arTo} أو تفاصيل رحلتك الجوية`,
              "تأكيد الحجز أو بيانات التواصل مع السائق إن وُجدت",
              "عدد الركاب والأمتعة",
              "هامش زمني واقعي، لأن توقيت العبور الحدودي يتفاوت",
            ]}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            reverseHeading={arReversePage ? "تخطط للرحلة في الاتجاه المعاكس؟" : undefined}
            reverseText={arReversePage ? `تحتاج الوصول إلى الحدود من ${arTo}؟ نوفر أيضًا نقلًا خاصًا في هذا الاتجاه.` : undefined}
            reverseLinkLabel={
              arReversePage
                ? (() => {
                    const t = parseArabicFromTo(arReversePage.h1);
                    return t ? `${t.from} إلى ${t.to}` : arReversePage.h1;
                  })()
                : undefined
            }
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArBorderToCityRoutes.length > 0 ? "رحلات وصول حدودية أخرى" : undefined}
            relatedRoutes={relatedArBorderToCityRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText="شاركنا وقت عبورك المتوقع ووجهتك، ونرد بسعر ثابت قبل يوم سفرك."
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لنقل وصولك السعودي."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }

    const jordanDirection = enRoute ? saudiJordanDirection(enRoute) : null;
    if (enRoute && jordanDirection && isSaudiJordanRoute(enRoute)) {
      const parsed = parseArabicFromTo(page.h1);
      const arFrom = parsed?.from ?? enRoute.from;
      const arTo = parsed?.to ?? enRoute.to;
      const distance = page.distance ?? enRoute.distance;
      const duration = page.duration ?? enRoute.duration;
      const isAlUlaRoute = enRoute.slug.includes("alula");
      const isLongHaul = enRoute.slug.includes("madinah");

      const enReverse = routes.find((r) => r.from === enRoute.to && r.to === enRoute.from);
      const arReversePage = enReverse
        ? arPages.find((p) => p.type === "route" && p.enPath === `/routes/${enReverse.slug}`)
        : undefined;

      const relatedArSaudiJordanRoutes = routes
        .filter((r) => r.slug !== enRoute.slug && r.slug !== enReverse?.slug && isSaudiJordanRoute(r))
        .map((r) => arPages.find((p) => p.type === "route" && p.enPath === `/routes/${r.slug}`))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map((p) => {
          const t = parseArabicFromTo(p.h1);
          return { label: t ? `${t.from} إلى ${t.to}` : p.h1, distance: p.distance, duration: p.duration, href: arPath(p) };
        });

      const saudiSideEnLabel = jordanDirection === "saudi-to-jordan" ? enRoute.from : enRoute.to;
      const originSaudiEnCity = getCity(
        enRoute.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === saudiSideEnLabel.toLowerCase()) ??
          enRoute.relatedCitySlugs[0] ??
          ""
      );
      const arCityPage = originSaudiEnCity
        ? arPages.find((p) => p.type === "city" && p.enPath === `/taxi-service/${originSaudiEnCity.slug}`)
        : undefined;

      const hubLinks = [
        ...(arCityPage ? [{ label: `خدمة تاكسي ${arCityPage.breadcrumbs[arCityPage.breadcrumbs.length - 1]?.name ?? ""}`, href: arPath(arCityPage) }] : []),
        { label: "النقل عبر الحدود", href: "/ar/النقل-عبر-الحدود" },
      ];

      const journeyHeading = page.sections[0]?.heading ?? "رحلة الطريق";
      const journeyParagraphs = page.sections[0]?.paragraphs ?? [page.intro];
      const borderHeading = page.sections[1]?.heading ?? `عبور منفذ ${arSaudiJordanCrossingFacts.crossingName}`;
      const borderParagraphs = page.sections[1]?.paragraphs ?? [];
      const destinationHeading = page.sections[2]?.heading ?? `الوصول إلى ${arTo}`;
      const destinationParagraphs = page.sections[2]?.paragraphs ?? [];

      const timeline = jordanDirection === "saudi-to-jordan"
        ? [
            { label: `المغادرة من ${arFrom}`, detail: "الاستلام من عنوانك." },
            { label: "الطريق السريع", detail: "التوجه نحو منفذ الحديثة." },
            { label: "منفذ الحديثة", detail: "إجراءات الخروج السعودية / الدخول الأردنية." },
            { label: "رحلة الطريق الأردنية", detail: `التوجه نحو ${arTo}.` },
            { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
          ]
        : [
            { label: `المغادرة من ${arFrom}`, detail: "الاستلام من عنوانك." },
            { label: "رحلة الطريق الأردنية", detail: "التوجه نحو الحدود." },
            { label: "منفذ العمري", detail: "إجراءات الخروج الأردنية / الدخول السعودية." },
            { label: "الطريق السعودي", detail: `التوجه نحو ${arTo}.` },
            { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
          ];

      const planningHeading = "متى يجب أن أغادر؟";
      const planningIntro = isLongHaul
        ? "رحلة بهذا الطول لا ينبغي أن تُقطع دفعة واحدة — خطط ليوم سفر حقيقي مع مبيت ليلي."
        : "احسب موعد مغادرتك مع هامش حقيقي لعبور الحدود، لا لمدة القيادة فقط.";
      const planningPoints = isLongHaul
        ? [
            "14 إلى 15 ساعة قيادة صافية قبل إضافة المنفذ",
            "تُقسَّم الرحلة واقعيًا على يومين مع مبيت ليلي، غالبًا قرب تبوك",
            "محطات راحة حقيقية للوجبات والصلاة والنوم",
            "ناقش خطتك معنا بالتفصيل قبل الحجز نظرًا للطول والمستندات المطلوبة",
          ]
        : [
            `${arPureDrivingTime(duration)} من القيادة الصافية قبل إضافة المنفذ`,
            "عبور الحدود هو الجزء الأصعب توقعًا في الرحلة، لا القيادة نفسها",
            "مغادرة مبكرة تُبقي اليوم كاملاً مريحًا لا متسرعًا",
            "شاركنا أي خطط لاحقة عند الحجز لنقدم إرشادًا حول التوقيت",
          ];

      const vehicleText = "نستخدم مركبات نظيفة ومكيّفة مختارة للمسافات الطويلة، مطابقة لمجموعتك وأمتعتك، مع محطات راحة مدرجة حسب الحاجة.";
      const whoSuits = isLongHaul
        ? [
            { title: "العائلات أو المجموعات الكبيرة بأمتعة كثيرة", description: "حمولة مركبة كاملة يصعب أو يكلف نقلها جوًا." },
            { title: "من يفضل عدم الطيران", description: "بديل طويل حقيقي لمن يفضل البقاء على الطريق." },
            { title: "من يجمع بين الأردن ورحلة سعودية أوسع", description: "خيار مدروس وراقٍ، لا الأسرع." },
          ]
        : [
            { title: "من يفضل الاستمرارية من الباب للباب", description: "دون تسجيل دخول في مطار أو حدود وزن، ودون ترتيب شيء في الطرف الآخر." },
            { title: "العائلات والمجموعات المسافرة معًا", description: "مركبة واحدة للجميع، غالبًا أكثر راحة واقتصادًا من رحلات وسيارات منفصلة." },
            { title: "المقيمون والمسافرون الجامعون بين البلدين", description: "خيار عملي نظرًا لقرب المسافة النسبي." },
          ];

      const comparisonIntro = isLongHaul
        ? "الطيران هو الخيار المنطقي لمعظم الناس نظرًا للمسافة — نقول ذلك بصدق بدلًا من المبالغة في مزايا القيادة."
        : "يستحق هذا المسار المقارنة بالطيران بدلًا من افتراض أن أحد الخيارين أفضل تلقائيًا.";
      const comparison = [
        { criterion: "الوقت الإجمالي من الباب للباب", road: isLongHaul ? "نحو 1,300 كم، تُقسَّم عادة على يومين مع مبيت ليلي" : "يوم واحد: القيادة على الطريق ثم عبور الحدود", flight: "أسرع جوًا، مع النقل والإجراءات في طرفي الرحلة" },
        { criterion: "الأمتعة", road: "دون حدود وزن ضمن سعة المركبة", flight: "حدود أمتعة شركة الطيران ورسوم إضافية" },
        { criterion: "تجربة الحدود", road: "عبور بري واحد، يتولاه سائقك", flight: "إجراءات جوازات وجمارك في كل مطار" },
        { criterion: "لمن يناسب", road: isLongHaul ? "مجموعات كبيرة بأمتعة كثيرة، أو تفضيل حقيقي لعدم الطيران" : "معظم المسافرين الراغبين برحلة برية مباشرة", flight: "معظم المسافرين نظرًا للمسافة" },
      ];

      const bookingSteps = isLongHaul
        ? [
            { label: "ناقش خطتك", detail: "نظرًا للطول، نوصي بمناقشة متطلباتك معنا بالتفصيل أولًا." },
            { label: "شارك موقع الاستلام والوجهة", detail: `نقطة استلامك في ${arFrom} ووجهتك في ${arTo}.` },
            { label: "استلم سعرًا ثابتًا", detail: "يُتفق عليه بمجرد تحديد الخطة، بما فيها أي ترتيب مبيت ليلي." },
            { label: "رحلة يومين والوصول", detail: "محطات راحة، مبيت ليلي، عبور الحدود، ثم الوصول." },
          ]
        : [
            { label: "شارك موقع الاستلام والوجهة", detail: `نقطة استلامك في ${arFrom} ووجهتك في ${arTo}.` },
            { label: "استلم سعرًا ثابتًا", detail: "يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." },
            { label: "يستقبلك السائق", detail: "في موعدك المتفق عليه، مع تخطيط مسبق لمحطات الراحة." },
            { label: "عبور الحدود والوصول", detail: `يتولى سائقك إجراءات ${arSaudiJordanCrossingFacts.crossingName}، ثم الوصول إلى ${arTo}.` },
          ];

      const checklist = isLongHaul
        ? [
            "جواز سفر ساري وتصريح الدخول اللازم لجنسيتك",
            "وثائق المركبة الصحيحة لعبور حدودي بمركبة",
            "خطة لمبيت ليلي في منتصف الرحلة",
            "عدد الركاب والأمتعة",
            "مناقشة واضحة معنا حول سبب اختيارك القيادة، لننصحك بصدق",
          ]
        : [
            "جواز سفر ساري وتصريح الدخول اللازم لجنسيتك",
            "وثائق المركبة الصحيحة لعبور حدودي بمركبة",
            `نقطة الاستلام الدقيقة في ${arFrom} والوجهة في ${arTo}`,
            "عدد الركاب والأمتعة",
            "هامش زمني واقعي لعبور الحدود",
          ];

      return (
        <>
          <SchemaScript
            schema={[
              breadcrumbSchema(page.breadcrumbs),
              serviceSchema({
                name: page.h1,
                description: page.intro,
                path: arPath(page),
                serviceType: "Border Transfer",
                areaServed: "المملكة العربية السعودية",
              }),
              faqSchema(page.faqs),
            ]}
          />
          <SaudiJordanRouteView
            eyebrow="رحلة دولية سعودية-أردنية"
            h1={page.h1}
            dek={page.intro}
            heroImage={page.heroImage ?? heroFor(page)}
            heroAlt={page.heroAlt ?? page.h1}
            originLabel={arFrom}
            destinationLabel={arTo}
            facts={[
              { label: "المسافة", value: distance, emphasis: true },
              { label: "مدة القيادة الصافية", value: arPureDrivingTime(duration), emphasis: true },
              { label: "المنفذ الحدودي", value: arSaudiJordanCrossingFacts.crossingName },
            ]}
            timelineHeading="كيف تسير الرحلة"
            timeline={timeline}
            heritageLinkHeading={isAlUlaRoute ? "الربط بين العلا والبتراء" : undefined}
            heritageLinkParagraphs={
              isAlUlaRoute
                ? ["هذا مسار طبيعي للمسافرين الراغبين بالجمع بين مقابر الأنباط في الحِجر بالعلا والبتراء في الأردن — أهم موقعين نبطيين في المنطقة. تنقلك سيارة خاصة وأمتعتك من الباب للباب بينهما، دون الحاجة لتنسيق رحلة طيران وتوصيل منفصل."]
                : undefined
            }
            journeyHeading={journeyHeading}
            journeyParagraphs={journeyParagraphs}
            borderHeading={borderHeading}
            borderParagraphs={borderParagraphs}
            responsibilityIntro="تنطوي أي رحلة عابرة للحدود على نوعين مختلفين من المسؤولية — من المفيد توضيح الفرق بينهما."
            companyControlsLabel={arSaudiJordanCrossingFacts.companyControlsLabel}
            companyControls={arSaudiJordanCrossingFacts.companyControls}
            authorityControlsLabel={arSaudiJordanCrossingFacts.authorityControlsLabel}
            authorityControls={arSaudiJordanCrossingFacts.authorityControls}
            borderPageHref={undefined}
            borderPageLabel={undefined}
            documentsHeading="المستندات المطلوب تجهيزها"
            documentsIntro={arSaudiJordanCrossingFacts.documentsIntro}
            documentsItems={arSaudiJordanCrossingFacts.documentsItems}
            documentsDisclaimer={arSaudiJordanCrossingFacts.documentsDisclaimer}
            planningHeading={planningHeading}
            planningIntro={planningIntro}
            planningPoints={planningPoints}
            destinationHeading={destinationHeading}
            destinationParagraphs={destinationParagraphs}
            vehicleHeading="المركبة والأمتعة"
            vehicleText={vehicleText}
            whoSuitsHeading="لمن تناسب هذه الرحلة"
            whoSuits={whoSuits}
            comparisonHeading="القيادة مقابل الطيران"
            comparisonIntro={comparisonIntro}
            comparison={comparison}
            checklistHeading="قائمة تحقق عملية"
            checklist={checklist}
            bookingHeading="كيف يتم الحجز"
            bookingSteps={bookingSteps}
            reverseHeading={arReversePage ? "تخطط للرحلة في الاتجاه المعاكس؟" : undefined}
            reverseText={arReversePage ? "نوفر أيضًا نقلًا خاصًا في هذا الاتجاه، بتخطيط يراعي ما يختلف عند السفر بهذا الشكل." : undefined}
            reverseLinkLabel={
              arReversePage
                ? (() => {
                    const t = parseArabicFromTo(arReversePage.h1);
                    return t ? `${t.from} إلى ${t.to}` : arReversePage.h1;
                  })()
                : undefined
            }
            reverseHref={arReversePage ? arPath(arReversePage) : undefined}
            relatedRoutesHeading={relatedArSaudiJordanRoutes.length > 0 ? "مسارات سعودية-أردنية أخرى" : undefined}
            relatedRoutes={relatedArSaudiJordanRoutes}
            hubLinksHeading={hubLinks.length > 0 ? "قد يهمك أيضًا:" : undefined}
            hubLinks={hubLinks}
            faqsHeading="الأسئلة الشائعة"
            faqs={page.faqs}
            ctaHeading="جاهز لحجز هذا النقل؟"
            ctaText="شاركنا نقطة الاستلام والوجهة وتاريخ السفر، ونرد بسعر ثابت قبل السفر."
            ctaLabel="اطلب عرض سعر"
            ctaHref="/ar/اطلب-عرض-سعر"
            formHeading={`${arFrom} ← ${arTo}`}
            formSubheading="سعر ثابت لرحلتك الدولية."
            formSlot={
              <QuoteForm
                serviceType={`نقل ${arFrom} إلى ${arTo}`}
                route={`${enRoute.from} to ${enRoute.to}`}
                defaultPickup={enRoute.from}
                defaultDropoff={enRoute.to}
              />
            }
            crumbs={page.breadcrumbs}
          />
        </>
      );
    }
  }

  if (page.type === "serviceV2" && page.serviceV2) {
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.serviceV2.dek,
              path: page.enPath,
              serviceType: serviceTypeFor(page.type),
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(page.serviceV2.faqs),
          ]}
        />
        <ServiceV2View {...page.serviceV2} crumbs={page.breadcrumbs} labels={arServiceV2Labels} />
      </>
    );
  }

  if (page.type === "journey" && page.journey) {
    return (
      <>
        <SchemaScript
          schema={[breadcrumbSchema(page.breadcrumbs), faqSchema(page.journey.faqs)]}
        />
        <JourneyPageView
          {...page.journey}
          h1={page.h1}
          from={page.journeyFrom ?? ""}
          to={page.journeyTo ?? ""}
          crumbs={page.breadcrumbs}
          labels={arJourneyLabels}
        />
      </>
    );
  }

  if (page.type === "about") {
    const aboutFaqsAr = page.faqs.slice(0, 20);
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: serviceTypeFor(page.type),
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(aboutFaqsAr),
          ]}
        />

        <section className="bg-midnight text-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
              {page.breadcrumbs.map((c, i) => (
                <span key={c.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === page.breadcrumbs.length - 1 ? (
                    <span className="text-white/85">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">{page.h1}</h1>
            {page.intro && <p className="mt-4 max-w-2xl text-lg text-white/85">{page.intro}</p>}
          </div>
        </section>

        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {page.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-xl font-bold text-ink sm:text-2xl">{s.heading}</h2>
                  <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {aboutFaqsAr.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-bold text-ink">الأسئلة الشائعة</h2>
                <div className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline">
                  {aboutFaqsAr.map((f, i) => (
                    <details key={i} className="group p-5" {...(i === 0 ? { open: true } : {})}>
                      <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                        {f.question}
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <CTASection
          title="هل أنت مستعد لحجز رحلتك؟"
          subtitle="أرسل تفاصيل رحلتك الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
          whatsappLabel={dict.cta.getAQuote}
          contactLabel={dict.cta.contactUs}
          contactHref="/ar/اتصل-بنا"
        />
      </>
    );
  }

  if (page.type === "blog") {
    const blogFaqs = page.faqs.slice(0, 20);
    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(page.breadcrumbs),
            serviceSchema({
              name: page.h1,
              description: page.intro,
              path: arPath(page),
              serviceType: serviceTypeFor(page.type),
              areaServed: "المملكة العربية السعودية",
            }),
            faqSchema(blogFaqs),
          ]}
        />

        {/* Hero — matches the English blog post's photo-free midnight
            treatment; Arabic blog entries carry no author/category/date
            fields (a thinner content model than the DB-driven English
            posts), so only h1/intro/breadcrumbs are shown. */}
        <section className="bg-midnight text-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
              {page.breadcrumbs.map((c, i) => (
                <span key={c.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === page.breadcrumbs.length - 1 ? (
                    <span className="text-white/85">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">{page.h1}</h1>
            {page.intro && <p className="mt-4 max-w-2xl text-lg text-white/85">{page.intro}</p>}
          </div>
        </section>

        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {page.contentHtml ? (
              <BlogContent html={page.contentHtml} />
            ) : (
              <div className="space-y-8">
                {page.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-ink sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {blogFaqs.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-bold text-ink">الأسئلة الشائعة</h2>
                <div className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline">
                  {blogFaqs.map((f, i) => (
                    <details key={i} className="group p-5" {...(i === 0 ? { open: true } : {})}>
                      <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                        {f.question}
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <VehicleOptions
          heading="اختر مركبتك"
          subheading="من السيارات الاقتصادية إلى الحافلات الصغيرة الجماعية — اختر ما يناسب مجموعتك وأمتعتك."
          background="muted"
          lang="ar"
        />
        <HowItWorks
          heading={dict.howItWorks.heading}
          subheading={dict.howItWorks.subheading}
          steps={dict.howItWorks.steps}
          stepLabel={(n) => dict.howItWorks.step.replace("{n}", String(n))}
          background="white"
        />
        <CTASection
          title="هل أنت مستعد لحجز رحلتك؟"
          subtitle="أرسل تفاصيل رحلتك الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
          whatsappLabel={dict.cta.getAQuote}
          contactLabel={dict.cta.contactUs}
          contactHref="/ar/اتصل-بنا"
        />
      </>
    );
  }

  const faqs = page.faqs.slice(0, 20);
  const isBookable = ["service", "airport", "city", "route", "hotel-transfer", "attraction"].includes(
    page.type
  );

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(page.breadcrumbs),
          serviceSchema({
            name: page.h1,
            description: page.intro,
            path: arPath(page),
            serviceType: serviceTypeFor(page.type),
            areaServed: "المملكة العربية السعودية",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.intro}
        crumbs={page.breadcrumbs}
        backgroundImage={page.heroImage ?? heroFor(page)}
        backgroundAlt={page.heroAlt ?? page.h1}
        ctaLabel={dict.cta.getAQuote}
        contactLabel={dict.cta.contactUs}
        contactHref="/ar/اتصل-بنا"
        showCtas={!isBookable && page.type !== "distance"}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {(page.distance || page.duration) && (
              <div className="flex flex-wrap gap-3">
                {page.duration && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <Clock className="size-4 text-gold" /> {page.duration}
                  </span>
                )}
                {page.distance && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <MapPin className="size-4 text-gold" /> {page.distance}
                  </span>
                )}
              </div>
            )}

            {page.type === "distance" ? (
              <div className="mt-6">
                {page.quickAnswer && (
                  <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-navy">الإجابة السريعة</h2>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-sm font-semibold text-navy">مسافة القيادة</p>
                          <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingDistance}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-sm font-semibold text-navy">مدة القيادة</p>
                          <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingTime}</p>
                        </div>
                      </div>
                      {page.quickAnswer.straightLineDistance && (
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-semibold text-navy">المسافة المباشرة (خط مستقيم)</p>
                            <p className="text-sm text-muted-foreground">{page.quickAnswer.straightLineDistance}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{page.quickAnswer.note}</p>
                  </div>
                )}

                <div className="mt-8 space-y-8">
                  {page.sections.map((s) => (
                    <div key={s.heading}>
                      <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                        {s.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {page.transportOptions && page.transportOptions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">طرق السفر</h2>
                    <div className="mt-4 space-y-4">
                      {page.transportOptions.map((t) => (
                        <div key={t.mode} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                          <h3 className="text-lg font-semibold text-navy">{t.mode}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            <span className="font-medium text-navy">المدة: </span>
                            {t.duration}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            <span className="font-medium text-navy">الأنسب لـ: </span>
                            {t.suitability}
                          </p>
                          <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-navy">المزايا: </span>
                              {t.advantages}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-navy">القيود: </span>
                              {t.limitations}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {page.ctaRoutePath && page.ctaLabel && (
                  <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6">
                    <p className="text-sm text-navy">
                      هل تخطط لهذه الرحلة بسيارة خاصة؟ اطّلع على{" "}
                      <Link
                        href={page.ctaRoutePath}
                        className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
                      >
                        {page.ctaLabel}
                      </Link>{" "}
                      للحصول على سعر ثابت وخيارات المركبات والحجز.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-6 space-y-8">
                {page.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isBookable && (
            <div className="lg:col-span-2">
              <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{dict.cta.getAQuote}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  سعر ثابت لرحلتك، نرد عليك عبر واتساب.
                </p>
                <div className="mt-4">
                  <QuoteForm serviceType={page.h1} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {page.type !== "distance" && (
        <VehicleOptions
          heading="اختر مركبتك"
          subheading="من السيارات الاقتصادية إلى الحافلات الصغيرة الجماعية — اختر ما يناسب مجموعتك وأمتعتك."
          background="muted"
          lang="ar"
        />
      )}
      {page.type !== "distance" && (
        <HowItWorks
          heading={dict.howItWorks.heading}
          subheading={dict.howItWorks.subheading}
          steps={dict.howItWorks.steps}
          stepLabel={(n) => dict.howItWorks.step.replace("{n}", String(n))}
          background="white"
        />
      )}
      <FAQSection faqs={faqs} heading={dict.faq.heading} background="muted" />

      {page.type === "distance" && page.relatedLinks && page.relatedLinks.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-navy">صفحات ذات صلة</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-gold"
                >
                  {l.label}
                  <ArrowRight className="size-3.5 text-gold rtl:rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.type === "distance" && page.sources && page.sources.length > 0 && (
        <section className="bg-muted py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">المصادر</h2>
            <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              {page.sources.map((s) => (
                <li key={s.url} className="flex items-start gap-1.5">
                  <ExternalLink className="mt-0.5 size-3 shrink-0" />
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="underline decoration-dotted hover:text-navy"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              المسافات وأوقات السفر تقريبية وقد تختلف حسب نقطة الانطلاق الدقيقة، والطريق المُتّبع، وحركة السير أو
              الظروف الموسمية.
            </p>
          </div>
        </section>
      )}

      {page.type !== "distance" && (
        <CTASection
          title="هل أنت مستعد لحجز رحلتك؟"
          subtitle="أرسل تفاصيل رحلتك الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
          whatsappLabel={dict.cta.getAQuote}
          contactLabel={dict.cta.contactUs}
          contactHref="/ar/اتصل-بنا"
        />
      )}
    </>
  );
}
