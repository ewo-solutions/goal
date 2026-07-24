export const site = {
  name: "Gulf of America Logistics",
  shortName: "GoAL",
  phone: "+1 225-277-4625",
  email: "info@goalogistics.com",
  address: "3800 Viking Dr. Bossier City, LA, 71111, USA",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
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
  { label: "Who We Are", href: "/who-we-are" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: services.map((s) => ({
      label: s.title,
      href: `/what-we-do/${s.slug}`,
    })),
  },
];
