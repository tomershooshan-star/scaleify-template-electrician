import { Phone, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-24">
      <div className="container-x">
        {/* The rounded "poster" card — this is the signature look */}
        <div className="relative overflow-hidden rounded-[40px] bg-brand-navy text-brand-cream">
          {/* Background photograph */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2000&q=85"
              alt=""
              className="h-full w-full object-cover object-right scale-105"
              loading="eager"
            />
            {/* Left-to-right gradient so headline sits on a legible panel */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,21,32,0.95) 0%, rgba(15,21,32,0.85) 35%, rgba(15,21,32,0.3) 70%, rgba(15,21,32,0) 100%)",
              }}
            />
            {/* Top-to-bottom subtle darken */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,21,32,0.25) 0%, rgba(15,21,32,0) 40%, rgba(15,21,32,0.4) 100%)",
              }}
            />
          </div>

          {/* Grain noise overlay for depth */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative grid gap-10 px-7 pb-12 pt-10 sm:px-12 sm:pb-16 sm:pt-14 lg:px-16 lg:pb-24 lg:pt-20 xl:min-h-[640px]">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-dot text-brand-red/90">
                {site.hero.eyebrow}
              </span>

              <h1 className="display-hero mt-5 text-brand-cream">
                {site.hero.headline.split(" ").map((w, i, arr) => {
                  const last = i === arr.length - 1;
                  return (
                    <span key={i}>
                      {w}
                      {!last && " "}
                    </span>
                  );
                })}
              </h1>

              <p className="mt-6 max-w-xl font-grotesk text-[17px] leading-relaxed text-brand-cream/70">
                {site.hero.subhead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="md" variant="red">
                  <a href={site.hero.primaryCta.href}>
                    <Phone className="h-4 w-4" />
                    {site.hero.primaryCta.label}
                  </a>
                </Button>
                <Button asChild size="md" variant="outlineLight">
                  <a href={site.hero.secondaryCta.href}>
                    {site.hero.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </div>

            {/* Bottom-left trust strip inside the poster */}
            <div className="mt-auto flex flex-wrap items-center gap-5 pt-8 text-xs text-brand-cream/60">
              <div className="flex items-center gap-3">
                {/* Overlapping avatar stack */}
                <div className="flex -space-x-2">
                  {[
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/11.jpg",
                    "https://randomuser.me/api/portraits/women/68.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-brand-navy object-cover"
                    />
                  ))}
                </div>
                <div className="font-grotesk">
                  <div className="text-brand-cream">
                    Trusted by <span className="font-semibold">10,000+ customers</span>
                  </div>
                  <div className="text-brand-cream/55">
                    4.9★ · {site.review.count.toLocaleString()} verified reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating trust pills below hero */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-brand-navy/60">
          {[
            { icon: ShieldCheck, label: "Licensed & Insured" },
            { icon: Clock, label: "24/7 Emergency Response" },
            { icon: Sparkles, label: "Lifetime Workmanship Warranty" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 font-grotesk text-sm">
              <Icon className="h-4 w-4 text-brand-red" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
