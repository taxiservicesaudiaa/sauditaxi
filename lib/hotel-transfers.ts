/**
 * Dynamic airport ↔ hotel transfer route system.
 *
 * Given the hotels in data/hotels.ts and the airport that serves each hotel's
 * city (via city.nearestAirportSlug), this module generates two transfer routes
 * per hotel — airport → hotel and hotel → airport — with matching slugs, cross
 * links, distance/duration, and breadcrumbs. Pages, listings, sitemap entries,
 * and structured data all read from here, so adding a hotel (or a whole new
 * city of hotels) needs no new code.
 */
import { hotels, hotelsForCity, type Hotel } from "@/data/hotels";
import { cities, getCity, type City } from "@/data/cities";
import { getAirport, type Airport } from "@/data/airports";
import type { Faq } from "@/data/faqs";
import { airportOps } from "@/lib/airport-ops";

/** Date this generation template's content (angles, FAQs) was last substantively reviewed. */
export const hotelTransfersLastUpdated = "2026-08-05";

export type TransferDirection = "airport-to-hotel" | "hotel-to-airport";

export interface HotelTransfer {
  /** Route slug, unique within the city (used in the URL path). */
  slug: string;
  /** Full page path, e.g. "/jeddah/king-abdulaziz-airport-to-jeddah-hilton". */
  path: string;
  citySlug: string;
  cityName: string;
  hotel: Hotel;
  airport: Airport;
  direction: TransferDirection;
  /** Display name of the origin ("King Abdulaziz Airport" or the hotel name). */
  from: string;
  /** Display name of the destination. */
  to: string;
  fromType: "airport" | "hotel";
  toType: "airport" | "hotel";
  /** null when the hotel's airport distance is not yet verified. */
  distance: string | null;
  duration: string | null;
  /** Slug of the paired (reverse-direction) transfer. */
  reverseSlug: string;
}

// ── Slug / name helpers ──────────────────────────────────────────────────────

function kebab(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Short transfer slug for an airport, e.g. "king-abdulaziz-airport". */
export function airportTransferSlug(airport: Airport): string {
  if (airport.transferSlug) return airport.transferSlug;
  const core = airport.name.replace(/\b(international|regional|airport)\b/gi, "");
  return `${kebab(core)}-airport`;
}

/** Short transfer display name, e.g. "King Abdulaziz Airport". */
export function airportTransferName(airport: Airport): string {
  if (airport.transferName) return airport.transferName;
  return airport.name.replace(/\b(international|regional)\b/gi, "").replace(/\s+/g, " ").trim();
}

export function formatDistance(km: number): string {
  return `${km} km`;
}

export function formatDuration(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  const hrs = `${h} hr${h > 1 ? "s" : ""}`;
  return m ? `${hrs} ${m} min` : hrs;
}

// ── Route generation ─────────────────────────────────────────────────────────

function airportForCity(citySlug: string): Airport | undefined {
  const city = getCity(citySlug);
  if (!city?.nearestAirportSlug) return undefined;
  return getAirport(city.nearestAirportSlug);
}

function buildTransfersForHotel(hotel: Hotel): HotelTransfer[] {
  const city = getCity(hotel.citySlug);
  const airport = airportForCity(hotel.citySlug);
  if (!city || !airport) return [];

  const aSlug = airportTransferSlug(airport);
  const aName = airportTransferName(airport);
  const distance = hotel.distanceKm == null ? null : formatDistance(hotel.distanceKm);
  const duration = hotel.durationMin == null ? null : formatDuration(hotel.durationMin);

  const fromAirportSlug = `${aSlug}-to-${hotel.slug}`;
  const toAirportSlug = `${hotel.slug}-to-${aSlug}`;

  const base = {
    citySlug: hotel.citySlug,
    cityName: city.name,
    hotel,
    airport,
    distance,
    duration,
  };

  return [
    {
      ...base,
      slug: fromAirportSlug,
      path: `/${hotel.citySlug}/${fromAirportSlug}`,
      direction: "airport-to-hotel",
      from: aName,
      to: hotel.name,
      fromType: "airport",
      toType: "hotel",
      reverseSlug: toAirportSlug,
    },
    {
      ...base,
      slug: toAirportSlug,
      path: `/${hotel.citySlug}/${toAirportSlug}`,
      direction: "hotel-to-airport",
      from: hotel.name,
      to: aName,
      fromType: "hotel",
      toType: "airport",
      reverseSlug: fromAirportSlug,
    },
  ];
}

/** Every transfer route across all cities. */
export const hotelTransfers: HotelTransfer[] = hotels.flatMap(buildTransfersForHotel);

const transferMap: Record<string, HotelTransfer> = Object.fromEntries(
  hotelTransfers.map((t) => [`${t.citySlug}/${t.slug}`, t])
);

/** Look up one transfer by city + route slug. */
export function getHotelTransfer(
  citySlug: string,
  slug: string
): HotelTransfer | undefined {
  return transferMap[`${citySlug}/${slug}`];
}

/** All transfers in a city (both directions), airport → hotel first. */
export function transfersForCity(citySlug: string): HotelTransfer[] {
  return hotelTransfers.filter((t) => t.citySlug === citySlug);
}

/** City slugs that have at least one hotel (drive hub generation). */
export function citiesWithHotels(): string[] {
  return Array.from(new Set(hotels.map((h) => h.citySlug)));
}

/** City objects that have hotels, in data order. */
export function hotelCities(): City[] {
  const set = new Set(citiesWithHotels());
  return cities.filter((c) => set.has(c.slug));
}

export { hotelsForCity };

// ── Content variations ───────────────────────────────────────────────────────
//
// 134+ hotel-transfer pages share the same page template, so without some
// deliberate variation they'd read as near-duplicate content to Google (only
// the hotel name and numbers change). Rather than one shared sentence shape,
// every page is assigned one of 5 content "angles" below — each a distinct
// sentence structure that still foregrounds that hotel's own real data
// (blurb, nearby landmarks, area, distance/duration), so pages sharing an
// angle still read differently from each other, not just from the other 4
// angles.
//
// Selection is deterministic (stable across builds, no client JS) and
// context-aware rather than pure random-by-hash:
//   - Makkah/Madinah hotels always get the Pilgrim angle — it's the only one
//     that's actually correct for a Haram-adjacent hotel.
//   - Hotels genuinely close to their airport (<=12km) get the Airport
//     Convenience angle, since that's the hotel's most relevant real fact.
//   - Remaining 5-star hotels alternate between Luxury/Business and
//     Location-based (by a stable hash of the hotel's own slug), so 20+
//     five-star hotels in one city don't all read identically.
//   - Remaining 3-4 star hotels get the Family & Luggage angle.

export type TransferVariation = "luxury" | "airport" | "family" | "pilgrim" | "location";

/** Simple stable string hash (djb2) — deterministic across builds. */
function stableHash(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(hash);
}

export function hotelVariation(hotel: Hotel): TransferVariation {
  if (hotel.citySlug === "makkah" || hotel.citySlug === "madinah") return "pilgrim";
  if (hotel.distanceKm != null && hotel.distanceKm <= 12) return "airport";
  if (hotel.stars === 5) {
    return stableHash(hotel.slug) % 2 === 0 ? "luxury" : "location";
  }
  return "family";
}

function nearbyList(hotel: Hotel): string {
  return hotel.nearby.length > 0 ? hotel.nearby.join(", ") : `central ${hotel.area}`;
}

export function transferIntro(t: HotelTransfer): string {
  const variation = hotelVariation(t.hotel);
  const toAirport = t.direction === "hotel-to-airport";

  switch (variation) {
    case "luxury":
      return toAirport
        ? `A punctual, chauffeur-driven departure transfer from ${t.hotel.name} in ${t.hotel.area} to ${t.airport.name} (${t.airport.code}), timed around your flight.`
        : `A private, chauffeur-driven transfer from ${t.airport.name} (${t.airport.code}) to ${t.hotel.name} — the ${t.hotel.stars}-star address in ${t.hotel.area} favoured by business and executive travellers.`;
    case "airport":
      return toAirport
        ? `${t.hotel.name} is only ${t.distance} from ${t.airport.name} (${t.airport.code}) — a quick, stress-free run for an early flight or a tight connection.`
        : `Landing at ${t.airport.name} (${t.airport.code})? ${t.hotel.name} is only ${t.distance} away — one of the fastest hotel transfers in ${t.cityName}.`;
    case "family":
      return toAirport
        ? `A relaxed, family-friendly departure transfer from ${t.hotel.name} to ${t.airport.name} — one private vehicle for the whole group and all the luggage.`
        : `Travelling with family and bags? This private ${t.from} to ${t.to} transfer gives your group a roomy vehicle straight from arrivals — no dragging suitcases between shared shuttles.`;
    case "pilgrim":
      return toAirport
        ? `A private departure transfer for pilgrims from ${t.hotel.name} in ${t.hotel.area} to ${t.airport.name}, timed so you can complete your final prayers without rushing.`
        : `A private transfer for Umrah and Hajj pilgrims from ${t.airport.name} (${t.airport.code}) directly to ${t.hotel.name}, close to the Haram in ${t.hotel.area} — no shared vans, no waiting.`;
    case "location":
    default:
      return toAirport
        ? `A private ${t.from} to ${t.to} taxi from ${t.hotel.name} in ${t.cityName}'s ${t.hotel.area} district, near ${t.hotel.nearby[0] ?? "the city centre"}, to ${t.airport.name}.`
        : `A private ${t.from} to ${t.to} taxi to ${t.hotel.name}, set in ${t.cityName}'s ${t.hotel.area} district near ${t.hotel.nearby[0] ?? "the city centre"}.`;
  }
}

export function transferAbout(t: HotelTransfer): string {
  const variation = hotelVariation(t.hotel);
  const toAirport = t.direction === "hotel-to-airport";
  const ops = airportOps(t.airport.code);
  const dist =
    t.distance && t.duration
      ? `The drive covers about ${t.distance} and takes approximately ${t.duration}, depending on traffic.`
      : `Driving time depends on traffic; the distance for this hotel is confirmed in your quotation.`;
  const strict = ops.meeting === "confirmed-per-booking";

  switch (variation) {
    case "luxury":
      return toAirport
        ? `We collect you from the lobby of ${t.hotel.name} at the time you choose and drive you directly to ${t.airport.name}, with enough buffer for check-in and lounge access. ${dist} ${t.hotel.blurb}`
        : strict
          ? `Your driver meets you at the meeting point confirmed with your booking at ${t.airport.name} and drives you directly to ${t.hotel.name} in a premium vehicle — no queues and no shared rides. ${dist} ${t.hotel.blurb}`
          : `Your chauffeur meets you at ${t.airport.name} arrivals with a name board, handles your luggage, and drives you directly to ${t.hotel.name} in a premium vehicle — no queues and no shared rides. ${dist} ${t.hotel.blurb}`;
    case "airport":
      return toAirport
        ? `With ${t.hotel.name} just ${t.duration} from the terminal, you can leave later and still arrive relaxed. Your chauffeur collects you from the lobby and drives straight to departures at ${t.airport.name}. ${t.hotel.blurb}`
        : `Because ${t.hotel.name} sits just ${t.distance} from the terminal, your private transfer takes only ${t.duration} door to door — your chauffeur meets you in arrivals, helps with bags, and has you checked in with minimal delay. ${t.hotel.blurb}`;
    case "family":
      return toAirport
        ? `We pick up your whole party from ${t.hotel.name} in ${t.hotel.area}, fit every suitcase and stroller in, and drive directly to ${t.airport.name} with time to spare for check-in. ${dist} ${t.hotel.blurb}`
        : strict
          ? `Your driver meets your whole party at the meeting point confirmed with your booking at ${t.airport.name} and drives everyone directly to ${t.hotel.name} in ${t.hotel.area} in one private vehicle — SUVs and vans can be requested for larger families. ${dist} ${t.hotel.blurb}`
          : `Your chauffeur meets your whole party in the arrivals hall at ${t.airport.name}, loads every bag, and drives everyone directly to ${t.hotel.name} in ${t.hotel.area} in one private vehicle — with family-sized SUVs and vans available on request. ${dist} ${t.hotel.blurb}`;
    case "pilgrim":
      return toAirport
        ? `We collect you and your group from ${t.hotel.name}, allow time for a final visit to the Haram if needed, and drive directly to ${t.airport.name} for your departure. ${dist} ${t.hotel.blurb}`
        : `After you land at ${t.airport.name}, your chauffeur meets you in arrivals, helps with your luggage, and drives you directly to ${t.hotel.name} — one of the hotels nearest the Haram in ${t.hotel.area}. ${dist} ${t.hotel.blurb}`;
    case "location":
    default:
      return toAirport
        ? `Leaving ${t.hotel.name} in ${t.hotel.area} — close to ${nearbyList(t.hotel)} — your chauffeur drives you directly to ${t.airport.name} for departure. ${dist} ${t.hotel.blurb}`
        : `${t.hotel.name} sits in ${t.hotel.area}, within easy reach of ${nearbyList(t.hotel)}. Your ${strict ? "driver meets you at the meeting point confirmed with your booking at" : "chauffeur meets you at"} ${t.airport.name} and drives directly there. ${dist} ${t.hotel.blurb}`;
  }
}

/** The 5th, variation-specific FAQ — vehicle/passenger guidance framed to match the page's angle. */
function variationFaq(t: HotelTransfer): Faq {
  switch (hotelVariation(t.hotel)) {
    case "luxury":
      return {
        question: `Can I book a premium or business-class vehicle for this transfer?`,
        answer: `Yes. Business and executive vehicle options are available for the ${t.from} to ${t.to} transfer, in addition to our standard comfort and SUV classes.`,
      };
    case "airport":
      return {
        question: `Is ${t.hotel.name} really only ${t.duration ?? "a short drive"} from the airport?`,
        answer: `Yes — at around ${t.distance}, ${t.hotel.name} is one of the closest hotels to ${t.airport.name} in ${t.cityName}, so this transfer is one of our shortest and most predictable runs.`,
      };
    case "family":
      return {
        question: `Do you provide child seats or larger vehicles for families?`,
        answer: `Yes. Child seats are available on request, and we offer SUVs, family vans, and minibuses so your whole group and all your luggage travel together in one private vehicle.`,
      };
    case "pilgrim":
      return {
        question: `Can the driver help with Umrah luggage and Zamzam water?`,
        answer: `Yes. Our drivers are used to pilgrim journeys and help load ihram bags and Zamzam water containers, and can accommodate groups travelling together for Umrah or Hajj.`,
      };
    case "location":
    default:
      return {
        question: `Is ${t.hotel.name} close to ${t.hotel.nearby[0] ?? "the main sights in " + t.cityName}?`,
        answer: `Yes. ${t.hotel.name} is in ${t.hotel.area}, within easy reach of ${nearbyList(t.hotel)} — your driver can point out the best routes on arrival.`,
      };
  }
}

export function routeFaqs(t: HotelTransfer): Faq[] {
  const ops = airportOps(t.airport.code);
  const strict = ops.meeting === "confirmed-per-booking";
  const common: Faq[] = [
    {
      question: `How do I book the ${t.from} to ${t.to} taxi?`,
      answer: `Send your date, time${
        t.direction === "airport-to-hotel" ? ", and flight number" : ""
      } through WhatsApp or the quote form. We reply with a quotation for the private ${t.from} to ${t.to} transfer, which you confirm before you travel.`,
    },
    {
      question: `How long is the transfer and how far is it?`,
      answer:
        t.distance && t.duration
          ? `The ${t.from} to ${t.to} transfer is about ${t.distance} and takes approximately ${t.duration}, depending on traffic and time of day.`
          : `The distance and driving time for the ${t.from} to ${t.to} transfer depend on traffic and are confirmed in your quotation.`,
    },
  ];

  const directional: Faq =
    t.direction === "airport-to-hotel"
      ? {
          question: `Where will the driver meet me at ${t.airport.name}?`,
          answer: strict
            ? `The meeting point at ${t.airport.name} (${t.airport.code}) is confirmed individually when you book, and you receive the pickup instructions before you travel.`
            : `Your driver waits in the arrivals hall at ${t.airport.name} (${t.airport.code}) holding a name board, then helps with your luggage to the vehicle.`,
        }
      : {
          question: `When should I be ready for pickup from ${t.hotel.name}?`,
          answer: `We recommend leaving ${t.hotel.name} with enough time for check-in at ${t.airport.name}. Tell us your flight time and we'll advise the ideal pickup and confirm it with you.`,
        };

  const landmark: Faq = {
    question: `What's near ${t.hotel.name} in ${t.hotel.area}?`,
    answer: `${t.hotel.name} is close to ${nearbyList(t.hotel)}, so your driver can also advise on getting to those spots during your stay.`,
  };

  return [
    ...common,
    directional,
    landmark,
    variationFaq(t),
    {
      question: `What if my flight is delayed?`,
      answer: strict
        ? `We track your flight, so a delay or schedule change is picked up and your pickup is reconfirmed with you. Waiting arrangements are set out in your quotation.`
        : `We monitor your flight and adjust the schedule automatically, with free waiting time included, so a change in your arrival never costs you the transfer.`,
    },
    {
      question: `Is the ${t.from} to ${t.to} transfer private, or shared with other passengers?`,
      answer: `It's fully private for your booking only — no shared rides, no other passengers, and no stops beyond your own journey.`,
    },
    {
      question: `Do I need to pay in advance for this transfer?`,
      answer: strict
        ? `Payment terms are set out in your quotation, which you confirm before you travel.`
        : `No prepayment is required. The price is agreed when you book, and you pay the driver directly — in cash (SAR) or by card — on the day.`,
    },
    {
      question: `Can I cancel or change this booking?`,
      answer: strict
        ? `Message us on WhatsApp as early as you can. Change and cancellation terms are set out in your quotation.`
        : `Yes. Since there's no prepayment, you can cancel or change your ${t.from} to ${t.to} booking free of charge with reasonable notice — just message us on WhatsApp.`,
    },
  ];
}
