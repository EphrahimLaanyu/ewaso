
'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function HeroAndAbout() {
  const [isMuted, setIsMuted] = useState(true);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  // Video Media
  const videoLeft = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Video%202026-10-09%20at%2020.04.25.mp4";
  const videoCenter = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Video%202026-10-09%20at%2020.05.18.mp4";
  const videoRight = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Video%202026-10-09%20at%2020.05.22.mp4";

  const toggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (rightVideoRef.current) {
      rightVideoRef.current.muted = nextMuted;
      if (!nextMuted) {
        rightVideoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    if (rightVideoRef.current) {
      rightVideoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative w-full bg-[#1A1817] selection:bg-[#591C27] selection:text-[#F4F1EB]">
      
      {/* 
        ========================================================
        LAYER 1: THE STICKY HERO (Always in the background)
        ========================================================
      */}
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT VIDEO (Leopard) */}
        <div className="absolute inset-0 md:relative md:w-1/3 md:h-full overflow-hidden opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoLeft} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply hidden md:block"></div>
        </div>

        {/* CENTER VIDEO (Lion) & PERMANENT MASK */}
        <div className="relative w-full md:w-1/3 h-full overflow-hidden z-10">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
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

        {/* RIGHT VIDEO (Cheetahs) - Main Audio Track */}
        <div className="hidden md:block relative w-1/3 h-full overflow-hidden z-0">
          <video
            ref={rightVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoRight} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>

        {/* 
          AUDIO CONTROL TOGGLE
          Controls audio for the right video only.
        */}
        <button 
          onClick={toggleAudio}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#F4F1EB]/30 bg-black/20 backdrop-blur-md text-[#F4F1EB] hover:bg-black/40 hover:scale-105 transition-all duration-300 focus:outline-none group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            // Muted Icon (Speaker with an X)
            <svg className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
            </svg>
          ) : (
            // Unmuted Icon (Sound waves)
            <svg className="w-4 h-4 md:w-5 md:h-5 opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>

      </div>

      {/* 
        ========================================================
        LAYER 2: THE SCROLLING "ABOUT" FOREGROUND
        ========================================================
      */}
      <div className="relative z-20 w-full h-[100svh] flex">
        
        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:flex w-full h-full">
          
          {/* LEFT COLUMN */}
          <div className="relative w-1/3 h-full">
            <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-8 xl:px-12">
              <h2 className="text-black font-serif text-5xl lg:text-6xl xl:text-[5.5vw] leading-[0.85] tracking-tight uppercase">
                The wild <br/>is not our<br/>product.
              </h2>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end px-8 xl:px-12 pb-12 z-30 pointer-events-none">
              <p className="font-sans text-xs xl:text-sm leading-relaxed tracking-wide text-[#2C2A25]/90 mb-6 max-w-[85%] pointer-events-auto">
                It is our uncompromising responsibility. Set within the vast Laikipia landscape, we believe the rarest wildlife experiences must remain unstaged.
              </p>
              <a href="#ethos" className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors w-max pointer-events-auto">
                Read Our Ethos
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Transparent */}
          <div className="relative w-1/3 h-full bg-transparent"></div>

          {/* RIGHT COLUMN */}
          <div className="relative w-1/3 h-full">
            <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-8 xl:px-12 text-right items-end">
              <h2 className="text-black font-serif text-5xl lg:text-6xl xl:text-[5.5vw] leading-[0.85] tracking-tight uppercase">
                A legacy<br/>in<br/>Laikipia.
              </h2>
            </div>
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
        */}
        <div className="flex md:hidden relative w-full h-[100svh]">
          {/* Mobile Cutout Mask */}
          <div className="absolute inset-0 bg-[#F4F1EB] mix-blend-lighten flex flex-col justify-center px-6">
            <span className="text-black text-[10px] tracking-[0.2em] uppercase font-bold mb-4">Our Conviction</span>
            <h2 className="text-black font-serif text-[13vw] sm:text-[11vw] leading-[0.9] tracking-tight uppercase max-w-[90%]">
              The wild <br/>is not our<br/>product.
            </h2>
          </div>
          
          {/* Mobile Solid Text */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 z-30 pointer-events-none">
            <p className="font-sans text-sm leading-relaxed tracking-wide text-[#2C2A25]/90 mb-6 max-w-[90%] pointer-events-auto">
              Set within the vast Laikipia landscape, Goshen Camp is built on a single belief: the rarest wildlife experiences must remain unstaged and unobtrusive.
            </p>
            <a href="#ethos" className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#591C27] border-b border-[#591C27]/30 pb-1 w-max pointer-events-auto hover:border-[#591C27] transition-colors">
              Discover Our Story
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
