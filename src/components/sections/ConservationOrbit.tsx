import React from 'react';

export default function Conservation() {
  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] px-6 py-24 md:px-16 md:py-32 selection:bg-[#591C27] selection:text-white">
      
      {/* 
        HEADER SECTION 
        Anchored perfectly in the center to establish symmetry.
      */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16 md:mb-24">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25]/60 mb-6">
          Conservation
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2A25] tracking-tight mb-8">
          Preserving Life’s Balance
        </h2>
        
        <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 mb-10 max-w-2xl">
          We actively protect the Ewaso Enclave. Every stay directly funds 24/7 anti-poaching operations, species monitoring for endangered African wild dogs, and protects the historic elephant corridors of Laikipia.
        </p>

        <a 
          href="#efforts" 
          className="group flex items-center gap-4 text-xs tracking-[0.15em] uppercase font-medium hover:text-[#591C27] transition-colors duration-300"
        >
          View Conservation Initiatives
          <span className="block w-6 h-[1px] bg-current group-hover:w-12 group-hover:bg-[#591C27] transition-all duration-500 ease-out"></span>
        </a>
      </div>

      {/* 
        UNIFORM TRIPTYCH GRID
        Three perfectly aligned images. No scattering. 
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        
        {/* Image 1: The Landscape */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] group shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7fc2caa7fc12?q=80&w=800&auto=format&fit=crop" 
            alt="Ewaso Nyiro River" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          <div className="absolute bottom-6 left-6 text-[#F4F1EB] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold drop-shadow-md">The Landscape</span>
          </div>
        </div>

        {/* Image 2: The Wildlife */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] group shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop" 
            alt="African Wild Dogs / Antelope" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          <div className="absolute bottom-6 left-6 text-[#F4F1EB] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold drop-shadow-md">The Wildlife</span>
          </div>
        </div>

        {/* Image 3: The Rangers/Community */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] group shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
            alt="Community and Flora" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
          <div className="absolute bottom-6 left-6 text-[#F4F1EB] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold drop-shadow-md">The Community</span>
          </div>
        </div>

      </div>

    </section>
  );
}