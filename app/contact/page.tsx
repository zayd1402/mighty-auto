"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  notes: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const services = [
  "Full Service",
  "Log Book Service",
  "Tyre Fitting",
  "Brake Service",
  "Suspension",
  "Wheel Alignment",
  "Diagnostic Check",
  "Other",
];

export default function ContactPage() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const {
    register: registerBooking,
    handleSubmit: handleBookingSubmit,
    reset: resetBooking,
    formState: { errors: bookingErrors, isSubmitting },
  } = useForm<BookingFormData>();

  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    reset: resetContact,
    formState: { errors: contactErrors },
  } = useForm<ContactFormData>();

  const onBookingSubmit = async (data: BookingFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking data:", data);
    setBookingSubmitted(true);
    resetBooking();
  };

  const onContactSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact data:", data);
    setContactSubmitted(true);
    resetContact();
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[var(--color-primary)] py-section-mobile md:py-section text-[#1A1A1A]">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-[var(--color-ink-faint)] text-lg">
              Book a service, ask a question, or just say hello. We're here to
              help.
            </p>
          </div>
        </Container>
      </section>

      {/* Booking Form + Map & Contact Details */}
      <section className="py-section-mobile md:py-section bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2">
                Book a Service
              </h2>
              <p className="text-[var(--color-ink-muted)] mb-8">
                Fill out the form below and we'll get back to you within 24
                hours to confirm your booking.
              </p>

              {bookingSubmitted ? (
                <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                    Booking Request Received!
                  </h3>
                  <p className="text-[var(--color-ink-muted)] mb-6">
                    We'll contact you shortly to confirm your appointment.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setBookingSubmitted(false)}
                  >
                    Book Another
                  </Button>
                </div>
              ) : (
                <form
                  id="booking"
                  onSubmit={handleBookingSubmit(onBookingSubmit)}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...registerBooking("name", {
                          required: "Name is required",
                        })}
                        className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                          focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                          ${
                            bookingErrors.name
                              ? "border-red-500"
                              : "border-[var(--color-border)]"
                          }`}
                        placeholder="John Smith"
                      />
                      {bookingErrors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {bookingErrors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...registerBooking("phone", {
                          required: "Phone is required",
                        })}
                        className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                          focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                          ${
                            bookingErrors.phone
                              ? "border-red-500"
                              : "border-[var(--color-border)]"
                          }`}
                        placeholder="04XX XXX XXX"
                      />
                      {bookingErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {bookingErrors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...registerBooking("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                        ${
                          bookingErrors.email
                            ? "border-red-500"
                            : "border-[var(--color-border)]"
                        }`}
                      placeholder="john@example.com"
                    />
                    {bookingErrors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {bookingErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Vehicle (Year, Make, Model) *
                    </label>
                    <input
                      id="vehicle"
                      type="text"
                      {...registerBooking("vehicle", {
                        required: "Vehicle details are required",
                      })}
                      className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                        ${
                          bookingErrors.vehicle
                            ? "border-red-500"
                            : "border-[var(--color-border)]"
                        }`}
                      placeholder="2018 Toyota Camry"
                    />
                    {bookingErrors.vehicle && (
                      <p className="mt-1 text-sm text-red-500">
                        {bookingErrors.vehicle.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service"
                      {...registerBooking("service", {
                        required: "Please select a service",
                      })}
                      className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                        ${
                          bookingErrors.service
                            ? "border-red-500"
                            : "border-[var(--color-border)]"
                        }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {bookingErrors.service && (
                      <p className="mt-1 text-sm text-red-500">
                        {bookingErrors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      {...registerBooking("preferredDate")}
                      className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      {...registerBooking("notes")}
                      className="w-full px-3 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1 resize-none"
                      placeholder="Any specific issues or requests..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                  >
                    Submit Booking Request
                  </Button>
                </form>
              )}
            </div>

            {/* Map + Contact Details */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="rounded-[var(--radius-card)] overflow-hidden h-64 md:h-80 border border-[var(--color-border)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4823!2d150.9847!3d-33.8337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUwJzAwLjAiUyAxNTDCsDU5JzA3LjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mighty Auto's & Tyre Location"
                />
              </div>

              {/* Contact Details */}
              <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-6">
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-4">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📍</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">
                        Address
                      </p>
                      <p className="text-sm text-[var(--color-ink-muted)]">
                        1/52-54 Merrylands Rd, Merrylands NSW 2160
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📞</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">
                        Phone
                      </p>
                      <a
                        href="tel:0298977442"
                        className="text-sm text-[var(--color-accent)] hover:underline"
                      >
                        02 9897 7442
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✉️</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">
                        Email
                      </p>
                      <a
                        href="mailto:mightyautos@hotmail.com.au"
                        className="text-sm text-[var(--color-accent)] hover:underline"
                      >
                        mightyautos@hotmail.com.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🕐</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">
                        Trading Hours
                      </p>
                      <p className="text-sm text-[var(--color-ink-muted)]">
                        Mon–Fri: 8:00am – 5:30pm
                        <br />
                        Sat: 8:00am – 2:00pm
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* General Contact Form */}
      <section className="py-section-mobile md:py-section bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[var(--color-ink-muted)]">
                Have a question or need advice? Drop us a line and we'll get
                back to you ASAP.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="bg-white rounded-[var(--radius-card)] p-8 text-center border border-[var(--color-border)]">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--color-ink-muted)] mb-6">
                  Thanks for reaching out. We'll be in touch shortly.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => setContactSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit(onContactSubmit)}
                className="bg-white rounded-[var(--radius-card)] p-6 md:p-8 border border-[var(--color-border)] space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...registerContact("name", {
                        required: "Name is required",
                      })}
                      className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                        ${
                          contactErrors.name
                            ? "border-red-500"
                            : "border-[var(--color-border)]"
                        }`}
                      placeholder="John Smith"
                    />
                    {contactErrors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {contactErrors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...registerContact("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full h-11 px-3 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1
                        ${
                          contactErrors.email
                            ? "border-red-500"
                            : "border-[var(--color-border)]"
                        }`}
                      placeholder="john@example.com"
                    />
                    {contactErrors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {contactErrors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    {...registerContact("phone")}
                    className="w-full h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1"
                    placeholder="04XX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...registerContact("message", {
                      required: "Message is required",
                    })}
                    className={`w-full px-3 py-2.5 rounded-[var(--radius-btn)] border bg-white text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)]
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1 resize-none
                      ${
                        contactErrors.message
                          ? "border-red-500"
                          : "border-[var(--color-border)]"
                      }`}
                    placeholder="How can we help you?"
                  />
                  {contactErrors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {contactErrors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}