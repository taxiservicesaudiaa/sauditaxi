# Riyadh airport content update — implementation and validation report

**Date:** 22 October 2026. **Status:** applied locally only. Not committed, not pushed, not deployed. No database or production change.

- **Diff for review:** `28-riyadh-airport-update.diff`.
- **Audit basis:** `25-current-demand-seo-ai-conversion-audit.md` (C4, D).

## 1. Sources (checked 22 Oct 2026)

| # | Source | Published | Claim supported | Status |
|---|---|---|---|---|
| S1 | Saudi Press Agency — "GACA: Attack Targets King Khalid International Airport in Riyadh, Operations Temporarily Suspended" (`spa.gov.sa/en/N2697867`) | 10 Oct 2026 (date corroborated by Gulf Business and the site's sourced advisory; SPA serves only the headline to automated fetches) | GACA announced a temporary suspension of RUH operations on 10 Oct | **VERIFIED** (official headline) |
| S2 | Saudi Press Agency — "GACA: Suspension of Operations at King Khalid International Airport Extended for Safety Checks" (`spa.gov.sa/en/N2699133`) | 12 Oct 2026 (corroborated as S1) | The suspension was extended for safety checks on 12 Oct; no end date | **VERIFIED** (official headline) |
| S3 | Search of GACA/SPA channels for a later statement | — | No official GACA announcement of resumed scheduled operations was found | Absence recorded as "we have not found" |
| S4 | Inside Aviation, 18 Oct 13:21Z (NOTAM A3650/26 from 17 Oct 18:45Z: all traffic requires prior GACA permission; "not to scheduled traffic") | 18 Oct | Partial reopening under prior permission | **CONFLICTING** with S5 — not used on the page |
| S5 | Time Out Riyadh | Reported closure as of 19 Oct and 21 Oct; flights diverted to Madinah and Qassim | Still closed | **CONFLICTING** with S4 — not used on the page |
| S6 | Owner decisions on record | 18–19 Oct 2026 | RUH service is not promised until verified; quotation-dependent wording allowed. ELQ pickup/drop-off confirmed; JED, DMM and MED airport transfers confirmed; cross-border coordination policy; the confirmed quotation sets the price | **OWNER-CONFIRMED** |

**Resulting wording rule:** the page states only S1–S3, with "last checked 22 October 2026". It makes no claim that RUH is open, closed or partly open, and no claim about scheduled flights.

## 2. Files changed (EN only)

| File | Change |
|---|---|
| `components/airport-transfer/AirportTransferHub.tsx` | New **optional** `notice` prop, rendered as a dated status block under the hero. Only rendered when supplied |
| `app/(main)/airport-transfer/[airport]/page.tsx` | Reads optional `airport.hubOverrides` for the CTA, popular-card title and body, arrival heading, meet-and-greet heading, intro and steps (also used by the HowTo schema), family paragraph, booking intro and steps, and closing CTA. **Every field falls back to the existing shared text** |
| `data/airports.ts` | New optional `hubOverrides` type. Riyadh entry: `intro`, `about`, `metaDescription`, `popularRoutes` (city routes instead of `riyadh-airport-to-*`), and `hubOverrides` (notice, CTA, steps, cards) |
| `data/airport-guides.ts` | Riyadh entry: `lastUpdated` 2026-10-22, `coreServiceParagraph`, `arrivingParagraphs`, destination-card bodies, all 8 FAQs |

Unchanged:
- URL, title, H1, canonical, hreflang, robots and keywords;
- other airports;
- Arabic content;
- the database (including the Riyadh advisory blog);
- the `riyadh-airport-to-*` route pages.

## 3. Claims changed (English page `/airport-transfer/riyadh-airport`)

| Before | After | Basis |
|---|---|---|
| No status information | Dated notice: GACA suspension 10 Oct, extension 12 Oct; no official resumption announcement found; reports differ; confirm with your airline | S1–S3 |
| "We track your flight… meet you in arrivals… name board" (intro, core paragraph, arrival, steps, FAQs, closing CTA, HowTo) | Removed. RUH pickups and drop-offs "confirmed case by case in your quotation"; "not confirming… in advance" | S6 (RUH unverified) |
| "Fixed price", "fixed, all-in price… no hidden charges", "no meter, no surge", "the price you're quoted is the price you pay" | "The confirmed quotation sets the price and shows what it covers" | S6 |
| CTA "Get a Riyadh Airport Quote" → `/get-quote?pickup=King Khalid International Airport (RUH)` | "Request a Riyadh Transfer Quote" → `/get-quote?dropoff=Riyadh` | S6 (no RUH pickup promise) |
| Popular cards "Riyadh Airport to Jeddah/Makkah/Madinah…" with unverified km and duration figures | "Riyadh to Qassim, Dammam, Jeddah, Bahrain, Doha"; no figures | Existing listed routes |
| "No prepayment required to hold the booking" | "Approve the quotation to book; its terms explain what is needed to confirm" | Default quotation terms state a 50% deposit (`lib/quotations.ts`), so the old claim was contradicted |
| "Usually completed in a few minutes"; "same-day requests usually possible"; "guarantee your preferred vehicle"; "on-time"; "knows the fastest route" | Removed or neutral | Unverified |
| "Child seats can be requested" | "If you need child seats, ask before you confirm" | Not owner-confirmed |
| Sedan luggage capacity ("two to three bags") FAQ | Replaced by a "What information do you need for a quote?" FAQ | Unverified |
| — | New "alternative airport" links: Qassim (incl. ELQ), Dammam Airport, Madinah Airport and Jeddah Airport → Riyadh, plus the disruption guide | S6 |
| — | Cross-border FAQ with the owner-confirmed coordination wording | S6 |

**Tone:** no fear-based language, no statement that road travel is safer, no guarantees.

## 4. Validation

| Check | Result |
|---|---|
| `npx tsc --noEmit` | 0 errors (baseline 0) |
| `npm run lint` | 10 problems (6 errors, 4 warnings), **identical to the baseline**; all pre-existing in other files. `eslint` on the 4 changed files: clean |
| `npm run build` | 905/905 (baseline 905/905) |
| Before/after snapshot of all 899 prerendered pages (title, meta, canonical, hreflang, `lang`/`dir`, JSON-LD, `<main>`) | **Exactly 1 page changed**: `/airport-transfer/riyadh-airport` (`<main>`, JSON-LD, description/OG/Twitter description). Every other airport hub, listing page and Arabic page unchanged |
| Rendered page (local `next start`) | HTTP 200; title, canonical and hreflang (EN ↔ `/ar/نقل-مطار-الرياض`) unchanged; robots `index, follow` |
| Residual-claim scan of the rendered page | No fixed/all-in price, tracking, name board or meet-in-arrivals, guarantee, prepayment, "safer", or km/duration text |
| Structured data | FAQPage 8 questions, all visible; HowTo 3 steps, all visible; Service description = new intro; `dateModified` 2026-10-22 |
| Internal links on the page | 17, all HTTP 200 |
| `git diff --check` | Clean; only the 4 intended files modified |

## 5. Arabic page `/ar/نقل-مطار-الرياض` — change list for the native reviewer (NOT edited)

**Source:** `data/translations/ar.ts`, line ~1371.

The Arabic page currently repeats the claims removed from English. A qualified reviewer should write the Arabic for each item, based on the English below. The Arabic page also has **no quote CTA** (template-level gap; separate approval).

| Field (current Arabic, summarised) | Problem | English text to adapt |
|---|---|---|
| `metaTitle` "نقل من مطار الرياض \| تاكسي خاص لرجال الأعمال" | OK (no claim). Optional: align with the EN focus | — |
| `metaDescription` "…استقبال داخل الصالة، سعر ثابت…" | Arrivals-hall meet promise; fixed price | "Riyadh airport (RUH) transfers and onward road travel. Check your flight with your airline, then request a quote — your confirmed quotation sets the price." |
| `intro` "…استقبالًا احترافيًا داخل الصالة مع متابعة رحلتك الجوية…" | Meet-and-greet and flight tracking | "King Khalid International Airport (RUH) is the main airport serving the Saudi capital. Check your flight with your airline, then tell us your journey — we confirm what can be arranged in a quotation." |
| **New section (first):** status notice | Missing | The three notice paragraphs from `data/airports.ts` → `hubOverrides.notice`. Heading: "Riyadh airport status — last checked 22 October 2026". **Keep the dates and wording exactly equivalent** |
| Section "خدمة موثوقة لرجال الأعمال" ("…خدمة استقبال دقيقة…") | Implies RUH reception | "Private transfers to Olaya, King Abdullah Financial District and the Diplomatic Quarter for business travellers and visiting teams, priced in a quotation you confirm before you travel." |
| Section "استقبال داخل الصالة مباشرة" ("…بلافتة تحمل اسمك، مع متابعة تلقائية لرقم رحلتك…") | Name board and automatic flight tracking | Replace with heading "If your journey involves King Khalid International Airport" and the two EN `arrivingParagraphs` |
| Section "نقل إلى جميع أحياء الرياض وخارجها" ("…بسعر ثابت") | Fixed price | Same meaning, with "…priced in a quotation you confirm before you travel; the confirmed quotation sets the price." |
| FAQ "أين يستقبلني السائق في مطار الرياض؟" → "داخل صالة الوصول بلافتة…" | Name board promise | Q: "Can you pick me up or drop me off at Riyadh airport?" A: EN FAQ 2 |
| FAQ "هل تناسب خدمتكم رجال الأعمال؟" ("…خدمة استقبال دقيقة…") | Reception claim | A: "Yes. Business trips are booked the same way as any other transfer — share your pickup point, destination and timing, and the price is set in the quotation you confirm." |
| FAQ "هل يمكن السفر من مطار الرياض إلى الدمام مباشرة؟" | Promises RUH pickup | Q: "Can I travel by road from Riyadh to another Saudi city or a neighbouring country?" A: EN FAQ 4 |
| FAQ "هل الأسعار ثابتة…؟" ("…يتم الاتفاق عليه بالكامل قبل السفر") | Heading implies fixed | Q: "How is the price for a Riyadh transfer set?" A: EN FAQ 5 |
| **New FAQs** | Missing | EN FAQ 1 (operating status, dated) and EN FAQ 3 (flight moved to another airport) |
| `distance` / `duration` ("يغطي جميع أحياء الرياض", "حسب الوجهة داخل المدينة") | No claim issue | Keep |

**Implementation of the Arabic** (after sign-off, separate approval): edit `ar.ts`, then run `gen:ar-index` / `check:ar-index` / `check:ar-500`.

## 6. Directly related disruption information NOT changed (database — out of scope)

`/blog/riyadh-airport-closure-october-2026` (Supabase) and its Arabic counterpart (`ar.ts`) are **OUTDATED**: last updated 14 Oct, describing a notice that expired on 17 Oct. Because the database was out of scope, nothing was changed. Proposed English replacement for its status lines, for approval:

> **Last updated: [date].** GACA announced on 10 October 2026 that operations at King Khalid International Airport were temporarily suspended, and on 12 October that the suspension had been extended for safety checks. We have not found an official GACA announcement that scheduled flights have resumed; reports since then have differed. Confirm your flight's status directly with your airline before travelling. If your airline has moved your flight to another airport, see our guide to [arranging an intercity transfer during flight disruptions](/blog/saudi-arabia-intercity-transfers-flight-disruptions).

Remove the "until 21:00 UTC on 17 October" closure-period row and any wording that presents it as current.

## 7. Unresolved questions and residual items

1. **RUH status is CONFLICTING** (S4 vs S5). The page deliberately avoids stating it. Update the notice when GACA publishes a statement.
2. **Owner:** are any RUH jobs accepted under the current prior-permission regime? Until answered, the page says airport pickups are confirmed case by case and not in advance.
3. **Qassim link label.** "Qassim (incl. Qassim airport) to Riyadh" links to `/routes/qassim-to-riyadh`, which does not yet mention Qassim airport (Patch A is pending its Arabic review). The service itself is owner-confirmed.
4. **Shared vehicle cards.** The vehicles section still shows passenger and luggage figures from `data/vehicles.ts` (sitewide; out of scope).
5. **HowTo schema name.** It remains "How pickup works at King Khalid International Airport" (shared). The steps now describe what to check first; consider renaming via a template override later.
6. **Not touched; next passes:**
   - the `riyadh-airport-to-riyadh`, `riyadh-to-riyadh-airport`, `riyadh-airport-to-jeddah`, `-to-makkah` and `-to-madinah` route pages, which still advertise RUH pickups, tracking and meet-and-greet;
   - the Dammam airport content pass;
   - the shared fee wording on route pages;
   - the Arabic hub CTA.
7. **Deployment** requires separate approval. When approved, also update the Riyadh advisory (§6) so the hub and the advisory agree.
