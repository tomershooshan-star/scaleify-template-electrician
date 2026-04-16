import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

// When deploying to a client, set VITE_CONTACT_WEBHOOK to an n8n/Zapier webhook URL.
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
        // Dev/preview fallback — just simulate a delay
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid gap-10 rounded-3xl border border-black/5 bg-muted/30 p-6 lg:grid-cols-2 lg:p-12">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
              Request a free estimate.
            </h2>
            <p className="mt-4 text-base text-brand-black/60">
              Tell us what's going on and we'll call you back within 15 minutes during business hours, or first thing in the morning if sent overnight.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-brand-yellowDark" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-black/50">Phone</dt>
                  <dd className="font-medium text-brand-black">
                    <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-brand-yellowDark" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-black/50">Email</dt>
                  <dd className="font-medium text-brand-black">{site.email}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-brand-yellowDark" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-black/50">Address</dt>
                  <dd className="font-medium text-brand-black">{site.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-brand-yellowDark" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-black/50">Hours</dt>
                  <dd className="font-medium text-brand-black">
                    {site.hours.weekdays}
                    <br />
                    <span className="text-brand-black/60">{site.hours.emergency}</span>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Smith" />
              <Field label="Phone" name="phone" required placeholder="(555) 000-0000" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
            <Field label="Zip code" name="zip" placeholder="90001" />
            <Field
              label="Tell us about the issue"
              name="message"
              as="textarea"
              placeholder="Breaker keeps tripping in the kitchen..."
              required
            />
            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Request A Call"}
            </Button>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please call us directly at {site.phone}.
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-brand-black/60">
                Thanks — we'll reach out shortly. For immediate help, call {site.phone}.
              </p>
            )}
            <p className="text-xs text-brand-black/50">
              By submitting, you agree to receive a call or text back from {site.brand} about your request. Message & data rates may apply.
            </p>
          </form>
        </div>
      </div>
    </section>
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
  const baseCls =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/30 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-black/60">
        {label}
        {required && <span className="text-brand-yellowDark"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={baseCls} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseCls}
        />
      )}
    </label>
  );
}
