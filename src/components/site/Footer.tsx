import { Link } from "@tanstack/react-router";
import { Sparkles, MapPin, Phone, ExternalLink } from "lucide-react";
import { clinic } from "@/content/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-mint/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Align<span className="text-primary">32</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{clinic.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/treatments" className="hover:text-primary">Treatments</Link></li>
            <li><Link to="/why-us" className="hover:text-primary">Why Choose Us</Link></li>
            <li><Link to="/team" className="hover:text-primary">Doctor</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Treatments</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {clinic.treatments.slice(0, 6).map((t) => (
              <li key={t.id}>
                <Link to="/treatments" className="hover:text-primary">{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{clinic.address}</span></li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`tel:${clinic.phoneTel}`} className="hover:text-primary">{clinic.phoneDisplay}</a></li>
            <li className="flex gap-2"><ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={clinic.mapsLink} target="_blank" rel="noreferrer" className="hover:text-primary">View on Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
