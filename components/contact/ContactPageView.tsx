import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/**
 * Dedicated /contact layout — conversational and calm, distinct from the
 * hub-style /services page and the form-first /get-quote page. A restrained
 * image hero (not the full-bleed marketing banner used on service pages)
 * keeps the page feeling conversational rather than commercial. Reused for
 * the Arabic page (type: "contactV2" in data/translations/ar.ts) with the
 * same content shape, Arabic strings, and the same QuoteForm component
 * passed in as `formSlot` (QuoteForm already localizes itself from the
 * pathname).
 */

export interface ContactDecisionItem {
  question: string;
  action: string;
  href: string;
}

export interface ContactMethod {
  key: "whatsapp" | "email";
  title: string;
  value: string;
  href: string;
  external?: boolean;
  bestFor: string;
}

export interface ContactPageViewContent {
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  topics: string[];
  decisionHeading: string;
  decisionItems: ContactDecisionItem[];
  methodsHeading: string;
  methodsIntro: string;
  methods: ContactMethod[];
  formHeading: string;
  formSubheading: string;
  infoHeading: string;
  infoItems: string[];
  nextStepsHeading: string;
  nextSteps: { label: string; text: string }[];
  linksHeading: string;
  links: { label: string; href: string }[];
}

interface ContactPageViewProps extends ContactPageViewContent {
  crumbs: Crumb[];
  formSlot: ReactNode;
}

const methodIcon = { whatsapp: MessageCircle, email: Mail } as const;

export function ContactPageView({
  eyebrow,
  h1,
  intro,
  heroImage,
  heroAlt,
  topics,
  decisionHeading,
  decisionItems,
  methodsHeading,
  methodsIntro,
  methods,
  formHeading,
  formSubheading,
  infoHeading,
  infoItems,
  nextStepsHeading,
  nextSteps,
  linksHeading,
  links,
  crumbs,
  formSlot,
}: ContactPageViewProps) {
  return (
    <>
      {/* Opening — restrained image hero, two-column: message on the left, topic chips on the right. */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-midnight/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/70 to-midnight/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-14 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{intro}</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decision module — helps the visitor pick the right next action before anything else. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{decisionHeading}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {decisionItems.map((item) => (
              <Link
                key={item.question}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-hairline bg-white p-6 transition-colors hover:border-brass"
              >
                <p className="text-[15px] leading-relaxed text-ink">{item.question}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight group-hover:text-brass">
                  {item.action}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact methods — only real, functioning channels. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{methodsHeading}</h2>
          <p className="mt-2 max-w-xl text-[15px] text-ink-soft">{methodsIntro}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {methods.map((m) => {
              const Icon = methodIcon[m.key];
              return (
                <a
                  key={`${m.key}-${m.value}`}
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-hairline bg-white p-6 transition-colors hover:border-brass"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{m.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{m.value}</span>
                    <span className="mt-2 block text-xs font-medium uppercase tracking-wide text-ink-muted">
                      {m.bestFor}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + supporting guidance — the actual conversion point. */}
      <section id="contact-form" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{infoHeading}</h2>
              <ul className="mt-5 space-y-2.5">
                {infoItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-bold tracking-tight text-ink sm:text-2xl">{nextStepsHeading}</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={step.label} className="relative ps-9">
                    {i !== nextSteps.length - 1 && (
                      <span className="absolute top-7 bottom-[-20px] start-[11px] w-px bg-hairline" aria-hidden="true" />
                    )}
                    <span className="absolute start-0 top-0 flex size-6 items-center justify-center rounded-full bg-midnight text-xs font-bold text-brass">
                      {i + 1}
                    </span>
                    <p className="font-semibold text-ink">{step.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-hairline bg-sand/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-ink">{formHeading}</h2>
              <p className="mt-1.5 text-sm text-ink-soft">{formSubheading}</p>
              <div className="mt-6">{formSlot}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful links — contextual, not a link dump. */}
      <section className="border-t border-hairline bg-sand/40 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ink">{linksHeading}</p>
          <div className="flex flex-wrap gap-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
