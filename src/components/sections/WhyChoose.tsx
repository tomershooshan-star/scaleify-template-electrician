import {
  Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck,
  type LucideIcon,
} from "lucide-react";
import { whyChoose } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  Award, BadgeDollarSign, Timer, ShieldCheck, Sparkles, Truck,
};

export function WhyChoose() {
  return (
    <section id="why" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">Why Choose VoltSafe</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
              Safer, faster, cleaner work — guaranteed.
            </h2>
            <p className="mt-4 text-base text-brand-black/60">
              We built this company on the belief that electrical work should be boring: on time, on budget, safely done, and warrantied.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => {
              const Icon = iconMap[item.icon] ?? Award;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-black/5 bg-muted/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-black">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-black/60">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
