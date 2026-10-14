'use client';

import React from 'react';
import Link from 'next/link';

export default function CampInquiryCTA() {
  return (
    <section className="relative w-full bg-[#591C27] text-[#F4F1EB] py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden selection:bg-[#F4F1EB] selection:text-[#591C27]">
      {/* Subtle overlay noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-[#F4F1EB]/40"></span>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#F4F1EB]/70">
            Reservations & Inquiries
          </span>
          <span className="w-8 h-[1px] bg-[#F4F1EB]/40"></span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8 max-w-3xl">
          Plan your journey to <br className="hidden sm:inline" />
          <span className="italic font-light text-[#F4F1EB]/90">Goshen.</span>
        </h2>

        <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/80 max-w-2xl mb-10">
          Canvas suites with king or twin beds, private stone verandas, and unscripted wildlife encounters in the heart of Laikipia.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
          <Link
            href="/#reservations"
            className="group inline-flex items-center justify-between gap-6 bg-[#F4F1EB] text-[#591C27] px-8 py-5 text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors duration-500 shadow-xl"
          >
            <span>Book Your Stay</span>
            <span className="block w-4 h-[1px] bg-[#591C27] group-hover:bg-[#F4F1EB] group-hover:w-8 transition-all duration-500 ease-out"></span>
          </Link>

          <a 
            href="mailto:info@goshendomain.com"
            className="inline-flex items-center px-8 py-5 border border-[#F4F1EB]/30 text-[#F4F1EB] text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#F4F1EB]/10 transition-colors duration-500"
          >
            Email Concierge
          </a>
        </div>

        <div className="pt-8 border-t border-[#F4F1EB]/15 w-full max-w-xl text-center space-y-2">
          <p className="font-sans text-xs md:text-sm text-[#F4F1EB]/85 font-serif italic">
            Booking is exclusive with Rhino Watch Safaris Ltd (Apasio Collection).
          </p>
          <p className="font-sans text-[11px] tracking-wider text-[#F4F1EB]/60 uppercase">
            3-Night Minimum Stay &bull; Full Board &bull; Rates From $440 Per Person / Night (+$70 Conservancy Fee)
          </p>
        </div>

      </div>
    </section>
  );
}
