'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // The curated sequence of images for the vignette
  const images = [
    "/images/elephants-greeting.jpg",
    "/images/giza-full.jpg",
    "/images/elephants-family.jpg",
    "/images/lodge-night-sky.jpg"
  ];

  // Auto-advance the carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[100svh] lg:h-screen bg-[#F4F1EB] flex flex-col lg:flex-row overflow-hidden selection:bg-[#591C27] selection:text-[#F4F1EB]">

      {/* 
        LEFT COLUMN: Understated Editorial Typography
        Maintains a completely static, calm reading environment.
      */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center pt-32 pb-16 px-8 md:px-16 lg:pl-20 xl:pl-32 z-10">
        
        {/* Subtle top label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span>
          <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
            Ewaso Elephant Crossing
          </span>
        </div>

        {/* Refined, moderately sized typography */}
        <div className="flex flex-col mb-12 max-w-lg">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25] leading-[1.1]">
            A private retreat among the wilderness of Nanyuki.
          </h1>
        </div>

        {/* Supporting text */}
        <div className="flex flex-col gap-5 max-w-sm text-xs tracking-[0.05em] leading-relaxed text-[#2C2A25]/70 font-medium mb-12">
          <p>
            Boutique safari experience in Kenya. <br className="hidden sm:block" />
            4 bedrooms (up to 8 guests). Full organization.
          </p>
          <p>
            Rent an exclusive sanctuary for a peaceful getaway. Perfect for nature retreats and intimate gatherings.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#book" 
            className="group flex items-center justify-center bg-[#591C27] text-[#F4F1EB] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#2C2A25] transition-colors duration-500 ease-out shadow-lg shadow-[#591C27]/10"
          >
            Book Now
          </a>
          <a 
            href="#availability" 
            className="group flex items-center justify-center bg-transparent border border-[#2C2A25]/20 text-[#2C2A25] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:border-[#591C27] hover:text-[#591C27] transition-colors duration-500 ease-out"
          >
            Check Availability
          </a>
        </div>
      </div>

      {/* 
        RIGHT COLUMN: The Zero-Motion Crossfade Carousel
      */}
      <div className="relative w-full h-[50vh] lg:h-full lg:w-1/2 bg-[#EAE7E0] lg:border-l border-[#2C2A25]/10 overflow-hidden">
        
        {images.map((src, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={index}
              // The 2000ms duration creates the slow, cinematic dissolve
              className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={src}
                alt="Ewaso Retreat"
                // The slow scale creates a gentle "breathing" effect while active
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          );
        })}
        
        {/* Minimalist Slide Indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group py-2 focus:outline-none"
            >
              <div className={`h-[1px] transition-all duration-500 ease-out ${
                activeIndex === index 
                  ? 'w-8 bg-[#F4F1EB] opacity-100' 
                  : 'w-4 bg-[#F4F1EB] opacity-40 group-hover:opacity-70'
              }`}></div>
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}