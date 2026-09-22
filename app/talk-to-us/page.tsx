import PageHero from "@/components/PageHero";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Talk To Us",
  description:
    "Connect with our experienced teams. We are ready to help you plan, move, and prioritize your project requirements.",
  path: "/talk-to-us",
});

const offices = [
  {
    name: "Corporate Headquarters",
    address: ["3800 Viking Drive", "Bossier City", "Louisiana 71111", "United States of America"],
    phone: "+1 225 277 4625",
  },
  {
    name: "International Office",
    address: [
      "7906 N Sam Houston Parkway W",
      "Suite 310",
      "Houston, Texas, 77064",
      "United States of America",
    ],
    phone: "+1 281 870 4853",
  },
  {
    name: "Specialized Trucking & Heavy Haul",
    address: [
      "One American Place",
      "301 N Main Street, STE 1650",
      "Baton Rouge, LA 70801",
      "United States of America",
    ],
    phone: "+1 225 277 4625",
  },
];

export default function TalkToUsPage() {
  return (
    <>
      <PageHero
        pill="Contact Us"
        title="Put Experience behind"
        titleBold="Your Next Project"
        image="/images/talk-to-us-hero.png"
      />

      {/* Connect with our teams */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[100px]">
          <SectionPill label="The Right Solution" variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[1028px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            Connect With Our Experienced Teams
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[1144px] text-[16px] font-light leading-[30px] text-black text-pretty"
            data-reveal
            data-reveal-delay="120"
          >
            When timing, coordination, and execution matter, experience makes
            the difference. We are ready to help you plan, move, and prioritize
            your project requirements.
          </p>

          <div className="mx-auto mt-16 grid max-w-[1428px] gap-12 text-left sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {offices.map((office) => (
              <div key={office.name} className="text-[16px] leading-[25px]">
                <h3 className="font-bold">{office.name}</h3>
                <p className="mt-2 font-light">
                  {office.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < office.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p className="mt-4 font-light">
                  <span className="font-bold">T:</span>{" "}
                  <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                    {office.phone}
                  </a>
                  <br />
                  <span className="font-bold">E:</span>{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
