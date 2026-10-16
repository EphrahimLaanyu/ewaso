'use client';

import React from 'react';
import Link from 'next/link';

export default function CampPreview() {
  const mainImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/luxury-tent-suite-master-bed-panorama.jpeg";
  const secondaryImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/ensuite-bathroom-sink-counter-toiletries.jpeg";
  
  return (
    <section className="relative w-full min-h-[100svh] lg:h-[100svh] bg-[#591C27] text-[#F4F1EB] px-6 md:px-12 lg:px-20 py-16 lg:py-0 flex items-center selection:bg-[#F4F1EB] selection:text-[#591C27] overflow-hidden border-t border-[#F4F1EB]/10">
      
      {/* Subtle Background Grain Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ==========================================
              LEFT COLUMN: Layered Image Collage (7 Cols)
          ========================================== */}
          <div className="lg:col-span-7 relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] flex items-center order-2 lg:order-1">
            
            {/* Main Primary Image (Top-Left Base) */}
            <div className="w-[82%] h-[85%] overflow-hidden bg-[#2C2A25] shadow-2xl relative z-10 group rounded-sm">
              <img 
                src={mainImage} 
                alt="Goshen Luxury Canvas Suite Interior" 
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#591C27]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Secondary Overlapping Image (Bottom-Right Floating Cutout) */}
            <div className="w-[52%] h-[55%] absolute bottom-0 right-0 overflow-hidden bg-[#2C2A25] shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-20 border-[6px] md:border-[10px] border-[#591C27] group rounded-sm">
              <img 
                src={secondaryImage} 
                alt="Goshen En-Suite Bathroom" 
                loading="lazy"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#591C27]/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Subtle Editorial Caption */}
            <div className="absolute bottom-3 left-2 z-30 hidden sm:flex items-center gap-3">
              <span className="w-4 h-[1px] bg-[#F4F1EB]/40"></span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#F4F1EB]/60">
                01 / Canvas & Comfort
              </span>
            </div>

          </div>

          {/* ==========================================
              RIGHT COLUMN: Editorial Copy & Clear CTA (5 Cols)
          ========================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6 order-1 lg:order-2">
            
            {/* Section Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#F4F1EB]/40"></span>
              <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#F4F1EB]/80">
                The Camp
              </h2>
            </div>

            {/* Main Headline */}
            <h3 className="font-serif text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight mb-6">
              Your private home <br />
              <span className="italic font-light text-[#F4F1EB]/85">in the bush.</span>
            </h3>

            {/* Easy-to-read Copy */}
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/85 mb-8">
              After a long day out in the bush, come back to a place built for pure rest. Enjoy hot showers, big comfortable beds, and a cold drink by the campfire right under the stars.
            </p>

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#F4F1EB]/15 mb-10">
              <div>
                <span className="block font-serif text-xl md:text-2xl text-[#F4F1EB] mb-1">Luxury Tents</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#F4F1EB]/60">King Beds & Private Stone Veranda</span>
              </div>
              <div>
                <span className="block font-serif text-xl md:text-2xl text-[#F4F1EB] mb-1">Bush Dining</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#F4F1EB]/60">Fresh Meals Under the Stars</span>
              </div>
            </div>

            {/* High-Contrast, Clear CTA Button */}
            <div>
              <Link 
                href="/camp" 
                className="group inline-flex items-center justify-between gap-6 bg-[#F4F1EB] text-[#591C27] px-8 py-4 md:py-5 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:bg-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
              >
                <span>Explore The Camp</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}