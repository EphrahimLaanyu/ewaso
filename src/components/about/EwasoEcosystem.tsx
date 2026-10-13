import React from 'react';

export default function EwasoEcosystem() {
  return (
    <section className="w-full bg-[#591C27] text-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#F4F1EB] selection:text-[#591C27]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="w-12 h-[1px] bg-[#F4F1EB]/30"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#F4F1EB]/50">
            The Landscape
          </h2>
        </div>

        {/* 
          Asymmetrical Grid Layout 
          Drops the heavy title on the left and the reading paragraphs on the right.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: The Massive Title */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
              The Ewaso <br className="hidden lg:block"/>
              <span className="italic font-light opacity-90">Ecosystem</span>
            </h3>
          </div>

          {/* RIGHT COLUMN: The Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 pt-2 lg:pt-4">
            
            {/* Lead Paragraph (Slightly larger and brighter) */}
            <p className="font-sans text-lg md:text-xl leading-relaxed tracking-wide text-[#F4F1EB]/90">
              Located right in the heart of the Laikipia plateau, our camp blends perfectly into the natural surroundings. It is a beautiful, open landscape brought to life by the waters of the Ewaso River.
            </p>
            
            {/* Elegant Divider */}
            <div className="w-full h-[1px] bg-[#F4F1EB]/20 my-2"></div>
            
            {/* Secondary Paragraph (Standard size and slightly muted) */}
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/70">
              To keep this area as wild as possible, we keep things small and private. We strictly limit the number of guests and safari vehicles, giving you the greatest luxury of all: endless, open space. There are no crowded tourist traps here—just you, the vast horizon, and the sounds of the African bush.
            </p>
            
          </div>

        </div>

      </div>
    </section>
  );
}