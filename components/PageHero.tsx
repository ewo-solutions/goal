import Image from "next/image";
import SectionPill from "@/components/SectionPill";

export default function PageHero({
  pill,
  title,
  titleBold,
  image,
  imagePosition = "object-bottom",
  children,
}: {
  pill: string;
  /** Regular-weight first line (optional) */
  title?: string;
  /** Bold line of the heading */
  titleBold: string;
  image: string;
  /** Tailwind object-position class; defaults to the bottom-anchored crop */
  imagePosition?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-goal-navy lg:min-h-[523px]">
      {/* Bottom-anchored to match the design: in Figma every hero photo is sized
       * to the band width and pinned to the band's bottom edge, so the crop only
       * ever takes off the top. Centering it (the CSS default) cuts the subject
       * off at the bottom — which is what made the In-House Support banner lose
       * most of the foreground figure. */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`fx-hero-zoom object-cover ${imagePosition}`}
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
