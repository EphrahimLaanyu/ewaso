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
  metadataBase: new URL("https://goshencamp.com"),
  title: {
    template: "%s | Goshen Laikipia",
    default: "Goshen | Luxury Safari Camp in Laikipia",
  },
  description:
    "An exclusive luxury safari camp in Laikipia, Kenya. Home to rare black leopard tracking, bespoke canvas suites, and untamed wildlife corridors.",
  keywords: [
    "Goshen",
    "Laikipia Safari Camp",
    "Luxury Safari Kenya",
    "Black Leopard Tracking",
    "Ewaso Enclave",
    "Private Safari Sanctuary",
    "Wild Dog Monitoring",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goshencamp.com",
    siteName: "Goshen",
    title: "Goshen | Luxury Safari Camp in Laikipia",
    description:
      "An exclusive luxury safari camp in Laikipia, Kenya. Home to rare black leopard tracking, bespoke canvas suites, and untamed wildlife corridors.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen | Luxury Safari Camp in Laikipia",
    description:
      "An exclusive luxury safari camp in Laikipia, Kenya. Home to rare black leopard tracking, bespoke canvas suites, and untamed wildlife corridors.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
