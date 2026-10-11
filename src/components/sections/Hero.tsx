'use client';

import React from 'react';

export default function HeroAndAbout() {
  // Video Media
  const videoLeft = "/images/Official-images/WhatsApp Video 2026-10-09 at 20.04.25.mp4";
  const videoCenter = "/images/Official-images/WhatsApp Video 2026-10-09 at 20.05.18.mp4";
  const videoRight = "/images/Official-images/WhatsApp Video 2026-10-09 at 20.05.22.mp4";

  return (
    <section className="relative w-full bg-[#1A1817] selection:bg-[#591C27] selection:text-[#F4F1EB]">
      
      {/* 
        ========================================================
        LAYER 1: THE STICKY HERO (Always in the background)
        ========================================================
      */}
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT VIDEO (Leopard) */}
        <div className="hidden md:block relative w-1/3 h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={videoLeft} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>

        {/* CENTER VIDEO (Lion) & PERMANENT MASK */}
        <div className="relative w-full md:w-1/3 h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={videoCenter} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/15 z-0"></div>
          
          <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col items-center justify-center z-10 px-4 text-center">
            <span className="text-black text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] uppercase font-bold mb-4 md:mb-6">
              A Private Sanctuary
            </span>
            <h1 className="text-black font-serif text-7xl md:text-6xl lg:text-[7vw] leading-[0.85] tracking-tight uppercase">
              Goshen
            </h1>
            <h2 className="text-black font-serif text-4xl md:text-4xl lg:text-[4vw] italic font-light mt-1 lg:mt-3">
              Laikipia
            </h2>
          </div>

          <div className="absolute bottom-10 md:bottom-12 left-0 right-0 flex flex-col items-center gap-4 z-20">
            <a href="#reservations" className="group bg-[#2C2A25] text-[#F4F1EB] px-8 py-4 md:py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#591C27] transition-colors duration-500 shadow-xl">
              Inquire Now
            </a>
          </div>
        </div>

        {/* RIGHT VIDEO (Cheetahs) */}
        <div className="hidden md:block relative w-1/3 h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={videoRight} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>

      </div>

      {/* 
        ========================================================
        LAYER 2: THE SCROLLING "ABOUT" FOREGROUND
        Exactly 100vh. Slides over the outer videos to create new masks.
        ========================================================
      */}
      <div className="relative z-20 w-full h-[100svh] flex">
        
        {/* 
          --- DESKTOP LAYOUT --- 
        */}
        <div className="hidden md:flex w-full h-full">
          
          {/* LEFT COLUMN */}
          <div className="relative w-1/3 h-full">
            {/* The Cutout Mask: Creates the cream background and punches the large text through to the video */}
            <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-8 xl:px-12">
              <h2 className="text-black font-serif text-5xl lg:text-6xl xl:text-[5.5vw] leading-[0.85] tracking-tight uppercase">
                The wild <br/>is not our<br/>product.
              </h2>
            </div>
            
            {/* The Solid Text: Sits on top of the mask so it remains fully readable */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 xl:px-12 pb-12 z-30 pointer-events-none">
              <p className="font-sans text-xs xl:text-sm leading-relaxed tracking-wide text-[#2C2A25]/90 mb-6 max-w-[85%] pointer-events-auto">
                It is our uncompromising responsibility. Set within the vast Laikipia landscape, we believe the rarest wildlife experiences must remain unstaged.
              </p>
              <a href="#ethos" className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors w-max pointer-events-auto">
                Read Our Ethos
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Completely transparent so the Hero Lion & Goshen text remains untouched */}
          <div className="relative w-1/3 h-full bg-transparent"></div>

          {/* RIGHT COLUMN */}
          <div className="relative w-1/3 h-full">
            {/* The Cutout Mask */}
            <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-8 xl:px-12 text-right items-end">
              <h2 className="text-black font-serif text-5xl lg:text-6xl xl:text-[5.5vw] leading-[0.85] tracking-tight uppercase">
                A legacy<br/>in<br/>Laikipia.
              </h2>
            </div>
            
            {/* The Solid Text */}
            <div className="absolute inset-0 flex flex-col justify-end items-end text-right px-8 xl:px-12 pb-12 z-30 pointer-events-none">
              <p className="font-sans text-xs xl:text-sm leading-relaxed tracking-wide text-[#2C2A25]/90 mb-6 max-w-[85%] pointer-events-auto">
                With a strict limit on vehicles and an intimate footprint, we offer an exclusive gateway to the Elephant Kingdom and the elusive black leopard.
              </p>
              <a href="#camp" className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors w-max pointer-events-auto">
                Explore The Camp
              </a>
            </div>
          </div>

        </div>

        {/* 
          --- MOBILE LAYOUT --- 
          Slides up over the center lion video to create a stunning mobile cutout.
        */}
        <div className="flex md:hidden relative w-full h-[100svh]">
          {/* Mobile Cutout Mask */}
          <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-6">
            <span className="text-black text-[10px] tracking-[0.2em] uppercase font-bold mb-4">Our Conviction</span>
            <h2 className="text-black font-serif text-[12vw] leading-[0.85] tracking-tight uppercase">
              The wild <br/>is not our<br/>product.
            </h2>
          </div>
          
          {/* Mobile Solid Text */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 z-30 pointer-events-none">
            <p className="font-sans text-sm leading-relaxed tracking-wide text-[#2C2A25]/90 mb-6 max-w-sm pointer-events-auto">
              Set within the vast Laikipia landscape, Goshen Camp is built on a single belief: the rarest wildlife experiences must remain unstaged and unobtrusive.
            </p>
            <a href="#ethos" className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#591C27] border-b border-[#591C27] pb-1 w-max pointer-events-auto">
              Discover Our Story
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}