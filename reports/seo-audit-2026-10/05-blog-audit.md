# Report 5 — Blog Audit and Blog-to-Service Mapping

Audit date: 16 October 2026. Sources: Supabase `blogs` table (read-only; 125 published English posts), `data/translations/ar.ts` (Arabic blog counterparts), in-body `href` analysis of every post, and the Search Console export in `docs/search_data` (3 Jun – 6 Aug 2026; see Report 9, E1). The per-post table is in `05-blog-to-service-map.csv`.

## 1. Inventory

| Metric | Value |
|---|---|
| Published English posts | 125 |
| With an Arabic counterpart | 58 (46%) |
| Median length | 1,555 words (min 369, max ~3,900) |
| Posts under 700 words | 15 |
| Posts with FAQs in the database | 125 / 125 (but only 54 emit FAQPage JSON-LD on the live page — see Report 2 §5) |
| Posts with zero in-body links to a commercial page | 8 |
| Posts linking only to generic hubs (`/get-quote`, `/airport-transfers`, `/services` …) and no specific route/airport/city page | 18 |
| Posts with zero links to other blog posts | 20 |
| Posts that are a topic entry in the blog sidebar | 28 |
| Meta descriptions over 160 characters | 17 |
| Meta titles over 60 characters | 6 |
| Duplicate focus keywords | 0 |

Category spread (EN posts / with AR): Travel Guides 23/13, Saudi Arabia Tourism 21/9, Saudi Airport Guides 17/11, Pilgrim Travel Tips 11/2, Saudi Travel Guides 10/2, Border Transfers 9/9, Intercity Transfers 8/7, Transportation for Pilgrims 6/0, Umrah Guides 6/0, Airport Transfers 4/2, plus seven categories with 1–2 posts. **16 categories for 125 posts** — several are near-synonyms ("Travel Guides" vs "Saudi Travel Guides"; "Umrah Guides" vs "Umrah Transport" vs "Transportation for Pilgrims"; "Hajj Guides" vs "Hajj Transport").

## 2. Search evidence for blogs (GSC export, 3 Jun – 6 Aug 2026 only)

Blogs carried most of the site's impressions at useful positions. Highest-impression posts:

| Post | Impressions | Clicks | Avg position |
|---|---|---|---|
| `/blog/miqat-locations-for-umrah` | 292 | 0 | 18.8 |
| `/blog/saudi-arabia-airport-wifi-guide` | 172 | 3 | 12.5 |
| `/blog/uber-vs-careem-vs-private-transfer-saudi-arabia` | 158 | 1 | 10.8 |
| `/blog/saudi-arabia-in-august-weather-crowds-travel-tips` | 148 | 0 | 12.9 |
| `/blog/what-to-do-after-landing-at-jeddah-airport` | 142 | 2 | 14.7 |
| `/blog/jeddah-airport-arrival-guide-umrah` | 139 | 0 | 14.8 |
| `/blog/saudi-arabia-sim-card-guide-tourists` | 114 | 0 | 64.0 |
| `/blog/saudi-arabia-entry-requirements-pilgrims-2026` | 108 | 0 | 7.9 |
| `/blog/complete-guide-to-masjid-al-haram` | 107 | 1 | 11.7 |

Interpretation (bounded by the old data): informational posts rank on page 1–2 far more often than the commercial service pages they support (`/umrah-taxi-service` position 83, `/ziyarat-taxi-service` 82, `/routes/jeddah-to-makkah` 74 in the same export). **This is not evidence of current rankings**; it is the most recent evidence available.

No lead in the `leads` table recorded a blog URL as its most frequent first landing page; the top first landing pages are route pages and `/get-quote` (Report 1). Blog-to-lead attribution cannot be measured further without analytics (Report 9, E8).

## 3. Blog-to-service mapping

### 3.1 Where blog links point (distinct posts linking, specific pages only)

| Commercial page | Posts linking |
|---|---|
| `/umrah-taxi-service` | 38 |
| `/airport-transfer/jeddah-airport` | 29 |
| `/taxi-service/makkah` | 28 |
| `/taxi-service/madinah` | 26 |
| `/taxi-service/jeddah` | 22 |
| `/taxi-service/riyadh` | 19 |
| `/routes/makkah-to-madinah` | 15 |
| `/airport-transfer/riyadh-airport` | 14 |
| `/routes/jeddah-to-makkah` | 8 |
| `/cities/jeddah` | 8 |
| `/taxi-service/dammam` | 5 |
| `/airport-transfer/dammam-airport` | 3 |
| `/border-transfers/bahrain-causeway` | 4 |

### 3.2 Pages with the strongest lead evidence and the weakest blog support

| Page | Lead evidence (Jul–Oct 2026) | Supporting posts |
|---|---|---|
| `/routes/qassim-to-riyadh` (+ AR) | Top first landing page (13 + 3 AR); top pair (9) | **0** |
| `/routes/riyadh-to-doha`, `/routes/doha-to-riyadh`, `/routes/riyadh-to-qatar-border` | 12 first-landing leads combined; Riyadh→Doha 5 pair leads | **0** |
| `/routes/riyadh-to-bahrain` | 4 first-landing; 4 pair leads | **0** (all 9 Bahrain posts target Dammam/Khobar/Causeway) |
| `/routes/riyadh-to-kuwait-city` (+ AR) | 2 AR first-landing | **0** |
| `/routes/riyadh-to-abu-dhabi`, `/routes/dubai-to-riyadh` | 2 + 2 first-landing | **0** |
| `/airport-transfer/dammam-airport` | 6 first-landing (2nd highest) | 3 |
| `/taxi-service/buraidah` | GSC position 9.3, 52 impressions | **0** |

Coverage overall: route pages with ≥1 supporting post 27/194; point transfers 9/61; border hubs 1/5 (Bahrain only).

### 3.3 Over-concentration

Umrah/Makkah/Madinah/JED intent receives the majority of blog links (38 + 29 + 28 + 26 + 15), and 16 posts have "umrah" in the slug. Several posts target near-identical intent — for example `jeddah-airport-arrival-guide-umrah`, `what-to-do-after-landing-at-jeddah-airport`, `jeddah-airport-driver-meeting-point`, `jeddah-airport-terminal-guide-jed` and `vip-transfer-jeddah-airport-to-makkah` all cover the JED arrival → Makkah journey. **Cannibalisation cannot be confirmed without current query-level GSC data (E1)**; it is flagged as a risk, not a finding.

## 4. Quality issues

### 4.1 Thin posts (under 700 words) — 15

Two batches:
- **6–7 Jun 2026 (early posts):** `riyadh-airport-transfer-business-travelers` 679, `jeddah-to-taif-taxi-guide` 584, `riyadh-to-dammam-taxi-guide` 532, `umrah-transport-makkah-madinah-guide` 586, `saudi-to-bahrain-taxi-king-fahd-causeway` 586.
- **11–14 Sep 2026 (airport/route batch):** `jeddah-to-riyadh-transfer-guide` 460, `taif-regional-airport-arrival-guide` 427, `alula-airport-arrival-guide` 487, `yanbu-airport-arrival-guide` 369, `riyadh-to-abha-transfer-guide` 484, `meet-and-greet-airport-service-saudi-arabia` 407, `abha-airport-arrival-guide` 448, `madinah-airport-driver-pickup-guide` 422, `tabuk-regional-airport-arrival-guide` 614, `jeddah-islamic-port-passenger-guide` 541.

The September batch also overlaps directly with the airport hub pages they should support (e.g. `madinah-airport-driver-pickup-guide` vs `/airport-transfer/madinah-airport`).

### 4.2 Posts with no in-body commercial link — 8

`jeddah-to-riyadh-transfer-guide`, `taif-regional-airport-arrival-guide`, `alula-airport-arrival-guide`, `yanbu-airport-arrival-guide`, `riyadh-to-abha-transfer-guide`, `meet-and-greet-airport-service-saudi-arabia`, `abha-airport-arrival-guide`, `madinah-airport-driver-pickup-guide`. All belong to the September batch: each names a route or airport the site has a page for, and none links to it in the body.

### 4.3 Posts linking only to generic hubs — 18

Examples: `taxi-cost-saudi-arabia-price-guide`, `king-fahd-causeway-guide`, `travel-documents-bahrain-to-saudi-arabia`, `best-vehicle-for-cross-border-travel`, `saudi-airport-pickup-guide`, `what-happens-if-flight-to-saudi-arabia-delayed` (full list in the CSV, flag `generic-links-only`). The causeway and Bahrain document posts are natural feeders for `/border-transfers/bahrain-causeway` and the Bahrain route pages, but they don't link to them.

### 4.4 Time-sensitive posts

| Post | Status on 16 Oct 2026 | Issue |
|---|---|---|
| `ramadan-2026-makkah-transport-guide` | Ramadan 2026 has passed | Past-dated title |
| `saudi-national-day-2026-best-cities` | 23 Sep 2026 has passed | Past-dated title |
| `gulf-cup-27-jeddah-transfer` | Event status needs checking (per earlier 2026 coverage) | Past/changed event |
| `wwe-crown-jewel-riyadh-transfer`, `black-hat-mea-riyadh-transfer`, `wrc-rally-saudi-arabia-transfer`, `f1h2o-jeddah-grand-prix-transfer`, `saudi-arabian-grand-prix-2027-jeddah-transfer`, `jeddah-season-2026-events-attractions-guide`, `alula-skies-festival-2026-travel-guide` | Upcoming or in progress | Recheck against official organisers given the regional disruption (Report 9, E9) |
| `riyadh-airport-closure-october-2026`, `dammam-airport-attack-october-2026` | Live advisories (last updated 14 Oct and 12 Oct) | Need a dated refresh or an "as of" banner as the situation changes |
| `best-time-to-perform-umrah-2026`, `cost-of-umrah-trip-2026`, `saudi-tourist-visa-2026-guide`, `new-saudi-umrah-visa-rules-2026`, `alula-travel-guide-2026`, `neom-travel-guide-2026` | Year in title | Will need a 2027 refresh or a year-neutral slug strategy by Q1 2027 |

### 4.5 Metadata

17 meta descriptions are over 160 characters (longest: `hajj-transport-guide-makkah-mina-arafat` 180, `child-car-seat-law-saudi-arabia` 178) and 6 meta titles are over 60 (longest: `saudi-arabia-in-august-weather-crowds-travel-tips` 70). This is low priority: Google rewrites snippets freely, and truncation is a CTR question only.

### 4.6 Arabic coverage

67 of 125 posts have no Arabic counterpart, including all 6 "Umrah Guides" posts, all 6 "Transportation for Pilgrims" posts, and 9 of 11 "Pilgrim Travel Tips". Given that the AR route pages for Qassim, Jeddah and Riyadh produced first-landing leads, Arabic pilgrim and intercity content is a plausible but unproven opportunity. Prioritise only after GSC shows Arabic query impressions (E1).

## 5. Posts doing their job (keep, light maintenance only)

- `miqat-locations-for-umrah`, `saudi-arabia-airport-wifi-guide`, `uber-vs-careem-vs-private-transfer-saudi-arabia`, `what-to-do-after-landing-at-jeddah-airport`, `jeddah-airport-arrival-guide-umrah`, `saudi-arabia-entry-requirements-pilgrims-2026`, `complete-guide-to-masjid-al-haram`, `how-much-cash-to-carry-in-saudi-arabia`, `umrah-with-children`, `first-time-visiting-madinah-guide`: page 1–2 positions in the last available export.
- Border Transfers cluster (9 posts, all with Arabic): coherent, though Bahrain-only.
- Recent long-form posts (Oct 2026 advisories, AlUla Skies, Dammam→Jubail) are complete and bilingual.

## 6. Recommended blog actions (for approval — nothing has been changed)

1. **Link fixes before new content.** Add in-body links from the 8 zero-link posts and the 18 generic-only posts to their matching route, airport or border page. This has the lowest effort and no new URLs.
2. **Expand or merge the 15 thin posts.** Merge an airport-arrival post into its airport hub where they overlap, or expand it with route-specific facts. Decide per post after current GSC data (E1).
3. **Write supporting content for proven lead routes** that have no blog support: Qassim/Buraidah↔Riyadh, Riyadh↔Doha/Qatar border, Riyadh↔Bahrain, Riyadh↔Kuwait, Riyadh↔UAE. One post per corridor, not per direction.
4. **Consolidate the categories** from 16 into about 6 (Airport, Intercity, Cross-border, Umrah & Hajj, Travel tips, Events & advisories). Category views are query-string URLs (`/blog?category=…`; 16 were discovered in the crawl), and they canonicalise to `/blog`, so this is a navigation and internal-linking change, not a URL change.
5. **Handle time-sensitive posts.** Retitle or update the past-dated posts, recheck the event posts, and set a review date for live advisories.
