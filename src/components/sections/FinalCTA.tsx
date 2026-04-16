import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function FinalCTA() {
  return (
    <section className="bg-brand-yellow">
      <div className="container-x relative overflow-hidden py-20 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-black/10 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-brand-yellow">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              Your reliable electrician is just one call away.
            </h2>
            <p className="mt-4 max-w-xl text-base text-brand-black/70">
              Free estimates. Licensed & insured. 24/7 emergency response. Upfront pricing with zero surprises.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <Button asChild size="lg" variant="dark">
              <a href={`tel:${site.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                Call {site.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-black/20 hover:border-brand-black/50">
              <a href="#contact">Request A Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
