"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, ChevronDown } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold text-[--color-accent]">{value}</span>
      <span className="text-sm text-[#1A1A1A]/60 leading-snug">{label}</span>
    </div>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxY = scrollY * 0.35;

  return (
    <section ref={heroRef} className="relative w-full min-h-[92vh] flex flex-col overflow-hidden">

      {/* ─── 1. Background Image with parallax ─── */}
      <div
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&q=85"
          alt="Mighty Auto workshop — expert mechanic working on a car"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ─── 2. Dark overlay (bottom-heavy gradient) ─── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,10,22,0.82) 0%, rgba(0,10,22,0.55) 40%, rgba(0,10,22,0.90) 75%, rgba(0,10,22,0.98) 100%)",
        }}
      />

      {/* ─── 3. Subtle amber edge glow (top-left) ─── */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(232,168,56,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ─── 4. Grid texture ─── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ─── 5. Noise grain overlay ─── */}
      <div className="noise-texture absolute inset-0 pointer-events-none" />

      {/* ─── 6. Main content ─── */}
      <div className="relative z-10 flex flex-col min-h-[92vh]">

        {/* Top info bar */}
        <div className="border-b border-[#1A1A1A]/12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <p className="text-[11px] text-[#1A1A1A]/50 tracking-[0.18em] uppercase font-medium">
              Merrylands West NSW
            </p>
            <p className="text-[11px] text-[#1A1A1A]/50 tracking-[0.06em]">
              Mon–Fri 8AM–5:30PM · Sat 8AM–2PM
            </p>
          </div>
        </div>

        {/* Hero body — flex-1 pushes footer down */}
        <div className="flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">

          {/* Left: Headline + CTA */}
          <div className="w-full lg:max-w-[60%]">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-8 opacity-0"
              style={{ animation: "fade-up 0.5s ease-out 0.1s forwards" }}
            >
              <span className="w-10 h-px bg-[--color-accent]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[--color-accent]">
                Est. 2014 · Merrylands West NSW
              </span>
            </div>

            {/* Display headline — premium 7rem display */}
            <h1
              className="opacity-0"
              style={{
                fontSize: "clamp(3.5rem, 7vw + 1rem, 7rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
              }}
            >
              Expert Car Care,{" "}
              <span style={{ color: "var(--color-accent)" }}>Done Right.</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-6 text-base md:text-lg text-[#1A1A1A]/60 leading-[1.7] max-w-xl opacity-0"
              style={{ animation: "fade-up 0.55s ease-out 0.35s forwards" }}
            >
              No upselling. No hidden fees. No theatrics. Just honest,
              reliable mechanic work from a team that&apos;s been doing this
              since 2014.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap items-center gap-5 mt-10 opacity-0"
              style={{ animation: "fade-up 0.5s ease-out 0.5s forwards" }}
            >
              <Button size="lg" className="font-semibold shadow-[0_0_28px_rgba(232,168,56,0.3)]">
                Book a Service
              </Button>

              <a
                href="tel:+61298977442"
                className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/60 hover:text-[--color-accent] transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={2} />
                02 9897 7442
              </a>
            </div>
          </div>

          {/* Right: Stats card — glassmorphism */}
          <div
            className="hidden lg:block w-[300px] flex-shrink-0 opacity-0"
            style={{ animation: "fade-up 0.6s ease-out 0.45s forwards" }}
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(0,20,44,0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 8px 40px rgba(0,10,22,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Google rating */}
              <div className="text-center pb-5 border-b border-[#1A1A1A]/12">
                <div
                  className="text-5xl font-extrabold mb-1"
                  style={{ color: "var(--color-accent)", letterSpacing: "-0.02em" }}
                >
                  4.1★
                </div>
                <div className="text-[11px] text-[#1A1A1A]/50 uppercase tracking-[0.18em] font-semibold">
                  Google Rating
                </div>
                <div className="text-[11px] text-[#1A1A1A]/35 mt-1">
                  from 89 verified reviews
                </div>
              </div>

              {/* Stats */}
              <div className="py-5 space-y-4">
                <Stat value="15+" label="Years in Business" />
                <Stat value="10,000+" label="Cars Serviced" />
                <Stat value="500+" label="5-Star Reviews" />
              </div>

              {/* Trust */}
              <div className="pt-4 border-t border-[#1A1A1A]/12">
                <p className="text-[11px] text-[#1A1A1A]/30 text-center leading-relaxed">
                  ABN: 71 661 742 561
                  <br />
                  Licensed &amp; Insured
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center pb-8 gap-1 opacity-0"
          style={{ animation: "fade-in 0.5s ease-out 1.0s forwards" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30 font-medium">
            Scroll
          </span>
          <div
            className="w-px h-10 overflow-hidden relative"
            style={{
              background: "linear-gradient(to bottom, var(--color-accent), transparent)",
            }}
          >
            <div
              className="absolute w-full h-1/2 bg-[#1A1A1A]/20 animate-[scroll-line_1.5s_ease-in-out_infinite]"
              style={{ animation: "scroll-line 1.5s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}