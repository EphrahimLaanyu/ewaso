'use client'; 

import React from 'react'; 

export default function FullItinerary() { 
  const fullItinerary = [ 
    { 
      time: "6:00 AM – 9:00 AM", 
      title: "Early Morning Game Drive", 
      description: "Rise with the African sun and venture into the wilderness as the bush slowly awakens. Accompanied by your experienced safari guide, explore the beautiful landscapes of Laikipia in search of wildlife during some of its most active hours. Enjoy the crisp morning air, beautiful golden light, birdsong, and the possibility of unforgettable wildlife encounters."
    }, 
    { 
      time: "9:00 AM – 10:00 AM", 
      title: "Bush Breakfast", 
      description: "After an exciting morning of exploration, settle down for a freshly prepared breakfast in a scenic location out in the bush. Enjoy a delicious spread accompanied by freshly brewed Kenyan coffee or tea, surrounded by uninterrupted wilderness views and the soothing sounds of nature. A beautiful way to reflect on the morning's sightings before the next adventure begins."
    }, 
    { 
      time: "10:00 AM – 11:30 AM", 
      title: "Guided Walking Safari with Dalmas", 
      description: "Swap four wheels for two feet and discover the wilderness from an entirely different perspective. Led by Dalmas, our certified naturalist, this guided walking experience introduces you to the smaller, often-overlooked wonders of the African bush. Learn to interpret animal tracks, identify birds, discover fascinating plant life, and appreciate the intricate relationships that make this ecosystem so remarkable. An intimate and grounding experience that brings you closer to nature."
    }, 
    { 
      time: "12:00 PM – 1:00 PM", 
      title: "Refreshments & Relaxation at Camp", 
      description: "Return to the comfort of Goshen Camp for some well-deserved downtime. Settle into our inviting lounge area with a refreshing drink while taking in the peaceful surroundings and gentle sounds of the nearby Ewaso Nyiro River. Share stories from the morning's adventures, browse through a wildlife book, or simply sit back and embrace the slower rhythm of life in the bush."
    }, 
    { 
      time: "1:00 PM – 2:00 PM", 
      title: "Lunch at Camp", 
      description: "Gather for a delicious, freshly prepared lunch served in the relaxed atmosphere of camp. Enjoy a selection of wholesome dishes made with fresh ingredients while overlooking the surrounding wilderness. Good food, warm hospitality, and beautiful views make for a perfect midday dining experience."
    },
    { 
      time: "2:00 PM – 3:00 PM", 
      title: "Siesta Time", 
      description: "As the afternoon temperatures rise and the bush grows quieter, take a little time for yourself. Retreat to the comfort and privacy of your tent for an afternoon nap, read a book, or simply relax while listening to the natural sounds around camp. There is no rush at Goshen; sometimes doing absolutely nothing is part of the safari experience."
    },
    { 
      time: "3:00 PM – 4:00 PM", 
      title: "Afternoon Coffee & Refreshments", 
      description: "As the afternoon begins to cool, reconvene at the camp's lounge for a freshly brewed cup of coffee, tea, or your favourite refreshing drink, accompanied by some light afternoon treats. Take this opportunity to unwind, exchange stories, and prepare your cameras and binoculars for another exciting adventure into the wilderness."
    },
    { 
      time: "4:00 PM – 7:00 PM", 
      title: "Evening Game Drive & Night Safari", 
      description: "Head out for an afternoon game drive as the golden light transforms the Laikipia landscape. Explore the wilderness in search of wildlife emerging from the afternoon heat, with plenty of opportunities to appreciate the beauty of the African sunset. As darkness settles over the bush, the adventure continues with a night drive, offering an entirely different perspective of the wilderness. With the help of your guide and spotlight, discover the fascinating nocturnal world as you make your way towards a specially prepared bush dinner location."
    },
    { 
      time: "7:00 PM – 9:00 PM", 
      title: "Bush Dinner Under the Stars", 
      description: "Arrive at a beautifully prepared bush dinner setting along the banks of the Ewaso Nyiro River, where a warm campfire, lantern-lit tables, and the sounds of the African wilderness welcome you. Enjoy a delicious dinner beneath a canopy of stars, surrounded by the raw beauty of Laikipia. With the gentle flow of the river nearby, the crackling of the fire, and the distant calls of nocturnal wildlife, this is an opportunity to experience the magic of the African bush at its finest. An evening of wonderful food, shared stories, and unforgettable moments in the heart of nature."
    },
    { 
      time: "9:00 PM – 10:00 PM", 
      title: "Return to Camp & Rest", 
      description: "After a memorable evening under the African sky, enjoy a leisurely drive back to Goshen Camp, with the possibility of a few final nocturnal wildlife sightings along the way. Upon arrival, retire to the comfort of your tent for a peaceful night's rest. Allow the soothing sounds of the wilderness to lull you to sleep as another beautiful day at Goshen comes to an end."
    }
  ];

  return (
    <section id="itinerary" className="w-full bg-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      
      {/* SECTION HEADER */} 
      <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center"> 
        <div className="flex items-center gap-4 mb-6"> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]"> 
            The Itinerary 
          </span> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
        </div> 
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25] mb-6 uppercase"> 
          A Day at Goshen Camp
        </h2> 
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#2C2A25]/70 max-w-2xl font-bold mb-4">
          An unforgettable day in the heart of Laikipia's wilderness.
        </p>
        <p className="font-sans text-sm md:text-base leading-relaxed text-[#2C2A25]/70 max-w-2xl">
          At Goshen, every day unfolds to the rhythm of the African bush. From golden sunrises and intimate wildlife encounters to peaceful afternoons and magical evenings beneath the stars, each experience is thoughtfully designed to immerse you in the beauty of our wilderness home along the Ewaso Nyiro River.
        </p>
      </div> 

      {/* SPLIT LAYOUT */} 
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* LEFT COLUMN: Static Bento Box */}
        <div className="w-full lg:w-1/2">
          {/* Wrapper to handle sticky positioning on desktop */}
          <div className="lg:sticky lg:top-32 h-[60vh] md:h-[70vh] w-full grid grid-cols-2 grid-rows-2 gap-4">
            
            {/* Image 1: Tall Portrait (Left Column) */}
            <div className="row-span-2 col-span-1 bg-[#2C2A25] overflow-hidden shadow-lg">
              <img 
                src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/young-male-lion-enhanced-portrait.jpeg" 
                alt="Young Male Lion" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105" 
              />
            </div>
            
            {/* Image 2: Landscape Top (Right Column) */}
            <div className="row-span-1 col-span-1 bg-[#2C2A25] overflow-hidden shadow-lg">
              <img 
                src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/safari-tent-timber-glass-double-doors.jpeg" 
                alt="Safari Tent Interior" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105" 
              />
            </div>
            
            {/* Image 3: Landscape Bottom (Right Column) */}
            <div className="row-span-1 col-span-1 bg-[#2C2A25] overflow-hidden shadow-lg">
              <img 
                src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/river-fishing-ewaso-nyiro-rock-pools.jpeg" 
                alt="River Fishing" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105" 
              />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Timeline */}
        <div className="w-full lg:w-1/2 pt-4">
          <div className="border-l border-[#2C2A25]/10 ml-2 md:ml-4">
            {fullItinerary.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-10 md:pl-16 pb-16 md:pb-20 group last:pb-0"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#591C27] ring-4 ring-[#F4F1EB] transition-transform duration-500 group-hover:scale-125"></div>
                
                {/* Timeline Content */}
                <div className="flex flex-col transform transition-transform duration-500 group-hover:translate-x-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27] mb-3">
                    {exp.time}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#2C2A25] mb-4">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-[#2C2A25]/80 max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}