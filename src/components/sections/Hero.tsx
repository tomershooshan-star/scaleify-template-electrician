import { Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #FACC15 0, transparent 40%), radial-gradient(circle at 80% 80%, #FACC15 0, transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FACC15 0 1px, transparent 1px 20px)",
        }}
      />

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col justify-center">
          <span className="eyebrow mb-6 self-start">{site.hero.eyebrow}</span>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {site.hero.headline.split("&").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-brand-yellow">&</span>
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {site.hero.subhead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="primary">
              <a href={site.hero.primaryCta.href}>
                <Phone className="h-4 w-4" />
                {site.hero.primaryCta.label}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:border-white/40">
              <a href={site.hero.secondaryCta.href}>
                {site.hero.secondaryCta.label}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
              <span className="font-semibold text-white">
                {site.review.stars}
              </span>
              · {site.review.count.toLocaleString()} reviews
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-yellow" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-yellow" />
              24/7 Emergency
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-yellow/20 via-transparent to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-charcoal to-black">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
              alt="Licensed electrician working"
              className="h-full w-full object-cover opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">All work warrantied</div>
                <div className="text-xs text-white/70">Lifetime workmanship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
