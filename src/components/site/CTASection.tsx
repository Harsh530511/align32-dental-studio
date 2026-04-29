import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";

export function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-glow px-6 py-12 text-primary-foreground shadow-glow sm:px-12 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for a healthier smile?
            </h2>
            <p className="mt-3 text-base opacity-90">
              Book a consultation at {clinic.name} in {clinic.area}, {clinic.city}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href={`tel:${clinic.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href={clinic.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={clinic.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" /> Directions</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
