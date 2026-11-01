'use client'; 

import React from 'react'; 
import Link from 'next/link';

export default function ItineraryPreview() { 
  // 4 key highlight moments reflecting natural daily rhythm, meals, rest, and bush walk
  const previewExperiences = [ 
    { 
      time: "6:00 AM – 9:00 AM",
      title: "Dawn Game Drive & Sunrise Coffee",  
      description: "Rise with the bush as predators conclude their night patrols in Ewaso Enclave Conservancy. Stop atop a scenic ridge overlooking Mount Kenya for hot Kenyan coffee, freshly baked pastries, and pristine morning light." 
    }, 
    { 
      time: "9:30 AM – 3:30 PM",
      title: "Camp Brunch, Shaded Rest & Midday Siesta",  
      description: "Return to camp for a relaxed, chef-prepared brunch. While the savannah rests through the heat of the day, unwind on your private veranda, take a dip in the pool, or read in the shaded lounge." 
    }, 
    { 
      time: "4:00 PM – 6:30 PM",
      title: "Guided Bush Walk with Dalmas & Ranger",  
      description: "As the afternoon cools, swap vehicles for foot exploration—one of the purest safari activities in Kenya. Led by our certified naturalist and accompanied by an armed ranger, learn to read spoor, identify bird calls, and walk elephant trails at a respectful distance." 
    },
    { 
      time: "7:00 PM – 9:30 PM",
      title: "Bush Dinner Under the Stars",  
      description: "Arrive at a secluded clearing along the riverbanks. Enjoy a multi-course dinner beside a crackling acacia campfire beneath an unpolluted canopy of equatorial stars." 
    }
  ]; 
  
  return ( 
    <section className="w-full bg-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]" aria-label="Daily Safari Activities Itinerary"> 
      
      {/* SECTION HEADER */} 
      <header className="w-full max-w-4xl mx-auto mb-16 text-center"> 
        <div className="flex items-center justify-center gap-4 mb-6"> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]"> 
            The Itinerary · Safari Activities in Kenya 
          </span> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
        </div> 
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25] mb-6"> 
          A Day at Goshen — Safari Activities in Kenya 
        </h2> 
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#2C2A25]/70 max-w-2xl mx-auto">
          A balanced daily rhythm calibrated to wildlife movements and the Laikipia sun—blending active early-morning game drives, restorative midday rest at one of the top camps in Laikipia, and quiet evening wilderness dining.
        </p>
      </header> 

      {/* TEXT-BASED TIMELINE */} 
      <div className="w-full max-w-4xl mx-auto border-t border-[#2C2A25]/10"> 
        {previewExperiences.map((exp, index) => ( 
          <article 
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
          </article> 
        ))} 
      </div> 

      {/* FOOTER CTA */} 
      <div className="w-full max-w-4xl mx-auto mt-12 text-center"> 
        <Link 
          href="/experiences" 
          className="group inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors duration-300"
        > 
          <span>Explore All Safari Activities in Kenya</span> 
          <span className="block w-6 h-[1px] bg-[#591C27] group-hover:w-12 group-hover:bg-[#2C2A25] transition-all duration-300"></span> 
        </Link> 
      </div> 

    </section> 
  ); 
}
