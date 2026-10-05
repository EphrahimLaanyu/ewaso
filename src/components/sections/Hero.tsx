import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden font-sans selection:bg-[#591C27] selection:text-white">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0 bg-[#1A1817]">
        <img 
          src="/images/elephants-greeting.jpg" 
          alt="Elephants Greeting in Nanyuki" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/70 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
        
        {/* Staggered Typography */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto leading-none text-[#F4F1EB]">
          <div className="w-full flex justify-start lg:pl-12">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tight drop-shadow-2xl">Private Retreat</h1>
          </div>
          <div className="w-full flex justify-center mt-4 md:-mt-4">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[7rem] italic font-light text-[#F4F1EB]/95 pr-12 md:pr-32 drop-shadow-xl">Among the</h2>
          </div>
          <div className="w-full flex justify-end mt-4 md:-mt-6 lg:pr-12">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tight drop-shadow-2xl">Wilderness</h1>
          </div>
          <div className="w-full flex justify-end mt-2 md:-mt-2 lg:pr-48">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] italic font-light text-[#F4F1EB]/90 drop-shadow-xl">of Nanyuki</h2>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full max-w-7xl mx-auto gap-8 text-[#F4F1EB]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-2xl text-xs md:text-sm font-medium tracking-wide leading-relaxed opacity-95 drop-shadow-lg">
            <div className="w-full md:w-1/2">
              <p>Boutique safari experience in Kenya.<br/>4 bedrooms (up to 8 guests).<br/>Full organization.</p>
            </div>
            <div className="w-full md:w-1/2">
              <p>Rent an exclusive sanctuary for a peaceful and cozy getaway. Perfect for nature retreats, family gatherings, and intimate events.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <a href="#book" className="bg-[#591C27] text-[#F4F1EB] px-8 py-4 rounded-full text-xs tracking-[0.15em] uppercase text-center hover:bg-[#3D1219] transition-all duration-300 shadow-2xl border border-[#591C27]">Book Now</a>
            <a href="#availability" className="bg-transparent border border-[#F4F1EB]/60 text-[#F4F1EB] px-8 py-4 rounded-full text-xs tracking-[0.15em] uppercase text-center hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-2xl">Check Availability</a>
          </div>
        </div>
      </div>
    </section>
  );
}