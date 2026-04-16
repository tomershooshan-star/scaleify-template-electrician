import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function FinalCTA() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[40px] bg-brand-red px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-28">
          {/* Soft radial accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #F5F2EC 0%, transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #1B2433 0%, transparent 60%)" }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream/80">
                Get Started
              </span>
              <h2 className="mt-5 font-display text-[46px] leading-[0.98] tracking-tightest text-brand-cream sm:text-6xl lg:text-7xl">
                Your reliable electrician is just <em className="italic">one call</em> away.
              </h2>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" variant="dark" className="bg-brand-navy">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-5 w-5" />
                  Call {site.phone}
                </a>
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-grotesk text-sm font-semibold text-brand-cream/90 transition hover:gap-2.5 hover:text-brand-cream"
              >
                Request a free quote
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
