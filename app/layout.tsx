import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CurtainTransition from "@/components/CurtainTransition";
import ScrollFx from "@/components/ScrollFx";
import "./globals.css";

/* Runs before first paint: enables motion effects only when JS is available
 * and the visitor has not asked for reduced motion. */
const fxGate = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("fx")}catch(e){}`;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Gulf of America Logistics (GoAL) | Global Project Logistics",
    template: "%s | Gulf of America Logistics",
  },
  description:
    "Gulf of America Logistics (GoAL) is a veteran-owned project logistics and heavy haul transportation company specializing in heavy haul, oversized cargo, complex project logistics, and data center builds across the United States and worldwide.",
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
