"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

interface PackageTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const packages: PackageTier[] = [
  {
    name: "Basic Service",
    price: 149,
    description: "Essential maintenance to keep your car running smoothly.",
    icon: <Zap size={22} />,
    features: [
      "Full vehicle inspection",
      "Oil & filter change",
      "Tyre pressure check",
      "Fluid top-up",
      "45-point safety check",
    ],
  },
  {
    name: "Full Service",
    price: 299,
    description: "Comprehensive care for peace of mind on the road.",
    icon: <Sparkles size={22} />,
    popular: true,
    features: [
      "Everything in Basic",
      "Brake inspection & adjustment",
      "Suspension check",
      "Battery health test",
      "Air filter replacement",
      "Wiper blade replacement",
    ],
  },
  {
    name: "Premium Service",
    price: 499,
    description: "The complete package for ultimate vehicle care.",
    icon: <Crown size={22} />,
    features: [
      "Everything in Full",
      "Full wheel alignment",
      "Coolant flush & change",
      "Transmission service",
      "Spark plug replacement",
      "AC system check",
      "12-month roadworthy certificate",
    ],
  },
];

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
        transitionDelay: `${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function ServicePackages() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Workshop background — full bleed, dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(244,246,248,0.97) 0%, rgba(244,246,248,0.92) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <ScrollReveal>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[--color-accent]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[--color-accent]">
                Pricing
              </span>
            </div>

            <h2
              className="font-extrabold text-[--color-ink] leading-[1.08] mb-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Service Packages
            </h2>
            <p className="text-[--color-ink-muted] text-base md:text-lg max-w-lg leading-[1.7]">
              Transparent pricing, no surprises. Choose the package that fits
              your car&apos;s needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="pb-[var(--space-section-lg)] grid md:grid-cols-[1fr_1.12fr_1fr] gap-5 items-start">

          {packages.map((pkg, idx) => {
            const isFeatured = pkg.popular;

            return (
              <ScrollReveal key={pkg.name} delay={idx * 100}>
                <div
                  className={[
                    "relative rounded-2xl flex flex-col h-full overflow-hidden",
                    isFeatured
                      ? "border-2"
                      : "rounded-2xl bg-white border border-[--color-border-subtle]",
                  ].join(" ")}
                  style={
                    isFeatured
                      ? {
                          borderColor: "var(--color-accent)",
                          boxShadow:
                            "0 0 0 4px rgba(232,168,56,0.08), 0 20px 60px rgba(0,20,44,0.15)",
                        }
                      : {}
                  }
                >
                  {/* Featured card: dark navy */}
                  {isFeatured && (
                    <>
                      {/* Top amber accent bar */}
                      <div
                        className="h-1 w-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                      <div
                        className="flex-1 p-7"
                        style={{ background: "var(--color-primary)" }}
                      >
                        {/* Popular badge */}
                        <div className="mb-5">
                          <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                            style={{
                              background: "var(--color-accent)",
                              color: "var(--color-primary)",
                            }}
                          >
                            <Sparkles size={10} />
                            Most Popular
                          </span>
                        </div>

                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-[--radius-md] flex items-center justify-center mb-5"
                          style={{
                            background: "rgba(232,168,56,0.12)",
                            border: "1px solid rgba(232,168,56,0.2)",
                          }}
                        >
                          <div style={{ color: "var(--color-accent)" }}>
                            {pkg.icon}
                          </div>
                        </div>

                        <h3
                          className="text-xl font-bold text-[#1A1A1A] leading-snug mb-2"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {pkg.name}
                        </h3>
                        <p className="text-[#1A1A1A]/50 text-sm leading-relaxed mb-6">
                          {pkg.description}
                        </p>

                        {/* Price */}
                        <div className="mb-6 pb-6 border-b border-[#1A1A1A]/12">
                          <div className="flex items-baseline gap-2">
                            <span
                              className="font-extrabold leading-none"
                              style={{
                                fontSize: "3.5rem",
                                color: "var(--color-accent)",
                                letterSpacing: "-0.03em",
                              }}
                            >
                              ${pkg.price}
                            </span>
                            <span className="text-[#1A1A1A]/40 text-sm">
                              /service
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-7 flex-1">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check
                                size={15}
                                className="flex-shrink-0 mt-0.5"
                                style={{ color: "var(--color-accent)" }}
                              />
                              <span className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Button
                          size="lg"
                          className="w-full font-semibold"
                          style={{
                            boxShadow:
                              "0 4px 20px rgba(232,168,56,0.35)",
                          }}
                        >
                          Book {pkg.name}
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Standard card */}
                  {!isFeatured && (
                    <div className="p-6 flex flex-col flex-1">
                      {/* Icon */}
                      <div
                        className="w-11 h-11 rounded-[--radius-sm] flex items-center justify-center mb-4"
                        style={{ background: "var(--color-surface)" }}
                      >
                        <div style={{ color: "var(--color-ink-muted)" }}>
                          {pkg.icon}
                        </div>
                      </div>

                      <h3
                        className="text-base font-semibold text-[--color-ink] leading-snug mb-2"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {pkg.name}
                      </h3>
                      <p className="text-[--color-ink-faint] text-sm leading-relaxed mb-5">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="mb-5 pb-5 border-b border-[--color-border-subtle]">
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className="font-bold text-[--color-ink] leading-none"
                            style={{ fontSize: "2.25rem", letterSpacing: "-0.02em" }}
                          >
                            ${pkg.price}
                          </span>
                          <span className="text-[--color-ink-faint] text-sm">
                            /service
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2.5 mb-6 flex-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <Check
                              size={14}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: "var(--color-ink-faint)" }}
                            />
                            <span className="text-[--color-ink-muted] text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant="secondary"
                        className="w-full font-semibold mt-auto"
                      >
                        Book {pkg.name}
                      </Button>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}