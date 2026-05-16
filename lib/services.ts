import { 
  Wrench, Battery, Thermometer, CircleDot, 
  Droplets, Disc, Settings, Cog, Car
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  shortDescription: string;
  description: string;
  included: string[];
  whyItMatters: string;
  whenToGet: string[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "car-full-service",
    name: "Car Full Service",
    tagline: "Complete peace of mind for your vehicle",
    icon: "Wrench",
    shortDescription: "Full inspection, oil change, filter check, fluid top-ups, tyre rotation and safety checks.",
    description:
      "Our full service covers everything your car needs to run safely and efficiently. Using OBD diagnostic technology, we check engine performance, replace oil and filters, inspect brakes, suspension and steering, and top up all essential fluids.",
    included: [
      "OBD on-board diagnostics scan",
      "Engine oil change (premium synthetic or mineral)",
      "Oil filter replacement",
      "Fluid level checks (coolant, brake, transmission, power steering)",
      "Tyre rotation and inflation check",
      "Brake inspection",
      "Suspension and steering check",
      "Battery and alternator test",
      "50-point safety inspection report",
    ],
    whyItMatters:
      "Regular servicing prevents small problems becoming expensive repairs. A well-maintained car uses less fuel, brakes better, and keeps you safer on the road.",
    whenToGet: [
      "Approaching 10,000km since last service",
      "Annual service is due",
      "Your car is due for a log book service",
      "You notice any unusual noises, vibrations or performance changes",
    ],
    relatedServices: ["oil-change", "brake-services", "battery-services"],
  },
  {
    slug: "car-battery",
    name: "Battery Services",
    tagline: "Start every journey with confidence",
    icon: "Battery",
    shortDescription: "Battery testing, replacement, registration and emergency mobile service available.",
    description:
      "Your car's battery is its heartbeat. We test, maintain and replace batteries for all vehicle makes and models, including proper ECU registration for modern cars with battery management systems.",
    included: [
      "Free battery condition test and inspection",
      "Battery terminal cleaning and maintenance",
      "Alternator and charging system check",
      "New battery installation (all makes/models)",
      "ECU battery registration for modern vehicles",
      "Safe disposal of old battery",
      "Emergency mobile battery replacement (same day)",
    ],
    whyItMatters:
      "A weak battery can leave you stranded. Most batteries last 3-5 years — we test yours for free so you know where you stand before the cold morning when it won't start.",
    whenToGet: [
      "Engine crank is slow or weak",
      "Battery is more than 3 years old",
      "Warning light appears on dashboard",
      "Electrical systems behaving oddly (radio resetting, lights dimming)",
      "Car hasn't been driven for an extended period",
    ],
    relatedServices: ["car-full-service", "auto-repair"],
  },
  {
    slug: "car-radiator",
    name: "Radiator Service",
    tagline: "Keep your engine cool, your wallet happy",
    icon: "Thermometer",
    shortDescription: "Coolant flush, leak detection, hose replacement and radiator repair.",
    description:
      "Overheating is one of the most damaging things for an engine. Our radiator service flushes old coolant, checks for leaks, inspects hoses and ensures your cooling system is working perfectly.",
    included: [
      "Coolant flush and drain",
      "System pressure test for leak detection",
      "Radiator flush",
      "Hose inspection and replacement (if needed)",
      "Thermostat check",
      "Coolant check and refill with correct type",
      "Cap and seal inspection",
    ],
    whyItMatters:
      "Cooling system failure can destroy an engine in minutes. Regular coolant changes prevent corrosion, cavitation and the kind of repair bills that make you wince.",
    whenToGet: [
      "Temperature gauge running higher than normal",
      "Coolant warning light is on",
      "You can smell coolant or see puddles under the car",
      "Heater isn't producing hot air",
      "Coolant hasn't been changed in 2+ years",
    ],
    relatedServices: ["car-full-service", "auto-repair"],
  },
  {
    slug: "tyre-services",
    name: "Tyre Services",
    tagline: "Right tyres, right fit, every time",
    icon: "CircleDot",
    shortDescription: "Tyre fitting, balancing, wheel alignment, puncture repairs and nitrogen inflation.",
    description:
      "We stock and fit quality tyres for all vehicles — passenger, 4WD and light commercial. Our precision equipment ensures perfect fit, balance and alignment every time.",
    included: [
      "Tyre fitting (all brands stocked and ordered)",
      "Wheel balancing (static and dynamic)",
      "Four-wheel laser alignment",
      "Puncture repairs (plug and patch)",
      "Tyre rotation for even wear",
      "Tyre pressure monitoring system (TPMS) check",
      "Nitrogen inflation (reduces pressure loss, extends tyre life)",
      "Seasonal tyre storage available",
      "Run-flat tyre service",
    ],
    whyItMatters:
      "Your tyres are the only thing connecting your car to the road. Poor alignment chews through tyres fast, wrong pressure increases fuel use, and worn tyres dramatically lengthen stopping distance.",
    whenToGet: [
      "Tyres are wearing unevenly or vibrating at speed",
      "You hit a pothole or curb hard",
      "Tyres are more than 5 years old (check the sidewall DOT code)",
      "You've noticed the car pulling to one side",
      "Stopping distance seems longer than usual",
      "Tyre pressure warning light is on",
    ],
    relatedServices: ["brake-services", "suspension-steering", "car-full-service"],
  },
  {
    slug: "oil-change",
    name: "Oil Change",
    tagline: "The foundation of engine longevity",
    icon: "Droplets",
    shortDescription: "Premium oil changes with full filter service and 20-point inspection.",
    description:
      "Engine oil is your engine's lifeblood. We use only quality oils and filters, and include a complete inspection every time. Quick turnaround so you're back on the road fast.",
    included: [
      "Premium engine oil (synthetic or mineral based on manufacturer spec)",
      "Oil filter replacement",
      "Drain plug gasket replacement",
      "Engine oil level check and top-up",
      "Coolant level check",
      "Brake fluid level check",
      "Power steering fluid check",
      "Windscreen washer fluid top-up",
      "Tyre pressure check and adjustment",
      "Engine bay visual inspection",
    ],
    whyItMatters:
      "Oil breaks down over time and collects particles. Dirty oil wears out engines faster than anything else. Changing it regularly is the single cheapest thing you can do to extend your car's life.",
    whenToGet: [
      "Approaching 5,000-10,000km since last oil change (check your manual)",
      "Oil warning light is on",
      "Oil looks black and gritty on the dipstick",
      "You hear ticking or tapping from the top of the engine",
      "Exhaust smoke is bluish",
      "Oil smell inside the cabin",
    ],
    relatedServices: ["car-full-service", "auto-repair"],
  },
  {
    slug: "brake-services",
    name: "Brake Services",
    tagline: "Stop safely. Stop quietly. Stop confidently.",
    icon: "Disc",
    shortDescription: "Brake pad replacement, rotor resurfacing, fluid flush and full brake system inspection.",
    description:
      "Your brakes are the most important safety system on your car. We inspect the entire brake system and only recommend work that's actually needed — no upselling, no scare tactics.",
    included: [
      "Full brake system inspection (all four wheels)",
      "Brake pad thickness measurement",
      "Rotor condition assessment",
      "Rotor resurfacing (if within tolerance)",
      "Rotor replacement (if worn beyond resurface)",
      "Brake calliper inspection and lubrication",
      "Brake line and hose check",
      "Brake fluid flush and replacement",
      "Brake pedal feel test",
      "ABS system diagnostic check",
    ],
    whyItMatters:
      "Brakes wear every time you use them. Squeaking isn't just annoying — it's your car telling you the pads are getting thin. We catch problems early before they become dangerous and expensive.",
    whenToGet: [
      "You hear squealing, grinding or clicking when braking",
      "Pedal feels spongy or goes closer to the floor than usual",
      "Car pulls to one side when braking",
      "Brake warning light is on",
      "You've driven more than 40,000km since brake pads were checked",
      "You can smell brakes after a long drive",
    ],
    relatedServices: ["tyre-services", "suspension-steering", "car-full-service"],
  },
  {
    slug: "suspension-steering",
    name: "Suspension & Steering",
    tagline: "Handle every corner. Absorb every bump.",
    icon: "Settings",
    shortDescription: "Shock absorbers, struts, wheel alignment, power steering and steering linkage repair.",
    description:
      "Your suspension and steering keep your car planted, comfortable and controllable. We diagnose and repair everything from worn shocks to steering rack leaks — and always do a four-wheel laser alignment after any suspension work.",
    included: [
      "Shock absorber inspection and testing",
      "Spring assessment",
      "Four-wheel laser alignment",
      "Steering rack and pinion inspection",
      "Power steering system check",
      "Ball joint and tie rod inspection",
      "Control arm and bush inspection",
      "Steering column universal joint check",
    ],
    whyItMatters:
      "Worn suspension makes your car bounce, sway and wander. It reduces tyre contact with the road and makes emergency manoeuvres dangerous. Good steering response is not a luxury — it's a safety feature.",
    whenToGet: [
      "Car bounces excessively over speed bumps",
      "Steering wheel shakes at certain speeds",
      "Car pulls to one side on a straight road",
      "You can hear clunking over bumps",
      "Steering feels vague or slow to respond",
      "Tyres are wearing in patches or feathering",
    ],
    relatedServices: ["tyre-services", "brake-services", "auto-repair"],
  },
  {
    slug: "auto-repair",
    name: "Auto Repair",
    tagline: "All makes, all models, all problems solved",
    icon: "Cog",
    shortDescription: "From minor fixes to major diagnostics — OBD scanning, engine repair and everything in between.",
    description:
      "Check engine light, strange noise, transmission problem, electrical fault — we diagnose it properly using professional OBD diagnostic equipment. If we can't fix it, we'll tell you honestly and point you in the right direction.",
    included: [
      "OBD diagnostic scan (read and clear fault codes)",
      "Live data stream analysis",
      "Visual inspection of reported concern",
      "Multi-point system check related to the fault",
      "Written repair quote (no-obligation)",
      "All work quoted before any parts are ordered",
      "90-day parts and labour warranty",
    ],
    whyItMatters:
      "Modern cars have complex systems that need expert diagnosis. Throwing parts at a problem costs more than getting it right the first time. We diagnose properly — because your time and money matter.",
    whenToGet: [
      "Check engine light is on",
      "Car is running rough, losing power or using more fuel than usual",
      "Strange noises from engine bay, transmission or undercarriage",
      "Transmission slipping, hard shifting or delayed engagement",
      "Electrical problems (windows, lights, accessories not working)",
      "Car won't start or stalls frequently",
    ],
    relatedServices: ["car-full-service", "car-battery", "brake-services"],
  },
];

export const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Battery,
  Thermometer,
  CircleDot,
  Droplets,
  Disc,
  Settings,
  Cog,
  Car,
};