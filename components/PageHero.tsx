import Image from "next/image";
import SectionPill from "@/components/SectionPill";

export default function PageHero({
  pill,
  title,
  titleBold,
  image,
  children,
}: {
  pill: string;
  /** Regular-weight first line (optional) */
  title?: string;
  /** Bold line of the heading */
  titleBold: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-goal-navy lg:min-h-[523px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="fx-hero-zoom object-cover object-[center_35%]"
      />
      {/* Two navy-to-transparent gradients matching the home page hero: top-to-bottom and left-to-right */}
      <div className="absolute inset-0 bg-gradient-to-b from-goal-navy to-goal-navy/0" />
      <div className="absolute inset-0 bg-gradient-to-r from-goal-navy to-goal-navy/0" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-20 text-center" data-reveal-group>
        <SectionPill label={pill} variant="white" />
        <h1 className="mt-10 text-[34px] capitalize leading-[1.1] text-white sm:text-[44px] lg:text-[60px]">
          {title && (
            <>
              {title}
              <br />
            </>
          )}
          <span className="font-bold">{titleBold}</span>
        </h1>
        {children}
      </div>
    </section>
  );
}
