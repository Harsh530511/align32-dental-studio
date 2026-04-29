import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { clinic } from "@/content/clinic";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  image: "",
  url: clinic.website,
  telephone: clinic.phoneDisplay,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No 104B, Princeton Plaza, above Chitale Bandhu",
    addressLocality: "Deccan Gymkhana, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411004",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  sameAs: [clinic.mapsLink, clinic.profileLink],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: clinic.treatments.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: t.title, description: t.desc },
    })),
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#5fb8b3" },
      { title: "Align32 Family Dental Care Center Pune | Braces, Aligners & Dental Care" },
      { name: "description", content: "Align32 Family Dental Care Center in Pune offers family dental care, orthodontic treatment, clear aligners, braces, crowns, scaling, polishing, tooth extraction, implants, and cosmetic dental treatments." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: clinic.name },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Align32 Family Dental Care Center Pune | Braces, Aligners & Dental Care" },
      { name: "twitter:title", content: "Align32 Family Dental Care Center Pune | Braces, Aligners & Dental Care" },
      { property: "og:description", content: "Align32 Family Dental Care Center in Pune offers family dental care, orthodontic treatment, clear aligners, braces, crowns, scaling, polishing, tooth extraction, implants, and cosmetic dental treatments." },
      { name: "twitter:description", content: "Align32 Family Dental Care Center in Pune offers family dental care, orthodontic treatment, clear aligners, braces, crowns, scaling, polishing, tooth extraction, implants, and cosmetic dental treatments." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3ac52c3-78e0-48b5-a388-c94b854d602b/id-preview-fd3cf934--6bcc5029-dc2b-492f-891c-f34f7e27cb3f.lovable.app-1777460402810.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3ac52c3-78e0-48b5-a388-c94b854d602b/id-preview-fd3cf934--6bcc5029-dc2b-492f-891c-f34f7e27cb3f.lovable.app-1777460402810.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
