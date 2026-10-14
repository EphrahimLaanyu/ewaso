'use client';

import React from 'react';

export default function ExperiencesCards() {
const experiences = [
    {
      id: "01",
      title: "Early Morning Tracking",
      time: "Pre-Dawn",
      description: "Before the sun comes up, our tracker teams head out into the bush. They radio back to make sure your morning drive goes straight to the best animal sightings.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.07.57.jpeg"
    },
    {
      id: "02",
      title: "Bush Walk with Dalmas",
      time: "Morning",
      description: "Take a walk with Dalmas, an expert guide who grew up right here. He will show you how to read animal footprints, spot local birds, and understand the land.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.01.55%20(2).jpeg"
    },
    {
      id: "03",
      title: "The Elephant Trails",
      time: "Mid-Day",
      description: "Leave the safari jeep behind and take a guided walk along the exact same dirt paths that elephant herds have used for generations.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-11%20at%2009.43.53%20(1).jpeg"
    },
    {
      id: "04",
      title: "Sundowners at the Hide",
      time: "Golden Hour",
      description: "Enjoy a sundowner drink safely hidden right next to the water's edge. It is the perfect place to sit back and take close-up photos as the animals come down to drink.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.14.01.jpeg"
    },
    {
      id: "05",
      title: "Night Time Hide",
      time: "Nightfall",
      description: "One of the only places in Kenya where you can safely watch wildlife in the dark. It is the best spot to look out for the rare black leopard and enjoy the stars.",
      image: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.05.48.jpeg"
    }
  ];
  ///images/Official-images/WhatsApp Image 2026-10-09 at 20.01.55 (2).jpeg
  ///images/Official-images/WhatsApp Image 2026-10-09 at 20.05.48.jpeg
  ///images/Official-images/WhatsApp Image 2026-10-11 at 09.43.53 (1).jpeg

  return (
    <section id="gallery" className="w-full bg-[#F4F1EB] py-24 md:py-32 px-4 md:px-8 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      
      {/* SECTION HEADER */}
      <div className="w-full max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#591C27]/40"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]">
              The Itinerary
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25]">
            A Day at Goshen
          </h2>
        </div>
        <p className="font-sans text-xs tracking-[0.15em] uppercase font-medium text-[#2C2A25]/50 max-w-xs">
          Dictated by the rhythm of the wild, from pre-dawn to deep night.
        </p>
      </div>

      {/* THE IMAGE CARDS GRID */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className="group relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-[#2C2A25] cursor-pointer"
          >
            {/* Background Image with Hover Zoom */}
            <img 
              src={exp.image} 
              alt={exp.title}
              loading="lazy"
              width={600}
              height={900}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            {/* Dual Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 opacity-70 group-hover:opacity-90"></div>

            {/* TOP RIGHT: The Number */}
            <div className="absolute top-6 right-6 z-10">
              <span className="font-serif text-xl md:text-2xl italic text-[#F4F1EB] opacity-60">
                {exp.id}.
              </span>
            </div>

            {/* BOTTOM CONTENT: Time, Title, Description */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end">
              
              <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#F4F1EB]/70 mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                {exp.time}
              </span>
              
              <h3 className="font-serif text-2xl md:text-3xl text-[#F4F1EB] tracking-tight leading-snug mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                {exp.title}
              </h3>
              
              {/* Expanding Description */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-[#F4F1EB]/80 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {exp.description}
                  </p>
                </div>
              </div>

            </div>
            
            {/* Hover Frame Effect */}
            <div className="absolute inset-4 border border-[#F4F1EB]/0 group-hover:border-[#F4F1EB]/20 transition-colors duration-700 pointer-events-none z-20"></div>

          </div>
        ))}

      </div>
    </section>
  );
}