import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionPill from "@/components/SectionPill";
import SectionDivider from "@/components/SectionDivider";
import ContactSection from "@/components/ContactSection";
import { servicePages } from "@/lib/servicePages";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        pill={page.hero.pill}
        title={page.hero.title}
        titleBold={page.hero.titleBold}
        image={page.hero.image}
      >
        <p className="mx-auto mt-8 max-w-[1310px] text-[16px] font-light leading-[30px] text-white lg:text-[18px] lg:leading-[35px]">
          {page.hero.body}
        </p>
      </PageHero>

      {/* Logistics that deliver — glass cards over map */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/why-choose-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="relative mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[100px]">
          <SectionPill label={page.deliver.pill} variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[1028px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            {page.deliver.heading}
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[1002px] text-[16px] font-light leading-[30px] text-black lg:text-[18px] lg:leading-[35px]"
            data-reveal
            data-reveal-delay="120"
          >
            {page.deliver.body}
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-10" data-reveal-group>
            {page.deliver.cards.map((card) => (
              <div
                key={card.title}
                className="fx-lift w-full max-w-[446px] rounded-[25px] border-[0.5px] border-goal-navy bg-white/5 px-10 py-14 shadow-[3px_3px_10px_0px_rgba(9,30,38,0.25)] backdrop-blur-[2.5px] sm:w-[calc(50%-20px)] lg:w-[calc(33.3%-27px)]"
              >
                <h3 className="text-[24px] font-bold leading-[1.2] text-goal-red lg:text-[26px]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[30px] text-black lg:text-[18px] lg:leading-[35px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1580px] px-6 py-16 text-center lg:px-10 lg:py-[100px]">
          <SectionPill label={page.whatYouGet.pill} variant="red" data-reveal="zoom" />
          <h2
            className="mx-auto mt-8 max-w-[1028px] text-[36px] font-bold capitalize leading-[1.2] text-goal-navy lg:text-[55px]"
            data-reveal
          >
            {page.whatYouGet.heading}
          </h2>
          <SectionDivider variant="red" className="mt-8" />
          <p
            className="mx-auto mt-8 max-w-[1434px] text-[16px] font-light leading-[30px] text-black lg:text-[18px] lg:leading-[35px]"
            data-reveal
            data-reveal-delay="120"
          >
            {page.whatYouGet.body}
          </p>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {page.whatYouGet.items.map((item) => (
              <div key={item.title} className="group mx-auto max-w-[397px]">
                <div className="mx-auto flex h-[121px] w-[121px] items-center justify-center rounded-full border border-goal-red transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image src={item.icon} alt="" width={66} height={66} />
                </div>
                <h3 className="mt-8 text-[22px] font-bold leading-[1.3] text-black lg:text-[25px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-black">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
