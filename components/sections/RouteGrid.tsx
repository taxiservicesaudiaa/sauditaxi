import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { routes, type Route } from "@/data/routes";

interface RouteGridProps {
  heading?: string;
  subheading?: string;
  /** Restrict to specific route slugs. */
  only?: string[];
  exclude?: string;
  limit?: number;
  background?: "white" | "muted";
}

export function RouteGrid({
  heading = "Popular Intercity & Transfer Routes",
  subheading = "Private transfers on the Kingdom's most-requested routes, quoted before you travel.",
  only,
  exclude,
  limit,
  background = "muted",
}: RouteGridProps) {
  let list: Route[] = only
    ? (only.map((s) => routes.find((r) => r.slug === s)).filter(Boolean) as Route[])
    : routes;
  if (exclude) list = list.filter((r) => r.slug !== exclude);
  if (limit) list = list.slice(0, limit);

  if (list.length === 0) return null;

  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {heading}
            </h2>
            {subheading && <p className="mt-3 text-muted-foreground">{subheading}</p>}
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((route) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="group rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-base font-semibold text-navy">
                {/* The arrow icon separates the two names visually via flex
                    gap only — that gap isn't a real character, so without
                    this the rendered text content (screen readers, copy-paste,
                    crawlers reading raw text) reads as "FromTo" concatenated
                    with no space. The sr-only text fixes that without
                    changing anything visible. */}
                <span>{route.from}</span>
                <ArrowRight className="size-4 text-gold" aria-hidden="true" />
                <span className="sr-only"> to </span>
                <span>{route.to}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {route.intro}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5 text-gold" /> {route.duration}
                </span>
                <span>{route.distance}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
