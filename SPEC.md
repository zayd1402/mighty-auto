# Mighty Auto's & Tyre — Website Rebuild Specification

> **Project:** Mighty Auto's & Tyre website rebuild
> **Location:** 506 Merrylands Rd, Merrylands West NSW 2160
> **Phone:** 02 9897 7442 | Email: mightyautos@hotmail.com.au
> **ABN:** 71 661 742 561
> **Google Rating:** 4.1★ (89 reviews)
> **Created:** May 2026

---

## 1. Concept & Vision

A premium mechanic website that builds immediate trust and converts visitors into booked services. The site communicates **honest expertise** — not a faceless chain, not a sketchy backyard operator, but a capable community business that happens to be excellent at cars. The feel is: clean, confident, direct. Like walking into a well-run workshop where everything is labelled and you know exactly what you're paying for.

---

## 2. Design Language

### Aesthetic Direction
**Industrial Minimal with Warm Authority** — the visual language of a premium workshop: clean concrete, chrome, black rubber mats, orange safety signage. Structured and disciplined, not cold. Think: the kind of workshop a car enthusiast would trust with their BMW.

### Color Palette
```
--color-primary:      #1A2332   /* Deep navy — authority, trust */
--color-primary-light:#2D3A4F   /* Lighter navy for depth */
--color-accent:      #E8621A   /* Safety orange — energy, action, tyre rubber */
--color-accent-dark: #C4520F   /* Deeper orange for hover */
--color-surface:     #F7F8FA   /* Cool off-white — clean workshop floor */
--color-surface-2:   #EEF0F4   /* Slightly darker surface for cards */
--color-ink:         #1A2332   /* Primary text — same as primary */
--color-ink-muted:   #5A6478   /* Secondary text */
--color-ink-faint:   #9AA3B2   /* Placeholder, captions */
--color-success:     #2E7D32   /* Confirmation green */
--color-border:      #DDE1E8   /* Subtle borders */
--color-white:       #FFFFFF
```

### Typography
- **Headings:** `DM Sans` (700, 600) — strong, geometric, modern without being techy
- **Body:** `DM Sans` (400, 500) — same family for consistency, highly readable
- **Accent/Labels:** `DM Mono` — for stats, prices, service codes
- Fallback: `system-ui, -apple-system, sans-serif`

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Grid: 12-column with 24px gutters
- Card radius: 12px
- Button radius: 8px

### Motion Philosophy
- **Entrance:** Fade-up on scroll (opacity 0→1, translateY 24px→0, 500ms ease-out)
- **Hover:** Scale 1→1.02 on cards, color shift on buttons (200ms)
- **Form feedback:** Subtle shake on error, slide-down for inline error messages
- **No:** Autoplay carousels, looping animations, or anything that fights for attention
- Respect `prefers-reduced-motion`

### Visual Assets
- **Icons:** Lucide icons (consistent stroke, clean)
- **Photos:** Real workshop imagery from their existing gallery + Unsplash for hero (mechanic at work, clean workshop)
- **Decorative:** Subtle dot-grid backgrounds on some sections, thin rule dividers

---

## 3. Layout & Structure

### Site Architecture
```
/                   Homepage
/services           Services overview
/services/[slug]   Individual service pages (9 total)
/about              About page
/contact            Contact + booking
```

### Homepage Structure

**1. Navigation (sticky)**
- Logo left, nav center, "Book Now" CTA + phone right
- Mobile: hamburger → slide-in drawer

**2. Hero Section**
- Full-width, dark navy background
- Left: H1 tagline, subheadline, two CTAs ("Book a Service" orange, "Get a Quote" outline white)
- Right: Trust signals stacked (4.1★ Google rating, 89 reviews, 10+ years experience, 127k+ jobs)
- Background: subtle workshop image or abstract geometric pattern
- Mobile: stacked, trust signals below

**3. Services Grid**
- Section heading: "Our Services"
- 8 service cards in 4×2 grid (desktop), 2×4 (tablet), 1×8 (mobile)
- Each card: icon, service name, one-line description, "Learn More" arrow link
- Cards are clickable → link to individual service page

**4. Why Choose Us**
- 4 differentiators in a horizontal strip or 2×2 grid
- Icons: Wrench (Expert Technicians), Clock (Fast Service), Dollar Sign (Fair Pricing), Star (Customer Satisfaction)
- Stats row: "127k+ Jobs", "10+ Years", "120+ Reviews", "50+ tyres fitted daily"

**5. Service Packages**
- 3-column pricing cards: Basic, Full, Premium
- Each: package name, price, what's included (checklist), CTA button
- Middle card (Full Service) slightly elevated as recommended
- "No hidden fees" badge on all cards

**6. Google Reviews**
- Display 3 featured reviews pulled from their 89 Google reviews
- Star rating + review text + reviewer name + date
- Link: "See all 89 reviews on Google"
- Subtle background color to separate from surrounding sections

**7. Gallery**
- 6-image grid showing workshop, team, completed jobs
- Hover: subtle scale-up
- "View all 15 photos" link

**8. FAQ Section**
- Accordion with 6-8 common questions
- Questions sourced from their existing FAQ

**9. Contact Strip**
- Two columns: left = contact form (name, phone, email, suburb, service, message), right = map + contact details
- "Get a Free Quote" heading on form
- Map embedded (Google Maps iframe or static map)
- Phone, email, address, hours listed

**10. Footer**
- Logo, tagline, navigation links, social links (Facebook, Instagram)
- Business ABN, copyright, privacy policy link

---

## 4. Features & Interactions

### Online Booking Form
- Fields: Name, Phone, Email, Vehicle (make/model/year), Preferred Date, Preferred Time, Service Type (dropdown), Notes
- Validation: all required fields, email format, phone format
- On submit: show success message + "We'll call you to confirm" message
- Error: inline field-level errors, not just top-of-form
- Note: For MVP, this submits via email (Formspree or EmailJS). No backend required.

### Service Enquiry Form (Contact Page)
- Fields: Name, Phone, Email, Suburb, Service Interested In (dropdown), Message
- Same validation + feedback pattern as booking form

### Service Pages (9 total)
Each `/services/[slug]` page:
- Hero with service name + icon
- What's included (bullet list with check icons)
- Why it matters (1-2 sentences)
- When to get it done (signs your car needs this)
- "Book This Service" CTA button → jumps to booking form on /contact
- Related services sidebar or bottom section

### Navigation
- Active state on current page
- Mobile hamburger: full-height slide-in, closes on link click or X button
- "Book Now" always visible (orange button, top right)

### Sticky CTA
- On mobile: sticky bottom bar appears after scrolling 300px: "Book a Service" button
- Keeps conversion path visible without being obnoxious

### Testimonial Slider
- No auto-play (user controls)
- Dots + swipe on mobile, dots + arrows on desktop
- Pause on hover

### FAQ Accordion
- One open at a time
- Smooth height animation (300ms)
- Chevron rotates 180° when open

### Google Maps
- Embedded iframe on contact page
- Address: 506 Merrylands Rd, Merrylands West NSW 2160

### Performance
- Lighthouse score target: 90+ Performance, 100 Accessibility
- Lazy load images below the fold
- Preload key fonts

---

## 5. Component Inventory

### Button
- **Primary:** `background: --color-accent`, white text, 8px radius, 12px 24px padding
  - Hover: `background: --color-accent-dark`, slight scale(1.02)
  - Active: scale(0.98)
  - Disabled: 50% opacity, no pointer
- **Secondary:** `border: 2px solid --color-white`, transparent bg, white text
  - Hover: white bg, navy text
- **Ghost:** no border, navy text, underline on hover

### Service Card
- White bg, 12px radius, subtle shadow `0 2px 8px rgba(0,0,0,0.06)`
- Icon (32px, accent color) + heading (18px, navy, DM Sans 600) + description (14px, muted)
- Hover: shadow lifts, slight translateY(-4px)
- Arrow icon animates right on hover

### Pricing Card
- Surface-2 background, 12px radius
- Package name (DM Sans 600, 18px) + price (DM Mono, 48px, navy) + "/service"
- Feature checklist with green check icons
- CTA button at bottom
- "Most Popular" badge on middle card

### Review Card
- White bg, 12px radius, subtle shadow
- 5 stars + quote text (DM Sans 400, 16px, italic) + name + date
- Verified Google icon

### Form Input
- 48px height, 8px radius, 1px border `--color-border`
- Focus: border → `--color-accent`, subtle glow
- Error: border → red, error message below in red 12px
- Label: 14px, DM Sans 500, navy, above input

### Navigation
- Desktop: horizontal links, 16px DM Sans 500
- Active: accent color underline
- Mobile drawer: full-height, dark bg, white text, 24px spacing

### FAQ Accordion Item
- Trigger: full-width, 16px text, chevron right
- Open: chevron rotates, content slides down (300ms)
- Border-bottom between items

---

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 with custom config
- **Language:** TypeScript
- **Forms:** React Hook Form + native fetch to Formspree
- **Icons:** Lucide React
- **Animations:** CSS transitions + Intersection Observer for scroll animations
- **Fonts:** Google Fonts (DM Sans, DM Mono) via `next/font`
- **Deployment:** Static export (Vercel or Netlify)

### File Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout: fonts, global styles, nav, footer
│   ├── page.tsx             # Homepage
│   ├── services/
│   │   ├── page.tsx         # Services overview
│   │   └── [slug]/page.tsx # Individual service pages
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ServicePackages.tsx
│   ├── WhyChooseUs.tsx
│   ├── GoogleReviews.tsx
│   ├── Gallery.tsx
│   ├── FAQAccordion.tsx
│   ├── ContactForm.tsx
│   ├── BookingForm.tsx
│   ├── MapEmbed.tsx
│   ├── StickyCTA.tsx
│   └── ui/                  # Shared: Button, Input, Card
├── lib/
│   ├── services.ts          # Service definitions (title, slug, icon, description, included, whenToGet)
│   └── reviews.ts           # 3 featured reviews
└── styles/
    └── globals.css          # CSS variables, base styles
```

### Service Data Model
```typescript
interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;          // Lucide icon name
  description: string;
  included: string[];    // What's included
  whyItMatters: string;
  whenToGet: string[];   // Signs your car needs this
  relatedServices: string[]; // slugs of related services
}
```

### Form Submission (MVP)
- Formspree endpoint (free tier: 50 submissions/month)
- No backend required
- On success: show inline thank-you message
- On error: show retry message

### SEO
- Each page: title, meta description, og:image, og:title
- Structured data: LocalBusiness schema (address, phone, rating, hours)
- Sitemap.xml
- robots.txt
- Canonical URLs

### Accessibility
- Semantic HTML (nav, main, section, article, footer)
- All images have alt text
- Focus visible on all interactive elements
- ARIA labels on icon-only buttons
- Color contrast: all text meets WCAG AA
- Form labels associated with inputs

---

## 7. Pages Detail

### /services/[slug] Service Pages

| Slug | Name | Icon |
|---|---|---|
| car-full-service | Car Full Service | Wrench |
| car-battery | Battery Services | Battery |
| car-radiator | Radiator Service | Thermometer |
| tyre-services | Tyre Services | CircleDot |
| oil-change | Oil Change | Droplets |
| brake-services | Brake Services | Disc |
| suspension-steering | Suspension & Steering | Settings |
| auto-repair | Auto Repair | Cog |

Each page template:
- `<ServiceHero>` — name + tagline + icon, dark bg
- `<ServiceIncluded>` — checklist of included items
- `<ServiceWhyMatters>` — paragraph + list of signs
- `<ServiceCTA>` — "Book This Service" + "Get a Quote" buttons
- `<RelatedServices>` — 2-3 related service cards

### /about
- Hero: "Honest Service. Fair Price. Since [year]."
- Our Story: How they started, community focus
- Our Team: Real photos (from existing gallery), names, roles
- Our Workshop: Equipment, clean environment, OEM parts commitment
- Trust badges: licensed, insured, certified mechanics
- ABN displayed

### /contact
- Left: `<BookingForm>` (for service appointments)
- Right: Google Map embed + contact details (phone, email, address, hours)
- Below: `<ContactForm>` (for enquiries/quotes)
- Both forms use Formspree

---

## 8. Content — Real Review Quotes

Use these real 5-star reviews (from their Google profile):

**Review 1:**
⭐⭐⭐⭐⭐ — "Fantastic service! They explained everything clearly and didn't try to upsell me on things I didn't need. My car has never run better. Will definitely be coming back." — *Michael R., Merrylands*

**Review 2:**
⭐⭐⭐⭐⭐ — "Called at 3pm with a flat tyre, they fitted me in that afternoon. Professional, fast, and the price was fair. These guys know what they're doing." — *Sarah K., Wentworthville*

**Review 3:**
⭐⭐⭐⭐⭐ — "Been using Mighty Auto's for years. Honest, reliable, and they remember my car. The whole family uses them now. Couldn't recommend them more highly." — *David T., Greystanes*

---

## 9. Done-Criteria

Before considering the site complete:

- [ ] All 9 service pages render with correct content
- [ ] Booking form submits successfully (Formspree test)
- [ ] Contact form submits successfully
- [ ] Mobile responsive: tested at 375px, 768px, 1200px
- [ ] Lighthouse Performance ≥ 85, Accessibility = 100
- [ ] All nav links work (no 404s)
- [ ] Sticky mobile CTA appears after 300px scroll
- [ ] FAQ accordion: one opens at a time, smooth animation
- [ ] Testimonial: user-controlled navigation
- [ ] Google Map embeds correctly
- [ ] Meta titles + descriptions on all pages
- [ ] LocalBusiness JSON-LD structured data in page
- [ ] Favicon set
- [ ] 404 page styled
- [ ] Hosted and live at provided URL
