import React from 'react';

export default function OurConviction() {
  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="w-12 h-[1px] bg-[#2C2A25]/30"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2C2A25]/50">
            Our Belief
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 md:divide-x divide-[#2C2A25]/20">
          
          {/* LEFT COLUMN: The Core Belief */}
          <div className="md:pr-12 lg:pr-20 flex flex-col justify-center">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight mb-8">
              Goshen Laikipia Camp was built on one simple belief: true wildlife experiences must stay <span className="italic text-[#591C27] font-light">wild.</span>
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80">
              We do not stage animal sightings or crowd the savannah with vehicles. By keeping our camp small, we make sure the natural life of Laikipia continues completely undisturbed.
            </p>
          </div>

          {/* RIGHT COLUMN: The Application + Image */}
          <div className="md:pl-12 lg:pl-20 flex flex-col justify-between pt-8 md:pt-0">
            
            {/* The Image at the top */}
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#EAE7E0] mb-8 md:mb-auto">
              <img 
                src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.01.55%20(2).jpeg" 
                alt="Goshen Camp Conservation" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* The Text at the bottom */}
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mt-8">
              Protecting nature isn't just an extra project for us—it is the whole reason we exist. We stay quiet and respectful to protect the land, giving you a responsible, front-row seat to the real African bush.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}