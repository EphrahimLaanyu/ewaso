'use client';

import React from 'react';

export default function CampHero() {
  const baseUrl = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/";
  
  // The new immersive backdrop image
  const heroBackdrop = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.01.55%20(1).jpeg`;
  
  // The editorial collage images
  const portraitTent = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.01.54.jpeg`;
  const squareVeranda = `${baseUrl}CAMP3.jpeg`;

  return (
    <section className="relative w-full bg-[#1A1817] selection:bg-[#591C27] selection:text-[#F4F1EB] pb-24 md:pb-32">
      
      {/* ========================================================
          PART 1: THE IMMERSIVE BACKDROP (100svh)
      ======================================================== */}
      <div className="relative w-full h-[100svh] overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Image with Slow Zoom Effect */}
        <img 
          src={heroBackdrop} 
          alt="Goshen Pavilion Built Into the Rocks" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] origin-center"
        />
        
        {/* Lighter Cinematic Gradients to let the image shine while protecting text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        
        {/* Top Navbar Protection */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none"></div>

        {/* Hero Typography */}
        <div className="relative z-10 text-center px-6 -mt-20">
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <span className="w-8 md:w-16 h-[1px] bg-[#F4F1EB]/50"></span>
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-[#F4F1EB]/90">
              The Sanctuary
            </span>
            <span className="w-8 md:w-16 h-[1px] bg-[#F4F1EB]/50"></span>
          </div>
          
          <h1 className="font-serif text-[#F4F1EB] flex flex-col items-center drop-shadow-2xl">
            <span className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase">
              The Camp
            </span>
            <span className="text-4xl md:text-6xl lg:text-[6rem] italic font-light mt-2 md:mt-4 text-[#F4F1EB]/90">
              Laikipia
            </span>
          </h1>
        </div>
      </div>

      {/* ========================================================
          PART 2: THE FLOATING EDITORIAL CARD (Breaks the Grid)
      ======================================================== */}
      <div className="relative z-20 w-[92%] max-w-7xl mx-auto -mt-32 md:-mt-48 bg-[#F4F1EB] shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row">
        
        {/* Left Column: Copy */}
        <div className="w-full lg:w-5/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#2C2A25]/10">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#2C2A25] mb-6">
            Built into the rocks. <br />
            <span className="italic text-[#591C27] font-light">Open to the wild.</span>
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-10">
            Set high on the natural rocks with wide-open views of the valley, our camp blends seamlessly into the land. Enjoy the absolute quiet of the bush with only a handful of luxury tents, offering total privacy and highly personalized service.
          </p>
          <a 
            href="#suites" 
            className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors duration-300 w-max"
          >
            Explore The Suites
            <span className="block w-8 h-[1px] bg-[#591C27] group-hover:w-16 group-hover:bg-[#2C2A25] transition-all duration-500 ease-out"></span>
          </a>
        </div>

        {/* Right Column: Layered Image Collage */}
        <div className="w-full lg:w-7/12 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-[#EAE7E0] overflow-hidden p-6 md:p-12 flex items-center justify-center">
          
          {/* Subtle noise texture over the right column background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

          {/* Image 1: Tall Portrait (Tent Exterior) */}
          <div className="relative z-10 w-[65%] max-w-[350px] aspect-[3/4] shadow-2xl ml-[-20%] group overflow-hidden border-[8px] border-[#F4F1EB]">
            <img 
              src={portraitTent} 
              alt="Goshen Tented Suite Exterior" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
          </div>

          {/* Image 2: Square Detail (Veranda) - Overlaps Image 1 */}
          <div className="absolute z-20 w-[55%] max-w-[300px] aspect-square shadow-2xl right-[10%] bottom-[10%] md:bottom-[15%] group overflow-hidden border-[8px] border-[#F4F1EB]">
            <img 
              src={squareVeranda} 
              alt="Private Stone Veranda" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
          </div>

        </div>
      </div>
      
    </section>
  );
}