import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export const BLOG_CATEGORIES = [
  "Airport Transfers",
  "City Taxi Services",
  "Intercity Transfers",
  "Border Transfers",
  "Umrah Transport",
  "Hajj Transport",
  "Travel Guides",
  "Saudi Arabia Tourism",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export const BLOG_STATUSES = ["draft", "published"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  metaTitle: string | null;
  metaDescription: string | null;
  focusKeyword: string | null;
  secondaryKeywords: string[];
  featuredImage: string | null;
  featuredImageAlt: string | null;
  author: string;
  category: string;
  tags: string[];
  faqs: BlogFaq[];
  schemaJson: Record<string, unknown> | null;
  readingTime: number;
  status: BlogStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export type NewBlogInput = Partial<Omit<Blog, "id" | "createdAt" | "updatedAt">> & {
  title: string;
  slug: string;
};

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  secondary_keywords: string[] | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  author: string;
  category: string;
  tags: string[] | null;
  faqs: BlogFaq[] | null;
  schema_json: Record<string, unknown> | null;
  reading_time: number;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

const TABLE = "blogs";

function rowToBlog(row: BlogRow): Blog {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    focusKeyword: row.focus_keyword,
    secondaryKeywords: row.secondary_keywords ?? [],
    featuredImage: row.featured_image,
    featuredImageAlt: row.featured_image_alt,
    author: row.author,
    category: row.category,
    tags: row.tags ?? [],
    faqs: row.faqs ?? [],
    schemaJson: row.schema_json,
    readingTime: row.reading_time,
    status: row.status === "published" ? "published" : "draft",
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function inputToRow(input: NewBlogInput): Partial<BlogRow> {
  const row: Partial<BlogRow> = {};
  if (input.title !== undefined) row.title = input.title;
  if (input.slug !== undefined) row.slug = slugify(input.slug);
  if (input.excerpt !== undefined) row.excerpt = input.excerpt;
  if (input.content !== undefined) row.content = input.content;
  if (input.metaTitle !== undefined) row.meta_title = input.metaTitle;
  if (input.metaDescription !== undefined) row.meta_description = input.metaDescription;
  if (input.focusKeyword !== undefined) row.focus_keyword = input.focusKeyword;
  if (input.secondaryKeywords !== undefined) row.secondary_keywords = input.secondaryKeywords;
  if (input.featuredImage !== undefined) row.featured_image = input.featuredImage;
  if (input.featuredImageAlt !== undefined) row.featured_image_alt = input.featuredImageAlt;
  if (input.author !== undefined) row.author = input.author;
  if (input.category !== undefined) row.category = input.category;
  if (input.tags !== undefined) row.tags = input.tags;
  if (input.faqs !== undefined) row.faqs = input.faqs;
  if (input.schemaJson !== undefined) row.schema_json = input.schemaJson;
  if (input.status !== undefined) row.status = input.status;
  if (input.publishedAt !== undefined) row.published_at = input.publishedAt;
  // Reading time is always derived from the latest content.
  if (input.content !== undefined) row.reading_time = readingTimeOf(input.content);
  return row;
}

/** Turn a title/slug into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Estimate reading time in minutes from HTML content (~200 wpm). */
export function readingTimeOf(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200));
}

/** Extract H2 headings (with id) from stored HTML for a table of contents. */
export function extractToc(html: string): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = [];
  const re = /<h2[^>]*\bid=["']([^"']+)["'][^>]*>([\s\S]*?)<\/h2>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    out.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, "").trim() });
  }
  return out;
}

// ── Queries ────────────────────────────────────────────────────────────────

interface ListOpts {
  status?: BlogStatus;
  category?: string;
  search?: string;
  limit?: number;
}

/** All blogs (admin). Returns [] when the database isn't configured. */
export async function listBlogs(opts: ListOpts = {}): Promise<Blog[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = getSupabaseAdmin();
    let query = supabase.from(TABLE).select("*");
    if (opts.status) query = query.eq("status", opts.status);
    if (opts.category) query = query.eq("category", opts.category);
    if (opts.search) {
      const s = opts.search.replace(/[%,]/g, " ").trim();
      query = query.or(`title.ilike.%${s}%,excerpt.ilike.%${s}%,focus_keyword.ilike.%${s}%`);
    }
    query = query.order("published_at", { ascending: false, nullsFirst: false });
    query = query.order("created_at", { ascending: false });
    if (opts.limit) query = query.limit(opts.limit);
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return (data as BlogRow[]).map(rowToBlog);
  } catch (err) {
    console.error("[blogs] list failed:", err);
    return [];
  }
}

/** Published blogs only — for the public site. */
export async function listPublishedBlogs(
  opts: Omit<ListOpts, "status"> = {}
): Promise<Blog[]> {
  return listBlogs({ ...opts, status: "published" });
}

export async function getBlogById(id: string): Promise<Blog | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToBlog(data as BlogRow) : null;
}

export async function getPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw new Error(error.message);
    return data ? rowToBlog(data as BlogRow) : null;
  } catch (err) {
    console.error("[blogs] getBySlug failed:", err);
    return null;
  }
}

// Strict variants for output that gets prerendered and cached (sitemaps, blog
// post pages). The lenient functions above return []/null on a missing config
// or failed query — fine for a live render, but cached output would freeze
// that empty result: a Cloudflare build without the Supabase build variables
// once shipped a sitemap with zero blog posts. Throwing instead fails the
// build loudly, and during a background revalidation Next keeps serving the
// last good cached copy rather than caching a broken one.
function assertSupabaseConfigured(): void {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "[blogs] Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). " +
        "In the Cloudflare build these must be set as build variables, not only runtime variables."
    );
  }
}

export async function listPublishedBlogsStrict(): Promise<Blog[]> {
  assertSupabaseConfigured();
  const { data, error } = await getSupabaseAdmin()
    .from(TABLE)
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });
  if (error) throw new Error(`[blogs] list published failed: ${error.message}`);
  return (data as BlogRow[]).map(rowToBlog);
}

/** Returns null only when the post genuinely doesn't exist (or isn't published). */
export async function getPublishedBlogBySlugStrict(slug: string): Promise<Blog | null> {
  assertSupabaseConfigured();
  const { data, error } = await getSupabaseAdmin()
    .from(TABLE)
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw new Error(`[blogs] getBySlug(${slug}) failed: ${error.message}`);
  return data ? rowToBlog(data as BlogRow) : null;
}

/** Published posts in the same category (fallback to recent), excluding `slug`. */
/** Stable string hash (djb2) — same convention used in lib/hotel-transfers.ts. */
function stableHash(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(hash);
}

/**
 * Pick `count` items from `pool`, rotated by a stable hash of `seed` (e.g.
 * the current page's slug) rather than always taking the first N. Plain
 * "take the newest N" selection means older posts in a growing category
 * never get chosen as new posts are published, so they end up with zero
 * inbound links from sibling content. Rotating keeps the selection
 * deterministic per page (same page always shows the same picks, so no
 * hydration mismatch) while spreading inbound links across the whole pool
 * over time.
 */
export function pickDistributed<T extends { slug: string }>(
  pool: T[],
  seed: string,
  count: number
): T[] {
  if (pool.length <= count) return pool;
  const offset = stableHash(seed) % pool.length;
  return [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, count);
}

export async function getRelatedBlogs(
  blog: Pick<Blog, "slug" | "category">,
  limit = 3
): Promise<Blog[]> {
  const sameCategory = (await listPublishedBlogs({ category: blog.category })).filter(
    (b) => b.slug !== blog.slug
  );
  let related = pickDistributed(sameCategory, blog.slug, limit);
  if (related.length < limit) {
    const recent = (await listPublishedBlogs()).filter(
      (b) => b.slug !== blog.slug && !related.some((r) => r.slug === b.slug)
    );
    related = [...related, ...pickDistributed(recent, blog.slug, limit - related.length)];
  }
  return related.slice(0, limit);
}

/** Previous (older) and next (newer) published posts relative to a slug. */
export async function getAdjacentBlogs(
  slug: string
): Promise<{ prev: Blog | null; next: Blog | null }> {
  const all = await listPublishedBlogs();
  const i = all.findIndex((b) => b.slug === slug);
  if (i === -1) return { prev: null, next: null };
  // listPublishedBlogs is newest-first, so i-1 is newer (next), i+1 is older (prev).
  return { next: all[i - 1] ?? null, prev: all[i + 1] ?? null };
}

/** Distinct categories that have at least one published post, with counts. */
export async function listPublishedCategories(): Promise<{ name: string; count: number }[]> {
  const all = await listPublishedBlogs();
  const counts = new Map<string, number>();
  for (const b of all) counts.set(b.category, (counts.get(b.category) ?? 0) + 1);
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

// ── Mutations ────────────────────────────────────────────────────────────────

export async function createBlog(input: NewBlogInput): Promise<Blog> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input);
  if (row.status === "published" && !row.published_at) row.published_at = new Date().toISOString();
  const { data, error } = await supabase.from(TABLE).insert(row).select("*").single();
  if (error) throw new Error(error.message);
  return rowToBlog(data as BlogRow);
}

export async function updateBlog(id: string, input: Partial<NewBlogInput>): Promise<Blog> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input as NewBlogInput);
  // Stamp published_at the first time a post is published.
  if (row.status === "published") {
    const existing = await getBlogById(id);
    if (existing && !existing.publishedAt) row.published_at = new Date().toISOString();
  }
  const { data, error } = await supabase
    .from(TABLE)
    .update(row)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToBlog(data as BlogRow);
}

export async function deleteBlog(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}
