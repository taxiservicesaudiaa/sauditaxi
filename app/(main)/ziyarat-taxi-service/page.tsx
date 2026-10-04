import type { Metadata } from "next";
import { ZiyaratTransfersHub } from "@/components/services/ZiyaratTransfersHub";
import { ziyaratTaxiServiceContent } from "@/data/service-pages-v2/ziyarat-taxi-service";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/ziyarat-taxi-service";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Ziyarat Taxi Service", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Private Ziyarat Transfers | Makkah & Madinah",
  description:
    "Private Ziyarat transportation in Makkah and Madinah — multi-stop journeys, hotel pickup, and a driver who waits between stops, priced before you travel.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function ZiyaratTaxiPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Ziyarat Transportation",
            description: ziyaratTaxiServiceContent.dek,
            path,
            serviceType: "Ziyarat Transfer",
          }),
          faqSchema(ziyaratTaxiServiceContent.faqs),
        ]}
      />
      <ZiyaratTransfersHub content={ziyaratTaxiServiceContent} crumbs={crumbs} />
    </>
  );
}
