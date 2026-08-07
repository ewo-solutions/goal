# Dr Sandeep Kumar — WordPress theme

A hand-coded WordPress theme whose home page mirrors the reference design:
layout, spacing, type scale, colours, backgrounds and scroll effects are
built to the reference's own measured values rather than approximated.

The home page is **not** built with a page builder. That's deliberate —
going through Elementor's widget system caps how closely the layout can be
matched, because it emits its own DOM and CSS. Hand-coding it is what makes
the exact match possible. Every *other* page still runs through `page.php`
with a normal `the_content()` loop, so you can keep using Elementor or the
block editor everywhere else.

## Install

1. Zip the `dr-sandeep-kumar` folder and upload via **Appearance → Themes →
   Add New → Upload Theme**, then **Activate**.
2. That's it — the home page renders immediately with placeholder imagery.
   No page builder, no template import, no starter content to load.
3. **Appearance → Customize → Site Identity** for the logo, **Menus** for
   the header nav, and **Home Page Content** for contact/social/footer.

If your site uses a static front page, WordPress will use `front-page.php`
automatically. Nothing to configure.

## Editing content

All home page copy, links and images live in one file:
**`inc/home-content.php`**. It's a single `dsk_home()` array, one block per
section, with inline comments. Change text directly; for images, paste a
URL from your Media Library (Media → select the item → *Copy URL to
clipboard*) in place of the `dsk_ph( ... )` placeholder call.

Contact email, phone, social links and the footer are in
**Appearance → Customize** (they're shared with the header/footer, not just
the home page).

## Replacing the placeholders

The theme ships neutral SVG placeholders at the reference's real
dimensions, so the layout reads correctly before you have artwork:

| Slot | Size | File |
|---|---|---|
| Hero background | 1920×900 | `placeholder-hero.svg` |
| Portrait (about) | 560×666 | `placeholder-portrait.svg` |
| Service tiles | 360×344 | `placeholder-service-tile.svg` |
| Course photo | 620×470 | `placeholder-mastering.svg` |
| Story photo | 700×620 | `placeholder-story.svg` |
| Network photo | 560×500 | `placeholder-network.svg` |
| Interview stills | 330×220 | `placeholder-interview.svg` |
| Charity photo | 640×470 | `placeholder-charity.svg` |
| Charity logo | 300×70 | `placeholder-charity-logo.svg` |
| Partner logos | 170×62 | `placeholder-partner-logo.svg` |
| Award badges | 100×100 | `placeholder-badge.svg` / `-badge-dark.svg` |
| Global backdrop | 1440×558 | `placeholder-global-bg.svg` |
| Misty backdrop | 1440×700 | `placeholder-mist-bg.svg` |

Achievement icons are inline SVG line-icons (`dsk_line_icon()` in
`inc/template-tags.php`), not images.

Match those aspect ratios and everything drops in without reflowing.

**Hero video**: set `hero → video` in `inc/home-content.php` to an MP4 URL
and it plays full-bleed behind the headline, with the still as its poster.
Leave it empty to use the still image.

**Global-speaker backdrop**: the reference uses a photograph there. Set
`global → background` to an image URL; otherwise a matching deep-navy
gradient is used.

## What matches, and what needs your assets

Built to the reference's measured values:

- **Header** — navy pill "☰ Menu" toggle top-left opening a slide-in panel,
  with "Contact Me" and social marks top-right. No inline nav bar.
- **Hero** — a 670px full-bleed video band with no overlaid copy, as the
  reference renders it.
- **Services** — four full-bleed tiles, edge to edge with no gutters, the
  label set over a darkened photo.
- **Type scale** — the 60px/700 signature section heading
  (letter-spacing 1.61px, line-height 1.13), the 90px display line, 40/26/20px
  secondary headings, 15px/500 body, 12.5px/800 tracked eyebrow labels.
- **Palette** — `#00255c`, `#002159`, `#032b6a`, `#062b66`, `#f8f8f8`, `#494949`.
- **Section grouping** — the partner strip, about and services share one
  diagonal `#191919 → #00255c` gradient with a light-bloom bottom-left; the
  quote, story, achievements and network share one off-white field, exactly
  as the reference groups them.
- **Section rhythm** — each section's real top/bottom padding, and the
  1276px content column.
- **Arrow-link CTAs** — an outlined circle-chevron *before* the label (the
  reference's order), shifting on hover; not solid buttons.
- **Signature script** — the reference uses a licensed handwriting face for
  the name, straplines and footer mark. Sacramento (Google Fonts) stands in;
  swap `--script` in `home.css` if you license the original.
- **Pill form fields** — centred, 40px radius, navy hairline border.
- **Scroll reveals** — staggered fade-up, the same effect the reference gets
  from WOW.js, here via IntersectionObserver. Gated on a `js` class so
  content is never hidden from crawlers or no-JS visitors.

Needs your own assets (not bundled — the originals belong to the reference
site and to a real person):

- Photography, partner/award logos, and the hero video.
- Two backdrops the reference uses as images — the dark group's texture
  overlay and the global-speaker photo — are reproduced here as CSS
  gradients that read the same at a glance. Swap in real images any time.

## File structure

```
dr-sandeep-kumar/
├── style.css                  Theme header (required by WordPress)
├── functions.php              Setup, asset enqueue, [dsk_enquiry_form], mail handler
├── header.php / footer.php    Site chrome — nav, logo, social, back-to-top
├── front-page.php             Home page: assembles the sections below
├── page.php / index.php       the_content() loop — Elementor/blocks work here
├── inc/
│   ├── home-content.php       ← all home page copy, links and images
│   ├── content-schema.php     Customizer field definitions + defaults
│   ├── customizer.php         Registers the Customizer controls
│   └── template-tags.php      dsk_mod() helper, social icon SVGs
├── template-parts/
│   ├── enquiry-form.php       Contact form markup ([dsk_enquiry_form])
│   └── home/                  One file per background group, mirroring the
│       ├── hero.php             reference's own section grouping
│       ├── dark-group.php       (partners + about + services)
│       ├── mastering.php
│       ├── light-band.php       (quote + story + achievements + network)
│       ├── global.php
│       ├── interviews.php
│       ├── series-charity.php
│       └── enquiry.php          (+ Instagram banner)
└── assets/
    ├── css/main.css           Header/footer/back-to-top/form chrome
    ├── css/home.css           Home page — the reference-matched styling
    ├── js/main.js             Sticky header, mobile nav, back-to-top, reveals
    └── images/                Placeholder SVGs
```

## Contact form

`[dsk_enquiry_form]` renders the form anywhere (it's already on the home
page). It posts to `admin-post.php` and emails the address set in
Customize → Contact via `wp_mail()` — no plugin needed. Includes a nonce
and a honeypot; no CAPTCHA is wired up.

## Notes

- Typography is Urbanist (Google Fonts, enqueued in `functions.php`).
- `home.css` only loads on the front page.
- No build step — plain PHP, CSS and vanilla JS.
- Colours are CSS custom properties at the top of `home.css` if you want to
  re-theme.
