'use client';

import React from 'react';

export default function CampPavilion() {
  const baseUrl = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/";

  // The three dining/pavilion images
  const diningMain = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.05.25.jpeg`;
  const diningAlt1 = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.01.55%20(2).jpeg`;
  const diningAlt2 = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.05.25%20(1).jpeg`;

  return (
    <section id="pavilion" className="relative w-full min-h-[100svh] lg:h-[100svh] bg-[#F4F1EB] text-[#2C2A25] flex items-center selection:bg-[#591C27] selection:text-[#F4F1EB] overflow-hidden py-16 lg:py-0">
      
      {/* Subtle overlay noise texture for a high-end print feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ========================================================
              LEFT: Typography & Story (5 Cols)
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 z-20">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#591C27]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
                03 / The Pavilion
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8">
              Open-air dining & <br />
              <span className="italic font-light text-[#591C27]">endless views.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 pr-0 lg:pr-6">
              <p>
                At the heart of the camp sits our open-sided main pavilion. With 360-degree views of Laikipia, there are no walls between you and the landscape.
              </p>
              <p>
                Gather around the long wooden table—dressed in bright Maasai shukas—for fresh, home-cooked meals. Our camp chef uses fresh local ingredients and expertly handles all dietary needs, while the lounge sofas invite you to relax with a cold drink during the heat of the day.
              </p>
            </div>

          </div>

          {/* ========================================================
              RIGHT: 100vh Flush Grid / Touching Images (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex order-1 lg:order-2 shadow-2xl rounded-sm overflow-hidden z-10">
            
            {/* Left Half: Main Image (Spans Full Height) */}
            <div className="w-1/2 h-full bg-[#2C2A25] group overflow-hidden relative">
              <img 
                src={diningMain} 
                alt="Main dining table in the Goshen pavilion" 
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105"
              />
              {/* Subtle inner dark gradient for depth where images meet */}
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Half: Two Stacked Images */}
            <div className="w-1/2 h-full flex flex-col">
              
              {/* Top Right */}
              <div className="w-full h-1/2 bg-[#2C2A25] group overflow-hidden relative">
                <img 
                  src={diningAlt1} 
                  alt="Goshen dining table setting details" 
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Bottom Right */}
              <div className="w-full h-1/2 bg-[#2C2A25] group overflow-hidden">
                <img 
                  src={diningAlt2} 
                  alt="Goshen pavilion lounge looking out across the bush" 
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