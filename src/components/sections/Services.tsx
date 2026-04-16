import { services } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  // Use the first 6 as the editorial 3x2 grid — HandGrid style
  const list = services.slice(0, 6);
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="display-xl mt-5 text-brand-navy">
            Whatever's wired — we <em className="italic text-brand-red">fix</em> it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-grotesk text-[17px] leading-relaxed text-brand-navy/55">
            Residential and commercial electrical work, done right the first time. Licensed professionals, upfront quotes, and guaranteed workmanship.
          </p>
        </div>

        <div className="mt-20 grid gap-y-14 gap-x-14 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <article key={s.title} className="group">
              <div className="mb-5 aspect-[4/3] overflow-hidden rounded-[24px] bg-brand-creamDeep">
                <img
                  src={imgFor(s.title)}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-grotesk text-xl font-semibold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-3 font-grotesk text-[15px] leading-relaxed text-brand-navy/60">
                {s.desc}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-sm font-semibold text-brand-red transition group-hover:gap-2.5"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function imgFor(title: string) {
  const map: Record<string, string> = {
    "24/7 Emergency Repairs":
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    "Panel Upgrades":
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    "Rewiring & Troubleshooting":
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=80",
    "Lighting Installation":
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    "EV Charger Installation":
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=900&q=80",
    "Smart Home Wiring":
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
    "Generator Install & Backup":
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    "Electrical Inspections":
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  };
  return map[title] ?? "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80";
}
