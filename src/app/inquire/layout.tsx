import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Book Your Stay | Inquire at Goshen Luxury Camp in Laikipia',
  description:
    'Plan your private stay or exclusive camp buyout at Goshen in Ewaso Enclave Conservancy, Laikipia. Inquire directly for rates, seasonal availability, and bespoke safari activities in Kenya.',
  keywords: [
    'book camp in Laikipia',
    'places to stay in Laikipia booking',
    'Goshen camp inquiry',
    'Ewaso Enclave Conservancy reservations',
    'luxury safari camp rates Kenya',
  ],
  alternates: {
    canonical: 'https://goshencamp.com/inquire',
  },
  openGraph: {
    title: 'Book Your Stay | Inquire at Goshen Luxury Camp in Laikipia',
    description:
      'Inquire directly for bespoke canvas suites, private buyouts, and safari activities at Goshen in Ewaso Enclave Conservancy, Laikipia.',
    url: 'https://goshencamp.com/inquire',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay | Inquire at Goshen Luxury Camp in Laikipia',
    description:
      'Reserve your private safari buyout or luxury tented suite at Goshen in Ewaso Enclave Conservancy, Laikipia.',
    images: ['/og-image.jpg'],
  },
};

export default function InquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

