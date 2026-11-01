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
    images: [
      {
        url: 'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Inquire and book your stay at Goshen Safari Camp in Laikipia Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay | Inquire at Goshen Luxury Camp in Laikipia',
    description:
      'Reserve your private safari buyout or luxury tented suite at Goshen in Ewaso Enclave Conservancy, Laikipia.',
    images: [
      'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
    ],
  },
};

export default function InquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
