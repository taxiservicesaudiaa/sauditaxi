# Madinah page — pre-deployment decisions

**Date:** 20 November 2026. **Type:** report only.

**What was not done:**
- No code, content, commit, push, deployment or indexing action.
- The English implementation is unchanged and uncommitted:
  - `app/(main)/cities/[city]/page.tsx` (modified)
  - `components/city-hub/MadinahAirportHubView.tsx` (new)
  - `data/madinah-airport-hub.ts` (new)

## 1. Vehicles shown on the page (unchanged; source `data/vehicles.ts`)

The vehicle cards render `data/vehicles.ts` directly. That file is shared with the quote form's vehicle selector, the About page, the homepage, the airport hubs and the `VehicleOptions` section, so any change there affects all of them.

| Category | Example models | Passengers | Luggage | Description shown |
|---|---|---|---|---|
| Economy | Hyundai Accent, Toyota Yaris | 1–3 | 2 bags | "Affordable private rides for solo travellers and short city trips." |
| Comfort | Toyota Camry, Hyundai Sonata | 1–3 | 3 bags | "A roomier sedan for airport runs and longer intercity journeys." |
| Business | Mercedes E-Class, Lexus ES | 1–3 | 3 bags | "Premium executive cars for corporate travel and VIP arrivals." |
| SUV | Toyota Land Cruiser, GMC Yukon | 1–5 | 4 bags | "Spacious 4x4 comfort for families and desert routes like AlUla." |
| Van | Toyota Hiace, Hyundai Staria | 1–9 | 8 bags | "Ideal for pilgrim groups and families travelling with luggage." |
| Minibus | Toyota Coaster | 10–18 | "Group luggage" | "Group transport for large Umrah, Hajj, and corporate parties." |

**Other vehicle statements on the Madinah page** (`data/madinah-airport-hub.ts`):

| Line | Text |
|---|---|
| L49 | Essentials: "Sedan to minibus, subject to availability" |
| L57 | "a sedan suits one to three travellers with standard luggage, while families and pilgrim groups usually need an SUV, van or minibus" |
| L203 | FAQ "Can I book a van for my Umrah group?": "A van takes up to 9 passengers with about 8 bags, and a minibus 10–18 passengers… the vehicle offered is confirmed in your quotation." |
| Vehicles section intro | "Capacities are a guide; the vehicle offered for your journey is confirmed in your quotation." |

**Owner decision V1:** confirm each row: models actually in the fleet, passenger and luggage limits, and the minibus luggage allowance. If any differ, `data/vehicles.ts` changes **site-wide**, and the L49/L57/L203 wording should follow.

## 2. Statements that need owner confirmation (`data/madinah-airport-hub.ts`)

| # | Topic | Line | Exact text | Basis today |
|---|---|---|---|---|
| C1 | Flight tracking + free waiting | L72 | "We track your flight into Madinah, and free waiting time is included if it lands late." | Owner rules (Oct 2026): tracking at MED yes; free waiting yes, no allowance stated |
| C2 | Same | L213 | FAQ "What happens if my flight is delayed?": "We track your flight into Madinah, and free waiting time is included if it lands late. If your flight is rescheduled, message us with the new time." | As C1 |
| C3 | Meeting point | L73, L98 | "The exact meeting point and pickup instructions are confirmed with you before you travel." / "…the meeting point and pickup details are agreed before you travel." | Neutral wording; owner to confirm where drivers meet at MED |
| C4 | Ziyarat | L118 | "Optional visits to sites such as Mount Uhud and Masjid al-Qiblatain, arranged as a separate Ziyarat trip." | The existing Ziyarat service page; confirm still offered |
| C5 | Quba | L123 | "A stop at Quba Mosque, south of the Haram, can be requested on the way to or from your hotel." | Existing city FAQ ("request a Ziyarat stop such as Quba"); confirm stops on airport transfers |
| C6 | Quba / Ziyarat | L208 | FAQ "Can I request a stop at Quba Mosque?": "Yes, you can request a stop at Quba Mosque or another Ziyarat site when you ask for a quote. Each stop is confirmed in your quotation." | As C5 |
| C7 | Onward Makkah | L128 | "A private intercity transfer from Madinah or the airport to Makkah, with rest stops agreed in advance." | The Madinah→Makkah route exists; confirm **airport → Makkah** directly |
| C8 | Onward Makkah + miqat | L228 | FAQ "Can I travel from Madinah Airport directly to Makkah?": "Yes… rest stops and a stop at Dhul Hulaifah (Abyar Ali) can be requested." | As C7 + C9 |
| C9 | Dhul Hulaifah | L133 | "Dhul Hulaifah, also called Abyar Ali, is the miqat on the road from Madinah to Makkah, about 14 km from the Haram. Pilgrims can ask for a stop there on the way to Makkah." | Distance verified (13.6 km by road); the stop also appears in `lib/city-hub-facts.ts`. Confirm the service |
| C10 | Availability | L49 | "subject to availability" | Neutral |
| C11 | No payment for a quote | L223 | "No payment is needed to receive a quote." | Matches the existing site wording |
| C12 | Prayer-time restrictions | footnote; FAQ "How long…" | "roads near the Haram can be restricted" around prayer times | Existing site FAQ wording; general |

**Owner decisions:**
- **D1:** confirm C1–C9 (or give the free-waiting allowance if it should be stated).
- **D2:** confirm the MED meeting point if you want it named.

## 3. Shared "fixed price" wording (not changed)

| Where it shows | Source file | Key | Current |
|---|---|---|---|
| Quote form note under the Send button (every page with the form) | `locales/en/common.json` **L104** | `quoteForm.disclaimer` | "We'll reply with a fixed price for your journey — no payment needed to get a quote." |
| Footer description (every page) | `locales/en/common.json` **L17** | `footer.description` | "Private taxi and transfer service across Saudi Arabia — airports, cities, intercity routes, borders, Umrah, and Hajj. Fast WhatsApp quotes, fixed prices, professional drivers." |
| Arabic equivalents | `locales/ar/common.json` L104, L17 | same keys | "سنرد عليك بسعر ثابت لرحلتك…", "…وأسعار ثابتة…" |

Both are read through `lib/i18n.ts` (`getDictionary`).

**Recommended replacement wording (EN):**
- **L104:** "We'll reply with a quotation for your journey — no payment needed to get a quote."
- **L17:** "Private taxi and transfer service across Saudi Arabia — airports, cities, intercity routes, borders, Umrah, and Hajj. Quick WhatsApp quotes, clear quotations, professional drivers."

**Effect:** one shared-file change; all English pages update together. The Arabic lines need the same meaning from your native reviewer.

**Out of scope but related:** the same phrase "we reply with a fixed price" also appears in about 40 page-level strings:
- `app/(main)/routes/[slug]/page.tsx` (route CTAs);
- `app/(main)/get-quote/page.tsx` L35, L55;
- `app/(main)/taxi-service/[city]/page.tsx` L81;
- `app/(main)/border-transfers/[border]/page.tsx` L170;
- `app/(main)/airport-transfer/[airport]/page.tsx` L222;
- `lib/route-composer.ts` L188;
- `lib/hotel-transfers.ts` L310;
- `data/faqs.ts` L165;
- `data/city-guides.ts` (18 entries);
- `data/service-pages-v2/*` (5).

This belongs to the site-wide template task (T1) and needs a separate decision.

**Owner decision D3:** approve the two locale strings (EN) for a shared-component change, separately from the Madinah page.

## 4. Arabic parity checklist — `/ar/نقل-فنادق-المدينة`

**Sources:**
- `data/translations/ar.ts` L1615–1640 (`metaTitle`, `metaDescription`, `h1`, `intro`, `sections`, `faqs`);
- the shared Arabic city-hub branch in `app/ar/[...slug]/page.tsx` L654–770;
- Arabic airport facts in `lib/city-hub-facts.ts` (madinah).

**Rule:** a qualified native reviewer writes all Arabic. The table gives the current text and the required meaning only.

| # | Item | Current (exact / summary) | Required for parity with EN |
|---|---|---|---|
| A1 | `metaTitle` | "نقل خاص إلى فنادق المدينة المنورة من المطار (MED)" | Airport-to-hotel transfers from MED, distinct from the Arabic airport hub's title |
| A2 | `metaDescription` | "…بسعر ثابت واستقبال داخل الصالة." (fixed price + in-hall reception) | Remove both; "share flight details, choose a vehicle, request a quote" |
| A3 | `h1` | "نقل فنادق المدينة المنورة من المطار" | "Madinah Airport Transfers to Hotels & City" |
| A4 | `intro` / "أبرز المعلومات" section | "…وكل فندق رئيسي…" and the hero stats line "10 فندقًا… سعر ثابت متفق عليه قبل السفر" | Hero copy as EN (private vehicle; quotation sets the price; hotels near Al-Masjid an-Nabawi) |
| A5 | FAQ 1 "كيف أحجز…" | "…نرد بسعر ثابت…" | EN "How can I request a transfer quote?" |
| A6 | FAQ 2 "هل تغطون كل فندق…" | "جميع الفنادق الرئيسية 3 و4 و5 نجوم" (all major hotels) | EN "Can you pick me up if my hotel is not listed?" + "Do you cover hotels close to the Prophet's Mosque?" |
| A7 | FAQ 4 "ماذا لو تأخرت رحلتي؟" | "نعدّل موعد الاستقبال تلقائيًا… فالتأخير لا يكلفك شيئًا إضافيًا" (automatic adjustment; a delay costs nothing) | EN C2 wording; remove "costs nothing" |
| A8 | FAQ 5 (return) | "لكل فندق مسار عودة مطابق… افتح صفحة أي مسار" (hotel route pages now redirect here) | EN return-transfer answer + link to the Arabic Madinah → airport route |
| A9 | Missing FAQs | 5 Arabic vs 12 English | Add the Arabic versions of the 12 EN FAQs |
| A10 | Missing sections | Arabic has essentials, hotel table, vehicles, booking steps, FAQ, CTA | Add: what to send before pickup; return transfers; Umrah/Ziyarat/Quba/Dhul Hulaifah/Makkah; related Madinah transfers; curated Arabic guides |
| A11 | English heading on the Arabic page | Booking-steps H2 renders **"How Booking Works"** in English — `<HowItWorks background="white" />` at `app/ar/[...slug]/page.tsx` **L761** passes no Arabic heading or steps | Pass Arabic heading/subheading/steps (**affects all 5 Arabic city hubs** — shared branch) |
| A12 | Layout | Arabic uses the old table layout (`HotelTransferHubView`) | Arabic version of `MadinahAirportHubView` (RTL) — engineering after the copy is approved |
| A13 | Quote form | Arabic hub has no form in the hero | Hero form with pickup prefilled (Arabic airport name), as EN |
| A14 | Shared Arabic locale strings | `locales/ar/common.json` L104 / L17 "سعر ثابت" / "أسعار ثابتة" | As §3 |
| A15 | Airport facts | Arabic miqat and seasonal text in `lib/city-hub-facts.ts` (madinah) | Keep the meaning; align with EN C9 |
| A16 | hreflang | EN ↔ AR pair correct | No change |

## 5. Outstanding decisions and exact files

| ID | Decision | Files involved |
|---|---|---|
| V1 | Confirm the vehicle fleet table (§1) | `data/vehicles.ts` (shared, site-wide); `data/madinah-airport-hub.ts` L49, L57, L203 |
| D1 | Confirm C1–C9 (Quba, Ziyarat, Dhul Hulaifah, onward Makkah, flight tracking, free waiting) | `data/madinah-airport-hub.ts` L72–73, L98, L118–133, L208, L213, L228 |
| D2 | Name the MED meeting point (optional) | `data/madinah-airport-hub.ts` L73, L98 |
| D3 | Approve the replacement wording for the shared locale strings (EN), separately | `locales/en/common.json` L17, L104 (+ `locales/ar/common.json` L17, L104 via native review) |
| D4 | Arabic parity: assign a native reviewer; then the engineering for A11–A13 | `data/translations/ar.ts` L1615–1640; `app/ar/[...slug]/page.tsx` L654–770 (shared by the 5 Arabic hubs); `lib/city-hub-facts.ts` |
| D5 | Deploy the English Madinah page (after V1/D1) | `app/(main)/cities/[city]/page.tsx`; `components/city-hub/MadinahAirportHubView.tsx`; `data/madinah-airport-hub.ts` |
| D6 | Exclude `/blog/madinah-airport-driver-pickup-guide` until its name-board / fixed-price text is fixed (database) — currently excluded from the page | Database `blogs` record (separate approval) |
