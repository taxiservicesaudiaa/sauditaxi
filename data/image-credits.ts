/**
 * Attribution for licensed hero images rendered by shared templates that have
 * no caption slot of their own (e.g. components/airport-transfer/AirportTransferHub).
 * A template looks up its hero `src` here and shows the credit only when an
 * entry exists, so pages using project-owned images render unchanged.
 * Licence metadata verified via the Wikipedia API, 24 Nov 2026.
 */
export interface ImageCredit {
  caption: string;
  title: string;
  author: string;
  licence: string;
  licenceUrl?: string;
  source: string;
}

export const IMAGE_CREDITS: Record<string, ImageCredit> = {
  "/images/asir/abha-city-view.webp": {
    caption: "Abha, in the Asir highlands",
    title: "Abha 12",
    author: "Aiman titi",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Abha_12.jpg",
  },
};
