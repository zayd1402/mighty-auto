"use client";

import { services, iconMap } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const featured = services[0];
  const FeaturedIcon = iconMap[featured.icon];

  return (
    <section className="bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="font-bold text-[--color-ink] leading-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Our Services
              </h2>
            </div>
            <p className="text-[--color-ink-muted] text-sm max-w-xs leading-relaxed">
              Everything your car needs — all under one roof, with upfront pricing and no surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Asymmetric editorial grid — breaks uniform 4-col template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[var(--space-section-lg)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* ── Card 1: Featured — spans 2 rows, dark bg, full height ── */}
          <a
            href={`/services/${featured.slug}`}
            className="group relative lg:col-span-5 lg:row-span-2 bg-[--color-primary] rounded-[--radius-lg] border border-white/10 overflow-hidden hover:border-[--color-accent]/40 transition-all duration-200 flex flex-col"
          >
            {/* Top accent line */}
            <div className="h-0.5 w-full bg-[--color-accent]" />

            <div className="p-7 flex flex-col flex-1">
              {/* Icon */}
              <div className="w-12 h-12 rounded-[--radius-md] bg-[--color-accent-muted] flex items-center justify-center text-[--color-accent] mb-6">
                <FeaturedIcon size={26} />
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

          {/* ── Card 2: Wide card ── */}
          <a
            href={`/services/${services[1].slug}`}
            className="group lg:col-span-7 bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-6 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-200 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-[--radius-md] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors">
                {(() => { const Icon = iconMap[services[1].icon]; return <Icon size={22} />; })()}
              </div>
              <span className="text-[--color-accent] text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Popular</span>
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

          {/* ── Cards 3–4: Two equal cards, right side ── */}
          {services.slice(2, 4).map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-[--radius-sm] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-[--color-ink] leading-snug mb-1.5">
                  {service.name}
                </h3>
                <p className="text-[--color-ink-faint] text-xs leading-relaxed">
                  {service.shortDescription}
                </p>
              </a>
            );
          })}

          {/* ── Cards 5–8: Full row of 4 smaller cards ── */}
          {services.slice(4).map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-[--radius-lg] border border-[--color-border-subtle] p-5 hover:border-[--color-accent]/50 hover:shadow-[--shadow-card-hover] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-[--radius-sm] bg-[--color-surface] flex items-center justify-center text-[--color-ink-muted] group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent] transition-colors mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-[--color-ink] leading-snug mb-1.5">
                  {service.name}
                </h3>
                <p className="text-[--color-ink-faint] text-xs leading-relaxed">
                  {service.shortDescription}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
