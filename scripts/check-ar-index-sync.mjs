#!/usr/bin/env node
/**
 * Verifies data/translations/ar-index.ts stays in sync with the real source
 * of truth, data/translations/ar.ts's arPages array. ar-index.ts is a
 * generated, lightweight (slug/enPath/type/h1 only) copy used by client
 * components and hot server paths (Header, Footer, LanguageSwitcher,
 * proxy.ts) specifically so they don't need to import ar.ts's full
 * ~26,700-line content dataset. If arPages gains, loses, or edits an entry
 * without ar-index.ts being regenerated, this drifts silently — nav links,
 * the language switcher, and proxy.ts's redirects would start using stale
 * slugs/enPaths/types. Run this after any change to ar.ts's arPages.
 *
 * Usage: node scripts/check-ar-index-sync.mjs
 */
import { getArPages } from "../data/translations/ar.ts";
import { arPageIndex } from "../data/translations/ar-index.ts";

let problems = 0;

if (getArPages().length !== arPageIndex.length) {
  console.error(
    `FAIL: getArPages() has ${getArPages().length} entries but ar-index.ts has ${arPageIndex.length}. Regenerate ar-index.ts.`
  );
  problems++;
}

const indexBySlug = new Map(arPageIndex.map((p) => [p.slug, p]));
for (const p of getArPages()) {
  const indexed = indexBySlug.get(p.slug);
  if (!indexed) {
    console.error(`FAIL: getArPages() entry "${p.slug}" (${p.enPath}) is missing from ar-index.ts.`);
    problems++;
    continue;
  }
  if (
    indexed.enPath !== p.enPath ||
    indexed.type !== p.type ||
    indexed.h1 !== p.h1 ||
    Boolean(indexed.notEnTranslation) !== Boolean(p.notEnTranslation)
  ) {
    console.error(
      `FAIL: "${p.slug}" is out of sync — getArPages() has {enPath: ${p.enPath}, type: ${p.type}, h1: ${p.h1}}, ` +
        `ar-index.ts has {enPath: ${indexed.enPath}, type: ${indexed.type}, h1: ${indexed.h1}}.`
    );
    problems++;
  }
}

// hreflang must be one-to-one: an English page can have only one Arabic
// translation. A second Arabic page on the same enPath must be marked
// notEnTranslation, or the English page's hreflang can only point at one of
// them and the other's link back is non-reciprocal.
const pairedByEnPath = new Map();
for (const p of getArPages()) {
  if (p.notEnTranslation || p.type === "hotel-transfer") continue;
  const other = pairedByEnPath.get(p.enPath);
  if (other) {
    console.error(
      `FAIL: "${other}" and "${p.slug}" both claim ${p.enPath} as their English original. ` +
        `Mark the one that is not its translation with notEnTranslation: true.`
    );
    problems++;
  } else pairedByEnPath.set(p.enPath, p.slug);
}

if (problems === 0) {
  console.log(`OK: ar-index.ts matches getArPages() exactly (${getArPages().length} entries).`);
  process.exitCode = 0;
} else {
  console.error(`\n${problems} problem(s) found. Regenerate data/translations/ar-index.ts from the current getArPages().`);
  process.exitCode = 1;
}
