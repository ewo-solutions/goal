# Dr Sandeep Kumar Home — WordPress theme (Elementor-ready)

This theme provides the **coded chrome** around a page you build visually in
Elementor: a sticky header/nav, footer, back-to-top button, and a
`[dsk_enquiry_form]` contact-form shortcode. It intentionally does **not**
hard-code the home page's sections (hero, services, testimonial, etc.) —
that content is built and edited in the Elementor page editor, which is
what makes it drag-and-drop editable.

## How it fits together

- `page.php` and `index.php` are a normal WordPress Loop that calls
  `the_content()` — this is the hook Elementor uses to take over a page's
  content. There's no `front-page.php`; whichever Page you set as the
  static front page (Settings → Reading) renders through `page.php`.
- Build that page's content entirely in the Elementor editor: **Pages →
  Add New → Edit with Elementor**.
- For the contact form, add a **Shortcode** widget (or **HTML** widget)
  anywhere in the layout and enter `[dsk_enquiry_form]`. It submits to
  `admin-post.php` and emails the address set in Customize → Contact —
  no Elementor Pro / Forms add-on required.
- If you want the header's "Contact Me" button to scroll to that section,
  give the Elementor section/container holding the form a **CSS ID** of
  `enquiry` (Advanced tab in Elementor).

## Install

1. Zip the `dr-sandeep-kumar` folder (this directory) and upload it via
   **Appearance → Themes → Add New → Upload Theme**, then **Activate**.
2. Install and activate the **Elementor** plugin (Plugins → Add New →
   search "Elementor").
3. Create a Page (e.g. titled "Home") and edit it with Elementor. Either
   build your layout from scratch, or start from the bundled starter
   template — see below.
4. **Settings → Reading** → "A static page" → set that page as the
   **Homepage**.
5. **Appearance → Customize**:
   - **Site Identity** — logo, used in the header and footer.
   - **Menus** — build the "Primary Menu" for header nav (optional; falls
     back to a single "Home" link if none is assigned).
   - **Contact** — the email address `[dsk_enquiry_form]` sends to, and a
     phone number if you want one elsewhere on the page.
   - **Social Links** — Instagram / Facebook / LinkedIn URLs shown as
     icons in the header and footer.
   - **Footer** — copyright line and an optional credit line/link.

## Starter template

`starter-template/dr-sandeep-kumar-home.json` is a full home-page layout —
hero, partner-logo strip, about, services, a course CTA, testimonial, a
longer bio section, an achievements grid, a network CTA, a "global speaker"
strip, video-interview cards, a video-series CTA, a charity CTA, an
Instagram banner, and the `[dsk_enquiry_form]` contact form — built as
real Elementor sections/widgets so it's fully editable after import (not
a screenshot or a locked block). Every photo/logo slot is an Elementor
Image widget left empty, which renders Elementor's own placeholder
graphic until you swap in real images.

### How the styling works

The template pairs with `assets/css/reference.css`, which the theme loads
automatically. The template assigns `dsk-*` CSS classes to its containers
and widgets; that stylesheet then supplies the exact reference values —
read out of the original site's own CSS, not eyeballed:

- **Type scale** — the signature 60px/700 section heading
  (letter-spacing 1.61px, line-height 1.13), the 90px display line, 40px
  and 26px secondary headings, 15px/500 body copy, and 12.5px/800
  tracked-out eyebrow labels.
- **Palette** — `#00255c` navy, `#032b6a` deep navy, `#f8f8f8` off-white,
  `#494949` caption grey.
- **The shared gradient group** — the reference wraps its logo strip,
  about and services sections in *one* diagonal gradient
  (`#191919 → #00255c`) with a soft light-bloom bottom-left, rather than
  giving each section its own background. The template nests those three
  sections inside a single container so this reproduces faithfully.
- **Arrow-link CTAs** — the reference's primary buttons aren't solid
  blocks; they're a text label followed by an outlined circle-chevron that
  shifts on hover.
- **Pill form fields** — centred text, 40px radius, navy hairline border.
- **Section rhythm** — each section's exact top/bottom padding.
- **Entrance animations** — staggered `fadeInUp` on sections and card
  grids: Elementor's equivalent of the reference's WOW.js scroll reveals.

Styling lives in CSS rather than in Elementor's per-element settings
because several of these have no equivalent in Elementor's widget controls
at all — a gradient spanning a group of sections, the circle-chevron
buttons, the pill inputs. Content stays fully editable in Elementor either
way. Every rule is scoped to a `dsk-` class, so nothing leaks into other
pages or widgets you add yourself. To restyle, edit
`assets/css/reference.css` — the colours are CSS custom properties at the
top of the file.

Note on selector specificity: those rules are written as
`.elementor-widget.dsk-x .target`. Elementor's Default Kit styles headings
with `.elementor-widget-heading .elementor-heading-title` and its
stylesheet loads after the theme's, so an equal-specificity rule loses and
everything silently inherits the kit's default accent colour. The extra
class wins it back without `!important`.

### What this can't match

Two things are outside what a template file can carry, and both need your
own assets:

- **Imagery** — the reference's photography, partner logos and hero video
  belong to the original site and aren't bundled. Every image slot is an
  empty Elementor Image widget showing a placeholder until you upload
  yours. The hero is a flat dark panel where the reference plays a Vimeo
  background video; add one with a background-video plugin or an Elementor
  Pro section background if you want that.
- **Two background textures** — the reference overlays a texture PNG on
  the dark group and uses a photographic backdrop on the global-speaker
  band. Both are reproduced here as CSS gradients that read the same at a
  glance; swap in real images via Elementor's Style → Background on those
  sections if you have them.

To use it:

1. Create/open the Page you're using as the homepage, **Edit with
   Elementor**.
2. Open the **folder icon** (Templates) in the editor → **My Templates**
   tab → **Import Template** → choose `dr-sandeep-kumar-home.json`.
3. Once it appears in the list, click **Insert** to add it to the page.
4. Replace the placeholder images and link URLs with your own, and edit
   any copy you want to change — everything is a normal, editable
   Elementor element.

This was authored directly as Elementor's container/widget JSON schema and
verified against a real WordPress + Elementor install (imported through
Elementor's own importer, and the resulting page checked for layout and
PHP errors) rather than just written by hand and assumed to work.

## File structure

```
dr-sandeep-kumar/
├── style.css                  Theme header (required by WordPress)
├── functions.php              Theme setup, asset enqueue, [dsk_enquiry_form]
│                               shortcode, contact-form email handler
├── header.php / footer.php    Site chrome — nav, logo, social, back-to-top
├── page.php / index.php       Standard the_content() loop (Elementor hooks here)
├── inc/
│   ├── content-schema.php     Customizer field definitions + defaults
│   ├── customizer.php         Registers the Customizer controls
│   ├── home-content.php       Footer quick-links array (edit directly)
│   └── template-tags.php      dsk_mod() helper, social icon SVGs
├── template-parts/
│   └── enquiry-form.php       Markup rendered by [dsk_enquiry_form]
├── assets/
│   ├── css/main.css           Header/footer/back-to-top/contact-form styles
│   ├── css/reference.css      Reference-match layer for the starter template
│   └── js/main.js             Sticky header, mobile nav, back-to-top
└── starter-template/
    └── dr-sandeep-kumar-home.json   Importable Elementor home-page layout
```

Elementor renders its own CSS/JS for whatever you build in the editor —
`main.css`/`main.js` here only ever touch the coded chrome, so there's no
overlap or conflict to worry about.

## Notes

- No page-content-related Customizer fields or placeholder-image logic are
  included (there's nothing to be a placeholder for) — all of that is now
  the Elementor page's own content, images and styling.
- Typography default is Urbanist (Google Fonts, enqueued in
  `functions.php`) for the chrome; set Elementor's own Site Settings →
  Global Fonts to match if you want page content to use the same face.
- No build step / bundler on the theme side — plain PHP, CSS and vanilla
  JS for the chrome.
