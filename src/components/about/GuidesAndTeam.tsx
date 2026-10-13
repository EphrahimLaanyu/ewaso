import React from 'react'; 

export default function GuidesAndTeam() { 
  const guideImage = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.07.57.jpeg"; 

  return ( 
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] px-6 md:px-12 lg:px-20 pb-24 md:pb-32 selection:bg-[#591C27] selection:text-[#F4F1EB]"> 
      <div className="max-w-7xl mx-auto"> 
        
        {/* THE DIVIDER */} 
        <div className="w-full h-[1px] bg-[#2C2A25]/15 mb-24 md:mb-32"></div> 

        {/* Section Label */} 
        <div className="flex items-center gap-4 mb-12 md:mb-16"> 
          <span className="w-12 h-[1px] bg-[#2C2A25]/30"></span> 
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2C2A25]/50"> 
            Our Local Experts
          </h2> 
        </div> 

        {/* Editorial Layout: Wide Image on Left, Text on Right */} 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"> 
          
          {/* LEFT COLUMN: Expansive Image */} 
          <div className="lg:col-span-7 w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#EAE7E0] group shadow-xl order-2 lg:order-1"> 
            <img 
              src={guideImage} 
              alt="Goshen Camp Guides and Tracking" 
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" 
            /> 
          </div> 

          {/* RIGHT COLUMN: Copy */} 
          <div className="lg:col-span-5 flex flex-col order-1 lg:order-2"> 
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8"> 
              The Guides & <br /> 
              <span className="italic text-[#591C27] font-light">Team</span> 
            </h3> 
            
            <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80"> 
              <p> 
                The bush has its own language of animal footprints, changing winds, and distant alarm calls—something our team has understood since childhood. Led by Dalmas, an expert guide born right here in the area, our spotters do more than just find animals for you. They help you truly understand how the whole environment works together.
              </p> 
              <p> 
                Whether they are heading out before the sun comes up to track a pack of wild dogs, or leading you on a safe walking safari, our guides make sure every moment is easy to learn from and completely respectful of the wildlife.
              </p> 
            </div> 
            
            {/* Minimalist Accent */} 
            <div className="mt-12"> 
              <span className="inline-block w-8 h-[1px] bg-[#591C27]"></span> 
            </div> 
          </div> 

        </div> 

      </div> 
    </section> 
  ); 
}