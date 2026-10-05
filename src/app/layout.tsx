import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ewasocamp.com"),
  title: "Ewaso Camp | Private Safari House · Nanyuki, Kenya",
  description:
    "An exclusive, highly styled private safari house at the foot of Mount Kenya. Minimalist architecture immersed in the untamed Laikipia savannah.",
  keywords: [
    "Ewaso Camp",
    "Nanyuki Safari Lodge",
    "Private Safari House Kenya",
    "Mount Kenya Luxury Lodge",
    "Laikipia Safari",
    "Luxury Boutique Safari",
  ],
  openGraph: {
    title: "Ewaso Camp — Exclusive Private Safari House, Nanyuki",
    description:
      "Where the wild savannah meets quiet architectural sanctuary. Private buyouts at the foot of Mount Kenya.",
    images: [{ url: "/images/ewaso-hero.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8F6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} scroll-smooth selection:bg-[#591C27] selection:text-[#FAF8F5]`}
    >
      <body className="bg-[#FAF8F5] text-[#221E1F] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
