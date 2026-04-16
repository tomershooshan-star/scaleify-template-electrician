import { stats } from "@/config/site";

export function Stats() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="container-x grid gap-6 py-10 sm:grid-cols-4 lg:py-14">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-black text-brand-black sm:text-5xl">
              {s.n}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-black/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
