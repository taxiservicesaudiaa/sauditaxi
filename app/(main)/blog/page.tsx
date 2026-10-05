import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlogIndexResults, BlogIndexView, type BlogIndexItem } from "@/components/blog/BlogIndexResults";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { listPublishedBlogsStrict } from "@/lib/blogs";

// Fully prerendered: no revalidate and no server-side searchParams. Category
// and search filtering happen in the browser (BlogIndexResults) — on the
// Cloudflare Workers Free plan, rendering this page per request exceeded the
// CPU limit (error 1102). New posts appear after the next deploy.

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = buildMetadata({
  title: "Saudi Arabia Travel & Transfer Guides – Blog",
  description:
    "Expert guides on getting around Saudi Arabia — airport transfers, Makkah and Madinah routes, Riyadh travel, and Umrah and Hajj transport tips.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  // Strict: a build that can't reach Supabase fails instead of prerendering
  // an empty blog index (see lib/blogs.ts).
  const all = await listPublishedBlogsStrict();

  const blogs: BlogIndexItem[] = all.map((b) => ({
    id: b.id,
    slug: b.slug,
    title: b.title,
    excerpt: b.excerpt,
    featuredImage: b.featuredImage,
    featuredImageAlt: b.featuredImageAlt,
    category: b.category,
    publishedAt: b.publishedAt,
    createdAt: b.createdAt,
    readingTime: b.readingTime,
    focusKeyword: b.focusKeyword,
  }));

  // Same order as before: first appearance in the newest-first list.
  const counts = new Map<string, number>();
  for (const b of blogs) counts.set(b.category, (counts.get(b.category) ?? 0) + 1);
  const categories = [...counts.entries()].map(([name, count]) => ({ name, count }));

  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />

      {/* Hero — editorial identity for the blog, distinct from the City Hub /
          Point Transfer heroes, still on the Midnight/Sand/Brass system. */}
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5 text-white/40 rtl:rotate-180" />}
                {i === crumbs.length - 1 ? (
                  <span className="text-white/85">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Travel &amp; Transfer Guides
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Saudi Arabia Taxi &amp; Travel Blog
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Practical guides to airport transfers, intercity routes, Umrah and Hajj transport, and
            getting around Saudi Arabia by private taxi.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* The fallback is the full, unfiltered list — that's the HTML crawlers
              and no-JS visitors get; the browser then applies ?category=/?q=. */}
          <Suspense fallback={<BlogIndexView blogs={blogs} categories={categories} />}>
            <BlogIndexResults blogs={blogs} categories={categories} />
          </Suspense>
        </div>
      </section>

      <CTASection />
    </>
  );
}
