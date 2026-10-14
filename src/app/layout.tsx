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
  metadataBase: new URL("https://goshendomain.com"),
  title: "Goshen | Private Safari Sanctuary · Laikipia, Kenya",
  description:
    "An exclusive private safari retreat in the heart of Laikipia, Kenya. Stone, canvas and timber immersed in the untamed savannah.",
  keywords: [
    "Goshen",
    "Laikipia Safari Lodge",
    "Private Safari Kenya",
    "Laikipia Luxury Lodge",
    "Laikipia Safari",
    "Boutique Safari Sanctuary",
  ],
  openGraph: {
    title: "Goshen — Private Safari Sanctuary, Laikipia",
    description:
      "Where the wild savannah meets quiet architectural sanctuary. An exclusive private safari retreat in Laikipia, Kenya.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Goshen Safari Sanctuary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen — Private Safari Sanctuary, Laikipia",
    description:
      "Where the wild savannah meets quiet architectural sanctuary. An exclusive private safari retreat in Laikipia, Kenya.",
    images: ["/og-image.jpg"],
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
