import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function CtaBand() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[40px] transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2400&q=85"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(15,21,32,0.96) 0%, rgba(15,21,32,0.78) 50%, rgba(228,67,44,0.45) 100%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-8 px-8 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                <span className="inline-block h-1 w-1 rounded-full bg-brand-red" />
                Standing By
              </span>
              <h2 className="mt-4 font-display text-5xl leading-[1.05] text-brand-cream lg:text-6xl">
                One call, <em className="italic text-brand-red">done right</em>.
              </h2>
              <p className="mt-5 max-w-lg font-sans text-[16.5px] leading-relaxed text-brand-cream/70">
                Whether it's a midnight emergency or a panel upgrade you've put
                off for years — a licensed electrician is ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 font-grotesk text-sm font-semibold text-brand-cream transition hover:bg-brand-cream hover:text-brand-navy"
              >
                Get Free Estimate
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-cream/30 bg-brand-cream/[0.05] px-8 py-4 font-grotesk text-sm font-semibold text-brand-cream backdrop-blur-sm transition hover:border-brand-cream hover:bg-brand-cream hover:text-brand-navy"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
