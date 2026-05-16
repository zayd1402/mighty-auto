'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-[--color-primary]"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--color-accent] text-[#1A1A1A]">
              MA
            </span>
            <span>Mighty Auto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[--color-ink] transition-colors hover:text-[--color-accent]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
href="tel:+61298977442"
              className="flex items-center gap-2 text-sm font-medium text-[--color-ink] transition-colors hover:text-[--color-accent]"
            >
              <Phone className="h-4 w-4" />
              <span>02 9897 7442</span>
            </a>
            <Link
              href="/#book"
              className="rounded-[--radius-btn] bg-[--color-accent] px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[--color-accent-dark]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="rounded-lg p-2 text-[--color-ink] transition-colors hover:bg-[--color-surface-2] lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[--color-border] px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-[--color-primary]"
              onClick={closeMenu}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--color-accent] text-[#1A1A1A]">
                MA
              </span>
              <span>Mighty Auto</span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-lg p-2 text-[--color-ink] transition-colors hover:bg-[--color-surface-2]"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-[--color-ink] transition-colors hover:text-[--color-accent]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-[--color-border] px-6 py-6">
            <a
href="tel:+61298977442"
              className="mb-4 flex items-center gap-2 text-lg font-medium text-[--color-ink]"
            >
              <Phone className="h-5 w-5" />
              <span>02 9897 7442</span>
            </a>
            <Link
              href="/#book"
              onClick={closeMenu}
              className="block w-full rounded-[--radius-btn] bg-[--color-accent] px-5 py-3 text-center text-base font-semibold text-[#1A1A1A] transition-colors hover:bg-[--color-accent-dark]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
