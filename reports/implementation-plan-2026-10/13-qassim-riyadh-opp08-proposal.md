# Qassim ↔ Riyadh — OPP-08 page-improvement proposal and blog evaluation

> **Status update — 18 Oct 2026 (Revision 2).**
>
> **Owner decisions received.**
> - **Qassim airport (ELQ):** pickup and drop-off are offered.
> - **Distance, duration and road number:** remove; do not estimate.
> - **Riyadh airport (RUH):** availability is unverified, so make no promise.
> - **Price and tolls:** the confirmed quotation controls.
> - **Tracking:** remove.
> - **Blog:** none.
>
> Patch A and Patch B are approved, subject to native Arabic review. Deployment is **not** authorised.
>
> **Revision 2 changes to Patch A.** File: `14-qassim-opp08-route-pages-rev2.patch` (2 files, 163 insertions, 117 deletions). It supersedes `14-…patch`.
> - **ELQ pickup** added to Qassim → Riyadh, in English and Arabic: the notes, the English pickup list, the Arabic summary and a new FAQ.
> - **ELQ drop-off** added to Riyadh → Qassim in the same places. No flight, schedule or meet-and-greet guarantee is given.
> - **RUH:** every drop-off promise is removed. These were the English note, the drop-off list, the overview clause, the "Popular stops" clause, the intro ("connecting to Riyadh's airport") and the Arabic equivalents. The airport FAQ and the flight sections now say RUH drop-off "depends on the airport's current operations and is confirmed in your quotation". These strings are marked **(RUH — owner review)** in the review pack.
> - **Wording fixes.** Two joining errors from removing the "largest livestock market" claim are corrected: "and and" in English and "وو" in Arabic.
>
> **Implementation is blocked: no native Arabic review has been supplied.** Under the approval terms, neither patch is applied until the review is recorded. The review pack is `16-qassim-arabic-review-pack.md`: 76 changed Arabic strings (45 rendered, 31 stored but unrendered), each with an English gloss, plus 5 specific reviewer questions.
>
> **Flagged, not changed (outside the approved scope).**
> - The keyword `"qassim to riyadh airport taxi"`. It is reporting-only and not rendered.
> - The English Buraidah page's ELQ text promising "We track your flight and provide meet-and-greet pickup with a name board". ELQ service is now confirmed, but those specifics are not, and city pages are out of scope.
> - The Arabic template's hard-coded pickup list includes "المطار". That is now accurate for Qassim → Riyadh (ELQ) but implies RUH pickup on Riyadh → Qassim. This is a shared-template item.

**18 October 2026. Audit and proposal only — nothing implemented.** No application file, database record, metadata, sitemap or configuration has been changed; nothing committed, pushed or deployed. The proposed changes exist only as scratchpad builds and as the two patch files beside this report (`14-…patch`, `15-…patch`). Database access was read-only (`blogs`, `leads` — no names, emails or phone numbers requested or recorded).

Two separate approval items: **(A) route-page improvements** and **(B) a new blog**. Recommendation for (B): **do not create a Qassim blog now** (§9).

---

## 1. Audit summary — the four pages

| | EN Qassim → Riyadh | EN Riyadh → Qassim | AR القصيم → الرياض | AR الرياض → القصيم |
|---|---|---|---|---|
| URL | `/routes/qassim-to-riyadh` | `/routes/riyadh-to-qassim` | `/ar/نقل-من-القصيم-الى-الرياض` | `/ar/نقل-من-الرياض-الى-القصيم` |
| Source | `data/routes.ts` (entry at `:6052`) | `data/routes.ts` (`:5945`) | `data/translations/ar.ts` (`:7531`) | `ar.ts` (`:7452`) |
| Template | Domestic `RouteJourneyView` (`page.tsx:1752+`, `lib/route-composer.ts`) | same | Arabic domestic branch (`app/ar/[...slug]/page.tsx:841+`) | same |
| Live status (18 Oct) | 200 | 200 | 200 | 200 |
| Canonical / hreflang | Self; EN↔AR reciprocal | Self; reciprocal | Self; reciprocal | Self; reciprocal |
| `lang` / `dir` | en / ltr | en / ltr | ar / rtl | ar / rtl |
| Structured data | Breadcrumb, Service, FAQPage (+ site-wide Organization/WebSite/LocalBusiness/TaxiService) | same | same | same |
| Rendered words (main) | ~1,290 | ~1,490 | ~690 | ~680 |
| Sections / FAQs | 11 / 12 | 11 / 12 | 1 rendered / 12 | 1 rendered / 12 |
| GSC 16 Jul–15 Oct (Top-pages) | 0 clicks / 56 impr. | 1 / 52 | in AR total (Qassim pages 6 of 7 clicks were Arabic) | — |
| Enquiries (leads table, 8 Jul–18 Oct) | 18 of 24 Qassim enquiries are Qassim → Riyadh; 22 of 24 in October | 3 | first landing: 4 | 1 |

**Verified defects found (beyond the claims in §2):**

1. **Raw HTML visible in FAQs (EN).** Two answers per English page print `<a href='/routes/…'>…</a>` as visible text, and the same markup is emitted into FAQPage JSON-LD. Section paragraphs render links correctly (they use `dangerouslySetInnerHTML`); FAQ answers do not. Site-wide, 32 route FAQ answers in `data/routes.ts` contain `<a href` — only the 4 on these pages are fixed in this proposal.
2. **Misleading pickup/drop-off lists (EN).** The generic lists show "Airport", "Railway or bus station", "Religious site" (pickup) and "Religious destination", "Border point" (drop-off) on both pages. Fixable at route level with `richLayout.pickupPoints/dropoffPoints` (only read by this route view; verified no other consumer).
3. **Arabic `contentHtml` is never rendered.** The Arabic domestic route view renders `page.sections` and `page.faqs` only, so each Arabic page shows a one-paragraph summary plus FAQs, while ~11 headed sections sit unused in `contentHtml`. This is the main Arabic parity gap.
4. **Arabic pickup list is hard-coded in the shared template** (`["المطار","الفندق","المنزل","مقر العمل"]`, `app/ar/[...slug]/page.tsx`), implying airport pickup on every Arabic domestic route — needs a separate template decision.
5. **Riyadh airport closure.** King Khalid International Airport (RUH) has been suspended since 10 October (site advisory `/blog/riyadh-airport-closure-october-2026`, last updated 14 Oct); reports on 18 Oct conflict on whether it has reopened. The Qassim → Riyadh page promises "Direct drop-off anywhere in Riyadh, including the airport", while the site's own advisory says RUH pickups/drop-offs cannot run during the closure.
6. **Qassim airport demand vs. unconfirmed service.** **12 of the 24 Qassim enquiries (all 10–16 Oct) involve Prince Naif bin Abdulaziz Airport (ELQ)** — 8 pickups at ELQ to Riyadh, 4 drop-offs at ELQ. ELQ service is **not** owner-confirmed (OPP-09), yet the EN Buraidah page says "We track your flight and provide meet-and-greet pickup with a name board in the arrivals hall" at ELQ, and the AR Buraidah meta description says "استقبال من مطار القصيم". Not on the four target pages; flagged for decision O1.
7. **6 of 24 Qassim enquiries carried `utm_source=chatgpt.com`** (landing on these four pages). Site-wide first/last referrers include bing.com (13), duckduckgo.com (6), chatgpt.com (2), perplexity.ai (1). AI and Bing referrals are real but small; measurement gaps in §8.

**Side effect from the B-1 deployment (no production impact):** `git checkout main` with `core.autocrlf=true` re-wrote the **working copy** of `data/routes.ts` to CRLF (committed/deployed blob still 0 CR; `git status` clean). Not corrected during this read-only audit; step 0 of implementation restores it (§7).

---

## 2. Unsupported claims — occurrences and proposed corrections

Owner-confirmed policies used: 24-hour support is genuine; pickup availability confirmed on listed routes; **"Tolls and border fees vary by route or quote; the confirmed quotation controls."** The repository's quote workflow (`lib/quotations.ts`: quotations with line items and totals) supports "the confirmed quotation sets the price". Nothing else below is owner-confirmed.

| # | Claim | EN occurrences (Q→R / R→Q) | AR occurrences (rendered) | AR occurrences (unrendered `contentHtml`) | Status | Proposed correction | Effect |
|---|---|---|---|---|---|---|---|
| C1 | "one fixed price" / "fixed price" / "fixed fare" / "fixed-price" | Q→R: `about`, business section, booking section, FAQs "Is the fare fixed…", business FAQ, meta description. R→Q: `about`, meta description, business section, booking section, FAQ "Is the price fixed…", business FAQ | meta descriptions ("سعر ثابت"), "نظرة سريعة" (both), FAQs on price and business (both) | intro, business, booking paragraphs (both) | **Conflicts with owner policy** | "priced in a quotation you confirm before you travel" / "the confirmed quotation sets the price" — and rewrite the price FAQ as "How is the price for this transfer set?" | Removes a promise the business has not made; aligns copy with the actual quote process. Snippets lose "fixed price" wording, which may have been attractive but was unsupported |
| C2 | "Your fixed price is fully inclusive" | Tolls section (both) | — | Tolls section (both) | **Conflicts with owner policy** | Section renamed "Price and what your quotation covers"; text: the confirmed quotation sets the price and shows what it covers; mention extra stops, waiting time or address changes when requesting the quote | Customers are told where inclusions are defined (the quotation), reducing disputes |
| C3 | "No toll roads apply on this route or anywhere in Saudi Arabia" / "no toll charges" | Tolls section (both); FAQs "no toll charges" (both) | meta descriptions ("بدون رسوم طرق"); price FAQs ("رسوم طرق") | Tolls section (both) | **Unverified for 2026** — Wikipedia says Highway 65 "is not tolled" with no citation; older press reports both toll plans and denials; no current official statement found | Removed. No inclusion/exclusion claim; quotation governs | Avoids an absolute national claim that cannot be verified |
| C4 | "track your departure and adjust the pickup time automatically" / "track your booking so pickup adjusts" / "tracked service" | Q→R FAQ (airport), "Best time" section, business section and FAQ | Q→R FAQ ("نتابع موعد مغادرتك ونعدّل وقت الاستلام تلقائيًا") | Q→R "best time" and business paragraphs | **Unverified operational promise** | Customer shares flight number/time when requesting a quote; pickup time planned around it; customer checks flight status with the airline | Removes an automated-monitoring promise; keeps the useful scheduling advice |
| C5 | "~345 km" / "approximately 345 kilometres" | meta descriptions (both); overview sections (both); distance FAQs (both); **`distance` field** (facts box, related-route cards on ~20 pages) | meta descriptions (both); FAQs (both); **`distance` field** | overview (both) | **Unverified; conflicting** — only an unofficial calculator found (~330 km Riyadh–Buraidah road). No official source | Removed from metadata, prose and FAQs. **`distance` field left unchanged pending decision D1** (removing it would blank the shared facts box and related-route cards) | Text no longer asserts an unverified figure. The facts box still shows "~345 km" until D1 |
| C6 | "about 3 hours 30 min" / "three and a half hours" | meta descriptions; overview, road-conditions, safety sections; FAQs on distance, rest stops, elderly/children (both); **`duration` field**; notes ("roughly three-and-a-half-hour drive") | **AR meta titles** "(~3 ساعات و30 دقيقة)"; FAQs (both) | several paragraphs | **Unverified**; also never labelled as driving-only vs door-to-door | Removed from titles, descriptions, prose and FAQs; replaced with "depends on exact addresses, traffic and any stops; share your departure/arrival time". **`duration` field pending D1** | Honest, still answers the timing question with actionable guidance |
| C7 | "Highway 65" / "طريق 65" | `about` (both), overview, "fastest route" heading + text, road-conditions text, FAQs (both) | "نظرة سريعة" (both), FAQs (both) | several paragraphs | **Partially supported (secondary only)** — Wikipedia/AARoads call Highway 65 the "Riyadh–Qassim Expressway"; one listing conflicts; no official MOT/Roads General Authority page retrieved | Replaced with "the main Riyadh–Qassim highway" / "طريق الرياض–القصيم الرئيسي". Restore the number once an official source is recorded | Minor loss of specificity; no unverified identifier |
| C8 | Other unsupported statements found | "English-speaking driver", "Reliable, on-time" (meta); "well-maintained… regular rest facilities… multi-lane divided" (road sections); "Buraidah's is among the largest livestock markets in the world"; "Familiar with… farm-visit schedules"; "we regularly serve farm visits"; "our vehicles have ample luggage space"; "drivers cover this route at all hours as a matter of routine"; "fatigue-awareness standard"; "this is a common extension" | "نخدم زيارات المزارع بانتظام"; "مركباتنا توفر مساحة أمتعة كافية"; "الطريق السريع مقسّم ومتعدد المسارات"; "امتداد شائع" | equivalents | **Unverified** | Removed or rewritten as requestable options (rest stop, farm address, luggage via the form's luggage field, night departure + 24/7 support). "Safety on the drive" section removed (only unverified claims; duplicated rest-stop text) | Fewer unverifiable promises; no loss of a verified fact |

Kept unchanged because accurate or low-risk: pickup "anywhere in Qassim, including Buraidah and Unaizah" (listed-route availability), Unaizah old town, camel-market early-morning advice (general, low risk — flagged for a source), vehicle-choice advice, Hail extension, Riyadh airport drop-off (now conditional on the airport operating).

**Template-level occurrences — NOT in this patch (separate cross-route approval):** EN domestic view CTA "we reply with a fixed price", form subheading "Fixed price for your private transfer.", return block "for fixed pricing" (`lib/route-composer.ts`), `QuoteForm` "We'll reply with a fixed price for your journey"; AR equivalents "نرد بسعر ثابت", "سعر ثابت لرحلتك الخاصة", "لمعرفة السعر الثابت"; AR hard-coded pickup list with "المطار"; AR quote-form vehicle labels shown in English. These appear on every domestic route in both languages (~99 EN + AR counterparts) and belong with the planned fee-wording item (C2a/C2b in the implementation plan).

---

## 3. English / Arabic consistency report

| Topic | English (current) | Arabic (current) | After proposal |
|---|---|---|---|
| Depth | 11 sections + 12 FAQs rendered | 1 summary + 12 FAQs rendered (`contentHtml` unrendered) | AR gains 3 rendered sections per page (price, what to send for a quote, rest stops/family or flight-connected travel); EN loses the unsupported "Safety" section |
| Price wording | Fixed, fully inclusive, no tolls | سعر ثابت، شامل بالكامل، بدون رسوم طرق | Both: confirmed quotation sets price and shows inclusions |
| Tracking | Automatic adjustment (Q→R) | Same (Q→R) | Both removed |
| Distance/time | In meta, prose, FAQs, facts | In **titles**, meta, FAQs, facts | Removed from text in both; facts box pending D1 |
| Road number | Highway 65 | طريق 65 | "main Riyadh–Qassim highway" / "طريق الرياض–القصيم الرئيسي" |
| Return link | Section + related card + FAQ (FAQ link broken) | Return block link works; FAQ mentions page in text | EN FAQ fixed to plain text; both FAQs mention the message field for return dates |
| Pickup list | Generic (airport, station, religious site) | Hard-coded (airport, hotel, home, work) | EN route-specific; AR needs template change |
| Vehicle types | Not stated | Not stated | Both: new FAQ naming the quote form's options; vehicle confirmed in the quotation |
| Translation quality | — | Several mechanical constructions ("رحلة يمكن التعامل معها", "في جلسة واحدة", "متصلون لاحقًا جوًا") | Rewritten in the touched strings; **all new and rewritten Arabic requires native-speaker review before implementation** |

Arabic links: the AR pages link only to Arabic destinations (verified: related routes, city pages, `/ar/اطلب-عرض-سعر`). No English links are introduced.

---

## 4. OPP-08 internal-link plan

In-content inbound links counted across all 898 prerendered pages (local build of the deployed commit; header/footer excluded):

| Target | In-content inbound links |
|---|---|
| `/routes/qassim-to-riyadh` | 5 pages: `/cities/riyadh`, `/routes/hail-to-riyadh`, `/routes/riyadh-to-qassim`, `/sitemap`, `/taxi-service/buraidah` |
| `/routes/riyadh-to-qassim` | **3 pages**: `/cities/riyadh`, `/routes/qassim-to-riyadh`, `/sitemap` |
| `/ar/نقل-من-القصيم-الى-الرياض` | 14 pages (mostly AR "related routes" cards) |
| `/ar/نقل-من-الرياض-الى-القصيم` | 6 pages |

| # | Source | Destination | Lang | Anchor | Context and benefit | Exists? | In patch? |
|---|---|---|---|---|---|---|---|
| L1 | `/taxi-service/riyadh` (card in `data/city-guides.ts` Riyadh "Private Transfers from Riyadh to Other Cities") | `/routes/riyadh-to-qassim` | EN | "Riyadh to Qassim route" (card title "Riyadh to Qassim") | Riyadh hub lists five intercity routes but not Qassim, despite Qassim being the corridor with the most enquiries | No | **Yes — `15-…patch`** (1 line) |
| L2 | `/routes/qassim-to-riyadh` FAQ "Is there a return…" | `/routes/riyadh-to-qassim` | EN | (plain text — link already in "Planning the Return Journey" and Related Routes) | Removes visible raw HTML | Broken | Yes — `14-…patch` |
| L3 | `/routes/riyadh-to-qassim` FAQs (return, Hail) | reverse route; `/routes/riyadh-to-hail` | EN | plain text (links remain in sections and cards) | Same | Broken | Yes |
| L4 | Both EN booking sections | `/get-quote?pickup=…&dropoff=…` | EN | "Riyadh to Qassim quote form" / "Qassim to Riyadh quote form" | Pre-fills the route on the quote form (parameters already used by the page CTA) | Partly (generic `/get-quote`) | Yes |
| L5 | `/taxi-service/buraidah` | `/routes/riyadh-to-qassim` | EN | — | Buraidah's card section is "from Buraidah"; the reverse direction fits better on the Riyadh hub (L1) | — | Not proposed |
| L6 | `/ar/تاكسي-الرياض`, `/ar/تاكسي-بريدة` | the two AR route pages | AR | e.g. "النقل الخاص من الرياض إلى القصيم" | Neither AR city page links to either AR Qassim route. **AR city sections render as plain text** (`CityHubView` prints `{p}`), so this needs a shared-template change (plan item B5) | No | **Not in patch — template approval needed** |
| L7 | `/blog/riyadh-to-alula-road-trip-guide` (mentions Qassim as an overnight stop 6×) | `/routes/riyadh-to-qassim` | EN | "private transfer from Riyadh to Qassim" | Readers planning a Qassim stop | No | Not in patch — Supabase edit, separate approval |
| L8 | `/blog/riyadh-airport-closure-october-2026` "If your airline reroutes you…" (lists DMM, JED only) | Qassim route or future ELQ page | EN/AR | — | Only if O1 confirms ELQ service; time-sensitive | No | Not in patch — depends on O1 |

No new URLs; no links to unpublished pages; no sitewide/footer links; anchors are descriptive and vary.

---

## 5. Genuinely missing questions (evidence-supported)

From the 24 Qassim enquiries (8 Jul–18 Oct 2026; message fields redacted and summarised):

| Question | Evidence | Already answered? | Proposal |
|---|---|---|---|
| Can you collect me at Qassim airport (ELQ) and take me to Riyadh? | 8 enquiries; 4 more to ELQ | No (pages imply generic "Airport" pickup; Buraidah page claims ELQ meet-and-greet) | **Blocked — O1.** Ready-to-add FAQ once confirmed: "Can you pick me up at Prince Naif bin Abdulaziz Airport (Qassim)?" |
| Which vehicle types can I book? (one asked for "XL") | 1 message + vehicle field use: 13 Comfort, 4 SUV, 3 Van, 3 Economy, 1 Business | No | **Added** (both languages): names the quote form's options; vehicle confirmed in the quotation |
| Can I go and come back the same day? | 1 message (Riyadh→Qassim morning, back evening) | No | **Blocked — O3** (waiting/day-return policy) |
| Large luggage | 4 enquiries with 5+ bags | Partly ("ample luggage space" — unverified) | Rewritten to use the form's luggage field + message |
| Price | 1 message ("want to know the price") | Yes (booking section) | Rewritten to the quotation policy |

---

## 6. Source and evidence register (checked 18 Oct 2026)

| Claim / topic | Source | What it supports | Status |
|---|---|---|---|
| Highway 65 = Riyadh–Qassim Expressway | [Wikipedia: Highway 65 (Saudi Arabia)](https://en.wikipedia.org/wiki/Highway_65_(Saudi_Arabia)); [AARoads](https://wiki.aaroads.com/wiki/Highway_65_(Saudi_Arabia)) | Road number and corridor; "not tolled" (uncited) | Secondary only — not used |
| Road distance Riyadh–Buraidah | [khaleejcalculators.com](https://khaleejcalculators.com/distance/riyadh/buraidah) | ~330 km (calculator) | Unofficial; conflicts with 345 km — not used |
| Tolls | [Gulf News — "no road tolls planned"](https://gulfnews.com/world/gulf/saudi/saudi-arabia-no-road-tolls-planned-1.1594540580499) (undated); [Gulf News — "plans tolls on highways"](https://gulfnews.com/world/gulf/saudi/saudi-arabia-plans-tolls-on-highways-1.2217124) | Conflicting, dated reporting | No current official source — not used |
| Riyadh–Qassim passenger rail | [SAR Passenger Charter (Dec 2023)](https://www.sar.com.sa/documents/Passenger_Charter_EN.pdf) (via search result; sar.com.sa returned 401 to direct fetch); [Railway Journal](https://www.railjournal.com/regions/middle-east/sar-starts-first-passenger-services-from-riyadh/) | North train Riyadh–Hail calling at Majmaah and Qassim | Not used on route pages; relevant only to a comparison blog (§9) |
| RUH status | Site advisory (updated 14 Oct); [UA.News citing The National, 18 Oct](https://ua.news/en/world/aeroport-er-riiada-vidnoviv-robotu-ale-reisi-do-saudivskoyi-araviyi-skasovuiut-the-national); [Gulf News flight status, 18 Oct](https://gulfnews.com/business/aviation/uae-flight-status-today-full-list-of-cancellations-delays-and-travel-advisories-for-saudi-arabia-1.500714839); [AeroCorner NOTAM](https://aerocorner.com/news/riyadh-airport-reopen-notam-october-17-air-india-indigo-akasa/) | Closure from 10 Oct; reopening reports conflict on 18 Oct | Unresolved — copy made conditional ("when the airport is operating") |
| Flights rerouted to ELQ | Searched EN and AR | — | **No evidence found**; ELQ demand cause unknown |
| Quote form fields (passengers, luggage, vehicle Economy/Comfort/Business/SUV/Van/Minibus, flight number, message) | Live page HTML; `QuoteForm` | Vehicle-type FAQ; "add return date in the message field" | Verified (repository) |
| Quotation with line items and totals | `lib/quotations.ts` | "Confirmed quotation sets the price and shows what it covers" | Verified (repository) + owner toll/fee policy |
| 24/7 support | Owner decision on record | "Support is available 24/7" | Owner-confirmed |
| Enquiry evidence | `leads` table (read-only, 162 rows, 8 Jul–18 Oct) | §1, §5 | Verified counts; city/airport matching is text-based (approximate) |
| Search demand | `08-gsc-top-pages-…tsv` | Page impressions/clicks | Verified; **Queries export missing** |

---

## 7. Exact proposed implementation (NOT applied)

**Patch A — route pages:** `14-qassim-opp08-route-pages.patch` — `data/routes.ts` and `data/translations/ar.ts`, **2 files, 151 insertions, 109 deletions**. Only the four entries change (every old string was required to occur exactly once inside the intended entry). Contents:
- EN (both entries): meta descriptions (151 chars each; titles unchanged); `about`; `notes`; overview, main-route, road/rest, price, business and booking sections; "Safety on the drive" removed; 11 FAQs rewritten, 1 FAQ added (vehicle types); `richLayout` with empty journey/map fields and route-specific `pickupPoints`/`dropoffPoints`; `lastUpdated` (set to the actual implementation date).
- AR (both entries): meta titles (no duration) and descriptions (144 chars); "نظرة سريعة" rewritten; **3 new rendered sections each**; 9–10 FAQs rewritten, 1 FAQ added; claim sentences corrected inside the unrendered `contentHtml` (so the stored copy no longer contradicts the policy).
- Unchanged: slugs, `from`/`to`, `distance`/`duration` fields (D1), `intro` (Service schema description), H1s, keywords, breadcrumbs, `enPath`, related-city slugs.

**Patch B — internal link:** `15-qassim-opp08-riyadh-hub-link.patch` — `data/city-guides.ts`, 1 insertion (L1).

**Application method:** Step 0 — restore the LF working copy of `data/routes.ts` (`git -c core.autocrlf=false checkout -- data/routes.ts`; content identical to HEAD). Then exact string replacement (as in B-1) or `git -c core.autocrlf=false apply`. Never plain `git apply`. Note: 153 tracked files, including `data/city-guides.ts`, were already CRLF in the working tree before this work; preserve each file's existing endings.

Pre-checked on scratch copies: both patches apply to the committed HEAD and reproduce the proposal byte-for-byte; 0 CR bytes; TypeScript syntax diagnostics 0 for both files.

---

## 8. Validation plan (after approval)

| # | Check | Pass criterion |
|---|---|---|
| V1 | Line endings and diffstat | `data/routes.ts` back to `w/lf` before applying; diff = Patch A (2 files, 151/109) [+ Patch B 1/0]; no whitespace churn |
| V2 | `npx tsc --noEmit` | 0 errors (validates `richLayout` shape) |
| V3 | `npm run lint` | Identical to baseline (6 errors, 4 warnings, pre-existing) |
| V4 | `npm run gen:ar-index` then `npm run check:ar-index` | In sync (AR metadata changed) |
| V5 | `npm run build` | 904/904 static pages |
| V6 | Before/after snapshot of all 898 prerendered pages | Changes only on the 4 target pages (+ `/taxi-service/riyadh` for Patch B). Pages whose related-route cards show these routes are expected to be unchanged, because the cards use `distance`/`duration`, which this patch does not touch |
| V7 | 4 target pages | Title/description/OG/Twitter equal the proposal; canonical and hreflang unchanged; `lang`/`dir` correct; no `&lt;a href` text; 0 occurrences of "fixed price", "345", "Highway 65", "طريق 65", "سعر ثابت", "رسوم طرق" outside the facts box and shared template |
| V8 | JSON-LD | FAQPage questions/answers equal visible FAQs exactly; no HTML in answers; Service description unchanged; Breadcrumb unchanged |
| V9 | Links | Every `href` on the 4 pages resolves 200 locally; AR pages link only to `/ar/…`; `/taxi-service/riyadh` card resolves |
| V10 | Non-target regression sample | Other domestic routes (e.g. `riyadh-to-hail`, `hail-to-riyadh`, `riyadh-to-dammam`), Buraidah/Riyadh hubs, AR counterparts byte-identical in metadata and `<main>` |
| V11 | `npm run check:ar-500` (local, then production after any approved deploy) | 6/6 |
| V12 | Native Arabic review | Signed off before commit |
| V13 | After a separately approved deploy | Live checks as V7–V9; Search Console + Bing Webmaster URL inspection for the 4 URLs; IndexNow only if already configured (not found in the repository) |

---

## 9. Phase 2 — blog evaluation

**Candidate: "How to Plan a Trip from Qassim to Riyadh: Private Transfer, Stops, Luggage and Booking Questions" — not recommended.** Pickup arrangements, stops, luggage, booking information, return journeys, families/elderly travellers and night travel are all answered on the route pages (and more accurately after Patch A). A blog on the same questions would target the same intent as `/routes/qassim-to-riyadh`.

**Content-gap report:** no Qassim blog gap exists. OPP-08 = existing-page improvement (this proposal); OPP-09 = Qassim airport ↔ Riyadh **route page**, blocked on service confirmation; the documented blog gaps are OPP-02 (Riyadh ↔ Doha by road) and OPP-07 (Saudi ↔ Kuwait by road), both awaiting the corridor-guide approval.

**What the new evidence changes:** OPP-09's demand signal has grown (12 airport-related Qassim enquiries in 10–16 Oct, up from 9 in the earlier analysis). If you confirm ELQ pickups (O1), the right asset is the OPP-09 route page (commercial intent: airport pickup → Riyadh), not a blog. A time-sensitive advisory angle ("travelling between Qassim airport and Riyadh during the RUH closure") was considered and rejected for now: no evidence of flight rerouting via ELQ was found, the RUH situation changes daily, and it depends on O1.

**A non-overlapping Qassim blog that could be justified later** — "Qassim to Riyadh: train, flight or private transfer" — is not in the content-gap report, and needs official SAR schedules/fares (not retrievable today) and airline data. Not proposed unless you add it as a documented gap.

No blog outlines, slugs or metadata are proposed, because no valid Qassim blog topic currently exists; writing them would force a URL the evidence does not support.

---

## 10. Owner and evidence questions (priority order)

| # | Question | Why first | Affects |
|---|---|---|---|
| **O1** | Do you accept pickups and drop-offs at **Prince Naif bin Abdulaziz Airport (Qassim, ELQ)**? If yes: meet-and-greet, flight-time adjustment? | 12 of 24 Qassim enquiries; Buraidah pages already claim it | ELQ FAQ; pickup lists; Buraidah EN/AR claims; OPP-09 |
| O2 | Verified road distance and typical driving time (from trip records or navigation logs), Buraidah centre ↔ central Riyadh | Removes the last unverified figure (facts box) | D1 |
| O3 | Same-day return: offered? How is waiting time quoted? | Asked by a customer | New FAQ |
| O4 | Child seats: available on request? | Families; FAQ now says "ask" | FAQ wording |
| O5 | Rest stops: always possible on request? Any charge? | Currently "can be requested… agreed in advance" | Copy |
| O6 | Riyadh airport: are RUH drop-offs running today? | Copy is conditional; confirm before deploy | Q→R notes/FAQ |
| E1 | GSC **Queries** export 16 Jul–15 Oct with page filter for the 4 URLs | Which questions bring impressions | FAQ priorities, titles |
| E2 | Bing Webmaster Tools export for the 4 URLs (if the site is verified there) | Bing visibility baseline | Measurement |
| E3 | Official source for the road (MOT / Roads General Authority) | Restores "Highway 65" if wanted | C7 |

**D1 decision — facts box distance/duration:** (a) keep "~345 km / About 3 hours 30 min" labelled as approximate until O2 (recommended interim), (b) replace with owner-verified values from O2, or (c) shared-template change to hide unverified values (affects all domestic routes).

---

## 11. Conversion and measurement

Current path: page → embedded quote form (route pre-filled) or CTA `/get-quote?pickup=…&dropoff=…` or WhatsApp. Proposal improves it by telling visitors exactly what to send (pickup, destination, date/time, passengers, luggage, vehicle, flight number, return date in the message) and by removing price promises that the quotation might contradict. Shared CTA strings ("we reply with a fixed price") remain until the template item is approved.

Measurement (no claims of uplift until measured):
- **Baseline now:** 24 Qassim enquiries (22 in October), 18 Qassim → Riyadh; first landing pages and `utm_source` recorded per lead; 6 tagged `chatgpt.com`. GSC page impressions per §1.
- **AI/Bing referrals:** the leads table already stores `first_referrer`, `first_utm_source` and `search_source`, but `search_source` is blank on 158/162 rows and referrer on 83 — most visits arrive without a referrer. Track referrer host per lead (bing.com, chatgpt.com, perplexity.ai, copilot, gemini) and keep the `utm_source=chatgpt.com` capture.
- **Route page → quote:** count leads with `source_page` = these 4 URLs or `/get-quote` with `pickup=Qassim|Riyadh` parameters; split EN vs AR by path.
- **Qualified/completed:** link leads to quotations and accepted quotes (`/quote/[token]`) to report qualified vs completed per language.
- Compare a fixed 8-week window before vs after deployment; treat changes as correlations unless an experiment is run.

---

## 12. Prioritised recommendation

1. **Answer O1 (Qassim airport)** — the largest single customer question and an existing unconfirmed claim on the Buraidah pages.
2. **Patch A** — removes the price, toll, tracking and figure claims; fixes the visible HTML in FAQs; gives Arabic readers the price and booking information they currently cannot see. Highest usefulness-per-risk; no new URL. Requires native Arabic review first.
3. **Patch B** — one contextual hub link to the least-linked page.
4. **Shared-template fee wording and AR city-page link rendering** — separate cross-route approval.
5. **OPP-09 route page** only after O1 = yes. **No Qassim blog** at this time.

None of these changes guarantees indexing, rankings, AI citations or more enquiries.
