"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop CTA */}
      <div className="hidden md:block">
        <a
          href="tel:+61298977442"
          className="inline-flex items-center gap-2 px-6 py-3
                     bg-[--color-accent] text-[#1A1A1A] font-semibold rounded-[--radius-btn]
                     hover:bg-[--color-accent-dark] transition-colors duration-150
                     focus-visible:outline-2 focus-visible:outline-[--color-accent]
                     focus-visible:outline-offset-2"
        >
          <Phone size={18} />
          Book Now
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out
                   ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        <div
          className="bg-[--color-white] border-t-2 border-[--color-border]
                     shadow-[0_-4px_20px_rgba(0,0,0,0.1)]
                     px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            <div className="flex flex-col min-w-0">
              <span className="text-sm text-[--color-ink-muted]">
                Ready to book?
              </span>
              <span className="font-bold text-[--color-ink] truncate">
                Schedule Today
              </span>
            </div>
            <a
              href="tel:+61298977442"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2
                         px-5 py-2.5 bg-[--color-accent] text-[#1A1A1A] font-semibold
                         rounded-[--radius-btn]
                         hover:bg-[--color-accent-dark] active:bg-[#A8430D]
                         transition-colors duration-150
                         focus-visible:outline-2 focus-visible:outline-[--color-accent]
                         focus-visible:outline-offset-2"
            >
              <Phone size={18} />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}