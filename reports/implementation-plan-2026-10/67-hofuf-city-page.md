# 67 — Hofuf city page (`/taxi-service/hofuf`) (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Preserved:** the uncommitted work from reports 61–66. Other city pages were not touched.

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/hofuf-city-page.ts` | New | Story copy, facts with sources, 6 photos (with credits), 10 FAQs |
| `components/city-transfer/HofufCityView.tsx` | New | The "oasis heritage" layout |
| `public/images/hofuf/*.webp` (6) | New | Licensed photos |
| `app/(main)/taxi-service/[city]/page.tsx` | Modified | Hofuf branch (BreadcrumbList, WebPage, Service, FAQPage) and OG image |
| `data/cities.ts` | Modified | Hofuf `about`, highlights, meta title and description only (CRLF preserved) |
| `data/city-guides.ts` | Modified | Hofuf entry only. It is no longer rendered but is required by the template; rewritten without the old claims (no `hubFaqs` exist for Hofuf) |
| `data/photo-credits.ts` | Modified | Hofuf group added to `/image-credits` |

**Before:** the page used the shared CityTransferHub template, fed by `cities.ts` and `city-guides.ts`.

## 2. Verified Hofuf and Al-Ahsa facts

| Fact | Source |
|---|---|
| "Al-Ahsa Oasis, an Evolving Cultural Landscape", UNESCO World Heritage List 2018, criteria (iii)(iv)(v) | [UNESCO 1563](https://whc.unesco.org/en/list/1563/documents), [decision](https://whc.unesco.org/en/decisions/?id_decision=7129) |
| UNESCO calls it the largest oasis in the world, with more than 2.5 million palm trees. The page states "more than 2.5 million palm trees, counted by UNESCO" but does not make the superlative claim itself | UNESCO |
| Qasr Ibrahim (in central Al-Hofuf), Suq al-Qaysariyah and Jabal al-Qarah are listed components of the property | UNESCO component list (1563-004/-005; Jabal al-Qarah in the property) |
| Hofuf is the main city of the oasis (Al-Ahsa Governorate, Eastern Province) | — |
| Al-Ahsa International Airport: IATA HOF, ICAO OEAH, south-west of central Hofuf | [GACA](https://gaca.gov.sa/web/en-gb/airport/al-ahsa-airport); [flydubai](https://www.flydubai.com/en/destinations/airports/hofuf-airport) (17 km SW) |
| Qaisariah Souq: covered market; "1822 and after" | Richard Mortel's photo record |
| Qasr Ibrahim: Ottoman-period fortress with a domed mosque | UNESCO component; photos |
| Jabal Al-Qarah: eroded limestone hill with passages and caves, about 14 km east (routing) | UNESCO; photos |

**Not published:** opening hours, admission, visitor facilities, population, tourism numbers.

## 3. Distances (OSRM / Valhalla, 25 Nov 2026)

Endpoints are from Nominatim. Central Hofuf is 25.3797, 49.5865, by Qasr Ibrahim.

| From → to | OSRM | Valhalla | Published |
|---|---|---|---|
| HOF airport → central Hofuf | 17 km · 17 min | 20 km · 26 min | ≈17–20 km, 20–30 min |
| Hofuf → Jabal Al-Qarah (25.4098, 49.6879) | 14 km · 18 min | 14 km · 28 min | ≈14 km east |
| Hofuf → Dammam | 151 km · 1 h 47 | 178 km · 1 h 57 | ≈150–180 km, 1¾–2 h |
| Hofuf → Khobar | 149 km · 1 h 45 | 173 km · 1 h 53 | ≈150–180 km, 1¾–2 h |
| Hofuf → Riyadh | 326 km · 3 h 44 | 326 km · 3 h 43 | ≈325–330 km, 3.5–4 h |
| Hofuf → King Fahd Int'l (DMM) | 169 km · 1 h 56 | 193 km · 2 h 02 | ≈170–190 km |

The two engines take different roads to the coast, which explains the distance spread. The King Fahd Causeway is described only as "starts on the Khobar side of the coast"; no figure is given.

## 4. Content

1. **Hero** (photo of Qasr Ibrahim from above):
   - "Eastern Province · Al-Ahsa Oasis"; the H1; an intro.
   - "Get a Hofuf Quote" and "City transfers overview" buttons.
   - Facts: Eastern Province; UNESCO (2018); HOF ≈17–20 km; main coastal route Hofuf ↔ Dammam ≈150–180 km.
2. **A city grown from the oasis:** UNESCO, the palms, springs and canals; Hofuf as the oasis's market town; the three sites; Hofuf as a base.
3. **Arriving through Al-Ahsa International Airport:** distance and time; pickup confirmed individually; a note distinguishing it from DMM, with a link to the Hofuf ↔ Dammam Airport route.
4. **Discovering the Al-Ahsa Oasis:** three numbered photo cards (Qaisariah Souq, Qasr Ibrahim, Jabal Al-Qarah).
5. **Visiting several places in one day:** list your stops and timings for a quotation, and check opening times with each site (no package, guide, waiting or admission).
6. **Private transfers from Hofuf to other cities:** links to Dammam, Riyadh and Dammam Airport. **No Hofuf–Khobar route page exists**, so Khobar is linked through its city page instead.
7. **Regional connections:** the Eastern Province geography; the causeway as a road transfer only, with documents, entry permission and border formalities the traveller's responsibility; links to Dammam, Khobar, the Bahrain Causeway guide and Al-Ahsa.
8. **Pickup and drop-off places:** six places, plus "any exact address".
9. **How to request:** 5 steps (step 2 is "Destination or stops"), then the QuoteForm (pickup "Hofuf"; message placeholder invites heritage stops) and WhatsApp.
10. **FAQs (10)** and the final CTA.

## 5. Claims removed

- "We track your flight and provide meet-and-greet pickup with a name board in the arrivals hall" (section and FAQ)
- "Fixed-price long-distance transfers from Hofuf"
- "fixed price agreed before you travel" (×4)
- "Places our drivers regularly serve"
- "once you confirm it we schedule your driver"
- "most private-transfer demand here centres on…"
- "comfortable family vehicles are available"
- "heritage tours" and "cave visits" (as packages)
- "the largest oasis in the world" (as our own claim)

**Claims scan of the built page:** 0 matches.

## 6. Photography (all genuine; licences read from Commons metadata; credited on `/image-credits`)

| File | Subject | Author · licence |
|---|---|---|
| `qasr-ibrahim-from-above.webp` (hero, OG, schema image) | Qasr Ibrahim from above | Heritage Commission · CC BY-SA 4.0 (VRTS permission confirmed) |
| `qasr-ibrahim-dome.webp` | Dome and minaret | Richard Mortel · CC BY 2.0 (FlickreviewR ✓) |
| `qaisariah-souq-gate.webp` | Souq facade | Richard Mortel · CC BY 2.0 (FlickreviewR ✓) |
| `qaisariah-souq-interior.webp` | Covered souq lane | Yafa.naif · CC BY-SA 4.0 |
| `jabal-al-qarah-passage.webp` | Passage between rock walls | Shijan Kaakkara · CC BY-SA 4.0 |
| `al-ahsa-palm-groves.webp` | Date palms over a farm wall | Yafa.naif · CC BY-SA 4.0 |

**Rejected:**
- an "Al-Ahsa Oasis" file that is a text graphic;
- YouTube-derived frames and files marked "license review needed";
- a cave display photo.

## 7. SEO and structured data

- **Title:** "Private Transfers in Hofuf | Al-Ahsa Airport & Oasis Heritage".
- **Meta description:** "Private transfers in Hofuf: Al-Ahsa International Airport, Qaisariah Souq, Qasr Ibrahim, Jabal Al-Qarah, and journeys to Dammam, Khobar and Riyadh. Get a quotation."
- **Headings:** one H1 and 9 H2s.
- **Canonical:** self. **hreflang:** en and ar (unchanged). **Robots:** index, follow. **OG image:** Qasr Ibrahim.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage, with `primaryImageOfPage`, author, licence and source.
  - Service, with `areaServed` City Hofuf in the Eastern Province.
  - FAQPage (10), all visible (10/10).
- **No geo meta tags.**

## 8. Quote form

| Check | Result |
|---|---|
| Prefilled | Pickup "Hofuf" |
| Drop-off | Editable |
| Fields present | Date, time, passengers, luggage, vehicle, message (heritage stops can be listed). The flight field appears for airport trips |
| Backend | Shared form and backend unchanged; no submission |
| Mobile | Usable at 500 px |

## 9. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors (also re-run after the final label change) |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the report-66 build | 2 pages: `taxi-service/hofuf` (title, meta, JSON-LD, body) and `image-credits`. None added or removed |
| Internal links (9) | `/city-transfers`, `/routes/hofuf-to-{dammam,riyadh,dammam-airport}`, `/taxi-service/{dammam,khobar,al-ahsa}`, `/border-transfers/bahrain-causeway`. None missing |
| Visual | Desktop 1440 and mobile 500, no overflow |
| Arabic | 0 files changed |

**Post-build change:** the hero fact label "Popular corridor" was changed to "Main coastal route" (data string only), because popularity is not verified.

## 10. Related-page issues (not changed)

1. **`hofuf-to-riyadh`:** 330 km / "About 3 hours 15 min"; routing gives 326 km / ≈3.7 h. It also has about 10 fixed-price, toll, 24/7 or tracking mentions.
2. **`hofuf-to-dammam-airport`:** 155 km / 1 h 40; routing gives 169–193 km / ≈2 h.
3. **`hofuf-to-dammam`:** 160 km / 1 h 45. That is inside the verified range, but it has about 5 fixed-price, toll or 24/7 mentions.
4. **`/taxi-service/al-ahsa`** (city-guides): about 9 matches for fixed price, tracking, name board, meet-and-greet, "regularly serve" or "schedule your driver".
5. **No Al-Ahsa International Airport page exists.** Should a dedicated HOF airport page be created later?
6. **No Hofuf–Khobar route page exists.**

## 11. Owner decisions

1. **Correct the `hofuf-to-riyadh` and `hofuf-to-dammam-airport` figures** (≈3.5–4 h; ≈170–190 km / ≈2 h)?
2. **Do a claims pass on the Hofuf route records and the Al-Ahsa page?**
3. **Create a HOF airport page and/or a Hofuf–Khobar route?**
4. **Arabic:** the Arabic Hofuf page needs parity after native review.

## Git status

Nothing was committed, pushed or deployed. The working tree holds the uncommitted work from reports 61–67.
