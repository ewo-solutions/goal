import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const quickLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Meet The Team", href: "/who-we-are" },
  { label: "Our Mission", href: "/who-we-are" },
  { label: "Contact Us", href: "/talk-to-us" },
];

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C18.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-goal-red text-white">
      <div className="mx-auto max-w-[1580px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Logo + blurb */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/goal-logo.png"
                alt="Gulf of America Logistics"
                width={282}
                height={94}
                className="h-auto w-[220px] lg:w-[282px]"
              />
            </Link>
            <p className="mt-8 max-w-[460px] text-[15px] font-light leading-[24px] lg:text-[16px] lg:leading-[26px]">
              Gulf of America Logistics (GoAL) is a veteran-owned American-led
              logistics company that moves oversized, heavy haul, project
              cargo, and data center builds across the United States and
              worldwide through a globally connected network of trusted
              partners.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:justify-self-center">
            <h3 className="text-[22px] font-bold leading-[1.2] lg:text-[26px]">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] font-light leading-[25px] transition-all hover:font-bold hover:opacity-80 lg:text-[18px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[22px] font-bold leading-[1.2] lg:text-[26px]">Contact us</h3>
            <div className="mt-6 space-y-4 text-[15px] font-light leading-[25px] lg:text-[16px]">
              <div>
                <p className="font-semibold">Phone:</p>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:opacity-80">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <a
                  href={`mailto:${site.email}?subject=Project%20Inquiry`}
                  className="underline hover:opacity-80"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>{site.address}</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-14 border-white/60" />

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="text-[18px] font-medium leading-[1.2] lg:text-[20px]">
            Copyright @ {new Date().getFullYear()} Gulf of America Logistics
            <br />
            All Rights Reserved
          </p>

          <div>
            <p className="text-[18px] font-bold uppercase leading-[25px] lg:text-[20px]">
              Follow us!
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-opacity hover:opacity-80"
              >
                <LinkedinIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-opacity hover:opacity-80"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="flex h-[55px] w-[180px] items-center gap-3 rounded-[20px] border border-white px-6">
            <Image
              src="/icons/flag-us.png"
              alt=""
              width={34}
              height={22}
              className="h-[22px] w-[34px] object-cover"
            />
            <span className="text-[18px] font-light">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
