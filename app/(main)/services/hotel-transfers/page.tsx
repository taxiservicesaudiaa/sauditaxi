import type { Metadata } from "next";
import { HotelTransfersHub } from "@/components/services/HotelTransfersHub";
import { hotelTransfersContent } from "@/data/service-pages-v2/hotel-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/services/hotel-transfers";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Hotel Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Private Hotel Transfers Saudi Arabia | Airport, City & Makkah",
  description:
    "Private hotel transfers in Saudi Arabia — airport to hotel, hotel to hotel, or hotel to Makkah and Madinah, with pickup from the lobby and a fixed price.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function HotelTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Hotel Transfers",
            description: hotelTransfersContent.dek,
            path,
            serviceType: "Hotel Transfer",
          }),
          faqSchema(hotelTransfersContent.faqs),
        ]}
      />
      <HotelTransfersHub content={hotelTransfersContent} crumbs={crumbs} />
    </>
  );
}
