import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { cityTransfersContent } from "@/data/service-pages-v2/city-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/city-transfers";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "City Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "City Transfers Saudi Arabia | Private Local Journeys",
  description:
    "Private city transfers in Saudi Arabia — door-to-door pickup for meetings, hotels, attractions and stations, with a driver for your day, not a shared ride.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function CityTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "City Transfers",
            description: cityTransfersContent.dek,
            path,
            serviceType: "City Transfer",
          }),
          faqSchema(cityTransfersContent.faqs),
        ]}
      />
      <ServiceV2View {...cityTransfersContent} crumbs={crumbs} labels={{ faqHeading: "City Transfer Questions" }} />
    </>
  );
}
