import {
  Zap, Power, Cable, Lightbulb, PlugZap, Home, BatteryCharging, ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  Zap, Power, Cable, Lightbulb, PlugZap, Home, BatteryCharging, ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
            Whatever's wired — we fix it.
          </h2>
          <p className="mt-4 text-base text-brand-black/60">
            Residential and commercial electrical work, done right the first time. Licensed professionals, upfront quotes, and guaranteed workmanship.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Zap;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-brand-yellow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-black">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/60">
                  {s.desc}
                </p>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-yellow/0 transition group-hover:bg-brand-yellow/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
