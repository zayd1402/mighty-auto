"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What auto services do you offer?",
    answer:
      "We offer a full range of automotive services including logbook servicing, brake repairs, tyre fitting and wheel alignment, suspension and steering, radiator and cooling system repairs, battery replacement, oil changes, and pre-purchase inspections. All work is performed by licensed mechanics using quality parts and equipment.",
  },
  {
    id: 2,
    question: "How long does a typical service take?",
    answer:
      "A basic service usually takes 1–2 hours. A full service typically takes 3–4 hours. Premium and logbook services can take half a day. We provide same-day completion for most jobs where possible and give you an honest ETA before we start.",
  },
  {
    id: 3,
    question: "Do you provide free quotes?",
    answer:
      "Yes — we provide free, no-obligation quotes for all work. Give us a call or fill out our contact form and we'll get back to you promptly with an upfront price for the work your car needs.",
  },
  {
    id: 4,
    question: "Do you service all vehicle makes and models?",
    answer:
      "We service all makes and models — Holden, Ford, Toyota, Mazda, Hyundai, BMW, Mercedes, Audi, and more. Our mechanics are qualified across all major brands and have the diagnostic equipment to match.",
  },
  {
    id: 5,
    question: "Are your technicians licensed and insured?",
    answer:
      "Every mechanic at Mighty Auto's is fully qualified and licensed. We carry comprehensive business insurance and stand behind all work with a workmanship guarantee.",
  },
  {
    id: 6,
    question: "What brands of tyres do you carry?",
    answer:
      "We carry all major tyre brands including Bridgestone, Michelin, Continental, Goodyear, Dunlop, Pirelli, and budget options. We'll recommend the right tyre for your vehicle, driving style, and budget.",
  },
  {
    id: 7,
    question: "Do you offer any warranties?",
    answer:
      "All parts come with manufacturer warranties. We also provide a 12-month warranty on labour for most repair work. Ask us about specific warranty coverage for your service.",
  },
  {
    id: 8,
    question: "How often should I service my car?",
    answer:
      "Most manufacturers recommend a logbook service every 12 months or 10,000–15,000km — whichever comes first. If you do a lot of short trips or drive in dusty conditions, consider servicing more frequently.",
  },
];

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[--color-border-subtle] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={[
            "text-sm font-semibold leading-snug transition-colors duration-150",
            isOpen ? "text-[--color-accent]" : "text-[--color-ink] group-hover:text-[--color-accent]",
          ].join(" ")}
        >
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={[
            "flex-shrink-0 text-[--color-ink-muted] transition-all duration-200",
            isOpen ? "rotate-180 text-[--color-accent]" : "group-hover:text-[--color-accent]",
          ].join(" ")}
        />
      </button>
      <div
        className={[
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0",
        ].join(" ")}
      >
        <p className="text-[--color-ink-muted] text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const leftItems = faqItems.slice(0, 4);
  const rightItems = faqItems.slice(4);

  return (
    <section className="bg-[--color-surface-2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-lg)]">

          {/* Header — editorial style, not centered */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[--color-accent]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
                Help
              </span>
            </div>
            <h2
              className="font-bold text-[--color-ink] leading-tight"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Common Questions
            </h2>
          </div>

          {/* Two-column FAQ — breaks uniform single-column template */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">

            {/* Left column */}
            <div className="bg-white rounded-[--radius-lg] p-6 border border-[--color-border-subtle]">
              {leftItems.map((item) => (
                <FAQRow
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="bg-white rounded-[--radius-lg] p-6 border border-[--color-border-subtle]">
              {rightItems.map((item) => (
                <FAQRow
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}

              {/* Trust nudge — not a FAQ item, visual variety */}
              <div className="mt-6 pt-5 border-t border-[--color-border-subtle]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[--color-accent-muted] flex items-center justify-center flex-shrink-0">
                    <HelpCircle size={16} className="text-[--color-accent]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[--color-ink] mb-1">Can't find your answer?</p>
                    <p className="text-xs text-[--color-ink-faint] leading-relaxed">
                      Call us on{" "}
                      <a href="tel:+61298977442" className="text-[--color-accent] font-medium hover:underline">
                        02 9897 7442
                      </a>{" "}
                      — we answer questions honestly, no pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
