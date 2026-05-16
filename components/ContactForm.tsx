"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input, Textarea } from "./ui/Input";
import { Button } from "./ui/Button";
import { CheckCircle, AlertCircle, Send, User, Mail, Phone, Car } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus("submitting");
    try {
      // Replace YOUR_FORM_ID with actual Formspree ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    reset();
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 px-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[--color-success]/15 mb-5">
          <CheckCircle size={26} className="text-[--color-success]" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Message sent!</h3>
        <p className="text-sm text-[#1A1A1A]/50 leading-relaxed mb-6 max-w-xs mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="text-sm text-[#1A1A1A]/40 hover:text-[--color-accent] transition-colors duration-150 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-10 px-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[--color-error]/15 mb-5">
          <AlertCircle size={26} className="text-[--color-error]" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Something went wrong</h3>
        <p className="text-sm text-[#1A1A1A]/50 leading-relaxed mb-6 max-w-xs mx-auto">
          We couldn&apos;t send your message. Please try again or call us directly.
        </p>
        <button
          onClick={handleReset}
          className="text-sm text-[#1A1A1A]/40 hover:text-[--color-accent] transition-colors duration-150 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="relative">
        <div className="absolute left-4 top-[38px] text-[#1A1A1A]/30 pointer-events-none z-10">
          <User size={17} />
        </div>
        <Input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" },
          })}
          type="text"
          id="name"
          label="Full Name"
          placeholder="John Smith"
          className="pl-11"
          error={errors.name?.message}
          disabled={status === "submitting"}
          dark
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-[38px] text-[#1A1A1A]/30 pointer-events-none z-10">
          <Mail size={17} />
        </div>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          id="email"
          label="Email Address"
          placeholder="john.smith@email.com"
          className="pl-11"
          error={errors.email?.message}
          disabled={status === "submitting"}
          dark
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-[38px] text-[#1A1A1A]/30 pointer-events-none z-10">
          <Phone size={17} />
        </div>
        <Input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[\d\s\-+()]{10,}$/,
              message: "Please enter a valid phone number",
            },
          })}
          type="tel"
          id="phone"
          label="Phone Number"
          placeholder="0412 345 678"
          className="pl-11"
          error={errors.phone?.message}
          disabled={status === "submitting"}
          dark
        />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-[38px] text-[#1A1A1A]/30 pointer-events-none z-10">
          <Car size={17} />
        </div>
        <Input
          {...register("vehicle", {
            required: "Vehicle information is required",
            minLength: { value: 3, message: "Please enter your vehicle (e.g., 2020 Honda Accord)" },
          })}
          type="text"
          id="vehicle"
          label="Vehicle"
          placeholder="2020 Honda Accord"
          className="pl-11"
          error={errors.vehicle?.message}
          disabled={status === "submitting"}
          dark
        />
      </div>

      <Textarea
        {...register("message", {
          required: "Please tell us about your service needs",
          minLength: { value: 10, message: "Message must be at least 10 characters" },
        })}
        id="message"
        label="How Can We Help?"
        placeholder="Describe the service you need or any questions you have..."
        error={errors.message?.message}
        disabled={status === "submitting"}
        dark
      />

      <Button
        type="submit"
        size="lg"
        fullWidth
        loading={status === "submitting"}
        disabled={status === "submitting"}
        leftIcon={status !== "submitting" ? <Send size={17} /> : undefined}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-center text-[#1A1A1A]/25">
        Your information is secure and will only be used to contact you about your inquiry.
      </p>
    </form>
  );
}