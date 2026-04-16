import { site } from "@/config/site";

export function DealsBanner() {
  const items = [...site.deals, ...site.deals];
  return (
    <div className="w-full overflow-hidden border-b border-brand-navy/10 bg-brand-navy text-brand-cream">
      <div className="flex animate-marquee whitespace-nowrap py-2.5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.22em]">
        {items.map((d, i) => (
          <span key={i} className="mx-10 flex items-center gap-3">
            <span className="inline-block h-1 w-1 rounded-full bg-brand-red" />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
