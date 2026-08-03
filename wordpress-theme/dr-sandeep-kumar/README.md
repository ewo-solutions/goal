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
3. Create a Page (e.g. titled "Home"), edit it with Elementor, and build
   your layout.
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
└── assets/
    ├── css/main.css           Header/footer/back-to-top/contact-form styles only
    └── js/main.js             Sticky header, mobile nav, back-to-top
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
