# 68 — Hofuf route corrections and related claim cleanup (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment. Arabic was not edited. No URL was created, deleted, redirected or noindexed. The Hofuf city page was not rebuilt; only its two DMM distance mentions were aligned.

**Preserved:** the uncommitted work from reports 61–67.

## 1. Files changed

| File | Change |
|---|---|
| `data/routes.ts` | `hofuf-to-riyadh`: figures and claims. `taif-to-jeddah`: one FAQ answer (see section 5) |
| `data/dammam-routes.ts` | `hofuf-to-dammam`: claims only. `hofuf-to-dammam-airport`: figures and claims |
| `data/city-airport-route-content.ts` | `hofuf-to-dammam-airport`: figures |
| `data/city-guides.ts` | `al-ahsa` entry: claims |
| `data/hofuf-city-page.ts` | DMM distance "170–190 km" → "170–195 km" (×2) |
| `reports/…/68-hofuf-routes-and-claims.md` | New |

## 2. Route figures (OSRM and Valhalla, 25 Nov 2026)

Endpoints: central Hofuf 25.3797, 49.5865 (by Qasr Ibrahim); central Riyadh 24.7136, 46.6753; King Fahd International 26.4673, 49.7988 and terminal 26.4712, 49.7979 (Nominatim).

| Route | OSRM | Valhalla | Before | After |
|---|---|---|---|---|
| Hofuf → Riyadh | 326 km · 3.73 h | 326 km · 3.72 h | ~330 km · 3 h 15 | **325–330 km · 3.5–4 hours** |
| Hofuf → Dammam Airport | 168–169 km · 1.93 h | 193 km · 2.04–2.05 h | 155 km · 1 h 40 | **170–195 km · around 2 hours** |
| Hofuf → Dammam (report 67 check) | 151 km · 1.8 h | 178 km · 1.95 h | 160 km · 1 h 45 | Unchanged; within the verified range |

The engines take different roads to the coast, which explains the distance spread.

## 3. Pages and cards updated

**Built-page diff vs the report-67 build: 9 pages changed, 0 added or removed.**

| Page | What changed |
|---|---|
| `routes/hofuf-to-riyadh` | Meta, JSON-LD and body: figures (meta, about, overview, three FAQs), the pricing section and FAQs |
| `routes/hofuf-to-dammam-airport` | Meta, JSON-LD and body: figures in the record and the airport-route content (overview line and drive-time FAQ) |
| `routes/hofuf-to-dammam` | Meta, JSON-LD and body: claims |
| `taxi-service/al-ahsa` | JSON-LD and body: claims |
| `taxi-service/hofuf` | Body: the "Main coastal route" label from report 67 is now build-verified, plus the DMM "170–195 km" |
| `cities/riyadh`, `routes/riyadh-to-hofuf` | Cards showing Hofuf → Riyadh |
| `cities/dammam` | Card showing Hofuf → DMM |
| `routes/taif-to-jeddah` | FAQ fix (section 5) |

**Old-figure scan of all 494 English pages** ("3 hours 15", "three hours fifteen", "155 km", "1 hour 40", "~330 km" attached to Hofuf → Riyadh or Hofuf → DMM): **0 matches.**

## 4. Unsupported claims removed

**`hofuf-to-riyadh`:**
- "one vehicle, one fixed price"
- "English-speaking driver… fixed price" (meta)
- "No toll roads apply on this route or anywhere in Saudi Arabia. Your fixed price is fully inclusive". The section is now "Your quotation".
- "tracking your booking so the pickup adjusts if your flight schedule shifts"
- "same fixed-price, flight-tracked service standard"
- "We confirm… fixed price… operate 24/7, and require no deposit… fixed-price quote"
- FAQ "we track your departure and adjust the pickup time automatically"
- FAQ "Is the fare fixed… no meter, no surge, and no toll charges", now "What does the quotation cover?"
- FAQ "same fixed-price, tracked service"
- FAQ "our drivers cover this route at all hours", now an early or evening departure on request, availability confirmed

**`hofuf-to-dammam`:**
- "with a fixed price agreed before you travel" (about and meta)
- FAQ "Is the fare fixed…", now "What does the quotation cover?"
- "your fixed price… never changes"
- FAQ "available 24/7 with the same fixed-price, door-to-door standard at any hour"

**`hofuf-to-dammam-airport`:**
- "fixed price agreed before you travel"
- note "Fixed fare with no surge pricing"
- meta "Professional driver, flight tracking, fixed price, 24/7 availability"
- FAQ "Is the fare fixed…"

**`al-ahsa` (city guide; renders on `/taxi-service/al-ahsa`):**
- "We track your flight" (section and FAQ). Replaced with HOF ≈17–20 km from central Hofuf and pickup confirmed individually.
- "fixed price agreed before you travel" (section and two FAQs)
- "Places our drivers regularly serve"
- "once you confirm it we schedule your driver"
- Causeway FAQ: now a road transfer only, with documents, entry and border formalities the traveller's responsibility

**Built pages:** 0 matches for fixed price, fixed fare, flight tracking, track your, 24/7, all hours, "regularly serve" or "schedule your driver" on all five pages.

**FAQ parity:**

| Page | FAQs matching structured data |
|---|---|
| `hofuf-to-riyadh` | 12/12 |
| `hofuf-to-dammam` | 8/8 |
| `hofuf-to-dammam-airport` | 2/2 |
| `al-ahsa` | 8/8 |
| `hofuf` | 10/10 |

## 5. Raw link markup in FAQ answers (found during QA)

The shared route and city templates print FAQ answers as plain text. An answer containing `<a href=…>` therefore shows the markup literally to visitors, for example "See our &lt;a href='/routes/…'&gt;…".

**Fixed in this task (pages in scope or my own earlier work):**
- **`hofuf-to-riyadh`:** the "return Riyadh to Hofuf" FAQ is now plain text.
- **`taif-to-jeddah`:** my report-59 FAQ "Can I book the journey up to Taif as well?" is now plain text. **This defect is currently live.**

**Still present on 30 other English pages (not changed):**
- `blog/is-saudi-arabia-safe-for-solo-tourists-2026` (CMS)
- `border-transfers/bahrain-causeway`
- `routes/{abha-to-riyadh, dammam-to-al-batha-border, hail-to-riyadh, khobar-to-riyadh, madinah-to-riyadh, neom-to-riyadh, riyadh-to-abu-dhabi, riyadh-to-al-batha-border, riyadh-to-hofuf, riyadh-to-jubail, riyadh-to-khobar, riyadh-to-madinah, riyadh-to-tabuk, riyadh-to-taif, saihat-to-dammam, tabuk-to-riyadh, taif-to-riyadh, yanbu-to-riyadh}`
- `taxi-service/{alula, dammam, hail, jubail, khobar, madinah, makkah, tabuk, taif, yanbu}`

**Recommended fix:** a small shared-component change that renders simple links in FAQ answers (and city "prose" text) safely, which fixes every page at once. Alternatively, strip the links from the data. Owner decision.

## 6. Remaining inconsistencies

1. **Reverse records not changed** (outside the brief):
   - `riyadh-to-hofuf` still says ~330 km / About 3 h 15 (should be 325–330 km / 3.5–4 h).
   - `dammam-airport-to-hofuf` still says 155 km / 1 h 40 (should be ≈170–195 km / ≈2 h).
   - `dammam-to-hofuf` says 160 km / 1 h 45, which is within range.
2. **Other wording kept:**
   - `hofuf-to-riyadh`: "The highway is well-maintained…", "ample luggage space", "southeastern highway"/"outbound leg, in reverse" (odd direction wording).
   - `hofuf-to-dammam` and `hofuf-to-dammam-airport`: "regular booking arrangement" and "Same-day booking is usually available".

## 7. Al-Ahsa Airport page and Hofuf–Khobar route (no URLs created)

### Al-Ahsa International Airport (HOF) page

- **Distinct intent?** Yes in principle: "Al-Ahsa airport taxi / transfer" and "HOF airport" are airport-arrival queries, different from city-service queries (`/taxi-service/hofuf`, `/taxi-service/al-ahsa`). It would also match the 13 existing airport hubs (`/airport-transfer/{slug}`), none of which covers HOF.
- **Cannibalisation risk: medium.** Both `/taxi-service/hofuf` (airport section, 2 FAQs) and `/taxi-service/al-ahsa` (airport section and FAQ) already answer "how far is the airport". A dedicated page should own the arrival intent, and the city pages should keep a short summary plus a link (the pattern used for Jeddah and Abha).
- **Evidence so far:**
  - The local GSC export (`docs/search_data`) shows **no airport queries** for Al-Ahsa or HOF.
  - Hofuf and Al-Ahsa pages have low impressions: `/taxi-service/hofuf` 47, `/taxi-service/al-ahsa` 24.
  - GACA confirms HOF is an operating international airport.
- **Research still needed:**
  - HOF airline and route list (which carriers, international vs domestic) and seasonal traffic.
  - Keyword volumes for "al ahsa airport taxi", "hofuf airport transfer", "مطار الأحساء" and similar.
  - Competitor SERP check (who ranks, and whether Google shows a map pack or official site only).
  - Owner confirmation that HOF pickups are offered.

### Hofuf–Khobar route

- **Distinct intent?** Partly. Khobar is a separate destination from Dammam (hotels, Corniche, the causeway approach), and the routes differ slightly (OSRM 149 vs 151 km). The local export shows "al ahsa to khobar" (2 impressions, position 29.5), a weak but real signal.
- **Cannibalisation risk: medium to high** with `hofuf-to-dammam` (same corridor, near-identical figures) and with the Khobar city page. A page would need a genuinely Khobar-specific angle (hotels, Corniche, causeway onward) to avoid near-duplicate content.
- **Existing links:** `/taxi-service/hofuf` links to `/taxi-service/khobar` and the Bahrain Causeway guide. There is no `hofuf-to-khobar` route record.
- **Research still needed:**
  - Keyword volumes for "hofuf to khobar", "al ahsa to khobar", "الأحساء الخبر" and similar.
  - Competitor pages for the pair.
  - Whether a combined approach (a Khobar section on `hofuf-to-dammam`) would serve the intent better.

## 8. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors (also after the FAQ fixes) |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes, including the report-67 label change, and `.env`; rebuilt after each FAQ fix) | Exit 0, 906/906 |
| Site diff vs the report-67 build | 9 changed (section 3), 0 added or removed |
| Internal links on changed pages | `hofuf-to-riyadh` 8, `hofuf-to-dammam` 7, `hofuf-to-dammam-airport` 9, `al-ahsa` 2, `hofuf` 9; none missing |
| Old figures / claims | 0 (sections 3–4) |
| Arabic | 0 files changed |

## 9. Git status

Nothing was committed, pushed or deployed. The working tree holds the uncommitted work from reports 61–68.
