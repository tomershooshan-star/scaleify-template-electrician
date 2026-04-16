import { Button } from "@/components/ui/Button";

const points = [
  "Licensed master electricians with hands-on years of experience",
  "Upfront pricing, respectful techs, clean and careful work",
];

export function FeaturePanel() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="panel-dark grain relative overflow-hidden px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          {/* Red spotlight glow bottom-left */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 60%)" }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            {/* LEFT: headline + copy + bullets + CTA */}
            <div className="max-w-xl">
              <span className="eyebrow eyebrow-dot">Why VoltSafe</span>
              <h2 className="mt-5 font-display text-[44px] leading-[0.98] tracking-tightest text-brand-cream sm:text-5xl lg:text-6xl">
                Customer satisfaction is our <em className="italic text-brand-red">only</em> priority.
              </h2>
              <p className="mt-6 font-grotesk text-[16px] leading-relaxed text-brand-cream/65">
                Your Comprehensive and Reliable Electrical Service Provider for All Your Home and Business Needs.
              </p>

              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex max-w-xs items-start gap-2.5 font-grotesk text-[14px] text-brand-cream/85"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="md" variant="red" className="mt-9">
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>

            {/* RIGHT: overlapping photo collage */}
            <div className="relative h-[380px] lg:h-[460px]">
              {/* Back/large photo — upper right */}
              <div className="absolute right-0 top-0 w-[68%] overflow-hidden rounded-[20px] shadow-soft ring-1 ring-brand-cream/10">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=85"
                  alt=""
                  className="h-64 w-full object-cover lg:h-72"
                  loading="lazy"
                />
              </div>
              {/* Middle photo — lower left, overlapping */}
              <div className="absolute bottom-6 left-0 w-[55%] overflow-hidden rounded-[20px] shadow-soft ring-1 ring-brand-cream/10">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=85"
                  alt=""
                  className="h-56 w-full object-cover lg:h-60"
                  loading="lazy"
                />
              </div>
              {/* Small accent photo — bottom right corner */}
              <div className="absolute bottom-0 right-6 hidden w-[36%] overflow-hidden rounded-[16px] shadow-soft ring-1 ring-brand-cream/10 sm:block">
                <img
                  src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=500&q=85"
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
