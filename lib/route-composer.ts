import type { Route, RouteBlock } from "@/data/routes";
import type { Faq } from "@/data/faqs";
import type { JourneyType } from "@/lib/route-journey";
import { journeyTypeLabels } from "@/lib/route-journey";

/**
 * Composes a genuinely journey-type-specific block list for a Saudi
 * domestic city-to-city route, reusing real per-route data (about, notes,
 * richLayout, sections) rather than inventing new facts. Different journey
 * types get a different block order/mix — this is what keeps the 99-route
 * batch from reading as one template with the city names swapped. See
 * lib/route-journey.ts for the classification and
 * components/routes/RouteJourneyView.tsx for the shell that renders this.
 */

function genericJourneySteps(route: Route, type: JourneyType) {
  if (type === "pilgrimage") {
    return [
      { label: `Departure from ${route.from}`, detail: "Pickup arranged at your hotel or address, confirmed in advance." },
      { label: "Road Journey", detail: `${route.distance}, approximately ${route.duration} in free-flowing traffic.` },
      { label: `Arrival in ${route.to}`, detail: "Drop-off at a point near the Haram, confirmed with you before travel." },
    ];
  }
  if (type === "short-regional") {
    return [
      { label: `Pickup in ${route.from}`, detail: "At your hotel, home, or business address." },
      { label: "Short Road Transfer", detail: `${route.distance}, approximately ${route.duration}.` },
      { label: `Drop-off in ${route.to}`, detail: "Direct to your destination address." },
    ];
  }
  return [
    { label: `Departure from ${route.from}`, detail: "Pickup at your hotel, home, or business address." },
    { label: "Highway Journey", detail: `${route.distance}, approximately ${route.duration} of driving.` },
    { label: "Rest Stop Flexibility", detail: "Timing and pacing agreed with you at booking." },
    { label: `Arrival in ${route.to}`, detail: "Direct drop-off at your destination." },
  ];
}

function whoThisRouteSuits(route: Route, type: JourneyType): { title: string; description: string }[] {
  if (type === "pilgrimage") {
    return [
      { title: "Umrah and Hajj pilgrims", description: `Travelling from ${route.from} to ${route.to} with luggage, without the transfers or waiting of a shared shuttle.` },
      { title: "Families and groups", description: "One vehicle for the whole party, sized to passenger and luggage count." },
    ];
  }
  if (type === "tourism") {
    return [
      { title: "Heritage and leisure travellers", description: `A private, door-to-door option for the ${route.from} to ${route.to} journey, at a pace that isn't fixed to a shared tour schedule.` },
      { title: "Multi-stop itineraries", description: "Suits travellers combining this leg with other Saudi destinations rather than a single round trip." },
    ];
  }
  if (type === "short-regional") {
    return [
      { title: "Day-trip and business travel", description: `A direct private transfer between ${route.from} and ${route.to} without arranging a rental car for a short regional trip.` },
      { title: "Airport-connected journeys", description: "Suits travellers combining this leg with an onward flight or arrival." },
    ];
  }
  return [
    { title: "Families and groups avoiding a flight", description: `A single vehicle for the whole ${route.distance} journey, rather than splitting the group across flight bookings.` },
    { title: "Business travellers", description: "Door-to-door timing between two major cities, without an airport connection." },
  ];
}

/**
 * Builds the composed body for a domestic route page. `route.customLayout`
 * (a small pre-existing batch) is NOT touched by this — the page still
 * checks for it first and renders that instead when present.
 */
export function buildRouteBlocks(route: Route, type: JourneyType, reverseHref?: string): RouteBlock[] {
  const blocks: RouteBlock[] = [];

  blocks.push({
    type: "facts",
    heading: "Journey at a Glance",
    layout: "snapshot",
    items: [
      { label: "Distance", value: route.distance },
      { label: "Typical Driving Time", value: route.duration, emphasis: true },
      { label: "Journey Type", value: journeyTypeLabels[type] },
    ],
  });

  const rich = route.richLayout;
  blocks.push({
    type: "timeline",
    heading: "How This Journey Unfolds",
    orientation: "horizontal",
    steps: rich && rich.journeyFlow.length > 0 ? rich.journeyFlow : genericJourneySteps(route, type),
  });

  blocks.push({
    type: "prose",
    heading: `Private Transfer from ${route.from} to ${route.to}`,
    paragraphs: [route.about],
  });

  blocks.push({
    type: "scenarios",
    heading: "Who This Route Suits",
    items: route.whoSuits && route.whoSuits.length > 0 ? route.whoSuits : whoThisRouteSuits(route, type),
  });

  if (route.notes.length > 0) {
    blocks.push({ type: "checklist", heading: "Good to Know About This Route", items: route.notes });
  }

  if (rich?.journeyFacts && rich.journeyFacts.length > 0) {
    blocks.push({ type: "facts", heading: "Journey Facts", items: rich.journeyFacts });
  }

  if (rich?.mapOrigin && rich?.mapDestination) {
    blocks.push({
      type: "map",
      heading: "Route Map",
      note: rich.mapNote,
      origin: rich.mapOrigin,
      destination: rich.mapDestination,
    });
  }

  if (reverseHref) {
    blocks.push({
      type: "prose",
      heading: "Planning the Return Journey",
      paragraphs: [
        `Travelling back the other way? We also provide a private transfer in the opposite direction — see <a href='${reverseHref}'>${route.to} to ${route.from}</a> for fixed pricing and door-to-door pickup on the return leg.`,
      ],
    });
  }

  if (route.sections && route.sections.length > 0) {
    for (const s of route.sections) {
      blocks.push({ type: "prose", heading: s.heading, paragraphs: s.paragraphs });
    }
  }

  return blocks;
}

function typeAwareFaqs(route: Route, type: JourneyType): Faq[] {
  const base: Faq[] = [
    {
      question: `How long does the journey from ${route.from} to ${route.to} usually take?`,
      answer: `The drive covers ${route.distance} and typically takes ${route.duration} in free-flowing traffic. This is pure driving time — allow extra margin for stops, traffic, or an early departure if timing matters.`,
    },
    {
      question: `Can I be picked up from my hotel in ${route.from}?`,
      answer: `Yes. Share your hotel name or address when you book, and your driver comes directly to you rather than a fixed meeting point.`,
    },
  ];

  if (type === "pilgrimage") {
    base.push(
      {
        question: `Can the driver take us straight to our hotel near the Haram in ${route.to}?`,
        answer: "Yes. Drop-off is arranged at a point near the Haram confirmed with you before you travel, so there's no need to navigate the area yourself with luggage.",
      },
      {
        question: "Is this transfer suitable for a family or group travelling together?",
        answer: "Yes. Tell us your passenger and luggage count when you book and we assign a vehicle sized to your group, so everyone travels together.",
      }
    );
  } else if (type === "tourism") {
    base.push({
      question: `What vehicle should I choose for the ${route.from} to ${route.to} trip?`,
      answer: "A sedan suits a solo traveller or couple with light luggage; an SUV or van is better for groups or anyone carrying camera and touring gear.",
    });
  } else if (type === "short-regional") {
    base.push({
      question: "Is this a shared ride or a private vehicle?",
      answer: "Fully private for your booking — no shared rides and no other passengers, even for a short regional trip.",
    });
  } else {
    base.push(
      {
        question: "What happens if traffic affects the journey?",
        answer: `The ${route.duration} estimate is pure driving time in free-flowing traffic. If traffic or road conditions add time on the day, the fixed price you agreed at booking doesn't change.`,
      },
      {
        question: "What vehicle should I choose for a long-distance journey like this?",
        answer: "For a trip of this length we generally recommend an SUV or van over a sedan, for extra comfort and luggage space — mention your group size when booking.",
      }
    );
  }

  base.push({
    question: `How do I book a private transfer from ${route.from} to ${route.to}?`,
    answer: "Share your pickup point, date, time, and passenger count through WhatsApp or our quote form, and we reply with a fixed price before you travel.",
  });

  return base;
}

export function buildRouteFaqs(route: Route, type: JourneyType): Faq[] {
  return (route.faqs && route.faqs.length > 0 ? route.faqs : typeAwareFaqs(route, type)).slice(0, 15);
}

/**
 * Arabic labels for the journey-type facts chip, used by the Arabic route
 * redesign (app/ar/[...slug]/page.tsx, type: "route") alongside this
 * module's `buildArabicRouteBlocks`.
 */
export const arJourneyTypeLabels: Record<JourneyType, string> = {
  pilgrimage: "رحلة دينية",
  tourism: "رحلة سياحية وتراثية",
  "short-regional": "نقل إقليمي قصير",
  "long-distance": "رحلة طويلة بين المدن",
};

/** Best-effort extraction of the Arabic from/to city names out of an
 * existing Arabic route page's H1 (e.g. "نقل خاص من الرياض إلى جدة" or
 * "تاكسي خاص من الرياض إلى مدينة جدة") — every Arabic route entry uses
 * "إلى" as the from/to connector, so this is reliable across the batch
 * without needing a second parallel data field. */
export function parseArabicFromTo(h1: string): { from: string; to: string } | null {
  const m = h1.match(/من\s+(.+?)\s+إلى\s+(.+)$/);
  if (!m) return null;
  return { from: m[1].trim(), to: m[2].trim() };
}

/**
 * Lean Arabic equivalent of buildRouteBlocks — composes a journey-type
 * specific block list from an existing Arabic route page's own content
 * (sections, faqs — already real and unique per page) plus a generated
 * (not fabricated) timeline/scenarios overlay, mirroring the English
 * composer's structure. Used for BOTH the ~108 pre-existing Arabic route
 * pages (redesign — their real sections/faqs are reused as-is) and the 33
 * newly created ones (same shape).
 */
export function buildArabicRouteBlocks(
  type: JourneyType,
  arFrom: string,
  arTo: string,
  distance: string,
  duration: string,
  sections: { heading: string; paragraphs: string[] }[],
  reverseHref?: string,
  reverseArTo?: string
): RouteBlock[] {
  const blocks: RouteBlock[] = [];

  blocks.push({
    type: "facts",
    heading: "الرحلة باختصار",
    layout: "snapshot",
    items: [
      { label: "المسافة", value: distance },
      { label: "مدة القيادة التقريبية", value: duration, emphasis: true },
      { label: "نوع الرحلة", value: arJourneyTypeLabels[type] },
    ],
  });

  const steps =
    type === "pilgrimage"
      ? [
          { label: `الانطلاق من ${arFrom}`, detail: "يتم تأكيد نقطة الالتقاء مع السائق قبل السفر." },
          { label: "الرحلة على الطريق", detail: `${distance}، نحو ${duration} في حركة سير طبيعية.` },
          { label: `الوصول إلى ${arTo}`, detail: "التوصيل إلى نقطة قريبة من الحرم، تُحدَّد معك مسبقًا." },
        ]
      : type === "short-regional"
        ? [
            { label: `الانطلاق من ${arFrom}`, detail: "من فندقك أو منزلك أو مقر عملك." },
            { label: "رحلة قصيرة", detail: `${distance}، نحو ${duration}.` },
            { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
          ]
        : [
            { label: `الانطلاق من ${arFrom}`, detail: "استلام من الفندق أو المنزل أو مقر العمل." },
            { label: "رحلة على الطريق السريع", detail: `${distance}، نحو ${duration} من القيادة.` },
            { label: "مرونة في التوقف", detail: "يُتفق على التوقيت ووتيرة الرحلة عند الحجز." },
            { label: `الوصول إلى ${arTo}`, detail: "توصيل مباشر إلى وجهتك." },
          ];
  blocks.push({ type: "timeline", heading: "كيف تسير هذه الرحلة", orientation: "horizontal", steps });

  const whoSuits =
    type === "pilgrimage"
      ? [
          { title: "معتمرون وحجاج", description: `التنقل من ${arFrom} إلى ${arTo} مع الأمتعة، دون تنقلات أو انتظار حافلة مشتركة.` },
          { title: "العائلات والمجموعات", description: "مركبة واحدة لكامل المجموعة، بحجم يناسب عدد الركاب والأمتعة." },
        ]
      : type === "tourism"
        ? [
            { title: "مسافرو السياحة والتراث", description: `خيار خاص من الباب إلى الباب لرحلة ${arFrom} إلى ${arTo}، بوتيرة لا ترتبط بجدول جولة جماعية.` },
            { title: "برامج تشمل أكثر من وجهة", description: "يناسب من يجمع هذه المرحلة مع وجهات أخرى ضمن رحلته." },
          ]
        : type === "short-regional"
          ? [
              { title: "مشاوير العمل والزيارات القصيرة", description: `تنقل خاص مباشر بين ${arFrom} و${arTo} دون الحاجة لاستئجار سيارة.` },
              { title: "رحلات مرتبطة بالمطار", description: "يناسب من يربط هذه المرحلة برحلة جوية قادمة أو مغادرة." },
            ]
          : [
              { title: "العائلات والمجموعات", description: `مركبة واحدة لكامل الرحلة بين ${arFrom} و${arTo}، بدلًا من حجز تذاكر طيران منفصلة.` },
              { title: "مسافرو الأعمال", description: "توقيت مباشر من الباب إلى الباب بين مدينتين رئيسيتين." },
            ];
  blocks.push({ type: "scenarios", heading: "من تناسبه هذه الرحلة", items: whoSuits });

  if (reverseHref && reverseArTo) {
    blocks.push({
      type: "prose",
      heading: "التخطيط لرحلة العودة",
      paragraphs: [
        `تخطط للعودة؟ نوفر أيضًا نقلًا خاصًا في الاتجاه المعاكس — راجع <a href='${reverseHref}'>${reverseArTo}</a> لمعرفة السعر الثابت وتفاصيل الاستلام في رحلة العودة.`,
      ],
    });
  }

  for (const s of sections) {
    blocks.push({ type: "prose", heading: s.heading, paragraphs: s.paragraphs });
  }

  return blocks;
}
