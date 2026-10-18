# Bahrain SEO Improvement Package (proposal and draft copy)

Prepared 18 October 2026. **Planning and drafting only.** No application code, translations, content, metadata, schema, robots.txt, sitemap, database or configuration was changed, and nothing was committed or deployed. Approved direction: improve the existing Bahrain cluster **without creating new URLs**.

Files in this package:

| File | Contents |
|---|---|
| `09-bahrain-seo-package.md` | This document: evidence, verified findings, page-by-page proposal, draft copy, tests, owner decisions |
| `10-bahrain-internal-links.csv` | 33 proposed link changes: source, destination, anchor (EN + AR draft), placement, rationale |
| `11-bahrain-claims-register.csv` | 862 rendered sentences (EN + AR, 37 URLs) mentioning tolls, fees, insurance, visas, customs, hours or operations, each with a status and action |

| `12-bahrain-b1-proposal.md` | **Revision 2.** B-1 only: change matrix, exact proposed patch text (not applied), shared-template scope trace, validation plan, blocking decisions |

Labels used throughout: **VERIFIED** (observed in the repository or live HTML on 16–18 Oct 2026, or stated on an official page), **OWNER-CONFIRMED POLICY** (stated by the owner in this engagement), **PROPOSED** (a change for approval), **OWNER** (needs the business owner's confirmation), **UNVERIFIED** (a factual or regulatory statement without an official source yet), **AR REVIEW** (Arabic draft needing native-speaker review), **GSC OBSERVATION** (Search Console data; does not establish indexing status).

### Revision 2 (18 Oct 2026) — corrections to this package

| Area | Correction |
|---|---|
| Draft copy D1, D2, D4, D8, D9 (§4) | **Removed** the unverified assertions that "vehicles crossing need valid documents and insurance" and that "your driver confirms the vehicle's crossing documents" (who obtains vehicle documents/insurance is unconfirmed — O8; whether insurance is mandatory is not established by the official source found). Replaced with neutral wording: requirements may vary by journey; confirm with the relevant authorities and your driver |
| D6 | Removed "Bahrain International Airport (BAH) is on Muharraq Island" (location and IATA code not confirmed on the official airport site; only the name "Bahrain International Airport" is verified at bahrainairport.bh) and the "margin for queues" promise |
| D11 | Removed "weekend evenings and public holidays are usually busiest, weekday mornings quieter" (no official source); now states only that crossing time varies |
| Proposed route titles/descriptions (§3.3) | Removed **all distances and durations** (EN and AR figures conflict, e.g. Bahrain Airport → Dammam ~100 km / 1 hr 45 min EN vs 85 km / 1 hr 30 min AR), removed "(BAH)" from proposed titles, and removed "fixed price/fixed fare" from proposed descriptions in favour of the owner-confirmed policy wording "your confirmed quotation sets the price". B-1 detail moved to `12-bahrain-b1-proposal.md` |
| §2 V2 | Added a missed fee-inclusion promise: AR `/routes/dammam-to-bahrain` FAQ `ar.ts:12187–12188` |
| §2 (new) V14 | Shared AR template strings that affect all GCC routes (not Bahrain-only): label "ما نتولاه" (`app/ar/[...slug]/page.tsx:258, 1332`) and the booking step "سعرًا ثابتًا … دون رسوم مفاجئة" (6 occurrences). Separate, cross-country decision — not part of any Bahrain step |
| §1.4 | O1 (BAH pickup) and O9 (quotation controls toll inclusion) marked as answered by owner decisions already recorded in `01-implementation-plan.md` (Rev. 3: pickup availability confirmed for every listed route; tolls/border fees vary and the confirmed quotation controls). Sub-details (terminal meet-and-greet) remain open |
| Claims register | Status corrections (combined sentences with "25 km" plus unverified "since 2017"/endpoints were wrongly marked VERIFIED; missed AR fee-inclusion answers now POLICY CONFLICT) and new rows for removed draft-copy claims and metadata figure conflicts |
| Readiness | **This package as a whole is not implementation-ready**: B-2 to B-8 depend on unresolved owner answers, official sources and Arabic review. Only B-1 is prepared for review |

---

## 1. Step 1 — Outstanding evidence

### 1.1 Queries export (16 Jul – 15 Oct 2026)

**Not available.** It is not in the repository (`docs/search_data/` still holds the 3 Jun – 6 Aug 2026 export), in Downloads/Desktop/Documents, or in the supplied text, which was truncated after the Top-pages list. Where this package cites query data it is the **older 3 Jun – 6 Aug export, labelled as such**. Page-level data comes from the supplied Top-pages list (16 Jul – 15 Oct, saved as `08-gsc-top-pages-2026-07-16_2026-10-15.tsv`).

Consequence: page roles below are based on page titles, content and old query data. Which page Google actually shows for which Bahrain query is **not confirmed** (cannibalisation is inferred, not proven).

### 1.2 The cluster (VERIFIED, live 18 Oct 2026; all return 200 with self-canonicals)

| Page | GSC 16 Jul–15 Oct (clicks / impr) | AR counterpart (reciprocal hreflang) | AR in GSC | Internal inlinks (16 Oct crawl) | Leads first-landing / on page |
|---|---|---|---|---|---|
| `/border-transfers/bahrain-causeway` (hub) | 0 / **2** | **None** (no AR hub exists) | — | 26 | 0 / 0 |
| `/routes/khobar-to-bahrain` | 0 / 80 | Yes | absent | 19 | 0 / 0 |
| `/routes/dammam-to-bahrain` | 0 / 35 | Yes | absent | 34 | 1 / 0 |
| `/routes/dammam-airport-to-bahrain` | 0 / 128 | Yes | absent | 15 | 1 / 1 |
| `/routes/riyadh-to-bahrain` | 0 / 43 | Yes | absent | 16 | **4 / 2** |
| `/routes/khobar-to-bahrain-airport` | **absent** | Yes | absent | **5** | 2 / 1 |
| `/routes/dammam-to-bahrain-airport` | **absent** | Yes | absent | **4** | 1 / 0 |
| `/routes/bahrain-airport-to-dammam` | 1 / 100 | Yes | absent | 13 | 0 / 0 |
| `/routes/bahrain-to-khobar` | 0 / 98 | Yes | absent | 10 | 0 / 0 |
| `/routes/manama-to-dammam` | 0 / 54 | Yes | absent | 12 | 0 / 0 |
| `/routes/bahrain-to-riyadh` | 0 / 74 | Yes | absent | 15 | 0 / 0 |
| `/routes/bahrain-airport-to-khobar` | **absent** | Yes | absent | **4** | 0 / 0 |
| `/blog/bahrain-to-saudi-arabia-by-road` | **3 / 253** | Yes | 0 / 7 | 30 | — |
| `/blog/dammam-to-bahrain-travel-guide` | 0 / 121 | Yes | 0 / 4 | 30 | — |
| `/blog/king-fahd-causeway-guide` | 0 / 75 | Yes | 0 / 2 | 33 | — |
| `/blog/travel-documents-bahrain-to-saudi-arabia` | 2 / 38 | Yes | absent | 29 | — |
| `/blog/family-travel-bahrain-to-saudi-arabia` | 0 / 8 | Yes | 0 / 1 | 26 | — |
| `/blog/business-travel-bahrain-dammam-guide` | 0 / 2 | Yes | absent | 27 | — |
| `/blog/saudi-to-bahrain-taxi-king-fahd-causeway` | 0 / 16 | Yes | 0 / 3 | 26 | — |

"Absent" means **no row in the Top-pages report** (0 impressions in the period). It does **not** mean "not indexed". Leads: 12 of 158 leads (8 Jul – 17 Oct) mention Bahrain; city-level pairs include Dammam → Bahrain Airport 3, Riyadh → Bahrain 2, Riyadh → Bahrain Airport 2.

### 1.3 URLs for the owner to inspect in Search Console (URL Inspection → "Test live URL")

Record, for each: *URL is on Google / not on Google*, the exclusion reason if any, last crawl date, Google-selected canonical, and whether the live test renders styled content (robots.txt `/_next/` fix is live since the 16 Oct push).

**Tier 1 (inspect first):**
1. `https://saudiprivatetransfers.com/border-transfers/bahrain-causeway`
2. `https://saudiprivatetransfers.com/routes/khobar-to-bahrain-airport`
3. `https://saudiprivatetransfers.com/routes/dammam-to-bahrain-airport`
4. `https://saudiprivatetransfers.com/routes/bahrain-airport-to-khobar`
5. `https://saudiprivatetransfers.com/ar/توصيل-من-الخبر-إلى-مطار-البحرين`
6. `https://saudiprivatetransfers.com/ar/توصيل-من-الدمام-إلى-مطار-البحرين`
7. `https://saudiprivatetransfers.com/ar/توصيل-من-مطار-البحرين-إلى-الخبر`

**Tier 2 (high-impression zero-click pages and one AR sample):**
8. `/routes/dammam-airport-to-bahrain` 9. `/routes/bahrain-airport-to-dammam` 10. `/routes/bahrain-to-khobar` 11. `/routes/khobar-to-bahrain` 12. `/ar/تاكسي-من-الخبر-إلى-مملكة-البحرين`

**Tier 3 (blogs):** `/blog/bahrain-to-saudi-arabia-by-road`, `/blog/dammam-to-bahrain-travel-guide`, `/blog/king-fahd-causeway-guide`, `/ar/دليل-عبور-جسر-الملك-فهد-بالتاكسي-الخاص`.

The full list of 37 URLs (EN + AR) is in Appendix A.

Also export, if possible: **Performance → Queries filtered to "bahrain", "causeway", "manama", "البحرين", "جسر"** with the Pages tab for each query (16 Jul – 15 Oct). This is the evidence needed to confirm page roles (§3.1).

### 1.4 Bahrain-side details needing owner confirmation (OWNER)

These statements appear on live pages today. Each must be confirmed, corrected or removed. Nothing below will be invented.

| # | Question | Where it appears (examples) |
|---|---|---|
| O1 | Do you pick up from **Bahrain International Airport** arrivals, and is it meet-and-greet inside the terminal or kerbside? **(Rev. 2: pickup on the listed BAH routes is OWNER-CONFIRMED POLICY — "pickup availability is confirmed for every listed route"; the inside-terminal meet-and-greet detail remains open)** | `/routes/bahrain-airport-to-dammam`, `/routes/bahrain-airport-to-khobar`, AR equivalents |
| O2 | Do you pick up from **Manama hotels/offices** and "**anywhere in Bahrain**"? | `/routes/bahrain-to-khobar` ("Pickup from anywhere in Bahrain"), `/routes/manama-to-dammam` AR description |
| O3 | Do you drop off "**to Manama or anywhere (else) in Bahrain**", and is that "within the same fixed price"? | Hub (×2), `/routes/khobar-to-bahrain`, AR `ar.ts:12099` |
| O4 | Do you offer **Riyadh → Bahrain International Airport** drop-offs? (2 leads) | Proposed new paragraph on `/routes/riyadh-to-bahrain` (§3.3) |
| O5 | Do you collect from **Jubail and Hofuf** for Bahrain? | Hub `pickupCities` and FAQ |
| O6 | **Flight tracking and free waiting time** at DMM and BAH — offered? How long is the free wait? | `/routes/dammam-to-bahrain`, `/routes/dammam-airport-to-bahrain`, `/routes/bahrain-airport-to-khobar` |
| O7 | Does the **driver wait through the crossing**, with the price unchanged by queue time? | Hub FAQ, `/routes/khobar-to-bahrain`, `/routes/dammam-to-bahrain` |
| O8 | Who obtains the **vehicle's** cross-border insurance and documents — the driver/vehicle operator? (EN blog says "your vehicle's crossing documents, which the driver handles") | Hub, all Saudi → Bahrain routes, EN causeway-taxi blog |
| O9 | Does the **confirmed quotation** state whether the causeway toll is included, per booking? **(Rev. 2: answered — OWNER-CONFIRMED POLICY: "tolls and border fees vary by route or quote; the confirmed quotation controls")** | All fee wording (§4) |
| O10 | Are your vehicles "**licensed for cross-border travel**"? | `/blog/dammam-to-bahrain-travel-guide`, AR `ar.ts:8821` |
| O11 | **Same-day booking** "often possible"; **return transfers** from Bahrain | Hub FAQ, route FAQs |
| O12 | **Corporate accounts** and **executive vehicles** | `/blog/business-travel-bahrain-dammam-guide` (description) |
| O13 | **Child seats** available on request? | Hub FAQ, family blog |
| O14 | Rest stops on Riyadh ↔ Bahrain "at no extra cost" | `/routes/riyadh-to-bahrain` |
| O15 | Do passengers **stay in the vehicle** at Passport Island, or must they all walk through immigration? (AR blog says all must leave the car) | AR `ar.ts:8824`; EN pages say documents move "together" |

### 1.5 Regulatory, fee and factual claims — official-source check (accessed 18 Oct 2026)

| Claim on the site | Official source checked | Result |
|---|---|---|
| The causeway is 25 km long | Bahrain government portal — bahrain.bh King Fahd Causeway page (`https://www.bahrain.bh/wps/portal/en/…` King Fahd Causeway) | **VERIFIED:** "the King Fahd Causeway is 25km long and 23.3 meters wide" |
| Vehicles crossing need insurance | bahrain.bh (same page) | **PARTIALLY VERIFIED:** policies "for vehicles traveling through the King Fahd Causeway" can be issued online. Whether it is mandatory for every vehicle, and who must buy it, is **not stated** |
| King Fahd Causeway Authority set up by bilateral agreement | bahrain.bh | VERIFIED (not used in proposed copy) |
| Causeway toll exists; varies by vehicle type; amount | kfca.sa home and e-services pages (`https://www.kfca.sa/en`, `https://www.kfca.sa/ar/eservices/`) | **UNVERIFIED** — not stated in retrievable text. Secondary sources disagree on the amount. **Do not state amounts** |
| Operates 24/7 | kfca.sa | **UNVERIFIED** (only an unlabelled "24h" icon) |
| One-stop crossing at Passport Island "since 2017" | kfca.sa | **UNVERIFIED** — remove the year or verify with KFCA (customer centre 800 4000 999) |
| Bahrain visa: eVisa / on arrival; GCC rules | Bahrain eVisa portal `https://www.evisa.gov.bh/` (home, FAQ `VisaBhr7En.html`, on-arrival list `list-of-onarrival-visa-country.html`) | **PARTIAL:** official portal confirmed; on-arrival list exists ("Terms and conditions apply"). **Not stated:** GCC-national/resident rules, where on-arrival visas are issued (airport vs causeway), cost |
| "Free Bahraini e-visa on arrival for most Saudi-visa holders" (AR blog) and portal `evisa.npra.bh` | evisa.gov.bh | **UNVERIFIED and contradicts the official portal address.** Remove |
| Saudi customs: alcohol/pork prohibited | ZATCA official page not retrieved (only third-party guides) | **UNVERIFIED (official)** — keep general wording or cite ZATCA after manual check |
| Passport valid 6 months; minors' consent letters; Iqama rules | Not checked against an official page | **UNVERIFIED** — generalise or verify (Saudi Jawazat / Bahrain NPRA) |

Per-sentence status for all 862 rendered sentences: `11-bahrain-claims-register.csv` (status counts: policy conflict 15, verified/partially verified 31, owner confirmation 156, unverified regulatory/fee/operational 601, site data 59).

---

## 2. Verified findings

| ID | Finding | Evidence |
|---|---|---|
| V1 | **Wrong-direction meta descriptions on 5 Bahrain → Saudi pages.** "Comfortable vehicle for the long-distance drive **toward Bahrain**" on `/routes/bahrain-airport-to-dammam` (`data/routes.ts:1688`), `/routes/manama-to-dammam` (`:1822`), `/routes/bahrain-to-riyadh` (`:1956`), `/routes/bahrain-airport-to-khobar` (`:9336`); "Door-to-door service **into Bahrain**" on `/routes/bahrain-to-khobar` (`:1755`) | Live `<meta name="description">`, 18 Oct |
| V2 | **Fee-inclusion promises** (contradict "fees depend on the confirmed quotation"): EN FAQs `data/routes.ts:9297` (khobar-to-bahrain-airport), `:9418` (dammam-to-bahrain-airport); EN body `data/gcc-route-content.ts:443`; AR `ar.ts:11205–11206, 11328, 11349–11350`; AR meta descriptions `ar.ts:11157` ("شامل الرسوم"), `11297` ("شامل رسوم الجسر"), `12061` ("شامل للرسوم"); AR blog FAQ `ar.ts:8825` ("نعم… شامل للكامل — رسوم الجسر، وقت انتظار السائق…"); **(Rev. 2, previously missed)** AR `/routes/dammam-to-bahrain` FAQ `ar.ts:12187–12188` ("نعم، رسوم الجسر ووثائق المركبة … جزء من السعر الثابت، فلا توجد رسوم إضافية عند نقطة العبور") | Live HTML + source |
| V3 | **"We handle" insurance/documentation/toll claims:** hub `data/border-guides.ts:50, 81`; `data/gcc-route-content.ts:192, 249`; FAQs `data/routes.ts:1028, 1077`; "What we handle" box item "The causeway toll and cross-border vehicle documentation" on **every** Saudi → Bahrain and Bahrain → Saudi route (`data/gcc-route-content.ts:38`, `data/gcc-to-saudi-route-content.ts:37`; AR `app/ar/[...slug]/page.tsx:85, 136`); AR body `ar.ts:12085, 12161`. Dead copies (not rendered on these templates) also in `data/routes.ts:1012, 1061` | Live + source |
| V4 | **The hub under-serves the cluster:** 2 impressions in 3 months; route grid lists **3 of 11** Bahrain routes (`data/borders.ts:61–65`); **no link to any Bahrain blog**; no Arabic counterpart; note "Valid passport and visa required" is absolute (`data/borders.ts:56`) | Live + source |
| V5 | **Direction mismatch in blog links:** "Bahrain to Saudi Arabia" posts (`bahrain-to-saudi-arabia-by-road`, `family-travel-bahrain-to-saudi-arabia`) send readers only to **Saudi → Bahrain** route pages; `travel-documents-bahrain-to-saudi-arabia` has no in-body route link; `king-fahd-causeway-guide` links to no route or hub. Only 1 of 7 posts links the hub | Live in-article links |
| V6 | **Wrong blog sidebar:** `king-fahd-causeway-guide` shows the default "Makkah Taxi / Madinah Taxi" quick links because its slug contains none of the sidebar keywords `dammam`/`bahrain`/`khobar` (`components/blog/BlogSidebar.tsx:254`) | Live + source |
| V7 | **Possible cannibalisation (inferred):** `/blog/saudi-to-bahrain-taxi-king-fahd-causeway` ("Saudi to Bahrain Taxi: King Fahd Causeway Guide") targets the same head term as the hub ("saudi to bahrain taxi" is a hub keyword) | Titles/keywords; query→page data needed |
| V8 | **EN/AR parity defect** in the causeway-taxi blog: EN says visa "depends on your nationality" and "your vehicle's crossing documents, which the driver handles"; AR (`ar.ts:8799–8825`) adds unverified specifics — free e-visa on arrival for most Saudi-visa holders, portal `evisa.npra.bh`, 6-month passport validity, 45–90 min / 2–4 h crossings, all passengers must leave the car, everything included in the price | Live + source |
| V9 | **Inconsistent crossing-time claims:** family blog "roughly 30 to 60 minutes"; EN causeway-taxi blog "1.5 to 2.5 hours" (drive + crossing); AR causeway-taxi blog "45–90 minutes", "2–4 hours" at peak; none sourced | Live |
| V10 | AR title `ar.ts:12200` (`/routes/bahrain-to-khobar`) promises "حجز خاص **فوري**" (instant booking) | Live |
| V11 | `/routes/riyadh-to-bahrain` FAQ (`data/routes.ts:1929`): "you don't need to arrange anything separately at the border" — contradicts the passenger/driver responsibility policy | Live + source |
| V12 | Blog title `/blog/dammam-to-bahrain-travel-guide` carries a future year: "Dammam to Bahrain: Taxi vs Self-Drive vs Bus **2027**" | Live |
| V13 | All 11 Arabic Bahrain route pages are absent from the Top-pages report (no impressions). **GSC OBSERVATION only — does not establish whether they are indexed** (URL Inspection required) | GSC Top pages |
| V14 (Rev. 2) | **Shared Arabic template text affecting every GCC route (Bahrain, Qatar, Kuwait, UAE):** the "what we handle" label "ما نتولاه" (`app/ar/[...slug]/page.tsx:258, 1332`) and heading "ما نتولاه مقابل ما تتحكم به سلطات الحدود" (`:1330, 1500`); the booking step "استلم سعرًا ثابتًا — … دون عداد ودون رسوم مفاجئة" (`:1001, 1130, 1285, 1452, 1623, 2047`). The English heading "What We Handle vs What the Border Controls" is likewise shared (`app/(main)/routes/[slug]/page.tsx:549, 687, 836, 976, 1421, 1540`). **Not Bahrain-only** — any change needs a separate, cross-country review | Source |
| V15 (Rev. 2) | Distance/duration figures conflict between EN and AR for the same route (e.g. `/routes/bahrain-airport-to-dammam` EN "~100 km, 1 hr 45 min" vs AR "85 كم، ساعة و30 دقيقة"; `/routes/dammam-airport-to-bahrain` EN "~100 km" vs AR "90 كم" and "نحو 103 كم") | Repository + live HTML |

---

## 3. Page-by-page change proposal

### 3.1 Page roles (intended search intent, to avoid cannibalisation)

| Page | Role | Primary intent |
|---|---|---|
| `/border-transfers/bahrain-causeway` | **Pillar** — choose a route, understand the crossing at a glance, book | "Saudi Arabia ↔ Bahrain private transfer / King Fahd Causeway taxi" (both directions) |
| 11 route pages | **Pickup-specific booking pages** — one origin and one destination each | "[origin] to [destination] taxi / transfer" |
| `king-fahd-causeway-guide` | How the causeway works (structure, toll concept, customs) | Informational: "king fahd causeway" |
| `dammam-to-bahrain-travel-guide` | Compare taxi vs self-drive vs bus from Dammam | Informational-comparative |
| `bahrain-to-saudi-arabia-by-road` | Which Saudi cities are reachable from Bahrain by road | Informational, Bahrain → Saudi |
| `travel-documents-bahrain-to-saudi-arabia` | Document checklist, Bahrain → Saudi | Informational (regulatory — verify) |
| `family-travel-…`, `business-travel-…` | Audience-specific planning | Informational |
| `saudi-to-bahrain-taxi-king-fahd-causeway` | **Re-angle** to "how a private-taxi crossing works, step by step" and hand off to the pillar for booking | Informational-procedural |

Rule applied to every change: the commercial "Saudi ↔ Bahrain transfer" intent belongs to the hub; each route page owns only its pickup/destination pair; blogs answer questions and link to the hub plus the one matching route.

### 3.2 Hub — `/border-transfers/bahrain-causeway`

Files: `data/borders.ts` (entry `bahrain-causeway`), `data/border-guides.ts` (entry `bahrain-causeway`).

| Item | Current (VERIFIED) | PROPOSED |
|---|---|---|
| `metaTitle` | Bahrain Causeway Transfer – Private Cross-Border Taxi | **Saudi Arabia–Bahrain Private Transfer \| King Fahd Causeway** (57 chars) |
| `metaDescription` | Private taxi over the King Fahd Causeway from Khobar and Dammam to Bahrain. Door-to-door cross-border transfers with WhatsApp booking. | **Private transfers between Saudi Arabia and Bahrain over the King Fahd Causeway — from Khobar, Dammam, Dammam Airport or Riyadh, and back from Bahrain.** (≈150 chars) |
| H1 | "Saudi Arabia to Bahrain Border Transfer" — generated by the shared hub template (`app/(main)/border-transfers/[border]/page.tsx:126`) for all 5 hubs | **No change in this package** (a template change would affect the Qatar, Kuwait, UAE and Jordan hubs). Optional later decision |
| `popularRoutes` | 3 routes | All **11** routes, Saudi → Bahrain first, then Bahrain → Saudi (links L01–L08) |
| `notes` | "Valid passport and visa required" | **"Valid passport, plus a visa or entry permit if your nationality requires one"** |
| `notes` | "Door-to-door to Manama or anywhere in Bahrain" | Keep only if O3 confirmed; otherwise "Door-to-door to your destination in Bahrain" |
| Section "Customs, vehicle and toll" (`border-guides.ts:50`) | "…We handle the toll and vehicle paperwork as part of the transfer so you can focus on your trip." | Replace last sentence with draft D1 (§4) |
| FAQ "Is there a toll…?" (`border-guides.ts:79–81`) | "…We handle the toll and vehicle paperwork as part of the transfer." | Draft D2 |
| New section "Plan your crossing" | — | Draft D3: four links to the Bahrain guides (L09–L12) |
| FAQ "Same-day booking is often possible…" | — | Keep if O11 confirmed |
| `lastUpdated` | 2026-08-05 | Set to the implementation date |
| AR | No AR hub exists | **Out of scope** (creating one is a new URL) — record as a later decision |

### 3.3 Route pages

Files: `data/routes.ts` (meta, intro, FAQs), `data/gcc-route-content.ts` (Saudi → Bahrain body), `data/gcc-to-saudi-route-content.ts` (Bahrain → Saudi body), `app/ar/[...slug]/page.tsx` (AR "what we handle" lists), `data/translations/ar.ts` (AR pages).

**Shared change (all 11 pages, EN + AR) — "What we handle" box.** The heading "What We Handle vs What the Border Controls" is hard-coded in the template and shared with Qatar/Kuwait/UAE; this package changes only the Bahrain **data**:

| Source | Current | PROPOSED |
|---|---|---|
| `gcc-route-content.ts:35` and `gcc-to-saudi-route-content.ts:34` `companyControlsLabel` | "What we handle" | "What we coordinate" |
| `gcc-route-content.ts:38` and `gcc-to-saudi-route-content.ts:37` | "The causeway toll and cross-border vehicle documentation" | "Toll and border charges as set out in your confirmed quotation" |
| (Rev. 2) | — | **No new item about vehicle documents** — who obtains vehicle documents/insurance is unconfirmed (O8). Optional neutral item instead: "Border, vehicle-document and insurance requirements: confirm with the authorities and your driver" (OWNER sign-off) |
| AR `app/ar/[...slug]/page.tsx:85, 136` | "رسوم عبور الجسر ووثائق المركبة العابرة للحدود" | "رسوم الجسر والرسوم الحدودية حسب عرض السعر المؤكد" (native review) |
| AR line 202 (unused today — no Bahrain border-point route) | "رسوم عبور الجسر" | Align the same way for consistency (low priority) |

Optional, separate decision: change the shared template heading to "What We Coordinate vs What the Border Controls" for all GCC routes (also covers plan step C2c).

**Scope note (Rev. 2, VERIFIED by tracing imports):** `data/gcc-route-content.ts` and `data/gcc-to-saudi-route-content.ts` are imported only by `app/(main)/routes/[slug]/page.tsx`. Inside them, `gccRouteContent[slug]` / `gccToSaudiRouteContent[slug]` entries are per-route (Bahrain entries affect only Bahrain URLs), but `gccCountryFacts.bahrain` / `gccToSaudiCountryFacts.bahrain` render on **all** Bahrain routes in that direction, and the `responsibilityHeading` string is shared with Qatar/Kuwait/UAE. The AR equivalents live in `app/ar/[...slug]/page.tsx` (per-country facts at lines 83, 134, 202; shared label/heading/booking-step strings — see V14). B-1 touches none of these.

**Per-page changes:**

| Page | Verified problem | PROPOSED change | AR change (draft, native review) |
|---|---|---|---|
| `khobar-to-bahrain` | "We handle" claims (`gcc-route-content.ts:192`, FAQ `routes.ts:1028`); "anywhere else in Bahrain" | Body: draft D4; FAQ: draft D2; keep "anywhere" only if O3 | `ar.ts:12085` → D4-AR; `ar.ts:12061` meta: replace "بسعر شامل للرسوم" with "بسعر ثابت متفق عليه مسبقًا"; `ar.ts:12099` ("ضمن السعر الثابت نفسه") per O3 |
| `dammam-to-bahrain` | "We handle" claims (`gcc-route-content.ts:249`, FAQ `routes.ts:1077`); free waiting time (O6) | Body: D4 variant; FAQ: D2 | `ar.ts:12161` → D4-AR |
| `dammam-airport-to-bahrain` | 0/128 impressions; no claim conflict found | No copy change; it gains hub/blog links (L18–L22) | — |
| `riyadh-to-bahrain` | 4 first-landing leads; FAQ "you don't need to arrange anything separately at the border" (`routes.ts:1929`); BAH destination not covered | FAQ: draft D5. Add to `destinationParagraphs` (`gcc-route-content.ts:346`) draft D6 **only if O4 confirmed**; add FAQ D7 (same condition). **No new Riyadh → BAH page** | Mirror D5–D7 in the AR entry (native review) |
| `khobar-to-bahrain-airport` | Not in the Top-pages report (GSC OBSERVATION — indexing status unknown); 5 inlinks; fee promise FAQ (`routes.ts:9296–9297`) | **B-1:** title (see `12-bahrain-b1-proposal.md`). Later steps: FAQ D8 (B-2); hub card L01 (B-4) | `ar.ts:11205–11206` → D8-AR; meta `ar.ts:11157` remove "شامل الرسوم" (B-3) |
| `dammam-to-bahrain-airport` | Not in the Top-pages report (indexing unknown); 4 inlinks; fee promises (`gcc-route-content.ts:443`, FAQ `routes.ts:9417–9418`) | **B-1:** title. Later: body D9, FAQ D8 (B-2); hub card L02 (B-4) | `ar.ts:11328, 11349–11350` → D8/D9-AR; meta `ar.ts:11297` remove "شامل رسوم الجسر" (B-3) |
| `bahrain-airport-to-dammam` | Wrong-direction description (`routes.ts:1688`) | **B-1:** description + title | AR description already correct; no change |
| `bahrain-to-khobar` | Description says "into Bahrain" (`routes.ts:1755`); "Pickup from anywhere in Bahrain" (O2) | **B-1:** description | Title `ar.ts:12200`: "حجز خاص فوري" → "توصيل خاص" (B-3, AR REVIEW) |
| `manama-to-dammam` | Wrong-direction description (`routes.ts:1822`) | **B-1:** description | AR description mentions Manama hotel/office pickup — keep only if O2 confirmed (B-3) |
| `bahrain-to-riyadh` | Wrong-direction description (`routes.ts:1956`) | **B-1:** description | No change |
| `bahrain-airport-to-khobar` | Wrong-direction description (`routes.ts:9336`); not in the Top-pages report (indexing unknown); 4 inlinks | **B-1:** description + title. Later: hub card L07 (B-4) | No change |

Rev. 2: the exact B-1 strings (current and proposed) are in `12-bahrain-b1-proposal.md`. Proposed metadata carries **no distances or durations** (V15) and **no "fixed price/fare"** wording; it uses the owner-confirmed policy phrase "your confirmed quotation sets the price".

Also proposed (consistency, not rendered today): align the dead `sections` copies in `data/routes.ts:1012, 1061` with D4 so the old wording cannot resurface.

### 3.4 Blogs (EN in Supabase `blogs.content`; AR in `data/translations/ar.ts`)

| Post | Verified problem | PROPOSED | AR |
|---|---|---|---|
| `bahrain-to-saudi-arabia-by-road` (3/253 — strongest page in the cluster) | Bahrain → Saudi article links only Saudi → Bahrain routes; no hub link | Links L13–L17 (companion and retargeted links, hub link, Bahrain → Riyadh link; one new sentence for BAH arrivals if O1 confirmed) | Mirror at `ar.ts:6773` |
| `dammam-to-bahrain-travel-guide` (0/121) | No hub link; "2027" in title; "licensed for cross-border travel" (O10) | L21–L22; title → **"Dammam to Bahrain: Private Taxi vs Self-Drive vs Bus"** (no year) | Mirror at `ar.ts:5838` |
| `king-fahd-causeway-guide` (0/75) | Links no route/hub; wrong sidebar | L18–L20; sidebar fix L31–L32. Its existing toll guidance ("confirm this explicitly…") is **already consistent** with policy — keep | Mirror at `ar.ts:5985` |
| `travel-documents-bahrain-to-saudi-arabia` (2/38) | No in-body route link; heavy regulatory content (visas, minors, vehicle papers) | L23–L25 (one new closing sentence, draft D10). **Before any other edit, verify its regulatory statements against official sources** (claims register) | Mirror at `ar.ts:6865` |
| `family-travel-bahrain-to-saudi-arabia` (0/8) | Direction mismatch; crossing time "30 to 60 minutes" (V9); child seats (O13) | L26–L27; replace the crossing-time figure with draft D11 | Mirror at `ar.ts:6463` |
| `business-travel-bahrain-dammam-guide` (0/2) | Reverse direction unlinked; "corporate accounts" (O12) | L28–L29; keep corporate wording only if O12 confirmed | Mirror at `ar.ts:6356` |
| `saudi-to-bahrain-taxi-king-fahd-causeway` (0/16) | Competes with the hub for "saudi to bahrain taxi" (V7); AR parity defect (V8) | Title → **"Crossing the King Fahd Causeway by Private Taxi: Step by Step"** (58); H1 aligned; link L30; keep slug | **Rewrite AR FAQ/intro claims `ar.ts:8804, 8816, 8821–8825`** to match the EN wording (drafts D12–D14) |

Alternative for V7 (owner decision, **not** in this package because it removes a URL): consolidate this post into the hub with a 301 once query→page data confirms cannibalisation.

### 3.5 Blog sidebar — `components/blog/BlogSidebar.tsx`

Add a topic entry **before** the generic `["dammam", "bahrain", "khobar"]` entry (line 254):

```ts
{
  match: ["bahrain", "causeway"],
  links: [
    { label: "Bahrain Causeway Transfers", href: "/border-transfers/bahrain-causeway", icon: RouteIcon },
    { label: "Khobar → Bahrain Transfer", href: "/routes/khobar-to-bahrain", icon: RouteIcon },
    { label: "Bahrain Airport → Dammam", href: "/routes/bahrain-airport-to-dammam", icon: Plane },
    { label: "Dammam Airport → Bahrain", href: "/routes/dammam-airport-to-bahrain", icon: Plane },
  ],
},
```

Effect (VERIFIED against the 125 current blog slugs): the match catches exactly the 7 Bahrain posts — `king-fahd-causeway-guide`, `saudi-to-bahrain-taxi-king-fahd-causeway`, `dammam-to-bahrain-travel-guide`, `business-travel-bahrain-dammam-guide`, `family-travel-bahrain-to-saudi-arabia`, `bahrain-to-saudi-arabia-by-road`, `travel-documents-bahrain-to-saudi-arabia` — and no others. Dammam-only posts (e.g. `king-fahd-international-airport-complete-guide`, `dammam-travel-guide`) keep the existing Dammam entry. New posts whose slug contains "bahrain" or "causeway" would inherit it automatically.

---

## 4. Draft copy (EN final drafts; AR drafts require native-speaker review)

Rev. 2 status of every draft: **PROPOSED — not implementation-ready** until the dependencies noted on each are met. Wording rules applied: the business coordinates transport; toll inclusion is whatever the confirmed quotation states (OWNER-CONFIRMED POLICY); passengers and drivers confirm applicable requirements (OWNER-CONFIRMED POLICY); no statement that insurance is mandatory, that a particular party obtains documents, about crossing durations, opening hours, visa eligibility or procedures at Passport Island.

**D1 — hub section "Customs, vehicle and toll" (replaces "There is a causeway toll, and cross-border private vehicles require valid insurance and documentation. We handle the toll and vehicle paperwork as part of the transfer so you can focus on your trip."):**
> There is a toll for crossing the causeway, and your confirmed quotation states whether it is included in your fare. Border, vehicle-document and insurance requirements may vary depending on your journey — please confirm the applicable requirements with the relevant authorities and your driver before travelling.

*Dependency:* none beyond approval (the existence of a toll is reported by secondary sources and stated throughout the current site; the amount is not stated). *Note:* the neutral sentence is adapted from the wording you supplied; it is **not** an independently verified legal statement.

**D2 — FAQ "Is there a toll on the King Fahd Causeway?"**
> Yes, there is a causeway toll. Whether it is included depends on your route and booking — your confirmed quotation states exactly what is covered. Border, vehicle-document and insurance requirements may vary, so please confirm them with the relevant authorities and your driver before you travel.

**D3 — hub new section "Plan your crossing":**
> New to the causeway? Read [how the King Fahd Causeway works](/blog/king-fahd-causeway-guide), compare [taxi vs self-drive vs bus from Dammam](/blog/dammam-to-bahrain-travel-guide), see [which Saudi cities you can reach by road from Bahrain](/blog/bahrain-to-saudi-arabia-by-road), and check the [documents for travelling from Bahrain into Saudi Arabia](/blog/travel-documents-bahrain-to-saudi-arabia). Requirements change, so confirm them with the official authorities before you travel.

**D4 — route body sentence (khobar/dammam → Bahrain), replaces "…both of which we handle as part of the transfer":**
> There is a toll for crossing the causeway; your confirmed quotation shows whether it is included. Border, vehicle-document and insurance requirements may vary depending on your journey, so please confirm them with the relevant authorities and your driver before travelling.

D4-AR (draft, AR REVIEW): «يوجد رسم لعبور الجسر، ويوضح عرض السعر المؤكد ما إذا كان مشمولًا في الأجرة. قد تختلف متطلبات الحدود ووثائق المركبة والتأمين حسب رحلتك، لذا يُرجى التأكد منها لدى الجهات المختصة ومع السائق قبل السفر.»

**D5 — `/routes/riyadh-to-bahrain` FAQ "Is the Causeway crossing included in the journey?"**
> Yes — the causeway is the final stage of the trip, and your driver drives you across it. You'll need your own passport and any visa or entry permit that applies to you, and your confirmed quotation states whether the toll is included.

**D6 — `/routes/riyadh-to-bahrain` destination paragraph — BLOCKED until O4 is confirmed:**
> Flying out of Bahrain International Airport? Tell us your flight time when you request a quote, and we'll plan the journey around your departure.

**D7 — new FAQ — BLOCKED until O4 is confirmed:** "Can you take me from Riyadh straight to Bahrain International Airport?"
> Yes. Share your flight time when you request a quote and we'll plan the departure from Riyadh around it.

**D8 — airport-variant FAQ (replaces "Yes. The causeway toll and … nothing extra to settle at the border"):** "Is the causeway toll included in the price?"
> It depends on your route and booking — your confirmed quotation states whether the toll is included. Border, vehicle-document and insurance requirements may vary, so please confirm them with the relevant authorities and your driver before travelling.

D8-AR (draft, AR REVIEW): «هل رسم الجسر مشمول في السعر؟ — يعتمد ذلك على المسار والحجز؛ يوضح عرض السعر المؤكد ما إذا كان رسم الجسر مشمولًا. قد تختلف متطلبات الحدود ووثائق المركبة والتأمين، لذا يُرجى التأكد منها لدى الجهات المختصة ومع السائق قبل السفر.»

**D9 — `/routes/dammam-to-bahrain-airport` body (replaces `gcc-route-content.ts:443`):**
> There is a toll for crossing the causeway; your confirmed quotation states whether it is included. Border, vehicle-document and insurance requirements may vary depending on your journey — please confirm them with the relevant authorities and your driver before you set off.

**D10 — closing sentence for `travel-documents-bahrain-to-saudi-arabia`:** (Rev. 2: O1 pickup on listed routes is owner-confirmed; "door to door" kept as the existing service description)
> Once your documents are in order, our [Bahrain to Khobar](/routes/bahrain-to-khobar) and [Bahrain Airport to Dammam](/routes/bahrain-airport-to-dammam) transfers take you across the [King Fahd Causeway](/border-transfers/bahrain-causeway) door to door.

**D11 — crossing time (family blog and anywhere a fixed duration is stated without a source):**
> Crossing time varies with traffic and border processing on the day, so allow extra time.

**D12 — AR blog visa answer (`ar.ts:8822`), draft:** «تختلف متطلبات التأشيرة باختلاف الجنسية. تحقّق من أهليتك عبر البوابة الرسمية للتأشيرة الإلكترونية في البحرين evisa.gov.bh قبل السفر.» — and remove the "free on arrival for most Saudi-visa holders" claim and the `evisa.npra.bh` address from `ar.ts:8804`.

**D13 — AR blog toll answer (`ar.ts:8825`), draft:** «يعتمد ذلك على المسار والحجز؛ يوضح عرض السعر المؤكد ما إذا كان رسم الجسر مشمولًا.»

**D14 — AR blog crossing-time and passenger answers (`ar.ts:8816, 8823, 8824`):** replace fixed durations with D11 in Arabic; replace "all passengers must leave the car" with a non-absolute statement pending O15 and an official source.

AR text in `ar.ts:8793–8832` is stored as `\uXXXX` escapes; edits must preserve that encoding (or the entry must be re-encoded consistently), then `npm run gen:ar-index`.

---

## 5. Implementation order (each a separate commit; each needs approval)

| Step | Scope | Files | Depends on |
|---|---|---|---|
| B-1 | Metadata direction fixes (V1) + airport-variant titles — **Rev. 2: prepared for review in `12-bahrain-b1-proposal.md`** | `data/routes.ts` only (7 route entries) | Approval only |
| B-2 | Fee / "we handle" wording EN (V2, V3, V11) + "What we coordinate" box | `data/routes.ts`, `data/gcc-route-content.ts`, `data/gcc-to-saudi-route-content.ts`, `data/border-guides.ts`, `data/borders.ts` | O8, O9 answers; this is plan steps C2a/C2b for Bahrain |
| B-3 | Same for AR (V2, V3, V10) | `data/translations/ar.ts`, `app/ar/[...slug]/page.tsx` | B-2 + native review |
| B-4 | Hub: 11 route cards, meta, notes, "Plan your crossing" | `data/borders.ts`, `data/border-guides.ts` | B-2 |
| B-5 | Blog sidebar topic | `components/blog/BlogSidebar.tsx` | — |
| B-6 | EN blog link and title changes (L13–L30) | Supabase `blogs` (row backups first) | O1–O3 for new sentences |
| B-7 | AR blog changes incl. the causeway-taxi parity rewrite (V8) | `data/translations/ar.ts` | Native review; official sources for anything kept |
| B-8 | Riyadh → BAH section (D6, D7) | `data/gcc-route-content.ts`, `data/routes.ts`, AR | O4 |

---

## 6. Test checklist (before and after each step)

| Area | Check | Pass criterion |
|---|---|---|
| Build | `npx tsc --noEmit`; `npm run lint`; `npm run build` | tsc 0 errors; lint shows no new problems vs the recorded baseline (10 pre-existing); build succeeds with 904 pages |
| AR regression | `npm run check:ar-index`; `npm run check:ar-500` (local and production) | Pass; 6/6 |
| Status/canonical | All 19 EN URLs + 18 AR counterparts (37) | 200; self-canonical; unchanged URLs |
| EN/AR parity | Each changed EN page has its AR counterpart changed in the same step; reciprocal hreflang | 37/37 reciprocal; no AR page still carrying a fee-inclusion or "نتولى" claim (`11-bahrain-claims-register.csv` POLICY CONFLICT rows → 0) |
| Metadata direction | Every Bahrain → Saudi page description names the Saudi destination and contains no "toward Bahrain"/"into Bahrain" | 0 matches for "toward Bahrain" or "into Bahrain" on Bahrain → Saudi pages |
| Claims | Rendered-text search on the 37 URLs: "we handle the toll", "both of which we handle", "arranged as part of the fixed price", "nothing extra to settle", "no separate fees", "شامل للرسوم", "شامل الرسوم", "شامل رسوم الجسر", "شامل للكامل", "حجز خاص فوري", "evisa.npra.bh" | 0 matches |
| Internal links | Crawl the 37 URLs; every link in `10-bahrain-internal-links.csv` present with the stated anchor; 0 broken (non-200) links; hub shows 11 route cards | 100% present; 0 broken |
| Inlinks | Re-run the inlink count | Each of the 3 absent airport routes ≥ 10 inlinks (from 4–5) |
| Sidebar | `king-fahd-causeway-guide` sidebar shows Bahrain links, not Makkah/Madinah | Pass |
| Schema | JSON-LD parse on the 37 URLs; FAQ answers in FAQPage match the visible text | 0 parse errors; FAQ JSON-LD contains no removed claims |
| Visual | Desktop + 390 px screenshots of the hub, one EN route, one AR route, one blog | No layout change other than the added cards/section |
| Post-deploy | GSC URL Inspection on Tier 1 URLs (§1.3); request indexing for the hub and the 3 airport routes | Recorded result per URL |
| Monitoring | GSC Performance for the 19 EN + 18 AR URLs, 28-day windows vs the 16 Jul–15 Oct baseline (§1.2); leads mentioning Bahrain; WhatsApp clicks by source page | Report at 28 and 56 days; no claim of improvement before then |

## 7. Rollback

- Code/data steps (B-1–B-5, B-7, B-8): `git revert <commit>` and redeploy, or Cloudflare deployment rollback for an immediate return.
- Supabase blog edits (B-6): export each row's `content` and `title`/`meta_*` to a local backup before editing; restore and redeploy (blogs publish on deploy).
- Because each step is a separate commit, rolling back one step does not undo the others.

## 8. Unresolved owner decisions

1. Answers to O1–O15 (§1.4), especially O8 (who handles the vehicle's documents/insurance), O9 (quotation states toll inclusion) and O4 (Riyadh → BAH drop-offs).
2. Approve page roles (§3.1), including re-angling `saudi-to-bahrain-taxi-king-fahd-causeway` rather than consolidating it.
3. Approve the "What we coordinate" label for Bahrain now, and decide whether to change the shared template heading for all GCC routes.
4. Approve each implementation step B-1 to B-8 separately.
5. Native-speaker reviewer for the Arabic drafts.
6. Later, separate decisions (not in this package): an Arabic Causeway hub (new URL); consolidating the causeway-taxi blog (URL removal); the hub H1 template.

---

## Appendix A — URL Inspection list (37 URLs, EN + AR)

Tier 1 = inspect first. Arabic URLs are shown decoded; Search Console accepts decoded or percent-encoded forms.

| Tier | Lang | URL |
|---|---|---|
| 1 | EN | `https://saudiprivatetransfers.com/border-transfers/bahrain-causeway` |
| 1 | EN | `https://saudiprivatetransfers.com/routes/khobar-to-bahrain-airport` |
| 1 | AR | `https://saudiprivatetransfers.com/ar/توصيل-من-الخبر-إلى-مطار-البحرين` |
| 1 | EN | `https://saudiprivatetransfers.com/routes/dammam-to-bahrain-airport` |
| 1 | AR | `https://saudiprivatetransfers.com/ar/توصيل-من-الدمام-إلى-مطار-البحرين` |
| 1 | EN | `https://saudiprivatetransfers.com/routes/bahrain-airport-to-khobar` |
| 1 | AR | `https://saudiprivatetransfers.com/ar/توصيل-من-مطار-البحرين-إلى-الخبر` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/khobar-to-bahrain` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-الخبر-إلى-مملكة-البحرين` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/dammam-to-bahrain` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-الدمام-إلى-مملكة-البحرين` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/dammam-airport-to-bahrain` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/توصيل-من-مطار-الدمام-إلى-مملكة-البحرين` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/riyadh-to-bahrain` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-الرياض-إلى-مملكة-البحرين` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/bahrain-airport-to-dammam` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/توصيل-من-مطار-البحرين-إلى-الدمام` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/bahrain-to-khobar` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-البحرين-إلى-مدينة-الخبر` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/manama-to-dammam` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-المنامة-إلى-الدمام` |
| 2 | EN | `https://saudiprivatetransfers.com/routes/bahrain-to-riyadh` |
| 2 | AR | `https://saudiprivatetransfers.com/ar/تاكسي-من-البحرين-إلى-الرياض` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/bahrain-to-saudi-arabia-by-road` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/من-البحرين-الى-السعودية-بالسيارة` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/dammam-to-bahrain-travel-guide` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/دليل-السفر-من-الدمام-الى-البحرين` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/king-fahd-causeway-guide` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/دليل-جسر-الملك-فهد` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/travel-documents-bahrain-to-saudi-arabia` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/مستندات-السفر-من-البحرين-الى-السعودية` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/family-travel-bahrain-to-saudi-arabia` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/دليل-سفر-العائلات-من-البحرين-الى-السعودية` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/business-travel-bahrain-dammam-guide` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/دليل-سفر-الأعمال-بين-البحرين-والدمام` |
| 3 | EN | `https://saudiprivatetransfers.com/blog/saudi-to-bahrain-taxi-king-fahd-causeway` |
| 3 | AR | `https://saudiprivatetransfers.com/ar/دليل-عبور-جسر-الملك-فهد-بالتاكسي-الخاص` |
