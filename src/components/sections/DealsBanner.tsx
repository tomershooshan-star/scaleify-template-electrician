import { site } from "@/config/site";

export function DealsBanner() {
  const items = [...site.deals, ...site.deals];
  return (
    <div className="w-full overflow-hidden bg-brand-black text-brand-yellow">
      <div className="flex animate-marquee whitespace-nowrap py-2 text-xs font-semibold uppercase tracking-widest">
        {items.map((d, i) => (
          <span key={i} className="mx-8 flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
