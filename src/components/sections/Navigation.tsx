import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition",
        scrolled
          ? "border-black/10 bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-brand-black">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-black">
            <Zap className="h-5 w-5 text-brand-yellow" />
          </span>
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-black/70 transition hover:text-brand-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button asChild size="sm" variant="dark">
            <a href="#contact">Get A Quote</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-brand-black"
          onClick={() => setOpen((x) => !x)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <div className="container-x flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-brand-black"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-black/10 px-6 py-3 text-sm font-semibold text-brand-black"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <Button asChild variant="dark">
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
