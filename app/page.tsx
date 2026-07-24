import Image from "next/image";
import Link from "next/link";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import ServiceCard from "@/components/ServiceCard";
import Marquee from "@/components/Marquee";
import ContactSection from "@/components/ContactSection";

const serviceCards = [
  { title: "Turnkey Project Solutions", image: "/images/service-turnkey.png" },
  { title: "Project Management", image: "/images/service-project-management.png" },
  { title: "Project Cargo", image: "/images/service-project-cargo.png" },
  { title: "Over-the-Road Trucking", image: "/images/service-otr-trucking.png" },
  { title: "Rail Transport", image: "/images/service-rail.png" },
  { title: "Ocean Freight", image: "/images/service-ocean.png" },
  { title: "Air Freight", image: "/images/service-air.png" },
  { title: "Barge Services", image: "/images/service-barge.png" },
];

const features = [
  {
    title: "Technical Expertise",
    image: "/images/feature-technical.png",
    icon: "/icons/icon-settings.svg",
    body: "Cargo movements are planned and coordinated through route surveys, CAD drawings, engineered lift plans, and securement design. Heavy-haul trailers and transport mode changes across truck, barge, and rail accommodate multifaceted shipment requirements and complex project logistics operations.",
  },
  {
    title: "Project Cargo Specialists",
    image: "/images/feature-cargo.png",
    icon: "/icons/icon-truck.svg",
    body: "Oversized, overweight, and high-value equipment is handled with engineered lift plans, and securement designs for road, barge, air, and marine transport operations. Warehousing and laydown yards provide staging, inventory control, and kitting services for efficient project cargo handling and operational readiness.",
  },
  {
    title: "Multimodal Transport Network",
    image: "/images/feature-multimodal.png",
    icon: "/icons/icon-sync.svg",
    body: "Truck, barge, rail, ocean, and air transport is tracked with real-time GPS tracking and milestone updates. Trucking line partnerships expand our capabilities, while specialized handling for dangerous goods, temperature-sensitive cargo, and priority space through carrier relationships supports complex global shipments.",
  },
  {
    title: "EPC Project Standards",
    image: "/images/feature-epc.png",
    icon: "/icons/icon-paste.svg",
    body: "Projects are managed using EPC-aligned systems, schedules, risk management, and documentation control. Dedicated project managers provide single-point accountability, contingency planning, and change readiness as project requirements and operational conditions shift.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden bg-goal-navy lg:min-h-[933px]">
        <Image
          src="/images/hero-ship.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-goal-red to-goal-navy opacity-75 mix-blend-overlay" />
        <div className="absolute inset-0 bg-goal-navy opacity-25 mix-blend-overlay" />
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-goal-navy to-goal-navy/0" />

        <div className="relative z-10 mx-auto max-w-[1096px] px-6 pb-24 pt-16 text-center lg:pb-32">
          <h1 className="text-[40px] leading-[1.1] text-white sm:text-[56px] lg:text-[80px]">
            Worldwide Operations.
            <br />
            <span className="font-bold">Global Project Logistics.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-[995px] text-[16px] font-light leading-[30px] text-white lg:text-[18px] lg:leading-[35px]">
            Gulf of America Logistics (GoAL) is a veteran-owned project
            logistics and heavy haul transportation company with Gulf Coast
            roots specializing in heavy haul, oversized cargo, complex project
            logistics, and data center builds across the United States and
            worldwide.
          </p>
          <Link
            href="/what-we-do"
            className="mt-12 inline-block rounded-full bg-white px-[25px] py-[20px] text-[18px] capitalize leading-[1.2] text-goal-red transition-opacity hover:opacity-90"
          >
            What we do
          </Link>
        </div>

        <Image
          src="/icons/scroll-down.png"
          alt=""
          width={89}
          height={102}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        />
      </section>

      {/* Our Services */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/services-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0.2deg, rgb(255,255,255) 0.5%, rgba(255,255,255,0.75) 99.6%)",
          }}
        />
        <div className="relative mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[106px]">
          <SectionPill label="our services" variant="red" />
          <h2 className="mx-auto mt-8 max-w-[516px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]">
            Project Logistics Expertise
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p className="mx-auto mt-8 max-w-[848px] text-[16px] font-light leading-[30px] text-black lg:text-[18px] lg:leading-[35px]">
            From oversized equipment to heavy-haul and out-of-gauge cargo, we
            manage complex logistics projects across the entire supply chain
            using engineering-level planning, smart technology, and coordinated
            multimodal transport solutions.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-[17px] sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} title={card.title} image={card.image} />
            ))}
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="bg-goal-dark">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[106px]">
          <SectionPill label="How we do it" variant="white" />
          <h2 className="mx-auto mt-8 max-w-[761px] text-[36px] font-bold capitalize leading-[1.2] text-white lg:text-[55px]">
            Engineered Logistics &amp; Project Delivery
          </h2>
          <SectionDivider variant="white" className="mt-8" />

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="relative">
                  <div className="relative h-[179px] w-[179px] overflow-hidden rounded-full bg-goal-navy">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      sizes="179px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -left-2 -top-2 h-[71px] w-[71px] rounded-full bg-gradient-to-r from-goal-red to-goal-navy opacity-50" />
                  <div className="absolute left-0 top-0 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-gradient-to-r from-goal-red to-goal-navy">
                    <Image src={feature.icon} alt="" width={21} height={21} />
                  </div>
                </div>
                <h3 className="mt-8 max-w-[312px] text-[26px] font-bold leading-[1.2] text-white">
                  {feature.title}
                </h3>
                <p className="mt-6 max-w-[294px] text-[16px] leading-[1.5] text-white">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose GoAL */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/why-choose-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-80"
        />
        <div className="relative mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[120px]">
          <SectionPill label="Why choose goAL" variant="red" />
          <h2 className="mx-auto mt-8 max-w-[884px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]">
            Technical Expertise And Disciplined Project Execution
          </h2>
        </div>
      </section>

      <Marquee />

      <ContactSection />
    </>
  );
}
