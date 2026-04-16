import { ShieldCheck, BadgeDollarSign, Timer } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    desc: "Every tech is state-licensed, bonded, and covered by commercial liability.",
  },
  {
    icon: BadgeDollarSign,
    title: "Upfront flat pricing",
    desc: "Quote in writing before we start. No surprises, no hourly creep.",
  },
  {
    icon: Timer,
    title: "On time, every time",
    desc: "60-minute average emergency response across the metro area.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-pad-sm">
      <div className="container-x grid gap-y-10 gap-x-16 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-brand-cream">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="font-grotesk text-lg font-semibold text-brand-navy">
              {title}
            </h3>
            <p className="font-grotesk text-[15px] leading-relaxed text-brand-navy/60">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
