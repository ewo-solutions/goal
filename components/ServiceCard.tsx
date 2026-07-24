import Image from "next/image";

export default function ServiceCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative aspect-[346/442] w-full overflow-hidden rounded-[20px] bg-goal-navy">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[rgba(163,12,12,0)] to-goal-red mix-blend-multiply" />
      <p className="absolute bottom-[8.6%] left-[9.8%] right-[9.5%] text-[26px] font-bold leading-[1.2] text-white">
        {title}
      </p>
    </div>
  );
}
