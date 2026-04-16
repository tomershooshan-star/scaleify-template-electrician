import { Star, Quote } from "lucide-react";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Reviews</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
            What our customers say.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <Quote
                aria-hidden
                className="absolute right-6 top-6 h-10 w-10 text-brand-yellow/30"
              />
              <div className="mb-4 flex gap-1 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-brand-black">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-black text-xs font-bold text-brand-yellow">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-black">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-black/60">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
