import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { clinic } from "@/content/clinic";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: `Why Choose ${clinic.name} | Pune Dental Clinic` },
      { name: "description", content: "Family-friendly care, modern orthodontics, clear aligners, comprehensive services — discover why patients choose Align32 in Deccan Gymkhana, Pune." },
      { property: "og:title", content: "Why Choose Align32 Family Dental Care" },
      { property: "og:description", content: "Family-friendly dental care with modern orthodontics, aligners and comprehensive services in Pune." },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/50 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Why choose us
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A clinic built around your family
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We focus on what matters most — comfortable visits, modern treatment options, and clear, patient-focused care.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Reasons" title="What sets Align32 apart" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clinic.whyChooseUs.map((w) => (
              <Card key={w.title} className="group rounded-2xl border-border/60 p-6 transition hover:-translate-y-1 hover:shadow-card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-glow/20 text-primary transition-transform group-hover:scale-110">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
