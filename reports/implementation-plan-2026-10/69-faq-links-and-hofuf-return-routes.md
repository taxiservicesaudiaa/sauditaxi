# 69: Shared link rendering and Hofuf return routes (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment. Arabic was not edited. No page or URL was removed, redirected or noindexed.

**Preserved:** the uncommitted work from reports 61–68.

## 1. Files changed

| File | Change |
|---|---|
| `components/ui/InlineLinks.tsx` | **New.** Safe inline-link renderer (function `inlineLinks()` and component `InlineLinks`) |
| `components/sections/FAQSection.tsx`, `components/home/HomeFAQSection.tsx` | FAQ answers use `inlineLinks()` |
| `components/city-transfer/CityTransferHub.tsx` | Intro and prose paragraphs use `inlineLinks()` |
| `app/(main)/blog/[slug]/page.tsx` | Blog FAQ answers use `inlineLinks()` |
| `components/routes/{AirportRouteView, BorderToCityRouteView, CityAirportRouteView, CityToBorderRouteView, GccRouteView, GccToSaudiRouteView, RouteBlocks, SaudiJordanRouteView}.tsx` | Plain-text paragraphs use `inlineLinks()` |
| `data/routes.ts` | `riyadh-to-hofuf` (figures and wording); `hofuf-to-riyadh` ("well-maintained") |
| `data/dammam-routes.ts` | `dammam-airport-to-hofuf` (figures and wording); "regular booking arrangement" on `hofuf-to-dammam`, `dammam-to-hofuf` and `hofuf-to-dammam-airport`; "Same-day booking" FAQ on `hofuf-to-dammam-airport` |
| `data/airport-route-content.ts` | `dammam-airport-to-hofuf` (pickup line, figures, FAQ) |

## 2. Link rendering fix

- **Cause:** several shared templates printed strings as React text. Answers and paragraphs containing `<a href='…'>` therefore showed the markup literally.
- **Approach:** a small parser (`components/ui/InlineLinks.tsx`) recognises **only** `<a href="…">label</a>` (single or double quotes). Everything else stays React text, so it is escaped and no arbitrary HTML is enabled.

| href type | Rendered as |
|---|---|
| Starts with `/` (not `//`) | Next `<Link>` (internal) |
| `http(s)://` | `<a target="_blank" rel="noopener noreferrer">` |
| `mailto:` / `tel:` | `<a>` |
| Anything else (e.g. `javascript:`, `//host`) | The label as plain text |

- **Tags inside labels** are stripped.
- **Unchanged pages stay byte-identical.** The function returns the original string when no anchor is present, so pages without links produce the same HTML as before. The first component-only version added an invisible `<!-- -->` marker to 33 unrelated pages; switching to the function form removed it.
- **Structured data unchanged:** `faqSchema` still emits the answer text as before.
- **Accessibility:** links are real `<a href>` elements (keyboard-focusable, underlined) that wrap inline on mobile.

**Parser test** (same regex and rules):

| Input | Result |
|---|---|
| Plain text | Plain |
| One internal link | Link inside the text |
| Internal and external together | Both links, with punctuation preserved |
| `javascript:` | Text only |
| `//evil.com` | Text only |
| `mailto:` | Link |
| `<script>` | Escaped text |

**Pages checked on the built site** (inline links rendered; all internal targets exist):

| Page | Inline links |
|---|---|
| `blog/is-saudi-arabia-safe-for-solo-tourists-2026` | 1 |
| `border-transfers/bahrain-causeway` | 1 |
| `routes/abha-to-riyadh` | 1 |
| `routes/dammam-to-al-batha-border` | 2 |
| `routes/hail-to-riyadh` | 1 |
| `routes/khobar-to-riyadh` | 1 |
| `routes/madinah-to-riyadh` | 1 |
| `routes/neom-to-riyadh` | 1 |
| `routes/riyadh-to-abu-dhabi` | 2 |
| `routes/riyadh-to-al-batha-border` | 2 |
| `routes/riyadh-to-hofuf` | 1 |
| `routes/riyadh-to-jubail` | 1 |
| `routes/riyadh-to-khobar` | 1 |
| `routes/riyadh-to-madinah` | 2 |
| `routes/riyadh-to-tabuk` | 1 |
| `routes/riyadh-to-taif` | 2 |
| `routes/saihat-to-dammam` | 1 |
| `routes/tabuk-to-riyadh` | 1 |
| `routes/taif-to-riyadh` | 2 |
| `routes/yanbu-to-riyadh` | 2 |
| `taxi-service/alula` | 1 |
| `taxi-service/dammam` | 3 |
| `taxi-service/hail` | 1 |
| `taxi-service/jubail` | 1 |
| `taxi-service/khobar` | 2 |
| `taxi-service/madinah` | 4 |
| `taxi-service/makkah` | 2 |
| `taxi-service/tabuk` | 1 |
| `taxi-service/taif` | 1 |
| `taxi-service/yanbu` | 1 |

- **Totals:** 11 pages have more than one link.
- **External links:** none exist in the current data. External handling is covered by the parser test only.
- **`routes/taif-to-jeddah`:** the report-68 plain-text FAQ is intact (0 inline links, 0 raw markup).
- **Whole site:** 0 English pages show raw `&lt;a href` markup.

## 3. Return-route figures (OSRM and Valhalla, 25 Nov 2026)

| Route | OSRM | Valhalla | Before | After |
|---|---|---|---|---|
| Riyadh → Hofuf (central Riyadh → 25.3797, 49.5865) | 325 km · 3.70 h | 327 km · 3.66 h | ~330 km · 3 h 15 | **325–330 km · 3.5–4 hours** (same as outbound) |
| King Fahd International (26.4673, 49.7988) → Hofuf | 166 km · 1.90 h | 166 km · 1.88 h | 155 km · 1 h 40 | **165–170 km · around 2 hours** |

- **Why the Dammam Airport ranges differ:** the outbound route is 170–195 km because the outbound Valhalla run took a longer road (193 km). Both engines agree on 166 km for the return, so the return is published as 165–170 km.
- **Recommendation:** the outbound route could be narrowed to "165–195 km", optionally.

## 4. Pages and cards updated

**Site diff vs the report-68 build: 37 changed** (34, plus 3 after the route-view fix), 0 added or removed.
- **The 30 pages listed above:** rendering fix.
- **`riyadh-to-hofuf`:** meta, JSON-LD and body.
- **`dammam-airport-to-hofuf`:** title, meta, JSON-LD and body.
- **`hofuf-to-riyadh`, `hofuf-to-dammam`, `dammam-to-hofuf`:** wording.
- **Cards:** `cities/riyadh` and `cities/dammam`.

**Old-figure scan** of all English pages for Riyadh/DMM → Hofuf ("3 hours 15", "155 km", "1 hour 40", "~330 km"): **0 matches.**

## 5. Wording removed or rewritten

**`riyadh-to-hofuf`:**
- "a fixed price"
- "well-maintained"
- "no toll roads… anywhere"; "fixed price you agree"
- "fixed-price, driver-tracked service"
- "fixed, all-in price… operate 24/7… no deposit… fixed-price quote"
- Price FAQ, now "What does the quotation cover?"
- "around an hour shorter than Dammam/Khobar", which was wrong: routing shows about 15 minutes shorter but about 90 km shorter. Now "roughly 90 km shorter".
- "same fixed-price, tracked service" (FAQ)

**`dammam-airport-to-hofuf`** (DMM owner policy applied):
- **Kept:** flight tracking, worded "We track your flight and use its arrival information to coordinate your pickup".
- **Removed:**
  - meet-and-greet and "free wait time";
  - "arrivals-hall pickup… your driver waits";
  - fixed price (about, title, meta, FAQ, "price never changes");
  - 24/7;
  - "drivers regularly take visitors";
  - the "regular booking arrangement" offer.

**`hofuf-to-riyadh`:** "The highway is well-maintained…"

**`hofuf-to-dammam`, `dammam-to-hofuf`, `hofuf-to-dammam-airport`:** "we can also set up a regular booking arrangement" became "if you travel often, mention it when you request a quotation".

**`hofuf-to-dammam-airport`:** "Same-day booking is usually available…" became "Request your quotation as early as you can… availability is confirmed with your quotation".

**FAQ parity (all match):**

| Page | FAQs matching structured data |
|---|---|
| `riyadh-to-hofuf` | 12/12 |
| `dammam-airport-to-hofuf` | 3/3 |
| `hofuf-to-riyadh` | 12/12 |
| `hofuf-to-dammam` | 8/8 |
| `dammam-to-hofuf` | 8/8 |
| `hofuf-to-dammam-airport` | 2/2 |

## 6. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Raw link markup | 0 pages |
| Internal links (inline) | All targets exist |
| Arabic | 0 files changed |

## 7. Remaining issues (not changed)

1. **`dammam-to-hofuf`** still has "fixed price" (×3), "24/7" and "fixed-price" (only the named phrase was in scope).
2. **`/taxi-service/madinah`** prose: "Your driver tracks your flight and meets you in the arrivals hall with a name board". No confirmed MED policy for this; a review is needed.
3. **`hofuf-to-dammam-airport`** could be narrowed to "165–195 km" to match the return evidence.
4. **Titles** "Hofuf to Dammam Taxi Service – Reliable Private Transfer" and "Dammam to Hofuf Taxi Service – Reliable Private Transfer" were left unchanged.

## 8. Git status

Nothing was committed, pushed or deployed. The working tree holds the uncommitted work from reports 61–69.
