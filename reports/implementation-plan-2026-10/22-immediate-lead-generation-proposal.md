# Immediate lead generation (0–14 days) — audit and proposal

**19 October 2026. Proposal only.** No file, code, database, blog record or production change was made. Data access was read-only:
- the `leads` table, with no name, email or phone columns requested;
- the `blogs` table;
- live pages;
- the Search Console Top-pages export for 16 July – 15 October (the Queries export is still missing).

## 0. What the evidence says

| Signal | Evidence |
|---|---|
| Demand surge | **91 enquiries from 10 to 19 October**, against 28 in all of September and 24 in August. 73 of them came in the last 7 days |
| Urgency | **85 of 91 travel within 7 days of enquiring** |
| What they want | Journeys that route around the Riyadh airport (RUH) closure (counts overlap): **Qassim (ELQ) ↔ Riyadh 26** (14 involving the airport), **Saudi ↔ Qatar 12**, **Saudi ↔ Bahrain 10** (9 involving Bahrain International Airport), **Saudi ↔ UAE 8**, **Saudi ↔ Kuwait 5**, **Dammam/DMM ↔ Riyadh 5**, Madinah (MED) ↔ Riyadh 2 |
| Business signal | 19 enquiries involve residential compounds, business hotels or the "Business" vehicle class. Examples: Obeir, Rayhanah Palace and Yarmuk Oasis compounds; the Hilton, Ritz-Carlton, Aloft and a convention-centre hotel |
| Where they come from (last 30 days) | `chatgpt.com` 33 · no referrer 36 · internal 17 · Bing 12 · DuckDuckGo 7 · Perplexity 1. **AI and Bing referrals together outnumber Google-identified referrals** |
| Landing pages (last 30 days) | `/routes/qassim-to-riyadh` 19; `/routes/riyadh-to-doha` 5; `/ar/نقل-من-القصيم-الى-الرياض` 5; `/routes/riyadh-to-qassim` 5; `/airport-transfer/dammam-airport` 5; `/routes/doha-to-riyadh` 5; `/ar/نقل-من-مطار-المدينة-الى-الرياض` 4; `/routes/riyadh-to-bahrain` 4; `/routes/riyadh-to-qatar-border` 3; and others |
| Where the form is submitted | 66 on `/get-quote`, 13 on the Arabic quote page, and the rest on route pages. The forms work: enquiries arrived from route pages within the last 48 hours |

**Search visibility (16 Jul – 15 Oct; mostly before the surge):**

| Page | Clicks | Impressions |
|---|---|---|
| `/airport-transfer/riyadh-airport` | 1 | 159 |
| `/routes/dammam-airport-to-bahrain` | 0 | 128 |
| `/routes/dammam-to-riyadh` | 2 | 84 |
| `/routes/khobar-to-bahrain` | 0 | 80 |
| `/routes/bahrain-to-riyadh` | 0 | 74 |
| `/routes/riyadh-to-qatar-border` | 1 | 72 |
| `/routes/qassim-to-riyadh` | 0 | 56 |
| `/routes/riyadh-to-qassim` | 1 | 52 |
| `/airport-transfer/dammam-airport` | 0 | 50 |
| `/routes/riyadh-to-bahrain` | 0 | 43 |
| `/routes/doha-to-riyadh` | 1 | 41 |
| `/routes/riyadh-to-kuwait-city` | 0 | 30 |
| `/routes/riyadh-to-doha` | 0 | 24 |

## 1. Current operating facts (checked 19 Oct 2026)

| Topic | Status | Source quality |
|---|---|---|
| Riyadh King Khalid Airport (RUH) | **Reopening not confirmed.** The closure notice expired at 21:00 UTC on 17 Oct. No GACA reopening statement was found. Time Out Riyadh: "remains closed as of Monday, October 19" | News/aggregators; no GACA statement |
| Dammam King Fahd Airport (DMM) | Attacked 11 Oct. GACA announced no suspension; flights are heavily disrupted. Qatar Airways and KLM have suspended Dammam flights | SPA/GACA (11 Oct) + news (to 14 Oct) |
| Jeddah (JED) | Operating with delays and cancellations (news) | News |
| Land borders | A US Embassy alert dated 18 Oct (seen via search; the page blocked direct fetch) says all land crossings, including the King Fahd Causeway, are operational, and highways around Riyadh, Jeddah and Dhahran are open | Official, indirect — **re-verify** |
| Kuwait entry | One government advice summary (Smartraveller, via search) says only holders of valid Kuwaiti residency may enter by land, and marks a northern-border zone including Khafji as out of bounds. **Not confirmed from a Kuwaiti source** | Unverified — neutral wording only |
| Government advice | UK FCDO: against all but essential travel (Riyadh Province, Jeddah, Dammam, all airports except Madinah; reported widening). US: Level 3 | Official |

**Copy rules for everything below:**
- Visible "Last checked" dates.
- No claim that an airport is closed or open beyond what an official source supports.
- No airport-access promise.
- **No suggestion that road travel is safer.** The US Embassy reportedly recommends overland travel; quote official advice only by linking to it.
- No encouragement of non-essential travel.
- "Your confirmed quotation sets the price and shows what it covers."

## 2. Site audit findings

| Finding | Pages | Impact |
|---|---|---|
| **Riyadh airport hub still sells RUH meet-and-greet**, with no disruption notice. Its quote CTA pre-fills pickup "King Khalid International Airport (RUH)" | `/airport-transfer/riyadh-airport` (+ AR `/ar/نقل-مطار-الرياض`) | The highest-impression page in this set sends visitors to book a service that may not be able to run |
| **Advisories are stale** | `/blog/riyadh-airport-closure-october-2026` (last updated 14 Oct; describes a notice that expired on 17 Oct); `/blog/dammam-airport-attack-october-2026` (last updated 12 Oct) | Inaccurate, time-sensitive information |
| **"Fixed price" on every scanned page**; also "flight tracking", "meet-and-greet" and toll/fee-inclusion claims | All 27 scanned pages, plus shared CTAs ("we reply with a fixed price") | Conflicts with the owner's policy; a dispute risk under the current fee and border uncertainty |
| **Unverified distances and durations in metadata** | e.g. Riyadh–Doha "~570–600 km, ~5.5–6.5 hours"; Riyadh–Kuwait "~650 km, 6.5–7 hours"; Dammam Airport–Riyadh "420 km, about 4 hours" | Same verification issue as Bahrain V15 |
| **Kuwait and UAE border hubs link to no route pages** | `/border-transfers/kuwait-border`, `/border-transfers/uae-border` | The routes that receive enquiries (`riyadh-to-kuwait-city`, `riyadh-to-al-batha-border`, `riyadh-to-dubai`, `riyadh-to-abu-dhabi`) get no hub links |
| **The Qassim airport (ELQ) service is not on the Qassim pages yet** | Patch A Rev. 2 is prepared but held for the Arabic review | The largest enquiry cluster lands on pages that don't mention the airport |
| **No page for Riyadh → Bahrain International Airport**, although 9 of 10 Bahrain enquiries involve BAH | `/routes/riyadh-to-bahrain` (city only); Dammam/Khobar → BAH pages exist | Content gap on an existing page |
| **Thin pages on surge routes** | `/routes/dammam-airport-to-riyadh` (775 words; "flight tracking" claim); `/routes/madinah-airport-to-riyadh` (679 words) | Weak answers for the questions people are asking now |
| **No Riyadh business or corporate page** | Jeddah and Dammam have business pages; Riyadh has only a business-traveller blog, which claims "fixed corporate pricing" and "corporate billing" | 19 business-signal enquiries; claims unverified |
| Quote journey | **Not broken.** Every page has an embedded form or a `/get-quote` link; `/get-quote` pre-fills from the URL in the browser (`prefillFromQuery`). The airport and border hubs have no embedded form, only CTA links | Adding a pre-filled CTA near the top of the hubs is low effort |

## 3. The five highest-priority improvements (ranked)

Scores run from 1 to 5. The total is out of 25.

| Rank | Improvement | Current demand | Visibility / enquiries | Serviceable | Speed | Path to a quote | Total |
|---|---|---|---|---|---|---|---|
| **1** | Riyadh airport hub + both advisories: accurate status, alternatives, no RUH promise | 5 | 5 | 4 | 5 | 4 | **23** |
| **2** | Qassim ↔ Riyadh: ship the ELQ service and fee/claim corrections (English first) | 5 | 5 | 5 | 4 | 5 | **24** |
| **3** | Riyadh → Bahrain incl. Bahrain International Airport | 4 | 4 | 4 | 4 | 5 | **21** |
| **4** | Riyadh ↔ Doha (incl. Hamad International Airport) and the Qatar border page | 4 | 4 | 4 | 4 | 5 | **21** |
| **5** | Kuwait and UAE hub-to-route links; Riyadh ↔ Kuwait and Riyadh ↔ UAE route-page corrections | 3 | 3 | 4 | 5 | 4 | **19** |
| 6 | Dammam airport hub + Dammam Airport → Riyadh | 3 | 4 | 4 | 4 | 4 | 19 (bundle with #1 if capacity allows) |

Rank 1 is placed above rank 2, despite the lower score, because it is an **accuracy** fix on the highest-impression page: it stops visitors being sent to a service that may not be able to run.

### #1 — Riyadh airport hub and advisories

**Category:** A (essential intercity), C (cross-border).

**Pages:** `/airport-transfer/riyadh-airport` (code: `data/airports.ts` / airport guide content; EN + AR `/ar/نقل-مطار-الرياض`); `/blog/riyadh-airport-closure-october-2026` and `/blog/dammam-airport-attack-october-2026` (Supabase + AR counterparts in `ar.ts`).

**Changes:**
- A dated status box at the top: "Last checked [date]: GACA has not announced a reopening… check your airline." It links the advisory and the GACA and airline sources.
- A new section, **"If your flight now uses another airport"**, with contextual links to:
  - [Qassim airport → Riyadh] (see #2)
  - `/routes/dammam-airport-to-riyadh`
  - `/routes/madinah-airport-to-riyadh`
  - `/routes/jeddah-airport-to-riyadh`
  - `/routes/riyadh-to-bahrain`
  - `/routes/riyadh-to-doha`
- Hero CTA pre-fill changed from "King Khalid International Airport (RUH)" to a blank pickup with the destination "Riyadh". RUH meet-and-greet claims hidden or qualified until RUH is verified.
- Both advisories: refresh status and dates; replace "until 17 October" with the current verified position; keep the official-source lists.

**Suggested title (meta):** "Riyadh Airport (RUH) Transfers — Current Status & Alternative Airports"

**Intent:** "Riyadh airport closed — how do I get to/from Riyadh?"

**CTA:** "Flight moved to another airport? Tell us the airport, your flight number and your Riyadh address — we reply with a quotation."

**Evidence:** 159 impressions (top page); enquiries routing via ELQ, DMM, MED, BAH and Doha.

**Owner confirmation:** current RUH service (yes / no / suspended).

### #2 — Qassim ↔ Riyadh with Qassim airport (ELQ)

**Category:** A.

**Pages:** `/routes/qassim-to-riyadh`, `/routes/riyadh-to-qassim` (+ AR).

**Changes:** Patch A Rev. 2 (`14-qassim-opp08-route-pages-rev2.patch`) already contains:
- ELQ pickup and drop-off;
- removal of the fixed-price, toll and tracking claims, the unverified distance/duration figures and the Highway 65 claims;
- no RUH promise;
- the FAQ HTML fix;
- the three Arabic sections.

It is held for the Arabic review.

**Option for 0–14 days:** split Patch A and **apply the English half now**, holding the Arabic half until sign-off. Requires your approval: it is a change to the approved scope and creates temporary English/Arabic inconsistency, because the Arabic pages would keep the old claims for a few days.

**Suggested meta title (EN Q→R):** "Qassim to Riyadh Private Transfer — incl. Qassim Airport (ELQ)"

**Intent:** "Qassim airport to Riyadh taxi" / "Buraidah to Riyadh car".

**CTA:** pre-filled "Qassim / Prince Naif bin Abdulaziz Airport → Riyadh".

**Evidence:**
- 26 enquiries since 10 Oct, 14 involving ELQ;
- the top landing page (19 in 30 days);
- 108 impressions across the two English pages.

### #3 — Riyadh → Bahrain incl. Bahrain International Airport

**Category:** C.

**Pages:** `/routes/riyadh-to-bahrain` (+ AR); reciprocal links from `/routes/dammam-to-bahrain-airport` and `/routes/khobar-to-bahrain-airport`.

**Changes:**
- Add a section "Riyadh to Bahrain International Airport" covering what to send (flight time), the agreed neutral border wording and the confirmed-quotation wording. This follows the content-gap report: a section, not a new page.
- Meta description without unverified figures or "fixed price".
- CTA pre-fill: dropoff "Bahrain International Airport".
- Add an FAQ: "Can you drop me at Bahrain International Airport from Riyadh?"

**Suggested meta title:** "Riyadh to Bahrain & Bahrain International Airport — Private Transfer"

**Evidence:**
- 10 Bahrain enquiries, 9 involving the airport (including Riyadh → BAH ×4);
- `riyadh-to-bahrain` 43 impressions;
- `bahrain-to-riyadh` 74;
- `dammam-airport-to-bahrain` 128.

**Owner confirmation:** Riyadh → BAH drop-offs (O4 from the Bahrain package — still open).

**Note:** combine with the planned B-2 fee-copy step on the same pages.

### #4 — Riyadh ↔ Doha and the Qatar border

**Category:** C.

**Pages:** `/routes/riyadh-to-doha`, `/routes/doha-to-riyadh`, `/routes/riyadh-to-qatar-border` (+ AR); the hub `/border-transfers/qatar-border`.

**Changes:**
- Remove the fixed-price, tracking and unverified distance/duration figures from the metadata.
- Add a "Hamad International Airport (Doha)" drop-off and pickup FAQ, **only if owner-confirmed**.
- Add neutral border wording, including the Abu Samra pre-registration only if an official Qatari source is cited.
- Pre-filled CTAs.
- Hub → route links: the Qatar hub links 2 routes; add `riyadh-to-doha` and `doha-to-riyadh` if missing.

**Suggested meta title:** "Riyadh to Doha by Road — Private Transfer via Salwa"

**Evidence:**
- 12 Qatar enquiries since 10 Oct (Doha airport ×4);
- impressions: `riyadh-to-qatar-border` 72, `doha-to-riyadh` 41, `riyadh-to-doha` 24.

**Owner confirmation:** Doha airport pickups and drop-offs; whether Qatar-side legs are offered on current terms.

### #5 — Kuwait and UAE quick fixes

**Category:** C.

**Changes:**
- Add route links to the two hubs that have none:
  - Kuwait hub → `riyadh-to-kuwait-city`, `kuwait-city-to-riyadh`, `dammam-to-kuwait-city`, `kuwait-city-to-dammam`
  - UAE hub → `riyadh-to-al-batha-border`, `al-batha-border-to-riyadh`, `riyadh-to-dubai`, `dubai-to-riyadh`, `riyadh-to-abu-dhabi`, `abu-dhabi-to-riyadh`
- On `riyadh-to-kuwait-city`: neutral entry wording ("entry requirements for Kuwait can change at short notice; confirm with the Kuwaiti authorities before you travel"), with **no residency claim** until officially sourced.
- Remove "fixed price" and the unverified figures from the metadata.

**Evidence:** Kuwait 5 and UAE 8 enquiries since 10 Oct; the hubs currently pass no link value to these routes.

**Speed:** one data file per hub (`data/borders.ts`); low risk.

### #6 (bundle) — Dammam airport

`/airport-transfer/dammam-airport` and `/routes/dammam-airport-to-riyadh`:
- dated status note;
- remove the "flight tracking" and "meet-and-greet" claims unless confirmed;
- move the pre-filled CTA up the page;
- link the Riyadh routes.

**Evidence:** 5 landing enquiries on the hub (30 days); 50 hub impressions.

## 4. Business and corporate (category B)

**Evidence:**
- 19 business-signal enquiries since 10 Oct: residential compounds, business hotels, the "Business" vehicle class;
- the site already has Jeddah and Dammam business pages, but **no Riyadh business page**;
- the Riyadh business-traveller blog claims "fixed corporate pricing" and "corporate billing".

**Recommendation for 0–14 days:** do **not** create a new page yet. Instead:
1. Add a short "Pickups from residential compounds and business hotels" paragraph to the Riyadh-origin route pages in #3–#5. It would tell visitors to give the compound name and gate in the quote, and that access arrangements are confirmed in the quotation.
2. Correct the Riyadh business blog's pricing and billing claims.

**A Riyadh corporate/relocation page is justified only if you confirm:**
- invoicing to companies (`lib/invoices.ts` shows invoices exist in the admin; confirm customer-facing use);
- multi-vehicle or group moves;
- account or repeat booking.

**Possible title:** "Riyadh Corporate & Staff Transfers — Airports, Borders and Intercity". Intent: companies moving staff by road during the disruption.

## 5. Genuinely justified new pages

| Page | Justification | Status |
|---|---|---|
| `/routes/qassim-airport-to-riyadh` (OPP-09; one direction first) | ELQ service owner-confirmed; 14 airport-involved enquiries in 9 days | **Justified**, but a new URL needs crawling and indexing, so it is slower than #2 within 14 days. Recommended as the second wave after #2 |
| Riyadh corporate transfers | See §4 | Conditional on owner confirmation |
| Riyadh → Bahrain International Airport as its own page | — | **Not recommended** — a section on the existing page (#3) |

## 6. Cross-cutting quick win (separate approval: shared template)

The shared CTA strings appear on every route page in both languages:
- "we reply with a fixed price"
- "Fixed price for your private transfer."
- the `QuoteForm` success text
- the Arabic equivalents

One template change (the planned fee-wording item C2a/C2b) would make every page consistent with the confirmed-quotation policy, which reduces dispute risk while fees and border conditions are uncertain.

## 7. Measurement (from now)

- **Baseline (10–19 Oct):** 91 enquiries; 33 of the last 30 days' 109 from `chatgpt.com`; 12 from Bing.
- Track per improved page:
  - enquiries with that `first_landing_page` or `source_page`;
  - referrer mix (chatgpt.com, bing.com, perplexity.ai);
  - English vs Arabic.
- Compare 14 days before and after each change. These are correlations, not proof of cause; demand is driven by the disruption itself.
- `search_source` is blank on most leads — worth fixing separately.

## 8. Owner confirmations needed (priority order)

1. **RUH:** are you taking Riyadh airport jobs now?
2. **Language split for Patch A:** may the English half ship before the Arabic review completes?
3. **Bahrain International Airport drop-offs from Riyadh** (O4).
4. **Hamad International Airport (Doha)** pickups and drop-offs; Qatar-side service terms.
5. **DMM:** meet-and-greet and flight-time adjustment — real or remove?
6. **Residential compound pickups** (gate access handled by the driver?).
7. **Corporate invoicing and group moves** (for any business page).
8. Kuwait and UAE routes: any current operating restrictions on your side.

## 9. Risks

- **Changing conditions.** Airport status and border rules are changing daily. Every status line needs a "Last checked" date and an owner to update it, or it becomes the next stale page.
- **Encouraging travel.** Promoting travel while the FCDO and US advise against it. Copy must answer existing demand ("if you need to travel…") without urgency or safety comparisons.
- **Fee disputes.** Fixed-price claims, combined with variable border fees, queues and waiting time, create dispute risk. #6 in §3 and §6 reduce it.
- **Index lag.** New URLs may not index within 14 days; existing pages already receive the enquiries.
- **Partial-language change.** Splitting Patch A by language leaves the Arabic pages with the old claims until the review is done.

**Sources:**
- [Time Out Riyadh](https://www.timeoutriyadh.com/news/riyadh-airport-latest-update)
- [AeroCorner](https://aerocorner.com/news/riyadh-airport-reopen-notam-october-17-air-india-indigo-akasa/)
- [Wego — Dammam](https://blog.wego.com/is-dammam-airport-open-live-status-travel-updates-2026/)
- [SPA — GACA Dammam statement](https://www.spa.gov.sa/en/N2698805)
- [US Embassy alert, 18 Oct](https://sa.usembassy.gov/security-alert-u-s-mission-to-saudi-arabia-october-18-2026/)
- [Gulf News — US advisory](https://gulfnews.com/world/gulf/saudi/us-updates-saudi-arabia-travel-advisory-airport-risks-flight-disruption-and-filming-ban-1.500715462)
- [Smartraveller](https://www.smartraveller.gov.au/destinations/middle-east/saudi-arabia)
- [GOV.UK](https://www.gov.uk/foreign-travel-advice/saudi-arabia)
- [Khaleej Cargo — Batha](https://khaleejcargo.com/uae-saudi-border-delays/)
- [ListMag — Kuwait visa on arrival](https://www.listmag.com/en/travel-and-stay/guides/kuwait-welcomes-saudi-residents-with-new-visa-on-arrival-policy-3795)
- [QIC — Abu Samra pre-registration](https://qic.online/en/blog/travelling/abu-samra-border)
