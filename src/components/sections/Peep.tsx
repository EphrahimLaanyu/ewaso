'use client'; 

import React, { useEffect, useRef, useState } from 'react'; 

export default function WildlifeTeaser() { 
  const [activeIndex, setActiveIndex] = useState(0); 
  const textRefs = useRef<(HTMLDivElement | null)[]>([]); 

  const wildlifeData = [ 
    { 
      title: "Giza", 
      subtitle: "The Shadow of Laikipia", 
      description: "Encounters with melanistic leopards are vanishingly rare. Giza stands as one of the few in the region with an established domain, roaming the landscape undisturbed in the quiet shadows of the bush.", 
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/giza-full.jpg" 
    }, 
    { 
      title: "The Elephant Trails", 
      subtitle: "Walking Paths", 
      description: "These natural walking paths have guided wandering herds for generations. From a discreet vantage point, you can witness their river crossings in absolute silence, leaving their journey undisturbed.", 
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-11%20at%2009.43.53%20(1).jpeg" 
    }, 
    { 
      title: "African Wild Dogs", 
      subtitle: "A Vital Refuge", 
      description: "Our territory serves as a critical haven for a monitored pack of African wild dogs. By fiercely protecting this habitat, we help secure the future of one of the continent's most endangered predators.", 
      // Note: Stock photo removed per editorial brief. Placeholder set for client-provided field photograph of resident wild dog pack.
      image: "" 
    } 
  ]; 

  useEffect(() => { 
    const observer = new IntersectionObserver( 
      (entries) => { 
        entries.forEach((entry) => { 
          if (entry.isIntersecting) { 
            const index = Number(entry.target.getAttribute('data-index')); 
            setActiveIndex(index); 
          } 
        }); 
      }, 
      { 
        root: null, 
        rootMargin: '0px', 
        threshold: 0.5, 
      } 
    ); 

    const currentRefs = textRefs.current; 
    currentRefs.forEach((ref) => { 
      if (ref) observer.observe(ref); 
    }); 

    return () => { 
      currentRefs.forEach((ref) => { 
        if (ref) observer.unobserve(ref); 
      }); 
    }; 
  }, []); 

  return ( 
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-white border-t border-[#2C2A25]/10"> 
      
      {/* CHAPTER HEADER */} 
      <div className="w-full px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center text-center"> 
        <div className="flex items-center gap-4 mb-6 md:mb-8"> 
          <span className="w-6 md:w-8 h-[1px] bg-[#2C2A25]/30"></span> 
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25]/60"> 
            The Ecosystem 
          </span> 
          <span className="w-6 md:w-8 h-[1px] bg-[#2C2A25]/30"></span> 
        </div> 
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-none tracking-tight mb-4 md:mb-6"> 
          The Wild 
        </h1> 
        <p className="font-sans text-xs md:text-sm tracking-[0.1em] uppercase opacity-70"> 
          Unscripted and unconfined
        </p> 
      </div> 

      <div className="w-full"> 
        
        {/* --- MOBILE & TABLET LAYOUT (< 1024px) --- */} 
        <div className="flex flex-col lg:hidden w-full"> 
          {wildlifeData.map((item, index) => ( 
            <div key={index} className="w-full flex flex-col border-t border-[#2C2A25]/10"> 
              
              {/* Image Block */} 
              <div className="w-full h-[45vh] bg-[#EAE7E0] overflow-hidden"> 
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover" 
                  /> 
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#2C2A25] text-[#F4F1EB] p-8 text-center">
                    {/* Placeholder for client-provided image */}
                    <div className="w-12 h-12 rounded-full border border-[#F4F1EB]/30 flex items-center justify-center mb-3">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                    </div>
                    <span className="font-serif text-2xl tracking-tight mb-1">African Wild Dogs</span>
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#F4F1EB]/60">
                      Client Photo Placeholder · Monitored Pack
                    </span>
                  </div>
                )}
              </div> 

              {/* Text Block */} 
              <div className="w-full px-6 py-12 md:py-16 flex flex-col justify-center bg-[#F4F1EB]"> 
                <div className="flex items-center gap-4 mb-5"> 
                  <span className="w-6 h-[1px] bg-[#2C2A25]/30"></span> 
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#591C27]"> 
                    {item.subtitle} 
                  </span> 
                </div> 
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-5"> 
                  {item.title} 
                </h2> 
                <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 mb-8 max-w-md"> 
                  {item.description} 
                </p> 
                
                {index === wildlifeData.length - 1 && ( 
                  <a 
                    href="/#ethos" 
                    className="group flex items-center gap-4 text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold hover:text-[#591C27] transition-colors duration-300 w-max mt-2" 
                  > 
                    Explore Our Conservation Ethos
                    <span className="block w-6 h-[1px] bg-current group-hover:w-10 group-hover:bg-[#591C27] transition-all duration-500 ease-out"></span> 
                  </a> 
                )} 
              </div> 
            </div> 
          ))} 
        </div> 

        {/* --- DESKTOP LAYOUT (>= 1024px) --- */} 
        <div className="hidden lg:flex relative w-full flex-row border-t border-[#2C2A25]/10"> 
          
          {/* LEFT COLUMN: The Sticky Image Viewport */} 
          <div className="w-1/2 h-screen sticky top-0 overflow-hidden bg-[#EAE7E0]"> 
            {wildlifeData.map((item, index) => ( 
              item.image ? (
                <img 
                  key={index} 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${ 
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105' 
                  }`} 
                /> 
              ) : (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#2C2A25] text-[#F4F1EB] p-12 text-center transition-all duration-1000 ease-in-out ${ 
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none' 
                  }`}
                >
                  {/* Placeholder note for client photograph */}
                  <div className="w-16 h-16 rounded-full border border-[#F4F1EB]/30 flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </div>
                  <span className="font-serif text-3xl md:text-4xl tracking-tight mb-3">African Wild Dogs</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/60 max-w-sm">
                    Client Photography Forthcoming · Monitored Resident Pack
                  </span>
                </div>
              )
            ))} 
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div> 
          </div> 

          {/* RIGHT COLUMN: The Scrolling Text Blocks */} 
          <div className="w-1/2 flex flex-col px-16 xl:px-24"> 
            {wildlifeData.map((item, index) => ( 
              <div 
                key={index} 
                ref={(el) => { 
                  textRefs.current[index] = el; 
                }} 
                data-index={index} 
                className="w-full min-h-screen flex flex-col justify-center py-16" 
              > 
                <div className="flex items-center gap-4 mb-8"> 
                  <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span> 
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#591C27]"> 
                    {item.subtitle} 
                  </span> 
                </div> 
                <h2 className="font-serif text-5xl xl:text-6xl tracking-tight mb-8"> 
                  {item.title} 
                </h2> 
                <p className="font-sans text-sm xl:text-base leading-relaxed tracking-wide opacity-80 max-w-md mb-12"> 
                  {item.description} 
                </p> 
                
                {index < wildlifeData.length - 1 && ( 
                  <div className="flex items-center gap-3 opacity-30 mt-4"> 
                    <div className="w-[1px] h-12 bg-current"></div> 
                    <span 
                      className="text-[9px] uppercase tracking-[0.2em]" 
                      style={{ writingMode: 'vertical-rl' }}
                    > 
                      Scroll 
                    </span> 
                  </div> 
                )} 

                {index === wildlifeData.length - 1 && ( 
                  <a 
                    href="/#ethos" 
                    className="group flex items-center gap-4 text-[10px] xl:text-xs tracking-[0.15em] uppercase font-bold hover:text-[#591C27] transition-colors duration-300 w-max mt-4" 
                  > 
                    Explore Our Conservation Ethos
                    <span className="block w-6 h-[1px] bg-current group-hover:w-12 group-hover:bg-[#591C27] transition-all duration-500 ease-out"></span> 
                  </a> 
                )} 
              </div> 
            ))} 
          </div> 
        </div> 

      </div> 
    </section> 
  ); 
}