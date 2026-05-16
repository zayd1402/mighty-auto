"use client";

import { featuredReviews } from "@/lib/reviews";
import { Star, MapPin, Quote } from "lucide-react";

export function GoogleReviews() {
  return (
    <section className="bg-[--color-surface-2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[--color-accent]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
              Reviews
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-bold text-[--color-ink] leading-tight"
              style={{ fontSize: "var(--text-h2)" }}
            >
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => (
                  <Star key={i} size={16} className="fill-[--color-accent] text-[--color-accent]" />
                ))}
                <Star size={16} className="fill-[--color-accent] text-[--color-accent]/40" />
              </div>
              <span className="text-sm font-semibold text-[--color-ink]">4.1</span>
              <span className="text-sm text-[--color-ink-faint]">from 89 Google reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews — masonry-inspired, not uniform grid */}
        <div className="pb-[var(--space-section-lg)] grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featuredReviews.map((review, i) => (
            <div
              key={review.name}
              className={[
                "relative rounded-[--radius-lg] p-6 border",
                i === 1
                  ? "sm:-mt-6 sm:mb-6 border-[--color-accent] bg-white shadow-md"
                  : "bg-white border-[--color-border-subtle]",
              ].join(" ")}
            >
              {/* Quote mark */}
              <Quote
                size={32}
                className="absolute top-5 right-5 text-[--color-accent]/15"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-[--color-accent] text-[--color-accent]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[--color-ink] leading-relaxed text-sm mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between pt-4 border-t border-[--color-border-subtle]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[--color-surface-2] flex items-center justify-center text-[--color-ink-muted] text-xs font-semibold uppercase">
                    {review.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[--color-ink]">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-[--color-ink-faint]">
                      <MapPin size={11} />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-[--color-ink-faint]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}