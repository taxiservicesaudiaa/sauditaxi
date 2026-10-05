import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";

// Without this file, the Cloudflare build auto-generates a default config that
// uses an R2 incremental cache — but the auto-generated wrangler.jsonc leaves
// the R2 bucket binding commented out, so the cache had no storage at all.
// Every request was an incremental-cache MISS (x-nextjs-cache: MISS on 100% of
// requests, even the same static page hit repeatedly), meaning the Worker did
// a full server render for every page view instead of serving the prerendered
// HTML — the root cause of the Cloudflare 1102 (resource limit) errors.
//
// Static assets: serves the build-time prerendered pages from Workers Static
// Assets (needs only the default ASSETS binding, no R2/KV). It's read-only, so
// it's wrapped in the regional cache (Workers Cache API, also no binding) so
// pages that set `revalidate` (homepage, blog index, sitemap.xml) can still
// store their regenerated output per data center. shouldLazilyUpdateOnCacheHit
// is off because the underlying store only ever holds build-time values —
// refreshing from it on a hit would overwrite a newer regenerated entry with
// the stale build-time one and force regeneration again.
export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(staticAssetsIncrementalCache, {
    mode: "long-lived",
    shouldLazilyUpdateOnCacheHit: false,
  }),
});
