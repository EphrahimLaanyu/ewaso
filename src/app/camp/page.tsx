import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CampHero from '@/components/camp/CampHero';
import CampAtAGlance from '@/components/camp/CampAtAGlance';
import CampSuites from '@/components/camp/CampSuites';
import CampVerandaAndBath from '@/components/camp/CampVerandaAndBath';
import CampPavilion from '@/components/camp/CampPavilion';
import CampNightfall from '@/components/camp/CampNightfall';
import CampGettingHere from '@/components/camp/CampGettingHere';
import CampInquiryCTA from '@/components/camp/CampInquiryCTA';

export const metadata: Metadata = {
  title: 'The Camp | Goshen · Laikipia, Kenya',
  description: 'Stone, canvas and timber, set on the rocks above the valley. Canvas suites with king or twin beds, private stone verandas, and unscripted wilderness at Goshen.',
};

export default function CampPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F4F1EB] text-[#2C2A25]">
      <Navbar />
      
      {/* 1. Hero Section */}
      <CampHero />

      {/* 2. At-a-Glance Strip */}
      <CampAtAGlance />

      {/* 3. The Tented Suites */}
      <CampSuites />

      {/* 4. Private Verandas & En-Suite Bathrooms */}
      <CampVerandaAndBath />

      {/* 5. The Main Pavilion & Dining */}
      <CampPavilion />

      {/* 6. Nightfall / Campfire */}
      <CampNightfall />

      {/* 7. Getting Here */}
      <CampGettingHere />

      {/* 8. Inquiry CTA */}
      <CampInquiryCTA />

      <Footer />
    </main>
  );
}