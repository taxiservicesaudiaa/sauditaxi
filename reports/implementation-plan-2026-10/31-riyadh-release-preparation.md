# Riyadh release preparation (Phase 1)

**Date:** 22 October 2026. **Type:** preparation and review only.

**What was not done:**
- No database update.
- No Arabic edit.
- No commit, push, deployment or production-setting change.

The main working tree is unchanged apart from new report files. All code changes were built and validated in a disposable scratch worktree.

**Inputs:** reports 27, 28, 29 (+ 29b, 29c), 30 and 30b.

**Companion file:** `31b-ruh-routes.patch` — the exact proposed code and data diff for the five Riyadh airport route pages. It contains 8 files (169 insertions, 37 deletions), is LF-normalised against `HEAD`, and its exactness was confirmed with a reverse-apply check.

---

## 1. Revalidation of the English Riyadh advisory against current sources

### 1.1 Official and reported status (checked 22 October 2026)

| Source | What it says | Status for our copy |
|---|---|---|
| GACA via SPA, 10 Oct | Operations at King Khalid International Airport (RUH) temporarily suspended | VERIFIED — cited in the advisory and notice |
| GACA via SPA, 12 Oct | Suspension extended for safety checks | VERIFIED — cited |
| GACA, after 12 Oct | **No official statement found announcing that scheduled flights have resumed** (searched 22 Oct) | Supports "We have not found an official GACA announcement…" |
| Aerocorner / Inside Aviation (17–18 Oct) | NOTAM A3650/26: operations from 17/18 Oct with prior GACA permission | Secondary report |
| Gulf News (Oct) | Limited domestic flights by Saudia and flynas, subject to prior approval | Secondary report |
| Gulf Business (Oct) | Airport "reopens"; airlines delaying services, some into 2027 | Secondary report |
| Time Out Riyadh (21 Oct) | "continues to remain closed as of Wednesday, October 21" | Secondary report — conflicts with the reports above |
| Travel and Tour World | No independently verified government announcement of capacity or timetable | Secondary report |

### 1.2 Verdict

The Rev 2 advisory wording ("…reports since then have differed. Confirm your flight's status with your airline…") **remains accurate**. The owner's decision to keep case-by-case wording for RUH pickups and drop-offs is unchanged.

**One required action at release:** update every "last checked 22 October 2026" date to the release day. This applies to:
- the hub notice in `data/airports.ts`;
- `RUH_STATUS_NOTICE` in `data/airport-status.ts`;
- the advisory body.

Re-run the GACA check the same day. If GACA has announced resumption by then, stop and revise the wording before release.

### 1.3 Database record (read-only re-check)

| Field | Value |
|---|---|
| Table / id | `blogs` / `099e1ac3-0394-4c5f-8da4-19b1ba661197` |
| Slug | `riyadh-airport-closure-october-2026` |
| `updated_at` | 2026-10-14T13:26:15Z — **unchanged** since the 29b payload was built, so the payload is not stale |

## 2. Review of the proposed database payload and content diff (`29b`, `29c`) — not executed

| Check | Result |
|---|---|
| HTML well-formed (tags balanced) | Pass |
| No name-board, flight-tracking, fixed-price or distance claims | Pass (Rev 2 removed the paragraph linking `/blog/riyadh-airport-driver-meeting-point`, whose live text promises a name board) |
| FAQ schema in `schema_json` matches the visible FAQs one-to-one | Pass |
| Title 68 chars · meta title 50 · meta description 151 | Pass. The 68-character title may be truncated in some result layouts; optional shortening is listed in §5 |
| Factual claims trace to GACA 10/12 Oct or to the owner's case-by-case decision | Pass |
| Fields changed | `title`, `meta_title`, `meta_description`, `content`, `faqs`, `schema_json`, `updated_at` (full list in `29`) |
| Execution | **Not executed.** Needs separate written approval, then a guarded PATCH: `id=eq.099e1ac3…` **and** `updated_at=eq.2026-10-14T13:26:15.224694+00:00` so the update fails safely if someone has edited the row meanwhile |

## 3. Consolidated change list — five Riyadh airport route pages (English)

### 3.1 Mechanism

The changes use per-route optional overrides, so routes without them render exactly as before.

| File | Change |
|---|---|
| `components/routes/RouteStatusNotice.tsx` (new) | Dated notice block (same styling as the Riyadh hub notice) |
| `data/airport-status.ts` (new) | `RUH_STATUS_NOTICE`: the same three paragraphs and five alternative-route links as the hub notice |
| `components/routes/AirportRouteView.tsx`, `CityAirportRouteView.tsx` | Optional `notice` prop, rendered under the hero |
| `data/airport-route-content.ts` | Optional `overrides?: AirportRouteOverrides` (`notice`, `arrivalSteps`, `bookingSteps`, `ctaText`, `ctaHref`, `formSubheading`) and the `ruhArrivalOverrides(city)` builder |
| `data/city-airport-route-content.ts` | Same `overrides` field and `ruhDepartureOverrides` |
| `app/(main)/routes/[slug]/page.tsx` | Uses each override with `??` fallback to the existing shared copy, and passes `notice` |
| `data/routes.ts` | Metadata and Service-schema intros for the five routes |

### 3.2 Per-page changes

| Page | Notice | Steps / CTA | Content and FAQ changes | Metadata |
|---|---|---|---|---|
| `/routes/riyadh-airport-to-riyadh` | Added | Arrival steps: Check your flight → Share your details → Receive your quotation → Travel. CTA: "Share your flight details and destination — we reply with a quotation, and the confirmed quotation sets the price." Pre-fill: `dropoff=Riyadh` (was RUH pickup) | Name-board and tracking sentence → "Confirm your flight with your airline first. Whether a pickup at King Khalid International Airport can be arranged, and where you would meet your driver, is confirmed in your quotation." "…one reason we track your flight…" → "…so share your flight details and destination when you request a quote." The four FAQs promising a name board, tracking, delay handling and a fixed price are replaced (see 31b). The 35 km FAQ figure is kept; the time is removed | Description: "Transfers from Riyadh Airport (RUH) into the city are confirmed case by case while airport operations are disrupted. Your confirmed quotation sets the price." |
| `/routes/riyadh-to-riyadh-airport` | Added | Departure booking steps; CTA pre-fill `pickup=Riyadh` | — | Description in the same pattern. Intro: "Private transfer from Riyadh hotels and offices to King Khalid International Airport (RUH), confirmed case by case in your quotation while airport operations are disrupted." |
| `/routes/riyadh-airport-to-jeddah` | Added | As for RUH→Riyadh, with Jeddah | "five terminals… tracked" → "several terminals — share your flight number and terminal. Any airport pickup is confirmed case by case in your quotation." "950 km and roughly 9 hours" → "about 950 km". "one fixed price" comparison row removed. "nine-hour drive" → "long drive". Duration FAQ removed | Title: "Riyadh Airport to Jeddah Private Transfer" (was "…Taxi to Jeddah – Fixed-Price Transfer"). Description and intro: case-by-case pattern |
| `/routes/riyadh-airport-to-makkah` | Added | Same, with Makkah | Terminal tracking sentence → case-by-case. "about 880 km and 8.5 hours" → "roughly 870–880 km". Duration FAQ removed. Large-group FAQ removed | Description in the same pattern |
| `/routes/riyadh-airport-to-madinah` | Added | Same, with Madinah | Tracking sentence → case-by-case. "about 850 km and 8 hours" → "roughly 850 km". "eight-hour" wording → "the length of the drive". Duration FAQ removed | Description in the same pattern |

**Distances:**

| Figure | Source basis | Decision |
|---|---|---|
| RUH to central Riyadh, ~35 km | Several secondary sources agree | Kept |
| Riyadh–Jeddah, ~950 km | Sources give 945–956 km | Kept |
| Riyadh–Makkah | Rome2rio gives 869 km; the site said 880 | Range "870–880 km" |
| Riyadh–Madinah | Sources range from 839 to 900 km | "roughly 850 km" |

All durations were removed from the prose.

### 3.3 Validation (scratch worktree, clean build)

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint | 10 problems (6 errors, 4 warnings) = the existing baseline; nothing new |
| `next build` | Pass, 905/905 pages |
| Prerender comparison, 899 pages | **7 changed**: the 5 RUH routes, plus `/cities/jeddah` and `/cities/riyadh` (their route cards show the new intros). Nothing else changed |
| Residual-claim scan of the 5 pages | No name-board, flight-tracking, free-waiting or "fixed price" wording in page data. The only remaining items come from shared templates (§4) |
| FAQ schema parity | Every FAQ question in the schema is visible on the page (6 / 6 / 3 / 4 / 2) |
| Notice rendered | Yes, on all 5 pages |

**Apply order:**
1. The Riyadh hub change (`28-…diff`, already in the working tree).
2. `31b`.
3. `32b`, which depends on `31b`.

`31b` doesn't need `28`, but both should be released together. If the working copies are CRLF, apply with `git apply --ignore-whitespace` or to LF-normalised files.

## 4. Riyadh-specific claims that still need owner confirmation

| # | Claim / item | Where | Why it needs a decision | Proposed default |
|---|---|---|---|---|
| R1 | Whether RUH pickups and drop-offs are possible at all | All RUH pages, hub, advisory | Owner: case by case until operating and permission requirements are confirmed | Keep the case-by-case wording (as drafted) |
| R2 | **Flight tracking and free waiting at RUH** | Was on all 5 RUH routes and in the AR RUH→Riyadh FAQ ("60 دقيقة انتظار مجانية") | Owner rules confirm tracking only at DMM, JED and MED; no free-waiting duration was given anywhere | Removed from the EN copy (31b); remove from AR in the Arabic pass |
| R3 | **"Pure driving time" in the facts box** (`route.duration`: 30–45 min, 9 hours, 8 h 30, 8 hours) | The facts box on the 5 RUH routes, and route cards site-wide | Durations are unverified. The same field feeds route cards on other pages, so changing it touches pages outside this scope | Owner decision: (a) keep, labelled as a driving baseline (current); or (b) blank it for RUH routes in a separate, site-wide figures task |
| R4 | Makkah "870–880 km" and Madinah "roughly 850 km" | RUH→Makkah, RUH→Madinah | Sources vary by up to ±30 km | Accept the ranges, or remove figures from the prose |
| R5 | `QuoteForm` success text: "We'll reply with a fixed price for your journey" | Every page with the quote form | Shared template; it conflicts with the "confirmed quotation sets the price" wording | Template change, approved separately |
| R6 | Related-route cards show other routes' figures (e.g. "950 km · 9 hours") | RUH route pages | Card data belongs to other routes | Part of the site-wide figures task |
| R7 | `/blog/riyadh-airport-driver-meeting-point` (database) still promises a name board and an arrivals meeting at RUH | Live blog | Rev 2 of the advisory no longer links it, but the post itself is live and unchanged | Owner: noindex or edit, as a separate database item |
| R8 | Four other Arabic RUH pages with pickup promises (report 30 §2.5) | AR | Out of scope here | Include in the Arabic pass |
| R9 | The departure advice "3 hours international, 2 hours domestic" | AR Riyadh→RUH FAQ | General airline guidance, not a service claim | Keep, or replace with "check your airline's check-in deadline" |
| R10 | Advisory title length of 68 characters | Advisory | Possible truncation in search results | Optional: "Riyadh Airport (RUH) Status: Road Transfer Options" (50) |

## 5. Arabic review package (for a qualified native reviewer — **no Arabic was edited**)

**How to use this package:**
- The reviewer writes the Arabic; this list gives the current text and the required meaning.
- Machine translation is not acceptable.
- After sign-off, implementation runs `npm run gen:ar-index`, `check:ar-index` and `check:ar-500`.

### 5.1 Five Arabic RUH route pages (`data/translations/ar.ts`)

| Page (AR slug) | Field | Current Arabic (exact) | Required meaning (English) |
|---|---|---|---|
| `نقل-من-مطار-الرياض-الى-جدة` (L9253) | metaTitle (L9256) | "نقل من مطار الرياض إلى جدة \| تاكسي خاص بسعر ثابت" | Remove "fixed price": "Riyadh Airport to Jeddah private transfer" |
| | metaDescription (L9257) | "…استقبال داخل الصالة وتوصيل مباشر لجميع أحياء وفنادق جدة." | "RUH to Jeddah transfers are confirmed case by case while airport operations are disrupted. Your confirmed quotation sets the price." |
| | intro (L9259) | "خدمة استقبال من جميع صالات مطار الملك خالد…" | "Private transfer from RUH to Jeddah, confirmed case by case in your quotation while airport operations are disrupted." |
| | duration (L9261) | "حوالي 9 ساعات" | Owner decision R3 |
| | section heading (L9264) | "من صالة الوصول بالرياض إلى عروس البحر الأحمر" | Avoid implying an arrivals-hall pickup, e.g. "From Riyadh to the Red Sea coast" |
| | FAQ (L9271) | "نستقبل الركاب من جميع صالات مطار الملك خالد…" | "Share your flight number and terminal; any airport pickup is confirmed case by case in your quotation." |
| `نقل-من-مطار-الرياض-الى-مكة` (L9416) | distance / duration (L9423–9424) | "880 كم" / "8 ساعات ونصف" | Distance "about 870–880 km" (R4); duration per R3 |
| | paragraph (L9429) | "تستغرق الرحلة حوالي 8.5 ساعات…" | Remove the duration; keep the miqat-stop sentence |
| `نقل-من-مطار-الرياض-الى-المدينة-المنورة` (L9524) | metaDescription (L9528), intro (L9530) | "خدمة استقبال من مطار الملك خالد…" / "استقبال مباشر بصالات مطار الملك خالد…" | Case-by-case pattern as above |
| | duration (L9532), paragraph (L9537) | "8 ساعات" / "…في حوالي 8 ساعات مع استراحات منتظمة." | Remove the duration (R3); keep "with regular rest stops" |
| | heading (L9535) | "من صالة الوصول بالرياض إلى المسجد النبوي الشريف" | Avoid implying an arrivals-hall pickup |
| | FAQ (L9542) | "نعم، يستقبلك السائق داخل صالة الوصول بلافتة تحمل اسمك…" | **Remove the name board.** "Any airport pickup and meeting point are confirmed case by case in your quotation." |
| `توصيل-من-مطار-الرياض-إلى-الرياض` (L10758) | metaTitle (L10761) | "…\| تاكسي خاص بسعر ثابت" | Remove "fixed price" |
| | metaDescription (L10762) | "…استقبال في صالة الوصول، تتبع الرحلات، وسعر ثابت 24/7." | Case-by-case pattern; **no tracking, no fixed price** |
| | intro (L10764) | "…بأسعار ثابتة ومحددة مسبقاً." | "…priced in your confirmed quotation." |
| | duration (L10766) | "30-45 دقيقة" | R3 |
| | heading (L10783) | "استقبال راقٍ في مطار الملك خالد الدولي بالرياض" | Neutral: "Transfers from King Khalid International Airport" |
| | paragraph (L10785) | "…ينتظرك سائقنا المحترف داخل صالة الوصول حاملاً لوحة باسمك…" | **Remove the name board and the arrivals-hall promise**: "Confirm your flight with your airline first. Whether a pickup can be arranged, and where you would meet your driver, is confirmed in your quotation." |
| | FAQ answer (L10793) | "ينتظرك السائق داخل صالة القدوم… حاملاً لوحة تحمل اسمك بوضوح." | Same as the paragraph above |
| | FAQ answer (L10797) | "نقوم بتتبع الرحلة… تلقائياً مع 60 دقيقة انتظار مجانية بعد الهبوط." | **Remove tracking and the 60 minutes.** "Tell us as soon as your airline confirms a new time, and we'll review the pickup with you." |
| `توصيل-من-الرياض-إلى-مطار-الرياض` (L10802) | metaDescription (L10806) | "…دقة في المواعيد…" | Case-by-case pattern; remove the punctuality promise |
| | intro (L10808) | "…بدقة تامة في المواعيد…" | "Private transfer from Riyadh hotels and offices to RUH, confirmed case by case in your quotation while airport operations are disrupted." |
| | heading (L10827) | "التزام بالمواعيد ووصول آمن للمطار" | Neutral heading; no punctuality or safety promise |
| | paragraph (L10829) | "نضمن لك وصولاً مريحاً وفي الوقت المحدد…" | **Remove the guarantee.** "Your driver collects you at the agreed time; any airport drop-off is confirmed case by case in your quotation." |
| | FAQ (L10836) | "نوصي بحجز موعد الانطلاق قبل 3 ساعات…" | R9 |
| All 5 | (new) status notice | — | The Arabic equivalent of `RUH_STATUS_NOTICE`: GACA 10 and 12 Oct; no official resumption found; check with your airline; case by case; alternative routes |

### 5.2 Shared Arabic template steps (`app/ar/[...slug]/page.tsx`) — they affect every Arabic airport route

| Line | Current | Required meaning |
|---|---|---|
| L775, L993 | "تبدأ متابعة رحلتك الجوية — نتابع رقم رحلتك فور الحجز…" | RUH: replace with "Check your flight with your airline". DMM, JED and MED: tracking is confirmed, so keep |
| L776, L994 | "يستقبلك السائق في صالة الوصول — ينتظرك سائقك داخل صالة الوصول بلافتة تحمل اسمك…" | **Name boards are not offered at any airport.** Remove "بلافتة تحمل اسمك" everywhere |
| L1001 | "استلم سعرًا ثابتًا — يُؤكَّد السعر قبل السفر — دون عداد ودون رسوم مفاجئة." | "Receive your quotation — the confirmed quotation sets the price and shows what it covers." |
| L1002 | "ينتظرك السائق في صالة الوصول، مع متابعة رحلتك في حال أي تأخير." | RUH: case by case. DMM, JED and MED: tracking yes; no name board |

These need the same optional-override mechanism as the English template (an engineering task, after sign-off).

### 5.3 Retained lists

- **Advisory (AR)** `/ar/إغلاق-مطار-الرياض-أكتوبر-2026`: the field-by-field list in `29-…` §3 is retained unchanged.
- **Riyadh hub (AR)** `/ar/نقل-مطار-الرياض`: the list in `29-…` §4 (originally `27-…` §5) is retained unchanged.

## 6. Decisions needed before Phase 1 implementation

1. Approve `31b` (EN, five RUH routes) for implementation. Implementation must stay separate from deployment.
2. Approve the advisory database PATCH (`29b`), using the guarded `updated_at` condition.
3. R3: durations in the facts box (keep / blank in a later site-wide task).
4. R5: shared `QuoteForm` wording (separate template task).
5. R7: what to do with `/blog/riyadh-airport-driver-meeting-point`.
6. Name the native Arabic reviewer for §5.
7. Release day: re-check GACA and refresh the "last checked" dates.
