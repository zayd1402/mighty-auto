"use client";

import { Shield, Clock, BadgeCheck, HeartHandshake } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Honest & Transparent",
    body: "No upselling, no hidden fees. We explain exactly what your car needs and why — in plain English.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    body: "Most services same-day. We respect your time and get you back on the road fast.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    body: "Fully qualified mechanics with comprehensive insurance. Your car is in safe hands.",
  },
  {
    icon: HeartHandshake,
    title: "Family Owned",
    body: "Proudly serving Merrylands for 15+ years. We treat every customer like family.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "10,000+", label: "Cars Serviced" },
  { value: "500+", label: "5-Star Reviews" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">

      {/* ─── Workshop background image ─── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* ─── Dark overlay ─── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #001428 40%, rgba(0,20,44,0.7) 70%, rgba(0,20,44,0.5) 100%)",
        }}
      />

      {/* ─── Noise grain texture ─── */}
      <div className="noise-texture absolute inset-0 pointer-events-none" />

      {/* ─── Ambient amber edge glow (left) ─── */}
      <div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(232,168,56,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — left aligned, tight top */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[--color-accent]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[--color-accent]">
              Why Us
            </span>
          </div>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Why Choose Mighty Auto&apos;s?
          </h2>
          <p className="mt-3 text-sm text-white/50 max-w-md leading-relaxed">
            We&apos;re not the flashiest shop in town — but we&apos;re the most trusted.
          </p>
        </div>

        {/* Differentiator cards — glassmorphism on dark */}
        <div className="pb-[var(--space-section-lg)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-[--radius-lg] p-5 border border-white/8"
              style={{
                background: "rgba(0,20,44,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Amber top accent — subtle */}
              <div className="h-0.5 w-6 bg-[--color-accent] rounded-full mb-4 opacity-60" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-[--radius-sm] bg-[--color-accent-muted] flex items-center justify-center text-[--color-accent] mb-4">
                <item.icon size={20} strokeWidth={1.75} />
              </div>

              <h3 className="text-sm font-semibold text-white leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-white/45 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar — full bleed */}
        <div
          className="pb-[var(--space-section-lg)] grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 text-center"
              style={{
                background: "rgba(0,10,22,0.6)",
              }}
            >
              <div
                className="font-extrabold text-white mb-1 leading-none"
                style={{ fontSize: "var(--text-h2)", letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div className="text-[11px] text-white/40 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}