'use client';

import React, { useState } from 'react';

export default function TimeOfDaySpectrum() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Reordered chronologically to fit the "Time of Day" color spectrum
  const experiences = [
    {
      id: "01",
      title: "The Spotter Briefing",
      time: "Pre-Dawn",
      description: "Spotter teams radio in animal movements from pre-dawn patrols to brief and direct guests.",
      bgColor: "#EAE5DA", // Misty morning hue
      textColor: "#2C2A25"
    },
    {
      id: "02",
      title: "Dalmas’s Masterclass",
      time: "Morning",
      description: "Led by Dalmas, a certified naturalist born in the Ewaso landscape. Covers birding, tracking, plant identification, and ecosystem reading.",
      bgColor: "#F4F1EB", // Your standard cream
      textColor: "#2C2A25"
    },
    {
      id: "03",
      title: "The Elephant Kingdom Walk",
      time: "Mid-Day",
      description: "An on-foot guided walk along the routes thousands of elephants have crossed for generations.",
      bgColor: "#E6E1D6", // Slightly deeper sand
      textColor: "#2C2A25"
    },
    {
      id: "04",
      title: "The Day Hide",
      time: "Golden Hour",
      description: "Ground-level photography in golden hour light. Best for wildlife photographers, elephant crossings, and bird life at the waterpoint.",
      bgColor: "#D8CEC1", // Muted terracotta/gold
      textColor: "#2C2A25"
    },
    {
      id: "05",
      title: "The Night Hide",
      time: "Nightfall",
      description: "One of the very few night hides in Kenya. Best for nocturnal wildlife, guided black leopard sightings, and night sky photography. Kept deliberately small.",
      bgColor: "#2C2A25", // Deep Charcoal
      textColor: "#F4F1EB"  // Inverted text for dark background
    }
  ];

  return (
    <section className="w-full h-[100vh] flex flex-col md:flex-row selection:bg-[#591C27] selection:text-white">
      
      {experiences.map((exp, index) => {
        const isActive = activeIndex === index;
        
        return (
          <div
            key={exp.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{ backgroundColor: exp.bgColor, color: exp.textColor }}
            // flex-1 gives them equal width. flex-[2] or [2.5] expands them smoothly on hover.
            className={`relative group flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-[#2C2A25]/5
              ${isActive ? 'flex-[2.5]' : 'flex-1'}
            `}
          >
            
            {/* 
              TOP SECTION: The Number and Time 
            */}
            <div className="p-6 md:p-8 flex justify-between items-start w-full min-w-[200px]">
              <span className="font-serif text-xl md:text-2xl italic opacity-70">
                {exp.id}.
              </span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold transition-opacity duration-500 ${
                isActive ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}>
                {exp.time}
              </span>
            </div>

            {/* 
              BOTTOM SECTION: The Title & Description 
            */}
            <div className="p-6 md:p-8 w-full min-w-[250px] md:min-w-[350px] flex flex-col justify-end h-full">
              
              {/* Title */}
              <h3 className={`font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none mb-4 transition-transform duration-700 origin-left
                ${isActive ? 'scale-100' : 'md:scale-90'}
              `}>
                {exp.title}
              </h3>
              
              {/* Description (Fades in and slides up on hover) */}
              <div 
                className={`grid transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-80 max-w-sm pb-4">
                    {exp.description}
                  </p>
                  
                  {/* Subtle interaction cue */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="w-6 h-[1px] bg-current opacity-40 group-hover:w-12 transition-all duration-500"></span>
                    <span className="text-[10px] tracking-[0.15em] uppercase font-semibold opacity-60">
                      Explore
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      })}

    </section>
  );
}