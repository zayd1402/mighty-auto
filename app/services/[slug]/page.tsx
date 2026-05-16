import { services, iconMap } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle, AlertCircle, ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="py-[var(--space-section-lg)]">
        <Container>
          <h1 className="text-2xl font-bold text-[--color-ink]">Service not found</h1>
        </Container>
      </main>
    );
  }

  const IconComponent = iconMap[service.icon];
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-[--color-primary]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-xl)]">
            {/* Icon + eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-[--radius-lg] bg-[--color-accent-muted] flex items-center justify-center text-[--color-accent]">
                <IconComponent size={28} />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-px bg-[--color-accent]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[--color-accent]">
                Our Services
              </span>
            </div>

            <h1
              className="font-bold text-[#1A1A1A] leading-tight mb-3"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {service.name}
            </h1>

            <p
              className="text-[#1A1A1A]/50 text-lg mb-4 max-w-xl leading-relaxed"
              style={{ fontSize: "var(--text-lg)" }}
            >
              {service.tagline}
            </p>

            <p className="text-[#1A1A1A]/35 text-sm max-w-xl leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Book This Service
              </Button>
              <Button variant="secondary" size="lg">
                Call 02 9897 7442
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white">
        <Container>
          <div className="py-[var(--space-section-lg)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-[--color-accent]" />
              <h2
                className="font-bold text-[--color-ink] leading-tight"
                style={{ fontSize: "var(--text-h3)" }}
              >
                What&apos;s Included
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.included.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-[--radius-md] border border-[--color-border-subtle]"
                >
                  <CheckCircle
                    size={18}
                    className="text-[--color-accent] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[--color-ink] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why It Matters + When to Get (Two Column) */}
      <section className="bg-[--color-surface]">
        <Container>
          <div className="py-[var(--space-section-lg)] grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-px bg-[--color-accent]" />
                <h2
                  className="font-bold text-[--color-ink] leading-tight"
                  style={{ fontSize: "var(--text-h4)" }}
                >
                  Why It Matters
                </h2>
              </div>
              <p className="text-[--color-ink-muted] leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
                {service.whyItMatters}
              </p>
            </Card>

            <Card padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-px bg-[--color-accent]" />
                <h2
                  className="font-bold text-[--color-ink] leading-tight"
                  style={{ fontSize: "var(--text-h4)" }}
                >
                  When to Get This Service
                </h2>
              </div>
              <ul className="space-y-3">
                {service.whenToGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle
                      size={18}
                      className="text-[--color-accent] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[--color-ink-muted] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Warning Signs */}
      <section className="bg-white">
        <Container>
          <div className="py-[var(--space-section-lg)]">
            <div className="bg-[--color-surface] rounded-[--radius-xl] p-6 sm:p-8 border border-[--color-border-subtle]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[--radius-md] bg-[--color-accent-muted] flex items-center justify-center">
                  <Clock size={20} className="text-[--color-accent]" />
                </div>
                <h2
                  className="font-bold text-[--color-ink] leading-tight"
                  style={{ fontSize: "var(--text-h4)" }}
                >
                  Warning Signs
                </h2>
              </div>
              <p className="text-[--color-ink-muted] text-sm mb-5 leading-relaxed">
                Watch out for these indicators that your vehicle may need this service:
              </p>
              <ul className="space-y-3">
                {service.whenToGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[--color-accent] flex-shrink-0 mt-2" />
                    <span className="text-[--color-ink-muted] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-[--color-surface]">
          <Container>
            <div className="py-[var(--space-section-lg)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-px bg-[--color-accent]" />
                <h2
                  className="font-bold text-[--color-ink] leading-tight"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  Related Services
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedServices.map((related) => {
                  const RelatedIcon = iconMap[related.icon];
                  return (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
                      className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:shadow-[--shadow-card-hover] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="w-11 h-11 rounded-[--radius-md] bg-[--color-accent-muted] flex items-center justify-center text-[--color-accent] mb-4">
                        <RelatedIcon size={22} />
                      </div>
                      <h3 className="text-base font-semibold text-[--color-ink] mb-1 leading-snug">
                        {related.name}
                      </h3>
                      <p className="text-xs text-[--color-ink-faint] mb-3 leading-relaxed">
                        {related.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[--color-accent] group-hover:gap-2.5 transition-all">
                        Learn more
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Booking CTA */}
      <section className="bg-[--color-primary]">
        <Container>
          <div className="py-[var(--space-section-lg)] text-center max-w-xl mx-auto">
            <h2
              className="font-bold text-[#1A1A1A] mb-3 leading-tight"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Book {service.name} Today
            </h2>
            <p className="text-[#1A1A1A]/40 text-sm mb-6 leading-relaxed">
              Get your car sorted with the experts. Same-day bookings often available.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Book This Service
              </Button>
              <Button variant="secondary" size="lg">
                Call 02 9897 7442
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
