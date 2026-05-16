import Link from 'next/link';
import { Phone, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4 py-16">
      <div className="text-center max-w-xl">
        {/* Error code */}
        <div className="mb-6">
          <span className="text-8xl font-bold font-mono text-[--color-primary]">404</span>
        </div>

        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[--color-primary]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[--color-ink] mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg text-[--color-ink-muted] mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on the road.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[--color-accent] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[--color-accent-dark] transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <a
            href="tel:0298977442"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[--color-primary] text-[--color-primary] font-semibold rounded-lg hover:bg-[--color-primary] hover:text-[#1A1A1A] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>

        {/* Quick links */}
        <div className="border-t border-[--color-border] pt-8">
          <p className="text-sm text-[--color-ink-muted] mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services" className="text-[--color-accent] hover:underline">
              Our Services
            </Link>
            <span className="text-[--color-border]">|</span>
            <Link href="/about" className="text-[--color-accent] hover:underline">
              About Us
            </Link>
            <span className="text-[--color-border]">|</span>
            <Link href="/contact" className="text-[--color-accent] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
