import { Zap, ShieldCheck, Clock, Award, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  { icon: Award, title: "Master Electricians", desc: "State-licensed, bonded, and insured. No subs, no trainees." },
  { icon: Zap, title: "60-Min Response", desc: "Emergency dispatch across the metro. Truck at your door, fast." },
  { icon: Clock, title: "24/7 Availability", desc: "Sparks, smoke, dead power — we answer at 3am, every day." },
  { icon: ShieldCheck, title: "Lifetime Warranty", desc: "Labor warrantied for life on every install we touch." },
];

export function Features() {
  return (
    <section className="py-16 lg:py-20 bg-brand-creamDeep/40">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature: f, i }: { feature: Feature; i: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.15);
  const Icon = f.icon;
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-brand-navy/5 bg-brand-paper p-7 shadow-card transition-all duration-700 ease-out hover:-translate-y-1 hover:border-brand-red/40"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${i * 90}ms`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-35 blur-2xl transition-opacity group-hover:opacity-70"
        style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-[-40px] h-32 w-32 rounded-full opacity-20 blur-2xl"
        style={{ background: "radial-gradient(circle, #1B2433 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-brand-cream shadow-[0_10px_30px_-10px_rgba(228,67,44,0.6)] transition group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="font-display text-xl leading-snug text-brand-navy">{f.title}</h3>
        <p className="mt-3 font-sans text-[14.5px] leading-relaxed text-brand-navy/60">{f.desc}</p>
      </div>
    </div>
  );
}
