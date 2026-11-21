import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Building, Car, Check, CircleAlert, Hotel, Lock, Luggage, MessageCircle, Plane, Send, Square, Users } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { ArrivalQuoteCard } from "@/components/routes/ArrivalQuoteCard";
import type { RelatedRouteCard } from "@/components/routes/LongDistanceRouteView";
import type { Faq } from "@/data/faqs";
import { DMM_ABQAIQ as c, DMM_ABQAIQ_REVIEWED } from "@/data/dammam-airport-to-abqaiq-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/dammam-airport-to-abqaiq — "arrivals". Its own layout: hero with a
 * runway strip and a dark arrival card (flight number, destination type), a
 * flight-information-board facts panel, ticket-stub arrival steps, town vs
 * facility cards, airport-vs-city distance bars, a team manifest example,
 * bag-icon vehicle tiles, checklist + chevron booking steps, a hub feature
 * card, chat-bubble FAQs and a boarding-pass CTA.
 * Copy: data/dammam-airport-to-abqaiq-route.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

function RichText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  const cls = onDark
    ? "font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
    : "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={cls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

export function DmmAbqaiqRouteView({ faqs, crumbs, relatedRoutes }: { faqs: Faq[]; crumbs: Crumb[]; relatedRoutes: RelatedRouteCard[] }) {
  const maxKm = Math.max(...c.road.compare.map((x) => x.km));

  return (
    <>
      {/* ── Hero with runway strip ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className={`relative ${wrap} pb-24 pt-28 sm:pb-28 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                <Plane className="size-3.5" aria-hidden="true" />
                {c.hero.kicker}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              <p className="mt-4 text-lg text-brass-soft">{c.hero.lead}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/75">{c.hero.body}</p>
              <ul className="mt-6 space-y-2">
                {c.hero.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div id="quote" className="scroll-mt-32 lg:pt-2">
              <ArrivalQuoteCard title={c.quickForm.title} airportLabel="King Fahd International Airport (DMM)" destinations={c.quickForm.destinations} note={c.quickForm.note} />
            </div>
          </div>
        </div>
        {/* runway */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-midnight-soft" aria-hidden="true">
          <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.55)_0_36px,transparent_36px_64px)]" />
          <div className="absolute inset-x-0 top-1 h-px bg-[repeating-linear-gradient(to_right,#c8a96b_0_4px,transparent_4px_40px)]" />
          <div className="absolute inset-x-0 bottom-1 h-px bg-[repeating-linear-gradient(to_right,#c8a96b_0_4px,transparent_4px_40px)]" />
        </div>
      </section>

      {/* ── Flight-information board ── */}
      <section aria-labelledby="board" className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-14`}>
          <div className="overflow-hidden rounded-2xl bg-[#060e18] p-1 shadow-xl ring-1 ring-black/40">
            <div className="flex items-center justify-between rounded-t-xl bg-midnight px-5 py-3">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-brass">ARRIVALS · TRANSFER</span>
              <span className="font-mono text-xs text-white/50">DMM → ABQAIQ</span>
            </div>
            <dl className="divide-y divide-white/5 font-mono">
              {c.board.rows.map((r) => (
                <div key={r.k} className="grid grid-cols-[6.5rem_1fr] gap-3 px-5 py-3 text-sm sm:grid-cols-[8rem_1fr]">
                  <dt className="font-bold tracking-widest text-brass">{r.k}</dt>
                  <dd className="text-white/90">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 id="board" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.board.heading}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink">{c.board.answer}</p>
          </div>
        </div>
      </section>

      {/* ── Arrival steps — ticket stubs ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.arrival.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.arrival.intro}</p>
          <ol className="mt-8 grid gap-3 md:grid-cols-2">
            {c.arrival.steps.map((s, i) => (
              <li key={s.title} className="flex overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
                <span className="flex w-16 shrink-0 items-center justify-center border-r-2 border-dashed border-hairline bg-midnight text-2xl font-bold text-brass">{i + 1}</span>
                <div className="p-5">
                  <h3 className="font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 flex items-start gap-2 text-sm text-ink">
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            {c.arrival.delay}
          </p>
        </div>
      </section>

      {/* ── Town vs facility ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.destination.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.destination.intro}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { ...c.destination.town, dark: false, Icon: Hotel },
              { ...c.destination.facility, dark: true, Icon: Lock },
            ].map(({ title, text, send, dark, Icon }) => (
              <div key={title} className={`rounded-3xl p-7 ${dark ? "bg-midnight text-white" : "bg-sand/50 text-ink"}`}>
                <Icon className={`size-7 ${dark ? "text-brass" : "text-midnight"}`} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/80" : "text-ink-soft"}`}>{text}</p>
                <p className={`mt-5 text-xs font-bold uppercase tracking-wider ${dark ? "text-brass" : "text-ink-muted"}`}>Send us</p>
                <ul className="mt-2 space-y-1.5">
                  {send.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="size-3.5 text-brass" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">{c.destination.disclaimer}</p>
        </div>
      </section>

      {/* ── Road journey + comparison bars ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.road.heading}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.road.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
          <figure className="self-center rounded-2xl bg-white p-6 ring-1 ring-hairline">
            <figcaption className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">Road distance to Abqaiq</figcaption>
            <ul className="mt-5 space-y-5">
              {c.road.compare.map((x, i) => (
                <li key={x.from}>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-ink">{x.from}</span>
                    <span className="tabular-nums text-ink-soft">≈ {x.km} km</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-sand/70">
                    <div className={`h-full rounded-full ${i === 0 ? "bg-midnight" : "bg-brass"}`} style={{ width: `${(x.km / maxKm) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-muted">OpenStreetMap routing to Abqaiq town centre.</p>
          </figure>
        </div>
      </section>

      {/* ── Contractors & teams + manifest ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.teams.heading}</h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.teams.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-hairline">
              <figcaption className="flex items-center gap-2 bg-sand/50 px-5 py-3 text-sm font-bold text-ink">
                <Briefcase className="size-4 text-brass" aria-hidden="true" />
                {c.teams.manifest.title}
              </figcaption>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      {c.teams.manifest.columns.map((col) => (
                        <th key={col} scope="col" className="px-5 py-3 font-semibold">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {c.teams.manifest.rows.map((r) => (
                      <tr key={r[0]}>
                        {r.map((cell, ci) => (
                          <td key={ci} className={`px-5 py-3 ${ci === 0 ? "font-semibold text-ink" : "italic text-ink-muted"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Vehicles — bag icons ── */}
      <section id="vehicles" className="scroll-mt-32 bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.vehicles.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.vehicles.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const bags = c.vehicles.bags[v.id] ?? 0;
              return (
                <li key={v.id} className="rounded-2xl bg-white p-5 ring-1 ring-hairline">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-ink">{v.name}</h3>
                      <p className="text-xs text-ink-muted">{v.examples}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-midnight px-2.5 py-1 text-xs font-semibold text-white">
                      <Users className="size-3.5 text-brass" aria-hidden="true" />
                      {v.passengers.replace(" passengers", "")}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-1" role="img" aria-label={v.luggage}>
                    {bags > 0 ? (
                      Array.from({ length: bags }).map((_, i) => <Luggage key={i} className="size-5 text-brass" aria-hidden="true" />)
                    ) : (
                      <span className="text-sm text-ink-soft">{v.luggage}</span>
                    )}
                    {bags > 0 && <span className="ml-1 text-xs text-ink-muted">{v.luggage}</span>}
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-white p-4 text-sm text-ink ring-1 ring-hairline">
            <Car className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            {c.vehicles.equipment}
          </p>
        </div>
      </section>

      {/* ── Ready checklist + chevron booking steps ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-14`}>
          <div className="rounded-3xl border-2 border-dashed border-hairline p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink">{c.ready.heading}</h2>
            <ul className="mt-5 space-y-2.5">
              {c.ready.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-sm text-ink">
                  <Square className="size-4 shrink-0 text-ink-muted" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.booking.heading}</h2>
            <ol className="mt-6 space-y-2">
              {c.booking.steps.map((s, i) => (
                <li
                  key={s}
                  className={`flex items-center gap-4 py-4 pl-5 pr-10 text-sm font-semibold [clip-path:polygon(0_0,calc(100%-1.25rem)_0,100%_50%,calc(100%-1.25rem)_100%,0_100%)] ${
                    i === c.booking.steps.length - 1 ? "bg-brass text-midnight" : "bg-midnight text-white"
                  }`}
                  style={{ width: `${88 + i * 4}%` }}
                >
                  <span className="tabular-nums opacity-70">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Return + related ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <div className="rounded-3xl bg-midnight p-7 text-white sm:p-10">
            <div className="flex items-center gap-3 text-sm font-bold text-brass" aria-hidden="true">
              Abqaiq <ArrowRight className="size-4" /> DMM <Plane className="size-4 -rotate-45" />
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{c.returnTrip.heading}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-[15px]">
              <RichText text={c.returnTrip.text} onDark />
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.related.heading}</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <Link href={c.related.hub.href} className="group flex flex-col justify-between rounded-2xl bg-white p-6 ring-2 ring-brass">
              <Building className="size-7 text-brass" aria-hidden="true" />
              <div className="mt-6">
                <p className="text-lg font-bold text-ink">{c.related.hub.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.related.hub.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight group-hover:text-brass">
                  Open the airport page <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedRoutes.map((r) => {
                const hideMeta = c.related.routes.some((x) => `/routes/${x.slug}` === r.href && "hideMeta" in x && x.hideMeta);
                return (
                <li key={r.href}>
                  <Link href={r.href} className="flex h-full items-center justify-between gap-3 rounded-2xl bg-white p-4 ring-1 ring-hairline transition hover:ring-brass">
                    <span>
                      <span className="block font-semibold text-ink">{r.label}</span>
                      <span className="block text-xs text-ink-muted">
                        {r.text}
                        {hideMeta ? null : ` · ${r.meta}`}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                  </Link>
                </li>
                );
              })}
              <li className="sm:col-span-2">
                <Link href={c.related.city.href} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-hairline transition hover:ring-brass">
                  <Car className="size-5 text-brass" aria-hidden="true" />
                  <span className="font-semibold text-ink">{c.related.city.label}</span>
                  <span className="text-xs text-ink-muted">· {c.related.city.text}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Full form ── */}
      <section id="quote-details" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.form.heading}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.form.text}</p>
          <div className="mt-8 rounded-2xl bg-sand/30 p-5 ring-1 ring-hairline sm:p-8">
            <QuoteForm
              serviceType="Dammam Airport to Abqaiq transfer"
              route="Dammam Airport to Abqaiq"
              defaultPickup="King Fahd International Airport (DMM)"
              defaultDropoff="Abqaiq"
              messagePlaceholder={c.form.messagePlaceholder}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ — chat bubbles (FAQPage JSON-LD) ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div key={f.question} className="space-y-2">
                <dt className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-midnight px-5 py-3 text-sm font-semibold text-white sm:text-[15px]">{f.question}</dt>
                <dd className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-5 py-3 text-sm leading-relaxed text-ink-soft ring-1 ring-hairline sm:text-[15px]">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink-soft">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={DMM_ABQAIQ_REVIEWED}>{new Date(`${DMM_ABQAIQ_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — boarding pass ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className={wrap}>
          <div className="relative grid overflow-hidden rounded-3xl bg-midnight text-white md:grid-cols-[minmax(0,1.6fr)_auto]">
            <span className="absolute left-[calc(100%-17rem)] top-0 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block" aria-hidden="true" />
            <span className="absolute bottom-0 left-[calc(100%-17rem)] hidden size-8 -translate-x-1/2 translate-y-1/2 rounded-full bg-white md:block" aria-hidden="true" />
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="text-2xl font-bold">DMM</span>
                <span className="h-px flex-1 border-t-2 border-dashed border-brass/60" aria-hidden="true" />
                <Plane className="size-5 rotate-90 text-brass" aria-hidden="true" />
                <span className="h-px flex-1 border-t-2 border-dashed border-brass/60" aria-hidden="true" />
                <span className="text-2xl font-bold">ABQ</span>
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{c.finalCta.heading}</h2>
              <p className="mt-2 text-white/75">{c.finalCta.text}</p>
            </div>
            <div className="flex flex-col justify-center gap-3 border-t-2 border-dashed border-white/20 p-8 sm:p-10 md:w-[17rem] md:border-l-2 md:border-t-0">
              <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                <Send className="size-4" />
                {c.finalCta.primary}
              </a>
              <a
                href={whatsappLink(c.hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
              >
                <MessageCircle className="size-4" />
                {c.finalCta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
