import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
