import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import CircleIcon from "@/components/CircleIcon";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "What We Do",
  description:
    "GoAL delivers complex projects efficiently, reliably, and without disruption — sector-specific expertise with a strong global network and logistics capability.",
  path: "/what-we-do",
});

const industries = [
  {
    title: "Lead Logistics Provider|for Capital Projects",
    body: "Single point of control responsible for managing and executing capital project logistics operations",
    href: "/what-we-do/lead-logistics-provider",
    image: "/images/industry-card-1.png",
  },
  {
    title: "Data Center|Project Logistics",
    body: "Engineered solutions for hyperscale and enterprise data center and semiconductor projects",
    href: "/what-we-do/data-center-project-logistics",
    image: "/images/industry-card-2.png",
  },
  {
    title: "Oil & Gas|Logistics",
    body: "End-to-end movement of high value cargo across upstream, midstream, and downstream sectors",
    href: "/what-we-do/oil-and-gas-logistics",
    image: "/images/industry-card-3.png",
  },
  {
    title: "Renewable|Energy",
    body: "Integrated services for transport, staging, and last-mile delivery of cargo from source to site",
    href: "/what-we-do/wind-energy-logistics",
    image: "/images/industry-card-4.png",
  },
  {
    title: "Specialized Trucking &|Heavy Haul",
    body: "Road transport planning|and execution for oversized|and overweight loads",
    href: "/what-we-do/specialized-trucking-and-heavy-haul",
    image: "/images/industry-card-5.png",
  },
  {
    title: "In-House Support & Expediting",
    body: "On-site support providing direct coordination across stakeholders and logistics activities",
    href: "/what-we-do/in-house-support-and-expediting",
    image: "/images/industry-card-6.png",
  },
];

const commitments = [
  {
    title: "Integrity",
    icon: "/icons/commitment-integrity.svg",
    body: "Ethics, honesty, and transparency guide every decision we make",
  },
  {
    title: "Safety",
    icon: "/icons/commitment-safety.svg",
    body: "Safety first is a priority in how we plan, how we operate, and how we deliver",
  },
  {
    title: "Sustainability",
    icon: "/icons/commitment-sustainability.svg",
    body: "Committed to long-term responsible and sustainable operations",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        pill="What we do"
        title="Global Logistics Expertise"
        titleBold="For Complex Projects"
        image="/images/what-we-do-hero.png"
      />

      {/* Industries we serve */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[100px]">
          <SectionPill label="industries we serve" variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[1028px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            Supporting High-Stakes Sectors With Precision Logistics Solutions
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[1028px] text-[16px] font-light leading-[30px] text-black text-pretty"
            data-reveal
            data-reveal-delay="120"
          >
            Our focus is simple: deliver complex projects efficiently, reliably,
            and without disruption. By combining sector-specific expertise with
            a strong global network and logistics capability, we provide
            solutions that are structured, scalable, and built for execution.
          </p>

          <div className="mt-16 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="fx-lift group relative flex aspect-[458/503] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-goal-navy px-10 text-center"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="relative z-10">
                  <h3 className="mx-auto max-w-[380px] text-[24px] font-bold leading-[1.25] text-white lg:text-[26px]">
                    {industry.title.split("|").map((line, i, arr) => (
                      <span key={line}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="mx-auto mt-5 max-w-[320px] text-[15px] font-light leading-[1.6] text-white text-pretty lg:text-[16px]">
                    {industry.body.split("|").map((line, i, arr) => (
                      <span key={line}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <Link
                    href={industry.href}
                    className="mt-8 inline-block rounded-full border border-white px-[25px] py-[18px] text-[18px] capitalize leading-[1.2] text-white transition-all hover:bg-white hover:font-bold hover:text-goal-red"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity / Safety / Sustainability */}
      <section className="bg-white pb-16 lg:pb-[100px]">
        <div className="mx-auto grid max-w-[1580px] gap-12 px-6 text-center sm:grid-cols-3 lg:px-10" data-reveal-group>
          {commitments.map((item) => (
            <div key={item.title} className="group mx-auto max-w-[320px]">
              <div className="mx-auto flex h-[121px] w-[121px] items-center justify-center rounded-full border border-goal-red transition-transform duration-500 ease-out group-hover:scale-110">
                <CircleIcon src={item.icon} />
              </div>
              <h3 className="mt-6 text-[22px] font-bold leading-[35px] text-black lg:text-[24px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-black text-pretty lg:text-[16px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
