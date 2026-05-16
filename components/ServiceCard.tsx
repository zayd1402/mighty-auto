"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "featured";
}

export function ServiceCard({
  icon,
  title,
  description,
  href = "#",
  variant = "default",
}: ServiceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <a
      href={href}
      className={[
        "group relative flex flex-col rounded-[--radius-lg] border transition-all duration-200",
        // Background
        isFeatured
          ? "bg-[--color-primary] border-white/15"
          : "bg-white border-[--color-border-subtle]",
        // Hover
        "hover:border-[--color-accent] hover:shadow-[--shadow-card-hover]",
        // Text colors
        isFeatured ? "text-[#1A1A1A]" : "text-[--color-ink]",
      ].join(" ")}
    >
      {/* Accent top bar for featured */}
      {isFeatured && (
        <div className="h-0.5 w-full bg-[--color-accent] rounded-t-[--radius-lg]" />
      )}

      <div className={["p-6 flex flex-col flex-1", isFeatured ? "pt-5" : ""].join(" ")}>
        {/* Icon — different treatment for featured */}
        <div
          className={[
            "w-11 h-11 rounded-[--radius-md] flex items-center justify-center mb-4 transition-colors duration-200",
            isFeatured
              ? "bg-[--color-accent-muted] text-[--color-accent]"
              : "bg-[--color-surface] text-[--color-ink-muted]",
            "group-hover:bg-[--color-accent-muted] group-hover:text-[--color-accent]",
          ].join(" ")}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={[
            "font-semibold mb-2 leading-snug",
            isFeatured ? "text-lg text-[#1A1A1A]" : "text-base text-[--color-ink]",
          ].join(" ")}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={[
            "text-sm leading-relaxed flex-1",
            isFeatured ? "text-[#1A1A1A]/50" : "text-[--color-ink-faint]",
          ].join(" ")}
        >
          {description}
        </p>

        {/* CTA — positioned at bottom */}
        <div
          className={[
            "mt-4 flex items-center gap-1.5 text-sm font-medium transition-all duration-200",
            isFeatured
              ? "text-[--color-accent]"
              : "text-[--color-ink-muted]",
            "group-hover:gap-2.5",
          ].join(" ")}
        >
          <span>View service</span>
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </a>
  );
}