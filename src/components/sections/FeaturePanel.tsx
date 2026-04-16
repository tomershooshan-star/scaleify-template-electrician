import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const points = [
  "Master-level electricians, not handymen",
  "Licensed, insured, and bonded in every state we serve",
  "Fully warrantied workmanship",
  "Respectful, clean, and on time",
];

export function FeaturePanel() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="panel-dark grain relative overflow-hidden px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          {/* Soft spotlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 65%)" }}
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow eyebrow-dot">Why VoltSafe</span>
              <h2 className="display-xl mt-5 text-brand-cream">
                Customer satisfaction is our only priority.
              </h2>
              <p className="mt-6 max-w-lg font-grotesk text-[17px] leading-relaxed text-brand-cream/65">
                We built VoltSafe to be the one call you never regret. Safe work, honest pricing, respectful techs — and never a callback because we cut a corner.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="md" variant="red">
                  <a href="#services">Explore Our Services</a>
                </Button>
                <Button asChild size="md" variant="outlineLight">
                  <a href="#contact">Get A Free Estimate</a>
                </Button>
              </div>
            </div>

            <ul className="grid gap-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-brand-cream/10 bg-brand-navySoft/40 p-4 font-grotesk text-brand-cream/85"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
