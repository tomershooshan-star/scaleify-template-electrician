import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const WEBHOOK = import.meta.env.VITE_CONTACT_WEBHOOK as string | undefined;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setStatus("sending");
    try {
      if (WEBHOOK) {
        const r = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: site.brand, ts: new Date().toISOString() }),
        });
        if (!r.ok) throw new Error("Webhook failed");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad-sm">
      <div className="container-x">
        {/* Red poster — the emotional CTA that intros the form */}
        <div className="relative overflow-hidden rounded-[40px] bg-brand-red px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #F5F2EC 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #1B2433 0%, transparent 60%)" }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream/80">
                Get Started
              </span>
              <h2 className="mt-5 font-display text-[46px] leading-[0.98] tracking-tightest text-brand-cream sm:text-6xl lg:text-7xl">
                Your reliable electrician is just <em className="italic">one call</em> away.
              </h2>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" variant="dark" className="bg-brand-navy">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  Call {site.phone}
                </a>
              </Button>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-1.5 font-grotesk text-sm font-semibold text-brand-cream/90 transition hover:gap-2.5 hover:text-brand-cream"
              >
                Or fill out the form below
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Form block — flows directly from the red poster, tighter spacing */}
        <div id="contact-form" className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h3 className="display-lg mt-5 text-brand-navy">
              Request a <em className="italic text-brand-red">free estimate</em>.
            </h3>
            <p className="mt-6 max-w-md font-grotesk text-[17px] leading-relaxed text-brand-navy/55">
              Tell us what's going on and we'll call back within 15 minutes during business hours — or first thing next morning if sent overnight.
            </p>

            <dl className="mt-12 space-y-5">
              <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
              <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow icon={MapPin} label="Address" value={site.address} />
              <ContactRow
                icon={Clock}
                label="Hours"
                value={`${site.hours.weekdays} · ${site.hours.emergency}`}
              />
            </dl>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[28px] border border-brand-navy/10 bg-brand-paper p-8 shadow-card lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Smith" />
              <Field label="Phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
            </div>
            <div className="mt-5">
              <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
            </div>
            <div className="mt-5">
              <Field label="Zip code" name="zip" placeholder="90001" />
            </div>
            <div className="mt-5">
              <Field
                label="Tell us about the issue"
                name="message"
                as="textarea"
                placeholder="Breaker keeps tripping in the kitchen…"
                required
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "sending"}>
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Request A Call"}
            </Button>
            {status === "error" && (
              <p className="mt-3 font-grotesk text-sm text-destructive">
                Something went wrong. Please call us at {site.phone}.
              </p>
            )}
            {status === "success" && (
              <p className="mt-3 font-grotesk text-sm text-brand-navy/55">
                Thanks — we'll reach out shortly.
              </p>
            )}
            <p className="mt-4 font-grotesk text-xs text-brand-navy/45">
              By submitting, you agree to receive a call or text back from {site.brand}. Message & data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <Icon className="h-4 w-4 text-brand-red" />
      <div>
        <dt className="font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/45">
          {label}
        </dt>
        <dd className="mt-1 font-grotesk text-[15px] font-medium text-brand-navy">
          {value}
        </dd>
      </div>
    </>
  );
  return (
    <div className="flex items-start gap-4">
      {href ? (
        <a href={href} className="flex items-start gap-4">
          {Inner}
        </a>
      ) : (
        Inner
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const cls =
    "w-full rounded-2xl border border-brand-navy/15 bg-brand-paper px-4 py-3.5 font-grotesk text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/55">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
