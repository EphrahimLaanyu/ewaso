import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Safari Activities in Kenya | Walking Safaris & Drives in Laikipia',
  description:
    'Experience unforgettable safari activities in Kenya at Goshen. Guided bush walks on historic elephant trails, black leopard tracking in Ewaso Enclave Conservancy, night game drives, and river rock pool fishing.',
  keywords: [
    'safari activities in Kenya',
    'walking safaris Kenya',
    'game drives Laikipia',
    'black leopard tracking Kenya',
    'Ewaso Enclave Conservancy activities',
    'bush walks Kenya',
    'camps in Laikipia activities',
  ],
  alternates: {
    canonical: 'https://goshencamp.com/experiences',
  },
  openGraph: {
    title: 'Safari Activities in Kenya | Walking Safaris & Drives in Laikipia',
    description:
      'Unrivalled safari activities in Kenya at Goshen: guided bush walks on ancient elephant trails, black leopard tracking in Ewaso Enclave, and night game drives.',
    url: 'https://goshencamp.com/experiences',
    images: [
      {
        url: 'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Safari activities in Kenya at Goshen Safari Camp Laikipia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safari Activities in Kenya | Walking Safaris & Drives in Laikipia',
    description:
      'Unscripted safari activities in Kenya: black leopard tracking, walking safaris, and game drives in Ewaso Enclave Conservancy.',
    images: [
      'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
    ],
  },
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
