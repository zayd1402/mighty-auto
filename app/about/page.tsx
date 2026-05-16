import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Transparency",
    description:
      "No hidden costs, no surprise fees. We explain every repair before we start, so you're always informed.",
    icon: "🔍",
  },
  {
    title: "Expertise",
    description:
      "Over 15 years of combined experience. Our ASE-certified mechanics handle everything from oil changes to engine rebuilds.",
    icon: "🔧",
  },
  {
    title: "Reliability",
    description:
      "We show up on time, every time. Your car is ready when we say it will be — guaranteed.",
    icon: "✅",
  },
  {
    title: "Community",
    description:
      "Proudly serving Merrylands and surrounding suburbs since 2010. Your neighbors trust us — so can you.",
    icon: "🤝",
  },
];

const team = [
  {
    name: "Mick Jennings",
    role: "Founder & Lead Mechanic",
    bio: "Mick has over 20 years of experience in automotive repair. He founded Mighty Auto's with a simple mission: honest, reliable service.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Jake Thompson",
    role: "Technician",
    bio: "ASE-certified technician specialising in diagnostics and electrical systems. Jake turns complex problems into simple solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Service Advisor",
    bio: "Sarah is your friendly point of contact. She keeps communication clear and ensures every customer leaves knowing exactly what was done.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const trustBadges = [
  { label: "ASE Certified", icon: "🔧" },
  { label: "4.1★ Google Rating", icon: "⭐" },
  { label: "10+ Years Experience", icon: "🏆" },
  { label: "4,000+ Happy Customers", icon: "😊" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-section-mobile md:py-section text-[#1A1A1A]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">
              About Mighty Auto's & Tyre
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Merrylands' Most Trusted Mechanic
            </h1>
            <p className="text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              For over a decade, we've been keeping cars on the road and drivers
              smiling. No gimmicks, no runaround — just honest work from people
              who care.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">Book a Service</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-section-mobile md:py-section bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
                <p>
                  Mighty Auto's & Tyre was founded in 2010 by Mick Jennings, a
                  mechanic who'd spent years working for others and knew there
                  had to be a better way to serve car owners.
                </p>
                <p>
                  We started in a small workshop in Merrylands with a simple
                  promise: treat every customer like family, and never recommend
                  a repair they don't actually need. That philosophy built our
                  reputation — and our business — word of mouth.
                </p>
                <p>
                  Today, we've grown into one of the most trusted names in auto
                  repair across Western Sydney. But we still operate the same
                  way: honest assessments, fair pricing, and work you can
                  depend on.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
                alt="Auto repair workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-section-mobile md:py-section bg-[var(--color-surface)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-4">
              What We Stand For
            </h2>
            <p className="text-[var(--color-ink-muted)] max-w-2xl mx-auto">
              These four values guide every interaction, every repair, and every
              decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-[var(--radius-card)] p-6 shadow-sm border border-[var(--color-border)]"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-section-mobile md:py-section bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-4">
              Meet the Team
            </h2>
            <p className="text-[var(--color-ink-muted)] max-w-2xl mx-auto">
              Friendly faces who've dedicated their careers to keeping your car
              running smoothly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Badges */}
      <section className="py-section-mobile md:py-section bg-[var(--color-surface)]">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-semibold text-[var(--color-ink)]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section bg-[var(--color-accent)]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Ready to Get Your Car Serviced?
            </h2>
            <p className="text-[#1A1A1A]/90 max-w-xl mx-auto mb-8">
              Book online, call us, or send a message. We're here to help with
              everything from a quick oil change to full engine repair.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}