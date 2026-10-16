'use client';

import React from 'react';

export default function WildlifeTeaser() {
  const wildlifeData = [
    {
      title: "Giza",
      subtitle: "The Shadow of Laikipia",
      description: "Encounters with melanistic leopards are vanishingly rare. Giza stands as one of the few in the region with an established domain, roaming the landscape undisturbed in the quiet shadows of the bush.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/black-leopard-and-spotted-leopard-portrait.jpeg"
    },
    {
      title: "The Elephant Crossing",
      subtitle: "Walking Paths",
      description: "These natural walking paths have guided wandering herds for generations. From a discreet vantage point, you can witness their river crossings in absolute silence, leaving their journey undisturbed.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/aerial-elephants-crossing-ewaso-nyiro-river-1.jpeg"
    },
    {
      title: "African Wild Dogs",
      subtitle: "A Vital Refuge",
      description: "Our territory serves as a critical haven for a monitored pack of African wild dogs. By fiercely protecting this habitat, we help secure the future of one of the continent's most endangered predators.",
      // Placeholder set for client-provided field photograph of resident wild dog pack.
      image: ""
    }
  ];

  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] border-t border-[#2C2A25]/10 py-12 md:py-16 px-6 md:px-12 lg:px-20">
      
      {/* CHAPTER HEADER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center mb-10 md:mb-12">
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
                    Client Photo Forthcoming
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


    </section>
  );
}