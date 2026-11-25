import { CITY_PHOTOS } from "./abha-city-page";
import { JAZAN_PHOTOS } from "./jazan-city-page";
import { JEDDAH_PHOTOS } from "./jeddah-city-page";
import { TAIF_PHOTOS } from "./jeddah-to-taif-route";
import { PHOTOS as RIYADH_ABHA_PHOTOS } from "./riyadh-to-abha-route";
import { IMAGE_CREDITS } from "./image-credits";

/**
 * Attribution for every licensed (Creative Commons / public-domain) photo used
 * on the site, shown once on /image-credits instead of under each photo
 * (owner decision, 25 Nov 2026). The credit data stays with each page's photo
 * set, so adding a credited photo there lists it here automatically.
 */

export type PhotoCreditItem = {
  src: string;
  caption: string;
  title: string;
  author: string;
  licence: string;
  licenceUrl?: string;
  source: string;
};

export type PhotoCreditGroup = { page: string; href: string; items: PhotoCreditItem[] };

type CreditedPhoto = {
  src: string;
  caption: string;
  credit?: { title: string; author: string; licence: string; licenceUrl?: string; source: string };
};

function items(photos: Record<string, CreditedPhoto>): PhotoCreditItem[] {
  const seen = new Set<string>();
  const out: PhotoCreditItem[] = [];
  for (const p of Object.values(photos)) {
    if (!p.credit || seen.has(p.src)) continue;
    seen.add(p.src);
    out.push({ src: p.src, caption: p.caption, ...p.credit });
  }
  return out;
}

function hubItem(src: string): PhotoCreditItem[] {
  const c = IMAGE_CREDITS[src];
  return c ? [{ src, ...c }] : [];
}

export const PHOTO_CREDIT_GROUPS: PhotoCreditGroup[] = [
  { page: "Private Transfers in Jeddah", href: "/taxi-service/jeddah", items: items(JEDDAH_PHOTOS) },
  { page: "Jeddah to Taif", href: "/routes/jeddah-to-taif", items: items(TAIF_PHOTOS) },
  { page: "Riyadh to Abha", href: "/routes/riyadh-to-abha", items: items(RIYADH_ABHA_PHOTOS) },
  { page: "Private Transfers in Abha", href: "/taxi-service/abha", items: items(CITY_PHOTOS) },
  { page: "Abha Airport Transfers", href: "/airport-transfer/abha-airport", items: hubItem("/images/asir/abha-city-view.webp") },
  { page: "Private Transfers in Jazan", href: "/taxi-service/jazan", items: items(JAZAN_PHOTOS) },
  { page: "Jazan Airport Transfers", href: "/airport-transfer/jazan-airport", items: hubItem("/images/jazan/jazan-mangroves.webp") },
].filter((g) => g.items.length > 0);
