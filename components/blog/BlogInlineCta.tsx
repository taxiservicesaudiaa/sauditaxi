import Link from "next/link";
import { MessageCircle, Send, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/**
 * Topic-to-commercial-page mapping.
 * When a blog slug contains any of the trigger keywords, the matching
 * contextual links are shown in addition to the default service links.
 */
const topicLinks: { match: string[]; links: { label: string; href: string }[] }[] = [
  {
    match: ["jeddah-vs-madinah-airport-for-umrah"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
    ],
  },
  {
    match: ["late-night-airport-transfers-saudi-arabia"],
    links: [
      { label: "Airport Transfers", href: "/airport-transfers" },
    ],
  },
  {
    match: ["jeddah-airport-driver-meeting-point"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Jeddah Taxi Service", href: "/taxi-service/jeddah" },
    ],
  },
  {
    match: ["jeddah-to-yanbu-transfer-guide"],
    links: [
      { label: "Jeddah to Yanbu Route", href: "/routes/jeddah-to-yanbu" },
      { label: "Yanbu Taxi Service", href: "/taxi-service/yanbu" },
    ],
  },
  {
    match: ["f1h2o-jeddah-grand-prix-transfer"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Private Chauffeur Service in Jeddah", href: "/jeddah/private-chauffeur-service-jeddah" },
    ],
  },
  {
    match: ["wrc-rally-saudi-arabia-transfer"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Private Chauffeur Service in Jeddah", href: "/jeddah/private-chauffeur-service-jeddah" },
    ],
  },
  {
    match: ["gulf-cup-27-jeddah-transfer"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Private Chauffeur Service in Jeddah", href: "/jeddah/private-chauffeur-service-jeddah" },
    ],
  },
  {
    match: ["wwe-crown-jewel-riyadh-transfer"],
    links: [
      { label: "Riyadh Airport to KAFD Transfer", href: "/riyadh/king-khalid-airport-to-kafd" },
      { label: "Riyadh Chauffeur Service", href: "/taxi-service/riyadh" },
    ],
  },
  {
    match: ["black-hat-mea-riyadh-transfer"],
    links: [
      { label: "Riyadh Airport to Exhibition Center", href: "/riyadh/king-khalid-airport-to-ricec-exhibition-center" },
      { label: "Riyadh Chauffeur Service", href: "/taxi-service/riyadh" },
    ],
  },
  {
    match: ["first-time-in-riyadh-guide"],
    links: [
      { label: "Riyadh Airport Transfer", href: "/airport-transfer/riyadh-airport" },
      { label: "Riyadh Taxi Service", href: "/taxi-service/riyadh" },
    ],
  },
  {
    match: ["jeddah-to-madinah-transfer-guide"],
    links: [
      { label: "Jeddah → Madinah Route", href: "/routes/jeddah-to-madinah" },
      { label: "Umrah Transport Service", href: "/umrah-taxi-service" },
    ],
  },
  {
    match: ["first-time-in-jeddah-guide"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Jeddah Taxi Service", href: "/taxi-service/jeddah" },
    ],
  },
  {
    match: ["riyadh-airport-driver-meeting-point"],
    links: [
      { label: "Riyadh Airport Transfer", href: "/airport-transfer/riyadh-airport" },
      { label: "Riyadh Taxi Service", href: "/taxi-service/riyadh" },
    ],
  },
  {
    match: ["tabuk-regional-airport-arrival-guide"],
    links: [
      { label: "Tabuk Airport Transfer", href: "/airport-transfer/tabuk-airport" },
      { label: "Tabuk → NEOM Route", href: "/routes/tabuk-to-neom" },
    ],
  },
  {
    match: ["jeddah-islamic-port-passenger-guide"],
    links: [
      { label: "Jeddah Islamic Port → Airport", href: "/jeddah/jeddah-islamic-port-to-jeddah-airport" },
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
    ],
  },
  {
    match: ["yanbu-airport-arrival-guide"],
    links: [
      { label: "Yanbu Airport Transfer", href: "/airport-transfer/yanbu-airport" },
      { label: "Yanbu Taxi Service", href: "/taxi-service/yanbu" },
    ],
  },
  {
    match: ["riyadh-to-abha-transfer-guide"],
    links: [
      { label: "Riyadh → Abha Route", href: "/routes/riyadh-to-abha" },
      { label: "Abha Airport Transfer", href: "/airport-transfer/abha-airport" },
    ],
  },
  {
    match: ["meet-and-greet-airport-service-saudi-arabia"],
    links: [
      { label: "Airport Transfers", href: "/airport-transfers" },
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
    ],
  },
  {
    match: ["abha-airport-arrival-guide"],
    links: [
      { label: "Abha Airport Transfer", href: "/airport-transfer/abha-airport" },
      { label: "Khamis Mushait Taxi Service", href: "/taxi-service/khamis-mushait" },
    ],
  },
  {
    match: ["taif-regional-airport-arrival-guide"],
    links: [
      { label: "Taif Airport Transfer", href: "/airport-transfer/taif-airport" },
      { label: "Taif Airport → Makkah Route", href: "/routes/taif-airport-to-makkah" },
    ],
  },
  {
    match: ["madinah-airport-driver-pickup-guide"],
    links: [
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
      { label: "Madinah → Makkah Route", href: "/routes/madinah-to-makkah" },
    ],
  },
  {
    match: ["alula-airport-arrival-guide"],
    links: [
      { label: "AlUla Airport Transfer", href: "/airport-transfer/alula-airport" },
      { label: "AlUla Taxi Service", href: "/taxi-service/alula" },
    ],
  },
  {
    match: ["jeddah-to-riyadh-transfer-guide"],
    links: [
      { label: "Jeddah → Riyadh Route", href: "/routes/jeddah-to-riyadh" },
      { label: "Riyadh Taxi Service", href: "/taxi-service/riyadh" },
    ],
  },
  {
    match: ["umrah", "miqat", "ihram"],
    links: [
      { label: "Umrah Transport Service", href: "/umrah-taxi-service" },
      { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-to-makkah" },
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
    ],
  },
  {
    match: ["jeddah-airport", "jeddah airport", "king-abdulaziz", "landing-at-jeddah"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Jeddah → Makkah Transfer", href: "/routes/jeddah-to-makkah" },
    ],
  },
  {
    match: ["dammam", "bahrain", "khobar", "riyadh"],
    links: [
      { label: "Dammam → Bahrain Transfer", href: "/routes/dammam-to-bahrain" },
      { label: "Dammam → Riyadh Transfer", href: "/routes/dammam-to-riyadh" },
    ],
  },
  {
    match: ["hajj", "ziyarat"],
    links: [
      { label: "Ziyarat Taxi Service", href: "/ziyarat-taxi-service" },
      { label: "Hajj Transport", href: "/hajj-transport-service" },
    ],
  },
  {
    match: ["madinah", "medina", "madina"],
    links: [
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
      { label: "Madinah Taxi Service", href: "/taxi-service/madinah" },
    ],
  },
];

const defaultLinks = [
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Umrah Transport", href: "/umrah-taxi-service" },
  { label: "Makkah Taxi", href: "/taxi-service/makkah" },
  { label: "Madinah Taxi", href: "/taxi-service/madinah" },
];

function getContextualLinks(slug: string) {
  const s = slug.toLowerCase();
  for (const topic of topicLinks) {
    if (topic.match.some((kw) => s.includes(kw))) {
      return topic.links;
    }
  }
  return defaultLinks;
}

interface BlogInlineCtaProps {
  slug?: string;
}

/**
 * Compact in-content CTA shown on mobile (the sticky sidebar replaces it on
 * desktop). Placed after the intro and before the conclusion of each post.
 * When a slug is provided, contextual service links are shown based on topic.
 */
export function BlogInlineCta({ slug = "" }: BlogInlineCtaProps) {
  const wa = whatsappLink("Hello! I'd like to book a private transfer in Saudi Arabia.");
  const links = getContextualLinks(slug);

  return (
    <div className="my-8 rounded-2xl border border-hairline bg-midnight p-5 text-white lg:hidden">
      <p className="font-bold">Need a private transfer in Saudi Arabia?</p>
      <p className="mt-1 text-sm text-white/75">Fixed prices, professional drivers, fast reply.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-1.5 rounded-full bg-brass px-4 py-2 text-sm font-semibold text-midnight"
        >
          <Send className="size-4" /> Get a Quote
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 hover:text-brass">
            <ArrowRight className="size-3 rtl:rotate-180" /> {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
