import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, ChevronDown, Landmark, MapPin, MessageCircle, Plane, Send, Waves } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { JEDDAH as c, JEDDAH_PHOTOS, type JeddahPhoto } from "@/data/jeddah-city-page";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/jeddah — "gateway city" layout: split hero with the waterfront
 * aerial, a journey finder, a dark airport band, route cards for Makkah and
 * Madinah, pilgrim travel, a Corniche/Al-Balad photo trio, business travel, an
 * areas board, a departure-board list of regional routes, request steps with
 * the shared QuoteForm, FAQs and guides. Copy and facts: data/jeddah-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Jeddah.";
const RED_SEA = "#0f4c5c";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";
const photos = JEDDAH_PHOTOS as Record<string, JeddahPhoto>;
const finderIcons = [Plane, Landmark, Waves, Briefcase, MapPin];

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        return m ? (
          <Link key={i} href={m[2]} className={linkCls}>
            {m[1]}
          </Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}

function Pic({ p, ratio, sizes, light = false, priority = false }: { p: JeddahPhoto; ratio: string; sizes: string; light?: boolean; priority?: boolean }) {
  return (
    <figure className="m-0">
      <div className={`relative w-full overflow-hidden rounded-2xl ${ratio}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-xs ${light ? "text-white/65" : "text-ink-soft"}`}>
        {p.caption}.
      </figcaption>
    </figure>
  );
}

function Head({ id, kicker, title, light = false }: { id: string; kicker: string; title: string; light?: boolean }) {
  return (
    <>
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-sand" : "text-brass"}`}>{kicker}</p>
      <h2 id={`${id}-h`} className={`mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
    </>
  );
}

export function JeddahCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const P = JEDDAH_PHOTOS;
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-midnight text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-36">
          <div>
            <Breadcrumbs items={crumbs} onDark />
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-sand">{c.hero.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">{c.hero.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{c.hero.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.hero.highlights.map((h) => (
                <li key={h} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/85">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                Request a Quotation <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-sand hover:text-sand">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
          <Pic p={P.waterfront} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 100vw" light priority />
        </div>
      </section>

      {/* ── Finder ── */}
      <section aria-labelledby="finder-h" className="border-b border-hairline bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="finder-h" className="text-xl font-bold text-ink">{c.finder.heading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.finder.items.map((f, i) => {
              const Icon = finderIcons[i] ?? MapPin;
              return (
                <li key={f.title}>
                  <a href={f.href} className="group flex h-full flex-col rounded-xl border border-hairline p-4 transition hover:border-brass hover:bg-offwhite">
                    <Icon className="size-5 text-brass" aria-hidden="true" />
                    <span className="mt-3 font-bold text-ink">{f.title}</span>
                    <span className="mt-1 text-sm leading-relaxed text-ink-soft">{f.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── About ── */}
      <section aria-labelledby="about-h" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8">
          <div>
            <Head id="about" kicker="Jeddah" title={c.about.heading} />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {c.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <Pic p={P.balad} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
      </section>

      {/* ── Airport ── */}
      <section id="airport" aria-labelledby="airport-h" className="scroll-mt-28 py-16 text-white sm:py-20" style={{ background: RED_SEA }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
          <Pic p={P.airport} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" light />
          <div>
            <Head id="airport" kicker="Airport arrivals" title={c.airport.heading} light />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-white/85">
              {c.airport.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href={c.airport.link.href} className="inline-flex items-center gap-1 font-semibold text-sand hover:text-white">
                {c.airport.link.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href={c.airport.guide.href} className="inline-flex items-center gap-1 font-semibold text-white/80 hover:text-white">
                {c.airport.guide.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Makkah & Madinah ── */}
      <section id="makkah-madinah" aria-labelledby="makkah-madinah-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="makkah-madinah" kicker="Onward journeys" title={c.makkahMadinah.heading} />
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-ink-soft">{c.makkahMadinah.intro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {c.makkahMadinah.routes.map((r) => (
              <Link key={r.href} href={r.href} className="group flex flex-col justify-between rounded-2xl bg-midnight p-7 text-white transition hover:bg-midnight/90">
                <span>
                  <span className="font-mono text-sm text-sand">{r.dist} by road</span>
                  <span className="mt-2 block text-2xl font-bold">{r.title}</span>
                  <span className="mt-3 block leading-relaxed text-white/80">{r.text}</span>
                </span>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sand">
                  View route <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-soft">
            <RichText text={c.makkahMadinah.note} />
          </p>
        </div>
      </section>

      {/* ── Pilgrims ── */}
      <section aria-labelledby="pilgrims-h" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Head id="pilgrims" kicker="Umrah and Hajj" title={c.pilgrims.heading} />
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {c.pilgrims.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 flex flex-wrap gap-3">
            {c.pilgrims.links.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 rounded-full border border-hairline px-4 py-2 text-sm font-semibold text-midnight hover:border-brass">
                {l.label} <ArrowRight className="size-3.5 text-brass" aria-hidden="true" />
              </Link>
            ))}
          </p>
        </div>
      </section>

      {/* ── City ── */}
      <section id="city" aria-labelledby="city-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="city" kicker="Around the city" title={c.city.heading} />
          <div className="mt-6 max-w-3xl space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {c.city.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.city.places.map((pl) => {
              const p = photos[pl.photo];
              return (
                <article key={pl.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-ink">{pl.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{pl.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business ── */}
      <section id="business" aria-labelledby="business-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
          <div>
            <Head id="business" kicker="Business" title={c.business.heading} />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {c.business.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <Pic p={P.corniche} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      {/* ── Areas ── */}
      <section aria-labelledby="areas-h" className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="areas" kicker="Pickup points" title={c.areas.heading} />
          <p className="mt-4 max-w-3xl text-ink-soft">{c.areas.intro}</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {c.areas.groups.map((g) => (
              <div key={g.title} className="bg-white p-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brass">
                  <Building2 className="size-4" aria-hidden="true" /> {g.title}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional ── */}
      <section id="regional" aria-labelledby="regional-h" className="scroll-mt-28 bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="regional" kicker="Beyond Jeddah" title={c.regional.heading} light />
          <p className="mt-4 max-w-3xl text-white/80">{c.regional.intro}</p>
          <ul className="mt-8 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/15">
            {c.regional.routes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 transition hover:bg-white/5">
                  <span className="font-mono text-sm uppercase tracking-wider text-white">Jeddah → {r.title}</span>
                  <span className="font-mono text-sm text-sand">{r.dist}</span>
                  <ArrowRight className="size-4 text-sand transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Request ── */}
      <section id="request" aria-labelledby="request-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Head id="request" kicker="Quotation" title={c.request.heading} />
            <ol className="mt-8 space-y-5">
              {c.request.steps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: RED_SEA }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.t}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href={whatsappLink(WA)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-midnight hover:border-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
            </a>
          </div>
          <div className="rounded-2xl bg-offwhite p-5 ring-1 ring-hairline sm:p-6">
            <QuoteForm
              serviceType="Jeddah city transfer"
              city="Jeddah"
              defaultPickup="Jeddah"
              dropoffPlaceholder={c.request.dropoffPlaceholder}
              messagePlaceholder={c.request.messagePlaceholder}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ + guides ── */}
      <section aria-labelledby="faq-h" className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Head id="faq" kicker="FAQs" title="Jeddah transfer questions" />
          <div className="mt-8 divide-y divide-hairline rounded-2xl bg-white px-5 ring-1 ring-hairline sm:px-8">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden">
                  <h3 className="text-base font-semibold text-ink">{f.question}</h3>
                  <ChevronDown className="mt-0.5 size-5 shrink-0 text-brass transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ink-muted">Jeddah travel guides</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {c.guides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-midnight ring-1 ring-hairline hover:ring-brass">
                    {g.label} <ArrowRight className="size-3.5 text-brass" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/city-transfers" className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-midnight ring-1 ring-hairline hover:ring-brass">
                  City transfers overview <ArrowRight className="size-3.5 text-brass" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: RED_SEA }}>
        <Image src={P.fountain.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
            </a>
            <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-sand hover:text-sand">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
