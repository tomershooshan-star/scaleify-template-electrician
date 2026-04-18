import { useState } from "react";
import { CheckCircle2, Phone, ArrowUpRight, Play } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/config/site";

type TabKey = "mission" | "vision" | "values";

const tabs: Record<TabKey, { label: string; body: string[] | string }> = {
  mission: {
    label: "Mission",
    body: [
      "Emergency Response · 24/7",
      "Panel Upgrades · 200A",
      "EV Charger Installation",
      "Whole-Home Rewiring",
      "Smart Home Integration",
    ],
  },
  vision: {
    label: "Vision",
    body: [
      "Licensed Master Electricians",
      "Flat-Rate Upfront Pricing",
      "Lifetime Workmanship Warranty",
      "Code-Compliant Permits Pulled",
      "Shoe Covers + Drop Cloths",
      "Fully Stocked Service Trucks",
    ],
  },
  values: {
    label: "Values",
    body:
      "We answer the phone, show up on time, quote in writing, and leave your home cleaner than we found it. No hourly surprises, no subcontractors, no cut corners — just safe, code-passed electrical work done by licensed techs who actually care.",
  },
};

export function About() {
  const [active, setActive] = useState<TabKey>("vision");
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const tab = tabs[active];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div
            ref={ref}
            className="relative transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85"
                alt="Master electrician at panel"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <button
                aria-label="Watch story"
                className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-brand-cream shadow-xl transition hover:scale-105"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-red/40" />
                <Play className="ml-1 h-6 w-6 fill-brand-cream" strokeWidth={0} />
              </button>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="inline-block h-1 w-1 rounded-full bg-brand-red" />
              About Us
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-brand-navy lg:text-6xl">
              Electrical work you can{" "}
              <em className="italic text-brand-red">trust</em>.
            </h2>
            <p className="mt-6 max-w-lg font-sans text-[17px] leading-relaxed text-brand-navy/60">
              Two decades of licensed electrical work across LA. From dead outlets
              at midnight to full-home rewires, we do it safely, cleanly, and once
              — so you don't call us back for the same issue.
            </p>

            <div className="mt-9 flex items-center gap-8 border-b border-brand-navy/10">
              {(Object.keys(tabs) as TabKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative pb-3 font-display text-xl transition ${
                    active === key
                      ? "text-brand-navy"
                      : "text-brand-navy/45 hover:text-brand-navy/70"
                  }`}
                >
                  {tabs[key].label}
                  {active === key && (
                    <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-brand-red" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-7 min-h-[160px]">
              {Array.isArray(tab.body) ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {tab.body.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-grotesk text-[15px] font-medium text-brand-navy"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-red" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="max-w-lg font-sans text-[15.5px] leading-relaxed text-brand-navy/65">
                  {tab.body}
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 font-grotesk text-sm font-semibold text-brand-cream transition hover:bg-brand-red"
              >
                Read More
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-brand-cream">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="font-grotesk">
                  <div className="text-[11px] uppercase tracking-wider text-brand-navy/50">
                    Call any time
                  </div>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-[15px] font-semibold text-brand-navy hover:text-brand-red"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
