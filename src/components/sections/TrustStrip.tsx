import { Award, BadgeDollarSign, Timer } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Licensed Master Electricians",
    desc: "State-licensed, bonded, and fully insured. No shortcuts, no contractors.",
  },
  {
    icon: BadgeDollarSign,
    title: "Upfront Flat-Rate Pricing",
    desc: "You see the price in writing before we start. Zero surprises, ever.",
  },
  {
    icon: Timer,
    title: "On Time — Every Time",
    desc: "60-minute average emergency response across the metro area.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="container-x grid gap-6 py-10 md:grid-cols-3 lg:py-14">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-black/5 bg-muted/50 p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-black">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-black">{title}</h3>
              <p className="mt-1 text-sm text-brand-black/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
