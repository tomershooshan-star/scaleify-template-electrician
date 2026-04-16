import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow">
              <Zap className="h-5 w-5 text-brand-black" />
            </span>
            {site.brand}
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Licensed & insured electricians. 24/7 emergency service. Upfront pricing. Lifetime workmanship warranty.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-brand-yellow" href="#services">Services</a></li>
            <li><a className="hover:text-brand-yellow" href="#why">Why Us</a></li>
            <li><a className="hover:text-brand-yellow" href="#process">Process</a></li>
            <li><a className="hover:text-brand-yellow" href="#reviews">Reviews</a></li>
            <li><a className="hover:text-brand-yellow" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-brand-yellow" href="#contact">Contact</a></li>
            <li><Link className="hover:text-brand-yellow" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-brand-yellow" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <span className="text-white/70">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} {site.brand}. All rights reserved.</div>
          <div>Website by <a href="https://scaleify.co" className="text-white/70 hover:text-brand-yellow">Scaleify</a></div>
        </div>
      </div>
    </footer>
  );
}
