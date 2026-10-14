import type { Metadata } from 'next';
import ElephantAndGiza from '@/components/about/ElephantAndGiza';
import EwasoEcosystem from '@/components/about/EwasoEcosystem';
import GuidesAndTeam from '@/components/about/GuidesAndTeam';
import Hero from '@/components/about/Hero';
import OurConviction from '@/components/about/OurConviction';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';

export const metadata: Metadata = {
  title: 'About | Goshen · Laikipia, Kenya',
  description: 'Rooted in Laikipia, Goshen is built on a single conviction: the rarest wildlife experiences must remain unstaged and unobtrusive.',
};

// Import any other About-specific sections here (e.g., import AboutEthos from ...)

export default function AboutPage() {
  return (
    // The min-h-screen ensures the page is always at least the height of the device
    <main className="flex min-h-screen flex-col bg-[#1A1817]">
      {/* 
        The Hero component will now render seamlessly at the top. 
        No padding wrapper ensures the image bleeds to the top edge. 
      */}
      <Navbar/>
      <Hero />
      <OurConviction/>
      <EwasoEcosystem/>
      <ElephantAndGiza/>
      <GuidesAndTeam/>
      <Footer/>
      
      {/* Add your other About sections below as you build them */}
    </main>
  );
}