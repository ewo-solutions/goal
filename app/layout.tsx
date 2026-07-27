import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CurtainTransition from "@/components/CurtainTransition";
import ScrollFx from "@/components/ScrollFx";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

/* Runs before first paint: enables motion effects only when JS is available
 * and the visitor has not asked for reduced motion. */
const fxGate = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("fx")}catch(e){}`;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const defaultTitle = "Gulf of America Logistics (GoAL) | Global Project Logistics";
const defaultDescription =
  "Gulf of America Logistics (GoAL) is a veteran-owned project logistics and heavy haul transportation company specializing in heavy haul, oversized cargo, complex project logistics, and data center builds across the United States and worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Gulf of America Logistics",
  },
  description: defaultDescription,
  keywords: [
    "project logistics",
    "heavy haul trucking",
    "oversized cargo transport",
    "data center logistics",
    "oil and gas logistics",
    "wind energy logistics",
    "lead logistics provider",
    "4PL",
    "veteran owned logistics company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  alternateName: site.shortName,
  url: siteUrl,
  logo: `${siteUrl}/images/goal-logo.png`,
  image: `${siteUrl}/images/goal-logo.png`,
  telephone: site.phone.replace(/[^+\d]/g, ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3800 Viking Dr.",
    addressLocality: "Bossier City",
    addressRegion: "LA",
    postalCode: "71111",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fxGate }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Preloader />
        <CurtainTransition />
        <ScrollFx />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
