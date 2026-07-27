// Falls back to the company's email domain until a production domain is
// confirmed and NEXT_PUBLIC_SITE_URL is set in the Vercel project.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.goalogistics.com"
).replace(/\/$/, "");

export const site = {
  name: "Gulf of America Logistics",
  shortName: "GoAL",
  phone: "+1 225-277-4625",
  email: "info@goalogistics.com",
  address: "3800 Viking Dr. Bossier City, LA, 71111, USA",
  social: {
    linkedin: "https://www.linkedin.com/company/gulf-of-america-logistics/?viewAsMember=true",
    facebook: "https://www.facebook.com/profile.php?id=61584967577965",
  },
};

export const services = [
  { title: "Lead Logistics Provider", slug: "lead-logistics-provider" },
  { title: "Data Center Project Logistics", slug: "data-center-project-logistics" },
  { title: "Oil & Gas Logistics", slug: "oil-and-gas-logistics" },
  { title: "Wind Energy Logistics", slug: "wind-energy-logistics" },
  { title: "Specialized Trucking & Heavy Haul", slug: "specialized-trucking-and-heavy-haul" },
  { title: "In-House Support and Expediting", slug: "in-house-support-and-expediting" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Our Solutions & Expertise", href: "/what-we-do" },
      ...services.map((s) => ({
        label: s.title,
        href: `/what-we-do/${s.slug}`,
      })),
    ],
  },
  { label: "Who We Are", href: "/who-we-are" },
];
