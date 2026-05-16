import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { iconMap } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Complete automotive care — from oil changes to full car servicing, brake repairs, tyre fitting and more.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[--color-primary]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[var(--space-section-hero)] pb-[var(--space-section-lg)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[--color-accent]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
                What We Do
              </span>
            </div>
            <h1
              className="font-bold text-[#1A1A1A] leading-tight mb-3"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Our Services
            </h1>
            <p className="text-[#1A1A1A]/50 text-base max-w-xl leading-relaxed">
              From routine maintenance to complex diagnostics, we&apos;ve got everything your car needs — all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <Container>
          <div className="py-[var(--space-section-lg)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              return (
                <ServiceCard
                  key={service.slug}
                  icon={<IconComponent size={22} />}
                  title={service.name}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                  variant={i === 0 ? "featured" : "default"}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[--color-surface]">
        <Container>
          <div className="py-[var(--space-section-lg)]">
            <div className="bg-[--color-primary] rounded-[--radius-xl] px-6 sm:px-8 py-10 sm:py-12 text-center">
              <h2
                className="font-bold text-[#1A1A1A] mb-3"
                style={{ fontSize: "var(--text-h3)" }}
              >
                Ready to book your car in?
              </h2>
              <p className="text-[#1A1A1A]/50 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
                Call us or book online — we&apos;ll have you back on the road in no time.
              </p>
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Book a Service
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}