import About from '@/components/sections/About';
import BookingReservation from '@/components/sections/BookingReservation';
import ConservationEthos from '@/components/sections/ConservationEthos';
import ConservationOrbit from '@/components/sections/ConservationOrbit';
import ExperiencesMap from '@/components/sections/ExperiencesMap';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Peep from '@/components/sections/Peep';
// import TheHouse from '@/components/sections/TheHouse';
// import SafariExperience from '@/components/sections/SafariExperience';
// import NightSky from '@/components/sections/NightSky';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 
        The Hero component will take up exactly 100vh.
        As the user scrolls down, the next components will slide into view.
      */}
      <Hero />
      <About/>
      <Peep/>
      <ExperiencesMap/>
      <ConservationEthos/>
      <BookingReservation/>
      <Footer/>
      
      {/* <TheHouse /> */}
      {/* <SafariExperience /> */}
      {/* <NightSky /> */}
    </main>
  );
}