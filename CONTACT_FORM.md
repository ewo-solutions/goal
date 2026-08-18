# Contact form & captcha

## Current state — read this first

The contact form (`components/ContactSection.tsx`, used on five pages) does
**not** submit to a server. On submit it builds a `mailto:` link and hands off
to the visitor's own email client:

```ts
window.location.href = `mailto:${site.email}?subject=...&body=...`;
```

There are no route handlers and no server actions anywhere in the project.

**The Turnstile widget on the form is therefore presentation only.** It was
added on request so a captcha is visibly present. It does not currently block
spam, and it is important nobody assumes otherwise:

- Turnstile works by issuing a token that your **server** validates against
  Cloudflare's `siteverify` endpoint. There is no server here, so nothing
  validates the token.
- The widget gates the Submit button in the browser. Anyone with JavaScript
  disabled, or using `curl`, bypasses it completely.
- There is no endpoint to POST to in the first place, so the form is not
  currently a spam vector. Unsolicited mail reaching `info@goalogistics.com`
  is coming from address harvesting — the address appears as a plain `mailto:`
  link in the footer — rather than from this form.

## Site key

The widget reads `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. When that variable is not
set it falls back to Cloudflare's published **test** key
(`1x00000000000000000000AA`), which always passes and renders a real, visible
widget without needing an account. That is what preview builds are using now.

To switch to a real key:

1. Create a Turnstile site at https://dash.cloudflare.com → Turnstile, with
   the production domain (and the `*.vercel.app` preview domain if you want it
   working there too).
2. In the Vercel project → Settings → Environment Variables, add
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = the **site** key.
3. Redeploy. No code change needed.

Keep the **secret** key out of the repo — it is only needed by the server-side
verification described below, and must never be exposed to the browser or
prefixed with `NEXT_PUBLIC_`.

## Making it real protection

When the form gets a real backend — still pending GoAL confirming the required
fields — the captcha becomes genuine protection by:

1. Adding `app/api/contact/route.ts` (a POST route handler).
2. Having the form POST its fields plus the Turnstile token instead of opening
   `mailto:`.
3. In the route, verifying the token before doing anything else:

   ```ts
   const res = await fetch(
     "https://challenges.cloudflare.com/turnstile/v0/siteverify",
     {
       method: "POST",
       headers: { "content-type": "application/x-www-form-urlencoded" },
       body: new URLSearchParams({
         secret: process.env.TURNSTILE_SECRET_KEY!,
         response: token,
         remoteip: req.headers.get("cf-connecting-ip") ?? "",
       }),
     },
   );
   const { success } = await res.json();
   if (!success) return new Response("Failed verification", { status: 400 });
   ```

4. Sending the enquiry to `info@goalogistics.com` via an email provider
   (Resend is the least friction on Vercel), with the sending domain verified
   by SPF/DKIM so the mail is not itself treated as spam.
5. Worth adding at the same time, all cheap and effective:
   - a honeypot field that real users never see and bots fill in;
   - a minimum time-to-submit check (bots submit near-instantly);
   - rate limiting per IP.

Until step 3 exists, the widget is decoration.
