# Report 9 — Missing Evidence and Access

Audit date: 16 October 2026. This report lists data the audit could not use, why it matters, and what would close each gap. Nothing here was inferred or estimated in its absence.

## 1. Data that was available and used

| Source | What it covers | Limitation |
|---|---|---|
| Repository (`main` @ `9098f18`) | Routing, templates, data files, metadata, schema, sitemap, robots, proxy, lead APIs | None for code questions |
| Live site (read-only crawl, 16 Oct 2026) | HTTP status, titles, descriptions, H1, canonicals, hreflang, robots, JSON-LD, links, CTAs for every discovered URL | Single vantage point (Pakistan) for timings |
| Supabase `blogs` table (read-only) | 125 published English posts | — |
| Supabase `leads` table (read-only, aggregated) | 143 leads, Jul–Oct 2026, with landing page, referrer, UTM | Personal data not exported; aggregates only |
| Supabase `whatsapp_clicks` (read-only, aggregated) | 148 WhatsApp clicks, Aug–Oct 2026, with source page | Records a click, not a conversation or booking |
| `docs/search_data/*.csv` (Search Console export in repo) | Pages, queries, countries, devices — "last 3 months" | **Covers 3 Jun – 6 Aug 2026** (per `Chart.csv`), before the Cloudflare migration and the 1102 fixes; 74 clicks / 6,982 impressions total |

## 2. Missing evidence (needed to raise confidence)

| # | Missing item | Why it matters | Exact request |
|---|---|---|---|
| E1 | **Current Google Search Console data** (Performance by page + query, last 3 months and last 28 days; Page indexing report; Sitemaps report) | Indexing status, which pages Google actually shows, cannibalisation, and whether the Oct 2026 fixes changed visibility. The repo export (3 Jun – 6 Aug 2026) predates the migration. | Export Performance (Pages, Queries, Countries, Devices) and Page indexing "Why pages aren't indexed" CSVs; or grant read access |
| E2 | **Bing Webmaster Tools** data | Bing is the largest identified search referrer in the lead data (12 leads) — larger than Google (4) | Export Search Performance + URL inspection summary |
| E3 | **Field Core Web Vitals (CrUX)** | PageSpeed Insights API rate-limited the audit (HTTP 429); only lab timings were taken | Run PSI for 5 representative URLs or provide a CrUX API key |
| E4 | **Lead outcomes** (which leads became bookings, revenue by route) | 135 of 143 leads are still in status "New", so the `leads` table can't separate real bookings from enquiries | Update lead statuses, or share a booking export with route and value |
| E5 | **Operational route availability** | The site publishes 47 border and international route pages (Bahrain, Kuwait, UAE, Qatar, Jordan). The audit cannot confirm the business actually operates each one, holds cross-border vehicle/driver permits, or serves both directions | A list of routes the business confirms it operates, with any seasonal or permit limits |
| E6 | **Confirmation of service claims** | "24/7 availability/support" appears site-wide (home hero, trust strip, trust badges, About), "Customer rating x/5" is shown from first-party testimonials, and the terms page doesn't confirm 24/7 | Confirm whether 24/7 support is real; provide a verifiable review source if a rating is to be shown |
| E7 | **Why no leads were recorded 1–5 October 2026** | The `leads` table has 0 rows for 1–5 Oct, then 3 on 6 Oct. This coincides with the 1102 / email-configuration period but the cause is unproven | Cloudflare Worker logs or Analytics for /api/leads for 1–6 Oct |
| E8 | **Web analytics** | No analytics script is installed (no GA4, GTM, Plausible, Clarity); only first-party lead and WhatsApp-click logging exists, so landing-page sessions and conversion rates cannot be calculated | Decide on an analytics tool, or accept first-party logging as the only measure |
| E9 | **Status of upcoming events** covered by blogs (WWE Crown Jewel 7 Nov, WRC Rally 11–14 Nov, F1H2O 26–28 Nov, Black Hat MEA, Saudi Arabian GP 2027) | Regional disruption has cancelled several 2026 events (e.g. MDLBEAST Soundstorm, F1 2026) | Recheck each organiser's official channel before relying on these posts |
| E11 | **Cause of the 16 Oct transient 503s / empty 200s** | During the audit crawl (14:16–14:20 PKT), 241 requests returned 503 and 9 returned 200 with an empty body, only on `/blog/*` and `/ar/*`; all recovered within minutes and could not be reproduced (Report 2 §2.1). If Googlebot hits the same condition, crawl rate drops and blank pages may be stored | Cloudflare Workers → Logs / Metrics for that window (error codes, CPU/memory), and GSC → Settings → Crawl stats (host status, 5xx share) |
| E12 | **Rendering impact of robots.txt `Disallow: /_next/`** | Confirms how Google sees pages without CSS/images (Report 2 §2.2) | GSC URL Inspection → "Test live URL" → screenshot + "Page resources" for `/routes/qassim-to-riyadh` and `/` |
| E13 | **Whether a Saudi (+966) contact number, physical base or Google Business Profile exists** | The only published number is +92 (Pakistan); `sameAs` is empty | Business confirmation |
| E10 | **Search demand data** (keyword volumes) | The audit uses only observed Search Console queries; it does not estimate volume | A keyword-research export (e.g. Ahrefs/Semrush) if volume is to drive prioritisation |
