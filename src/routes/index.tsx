import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Calendar, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { clinic } from "@/content/clinic";
import { TreatmentCard } from "@/components/site/TreatmentCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Align32 Family Dental Care Center Pune | Braces, Aligners & Dental Care" },
      { name: "description", content: "Modern family dental clinic in Deccan Gymkhana, Pune. Orthodontics, clear aligners, braces, implants, crowns, scaling, and cosmetic dentistry." },
      { property: "og:title", content: "Align32 Family Dental Care Center — Pune" },
      { property: "og:description", content: "Advanced family dental care in Pune. Braces, clear aligners, implants, and complete dental services." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mint/60 via-background to-background" />
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 top-40 -z-10 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Family Dental Care in Pune
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Advanced Family Dental Care in <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Pune</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {clinic.name} provides modern dental care for families, including orthodontic treatment, clear aligners, braces, crowns, dental implants, cosmetic dentistry, and preventive dental care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-glow">
                  <Link to="/contact"><Calendar className="h-4 w-4" /> Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href={`tel:${clinic.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href={clinic.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /> Directions</a>
                </Button>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {clinic.trustHighlights.map((h) => (
                  <li key={h} className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 text-xs font-medium text-mint-foreground">
                    <Check className="h-3.5 w-3.5" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero illustration card */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary-glow/30 blur-2xl" />
              <Card className="overflow-hidden rounded-[2rem] border-border/60 p-2 shadow-glow">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-mint via-background to-primary/10">
                  <ToothIllustration className="absolute inset-0 h-full w-full" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 p-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Open Today</p>
                        <p className="text-sm font-semibold text-foreground">9:30 AM – 1 PM · 5 – 8 PM</p>
                      </div>
                      <Link to="/contact" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About the clinic"
            title={`About ${clinic.name}`}
            description={`${clinic.name} is a modern dental clinic focused on comprehensive dental care for patients of all age groups. The clinic provides preventive, cosmetic, restorative, orthodontic, and implant-related dental treatments in a clean and patient-friendly environment.`}
          />
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">Learn more <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments preview */}
      <section className="bg-mint/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Complete dental care under one roof"
            description="From orthodontics and clear aligners to implants, crowns, and preventive care."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clinic.treatments.slice(0, 6).map((t) => (
              <TreatmentCard key={t.id} {...t} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-glow">
              <Link to="/treatments">View all treatments <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why choose us"
            title="Trusted family dental care"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clinic.whyChooseUs.slice(0, 3).map((w) => (
              <Card key={w.title} className="rounded-2xl border-border/60 p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/why-us">See all reasons <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor teaser */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Card className="grid items-center gap-8 rounded-3xl border-border/60 p-8 shadow-soft sm:grid-cols-[200px_1fr] sm:p-10">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-primary-glow/30 text-4xl font-bold text-primary">
              PD
            </div>
            <div>
              <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-semibold text-mint-foreground">Meet the doctor</span>
              <h3 className="mt-3 text-2xl font-bold">{clinic.doctor.name}</h3>
              <p className="text-sm text-muted-foreground">{clinic.doctor.specialization}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{clinic.doctor.bio}</p>
              <Button asChild variant="outline" className="mt-5 rounded-full">
                <Link to="/team">View profile <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ToothIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.95 0.03 195)" />
          <stop offset="100%" stopColor="oklch(0.85 0.08 185)" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.12 195)" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 180)" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="220" r="160" fill="url(#g1)" opacity="0.6" />
      <path
        d="M200 110 C 130 110 100 170 110 240 C 118 295 135 360 165 380 C 185 393 195 360 200 320 C 205 360 215 393 235 380 C 265 360 282 295 290 240 C 300 170 270 110 200 110 Z"
        fill="white"
        stroke="url(#g2)"
        strokeWidth="4"
      />
      <path d="M170 180 C 175 200 180 220 178 240" stroke="oklch(0.85 0.05 195)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="290" cy="140" r="8" fill="oklch(0.78 0.13 180)" />
      <circle cx="120" cy="320" r="6" fill="oklch(0.78 0.13 180)" opacity="0.7" />
      <circle cx="310" cy="300" r="5" fill="oklch(0.62 0.12 195)" opacity="0.5" />
    </svg>
  );
}
