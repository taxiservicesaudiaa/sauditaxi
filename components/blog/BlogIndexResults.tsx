"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { BlogCard, type BlogCardData } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";

export type BlogIndexItem = BlogCardData & { focusKeyword: string | null };

interface ViewProps {
  blogs: BlogIndexItem[];
  categories: { name: string; count: number }[];
  category?: string;
  q?: string;
}

/**
 * The /blog listing — category chips, search box, and results. Filtering runs
 * in the browser so the /blog page itself stays prerendered; reading
 * ?category= / ?q= on the server made it render on every request, which on
 * the Cloudflare Workers Free plan exceeds the CPU limit (error 1102). Search
 * matches the same fields the old server query did (title, excerpt, focus
 * keyword), case-insensitively.
 */
export function BlogIndexView({ blogs: all, categories, category, q }: ViewProps) {
  const filtering = Boolean(category || q);
  const term = (q ?? "").replace(/[%,]/g, " ").trim().toLowerCase();
  const blogs = all.filter(
    (b) =>
      (!category || b.category === category) &&
      (!term ||
        [b.title, b.excerpt, b.focusKeyword].some((f) => f?.toLowerCase().includes(term)))
  );

  const featured = !filtering ? blogs[0] : undefined;
  const rest = featured ? blogs.slice(1) : blogs;

  return (
    <>
      {/* Filters + search */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              !category
                ? "border-brass bg-brass text-midnight"
                : "border-hairline text-ink hover:border-brass"
            )}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.name}
              href={`/blog?category=${encodeURIComponent(c.name)}`}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                category === c.name
                  ? "border-brass bg-brass text-midnight"
                  : "border-hairline text-ink hover:border-brass"
              )}
            >
              {c.name} <span className="text-ink-muted">({c.count})</span>
            </Link>
          ))}
        </div>

        <form action="/blog" method="get" className="relative w-full lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted" />
          <input
            key={q ?? ""}
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Search guides…"
            className="h-11 w-full rounded-full border border-hairline bg-white pl-9 pr-4 text-sm text-ink focus-visible:border-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/30"
          />
        </form>
      </div>

      {/* Results */}
      {blogs.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-hairline py-16 text-center">
          <p className="text-lg font-semibold text-ink">No articles found</p>
          <p className="mt-1 text-sm text-ink-soft">
            {filtering
              ? "Try a different category or search term."
              : "Our travel guides are on the way — check back soon."}
          </p>
          {filtering && (
            <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-ink underline">
              Clear filters
            </Link>
          )}
        </div>
      ) : (
        <>
          {filtering && (
            <p className="mt-8 text-sm text-ink-soft">
              {blogs.length} {blogs.length === 1 ? "article" : "articles"}
              {category ? ` in ${category}` : ""}
              {q ? ` matching “${q}”` : ""}
            </p>
          )}

          {featured && (
            <div className="mt-8">
              <BlogCard blog={featured} featured />
            </div>
          )}

          {rest.length > 0 && (
            <>
              {!filtering && <h2 className="mt-14 text-xl font-bold text-ink">Latest guides</h2>}
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((b) => (
                  <BlogCard key={b.id} blog={b} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

/** Reads ?category= / ?q= in the browser. Render inside <Suspense>. */
export function BlogIndexResults(props: Omit<ViewProps, "category" | "q">) {
  const params = useSearchParams();
  return (
    <BlogIndexView
      {...props}
      category={params.get("category") ?? undefined}
      q={params.get("q") ?? undefined}
    />
  );
}
