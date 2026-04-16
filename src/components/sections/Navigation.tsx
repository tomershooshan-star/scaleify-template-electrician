import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled ? "bg-brand-cream/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-grotesk text-[17px] font-bold text-brand-navy">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-brand-red">
              <path d="M13 2L4.5 13.5h6l-1 8L19 10h-6l0-8z" fill="currentColor" />
            </svg>
          </span>
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-grotesk text-sm font-medium text-brand-navy/70 transition hover:text-brand-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 font-grotesk text-sm font-semibold text-brand-navy"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <Button asChild size="sm" variant="red">
            <a href="#contact">Get A Quote</a>
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-brand-navy md:hidden"
          onClick={() => setOpen((x) => !x)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-navy/10 bg-brand-cream md:hidden">
          <div className="container-x flex flex-col gap-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-grotesk text-base font-medium text-brand-navy"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button asChild variant="outline" size="md">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </Button>
              <Button asChild variant="red" size="md">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Get A Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
