import type { Faq } from "@/data/faqs";
import type { LongRouteContent } from "@/components/routes/LongDistanceRouteView";
import { MAKKAH_DAMMAM, MAKKAH_DAMMAM_FAQS } from "@/data/makkah-to-dammam-route";
import { RIYADH_HAIL, RIYADH_HAIL_FAQS } from "@/data/riyadh-to-hail-route";

/**
 * Route slugs rendered by components/routes/LongDistanceRouteView.tsx instead
 * of the shared route templates. Add a slug here only with its own
 * hand-written content file.
 */
export const longRoutePages: Record<
  string,
  {
    content: LongRouteContent;
    faqs: Faq[];
    serviceName: string;
    areaServed: string[];
    /** "riyadh-hail" renders its own distinct layout; default is LongDistanceRouteView. */
    view?: "default" | "riyadh-hail";
  }
> = {
  "makkah-to-dammam": {
    content: MAKKAH_DAMMAM,
    faqs: MAKKAH_DAMMAM_FAQS,
    serviceName: "Makkah to Dammam Private Transfer",
    areaServed: ["Makkah", "Riyadh", "Dammam", "Khobar", "Dhahran"],
  },
  "riyadh-to-hail": {
    content: RIYADH_HAIL,
    faqs: RIYADH_HAIL_FAQS,
    serviceName: "Riyadh to Hail Private Transfer",
    areaServed: ["Riyadh", "Buraidah", "Hail"],
    view: "riyadh-hail",
  },
};
