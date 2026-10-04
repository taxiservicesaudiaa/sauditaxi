export interface Testimonial {
  name: string;
  /** Trip taken — shown under the name and used as review context. */
  trip: string;
  text: string;
  /** Star rating out of 5. */
  rating: number;
}

/**
 * Customer testimonials. Used by the homepage TestimonialSection and
 * TrustSection. No longer feeds Review/AggregateRating structured data
 * (lib/schema.ts) — these are first-party, unverified quotes, which is not
 * a legitimate basis for Review schema per Google's structured-data policy.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Ahmed R.",
    trip: "Jeddah Airport → Makkah",
    text: "Driver was waiting as I exited the Hajj Terminal and took us straight to our hotel near the Haram. Smooth start to our Umrah.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    trip: "Riyadh → AlUla",
    text: "Booked a private SUV for the long drive to AlUla. Comfortable, on time, and the price agreed on WhatsApp was exactly what we paid.",
    rating: 5,
  },
  {
    name: "Imran K.",
    trip: "Khobar → Bahrain",
    text: "Crossed the causeway to Manama without any hassle. The driver guided us through the border and dropped us right at the hotel.",
    rating: 5,
  },
  {
    name: "Fatimah A.",
    trip: "Madinah Airport → Hotel",
    text: "Travelled with my elderly parents. The meet-and-greet made arrival stress-free and the van had plenty of room for our luggage.",
    rating: 5,
  },
  {
    name: "David L.",
    trip: "Riyadh Airport → City Centre",
    text: "Used them for three days of business meetings in Riyadh. Same professional driver each day, always early, fixed daily price.",
    rating: 5,
  },
];

/**
 * Average rating derived from the testimonials above — the only figure here
 * that's directly computed from real data. There used to be a `reviewCount`
 * field hardcoded to 1280, unconnected to the actual number of testimonials
 * (5) or any real review platform — that was a fabricated figure and has
 * been removed. Do not reintroduce a review count here unless it's wired to
 * a real, independently verifiable source (e.g. the Trustpilot API).
 */
export const aggregateRating = {
  ratingValue: Number(
    (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
  ),
  bestRating: 5,
};
