import Image from "next/image";
import { getSvgIntrinsicSize } from "@/lib/iconMeta";

/**
 * Renders a line icon at the exact size Figma placed it at.
 *
 * Two things here are load-bearing and easy to undo by accident:
 *
 * 1. The size comes from the SVG's own width/height, not a shared constant.
 *    Figma sizes each icon individually; forcing them all into one box is what
 *    made some read as heavier than others.
 * 2. Both dimensions are locked in `style`. Tailwind's preflight applies
 *    `img, video { max-width: 100%; height: auto }`, and that `height: auto`
 *    beats the height *attribute* — so without an inline height the icon gets
 *    resized to `width x its own aspect ratio` and `object-contain` never gets
 *    a chance to do anything. `max-w-none` disarms the matching `max-width`.
 * 3. `mix-blend-multiply` hides the opaque near-white backdrop that ten of the
 *    vectorised icons carry (a full-canvas rect baked into the trace). It was
 *    showing as a block flashing behind the icon during the hover scale. The
 *    backdrop cannot simply be deleted from the files — those traces interleave
 *    white shapes with the line art, so removing them breaks the artwork. Every
 *    section these icons sit in has a white background, where multiply leaves
 *    the strokes untouched and makes the white backdrop disappear.
 */
export default function CircleIcon({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const { width, height } = getSvgIntrinsicSize(src);

  return (
    <Image
      src={src}
      alt=""
      width={Math.round(width)}
      height={Math.round(height)}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`max-w-none shrink-0 mix-blend-multiply ${className}`}
    />
  );
}
