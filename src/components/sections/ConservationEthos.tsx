import React from 'react';

export default function ConservationEthos() {
  return (
    <section className="relative w-full bg-[#F4F1EB] pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-16 flex flex-col items-center selection:bg-[#591C27] selection:text-[#F4F1EB] border-t border-[#591C27]/10 mt-12 overflow-hidden">
      
      {/* 
        SUBTLE CSS NOISE TEXTURE OVERLAY 
        Gives the flat cream background a rich, tactile, heavy paper feel.
      */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* SECTION LABEL */}
      <div className="relative z-10 flex items-center gap-4 mb-14">
        <span className="w-12 h-[1px] bg-[#591C27]/40"></span>
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
          Conservation Without Compromise
        </span>
        <span className="w-12 h-[1px] bg-[#591C27]/40"></span>
      </div>

      {/* THE QUOTE BLOCK */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-24 md:mb-32">
        {/* Massive atmospheric quote mark */}
        <span className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 font-serif text-[7rem] md:text-[10rem] leading-none text-[#591C27] opacity-10 pointer-events-none select-none">
          “
        </span>
        <h2 className="relative z-10 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight text-[#591C27]">
          We do not bait. We do not stage. We do not disrupt.<br className="hidden md:block mt-2" />
          <span className="italic font-light text-[#591C27]"> The wild is not our product. It is our responsibility.</span>
        </h2>
      </div>

      {/* THE THREE PILLARS (GRID) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        
        {/* Pillar 1: Anti-Poaching */}
        <div className="flex flex-col border-t border-[#591C27]/30 pt-8 group">
          <div className="mb-6 text-[#591C27] transition-transform duration-500 group-hover:-translate-y-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#591C27] tracking-tight">
            24/7 Anti-Poaching
          </h3>
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-85 text-[#2C2A25] font-normal tracking-wide">
            A portion of every booking directly funds round-the-clock anti-poaching operations protecting the enclave's wildlife.
          </p>
        </div>

        {/* Pillar 2: Community Employment */}
        <div className="flex flex-col border-t border-[#591C27]/30 pt-8 group">
          <div className="mb-6 text-[#591C27] transition-transform duration-500 group-hover:-translate-y-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#591C27] tracking-tight">
            Community Employment
          </h3>
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-85 text-[#2C2A25] font-normal tracking-wide">
            Field teams, guides, and trackers are hired exclusively from the local communities bordering the Ewaso Enclave.
          </p>
        </div>

        {/* Pillar 3: Species Monitoring */}
        <div className="flex flex-col border-t border-[#591C27]/30 pt-8 group">
          <div className="mb-6 text-[#591C27] transition-transform duration-500 group-hover:-translate-y-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .11 1.89l1.25 1.56a1.5 1.5 0 0 1-.44 2.5l-1.55.83a1.6 1.6 0 0 0-.84 1.45l-.17 1.96a1.5 1.5 0 0 1-1.74 1.34l-1.75-.24a1.6 1.6 0 0 0-1.76.71l-1 1.7a1.5 1.5 0 0 1-2.43 0l-1-1.7a1.6 1.6 0 0 0-1.76-.71l-1.75.24a1.5 1.5 0 0 1-1.74-1.34l-.17-1.96a1.6 1.6 0 0 0-.84-1.45l-1.55-.83a1.5 1.5 0 0 1-.44-2.5l1.25-1.56a1.65 1.65 0 0 0 .11-1.89l-1.25-1.56a1.5 1.5 0 0 1 .44-2.5l1.55-.83a1.6 1.6 0 0 0 .84-1.45l.17-1.96a1.5 1.5 0 0 1 1.74-1.34l1.75.24a1.6 1.6 0 0 0 1.76-.71l1-1.7a1.5 1.5 0 0 1 2.43 0l1 1.7a1.6 1.6 0 0 0 1.76.71l1.75-.24a1.5 1.5 0 0 1 1.74 1.34l.17 1.96a1.6 1.6 0 0 0 .84 1.45l1.55.83a1.5 1.5 0 0 1 .44 2.5l-1.25 1.56a1.65 1.65 0 0 0-.11 1.89z"></path>
            </svg>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#591C27] tracking-tight">
            Species Monitoring
          </h3>
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-85 text-[#2C2A25] font-normal tracking-wide">
            Endangered species (including Giza, the elephant herds, and wild dogs) are tracked and documented to contribute to global science.
          </p>
        </div>

      </div>

    </section>
  );
}