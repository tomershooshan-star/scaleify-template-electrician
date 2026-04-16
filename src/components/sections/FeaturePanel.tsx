import { Button } from "@/components/ui/Button";

const points = [
  "Licensed master electricians with hands-on years of experience",
  "Upfront pricing, respectful techs, clean and careful work",
];

export function FeaturePanel() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <div className="panel-dark grain relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          {/* Red spotlight glow bottom-left */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #E4432C 0%, transparent 60%)" }}
          />

          <div className="relative grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
            {/* LEFT: headline + copy + bullets + CTA */}
            <div className="max-w-xl">
              <span className="eyebrow eyebrow-dot">Why VoltSafe</span>
              <h2 className="mt-5 font-display text-[48px] leading-[0.98] tracking-tightest text-brand-cream sm:text-6xl lg:text-7xl">
                Customer satisfaction is our <em className="italic text-brand-red">only</em> priority.
              </h2>
              <p className="mt-7 font-grotesk text-[17px] leading-relaxed text-brand-cream/65">
                Your Comprehensive and Reliable Electrical Service Provider for All Your Home and Business Needs.
              </p>

              <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
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

              <Button asChild size="md" variant="red" className="mt-10">
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>

            {/* RIGHT: overlapping photo collage */}
            <div className="relative h-[460px] lg:h-[560px]">
              {/* Back/large photo — upper right */}
              <div className="absolute right-0 top-0 w-[70%] overflow-hidden rounded-[22px] shadow-soft ring-1 ring-brand-cream/10">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85"
                  alt=""
                  className="h-72 w-full object-cover lg:h-[22rem]"
                  loading="lazy"
                />
              </div>
              {/* Middle photo — lower left, overlapping */}
              <div className="absolute bottom-10 left-0 w-[56%] overflow-hidden rounded-[22px] shadow-soft ring-1 ring-brand-cream/10">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=85"
                  alt=""
                  className="h-60 w-full object-cover lg:h-72"
                  loading="lazy"
                />
              </div>
              {/* Small accent photo — bottom right corner */}
              <div className="absolute bottom-0 right-4 hidden w-[38%] overflow-hidden rounded-[18px] shadow-soft ring-1 ring-brand-cream/10 sm:block">
                <img
                  src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=500&q=85"
                  alt=""
                  className="h-44 w-full object-cover lg:h-52"
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
