import { Star } from "lucide-react";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-brand-creamDeep/40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Reviews</span>
          <h2 className="display-xl mt-5 text-brand-navy">
            What customers <em className="italic text-brand-red">actually</em> say.
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-[28px] bg-brand-paper p-8 shadow-card lg:p-10"
            >
              <div className="mb-5 flex gap-0.5 text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-[22px] leading-snug tracking-tight text-brand-navy lg:text-[26px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy font-grotesk text-xs font-bold text-brand-cream">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="font-grotesk">
                  <div className="text-sm font-semibold text-brand-navy">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-navy/55">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
