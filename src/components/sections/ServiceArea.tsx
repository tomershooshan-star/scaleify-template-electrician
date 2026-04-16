import { MapPin } from "lucide-react";
import { site } from "@/config/site";

export function ServiceArea() {
  return (
    <section className="section-pad bg-muted/30">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Service Area</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
            Where we work.
          </h2>
          <p className="mt-4 text-base text-brand-black/60">
            Based in {site.address.split(",").slice(-2).join(",")}, serving the greater metro area.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2 md:grid-cols-3">
          {site.serviceCities.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3"
            >
              <MapPin className="h-4 w-4 text-brand-yellowDark" />
              <span className="font-medium text-brand-black">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
