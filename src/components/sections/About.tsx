import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="w-full bg-[#F4F1EB] text-[#2C2A25] px-6 py-16 md:px-16 md:py-20 lg:py-24 selection:bg-[#591C27] selection:text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: The Typography */}
        <div className="lg:col-span-7 flex flex-col z-10 lg:pr-12">
          
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25]/60">
              Our Conviction
            </span>
          </div>

          {/* Editorial Statement drawn directly from the camp's ethos */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-8">
            The wild is not our product. It is our <span className="italic text-[#591C27] font-light">responsibility.</span>
          </h2>

          {/* Context Paragraph integrating the Laikipia location and exclusivity */}
          <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 mb-8 max-w-lg">
            Set within Laikipia's Ewaso Enclave Conservancy, Ewaso Elephant Crossing is built on a single belief: the rarest wildlife experiences must remain unstaged and unobtrusive. With a strict limit of just three vehicles and an intimate footprint, we offer an uncompromising gateway to the Elephant Kingdom and the elusive territory of Giza, the black leopard.
          </p>

          <a 
            href="#discover-more" 
            className="group flex items-center gap-4 text-xs tracking-[0.15em] uppercase font-medium hover:text-[#591C27] transition-colors duration-300 w-max"
          >
            Explore The Conservancy
            <span className="block w-6 h-[1px] bg-current group-hover:w-12 group-hover:bg-[#591C27] transition-all duration-500 ease-out"></span>
          </a>
        </div>

        {/* RIGHT COLUMN: The Photograph */}
        <div className="lg:col-span-5 relative lg:mt-16">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EAE7E0] shadow-2xl">
            <img 
              src="/images/elephants-hidden.jpg" 
              alt="Elephants in the Laikipia Savannah" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>

          <div className="absolute -inset-4 border border-[#2C2A25]/10 -z-10 hidden md:block translate-x-4 translate-y-4"></div>
        </div>

      </div>
    </section>
  );
}