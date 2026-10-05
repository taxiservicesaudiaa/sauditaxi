import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Without this file, the Cloudflare build auto-generates a default config that
// uses an R2 incremental cache — but the auto-generated wrangler.jsonc leaves
// the R2 bucket binding commented out, so the cache had no storage at all.
// Every request was an incremental-cache MISS (x-nextjs-cache: MISS on 100% of
// requests, even the same static page hit repeatedly), meaning the Worker did
// a full server render for every page view instead of serving the prerendered
// HTML — the root cause of the Cloudflare 1102 (resource limit) errors.
//
// Static assets: serves the build-time prerendered pages from Workers Static
// Assets (needs only the default ASSETS binding, no R2/KV). It's read-only,
// which fits: on the Workers Free plan (~10 ms CPU per request) no page
// revalidates at runtime — everything updates on deploy. It is deliberately
// NOT wrapped in withRegionalCache: that wrapper only helps store pages
// regenerated at runtime, and on every first visit to a URL it re-serializes
// the whole cached page (~350 KB) to copy it into the Cache API — extra CPU
// per request that pushed sustained crawls over the Free plan's limit.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
