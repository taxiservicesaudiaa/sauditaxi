# Execution log — approved English patches (Stages 1–3), no deployment

**Executed:** 22 October 2026 (UTC), in the main working tree.

**What was not done:**
- No commit, push or deployment.
- No production-setting change.
- No Arabic edit.

**Companion:** `33b-working-tree-after-stages-1-3.diff` — the full working-tree diff against `HEAD`. It includes the earlier Riyadh hub change (`28`) and the two new files.

## Stage 1 — Riyadh English routes

### Steps

- **Patch applied:** `31b-ruh-routes.patch`.
  - The target files were first normalised to LF, the form stored in the repository.
  - The Riyadh hub changes were preserved.
- **Diff verified:** the tracked-file diff matches `31b` line for line (148 lines). The remaining 58 patch lines are exactly the two new files. The reverse-apply check passed.
- **Evidence check before keeping durations:**
  - RUH ↔ central Riyadh "30–45 min" is **supported**: OSRM gives 35–46 km and 27–35 min free-flow. It is kept and labelled "Pure driving time", with the existing baseline disclaimer.
  - RUH → Jeddah "9 hours" and RUH → Makkah "8 hours 30 min" are **understated**:
    - Rome2rio city to city: Jeddah 945 km / 9 h 27; Makkah 869–875 km / 8 h 42–8 h 47.
    - OSRM from RUH: Jeddah 986 km / 10.8 h; Makkah 903 km / 9.9 h.
  - RUH → Madinah "8 hours" rests on a **single source** (OSRM 833 km / 7.7 h).

### Owner decision (22 Oct)

These additions go beyond `31b`:

| Change | Detail |
|---|---|
| New optional field | `AirportRouteOverrides.pureDrivingValue`, used by both route branches in `app/(main)/routes/[slug]/page.tsx` with a `?? route.duration` fallback |
| Facts boxes changed | RUH → Jeddah, Makkah and Madinah now read "Pure driving time: Confirmed in your quotation" (via `ruhArrivalOverrides(city, pureDrivingValue)`). Route cards elsewhere are unchanged |
| Prose distance ranges (airport origin) | Jeddah "about 950–990 km"; Makkah "roughly 870–905 km" |

### Validation

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint | 10 problems (6 errors, 4 warnings) = baseline |
| Build | 905/905 |
| Rendered changes vs baseline | **7 pages**: `/routes/riyadh-airport-to-riyadh`, `/routes/riyadh-to-riyadh-airport`, `/routes/riyadh-airport-to-jeddah`, `/routes/riyadh-airport-to-makkah`, `/routes/riyadh-airport-to-madinah`, `/cities/jeddah`, `/cities/riyadh` |

## Stage 2 — Riyadh advisory database update

### Before the write

| Item | Value |
|---|---|
| Target | `blogs`, id `099e1ac3-0394-4c5f-8da4-19b1ba661197`, slug `riyadh-airport-closure-october-2026` |
| Status | published |
| `updated_at` | 2026-10-14T13:26:15.224694Z (unchanged) |
| Payload | `29b`: `title`, `meta_title`, `meta_description`, `excerpt`, `content`, `faqs`, `schema_json`, plus `updated_at = now()` |
| Payload checks | HTML tags balanced (78/78); no name-board, tracking, fixed-price or km claims; FAQs equal the schema (6/6, answers identical); title 68, meta title 50, description 151 characters |
| Source check (22 Oct) | No GACA statement announcing resumed scheduled flights at RUH. Secondary reports still conflict. The advisory wording remains accurate |

### Operation

- **One PATCH:** `blogs?id=eq.099e1ac3…&updated_at=eq.2026-10-14T13:26:15.224694+00:00`, so it could only write if the record was unchanged.
- **Response:** HTTP 200, 1 row updated. The new `updated_at` is 2026-10-22T17:07:49.357689Z (set by the server).
- **No other database records were modified.**

### Verification

| Check | Result |
|---|---|
| Re-read of the saved record | `title`, `meta_title`, `meta_description`, `excerpt`, `content` and `faqs` are identical to the payload. `schema_json` is identical apart from key order (normalised by `jsonb`). No other field changed |
| Local render of `/blog/riyadh-airport-closure-october-2026` | New title and description. One FAQPage block with 6 questions, all visible on the page. BlogPosting present. "Last updated: 22 October 2026" shown. No name board. No link to `/blog/riyadh-airport-driver-meeting-point` |
| Rendered changes | **129 pages**: the advisory, plus 125 other blog pages, `/blog`, `/cities/makkah` and `/sitemap`. On those, the only change is the advisory's new title in the shared recent-posts list (the old title appears nowhere; order is by `published_at` and unchanged). Report 29 expected only the advisory page; this list-wide effect is an inherent result of the approved title change |
| Live site | **Not yet changed.** Blog pages are prerendered, so the live advisory updates only at the next deployment (needs separate authorisation) |

## Stage 3 — Dammam English patch

### Steps

- **Evidence re-validated (22 Oct):**
  - Saudipedia gives 35.6 km to Dammam and 57.9 km to Al-Khobar.
  - OSRM gives 35.5–43.2 km to Dammam, 57.1 km to Khobar, and 396.7–398.9 km / 3 h 51 to Riyadh.
  - Air Miles Calculator gives 402.4 km / 3 h 52 for DMM→RUH by road. Its page now blocks direct fetches (HTTP 403), so this figure comes from the search-index result.
- **Patch applied:** `32b-dmm-hub-route-hotels.patch`, after normalising the targets to LF.
- **Exactness proof:** reverse-applying `32b` to copies reproduces the pre-Stage-3 state exactly in all 6 files.
- **Wording confirmed in the render:**
  - "the meeting point confirmed in your booking" is used;
  - no name-board or "meet & greet" text remains on the 4 pages;
  - flight tracking is retained;
  - "Free waiting time is included" appears with no allowance stated;
  - Bahrain and border wording is unchanged;
  - the second hotel page is included without any expansion.

### Validation

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint | 10 problems = baseline |
| Build | 905/905 |
| Rendered changes vs Stage 2 | **17 pages, as expected** (next row) |
| — Intended (4) | `/airport-transfer/dammam-airport`, `/routes/dammam-airport-to-riyadh`, `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport` |
| — Knock-on (13) | Only the "Dammam Airport → Riyadh" route card (now 400 km) or its intro, on: `/routes/dammam-airport-to-{abqaiq,dhahran,hofuf,jubail,khobar,qatif,ras-tanura,saihat}`, `/routes/{abha,jeddah,madinah}-airport-to-riyadh`, `/cities/dammam`, `/cities/riyadh` |

## Totals

### Changed files (working tree vs `HEAD`; 11 modified + 2 new)

**From `28` (unchanged here):**
- `app/(main)/airport-transfer/[airport]/page.tsx`
- `components/airport-transfer/AirportTransferHub.tsx`

**Stages 1 and 3:**
- `app/(main)/routes/[slug]/page.tsx`
- `components/routes/AirportRouteView.tsx`
- `components/routes/CityAirportRouteView.tsx`
- `components/routes/RouteStatusNotice.tsx` (new)
- `data/airport-status.ts` (new)
- `data/airport-route-content.ts`
- `data/city-airport-route-content.ts`
- `data/routes.ts`
- `data/point-transfer-v2/dammam.ts`

**`28` + Stage 3:**
- `data/airports.ts`
- `data/airport-guides.ts`

### Other totals

| Item | Value |
|---|---|
| Database operations | 1 guarded PATCH (`blogs` 099e1ac3…). No other writes |
| Rendered pages changed vs the original baseline | **152** (7 + 129 + 17, with `/cities/riyadh` counted once). Pages outside these sets are unchanged in title, canonical, hreflang, lang/dir, JSON-LD, `<main>` and meta (the only build-to-build noise is the position of Next.js's `next-size-adjust` meta tag) |
| Line endings | The edited files are now LF in the working copy. With `core.autocrlf=true`, git normalises them on commit, so no line-ending diff will appear |

## Open items (not done; each needs separate approval)

1. **Deployment.** This would publish the Riyadh hub, the RUH routes, the advisory (already saved in the database) and the Dammam pages. On release day, re-check GACA and refresh every "last checked 22 October 2026" date.
2. **Facts-box route data still unverified.** `route.distance` for RUH → Makkah is 880 km against about 903 km from the airport. Route-card durations on other pages are also unverified. Both belong to the site-wide figures task.
3. **Decisions D1–D10 and T1–T4 in `32`, R3–R10 in `31`.** These include the hub "no prepayment" default, the shared fixed-price template strings, other DMM route figures, and border wording.
4. **The Arabic pass,** after native sign-off.
