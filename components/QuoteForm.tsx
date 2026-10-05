"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { vehicles } from "@/data/vehicles";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getDictionary, localeFromPathname } from "@/lib/i18n";

export interface QuoteFormProps {
  /** Prefill the pickup field (e.g. an airport or city). */
  defaultPickup?: string;
  /** Prefill the drop-off field. */
  defaultDropoff?: string;
  /** Prefill date (YYYY-MM-DD), time (HH:MM), and passenger count. */
  defaultDate?: string;
  defaultTime?: string;
  defaultPassengers?: string;
  /** Lead-tracking context — saved with the lead and sent in the emails. */
  serviceType?: string;
  city?: string;
  route?: string;
  className?: string;
  /** Two-column layout on larger screens. */
  twoColumn?: boolean;
  /**
   * Fill pickup/dropoff/date/time/passengers from the page's query string in
   * the browser (the homepage quick form links here with those params).
   * Reading them client-side instead of from the page's server searchParams
   * keeps the page prerendered — on the Cloudflare Workers Free plan a
   * server render per visit exceeds the CPU limit (error 1102).
   */
  prefillFromQuery?: boolean;
}

const QUERY_PREFILL_FIELDS = ["pickup", "dropoff", "date", "time", "passengers"] as const;

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const luggageOptions = ["0", "1", "2", "3", "4", "5+"];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  defaultPickup = "",
  defaultDropoff = "",
  defaultDate = "",
  defaultTime = "",
  defaultPassengers = "2",
  serviceType = "General taxi quote",
  city = "",
  route = "",
  className,
  twoColumn = true,
  prefillFromQuery = false,
}: QuoteFormProps) {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!prefillFromQuery || !formRef.current) return;
    const params = new URLSearchParams(window.location.search);
    for (const name of QUERY_PREFILL_FIELDS) {
      const value = params.get(name);
      const field = formRef.current.elements.namedItem(name);
      if (value && (field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) {
        field.value = value;
      }
    }
  }, [prefillFromQuery]);
  const dict = getDictionary(localeFromPathname(pathname));
  const t = dict.quoteForm;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Store first-touch attribution in localStorage on initial page load
  if (typeof window !== "undefined") {
    try {
      if (!localStorage.getItem("spt_first_touch")) {
        const params = new URLSearchParams(window.location.search);
        const firstTouch = {
          firstLandingPage: window.location.href,
          firstReferrer: document.referrer || undefined,
          firstUtmSource: params.get("utm_source") || undefined,
          firstUtmMedium: params.get("utm_medium") || undefined,
          firstUtmCampaign: params.get("utm_campaign") || undefined,
        };
        localStorage.setItem("spt_first_touch", JSON.stringify(firstTouch));
      }
    } catch {
      // Storage access blocked or restricted
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() ?? "";

    let firstTouchData: Record<string, string | undefined> = {};
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("spt_first_touch");
        if (raw) firstTouchData = JSON.parse(raw);
      } catch {
        // Fallback
      }
    }

    let searchParams: URLSearchParams | null = null;
    if (typeof window !== "undefined") {
      searchParams = new URLSearchParams(window.location.search);
    }

    const payload = {
      fullName: get("name") || undefined,
      email: get("email") || undefined,
      phone: get("phone"),
      pickupLocation: get("pickup") || undefined,
      dropoffLocation: get("dropoff") || undefined,
      date: get("date") || undefined,
      time: get("time") || undefined,
      passengers: get("passengers") || undefined,
      luggage: get("luggage") || undefined,
      vehicleType: get("vehicle") || undefined,
      flightNumber: get("flight") || undefined,
      message: get("message") || undefined,
      serviceType: route
        ? `${serviceType} (Route: ${route})`
        : city
          ? `${serviceType} (City: ${city})`
          : serviceType,
      sourcePage: `${siteConfig.url}${pathname}`,

      // Multi-touch attribution fields
      firstLandingPage: firstTouchData.firstLandingPage || undefined,
      firstReferrer: firstTouchData.firstReferrer || undefined,
      firstUtmSource: firstTouchData.firstUtmSource || undefined,
      firstUtmMedium: firstTouchData.firstUtmMedium || undefined,
      firstUtmCampaign: firstTouchData.firstUtmCampaign || undefined,
      landingPage: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
      utmSource: searchParams?.get("utm_source") || undefined,
      utmMedium: searchParams?.get("utm_medium") || undefined,
      utmCampaign: searchParams?.get("utm_campaign") || undefined,
      gclid: searchParams?.get("gclid") || undefined,
      searchSource: typeof document !== "undefined" && document.referrer.includes("google.") ? "google_organic" : undefined,
    };

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(json?.error ?? t.genericError);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.networkError);
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-green-200 bg-green-50 p-8 text-center",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto size-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-navy">{t.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          {t.successBody}
        </p>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {t.sendAnother}
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      aria-label={t.ariaLabel}
    >
      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-name">{t.fullName}</Label>
          <Input id="qf-name" name="name" autoComplete="name" placeholder={t.fullNamePlaceholder} required />
        </div>
        <div>
          <Label htmlFor="qf-phone">{t.phone}</Label>
          <Input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+966 5X XXX XXXX"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="qf-email">
          {t.email} <span className="font-normal text-muted-foreground">{t.optional}</span>
        </Label>
        <Input
          id="qf-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-pickup">{t.pickup}</Label>
          <Input id="qf-pickup" name="pickup" defaultValue={defaultPickup} placeholder={t.pickupPlaceholder} required />
        </div>
        <div>
          <Label htmlFor="qf-dropoff">{t.dropoff}</Label>
          <Input id="qf-dropoff" name="dropoff" defaultValue={defaultDropoff} placeholder={t.dropoffPlaceholder} required />
        </div>
      </div>

      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-date">{t.date}</Label>
          <Input id="qf-date" name="date" type="date" defaultValue={defaultDate} required />
        </div>
        <div>
          <Label htmlFor="qf-time">{t.time}</Label>
          <Input id="qf-time" name="time" type="time" defaultValue={defaultTime} required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="qf-passengers">{t.passengers}</Label>
          <Select id="qf-passengers" name="passengers" defaultValue={defaultPassengers}>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="qf-luggage">{t.luggage}</Label>
          <Select id="qf-luggage" name="luggage" defaultValue="2">
            {luggageOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="qf-vehicle">{t.vehicleType}</Label>
          <Select id="qf-vehicle" name="vehicle" defaultValue="Comfort">
            {vehicles.map((v) => (
              <option key={v.id} value={v.name}>{v.name}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="qf-flight">{t.flightNumber} <span className="font-normal text-muted-foreground">{t.optional}</span></Label>
        <Input id="qf-flight" name="flight" placeholder={t.flightNumberPlaceholder} />
      </div>

      <div>
        <Label htmlFor="qf-message">{t.message} <span className="font-normal text-muted-foreground">{t.optional}</span></Label>
        <Textarea id="qf-message" name="message" placeholder={t.messagePlaceholder} />
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full" disabled={submitting}>
        <Send className="size-5" />
        {submitting ? t.sending : t.sendRequest}
      </Button>

      <p
        className={cn(
          "text-center text-xs",
          status === "error" ? "text-red-600" : "text-muted-foreground"
        )}
        aria-live="polite"
      >
        {status === "error" ? errorMsg : t.disclaimer}
      </p>
    </form>
  );
}
