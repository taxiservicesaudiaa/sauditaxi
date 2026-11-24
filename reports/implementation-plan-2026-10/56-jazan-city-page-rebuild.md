# 56 — Jazan city page rebuild (`/taxi-service/jazan`) (local only)

**Date:** 24 November 2026. **Nothing committed, pushed or deployed; no indexing requests; no production lead; CMS and Arabic untouched.**

## 1. Research and fact sheet

| Fact | Value | Source |
|---|---|---|
| Jazan (Jizan) | Capital of Jazan Province, south-western Red Sea coast; ≈4 m elevation; Port of Jazan in the city | Wikipedia; Copernicus DEM |
| Farasan Islands | Archipelago ≈40 km offshore; Farasan Islands Governorate; protected area a UNESCO Biosphere Reserve (2021) | Wikipedia |
| Jazan-side ferry terminal | OpenStreetMap ferry terminal at 16.8932, 42.5342 (Al-Sahil, port area), next to a ferry-passenger car park; ≈4 km from the centre, ≈7 km from the airport | Nominatim / OSM; OSRM |
| Airport | King Abdullah bin Abdulaziz International Airport (GIZ), "Jizan airport"; ≈4 km from the centre | Wikipedia; OSRM |
| Corniche | North Corniche (≈6 km) and South Corniche | OSM |
| Fayfa (Fifa) Mountains | Around the town of Fayfa (17.26 N, 43.11 E); ≈100 km by road; Fayfa town ≈1,690 m | Wikipedia; Nominatim; OSRM; DEM |
| Jazan City for Primary and Downstream Industries (formerly Jazan Economic City) | Planned industrial city (energy and manufacturing); ≈73 km north | Wikipedia; OSRM. Current status not described beyond this |
| Jazan → Abha | OSRM 200 km / 2.4 h · Valhalla 216 km / 2.8 h | Published as ≈200–215 km, ≈2.5–3 h |
| Jazan → Najran | OSRM 326 km / 4.7 h · Valhalla 328 km / 5.7 h | Published as ≈325–330 km, ≈5–6 h |
| Jazan → Riyadh | OSRM 1,140 km / 13.7 h · Valhalla 1,192 km / 15.2 h | **Not shown.** The route records say 1,000 km / 10 h (flagged) |

**Not stated anywhere:** ferry operator, schedules, fares, ticketing or boarding rules, terminal procedures, opening hours.

**Service coverage:**
- Every destination is described as something customers can request, subject to quotation.
- No location is presented as a confirmed service area.
- Industrial and controlled sites: access is never guaranteed.

## 2. Page structure (coastal layout, not shared with Abha)
1. **Hero:**
   - Full-bleed sunset photo of the South Corniche, with content anchored at the bottom.
   - H1 "Private Transfers in Jazan" and a two-paragraph intro.
   - CTAs "Get a Jazan Quote" and "City Transfers Overview".
   - A three-colour **tide strip**: Coast · Islands · Highlands with distances.
2. **Coast, islands and highlands:**
   - A photographic triptych. Each part has its journey type and what to send.
   - A to-scale **distance ruler** from central Jazan (sea-teal band).
3. **Arriving at Jazan Airport:** GIZ in four steps (flight details, exact address, meeting point confirmed individually, message us about changes since flights aren't tracked automatically), plus a link to the airport page.
4. **Farasan Islands: getting to the ferry terminal** (centrepiece, teal band):
   - Five-node journey diagram: Hotel → Road transfer → Jazan ferry terminal → *Ferry crossing* → *Farasan Islands*. The last two are dashed and marked "Not part of the transfer".
   - An explicit "does not include or operate the crossing; can't guarantee sailings, tickets or space; vehicles don't travel to the islands" note.
   - Five planning points and a five-photo gallery: Farasan port ferry, flamingos, Ottoman fort, the ISS photo, and a pearl-merchant's house.
5. **Fayfa Mountains and inland journeys:** narrative (≈100 km, ≈1,700 m, steep winding roads, cloud, extra time), photo, a **transfer-or-tour** comparison (no guide, waiting only if quoted) and what to send.
6. **Travelling around Jazan city:** corniche sections, exact addresses, the industrial city (access not guaranteed), tips and a mangrove photo.
7. **Choose your journey:** eight cards (airport ↔ hotel, ferry terminal, Fayfa, Abha, Najran, business, families), each with an existing link or an in-page anchor.
8. **Jazan to other southern Saudi cities:** table (Abha, Najran with verified figures; Riyadh linked without a figure) and a note that no Jazan–Abha or Jazan–Najran route page exists yet.
9. **Families, groups and luggage:** fleet table (`data/vehicles.ts`), an equipment note (diving gear confirmed in the quotation, not guaranteed) and the approved child-seat wording.
10. **Checklist:** nine "preparation" checkboxes beside a "confirmed in your quotation" panel.
11. **How to request:** five steps, then the shared QuoteForm (pickup "Jazan", flight field when an airport is typed, ferry and child-seat placeholder).
12. **FAQs:** the 14 briefed questions; native accordion.
13. Method note, visible photo credits, final CTA.

## 3. SEO, metadata and schema
- **Title:** "Private Transfers in Jazan | Airport, Farasan Ferry & Fayfa".
- **Meta:** "Private transfers in Jazan: the airport, hotels, the Farasan Islands ferry terminal, the Fayfa Mountains, Abha and Najran. Share your plans to receive a quotation."
- **OG image:** the sunset photo. **Geo meta:** `geo.region` SA-09, `geo.placename` "Jazan, Jazan Province, Saudi Arabia", position and ICBM 16.8892;42.5611 (city centre).
- **Unchanged:** canonical self; hreflang en + ar; `index, follow`; in the sitemap; breadcrumb Home › City Transfers › Jazan Taxi.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage with `primaryImageOfPage` (licence, creator, `acquireLicensePage`).
  - Service with areaServed City "Jazan" (`alternateName` "Jizan", `containedInPlace` Jazan Province, GeoCoordinates).
  - FAQPage (14, matching the visible FAQs).
  - Page-level TaxiService duplicate removed for this page.
- **Entities covered:** Jazan / Jizan, Jazan Province, Red Sea, Farasan Islands, Jazan ferry terminal, GIZ, North and South Corniche, Fayfa Mountains, JCPDI, Abha, Najran.

## 4. Images (11; all genuine; licences read from Commons metadata via the Wikipedia API; commercial use permitted)
| File (`public/images/jazan/`) | Subject | Author · licence | Source check |
|---|---|---|---|
| `jazan-sunset-corniche.webp` (hero) | Sunset from Jazan South Corniche | MrJoker07 · CC BY-SA 3.0 | Own work |
| `jazan-mangroves.webp` | Mangroves and flamingos, Jazan shore | Saudi Press Agency · CC BY-SA 4.0 | SPA Creative Commons portal (cc.spa.gov.sa) |
| `jazan-mangroves-2.webp` | Coastal mangrove birdlife | SPA · CC BY-SA 4.0 | SPA CC portal |
| `farasan-red-sea.webp` | Red Sea at Farasan Island | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `farasan-port.webp` | Passenger ferry at **Farasan Island** port (captioned as the island end) | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `farasan-fort.webp` | Ottoman fort, Farasan | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `farasan-house.webp` | Pearl merchant's house interior, Farasan | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `farasan-flamingos.webp` | Flamingos, Farasan | SPA · CC BY-SA 4.0 | SPA CC portal |
| `iss-farasan.webp` | Farasan Islands from the ISS | NASA · public domain | US Government work |
| `fayfa-mountains.webp` | Fayfa terraces, coastal plain below | SPA · CC BY-SA 4.0 | SPA CC portal |
| `fayfa-mountains-2.webp` | Fayfa slopes and winding roads | SPA · CC BY-SA 4.0 | SPA CC portal |

- Credits appear in each caption, plus a full visible list (title, author, licence link, source link, "resized and converted to WebP").
- **Sizes:** total ≈1.8 MB, with the hero at 99 KB. The hero loads first; everything else lazy-loads.

**Missing assets:**
1. The Jazan-side ferry terminal itself.
2. Jazan Corniche in daylight, and the city skyline.
3. GIZ airport.
4. Al-Dosariyah fort: a licensed photo was found, but Wikimedia rate-limited the download; it can be added later.
5. Genuine fleet photos.

## 5. Internal links (all exist)
- **From this page:** `/city-transfers`, `/airport-transfer/jazan-airport`, `/taxi-service/abha`, `/taxi-service/najran`, `/routes/jizan-to-riyadh`, `/routes/riyadh-to-jizan` (plus the breadcrumb and in-page anchors).
- **Back-links:** `/airport-transfer/jazan-airport`, `/taxi-service/najran` and `/routes/jizan-to-riyadh` already link to Jazan. **Added:** an "Abha to Jazan" card on `/taxi-service/abha` (≈200–215 km · approx. 2.5–3 hours).
- **Not linked:** no `jazan-to-abha` or `jazan-to-najran` route pages exist. None were created.

## 6. Checks
| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | New files clean; repo total unchanged (10 existing problems) |
| Production build (isolated checkout of `84c23d5` + these files) | 905/905 |
| Site-wide comparison | `taxi-service/jazan` (title, meta, JSON-LD, main) and `taxi-service/abha` (new Jazan card). Nothing else, apart from the Dammam page, which differs only from an older comparison snapshot |
| HTTP | 200 |
| Canonical / hreflang / robots / sitemap | Correct |
| JSON-LD | Parses; FAQPage(14) matches the visible FAQs |
| Claims scan | No fixed price, 24/7, free waiting, name board, meet-and-greet, flight tracking, luggage help, "best" or "professional" claims. "Guarantee" appears only in negatives (ferry, sites, equipment) |
| Images | 12 `<img>` (11 photos + decorative CTA background with empty alt); hero eager, the rest lazy |
| Overlap | 0.1% vs `/airport-transfer/jazan-airport`. 7.6% vs `/taxi-service/abha` (down from 11% after rewording six FAQ and intro texts); what remains is the shared fleet table, the form and the mandated policy wording (child seats, quotation) |
| Responsive | Desktop 1440 and mobile 500: no page overflow; the ferry diagram stacks on mobile; tables scroll in their own frames |
| Form | Shared QuoteForm unchanged; serviceType "Jazan city transfer (City: Jazan)"; pickup prefilled "Jazan". Not submitted |

## 7. Consistency and owner decisions
1. **`/airport-transfer/jazan-airport`** still says:
   - "Your driver tracks your flight, meets you in the arrivals hall";
   - "name board";
   - "at a fixed price";
   - "drivers assist with luggage";
   - "no prepayment required".
   16 such phrases conflict with this page. It needs the same pass as Abha Airport. Shall I apply it?
2. **`/routes/jizan-to-riyadh` and `/routes/riyadh-to-jizan`** say 1,000 km / 10 hours. Measured: ≈1,140–1,190 km / ≈13.5–15 h. Correct them?
3. **Jazan–Abha and Jazan–Najran:** no dedicated route pages. Create them later, or keep requests via the city pages?
4. **Ferry:** confirm you're happy with the wording "road transfer to the terminal only; crossing arranged separately". Do you offer return pickups at the terminal?
5. **Farasan:** confirm the service never includes on-island transport (the page doesn't offer it).

## 8. Files
| File | Status |
|---|---|
| `data/jazan-city-page.ts` | New |
| `components/city-transfer/JazanCityView.tsx` | New |
| `public/images/jazan/*.webp` (11) | New |
| `app/(main)/taxi-service/[city]/page.tsx` | Jazan branch and schema; geo/OG map shared by Abha and Jazan (Abha output unchanged) |
| `data/cities.ts` | Jazan `metaTitle` / `metaDescription` |
| `data/abha-city-page.ts` | "Abha to Jazan" card |
| `reports/…/56-jazan-city-page-rebuild.md` | This report |
