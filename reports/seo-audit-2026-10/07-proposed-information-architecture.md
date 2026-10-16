# Report 7 — Proposed Information Architecture

Audit date: 16 October 2026. This is a **proposal for review**. No URLs are created, removed or redirected by this audit.

**Principle: keep every existing URL.** The current URL set is clean: 896 URLs, all 200, self-canonical, reciprocal hreflang, no duplicates, no orphans. The problems are in *prominence* (internal links), *depth* (thin or untranslated pages) and *support* (blog → service links), not in the URL structure. Changing URLs would put the existing signals at risk for no evidenced gain.

## 1. Current hierarchy (verified)

```
/                                   (home, EN)        /ar  (home, AR)
├── Services
│   ├── /airport-transfers ── /airport-transfer/{13 airports}       (AR: 4 of 13)
│   ├── /intercity-transfers ─ /routes/{194}                        (AR: 194)
│   ├── /city-transfers ────── /taxi-service/{19 cities}            (AR: 19)
│   ├── /border-transfers ──── /border-transfers/{5 borders}        (AR: 0)
│   ├── /services/hotel-transfers ─ /cities/{5 city hubs}#hotels    (AR: 5)
│   ├── /umrah-taxi-service, /hajj-transport-service, /ziyarat-taxi-service
│   └── /services  (index)
├── Point-to-point  /{city}/{slug}  (61: Jeddah 28, Dammam 14, Makkah 10, Madinah 5, Riyadh 3, AlUla 1)
├── Distance guides /distance/{50}
├── Blog /blog + /blog/{125}  (category filter = ?category=, canonical /blog)
├── /get-quote, /contact, /about, legal, /sitemap
```

The weak point is the **route layer**. Its 194 pages are reachable only through `/intercity-transfers`, `/routes` lists on hubs, and related-route blocks (median 7 inlinks), while sitewide navigation spends ~820 links on each of the 13 airport hubs and 19 city taxi pages.

## 2. Proposed changes (no URL changes)

### 2.1 Region-led route discovery

Add (or reshape) route listings so every route is reachable within two clicks of a hub, grouped by the region where the lead evidence is:

| Hub (existing URL) | Should list prominently |
|---|---|
| `/taxi-service/riyadh` | All Riyadh routes, led by Qassim, Dammam/Khobar, Bahrain, Doha/Qatar border, Kuwait, Dubai/Abu Dhabi, Makkah/Madinah, Jeddah |
| `/taxi-service/buraidah` | Qassim ↔ Riyadh (both directions) + any confirmed Qassim routes (G06) |
| `/taxi-service/dammam`, `/airport-transfer/dammam-airport` | Eastern Province + Bahrain/Qatar/Kuwait routes (the DMM hub already has 22 route links — keep) |
| `/border-transfers/{border}` | All routes for that country in both directions (Qatar, Kuwait, UAE hubs currently have 0 supporting blogs and a median of 18 inlinks) |
| `/intercity-transfers` | A "most requested routes" block driven by lead evidence (Qassim↔Riyadh, Riyadh↔Doha, Riyadh↔Bahrain, Dammam↔Riyadh, Riyadh↔Kuwait) |
| Home | Short "popular routes" strip using the same evidence |

### 2.2 Fill the Arabic layer where demand is proven

- AR airport hubs for Dammam and Madinah first (G05), then the remaining 7.
- AR border hubs (5) after confirming operations (E5).
- AR blogs only where EN posts have impressions (G18).

### 2.3 Cluster model for content

Each commercial "pillar" gets 1–3 supporting guides that link to it **and** to both route directions:

| Pillar | Existing support | Proposed (one guide each, not per direction) |
|---|---|---|
| Qassim ↔ Riyadh | 0 | "Qassim to Riyadh: private car vs SAR train vs bus" |
| Riyadh ↔ Qatar (Doha, Salwa/Abu Samra border) | 0 | "Riyadh to Doha by road: border, documents, timing" |
| Riyadh ↔ Bahrain | 0 (9 Bahrain posts target Dammam/Khobar) | Link existing Causeway posts to the Riyadh pages; one Riyadh-specific section or guide |
| Riyadh ↔ Kuwait | 0 | One guide |
| Riyadh ↔ UAE (Al Batha) | 0 | One guide |
| Dammam airport | 3 | Expand AR hub first; then a DMM arrivals guide only if no existing post covers it |
| JED → Makkah | 4 pages + ≥5 posts | **No new content**; diagnose cannibalisation with GSC (G16) |

### 2.4 What not to build

- Per-hotel pages: correctly retired, keep the 301s.
- Fake city or office pages, or "near me" pages for cities the business does not serve.
- New route pages for pairs without business confirmation (E5) or a demand signal.
- Duplicate airport-arrival blog posts for airports that already have a hub. Expand the hub instead.

## 3. Navigation (proposal)

- Main nav: Airport · Intercity · Cross-border · Umrah & Hajj · City · Get a quote (unchanged URLs). Consider adding a direct "Routes" entry linking `/intercity-transfers`.
- Footer: add a "Popular routes" column (5–8 lead-evidenced routes) in EN and AR.
- Blog sidebar: map the 6 consolidated categories (G23) to their pillar service pages.
