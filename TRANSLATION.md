# Site translation

## Current state — read this first

The footer language selector (`components/LanguageSelector.tsx`) drives
Google's legacy **"Website Translator"** widget, mounted once in
`app/layout.tsx` (`#google_translate_element`, hidden — our own dropdown
replaces its default UI). This is **on-the-fly machine translation of the
live page**, not real per-language content: there is no translated copy
stored anywhere in the codebase, no `[locale]` routing, and no separate
`/es`, `/fr`, etc. URLs. Google's script rewrites the DOM in the browser
after the English page has loaded.

This was a deliberate, fast option chosen over building native translated
pages (which would mean writing and maintaining real copy — services, team
bios, everything — in all seven languages). The trade-offs to be aware of:

- **Translation quality is machine quality**, unreviewed. Logistics jargon —
  SPMT, breakbulk, OOG cargo, lift plans — is exactly the kind of term
  machine translation tends to garble or translate too literally. Worth a
  native-speaker spot check per language before leaning on this for anything
  client-facing beyond "gives a visitor the gist."
- **It's built on a discontinued Google product.** "Google Translate for
  Websites" stopped accepting new signups in 2019; the underlying
  `translate.google.com/translate_a/element.js` embed used here still works
  for existing integrations (verified working as of this writing), but Google
  could disable or change it without notice, since it is not an officially
  supported product any more. If it breaks, the selector fails safe — the
  page simply stops translating rather than erroring — but the fix at that
  point would be swapping to a maintained paid service (Google Cloud
  Translation API behind a proper backend, or a hosted product like Weglot or
  Localize) rather than a patch to this integration.
- **Legal pages are excluded on purpose.** Terms & Conditions, Privacy
  Policy, and Cookies Policy keep their English text no matter which language
  is selected (see below) — GoAL asked for this specifically, to avoid
  publishing unreviewed machine-translated contract language.

## How it works

1. `app/layout.tsx` loads Google's `element.js` and initializes it with
   `pageLanguage: 'en'` and the six `includedLanguages` GoAL asked for
   (`es, zh-CN, de, fr, it, ja`). Its own dropdown UI is hidden — the whole
   host `<div>` is positioned off-screen.
2. `components/LanguageSelector.tsx` (the footer flag dropdown) writes
   Google's own `googtrans` cookie (`/en/<code>`) when a language is chosen,
   then does a full page reload. Google's script reads that cookie on load
   and translates the page into the chosen language. Selecting English again
   clears the cookie and reloads back to the original text.
3. A full reload is used deliberately rather than the common "flip Google's
   hidden `<select>` and dispatch a change event" trick — that works for a
   single static page but doesn't reliably survive this site's client-side
   route changes between pages, since the widget's DOM rewriting doesn't
   re-run itself. The cookie persists across the whole browsing session, so
   the language sticks across ordinary in-site navigation without needing to
   reselect it on every page.
4. `app/globals.css` has a "Google Translate widget cleanup" block that hides
   the banner iframe Google injects at the top of the page and the `body {
   top: 40px }` offset that comes with it, plus the little highlight/tooltip
   it puts on translated words — all so the page looks unchanged once a
   language is active.

## What's excluded from translation

- **The language selector itself** (`.notranslate` on the button and the
  list) — otherwise Google would translate the language *names*, which
  defeats the point of a language picker.
- **Terms & Conditions, Privacy Policy, Cookies Policy** — `LegalContent`
  wraps the actual legal text in `translate="no"` / `.notranslate`. The
  "Last updated" notice above it is deliberately left translatable, so a
  non-English visitor still gets, in their own language, a note explaining
  that the legal text is English-only and who to contact about it.

To exclude anything else in the future (a quote, a registered trademark, an
address), wrap it the same way:

```tsx
<span translate="no" className="notranslate">…</span>
```

## Making this a "real" (native content) translation later

If GoAL wants proper per-language pages down the line rather than live
machine translation, that's a materially bigger project: routing under
`app/[locale]/...` (e.g. via `next-intl`), a translated string/content
dictionary per language, and translated legal documents reviewed by counsel
in each language, plus `hreflang` tags for SEO. None of that exists yet —
today's setup is the widget described above.
