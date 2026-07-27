import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Are",
  description:
    "Gulf of America Logistics is a veteran-owned logistics company with decades of expertise in project logistics, heavy haul transportation, and multimodal freight management.",
  path: "/who-we-are",
});

const missionCards = [
  { title: "Strengthen U.S. Supply Chains", icon: "/icons/mission-supply-chains.png" },
  { title: "Create Economic Opportunities", icon: "/icons/mission-opportunities.png" },
  { title: "Work With Trusted Global Partners", icon: "/icons/mission-partners.png" },
];

const team = [
  { name: "Mike Camara", role: "President & CEO", image: "/images/team-mike-camara.png" },
  { name: "Sara Padilla", role: "Chief HR Officer", image: "/images/team-sara-padilla.png" },
  { name: "Chuck Paddock", role: "Member", image: "/images/team-chuck-paddock.png" },
  { name: "Ryan Wendland", role: "VP of Commercial", image: "/images/team-ryan-wendland.png" },
  {
    name: "Jake Minner",
    role: "VP Operations – Specialized Trucking & Heavy Haul",
    image: "/images/team-jake-minner.png",
  },
];

const values = [
  {
    title: "Our Commitment",
    icon: "/icons/value-commitment.svg",
    body: "We believe trust is earned through our actions and commitment, and we work hard to deliver on both.",
  },
  {
    title: "Our People",
    icon: "/icons/value-people.svg",
    body: "Our success is built on a culture of trust, opportunity, and support for one another.",
  },
  {
    title: "Mutual Responsibility",
    icon: "/icons/value-responsibility.svg",
    body: "Every job begins with the same priority: protecting people, equipment, and the communities around us.",
  },
  {
    title: "Integrity Always",
    icon: "/icons/value-integrity.svg",
    body: "Strong relationships start with honesty, mutual respect, and a commitment to doing business the right way.",
  },
  {
    title: "Doing The Right Thing",
    icon: "/icons/value-right-thing.svg",
    body: "We own our decisions, our actions, and the commitments we make to our customers and our people.",
  },
  {
    title: "Always Prepared",
    icon: "/icons/value-prepared.svg",
    body: "Good outcomes start with careful planning, disciplined execution, and attention to the details that matter.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        pill="who we are"
        title="Veteran Owned With"
        titleBold="Experience That Counts"
        image="/images/who-we-are-hero.png"
      />

      {/* Our Mission */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/why-choose-bg.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-80"
        />
        <div className="relative mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[110px]">
          <SectionPill label="Our mission" variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[1028px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            Every Project We Commit
            <br />
            To Is More Than A Timeline
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[824px] text-[16px] font-light leading-[30px] text-black"
            data-reveal
            data-reveal-delay="120"
          >
            It&rsquo;s an opportunity for us to invest in our local communities
            while supporting American industry and partnering with those who
            help power that mission.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[38px]" data-reveal-group>
            {missionCards.map((card) => (
              <div
                key={card.title}
                className="fx-lift rounded-[20px] bg-white px-8 py-11 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_12px_24px_0px_rgba(0,0,0,0.18)]"
              >
                <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full">
                  <Image src={card.icon} alt="" width={100} height={100} />
                </div>
                <h3 className="mx-auto mt-6 max-w-[254px] text-[22px] font-bold leading-[1.2] text-goal-navy lg:text-[26px]">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership In Action */}
      <section className="bg-goal-navy">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[110px]">
          <SectionPill label="meet the team" variant="white" data-reveal="zoom" />
          <h2 className="mx-auto mt-8 text-[36px] font-bold capitalize leading-[1.2] text-white lg:text-[55px]" data-reveal>
            Leadership In Action
          </h2>
          <div
            className="mx-auto mt-10 max-w-[1428px] space-y-6 text-[16px] font-light leading-[30px] text-white"
            data-reveal
            data-reveal-delay="120"
          >
            <p>
              Our strength comes from the combined experience of our leadership
              team, rooted in the values of mutual respect, discipline, and
              accountability. We bring decades of expertise in project
              logistics, heavy haul transportation, and multimodal freight
              management across the energy, infrastructure, and global supply
              chain sectors.
            </p>
            <p>
              We value our people and believe that strong organizations are
              built on trust, open communication, and a shared commitment to
              getting things right — supporting a forward-thinking culture
              where people grow, learn, and see the direct impact of what we
              achieve together.
            </p>
            <p>
              Long-term customer partnerships are built on results. We are
              invested in the success of every project we undertake, delivering
              a standard of service that meets the specific demands of the
              sectors we support.
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-[1300px] flex-wrap justify-center gap-x-[114px] gap-y-16" data-reveal-group>
            {team.map((member) => (
              <div key={member.name} className="group w-[280px] lg:w-[329px]">
                <div className="relative mx-auto w-fit">
                  <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full bg-goal-navy lg:h-[329px] lg:w-[329px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="329px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="absolute -left-[11px] -top-[11px] h-[98px] w-[98px] rounded-full bg-goal-red opacity-50" />
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-goal-red text-white transition-opacity hover:opacity-90"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="mt-6 text-[24px] font-bold leading-[1.2] text-white lg:text-[26px]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[16px] font-light leading-[25px] text-white">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Way We Do Business */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[110px]">
          <SectionPill label="Our Values" variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[720px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            The Way We
            <br />
            do Business
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[1283px] text-[16px] font-light leading-[30px] text-black"
            data-reveal
            data-reveal-delay="120"
          >
            Our values guide every decision, every partnership, and every
            project we undertake. As a veteran-owned and operated company, we
            believe in preparation, accountability, and discipline — principles
            that continue to shape how we support our customers, our partners,
            and each other.
          </p>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {values.map((value) => (
              <div key={value.title} className="group mx-auto max-w-[397px]">
                <div className="mx-auto flex h-[121px] w-[121px] items-center justify-center rounded-full border border-goal-red transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image src={value.icon} alt="" width={60} height={60} />
                </div>
                <h3 className="mt-8 text-[22px] font-bold leading-[1.3] text-black lg:text-[25px]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-black">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
