"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const inputClass =
  "h-[55px] w-full rounded-[20px] border border-white bg-goal-navy px-6 text-[18px] font-light text-white placeholder-white/90 outline-none transition-colors focus:border-goal-red lg:text-[20px]";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Project Inquiry from ${data.get("firstName")} ${data.get("lastName")}`
    );
    const body = encodeURIComponent(
      [
        `Company: ${data.get("company")}`,
        `Name: ${data.get("firstName")} ${data.get("lastName")}`,
        `Email: ${data.get("email")}`,
        `Contact Number: ${data.get("phone")}`,
        "",
        `${data.get("enquiry")}`,
      ].join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="relative bg-goal-navy">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[320px] lg:min-h-[1007px]">
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
          <h2 className="max-w-[581px] text-[36px] font-bold capitalize leading-[1.2] text-white lg:text-[55px]">
            Let Us Simplify Your Next Move
          </h2>
          <p className="mt-8 text-[18px] font-light leading-[35px] text-white">
            Have A Question?
            <br />
            Talk To Us!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-[654px]">
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
                  <Image
                    src="/icons/flag-us.png"
                    alt=""
                    width={34}
                    height={22}
                    className="pointer-events-none absolute left-6 top-1/2 h-[22px] w-[34px] -translate-y-1/2 object-cover"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Contact Number"
                    className={`${inputClass} pl-[72px]`}
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
                I consent to Gulf of America Logistics storing my submitted
                information so they can respond to my enquiry{" "}
                <span className="text-goal-red">*</span>
              </span>
            </label>

            <button
              type="submit"
              className="mt-8 rounded-full bg-goal-red px-[25px] py-[20px] text-[18px] leading-[1.2] text-white transition-opacity hover:opacity-90"
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
