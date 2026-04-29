import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, ExternalLink, Clock, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinic } from "@/content/clinic";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${clinic.name} | Deccan Gymkhana, Pune` },
      { name: "description", content: `Visit ${clinic.name} at ${clinic.address}. Call ${clinic.phoneDisplay} or get directions on Google Maps.` },
      { property: "og:title", content: `Contact ${clinic.name}` },
      { property: "og:description", content: `Reach Align32 in Deccan Gymkhana, Pune. Call, WhatsApp, or get directions.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/50 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Visit our clinic</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're located in {clinic.area}, {clinic.city}. Call ahead to book an appointment.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {/* Info card */}
          <Card className="rounded-3xl border-border/60 p-8 shadow-soft">
            <h2 className="text-xl font-bold">{clinic.name}</h2>

            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="mt-1 text-muted-foreground">{clinic.address}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${clinic.phoneTel}`} className="mt-1 block text-muted-foreground hover:text-primary">{clinic.phoneDisplay}</a>
                </div>
              </li>
              {clinic.email && (
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${clinic.email}`} className="mt-1 block text-muted-foreground hover:text-primary">{clinic.email}</a>
                  </div>
                </li>
              )}
              <li className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
                <div className="flex-1">
                  <p className="font-semibold">Opening hours</p>
                  <table className="mt-2 w-full text-xs">
                    <tbody>
                      {clinic.hours.map((h) => (
                        <tr key={h.day} className="border-b border-border/40 last:border-0">
                          <td className="py-2 pr-3 font-medium">{h.day}</td>
                          <td className="py-2 text-right text-muted-foreground">{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-glow">
                <a href={`tel:${clinic.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={clinic.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={clinic.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /> Directions</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={clinic.profileLink} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Google Profile</a>
              </Button>
            </div>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden rounded-3xl border-border/60 shadow-soft">
            <div className="aspect-[4/3] w-full bg-muted lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <iframe
                title="Align32 Family Dental Care Center location"
                src={clinic.mapsEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="border-t border-border bg-background p-4">
              <Button asChild variant="outline" className="w-full rounded-full">
                <a href={clinic.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /> Open in Google Maps</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="mt-10">
            {clinic.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border-border/60">
                <AccordionTrigger className="px-4 text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
