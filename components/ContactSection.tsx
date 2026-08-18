"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import DialCodeSelect, { dialCodes } from "@/components/DialCodeSelect";
import Turnstile from "@/components/Turnstile";

const inputClass =
  "h-[55px] w-full rounded-[20px] border border-white bg-goal-navy px-6 text-[18px] font-light text-white placeholder-white/90 outline-none transition-colors focus:border-goal-red lg:text-[20px]";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [dial, setDial] = useState(dialCodes[0]);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  // Set when the widget can't load at all, so a blocked script never stops
  // someone getting in touch
  const [captchaUnavailable, setCaptchaUnavailable] = useState(false);
  const captchaCleared = captchaToken !== null || captchaUnavailable;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaCleared) return;
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Project Inquiry from ${data.get("firstName")} ${data.get("lastName")}`
    );
    const body = encodeURIComponent(
      [
        `Company: ${data.get("company")}`,
        `Name: ${data.get("firstName")} ${data.get("lastName")}`,
        `Email: ${data.get("email")}`,
        `Contact Number: ${dial.code} ${data.get("phone")}`,
        "",
        `${data.get("enquiry")}`,
      ].join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    // Force a fresh challenge before another enquiry can be sent
    setCaptchaResetKey((k) => k + 1);
  }

  return (
    <section className="relative bg-goal-navy">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[1007px]" data-reveal="left">
          <Image
            src="/images/contact-worker.png"
            alt="Gulf of America Logistics team member on site"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Form side */}
        <div className="px-6 py-14 lg:px-[84px] lg:py-[103px]">
          <h2
            className="max-w-[581px] text-[36px] font-bold capitalize leading-[1.2] text-white lg:text-[55px]"
            data-reveal="right"
          >
            Let Us Simplify Your Next Move
          </h2>
          <p className="mt-8 text-[16px] font-light leading-[28px] text-white" data-reveal="right" data-reveal-delay="100">
            Have A Question?
            <br />
            Talk To Us!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-[654px]" data-reveal data-reveal-delay="180">
            <div className="grid gap-5">
              <input name="company" placeholder="Company" className={inputClass} />
              <div className="grid gap-5 sm:grid-cols-2">
                <input name="firstName" required placeholder="First Name" className={inputClass} />
                <input name="lastName" required placeholder="Last Name" className={inputClass} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className={inputClass}
                />
                <div className="relative">
                  <DialCodeSelect value={dial} onChange={setDial} />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Contact Number"
                    className={`${inputClass} pl-[124px]`}
                  />
                </div>
              </div>
              <textarea
                name="enquiry"
                required
                placeholder="Your Enquiry"
                rows={5}
                className="w-full rounded-[20px] border border-white bg-goal-navy px-6 py-4 text-[18px] font-light text-white placeholder-white/90 outline-none transition-colors focus:border-goal-red lg:text-[20px]"
              />
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 text-[11px] font-light text-white">
              <input
                type="checkbox"
                required
                className="mt-[2px] h-[19px] w-[19px] shrink-0 cursor-pointer appearance-none rounded-full border border-white bg-transparent checked:border-goal-red checked:bg-goal-red"
              />
              <span>
                I have read, understood, and agree to GoAL&rsquo;s{" "}
                <Link href="/privacy-policy" className="underline hover:opacity-80">
                  Privacy Policy
                </Link>
                , and consent to the collection, use, and storage of my
                submitted information for the purpose of responding to my
                enquiry <span className="text-goal-red">*</span>
              </span>
            </label>

            <Turnstile
              onToken={setCaptchaToken}
              onUnavailable={() => setCaptchaUnavailable(true)}
              resetKey={captchaResetKey}
              className="mt-6 empty:hidden"
            />

            <button
              type="submit"
              disabled={!captchaCleared}
              className="mt-8 rounded-full bg-goal-red px-[25px] py-[20px] text-[18px] leading-[1.2] text-white transition-all hover:font-bold hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:font-normal"
            >
              Submit
            </button>
            {submitted && (
              <p className="mt-4 text-[14px] font-light text-white/90">
                Your email client should have opened — if not, email us directly
                at {site.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
