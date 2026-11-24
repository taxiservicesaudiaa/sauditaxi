import type { DistanceGuideV2Content } from "@/components/distance-v2/DistanceGuideV2View";

/**
 * "Road Distance Guide V2" — a small batch of informational /distance/{slug}
 * pages using a third, deliberately distinct visual design (see
 * components/distance-v2/DistanceGuideV2View.tsx) from both the original
 * distance-page template (data/distance-pages.ts) and the "rich journey"
 * design (data/journey-pages.ts). Purely additive: wired into
 * app/(main)/distance/[slug]/page.tsx and app/sitemap.ts alongside the
 * other two collections, none of which are modified.
 *
 * These pages are deliberately informational, not commercial: the only
 * link to a booking flow is the single `cta` block at the end of each
 * page's blocks, pointing at the matching /routes/{slug} commercial page.
 */

export interface DistanceGuideV2Page extends DistanceGuideV2Content {
  slug: string;
  from: string;
  to: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

const BORDER_SOURCES = [
  { label: "Saudi Arabia–United Arab Emirates border (Wikipedia)", url: "https://en.wikipedia.org/wiki/Saudi_Arabia%E2%80%93United_Arab_Emirates_border" },
  { label: "Highway 10, Saudi Arabia (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
  { label: "Al Batha–Ghuwaifat border crossing — practical crossing information", url: "https://bordercrossinghub.com/batha-al-batha-uae-side-border-crossing-2/" },
];

export const distanceGuideV2Pages: DistanceGuideV2Page[] = [
  // ── 1. Riyadh → Abu Dhabi ────────────────────────────────────────────────
  {
    slug: "riyadh-to-abu-dhabi-distance",
    from: "Riyadh",
    to: "Abu Dhabi",
    h1: "Riyadh to Abu Dhabi Distance: How Far Is the Road Journey, and What Does the Al Batha Crossing Add?",
    metaTitle: "Riyadh to Abu Dhabi Road Distance & Journey Time",
    metaDescription:
      "How far is Riyadh from Abu Dhabi by road? Verified distance (~880-900 km), driving time, the Al Batha border, and what the journey involves.",
    eyebrow: "Road Distance Guide",
    dek: "How far Riyadh and Abu Dhabi really are by road, what the Al Batha border adds to the trip, and what the drive itself involves.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈880-900 km",
        segments: [
          { from: "Riyadh", to: "Al Batha Border", km: 530, displayValue: "~530 km" },
          { from: "Al Batha Border", to: "Abu Dhabi", km: 358, displayValue: "~355-360 km" },
        ],
        note: "Independently verified road-distance estimates, not a live routing calculation. Older figures circulating elsewhere (around 750 km) understate the actual road distance — see sources below.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Abu Dhabi via Highway 10 and the Al Batha / Al Ghuwaifat crossing.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Abu Dhabi, United Arab Emirates",
      },
      {
        type: "stages",
        heading: "How the Journey Breaks Down",
        steps: [
          { label: "Riyadh departure", detail: "Onto Highway 10, heading south-east toward Al Kharj." },
          { label: "Saudi road journey", detail: "A long, flat desert stretch via Haradh, clipping the north-western corner of the Empty Quarter." },
          { label: "Saudi–UAE border", detail: "Saudi exit formalities at Al Batha, then Emirati entry at Al Ghuwaifat." },
          { label: "UAE road journey", detail: "Onto the E11 corridor heading toward Abu Dhabi." },
          { label: "Abu Dhabi arrival", detail: "The final stretch into the city." },
        ],
        note: "Stage order reflects the standard highway routing; the exact roads suggested can vary slightly by GPS provider.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~10-10.5 hours",
        totalJourney: "Often 12+ hours in practice",
        factors: [
          "Border processing time is highly variable — reports range from well under an hour to several hours at busy periods",
          "A rest stop is realistic on a drive this length, and sensible on the desert stretch",
          "Departure time affects how much city traffic you meet leaving Riyadh and entering Abu Dhabi",
        ],
      },
      {
        type: "borderNote",
        heading: "The Al Batha / Al Ghuwaifat Border",
        paragraphs: [
          "The crossing operates around the clock. Saudi exit processing happens at Al Batha; Emirati entry processing, a short distance further, happens at Al Ghuwaifat. Vehicles are typically inspected on both sides, and private cars continuing into the UAE need mandatory third-party UAE vehicle insurance, generally purchased at the border itself.",
          "Passport and visa requirements for entering the UAE depend on nationality and are updated from time to time — this page doesn't attempt to state them, since getting that wrong could genuinely disrupt a trip. Check current requirements with Saudi Arabia's passport authority (Jawazat) and the UAE's federal immigration authority before travelling.",
        ],
      },
      {
        type: "prose",
        heading: "The Road Itself",
        narrow: true,
        paragraphs: [
          "Highway 10 runs largely straight and flat for most of this route, through open desert with long gaps between towns and services. The section near the border clips the north-western corner of the Rub' al Khali (the Empty Quarter) — the road itself is a modern highway, but the surrounding landscape is genuinely remote.",
          "On the UAE side, the E11 is a faster, more built-up corridor as it approaches Abu Dhabi, with services becoming noticeably more frequent than on the Saudi stretch.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "When should I leave Riyadh?", answer: "An early departure keeps you ahead of the busier mid-morning period at the border and gives more daylight for the desert stretch." },
          { question: "What should I allow extra time for?", answer: "The border, primarily — its timing is the least predictable part of the whole trip, more so than the driving itself." },
          { question: "How should I treat the ~10-hour estimate?", answer: "As pure driving time in free-flowing conditions. Add a rest stop and the border, and a realistic total is closer to 12+ hours door to door." },
          { question: "Does luggage volume affect the drive?", answer: "Not the driving time, but it's worth confirming vehicle capacity in advance if you're travelling with a lot of it — see the transfer options linked below." },
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Abu Dhabi",
        paragraphs: [
          "After roughly ten hours on the road plus the border, arriving in Abu Dhabi at the end of the E11 corridor marks a genuine change of pace — city traffic, taller buildings, and considerably more services than the desert stretch behind you. If your journey continues to a specific address, it's worth having that confirmed in advance, since a long drive is not the moment to be figuring out final-mile directions.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "If you only need the Saudi-side leg, see our guide to the <a href='/distance/riyadh-to-al-batha-border-distance'>road distance from Riyadh to the Al Batha border</a>. For the journey in the opposite direction, see <a href='/distance/abu-dhabi-to-riyadh-distance'>Abu Dhabi to Riyadh</a>.",
      },
      {
        type: "cta",
        text: "Planning to travel this route by private vehicle?",
        linkLabel: "See our Riyadh to Abu Dhabi private transfer",
        linkPath: "/routes/riyadh-to-abu-dhabi",
      },
    ],
    faqs: [
      { question: "How is the ~880-900 km figure calculated?", answer: "It's derived from independent road-distance sources (not a single live routing query), cross-checked by adding the verified Riyadh-to-border distance (~530 km) to the verified border-to-Abu-Dhabi distance (~355-360 km)." },
      { question: "Why do some sources show a shorter distance, around 750 km?", answer: "Older or less-detailed estimates sometimes understate this route. The 750 km figure doesn't match the independently verified sources we checked for this page and appears to be inaccurate." },
      { question: "Is the driving time the same in both directions?", answer: "The distance is effectively the same either way; timing differs mainly with traffic and border queues on the day, not the direction of travel." },
      { question: "Does the distance change depending on the exact route taken?", answer: "Slightly — GPS providers occasionally suggest marginally different roads through Al Kharj or Haradh, but the variation is small relative to the total distance." },
      { question: "How much of the total journey time is the border versus driving?", answer: "Driving is the larger, more predictable share at around ten hours. The border is the smaller but far less predictable share — anywhere from under an hour to several hours." },
    ],
    sources: [
      { label: "Riyadh to Abu Dhabi driving distance — distance.to", url: "https://www.distance.to/Riyadh/Abu-Dhabi" },
      { label: "Riyadh to Abu Dhabi distance — Travelmath", url: "https://www.travelmath.com/distance/from/Riyadh,+Saudi+Arabia/to/Abu+Dhabi,+United+Arab+Emirates" },
      { label: "Al Batha border crossing to Abu Dhabi distance", url: "https://www.distancesfrom.com/sa/distance-from-Al-Batha-Border-Crossing-Post-to-abu-dhabi/DistanceHistory/13938229.aspx" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 2. Abu Dhabi → Riyadh ────────────────────────────────────────────────
  {
    slug: "abu-dhabi-to-riyadh-distance",
    from: "Abu Dhabi",
    to: "Riyadh",
    h1: "Abu Dhabi to Riyadh Distance: How Far Is the Road Journey Back Into Saudi Arabia?",
    metaTitle: "Abu Dhabi to Riyadh Distance – Road Journey Guide",
    metaDescription:
      "Abu Dhabi to Riyadh by road: verified distance (~880-900 km), what changes when entering Saudi Arabia at Al Batha, and realistic journey timing.",
    eyebrow: "Road Distance Guide",
    dek: "The road journey back into Saudi Arabia — what changes at entry, and how the return distance and timing compare to the outbound trip.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "stages",
        heading: "The Journey in Stages",
        steps: [
          { label: "UAE departure", detail: "Leaving Abu Dhabi on the E11, heading for the Al Ghuwaifat crossing." },
          { label: "Approaching the border", detail: "The E11 corridor thins out as it nears the frontier." },
          { label: "Saudi entry", detail: "Emirati exit at Al Ghuwaifat, then Saudi entry processing at Al Batha." },
          { label: "Saudi road journey", detail: "Onto Highway 10 west, via Haradh and Al Kharj." },
          { label: "Riyadh arrival", detail: "The final approach into the capital." },
        ],
      },
      {
        type: "borderNote",
        heading: "Entering Saudi Arabia",
        paragraphs: [
          "Coming from the UAE, you'll clear Emirati exit formalities at Al Ghuwaifat before Saudi entry processing at Al Batha, a short distance further. The crossing runs 24 hours, and vehicles are generally inspected on entry.",
          "Visa and entry requirements for Saudi Arabia depend on nationality and change periodically — this page won't guess at them. Check current requirements with Saudi Arabia's passport authority (Jawazat) before you travel, particularly if you're arriving by private vehicle rather than by air.",
        ],
      },
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈880-900 km",
        segments: [
          { from: "Abu Dhabi", to: "Al Batha Border", km: 358, displayValue: "~355-360 km" },
          { from: "Al Batha Border", to: "Riyadh", km: 530, displayValue: "~530 km" },
        ],
        note: "The same physical route as the outbound journey, described from the Abu Dhabi side.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "Countries crossed", value: "UAE → Saudi Arabia" },
          { label: "Border", value: "Al Ghuwaifat / Al Batha" },
          { label: "Main highway, Saudi side", value: "Highway 10" },
          { label: "Arrival city", value: "Riyadh" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Abu Dhabi to Riyadh via the Al Ghuwaifat / Al Batha crossing and Highway 10.",
        origin: "Abu Dhabi, United Arab Emirates",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "Realistic Journey Timing",
        pureDriving: "~10-10.5 hours",
        totalJourney: "Often 12+ hours in practice",
        factors: [
          "Saudi entry processing is the least predictable part of the trip — treat any single figure with caution",
          "The long Highway 10 stretch after the border benefits from at least one rest stop",
          "Arriving in Riyadh during evening rush hour adds noticeably more time than a daytime arrival",
        ],
      },
      {
        type: "prose",
        heading: "The Saudi-Side Drive",
        narrow: true,
        paragraphs: [
          "Once through the border, the route runs west on Highway 10 through Haradh and past Al Kharj before reaching Riyadh's outskirts. It's a long, largely featureless stretch of desert highway — the terrain and road quality don't change much until the capital's skyline becomes visible.",
          "This is the same road used by the outbound Riyadh-to-Abu-Dhabi journey, just travelled in the opposite direction — the driving character of the route doesn't meaningfully differ by direction.",
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Riyadh",
        paragraphs: [
          "After the border and the long desert drive, Riyadh's arrival is a return to a genuinely large, modern capital — heavier traffic, more road options, and a wider range of onward connections, including the airport if that's your next stop. Having your exact Riyadh destination confirmed in advance saves navigating it at the end of a long travel day.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "What should I know before leaving the UAE?", answer: "Confirm your Saudi entry requirements in advance, since these vary by nationality and aren't something to leave until you're at the crossing." },
          { question: "How predictable is Saudi entry processing?", answer: "Not very — reports vary from under an hour to several hours depending on the day and time. Treat it as the least predictable segment of the trip." },
          { question: "Does the estimate change if I'm heading to the airport?", answer: "The driving distance is similar, but factor in Riyadh's own traffic patterns and check-in timing separately from the road journey itself." },
          { question: "Is the return leg really the same distance?", answer: "Yes — this is the same physical route as Riyadh to Abu Dhabi, described from the opposite direction." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the outbound direction, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi road distance</a>. If you're arriving from the border rather than from Abu Dhabi directly, our <a href='/distance/al-batha-border-to-riyadh-distance'>Al Batha border to Riyadh guide</a> covers just that leg.",
      },
      {
        type: "cta",
        text: "Planning to travel this route by private vehicle?",
        linkLabel: "See our Abu Dhabi to Riyadh private transfer",
        linkPath: "/routes/abu-dhabi-to-riyadh",
      },
    ],
    faqs: [
      { question: "Is the distance really identical in both directions?", answer: "Yes, in practical terms — it's the same road network covered in reverse. Any difference between the two directions comes down to traffic and border timing on the day, not the route itself." },
      { question: "What's different about entering Saudi Arabia versus leaving it?", answer: "The formalities themselves are broadly similar in structure (exit checks on one side, entry checks on the other), but entry requirements — visas, permitted stay, documentation — are specific to the country you're entering, so they differ by direction." },
      { question: "Do I need anything specific to enter Saudi Arabia by road?", answer: "Requirements depend on nationality and change periodically, so we'd point you to Saudi Arabia's passport authority (Jawazat) for the current position rather than guess here." },
      { question: "How long should I budget from an Abu Dhabi address to a Riyadh address?", answer: "Around 10-10.5 hours of pure driving, plus the border and any rest stops — a realistic door-to-door estimate is often 12 hours or more." },
      { question: "Does traffic in Abu Dhabi meaningfully affect the total time?", answer: "It can add some time at the start of the trip, particularly during the morning or evening rush, though it's a smaller factor than the border or the long highway stretch." },
    ],
    sources: [
      { label: "Abu Dhabi to Riyadh driving distance — Trippy", url: "https://www.trippy.com/distance/Abu-Dhabi-to-Riyadh" },
      { label: "Riyadh to Abu Dhabi distance — Travelmath", url: "https://www.travelmath.com/distance/from/Riyadh,+Saudi+Arabia/to/Abu+Dhabi,+United+Arab+Emirates" },
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 3. Riyadh → Al Batha Border ─────────────────────────────────────────
  {
    slug: "riyadh-to-al-batha-border-distance",
    from: "Riyadh",
    to: "Al Batha Border",
    h1: "Riyadh to Al Batha Border Distance: How Far Is the Saudi-Side Leg?",
    metaTitle: "Riyadh to Al Batha Border – Road Distance Guide",
    metaDescription:
      "How far is the Al Batha border from Riyadh? Verified road distance (~530 km) and driving time (~7-7.5 hrs) for the Saudi-side leg of the journey.",
    eyebrow: "Road Distance Guide",
    dek: "The Saudi-side road distance from Riyadh to the Al Batha crossing — separate from the full international journey into the UAE.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈530 km",
        segments: [{ from: "Riyadh", to: "Al Batha Border", km: 530, displayValue: "~530 km" }],
        note: "This is the Saudi-side distance only, ending at the crossing itself — not the distance into a UAE city.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Driving time", value: "~7-7.5 hours" },
          { label: "Main highway", value: "Highway 10" },
          { label: "Border", value: "Al Batha / Al Ghuwaifat" },
          { label: "Route type", value: "Saudi-side, ends at the crossing" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to the Al Batha border crossing via Highway 10.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Al Batha Border Crossing, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Drive Breaks Down",
        steps: [
          { label: "Riyadh departure", detail: "South-east onto Highway 10 toward Al Kharj." },
          { label: "Saudi highway journey", detail: "Via Haradh, a long, flat desert stretch." },
          { label: "Al Batha border arrival", detail: "The Saudi-side crossing facility." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Takes",
        pureDriving: "~7-7.5 hours",
        factors: [
          "This is driving time only — it doesn't include any time spent at the crossing itself",
          "A single rest stop is realistic given the distance and the limited services along the way",
        ],
        note: "For what happens after the border, see the border-context note below.",
      },
      {
        type: "prose",
        heading: "What This Distance Covers",
        narrow: true,
        paragraphs: [
          "This figure describes the Saudi side of the journey only — Riyadh to the Al Batha crossing point, before any border processing. It's a meaningfully shorter distance than the full international trip, since the Saudi-to-UAE leg beyond the border adds a further ~355-360 km to reach Abu Dhabi, or somewhat more to reach Dubai.",
          "If you're planning the complete journey into the UAE rather than just the Saudi-side leg, our <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi distance guide</a> covers the full route and what changes at the crossing.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "When should I leave to reach the border at a reasonable time?", answer: "An early-morning departure from Riyadh gets you to the crossing before the busier late-morning period, which tends to affect border timing more than the drive itself." },
          { question: "How does this compare to the full Riyadh–Abu Dhabi distance?", answer: "It's around 350-370 km shorter, since it stops at the crossing rather than continuing into the UAE." },
          { question: "What should I know if I'm continuing into the UAE the same day?", answer: "Build in a buffer for the crossing itself, which is the least predictable part of a same-day trip — see our border-crossing note above." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the complete international distance, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi</a>. For the journey continuing from the border, see <a href='/distance/al-batha-border-to-riyadh-distance'>Al Batha border to Riyadh</a> (the reverse leg).",
      },
      {
        type: "cta",
        text: "Need a private transfer for just this leg?",
        linkLabel: "See our Riyadh to Al Batha border transfer",
        linkPath: "/routes/riyadh-to-al-batha-border",
      },
    ],
    faqs: [
      { question: "Why is this shorter than the Riyadh to Abu Dhabi distance?", answer: "Because it stops at the Saudi side of the crossing rather than continuing roughly 355-360 km further into the UAE to reach Abu Dhabi." },
      { question: "Does this distance include the border crossing itself?", answer: "No — it's the driving distance to the crossing point. Processing time at the border is separate and highly variable." },
      { question: "Which highway does the route follow?", answer: "Highway 10, running south-east from Riyadh via Al Kharj and Haradh to the Al Batha crossing." },
      { question: "Is the distance to the border the same regardless of my final UAE destination?", answer: "Yes — the Riyadh-to-border leg is fixed at around 530 km. Only the onward UAE distance changes depending on whether you're headed to Abu Dhabi, Dubai, or elsewhere." },
      { question: "How accurate is the ~530 km figure?", answer: "It's drawn from independent route-distance sources and cross-checked against the full Riyadh–Abu Dhabi figure minus the known border-to-Abu-Dhabi leg, which converge closely." },
    ],
    sources: [
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      { label: "Al Batha border crossing to Abu Dhabi distance", url: "https://www.distancesfrom.com/sa/distance-from-Al-Batha-Border-Crossing-Post-to-abu-dhabi/DistanceHistory/13938229.aspx" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 4. Al Batha Border → Riyadh ─────────────────────────────────────────
  {
    slug: "al-batha-border-to-riyadh-distance",
    from: "Al Batha Border",
    to: "Riyadh",
    h1: "Al Batha Border to Riyadh Distance: How Far Is the Drive Once You've Crossed?",
    metaTitle: "Al Batha Border to Riyadh – Road Distance Guide",
    metaDescription:
      "The road distance and driving time from the Al Batha border crossing to Riyadh (~530 km, ~7-7.5 hrs) — the Saudi-side leg after crossing.",
    eyebrow: "Road Distance Guide",
    dek: "Continuing into Saudi Arabia after the Al Batha crossing — the distance, driving time, and road journey to Riyadh.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "profile",
        heading: "Route Profile",
        layout: "bignumber",
        items: [
          { label: "Road distance to Riyadh", value: "~530 km" },
          { label: "Driving time", value: "~7-7.5 hours" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Al Batha border crossing to Riyadh via Highway 10.",
        origin: "Al Batha Border Crossing, Saudi Arabia",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "From the Border to Riyadh",
        steps: [
          { label: "Border departure point", detail: "The Saudi-side facility at Al Batha, once processing is complete." },
          { label: "Saudi highway journey", detail: "West on Highway 10, via Haradh and Al Kharj." },
          { label: "Approaching Riyadh", detail: "The capital's outskirts come into view after the long desert stretch." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long the Drive Takes",
        pureDriving: "~7-7.5 hours",
        factors: [
          "This is the driving time from the border onward — it doesn't include however long processing took before you left the crossing",
          "A rest stop partway is realistic given the distance",
        ],
        note: "Border-clearance timing itself is separate and highly variable — from well under an hour to several hours depending on when you cross.",
      },
      {
        type: "prose",
        heading: "Continuing After the Border",
        narrow: true,
        paragraphs: [
          "Once through Saudi entry formalities, the drive to Riyadh is a single, largely uninterrupted stretch of Highway 10 heading west — the same road used by the outbound Riyadh-to-border leg, just travelled from the crossing inward. There isn't a meaningfully different route option; this is the standard highway connection between the two points.",
          "Because border-clearance timing varies so much from one crossing to the next, this figure covers only the driving portion — from the point you actually leave the border, not from whenever you arrived at it.",
        ],
      },
      {
        type: "contextCard",
        heading: "Arriving in Riyadh",
        paragraphs: [
          "After the border and the drive, Riyadh offers considerably more onward options than the crossing did — city routes, hotels, and King Khalid International Airport if you're continuing by air. If your journey ends at the airport, it's worth accounting for Riyadh's own traffic separately from the highway estimate above.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "How is this different from Riyadh to the border?", answer: "Same road, same distance, opposite direction — the driving time doesn't meaningfully differ by direction." },
          { question: "Does the distance change depending on where I started in the UAE?", answer: "No — this figure begins at the Saudi-side border point itself, regardless of whether you travelled from Abu Dhabi, Dubai, or elsewhere beforehand." },
          { question: "What should I know about timing after clearing the border?", answer: "Plan the onward drive as its own ~7-7.5 hour block, separate from however long the crossing itself took." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the outbound leg, see <a href='/distance/riyadh-to-al-batha-border-distance'>Riyadh to Al Batha border</a>. If you're travelling the complete international route from the UAE, see <a href='/distance/abu-dhabi-to-riyadh-distance'>Abu Dhabi to Riyadh</a>.",
      },
      {
        type: "cta",
        text: "Need a pre-arranged pickup at the border?",
        linkLabel: "See our Al Batha border to Riyadh transfer",
        linkPath: "/routes/al-batha-border-to-riyadh",
      },
    ],
    faqs: [
      { question: "Is the distance the same as Riyadh to the border?", answer: "Yes — it's the same ~530 km route, just travelled in the opposite direction." },
      { question: "Does this figure start from the border itself or from somewhere in the UAE?", answer: "From the Saudi-side border point at Al Batha. Whatever UAE distance you covered beforehand isn't included in this figure." },
      { question: "How long after crossing should I expect to reach Riyadh?", answer: "Around 7-7.5 hours of driving from the point you leave the border, plus any rest stop you take along the way." },
      { question: "Is this the same route as the outbound Riyadh-to-border leg, just reversed?", answer: "Yes — there's a single standard highway connection (Highway 10) between the two points." },
      { question: "What's the main highway used?", answer: "Highway 10, running between the Al Batha crossing and Riyadh via Haradh and Al Kharj." },
    ],
    sources: [
      { label: "Al Batha to Riyadh driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Al-Batha-Saudi-Arabia/Riyadh" },
      ...BORDER_SOURCES,
    ],
  },

  // ── 5. Dammam → Al Batha Border ─────────────────────────────────────────
  {
    slug: "dammam-to-al-batha-border-distance",
    from: "Dammam",
    to: "Al Batha Border",
    h1: "Dammam to Al Batha Border Distance: How Far Is It From the Eastern Province?",
    metaTitle: "Dammam to Al Batha Border – Road Distance Guide",
    metaDescription:
      "The road distance from Dammam to the Al Batha border (~400 km, ~4-4.5 hrs) — and why estimates for this Eastern Province route vary by source.",
    eyebrow: "Road Distance Guide",
    dek: "The Eastern Province road distance to the Al Batha crossing — shorter than from Riyadh, with a genuine spread in the distance estimates worth explaining.",
    lastVerified: "2026-09-02",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈400 km",
        segments: [{ from: "Dammam", to: "Al Batha Border", km: 400, displayValue: "~400 km" }],
        note: "Sources for this specific leg range from roughly 345 to 430 km — see \"Why the Distance Estimates Vary\" below.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Driving time", value: "~4-4.5 hours" },
          { label: "Main highway", value: "Highway 95 corridor" },
          { label: "Border", value: "Al Batha / Al Ghuwaifat" },
          { label: "Compared to the Riyadh route", value: "~90 min-2 hrs shorter" },
        ],
      },
      {
        type: "stages",
        heading: "How the Drive Breaks Down",
        steps: [
          { label: "Dammam departure", detail: "South through the Eastern Province." },
          { label: "Eastern Province interior", detail: "Past the region's interior towns." },
          { label: "Joining the interior corridor", detail: "Connecting with the road network used further south by the Riyadh-originating route." },
          { label: "Al Batha border arrival", detail: "The Saudi-side crossing facility." },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Dammam to the Al Batha border crossing via the Highway 95 corridor.",
        origin: "Dammam, Saudi Arabia",
        destination: "Al Batha Border Crossing, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "How Long It Takes",
        pureDriving: "~4-4.5 hours",
        factors: [
          "Shorter and generally more predictable than the Riyadh route, simply by virtue of the shorter distance",
          "A single rest stop is enough for most travellers on a drive this length",
        ],
      },
      {
        type: "prose",
        heading: "Why the Distance Estimates Vary",
        narrow: true,
        paragraphs: [
          "Unlike the Riyadh-to-border leg, where independent sources converge fairly tightly around 530 km, estimates for Dammam to Al Batha spread more widely — from around 345 km on one routing service to around 426 km on another. Both figures come from route-distance calculators rather than a single authoritative source, and the gap likely reflects different assumed roads through the Eastern Province before the two routes converge.",
          "Rather than pick one number and present it as exact, we show it as a range and centre the headline figure at roughly 400 km, which sits between the two — and note that at this distance, the practical difference in driving time is a matter of minutes, not hours.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Notes",
        items: [
          { question: "Is this really shorter than from Riyadh?", answer: "Yes, by roughly ninety minutes to two hours of driving, since the Eastern Province sits closer to the crossing." },
          { question: "Which highway should I expect to use?", answer: "The Highway 95 corridor through the Eastern Province, connecting into the interior road network toward the border." },
          { question: "What should I plan for on a 4+ hour desert drive?", answer: "One rest stop is generally sufficient at this distance, along with confirming fuel before the final stretch, where services thin out." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph:
          "For the longer route from the capital, see <a href='/distance/riyadh-to-al-batha-border-distance'>Riyadh to Al Batha border</a>. For the full international distance from Riyadh into the UAE, see <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi</a>.",
      },
      {
        type: "cta",
        text: "Need a private transfer for this leg?",
        linkLabel: "See our Dammam to Al Batha border transfer",
        linkPath: "/routes/dammam-to-al-batha-border",
      },
    ],
    faqs: [
      { question: "Why do sources disagree on the exact distance?", answer: "Route-distance calculators assume slightly different roads through the Eastern Province before the routes converge toward the border, producing a spread of roughly 345-430 km depending on the source." },
      { question: "Is this shorter than driving from Riyadh?", answer: "Yes, meaningfully — around 90 minutes to two hours less driving, since the Eastern Province is closer to the crossing than the capital." },
      { question: "What highway connects Dammam to the border?", answer: "The Highway 95 corridor through the Eastern Province, joining the interior road network used further south." },
      { question: "Does this distance include the border crossing itself?", answer: "No — it's the driving distance to the crossing point only. Processing time at the border is separate." },
      { question: "How was the ~400 km estimate reached?", answer: "By taking the midpoint of the two independent route-distance figures we found (approximately 345 km and 426 km) rather than presenting either as definitive." },
    ],
    sources: [
      { label: "Dammam to Al Batha driving distance — Rome2rio", url: "https://www.rome2rio.com/s/Dammam/Al-Batha-Saudi-Arabia" },
      { label: "Dammam to Al Batha Border Crossing Post distance", url: "https://www.distancesfrom.com/sa/distance-from-Dammam-to-Al-Batha-Border-Crossing-Post-Al-Batha/DistanceHistory/13652943.aspx" },
      { label: "Highway 95, Saudi Arabia (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      ...BORDER_SOURCES,
    ],
  },
  // ── Pilgrimage corridor — Jeddah / Makkah / Madinah ─────────────────────
  {
    slug: "jeddah-to-makkah-distance",
    from: "Jeddah",
    to: "Makkah",
    h1: "Jeddah to Makkah Distance: How Far Is It and How Long Does It Take?",
    metaTitle: "Jeddah to Makkah Distance: How Far & How Long? (KM + Travel Time)",
    metaDescription: "How far is Makkah from Jeddah? Road distance, driving time, the Haramain train option, and why the distance varies depending on your exact starting point.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "How far Makkah really is from Jeddah's airport and city, and why almost every arriving pilgrim makes this exact leg.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈85-95 km",
        segments: [{ from: "Jeddah", to: "Makkah", km: 90, displayValue: "82-95 km depending on your exact start point" }],
        note: "From King Abdulaziz International Airport it's closer to 85 km; from central Jeddah it can run to 95 km or more. The straight-line distance is about 68 km, but isn't usable for travel planning.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Jeddah to Makkah via Highway 40, the controlled-access motorway connecting the two cities.",
        origin: "Jeddah, Saudi Arabia",
        destination: "Makkah, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "The Typical Arrival Journey",
        steps: [
          { label: "Touchdown at Jeddah Airport (JED)", detail: "On Jeddah's north side — the closest major gateway to Makkah, since Makkah has no airport of its own." },
          { label: "Highway 40 drive", detail: "A direct, controlled-access motorway connecting the airport straight to Makkah." },
          { label: "Arrival in Makkah", detail: "Continuing into the Haram area or a nearby hotel to begin Umrah or Hajj rites." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "60-90 minutes",
        totalJourney: "90-120 minutes during Ramadan and Hajj",
        factors: [
          "This is the single most-travelled intercity route in the Kingdom, since most arriving pilgrims land in Jeddah and continue straight to Makkah",
          "Traffic builds noticeably on the approach to Makkah during Ramadan and the weeks around Hajj",
          "The 68 km straight-line figure sometimes quoted elsewhere is not a road distance and shouldn't be used for planning",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, especially those arriving with luggage or as a family or group", duration: "60-90 minutes (longer in peak season)", advantages: "Door-to-door, no transfers, flexible timing, direct from the airport terminal", limitations: "Subject to road traffic, particularly around Makkah during Ramadan and Hajj" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers comfortable managing their own luggage between the airport, train station, and hotel", duration: "Part of the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h", advantages: "Fast, fixed schedule, avoids road traffic entirely", limitations: "The Makkah station sits in Al Rusaifah, about 3-4 km from the Haram, so a further local transfer is needed" },
          { mode: "SAPTCO intercity bus", suitability: "Budget-conscious travellers without heavy luggage", duration: "Longer than a direct drive, subject to the bus schedule", advantages: "Lower cost, part of a nationwide network connecting all major Saudi cities", limitations: "Fixed departure times and a shared vehicle, less flexible than a private transfer" },
        ],
      },
      {
        type: "prose",
        heading: "Makkah Has No Airport of Its Own",
        narrow: true,
        paragraphs: [
          "Air travel access to Makkah itself is not possible — no aircraft are permitted to fly over the city for religious reasons. Jeddah's King Abdulaziz International Airport, about 97 km from central Makkah, is the closest and by far the most commonly used gateway; Taif Regional Airport, roughly 109 km away on the other side of Makkah, is a secondary option some travellers use.",
          "Because Makkah has no airport of its own, every visitor arriving by air — the large majority of pilgrims — makes this exact Jeddah-to-Makkah leg by road or by the Haramain train, which is part of why it's one of the busiest short-haul intercity routes in the country.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "For the next leg of a pilgrimage journey, see our <a href='/distance/makkah-to-madinah-distance'>Makkah to Madinah distance guide</a>. Departing Makkah for a flight instead? See <a href='/distance/makkah-to-jeddah-distance'>Makkah to Jeddah</a>, the reverse direction.",
      },
      {
        type: "cta",
        text: "Arriving in Makkah by private vehicle?",
        linkLabel: "See our Jeddah to Makkah private transfer",
        linkPath: "/routes/jeddah-to-makkah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah Airport from Makkah?", answer: "About 85 km by road from King Abdulaziz International Airport, though this varies depending on the exact area of Makkah you're travelling to." },
      { question: "How many kilometres is Jeddah from Makkah in total?", answer: "Road distance is generally cited between 82 and 95 km depending on the exact start and end points used; the straight-line distance is about 68 km." },
      { question: "Is there a train between Jeddah and Makkah?", answer: "Yes — the Haramain High-Speed Railway connects Jeddah (both the King Abdulaziz Airport station and the central Al Sulaymaniyah station) to Makkah, though the Makkah station itself is a few kilometres from the Haram, requiring a further local transfer." },
      { question: "Does travel time change during Ramadan or Hajj?", answer: "Yes, both road and general travel times increase during these peak periods due to significantly higher traffic volume on the approach to Makkah." },
      { question: "Is a private car practical for this journey?", answer: "Yes — at under 90 minutes off-peak, it's the most common way pilgrims and visitors make this trip, particularly with luggage or as a family group." },
      { question: "Can a private transfer collect me directly from the arrivals hall?", answer: "Yes — a pre-arranged private transfer meets you inside the arrivals area and tracks your flight, which the train and bus options don't offer." },
      { question: "Does the exact distance depend on which hotel I'm going to?", answer: "Yes — a hotel close to the Haram sits nearer the shorter end of the range, while accommodation on Makkah's outskirts can push the distance toward 95 km or more." },
    ],
    sources: [
      { label: "Distance between Jeddah and Makkah (distancebetween2.com)", url: "https://distancebetween2.com/jeddah/makkah" },
      { label: "Jeddah to Mecca driving distance (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Jeddah,+Saudi+Arabia/to/Mecca,+Saudi+Arabia" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
      { label: "Why there is no airport in Makkah, and the nearest airports (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
      { label: "SAPTCO — Saudi Public Transport Company overview (Wikipedia)", url: "https://en.wikipedia.org/wiki/Saudi_Public_Transport_Company" },
    ],
  },

  {
    slug: "makkah-to-madinah-distance",
    from: "Makkah",
    to: "Madinah",
    h1: "Makkah to Madinah Distance: How Far Is It and How Long Does the Journey Take?",
    metaTitle: "Makkah to Madinah Distance: KM, Travel Time & Haramain Train",
    metaDescription: "How far is Madinah from Makkah? Road distance on the Hijrah Highway, the shorter alternate route, the Haramain train, and realistic travel times.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "Two real roads connect the Holy Cities — the historic Hijrah Highway and a shorter alternate — plus a high-speed rail option that avoids both.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈450 km (or ≈370 km via the shorter alternate)",
        segments: [{ from: "Makkah", to: "Madinah", km: 450, displayValue: "450 km via the Hijrah Highway, or ~370 km via Highway 40" }],
        note: "Two genuinely different road routes exist between the cities. Figures are city-to-city, not doorstep-to-doorstep.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Fastest option", value: "Haramain High-Speed Railway, up to 300 km/h" },
          { label: "Most flexible option", value: "Private car, hotel to hotel" },
          { label: "Two real routes exist", value: "~450 km Hijrah Highway, or ~370 km alternate" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Makkah to Madinah via the Hijrah Highway (Highway 15), the historic pilgrim route.",
        origin: "Makkah, Saudi Arabia",
        destination: "Madinah, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-5 hours (main route)",
        totalJourney: "3-4 hours via the shorter alternate route",
        factors: [
          "Traffic on the approach to both cities builds around prayer times",
          "The whole corridor sees significantly higher volume during Ramadan and the weeks around Hajj",
          "Exact distance from any specific hotel varies by a few kilometres depending on which side of each city you start or end in",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Haramain High-Speed Railway", suitability: "Travellers who want the fastest option and are comfortable with the station locations", duration: "Part of a 449 km, up-to-300-km/h line; a fixed schedule", advantages: "By far the fastest way to cover the distance, avoids all road traffic, opened in 2018 and now well established", limitations: "The Makkah station is in Al Rusaifah, about 3-4 km from the Haram, and the Madinah station is about 8-10 km from Masjid an-Nabawi — both ends need a further local transfer" },
          { mode: "Private car / taxi", suitability: "Groups, families, elderly or less mobile travellers, and anyone wanting door-to-door hotel pickup", duration: "4-5 hours (main route) or 3-4 hours (alternate route)", advantages: "Hotel-to-hotel, no transfers needed at either end, flexible departure timing", limitations: "Longer overall than the train once station transfers are factored out, and subject to road traffic" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers without heavy luggage", duration: "Longer than a direct drive, on a fixed schedule", advantages: "Lower cost, connects to SAPTCO's wider national network", limitations: "Fixed timetable, shared vehicle, station-to-station rather than hotel-to-hotel" },
        ],
      },
      {
        type: "prose",
        heading: "Travelling After Umrah",
        narrow: true,
        paragraphs: [
          "Most travellers making this specific journey — Makkah to Madinah, in this direction — have just completed Umrah and are continuing to visit the Prophet's Mosque, often as the final leg of their trip before flying home from Madinah's Prince Mohammad bin Abdulaziz International Airport rather than from Jeddah.",
          "Because Makkah has no airport of its own, this leg is made entirely by road or rail — there is no flight option between the two cities directly, since any Makkah-bound or Makkah-originating air travel is not possible for religious reasons.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction with a miqat stop to plan? See <a href='/distance/madinah-to-makkah-distance'>Madinah to Makkah distance</a>. For the first leg of a pilgrimage arriving via Jeddah, see <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Makkah to Madinah private transfer",
        linkPath: "/routes/makkah-to-madinah",
      },
    ],
    faqs: [
      { question: "How many kilometres is Makkah from Madinah?", answer: "About 450 km via the main Hijrah Highway route, or roughly 370 km via a more direct alternate route — the figure depends on which road is taken." },
      { question: "Is there a train between Makkah and Madinah?", answer: "Yes, the Haramain High-Speed Railway connects both cities directly, running at up to 300 km/h, though both stations sit a few kilometres from the respective holy sites." },
      { question: "How long does the road journey take?", answer: "Roughly four to five hours on the main route, or three to four hours on the shorter alternate route." },
      { question: "Does the travel time change during Ramadan?", answer: "Yes — traffic on this corridor increases noticeably during Ramadan and the weeks around Hajj, extending the road journey beyond the usual four-to-five-hour estimate." },
      { question: "Can I fly between Makkah and Madinah?", answer: "No — Makkah has no airport, so there is no direct flight option; the journey has to be made by road or by the Haramain train." },
      { question: "What is the fastest way to travel this route?", answer: "The Haramain High-Speed Railway is the fastest option by a significant margin, though it requires a short local transfer at each end to reach the Haram or Masjid an-Nabawi." },
      { question: "Which alternate route is shorter, and is it commonly used?", answer: "A more direct route via Highway 40 covers roughly 370 km, though it isn't the default route most private transfers and buses take — the historic Hijrah Highway remains the more commonly used option." },
    ],
    sources: [
      { label: "Makkah to Madinah distance and route options (islamiclandmarks.com)", url: "https://www.islamiclandmarks.com/makkah-other/makkah-to-madinah-distance" },
      { label: "Makkah to Madinah distance guide (thepilgrim.co)", url: "https://thepilgrim.co/makkah-to-medina-distance/" },
      { label: "Haramain High-Speed Railway: pilgrim's guide (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
      { label: "Why there is no airport in Makkah (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
    ],
  },

  {
    slug: "madinah-to-makkah-distance",
    from: "Madinah",
    to: "Makkah",
    h1: "Madinah to Makkah Distance: How Far Is It, and What Should Pilgrims Know?",
    metaTitle: "Madinah to Makkah Distance: KM, Travel Time & Miqat Info",
    metaDescription: "How far is Makkah from Madinah? Road distance, travel time, the Haramain train, and the Dhul Hulaifah (Abyar Ali) miqat pilgrims pass on the way.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "The same road distance as the Makkah-to-Madinah leg, but with one addition most travellers on this direction need to plan for: the miqat.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈450 km (or ≈370 km via the shorter alternate)",
        segments: [{ from: "Madinah", to: "Makkah", km: 450, displayValue: "450 km via the Hijrah Highway, or ~370 km via Highway 40" }],
        note: "The same road distance as the reverse direction — what differs on this leg is the miqat stop many travellers plan for partway through.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Madinah to Makkah via the Hijrah Highway, passing Dhul Hulaifah (Abyar Ali).",
        origin: "Madinah, Saudi Arabia",
        destination: "Makkah, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "The Journey South, With a Miqat Stop",
        steps: [
          { label: "Departing Madinah", detail: "Onto the Hijrah Highway (or the shorter Highway 40 alternate) heading south." },
          { label: "Dhul Hulaifah (Abyar Ali)", detail: "A recognised miqat just outside Madinah, where pilgrims entering ihram typically stop." },
          { label: "The highway drive", detail: "Four to five hours (main route) or three to four hours (alternate) to reach Makkah." },
          { label: "Arrival in Makkah", detail: "Continuing to the Haram to begin Umrah rites." },
        ],
      },
      {
        type: "borderNote",
        heading: "The Dhul Hulaifah (Abyar Ali) Miqat",
        paragraphs: [
          "Dhul Hulaifah, commonly known as Abyar Ali, is one of the recognised miqat points where pilgrims travelling from Madinah toward Makkah enter ihram if they haven't already done so. It sits just outside Madinah on the route south, which is why it's specifically relevant to this direction of travel and not to the Makkah-to-Madinah leg.",
          "Because entering ihram is a planned stop rather than a fixed-duration one, travellers making this journey by private car can have the stop built into the route from the outset, whereas the fixed-schedule train and bus options don't accommodate it in the same way.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-5 hours driving",
        totalJourney: "Plus time at the miqat, if needed",
        factors: [
          "Pilgrims who haven't yet entered ihram typically stop at Dhul Hulaifah before continuing south",
          "The Haramain train does not stop at the miqat, so pilgrims needing that stop should enter ihram before travelling to the station",
          "Traffic on the approach to Makkah is heavier during Ramadan and the weeks around Hajj",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Pilgrims planning a miqat stop, families, and anyone wanting the stop built into a single continuous journey", duration: "4-5 hours driving, plus time at the miqat if needed", advantages: "The miqat stop can be planned into the route in advance rather than requiring a separate arrangement", limitations: "Longer overall than the train, and subject to road traffic" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers who have already entered ihram before leaving Madinah, or aren't stopping at Dhul Hulaifah", duration: "Part of the 449 km, up-to-300-km/h line", advantages: "Fastest way to cover the distance itself", limitations: "The train does not stop at Dhul Hulaifah, so pilgrims needing that stop would need to arrange it separately before travelling to the station" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers, though less commonly used for this specific pilgrim leg", duration: "Longer than a direct drive, fixed schedule", advantages: "Lower cost", limitations: "Fixed timetable makes an unplanned miqat stop impractical" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the opposite direction after Umrah? See <a href='/distance/makkah-to-madinah-distance'>Makkah to Madinah distance</a>. Planning to add AlUla to a Madinah stay? See <a href='/distance/madinah-to-alula-distance'>Madinah to AlUla distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Madinah to Makkah private transfer",
        linkPath: "/routes/madinah-to-makkah",
      },
    ],
    faqs: [
      { question: "How many kilometres is Madinah from Makkah?", answer: "About 450 km via the main highway route, or roughly 370 km via a more direct alternate — the same distance as the reverse direction." },
      { question: "What is the miqat for travelling from Madinah to Makkah?", answer: "Dhul Hulaifah, commonly known as Abyar Ali, just outside Madinah — pilgrims who haven't yet entered ihram typically stop here before continuing south." },
      { question: "Does the Haramain train stop at the miqat?", answer: "No, the train does not stop at Dhul Hulaifah, so pilgrims needing to enter ihram there would need to do so before travelling to the train station, or use a private car instead." },
      { question: "How long does the road journey take, including the miqat stop?", answer: "The drive itself takes four to five hours on the main route; the miqat stop adds additional time on top of that, varying by group size." },
      { question: "Is there a train between Madinah and Makkah?", answer: "Yes, the Haramain High-Speed Railway connects both cities, though it doesn't accommodate a miqat stop along the way." },
      { question: "Can a private transfer wait while I change into ihram at the miqat?", answer: "Yes — this is one of the practical advantages of a private car on this specific leg, since the stop can be built into the journey rather than requiring separate transport to and from the miqat." },
      { question: "Do all pilgrims need to stop at Dhul Hulaifah?", answer: "Only those who haven't already entered ihram before leaving Madinah — pilgrims who entered ihram earlier can continue directly toward Makkah without the stop." },
    ],
    sources: [
      { label: "Makkah to Madinah distance and route options (islamiclandmarks.com)", url: "https://www.islamiclandmarks.com/makkah-other/makkah-to-madinah-distance" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
      { label: "Makkah to Madinah distance guide (thepilgrim.co)", url: "https://thepilgrim.co/makkah-to-medina-distance/" },
    ],
  },

  {
    slug: "jeddah-to-madinah-distance",
    from: "Jeddah",
    to: "Madinah",
    h1: "Jeddah to Madinah Distance: How Far Is It and What Are the Travel Options?",
    metaTitle: "Jeddah to Madinah Distance: KM, Travel Time, Flight & Train Options",
    metaDescription: "How far is Madinah from Jeddah? Road distance via Highway 15, the roughly one-hour flight, the Haramain train, and realistic driving times.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "A genuinely long drive for a same-day trip — most travellers on this specific corridor choose to fly or take the Haramain train instead.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈410-420 km",
        segments: [{ from: "Jeddah", to: "Madinah", km: 415, displayValue: "409-420 km via Highway 15" }],
        note: "The coastal route passes King Abdullah Economic City, Rabigh, and Masturah before heading inland via Badr on the way to Madinah.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Fastest option", value: "Direct flight, ~1 hour, 441 flights/week across 4 airlines" },
          { label: "Fastest ground option", value: "Haramain High-Speed Railway" },
          { label: "Most flexible for families/luggage", value: "Private car, hotel to hotel, approx. 4.5–5 hours" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Jeddah to Madinah via Highway 15, passing KAEC, Rabigh and Badr.",
        origin: "Jeddah, Saudi Arabia",
        destination: "Madinah, Saudi Arabia",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "approx. 4.5–5 hours by road",
        totalJourney: "~1 hour by direct flight",
        factors: [
          "One of the longer regularly-travelled routes out of Jeddah — a meaningful number of travellers choose not to drive it at all",
          "The direct flight is very frequently served, at around 441 flights a week across four airlines",
          "The Haramain train connects directly from Jeddah's King Abdulaziz Airport station",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Direct flight", suitability: "Travellers prioritising speed, or connecting onward internationally through Jeddah first", duration: "About 1 hour in the air", advantages: "By far the fastest option, very high flight frequency (around 441 flights per week)", limitations: "Airport check-in and security add time beyond the 1-hour flight itself; not door-to-door" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers wanting a fast option without flying", duration: "Part of the 449 km, up-to-300-km/h Jeddah–Makkah–Madinah line", advantages: "Fast, avoids road traffic, connects directly from Jeddah's King Abdulaziz Airport station", limitations: "The Madinah station is about 8-10 km from Masjid an-Nabawi, requiring a further local transfer" },
          { mode: "Private car / taxi", suitability: "Families, groups with luggage, and travellers who'd rather not manage a station or airport transfer at either end", duration: "approx. 4.5–5 hours", advantages: "Hotel-to-hotel or airport-to-hotel, no transfers, flexible timing for early or late flights", limitations: "The longest of the three options in pure travel time" },
        ],
      },
      {
        type: "prose",
        heading: "Choosing Madinah First",
        narrow: true,
        paragraphs: [
          "Some pilgrims fly into Jeddah but deliberately begin their pilgrimage in Madinah rather than Makkah, visiting the Prophet's Mosque before travelling south — this route serves that itinerary choice specifically, and it's a longer, less-travelled corridor than the short Jeddah-to-Makkah hop most arriving pilgrims use.",
          "Because it's a genuinely long drive after what's often a long-haul international flight, the one-hour flight or the Haramain train are worth real consideration here in a way they aren't on the much shorter Jeddah-to-Makkah leg.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Continuing to Makkah from Madinah afterward? See <a href='/distance/madinah-to-makkah-distance'>Madinah to Makkah distance</a>. Flying home instead? See <a href='/distance/madinah-to-jeddah-distance'>Madinah to Jeddah</a>, the return leg.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Jeddah to Madinah private transfer",
        linkPath: "/routes/jeddah-to-madinah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah from Madinah?", answer: "Road distance is generally cited between 409 and 420 km via Highway 15." },
      { question: "Is there a direct flight from Jeddah to Madinah?", answer: "Yes, it's a very frequently served route — around 441 flights per week across four airlines, with a flight time of about one hour." },
      { question: "Is there a train between Jeddah and Madinah?", answer: "Yes, the Haramain High-Speed Railway connects Jeddah's King Abdulaziz Airport station directly to Madinah." },
      { question: "How long does the road journey take?", answer: "Typically around 4.5–5 hours of driving, depending on traffic and driving conditions." },
      { question: "What is the fastest way to travel from Jeddah to Madinah?", answer: "A direct flight, at around one hour, is the fastest option; the Haramain train is the fastest ground option." },
      { question: "Is it worth driving this route at all?", answer: "It's done, particularly by families with a full vehicle-load of luggage or groups combining stops along the coastal highway, but most travellers without a specific reason to drive choose to fly or take the train instead." },
      { question: "Does a private transfer pick up directly from Jeddah's airport?", answer: "Yes — a pre-arranged private transfer can meet an international arrival at Jeddah's airport and drive directly to a Madinah hotel, without needing to enter central Jeddah first." },
    ],
    sources: [
      { label: "Jeddah to Madinah driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/jeddah-to-medina-road-trip-stops-2026/" },
      { label: "Jeddah to Medina by car (harmaincab.com)", url: "https://harmaincab.com/jeddah-to-medina-by-car/" },
      { label: "Jeddah to Madinah flight schedule and frequency (goibibo/aggregated)", url: "https://www.flightsfrom.com/JED-MED" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
    ],
  },

  // ── Domestic long-haul — Riyadh / Dammam / Jeddah / AlUla ───────────────
  {
    slug: "riyadh-to-dammam-distance",
    from: "Riyadh",
    to: "Dammam",
    h1: "Riyadh to Dammam Distance: How Far Is It and What's the Best Way to Travel?",
    metaTitle: "Riyadh to Dammam Distance: KM, Travel Time & Train Option",
    metaDescription: "How far is Dammam from Riyadh? Road distance on Highway 40, driving time, and the SAR passenger railway that also connects the two cities.",
    eyebrow: "Road Distance Guide",
    dek: "One of the few domestic Saudi routes with a genuine, long-established passenger rail alternative to the highway drive.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈400-411 km",
        segments: [{ from: "Riyadh", to: "Dammam", km: 409, displayValue: "399-411 km via Highway 40" }],
        note: "The Highway 40 motorway itself is commonly given as 409 km — a smaller spread than some of the Kingdom's longer routes.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Dammam via Highway 40, crossing the Ad-Dahna desert corridor.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Fastest option", value: "SAR express train, ~3h40m, once daily" },
          { label: "Most flexible option", value: "Private car, door to door, 3.5-4 hours" },
          { label: "Key fact", value: "A passenger railway has connected these cities since 1985" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "3.5-4 hours",
        factors: [
          "Most of the route crosses open desert terrain via the Ad-Dahna corridor on a well-maintained multi-lane highway",
          "The SAR East Line has run passenger services between Riyadh and Dammam since 1985, calling at Hofuf and Abqaiq",
          "The SAR express service covers the route in roughly 3 hours 40 minutes, once daily in each direction",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "SAR passenger train (East Line)", suitability: "Travellers happy to go station to station rather than door to door", duration: "About 4.5 hours on the regular service; an express service covers it in roughly 3 hours 40 minutes, once daily", advantages: "Established, comfortable rail service operated by Saudi Arabia Railways (SAR) since 1985, calling at Dammam, Abqaiq, Hofuf, and Riyadh", limitations: "Station-to-station, not door-to-door, and the express service runs on a fixed daily schedule" },
          { mode: "Private car / taxi", suitability: "Business travellers on a schedule, and anyone wanting door-to-door pickup from an exact address", duration: "3.5-4 hours", advantages: "Door-to-door from your exact starting point, flexible departure time, no need to reach a station", limitations: "Subject to road traffic and desert-highway driving conditions" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers", duration: "Longer than a direct drive, fixed schedule", advantages: "Lower cost, part of the national SAPTCO network", limitations: "Fixed timetable, station-based rather than door-to-door" },
        ],
      },
      {
        type: "prose",
        heading: "Capital to Eastern Province: a Well-Served Corridor",
        narrow: true,
        paragraphs: [
          "This is one of the few domestic Saudi routes with a genuine, long-established passenger rail alternative to driving — the SAR East Line has run passenger services between Riyadh and Dammam since 1985, calling at Hofuf and Abqaiq along the way, and remains a practical option for travellers who don't need door-to-door pickup.",
          "For business travellers connecting onward to Khobar, Dhahran, or the Bahrain Causeway beyond Dammam itself, none of those onward legs are served by the train, so a private car remains the more common choice once an onward destination beyond central Dammam is involved.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction? See <a href='/distance/dammam-to-riyadh-distance'>Dammam to Riyadh distance</a>. Continuing on to Bahrain from Dammam? See <a href='/distance/dammam-to-bahrain-distance'>Dammam to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Dammam private transfer",
        linkPath: "/routes/riyadh-to-dammam",
      },
    ],
    faqs: [
      { question: "How many kilometres is Riyadh from Dammam?", answer: "Sources generally cite between 399 and 411 km, with the Highway 40 motorway itself commonly given as 409 km." },
      { question: "Is there a train between Riyadh and Dammam?", answer: "Yes — the SAR (Saudi Arabia Railways) East Line has connected the two cities with passenger service since 1985, calling at Hofuf and Abqaiq, with both a regular (~4.5-hour) and an express (~3h40m) service." },
      { question: "How long does the road journey take?", answer: "Roughly three and a half to four hours under normal traffic conditions." },
      { question: "What is the fastest way to travel this route?", answer: "The SAR express train, at around 3 hours 40 minutes, is marginally faster than driving, though it only runs once daily in each direction and is station-to-station rather than door-to-door." },
      { question: "Is a private car practical for this journey?", answer: "Yes, especially for business travellers with a specific schedule or anyone continuing beyond Dammam to Khobar, Dhahran, or the Bahrain Causeway, none of which the train serves." },
      { question: "Does the train run every day?", answer: "The regular SAR service operates daily; the faster express service runs once daily in each direction, so it's worth checking the timetable if the express timing matters to your plans." },
      { question: "Is this route busy with commercial traffic?", answer: "Highway 40 is a major national corridor and does carry meaningful freight traffic, though it's a well-maintained multi-lane road built for this volume." },
    ],
    sources: [
      { label: "Dammam–Riyadh railway (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dammam%E2%80%93Riyadh_railway" },
      { label: "Riyadh to Dammam driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/riyadh-to-dammam-road-trip/" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "dammam-to-riyadh-distance",
    from: "Dammam",
    to: "Riyadh",
    h1: "Dammam to Riyadh Distance: How Far Is It and How Do You Get There?",
    metaTitle: "Dammam to Riyadh Distance: KM, Travel Time & Train Option",
    metaDescription: "How far is Riyadh from Dammam? Road distance, driving time, and the SAR passenger railway connecting the Eastern Province to the capital.",
    eyebrow: "Road Distance Guide",
    dek: "Often the second half of an international arrival — via the airport or the Bahrain Causeway — rather than a simple hotel-to-hotel trip.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈400-411 km",
        segments: [{ from: "Dammam", to: "Riyadh", km: 409, displayValue: "399-411 km via Highway 40" }],
        note: "Same road distance as the Riyadh-to-Dammam direction — this leg is more often made as an arrival journey than a hotel-to-hotel trip.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Dammam to Riyadh via Highway 40, the same Ad-Dahna corridor used outbound.",
        origin: "Dammam, Saudi Arabia",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "A Common Arrival Route",
        steps: [
          { label: "Airport or Causeway arrival", detail: "King Fahd International Airport or the Saudi side of the Bahrain Causeway — both common starting points for this leg." },
          { label: "Highway 40 drive", detail: "West across the Ad-Dahna desert corridor toward the capital." },
          { label: "Riyadh arrival", detail: "Onward to a hotel, business address, or King Khalid International Airport for a connecting flight." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "3.5-4 hours",
        factors: [
          "A significant share of Dammam-to-Riyadh travel starts at King Fahd International Airport or the Bahrain Causeway rather than in central Dammam",
          "Road transport allows arrival timing to be planned around an actual flight or Causeway crossing, unlike a fixed train or bus schedule",
          "The SAR passenger railway also operates in this direction, on the same schedule pattern as the outbound service",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers arriving at King Fahd International Airport or crossing from Bahrain via the Causeway", duration: "3.5-4 hours", advantages: "Meets you at the airport arrivals hall or the Causeway crossing point directly, with flight or crossing time tracked", limitations: "Subject to road traffic conditions" },
          { mode: "SAR passenger train (East Line)", suitability: "Travellers starting from central Dammam rather than the airport or Causeway", duration: "About 4.5 hours regular service, or roughly 3h40m on the once-daily express", advantages: "Established rail service, avoids road traffic", limitations: "Requires reaching Dammam railway station first, which adds a step for travellers arriving by air or via the Causeway" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers starting from central Dammam", duration: "Longer than a direct drive, fixed schedule", advantages: "Lower cost", limitations: "Fixed timetable, less practical for airport or Causeway arrivals" },
        ],
      },
      {
        type: "prose",
        heading: "An Arrival Route: Airport and Causeway Connections",
        narrow: true,
        paragraphs: [
          "Unlike a typical point-to-point city trip, a significant share of Dammam-to-Riyadh travel starts at King Fahd International Airport or at the Saudi side of the Bahrain Causeway rather than in central Dammam — both are common entry points for travellers continuing straight on to the capital the same day.",
          "For onward flight connections from Riyadh's King Khalid International Airport, road transport allows the arrival timing to be planned around the actual flight or Causeway crossing, which a fixed train or bus schedule doesn't accommodate as easily.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "For the outbound direction, see <a href='/distance/riyadh-to-dammam-distance'>Riyadh to Dammam distance</a>. Arriving from Bahrain via the Causeway? See <a href='/distance/bahrain-to-riyadh-distance'>Bahrain to Riyadh distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam to Riyadh private transfer",
        linkPath: "/routes/dammam-to-riyadh",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Riyadh?", answer: "Sources generally cite between 399 and 411 km by road, the same distance as the Riyadh-to-Dammam direction." },
      { question: "Can I travel to Riyadh directly from King Fahd International Airport?", answer: "Yes, a private car can meet you at the arrivals hall and drive directly to Riyadh without needing to go into central Dammam first." },
      { question: "Is there a train from Dammam to Riyadh?", answer: "Yes, the SAR East Line operates in this direction as well, though it requires reaching Dammam railway station rather than the airport." },
      { question: "How long does the road journey take?", answer: "Roughly three and a half to four hours under normal traffic conditions." },
      { question: "Can this journey start from the Bahrain Causeway instead of Dammam?", answer: "Yes, the Causeway crossing is a common starting point for this route, and a private car can collect you there directly." },
      { question: "Does a private transfer track my flight time?", answer: "Yes — a pre-arranged transfer can monitor an incoming flight and adjust the pickup time accordingly, which is one reason it's the preferred option for this specific arrival-heavy leg." },
      { question: "Is the drive time different depending on whether I start at the airport or the Causeway?", answer: "Not meaningfully — both sit close enough to central Dammam that the overall Highway 40 driving estimate applies to either starting point." },
    ],
    sources: [
      { label: "Dammam–Riyadh railway (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dammam%E2%80%93Riyadh_railway" },
      { label: "Riyadh to Dammam driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/riyadh-to-dammam-road-trip/" },
    ],
  },

  {
    slug: "riyadh-to-jeddah-distance",
    from: "Riyadh",
    to: "Jeddah",
    h1: "Riyadh to Jeddah Distance: How Far Is It, and Is It Practical to Drive?",
    metaTitle: "Riyadh to Jeddah Distance: KM, Travel Time & Fly vs Drive",
    metaDescription: "How far is Jeddah from Riyadh? Road distance on Highway 40, realistic driving time, the roughly two-hour flight, and how to choose between them.",
    eyebrow: "Long-Distance Road Trip Guide",
    dek: "One of the longest regularly-driven domestic routes in the Kingdom — most travellers weigh it explicitly against the two-hour flight.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈850-950 km",
        segments: [{ from: "Riyadh", to: "Jeddah", km: 948, displayValue: "842-967 km depending on source; ~948 km commonly cited" }],
        note: "Road-distance sources vary more here than on shorter routes. The flight distance (point to point, in the air) is considerably shorter, at around 852 km.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Fastest option", value: "Direct flight, ~1h50m" },
          { label: "Best for groups/luggage", value: "Private car, ~9 hours" },
          { label: "Key fact", value: "One of the longest regularly-driven domestic routes in the Kingdom" },
        ],
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Jeddah via Highway 40, a six-lane controlled-access motorway spanning 1,395 km end to end.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "Driving from Riyadh to Jeddah",
        steps: [
          { label: "Riyadh departure", detail: "Onto Highway 40 heading west, clearing the capital's outer districts before the road opens up." },
          { label: "The central plateau", detail: "A long, largely flat stretch across the Najd plateau — the section where most of the uninterrupted driving happens." },
          { label: "The Hijaz escarpment", detail: "The terrain changes noticeably as the highway descends toward the western mountains near the Taif turn-off, the most visually distinct part of the drive." },
          { label: "Approaching Jeddah", detail: "The final stretch onto the coastal plain, with traffic building as the highway meets the city's outer roads." },
          { label: "Jeddah arrival", detail: "Entering the city itself, where the exact destination — Corniche hotels, the airport, or onward to Makkah — determines the last leg." },
        ],
        note: "This is the standard Highway 40 routing; GPS providers occasionally suggest marginal variations but there's no meaningfully shorter alternative road.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~8.5 hours (theoretical, non-stop)",
        totalJourney: "~9 hours or more, once realistic stops are included",
        factors: [
          "This is one of the longest single drives in the country by any regular domestic standard",
          "A direct flight takes around one hour fifty minutes, operated by four airlines",
          "Most realistic planning treats this as a nine-hour-plus journey once stops are included",
          "Departure time affects how much Riyadh morning traffic you clear before the highway opens up, and how much Jeddah congestion you meet on arrival",
        ],
      },
      {
        type: "transportOptions",
        heading: "Driving vs Flying from Riyadh to Jeddah",
        options: [
          { mode: "Direct flight", suitability: "Travellers prioritising time over the road-trip experience", duration: "About 1 hour 50 minutes", advantages: "By far the fastest option for a distance of this length, served by four airlines", limitations: "Not door-to-door; requires airport transfers and check-in time at both ends" },
          { mode: "Private car / taxi", suitability: "Families and groups with a full vehicle-load of luggage, or anyone continuing on to Makkah or Taif on arrival in the west", duration: "Around 9 hours, typically with rest stops", advantages: "Door-to-door, one vehicle for the whole group and its luggage, no repeated security/check-in process", limitations: "A genuinely long single day of driving, or a day split with an overnight stop" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers who don't need door-to-door service", duration: "Longer than a direct drive, fixed schedule", advantages: "Lower cost than flying or a private car, part of the national SAPTCO network", limitations: "A very long journey on a shared, fixed-schedule vehicle, station-to-station rather than door-to-door" },
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning Stops on the Riyadh to Jeddah Drive",
        items: [
          { question: "Is a rest stop necessary on this route?", answer: "For most drivers, yes — 8.5 hours of continuous driving is demanding, and service stations along Highway 40 make at least one proper break practical rather than a luxury." },
          { question: "How many stops do travellers typically plan?", answer: "This varies by driver and passengers rather than being fixed — some treat it as one long push with a single fuel-and-stretch stop, others split it into two shorter driving blocks with a longer midway break." },
          { question: "Is an overnight stop common?", answer: "Some travellers departing later in the day choose to split the journey with an overnight stop rather than arriving very late; it's a personal-preference decision rather than an operational requirement." },
          { question: "Does the route pass through any major towns?", answer: "The highway is largely a direct desert corridor rather than routing through major intermediate cities, so services are found at highway rest stops rather than town centres." },
        ],
      },
      {
        type: "contextCard",
        heading: "Who Might Prefer Travelling by Road?",
        paragraphs: [
          "Objectively, most travellers without a specific reason to drive choose the roughly two-hour flight over a nine-hour road trip. The road makes sense for a narrower set of situations: a family or group travelling with more luggage than standard checked-baggage allowances comfortably cover, a party that wants to stay together in one vehicle rather than splitting across flights, or someone continuing directly on to Makkah or Taif once they reach the west — turning a single long drive into one journey rather than a flight plus a second overland transfer.",
          "Door-to-door convenience is the other genuine advantage: no airport transfers, no check-in or security queues at either end, and a fixed departure time that isn't subject to flight schedules. Against that, it is a full day given over to travel, and realistically requires planning around rest breaks rather than treating the 8.5-hour estimate as the whole story.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Continuing on to Makkah once you reach Jeddah? See <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah distance</a>. Comparing to the Eastern Province instead? See <a href='/distance/riyadh-to-dammam-distance'>Riyadh to Dammam distance</a>. Considering AlUla instead of Jeddah? See <a href='/distance/riyadh-to-alula-distance'>Riyadh to AlUla distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Jeddah private transfer",
        linkPath: "/routes/riyadh-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah from Riyadh?", answer: "Road-distance sources vary between about 842 and 967 km, with roughly 948 km commonly cited; the more direct flight distance is around 852 km." },
      { question: "How long does it take to travel from Riyadh to Jeddah?", answer: "Around nine hours by road including stops, or about one hour fifty minutes by direct flight." },
      { question: "Is it practical to drive from Riyadh to Jeddah?", answer: "It's done regularly, particularly by families with a full vehicle-load of luggage or groups wanting to travel together, but most travellers who don't have a specific reason to drive choose the roughly two-hour flight instead." },
      { question: "What is the fastest way to travel this route?", answer: "A direct flight, at under two hours, compared to roughly nine hours by road." },
      { question: "Is there a train between Riyadh and Jeddah?", answer: "No direct passenger rail line connects Riyadh and Jeddah; road and air are the two practical options." },
      { question: "Is an overnight stop common on this drive?", answer: "Some travellers split the drive with an overnight stop rather than attempting it in one push, particularly if departing later in the day." },
      { question: "Why do road-distance sources vary so much for this route?", answer: "Different measurement tools use different reference points within each large city and sometimes slightly different routing, which produces a wider spread than on shorter, more clearly defined routes." },
    ],
    sources: [
      { label: "Distance from Riyadh to Jeddah (distancecalculator.net)", url: "https://www.distancecalculator.net/from-riyadh-to-JEDDAH" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
      { label: "Riyadh to Jeddah flight time (travelmath.com)", url: "https://www.travelmath.com/flying-time/from/Riyadh,+Saudi+Arabia/to/Jeddah,+Saudi+Arabia" },
      { label: "Riyadh (RUH) to Jeddah (JED) distance (easemytrip.com)", url: "https://www.easemytrip.com/flights/distance-riyadh-ruh-to-jeddah-jed/" },
    ],
  },

  {
    slug: "riyadh-to-alula-distance",
    from: "Riyadh",
    to: "AlUla",
    h1: "Riyadh to AlUla Distance: How Far Is It and What's the Best Way to Get There?",
    metaTitle: "Riyadh to AlUla Distance: KM, Travel Time & Flight Option",
    metaDescription: "How far is AlUla from Riyadh? Road distance, realistic driving time, and the roughly 1h45m direct flight — including how frequently it runs.",
    eyebrow: "Heritage & Tourism Route Guide",
    dek: "One of the longest domestic distances in the Kingdom — and, unusually, AlUla has its own airport, making flying the practical default for most visitors.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈1,000-1,114 km",
        segments: [{ from: "Riyadh", to: "AlUla", km: 1060, displayValue: "1,000-1,114 km; ~1,060 km commonly cited" }],
        note: "Reported road distances vary more on this route than most, since it's one of the longest in the Kingdom.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to AlUla via King Fahd Road and King Abdulaziz Road.",
        origin: "Riyadh, Saudi Arabia",
        destination: "AlUla, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "Driving from Riyadh to AlUla",
        steps: [
          { label: "Riyadh departure", detail: "North-west out of the capital, joining Highway 65 toward Qassim." },
          { label: "Toward Qassim and Hail", detail: "A long stretch through central Najd — many road-trippers treat Buraidah or Hail as a natural overnight break roughly halfway." },
          { label: "The northern desert", detail: "Open terrain continues toward Madinah Province, with services becoming sparser than on more heavily travelled corridors." },
          { label: "Approaching AlUla", detail: "The landscape shifts to the sandstone valleys and rock formations AlUla is known for as the final stretch nears the town." },
        ],
        note: "This is one of the longer, less densely serviced domestic corridors — fuel and rest planning matter more here than on shorter coastal or central routes.",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Fastest option", value: "Direct flight, ~1h45m, ~14 flights/week" },
          { label: "Best for a multi-city road trip", value: "Private car, combining Hail or Madinah" },
          { label: "Key fact", value: "AlUla has its own airport (ULH), served directly from Riyadh" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "10-12 hours by road",
        totalJourney: "~1h45m by direct flight",
        factors: [
          "A full-day undertaking rather than something to attempt in a single uninterrupted push for most travellers",
          "As of the most recent data available, Riyadh–AlUla is served by both Flynas and Saudia, with around 14 flights a week",
          "Reflects AlUla's growth as a heritage-tourism destination — a genuinely frequent domestic route for its size",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Direct flight", suitability: "The large majority of tourism travellers, given the drive length", duration: "About 1 hour 45 minutes", advantages: "By far the fastest option; roughly 14 flights a week on this route, operated by Flynas and Saudia", limitations: "Not door-to-door; ground transport is still needed from AlUla's airport to a specific resort or hotel" },
          { mode: "Private car / taxi", suitability: "Travellers who want the desert crossing as part of the trip, or are combining AlUla with stops in Hail or Madinah", duration: "10-12 hours", advantages: "Door-to-door from your exact address to your specific AlUla accommodation; flexible for multi-city itineraries", limitations: "A very long single drive; typically split across a full day with planned stops" },
        ],
      },
      {
        type: "contextCard",
        heading: "AlUla as a Flight Destination",
        paragraphs: [
          "Unlike most of the routes on this site, AlUla itself has its own airport — Prince Abdul Majeed bin Abdulaziz International Airport (ULH) — and the roughly 1,000-km road distance from Riyadh is genuinely long enough that flying is the practical default for most heritage-tourism visitors rather than an alternative to consider.",
          "AlUla's resorts and heritage-site accommodation are spread across a large area, so regardless of whether you fly or drive, ground transport from the airport (or the end of the road journey) to your specific accommodation is a separate consideration worth planning for in advance.",
        ],
      },
      {
        type: "planningNotes",
        heading: "Planning a Road Trip to AlUla",
        items: [
          { question: "Is this drive usually done in one day?", answer: "It's a genuine full-day undertaking at 10-12 hours; many travellers who choose the road specifically want the trip itself, often splitting it with an overnight stop around Qassim or Hail rather than pushing straight through." },
          { question: "Why would someone drive instead of taking the 1h45m flight?", answer: "Mainly travellers combining AlUla with other northern stops — Hail's heritage sites or a Madinah leg — who want one continuous road trip rather than separate flights to each destination." },
          { question: "Does fuel and service availability matter on this route?", answer: "More than on shorter, busier corridors — this is one of the less densely serviced long-distance routes in the Kingdom, so planning fuel stops in advance is more relevant here than on the Riyadh-Jeddah or Riyadh-Dammam roads." },
          { question: "Is the drive different from a typical desert highway trip?", answer: "The final approach to AlUla is genuinely distinctive — sandstone valleys and rock formations replace the open desert of the earlier stretch, a visible change most travellers notice as they near the town." },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Approaching AlUla from Madinah instead? See <a href='/distance/madinah-to-alula-distance'>Madinah to AlUla distance</a>, a considerably shorter drive with no direct flight option currently available. Comparing to the Riyadh-Jeddah route? See <a href='/distance/riyadh-to-jeddah-distance'>Riyadh to Jeddah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to AlUla private transfer",
        linkPath: "/routes/riyadh-to-alula",
      },
    ],
    faqs: [
      { question: "How far is AlUla from Riyadh?", answer: "Road-distance sources vary between about 1,000 and 1,114 km, with roughly 1,060 km commonly cited." },
      { question: "Is there a direct flight from Riyadh to AlUla?", answer: "Yes, Flynas and Saudia both operate direct flights, with around 14 flights a week as of the most recent data, taking about one hour forty-five minutes." },
      { question: "How long does the road journey take?", answer: "Roughly ten to twelve hours depending on traffic, stops, and the exact route." },
      { question: "Is it practical to drive to AlUla from Riyadh?", answer: "It's done, particularly by travellers combining the trip with stops in Hail or Madinah, but given the roughly 1,000-km distance, most visitors fly instead." },
      { question: "Does AlUla have its own airport?", answer: "Yes — Prince Abdul Majeed bin Abdulaziz International Airport (ULH) serves AlUla directly, with routes from Riyadh and Jeddah." },
      { question: "Does a private transfer serve AlUla's airport specifically?", answer: "Yes — ground transport from ULH to a specific resort or heritage-site hotel is a common, separate leg worth arranging in advance given how spread out AlUla's accommodation is." },
      { question: "Is the flight frequency enough to plan around a specific date?", answer: "At around 14 flights a week across two airlines, it's a reasonably frequent route, though it's still worth confirming exact timings for your travel dates rather than assuming daily service at any hour." },
    ],
    sources: [
      { label: "Distance between Riyadh and AlUla (distancebetween2.com)", url: "https://distancebetween2.com/riyadh/alula" },
      { label: "Getting to and around AlUla (Experience AlUla, official)", url: "https://www.experiencealula.com/en/plan-your-trip/getting-to-and-around-alula" },
      { label: "Flights from AlUla (ULH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-al-ula-ulh" },
      { label: "Highway 65 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_65_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "madinah-to-alula-distance",
    from: "Madinah",
    to: "AlUla",
    h1: "Madinah to AlUla Distance: How Far Is It and How Do You Get There?",
    metaTitle: "Madinah to AlUla Distance: KM & Travel Time (Road, No Direct Flight)",
    metaDescription: "How far is AlUla from Madinah? Road distance and driving time — and why there's currently no direct flight between the two, based on available route data.",
    eyebrow: "Heritage & Tourism Route Guide",
    dek: "A much shorter distance than the Riyadh route, and — unlike Riyadh or Jeddah — currently no direct flight, making the road the default choice.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈330-368 km",
        segments: [{ from: "Madinah", to: "AlUla", km: 330, displayValue: "330-368 km; ~330 km most commonly cited" }],
        note: "A much shorter and more manageable distance than the roughly 1,000-km Riyadh-to-AlUla route.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Madinah to AlUla through open desert terrain.",
        origin: "Madinah, Saudi Arabia",
        destination: "AlUla, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "Practical option", value: "Private car — no direct flight currently connects the two cities" },
          { label: "Typical drive time", value: "4 to 5 hours" },
          { label: "Key fact", value: "AlUla's direct flight routes serve Riyadh and Jeddah, not Madinah" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-5 hours",
        factors: [
          "Manageable in a single day, which is why it's commonly added on to an existing Madinah stay",
          "Based on currently available route data, no direct flight connects Madinah and AlUla",
          "Flying would require routing via Riyadh or Jeddah first, a meaningfully longer overall journey than driving directly",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for almost all travellers on this specific route, given the lack of a direct flight", duration: "4-5 hours", advantages: "Door-to-door from a Madinah hotel to a specific AlUla resort or heritage-site accommodation, no connecting flights needed", limitations: "A genuine multi-hour drive, though shorter than most other AlUla approach routes" },
        ],
      },
      {
        type: "prose",
        heading: "Why This Route Is Usually Driven, Not Flown",
        narrow: true,
        paragraphs: [
          "Unlike the Riyadh-to-AlUla and Jeddah-to-AlUla connections, there is currently no direct flight route between Madinah and AlUla in available route data — AlUla's air links run to Riyadh and Jeddah specifically, not Madinah. A traveller wanting to fly this leg would need to route through one of those cities, adding a connection and generally more total travel time than simply driving the roughly 330 km directly.",
          "This makes the drive the default choice for pilgrims extending a Madinah visit with an AlUla heritage stop — a manageable distance that doesn't require the flight-versus-drive decision that the much longer Riyadh route does.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Approaching AlUla from the capital instead? See <a href='/distance/riyadh-to-alula-distance'>Riyadh to AlUla distance</a>, where a direct flight is genuinely the practical option. Continuing from Makkah to Madinah first? See <a href='/distance/makkah-to-madinah-distance'>Makkah to Madinah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Madinah to AlUla private transfer",
        linkPath: "/routes/madinah-to-alula",
      },
    ],
    faqs: [
      { question: "How far is AlUla from Madinah?", answer: "Road-distance sources vary between about 330 and 368 km, with 330 km being the most commonly cited figure." },
      { question: "Is there a direct flight from Madinah to AlUla?", answer: "Not based on currently available route data — AlUla's direct flight connections serve Riyadh and Jeddah; a Madinah traveller wanting to fly would need to connect through one of those cities." },
      { question: "How long does the road journey take?", answer: "Approximately four to five hours through open desert terrain." },
      { question: "Is this a common route for pilgrims to add on?", answer: "Yes — the relatively short, single-day drive makes it a common extension for visitors already in Madinah for a pilgrimage stay." },
      { question: "Is a private car practical for this journey?", answer: "Yes, and given the lack of a direct flight, it's the standard way to make this specific journey." },
      { question: "Would connecting via Riyadh or Jeddah be faster than driving directly?", answer: "Not usually — adding a connection through either city, plus the onward AlUla flight, generally takes longer overall than the direct ~330 km drive." },
      { question: "Does the exact distance depend on which AlUla resort I'm headed to?", answer: "Slightly — AlUla's heritage-site resorts and accommodation are spread across a fairly large area, so the final few kilometres vary by specific destination." },
    ],
    sources: [
      { label: "Distance from Medina to Al Ula (costtotravel.com)", url: "https://www.costtotravel.com/how-far/from-medina-saudi-arabia-to-al-ula-saudi-arabia" },
      { label: "Distance from Medina to AlUla (dashdistance.com)", url: "https://dashdistance.com/medina-sa/alula-sa" },
      { label: "Getting to and around AlUla (Experience AlUla, official)", url: "https://www.experiencealula.com/en/plan-your-trip/getting-to-and-around-alula" },
      { label: "Flights from AlUla (ULH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-al-ula-ulh" },
    ],
  },

  {
    slug: "jeddah-to-taif-distance",
    from: "Jeddah",
    to: "Taif",
    h1: "Jeddah to Taif Distance: How Far Is It and What's the Al-Hada Road Like?",
    metaTitle: "Jeddah to Taif Distance: KM, Travel Time & the Al-Hada Mountain Road",
    metaDescription: "How far is Taif from Jeddah? Road distance via the Al-Hada mountain road, driving time, and the roughly 50-minute flight alternative.",
    eyebrow: "Mountain Route Distance Guide",
    dek: "A road distance that covers a significant elevation climb, not just flat kilometres — the Al-Hada mountain road is part of the story here.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈170-200 km",
        segments: [{ from: "Jeddah", to: "Taif", km: 171, displayValue: "171-200 km; ~170-171 km most commonly cited" }],
        note: "This distance covers a significant elevation gain up the Al-Hada mountain road, not just flat highway kilometres.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Jeddah to Taif via Al-Hada Road, climbing from sea level to Taif's highland elevation.",
        origin: "Jeddah, Saudi Arabia",
        destination: "Taif, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "The Climb Up Al-Hada Road",
        steps: [
          { label: "Leaving coastal Jeddah", detail: "Sea-level departure, heading inland and upward." },
          { label: "The Al-Hada ascent", detail: "A mountain pass engineered with guardrails and frequent turnouts for the climb." },
          { label: "Arrival in Taif", detail: "Noticeably cooler highland elevation, a genuine climate change from the coast." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~2 hours by road",
        totalJourney: "~50 minutes by direct flight",
        factors: [
          "Most of the drive time is spent on the climb itself, not covering flat distance quickly",
          "Direct flights between Jeddah and Taif take around 50 minutes in the air when they operate; schedules change, so check current flights with the airline",
          "The winding mountain road can cause motion sickness for some travellers, so pace matters more here than on a flat highway",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, particularly families or anyone wanting to add stops along the mountain road", duration: "About 2 hours", advantages: "Door-to-door, and the ascent itself — with the changing scenery and temperature drop — is often part of the appeal rather than something to avoid", limitations: "The winding mountain road can cause motion sickness for some travellers, and pace matters more here than on a flat highway" },
          { mode: "Direct flight", suitability: "Travellers prioritising speed over the scenic drive", duration: "About 50 minutes", advantages: "Fast in the air; check current schedules with the airline", limitations: "Skips the Al-Hada road experience entirely, and still requires ground transport at both ends" },
        ],
      },
      {
        type: "prose",
        heading: "The Al-Hada Mountain Road and Elevation Change",
        narrow: true,
        paragraphs: [
          "Taif sits at a considerably higher elevation than coastal Jeddah, and the Al-Hada Road is the main route connecting them — a mountain pass specifically engineered to handle the steep ascent safely, with guardrails and turnouts built in along the way. This elevation change is also why Taif is noticeably cooler than Jeddah for much of the year, a genuine climate difference rather than just a change of scenery.",
          "Because the road involves sustained curves during the climb, it's worth planning for if you or anyone travelling with you is prone to motion sickness — a private car allows a stop partway up in a way a fixed-schedule option wouldn't.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the descent instead? See <a href='/distance/taif-to-jeddah-distance'>Taif to Jeddah distance</a>. Continuing on to Makkah from Jeddah? See <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Jeddah to Taif private transfer",
        linkPath: "/routes/jeddah-to-taif",
      },
    ],
    faqs: [
      { question: "How far is Taif from Jeddah?", answer: "Road-distance sources vary between roughly 171 and 200 km, with about 170-171 km most commonly cited." },
      { question: "What road connects Jeddah and Taif?", answer: "The Al-Hada Road, a mountain pass specifically engineered for the climb up to Taif's highland elevation, with guardrails and turnouts along the ascent." },
      { question: "Is there a flight between Jeddah and Taif?", answer: "Direct flights have operated on this route, taking about 50 minutes in the air. Schedules change, so check current flights with the airline before planning around one." },
      { question: "How long does the road journey take?", answer: "Approximately two hours, most of it spent climbing the Al-Hada mountain road." },
      { question: "Is the mountain road difficult for those prone to motion sickness?", answer: "It involves a sustained series of curves during the climb, so travellers prone to motion sickness may want to plan for a stop partway up." },
      { question: "Is Taif's cooler climate noticeable immediately on arrival?", answer: "Yes — the elevation gain is substantial enough that the temperature difference from coastal Jeddah is genuinely noticeable, not a marginal change." },
      { question: "Can a private transfer stop partway up the mountain road?", answer: "Yes — this is one of the practical advantages of a private car on this route, since a fixed-schedule flight or bus can't accommodate an unplanned stop for motion sickness or photos." },
    ],
    sources: [
      { label: "Distance Jeddah to Taif (distance.to)", url: "https://www.distance.to/Jeddah/Taif" },
      { label: "Jeddah to Taif road trip guide (finalrentals-ksa.com)", url: "https://www.finalrentals-ksa.com/blog/single/jeddah-to-taif-road-trip-guide-for-mountain-views-and-cool-air" },
      { label: "Direct flights from Taif to Jeddah (flightsfrom.com)", url: "https://www.flightsfrom.com/TIF-JED" },
    ],
  },

  // ── Pilgrimage corridor — departure direction ───────────────────────────
  {
    slug: "makkah-to-jeddah-distance",
    from: "Makkah",
    to: "Jeddah",
    h1: "Makkah to Jeddah Distance: How Far Is It, and Does Your Jeddah Destination Change the Answer?",
    metaTitle: "Makkah to Jeddah Distance: KM, Travel Time & Airport vs City Center",
    metaDescription: "How far is Jeddah from Makkah? Road distance, driving time, the Haramain train, and why it depends on whether you're headed to Jeddah's airport or city centre.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "Most often a departure journey — leaving Makkah after a pilgrimage stay — where the real distance depends on whether you're flying out or staying in Jeddah.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈85-95 km",
        segments: [{ from: "Makkah", to: "Jeddah", km: 90, displayValue: "82-95 km depending on your Jeddah destination" }],
        note: "King Abdulaziz International Airport is around 85 km from central Makkah — closer than most points in central or southern Jeddah.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Makkah to Jeddah via Highway 40, most often travelled as a departure journey.",
        origin: "Makkah, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "To Jeddah Airport (JED)", value: "Around 85 km — the shorter end of the range" },
          { label: "To central Jeddah", value: "Can run to 95 km or more" },
          { label: "Key fact", value: "Makkah has no airport — every onward flight starts with this exact leg" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "60-90 minutes",
        totalJourney: "90-120 minutes during Ramadan and Hajj",
        factors: [
          "This is frequently an end-of-trip journey timed against a flight departure — build in a buffer beyond the base driving estimate",
          "Realistic planning during peak pilgrimage periods should assume 90 to 120 minutes rather than the off-peak figure",
          "An airport-bound traveller should build in extra time ahead of check-in and security specifically",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers timing their departure against a specific flight, or families and groups with luggage", duration: "60-90 minutes (longer in peak season)", advantages: "Direct to the airport terminal or a specific Jeddah hotel, flight time can be tracked for pickup timing, no transfers", limitations: "Subject to road traffic, which matters more here given how often this leg is tied to a flight departure" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers comfortable managing their own luggage from the Makkah station through to the airport or city", duration: "Part of the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h", advantages: "Fast, fixed schedule, avoids road traffic — useful for a predictable flight-timed departure", limitations: "The Makkah station sits in Al Rusaifah, about 3-4 km from the Haram, so reaching it from a Haram-area hotel requires a short local transfer first" },
          { mode: "SAPTCO intercity bus", suitability: "Budget-conscious travellers without a flight to catch", duration: "Longer than a direct drive, subject to the bus schedule", advantages: "Lower cost, part of a nationwide network", limitations: "Fixed departure times make it less suitable for a flight-timed departure" },
        ],
      },
      {
        type: "prose",
        heading: "Leaving Makkah: Airport Departure vs. a Jeddah City Stay",
        narrow: true,
        paragraphs: [
          "Because Makkah has no airport of its own, every pilgrim or visitor flying onward has to make this exact leg — and the practical distance for that traveller is specifically to King Abdulaziz International Airport, around 85 km away, rather than to Jeddah as a whole. For travellers instead continuing to a few days in Jeddah before flying home, the relevant distance is to their specific hotel, which can run closer to 95 km depending on location.",
          "This distinction matters for timing a departure: an airport-bound traveller should build in buffer time ahead of check-in and security, while a city-bound traveller has more flexibility and can treat the same 60-90 minute range as a rough guide rather than a hard deadline.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Arriving in Makkah instead? See <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah distance</a>, the reverse direction. Departed Madinah last? See <a href='/distance/madinah-to-jeddah-distance'>Madinah to Jeddah distance</a>.",
      },
      {
        type: "cta",
        text: "Timing your departure against a flight?",
        linkLabel: "See our Makkah to Jeddah private transfer",
        linkPath: "/routes/makkah-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah Airport from Makkah?", answer: "About 85 km by road, on the shorter end of the Makkah-to-Jeddah distance range, since the airport sits on Jeddah's north side closer to Makkah than central Jeddah does." },
      { question: "How many kilometres is Makkah from Jeddah?", answer: "Road distance is generally cited between 82 and 95 km depending on the exact start and end points; the straight-line distance is about 68 km." },
      { question: "Should I build in extra time if I'm catching a flight from Makkah?", answer: "Yes — beyond the base 60-90 minute driving estimate, build in buffer time for check-in and security, and expect longer journey times during Hajj and Ramadan specifically." },
      { question: "Is there a train from Makkah to Jeddah?", answer: "Yes, the Haramain High-Speed Railway connects Makkah's Al Rusaifah station to Jeddah, including a station near the airport, though reaching the Makkah station from a Haram-area hotel needs a short local transfer first." },
      { question: "Does the distance depend on whether I'm going to the airport or the city?", answer: "Yes — the airport is closer to Makkah than central or southern Jeddah is, so your specific destination changes the real distance meaningfully." },
      { question: "Can a private transfer be timed precisely against my flight?", answer: "Yes — this is the main advantage of a private car on this specific leg, since pickup time can be set with a buffer that accounts for check-in and security rather than a fixed departure slot." },
      { question: "Does peak-season traffic affect the airport leg differently from the city leg?", answer: "Both are affected similarly by Ramadan and Hajj traffic on the approach out of Makkah, though the airport leg carries more risk since a flight has a fixed departure time a city stay doesn't." },
    ],
    sources: [
      { label: "Distance between Jeddah and Makkah (distancebetween2.com)", url: "https://distancebetween2.com/jeddah/makkah" },
      { label: "Jeddah to Mecca driving distance (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Jeddah,+Saudi+Arabia/to/Mecca,+Saudi+Arabia" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
      { label: "Why there is no airport in Makkah (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
    ],
  },

  {
    slug: "madinah-to-jeddah-distance",
    from: "Madinah",
    to: "Jeddah",
    h1: "Madinah to Jeddah Distance: How Far Is It, and How Should You Plan a Departure Journey?",
    metaTitle: "Madinah to Jeddah Distance: KM, Flight Time & Departure Planning",
    metaDescription: "How far is Jeddah from Madinah? Road distance, the roughly one-hour flight, the Haramain train, and what to know when this is your last leg before flying home.",
    eyebrow: "Pilgrimage Route Distance Guide",
    dek: "Very often the last domestic leg of a pilgrimage trip before an international flight from Jeddah — timing matters as much as the raw distance.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈410-420 km",
        segments: [{ from: "Madinah", to: "Jeddah", km: 415, displayValue: "409-420 km via Highway 15" }],
        note: "The same route as the outbound direction, passing Badr and the coastal corridor via Rabigh and KAEC.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Madinah to Jeddah via Highway 15, often timed against an international flight.",
        origin: "Madinah, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Fastest option", value: "Direct flight, ~1 hour, 441 flights/week" },
          { label: "Fastest ground option", value: "Haramain High-Speed Railway" },
          { label: "Best for a flight-timed departure", value: "Private car, hotel to airport, 4-5 hours" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-5 hours by road",
        totalJourney: "~1 hour by direct flight",
        factors: [
          "A long enough journey that most travellers with an international flight to catch build in a substantial buffer",
          "The direct flight is very frequently served, at roughly 441 flights a week across four airlines",
          "King Abdulaziz International Airport sits on Jeddah's north side, generally a slightly shorter final approach than continuing into central Jeddah",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Direct flight", suitability: "Travellers connecting onward to an international flight from Jeddah, or anyone prioritising a predictable, short journey", duration: "About 1 hour in the air", advantages: "By far the fastest option, very high flight frequency (around 441 flights per week), straightforward connection to an onward international departure", limitations: "Airport check-in and security add time beyond the 1-hour flight itself; requires transferring at Jeddah's airport rather than arriving door-to-door" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers wanting a fast ground option that still connects near the airport", duration: "Part of the 449 km, up-to-300-km/h Jeddah–Makkah–Madinah line", advantages: "Fast, avoids road traffic, and the Jeddah end of the line includes a station near King Abdulaziz Airport", limitations: "The Madinah station is about 8-10 km from Masjid an-Nabawi, requiring a local transfer to reach it first" },
          { mode: "Private car / taxi", suitability: "Families and groups with luggage, or travellers who'd rather go hotel-to-airport in one direct trip without a station transfer", duration: "4-5 hours", advantages: "Hotel-to-airport in a single vehicle, flexible timing built around an actual flight departure", limitations: "The longest of the three options in pure travel time, which matters more here given how often this is a flight-timed journey" },
        ],
      },
      {
        type: "prose",
        heading: "Planning This Leg as an International Departure Day",
        narrow: true,
        paragraphs: [
          "For many pilgrims, this is the last domestic leg before flying home internationally from Jeddah, having visited Madinah after Makkah — which makes the choice between the roughly one-hour flight, the Haramain train, and the four-to-five-hour drive less about cost alone and more about how much buffer time is available before an international check-in deadline.",
          "Because King Abdulaziz International Airport sits on Jeddah's north side, travellers flying onward internationally are generally looking at a slightly shorter final approach than those continuing into central Jeddah for a stay — worth factoring in when comparing timing estimates against a specific international flight.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making this trip in the outbound direction? See <a href='/distance/jeddah-to-madinah-distance'>Jeddah to Madinah distance</a>. Departed Makkah last instead? See <a href='/distance/makkah-to-jeddah-distance'>Makkah to Jeddah distance</a>.",
      },
      {
        type: "cta",
        text: "Timing your international departure from Jeddah?",
        linkLabel: "See our Madinah to Jeddah private transfer",
        linkPath: "/routes/madinah-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Madinah from Jeddah?", answer: "Road distance is generally cited between 409 and 420 km via Highway 15, the same distance as the Jeddah-to-Madinah direction." },
      { question: "Is there a direct flight from Madinah to Jeddah?", answer: "Yes, it's a very frequently served route — around 441 flights per week across four airlines, with a flight time of about one hour." },
      { question: "How much buffer time should I plan if I'm flying internationally from Jeddah?", answer: "This isn't something we can state a fixed number for, since it depends on your airline's specific check-in requirements — but given the roughly one-hour domestic flight or four-to-five-hour drive from Madinah, most travellers build in a meaningful buffer beyond the base travel time before an international departure." },
      { question: "Is there a train between Madinah and Jeddah?", answer: "Yes, the Haramain High-Speed Railway connects Madinah directly to Jeddah, including a station near King Abdulaziz International Airport." },
      { question: "What's the fastest way to reach Jeddah's airport from Madinah?", answer: "A direct flight, at around one hour, is the fastest option; the Haramain train is the fastest ground option and connects near the airport." },
      { question: "Can a private transfer go directly from a Madinah hotel to Jeddah's airport?", answer: "Yes — a single hotel-to-airport trip without a station transfer is one of the main reasons travellers choose a private car for this specific departure leg." },
      { question: "Does driving leave enough margin for an international flight?", answer: "It can, but the four-to-five-hour drive leaves less margin for unexpected delays than the one-hour flight or train — worth weighing against how firm your international check-in deadline is." },
    ],
    sources: [
      { label: "Jeddah to Madinah driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/jeddah-to-medina-road-trip-stops-2026/" },
      { label: "Jeddah to Medina by car (harmaincab.com)", url: "https://harmaincab.com/jeddah-to-medina-by-car/" },
      { label: "Jeddah to Madinah flight schedule and frequency (flightsfrom.com)", url: "https://www.flightsfrom.com/JED-MED" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
    ],
  },

  {
    slug: "taif-to-jeddah-distance",
    from: "Taif",
    to: "Jeddah",
    h1: "Taif to Jeddah Distance: How Far Is It, and What's the Descent Like?",
    metaTitle: "Taif to Jeddah Distance: KM, the Al-Hada Descent & Travel Time",
    metaDescription: "How far is Jeddah from Taif? Road distance down the Al-Hada mountain road, driving time, and the roughly 50-minute flight alternative.",
    eyebrow: "Mountain Route Distance Guide",
    dek: "The same distance as the outbound climb, but a descent — with a steady drop in elevation and a noticeable rise in temperature along the way.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈170-200 km",
        segments: [{ from: "Taif", to: "Jeddah", km: 171, displayValue: "171-200 km; ~170-171 km most commonly cited" }],
        note: "Same distance as the Jeddah-to-Taif direction — a descent via Al-Hada Road rather than a climb.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Taif to Jeddah, descending Al-Hada Road from highland elevation to the coast.",
        origin: "Taif, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "The Descent Down Al-Hada Road",
        steps: [
          { label: "Leaving highland Taif", detail: "Cooler elevation departure, heading down toward the coast." },
          { label: "The Al-Hada descent", detail: "A steady drop in elevation and a noticeable rise in temperature along the way." },
          { label: "Arrival in coastal Jeddah", detail: "The road levels out onto the coastal approach." },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~2 hours by road",
        totalJourney: "~50 minutes by direct flight",
        factors: [
          "The descent down Al-Hada Road forms a substantial part of the journey before it levels out onto the coastal approach",
          "Direct flights between Taif and Jeddah take around 50 minutes in the air when they operate; schedules change, so check current flights with the airline",
          "Useful for a same-day connection to an onward flight from Jeddah, landing close to the airport itself",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, particularly those who'd rather not manage airport check-in for a short domestic hop", duration: "About 2 hours", advantages: "Door-to-door, and the descent offers clear views down toward the coast as the elevation drops", limitations: "The winding mountain road can cause motion sickness for some travellers on the way down just as it can on the way up" },
          { mode: "Direct flight", suitability: "Travellers prioritising speed, especially those connecting onward from Jeddah's airport", duration: "About 50 minutes", advantages: "Fast, and useful for a same-day connection to an onward flight from Jeddah", limitations: "Skips the Al-Hada road descent entirely, and still requires ground transport at both ends" },
        ],
      },
      {
        type: "prose",
        heading: "Descending Al-Hada Road: What Changes Heading Downhill",
        narrow: true,
        paragraphs: [
          "Travelling from Taif to Jeddah means descending rather than climbing Al-Hada Road, and while the distance is identical to the outbound direction, the drive itself has a different character — a steady drop in elevation and, correspondingly, a noticeable rise in temperature as the road leaves Taif's cooler highland climate and approaches Jeddah's coastal heat.",
          "For travellers connecting onward from Jeddah — particularly to an international flight from King Abdulaziz International Airport — the roughly 50-minute flight from Taif can be the more practical option, landing close to the airport itself rather than requiring the full drive into the city first.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making the outbound climb instead? See <a href='/distance/jeddah-to-taif-distance'>Jeddah to Taif distance</a>. Continuing on from Jeddah? See <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Taif to Jeddah private transfer",
        linkPath: "/routes/taif-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah from Taif?", answer: "Road-distance sources vary between roughly 171 and 200 km, with about 170-171 km most commonly cited — the same distance as the Jeddah-to-Taif direction." },
      { question: "Is the drive down from Taif easier than the drive up?", answer: "The distance and general road conditions are the same in both directions; some travellers find a descent more comfortable than a climb, though the road's curves are present either way." },
      { question: "Is there a flight from Taif to Jeddah?", answer: "Direct flights have operated on this route, taking about 50 minutes in the air. Schedules change, so check current flights with the airline before planning around one." },
      { question: "How long does the road journey take?", answer: "Approximately two hours, including the descent down Al-Hada Road." },
      { question: "Is flying useful if I'm connecting to an international flight from Jeddah?", answer: "It can be — landing at Jeddah's airport directly avoids the drive into the city first, which may suit a tight onward connection better than the two-hour road option." },
      { question: "Does the temperature change noticeably during the descent?", answer: "Yes — leaving Taif's cooler highland climate for Jeddah's coastal heat is a genuine, noticeable shift, not a subtle one." },
      { question: "Is a private car still practical for a short domestic hop like this?", answer: "Yes — many travellers prefer it precisely because it avoids airport check-in and security for what is otherwise a short trip." },
    ],
    sources: [
      { label: "Distance Jeddah to Taif (distance.to)", url: "https://www.distance.to/Jeddah/Taif" },
      { label: "Jeddah to Taif road trip guide (finalrentals-ksa.com)", url: "https://www.finalrentals-ksa.com/blog/single/jeddah-to-taif-road-trip-guide-for-mountain-views-and-cool-air" },
      { label: "Direct flights from Taif to Jeddah (flightsfrom.com)", url: "https://www.flightsfrom.com/TIF-JED" },
    ],
  },

  // ── Red Sea coast — Jeddah / Yanbu / KAEC ───────────────────────────────
  {
    slug: "jeddah-to-yanbu-distance",
    from: "Jeddah",
    to: "Yanbu",
    h1: "Jeddah to Yanbu Distance: How Far Is It Up the Red Sea Coast?",
    metaTitle: "Jeddah to Yanbu Distance: KM, Travel Time & Coastal Highway Route",
    metaDescription: "How far is Yanbu from Jeddah? Road distance up the Red Sea coastal highway, driving time, and how it shifts between Yanbu Al Bahr and the industrial city.",
    eyebrow: "Coastal Route Distance Guide",
    dek: "Yanbu isn't one destination — the historic port, the Red Sea tourism areas, and the separate industrial city each sit at a slightly different distance.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈330-350 km",
        segments: [{ from: "Jeddah", to: "Yanbu", km: 340, displayValue: "330-350 km via the Red Sea coastal highway" }],
        note: "The straight-line distance is around 310 km. Your specific destination within greater Yanbu affects the exact figure.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Jeddah to Yanbu via the Red Sea coastal highway, passing KAEC and Rabigh.",
        origin: "Jeddah, Saudi Arabia",
        destination: "Yanbu, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Typical driving time", value: "About 3.5 hours" },
          { label: "Limited flight option", value: "Saudia SV1582, ~1h10m, twice weekly" },
          { label: "Key fact", value: "Yanbu spans old town/port, coastal tourism, and a separate industrial city" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~3.5 hours",
        factors: [
          "A manageable single-day trip rather than requiring an overnight stop",
          "Traffic is generally lighter than the busier Jeddah-Makkah or Jeddah-Madinah pilgrimage corridors",
          "Conditions can vary around KAEC and Rabigh, where the highway passes through more built-up areas",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, particularly those headed to Yanbu's diving resorts or Red Sea tourism areas rather than a fixed transit point", duration: "About 3.5 hours", advantages: "Door-to-door to a specific resort, dive centre, or address within greater Yanbu — useful given how spread out the area is", limitations: "A genuine multi-hour drive; the exact time depends on which part of Yanbu is the final destination" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers without heavy luggage", duration: "Longer than a direct drive, on a fixed schedule", advantages: "Lower cost, connects into the national SAPTCO network", limitations: "Station-to-station rather than door-to-door, less practical for reaching a specific resort or dive site" },
          { mode: "Direct flight (Saudia, limited frequency)", suitability: "Travellers for whom the exact schedule works, given the limited flight frequency", duration: "About 1 hour 10 minutes in the air", advantages: "Avoids the road drive entirely for the small number of scheduled flights available", limitations: "Operates only a few times a week (twice weekly, per Saudia's published schedule as flight number SV1582), so it's not a flexible option most travellers can plan around" },
        ],
      },
      {
        type: "contextCard",
        heading: "Yanbu Is More Than One Destination",
        paragraphs: [
          "Yanbu isn't a single point but a large urban area with genuinely different districts: Yanbu Al Bahr, the historic port town and old city; the Red Sea diving and coastal tourism areas that have grown around it; and Yanbu Al Sinaiyah, the large Royal Commission for Jubail and Yanbu industrial city built from 1975 onward around the King Fahd Industrial Port. These sit at different distances from Jeddah, so 'how far to Yanbu' genuinely depends on which of these you mean.",
          "For travellers heading to Yanbu specifically for Red Sea diving or coastal tourism, the relevant distance is generally to the coastal/old-town side of Yanbu; for business travel connected to the petrochemical or industrial sector, the industrial city sits at a slightly different point and is worth confirming as the specific destination before estimating total travel time.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction? See <a href='/distance/yanbu-to-jeddah-distance'>Yanbu to Jeddah distance</a>. Comparing to KAEC, closer to Jeddah? See <a href='/distance/jeddah-to-kaec-distance'>Jeddah to KAEC distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Jeddah to Yanbu private transfer",
        linkPath: "/routes/jeddah-to-yanbu",
      },
    ],
    faqs: [
      { question: "How far is Yanbu from Jeddah?", answer: "Road-distance sources generally place the figure between roughly 330 and 350 km via the Red Sea coastal highway, with the exact distance depending on which part of Yanbu you're headed to." },
      { question: "How long does the drive take?", answer: "About three and a half hours under normal driving conditions — a manageable single-day trip." },
      { question: "Is there a flight between Jeddah and Yanbu?", answer: "Yes, but with limited frequency — Saudia operates a direct flight (flight number SV1582) roughly twice a week, taking about 1 hour 10 minutes, so it isn't a flexible option most travellers can rely on for specific dates." },
      { question: "Does the distance change depending on which part of Yanbu I'm going to?", answer: "Yes — Yanbu's old town/port area, its Red Sea diving and tourism areas, and the separate Royal Commission industrial city sit at slightly different distances from Jeddah, so your specific destination matters." },
      { question: "Is this a busy route with heavy traffic?", answer: "Generally lighter than the Jeddah-Makkah or Jeddah-Madinah pilgrimage corridors, since it isn't a pilgrimage route, though traffic can vary around KAEC and Rabigh where the highway passes through built-up areas." },
      { question: "Can a private transfer confirm which part of Yanbu I need in advance?", answer: "Yes — given how spread out greater Yanbu is, confirming the exact resort, dive centre, or industrial-city address in advance helps set an accurate pickup and arrival estimate." },
      { question: "Is the road well maintained for the whole journey?", answer: "Yes — it's a well-maintained coastal highway for its full length, passing through KAEC and Rabigh before continuing north." },
    ],
    sources: [
      { label: "Distance from Jeddah to Yanbu (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-yanbu" },
      { label: "Flights from Yanbu (YNB) to Jeddah (JED) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-ynb-to-jed" },
      { label: "Royal Commission for Jubail and Yanbu (Wikipedia)", url: "https://en.wikipedia.org/wiki/Royal_Commission_for_Jubail_and_Yanbu" },
    ],
  },

  {
    slug: "yanbu-to-jeddah-distance",
    from: "Yanbu",
    to: "Jeddah",
    h1: "Yanbu to Jeddah Distance: How Far Is It, and What Should Airport-Bound Travellers Know?",
    metaTitle: "Yanbu to Jeddah Distance: KM, Travel Time & Airport Connections",
    metaDescription: "How far is Jeddah from Yanbu? Road distance down the Red Sea coastal highway, driving time, and what to know if you're connecting to a flight from Jeddah's airport.",
    eyebrow: "Coastal Route Distance Guide",
    dek: "Where within greater Yanbu you're starting from changes the real distance — worth confirming before estimating total travel time to Jeddah.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈330-350 km",
        segments: [{ from: "Yanbu", to: "Jeddah", km: 340, displayValue: "330-350 km via the coastal highway" }],
        note: "The industrial city (Yanbu Al Sinaiyah) generally sits a little further from Jeddah than the old town and coastal areas.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Yanbu to Jeddah via the Red Sea coastal highway, passing Rabigh and KAEC.",
        origin: "Yanbu, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "strip",
        items: [
          { label: "Typical driving time", value: "About 3.5 hours" },
          { label: "Limited flight option", value: "Saudia SV1582, ~1h10m, twice weekly" },
          { label: "Key fact", value: "Starting point within greater Yanbu affects the exact distance" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~3.5 hours",
        factors: [
          "For travellers timing this against a flight from Jeddah's airport, build in buffer time beyond the base driving estimate",
          "A 3.5-hour journey leaves less margin for unexpected delays than a shorter transfer would",
          "Traffic is generally lighter than the pilgrimage-heavy Jeddah-Makkah and Jeddah-Madinah corridors",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers connecting to a flight from Jeddah's airport, or anyone wanting door-to-door pickup from a specific Yanbu location", duration: "About 3.5 hours", advantages: "Can pick up directly from a dive resort, hotel, or industrial-city address, with flight time factored into departure planning", limitations: "A genuine multi-hour drive that needs buffer time if a flight connection is involved" },
          { mode: "Direct flight (Saudia, limited frequency)", suitability: "Travellers whose dates align with the limited available flights", duration: "About 1 hour 10 minutes in the air", advantages: "Avoids the road drive for the scheduled flights that are available, landing near Jeddah's airport for onward connections", limitations: "Operates only around twice a week as flight SV1582 per Saudia's published schedule, so it can't be relied on for a specific arbitrary date" },
          { mode: "SAPTCO intercity bus", suitability: "Budget travellers without a flight to catch", duration: "Longer than a direct drive, fixed schedule", advantages: "Lower cost, part of the national network", limitations: "Fixed timetable, less suitable for a flight-timed departure" },
        ],
      },
      {
        type: "contextCard",
        heading: "Starting Point Within Yanbu Affects the Real Distance",
        paragraphs: [
          "Because greater Yanbu spans the old port town, Red Sea tourism and diving areas, and the separate Royal Commission industrial city built from 1975 around the King Fahd Industrial Port, the true starting distance to Jeddah depends on where within Yanbu the journey begins — a pickup from a Red Sea dive resort and a pickup from the industrial city are not quite the same distance, even though both are 'Yanbu' in a general sense.",
          "For travellers making this journey to connect onward internationally from Jeddah's King Abdulaziz International Airport, treating the roughly 3.5-hour drive as a minimum rather than a fixed figure — and building in a buffer for the international check-in deadline — is the more realistic way to plan than assuming the base driving time alone.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making the outbound trip instead? See <a href='/distance/jeddah-to-yanbu-distance'>Jeddah to Yanbu distance</a>. Comparing to a closer coastal option? See <a href='/distance/kaec-to-jeddah-distance'>KAEC to Jeddah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Yanbu to Jeddah private transfer",
        linkPath: "/routes/yanbu-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah from Yanbu?", answer: "Road-distance sources generally place the figure between roughly 330 and 350 km via the Red Sea coastal highway, the same range as the outbound direction." },
      { question: "How long does the drive take?", answer: "About three and a half hours under normal driving conditions." },
      { question: "Is there a flight from Yanbu to Jeddah?", answer: "Yes, but at limited frequency — Saudia operates a direct flight (SV1582) roughly twice a week, taking about 1 hour 10 minutes, so it shouldn't be relied on for an arbitrary specific date." },
      { question: "Should I build in extra time if I'm connecting to an international flight from Jeddah?", answer: "It's worth treating the roughly 3.5-hour drive as a minimum and adding buffer time for an international check-in deadline, since it's a long enough journey that unexpected delays leave less margin than a short in-city transfer would." },
      { question: "Does my starting point within Yanbu matter?", answer: "Yes — Yanbu's old town/port area, its coastal tourism zones, and the separate industrial city sit at slightly different distances from Jeddah, so the exact starting point affects the real driving distance." },
      { question: "Can a private transfer collect me from a Yanbu dive resort specifically?", answer: "Yes — a pre-arranged transfer can pick up from a specific resort, hotel, or industrial-city address rather than a generic city-centre point." },
      { question: "Is the industrial city further from Jeddah than the old town?", answer: "Generally, yes — Yanbu Al Sinaiyah tends to sit a little further from Jeddah than the historic port and coastal tourism areas." },
    ],
    sources: [
      { label: "Distance from Jeddah to Yanbu (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-yanbu" },
      { label: "Flights from Yanbu (YNB) to Jeddah (JED) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-ynb-to-jed" },
      { label: "Royal Commission for Jubail and Yanbu (Wikipedia)", url: "https://en.wikipedia.org/wiki/Royal_Commission_for_Jubail_and_Yanbu" },
    ],
  },

  {
    slug: "jeddah-to-kaec-distance",
    from: "Jeddah",
    to: "KAEC",
    h1: "Jeddah to KAEC Distance: How Far Is It, and Is the Haramain Train an Option?",
    metaTitle: "Jeddah to KAEC Distance: KM, Travel Time & Haramain Train Option",
    metaDescription: "How far is King Abdullah Economic City from Jeddah? Road distance, driving time, and the Haramain train's Hejaz Gate station serving KAEC directly.",
    eyebrow: "Coastal Route Distance Guide",
    dek: "KAEC is a large master-planned city, not a single address — the Hejaz Gate train station, Bay La Sun, and the industrial zone sit at different points.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈100-125 km",
        segments: [{ from: "Jeddah", to: "KAEC", km: 112, displayValue: "100-125 km via the coastal highway" }],
        note: "The exact distance and time depend on which part of KAEC's large master-planned area you're headed to.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Jeddah to King Abdullah Economic City via the Red Sea coastal highway.",
        origin: "Jeddah, Saudi Arabia",
        destination: "King Abdullah Economic City, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Typical driving time", value: "About 1 hour to 1 hour 15 minutes" },
          { label: "Haramain station", value: "Hejaz Gate, under 30 minutes from Jeddah city/airport" },
          { label: "Key fact", value: "KAEC includes a train station, a business/marina district, and an industrial/port zone" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "1 hour to 1 hour 15 minutes",
        factors: [
          "One of the shorter and more straightforward routes on this corridor",
          "KAEC's Haramain station also serves as a stop on the same high-speed line connecting Jeddah, Makkah, and Madinah",
          "The train is a genuine time-competitive alternative here in a way it isn't for shorter, more local trips",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, particularly those headed to a specific business address, residential development, or the port/industrial zone", duration: "About 1 hour to 1 hour 15 minutes", advantages: "Door-to-door to a specific address within KAEC's large master-planned area, no station transfer needed", limitations: "Subject to ordinary highway traffic conditions" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers headed to or near the Hejaz Gate station specifically, or connecting onward toward Makkah or Madinah", duration: "A stop on the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h", advantages: "KAEC's Hejaz Gate station is under 30 minutes from both Jeddah city and King Abdulaziz International Airport, and under an hour to Makkah or Madinah", limitations: "Only practical if your specific KAEC destination is near the Hejaz Gate station; other parts of KAEC still need a local transfer from there" },
        ],
      },
      {
        type: "contextCard",
        heading: "KAEC Is a Large City, Not One Address",
        paragraphs: [
          "King Abdullah Economic City is a genuinely large master-planned development, with the Hejaz Gate Haramain train station, the Bay La Sun business park and marina district, residential communities, and a separate industrial/port zone all sitting at different points within it — 'distance to KAEC' from Jeddah depends meaningfully on which of these is the actual destination.",
          "For business travellers, Bay La Sun's business park is a common destination and generally reachable within the stated driving time range; for travellers connecting via the Haramain train specifically, the Hejaz Gate station's under-30-minute link to both Jeddah city and its airport makes KAEC a genuinely convenient stop on a wider Jeddah-Makkah-Madinah rail itinerary.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction? See <a href='/distance/kaec-to-jeddah-distance'>KAEC to Jeddah distance</a>. Continuing further up the coast to Yanbu? See <a href='/distance/jeddah-to-yanbu-distance'>Jeddah to Yanbu distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Jeddah to KAEC private transfer",
        linkPath: "/routes/jeddah-to-kaec",
      },
    ],
    faqs: [
      { question: "How far is KAEC from Jeddah?", answer: "Road-distance sources generally place the figure between roughly 100 and 125 km, depending on which part of KAEC's large master-planned area is the destination." },
      { question: "How long does the drive take?", answer: "About one hour to one hour fifteen minutes under normal driving conditions." },
      { question: "Is there a train to KAEC?", answer: "Yes — the Haramain High-Speed Railway has a station at KAEC's Hejaz Gate, under 30 minutes from both Jeddah city and King Abdulaziz International Airport, and under an hour from Makkah or Madinah." },
      { question: "Does the distance change depending on where in KAEC I'm going?", answer: "Yes — KAEC includes the Hejaz Gate train station area, the Bay La Sun business and residential district, and separate industrial/port zones, all at slightly different distances from Jeddah." },
      { question: "Is a private car or the train better for reaching KAEC?", answer: "It depends on your specific destination within KAEC — the train is convenient if you're headed near the Hejaz Gate station, while a private car is more practical for other parts of the city, including the business park or industrial zone." },
      { question: "Can a private transfer reach KAEC's industrial/port zone specifically?", answer: "Yes — a pre-arranged private transfer can go directly to a specific address in the industrial or port zone, which the Haramain station alone doesn't reach without a further local transfer." },
      { question: "Is KAEC a common stop on a wider pilgrimage itinerary?", answer: "It can be, particularly for travellers using the Haramain train, since KAEC's Hejaz Gate station connects within an hour to both Makkah and Madinah on the same line." },
    ],
    sources: [
      { label: "King Abdullah Economic City (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Abdullah_Economic_City" },
      { label: "Distance from Jeddah to KAEC (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-king-abdullah-economic-city" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
    ],
  },

  {
    slug: "kaec-to-jeddah-distance",
    from: "KAEC",
    to: "Jeddah",
    h1: "KAEC to Jeddah Distance: How Far Is It, and What Are the Airport Connection Options?",
    metaTitle: "KAEC to Jeddah Distance: KM, Travel Time & Airport Transfers",
    metaDescription: "How far is Jeddah from King Abdullah Economic City? Road distance, driving time, and options for connecting to King Abdulaziz International Airport.",
    eyebrow: "Coastal Route Distance Guide",
    dek: "For KAEC's growing residential and business community, this leg is very often a direct airport-connection trip rather than a trip into central Jeddah.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈100-125 km",
        segments: [{ from: "KAEC", to: "Jeddah", km: 112, displayValue: "100-125 km via the coastal highway" }],
        note: "King Abdulaziz International Airport sits on Jeddah's north side, generally making it a slightly shorter approach from KAEC than continuing into central Jeddah.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "King Abdullah Economic City to Jeddah via the coastal highway.",
        origin: "King Abdullah Economic City, Saudi Arabia",
        destination: "Jeddah, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Typical driving time", value: "About 1 hour to 1 hour 15 minutes" },
          { label: "Haramain station", value: "Hejaz Gate, under 30 minutes from Jeddah city/airport" },
          { label: "Key fact", value: "King Abdulaziz International Airport is generally the closest Jeddah approach from KAEC" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "1 hour to 1 hour 15 minutes",
        factors: [
          "One of the shorter, more predictable routes on this corridor",
          "For travellers connecting to a flight, the airport's location on Jeddah's north side generally makes it the shortest approach from KAEC",
          "Those based near KAEC's Hejaz Gate Haramain station can reach Jeddah city or its airport in under 30 minutes by train",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Business travellers and residents connecting to King Abdulaziz International Airport or a specific Jeddah address", duration: "About 1 hour to 1 hour 15 minutes", advantages: "Door-to-door from a specific KAEC address to the airport terminal or a Jeddah destination, no station transfer needed", limitations: "Subject to ordinary highway traffic conditions" },
          { mode: "Haramain High-Speed Railway", suitability: "Travellers based near KAEC's Hejaz Gate station specifically", duration: "A stop on the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h", advantages: "Under 30 minutes to both Jeddah city and King Abdulaziz International Airport from the Hejaz Gate station", limitations: "Only convenient if your KAEC starting point is near the Hejaz Gate station; other parts of KAEC need a local transfer to reach it first" },
        ],
      },
      {
        type: "contextCard",
        heading: "A Common Route for Airport Connections",
        paragraphs: [
          "For KAEC's growing residential and business community, this leg is very often a direct airport-connection trip rather than a trip into Jeddah's city centre — King Abdulaziz International Airport sits on Jeddah's north side, making it a comparatively short and predictable transfer from KAEC compared to continuing further into the city.",
          "For those based specifically near KAEC's Hejaz Gate Haramain station, the train offers a genuinely fast under-30-minute link to both Jeddah city and its airport, making it worth considering alongside a private car depending on exactly where within KAEC the journey starts.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making the outbound trip instead? See <a href='/distance/jeddah-to-kaec-distance'>Jeddah to KAEC distance</a>. Continuing further to Yanbu? See <a href='/distance/yanbu-to-jeddah-distance'>Yanbu to Jeddah distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our KAEC to Jeddah private transfer",
        linkPath: "/routes/kaec-to-jeddah",
      },
    ],
    faqs: [
      { question: "How far is Jeddah from KAEC?", answer: "Road-distance sources generally place the figure between roughly 100 and 125 km, the same range as the outbound direction, depending on the exact starting point within KAEC." },
      { question: "How long does the drive take?", answer: "About one hour to one hour fifteen minutes under normal driving conditions." },
      { question: "Is KAEC a good base for reaching Jeddah's airport?", answer: "It's a comparatively short and predictable transfer, since King Abdulaziz International Airport sits on Jeddah's north side, generally the closest approach from KAEC compared to continuing further into the city." },
      { question: "Is there a train from KAEC to Jeddah?", answer: "Yes, from KAEC's Hejaz Gate Haramain station, which is under 30 minutes from both Jeddah city and King Abdulaziz International Airport — though it's only convenient if your KAEC starting point is near that station." },
      { question: "Does my starting point within KAEC affect the distance?", answer: "Yes — KAEC's Hejaz Gate area, the Bay La Sun business district, and the industrial/port zones sit at slightly different distances from Jeddah." },
      { question: "Can a private transfer pick me up from a specific KAEC residential address?", answer: "Yes — a pre-arranged transfer can collect you from a specific home, office, or the industrial zone rather than a generic city point." },
      { question: "Is this route used mainly by residents or by tourists?", answer: "Primarily by KAEC's residential and business community connecting to Jeddah's airport or city, rather than tourism traffic, which tends to concentrate on other corridors." },
    ],
    sources: [
      { label: "King Abdullah Economic City (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Abdullah_Economic_City" },
      { label: "Distance from Jeddah to KAEC (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-king-abdullah-economic-city" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
    ],
  },

  // ── Eastern Province airport & border corridor ──────────────────────────
  {
    slug: "dammam-airport-to-khobar-distance",
    from: "Dammam Airport",
    to: "Khobar",
    h1: "Dammam Airport to Khobar Distance: How Far Is the Transfer, and How Long Does It Take?",
    metaTitle: "Dammam Airport to Khobar Distance: KM & Realistic Transfer Time",
    metaDescription: "How far is King Fahd International Airport from Khobar? Road distance, realistic driving time, and why the exact figure depends on which part of Khobar you're headed to.",
    eyebrow: "Airport Transfer Distance Guide",
    dek: "King Fahd International Airport isn't adjacent to Khobar — it sits on a large dedicated site serving the whole Dammam-Khobar-Dhahran area.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈45-56 km",
        segments: [{ from: "Dammam Airport", to: "Khobar", km: 50, displayValue: "45-56 km depending on the exact area of Khobar" }],
        note: "Straight-line distance is around 45 km. King Fahd International Airport serves the wider Dammam-Khobar-Dhahran area, not one city.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "King Fahd International Airport to Khobar via Highway 65/King Fahd Road.",
        origin: "King Fahd International Airport, Saudi Arabia",
        destination: "Al Khobar, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "Typical driving time", value: "35 to 45 minutes" },
          { label: "Peak-hour effect", value: "Longer during weekday commuting hours" },
          { label: "Key fact", value: "The airport serves the wider Dammam-Khobar-Dhahran metropolitan area" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "35-45 minutes",
        factors: [
          "Largely via Highway 65/King Fahd Road connecting the airport zone to the Eastern Province's coastal cities",
          "Can extend during peak weekday commuting hours, when the connecting highways carry heavier traffic",
          "Airport-adjacent congestion at flight-heavy periods can add to the start of the journey before reaching open highway",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Almost all arriving travellers, especially those with luggage or connecting directly to a hotel or business meeting", duration: "35-45 minutes to central Khobar", advantages: "Direct from the arrivals hall to a specific Khobar address, no transfers, flight time can be tracked for pickup timing", limitations: "Subject to road traffic, particularly during weekday peak commuting hours" },
          { mode: "SAPTCO airport bus / intercity connections", suitability: "Budget travellers without heavy luggage", duration: "Longer than a direct transfer, on a scheduled timetable", advantages: "Lower cost, connects into SAPTCO's wider Eastern Province network", limitations: "Fixed schedule, not door-to-door to a specific Khobar address" },
        ],
      },
      {
        type: "prose",
        heading: "Why 'Distance to Khobar' Isn't One Fixed Number",
        narrow: true,
        paragraphs: [
          "Because King Fahd International Airport serves the whole Dammam-Khobar-Dhahran metropolitan area rather than sitting inside any one of the three cities, the real transfer distance depends heavily on your specific destination within Khobar — a hotel near the Corniche on Khobar's western edge is a noticeably different distance from the airport than an address on Khobar's southern side, nearer Dhahran and the causeway.",
          "This also means that if your onward plans involve continuing past Khobar — to the King Fahd Causeway toward Bahrain, for instance — it's worth thinking of the airport transfer as the first leg of a longer trip rather than a fixed, standalone distance.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Continuing onward to Bahrain from Khobar? See <a href='/distance/khobar-to-bahrain-distance'>Khobar to Bahrain distance</a>. Flying in for the Eastern Province directly? See <a href='/distance/dammam-airport-to-bahrain-distance'>Dammam Airport to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam Airport to Khobar private transfer",
        linkPath: "/routes/dammam-airport-to-khobar",
      },
    ],
    faqs: [
      { question: "How far is Dammam Airport from Khobar?", answer: "Sources vary between roughly 45 and 56 km, depending on the exact area of Khobar used as the destination — central Khobar and the Corniche area give somewhat different figures than Khobar's southern edge." },
      { question: "How long does the transfer from the airport to Khobar take?", answer: "Roughly 35 to 45 minutes under normal traffic conditions, and longer during weekday peak commuting hours." },
      { question: "Why does the distance vary so much for this route?", answer: "King Fahd International Airport is built on a large dedicated site outside all three Eastern Province cities it serves, and 'Khobar' itself covers a substantial area, so the exact distance depends on both which part of the airport and which part of Khobar are used as endpoints." },
      { question: "Is a private car the best option for this transfer?", answer: "Yes — it's a direct, door-to-door option from the arrivals hall to a specific Khobar address, without the fixed schedule of a bus service." },
      { question: "Does this transfer connect onward to the King Fahd Causeway?", answer: "It can — the airport-to-Khobar leg is often the first part of a longer trip toward the causeway and Bahrain, which adds further distance beyond this figure." },
      { question: "Is the Corniche area a useful reference point for pickup?", answer: "Yes — it's a well-known part of Khobar often used as a general reference, though your specific hotel or address will differ from it by some margin." },
      { question: "Is traffic worse at certain times of day?", answer: "Yes — weekday peak commuting hours on the highways connecting the airport to Dammam and Khobar carry noticeably heavier traffic than off-peak periods." },
    ],
    sources: [
      { label: "Distance from King Fahd International Airport to Khobar (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Dammam+Airport,+Saudi+Arabia/to/Al+Khobar,+Saudi+Arabia" },
      { label: "King Fahd International Airport (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
  },

  {
    slug: "khobar-to-bahrain-distance",
    from: "Khobar",
    to: "Bahrain",
    h1: "Khobar to Bahrain Distance: How Far Is the Causeway, and How Long Does the Crossing Take?",
    metaTitle: "Khobar to Bahrain Distance: KM, Causeway Crossing Time & Border Info",
    metaDescription: "How far is Bahrain from Khobar? Distance to the King Fahd Causeway, the 25 km crossing itself, realistic border time, and how far into Bahrain you're really going.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "Two distances matter here: how far to the Saudi causeway entrance, and how far the 25 km bridge itself runs — total time depends far more on the border than the drive.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈45-55 km to the causeway, plus the 25 km bridge",
        segments: [
          { from: "Khobar", to: "Causeway entrance", km: 50, displayValue: "45-55 km" },
          { from: "Causeway entrance", to: "Bahraini side", km: 25, displayValue: "~25 km bridge crossing" },
        ],
        note: "Khobar sits closer to the King Fahd Causeway than Dammam does, since the causeway's Saudi terminus is on the coast near Khobar.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Khobar to the King Fahd Causeway, then across to the Bahraini side.",
        origin: "Al Khobar, Saudi Arabia",
        destination: "Manama, Bahrain",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Causeway bridge length", value: "Approximately 25 km, Saudi coast to Bahraini coast" },
          { label: "Khobar to causeway entrance", value: "Roughly 45-55 km" },
          { label: "Biggest time variable", value: "Border processing time, not the driving distance" },
        ],
      },
      {
        type: "borderNote",
        heading: "The King Fahd Causeway Crossing",
        paragraphs: [
          "A meaningful share of the Khobar-to-Bahrain trip is the causeway bridge and border facility rather than open road — the roughly 25 km King Fahd Causeway includes an artificial island partway across where Saudi exit and Bahraini entry procedures both take place, and it's this step, not the driving distance on either side, that most affects total trip time.",
          "Where exactly you're headed in Bahrain changes the real distance meaningfully: central Manama is a further 20-25 km past the border facility, while some parts of the Bahraini side nearer the causeway landing are considerably closer — so 'distance to Bahrain' and 'distance to your specific hotel in Bahrain' are genuinely different numbers.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "30-40 minutes to the causeway",
        totalJourney: "1-2 hours total including border processing",
        factors: [
          "The border facility at the midpoint — where both Saudi exit and Bahraini entry formalities are handled — is what actually determines total crossing time",
          "This can extend well beyond the base estimate on weekends and public holidays, when the causeway carries heavy passenger-vehicle volume",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Most travellers, especially those wanting door-to-door service without transferring vehicles at the border", duration: "1-2 hours total, more at peak weekend times", advantages: "No vehicle change at the border, flexible departure timing, direct to a specific Manama hotel or destination", limitations: "Subject to causeway queue length, which varies significantly by day and time" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Starting from Dammam instead? See <a href='/distance/dammam-to-bahrain-distance'>Dammam to Bahrain distance</a>. Travelling from Bahrain back to Khobar? See <a href='/distance/bahrain-to-khobar-distance'>Bahrain to Khobar distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Khobar to Bahrain private transfer",
        linkPath: "/routes/khobar-to-bahrain",
      },
    ],
    faqs: [
      { question: "How far is Bahrain from Khobar?", answer: "Roughly 45-55 km from central Khobar to the Saudi side of the King Fahd Causeway, plus the approximately 25 km bridge crossing itself — total distance to a specific Bahrain destination depends on where you're headed once across." },
      { question: "How long does the King Fahd Causeway crossing take?", answer: "The drive to the causeway is about 30-40 minutes; total trip time including border processing commonly runs 1 to 2 hours, and longer on weekends when passenger-vehicle volume is heaviest." },
      { question: "Is Khobar closer to the causeway than Dammam?", answer: "Yes — Khobar sits nearer the Saudi terminus of the causeway than Dammam does, so the driving portion from Khobar is somewhat shorter." },
      { question: "Does the distance change depending on where in Bahrain I'm going?", answer: "Yes — central Manama is roughly 20-25 km past the Bahraini border facility, so a trip to Manama is meaningfully longer than simply reaching the Bahraini side of the causeway." },
      { question: "What documents are typically needed at the border?", answer: "Requirements vary by nationality and change periodically — check current requirements with Saudi Arabia's passport authority and Bahraini immigration before travelling rather than relying on a fixed list here." },
      { question: "Is weekend crossing significantly slower?", answer: "Yes — weekends and public holidays are known for heavier passenger-vehicle volume at the causeway, which extends border-processing time beyond a typical weekday." },
      { question: "Is there scheduled coach service across the causeway?", answer: "Cross-border coach service on this corridor has existed in the past, but availability changes; check directly with the operator for current status rather than assuming a fixed schedule. A private vehicle avoids the question entirely." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "King Fahd Causeway Authority — official crossing information", url: "https://www.kfca.com.sa/" },
      { label: "Distance from Khobar to Manama (distance.to)", url: "https://www.distance.to/Al-Khobar/Manama" },
    ],
  },

  {
    slug: "dammam-to-bahrain-distance",
    from: "Dammam",
    to: "Bahrain",
    h1: "Dammam to Bahrain Distance: How Far Is It, and Is Flying an Option?",
    metaTitle: "Dammam to Bahrain Distance: KM, Causeway Crossing Time & Flight Option",
    metaDescription: "How far is Bahrain from Dammam? Distance to the King Fahd Causeway, realistic crossing time, and the roughly 45-minute direct flight alternative to Manama.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "The one route on this corridor where a direct flight is a genuine alternative to the causeway drive, since Dammam has its own international airport.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈60-70 km to the causeway, plus the 25 km bridge",
        segments: [
          { from: "Dammam", to: "Causeway entrance", km: 65, displayValue: "60-70 km" },
          { from: "Causeway entrance", to: "Bahraini side", km: 25, displayValue: "~25 km bridge crossing" },
        ],
        note: "Dammam sits somewhat further from the causeway than Khobar. By air, the flight distance is around 85 km.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Dammam to the King Fahd Causeway, then across to Bahrain.",
        origin: "Dammam, Saudi Arabia",
        destination: "Manama, Bahrain",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Causeway bridge length", value: "Approximately 25 km, Saudi coast to Bahraini coast" },
          { label: "Direct flight option", value: "About 45 minutes, ~19 flights/week across 6 airlines" },
          { label: "Key fact", value: "Dammam is the only nearby Eastern Province city with its own airport served directly to Bahrain" },
        ],
      },
      {
        type: "borderNote",
        heading: "The King Fahd Causeway Crossing",
        paragraphs: [
          "By road, allow 45 to 60 minutes to reach the causeway from Dammam, then a further stretch for the crossing and border processing — total trip time to a Bahrain destination commonly runs 1.5 to 2.5 hours, and longer at weekends when the causeway sees its heaviest volume.",
          "Because Dammam has its own international airport, this route has an option Khobar's causeway page doesn't: a short direct flight to Bahrain International Airport, entirely bypassing the causeway and its border queue.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "45-60 minutes to the causeway",
        totalJourney: "1.5-2.5 hours total by road, or ~45 minutes by direct flight",
        factors: [
          "Gulf Air is the most-used carrier on the roughly 45-minute Dammam-to-Bahrain hop, with about 19 flights a week across 6 airlines",
          "Border processing time varies independently of driving distance and tends to be higher at weekends",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Direct flight (DMM–BAH)", suitability: "Travellers prioritising speed and wanting to avoid the causeway border queue entirely", duration: "About 45 minutes in the air", advantages: "Bypasses road traffic and the causeway crossing entirely; a genuinely frequent route with roughly 19 flights a week across 6 airlines", limitations: "Airport check-in and security add time beyond the 45-minute flight; not door-to-door" },
          { mode: "Private car / taxi", suitability: "Travellers who want door-to-door service, are bringing more luggage than carry-on allowances, or prefer not to fly a short domestic-style hop", duration: "1.5-2.5 hours total, more at weekends", advantages: "No vehicle change at the border, direct to a specific Manama hotel or destination", limitations: "Subject to causeway queue length, which is the main source of unpredictability on this route" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Starting from Khobar instead? See <a href='/distance/khobar-to-bahrain-distance'>Khobar to Bahrain distance</a>. Flying directly from Dammam's airport? See <a href='/distance/dammam-airport-to-bahrain-distance'>Dammam Airport to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Dammam to Bahrain private transfer",
        linkPath: "/routes/dammam-to-bahrain",
      },
    ],
    faqs: [
      { question: "How far is Bahrain from Dammam?", answer: "Roughly 60-70 km from central Dammam to the Saudi side of the King Fahd Causeway, plus the approximately 25 km bridge crossing; by air, the flight distance is around 85 km." },
      { question: "Is there a direct flight from Dammam to Bahrain?", answer: "Yes — roughly 19 flights a week operate between Dammam and Bahrain International Airport across 6 airlines, with Gulf Air the most frequently used carrier and a flight time of about 45 minutes." },
      { question: "How long does the causeway crossing take from Dammam?", answer: "The drive to the causeway takes about 45-60 minutes; total trip time including border processing commonly runs 1.5 to 2.5 hours, longer at weekends." },
      { question: "Is Dammam further from the causeway than Khobar?", answer: "Yes — Dammam sits further back from the coastal causeway terminus than Khobar, so the driving portion is somewhat longer." },
      { question: "Should I drive or fly from Dammam to Bahrain?", answer: "It depends on your priorities: flying avoids the causeway border queue and takes about 45 minutes in the air, while driving offers door-to-door service without a vehicle change at the border." },
      { question: "Which airline flies this route most often?", answer: "Gulf Air is the most frequently used carrier on the Dammam-Bahrain hop, though several of the 6 airlines serving the route also operate flights." },
      { question: "Is the flight or the drive better for avoiding weekend congestion?", answer: "The flight avoids weekend causeway congestion entirely, which is the busiest period for road crossings — worth considering if your travel dates fall on a weekend." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Flights from Dammam (DMM) to Bahrain (BAH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-dammam-dmm-to-bahrain-bah" },
      { label: "Distance from Dammam to Manama (distance.to)", url: "https://www.distance.to/Dammam/Manama" },
    ],
  },

  {
    slug: "riyadh-to-qatar-border-distance",
    from: "Riyadh",
    to: "the Qatar Border",
    h1: "Riyadh to Qatar Border Distance: How Far Is the Salwa Crossing, and How Is It Different From the Distance to Doha?",
    metaTitle: "Riyadh to Qatar Border Distance: KM to Salwa/Abu Samra & Travel Time",
    metaDescription: "How far is the Qatar border from Riyadh? Road distance to Salwa/Abu Samra via Al Hofuf, realistic driving time, and how it differs from the distance to Doha.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "The drive to the Salwa/Abu Samra crossing point and the drive to Doha itself are two different figures — this page covers the border leg specifically.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈460-500 km to the border",
        segments: [{ from: "Riyadh", to: "Salwa/Abu Samra border", km: 480, displayValue: "460-500 km via Al Hofuf" }],
        note: "Total Riyadh-to-Doha air distance is around 578 km, for reference — a different figure from this border-only driving distance.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to the Salwa/Abu Samra border crossing via Al Kharj, Al Hofuf, and Salwa.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Salwa Border Crossing, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "The Drive to the Border",
        steps: [
          { label: "Riyadh departure", detail: "South-east toward Al Kharj." },
          { label: "Al Hofuf", detail: "The main waypoint on the Riyadh–Al Hofuf–Salwa road." },
          { label: "Salwa border arrival", detail: "The sole land crossing between Saudi Arabia and Qatar." },
        ],
      },
      {
        type: "borderNote",
        heading: "Border Distance vs. Doha Distance: Two Different Numbers",
        paragraphs: [
          "It's worth being precise about what 'Riyadh to Qatar' means as a distance question: the drive to the Salwa/Abu Samra crossing point itself is roughly 460-500 km, but that is not the same as the distance to Doha, which sits further into Qatar beyond the border. A traveller heading specifically to Doha should treat the border-crossing distance as a waypoint, not the destination.",
          "Because this is Saudi Arabia and Qatar's only land border crossing, it carries all road traffic between the two countries — passenger vehicles, commercial freight, and everything in between — which is part of why border-processing time is the least predictable part of this route, more so than the driving distance itself.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "5-6 hours to the border",
        factors: [
          "This figure covers driving time only — it does not include time spent at the border crossing itself",
          "Travellers continuing on to Doha should add the further Qatari-side driving distance and time on top of both figures",
          "Border-crossing processing time tends to affect total trip time more than the driving distance itself",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Almost all travellers making this crossing, given the lack of practical rail or short-haul flight alternatives for a land-border trip", duration: "5-6 hours driving to the border, plus border processing and any onward driving to Doha", advantages: "Door-to-door from Riyadh to the border crossing (or onward into Qatar), flexible timing around border conditions", limitations: "A long single drive, and total time is significantly affected by border-crossing conditions on the day of travel" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Comparing to the Bahrain crossing instead? See <a href='/distance/riyadh-to-bahrain-distance'>Riyadh to Bahrain distance</a>. Comparing to the Eastern Province directly? See <a href='/distance/riyadh-to-dammam-distance'>Riyadh to Dammam distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to travel to the Qatar border by private vehicle?",
        linkLabel: "See our Riyadh to Qatar Border private transfer",
        linkPath: "/routes/riyadh-to-qatar-border",
      },
    ],
    faqs: [
      { question: "How far is the Qatar border from Riyadh?", answer: "Roughly 460-500 km via the Riyadh–Al Hofuf–Salwa road to the Salwa/Abu Samra crossing, according to independently cross-checked route sources." },
      { question: "Is the distance to the Qatar border the same as the distance to Doha?", answer: "No — the border crossing is a waypoint, not the destination. The total Riyadh-to-Doha air distance is around 578 km, and travellers continuing to Doha need to add the further driving distance on the Qatari side of the border." },
      { question: "How long does the drive to the border take?", answer: "Roughly five to six hours of driving under normal conditions, not counting time spent at the border crossing itself." },
      { question: "Is this the only land crossing between Saudi Arabia and Qatar?", answer: "Yes — Salwa (on the Saudi side) and Abu Samra (on the Qatari side) form the sole land border crossing between the two countries." },
      { question: "What affects total journey time the most?", answer: "Border-crossing processing time, which varies by traffic volume and vehicle checks on the day of travel, tends to affect total trip time more than the driving distance itself." },
      { question: "Is a rest stop realistic on this drive?", answer: "Yes — at 460-500 km of largely open desert highway, most travellers plan for at least one rest stop before reaching the crossing." },
      { question: "Does commercial freight traffic affect this crossing?", answer: "Yes — as the sole land crossing between the two countries, this border carries both passenger and commercial freight traffic, which can affect processing time at busy periods." },
    ],
    sources: [
      { label: "Salwa/Abu Samra border crossing overview (logcluster.org logistics assessment)", url: "https://dlca.logcluster.org/saudi-arabia-qatar-border-crossing-salwa" },
      { label: "Riyadh to Doha distance and route discussion (Tripadvisor travel forum)", url: "https://www.tripadvisor.com/ShowTopic-g293947-i379-k11294857-Driving_from_Riyadh_to_Doha-Doha.html" },
      { label: "Riyadh to Doha air distance (saakin.qa)", url: "https://saakin.qa/en/blog/distance-from-riyadh-to-doha" },
    ],
  },

  {
    slug: "dammam-airport-to-bahrain-distance",
    from: "Dammam Airport",
    to: "Bahrain",
    h1: "Dammam Airport to Bahrain Distance: How Far Is It via the King Fahd Causeway?",
    metaTitle: "Dammam Airport to Bahrain Distance: KM & Causeway Travel Time",
    metaDescription: "How far is Bahrain from Dammam Airport? Driving distance via the King Fahd Causeway, approximate travel time, and how it varies by your Bahrain destination.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "King Fahd International Airport's own published figures put this at around 103 km — an airport-specific starting point, not central Dammam.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈103 km (64 miles) to central Manama",
        segments: [{ from: "Dammam Airport", to: "Manama", km: 103, displayValue: "103 km via the King Fahd Causeway" }],
        note: "This figure comes from King Fahd International Airport's own published distance data. It covers driving time only, not border processing.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "King Fahd International Airport to Manama via the King Fahd Causeway.",
        origin: "King Fahd International Airport, Saudi Arabia",
        destination: "Manama, Bahrain",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Causeway length", value: "25 km, connecting Al Khobar (Saudi) and Al Jasra (Bahrain)" },
          { label: "Border facility", value: "Passport Island — one-stop Saudi/Bahraini crossing since 2017" },
          { label: "Key fact", value: "The 103 km / 90-min figure is King Fahd Airport's own published distance to Manama specifically" },
        ],
      },
      {
        type: "borderNote",
        heading: "Bahrain Airport, Manama, or Elsewhere — the Distance Depends on Where You Mean",
        paragraphs: [
          "'Bahrain' is not a single point, and the 103-kilometre figure above is specifically to central Manama. If your actual destination is Bahrain International Airport on Muharraq Island rather than the city, or a specific hotel in the Seef District or Diplomatic Area, the real distance from Dammam Airport will differ from the Manama figure by a meaningful margin.",
          "The King Fahd Causeway's border facility sits on Passport Island, roughly midway across, and has operated as a one-stop crossing for Saudi exit and Bahraini entry formalities since 2017. How long that takes on any given day depends on traffic at the crossing, which tends to build at weekends and around public holidays.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~90 minutes",
        totalJourney: "Plus a variable amount of time at Passport Island",
        factors: [
          "This 90-minute figure is a driving-time estimate only, based on the airport's own published data",
          "Total journey time is better thought of as 'roughly 90 minutes of driving, plus a variable amount of time at the border' than a single fixed number",
          "No public transport service covers this specific airport-to-country route",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The realistic option for this specific airport-to-country journey, since no public transport service covers this exact route", duration: "~90 minutes driving, plus border processing", advantages: "Direct from arrivals to a specific Bahrain address, no transfer between vehicles at the border", limitations: "Subject to how busy the King Fahd Causeway border facility is at the time of travel" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction from Bahrain's airport? See <a href='/distance/bahrain-airport-to-dammam-distance'>Bahrain Airport to Dammam distance</a>. Starting from central Dammam instead? See <a href='/distance/dammam-to-bahrain-distance'>Dammam to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Dammam Airport to Bahrain private transfer",
        linkPath: "/routes/dammam-airport-to-bahrain",
      },
    ],
    faqs: [
      { question: "How far is Bahrain from Dammam Airport?", answer: "King Fahd International Airport's own published figures put the driving distance to central Manama at around 103 kilometres (64 miles), with a driving time of roughly 90 minutes before border processing." },
      { question: "Can I travel directly from Dammam Airport to Bahrain?", answer: "Yes — the route runs from the airport directly toward the King Fahd Causeway without needing to pass through central Dammam first, since the airport already sits closer to the northbound highway." },
      { question: "Does border processing affect the total journey time?", answer: "Yes. The 90-minute figure covers driving only. Time at the Passport Island border facility varies by how busy the crossing is when you travel, and can't be predicted precisely in advance." },
      { question: "Is the distance to Bahrain International Airport the same as to Manama?", answer: "No. Bahrain International Airport sits on Muharraq Island, a different point from central Manama, so the real distance depends on which of these is your actual destination." },
      { question: "Is there a train or bus between Dammam Airport and Bahrain?", answer: "No public transport service covers this specific airport-to-country route; a private car crossing the King Fahd Causeway is the practical option." },
      { question: "Since when has Passport Island operated as a one-stop crossing?", answer: "Since 2017, combining Saudi exit and Bahraini entry formalities at a single facility partway across the causeway." },
      { question: "Is this figure specific to Dammam Airport, or does it apply to the whole Dammam area?", answer: "It's specific to the airport — King Fahd International Airport's own published data isolates this exact route, which differs from a general central-Dammam-to-Bahrain estimate." },
    ],
    sources: [
      { label: "King Fahd International Airport — official distance information", url: "https://www.dmmairport.com/where-is-king-fahd-airport/" },
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Passport Island (Wikipedia)", url: "https://en.wikipedia.org/wiki/Passport_Island" },
    ],
  },

  {
    slug: "bahrain-airport-to-dammam-distance",
    from: "Bahrain Airport",
    to: "Dammam",
    h1: "Bahrain Airport to Dammam Distance: How Far Is the Crossing?",
    metaTitle: "Bahrain Airport to Dammam Distance: KM & Travel Time",
    metaDescription: "How far is Dammam from Bahrain Airport? Driving distance via the King Fahd Causeway, why figures vary, and Dammam city vs. the airport as your destination.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "Bahrain International Airport sits on Muharraq Island, a genuinely different starting point from a Manama hotel — worth noting before comparing figures.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈95-105 km (59-65 miles)",
        segments: [{ from: "Bahrain Airport", to: "Dammam", km: 100, displayValue: "95-105 km depending on your exact Dammam destination" }],
        note: "Independent sources vary more here than for some other Bahrain crossings; treat this as indicative rather than exact.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Bahrain International Airport (Muharraq) to Dammam via the King Fahd Causeway.",
        origin: "Bahrain International Airport, Bahrain",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Causeway length", value: "25 km, connecting Al Jasra (Bahrain) and Al Khobar (Saudi)" },
          { label: "Starting point", value: "Muharraq Island — a different point from central Manama" },
          { label: "Key fact", value: "Dammam city and King Fahd Airport are separate destinations with different final distances" },
        ],
      },
      {
        type: "borderNote",
        heading: "Dammam City or King Fahd Airport — Different Endpoints",
        paragraphs: [
          "Bahrain International Airport sits on Muharraq Island, connected to central Manama by its own bridges rather than sitting inside the capital — a genuinely different starting point from a Manama hotel. From there, the route crosses the King Fahd Causeway (25 km) to Al Khobar on the Saudi side, then continues inland toward Dammam.",
          "Dammam itself covers a wide area, and King Fahd International Airport sits outside the city on its own separate site — so 'Bahrain Airport to Dammam' can mean two genuinely different final distances depending on whether the destination is a city address or the airport for an onward connection.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~1 hour 45 minutes",
        totalJourney: "Plus a variable border-crossing allowance",
        factors: [
          "Independent route sources disagree more on this specific airport-to-Dammam figure than they do on some other legs of this corridor",
          "The Passport Island facility handles both Bahraini exit and Saudi entry formalities at a single stop",
          "Weekends and holidays typically see more congestion at the crossing than a weekday morning",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for this specific airport-to-Eastern-Province journey", duration: "~1h45 driving, plus border processing", advantages: "Direct from Muharraq arrivals to a specific Dammam address, one vehicle for the whole trip", limitations: "Subject to causeway border conditions on the day" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling from central Manama instead? See <a href='/distance/manama-to-dammam-distance'>Manama to Dammam distance</a>. Making the outbound trip from Dammam's own airport? See <a href='/distance/dammam-airport-to-bahrain-distance'>Dammam Airport to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Bahrain Airport to Dammam private transfer",
        linkPath: "/routes/bahrain-airport-to-dammam",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Bahrain International Airport?", answer: "Independent sources vary; a reasonable approximation is 95-105 kilometres depending on the exact Dammam destination, with driving time of roughly an hour and 45 minutes before border processing." },
      { question: "Is Bahrain International Airport the same starting point as Manama?", answer: "No. The airport is on Muharraq Island, connected to Manama by separate bridges, so a trip starting at the airport is a different journey from one starting at a Manama hotel." },
      { question: "Does this distance apply to Dammam city or King Fahd Airport?", answer: "The figures above are general for the Dammam area; King Fahd International Airport sits outside the city on its own site, so confirm which destination you mean, as the exact distance differs." },
      { question: "How is the border crossing handled?", answer: "The King Fahd Causeway has operated as a one-stop crossing at Passport Island since 2017, combining Bahraini exit and Saudi entry formalities, vehicle clearance and customs in a single stop." },
      { question: "Is there a more precise official distance figure?", answer: "We were unable to find an official source isolating this specific airport-to-Dammam distance; the range given here is drawn from independent route data and should be treated as approximate." },
      { question: "Is this route commonly used by business travellers?", answer: "Yes — it's a common connection for business travel between Bahrain and the Eastern Province's oil and industrial sector, given the short flight and causeway link between the two." },
      { question: "Does peak-season travel affect this crossing?", answer: "Weekend and public-holiday traffic at the causeway affects this route the same way it affects other Bahrain-Saudi crossings, independent of the airport-specific starting point." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Passport Island (Wikipedia)", url: "https://en.wikipedia.org/wiki/Passport_Island" },
      { label: "Bahrain International Airport (Wikipedia)", url: "https://en.wikipedia.org/wiki/Bahrain_International_Airport" },
    ],
  },

  {
    slug: "bahrain-to-khobar-distance",
    from: "Bahrain",
    to: "Khobar",
    h1: "Bahrain to Khobar Distance: The Shortest Saudi-Bahrain Crossing",
    metaTitle: "Bahrain to Khobar Distance: KM & Causeway Crossing Time",
    metaDescription: "How far is Khobar from Bahrain? The shortest Bahrain-Saudi crossing distance, causeway travel time, and how the figure shifts depending on where in Bahrain you start.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "Al Khobar sits at the Saudi end of the King Fahd Causeway, making this the shortest of the Bahrain-Saudi road distances.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈55 km (34 miles)",
        segments: [{ from: "Bahrain", to: "Khobar", km: 55, displayValue: "~55 km, varying with your exact Bahrain starting point" }],
        note: "Bahrain is compact but isn't a single point — Manama, Seef, the Diplomatic Area, and Muharraq each differ by a few kilometres.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Bahrain to Al Khobar via the King Fahd Causeway — the shortest of the Bahrain-Saudi crossings.",
        origin: "Manama, Bahrain",
        destination: "Al Khobar, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "split",
        items: [
          { label: "Causeway length", value: "25 km — Khobar sits right at the Saudi end" },
          { label: "Shortest Bahrain-Saudi crossing", value: "Of all Bahrain-to-Eastern-Province routes on this corridor" },
          { label: "Key fact", value: "Distance to Khobar is shorter than distance to Dammam, since Khobar is closer to the causeway" },
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~1 hour",
        totalJourney: "Plus a variable amount of time at Passport Island",
        factors: [
          "The shortest of the Bahrain-Saudi road journeys, given how close Khobar sits to the causeway",
          "Because the route itself is short, border-crossing time has a proportionally larger effect on the total than on longer routes",
          "Weekend evenings are typically busier than weekday mornings at the crossing",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for this short cross-border hop", duration: "~1 hour driving, plus border processing", advantages: "Direct door-to-door from a Bahrain address to a specific Khobar destination", limitations: "Subject to causeway crossing conditions, more noticeable on a route this short" },
        ],
      },
      {
        type: "prose",
        heading: "Khobar as a Distinct Destination From Dammam",
        narrow: true,
        paragraphs: [
          "Khobar and Dammam are both Eastern Province cities but Khobar is meaningfully closer to Bahrain, since it sits at the causeway's Saudi landing point while Dammam is further inland. Anyone comparing 'Bahrain to Khobar' with 'Bahrain to Dammam' should expect the Khobar figure to be shorter — continuing on to Dammam adds real additional distance beyond the causeway crossing itself.",
          "The Khobar Corniche, the city's well-known waterfront promenade, is often used as a reference point for the city, though the exact distance to a specific hotel or address will vary somewhat from a Corniche-area figure.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Continuing on to Dammam instead? See <a href='/distance/manama-to-dammam-distance'>Manama to Dammam distance</a>. Making the outbound trip from Khobar? See <a href='/distance/khobar-to-bahrain-distance'>Khobar to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Bahrain to Khobar private transfer",
        linkPath: "/routes/bahrain-to-khobar",
      },
    ],
    faqs: [
      { question: "How far is Khobar from Bahrain?", answer: "Around 55 kilometres, making it the shortest of the Bahrain-Saudi road distances — Khobar sits right at the causeway's Saudi landing point." },
      { question: "How long does the causeway journey take?", answer: "Roughly an hour of driving under normal conditions, plus a variable amount of time at the Passport Island border facility." },
      { question: "Does travel time vary depending on the pickup point in Bahrain?", answer: "Slightly. Bahrain is compact, so the difference between starting in Manama, Seef, or elsewhere is small, but it isn't zero." },
      { question: "Is Khobar closer to Bahrain than Dammam is?", answer: "Yes. Khobar sits at the causeway's Saudi terminus, while Dammam is further inland, so the Bahrain-to-Dammam distance is longer than the Bahrain-to-Khobar distance." },
      { question: "Is there public transport across the causeway?", answer: "A private car is the practical option for this route; no public transit service covers this specific cross-border journey." },
      { question: "Is the Khobar Corniche a good reference point for this distance?", answer: "It's commonly used as one, though your specific hotel or address may differ from a Corniche-area figure by a small margin." },
      { question: "Is this route often used for a day trip?", answer: "Yes — given the short crossing time, Bahrain-Khobar is a common day-trip corridor for both Saudi and Bahraini residents." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Khobar Corniche coverage (Saudi Press Agency)", url: "https://www.spa.gov.sa/en" },
      { label: "Passport Island (Wikipedia)", url: "https://en.wikipedia.org/wiki/Passport_Island" },
    ],
  },

  {
    slug: "manama-to-dammam-distance",
    from: "Manama",
    to: "Dammam",
    h1: "Manama to Dammam Distance: How Far Is the Journey From the Bahraini Capital?",
    metaTitle: "Manama to Dammam Distance: KM & Causeway Travel Time",
    metaDescription: "How far is Dammam from central Manama? Driving distance via the King Fahd Causeway, why sources disagree, and how it differs from a generic Bahrain estimate.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "One of the routes where independently reviewed sources disagree the most — this page presents the honest range rather than a false-precision figure.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈60-110 km (37-68 miles)",
        segments: [{ from: "Manama", to: "Dammam", km: 85, displayValue: "60-110 km — sources vary meaningfully" }],
        note: "This is one of the routes where independently reviewed sources disagree the most; treat any single number you see elsewhere with some caution.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Central Manama to Dammam via the King Fahd Causeway.",
        origin: "Manama, Bahrain",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Causeway length", value: "25 km, part of the total Manama-Dammam distance" },
          { label: "Distance uncertainty", value: "Sources disagree meaningfully — treat single-figure claims with caution" },
          { label: "Key fact", value: "Manama is a different starting point from Bahrain International Airport (Muharraq)" },
        ],
      },
      {
        type: "prose",
        heading: "Why This Differs From a General 'Bahrain to Dammam' Estimate",
        narrow: true,
        paragraphs: [
          "Central Manama to Dammam is a well-travelled cross-border route, but pinning down one exact distance figure is genuinely harder than it is for some of the shorter Bahrain-Saudi legs. Independent route sources checked for this route disagreed by a wide margin — some placing the distance around 60 kilometres, others over 100 — likely reflecting differences in exactly which points within each city are being measured.",
          "This page covers the journey starting specifically in central Manama — a hotel, an office in the Seef District, or an address in the Diplomatic Area — rather than a generic 'Bahrain' starting point. For travellers starting from Bahrain International Airport specifically, see the dedicated page for that route instead.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "~1.5 hours",
        totalJourney: "Plus a variable border-crossing allowance",
        factors: [
          "Given the distance uncertainty, this should be treated as a general guide rather than a precise figure",
          "This doesn't include time at the Passport Island border facility, which varies independently of the driving distance",
          "Total journey time is best planned as roughly ninety minutes of driving, plus a variable border-crossing allowance",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for a central-Manama-to-Dammam journey", duration: "~1.5 hours driving, plus border processing", advantages: "Direct from a specific Manama address to a specific Dammam destination", limitations: "Subject to causeway conditions and some genuine uncertainty in the driving distance itself" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Starting from Bahrain's airport instead? See <a href='/distance/bahrain-airport-to-dammam-distance'>Bahrain Airport to Dammam distance</a>. Heading to Khobar rather than Dammam? See <a href='/distance/bahrain-to-khobar-distance'>Bahrain to Khobar distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to cross the causeway by private vehicle?",
        linkLabel: "See our Manama to Dammam private transfer",
        linkPath: "/routes/manama-to-dammam",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Manama?", answer: "Independently reviewed sources disagree meaningfully, ranging from around 60 to over 100 kilometres. Rather than assert one precise figure, we recommend treating any single number with some caution and planning around the general driving-time estimate instead." },
      { question: "How long does the drive take?", answer: "Most estimates put driving time at around an hour and a half under normal conditions, not including time at the Passport Island border facility." },
      { question: "Is this the same as a general Bahrain to Dammam distance?", answer: "Not exactly — this page is specific to a central Manama starting point. Bahrain International Airport, on Muharraq Island, is a different starting point with its own distance to Dammam." },
      { question: "Why do distance sources disagree so much for this route?", answer: "Likely because neither Manama nor Dammam is a single fixed point — different measurement tools use different reference addresses within each city, producing a wider spread than shorter, more clearly defined routes." },
      { question: "Does border processing add to the journey time?", answer: "Yes. The driving-time estimate doesn't include time at the King Fahd Causeway border facility, which varies independently and tends to be busier at weekends and holidays." },
      { question: "Should I trust a single distance figure quoted elsewhere?", answer: "Treat it with some caution — this is genuinely one of the routes where independent sources vary the most, so a range is more honest than a single number." },
      { question: "Is there a more precise official government distance for this route?", answer: "We did not find one during research for this page; the range presented here comes from independent route-distance sources rather than a single authoritative figure." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Passport Island (Wikipedia)", url: "https://en.wikipedia.org/wiki/Passport_Island" },
    ],
  },

  {
    slug: "riyadh-to-bahrain-distance",
    from: "Riyadh",
    to: "Bahrain",
    h1: "Riyadh to Bahrain Distance: How Far Is the Road Journey to Manama?",
    metaTitle: "Riyadh to Bahrain Distance: KM & Causeway Road Trip Time",
    metaDescription: "How far is Bahrain from Riyadh by road? Approximate driving distance across the Eastern Province and King Fahd Causeway, and why it varies by Bahrain destination.",
    eyebrow: "Long-Distance Road Trip Guide",
    dek: "A genuine cross-country distance with two distinct legs — the long highway run to the Eastern Province, then the King Fahd Causeway itself.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈450 km (280 miles)",
        segments: [
          { from: "Riyadh", to: "Eastern Province", km: 400, displayValue: "~400 km highway leg" },
          { from: "Eastern Province", to: "Bahrain (Manama)", km: 50, displayValue: "~25 km causeway plus local approach" },
        ],
        note: "Independent sources vary somewhat on the exact total for this long-distance pairing; treat the figure as a reasonable middle estimate.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Manama via the Riyadh-Dammam highway corridor, then the King Fahd Causeway.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Manama, Bahrain",
      },
      {
        type: "stages",
        heading: "A Two-Stage Journey",
        steps: [
          { label: "Riyadh departure", detail: "Onto the long Eastern Province highway corridor." },
          { label: "Eastern Province highway leg", detail: "Roughly 400 km, largely along the Riyadh-Dammam corridor." },
          { label: "King Fahd Causeway", detail: "The final 25 km stage crossing into Bahrain, including border processing." },
        ],
        note: "Most of the distance and driving time belongs to the highway leg, not the causeway crossing.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4.5-5 hours",
        totalJourney: "Best planned as a half-day undertaking",
        factors: [
          "The causeway crossing is comparatively short once you've already covered the bulk of the journey",
          "Border-crossing time is a separate, variable factor — busier at weekends and around public holidays",
          "A direct flight is considerably faster for travellers prioritising speed over the road-trip experience",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers who want a genuine door-to-door journey rather than flying plus a separate transfer", duration: "~4.5-5 hours driving, plus border processing", advantages: "No airport check-in or baggage limits, room for rest stops on a long journey", limitations: "A genuinely long single-day undertaking; total time depends on both traffic and border conditions" },
          { mode: "Direct flight (Riyadh to Bahrain)", suitability: "Travellers prioritising speed over the road-trip experience", duration: "Considerably shorter than the drive; this page doesn't cover specific schedules or fares", advantages: "Fastest way to cover the distance itself", limitations: "Not door-to-door; still requires ground transport at both ends" },
        ],
      },
      {
        type: "contextCard",
        heading: "Bahrain Isn't One Point",
        paragraphs: [
          "The 450-kilometre estimate above is to central Manama specifically. If your actual destination is Bahrain International Airport on Muharraq Island, or a specific address in Seef or the Diplomatic Area, the real distance will differ from the Manama figure by some margin, since these areas sit at different points relative to the causeway landing.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction? See <a href='/distance/bahrain-to-riyadh-distance'>Bahrain to Riyadh distance</a>. Comparing to the shorter Kuwait crossing instead? See <a href='/distance/riyadh-to-kuwait-city-distance'>Riyadh to Kuwait City distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Bahrain private transfer",
        linkPath: "/routes/riyadh-to-bahrain",
      },
    ],
    faqs: [
      { question: "How long is the drive from Riyadh to Bahrain?", answer: "Around 450 kilometres in total, taking roughly four and a half to five hours of driving, plus a variable amount of time at the King Fahd Causeway border. Estimates vary somewhat between sources for this long-distance pairing." },
      { question: "Is the Causeway crossing included in this distance?", answer: "Yes — the causeway's 25 kilometres are the final stage of the journey, after the much longer Eastern Province highway leg." },
      { question: "Is the 450 km figure specific to central Manama?", answer: "Yes. The estimate above is to central Manama; Bahrain International Airport and other Bahrain destinations sit at somewhat different distances." },
      { question: "Is there a flight alternative to the long drive?", answer: "Yes, a direct flight between Riyadh and Bahrain covers the distance considerably faster, though it isn't door-to-door and this page doesn't cover specific flight schedules or fares." },
      { question: "Does border processing add significant time to the journey?", answer: "It can. Border crossing time varies independently of the driving distance and tends to be higher at weekends and public holidays, so total journey time is best planned with a buffer beyond the driving estimate." },
      { question: "Is a rest stop realistic on the highway leg?", answer: "Yes — given the roughly 400 km Eastern Province stretch, most travellers plan for at least one stop before reaching the causeway." },
      { question: "Which part of the journey is longer, the highway leg or the causeway?", answer: "The highway leg, by a wide margin — roughly 400 km versus the causeway's 25 km — even though the causeway crossing often feels like the more memorable part of the trip." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "bahrain-to-riyadh-distance",
    from: "Bahrain",
    to: "Riyadh",
    h1: "Bahrain to Riyadh Distance: How Far Is the Road Journey to the Saudi Capital?",
    metaTitle: "Bahrain to Riyadh Distance: KM & Long-Distance Road Trip Time",
    metaDescription: "How far is Riyadh from Bahrain by road? Driving distance from the King Fahd Causeway across the Eastern Province, and how starting from Bahrain changes the trip.",
    eyebrow: "Long-Distance Road Trip Guide",
    dek: "Same total road distance as the outbound direction, but this journey's shape is different — the causeway crossing happens near the start, not the end.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈450 km (280 miles)",
        segments: [
          { from: "Bahrain", to: "Eastern Province", km: 50, displayValue: "~25 km causeway plus local approach" },
          { from: "Eastern Province", to: "Riyadh", km: 400, displayValue: "~400 km highway leg" },
        ],
        note: "Same physical route as the reverse direction, just crossed in the opposite order.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Manama to Riyadh via the King Fahd Causeway, then the Eastern Province highway corridor.",
        origin: "Manama, Bahrain",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "A Two-Stage Journey, Reversed",
        steps: [
          { label: "Bahrain departure", detail: "Onto the King Fahd Causeway toward the Saudi side." },
          { label: "King Fahd Causeway", detail: "The first 25 km of the trip, including border processing near the start of the day." },
          { label: "Eastern Province highway leg", detail: "Roughly 400 km west to the capital." },
        ],
        note: "Unlike the outbound direction, the border crossing happens early here rather than at the end.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-5 hours",
        totalJourney: "Border delays affect the rest of the day's schedule, since the crossing comes early",
        factors: [
          "Because the border crossing happens early in this direction, a longer-than-expected wait affects the rest of your day's schedule",
          "On the reverse route, any delay is closer to the final arrival rather than near the start",
          "A direct flight covers the distance considerably faster for travellers prioritising speed",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers who want a genuine door-to-door journey from Bahrain to a specific Riyadh address", duration: "~4.5-5 hours driving, plus border processing near the start", advantages: "No airport check-in or baggage limits, flexible for onward Riyadh airport connections", limitations: "A genuinely long single-day undertaking" },
          { mode: "Direct flight (Bahrain to Riyadh)", suitability: "Travellers prioritising speed", duration: "Considerably shorter than driving; this page doesn't cover specific schedules or fares", advantages: "Fastest way to cover the distance", limitations: "Not door-to-door" },
        ],
      },
      {
        type: "contextCard",
        heading: "Riyadh Is a Large Capital",
        paragraphs: [
          "Riyadh is a large, spread-out city, and your specific destination — a hotel, a business district, a residential area, or King Khalid International Airport for an onward flight — determines the final stretch of this journey once the highway leg is complete. The 450-kilometre estimate is a general figure for the city as a whole; the exact distance to your specific address will vary somewhat.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making the outbound trip instead? See <a href='/distance/riyadh-to-bahrain-distance'>Riyadh to Bahrain distance</a>. Comparing to a shorter Eastern Province arrival? See <a href='/distance/dammam-to-riyadh-distance'>Dammam to Riyadh distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Bahrain to Riyadh private transfer",
        linkPath: "/routes/bahrain-to-riyadh",
      },
    ],
    faqs: [
      { question: "How far is Riyadh from Bahrain?", answer: "Around 450 kilometres by road, the same total distance as the Riyadh-to-Bahrain direction, taking roughly four and a half to five hours of driving plus border processing." },
      { question: "Does this journey cross the border at the start or the end?", answer: "At the start. Unlike the Riyadh-to-Bahrain direction, this route crosses the King Fahd Causeway shortly after leaving Bahrain, with the long highway drive to Riyadh following." },
      { question: "Does border processing affect this route differently than the reverse direction?", answer: "In a sense — because the crossing happens early here, a longer-than-expected border wait affects the rest of your day's schedule, whereas on the reverse route any delay is closer to your final arrival." },
      { question: "Is there a flight alternative?", answer: "Yes, direct flights between Bahrain and Riyadh cover the distance considerably faster, though this page doesn't cover specific flight schedules or fares." },
      { question: "Does the distance change depending on my Riyadh destination?", answer: "Yes. The 450-kilometre estimate is general for the city; a specific hotel, office, or the airport will each have a slightly different exact distance." },
      { question: "Is it better to cross the border early in the day on this route?", answer: "Generally yes — an earlier crossing tends to mean lighter causeway traffic, which matters more here since the border comes near the start rather than the end of the trip." },
      { question: "Does this route pass through the same cities as the outbound direction?", answer: "Yes — it's the same physical corridor through the Eastern Province and Riyadh-Dammam highway, just travelled from the opposite end." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
    ],
  },

  // ── Eastern Province ↔ Kuwait ────────────────────────────────────────────
  {
    slug: "dammam-to-kuwait-city-distance",
    from: "Dammam",
    to: "Kuwait City",
    h1: "Dammam to Kuwait City Distance: How Far Is the Road Journey via Khafji?",
    metaTitle: "Dammam to Kuwait City Distance: KM & Khafji Border Road Trip",
    metaDescription: "How far is Kuwait City from Dammam by road? Driving distance along Highway 95 to the Khafji border, approximate travel time, and border-crossing considerations.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "A standard land border crossing, not an island-based facility like the Bahrain causeway routes — the Eastern Province's coastal corridor to Kuwait.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈420-450 km",
        segments: [{ from: "Dammam", to: "Kuwait City", km: 435, displayValue: "420-450 km along Highway 95" }],
        note: "Independent travel sources converge reasonably closely on this range, though none is an official government figure.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Dammam to Kuwait City via Highway 95, passing Khobar, Qatif and Jubail to the Khafji border.",
        origin: "Dammam, Saudi Arabia",
        destination: "Kuwait City, Kuwait",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Route", value: "Highway 95, the Eastern Province coastal corridor" },
          { label: "Border crossing", value: "Khafji (Saudi side) / Nuwaiseeb (Kuwaiti side)" },
          { label: "Key fact", value: "A standard land border, not an island/causeway crossing like the Bahrain routes" },
        ],
      },
      {
        type: "borderNote",
        heading: "The Khafji / Nuwaiseeb Border",
        paragraphs: [
          "This route follows the Highway 95 corridor throughout, without the causeway-and-island border structure used for the Bahrain crossings — the Khafji/Nuwaiseeb crossing is a standard land border rather than an island-based one-stop facility.",
          "Border processing time varies by traffic and time of day and cannot be predicted precisely; total journey time is best planned as the driving estimate plus a variable border allowance rather than a single fixed total.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-4.5 hours",
        factors: [
          "Based on independent travel-source convergence rather than an official figure",
          "This covers driving only — it does not include time spent at the Khafji/Nuwaiseeb border crossing",
          "The distance is long enough that many travellers plan for rest stops along Highway 95",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for this long cross-border journey", duration: "~4-4.5 hours driving, plus border processing", advantages: "Door-to-door from a specific Dammam address to a specific Kuwait City destination, room for rest stops on a long drive", limitations: "A genuinely long single-day undertaking; total time depends on border conditions" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Travelling the reverse direction? See <a href='/distance/kuwait-city-to-dammam-distance'>Kuwait City to Dammam distance</a>. Making this trip from Riyadh instead? See <a href='/distance/riyadh-to-kuwait-city-distance'>Riyadh to Kuwait City distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam to Kuwait City private transfer",
        linkPath: "/routes/dammam-to-kuwait-city",
      },
    ],
    faqs: [
      { question: "How far is Kuwait City from Dammam by road?", answer: "Independent travel sources converge on roughly 420 to 450 kilometres along Highway 95, though this isn't an official government-published figure." },
      { question: "How long does the drive take before border processing?", answer: "Roughly four to four and a half hours of driving under normal conditions, based on independent source convergence rather than an official figure." },
      { question: "Can the journey include rest stops?", answer: "The distance is long enough that many travellers plan for rest stops along Highway 95, though specific stop locations and durations vary by personal preference." },
      { question: "Where exactly is the border crossing?", answer: "At Khafji on the Saudi side and Nuwaiseeb on the Kuwaiti side, at the northern end of Highway 95." },
      { question: "Is this a causeway crossing like the Bahrain routes?", answer: "No. Khafji/Nuwaiseeb is a standard land border crossing, unlike the King Fahd Causeway's island-based, one-stop facility used for Bahrain routes." },
      { question: "Does the exact Kuwait City destination affect the distance?", answer: "Yes — Kuwait City covers a range of districts within its wider metropolitan area, so the exact distance once across the border depends on your specific destination." },
      { question: "Is this route used for commercial freight as well as passenger travel?", answer: "Yes — Highway 95 and the Khafji/Nuwaiseeb crossing carry both passenger and commercial traffic, which can affect border-processing time at busy periods." },
    ],
    sources: [
      { label: "Highway 95 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji (Wikipedia)", url: "https://en.wikipedia.org/wiki/Khafji" },
    ],
  },

  {
    slug: "kuwait-city-to-dammam-distance",
    from: "Kuwait City",
    to: "Dammam",
    h1: "Kuwait City to Dammam Distance: How Far Is the Southbound Journey?",
    metaTitle: "Kuwait City to Dammam Distance: KM & Nuwaiseeb Border Road Trip",
    metaDescription: "How far is Dammam from Kuwait City by road? Driving distance via Nuwaiseeb/Khafji and Highway 95, and Dammam city vs. King Fahd Airport as your destination.",
    eyebrow: "Border Crossing Distance Guide",
    dek: "Same route and comparable distance to the outbound direction, but the border crossing comes early rather than late in this direction.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈420-450 km",
        segments: [{ from: "Kuwait City", to: "Dammam", km: 435, displayValue: "420-450 km along Highway 95" }],
        note: "Broadly consistent with the northbound figure; the Dammam-side destination introduces most of the final variation.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Kuwait City to Dammam via the Nuwaiseeb/Khafji border and Highway 95.",
        origin: "Kuwait City, Kuwait",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "profile",
        heading: "Route Profile",
        layout: "table",
        items: [
          { label: "Route", value: "Highway 95, southbound from the Kuwaiti border" },
          { label: "Border crossing", value: "Nuwaiseeb (Kuwaiti side) / Khafji (Saudi side)" },
          { label: "Key fact", value: "Dammam city and King Fahd Airport are different final destinations with slightly different distances" },
        ],
      },
      {
        type: "borderNote",
        heading: "Dammam City or King Fahd Airport — a Different Final Leg",
        paragraphs: [
          "Once back in the Eastern Province, the destination matters: a Dammam city address is a different final distance from King Fahd International Airport, which sits outside the city on its own site. Travellers connecting onward to a flight should note that the airport figure differs somewhat from a city-centre estimate.",
          "This route uses the same standard land border as the outbound direction — Nuwaiseeb on the Kuwaiti side, Khafji on the Saudi side — rather than an island-based crossing like the King Fahd Causeway used for the Bahrain routes.",
        ],
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "4-4.5 hours",
        factors: [
          "Consistent with the reverse direction, based on independent source convergence rather than an official figure",
          "The border crossing happens early in this direction — shortly after leaving Kuwait City",
          "Any delay at the border affects the rest of the day's schedule more than it would on the reverse route",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "The practical option for this long cross-border journey", duration: "~4-4.5 hours driving, plus border processing near the start", advantages: "Door-to-door from Kuwait City to a specific Dammam address or King Fahd Airport", limitations: "A genuinely long single-day undertaking" },
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Making the outbound trip instead? See <a href='/distance/dammam-to-kuwait-city-distance'>Dammam to Kuwait City distance</a>. Travelling from Riyadh instead of Dammam? See <a href='/distance/riyadh-to-kuwait-city-distance'>Riyadh to Kuwait City distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Kuwait City to Dammam private transfer",
        linkPath: "/routes/kuwait-city-to-dammam",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Kuwait City?", answer: "Independent travel sources place the driving distance at roughly 420 to 450 kilometres along Highway 95, broadly consistent with the northbound direction." },
      { question: "Is the 420-450 km figure to Dammam city or to King Fahd Airport?", answer: "The figures are general for the Dammam area; King Fahd International Airport sits outside the city on its own site, so the exact distance depends on which is your destination." },
      { question: "Where is the border crossing?", answer: "At Nuwaiseeb on the Kuwaiti side and Khafji on the Saudi side, where Highway 95 continues into the Eastern Province." },
      { question: "Does the border crossing happen early or late on this route?", answer: "Early — shortly after leaving Kuwait City, unlike the reverse direction where the crossing comes near the end of the journey." },
      { question: "How long does the journey take in total?", answer: "Roughly four to four and a half hours of driving, plus a variable amount of time at the border crossing that can't be predicted precisely in advance." },
      { question: "Is it better to cross the border early in the day?", answer: "Generally yes, since crossing conditions tend to be lighter earlier — and because this crossing happens near the start of the trip, an early departure keeps the rest of the day's schedule more predictable." },
      { question: "Is a private transfer able to continue directly to King Fahd Airport?", answer: "Yes — a pre-arranged private transfer can go directly to the airport for an onward flight connection rather than stopping in central Dammam first." },
    ],
    sources: [
      { label: "Highway 95 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji (Wikipedia)", url: "https://en.wikipedia.org/wiki/Khafji" },
    ],
  },

  {
    slug: "riyadh-to-kuwait-city-distance",
    from: "Riyadh",
    to: "Kuwait City",
    h1: "Riyadh to Kuwait City Distance: How Far Is the Capital-to-Capital Road Trip?",
    metaTitle: "Riyadh to Kuwait City Distance: KM & Longest GCC Road Trip",
    metaDescription: "How far is Kuwait City from Riyadh by road? Driving distance via Highway 40/95 to the Khafji border, and why this is the longest Saudi-Kuwait road trip.",
    eyebrow: "Long-Distance Road Trip Guide",
    dek: "The longest regular Saudi-Kuwait road journey, since it covers the full width of the Eastern Province highway network before the border is even reached.",
    lastVerified: "2026-09-06",
    blocks: [
      {
        type: "distanceStrip",
        heading: "Road Distance",
        totalLabel: "≈600-700 km",
        segments: [{ from: "Riyadh", to: "Kuwait City", km: 660, displayValue: "636-718 km — independent sources disagree" }],
        note: "Rather than assert a single precise number, this page presents the range and recommends planning generously around it.",
      },
      {
        type: "map",
        heading: "Road Route",
        caption: "Riyadh to Kuwait City via Highway 40 to the Eastern Province, then Highway 95 to Khafji.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Kuwait City, Kuwait",
      },
      {
        type: "stages",
        heading: "The Longest Saudi-Kuwait Road Journey",
        steps: [
          { label: "Riyadh departure", detail: "East onto Highway 40 toward the Eastern Province." },
          { label: "Eastern Province transit", detail: "Roughly 400 km before even reaching the Highway 95 stretch north." },
          { label: "Highway 95 north to Khafji", detail: "Along the coast to the Nuwaiseeb/Khafji border crossing." },
        ],
        note: "Because this route starts in Riyadh rather than the Eastern Province, it covers considerably more distance than a Dammam-to-Kuwait-City trip.",
      },
      {
        type: "timeReality",
        heading: "How Long It Actually Takes",
        pureDriving: "6.5-7 hours",
        totalJourney: "A genuine full-day undertaking",
        factors: [
          "Given the distance uncertainty, driving time is best estimated as a range rather than a precise figure",
          "This does not include time at the Khafji/Nuwaiseeb border crossing, a separate and variable factor",
          "A direct flight is considerably faster for travellers prioritising speed on this specific long-distance route",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car / taxi", suitability: "Travellers who want a genuine door-to-door journey for this long-distance route", duration: "~6.5-7 hours driving, plus border processing", advantages: "Room for rest stops on a genuinely long drive, no airport check-in or baggage limits", limitations: "A substantial single-day undertaking; total time depends heavily on both driving conditions and the border crossing" },
          { mode: "Direct flight (Riyadh to Kuwait City)", suitability: "Travellers prioritising speed for this specific long-distance route", duration: "Considerably shorter than driving; this page doesn't cover specific schedules or fares", advantages: "By far the fastest way to cover this particular distance", limitations: "Not door-to-door" },
        ],
      },
      {
        type: "prose",
        heading: "Longer Than a Dammam-Based Trip, and a Different Border Type",
        narrow: true,
        paragraphs: [
          "Because this route starts in Riyadh rather than the Eastern Province, it covers considerably more distance than a Dammam-to-Kuwait-City trip — the Riyadh-to-Eastern-Province leg alone (via Highway 40) adds roughly 400 kilometres before the Highway 95 stretch north to the border even begins.",
          "Like the Dammam-to-Kuwait-City route, this crossing at Khafji/Nuwaiseeb is a standard land border, not an island-based facility like the King Fahd Causeway used for the Bahrain routes — a genuinely different border experience from a Riyadh-to-Bahrain trip, even though both are long-distance capital departures.",
        ],
      },
      {
        type: "relatedInfo",
        heading: "Related Reading",
        paragraph: "Comparing to the shorter Eastern Province route? See <a href='/distance/dammam-to-kuwait-city-distance'>Dammam to Kuwait City distance</a>. Comparing to the Bahrain crossing instead? See <a href='/distance/riyadh-to-bahrain-distance'>Riyadh to Bahrain distance</a>.",
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Kuwait City private transfer",
        linkPath: "/routes/riyadh-to-kuwait-city",
      },
    ],
    faqs: [
      { question: "How far is Kuwait City from Riyadh?", answer: "Independent sources disagree meaningfully, with figures ranging from around 636 to 718 kilometres. We recommend treating this as a genuine range rather than a single precise figure until a more authoritative source is available." },
      { question: "Why is this route longer than Dammam to Kuwait City?", answer: "Because it starts in Riyadh, this route includes the full Riyadh-to-Eastern-Province highway leg (roughly 400 km) before even reaching the Highway 95 stretch to the border, unlike a Dammam-based trip which starts much closer to the crossing." },
      { question: "Is the border crossing similar to the Bahrain Causeway crossings?", answer: "No. The Khafji/Nuwaiseeb crossing is a standard land border, unlike the King Fahd Causeway's island-based, one-stop facility used for the Bahrain routes." },
      { question: "How long should I plan for the whole journey?", answer: "Given the distance uncertainty, plan generously — roughly six and a half to seven hours of driving, plus a variable and unpredictable amount of time at the border crossing." },
      { question: "Is there a flight alternative to this long drive?", answer: "Yes, a direct flight between Riyadh and Kuwait City covers the distance considerably faster, though this page doesn't cover specific flight schedules or fares." },
      { question: "Is a rest stop necessary on a drive this long?", answer: "Most travellers plan for at least one rest stop, given the combined length of the Highway 40 and Highway 95 legs before even reaching the border." },
      { question: "Does this route pass through Dammam?", answer: "It passes through the wider Eastern Province highway network that Dammam also sits on, though the route itself is defined by Highway 40 then Highway 95 rather than a stop in Dammam specifically." },
    ],
    sources: [
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
      { label: "Highway 95 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji (Wikipedia)", url: "https://en.wikipedia.org/wiki/Khafji" },
    ],
  },

];

export function getDistanceGuideV2Page(slug: string): DistanceGuideV2Page | undefined {
  return distanceGuideV2Pages.find((p) => p.slug === slug);
}
