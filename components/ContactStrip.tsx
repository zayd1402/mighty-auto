"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "506 Merrylands Rd, Merrylands West NSW 2160",
    href: "https://www.google.com/maps/search/506+Merrylands+Rd+Merrylands+West+NSW+2160",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "02 9897 7442",
    href: "tel:+61298977442",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mightyautos@hotmail.com.au",
    href: "mailto:mightyautos@hotmail.com.au",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 8AM–5:30PM · Sat 8AM–2PM",
  },
];

export function ContactStrip() {
  return (
    <section id="contact" className="relative bg-[--color-primary] overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="noise-texture absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-[var(--space-section-lg)] pb-[var(--space-section-md)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[--color-accent]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-accent]">
              Contact
            </span>
          </div>
          <h2
            className="font-bold text-[#1A1A1A] leading-tight"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Get In Touch
          </h2>
          <p className="text-[#1A1A1A]/50 text-base max-w-lg mt-2 leading-relaxed">
            Ready to book a service or have questions? We&apos;re here to help — respond same day.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="pb-[var(--space-section-lg)] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Contact form */}
          <div>
            <div className="bg-[--color-primary-2] border border-white/10 rounded-[--radius-lg] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-[--color-accent]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/40">
                  Send a message
                </span>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Right — Map + details stacked */}
          <div className="flex flex-col gap-5">
            {/* Map */}
            <div className="rounded-[--radius-lg] overflow-hidden h-52 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8!2d150.9833!3d-33.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ee3e0b0e0e0f%3A0x502a35d3e64c2d0!2s506%20Merrylands%20Rd%2C%20Merrylands%20West%20NSW%202160!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mighty Auto workshop location"
                className="grayscale-[60%] hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Contact details */}
            <div className="bg-[--color-primary-2] border border-white/10 rounded-[--radius-lg] p-5">
              <div className="grid grid-cols-2 gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-[--radius-sm] bg-[--color-accent-muted] flex items-center justify-center mt-0.5">
                        <Icon size={15} className="text-[--color-accent]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A]/30 mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-[#1A1A1A]/70 hover:text-[--color-accent] transition-colors duration-150"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-[#1A1A1A]/70">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}