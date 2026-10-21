'use client';

import React from 'react';
import Link from 'next/link';

export default function WildlifeTeaser() {
  const wildlifeData = [
    {
      title: "Giza",
      subtitle: "The Shadow of Laikipia",
      description: "Encounters with melanistic leopards are vanishingly rare. Giza is one of the few black leopards in Kenya with a scientifically documented and verified territory, roaming the rocky outcrops and river valleys of the Ewaso Enclave undisturbed.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/giza-looking.jpeg"
    },
    {
      title: "Elephant Trails",
      subtitle: "Walking Paths",
      description: "Natural seasonal corridors cross through the conservancy as herds move between feeding grounds and the river. Guests walk designated elephant paths on foot accompanied by an armed ranger, scheduled during midday rest hours and maintaining a minimum 100-meter distance so herds remain undisturbed.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/Elephants-in-river.jpeg"
    },
    {
      title: "African Wild Dogs",
      subtitle: "A Vital Refuge",
      description: "The conservancy provides an essential sanctuary for a resident, monitored pack of African wild dogs. Ongoing protection ensures this critically endangered predator continues to hunt and den safely in Laikipia.",
      // Placeholder set for client-provided field photograph of resident wild dog pack.
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/wild-dogs-2.jpeg"
    }
  ];

  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] border-t border-[#2C2A25]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
      
      {/* CHAPTER HEADER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#591C27]">
            The Ecosystem
          </span>
          <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4">
          The Wild
        </h2>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.1em] uppercase opacity-70">
          Unscripted and unconfined
        </p>
      </div>

      {/* EDITORIAL GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {wildlifeData.map((item, index) => (
          <div key={index} className="flex flex-col group">
            
            {/* Image Block */}
            <div className="w-full aspect-[4/5] bg-[#EAE7E0] overflow-hidden mb-5 shadow-lg">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#2C2A25] text-[#F4F1EB] p-6 text-center">
                  <div className="w-10 h-10 rounded-full border border-[#F4F1EB]/30 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </div>
                  <span className="font-serif text-xl tracking-tight mb-2">African Wild Dogs</span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#F4F1EB]/60">
                    Field Photo Forthcoming
                  </span>
                </div>
              )}
            </div>

            {/* Text Block */}
            <div className="flex flex-col border-t border-[#2C2A25]/10 pt-4">
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#591C27] mb-2">
                {item.subtitle}
              </span>
              <h3 className="font-serif text-2xl tracking-tight mb-3 text-[#2C2A25]">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#2C2A25]/80">
                {item.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* REAL CONTENT LINKS: EXPLORE OUR CONSERVATION ETHOS & FULL PROTOCOL */}
      <div className="w-full max-w-7xl mx-auto mt-16 pt-8 border-t border-[#2C2A25]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a 
          href="#ethos" 
          className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors"
        >
          <span>Explore Our Conservation Ethos</span>
          <span className="w-6 h-[1px] bg-[#591C27] group-hover:w-10 group-hover:bg-[#2C2A25] transition-all duration-300"></span>
        </a>

        <Link 
          href="/about#ethos" 
          className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-[#2C2A25]/70 hover:text-[#591C27] transition-colors"
        >
          <span>Read The Full Protocol</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>

    </section>
  );
}