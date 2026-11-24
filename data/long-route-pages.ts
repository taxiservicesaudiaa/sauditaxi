import type { Faq } from "@/data/faqs";
import type { LongRouteContent } from "@/components/routes/LongDistanceRouteView";
import { MAKKAH_DAMMAM, MAKKAH_DAMMAM_FAQS } from "@/data/makkah-to-dammam-route";
import { RIYADH_HAIL, RIYADH_HAIL_FAQS } from "@/data/riyadh-to-hail-route";
import { RIYADH_QASSIM, RIYADH_QASSIM_FAQS, RIYADH_QASSIM_PATH, RIYADH_QASSIM_REVIEWED } from "@/data/riyadh-to-qassim-route";
import { JUBAIL_RIYADH, JUBAIL_RIYADH_FAQS, JUBAIL_RIYADH_PATH, JUBAIL_RIYADH_REVIEWED } from "@/data/jubail-to-riyadh-route";
import { DMM_ABQAIQ, DMM_ABQAIQ_FAQS, DMM_ABQAIQ_PATH, DMM_ABQAIQ_REVIEWED } from "@/data/dammam-airport-to-abqaiq-route";
import { NEOM, NEOM_FAQS, NEOM_PATH, NEOM_REVIEWED } from "@/data/riyadh-to-neom-route";
import { ABHA, ABHA_FAQS, ABHA_PATH, ABHA_REVIEWED, PHOTOS as ABHA_PHOTOS } from "@/data/riyadh-to-abha-route";
import { TAIF, TAIF_FAQS, TAIF_PATH, TAIF_PHOTOS, TAIF_REVIEWED } from "@/data/jeddah-to-taif-route";
import { DAMMAM_KHAFJI, DAMMAM_KHAFJI_FAQS, DAMMAM_KHAFJI_PATH, DAMMAM_KHAFJI_REVIEWED } from "@/data/dammam-to-al-khafji-route";

/**
 * Hand-written route pages that render their own layout instead of the shared
 * route templates. Each has its own content file and, per the owner's
 * direction, its own visual design:
 *   "default"     → components/routes/LongDistanceRouteView.tsx (makkah-to-dammam)
 *   "riyadh-hail" → components/routes/RiyadhHailRouteView.tsx
 *   "khafji"      → components/routes/DammamKhafjiRouteView.tsx
 *   "qassim"      → components/routes/RiyadhQassimRouteView.tsx
 *   "jubail"      → components/routes/JubailRiyadhRouteView.tsx
 *   "dmm-abqaiq"  → components/routes/DmmAbqaiqRouteView.tsx
 *   "neom"        → components/routes/RiyadhNeomRouteView.tsx
 *   "abha"        → components/routes/RiyadhAbhaRouteView.tsx
 *   "taif"        → components/routes/JeddahTaifRouteView.tsx
 */
export interface LongRoutePage {
  path: string;
  reviewed: string;
  h1: string;
  /** Answer-first summary used as the WebPage/Service description. */
  summary: string;
  faqs: Faq[];
  serviceName: string;
  areaServed: string[];
  view: "default" | "riyadh-hail" | "khafji" | "qassim" | "jubail" | "dmm-abqaiq" | "neom" | "abha" | "taif";
  /** Primary page image (emitted as WebPage.primaryImageOfPage). */
  image?: { src: string; alt: string; credit?: { author: string; licence: string; licenceUrl?: string; source: string } };
  /** Places with coordinates: emitted as areaServed City nodes with GeoCoordinates. */
  places?: { name: string; lat: number; lon: number; region?: string }[];
  /** Destination geo meta tags (geo.region / geo.placename / geo.position / ICBM). */
  geo?: { region: string; placename: string; lat: number; lon: number };
  /** Open Graph image override for this page only. */
  ogImage?: string;
  /** Related route cards for views without shared-template content. */
  related?: { slug: string; text: string }[];
  /** Shared-template content (needed by "default" and "riyadh-hail"). */
  content?: LongRouteContent;
}

export const longRoutePages: Record<string, LongRoutePage> = {
  "makkah-to-dammam": {
    path: MAKKAH_DAMMAM.path,
    reviewed: MAKKAH_DAMMAM.reviewed,
    h1: MAKKAH_DAMMAM.hero.h1,
    summary: MAKKAH_DAMMAM.quickAnswer,
    content: MAKKAH_DAMMAM,
    faqs: MAKKAH_DAMMAM_FAQS,
    serviceName: "Makkah to Dammam Private Transfer",
    areaServed: ["Makkah", "Riyadh", "Dammam", "Khobar", "Dhahran"],
    view: "default",
  },
  "riyadh-to-hail": {
    path: RIYADH_HAIL.path,
    reviewed: RIYADH_HAIL.reviewed,
    h1: RIYADH_HAIL.hero.h1,
    summary: RIYADH_HAIL.quickAnswer,
    content: RIYADH_HAIL,
    faqs: RIYADH_HAIL_FAQS,
    serviceName: "Riyadh to Hail Private Transfer",
    areaServed: ["Riyadh", "Buraidah", "Hail"],
    view: "riyadh-hail",
  },
  "dammam-to-al-khafji": {
    path: DAMMAM_KHAFJI_PATH,
    reviewed: DAMMAM_KHAFJI_REVIEWED,
    h1: DAMMAM_KHAFJI.hero.h1,
    summary: DAMMAM_KHAFJI.quick.answer,
    faqs: DAMMAM_KHAFJI_FAQS,
    serviceName: "Dammam to Al Khafji Private Transfer",
    areaServed: ["Dammam", "Al Khafji"],
    view: "khafji",
  },
  "riyadh-to-qassim": {
    path: RIYADH_QASSIM_PATH,
    reviewed: RIYADH_QASSIM_REVIEWED,
    h1: RIYADH_QASSIM.hero.h1,
    summary: RIYADH_QASSIM.glance.answer,
    faqs: RIYADH_QASSIM_FAQS,
    serviceName: "Riyadh to Qassim Private Transfer",
    areaServed: ["Riyadh", "Buraidah", "Unaizah"],
    view: "qassim",
    related: RIYADH_QASSIM.related.routes,
  },
  "jubail-to-riyadh": {
    path: JUBAIL_RIYADH_PATH,
    reviewed: JUBAIL_RIYADH_REVIEWED,
    h1: JUBAIL_RIYADH.hero.h1,
    summary: JUBAIL_RIYADH.glance.answer,
    faqs: JUBAIL_RIYADH_FAQS,
    serviceName: "Jubail to Riyadh Private Transfer",
    areaServed: ["Jubail", "Riyadh"],
    view: "jubail",
  },
  "dammam-airport-to-abqaiq": {
    path: DMM_ABQAIQ_PATH,
    reviewed: DMM_ABQAIQ_REVIEWED,
    h1: DMM_ABQAIQ.hero.h1,
    summary: DMM_ABQAIQ.board.answer,
    faqs: DMM_ABQAIQ_FAQS,
    serviceName: "Dammam Airport to Abqaiq Private Transfer",
    areaServed: ["Dammam", "Abqaiq"],
    view: "dmm-abqaiq",
    related: DMM_ABQAIQ.related.routes,
  },
  "riyadh-to-neom": {
    path: NEOM_PATH,
    reviewed: NEOM_REVIEWED,
    h1: NEOM.hero.h1,
    summary: NEOM.glance.answer,
    faqs: NEOM_FAQS,
    serviceName: "Riyadh to NEOM Private Transfer",
    areaServed: ["Riyadh", "Tabuk", "NEOM"],
    view: "neom",
    image: NEOM.hero.image,
  },
  "riyadh-to-abha": {
    path: ABHA_PATH,
    reviewed: ABHA_REVIEWED,
    h1: ABHA.hero.h1,
    summary: ABHA.glance.answer,
    faqs: ABHA_FAQS,
    serviceName: "Riyadh to Abha Private Transfer",
    areaServed: ["Riyadh", "Abha"],
    view: "abha",
    image: { src: ABHA_PHOTOS.hero.src, alt: ABHA_PHOTOS.hero.alt, credit: ABHA_PHOTOS.hero.credit },
    places: [
      { name: "Riyadh", lat: 24.7136, lon: 46.6753, region: "Riyadh Region" },
      { name: "Abha", lat: 18.2164, lon: 42.5053, region: "Asir Region" },
    ],
    geo: { region: "SA-14", placename: "Abha, Asir Region, Saudi Arabia", lat: 18.2164, lon: 42.5053 },
    ogImage: ABHA_PHOTOS.hero.src,
  },
  "jeddah-to-taif": {
    path: TAIF_PATH,
    reviewed: TAIF_REVIEWED,
    h1: TAIF.hero.h1,
    summary: TAIF.glance.answer,
    faqs: TAIF_FAQS,
    serviceName: "Jeddah to Taif Private Transfer",
    areaServed: ["Jeddah", "Taif"],
    view: "taif",
    image: { src: TAIF_PHOTOS.hero.src, alt: TAIF_PHOTOS.hero.alt, credit: TAIF_PHOTOS.hero.credit },
    places: [
      { name: "Jeddah", lat: 21.4858, lon: 39.1925, region: "Makkah Province" },
      { name: "Taif", lat: 21.2703, lon: 40.4158, region: "Makkah Province" },
    ],
    ogImage: TAIF_PHOTOS.hero.src,
  },
};
