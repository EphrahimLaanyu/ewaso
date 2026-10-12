import BookingReservation from '@/components/sections/BookingReservation';
import ConservationEthos from '@/components/sections/ConservationEthos';
import ExperiencesMap from '@/components/sections/ExperiencesMap';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero'; // Or HeroAndAbout if you kept the combined version
import Navbar from '@/components/sections/Navbar';
import Peep from '@/components/sections/Peep';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Peep />
      <ExperiencesMap />
      <ConservationEthos />
      <BookingReservation />
      <Footer />
    </main>
  );
}