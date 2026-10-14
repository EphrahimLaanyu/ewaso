'use client';

import React from 'react';

export default function About() {
  const img1 = "/images/Official-images/WhatsApp Image 2026-10-09 at 20.01.54.jpeg";
  const img2 = "/images/Official-images/WhatsApp Image 2026-10-09 at 20.01.55 (2).jpeg";
  const img3 = "/images/Official-images/WhatsApp Image 2026-10-09 at 20.01.57 (1).jpeg";

  return (
    <section id="about" className="relative w-full bg-[#F4F1EB] text-[#2C2A25] py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB] overflow-hidden">
      
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
          
          {/* 
            TOP LEFT: Large Portrait Anchoring Image
            Takes up 5 of the 12 columns.
          */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#EAE7E0]">
              <img 
                src={img1} 
                alt="Goshen Atmosphere" 
                loading="lazy"
                width={600}
                height={750}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
              />
            </div>
            {/* Minimalist offset frame line */}
            <div className="absolute -inset-4 border border-[#2C2A25]/10 -z-10 translate-x-4 translate-y-4 hidden lg:block pointer-events-none"></div>
          </div>

          {/* 
            TOP RIGHT: The Statement Headline
            Takes up 7 of the 12 columns, shifted slightly down for a staggered look.
          */}
          <div className="lg:col-span-7 lg:pl-10 flex flex-col justify-center order-1 lg:order-2 lg:pt-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#2C2A25]/50">
                Our Conviction
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-[#2C2A25]">
              The land is not an attraction. It is our <span className="italic text-[#591C27] font-light">responsibility.</span>
            </h2>
          </div>

          {/* 
            BOTTOM LEFT: Context & Call to Action
            Shifted inward (starts at col 2) to create negative space on the far left edge.
          */}
          <div className="lg:col-span-4 lg:col-start-2 flex flex-col justify-end order-3 pt-4 lg:pb-12">
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 mb-10 max-w-sm">
              Set within the vast Laikipia landscape, Goshen is built on a single belief: the rarest wildlife experiences must remain unstaged and unobtrusive. With a strict limit on vehicles and an intimate footprint, we offer an uncompromising gateway to the Elephant Kingdom and the elusive territory of Giza, the black leopard.
            </p>
            <a 
              href="/camp" 
              className="group flex items-center gap-4 text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors duration-300 w-max"
            >
              Explore The Camp
              <span className="block w-6 h-[1px] bg-[#591C27] group-hover:w-12 group-hover:bg-[#2C2A25] transition-all duration-500 ease-out"></span>
            </a>
          </div>

          {/* 
            BOTTOM RIGHT: The Composition Overlap
            Two images interacting with each other to break the rigid box layout.
          */}
          <div className="lg:col-span-6 lg:col-start-7 relative mt-12 lg:mt-0 order-4">
            
            {/* The Landscape Base Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EAE7E0] group z-10">
              <img 
                src={img2} 
                alt="Goshen Landscape" 
                loading="lazy"
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
              />
            </div>
            
            {/* The Overlapping Accent Image */}
            <div className="absolute -bottom-10 md:-bottom-20 -left-4 md:-left-16 w-3/5 md:w-1/2 aspect-[4/5] overflow-hidden bg-[#EAE7E0] shadow-2xl group z-20 border-4 md:border-8 border-[#F4F1EB]">
              <img 
                src={img3} 
                alt="Goshen Architectural Details" 
                loading="lazy"
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}