import { CheckCircle2 } from "lucide-react";

const bullets = [
  "20+ years of electrical experience",
  "Licensed, insured, expert techs",
  "Committed to quality on every job",
  "Passion for helping homeowners",
];

export function OneStop() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT: single tall photograph */}
          <div className="relative overflow-hidden rounded-[28px] shadow-card">
            <img
              src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=85"
              alt="Licensed electrician at work"
              className="h-[420px] w-full object-cover lg:h-[520px]"
              loading="lazy"
            />
          </div>

          {/* RIGHT: headline + copy + 2x2 bullet list */}
          <div>
            <h2 className="display-xl text-brand-navy">
              Your ultimate one-stop <em className="italic text-brand-red">home</em> solution.
            </h2>
            <p className="mt-6 max-w-md font-grotesk text-[17px] leading-relaxed text-brand-navy/60">
              From a flickering light to a full panel upgrade, we handle it with care. Our skilled team ensures every detail is addressed — giving you peace of mind and work that lasts.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-grotesk text-[15px] text-brand-navy/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
