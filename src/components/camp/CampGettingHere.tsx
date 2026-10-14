'use client';

import React from 'react';

export default function CampGettingHere() {
  return (
    <section id="getting-here" className="relative w-full bg-[#EAE7E0] text-[#2C2A25] py-20 lg:py-28 px-6 md:px-12 lg:px-20 border-t border-[#2C2A25]/15 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      {/* Subtle overlay noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#591C27]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
                05 / Journey & Access
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8">
              Arriving in <br />
              <span className="italic font-light text-[#591C27]">Laikipia.</span>
            </h2>

            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-6">
              Set high on the rocky escarpment above the river valley, Goshen offers seclusion in one of East Africa&apos;s most vital wildlife corridors.
            </p>

            <div className="p-6 bg-[#F4F1EB] border-l-2 border-[#591C27] space-y-2">
              <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#591C27]">
                Conservancy Notice
              </span>
              <p className="font-sans text-xs md:text-sm text-[#2C2A25]/85 leading-relaxed">
                To protect wildlife corridors and prevent habitat fragmentation, no outside vehicles are permitted within the conservancy.
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            
            <div className="bg-[#F4F1EB] p-8 border border-[#2C2A25]/10 space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#591C27] block">
                Air & Ground Transfers
              </span>
              <h3 className="font-serif text-2xl text-[#2C2A25]">
                Airstrip & Town Pickups
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#2C2A25]/80">
                Transfers are available from Nanyuki or the local airstrip. Our team greets you upon arrival in dedicated 4x4 safari vehicles for the journey into camp.
              </p>
            </div>

            <div className="bg-[#F4F1EB] p-8 border border-[#2C2A25]/10 space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#591C27] block">
                Wildlife Conservancy
              </span>
              <h3 className="font-serif text-2xl text-[#2C2A25]">
                Dedicated Safari Vehicles
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#2C2A25]/80">
                All game drives and wilderness exploration take place in specially outfitted camp 4x4 vehicles guided by licensed guides and armed rangers.
              </p>
            </div>

            <div className="bg-[#F4F1EB] p-8 border border-[#2C2A25]/10 space-y-4 sm:col-span-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#591C27] block">
                Stay Length & Planning
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div>
                  <span className="block font-serif text-xl text-[#2C2A25] mb-1">3 Nights</span>
                  <span className="font-sans text-xs text-[#2C2A25]/75">Minimum stay requirement</span>
                </div>
                <div>
                  <span className="block font-serif text-xl text-[#2C2A25] mb-1">From $440</span>
                  <span className="font-sans text-xs text-[#2C2A25]/75">Per person, per night, full board</span>
                </div>
                <div>
                  <span className="block font-serif text-xl text-[#2C2A25] mb-1">+$70</span>
                  <span className="font-sans text-xs text-[#2C2A25]/75">Conservancy fee per night</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
