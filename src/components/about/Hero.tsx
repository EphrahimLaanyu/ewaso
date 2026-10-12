'use client';

import React from 'react';

export default function Hero() {
  const campImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.01.54.jpeg"; 

  return (
    <section className="relative w-full min-h-screen bg-[#F4F1EB] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col">
      
      {/* 
        THE CUT-OUT IMAGE 
        Height reduced to 60vh. The clip-path is adjusted to make the curve shallower and more contained.
      */}
      <div 
        className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden"
        style={{ 
          // 120% width ensures the curve doesn't pinch at the edges.
          // 100% height pulls the bottom of the semi-circle up.
          clipPath: 'ellipse(120% 100% at 50% 0%)' 
        }}
      >
        <img 
          src={campImage} 
          alt="Goshen Camp Landscape" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark overlays to ensure the white text pops */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1817]/50 via-transparent to-black/30"></div>

        {/* BIG STYLISH TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 mt-16 md:mt-12">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tight text-[#F4F1EB] drop-shadow-2xl uppercase">
            About<span className="italic font-light lowercase text-[#F4F1EB]/90 ml-3 md:ml-6">us</span>
          </h1>
        </div>
      </div>

      {/* 
        SHORT TEXT BELOW 
        Centered in the cream background under the arch.
      */}
      <div className="w-full max-w-4xl mx-auto text-center px-6 mt-12 md:mt-20 flex-grow flex flex-col justify-center pb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C2A25] leading-[1.2] tracking-tight">
          A legacy built on a single belief: <br className="hidden md:block" />
          the rarest experiences must remain <span className="italic text-[#591C27] font-light">unstaged.</span>
        </h2>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-[#2C2A25]/20"></span>
          <p className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#2C2A25]/60 font-bold">
            The Ewaso Enclave • Laikipia
          </p>
          <span className="w-12 h-[1px] bg-[#2C2A25]/20"></span>
        </div>
      </div>

    </section>
  );
}