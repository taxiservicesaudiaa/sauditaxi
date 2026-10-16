# Report 4 — Service and Route Coverage Matrix

Audit date: 16 October 2026. Sources: repository data files (route, airport, border, city and point-transfer generators), the live crawl (status and indexability — see Report 3), the Supabase `leads` table (143 leads, Jul–Oct 2026, aggregated by pickup/drop-off city mentions and first landing page), and the in-body links of the 125 English blog posts.

**Reading the tables**
- "Leads" = number of leads whose pickup *and* drop-off text matched that pair. City matching is approximate (free-text fields); 34 leads mention an airport without a parseable city. This is directional evidence, not search demand.
- "AR" = an Arabic counterpart exists and is paired by hreflang.
- "Blogs" = English blog posts linking to the page in their body text.
- "Ops" = whether the business has confirmed it operates the route. **No route has been operationally confirmed for this audit** (see Report 9, E5); cross-border rows are marked "Confirm".

## Summary

| Family | Pages (EN) | AR counterparts | Pages with ≥1 supporting blog link |
|---|---|---|---|
| Route pages (`/routes/{slug}`) | 194 (89 intercity, 48 airport, 47 border/international, 10 religious) | 194 / 194 | 27 / 194 |
| Airport hubs (`/airport-transfer/{airport}`) | 13 | **4 / 13** | 8 / 13 |
| Border hubs (`/border-transfers/{border}`) | 5 | 0 dedicated (AR covers via route pages) | 1 / 5 |
| City taxi pages (`/taxi-service/{city}`) | 19 | 19 / 19 | 11 / 19 |
| City airport/hotel hubs (`/cities/{city}`) | 5 | 5 / 5 | 3 / 5 |
| Point-to-point transfers (`/{city}/{slug}`) | 61 (Jeddah 28, Dammam 14, Makkah 10, Madinah 5, Riyadh 3, AlUla 1) | 61 / 61 | 9 / 61 |
| Core service pages | 8 (`/airport-transfers`, `/city-transfers`, `/intercity-transfers`, `/border-transfers`, `/umrah-taxi-service`, `/hajj-transport-service`, `/ziyarat-taxi-service`, `/services/hotel-transfers`) | 8 / 8 (as `serviceV2`) | — |

28 of the 194 route pages have no reverse-direction page. Every route page has route-specific sections and FAQs in the data (0 routes with neither).

## A. Domestic priority routes (business-signal destinations)

| Pair | EN page(s) | Reverse | AR | Leads (pair) | First-landing leads | Blogs | Notes |
|---|---|---|---|---|---|---|---|
| Qassim → Riyadh | `/routes/qassim-to-riyadh` | `/routes/riyadh-to-qassim` | Yes | **9** (top pair) | **13** (top landing page) + 3 AR | **0** | Highest-evidence route on the site; no supporting blog, no Qassim airport page, Qassim connects only to Riyadh |
| Riyadh ↔ Jeddah | `riyadh-to-jeddah`, `jeddah-to-riyadh`, `jeddah-airport-to-riyadh`, `riyadh-airport-to-jeddah` | Yes | Yes | 2 | 3 (AR jeddah-to-riyadh) | 1 (`jeddah-to-riyadh-transfer-guide`, 460 words, no in-body service links) | Covered |
| Riyadh ↔ Dammam / Khobar | `riyadh-to-dammam`, `dammam-to-riyadh`, `riyadh-to-khobar`, `khobar-to-riyadh`, `dammam-airport-to-riyadh` | Yes | Yes | — | 4 (dammam-to-riyadh) | 2 | Upgraded 6 Oct 2026; no `riyadh-airport-to-dammam` |
| Riyadh ↔ Makkah / Madinah | `riyadh-to-makkah`, `makkah-to-riyadh`, `riyadh-to-madinah`, `madinah-to-riyadh`, `riyadh-airport-to-makkah/madinah`, `madinah-airport-to-riyadh` | Yes | Yes | — | 3 (AR madinah-airport-to-riyadh) | 0 | Covered |
| Jeddah/JED ↔ Makkah | `jeddah-to-makkah`, `makkah-to-jeddah`, `makkah-to-jeddah-airport`, point transfer `jeddah-airport-to-makkah-umrah` | Yes | Yes | 2 | — | 8 | Four pages with overlapping intent (see Report 6, cannibalisation) |
| Makkah ↔ Madinah | `makkah-to-madinah`, `madinah-to-makkah` | Yes | Yes | — | — | 15 | Heavily supported |
| Jeddah ↔ Madinah | `jeddah-to-madinah`, `madinah-to-jeddah`, `jeddah-airport-to-madinah`, `madinah-to-jeddah-airport` | Yes | Yes | — | — | 3 | Two route + two airport pages for the same corridor |
| Dammam ↔ Jubail / DMM ↔ Jubail | `dammam-to-jubail`, `jubail-to-dammam`, `dammam-airport-to-jubail`, `jubail-to-dammam-airport` | Yes | Yes | — | — | 1 (published 15 Oct) | — |
| Qassim ↔ Makkah / Madinah / Jeddah / Dammam | **None** | — | — | — | — | — | Gap — only if the business serves it (Ops: confirm) |
| Qassim → Riyadh Airport (RUH) | **None** | — | — | — | — | — | Plausible high-intent need given Qassim lead volume; confirm demand first |

## B. Airport coverage

| Airport | Hub page | AR hub | Route pages touching airport | Point transfers | Leads (first landing) | Blogs |
|---|---|---|---|---|---|---|
| Riyadh — King Khalid (RUH) | `/airport-transfer/riyadh-airport` | Yes | 5 (to Riyadh, Jeddah, Makkah, Madinah; from Riyadh) | 2 (KAFD, RICEC) | 2 (+2 ChatGPT) | 14 |
| Jeddah — King Abdulaziz (JED) | `/airport-transfer/jeddah-airport` | Yes | 10 | 14+ (Jeddah city points) | — | 29 |
| Madinah — Prince Mohammad (MED) | `/airport-transfer/madinah-airport` | **No** | 3 | 0 | 3 (AR madinah-airport-to-riyadh) | 4 |
| Dammam — King Fahd (DMM) | `/airport-transfer/dammam-airport` | **No** | 22 (largest set) | 14 (Dammam points) | **6** (+5 ChatGPT) — 2nd-highest landing page | 3 |
| AlUla (ULH) | `/airport-transfer/alula-airport` | **No** | 7 | 1 | — | 3 |
| Taif (TIF) | `/airport-transfer/taif-airport` | **No** | 2 | 0 | — | 1 |
| Abha (AHB) | `/airport-transfer/abha-airport` | **No** | 2 | 0 | 1 lead source | 1 |
| Tabuk (TUU) | `/airport-transfer/tabuk-airport` | **No** | **0** | 0 | — | 1 |
| Yanbu (YNB) | `/airport-transfer/yanbu-airport` | **No** | **0** | 0 | — | 1 |
| Jazan (GIZ) | `/airport-transfer/jazan-airport` | **No** | **0** | 0 | — | 0 |
| Hail (HAS) | `/airport-transfer/hail-airport` | **No** | **0** | 0 | — | 0 |
| Red Sea International (RSI) | `/airport-transfer/red-sea-airport` | Yes | 2 | 0 | — | 0 |
| NEOM Bay (NUM) | `/airport-transfer/neom-bay-airport` | Yes | 0 | 0 | — | 0 |
| **Qassim — Prince Naif (ELQ)** | **None** | — | — | — | — | — |
| **Al-Ahsa (HOF)** | **None** | — | — | — | — | — |

Verified: 9 of 13 airport hubs have no Arabic counterpart, including Dammam (2nd-highest landing page for leads) and Madinah. Qassim, the strongest lead region, has no airport page at all.

## C. Hotel coverage

| Item | Coverage |
|---|---|
| Hotel-transfer service page | `/services/hotel-transfers` (+ AR) |
| City hotel hubs | `/cities/{city}` for 5 cities (hotel tables + airport facts) |
| Individual hotel pages | 174 EN + 41 AR were consolidated into city hubs by 301 (proxy.ts) — **correctly avoids thin per-hotel pages** |
| Point transfers "hotels to X" | Jeddah and Dammam (e.g. `hotels-to-al-balad`, `dammam-airport-to-hotels`); Makkah `makkah-hotel-to-haram-transfer` |
| Hotel ↔ hotel, hotel ↔ religious sites in Madinah | Not covered as distinct pages; Madinah has only 5 point transfers (Quba, Uhud, Qiblatain, Seven Mosques, train station) |

## D. Cross-border coverage (Ops: confirm every row)

| Country | Saudi → country | Country → Saudi | Border hub | Leads (pairs) | First-landing leads | Blogs |
|---|---|---|---|---|---|---|
| Bahrain | `riyadh-to-bahrain`, `dammam-to-bahrain`, `dammam-to-bahrain-airport`, `dammam-airport-to-bahrain`, `khobar-to-bahrain`, `khobar-to-bahrain-airport` | `bahrain-to-riyadh`, `bahrain-airport-to-dammam`, `manama-to-dammam`, `bahrain-to-khobar`, `bahrain-airport-to-khobar` | `/border-transfers/bahrain-causeway` | Riyadh→Bahrain 4, Dammam→Bahrain 3, Khobar→Bahrain 2 | riyadh-to-bahrain 4; khobar-to-bahrain-airport 2 | 9 Border Transfers posts — all Bahrain/Causeway; **0 link to `riyadh-to-bahrain`** |
| Qatar | `riyadh-to-doha`, `riyadh-to-qatar-border`, `dammam-to-qatar-border`, `dammam-airport-to-doha`, `al-khobar-to-doha` | `doha-to-riyadh`, `doha-to-dammam-airport`, `doha-to-al-khobar` | `/border-transfers/qatar-border` | Riyadh→Doha 5, Doha→Riyadh 3 | doha-to-riyadh 5, riyadh-to-doha 4, riyadh-to-qatar-border 3 (+3 ChatGPT) | **0** |
| Kuwait | `riyadh-to-kuwait-city`, `dammam-to-kuwait-city`, `dammam-to-kuwait-airport` | `kuwait-city-to-riyadh`, `kuwait-city-to-dammam`, `kuwait-airport-to-dammam` | `/border-transfers/kuwait-border` | 3–5 mentions | AR riyadh-to-kuwait 2 | **0** |
| UAE | `riyadh-to-dubai`, `riyadh-to-abu-dhabi`, `jeddah-to-dubai`, `dammam-to-dubai`, `riyadh-to-al-batha-border` | `dubai-to-riyadh`, `abu-dhabi-to-riyadh`, `dubai-to-jeddah`, `dubai-to-dammam` | `/border-transfers/uae-border` | Riyadh→Dubai 2 | riyadh-to-abu-dhabi 2, dubai-to-riyadh 2 | **0** |
| Jordan | `amman-to-tabuk`, `amman-to-alula`, `tabuk-to-amman`, `alula-to-amman` + others | — | `/border-transfers/jordan-border` | — | amman-to-tabuk 2 | 0 |

Gaps worth confirming (not automatically recommended): Doha → Dammam city; Abu Dhabi → Dammam; Kuwait → Khobar. The cross-border templates state the business "handles" vehicle insurance and documentation (`data/gcc-route-content.ts`, `data/gcc-to-saudi-route-content.ts`) — **operational claims that need business confirmation** before any expansion.

## E. Religious transportation

| Intent | Page(s) | AR | Blogs linking | Assessment |
|---|---|---|---|---|
| Umrah transport (service) | `/umrah-taxi-service` | Yes | **38** | Strongly supported; carries many distinct intents (airport, intercity, hotel, Ziyarat) |
| Hajj transport (service) | `/hajj-transport-service` | Yes | 3 | Thin support; seasonal (Hajj 2027 ≈ May 2027) |
| Ziyarat (service) | `/ziyarat-taxi-service` | Yes | 3 | Search Console showed 141 impressions at position ~82 (Aug export) — weak |
| Makkah Ziyarat itineraries | `makkah-ziyarat-tour`, `makkah-to-cave-of-hira`, `makkah-to-jabal-thawr`, `makkah-historical-sites-tour`, `makkah-to-mina/muzdalifah/arafat` | Yes | few | Covered |
| Madinah Ziyarat itineraries | `madinah-to-quba-mosque`, `-mount-uhud`, `-qiblatain-mosque`, `-seven-mosques`, train station | Yes | few | Covered; no combined Madinah Ziyarat tour page (Makkah has one) |
| Airport → religious city | JED→Makkah (4 pages), JED→Madinah (2), RUH→Makkah/Madinah, TIF→Makkah/Madinah, MED→Madinah | Yes | 8–15 | Over-covered for JED→Makkah |
| Intercity religious | Makkah↔Madinah, Jeddah↔Madinah, Riyadh↔Makkah/Madinah | Yes | 15 | Covered |
| Group/family religious | Blog posts (umrah-with-children, elderly) | partial | — | No dedicated group/family service page (cluster topic #40 open) |

## F. Business, events and tourism

| Intent | Page(s) | Assessment |
|---|---|---|
| Corporate / executive | Jeddah only: `/jeddah/business-transfers-jeddah`, `/jeddah/executive-car-service-jeddah`, `/jeddah/private-chauffeur-service-jeddah`. Riyadh: point transfers to KAFD and RICEC exhibition centre + blog `riyadh-airport-transfer-business-travelers` | No national business-travel service page and no Riyadh business page — although Riyadh is the most-mentioned city in leads (55). `/services/business-taxi` referenced in the cluster plan does not exist |
| Events | Blog event guides: WWE Crown Jewel, Black Hat MEA, Gulf Cup 27 (past), WRC Rally, F1H2O, Saudi Arabian GP 2027, AlUla Skies | Event coverage is blog-only; status of Nov events needs recheck (Report 9, E9) |
| Private tours / day trips | Jeddah: `jeddah-city-tour`, `half-day-jeddah-tour`, `full-day-jeddah-tour`, `hourly-chauffeur-jeddah`. Makkah: `makkah-ziyarat-tour`, `makkah-historical-sites-tour`. Riyadh: `riyadh-to-diriyah-transfers` + blog `best-day-trips-from-riyadh-private-driver` | Tour/hourly layer exists for Jeddah only; none for Riyadh, Madinah, AlUla or the Eastern Province |
| Multi-stop itineraries | Not covered as a service | Speculative — requires business approval |
