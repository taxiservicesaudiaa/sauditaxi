import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Building2, CheckCircle2, Landmark, Mail, MapPin, MessageCircle, Moon, Plane, Route as RouteIcon, Send, Users } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { HOME_PHOTOS, type HomeCopy, type HomePhotoKey } from "@/data/home-page";
import { vehicles } from "@/data/vehicles";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";
import { whatsappLink } from "@/lib/site";

/**
 * Homepage (task 71) — one layout for English and Arabic. Copy comes from
 * data/home-page.ts (EN) / data/home-page-ar.ts (AR); `href` maps English
 * paths to their Arabic equivalents on /ar; `form` is the locale's existing
 * quote widget (HomeBookingPanel / HeroQuickForm → the secure quote flow).
 * Every section renders once (no duplicate mobile/desktop copies). Photos are
 * reused from credited sets (credits on /image-credits).
 */

const NIGHT = "#10213a";
const OASIS = "#1d3b2e";

type Props = {
  c: HomeCopy;
  faqs: Faq[];
  locale: "en" | "ar";
  form: ReactNode;
  href?: (enPath: string) => string;
  quoteHref: string;
  photoAlt?: Partial<Record<HomePhotoKey, string>>;
  waMessage: string;
};

function Head({ id, kicker, title, intro, light = false, center = false }: { id: string; kicker: string; title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <header className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-amber-200" : "text-brass"}`}>{kicker}</p>
      <h2 id={id} className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-3 text-[17px] leading-relaxed ${light ? "text-white/80" : "text-ink-soft"}`}>{intro}</p> : null}
    </header>
  );
}

const arrow = "size-4 shrink-0 rtl:rotate-180";

function Pic({ src, alt, sizes, ratio }: { src: string; alt: string; sizes: string; ratio: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function HomeView({ c, faqs, locale, form, href = (p) => p, quoteHref, photoAlt = {}, waMessage }: Props) {
  const ar = locale === "ar";
  const alt = (k: HomePhotoKey) => photoAlt[k] ?? HOME_PHOTOS[k].alt;

  return (
    <>
      {/* 1 ── Hero */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: NIGHT }}>
        <Image src={HOME_PHOTOS.hero.src} alt={alt("hero")} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10213a]/95 via-[#10213a]/80 to-[#10213a]/35 rtl:bg-gradient-to-l" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-36">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{c.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">{c.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={quoteHref} className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                <Send className="size-4" aria-hidden="true" /> {c.hero.primary}
              </Link>
              <Link href={href(c.routes.allHref)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
                {c.hero.secondary} <ArrowRight className={arrow} aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {c.hero.coverage.map((x) => (
                <li key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/20">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div id="quote" className="min-w-0 scroll-mt-28">
            {form}
          </div>
        </div>
      </section>

      {/* 2 ── National overview */}
      <section aria-labelledby="overview-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="overview-h" kicker={c.overview.kicker} title={c.overview.h2} />
          <div className="mt-2 grid gap-x-12 lg:grid-cols-2">
            {c.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.overview.pillars.map((p, i) => (
              <li key={p.title} className="relative rounded-2xl bg-white p-5 ring-1 ring-hairline">
                <span className="font-mono text-xs font-bold text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 ── Airports */}
      <section aria-labelledby="airports-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="airports-h" kicker={c.airports.kicker} title={c.airports.h2} intro={c.airports.intro} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.airports.cards.map((a) => (
              <li key={a.code}>
                <Link href={href(a.href)} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-offwhite ring-1 ring-hairline transition hover:ring-brass">
                  {a.photo ? (
                    <Pic src={HOME_PHOTOS[a.photo].src} alt={alt(a.photo)} ratio="aspect-[16/9]" sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw" />
                  ) : (
                    <div className="flex aspect-[16/9] items-center justify-center" style={{ background: NIGHT }}>
                      <Plane className="size-10 text-amber-200" aria-hidden="true" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brass">
                      <span className="rounded bg-midnight px-1.5 py-0.5 font-mono text-white">{a.code}</span> {a.city}
                    </p>
                    <h3 className="mt-2 font-bold text-ink">{a.name}</h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft">{a.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {c.airports.more.map((m) => (
              <Link key={m.href} href={href(m.href)} className="rounded-full bg-offwhite px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass">
                {m.label}
              </Link>
            ))}
            <Link href={href(c.airports.hubHref)} className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4">
              {c.airports.hubLabel} <ArrowRight className={arrow} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 ── Umrah, Hajj, Ziyarat */}
      <section aria-labelledby="pilgrims-h" className="py-16 text-white" style={{ background: OASIS }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="pilgrims-h" kicker={c.pilgrims.kicker} title={c.pilgrims.h2} intro={c.pilgrims.intro} light />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.pilgrims.items.map((it) => (
              <li key={it.href}>
                <Link href={href(it.href)} className="group flex h-full flex-col rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15">
                  <Moon className="size-5 text-amber-200" aria-hidden="true" />
                  <h3 className="mt-3 font-bold">{it.title}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-white/80">{it.text}</p>
                  <ArrowRight className={`${arrow} mt-3 text-amber-200 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5`} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {c.pilgrims.services.map((s) => (
              <Link key={s.href} href={href(s.href)} className="rounded-2xl bg-white p-5 text-ink transition hover:ring-2 hover:ring-brass">
                <span className="flex items-center justify-between gap-2 font-bold">
                  {s.label} <ArrowRight className={`${arrow} text-brass`} aria-hidden="true" />
                </span>
                <span className="mt-1 block text-sm text-ink-soft">{s.text}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {c.pilgrims.cities.map((l) => (
              <Link key={l.href} href={href(l.href)} className="text-sm font-semibold text-amber-200 underline underline-offset-4 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-white/70">{c.pilgrims.note}</p>
        </div>
      </section>

      {/* 5 ── Routes */}
      <section aria-labelledby="routes-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="routes-h" kicker={c.routes.kicker} title={c.routes.h2} intro={c.routes.intro} />
          <ul className="mt-8 divide-y divide-hairline overflow-hidden rounded-2xl ring-1 ring-hairline">
            {c.routes.cards.map((r) => (
              <li key={r.href}>
                <Link href={href(r.href)} className="group flex flex-col gap-1 px-5 py-4 transition hover:bg-offwhite sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-3 font-bold text-ink">
                    <RouteIcon className="size-4 shrink-0 text-brass" aria-hidden="true" />
                    {r.from} <ArrowRight className={`${arrow} text-ink-muted`} aria-hidden="true" /> {r.to}
                  </span>
                  <span className="font-mono text-sm text-ink-soft">{r.fig ?? ""}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-ink-muted">{c.routes.figNote}</p>
            <Link href={href(c.routes.allHref)} className="inline-flex items-center gap-1 text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4">
              {c.routes.allLabel} <ArrowRight className={arrow} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6 ── Destinations */}
      <section aria-labelledby="dest-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="dest-h" kicker={c.destinations.kicker} title={c.destinations.h2} intro={c.destinations.intro} />
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {c.destinations.featured.map((d) => (
              <li key={d.href}>
                <Link href={href(d.href)} className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition hover:ring-brass">
                  <Pic src={HOME_PHOTOS[d.photo].src} alt={alt(d.photo)} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 24vw, 50vw" />
                  <div className="p-4">
                    <h3 className="flex items-center gap-1.5 font-bold text-ink">
                      <MapPin className="size-4 text-brass" aria-hidden="true" /> {d.city}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {c.destinations.more.map((m) => (
              <Link key={m.href} href={href(m.href)} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass">
                {m.label}
              </Link>
            ))}
            <Link href={href(c.destinations.allHref)} className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4">
              {c.destinations.allLabel} <ArrowRight className={arrow} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 ── Day trips + 8 ── Chauffeur */}
      <section aria-labelledby="trips-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="trips-h" kicker={c.dayTrips.kicker} title={c.dayTrips.h2} intro={c.dayTrips.intro} />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {c.dayTrips.items.map((t) => (
              <li key={t.href}>
                <Link href={href(t.href)} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-offwhite ring-1 ring-hairline transition hover:ring-brass">
                  {t.photo ? (
                    <Pic src={HOME_PHOTOS[t.photo].src} alt={alt(t.photo)} ratio="aspect-[16/10]" sizes="(min-width: 768px) 32vw, 100vw" />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center" style={{ background: "#7a4a2a" }}>
                      <Landmark className="size-10 text-amber-200" aria-hidden="true" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-ink">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <Head id="chauffeur-h" kicker={c.chauffeur.kicker} title={c.chauffeur.h2} intro={c.chauffeur.intro} />
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {c.chauffeur.items.map((it, i) => {
                const Icon = [Building2, RouteIcon, Users][i] ?? Users;
                return (
                  <li key={it.title}>
                    <Link href={href(it.href)} className="flex h-full flex-col rounded-2xl p-5 ring-1 ring-hairline transition hover:ring-brass">
                      <Icon className="size-6 text-brass" aria-hidden="true" />
                      <h3 className="mt-3 font-bold text-ink">{it.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{it.text}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 ── GCC */}
      <section aria-labelledby="gcc-h" className="py-16 text-white" style={{ background: NIGHT }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="gcc-h" kicker={c.gcc.kicker} title={c.gcc.h2} intro={c.gcc.intro} light />
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {c.gcc.items.map((g) => {
              const inner = (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-200">{ar ? "السعودية ←" : "Saudi Arabia →"}</p>
                  <h3 className="mt-1 text-xl font-bold">{g.country}</h3>
                  <p className="mt-2 text-sm text-white/75">{g.via}</p>
                </>
              );
              return (
                <li key={g.country}>
                  {g.href ? (
                    <Link href={href(g.href)} className="group block h-full rounded-2xl border border-white/15 p-5 transition hover:border-amber-200">
                      {inner}
                    </Link>
                  ) : (
                    <div className="h-full rounded-2xl border border-dashed border-white/15 p-5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-white/70">{c.gcc.note}</p>
          <Link href={href(c.gcc.hubHref)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-200 underline underline-offset-4 hover:text-white">
            {c.gcc.hubLabel} <ArrowRight className={arrow} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 10 ── Why + 11 ── How */}
      <section aria-labelledby="why-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Head id="why-h" kicker={c.why.kicker} title={c.why.h2} />
            <ul className="mt-6 space-y-3">
              {c.why.items.map((w) => (
                <li key={w.title} className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-hairline">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-ink">{w.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Head id="how-h" kicker={c.how.kicker} title={c.how.h2} />
            <ol className="mt-6 space-y-3">
              {c.how.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full font-bold text-white" style={{ background: NIGHT }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 12 ── Vehicles */}
      <section aria-labelledby="veh-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="veh-h" kicker={c.vehicles.kicker} title={c.vehicles.h2} intro={c.vehicles.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <li key={v.id} className="rounded-2xl bg-offwhite p-5">
                <h3 className="font-bold text-ink">{ar ? v.nameAr : v.name}</h3>
                <p className="mt-0.5 text-xs text-ink-muted" dir="ltr">{v.examples}</p>
                <p className="mt-3 text-sm text-ink-soft">
                  {ar ? v.passengersAr : v.passengers} · {ar ? v.luggageAr : v.luggage}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 ── Trust */}
      <section aria-labelledby="trust-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <Head id="trust-h" kicker={c.trust.kicker} title={c.trust.h2} />
            {c.trust.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href={href("/about")} className="text-midnight underline decoration-brass decoration-2 underline-offset-4">
                {c.trust.aboutLabel}
              </Link>
              <Link href={href("/contact")} className="text-midnight underline decoration-brass decoration-2 underline-offset-4">
                {c.trust.contactLabel}
              </Link>
            </div>
          </div>
          <div className="self-start rounded-3xl bg-white p-6 ring-1 ring-hairline">
            <ul className="space-y-4">
              {c.trust.contact.map((x) => (
                <li key={x.href}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{x.label}</p>
                  <a href={x.href} className="mt-1 inline-flex items-center gap-2 font-semibold text-ink hover:text-brass" dir="ltr">
                    <Mail className="size-4 text-brass" aria-hidden="true" /> {x.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">{c.trust.trustpilot}</p>
            <div className="mt-3">
              <TrustpilotWidget />
            </div>
          </div>
        </div>
      </section>

      {/* 14 ── FAQ */}
      <HomeFAQSection faqs={faqs} heading={c.faqHeading} />

      {/* 15 ── Final CTA */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: NIGHT }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.h2}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={quoteHref} className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> {c.final.primary}
            </Link>
            <Link href={href(c.routes.allHref)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              {c.final.secondary} <ArrowRight className={arrow} aria-hidden="true" />
            </Link>
            <a href={whatsappLink(waMessage)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> {c.final.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
