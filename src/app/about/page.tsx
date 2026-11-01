import type { Metadata } from 'next';
import ElephantAndGiza from '@/components/about/ElephantAndGiza';
import EwasoEcosystem from '@/components/about/EwasoEcosystem';
import GuidesAndTeam from '@/components/about/GuidesAndTeam';
import Hero from '@/components/about/Hero';
import OurConviction from '@/components/about/OurConviction';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import Experience from '@/components/about/Experience';

export const metadata: Metadata = {
  title: 'Ewaso Enclave Conservancy | Conservation Story & Ethos at Goshen',
  description:
    'Discover the conservation ethos of Goshen within Ewaso Enclave Conservancy, Laikipia. Learn about our Samburu naturalist guides, unstaged wildlife ethics, and the preservation of ancient elephant corridors.',
  keywords: [
    'Ewaso Enclave Conservancy',
    'camps in Laikipia',
    'places to stay in Laikipia',
    'conservation Laikipia Kenya',
    'Samburu naturalist guides',
    'black leopard territory Kenya',
    'Goshen story',
  ],
  alternates: {
    canonical: 'https://goshencamp.com/about',
  },
  openGraph: {
    title: 'Ewaso Enclave Conservancy | Conservation Story & Ethos at Goshen',
    description:
      'Learn about Goshen’s unstaged conservation ethos, our Samburu naturalist guides, and the preservation of ancient wildlife corridors in Ewaso Enclave Conservancy.',
    url: 'https://goshencamp.com/about',
    images: [
      {
        url: 'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Conservation and luxury safari camp in Ewaso Enclave Conservancy Laikipia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ewaso Enclave Conservancy | Conservation Story & Ethos at Goshen',
    description:
      'Discover the unstaged conservation ethos and Samburu naturalist guides at Goshen in Ewaso Enclave Conservancy, Laikipia.',
    images: [
      'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1A1817] w-full">
      <Navbar />
      <Hero />
      <OurConviction />
      <EwasoEcosystem />
      <ElephantAndGiza />
      <GuidesAndTeam />
      <Experience />
      <Footer />
    </main>
  );
}
