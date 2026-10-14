'use client';

import React from 'react';

export default function CampVerandaAndBath() {
  const baseUrl = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/";

  // The two bathroom images
  const bathMain = `${baseUrl}CAMP5.jpeg`;
  const bathDetail = `${baseUrl}WhatsApp%20Image%202026-10-09%20at%2020.01.57%20(1).jpeg`;

  return (
    <section id="refresh" className="relative w-full min-h-[100svh] lg:h-[100svh] bg-[#591C27] text-[#F4F1EB] flex items-center selection:bg-[#F4F1EB] selection:text-[#591C27] overflow-hidden border-t border-[#F4F1EB]/10 py-16 lg:py-0">
      
      {/* Subtle overlay noise texture for depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ========================================================
              LEFT COLUMN: Typography & Copy (5 Cols)
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-10 h-[1px] bg-[#F4F1EB]/40"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#F4F1EB]/70">
                02 / The En-Suite
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8">
              Hot bush showers & <br />
              <span className="italic font-light text-[#F4F1EB]/85">rough-hewn luxury.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/80">
              <p>
                After a dusty day on the plains, every tent has its own private bathroom built with rich natural stone walls, handcrafted timber, and a private stone veranda.
              </p>
              <p>
                Enjoy large vessel basins, high-pressure hot showers, and modern flushing toilets—bringing absolute comfort straight into the wild.
              </p>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: 100vh Layered Image Collage (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] flex items-center order-1 lg:order-2">
            
            {/* Primary Background Image (Top Right) */}
            <div className="absolute top-0 right-0 w-[80%] h-[75%] overflow-hidden bg-[#2C2A25] shadow-2xl rounded-sm group">
              <img 
                src={bathMain} 
                alt="Goshen en-suite bathroom with stone shower and handcrafted vanity" 
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#591C27]/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Secondary Overlapping Image (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[65%] overflow-hidden bg-[#2C2A25] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[6px] md:border-[10px] border-[#591C27] rounded-sm group z-20">
              <img 
                src={bathDetail} 
                alt="Goshen bathroom stone wall and wooden vanity details" 
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#591C27]/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}