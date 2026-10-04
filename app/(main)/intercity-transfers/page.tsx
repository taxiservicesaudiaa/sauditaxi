import type { Metadata } from "next";
import { IntercityTransfersHub } from "@/components/services/IntercityTransfersHub";
import { intercityTransfersContent } from "@/data/service-pages-v2/intercity-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/intercity-transfers";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Intercity Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Intercity Transfers Saudi Arabia | Private City-to-City Travel",
  description:
    "Private transfers between Saudi cities — a direct drive, luggage-matched vehicle, and one departure time, without shared stops along the way.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function IntercityTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Intercity Transfers",
            description: intercityTransfersContent.dek,
            path,
            serviceType: "Intercity Transfer",
          }),
          faqSchema(intercityTransfersContent.faqs),
        ]}
      />
      <IntercityTransfersHub content={intercityTransfersContent} crumbs={crumbs} />
    </>
  );
}
