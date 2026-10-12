'use client';

import React from 'react';

export default function ElephantAndGiza() {
  const elephantImage = "/images/Official-images/WhatsApp Image 2026-10-11 at 09.43.53 (1).jpeg";
  const gizaImage = "/images/giza-full.jpg";

  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="w-12 h-[1px] bg-[#2C2A25]/30"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2C2A25]/50">
            The Inhabitants
          </h2>
        </div>

        {/* 
          Staggered Editorial Grid
          Left side: Text top, Image bottom
          Right side: Image top, Text bottom
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Elephants */}
          <div className="flex flex-col justify-between">
            
            <div className="mb-12 md:mb-24 lg:pr-12">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                The Elephant <br />
                <span className="italic text-[#591C27] font-light">Kingdom</span>
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80">
                The ground beneath Goshen Camp is etched with history. We sit directly along ancient migratory corridors, allowing you to witness the majestic procession of the Elephant Kingdom from the private sanctuary of your tent.
              </p>
            </div>

            {/* Elephant Image */}
            <div className="w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] group shadow-xl">
              <img 
                src={elephantImage} 
                alt="Elephant Kingdom" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/40">
                Daylight Giants
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Giza */}
          <div className="flex flex-col justify-between pt-0 md:pt-16 lg:pt-32">
            
            {/* Giza Image */}
            <div className="w-full aspect-[4/5] overflow-hidden bg-[#1A1817] group shadow-xl mb-12 md:mb-24">
              <img 
                src={gizaImage} 
                alt="Giza the Black Leopard" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-90"
              />
            </div>

            <div className="lg:pl-12">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                The Elusive <br />
                <span className="italic text-[#591C27] font-light">Giza</span>
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80">
                But the daylight giants are only half the story. As dusk falls, the territory transforms, revealing the shadow of Laikipia’s most elusive resident: Giza, the melanistic black leopard. Through our specialized hides and low-impact tracking, we offer a rare, highly privileged window into the lives of these apex predators.
              </p>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}