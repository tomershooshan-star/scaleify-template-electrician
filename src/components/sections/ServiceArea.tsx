import { MapPin } from "lucide-react";
import { site } from "@/config/site";

export function ServiceArea() {
  return (
    <section className="section-pad-sm">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Service Area</span>
          <h2 className="display-lg mt-5 text-brand-navy">
            Where we <em className="italic text-brand-red">work</em>.
          </h2>
          <p className="mt-4 font-grotesk text-[17px] leading-relaxed text-brand-navy/55">
            Based in {site.address.split(",").slice(-2).join(",").trim()}, serving the greater metro area.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {site.serviceCities.map((c) => (
            <div
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-brand-paper px-5 py-2.5 font-grotesk text-sm font-medium text-brand-navy"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-red" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
