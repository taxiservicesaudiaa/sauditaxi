# 60: Remaining Jeddah content and route consistency work (local only)

**Date:** 24 November 2026.

**Not done:**
- No commit, push or deployment.
- No form submission and no indexing request.
- No Arabic content edited.
- No page deleted, redirected, noindexed or removed from the sitemap.
- Nothing written to the production CMS.

**Not rebuilt:** the Jeddah city page and the two Jeddah–Taif route pages. They received only the terminal-accuracy fix described in section 5.

## 1. Files changed (this task)

| File | Change |
|---|---|
| `data/routes.ts` | `jeddah-to-madinah` and `jeddah-to-riyadh`: duration, meta description, about, section and FAQ times (time wording only) |
| `data/service-pages-v2/intercity-transfers.ts` | Jeddah → Madinah card: "4 hours" → "4.5–5 hours" |
| `data/service-pages-v2/airport-transfers.ts` | Jeddah Airport → Madinah card (links to `/routes/jeddah-to-madinah`): "~4 hours" → "~4.5–5 hours" |
| `data/service-pages-v2/hajj-transport-service.ts` | Jeddah → Madinah link text: "roughly 4 hours" → "roughly 4.5–5 hours of driving" |
| `data/service-pages-v2/umrah-taxi-service.ts` | Same as above |
| `data/distance-guide-v2.ts` | `jeddah-to-madinah-distance`: "4-5 hours" → "approx. 4.5–5 hours" (fact panel, time panel, transport table, FAQ) |
| `data/city-guides.ts` | Jeddah entry only (27 targeted rewrites; `lastUpdated` 2026-11-24) |
| `data/routes.ts` (also) | `intro` field only of `jeddah-to-riyadh`, `jeddah-airport-to-riyadh`, `jeddah-airport-to-yanbu`. These intros are shown as route cards on `/cities/jeddah` and carried "fixed upfront pricing", "24/7", "meet-and-greet" and "flight tracking". Now: "…arranged by quotation." |
| `app/(main)/cities/[city]/page.tsx` | Jeddah hub meta description only: "…meet-and-greet, and flight tracking." → "Share your flight and hotel to receive a quotation before you travel." |
| `data/jeddah-city-page.ts` | Airport photo swapped to the Hajj Terminal; the terminal sentence updated for the autumn-2026 terminal changes; facts comment |
| `public/images/jeddah/kaia-hajj-terminal.webp` | **New**, 1600×1195, 251 KB |
| `public/images/jeddah/kaia-north-terminal.webp` | **Removed.** It was untracked, added in report 59 and is now unused |
| `reports/implementation-plan-2026-10/60-…md`, `60b-…md` | New reports |

Earlier uncommitted work (Jazan, Abha, Riyadh–Abha, Jeddah–Taif, Jeddah city) is untouched apart from the `jeddah-city-page.ts` lines listed above.

## 2. Jeddah route times

**Verified with OSRM today:**

| Route | Distance | Time |
|---|---|---|
| Central Jeddah → Madinah | 404 km | 4.57 h |
| JED → Madinah | 398 km | 4.62 h |
| Central Jeddah → Riyadh | 950 km | 10.49 h |
| JED → Riyadh | 957 km | 10.68 h |

These match report 59 (≈4.6 h and ≈10.4 h).

| Route | Before | After |
|---|---|---|
| `jeddah-to-madinah` | duration "4 hours"; "about 4 hours"; "a four-hour drive"; "roughly four hours" (×2) | "4.5–5 hours"; "about 4.5–5 hours"; "a drive of four and a half to five hours"; "typically takes around 4.5–5 hours of driving" (×2) |
| `jeddah-to-riyadh` | duration "9 hours"; "about 9 hours"; "nine-hour" (×2); "typically around 9 hours"; FAQ "8.5 to 9.5 hours, including scheduled rest stops" | "10–11 hours"; "about 10–11 hours"; "10–11 hour" (×2); "Typical driving time is approximately 10–11 hours, plus any rest breaks"; FAQ "typically takes approximately 10–11 hours of driving, plus any rest stops" |

**Where the new times appear:**
- **Automatically, via the `duration` field:**
  - the route pages themselves (hero, fact panels, "Pure driving time", meta);
  - every related-route card that lists these routes (route pages, city pages, airport and border pages);
  - the airport-page route list.
- **Edited by hand:** the 4 service-page cards and link texts, plus the Jeddah → Madinah distance guide.

There is no `jeddah-to-riyadh` distance guide. The Jeddah city page shows distances only, so it was unchanged.

**Not changed (outside the brief, so listed for a decision).** These still say ≈4 h or ≈9 h:

| Record / location | Current |
|---|---|
| `madinah-to-jeddah` (routes.ts) | 4 hours; meta, body and FAQ "four hours" |
| `jeddah-airport-to-madinah`, `madinah-to-jeddah-airport` (routes.ts) | 4 hours; meta, body and FAQ |
| `airport-route-content.ts` jeddah-airport-to-madinah FAQ; `city-airport-route-content.ts` madinah-to-jeddah-airport FAQs | "Around 4 hours"; "four-hour drive" |
| `riyadh-to-jeddah`, `jeddah-airport-to-riyadh`, `riyadh-airport-to-jeddah` (routes.ts) | 9 hours; meta and body |
| `airport-route-content.ts` jeddah-airport-to-riyadh | "950 km and 9 hours"; FAQ "Around 9 hours" |
| `distance-guide-v2.ts` riyadh-to-jeddah FAQ | "Around nine hours by road including stops" |
| `intercity-transfers.ts` Riyadh → Jeddah card | "9 hours" |

The roads are the same, so the same 4.5–5 h and 10–11 h ranges would apply. I recommend one follow-up pass.

**Other claims seen in these two records but not edited** (the brief limited this to times): "fixed price", "track your flight", "luggage help", "24/7", "experienced chauffeurs". They are listed in section 9.

## 3. Blog guides

The three posts are stored in **Supabase (the production CMS)**, not the repository. I read the live pages (read-only) and wrote all corrections as find-and-replace text in **[60b-jeddah-blog-corrections.md](60b-jeddah-blog-corrections.md)** for the editor to apply.

| Guide | Main findings |
|---|---|
| `/blog/first-time-in-jeddah-guide` | Population 4.7 M → 3.75 M (2022 census); "busiest pilgrim gateway" softened; Al-Balad "2.5 km²" removed (unverified); Tahlia Street location corrected; Makkah 90 km / 60–90 min → ≈85 km / 1–1.5 h; flight tracking, name board and fixed price removed |
| `/blog/jeddah-airport-terminal-guide-jed` | **Out of date:** the South Terminal reopened as **Terminal 4** (from 27 Sep 2026); North Terminal flights moved to T4 and the Hajj and Umrah terminals (from 17 Oct 2026); the Hajj Terminal now takes some scheduled airlines. Terminal section, table, FAQs and Haramain/T1 note rewritten; unverified shuttle-bus claim softened; fixed-price, meet-and-greet and no-surge claims removed; the irrelevant King Salman Airport link replaced with the first-time-in-Jeddah guide; link to `/taxi-service/jeddah` added |
| `/blog/jeddah-islamic-port-passenger-guide` | Port → airport 40 km → 30–35 km (OSRM 33); hotels 10–25 km → 5–25 km; Makkah 80–85 km; "position the vehicle precisely", fixed price, "luggage help", waiting built into price and "group vehicles are available" removed or softened |

All 34 internal links in the three posts return 200. Each post keeps its URL, topic and informational tone.

## 4. Legacy `city-guides.ts` Jeddah entry

**Usage:**
- On `/cities/jeddah`, only **`hubFaqs`** is rendered (visible FAQ list plus FAQPage JSON-LD from the same array).
- The entry's `localInsight`, `introParagraphs`, `sections` and `faqs` are no longer rendered. `/taxi-service/jeddah` uses `data/jeddah-city-page.ts`, and no Arabic page reads this English text. These fields must stay, though, because the page code returns a 404 without `sections` and `introParagraphs`.
- All were corrected so the claims can't come back if the fields are ever rendered again.

**Rendered `hubFaqs` (/cities/jeddah):**

| FAQ | Before | After |
|---|---|---|
| Airport + Makkah | "we'll quote each as a fixed price" | "we will include them in your quotation" |
| Terminal | "Which terminal will my… driver meet me at?" / "Your driver waits at the terminal… Hajj Terminal or the main North Terminal (T1)" (also wrong: T1 is not the North Terminal) | "Which Jeddah Airport terminal will I be picked up from?" / several terminals, some airlines changed in late 2026, check with your airline; pickup point and arrangements confirmed when you book |
| Groups | "group and family vans are available" | "you can request a larger vehicle… a suitable vehicle will be suggested in your quotation" |

The other three hub FAQs (airport to hotel 20–40 min; Corniche and Al-Balad coverage; return legs) had no problems and are unchanged.

**Non-rendered fields corrected:**
- "busiest entry point"
- "We track your flight"
- "we position drivers"
- "fixed-price" (×5)
- "without a meter running"
- "keeping the same driver… full-day booking"
- "fixed day-rate"
- "fixed price… driver assigned… no prepayment"
- "drivers know well"
- the miqat promises (Qarn al-Manazil and Yalamlam are not on the Jeddah–Makkah road)
- the "North Terminal (T1)" error
- Makkah 90 km → 85 km; Madinah time added (4.5–5 h)

The structure, field names and every other city entry are unchanged. `git diff` hunks fall only within lines 188–337 (the Jeddah entry).

## 5. Hajj Terminal image

**Done.** Another licensed photo was found (a different file from the one that was rate-limited) and downloaded on the first attempt.

| Field | Value |
|---|---|
| Commons file | `KSA Jeddah - Hajj Terminal -20171206 11 11 06 Pro.jpg` |
| Author | Shah134pk ("Own work") |
| Licence | **CC BY-SA 4.0**, no restrictions field (read via the Wikipedia API) |
| Content | Pilgrims walking with bags under the Hajj Terminal's tent canopies at JED. A genuine photograph, correctly identified |
| Use | `/taxi-service/jeddah` airport band, replacing the North Terminal night photo (that terminal's flights moved out in October 2026). Caption "The Hajj Terminal at King Abdulaziz International Airport" with credit "Shah134pk · CC BY-SA 4.0" |

The airport paragraph on that page was updated at the same time:
- **Before:** "including a Hajj Terminal built for pilgrims during the Hajj season".
- **After:** "including the Hajj Terminal with its tent-like roofs, and a number of airlines changed terminals in late 2026, so check with your airline which terminal your flight uses".

No AI imagery was used.

## 6. Technical QA

**Checks**

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | 0 errors |
| Lint (whole repo) | 10 problems (6 errors, 4 warnings): the same pre-existing set as reports 58 and 59. Lint on the 9 files changed here: **0 problems** |
| Production build (isolated worktree, with the local `.env` copied in; the first attempt failed only because the env file was missing) | Exit 0, **905/905** pages |

**Site diff against the report-59 build:** 899 pages compared, **23 changed**, all expected.
- `routes/jeddah-to-madinah`, `routes/jeddah-to-riyadh`: meta, JSON-LD and body.
- `distance/jeddah-to-madinah-distance`: JSON-LD and body.
- `cities/jeddah`: meta, JSON-LD and body.
- `taxi-service/jeddah`: body (photo and terminal sentence).
- `routes/jeddah-airport-to-riyadh`, `routes/jeddah-airport-to-yanbu`: intro, so JSON-LD and body.
- **Pages with duration cards** (body only): `index`, `airport-transfers`, `intercity-transfers`, `hajj-transport-service`, `umrah-taxi-service`, `airport-transfer/jeddah-airport`, `cities/riyadh`, `routes/{hail-to-madinah, jeddah-to-abha, jeddah-to-alula, jeddah-to-dammam, jeddah-to-kaec, jeddah-to-makkah, jeddah-to-yanbu, madinah-to-jeddah, riyadh-to-jeddah}`.

No page was added or removed, and no Arabic page changed.

**Route-time consistency** (scan of all 493 built English pages):
- "4.5–5 hours" appears 25 times and "10–11 hour" 12 times.
- **No stale time remains for Jeddah → Madinah or Jeddah → Riyadh.**
- 21 remaining 4 h / 9 h mentions all belong to **airport-variant records** (`jeddah-airport-to-madinah`, `jeddah-airport-to-riyadh` and their cards) or to **two more CMS blog posts** (`/blog/jeddah-to-madinah-transfer-guide`: "roughly four hours"; `/blog/jeddah-to-riyadh-transfer-guide`: "about 9 hours"). These are listed in section 9.

**Page checks**

| Page | Canonical / hreflang / robots | H1 | JSON-LD | Internal links |
|---|---|---|---|---|
| `/taxi-service/jeddah` | Self, en and ar, index | 1 | BreadcrumbList, WebPage, Service, FAQPage (9) | 15, none missing |
| `/cities/jeddah` | Self, en and ar, index | 1 | …FAQPage (6) | 67, none missing |
| `/routes/jeddah-to-madinah` | Self, en and ar, index | 1 | …FAQPage (9) | 10, none missing |
| `/routes/jeddah-to-riyadh` | Self, en and ar, index | 1 | …FAQPage (4) | 11, none missing |
| `/distance/jeddah-to-madinah-distance` | Self, en and ar, index | 1 | …FAQPage (7) | 2, none missing |
| `/routes/taif-to-jeddah`, `/routes/jeddah-airport-to-taif` | Unchanged since report 59 (identical snapshot) | 1 | FAQPage (6) and (3) | 10 each, none missing |

**`/cities/jeddah` specifics:**
- **Claims:** 0 matches for fixed price/fare/rate, flight tracking, meet-and-greet, 24/7, "driver waits", name board, "North Terminal (T1)" or "no prepayment".
- **FAQs:** all 6 FAQPage questions and answers appear in the visible FAQ list (6/6).

**`/taxi-service/jeddah`:** renders `kaia-hajj-terminal.webp` with the caption and the Shah134pk credit.

**Mobile (500 px, production server):** `/taxi-service/jeddah` (airport band), `/cities/jeddah`, `/routes/jeddah-to-madinah`, `/routes/jeddah-to-riyadh`, `/intercity-transfers` and `/distance/jeddah-to-madinah-distance` all render correctly, with no overflow beyond the existing horizontal "How This Journey Unfolds" strip.

**Cleanup:** the worktree was removed and pruned, and the screenshot server stopped.

## 7. Pages and URLs

No page or URL was deleted, redirected, noindexed or removed from the sitemap. Every change is a text, data or image edit.

## 8. Arabic

No file under `data/translations/` or `locales/ar` was modified. Recommended Arabic follow-ups: the Arabic records for the same routes (Jeddah → Madinah 4 h; Jeddah → Riyadh 9 h) should get the same time ranges after native-speaker review. Nothing was changed.

## 9. Outstanding factual questions and owner decisions

1. **Reverse and airport-variant route times** (section 2 table): apply 4.5–5 h and 10–11 h?
2. **Claims remaining in `jeddah-to-madinah` and `jeddah-to-riyadh`:**
   - fixed price, flight tracking, luggage help, "build in rest-stop flexibility as standard", meet at terminal;
   - for Riyadh: "24/7", "fixed fares — zero surge", "experienced chauffeurs", "100% fixed".

   These are not times, so they weren't edited. Should they get a quotation-wording pass?
3. **Terminal wording elsewhere:**
   - `data/airport-guides.ts` (Jeddah hub): "main international terminal and a dedicated Hajj Terminal used during peak Hajj and Umrah seasons"; "your driver waits at the correct arrivals hall".
   - `data/airports.ts`: "meet-and-greet at the Hajj Terminal, Terminal 1, and the North Terminal"; the terminals list "Terminal 1 (North)".
   - Route `pickupPoints` that list the North Terminal.

   All predate the autumn-2026 changes, and the North Terminal no longer handles flights. Should these be updated?
4. **Port pages** (`/jeddah/jeddah-islamic-port-*`, `/jeddah/hotels-to-jeddah-islamic-port`):
   - fixed price, 24/7, luggage help, meet and greet;
   - "Your driver waits at an agreed point";
   - "northern/Corniche hotels are closer" to the port. This is wrong: the port is south of the centre, and the northern Corniche is ≈26 km away.
5. **Blog terminal facts:** recheck the airport's own announcements just before publishing 60b. The airline moves are recent and sources differ on the exact lists, which is why the copy names no airlines.
6. **Blog CTA component:** "professional drivers, fast reply" (already flagged in 53b).
7. **First-time guide SIM/eSIM sentence:** confirm whether the linked arrivals guide covers SIMs, or drop the sentence.
8. **`/cities/jeddah` "Terminals at King Abdulaziz International Airport" card** shows "Terminal 1 (North), Hajj Terminal, Domestic terminal". This is wrong: T1 is not the North Terminal, and the list predates Terminal 4. It comes from `data/airports.ts` `terminals`, which the **Arabic** hub page also renders (`app/ar/[...slug]/page.tsx:691`), so I didn't change it under the no-Arabic-changes rule. Suggested value: `["Terminal 1", "Terminal 4", "Hajj and Umrah terminals"]`. This needs your approval because it also changes the Arabic page.
9. **Two more CMS blog posts with old times:** `/blog/jeddah-to-madinah-transfer-guide` ("roughly four hours") and `/blog/jeddah-to-riyadh-transfer-guide` ("about 9 hours"). Not reviewed in this task.
10. **`/cities/jeddah` hero:** "with a professional driver", shared hub template wording. Not changed.

## 10. Git status

Nothing was committed, pushed or deployed. All work is in the uncommitted working tree, together with the earlier uncommitted Jazan, Abha, Riyadh–Abha, Jeddah–Taif and Jeddah city work (reports 56–59). These share `data/routes.ts` and the page routes, so they should be released together.
