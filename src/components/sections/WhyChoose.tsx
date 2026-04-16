import { whyChoose } from "@/config/site";

export function WhyChoose() {
  return (
    <section id="why" className="section-pad">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Why Choose VoltSafe</span>
            <h2 className="display-xl mt-5 text-brand-navy">
              Safer, <em className="italic text-brand-red">faster</em>, cleaner work.
            </h2>
            <p className="mt-6 max-w-md font-grotesk text-[17px] leading-relaxed text-brand-navy/55">
              We built this company on the belief that electrical work should be boring: on time, on budget, safely done, and warrantied.
            </p>
          </div>

          <ul className="divide-y divide-brand-navy/10 border-t border-brand-navy/10">
            {whyChoose.map((item) => (
              <li key={item.title} className="py-7">
                <h3 className="font-grotesk text-xl font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl font-grotesk text-[15px] leading-relaxed text-brand-navy/55">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
