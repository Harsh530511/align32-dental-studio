import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { clinic } from "@/content/clinic";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/why-us", label: "Why Choose Us" },
  { to: "/team", label: "Doctor" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">Align<span className="text-primary">32</span></span>
            <span className="hidden text-[10px] uppercase tracking-widest text-muted-foreground sm:block">Family Dental Care</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-mint" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <a href={clinic.mapsLink} target="_blank" rel="noreferrer">
              <MapPin className="h-4 w-4" /> Directions
            </a>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-soft">
            <a href={`tel:${clinic.phoneTel}`}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[380px]">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-accent"
                  activeProps={{ className: "rounded-lg px-3 py-3 text-base font-semibold text-primary bg-mint" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-glow">
                  <a href={`tel:${clinic.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={clinic.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /> Get Directions</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
