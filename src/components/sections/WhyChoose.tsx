import { whyChoose } from "@/config/site";
import { Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck,
};

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2400&q=85"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,21,32,0.96) 0%, rgba(15,21,32,0.85) 45%, rgba(15,21,32,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 65%)" }}
        />
      </div>

      <div className="container-x relative py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="inline-block h-1 w-1 rounded-full bg-brand-red" />
              Why VoltSafe
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-brand-cream lg:text-6xl">
              Electrical work done <em className="italic text-brand-red">right</em>.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[16.5px] leading-relaxed text-brand-cream/65">
              Six non-negotiables that make us the last electrician you'll ever
              need to call. Not a promise — a guarantee, in writing.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { n: "20+", label: "Years Serving LA" },
                { n: "10K+", label: "Jobs Completed" },
                { n: "4.9★", label: "1,280+ Reviews" },
                { n: "60min", label: "Emergency Response" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="font-display text-4xl text-brand-red">{s.n}</div>
                  <div className="mt-1 font-grotesk text-[11px] uppercase tracking-[0.18em] text-brand-cream/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <WhyCard key={item.title} item={item} i={i} icon={iconMap[item.icon] ?? Award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ item, i, icon: Icon }: { item: { title: string; desc: string }; i: number; icon: LucideIcon }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-7 backdrop-blur-sm transition-all duration-700 ease-out hover:border-brand-red/40 hover:bg-brand-cream/[0.07]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${i % 2 === 0 ? 30 : 40}px)`,
        transitionDelay: `${i * 80}ms`,
      }}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-brand-cream transition group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="font-display text-xl leading-snug text-brand-cream">{item.title}</h3>
      <p className="mt-3 font-sans text-[14px] leading-relaxed text-brand-cream/60">{item.desc}</p>
    </div>
  );
}
