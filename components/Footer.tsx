import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Globe, ExternalLink, Users } from 'lucide-react';

const services = [
  { href: '/#services', label: 'Logbook Service' },
  { href: '/#services', label: 'Full Service' },
  { href: '/#services', label: 'Major Service' },
  { href: '/#services', label: 'Pre-Purchase Inspection' },
  { href: '/#services', label: 'Roadworthy Certificate' },
];

const company = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#book', label: 'Book Online' },
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '02 9897 7442',
    href: 'tel:+61298977442',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mightyautos@hotmail.com.au',
    href: 'mailto:mightyautos@hotmail.com.au',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '506 Merrylands Rd, Merrylands West NSW 2160',
    href: 'https://www.google.com/maps/search/506+Merrylands+Rd+Merrylands+West+NSW+2160',
  },
];

const hours = [
  { day: 'Monday', time: '7:30 AM - 6:00 PM' },
  { day: 'Tuesday', time: '7:30 AM - 6:00 PM' },
  { day: 'Wednesday', time: '7:30 AM - 6:00 PM' },
  { day: 'Thursday', time: '7:30 AM - 6:00 PM' },
  { day: 'Friday', time: '7:30 AM - 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const socialLinks = [
  { icon: Globe, href: 'https://mightyautorepairs.com.au', label: 'Website' },
  { icon: ExternalLink, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Users, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-[--color-primary] text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--color-accent] text-[#1A1A1A]">
                MA
              </span>
              <span>Mighty Auto</span>
            </Link>
            <p className="text-sm text-[#1A1A1A]/70">
              Your trusted partner for quality automotive servicing and repairs in Merrylands.
              Keeping your vehicle running smoothly since 2014.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
                  >
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[--color-accent]" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-5 w-5 text-[--color-accent]" />
              Trading Hours
            </h3>
            <ul className="space-y-2">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-sm text-[#1A1A1A]/70"
                >
                  <span>{item.day}</span>
                  <span className={item.day === 'Sunday' ? 'text-[#1A1A1A]/50' : ''}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#1A1A1A]/70 transition-colors hover:bg-[--color-accent] hover:text-[#1A1A1A]"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* ABN & Copyright Bar */}
        <div className="flex flex-col items-center gap-2 text-center text-sm text-[#1A1A1A]/60 md:flex-row md:justify-between">
          <p>ABN: 71 661 742 561</p>
          <p>© {new Date().getFullYear()} Mighty Auto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
