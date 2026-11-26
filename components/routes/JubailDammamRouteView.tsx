import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, ChevronDown, Home, MapPin, MessageCircle, Plane, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { JUBAIL_DAMMAM as c, JUBAIL_DAMMAM_PHOTOS as P } from "@/data/jubail-to-dammam-route";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/jubail-to-dammam — "coast road" layout: a photo hero of the Dammam
 * Corniche with the quote form beside it, a three-step coastal strip, a
 * two-sided pickup / drop-off board, audience cards, booking steps, FAQs and
 * related links. Kept light: a short regional route needs no photo essay.
 * Photo credits are listed on /image-credits. Copy: data/jubail-to-dammam-route.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer from Jubail to Dammam.";
const GULF = "#0d3550";
const SUIT_ICONS = [Briefcase, Plane, Home];

function Head({ id, kicker, title, intro }: { id: string; kicker: string; title: string; intro?: string }) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{intro}</p> : null}
    </header>
  );
}

export function JubailDammamRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero with form ── */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: GULF }}>
        <Image src={P.corniche.src} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d3550] via-[#0d3550]/90 to-[#0d3550]/40" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:px-8 lg:pb-20 lg:pt-36">
          <div className="min-w-0">
            <Breadcrumbs items={crumbs} onDark />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-200">{c.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{c.hero.intro}</p>
            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/20">
              {c.glance.stats.map((s) => (
                <div key={s.k} className="bg-[#0a2b41]/90 px-3 py-3 sm:px-4">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 sm:text-[11px]">{s.k}</dt>
                  <dd className="mt-1 text-sm font-bold sm:text-base">{s.v}</dd>
                </div>
              ))}
            </dl>
            <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold transition hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Ask on WhatsApp
            </a>
          </div>
          <div id="quote" className="scroll-mt-28 rounded-3xl bg-white p-5 text-ink shadow-xl sm:p-6">
            <h2 className="text-lg font-bold">Get a Jubail to Dammam quotation</h2>
            <p className="mt-1 text-sm text-ink-soft">Pickup, destination, date and passengers are enough to start.</p>
            <div className="mt-4">
              <QuoteForm
                serviceType="Jubail to Dammam transfer"
                route="jubail-to-dammam"
                defaultPickup="Jubail"
                defaultDropoff="Dammam"
                dropoffPlaceholder={c.booking.form.dropoffPlaceholder}
                messagePlaceholder={c.booking.form.messagePlaceholder}
                flightField="airport"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── At a glance + steps ── */}
      <section aria-labelledby="glance-h" className="bg-offwhite py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="glance-h" kicker="Journey at a glance" title="Jubail to Dammam in brief" />
          <p className="mt-5 max-w-3xl rounded-2xl border-l-4 border-brass bg-white p-5 text-[17px] leading-relaxed text-ink">{c.glance.answer}</p>
          <p className="mt-2 text-xs text-ink-muted">{c.glance.note}</p>
          <ol className="relative mt-10 grid gap-4 md:grid-cols-3">
            <span aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-0.5 bg-gradient-to-r from-brass via-sky-300 to-[#0d3550] md:block" />
            {c.steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-white p-5 ring-1 ring-hairline md:pt-14">
                <span className="flex size-10 items-center justify-center rounded-full bg-brass font-bold text-midnight md:absolute md:left-1/2 md:top-1 md:-translate-x-1/2">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink md:mt-0 md:text-center">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft md:text-center">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Service + pickup / drop-off board ── */}
      <section aria-labelledby="service-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="service-h" kicker="Private transfer" title={c.service.heading} intro={c.service.intro} />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { block: c.pickup, p: P.fanateer, tone: "bg-sand-soft", label: "From" },
              { block: c.dropoff, p: P.spiral, tone: "bg-sky-50", label: "To" },
            ].map(({ block, p, tone, label }) => (
              <article key={block.heading} className={`overflow-hidden rounded-3xl ${tone}`}>
                <div className="relative aspect-[16/9]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">{label}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink">{block.heading}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {block.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-ink">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink-muted">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl rounded-2xl bg-offwhite p-5 text-sm leading-relaxed text-ink-soft">{c.service.note}</p>
        </div>
      </section>

      {/* ── Who it suits ── */}
      <section aria-labelledby="suits-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="suits-h" kicker="Who travels this way" title="Who this route suits" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.suits.map((s, i) => {
              const Icon = SUIT_ICONS[i] ?? Briefcase;
              return (
                <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-hairline">
                  <Icon className="size-6 text-brass" aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
                  {s.link ? (
                    <Link href={s.link.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
                      {s.link.label} <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Booking + return ── */}
      <section aria-labelledby="book-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <Head id="book-h" kicker="Booking" title={c.booking.heading} />
            <ol className="mt-6 space-y-3">
              {c.booking.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl bg-offwhite p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full font-bold text-white" style={{ background: GULF }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="text-sm text-ink-soft">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-midnight hover:text-white">
              <Send className="size-4" aria-hidden="true" /> Get a Quote
            </a>
          </div>
          <aside aria-labelledby="return-h" className="self-start rounded-3xl p-6 text-white sm:p-8" style={{ background: GULF }}>
            <h2 id="return-h" className="text-xl font-bold">{c.returnTrip.heading}</h2>
            <p className="mt-3 leading-relaxed text-white/85">{c.returnTrip.text}</p>
            <Link href={c.returnTrip.link.href} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-brass">
              {c.returnTrip.link.label} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="faq-h" kicker="Questions" title="Jubail to Dammam questions" />
          <div className="mt-8 max-w-4xl divide-y divide-hairline rounded-2xl bg-white px-5 ring-1 ring-hairline sm:px-8">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden">
                  <h3 className="text-base font-semibold text-ink">{f.question}</h3>
                  <ChevronDown className="mt-0.5 size-5 shrink-0 text-brass transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section aria-labelledby="related-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="related-h" kicker="More journeys" title={c.related.heading} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group block h-full rounded-xl border border-hairline p-4 transition hover:border-brass">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    {l.label} <ArrowRight className="size-3.5 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{l.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-4xl text-xs leading-relaxed text-ink-muted">{c.method}</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 text-white" style={{ background: GULF }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">{c.final.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
            </a>
            <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
