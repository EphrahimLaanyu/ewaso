'use client';

import React from 'react';

export default function CampNightfall() {
  const baseUrl = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/";

  // The three campfire/sundowner images
  const fireImage1 = `${baseUrl}roaring-campfire-flames-sunset-bush.jpeg`;
  const fireImage2 = `${baseUrl}bush-dinner-around-campfire-twilight.jpeg`; // Wide view
  const fireImage3 = `${baseUrl}safari-campfire-evening-bush-dinner.jpeg`;

  return (
    <section id="nightfall" className="relative w-full min-h-[100svh] lg:h-[100svh] bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col overflow-hidden">
      
      {/* ========================================================
          THE EDITORIAL DIVIDER
      ======================================================== */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-10 lg:pt-12">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="h-[1px] w-[45%] bg-[#591C27]/20"></div>
          <div className="w-2 h-2 rotate-45 bg-[#591C27]/40"></div>
          <div className="h-[1px] w-[45%] bg-[#591C27]/20"></div>
        </div>
      </div>

      {/* Subtle overlay noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex-grow flex items-center py-16 lg:py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ========================================================
              LEFT COLUMN: Typography & Final CTA (5 Cols)
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 z-20">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#591C27]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
                04 / Nightfall
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8">
              Stories by <br />
              <span className="italic font-light text-[#591C27]">the fire.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-12 lg:pr-8">
              <p>
                As the sun drops below the horizon, the evening ritual begins. We light the campfire out in the open, offering front-row seats to the darkening Laikipia sky.
              </p>
              <p>
                Pull up a chair with a cold sundowner, watch the landscape turn deep blue, and swap stories from the day's wildlife sightings before dinner is served under the stars.
              </p>
            </div>

            {/* Closing Call to Action */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a 
                href="/inquire" 
                className="group inline-flex items-center justify-between gap-6 bg-[#591C27] text-[#F4F1EB] px-8 py-4 md:py-5 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#2C2A25] transition-colors duration-500"
              >
                <span>Book Your Stay</span>
                <span className="block w-4 h-[1px] bg-[#F4F1EB] group-hover:w-8 transition-all duration-500 ease-out"></span>
              </a>

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Flush Zero-Gap Grid (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 w-full h-[60vh] sm:h-[70vh] lg:h-[75vh] flex flex-col order-1 lg:order-2 shadow-2xl rounded-sm overflow-hidden z-10">
            
            {/* Top Half: Full Width Landscape Image */}
            <div className="w-full h-1/2 bg-[#2C2A25] group overflow-hidden relative">
              <img 
                src={fireImage2} 
                alt="Goshen campfire and twilight horizon over Laikipia" 
                loading="lazy"
                width={1200}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105"
              />
              {/* Subtle bottom shadow where it meets the lower images */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Bottom Half: Two Images Split 50/50 */}
            <div className="w-full h-1/2 flex">
              
              {/* Bottom Left */}
              <div className="w-1/2 h-full bg-[#2C2A25] group overflow-hidden relative">
                <img 
                  src={fireImage1} 
                  alt="Campfire setting at dusk at Goshen" 
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105"
                />
                {/* Subtle right shadow where it meets the right image */}
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Bottom Right */}
              <div className="w-1/2 h-full bg-[#2C2A25] group overflow-hidden">
                <img 
                  src={fireImage3} 
                  alt="Guests enjoying sundowners by the campfire at Goshen" 
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}