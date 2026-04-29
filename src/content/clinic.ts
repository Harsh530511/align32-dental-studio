// Single source of truth for clinic content. Edit here.

export const clinic = {
  name: "Align32 Family Dental Care Center",
  shortName: "Align32",
  tagline: "Family Dental Care Center in Pune",
  city: "Pune",
  area: "Deccan Gymkhana",
  address:
    "Unit No 104B, Princeton Plaza, above Chitale Bandhu, Deccan Gymkhana, Pune, Maharashtra 411004, India",
  phoneDisplay: "+91 80104 97391",
  phoneTel: "+918010497391",
  whatsapp: "https://wa.me/918010497391",
  email: "", // optional — add when available
  mapsLink: "https://maps.app.goo.gl/JpbnSCiukYYjFvKH7",
  profileLink: "https://share.google/74nedUyFVAOvICvZJ",
  website: "https://align32family.dental-care.co.in/",
  // Maps embed using place query (no API key needed)
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Align32+Family+Dental+Care+Center+Princeton+Plaza+Deccan+Gymkhana+Pune&output=embed",
  hours: [
    { day: "Monday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Tuesday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Wednesday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Thursday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Friday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Saturday", time: "9:30 AM – 1:00 PM, 5:00 – 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  doctor: {
    name: "Dr. Pratik Doshi",
    specialization: "Orthodontist / Dentist",
    qualification: "Qualification details can be updated here.",
    experience: "Experience details can be updated here.",
    bio: "Dr. Pratik Doshi leads Align32 Family Dental Care Center with a focus on orthodontic treatment, clear aligners, and comprehensive family dental care.",
  },
  trustHighlights: [
    "Family Dental Care",
    "Orthodontic Treatment",
    "Clear Aligners & Braces",
    "Advanced Dental Services",
    "Patient-Friendly Care",
  ],
  whyChooseUs: [
    { title: "Family-Friendly Care", desc: "Comfortable dental care for patients of all ages — children, adults, and seniors." },
    { title: "Modern Orthodontics", desc: "Up-to-date orthodontic treatment options tailored to each patient." },
    { title: "Clear Aligners & Braces", desc: "Discreet aligner systems and conventional braces under one roof." },
    { title: "Comprehensive Services", desc: "Preventive, cosmetic, restorative, orthodontic and implant care in one clinic." },
    { title: "Clean & Comfortable Clinic", desc: "Sterile, calm environment designed for a relaxed dental visit." },
    { title: "Convenient Pune Location", desc: "Centrally located in Deccan Gymkhana, above Chitale Bandhu." },
    { title: "Patient-Focused Consultation", desc: "Treatment plans built around your needs and clinical examination." },
  ],
  treatments: [
    { id: "ortho", icon: "Smile", title: "Orthodontic Treatment", desc: "Braces and alignment-focused treatment for improving teeth position and smile correction." },
    { id: "aligners", icon: "Sparkles", title: "Clear Aligners / Invisible Braces", desc: "Modern removable aligner options for patients looking for discreet teeth straightening." },
    { id: "braces", icon: "AlignJustify", title: "Dental Braces", desc: "Conventional and advanced braces options for children, teens, and adults." },
    { id: "implants", icon: "Anchor", title: "Dental Implants", desc: "Replacement options for missing teeth based on clinical examination and treatment planning." },
    { id: "veneers", icon: "Gem", title: "Ceramic Veneers / Crowns", desc: "Tooth restoration and cosmetic enhancement options for damaged or discolored teeth." },
    { id: "zirconia", icon: "Diamond", title: "Zirconia Crowns", desc: "Durable and aesthetic crown options for restoring tooth structure and smile appearance." },
    { id: "scaling", icon: "Droplets", title: "Scaling and Polishing", desc: "Professional dental cleaning to maintain oral hygiene and gum health." },
    { id: "extraction", icon: "Scissors", title: "Tooth Extraction", desc: "Safe extraction procedures when a tooth cannot be saved or requires removal." },
    { id: "rct", icon: "Stethoscope", title: "Root Canal Treatment", desc: "Treatment to save infected or painful teeth where clinically suitable." },
    { id: "pediatric", icon: "Baby", title: "Pediatric Dental Care", desc: "Dental care for children with a gentle and family-friendly approach." },
    { id: "cosmetic", icon: "Star", title: "Cosmetic Dentistry", desc: "Smile improvement treatments such as veneers, crowns, whitening, and aesthetic corrections." },
    { id: "preventive", icon: "ShieldCheck", title: "Preventive Dental Care", desc: "Regular checkups, cleaning, oral hygiene guidance, and early dental problem detection." },
  ],
  faqs: [
    { q: "Do I need an appointment before visiting?", a: "Appointments are recommended to reduce waiting time. You can call the clinic or use the Google profile link for directions and contact details." },
    { q: "Does the clinic provide braces treatment?", a: "Yes, the clinic provides orthodontic treatment options such as braces and clear aligners." },
    { q: "Are clear aligners available?", a: "Clear aligner or invisible orthodontic options may be available depending on the patient's case and consultation." },
    { q: "Does the clinic provide dental implants?", a: "Dental implant treatment planning depends on bone condition, missing teeth, and clinical examination." },
    { q: "Is this clinic suitable for family dental care?", a: "Yes, the clinic is positioned as a family dental care center and can serve different age groups." },
    { q: "Where is Align32 Family Dental Care Center located?", a: "The clinic is located in Deccan Gymkhana, Pune. Use the Google Maps button for exact directions." },
  ],
} as const;

export type Clinic = typeof clinic;
