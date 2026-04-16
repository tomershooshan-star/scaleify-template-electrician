import { Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

export function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-5 sm:pt-5">
      {/* Full-viewport rounded poster card — nav lives INSIDE it */}
      <div className="relative overflow-hidden rounded-[40px] bg-brand-navy text-brand-cream min-h-[92vh] lg:min-h-[90vh]">
        {/* Background photo — fills entire card */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          {/* Left-to-right legibility gradient — subtle right side so photo shows */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(15,21,32,0.92) 0%, rgba(15,21,32,0.82) 30%, rgba(15,21,32,0.35) 60%, rgba(15,21,32,0) 85%)",
            }}
          />
          {/* Soft top darken for nav contrast */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,21,32,0.5) 0%, rgba(15,21,32,0) 100%)",
            }}
          />
          {/* Soft bottom darken to anchor trust strip */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,21,32,0.55) 0%, rgba(15,21,32,0) 100%)",
            }}
          />
        </div>

        {/* Grain overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* In-card nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8 lg:px-14 lg:pt-10">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-grotesk text-[17px] font-bold text-brand-cream"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-brand-cream">
                <path d="M13 2L4.5 13.5h6l-1 8L19 10h-6l0-8z" fill="currentColor" />
              </svg>
            </span>
            {site.brand}
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-grotesk text-sm font-medium text-brand-cream/70 transition hover:text-brand-cream"
              >
                {l.label}
              </a>
            ))}
          </div>

          <Button asChild size="sm" variant="red">
            <a href={`tel:${site.phoneRaw}`}>
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </Button>
        </nav>

        {/* Hero content — positioned left, occupies full card height */}
        <div className="relative z-10 flex min-h-[calc(92vh-6rem)] lg:min-h-[calc(90vh-6rem)] items-center">
          <div className="w-full px-6 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-14 lg:pb-24 lg:pt-28">
            <div className="max-w-[720px]">
              <span className="eyebrow eyebrow-dot text-brand-red/90">
                {site.hero.eyebrow}
              </span>

              <h1 className="display-hero mt-6 text-brand-cream">
                {site.hero.headline}
              </h1>

              <p className="mt-7 max-w-xl font-grotesk text-[17px] leading-relaxed text-brand-cream/70 sm:text-[18px]">
                {site.hero.subhead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="md" variant="red">
                  <a href={site.hero.primaryCta.href}>
                    <Phone className="h-4 w-4" />
                    {site.hero.primaryCta.label}
                  </a>
                </Button>
                <Button asChild size="md" variant="outlineLight">
                  <a href={site.hero.secondaryCta.href}>
                    {site.hero.secondaryCta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip — bottom-left inside the card (over the photo) */}
        <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-10 lg:bottom-10 lg:left-14">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/11.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-brand-navy object-cover shadow-lg"
                />
              ))}
            </div>
            <div className="font-grotesk text-sm">
              <div className="text-brand-cream">
                Trusted by <span className="font-semibold">10,000+ customers</span>
              </div>
              <div className="text-brand-cream/55 text-xs">
                4.9★ · {site.review.count.toLocaleString()} verified reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
