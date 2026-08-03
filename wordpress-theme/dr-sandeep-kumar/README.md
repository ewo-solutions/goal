# Dr Sandeep Kumar Home — WordPress theme

A **home page only** WordPress theme, structured after the section layout of
drsandeepkumar.co.uk: hero with a typewriter headline, partner logo strip,
bio, four service cards, a course/network CTA banner, testimonial, a longer
story section, an achievements grid, a "global speaker" strip, video
interview cards, a charity CTA, an Instagram banner, and a contact form.
Every other URL on the site (including individual WordPress Pages) also
renders this same home page — there are no other templates.

## Install

1. Zip the `dr-sandeep-kumar` folder (this directory).
2. In WordPress: **Appearance → Themes → Add New → Upload Theme**, upload
   the zip, then **Activate**.
3. Go to **Appearance → Customize → Home Page Content**. Every section has
   its own panel there for headings, body copy, links, contact details,
   social URLs and photo uploads.
4. Set **Appearance → Menus** to build the "Primary Menu" (used in the
   header nav and mobile menu). Optional — the header falls back to a
   single "Home" link if no menu is assigned.
5. Set a **Site Identity → Logo** under Customize for the header/footer
   logo, or the site title is used as text instead.

## What's editable where

- **Single values** (headings, paragraphs, contact email/phone, social
  links, most photos) — Customize → Home Page Content.
- **Repeating lists** — partner logos, the 4 service cards, the 4
  achievement cards, the list of speaking locations, and the 4 video
  interview cards — have no Customizer UI (it has no repeater control).
  Edit the PHP arrays directly in `inc/home-content.php`; each entry is a
  plain array with a label/URL and a Media Library attachment ID (find an
  ID by opening an image in the Media Library and reading it from the URL
  bar, or `0` to leave the placeholder graphic in place).
- **Contact form**: submits to `admin-post.php` and emails the address set
  under Contact → "Enquiries go to this email" via `wp_mail()`. No plugin
  required. It has a honeypot field and a nonce; no CAPTCHA is wired up.

## Photos and video

Every image slot renders a navy/blue placeholder box with a label until you
upload a real file, so the page never looks broken before content is added.
None of the reference site's actual photography, logos or video are bundled
in this theme — add your own via the Customizer image controls or the
Media Library IDs in `inc/home-content.php`.

The hero accepts either an MP4 URL (`Hero → Background video URL`) or a
static poster image; if neither is set it shows a placeholder.

## File structure

```
dr-sandeep-kumar/
├── style.css                  Theme header (required by WordPress)
├── functions.php              Theme setup, asset enqueue, contact-form handler
├── header.php / footer.php    Site chrome
├── front-page.php             Assembles every home-page section, in order
├── index.php / page.php       Fallbacks — both just load front-page.php
├── inc/
│   ├── customizer.php         Registers all Customizer panels/controls
│   ├── home-content.php       Repeating content arrays (see above)
│   └── template-tags.php      View helpers: placeholders, icons, arrow
├── template-parts/home/       One file per section
└── assets/
    ├── css/main.css           All styling (CSS variables at the top)
    └── js/main.js             Sticky header, mobile nav, reveal-on-scroll,
                                back-to-top, hero typewriter
```

## Notes

- Typography is Urbanist (Google Fonts, enqueued in `functions.php`);
  colours are CSS custom properties at the top of `assets/css/main.css` —
  change `--navy`, `--blue`, etc. there to re-theme the whole site.
- No build step / bundler — plain PHP, CSS and vanilla JS, so it installs
  and runs as-is.
- No `screenshot.png` is included; add one (1200×900) if you want a preview
  in the Themes screen.
