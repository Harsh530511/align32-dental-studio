## Align32 Family Dental Care Center — Website Plan

A clean, modern, mobile-first dental clinic website. Static content, no backend. All clinic info pulled from the Google profile and centralized in one editable file.

### Verified clinic info (from Google profile)

- **Name:** Align32 Family Dental Care Center
- **Address:** Unit No 104B, Princeton Plaza, above Chitale Bandhu, Deccan Gymkhana, Pune, Maharashtra 411004
- **Phone:** +91 80104 97391
- &nbsp;
- **Hours (Wed sample):** 9:30 AM–1 PM, 5–8 PM (full week placeholder for Mon–Sat, closed Sunday — easy to edit)
- **Maps:** [https://maps.app.goo.gl/JpbnSCiukYYjFvKH7](https://maps.app.goo.gl/JpbnSCiukYYjFvKH7)
- **Plus code:** GR8R+6Q Pune

### Design language

- Palette: white background, soft teal/mint primary (`oklch` teal), light blue accents, slate text
- Rounded-2xl cards, soft shadows, generous spacing
- Typography: Inter (body) + a friendly sans for headings
- Lucide dental-friendly icons (Smile, Stethoscope, Sparkles, Shield, etc.)
- Subtle gradients and tooth/leaf SVG illustrations as placeholders (no fake clinic photos)

### Site structure (simple html,react)

## MUST EASY TO DEPLOY AT VERCEL PLATFORM

```
public, src, index.html, pack.json etc files
```

### Shared components

- `Header` — sticky, mobile drawer (shadcn Sheet), logo wordmark "Align32", nav links, "Call Now" + "Get Directions" CTAs
- `Footer` — clinic info, quick links, treatments list, maps link, copyright
- `Hero`, `SectionHeading`, `TreatmentCard`, `FeatureCard`, `FAQAccordion`, `CTASection`, `MapEmbed`
- All shadcn/ui: Button, Card, Accordion, Sheet, Badge

### Content source of truth

Single `src/content/clinic.ts` exporting a typed `clinic` object: name, address, phone (raw + tel link), whatsappLink, mapsLink, profileLink, hours array, doctor info, treatments array, FAQs, why-us bullets. Every page imports from here so the user edits in one place.

### Page details

**Home**

- Hero: headline "Advanced Family Dental Care in Pune", subheadline, 3 CTAs (Book Appointment scrolls to contact / Call Now / Get Directions), trust highlight chips
- Quick stats / values strip (Family care, Orthodontics, Aligners, Modern equipment)
- Treatments preview grid (top 6 with link to /treatments)
- Why-Us preview (3 cards)
- Doctor teaser
- Contact CTA band

**About** — clinic story + 4 value pillars

**Treatments** — 12 treatment cards in responsive grid; highlighted "Smile Alignment & Orthodontic Care" callout block; disclaimer note

**Why Choose Us** — 7 feature cards with icons

**Team** — Dr. Pratik Doshi card with avatar placeholder, editable qualification/experience/specialization fields with placeholder text exactly as specified

**Contact**

- Address, hours table, phone, email placeholder
- 4 CTA buttons: Call, WhatsApp (`https://wa.me/918010497391`), Get Directions, View Google Profile
- Google Maps iframe embed (using place query for the address) with fallback "Open in Google Maps" button
- FAQ accordion (6 items)

### SEO

- Per-route `head()` with unique title + description + OG tags
- Root: favicon, theme-color teal
- JSON-LD `Dentist` / `LocalBusiness` schema injected via root route `scripts` using clinic data (name, address, geo from plus code area, phone, openingHours, sameAs Google link, services list, priceRange placeholder)
- Sitemap-friendly route structure

### Rules respected

- No fake ratings, reviews, awards, or "best dentist" claims
- No invented doctor credentials — placeholder text per spec
- No real photos — SVG illustrations / initials avatar
- Fully responsive, production-ready, all content editable from `src/content/clinic.ts`

### Out of scope

No booking backend, no admin, no auth, no CMS — purely static.