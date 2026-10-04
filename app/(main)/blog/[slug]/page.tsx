import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, CalendarDays, User, Tag, ListTree, ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatBlogDate } from "@/lib/format";
import {
  getPublishedBlogBySlug,
  getRelatedBlogs,
  getAdjacentBlogs,
  extractToc,
} from "@/lib/blogs";

export const revalidate = 300;

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) {
    return buildMetadata({
      title: "Article not found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      index: false,
    });
  }

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt || siteConfig.description;
  const image = blog.featuredImage || siteConfig.ogImage;

  const blogPath = `/blog/${blog.slug}`;
  const blogArPath = getArPathForEnPathLight(blogPath);
  const meta = buildMetadata({
    title,
    description,
    path: blogPath,
    image,
    ...(blogArPath ? { alternateLanguages: { en: blogPath, ar: blogArPath } } : {}),
  });

  // Upgrade Open Graph to an article with publish/update times + keywords.
  meta.openGraph = {
    ...meta.openGraph,
    type: "article",
    publishedTime: blog.publishedAt ?? undefined,
    modifiedTime: blog.updatedAt,
    authors: [blog.author],
    section: blog.category,
    tags: blog.tags,
  };
  if (blog.focusKeyword || blog.secondaryKeywords.length) {
    meta.keywords = [blog.focusKeyword, ...blog.secondaryKeywords].filter(Boolean) as string[];
  }
  return meta;
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) notFound();

  const related = await getRelatedBlogs(blog, 3);
  const { prev, next } = await getAdjacentBlogs(blog.slug);
  const toc = extractToc(blog.content);
  const url = absoluteUrl(`/blog/${blog.slug}`);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: blog.title, path: `/blog/${blog.slug}` },
  ];

  const schemas = [
    breadcrumbSchema(crumbs),
    articleSchema({
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || siteConfig.description,
      path: `/blog/${blog.slug}`,
      image: blog.featuredImage || siteConfig.ogImage,
      author: blog.author,
      datePublished: blog.publishedAt,
      dateModified: blog.updatedAt,
      keywords: [blog.focusKeyword, ...blog.secondaryKeywords].filter(Boolean) as string[],
      section: blog.category,
    }),
    ...(blog.schemaJson ? [blog.schemaJson] : []),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <Link
            href={`/blog?category=${encodeURIComponent(blog.category)}`}
            className="mt-6 inline-block rounded-full bg-brass px-3 py-1 text-xs font-semibold text-midnight"
          >
            {blog.category}
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{blog.title}</h1>
          {blog.excerpt && <p className="mt-4 text-lg text-white/85">{blog.excerpt}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4" /> {blog.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" /> {formatBlogDate(blog.publishedAt ?? blog.createdAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" /> {blog.readingTime} min read
            </span>
            {blog.updatedAt.slice(0, 10) !== (blog.publishedAt ?? blog.createdAt).slice(0, 10) && (
              <span className="inline-flex items-center gap-1.5 text-brass">
                <CalendarDays className="size-4" /> Updated {formatBlogDate(blog.updatedAt)}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Left: article */}
            <article className="min-w-0">
              {/* Featured image */}
              {blog.featuredImage && (
                <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-sand/40">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.featuredImageAlt ?? blog.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                    unoptimized={blog.featuredImage.endsWith(".svg")}
                  />
                </div>
              )}

              {/* Table of contents */}
              {toc.length > 1 && (
                <nav className="mb-8 rounded-2xl border border-hairline bg-sand/30 p-5" aria-label="Table of contents">
                  <p className="flex items-center gap-2 text-sm font-bold text-ink">
                    <ListTree className="size-4 text-brass" /> In this guide
                  </p>
                  <ol className="mt-3 space-y-1.5 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-ink-soft hover:text-brass">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Mobile CTA (after intro) */}
              <BlogInlineCta slug={blog.slug} />

              {/* Body */}
              <BlogContent html={blog.content} />

              {/* Mobile CTA (before conclusion / end) */}
              <BlogInlineCta slug={blog.slug} />

              {/* FAQ (only when the post defines FAQs) */}
              {blog.faqs.length > 0 && (
                <section className="mt-14" aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="text-2xl font-bold text-ink">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline">
                    {blog.faqs.map((f, i) => (
                      <details key={i} className="group p-5" {...(i === 0 ? { open: true } : {})}>
                        <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                          {f.question}
                        </summary>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Tags */}
              {blog.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-2">
                  <Tag className="size-4 text-ink-muted" />
                  {blog.tags.map((t) => (
                    <span key={t} className="rounded-full bg-sand/50 px-3 py-1 text-xs text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Author box */}
              <AuthorBox author={blog.author} />

              {/* Share */}
              <div className="mt-8 border-t border-hairline pt-6">
                <ShareButtons url={url} title={blog.title} />
              </div>

              {/* Previous / Next article */}
              {(prev || next) && (
                <nav className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="More articles">
                  {prev ? (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="group rounded-xl border border-hairline p-4 transition-colors hover:border-brass"
                    >
                      <span className="flex items-center gap-1 text-xs font-semibold text-ink-muted">
                        <ArrowLeft className="size-3.5 rtl:rotate-180" /> Previous Article
                      </span>
                      <span className="mt-1 block font-semibold text-ink group-hover:text-brass">
                        {prev.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="hidden sm:block" />
                  )}
                  {next ? (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="group rounded-xl border border-hairline p-4 text-right transition-colors hover:border-brass sm:col-start-2"
                    >
                      <span className="flex items-center justify-end gap-1 text-xs font-semibold text-ink-muted">
                        Next Article <ArrowRight className="size-3.5 rtl:rotate-180" />
                      </span>
                      <span className="mt-1 block font-semibold text-ink group-hover:text-brass">
                        {next.title}
                      </span>
                    </Link>
                  ) : null}
                </nav>
              )}

              {/* Related (bottom of content / mobile bottom) */}
              {related.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-bold text-ink">Related guides</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {related.map((b) => (
                      <BlogCard key={b.id} blog={b} />
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Right: sticky sidebar (desktop only) */}
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar currentSlug={blog.slug} />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
