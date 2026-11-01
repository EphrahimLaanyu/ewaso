import type { Metadata } from 'next';
import CampPreview from '@/components/sections/CampPreview';
import ExperiencesMap from '@/components/sections/ExperiencesMap';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import Peep from '@/components/sections/Peep';

export const metadata: Metadata = {
  title: 'Camps in Laikipia | Goshen Luxury Safari Camp & Places to Stay',
  description:
    'Ranked among the premier camps in Laikipia. Goshen offers exclusive places to stay in Laikipia within Ewaso Enclave Conservancy: private canvas suites, unscripted safari activities in Kenya, and rare black leopard tracking.',
  alternates: {
    canonical: 'https://goshencamp.com',
  },
  openGraph: {
    title: 'Camps in Laikipia | Goshen Luxury Safari Camp & Places to Stay',
    description:
      'Ranked among the premier camps in Laikipia. Goshen offers exclusive places to stay in Laikipia within Ewaso Enclave Conservancy.',
    url: 'https://goshencamp.com',
    images: [
      {
        url: 'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Goshen Luxury Safari Camp in Laikipia Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camps in Laikipia | Goshen Luxury Safari Camp & Places to Stay',
    description:
      'Ranked among the premier camps in Laikipia. Goshen offers exclusive places to stay in Laikipia within Ewaso Enclave Conservancy.',
    images: [
      'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/camp-stone-walkway-to-safari-cottage.jpeg',
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <CampPreview />
      <Peep />
      <ExperiencesMap />
      <Footer />
    </main>
  );
}
