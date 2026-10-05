'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function WildlifeTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const wildlifeData = [
    {
      title: "Giza",
      subtitle: "The Black Leopard",
      description: "Melanistic leopards are exceptionally rare. Giza is among the very few in East Africa with a verified territory, living on her own terms within the conservancy.",
      image: "/images/giza-full.jpg"
    },
    {
      title: "The Elephant Kingdom",
      subtitle: "The Great Crossing",
      description: "For centuries, herds have moved freely through this valley. Observe the river crossing from a respectful distance, allowing you to watch the herds unseen and unobtrusive.",
      image: "/images/elephants-family.jpg"
    },
    {
      title: "African Wild Dogs",
      subtitle: "Endangered Carnivores",
      description: "The conservancy is home to a satellite-tracked pack of African wild dogs, providing a vital sanctuary and monitoring system for one of the continent's most endangered carnivores.",
      image: "/images/wild-dog-track.jpg"
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

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-white">
      
      {/* 
        CHAPTER HEADER
        A massive, breathable typography section to announce the content.
      */}
      <div className="w-full px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25]/60">
            The Inhabitants
          </span>
          <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-6">
          Wildlife
        </h1>
        
        <p className="font-sans text-sm md:text-base tracking-[0.1em] uppercase opacity-70">
          Where the real wild begins
        </p>
      </div>

      {/* 
        THE STICKY INTERACTION
        Wrapped in a relative container so it flows naturally under the header.
      */}
      <div className="relative flex flex-col lg:flex-row border-t border-[#2C2A25]/10">
        
        {/* LEFT COLUMN: The Sticky Image Viewport */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 overflow-hidden bg-[#EAE7E0]">
          {wildlifeData.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                activeIndex === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* RIGHT COLUMN: The Scrolling Text Blocks */}
        <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-16 lg:px-24">
          {wildlifeData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              data-index={index}
              className="w-full min-h-[60vh] lg:min-h-screen flex flex-col justify-center py-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-[#2C2A25]/30"></span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#591C27]">
                  {item.subtitle}
                </span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8">
                {item.title}
              </h2>
              
              <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 max-w-md mb-10">
                {item.description}
              </p>

              {index < wildlifeData.length - 1 && (
                <div className="mt-8 flex items-center gap-3 opacity-40">
                  <div className="w-[1px] h-12 bg-current"></div>
                  <span className="text-[9px] uppercase tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>
                    Keep Scrolling
                  </span>
                </div>
              )}

              {index === wildlifeData.length - 1 && (
                <a 
                  href="#wildlife-details" 
                  className="group flex items-center gap-4 text-xs tracking-[0.15em] uppercase font-medium hover:text-[#591C27] transition-colors duration-300 w-max"
                >
                  Read The Full Protocol
                  <span className="block w-6 h-[1px] bg-current group-hover:w-12 group-hover:bg-[#591C27] transition-all duration-500 ease-out"></span>
                </a>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}