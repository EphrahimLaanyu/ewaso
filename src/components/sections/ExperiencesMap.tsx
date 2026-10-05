'use client';

import React from 'react';

export default function ExperiencesCards() {
  const experiences = [
    {
      id: "01",
      title: "The Spotter Briefing",
      time: "Pre-Dawn",
      description: "Spotter teams radio in animal movements from pre-dawn patrols to brief and direct guests.",
      image: "/images/wild-dog-track.jpg" // Replace with actual image path
    },
    {
      id: "02",
      title: "Dalmas’s Masterclass",
      time: "Morning",
      description: "Led by Dalmas, a certified naturalist born in the Ewaso landscape. Covers birding, tracking, and ecosystem reading.",
      image: "/images/ewaso-hero.jpg" // Replace with actual image path
    },
    {
      id: "03",
      title: "The Elephant Kingdom Walk",
      time: "Mid-Day",
      description: "An on-foot guided walk along the routes thousands of elephants have crossed for generations.",
      image: "/images/giza-full.jpg" // Replace with actual image path
    },
    {
      id: "04",
      title: "The Day Hide",
      time: "Golden Hour",
      description: "Ground-level photography in golden hour light. Best for wildlife photographers and bird life at the waterpoint.",
      image: "/images/elephants-family.jpg" // Replace with actual image path
    },
    {
      id: "05",
      title: "The Night Hide",
      time: "Nightfall",
      description: "One of the very few night hides in Kenya. Best for nocturnal wildlife, guided black leopard sightings, and night sky photography.",
      image: "/images/lodge-night-sky.jpg" // Replace with actual image path
    }
  ];

  return (
    <section className="w-full bg-[#F4F1EB] py-24 md:py-32 px-4 md:px-8 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      
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
            A Day at Ewaso
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