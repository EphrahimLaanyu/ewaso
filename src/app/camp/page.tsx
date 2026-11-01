import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CampHero from '@/components/camp/CampHero';
import CampSuites from '@/components/camp/CampSuites';
import CampVerandaAndBath from '@/components/camp/CampVerandaAndBath';
import CampPavilion from '@/components/camp/CampPavilion';
import CampNightfall from '@/components/camp/CampNightfall';
import CampInquiryCTA from '@/components/camp/CampInquiryCTA';

export const metadata: Metadata = {
  title: 'Places to Stay in Laikipia | Luxury Tented Suites at Goshen Camp',
  description:
    'Searching for exceptional places to stay in Laikipia? Goshen Camp features bespoke canvas suites, private stone verandas, ensuite bush showers, and unconfined wilderness views in Ewaso Enclave Conservancy.',
  keywords: [
    'places to stay in Laikipia',
    'camps in Laikipia',
    'luxury tented camp Laikipia',
    'Ewaso Enclave Conservancy accommodation',
    'safari suites Kenya',
    'Goshen Camp suites',
  ],
  alternates: {
    canonical: 'https://goshencamp.com/camp',
  },
  openGraph: {
    title: 'Places to Stay in Laikipia | Luxury Tented Suites at Goshen Camp',
    description:
      'Searching for exceptional places to stay in Laikipia? Discover handcrafted canvas suites and private stone verandas at Goshen Camp in Ewaso Enclave.',
    url: 'https://goshencamp.com/camp',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Stay in Laikipia | Luxury Tented Suites at Goshen Camp',
    description:
      'Bespoke canvas suites and luxury safari camp accommodations in Ewaso Enclave Conservancy, Laikipia.',
    images: ['/og-image.jpg'],
  },
};

export default function CampPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F4F1EB] text-[#2C2A25]">
      <Navbar />
      <CampHero />
      <CampSuites />
      <CampVerandaAndBath />
      <CampPavilion />
      <CampNightfall />
      <CampInquiryCTA />
      <Footer />
    </main>
  );
}
