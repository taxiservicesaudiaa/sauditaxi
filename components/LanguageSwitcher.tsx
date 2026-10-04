"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionary, localeFromPathname } from "@/lib/i18n";
// The lightweight index's equivalents, not ar.ts's full ~26,700-line content
// dataset — this is a client component, so importing data/translations/ar.ts
// directly here used to ship that entire dataset in the client JS bundle for
// every page on the site. See data/translations/ar-index.ts's own comment.
import { getArPathForEnPathLight, getEnPathForArPathLight } from "@/data/translations/ar-index";

/**
 * English / Arabic language switcher. Navigates to the real, server-rendered
 * counterpart page (a distinct URL with its own Arabic content), not a
 * client-side translation overlay — that's the whole point of the native
 * Arabic rollout. If the current page doesn't have a translation yet, it
 * falls back to the Arabic (or English) homepage rather than a 404.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);

  // Normalise legacy /index aliases so the language switcher never emits
  // an href to a non-canonical URL. next.config.ts 301-redirects these at
  // the HTTP layer, but usePathname() returns the raw un-redirected path,
  // causing the EN link to render as href="/index" and creating an internal
  // link that Google uses to discover and crawl the non-canonical URL.
  const CANONICAL_ALIASES: Record<string, string> = {
    "/index": "/",
    "/index.html": "/",
    "/index.php": "/",
  };
  const normalizedPathname = CANONICAL_ALIASES[pathname] ?? pathname;

  const enHref = locale === "ar" ? getEnPathForArPathLight(normalizedPathname) : normalizedPathname;
  const arHref = locale === "en" ? (getArPathForEnPathLight(normalizedPathname) ?? "/ar") : normalizedPathname;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Languages className="size-4 text-white/60" aria-hidden="true" />
      <div className="flex overflow-hidden rounded-full border border-white/20 text-xs font-semibold">
        <Link
          href={enHref}
          aria-current={locale === "en" ? "page" : undefined}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "en" ? "bg-brass text-midnight" : "text-white/80 hover:text-brass"
          )}
        >
          {dict.languageSwitcher.en}
        </Link>
        <Link
          href={arHref}
          lang="ar"
          aria-current={locale === "ar" ? "page" : undefined}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "ar" ? "bg-brass text-midnight" : "text-white/80 hover:text-brass"
          )}
        >
          {dict.languageSwitcher.ar}
        </Link>
      </div>
    </div>
  );
}
