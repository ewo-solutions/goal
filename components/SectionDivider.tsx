export default function SectionDivider({
  variant = "red",
  className = "",
}: {
  variant?: "red" | "white";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`mx-auto h-[3px] w-[133px] rounded-full ${
        variant === "red" ? "bg-goal-red" : "bg-white"
      } ${className}`}
    />
  );
}
