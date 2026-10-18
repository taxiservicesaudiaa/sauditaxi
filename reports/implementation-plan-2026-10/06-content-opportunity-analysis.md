# Content Opportunity Analysis — SEO, AEO, GEO and Content Gaps

Prepared 18 October 2026. **Planning document only.** No pages, content, metadata, schema, robots.txt, database records or deployments were changed. Companion file: `07-content-opportunities.csv` (24 scored opportunities).

## 0. Evidence used and its limits

| Source | Period | Used for | Limitation |
|---|---|---|---|
| GSC Performance → **Top pages** (pasted, 500 of 501 rows) | 16 Jul – 15 Oct 2026 | Page-level clicks and impressions | Pages only. **The Queries tab did not arrive** — the paste was truncated at 50,000 characters after the Pages list. No positions or CTR per page were supplied |
| GSC Page indexing (2 screenshots) | Updated 12 Oct 2026 | Indexed 399 / not indexed 720; reasons: redirect 150, alternate canonical 9, 404 6, crawled–not indexed 92, discovered–not indexed 463 | Totals only — no per-URL list. Reasons are Google's labels, not a diagnosis |
| GSC Queries export in the repo (`docs/search_data/Queries.csv`) | 3 Jun – 6 Aug 2026 | The only query-level evidence (601 queries, 2,657 impressions) | Older period; overlaps the new data by 3 weeks |
| Audit URL inventory (`reports/seo-audit-2026-10/03-url-inventory.csv`) and crawl | 16 Oct 2026 | Page type, status, word count, internal inlinks, hreflang | Single crawl |
| Supabase `leads` (read-only, aggregates only) | 8 Jul – 17 Oct 2026 (158 leads) | Demand evidence by city/airport pair | Free-text pickup/drop-off; matching is approximate; 136+ leads still "New", so these are enquiries, not bookings |

Everything below is labelled **Verified** (directly observed in these sources) or **Inferred** (a reasoned conclusion that needs more evidence). Impression counts here are small: a page with 50 impressions in three months is a weak signal, and is treated as one.

## A. Executive summary

**1. The bottleneck is visibility of existing pages, not missing pages.** *Verified:* 542 of the 896 live URLs (60%) had **zero impressions** in three months, close to the 555 "Discovered/Crawled – currently not indexed" in the indexing report. All 100 distance/journey pages (EN + AR) are absent, as are 173 of 194 Arabic route pages and 66 of 194 English route pages. *Verified correlation:* absent English route pages have a median of **600 words** versus **1,255** for those that appear, and 33 of the 39 route pages under 600 words are absent. *Inferred:* thin, near-duplicate pages are not being indexed. Adding new URLs now would add to the pages Google is choosing not to index.

**2. The retired hotel pages explain the "Page with redirect: 150".** *Verified:* 146 of the 500 rows are the hotel-transfer URLs that were deliberately 301-redirected to city hubs (470 impressions, 7 clicks). They must **not** be recreated.

**3. Where the business is actually won.** Commercial value and impressions point to different places:

| Cluster | GSC Jul–Oct (impr / clicks) | Leads (8 Jul–17 Oct) | Supporting blog posts |
|---|---|---|---|
| Bahrain / Causeway | **1,144 / 6** (21 pages) | 12 | 7 (overlapping) |
| Najran / Khamis / Abha / Jazan | 469 / **20** (most clicks of any cluster) | 15 | 2 thin |
| Jubail | 481 / 7 | 2 | 1 |
| Qatar / Doha | 404 / 9 | **15** | **0** |
| Kuwait / Khafji | 257 / 1 | 7 | **0** |
| Qassim / Buraidah | 220 / 7 (AR 6 of the 7) | **20** (largest) | **0** |
| Umrah / Hajj | 268 / **0** | **0** | 20+ |
| Generic travel blogs (SIM, cash, weather…) | 996 / 5 | 0 | — |

**4. Arabic pages convert impressions into clicks better where they are visible.** *Verified:* Arabic (non-retired) pages earned 17 clicks from 348 impressions (4.9% CTR) versus 1.1% for English route pages. The sample is small, but every AR click came from intercity Riyadh routes (Qassim, Jubail, Hofuf, Hail, Khobar, Abha).

**5. Genuine new-page gaps exist, but most are blocked on service confirmation.** The strongest new demand signal is **Qassim (Prince Naif, ELQ) Airport ↔ Riyadh** (9 leads, no page, ELQ not in `data/airports.ts`), followed by **Abha Airport → Najran** (Najran is the top-clicked page; 6 Najran leads, all involving an airport). Neither is a "listed route", so neither should be built until the business confirms it operates them.

**6. New blog topics justified by evidence: two.** A **Riyadh ↔ Doha by road** guide and a **Saudi ↔ Kuwait by road** guide. Both corridors produce leads and have zero supporting posts. Both were already in the plan as corridor guides (E2) and still need separate approval.

**7. What not to create.** More pilgrim content (0 clicks, 0 leads despite 20+ posts), more generic travel posts, airport-meeting or flight-delay posts (4+ already overlap), replacements for redirected hotel pages, or pages for foreign-language "car rental at Taif airport" queries (self-drive rental is not the service).

## B. Prioritised opportunity list

Full table with all required fields: `07-content-opportunities.csv`. Scoring is 0–5 on seven criteria (GSC evidence, commercial intent, confirmed service, genuine gap, original/verified information, cluster value, distinct intent), total /35. A low "confirmed service" score blocks a page regardless of total.

| Rank | ID | Opportunity | Type | Score | Priority |
|---|---|---|---|---|---|
| 1 | OPP-02 | Riyadh ↔ Doha by road (corridor guide) | New blog | 28 | P1 (needs E2 approval) |
| 2 | OPP-03 | Arabic Dammam Airport hub | AR counterpart (plan D1) | 28 | P1 |
| 3 | OPP-01 | Bahrain cluster: roles, links, copy fixes | Improve existing | 27 | P1 |
| 4 | OPP-04 | Madinah Airport hub: improve EN + AR hub | Improve + AR (plan D2) | 27 | P1 |
| 5 | OPP-18 | Arabic route pages: internal links from AR hubs | AR, existing pages (plan B5) | 27 | P1 |
| 6 | OPP-05 | Southern cluster + AR Abha Airport hub | Improve + AR | 26 | P1 |
| 7 | OPP-06 | Madinah ↔ Yanbu route pages + blog link fix | Improve existing | 26 | P1 |
| 8 | OPP-07 | Saudi ↔ Kuwait by road (corridor guide) | New blog | 26 | P1 (needs E2 approval) |
| 9 | OPP-08 | Qassim ↔ Riyadh internal links | Improve (plan B1–B5) | 26 | P1 |
| 10 | OPP-12 | Jordan (Amman ↔ Tabuk) pages | Improve existing | 23 | P2 |
| 11 | OPP-13 | Riyadh Airport hub CTR | Improve existing | 23 | P2 |
| 12 | OPP-14 | Ziyarat service ↔ tour/point pages | Improve existing | 23 | P2 |
| 13 | OPP-11 | Riyadh ↔ Jubail CTR and links | Improve existing | 22 | P2 |
| 14 | OPP-15 | Hail pages + AR Hail hub | Improve + AR | 22 | P2 |
| — | OPP-09 | Qassim (ELQ) Airport ↔ Riyadh | New page | 24 | **Blocked** — confirm service |
| — | OPP-10 | Abha Airport → Najran | New page | 22 | **Blocked** — confirm service |
| 15 | OPP-16 | Jeddah ↔ Taif / Taif Airport | Improve existing | 21 | P3 |
| 16 | OPP-17 | Hofuf vs Al-Ahsa duplicate city pages | Consolidation (evaluate) | 20 | P3 |
| 17 | OPP-19 | 100 distance/journey pages | Indexing health (evaluate) | 16 | P3 as content; see note |
| — | OPP-20–24 | JED→Makkah/Umrah content; airport-meeting posts; family/elderly pilgrims; generic travel; Taif car rental | — | 2–17 | **Not recommended** |

Note on OPP-19: it scores low as a *content* opportunity by design (it creates nothing), but it is the most important **indexing-health** question on the site. If the 100 distance pages are confirmed "not indexed", consolidating them would reduce the pool of low-value URLs competing for crawl attention. Recommended as a separate, evidence-led review after GSC URL Inspection on 5 samples.

## C. First 10 recommended actions

### Existing pages to improve first
1. **Bahrain cluster (OPP-01).** Assign roles (causeway hub = pillar; each route = one pickup point; blogs → hub + matching route). Fix the verified copy error on `/routes/bahrain-airport-to-dammam` (meta description says "the long-distance drive **toward Bahrain**" on a Bahrain → Dammam page). Add a Bahrain Airport section to `/routes/riyadh-to-bahrain` rather than a new page. Sequence it after the already-planned C2a/C2b fee wording on the same pages.
2. **Madinah ↔ Yanbu (OPP-06).** The blog `/blog/madinah-to-yanbu-transfer-guide` (144 impressions, plus 47 in Arabic) links to `/routes/jeddah-to-yanbu` but **not** to the Madinah ↔ Yanbu routes. Those route pages have 502/520 words, 1 section and 1 FAQ, and are absent from GSC. Expand both and link them.
3. **Madinah Airport hub (OPP-04).** 180 impressions, 0 clicks. Strengthen arrival guidance and link the three MED route pages that never appear.
4. **Qassim ↔ Riyadh links (OPP-08)** — plan B1–B5 as already designed.
5. **Southern cluster (OPP-05).** Add Abha-airport guidance and links on `/taxi-service/najran` and `/taxi-service/khamis-mushait`, the best-clicking pages on the site.

### New pages justified by a genuine gap
6. **Qassim (ELQ) Airport → Riyadh route page (OPP-09)** — **only after** you confirm the service. One direction first (6 of 9 leads), not an airport hub plus both directions.
7. **Abha Airport → Najran route page (OPP-10)** — **only after** confirmation; do action 5 first.

### Blog opportunities
8. **Riyadh ↔ Doha by road (OPP-02)** — one guide for both directions (E2; separate approval).
9. **Saudi ↔ Kuwait by road (OPP-07)** — after OPP-02 proves the format.

### Arabic localisation
10. **Arabic Dammam and Madinah airport hubs (OPP-03, OPP-04; plan D1–D2)**, then AR-hub → AR-route links so the 173 absent Arabic routes can be discovered (OPP-18).

## D. Content briefs (top five by score — briefs only, nothing written or published)

Facts marked *(site data)* come from the current site data files and must be re-verified before publication. Anything regulatory must come from a current official source recorded with its URL and access date.

### Brief 1 — OPP-02: Riyadh ↔ Doha by road (new blog; corridor guide E2)

| Field | Content |
|---|---|
| Audience and intent | Residents, expatriates, business travellers and families planning a road transfer between Riyadh (or the Eastern Province) and Doha; deciding between road and flight; checking the border |
| Query cluster | riyadh to doha by car / by road; doha to riyadh taxi; riyadh to doha private transfer; salwa border; riyadh to qatar border; dammam / al khobar to doha (variants: Doha–Riyadh, Abu Samra, الرياض الى الدوحة بالسيارة) |
| Proposed title | Riyadh to Doha by Road: Border, Documents and Journey Time |
| H1 | Riyadh to Doha by Road: How the Private Transfer Works |
| Slug | `/blog/riyadh-to-doha-by-road` |
| Meta description | Planning a Riyadh–Doha road trip? Distance, the Salwa–Abu Samra crossing, what to prepare, and how a private transfer is arranged. Fees depend on your quote. (≈155 chars) |
| Outline | 1) The route at a glance: Riyadh → Salwa → Abu Samra → Doha; distance ~570–600 km and ~5.5–6.5 h driving plus border *(site data)*. 2) Road vs flight: when road makes sense (families, luggage, door to door). 3) The border step by step: Saudi exit, Qatari entry, typical checks — **from official sources only**. 4) Documents and entry rules: passport/visa by nationality, vehicle documents — general guidance plus links to the official authorities; "passengers and drivers confirm what applies". 5) Fees and tolls: "vary by route; your confirmed quotation states what is included". 6) Timing: when crossings are busiest (official/verified sources only). 7) From the Eastern Province instead: Dammam/Khobar/DMM to Doha (link the route pages). 8) Booking: what to send for a quote. 9) FAQ |
| AEO questions (answer directly in the first sentence of each section) | How far is Riyadh from Doha by road? How long does the drive take including the border? Can a Saudi private car cross into Qatar? What documents do I need? Are border fees included in the price? Can I be picked up at Hamad International Airport? |
| AI-citable facts | A short facts block: distance, driving time, crossing names, last-verified date, a "What we do / What you confirm" split |
| Evidence needed | Official Saudi and Qatari border/immigration sources (URLs + dates); owner confirmation of Doha-side pickup points (hotels, Hamad airport); optionally an original route map (no stock "driver" photos) |
| Links from | `/routes/riyadh-to-doha`, `/routes/doha-to-riyadh`, `/routes/riyadh-to-qatar-border`, `/border-transfers/qatar-border`, `/taxi-service/riyadh` |
| Links to | Both route directions, the Qatar hub, `/routes/dammam-airport-to-doha`, `/routes/al-khobar-to-doha`, `/get-quote` |
| CTA | "Request a quote for Riyadh ↔ Doha" (WhatsApp + quote form) |
| EN/AR | Separate Arabic version written or professionally localised and reviewed by a native speaker; not a mechanical translation |
| Risks | Regulatory facts change; must not repeat route-page FAQs; new URL — needs links on day one |

### Brief 2 — OPP-03: Arabic Dammam Airport (DMM) hub (plan D1)

| Field | Content |
|---|---|
| Audience and intent | Arabic-speaking arrivals at King Fahd International Airport going to Dammam, Khobar, Dhahran, Jubail, Al-Ahsa or Bahrain |
| Query cluster (AR) | نقل من مطار الدمام؛ تاكسي مطار الملك فهد الدولي؛ من مطار الدمام الى الخبر / الجبيل / البحرين |
| Title / H1 | نقل خاص من مطار الملك فهد الدولي بالدمام / نقل من مطار الدمام (DMM) إلى الخبر والجبيل والبحرين |
| Slug | Arabic slug following the existing AR airport pattern (e.g. `/ar/نقل-مطار-الدمام`) — confirm against `ar.ts` naming |
| Outline | Meeting point and arrival; main destinations with the existing route facts *(site data)*; Bahrain via the causeway with coordination wording; Al-Ahsa and Jubail; FAQ; links to every AR DMM route page |
| AEO questions | أين أجد السائق في مطار الدمام؟ كم تستغرق الرحلة إلى الخبر؟ هل يمكن الذهاب مباشرة إلى البحرين؟ هل رسوم الجسر مشمولة؟ ("حسب عرض السعر المؤكد") |
| Evidence needed | EN hub facts re-verified; native-speaker review |
| Links | From AR DMM route pages and AR Dammam/Khobar city pages; to the AR routes and AR quote page |
| Risks | Low; hreflang pair with `/airport-transfer/dammam-airport` must be reciprocal |

### Brief 3 — OPP-01: Bahrain cluster (existing pages; no new URL)

| Field | Content |
|---|---|
| Audience and intent | Travellers between Saudi Arabia and Bahrain: Dammam/Khobar/Riyadh ↔ Bahrain, King Fahd Airport ↔ Bahrain International Airport |
| Query cluster | dammam to bahrain; bahrain to dammam airport (service/taxi/transport); khobar to bahrain taxi; riyadh to bahrain; king fahd causeway (Jun–Aug weighted position 54) |
| Page roles | **Pillar:** `/border-transfers/bahrain-causeway` (currently 2 impressions despite 26 inlinks). **Pickup-specific:** each route page keeps its own distance, timing and pickup facts. **Informational:** `king-fahd-causeway-guide`, `dammam-to-bahrain-travel-guide`, `bahrain-to-saudi-arabia-by-road`, `travel-documents-bahrain-to-saudi-arabia` |
| Changes | 1) Fix the verified wrong-direction meta description on `/routes/bahrain-airport-to-dammam`. 2) Pillar: a route chooser (all 11 Bahrain routes) and a short "how the crossing works" section linking the guides. 3) Blogs: add contextual links to the hub and the specific route (two link only to generic pages today). 4) `/routes/riyadh-to-bahrain`: add a Bahrain International Airport drop-off section (2 Riyadh→BAH leads) instead of a new page. 5) Link the 3 absent airport-variant routes from the hub. 6) Titles that state the pickup point first, to separate the near-identical pages |
| AEO questions | How long does it take from Dammam to Bahrain including the causeway? Can I go straight from King Fahd Airport to Bahrain Airport? Which documents do I need? Is the causeway toll included? ("depends on your route and booking — your confirmed quotation states it") |
| Evidence needed | GSC query→page export for Bahrain queries (to confirm which page should rank for which query); URL Inspection of the 3 absent routes; owner confirmation of Bahrain-side pickups (BAH, Manama hotels); official sources for any retained causeway/visa facts |
| EN/AR | Mirror link changes on the AR pages; AR copy edits reviewed by a native speaker |
| Risks | Overlap is the existing problem; do not add Bahrain pages |

### Brief 4 — OPP-04: Madinah Airport (MED) hub — improve EN, add AR (plan D2)

| Field | Content |
|---|---|
| Audience and intent | Pilgrims and visitors arriving at MED, going to Haram-area hotels, onward to Makkah, AlUla, Yanbu or Riyadh |
| Query cluster | medina airport cab (38 @ 88); med airport drop off (42 @ 43); med airport taxi (20 @ 34); madinah airport to hotel *(Jun–Aug queries)* |
| Title (EN, unchanged unless CTR data supports it) | Private Madinah Airport Transfer (MED) — consider "Madinah Airport (MED) to Your Hotel near the Prophet's Mosque" for CTR testing |
| EN improvements | Arrival and meeting-point section (international vs domestic terminal *(site data)*); hotel drop-off realities near the Haram (verified, no invented access rules); onward journeys with links to `/routes/madinah-airport-to-madinah`, `madinah-to-madinah-airport`, `madinah-airport-to-riyadh` (all absent from GSC; 0–1 sections each — expand separately); link the existing `madinah-airport-driver-pickup-guide` |
| AR hub | Separate Arabic hub (plan D2) with the same verified facts |
| AEO questions | How far is MED from the Haram? How long to Makkah? Where does the driver meet me? What happens if my flight is delayed? |
| Evidence needed | Terminal/meeting-point details confirmed by the business; drop-off practice near the Haram from a verified source |
| Risks | Medium overlap with the absent MED route pages and the pickup blog — the hub should link to them, not repeat them |

### Brief 5 — OPP-18: Arabic route discovery (existing pages; plan B5)

| Field | Content |
|---|---|
| Goal | Help Google discover the 173 Arabic route pages that never appear, starting with corridors that already show AR clicks |
| Changes | AR Riyadh city page and AR intercity service page list the AR route pages for Qassim, Jubail, Hofuf, Hail, Khobar, Abha, Bahrain, Doha, Kuwait (existing slugs only); the new AR airport hubs (D1–D3) list their AR routes |
| Evidence first | GSC URL Inspection on 5 absent AR routes (discovered vs crawled-not-indexed) |
| Measure | Number of AR URLs with ≥1 impression (baseline 21 routes / 348 impressions / 17 clicks, 16 Jul–15 Oct) |
| Risks | Adding links does not fix thin AR pages (AR median 506 words when absent) — expand only those with demand |

## E. Cluster and internal-link map (existing URLs; ★ = proposed, not built)

```
/border-transfers ──┬─ /border-transfers/bahrain-causeway  (PILLAR)
                    │     ├─ routes: khobar↔bahrain, dammam↔bahrain, dammam-airport↔bahrain(-airport),
                    │     │          manama-to-dammam, riyadh↔bahrain, khobar/dammam-to-bahrain-airport
                    │     └─ blogs: king-fahd-causeway-guide, dammam-to-bahrain-travel-guide,
                    │               bahrain-to-saudi-arabia-by-road, travel-documents-…, family-…, business-…
                    ├─ /border-transfers/qatar-border
                    │     ├─ routes: riyadh↔doha, riyadh-to-qatar-border, dammam(-airport)↔doha, al-khobar↔doha
                    │     └─ ★ /blog/riyadh-to-doha-by-road
                    ├─ /border-transfers/kuwait-border
                    │     ├─ routes: dammam↔kuwait-city/airport, riyadh↔kuwait-city, khafji routes
                    │     └─ ★ /blog/saudi-arabia-to-kuwait-by-road
                    └─ /border-transfers/jordan-border ── amman↔tabuk, amman↔alula, amman↔madinah

/taxi-service/riyadh ── qassim↔riyadh, jubail↔riyadh, hofuf↔riyadh, hail↔riyadh, abha↔riyadh,
                        riyadh→bahrain/doha/kuwait/dubai   (plan B1)
/taxi-service/buraidah ── qassim↔riyadh ── ★ qassim-airport-to-riyadh (blocked)
/taxi-service/najran ── /airport-transfer/abha-airport ── ★ abha-airport-to-najran (blocked)
/airport-transfer/madinah-airport ── madinah-airport↔madinah, madinah-airport-to-riyadh,
                                     /madinah/* point pages, blog madinah-airport-driver-pickup-guide
/taxi-service/yanbu, /airport-transfer/yanbu-airport ── madinah↔yanbu ── blog madinah-to-yanbu-transfer-guide
/ziyarat-taxi-service ── /makkah/makkah-ziyarat-tour, /madinah/{quba, uhud, qiblatain, seven-mosques}

Arabic: AR Riyadh city + AR intercity + ★ AR DMM / MED / Abha hubs ──► AR route pages
```

Direction of priority: strengthen these existing links before publishing any ★ page.

## F. Measurement plan (after changes are approved and deployed)

**Baseline (this report):** GSC 16 Jul–15 Oct per page (`08-gsc-top-pages-2026-07-16_2026-10-15.tsv`, 122 clicks / 10,295 impressions over 500 rows); cluster totals in §A; 354 of 896 live URLs with ≥1 impression; indexing 399 / 720 (12 Oct); leads 158 (8 Jul–17 Oct); WhatsApp clicks by source page.

| Measure | Source | Cadence | Notes |
|---|---|---|---|
| Impressions, clicks, CTR, position per changed URL and cluster | GSC Performance (page + query exports) | 28-day windows; compare same-length periods before/after each deploy | Export the **Queries** tab each time (it was missing this round) |
| Query growth | GSC queries mapped to clusters (same regex groups as §A) | Monthly | Count distinct queries with ≥1 impression per cluster |
| Indexing | GSC Page indexing + URL Inspection on a fixed sample (5 per changed cluster) | Monthly | Track the "Discovered"/"Crawled" counts and the 354/896 coverage figure |
| AI-search visibility | Leads with `first_utm_source=chatgpt.com` / Perplexity; GSC "generative AI features" report (linked on the Performance screen) | Monthly | Export that report if available on the property |
| WhatsApp clicks | `whatsapp_clicks.source_page` (after plan F4 extends logging to blog/contact links) | Monthly | |
| Quote submissions | `leads` by `first_landing_page` and `source_page` | Monthly | After plan F3 fixes first-touch capture, the landing page becomes reliable |
| Qualified leads | `leads.status` ≥ Quoted | Monthly | Requires keeping statuses up to date (plan F5) |
| Confirmed bookings and revenue | `Confirmed`/`Completed` leads; linked `quotations.total_amount` / `invoices.total_amount` | Monthly | Only 3 of 14 quotations are linked to a lead today |

Confounders to note in every report: the October 2026 airport disruption (lead spike 10–15 Oct), the robots.txt and `twitter:site` changes (pushed with commit `bdeb47e` on 16 Oct and confirmed live on 18 Oct — the 12 Oct indexing snapshot predates them), and seasonal Umrah/Hajj patterns.

## Single best next content action

**OPP-01 — the Bahrain cluster improvement (existing pages, no new URL).**

Why it outranks the alternatives:
- **Most evidence:** largest impression cluster (1,144 impressions across 21 pages) and 12 leads.
- **No new URL needed:** about 60% of live URLs already get no impressions, so adding pages is the riskier move.
- **Verified defects to fix:** a wrong-direction meta description, blogs linking only to generic pages, and a pillar page with 2 impressions despite 26 inlinks.
- **Service is confirmed** (listed routes; cross-border coordination confirmed).
- **Efficient sequencing:** it shares pages with the already-planned fee-wording fix (C2a/C2b), so both can be sequenced on the same files in separate commits.

The Riyadh ↔ Doha guide (OPP-02) scores one point higher on paper, but it is a new URL, needs official border sources first, and requires the separate corridor-guide approval. Qassim Airport → Riyadh has the strongest demand signal but cannot be built until the service is confirmed.

**Evidence needed before implementing OPP-01:**
1. The GSC **Queries** export for 16 Jul–15 Oct, filtered to Bahrain/causeway terms, with query→page detail. It confirms which page Google shows for which query, so page roles fix cannibalisation rather than guess at it.
2. GSC URL Inspection for `/border-transfers/bahrain-causeway`, `/routes/khobar-to-bahrain-airport`, `/routes/dammam-to-bahrain-airport` and `/routes/bahrain-airport-to-khobar`.
3. Business confirmation of Bahrain-side pickup and drop-off points (Bahrain International Airport, Manama hotels).
4. Approval of the C2a/C2b fee wording (the same pages).
5. Official sources for any causeway, visa or vehicle facts that remain on the pages.

## Verified vs inferred (summary)

| Statement | Status |
|---|---|
| 542/896 live URLs had zero impressions (16 Jul–15 Oct) | Verified (GSC pages list vs inventory) |
| Those URLs are the ones in "Discovered/Crawled – not indexed" | Inferred (counts align; needs the indexing export) |
| Thin pages are less likely to appear | Verified correlation; cause inferred |
| 146 retired hotel URLs in the report; "Page with redirect 150" | Verified overlap; exact composition of the 150 needs the indexing export |
| 6 "Not found (404)" | Not identified — needs the export; do not create replacements |
| 9 "Alternate page with proper canonical tag" | Inferred to be the `?pickup=` / `?category=` variants seen in the crawl; needs export |
| Lead counts per cluster | Verified (approximate text matching) |
| Qassim airport and Abha→Najran demand | Verified enquiries; operations unconfirmed |
| Bahrain cannibalisation | Inferred (needs query→page data) |
| Arabic pages have higher CTR | Verified on a small sample (348 impressions) |
