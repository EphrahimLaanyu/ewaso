'use client'; 

import React from 'react'; 
import Link from 'next/link';

export default function ItineraryPreview() { 
  // 4 key highlight moments for the text preview
  const previewExperiences = [ 
    { 
      time: "6:00 AM – 9:00 AM",
      title: "Early Morning Game Drive",  
      description: "Rise with the sun and venture into the wilderness as the bush awakens. Explore Laikipia in search of wildlife during its most active hours." 
    }, 
    { 
      time: "10:00 AM – 11:30 AM",
      title: "Walking Safari with Dalmas",  
      description: "Swap four wheels for two feet. Led by our certified naturalist, learn to interpret animal tracks, identify birds, and discover the ecosystem up close." 
    }, 
    { 
      time: "4:00 PM – 7:00 PM",
      title: "Evening & Night Safari",  
      description: "Explore the wilderness as golden light transforms the landscape. As darkness settles, the adventure continues with a spotlight drive." 
    },
    { 
      time: "7:00 PM – 9:00 PM",
      title: "Bush Dinner Under the Stars",  
      description: "Arrive at a beautifully prepared setting along the riverbanks. Enjoy a delicious dinner beneath a canopy of stars and a warm campfire." 
    }
  ]; 
  
  return ( 
    <section className="w-full bg-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]"> 
      
      {/* SECTION HEADER */} 
      <div className="w-full max-w-4xl mx-auto mb-16 text-center"> 
        <div className="flex items-center justify-center gap-4 mb-6"> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]"> 
            The Itinerary 
          </span> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
        </div> 
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25] mb-6"> 
          A Day at Goshen 
        </h2> 
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#2C2A25]/70 max-w-2xl mx-auto">
          An unforgettable day in the heart of Laikipia's wilderness. From golden sunrises to magical evenings beneath the stars, each experience is designed to immerse you in the beauty of our home.
        </p>
      </div> 

      {/* TEXT-BASED TIMELINE */} 
      <div className="w-full max-w-4xl mx-auto border-t border-[#2C2A25]/10"> 
        {previewExperiences.map((exp, index) => ( 
          <div 
            key={index} 
            className="group flex flex-col md:flex-row gap-2 md:gap-12 py-8 md:py-10 border-b border-[#2C2A25]/10 transition-colors duration-500 hover:bg-[#EAE7E0] px-4 md:px-8 -mx-4 md:-mx-8"
          > 
            {/* Time Column */}
            <div className="w-full md:w-1/3 flex-shrink-0 pt-1">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]">
                {exp.time}
              </span>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-2/3 flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl text-[#2C2A25] mb-3 transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#2C2A25]/70">
                {exp.description}
              </p>
            </div>
          </div> 
        ))} 
      </div> 

      {/* PROMINENT CTA BUTTON */}
      <div className="w-full max-w-4xl mx-auto mt-16 flex justify-center">
        <Link 
          href="/about#itinerary" 
          className="group inline-flex items-center justify-center gap-6 bg-[#2C2A25] text-[#F4F1EB] px-10 py-5 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#591C27] transition-all duration-500 shadow-xl"
        >
          <span>View Full Dawn-To-Dusk Itinerary</span>
        </Link>
      </div>

    </section> 
  ); 
}