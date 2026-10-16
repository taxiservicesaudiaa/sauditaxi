# Report 8 — Roadmap

Audit date: 16 October 2026. Sequencing assumes approval of a separate implementation plan. Nothing here has been started. Gap IDs refer to Report 6.

## Phase 0 — Evidence and quick, low-risk fixes (week 1)

| Step | Gap | Owner | Depends on |
|---|---|---|---|
| Export current GSC (performance, page indexing, crawl stats, URL Inspection of 2 URLs) and Bing Webmaster data | E1, E2, E12 | Business | — |
| Pull Cloudflare Workers logs for 16 Oct 14:15–14:21 PKT and 1–6 Oct | G02, E7, E11 | Business / dev | — |
| Confirm service claims (24/7, rating, cross-border documentation, routes operated, Saudi contact options) | G03, G10, E5, E6, E13 | Business | — |
| Remove `/_next/` from robots.txt disallow; deploy; request indexing of top pages | G01 | Dev | Approval |
| Add `public/_headers` immutable caching for `/_next/static/*`; basic security headers | G12, G19 | Dev | Approval |

## Phase 1 — Prominence for proven pages (weeks 1–3)

| Step | Gap |
|---|---|
| Internal links to Qassim↔Riyadh and the other lead routes from home, `/intercity-transfers`, Riyadh/Buraidah/Dammam hubs, border hubs | G04 |
| Contextual links from 26 blog posts (8 zero-link + 18 generic-only) to their specific service pages | G08 |
| Correct or remove unconfirmed claims sitewide | G03 |
| Update the two live advisories and the 3 past-dated posts; re-verify event posts | G15 |
| Start lead-status hygiene; choose analytics | G11 |

## Phase 2 — Coverage where demand is proven (weeks 3–8)

| Step | Gap |
|---|---|
| Arabic Dammam and Madinah airport hubs, then remaining AR airport hubs | G05 |
| Corridor guides: Qassim↔Riyadh, Riyadh↔Doha, Riyadh↔Kuwait, Riyadh↔UAE (EN + AR) | G07 |
| Qassim expansion (ELQ airport hub, Qassim↔RUH), only for routes the business confirms | G06 |
| Pricing, luggage and cancellation facts on route pages, if the business approves publishing them | G09 |
| Saudi contact / `sameAs` entity improvements | G10 |

## Phase 3 — Depth and consolidation, after GSC data (weeks 8–12)

| Step | Gap |
|---|---|
| Diagnose JED→Makkah and Jeddah↔Madinah cannibalisation from query→page data; consolidate if confirmed | G16 |
| Expand or merge the 15 thin blogs and the 39 thin route pages that show impressions | G13, G14 |
| Riyadh business/hourly page if offered | G17 |
| Arabic blog translations prioritised by EN impressions | G18 |

## Phase 4 — Hygiene (ongoing)

G20 schema hygiene, G21 `x-default`, G22 metadata length, G23 blog taxonomy, G24 click-to-call, G25 `llms.txt`.

## Measurement

Without analytics, measure every phase with:
- GSC clicks, impressions and position per page (28-day windows)
- `leads.first_landing_page` and `whatsapp_clicks.source_page` counts per page (as in `03-url-inventory.csv`)
- lead → booking status, once statuses are maintained

Re-run the crawl (same read-only script) after each deploy that touches templates or robots.
