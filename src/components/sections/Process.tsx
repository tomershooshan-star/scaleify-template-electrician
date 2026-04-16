import { process as steps } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="section-pad bg-brand-black text-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-yellow">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Book a service in 4 easy steps.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-4xl font-black text-brand-yellow">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/20 md:block" />
                )}
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
