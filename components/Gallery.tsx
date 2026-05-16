"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=400&fit=crop",
    alt: "Engine diagnostics in progress",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    alt: "Professional service bay",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    alt: "Tyre fitting and balancing",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop",
    alt: "Brake system inspection",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
    alt: "Quality parts and equipment",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    alt: "Suspension and steering work",
  },
];

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[--color-surface]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[--color-accent]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
                  Gallery
                </span>
              </div>
              <h2
                className="font-bold text-[--color-ink] leading-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Our Work
              </h2>
            </div>
            <a
              href="#gallery-all"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-ink-muted] hover:text-[--color-accent] hover:gap-3 transition-all duration-150 self-start"
            >
              <span>See all</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Image Grid — not uniform: varying heights */}
        <div className="pb-[var(--space-section-lg)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className={[
                "relative overflow-hidden rounded-[--radius-lg] group cursor-pointer",
                "aspect-[4/3]",
                "bg-[--color-surface-2]",
                // Varying heights for visual rhythm
                i === 1 ? "sm:row-span-2 sm:aspect-auto" : "",
              ].join(" ")}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={[
                  "w-full h-full object-cover transition-transform duration-500 ease-out",
                  hoveredId === image.id ? "scale-105" : "",
                ].join(" ")}
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className={[
                  "absolute inset-0 bg-gradient-to-t from-[--color-primary]/70 via-transparent to-transparent",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                ].join(" ")}
              />
              {/* Label */}
              <div
                className={[
                  "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0",
                  "transition-transform duration-300 ease-out",
                ].join(" ")}
              >
                <p className="text-[#1A1A1A] font-medium text-sm leading-snug">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}