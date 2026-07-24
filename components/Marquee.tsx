const phrases = [
  "Built on Safety",
  "Driven by Trust",
  "Swift Solutions",
  "Real Results",
  "Nationwide Strength",
  "Worldwide Partnerships",
  "Precise Execution",
];

export default function Marquee() {
  const row = [...phrases, ...phrases];
  return (
    <div className="flex h-[100px] items-center overflow-hidden bg-gradient-to-r from-goal-red to-goal-navy lg:h-[144px]">
      <div className="animate-marquee flex w-max items-center gap-[40px] whitespace-nowrap lg:gap-[61px]">
        {row.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center gap-[40px] text-[24px] font-light text-white lg:gap-[61px] lg:text-[35px]"
          >
            {phrase}
            <span aria-hidden>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
