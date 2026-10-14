import CampHero from '@/components/camp/CampHero';
import CampNightfall from '@/components/camp/CampNightfall';
import CampPavilion from '@/components/camp/CampPavilion';
import CampSuites from '@/components/camp/CampSuites';
import CampVerandaAndBath from '@/components/camp/CampVerandaAndBath';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import React from 'react';

// Uncomment these one by one as we build each section in your components folder:
// import CampHero from '@/components/camp/CampHero';
// import CampSuites from '@/components/camp/CampSuites';
// import CampVerandaAndBath from '@/components/camp/CampVerandaAndBath';
// import CampPavilion from '@/components/camp/CampPavilion';
// import CampNightfall from '@/components/camp/CampNightfall';

export default function CampPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F4F1EB] text-[#2C2A25]">
    <Navbar/>
      
      {/* 1. Hero Section (Sticky / Curtain Effect to match Homepage & Navbar) */}
      <CampHero />

      {/* 2. The Tented Suites (Cream Background) */}
      <CampSuites />

      {/* 3. Private Verandas & En-Suite Bathrooms (Burgundy Background) */}
      <CampVerandaAndBath />

      {/* 4. The Main Pavilion & Dining (Cream Background) */}
      <CampPavilion />

      {/* 5. Sundowners & Campfire (Dark/Burgundy Closing Section) */}
      <CampNightfall />

      <Footer/>

    </main>
  );
}