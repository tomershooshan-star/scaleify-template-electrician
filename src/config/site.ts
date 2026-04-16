// Site-wide config. Swap these per client — this is the ONLY file most clients touch.

export const site = {
  brand: "VoltSafe",
  tagline: "24/7 Licensed & Insured Electricians",
  phone: "+1 (555) 012-3456",
  phoneRaw: "+15550123456",
  email: "hello@voltsafe.example.com",
  address: "1234 Current Ave, Los Angeles, CA 90001",
  serviceCities: [
    "Downtown LA",
    "Hollywood",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Long Beach",
  ],
  hours: {
    weekdays: "Mon – Sat: 8:00 AM – 8:00 PM",
    emergency: "Emergency Service: 24/7",
  },
  hero: {
    eyebrow: "Licensed · Insured · 24/7",
    headline: "Safe, Fast & Reliable Electrical Work.",
    subhead:
      "From emergency repairs to full rewiring and EV charger installs, our master electricians get the job done right — on time, every time.",
    primaryCta: { label: "Call Now", href: "tel:+15550123456" },
    secondaryCta: { label: "Book A Free Estimate", href: "#contact" },
    trustLine: "Trusted by 10,000+ homeowners · 20+ years experience",
  },
  deals: [
    "Free Safety Inspection With Any Service",
    "24/7 Emergency Electrician — Call Now",
    "$50 Off Panel Upgrades This Month",
    "Licensed Master Electricians — All Work Guaranteed",
  ],
  review: {
    stars: 4.9,
    count: 1280,
  },
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  },
};

export const services = [
  {
    title: "24/7 Emergency Repairs",
    desc: "Sparks, smoke, dead outlets — we respond fast, day or night, to keep your home and business safe.",
    icon: "Zap",
  },
  {
    title: "Panel Upgrades",
    desc: "Upgrade outdated breaker panels to modern 200A service. Safer, code-compliant, and ready for your next appliance.",
    icon: "Power",
  },
  {
    title: "Rewiring & Troubleshooting",
    desc: "Full-home rewiring, knob-and-tube replacement, and diagnosis of mystery problems with care and zero drama.",
    icon: "Cable",
  },
  {
    title: "Lighting Installation",
    desc: "Indoor, outdoor, recessed, chandeliers, smart lighting. We install it clean and wire it right.",
    icon: "Lightbulb",
  },
  {
    title: "EV Charger Installation",
    desc: "Level 2 home chargers and commercial install. Certified to work with Tesla, ChargePoint, and all major brands.",
    icon: "PlugZap",
  },
  {
    title: "Smart Home Wiring",
    desc: "Smart switches, thermostats, security, whole-home audio — wired in and set up correctly.",
    icon: "Home",
  },
  {
    title: "Generator Install & Backup",
    desc: "Whole-home generators and battery backups so you never get caught in the dark.",
    icon: "BatteryCharging",
  },
  {
    title: "Electrical Inspections",
    desc: "Pre-purchase, insurance, and annual safety inspections with a full written report.",
    icon: "ShieldCheck",
  },
];

export const whyChoose = [
  {
    title: "Licensed Master Electricians",
    desc: "Every tech is state-licensed, bonded, and insured. No contractors, no shortcuts.",
    icon: "Award",
  },
  {
    title: "Upfront Flat-Rate Pricing",
    desc: "You see the price before we start. No surprises, no hourly creep, no hidden fees.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Fast Response Time",
    desc: "On-site in 60 minutes or less for emergencies across the metro area.",
    icon: "Timer",
  },
  {
    title: "Lifetime Workmanship Warranty",
    desc: "We stand behind every job. If it's our work and it fails, we fix it — free.",
    icon: "ShieldCheck",
  },
  {
    title: "Safe, Clean, Respectful",
    desc: "Shoe covers, drop cloths, cleanup included. We leave your place better than we found it.",
    icon: "Sparkles",
  },
  {
    title: "Fully Stocked Trucks",
    desc: "Most repairs done in one visit — no waiting, no return trips for parts.",
    icon: "Truck",
  },
];

export const process = [
  {
    n: "01",
    title: "Book Your Service",
    desc: "Call, text, or use the form. We confirm within 15 minutes and schedule a slot that works.",
  },
  {
    n: "02",
    title: "On-Site Assessment",
    desc: "A licensed electrician arrives on time, diagnoses the issue, and quotes upfront.",
  },
  {
    n: "03",
    title: "Fast & Safe Repair",
    desc: "We complete the work to code, test everything, and walk you through what was done.",
  },
  {
    n: "04",
    title: "Cleanup & Warranty",
    desc: "Site is cleaned, work is warrantied, and you get a written report for your records.",
  },
];

export const stats = [
  { n: "20+", label: "Years in Business" },
  { n: "10,000+", label: "Jobs Completed" },
  { n: "4.9★", label: "1,280+ Reviews" },
  { n: "60 min", label: "Avg. Response" },
];

export const testimonials = [
  {
    quote:
      "Our panel finally got upgraded after years of flipping breakers. The tech showed up early, quoted us on the spot, and was done in a day. House feels safer already.",
    name: "Mark R.",
    role: "Homeowner, Pasadena",
  },
  {
    quote:
      "We had an emergency at 11 PM — lights shorted in the kitchen. VoltSafe had a truck at our door in under an hour. Clean work, fair price, no upsell.",
    name: "Jessica L.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "Needed a Tesla charger put in. They ran conduit cleanly, pulled the permit, and it's been flawless for 14 months. Will absolutely use again.",
    name: "Daniel K.",
    role: "EV Owner, Santa Monica",
  },
  {
    quote:
      "Smart switches throughout the house. They matched everything to the existing plates and it looks stock. Super patient explaining the app too.",
    name: "Priya S.",
    role: "Homeowner, Beverly Hills",
  },
];

export const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Every electrician on our team is a state-licensed master or journeyman, fully bonded, and covered by commercial liability and workers' comp.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes, 24/7/365. If you're seeing sparks, smell burning, or lost power in a critical area, call and a licensed electrician will be dispatched immediately.",
  },
  {
    q: "How much does a typical repair cost?",
    a: "Most residential repairs land between $150 and $600 depending on complexity. Every quote is flat-rate and provided in writing before we begin any work.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes. Any work that legally requires a permit (panel upgrades, service changes, new circuits) is pulled, inspected, and passed before we close out the job.",
  },
  {
    q: "Do you offer a warranty?",
    a: "We back all workmanship for life on the parts we install. Manufacturer warranties pass through directly to you on any equipment.",
  },
  {
    q: "What areas do you serve?",
    a: `We cover ${[
      "Downtown LA",
      "Hollywood",
      "Santa Monica",
      "Beverly Hills",
      "Pasadena",
      "Long Beach",
    ].join(", ")}, plus nearby communities. Not sure? Call us — we probably cover you.`,
  },
];
