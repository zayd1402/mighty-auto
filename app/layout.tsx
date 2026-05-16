import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: "Mighty Auto's & Tyre",
  image: 'https://www.mightyautorepairs.com.au/og-image.svg',
  url: 'https://www.mightyautorepairs.com.au',
  telephone: '02 9897 7442',
  email: 'mightyautos@hotmail.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '506 Merrylands Rd',
    addressLocality: 'Merrylands West',
    addressRegion: 'NSW',
    postalCode: '2160',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8333,
    longitude: 150.9833,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '16:00' },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.1',
    reviewCount: '89',
  },
  areaServed: {
    '@type': 'City',
    name: 'Merrylands West',
  },
  serviceType: ['Car Service', 'Tyre Fitting', 'Brake Service', 'Suspension', 'Oil Change', 'Auto Repair'],
  abn: '71 661 742 561',
};

export const metadata: Metadata = {
  title: {
    default: "Mighty Auto's & Tyre | Merrylands Auto Repairs",
    template: "%s | Mighty Auto's & Tyre",
  },
  description:
    "Merrylands' most trusted mechanic. Expert car servicing, tyre fitting, brakes, suspension and more. 4.1★ Google rating. Book online or call 02 9897 7442.",
  keywords: [
    "auto repair Merrylands",
    "car service Merrylands West",
    "mechanic Merrylands",
    "tyres Merrylands",
    "brake service NSW",
    "car service Sydney",
  ],
  metadataBase: new URL('https://www.mightyautorepairs.com.au'),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.mightyautorepairs.com.au",
    siteName: "Mighty Auto's & Tyre",
    title: "Mighty Auto's & Tyre | Merrylands Auto Repairs",
    description: "Merrylands' most trusted mechanic. Expert car servicing, tyre fitting, brakes, suspension and more. 4.1★ Google rating.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mighty Auto's & Tyre - Merrylands Most Trusted Mechanic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Auto's & Tyre | Merrylands Auto Repairs",
    description: "Merrylands' most trusted mechanic. Expert car servicing, tyre fitting, brakes, suspension and more. 4.1★ Google rating.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mightyautorepairs.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
