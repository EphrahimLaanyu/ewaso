import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
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
    template: "%s | Goshen Laikipia Safari Camp",
    default: "Goshen Laikipia | Luxury Safari Camp & Places to Stay in Laikipia",
  },
  description:
    "Discover Goshen in Ewaso Enclave Conservancy, one of the premier luxury camps and places to stay in Laikipia, Kenya. Unrivalled black leopard tracking, handcrafted canvas suites, and bespoke safari activities in Kenya.",
  keywords: [
    "camps in Laikipia",
    "places to stay in Laikipia",
    "Ewaso Enclave Conservancy",
    "safari activities in Kenya",
    "Goshen Laikipia",
    "Goshen Safari Camp",
    "luxury safari camp Kenya",
    "black leopard tracking Kenya",
    "Laikipia wilderness camps",
    "walking safari Kenya",
    "luxury tented suites Laikipia",
    "Mount Kenya safari lodges",
    "best safari camps in Kenya",
  ],
  authors: [{ name: "Goshen Laikipia", url: "https://goshencamp.com" }],
  creator: "Goshen Laikipia",
  publisher: "Goshen Laikipia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goshencamp.com",
    siteName: "Goshen Laikipia",
    title: "Goshen Laikipia | Luxury Safari Camp & Places to Stay in Laikipia",
    description:
      "Exclusive luxury tented camp in Ewaso Enclave Conservancy, Laikipia. Unscripted safari activities in Kenya, black leopard tracking, and bespoke canvas suites.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goshen Safari Camp overlooking pristine Laikipia wilderness, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen Laikipia | Luxury Safari Camp & Places to Stay in Laikipia",
    description:
      "Exclusive luxury tented camp in Ewaso Enclave Conservancy, Laikipia. Unrivalled safari activities in Kenya and rare wildlife encounters.",
    images: ["/og-image.jpg"],
    creator: "@goshen_camp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  themeColor: "#1A1817",
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
