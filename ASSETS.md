# Figma asset manifest

All assets listed below are committed under `public/`. Each entry maps the
local path the code expects to the Figma node it was exported from, so exports
can be repeated if the design changes.

Note: two node IDs in the "Who We Are" values section were swapped in an
earlier revision of this file — value-commitment.svg is 2187:6081 (Group 234)
and value-integrity.svg is 2187:6104 (Group 237).

Figma file: `Wkk573fBNNQWxyfleQIejt` (page "Website Mockup FINAL APPROVED DESIGN")

## Global
| Local path | Source node | Notes |
|---|---|---|
| public/images/goal-logo.png | 313:1401 (raw image fill) | GOAL logo, used in header + footer |
| public/icons/flag-us.png | 407:453 | US flag for language/phone selector |
| public/icons/anchor-red.png | 2187:5873 (image 1) | Anchor mark in red section pills |
| public/icons/anchor-white.png | 2187:5896 (image 2) | Anchor mark in white section pills |

## Home page (2187:5839)
| Local path | Source node |
|---|---|
| public/images/hero-ship.png | 2187:5843 (raw image fill) |
| public/images/services-bg.png | 2187:5841 (Rectangle 306 fill) |
| public/images/service-turnkey.png | I2187:5882;18:196 (Rectangle 158) |
| public/images/service-project-management.png | 18:204 (Rectangle 131) |
| public/images/service-project-cargo.png | 18:212 (Rectangle 142) |
| public/images/service-otr-trucking.png | 18:220 (Rectangle 165) |
| public/images/service-rail.png | 18:255 (Rectangle 166) |
| public/images/service-ocean.png | 18:247 (Rectangle 167) |
| public/images/service-air.png | 18:239 (Rectangle 168) |
| public/images/service-barge.png | 18:228 (Rectangle 169) |
| public/images/feature-technical.png | 2187:5906 (Rectangle 217) |
| public/images/feature-cargo.png | 2187:5910 (Rectangle 218) |
| public/images/feature-multimodal.png | 2187:5913 (Rectangle 219) |
| public/images/feature-epc.png | 2187:5916 (Rectangle 220) |
| public/icons/icon-settings.svg | 2187:5909 (iconixto/linear/settings) |
| public/icons/icon-truck.svg | 2187:5919 (iconixto/linear/truck) |
| public/icons/icon-sync.svg | 2187:5920 (iconixto/linear/sync) |
| public/icons/icon-paste.svg | 2187:5921 (iconixto/linear/paste) |
| public/images/why-choose-bg.png | 2187:5840 (Vector map background) |
| public/images/contact-worker.png | 2187:5852 (Rectangle 226) |

Note: the scroll-down mouse indicator (node 2187:5850) was removed from the
home hero on request 2026-08-11, along with its `bob` keyframes. Re-export
from that node if it is ever wanted back.

## Who We Are (2187:5932)
| Local path | Source node |
|---|---|
| public/images/who-we-are-hero.png | 2187:5934 (hero image fill) |
| public/icons/mission-supply-chains.png | 2187:5998 + 2187:6004 (Group 177 circle + image 6) |
| public/icons/mission-opportunities.png | 2187:6002 + 2187:6005 (Group 177 circle + image 7) |
| public/icons/mission-partners.png | 2187:6000 + 2187:6006 (Group 177 circle + image 8) |
| public/images/team-mike-camara.png | 2187:5962 (Rectangle 184) |
| public/images/team-sara-padilla.png | 2187:5988 (Rectangle 185) |
| public/images/team-chuck-paddock.png | 2187:5954 (Rectangle 183) |
| public/images/team-ryan-wendland.png | 2187:5970 (Rectangle 223) |
| public/images/team-jake-minner.png | 2187:5980 (Rectangle 270) |
| public/icons/value-commitment.svg | 2187:6104 (Group 234) |
| public/icons/value-people.svg | 2187:6061 (Group 233) |
| public/icons/value-responsibility.svg | 2187:6085 (Subtract) |
| public/icons/value-integrity.svg | 2187:6081 (Group 237... row 2 col 1) |
| public/icons/value-right-thing.svg | 2187:6119 (Group 238) |
| public/icons/value-prepared.svg | 2187:6101 (Group 236) |

## What We Do (2187:689)
| Local path | Source node |
|---|---|
| public/images/what-we-do-hero.png | 2187:690 (What we do Banner 1) |
| public/images/industry-card-1.png | 2187:2298 + map overlay (Rectangle 315, export whole card bg) |
| public/images/industry-card-2.png | 2187:2299 (Rectangle 316) |
| public/images/industry-card-3.png | 2187:2300 (Rectangle 317) |
| public/images/industry-card-4.png | 2187:691 (Rectangle 318) |
| public/images/industry-card-5.png | 2187:692 (Rectangle 319) |
| public/images/industry-card-6.png | 2187:693 (Rectangle 320) |
| public/icons/commitment-integrity.svg | 2187:3919 (image 3 [Vectorized]) |
| public/icons/commitment-safety.svg | 2187:3922 (image 4 [Vectorized]) |
| public/icons/commitment-sustainability.svg | 2187:3929 (image 5 [Vectorized]) |

Note: the sibling raster nodes (2187:3921/3928/3932, plain "image N") are
hidden fallback layers in the design — the vectorized frames above are the
visible line-icon style used consistently across the site; an earlier export
grabbed the hidden raster instead, causing an icon-weight mismatch that was
fixed 2026-08-04.

## Service pages — hero banners
| Local path | Source node |
|---|---|
| public/images/hero-lead-logistics.png | 2187:3957 (Lead Logistics Provider Banner Image 1) |
| public/images/hero-data-center.png | 2187:4699 (aerial industrial facility construction) |
| public/images/hero-oil-gas.jpg | client-supplied 2026-08-11 (not a Figma export) |
| public/images/hero-wind-energy.png | 2187:4973 (wind turbine) |
| public/images/hero-heavy-haul.png | 2187:5168 (Project and heavy haul 5 1) |
| public/images/hero-in-house.png | 2187:5360 (In-House Support Banner Image) |
| public/images/talk-to-us-hero.png | 2187:5666 (GoAL flag jacket) |

## Service pages — "what you get" icons (66px line icons in red circles)
| Local path | Source node |
|---|---|
| public/icons/llp-planning.svg | 2187:4021 (Group 195) |
| public/icons/llp-integration.svg | 2187:4053 (Subtract) |
| public/icons/llp-readiness.svg | 2187:4062 (Group 197) |
| public/icons/llp-controls.svg | 2187:4101 (Group 200) |
| public/icons/llp-risk.svg | 2187:4123 (image 61 [Vectorized]) |
| public/icons/llp-governance.svg | 2187:4033 (Subtract) |
| public/icons/dc-warehousing.svg | 2187:4897 → within Group 243 (image 17 area, node 2187:4756) |
| public/icons/dc-trucking.svg | 2187:4757 (image 18) |
| public/icons/dc-staging.svg | 2187:4758 (image 19) |
| public/icons/dc-wms.svg | 2187:4769 (image 20) |
| public/icons/dc-rigging.svg | 2187:4770 (image 21) |
| public/icons/dc-intersite.svg | 2187:4771 (image 22) |
| public/icons/og-rig-moves.svg | 2187:4897 (Group 206) |
| public/icons/og-offshore.svg | 2187:4891 (Group 204) |
| public/icons/og-supply-base.svg | 2187:4874 (Group 203) |
| public/icons/og-heavy-lift.svg | 2187:4938 (image 63 [Vectorized]) |
| public/icons/og-hazmat.svg | 2187:4903 (image 62 [Vectorized]) |
| public/icons/og-emergency.svg | 2187:4957 (image 64 [Vectorized]) |
| public/icons/wind-route-planning.svg | 2187:5077 (image 65 [Vectorized]) |
| public/icons/wind-transport.svg | 2187:5094 (image 66 [Vectorized]) |
| public/icons/wind-sequencing.svg | 2187:5038 (Group 215) |
| public/icons/wind-marshalling.svg | 2187:5059 (Group 218) |
| public/icons/wind-port.svg | 2187:5133 (image 68 [Vectorized]) |
| public/icons/wind-offshore.svg | 2187:5110 (image 67 [Vectorized]) |
| public/icons/haul-route-engineering.svg | 2187:5249 (Group 224) |
| public/icons/haul-permits.svg | 2187:5234 (Group 221) |
| public/icons/haul-transport.svg | 2187:5298 (image 70 [Vectorized]) |
| public/icons/haul-spmt.svg | 2187:5275 (image 69 [Vectorized]) |
| public/icons/haul-positioning.svg | 2187:5226 (image 21) |
| public/icons/haul-high-value.svg | 2187:5332 (image 71 [Vectorized]) |
| public/icons/ih-embedded.svg | 2187:5425 (Group 225) |
| public/icons/ih-expediting.svg | 2187:5442 (Group 231) |
| public/icons/ih-verification.svg | 2187:5467 (Subtract) |
| public/icons/ih-monitoring.svg | 2187:5484 (Group 227) |
| public/icons/ih-freight.svg | 2187:5514 (image 72 [Vectorized]) |
| public/icons/ih-reporting.svg | 2187:5506 (Group 230) |

## Copy marked TBA in the design (needs client input)
- Talk To Us: branch office details for Baton Rouge / Lafayette / Rayville are "TBA".

## Service page copy source
All service page body/heading text in `lib/servicePages.ts` was replaced on
2026-07-27 with client-provided, SEO-reviewed copy (six .docx files, one per
service). This also resolved the previous "TBA" placeholder on the In-House
Support & Expediting page — its "what you get" heading is now "Active Field
Oversight". Page titles (H1), section pills, icons, and images were left
untouched; only description/body copy and a few "what you get" item titles
that the new copy explicitly renamed were updated.

## Icon sizing rule (important — do not "normalise" these)
Every line icon renders at the **intrinsic width/height baked into its SVG**,
which is exactly the size Figma places it at. `components/CircleIcon.tsx` reads
those numbers off the file at build time via `lib/iconMeta.ts`.

Two traps that produced three rounds of "the icons are the wrong size" QC:

1. **Do not scale them all to a shared box** (66px, `object-contain`, etc).
   Figma sizes each icon individually — placed sizes range from 41x55 to 83x83.
   Forcing a tall/narrow icon and a short/wide one into the same square makes
   them read as noticeably different weights.
2. **Set both width and height in `style`, not just as attributes.** Tailwind's
   preflight ships `img, video { max-width: 100%; height: auto }`, and that
   `height: auto` overrides the height *attribute*. The icon then renders at
   `width x its own aspect ratio` and any `object-fit` is a no-op — which is
   what silently stretched llp-planning, llp-integration and og-rig-moves.

### Locally tightened viewBoxes
`haul-transport.svg` and `haul-spmt.svg` came out of Figma as vectorised traces
on padded canvases (136x146 and 122x122, only ~53% of which is artwork), so at
their placed size they overflowed the 121px circle. Their `viewBox` and
width/height were tightened to the artwork bounds; the artwork renders at the
same scale as before, it just no longer carries the empty margin. **If either
is re-exported from Figma, re-tighten it** or it will overflow again.

## Hero banner positioning
`PageHero` uses `object-cover object-bottom`. In Figma every hero photo is sized
to the band width and pinned to the band's *bottom* edge (image bottoms all land
at y≈770-781 on the service pages, y≈675 on What We Do / Who We Are), so the
crop only ever removes from the top. The CSS default of centring cuts the
subject off at the bottom.

Note: the In-House Support banner is drawn on a taller band in Figma (1728x767,
aspect 2.25) than the other five service pages (aspect 2.65-2.85, which the
523px band matches). Its photo is therefore uncropped in the mockup but still
loses ~18% off the top on the site. Raising that one page's band to match would
make its hero taller than every other page — flagged to the client rather than
changed unilaterally.

## Hero band height
`PageHero` sizes the band from the design's banner aspect
(`clamp(523px, 100vw/2.7, 720px)` at lg) rather than a fixed height. A fixed
523px only matched the design around 1440px wide — at 1920 the band became a
3.67 letterbox and `object-cover` discarded ~49% of the photo, which is what
made the Oil & Gas rig still read as "zoomed in" on wide monitors even after
the full source photo was swapped in. The floor keeps small laptops as they
were; the cap stops the hero swallowing very large displays.

## Service page data blocks
The "Logistics That Deliver" cards are top-aligned (`justify-start`) with two
lines always reserved for the title, so headings and body copy start at the
same height on every card. Card heights are pinned per breakpoint
(`lg:366 / xl:310 / 2xl:254`) because the card width — and therefore how the
copy wraps — changes with the viewport, so no single value equalises them.
Those numbers are the measured tallest card across all six service pages at
each breakpoint; **if the card copy is edited, re-measure and update them**,
otherwise the blocks stop matching.
