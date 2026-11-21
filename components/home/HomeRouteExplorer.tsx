import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRoute } from "@/data/routes";

const featured = [
  { slug: "jeddah-to-makkah", context: "The most-travelled pilgrim route, timed around your flight." },
  { slug: "jeddah-to-madinah", context: "A long-distance transfer connecting Jeddah directly to Madinah." },
  { slug: "makkah-to-madinah", context: "A comfortable drive along the Hijra highway between the holy cities." },
  { slug: "riyadh-to-jeddah", context: "Coast to capital, door to door — no connecting flight required." },
  { slug: "riyadh-to-dammam", context: "Business travel across the peninsula, with one quotation for the whole journey." },
];

/** H2 #4 — City-to-City Transfers. Real domestic route pages only (data/routes.ts). */
export function HomeRouteExplorer() {
  const routes = featured
    .map((f) => {
      const route = getRoute(f.slug);
      return route ? { ...f, route } : null;
    })
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">City-to-City</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              City-to-City Transfers Across Saudi Arabia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Private, direct journeys between Saudi cities — one vehicle, one departure, and no shared
              stops along the way. Below are some of the routes travellers book most; our full route
              directory covers many more city-to-city journeys across the Kingdom.
            </p>
          </div>
          <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-xl sm:block">
            <Image
              src="/images/journey/desert-highway.jpg"
              alt="Open highway between Saudi cities"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map(({ route, context }) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-hairline bg-sand/60 p-6 transition-colors hover:border-brass"
            >
              <div>
                <div className="flex items-center gap-2.5 text-base font-semibold text-ink">
                  <span>{route.from}</span>
                  <ArrowRight className="size-3.5 shrink-0 text-brass rtl:rotate-180" aria-hidden="true" />
                  <span>{route.to}</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{context}</p>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-ink-muted">
                {route.distance} · {route.duration}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-start">
          <Link href="/intercity-transfers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass">
            All routes
            <ArrowRight className="size-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
