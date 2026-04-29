import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Heart, Users, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "@/content/clinic";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${clinic.name} | Family Dental Clinic in Pune` },
      { name: "description", content: `Learn about ${clinic.name} — a modern family dental clinic in Deccan Gymkhana, Pune offering preventive, cosmetic, restorative, orthodontic and implant care.` },
      { property: "og:title", content: `About ${clinic.name}` },
      { property: "og:description", content: "Modern family dental clinic in Pune providing comprehensive dental care for all ages." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Users, title: "Care for all ages", desc: "Children, adults, and seniors — comprehensive dental care for the whole family." },
  { icon: Heart, title: "Patient-friendly", desc: "A calm, comfortable clinic experience built around the patient's needs." },
  { icon: ShieldCheck, title: "Modern protocols", desc: "Clean and well-maintained clinic following current dental standards." },
  { icon: Sparkles, title: "Smile-focused", desc: "Aesthetic and functional outcomes guided by individual clinical examination." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-mint/50 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            About us
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About {clinic.name}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {clinic.name} is a modern dental clinic focused on comprehensive dental care for patients of all age groups. The clinic provides preventive, cosmetic, restorative, orthodontic, and implant-related dental treatments in a clean and patient-friendly environment.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our values" title="What guides our care" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Card key={p.title} className="rounded-2xl border-border/60 p-6 transition hover:-translate-y-1 hover:shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-glow/20 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
