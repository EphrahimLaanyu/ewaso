import type { Metadata } from 'next';
import BookingReservation from '@/components/sections/BookingReservation';
import CampPreview from '@/components/sections/CampPreview';
import ConservationEthos from '@/components/sections/ConservationEthos';
import ExperiencesMap from '@/components/sections/ExperiencesMap';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import Peep from '@/components/sections/Peep';

export const metadata: Metadata = {
  title: 'Goshen | Luxury Safari Camp in Laikipia',
  description:
    'An exclusive luxury safari camp in Laikipia, Kenya. Home to bespoke canvas suites, black leopard tracking, and untouched wildlife corridors.',
};

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Goshen',
  image:
    'https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/luxury-tent-suite-master-bed-panorama.jpeg',
  description:
    'An exclusive luxury safari camp in Laikipia, Kenya. Home to bespoke canvas suites, black leopard tracking, and untouched wildlife corridors.',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Laikipia',
    addressCountry: 'KE',
  },
  url: 'https://goshencamp.com',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <Navbar />
      <Hero />
      <CampPreview />
      <Peep />
      <ExperiencesMap />
      {/* <ConservationEthos /> */}
      {/* <BookingReservation /> */}
      <Footer />
    </main>
  );
}