import PageHero from "@/components/PageHero";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Talk To Us",
  description:
    "Connect with our experienced teams. We are ready to help you plan, move and prioritize your project requirements.",
  path: "/talk-to-us",
});

const branchOffices = [
  { city: "Baton Rouge", detail: "TBA" },
  { city: "Lafayette", detail: "TBA" },
  { city: "Rayville", detail: "TBA" },
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
            className="mx-auto mt-8 max-w-[1144px] text-[16px] font-light leading-[30px] text-black lg:text-[18px] lg:leading-[35px]"
            data-reveal
            data-reveal-delay="120"
          >
            When timing, coordination, and execution matter, experience makes
            the difference. We are ready to help you plan, move and prioritize
            your project requirements.
          </p>

          <div className="mx-auto mt-16 grid max-w-[1134px] gap-12 text-left sm:grid-cols-2" data-reveal-group>
            <div className="text-[16px] leading-[25px]">
              <h3 className="font-bold">Corporate Headquarters</h3>
              <p className="mt-2 font-light">
                3800 Viking Drive
                <br />
                Bossier City
                <br />
                LA 71111
                <br />
                United States of America
              </p>
              <p className="mt-4 font-light">
                <span className="font-bold">T:</span>{" "}
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  +1 225 277 4625
                </a>
                <br />
                <span className="font-bold">E:</span>{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="text-[16px] leading-[25px]">
              <h3 className="font-bold">Branch Offices</h3>
              <div className="mt-2 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {branchOffices.map((office) => (
                  <div key={office.city} className="font-light">
                    {office.city}
                    <br />
                    {office.detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
