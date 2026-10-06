/**
 * Regenerates data/translations/ar-index.ts from the current
 * data/translations/ar.ts arPages array. Run this after any change that
 * adds, removes, or renames an arPages entry (new Arabic page, retired page,
 * slug rename) — scripts/check-ar-index-sync.mjs will fail otherwise.
 *
 * Usage: node --experimental-strip-types scripts/generate-ar-index.mjs
 */
import { getArPages } from "../data/translations/ar.ts";
import { writeFileSync } from "fs";

const entries = getArPages().map((p) => ({
  slug: p.slug,
  enPath: p.enPath,
  type: p.type,
  h1: p.h1,
  // Only emitted when set, so the generated file stays unchanged for every
  // other entry.
  ...(p.notEnTranslation ? { notEnTranslation: true } : {}),
}));

const out = `/**
 * Lightweight index over data/translations/ar.ts's arPages — slug, enPath,
 * type, and h1 only, no content (intro/sections/faqs/contentHtml). Generated
 * by scripts/generate-ar-index.mjs — NOT computed at runtime from arPages,
 * deliberately, so that importing this file never pulls the ~26,700-line
 * content dataset into a bundle that imports it (client components in
 * particular: Header, Footer, LanguageSwitcher). Covers every consumer that
 * only ever needed slug/enPath/type/h1 — nav links, the language switcher,
 * proxy.ts's redirect maps, and sitemap generation.
 *
 * Regenerate with \`node --experimental-strip-types scripts/generate-ar-index.mjs\`
 * whenever arPages gains, loses, or renames an entry.
 * scripts/check-ar-index-sync.mjs verifies this file stays in sync with
 * arPages and fails if they drift.
 */
export interface ArPageIndexEntry {
  slug: string;
  enPath: string;
  type: string;
  h1: string;
  /** Mirrors ArPage.notEnTranslation: not hreflang-paired with enPath. */
  notEnTranslation?: true;
}

export const arPageIndex: ArPageIndexEntry[] = ${JSON.stringify(entries, null, 2)};

/** Full /ar/{slug} path for an index entry — mirrors arPath() in ar.ts. */
export function arIndexPath(entry: ArPageIndexEntry): string {
  return \`/ar/\${entry.slug}\`;
}

// Lazy, cached lookups — same pattern as ar.ts's own getArPathForEnPath/
// getEnPathForArPath, so the cost of building these maps is paid once per
// warm isolate/bundle load, only if something actually calls them.
let _enToAr: Record<string, string> | undefined;
function enToAr(): Record<string, string> {
  return (_enToAr ??= Object.fromEntries(
    arPageIndex.filter((p) => !p.notEnTranslation).map((p) => [p.enPath, arIndexPath(p)])
  ));
}

/** Lightweight equivalent of ar.ts's getArPathForEnPath — same result, without
 *  pulling in that module's ~26,700-line content dataset. */
export function getArPathForEnPathLight(enPath: string): string | undefined {
  return enToAr()[enPath];
}

let _arToEn: Record<string, string> | undefined;
function arToEn(): Record<string, string> {
  return (_arToEn ??= Object.fromEntries(arPageIndex.map((p) => [arIndexPath(p), p.enPath])));
}

/** Lightweight equivalent of ar.ts's getEnPathForArPath. */
export function getEnPathForArPathLight(arPathStr: string): string {
  return arToEn()[arPathStr] ?? "/";
}
`;

// Run from the project root (node --experimental-strip-types
// scripts/generate-ar-index.mjs), so this path is relative to cwd there —
// unlike the import above, which resolves relative to this file regardless
// of cwd.
writeFileSync("./data/translations/ar-index.ts", out, "utf8");
console.log(`Wrote data/translations/ar-index.ts with ${entries.length} entries.`);
