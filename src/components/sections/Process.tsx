import { process as steps } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="display-xl mt-5 text-brand-navy">
            Book a service in <em className="italic text-brand-red">four</em> steps.
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-3 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                <span>{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-brand-navy/10 lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-grotesk text-xl font-semibold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-3 font-grotesk text-[15px] leading-relaxed text-brand-navy/55">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
