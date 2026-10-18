import React from 'react'; 
import Link from 'next/link';

export default function ConservationEthos() { 
  return ( 
    <section id="ethos" className="relative w-full bg-[#591C27] pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-16 flex flex-col items-center selection:bg-[#F4F1EB] selection:text-[#591C27] border-t border-[#F4F1EB]/10 overflow-hidden"> 
      
      {/* SUBTLE CSS NOISE TEXTURE OVERLAY */} 
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      ></div> 

      {/* SECTION LABEL */} 
      <div className="relative z-10 flex items-center gap-4 mb-12"> 
        <span className="w-12 h-[1px] bg-[#F4F1EB]/30"></span> 
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#F4F1EB] opacity-90"> 
          Our Conservation Ethos
        </span> 
        <span className="w-12 h-[1px] bg-[#F4F1EB]/30"></span> 
      </div> 

      {/* THE QUOTE BLOCK */} 
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-28"> 
        {/* Massive atmospheric quote mark */} 
        <span className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 font-serif text-[7rem] md:text-[10rem] leading-none text-[#F4F1EB] opacity-[0.07] pointer-events-none select-none"> 
          “ 
        </span> 
        <h2 className="relative z-10 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight text-[#F4F1EB]"> 
          We don't bait. We don't stage sightings. We don't get in the way.<br className="hidden md:block mt-2" /> 
          <span className="italic font-light opacity-90"> Keeping this ecosystem undisturbed is our absolute priority.</span> 
        </h2> 
        <p className="relative z-10 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/85 mt-6 max-w-2xl mx-auto">
          Guests experience wildlife on nature&apos;s terms—maintaining respectful distance on foot and in vehicles, always accompanied by dedicated armed rangers.
        </p> 
      </div> 

      {/* THE THREE PILLARS (GRID) */} 
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"> 
        
        {/* Pillar 1: Anti-Poaching */} 
        <div className="flex flex-col border-t border-[#F4F1EB]/20 pt-8 group"> 
          <div className="mb-6 text-[#F4F1EB] opacity-90 transition-transform duration-500 group-hover:-translate-y-1"> 
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"> 
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> 
            </svg> 
          </div> 
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#F4F1EB] tracking-tight"> 
            24/7 Ranger Patrols
          </h3> 
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-80 text-[#F4F1EB] font-normal tracking-wide"> 
            A dedicated conservation share of every booking directly funds round-the-clock community ranger patrols protecting the enclave&apos;s wildlife corridors.
          </p> 
        </div> 

        {/* Pillar 2: Community Employment */} 
        <div className="flex flex-col border-t border-[#F4F1EB]/20 pt-8 group"> 
          <div className="mb-6 text-[#F4F1EB] opacity-90 transition-transform duration-500 group-hover:-translate-y-1"> 
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"> 
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> 
              <circle cx="9" cy="7" r="4"></circle> 
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path> 
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> 
            </svg> 
          </div> 
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#F4F1EB] tracking-tight"> 
            Community Employment
          </h3> 
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-80 text-[#F4F1EB] font-normal tracking-wide"> 
            All guides, trackers, and camp hospitality staff are hired directly from the local communities bordering the Ewaso Enclave Conservancy.
          </p> 
        </div> 

        {/* Pillar 3: Species Monitoring */} 
        <div className="flex flex-col border-t border-[#F4F1EB]/20 pt-8 group"> 
          <div className="mb-6 text-[#F4F1EB] opacity-90 transition-transform duration-500 group-hover:-translate-y-1"> 
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"> 
              <circle cx="12" cy="12" r="3"></circle> 
              <path d="M19.4 15a1.65 1.65 0 0 0 .11 1.89l1.25 1.56a1.5 1.5 0 0 1-.44 2.5l-1.55.83a1.6 1.6 0 0 0-.84 1.45l-.17 1.96a1.5 1.5 0 0 1-1.74 1.34l-1.75-.24a1.6 1.6 0 0 0-1.76.71l-1 1.7a1.5 1.5 0 0 1-2.43 0l-1-1.7a1.6 1.6 0 0 0-1.76-.71l-1.75.24a1.5 1.5 0 0 1-1.74-1.34l-.17-1.96a1.6 1.6 0 0 0-.84-1.45l-1.55-.83a1.5 1.5 0 0 1-.44-2.5l1.25-1.56a1.65 1.65 0 0 0 .11-1.89l-1.25-1.56a1.5 1.5 0 0 1 .44-2.5l1.55-.83a1.6 1.6 0 0 0 .84-1.45l.17-1.96a1.5 1.5 0 0 1 1.74-1.34l1.75.24a1.6 1.6 0 0 0 1.76-.71l1-1.7a1.5 1.5 0 0 1 2.43 0l1 1.7a1.6 1.6 0 0 0 1.76.71l1.75-.24a1.5 1.5 0 0 1 1.74 1.34l.17 1.96a1.6 1.6 0 0 0 .84 1.45l1.55.83a1.5 1.5 0 0 1 .44 2.5l-1.25 1.56a1.65 1.65 0 0 0-.11 1.89z"></path> 
            </svg> 
          </div> 
          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#F4F1EB] tracking-tight"> 
            Species Monitoring
          </h3> 
          <p className="font-sans text-xs md:text-sm leading-relaxed opacity-80 text-[#F4F1EB] font-normal tracking-wide"> 
            In partnership with field researchers, our teams monitor resident wildlife including elephant migration corridors, African wild dogs, and Giza the black leopard.
          </p> 
        </div> 

      </div> 

      {/* FULL PROTOCOL CTA */}
      <div className="relative z-10 mt-16 text-center">
        <Link 
          href="/about#ethos" 
          className="inline-flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#F4F1EB] hover:text-[#EAE7E0] border-b border-[#F4F1EB]/40 pb-1 hover:border-[#F4F1EB] transition-all"
        >
          <span>Read The Complete Conservation Protocol</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>

    </section> 
  ); 
}