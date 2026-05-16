"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Clock, BadgeCheck, HeartHandshake } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Honest & Transparent",
    description:
      "No upselling, no hidden fees. We explain exactly what your car needs and why — in plain English.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Most services same-day. We respect your time and get you back on the road fast.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description:
      "Fully qualified mechanics with comprehensive insurance. Your car is in safe hands.",
  },
  {
    icon: HeartHandshake,
    title: "Family Owned",
    description:
      "Proudly serving Merrylands for 15+ years. We treat every customer like family.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "10,000+", label: "Cars Serviced" },
  { value: "500+", label: "5-Star Reviews" },
  { value: "100%", label: "Satisfaction Guarantee" },
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-primary)" }}>

      {/* Full-bleed workshop image (left 40%) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)",
          }}
        />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="noise-texture absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <ScrollReveal>
            {/* Amber accent bar */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-1 h-8 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, var(--color-accent), transparent)",
                }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[--color-accent]">
                Why Us
              </span>
            </div>

            <h2
              className="font-extrabold text-[#1A1A1A] leading-[1.08] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Why Choose Mighty Auto&apos;s?
            </h2>
            <p className="text-[#1A1A1A]/50 text-base md:text-lg max-w-xl leading-[1.7]">
              We&apos;re not the flashiest shop in town — but we&apos;re the most trusted.
              Here&apos;s what sets us apart.
            </p>
          </ScrollReveal>
        </div>

        {/* Differentiators — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-[var(--space-section-lg)]">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div
                className="rounded-[--radius-lg] p-6 h-full relative overflow-hidden group"
                style={{
                  background: "rgba(0,20,44,0.4)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,20,44,0.55)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,168,56,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,20,44,0.4)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {/* Top amber accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(to right, var(--color-accent), transparent)",
                    opacity: 0.6,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[--radius-md] flex items-center justify-center mb-5 relative"
                  style={{
                    background: "rgba(232,168,56,0.12)",
                    border: "1px solid rgba(232,168,56,0.2)",
                  }}
                >
                  <item.icon size={22} style={{ color: "var(--color-accent)" }} />
                </div>

                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats row */}
        <div className="pb-[var(--space-section-lg)]">
          <div
            className="rounded-[--radius-lg] overflow-hidden"
            style={{
              background: "rgba(0,20,44,0.35)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1A1A1A]/10">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="px-5 lg:px-8 py-5 text-center">
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        color: "var(--color-accent)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[11px] text-[#1A1A1A]/40 uppercase tracking-wider font-medium"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}