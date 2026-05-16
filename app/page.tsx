import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicePackages } from "@/components/ServicePackages";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Gallery } from "@/components/Gallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactStrip } from "@/components/ContactStrip";
import { StickyCTA } from "@/components/StickyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mighty Auto's & Tyre | Merrylands Auto Repairs",
  description:
    "Merrylands' most trusted mechanic for over 15 years. Quality servicing, tyres, brakes, and repairs — without the theatrics. Book online or call 02 9897 7442.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ─── Hero ─── */}
      <Hero />

      {/* ─── Services — asymmetric editorial layout, no uniform grid ─── */}
      <ServicesSection />

      {/* ─── Why Choose Us — compact, dark bg section ─── */}
      <WhyChooseUs />

      {/* ─── Service Packages — light surface with card variation ─── */}
      <ServicePackages />

      {/* ─── Google Reviews — warm white, compact ─── */}
      <GoogleReviews />

      {/* ─── Gallery — tight, almost full bleed ─── */}
      <Gallery />

      {/* ─── FAQ — surface-2 background, no extra padding ─── */}
      <FAQAccordion />

      {/* ─── Contact — the conversion section, hero-like ─── */}
      <ContactStrip />

      {/* ─── Sticky CTA ─── */}
      <StickyCTA />
    </div>
  );
}