"use client";

import { useEffect, useRef } from "react";
import { services, iconMap } from "@/lib/services";
import { ArrowRight, Clock, Star, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = sectionRef.current?.querySelectorAll(".reveal");
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featured = services[0];
  const FeaturedIcon = iconMap[featured.icon];

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">

      {/* Section divider — amber gradient line */}
      <div className="h-px w-full" style={{
        background: "linear-gradient(to right, transparent, var(--color-accent), transparent)"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[--color-accent]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
                  What We Do
                </span>
              </div>
              <h2
                className="font-bold text-[--color-ink] leading-tight reveal"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Our Services
              </h2>
            </div>
            <p className="text-[--color-ink-muted] text-sm max-w-xs leading-relaxed reveal" style={{ transitionDelay: "80ms" }}>
              Everything your car needs — all under one roof, with upfront pricing and no surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Asymmetric editorial grid — breaks uniform 4-col template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[var(--space-section-lg)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* ── Card 1: Featured — 2-row dark card, dominant ── */}
          <a
            href={`/services/${featured.slug}`}
            className="group relative lg:col-span-5 lg:row-span-2 bg-[--color-primary] rounded-[--radius-lg] border border-white/10 overflow-hidden hover:border-[--color-accent]/40 transition-all duration-300 flex flex-col reveal"
            style={{ transitionDelay: "100ms" }}
          >
            {/* Amber top bar */}
            <div className="h-0.5 w-full bg-[--color-accent]" />

            <div className="p-7 flex flex-col flex-1">
              {/* Icon with ambient glow */}
              <div className="relative w-14 h-14 rounded-[--radius-md] bg-[--color-accent-muted] flex items-center justify-center text-[--color-accent] mb-6">
                <FeaturedIcon size={28} />
                <div className="absolute inset-0 rounded-[--radius-md] bg-[--color-accent]/10 blur-sm" />
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] leading-snug mb-3">
                {featured.name}
              </h3>

              <p className="text-[#1A1A1A]/45 text-sm leading-relaxed flex-1">
                {featured.shortDescription}
              </p>

              {/* Full included list */}
              <ul className="mt-5 space-y-2 mb-6">
                {featured.included.slice(0, 5).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[--color-accent] flex-shrink-0 mt-1.5" />
                    <span className="text-[#1A1A1A]/45 text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
                {featured.included.length > 5 && (
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 mt-1.5" />
                    <span className="text-[#1A1A1A]/30 text-xs">+{featured.included.length - 5} more</span>
                  </li>
                )}
              </ul>

              <div className="flex items-center gap-2 text-[--color-accent] text-sm font-semibold group-hover:gap-3 transition-all">
                <span>View service details</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>

          {/* ── Card 2: Wide — Battery, slightly elevated ── */}
          <a
            href={`/services/${services[1].slug}`}
            className="group relative lg:col-span-7 bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-6 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-300 flex flex-col reveal"
            style={{ transitionDelay: "180ms" }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-[--radius-md] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors duration-200">
                {(() => { const Icon = iconMap[services[1].icon]; return <Icon size={24} />; })()}
              </div>
              <div className="flex items-center gap-2">
                <Star size={12} className="fill-[--color-accent] text-[--color-accent]" />
                <span className="text-[--color-accent] text-xs font-semibold uppercase tracking-wider">Popular</span>
              </div>
            </div>
            <h3 className="text-base font-semibold text-[--color-ink] leading-snug mb-2">
              {services[1].name}
            </h3>
            <p className="text-[--color-ink-faint] text-sm leading-relaxed flex-1">
              {services[1].shortDescription}
            </p>
            <div className="flex items-center gap-1.5 text-[--color-ink-muted] text-sm font-medium mt-4 group-hover:text-[--color-accent] transition-colors">
              <span>View service</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>

          {/* ── Card 3: Radiator — taller, accent label ── */}
          <a
            href={`/services/${services[2].slug}`}
            className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-300 reveal"
            style={{ transitionDelay: "260ms" }}
          >
            {/* Small top accent line */}
            <div className="h-0.5 w-8 bg-[--color-accent] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="w-10 h-10 rounded-[--radius-sm] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors mb-4">
              {(() => { const Icon = iconMap[services[2].icon]; return <Icon size={20} />; })()}
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              <h3 className="text-sm font-semibold text-[--color-ink] leading-snug">
                {services[2].name}
              </h3>
              <Clock size={12} className="text-[--color-ink-faint]" />
            </div>
            <p className="text-[--color-ink-faint] text-xs leading-relaxed">
              {services[2].shortDescription}
            </p>
          </a>

          {/* ── Cards 4–8: Bottom row — varied sizing to break uniformity ── */}
          {/* Card 4: Tyre — wider with "Same Day" badge */}
          <a
            href={`/services/${services[3].slug}`}
            className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-300 reveal"
            style={{ transitionDelay: "340ms" }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-[--radius-sm] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors">
                {(() => { const Icon = iconMap[services[3].icon]; return <Icon size={20} />; })()}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[--color-accent] bg-[--color-accent-muted] px-2 py-0.5 rounded-full">Same Day</span>
            </div>
            <h3 className="text-sm font-semibold text-[--color-ink] leading-snug mb-1.5">
              {services[3].name}
            </h3>
            <p className="text-[--color-ink-faint] text-xs leading-relaxed">
              {services[3].shortDescription}
            </p>
          </a>

          {/* Cards 5–8: Smaller compact — but now with subtle border-left accent on hover */}
          {services.slice(4).map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:border-[--color-accent]/40 hover:shadow-[--shadow-card-hover] transition-all duration-300 reveal"
                style={{ transitionDelay: `${420 + i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-[--radius-xs] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[--color-ink] leading-snug mb-1">
                      {service.name}
                    </h3>
                    <p className="text-[--color-ink-faint] text-[11px] leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}