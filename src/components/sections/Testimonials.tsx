import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const { ref, inView } = useReveal<HTMLDivElement>(0.12);
  const active = testimonials[idx];

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0F1520 0%, #1B2433 55%, #0F1520 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/3 top-0 h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-x relative py-24 lg:py-32">
        <div
          ref={ref}
          className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease-out",
          }}
        >
          <div>
            <span className="inline-flex items-center gap-2 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="inline-block h-1 w-1 rounded-full bg-brand-red" />
              Reviews
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-brand-cream lg:text-6xl">
              Real client <em className="italic text-brand-red">feedback</em>.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[16.5px] leading-relaxed text-brand-cream/65">
              1,280+ five-star reviews across Google, Yelp, and Nextdoor. Here's
              what homeowners and business owners say after we wrap up the job.
            </p>

            <div className="mt-9 flex items-center gap-5 rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-5 backdrop-blur-sm">
              <div>
                <div className="flex gap-1 text-brand-red">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="mt-2 font-grotesk text-[11px] uppercase tracking-[0.18em] text-brand-cream/55">
                  4.9 · 1,280+ reviews
                </div>
              </div>
              <div className="h-12 w-px bg-brand-cream/15" />
              <div className="flex -space-x-2">
                {["MR", "JL", "DK", "PS"].map((i, k) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-navy bg-brand-red font-grotesk text-[11px] font-bold text-brand-cream"
                    style={{ zIndex: 10 - k }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-brand-cream/10 bg-brand-cream/[0.04] p-8 backdrop-blur-sm lg:p-10">
              <Quote aria-hidden className="absolute right-7 top-7 h-14 w-14 text-brand-red/25" strokeWidth={1.5} />
              <div className="mb-6 flex gap-0.5 text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <div key={idx} className="animate-fade-in-up">
                <blockquote className="font-display text-[22px] leading-snug text-brand-cream lg:text-[26px]">
                  "{active.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-grotesk text-sm font-bold text-brand-cream">
                    {active.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-grotesk">
                    <div className="text-[15px] font-semibold text-brand-cream">{active.name}</div>
                    <div className="text-[12px] text-brand-cream/55">{active.role}</div>
                  </div>
                </figcaption>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-brand-cream/10 pt-6">
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx ? "w-8 bg-brand-red" : "w-1.5 bg-brand-cream/25 hover:bg-brand-cream/45"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-red hover:bg-brand-red hover:text-brand-cream"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-red hover:bg-brand-red hover:text-brand-cream"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
