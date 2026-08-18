"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

/**
 * Cloudflare's published "always passes" test key. It renders a real, visible
 * widget without needing an account, so the captcha shows up on preview builds
 * before GoAL have created theirs. Setting NEXT_PUBLIC_TURNSTILE_SITE_KEY in
 * Vercel switches it to the live key with no code change.
 */
const TEST_SITE_KEY = "1x00000000000000000000AA";
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || TEST_SITE_KEY;

export const usingTestKey = SITE_KEY === TEST_SITE_KEY;

/**
 * Cloudflare Turnstile widget.
 *
 * IMPORTANT — this is presentation only at the moment. Turnstile issues a token
 * that is meant to be POSTed to your server and validated against Cloudflare's
 * siteverify endpoint. The contact form currently hands off to the visitor's
 * mail client via a `mailto:` link, so there is no server and nothing verifies
 * the token; anyone who disables JavaScript bypasses this entirely. It becomes
 * genuine protection once the form posts to a route handler that verifies the
 * token server-side. See CONTACT_FORM.md.
 */
export default function Turnstile({
  onToken,
  onUnavailable,
  resetKey = 0,
  className = "",
}: {
  onToken: (token: string | null) => void;
  /**
   * Fired when the widget cannot be shown at all — script blocked by an
   * ad-blocker or corporate firewall, Cloudflare unreachable, and so on. The
   * form uses this to fail open rather than leaving a visitor with a Submit
   * button that never enables and no way to make contact.
   */
  onUnavailable?: () => void;
  /** Increment to clear the widget and require a fresh challenge */
  resetKey?: number;
  className?: string;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  // Kept in a ref so re-renders of the parent don't tear down the widget
  const cb = useRef(onToken);
  const unavailable = useRef(onUnavailable);
  useEffect(() => {
    cb.current = onToken;
    unavailable.current = onUnavailable;
  }, [onToken, onUnavailable]);

  const render = useCallback(() => {
    if (!holder.current || !window.turnstile || widgetId.current !== null) return;
    widgetId.current = window.turnstile.render(holder.current, {
      sitekey: SITE_KEY,
      theme: "dark",
      action: "contact",
      callback: (token: string) => cb.current(token),
      "expired-callback": () => cb.current(null),
      "timeout-callback": () => cb.current(null),
      "error-callback": () => cb.current(null),
    });
  }, []);

  // Covers client-side navigation between pages, where the script is already
  // loaded and Script's onReady has nothing new to fetch.
  useEffect(() => {
    render();
    return () => {
      if (widgetId.current !== null && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [render]);

  useEffect(() => {
    if (resetKey === 0) return;
    if (widgetId.current !== null && window.turnstile) {
      window.turnstile.reset(widgetId.current);
      cb.current(null);
    }
  }, [resetKey]);

  // Fail open if the widget never appears. Without this an ad-blocker or a
  // firewall that drops challenges.cloudflare.com would leave the Submit
  // button permanently disabled and the enquiry impossible to send.
  useEffect(() => {
    const t = setTimeout(() => {
      if (widgetId.current === null) unavailable.current?.();
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={render}
        onError={() => unavailable.current?.()}
      />
      <div ref={holder} className={className} />
    </>
  );
}
