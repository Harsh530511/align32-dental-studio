import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Stethoscope, Phone, Calendar } from "lucide-react";
import { clinic } from "@/content/clinic";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `${clinic.doctor.name} | ${clinic.name} Pune` },
      { name: "description", content: `Meet ${clinic.doctor.name}, ${clinic.doctor.specialization} at ${clinic.name}, Deccan Gymkhana, Pune.` },
      { property: "og:title", content: `${clinic.doctor.name} — ${clinic.doctor.specialization}` },
      { property: "og:description", content: clinic.doctor.bio },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const d = clinic.doctor;
  return (
    <>
      <section className="bg-gradient-to-b from-mint/50 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Meet the doctor
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Doctor</h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Card className="overflow-hidden rounded-3xl border-border/60 shadow-soft">
            <div className="grid gap-0 sm:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary/15 via-mint to-primary-glow/25 p-10">
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-background/80 text-5xl font-bold text-primary shadow-card backdrop-blur">
                  PD
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold">{d.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{d.specialization}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>

                <dl className="mt-6 grid gap-4 sm:grid-cols-1">
                  <div className="flex gap-3 rounded-xl bg-muted/50 p-4">
                    <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Qualification</dt>
                      <dd className="mt-1 text-sm">{d.qualification}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-muted/50 p-4">
                    <Briefcase className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Experience</dt>
                      <dd className="mt-1 text-sm">{d.experience}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-muted/50 p-4">
                    <Stethoscope className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Specialization</dt>
                      <dd className="mt-1 text-sm">{d.specialization}</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-glow">
                    <Link to="/contact"><Calendar className="h-4 w-4" /> Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={`tel:${clinic.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
