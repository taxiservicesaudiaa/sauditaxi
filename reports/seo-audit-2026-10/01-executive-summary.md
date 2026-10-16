# Report 1 — Executive Summary

**Saudi Private Transfers — SEO, content and conversion audit.** Audit date: 16 October 2026. Read-only: nothing on the site, the database or the deployment was changed (Report 10).

## The short version

The site is technically clean at the URL level: 896 live URLs, all 200, self-canonical, with reciprocal EN/AR hreflang and no duplicate titles or orphans. It already generates real leads (143 from July to mid-October 2026). The problems are elsewhere:

1. **What Google may be prevented from seeing.** robots.txt blocks all CSS, JS and images (`/_next/`).
2. **Instability under load.** 20% of requests to blog and Arabic pages failed briefly during the audit crawl.
3. **Mismatch between where leads come from and where the site puts its weight.** The best lead page has 5 internal links and no supporting content, while Umrah/Jeddah topics receive most of the blog effort.
4. **Trust and conversion facts.** Unconfirmed 24/7 and rating claims, a Pakistan contact number, and no published prices.

## Reports

| # | File | Contents |
|---|---|---|
| 1 | `01-executive-summary.md` | This summary |
| 2 | `02-repository-and-technical-seo.md` | Architecture, crawl/index, international, on-page, schema, performance, security, AEO/GEO, local/entity, conversion |
| 3 | `03-url-inventory.csv` | 1,111 rows: 896 live URLs + 215 retired hotel redirects, with source, status, SEO fields, inlinks, leads, WhatsApp clicks, GSC and audit status |
| 4 | `04-service-and-route-coverage-matrix.md` | Domestic, airport, hotel, cross-border, religious, business, events, tourism |
| 5 | `05-blog-audit.md` + `05-blog-to-service-map.csv` | 125 posts: quality, links, time-sensitivity, mapping to services |
| 6 | `06-gap-register.md` | 25 gaps (G01–G25) with priority, evidence, confidence, effort; competitor benchmark; search evidence |
| 7 | `07-proposed-information-architecture.md` | Keep all URLs; restructure prominence and clusters |
| 8 | `08-roadmap.md` | Phased plan (evidence → prominence → coverage → depth) |
| 9 | `09-missing-evidence-and-access.md` | E1–E13 evidence requests |
| 10 | `10-validation-and-change-log.md` | Method, validation, corrections, no-change confirmation |

## Key numbers

| Measure | Value | Source |
|---|---|---|
| Live indexable URLs | 896 (489 EN, 407 AR); sitemap 895 | Code + crawl |
| Retired (301) hotel pages | 215 | `proxy.ts`, verified sample |
| Leads, Jul – 16 Oct 2026 | 143 (Jul 12, Aug 24, Sep 28, Oct 79) | `leads` table |
| Largest lead source | ChatGPT, 47 (33%); Bing 12; Google 4 | `first_utm_source` / referrer |
| Top first landing page | `/routes/qassim-to-riyadh`: 13 EN + 3 AR | `leads` |
| Lead statuses | 135 of 143 still "New" | `leads` |
| GSC (3 Jun – 6 Aug 2026 only) | 74 clicks, 6,982 impressions | Repo export |
| Blog posts | 125 EN, 58 with AR; 15 under 700 words; 8 with no service link | Supabase |

## Top priorities

| ID | Priority | Item |
|---|---|---|
| G01 | P0 | Remove `/_next/` from robots.txt disallow (one line) |
| G02 | P0 | Investigate transient 503s / blank pages on blog and Arabic URLs (needs Workers logs) |
| G03 | P0 | Confirm or correct the 24/7, rating and cross-border documentation claims |
| G04 | P1 | Internal links to the lead-proven routes (Qassim↔Riyadh, Riyadh↔Doha/Bahrain/Kuwait/UAE, Dammam↔Riyadh) |
| G05 | P1 | Arabic airport hubs, starting with Dammam and Madinah |
| G07–G08 | P1 | Corridor guides for lead routes; fix blog → service links |
| G09–G10 | P1 | Price, luggage and cancellation facts; Saudi contact and entity signals (business decisions) |
| G11 | P1 | Measurement: analytics + lead statuses |

**Next step:** review, then approve a separate implementation plan. No changes will be made before then.
