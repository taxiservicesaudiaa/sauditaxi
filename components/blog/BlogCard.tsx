import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Blog } from "@/lib/blogs";
import { formatBlogDate } from "@/lib/format";

/** The fields a card actually renders — any full Blog satisfies this too. */
export type BlogCardData = Pick<
  Blog,
  | "id"
  | "slug"
  | "title"
  | "excerpt"
  | "featuredImage"
  | "featuredImageAlt"
  | "category"
  | "publishedAt"
  | "createdAt"
  | "readingTime"
>;

export function BlogCard({ blog, featured = false }: { blog: BlogCardData; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-2xl border border-hairline bg-white transition-colors hover:border-brass/50 md:grid-cols-2"
          : "group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-colors hover:border-brass/50"
      }
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-sand/40"
        aria-label={blog.title}
      >
        {blog.featuredImage ? (
          <Image
            src={blog.featuredImage}
            alt={blog.featuredImageAlt ?? blog.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={blog.featuredImage.endsWith(".svg")}
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-midnight text-brass">
            <span className="text-sm font-semibold">Saudi Private Transfers</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-midnight/85 px-3 py-1 text-xs font-semibold text-brass backdrop-blur-sm">
          {blog.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          <span>{formatBlogDate(blog.publishedAt ?? blog.createdAt)}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> {blog.readingTime} min read
          </span>
        </div>

        <h3
          className={
            featured
              ? "mt-3 text-2xl font-bold leading-snug text-ink"
              : "mt-3 text-lg font-bold leading-snug text-ink"
          }
        >
          <Link href={`/blog/${blog.slug}`} className="hover:text-brass">
            {blog.title}
          </Link>
        </h3>

        {blog.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{blog.excerpt}</p>
        )}

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight hover:text-brass"
        >
          Read guide <ArrowRight className="size-4 rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
