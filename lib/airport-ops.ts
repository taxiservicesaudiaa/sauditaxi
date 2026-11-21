/**
 * Per-airport operational wording rules for templated hotel-transfer pages.
 *
 * Only airports listed in OWNER_CONFIRMED have owner-confirmed rules. Every
 * other airport keeps its existing (legacy) template wording until the owner
 * confirms its rules — see reports/implementation-plan-2026-10/48-….md.
 */
export interface AirportOps {
  /** How the meeting point is described. */
  meeting: "confirmed-per-booking" | "legacy-arrivals-name-board";
  flightTracking: boolean;
  /** Whether a free-waiting allowance may be advertised. */
  freeWaiting: boolean;
  /** Whether "the driver helps with your luggage" may be promised. */
  luggageHelp: boolean;
  /** Whether round-the-clock (24/7) service may be claimed. */
  open247: boolean;
}

const LEGACY: AirportOps = {
  meeting: "legacy-arrivals-name-board",
  flightTracking: true,
  freeWaiting: true,
  luggageHelp: true,
  open247: true,
};

/** Owner decisions, 21 Nov 2026 (report 47). */
const OWNER_CONFIRMED: Record<string, AirportOps> = {
  DMM: { meeting: "confirmed-per-booking", flightTracking: true, freeWaiting: false, luggageHelp: false, open247: false },
};

export function airportOps(code: string | undefined): AirportOps {
  return (code && OWNER_CONFIRMED[code]) || LEGACY;
}
