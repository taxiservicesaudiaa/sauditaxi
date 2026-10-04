"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { airports } from "@/data/airports";
import { cities } from "@/data/cities";
import { getDictionary, localeFromPathname, interpolate } from "@/lib/i18n";
// The lightweight index, not the full ~26,700-line content dataset — this is
// a client component, so importing data/translations/ar.ts directly here
// used to ship that entire dataset in the client JS bundle for every page on
// the site. See data/translations/ar-index.ts's own comment.
import { arPageIndex, arIndexPath } from "@/data/translations/ar-index";

interface NavChild {
  label: string;
  href: string;
}
interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Widen the desktop panel + use two columns for long lists. */
  wide?: boolean;
}

const navLinksEn: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.name, href: s.href })),
  },
  {
    label: "Airport Transfers",
    href: "/airport-transfers",
    wide: true,
    children: airports.map((a) => ({
      label: `${a.city} Airport (${a.code})`,
      href: `/airport-transfer/${a.slug}`,
    })),
  },
  {
    label: "City Transfers",
    href: "/city-transfers",
    wide: true,
    children: cities.map((c) => ({
      label: `${c.name} Taxi`,
      href: `/taxi-service/${c.slug}`,
    })),
  },
  { label: "Popular Routes", href: "/intercity-transfers" },
  { label: "Umrah Taxi", href: "/umrah-taxi-service" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Arabic nav, built from whatever has actually been translated so far
 * (`data/translations/ar.ts`). As more pages get an Arabic version, they
 * appear here automatically — nothing hardcoded beyond the section labels,
 * which come from the locale dictionary.
 */
function buildArNavLinks(): NavItem[] {
  const dict = getDictionary("ar");
  const services = arPageIndex.filter((p) => p.type === "serviceV2");
  const airports = arPageIndex.filter((p) => p.type === "airport");

  const children: NavItem[] = [];
  if (services.length) {
    children.push({
      label: dict.nav.services,
      href: "/ar/خدماتنا",
      wide: true,
      children: services.map((s) => ({ label: s.h1, href: arIndexPath(s) })),
    });
  }
  if (airports.length) {
    children.push({
      label: dict.nav.airportTransfers,
      href: "/ar",
      wide: true,
      children: airports.map((a) => ({ label: a.h1, href: arIndexPath(a) })),
    });
  }

  return [
    { label: dict.nav.home, href: "/ar" },
    ...children,
    { label: dict.nav.blog, href: "/ar" },
    { label: dict.nav.about, href: "/ar/من-نحن" },
    { label: dict.nav.contact, href: "/ar/اتصل-بنا" },
  ];
}

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const navLinks = locale === "ar" ? buildArNavLinks() : navLinksEn;
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid bar once scrolled, or while the mobile menu is open.
  const solid = scrolled || open;

  const closeAll = () => {
    setOpen(false);
    setOpenSub(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300",
        solid
          ? "bg-midnight/95 shadow-lg shadow-midnight/30 backdrop-blur"
          : "bg-gradient-to-b from-midnight/70 via-midnight/30 to-transparent"
      )}
    >
      {/* Top bar: logo + language + quote + (mobile) menu toggle */}
      <div className={cn(solid ? "border-b border-white/10" : "border-b border-transparent")}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href={locale === "ar" ? "/ar" : "/"}
            aria-label={`${siteConfig.name} home`}
            className="flex items-center transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/images/logo.webp"
              alt={`${siteConfig.name} logo`}
              width={256}
              height={256}
              priority
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              variant="gold"
              size="sm"
              className="hidden rounded-xl bg-brass text-midnight shadow-md shadow-brass/20 hover:bg-brass-soft sm:inline-flex"
            >
              <Link href={locale === "ar" ? "/ar/اطلب-عرض-سعر" : "/get-quote"}>{dict.nav.getQuote}</Link>
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav row (below the top bar) */}
      <nav className="hidden lg:block" aria-label="Primary">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-1 px-4 sm:px-6 lg:px-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-white/10 text-brass"
                      : "text-white/80 hover:bg-white/5 hover:text-brass group-hover:text-brass"
                  )}
                >
                  {link.label}
                  <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown panel (hover + keyboard focus) */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div
                    className={cn(
                      "max-h-[70vh] overflow-auto rounded-2xl border border-hairline bg-white p-2 text-ink shadow-2xl ring-1 ring-black/5",
                      link.wide ? "w-[30rem]" : "w-64"
                    )}
                  >
                    <ul className={cn("grid gap-0.5", link.wide && "grid-cols-2")}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-brass/10 hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-brass"
                    : "text-white/80 hover:bg-white/5 hover:text-brass"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Premium brass accent line (only on the solid bar) */}
      {solid && <div className="h-[3px] w-full bg-gradient-to-r from-brass/0 via-brass to-brass/0" />}

      {/* Mobile nav (collapsible) */}
      <div
        className={cn(
          "lg:hidden overflow-y-auto bg-midnight transition-[max-height] duration-300",
          open ? "max-h-[85vh]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return link.children ? (
              <div key={link.href}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-medium",
                      active ? "bg-white/10 text-brass" : "text-white/85 hover:bg-white/5 hover:text-brass"
                    )}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={interpolate(dict.nav.toggleSubmenu, { label: link.label })}
                    aria-expanded={openSub === link.href}
                    onClick={() => setOpenSub((cur) => (cur === link.href ? null : link.href))}
                    className="rounded-md p-2 text-white/70 hover:text-brass"
                  >
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform",
                        openSub === link.href && "rotate-180"
                      )}
                    />
                  </button>
                </div>
                {openSub === link.href && (
                  <ul className="mb-1 ms-3 border-s border-white/10 ps-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className="block rounded-md px-3 py-1.5 text-sm text-white/70 hover:bg-white/5 hover:text-brass"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  active ? "bg-white/10 text-brass" : "text-white/85 hover:bg-white/5 hover:text-brass"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 px-1">
            <Button asChild variant="gold" className="w-full rounded-xl bg-brass text-midnight shadow-md shadow-brass/20 hover:bg-brass-soft">
              <Link href={locale === "ar" ? "/ar/اطلب-عرض-سعر" : "/get-quote"} onClick={closeAll}>
                {dict.nav.getQuote}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
