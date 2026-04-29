import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/content/clinic";
import { TreatmentCard } from "@/components/site/TreatmentCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { Sparkles, Info } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: `Dental Treatments | ${clinic.name} Pune` },
      { name: "description", content: "Orthodontics, clear aligners, braces, implants, crowns, root canal, scaling, cosmetic and pediatric dental treatments in Deccan Gymkhana, Pune." },
      { property: "og:title", content: "Dental Treatments at Align32 Pune" },
      { property: "og:description", content: "Comprehensive dental care: orthodontics, aligners, implants, crowns, scaling, cosmetic dentistry and more." },
    ],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/50 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our treatments
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Comprehensive dental care
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From routine cleanings to advanced orthodontics and implants — every treatment is planned around your clinical examination.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clinic.treatments.map((t) => (
              <TreatmentCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Smile alignment highlight */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-mint to-primary-glow/15 p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" /> Featured focus
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Smile Alignment & Orthodontic Care
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {clinic.name} focuses on smile alignment and orthodontic solutions such as braces, clear aligners, and invisible orthodontics. Treatment options depend on the patient's dental condition, age, alignment needs, and clinical examination.
                </p>
              </div>
              <div className="hidden h-32 w-32 items-center justify-center rounded-full bg-background/70 backdrop-blur lg:flex">
                <Sparkles className="h-14 w-14 text-primary" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>Treatment results, duration, and suitability vary from patient to patient and require professional dental consultation.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
