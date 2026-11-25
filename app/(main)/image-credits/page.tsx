import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { PHOTO_CREDIT_GROUPS } from "@/data/photo-credits";

/**
 * /image-credits — one place for the attribution required by the Creative
 * Commons licences of the photos used on the site (owner decision, 25 Nov
 * 2026: no credit lines under the photos themselves). Linked from the footer.
 */

const path = "/image-credits";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Image Credits", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Image Credits | Saudi Private Transfers",
  description:
    "Credits and licences for the photographs used on Saudi Private Transfers, with links to each original image on Wikimedia Commons.",
  path,
});

export default function ImageCreditsPage() {
  const total = PHOTO_CREDIT_GROUPS.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Image credits</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Many of the photographs on this site are shared by their authors under Creative Commons licences. We are
            grateful to them. Each photo below is listed with its author, licence and a link to the original. Photos have
            been resized and converted to WebP for the web.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-ink-muted">{total} photos, grouped by the page they appear on.</p>
        {PHOTO_CREDIT_GROUPS.map((g) => (
          <section key={g.href} aria-labelledby={`g-${g.href}`} className="mt-10">
            <h2 id={`g-${g.href}`} className="text-xl font-bold text-ink">
              <Link href={g.href} className="hover:text-brass">
                {g.page}
              </Link>
            </h2>
            <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
              {g.items.map((p) => (
                <li key={p.src} className="flex gap-4 py-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-sand-soft">
                    <Image src={p.src} alt="" fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="min-w-0 text-sm leading-relaxed text-ink-soft">
                    <p className="font-medium text-ink">{p.caption}</p>
                    <p className="mt-1 break-words">
                      “{p.title}” by {p.author},{" "}
                      {p.licenceUrl ? (
                        <a href={p.licenceUrl} rel="license noopener" target="_blank" className="underline hover:text-brass">
                          {p.licence}
                        </a>
                      ) : (
                        p.licence
                      )}
                      , via{" "}
                      <a href={p.source} rel="noopener" target="_blank" className="underline hover:text-brass">
                        Wikimedia Commons
                      </a>
                      .
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
