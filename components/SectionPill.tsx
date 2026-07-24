import Image from "next/image";

export default function SectionPill({
  label,
  variant = "red",
  ...rest
}: {
  label: string;
  variant?: "red" | "white";
} & React.HTMLAttributes<HTMLDivElement>) {
  const isRed = variant === "red";
  return (
    <div
      {...rest}
      className={`inline-flex items-center justify-center gap-[10px] rounded-full border px-[15px] py-[2px] ${
        isRed ? "border-goal-red text-goal-red" : "border-white text-white"
      }`}
    >
      <Image
        src={isRed ? "/icons/anchor-red.png" : "/icons/anchor-white.png"}
        alt=""
        width={19}
        height={22}
        className="h-[22px] w-[19px] object-contain"
      />
      <span className="text-[18px] capitalize leading-normal lg:text-[22px]">{label}</span>
    </div>
  );
}
