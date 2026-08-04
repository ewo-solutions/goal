import fs from "node:fs";
import path from "node:path";

const cache = new Map<string, { width: number; height: number }>();

/**
 * Reads an SVG icon's intrinsic size straight from the file.
 *
 * Figma exports each icon at exactly the size it is placed at in the design,
 * so the width/height baked into the export *is* the approved size. Rendering
 * every icon at one shared box instead (66px, say) is what made them look
 * inconsistent: a tall/narrow icon and a short/wide one normalised to the same
 * box end up visually very different weights.
 *
 * Server-side only — these pages are statically generated, so this runs at
 * build time and never ships to the browser.
 */
export function getSvgIntrinsicSize(src: string): { width: number; height: number } {
  const cached = cache.get(src);
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", src);
  const head = fs.readFileSync(file, "utf8").slice(0, 600);
  const w = /\swidth="([\d.]+)"/.exec(head);
  const h = /\sheight="([\d.]+)"/.exec(head);
  if (!w || !h) {
    throw new Error(`getSvgIntrinsicSize: no width/height on the <svg> root of ${src}`);
  }

  const size = { width: parseFloat(w[1]), height: parseFloat(h[1]) };
  cache.set(src, size);
  return size;
}
