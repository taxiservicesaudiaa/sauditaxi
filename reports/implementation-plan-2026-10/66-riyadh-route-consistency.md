# 66: Riyadh route consistency and airport FAQ (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no live CMS change; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Not rebuilt:** the Riyadh city page. The uncommitted work from reports 61–65 was preserved.

## 1. Files changed

| File | Change |
|---|---|
| `data/routes.ts` | `jeddah-to-riyadh` and `alula-to-riyadh`: figures. `riyadh-to-jeddah` and `riyadh-to-alula`: pricing and toll wording |
| `data/distance-guide-v2.ts` | `riyadh-to-jeddah-distance`: time wording |
| `data/airport-guides.ts` | `riyadh-airport` legacy status FAQ made neutral |
| `reports/…/66-…md`, `66b-cms-blog-corrections-riyadh-routes.md` | New |

## 2. Route figures

Checked on 25 Nov 2026 with OSRM (router.project-osrm.org) and Valhalla (valhalla1.openstreetmap.de). Endpoints: central Riyadh (24.7136, 46.6753), central Jeddah (21.4858, 39.1925), AlUla (26.6085, 37.9214) and AlUla Old Town (26.6175, 37.9136).

| Route | OSRM | Valhalla | Published |
|---|---|---|---|
| Riyadh → Jeddah | 948 km · 10.4 h | 960 km · 8.8 h | 950 km · 9.5–10.5 h (report 65) |
| **Jeddah → Riyadh** | 945 km · 10.4 h | 965 km · 8.9 h | 950 km · **9.5–10.5 h** (was 10–11 h) |
| Riyadh → AlUla | 1,034–1,035 km · 10.9–11.0 h | 1,040–1,042 km · 10.3–10.4 h | 1,035–1,045 km · 10.5–11 h (report 65) |
| **AlUla → Riyadh** | 1,032–1,033 km · 10.9–11.0 h | 1,038–1,039 km · 10.3–10.4 h | **1,030–1,040 km · 10.5–11 h** (was 1,050 km · 10 h) |

- **Jeddah:** the return route now matches the outbound range. Both engines give nearly the same figures in each direction, and their 1.5 h disagreement is covered by the range.
- **AlUla:** the return distance is a few km shorter from the AlUla endpoints, which justifies 1,030–1,040 km.
- **Route path:** "through Hail and Qassim" is confirmed by the OSRM geometry, which passes about 4 km from Hail at 426 km and through Buraydah at 685 km.
- **Fields changed:**
  - `jeddah-to-riyadh`: meta, duration, about, overview, vehicle text and time FAQ.
  - `alula-to-riyadh`: meta, distance, duration, overview and time FAQ.

## 3. Pricing and toll wording removed (outbound routes)

| Route | Removed | Now |
|---|---|---|
| `riyadh-to-jeddah` | Meta "…and a fixed price"; intro "the fixed price and the vehicle are yours alone"; "There are no tolls anywhere on this route, and the fixed price… covers the entire journey"; "None of this changes the fixed price"; FAQ "no toll roads anywhere on Saudi Arabia's highway network, so your fixed price covers the full journey" | "a quotation before you confirm"; "the vehicle is yours alone"; "Your quotation sets out the price for the journey before you confirm"; "Tell us your preferences when you request a quotation"; FAQ "What does the quotation cover?" |
| `riyadh-to-alula` | Title "– Fixed-Price Taxi"; meta "Professional driver… fixed price agreed before you travel"; "no tolls… fixed price… covers the full journey"; toll FAQ; "at no extra cost since the fare is fixed"; "near-ten-hour" / "roughly ten-hour" / "ten-hour drive" | Title "– Desert Road by Quotation"; meta "Private vehicle for your group, with a quotation before you travel"; quotation sentence; FAQ "What does the quotation cover?"; FAQ "Can I stop along the way?" (stops planned with you); "long desert crossing", "10.5–11 hour drive", "long drive" |

**Built pages:** no "fixed price", "no toll" or "100% fixed" on either outbound route. FAQs match the structured data (9/9 and 8/8).

## 4. Riyadh Airport status FAQ

- **The live RUH page already has no dated status.** `/airport-transfer/riyadh-airport` renders from `data/riyadh-airport-page.ts`, which deliberately omits the dated notice and the "Is the airport operating?" FAQ. Report 65 wrongly attributed the dated FAQ to the live page.
- **The dated FAQ lived in the unused legacy entry** `data/airport-guides.ts → riyadh-airport` (the RUH branch returns before the shared template). It was rewritten so it can't resurface:
  - **New question:** "Which terminal will I use at King Khalid International Airport?"
  - **New answer:** "Terminal arrangements at King Khalid International Airport can change. Confirm your flight and your arrival or departure terminal with your airline before you travel, and include the terminal in your request if you know it."
- **No change to the built RUH page.**

## 5. Riyadh–Jeddah distance guide (`/distance/riyadh-to-jeddah-distance`)

| Field | Before | After |
|---|---|---|
| Quick facts | "Private car, ~9 hours" | "Private car, roughly 9.5–10.5 hours of driving" |
| Pure driving | "~8.5 hours (theoretical, non-stop)" | "Roughly 9.5–10.5 hours of driving (routing estimates vary)" |
| Total journey | "~9 hours or more, once realistic stops are included" | "10–11 hours or more, once realistic stops are included" |
| Point | "nine-hour-plus journey" | "ten-hour-plus journey" |
| Transport table | "Around 9 hours, typically with rest stops" | "Roughly 9.5–10.5 hours of driving, plus rest stops" |
| Rest-stop FAQ | "8.5 hours of continuous driving is demanding" | "9.5–10.5 hours of driving is demanding" |
| Verdict | "a nine-hour road trip" | "a road trip of around ten hours" |
| FAQs (×2) | "Around nine hours by road including stops" / "roughly nine hours by road" | "Roughly 9.5–10.5 hours of driving, plus stops" / "roughly 9.5–10.5 hours of driving by road" |

- **Metadata:** the meta title and description contain no figure.
- **Summary components:** the homepage "Travel insights" card and the footer and get-quote links show no figure.
- **Guide content:** kept informational; the flight comparison is unchanged.

## 6–7. AlUla blog summary and other CMS text

See **66b** for exact field-by-field replacement text.

- **Card locations:** the AlUla excerpt card appears on **9 pages** (listed in 66b), not 10.
- **Also in 66b:**
  - the Jeddah→Riyadh blog's meta description, body and FAQ "nine hours";
  - the Riyadh to Abha card excerpt "830 km / nearly nine hours".

## 8. Consistency audit (all 494 built English pages)

**Search terms:**
- "9 hours" and "nine hours" for Riyadh–Jeddah;
- "1,000 km" and "9 hours 30" for Riyadh–AlUla;
- "1,050 km" and "10 hours" for AlUla–Riyadh;
- "10–11 hours" for Jeddah–Riyadh.

**Result:** no stale figure on any route record, route page, route card or distance guide. The only remaining matches are CMS blog content (66b):
- `/blog/jeddah-to-riyadh-transfer-guide` (×2);
- `/blog/riyadh-to-alula-road-trip-guide` (body);
- the AlUla excerpt card on 9 pages.

## 9. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the report-65 build | **12 changed, 0 added or removed:** the 4 routes (`riyadh-to-alula` also title); `distance/riyadh-to-jeddah-distance` (JSON-LD and body); and cards on `cities/jeddah`, `cities/riyadh`, `routes/alula-to-{jeddah,madinah,neom,tabuk,yanbu}` |
| FAQ / JSON-LD | `riyadh-to-jeddah` 9/9, `riyadh-to-alula` 8/8, `jeddah-to-riyadh` 4/4, `alula-to-riyadh` 2/2, distance guide 7/7. All parse |
| Internal links | Unchanged; none missing on the changed pages |
| Arabic | 0 files changed |
| CMS | Read only (GET); nothing written |

## 10. Remaining owner decisions

1. **`jeddah-to-riyadh`** (return) still says "24/7 booking. Reliable, on-time, fixed price" (meta), "Available 24/7 with fixed fares — zero surge pricing" and "our quotes are 100% fixed". Outside this brief, which limited pricing cleanup to the outbound routes. Should it get the same treatment?
2. **Apply the 66b CMS text** (two posts plus the Abha excerpt).
3. **Arabic:** the Riyadh–Jeddah and Riyadh–AlUla proposals are in 65b. The Arabic Jeddah→Riyadh and AlUla→Riyadh pages need the same figures after native review.

## Git status

Nothing was committed, pushed or deployed (see the final message for the file list).
