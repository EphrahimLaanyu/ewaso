'use client';

import Navbar from '@/components/sections/Navbar';
import React from 'react';

// ============================================================================
// IMAGE CONFIGURATION
// Paste your Supabase image links here. They will automatically update the page.
// ============================================================================
const EXPERIENCE_IMAGES = {
  hero: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-11%20at%2009.43.53%20(1).jpeg",
  dayDrives: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-11%20at%2009.43.51.jpeg",
  nightDrives: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.14.03.jpeg",
  natureWalks: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.07.57.jpeg",
  culturalVisits: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/YOUR_CULTURAL.jpeg",
  marketVisits: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/YOUR_MARKET.jpeg",
  leopardTracking: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/IMG_5761.JPG",
  kopjeHikes: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/YOUR_HIKE.jpeg",
  sundowners: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/WhatsApp%20Image%202026-10-09%20at%2020.05.48%20(1).jpeg",
  fishing: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/YOUR_FISHING.jpeg",
  doingNothing: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/YOUR_RELAXING.jpeg",
};

// ============================================================================
// DATA STRUCTURES (Text Content)
// ============================================================================
const signatureExperiences = [
  {
    title: "Day Game Drives",
    subtitle: "Into the heart of the wild.",
    image: EXPERIENCE_IMAGES.dayDrives,
    intro: "Discover the beauty and diversity of Laikipia on unforgettable game drives through Ewaso Enclave Conservancy and the surrounding wilderness. Accompanied by our knowledgeable local guides, venture through beautiful rugged bushland in search of the extraordinary wildlife that calls this region home.",
    description: "Every drive offers a different adventure, shaped by the seasons, animal movements, and the wonderful unpredictability of nature. Whether it is a herd of elephants crossing the river or a fleeting glimpse of a predator disappearing into the bush, every moment has a story to tell.",
    highlights: [
      "Early morning game drives as the wilderness awakens.",
      "Afternoon safaris in search of wildlife activity.",
      "Opportunities to encounter elephants, giraffes, zebras, antelopes, and predators.",
      "Explore the beautiful Ewaso Nyiro River corridor.",
      "Learn about animal behaviour, tracking, and conservation.",
      "Enjoy birdwatching and wildlife photography.",
      "Stop at scenic locations for refreshments and beautiful photographs."
    ]
  },
  {
    title: "Night Game Drives",
    subtitle: "Discover a different world after dark.",
    image: EXPERIENCE_IMAGES.nightDrives,
    intro: "When the sun sets and darkness settles over Laikipia, the wilderness takes on an entirely different character. Join our guides for an exciting night drive and experience the mystery of the African bush after dark.",
    description: "With carefully operated spotlights, explore the nocturnal world and discover creatures rarely seen during daylight hours. A night game drive is a reminder that even when the day ends, the wilderness never truly sleeps. (Available in designated areas, subject to conservancy regulations).",
    highlights: [
      "Search for nocturnal wildlife, including genets, bush babies, porcupines, and other elusive species.",
      "Look out for predators becoming active under the cover of darkness.",
      "Learn to recognise the different calls and sounds of the nighttime bush.",
      "Discover fascinating nocturnal animal behaviour.",
      "Experience the thrill of exploring the wilderness beneath the stars.",
      "Enjoy the peaceful atmosphere and mystery of Laikipia after sunset."
    ]
  },
  {
    title: "Guided Nature Walks",
    subtitle: "Discover the bush, one footprint at a time.",
    image: EXPERIENCE_IMAGES.natureWalks,
    intro: "Step out of the safari vehicle and experience the wilderness from an entirely new perspective. Join Dalmas, our certified naturalist, on an immersive guided nature walk designed to reveal the smaller wonders of the African bush.",
    description: "Drawing on his knowledge of the natural environment, Dalmas introduces guests to the fascinating details that often go unnoticed: a fresh animal footprint, the distinctive call of a bird, the medicinal properties of an indigenous plant, or the subtle signs of wildlife movement. These walks are not simply about covering distance. They are about understanding the bush and developing a deeper connection with nature.",
    highlights: [
      "Learn how to identify animal tracks, footprints, and droppings.",
      "Discover indigenous trees, shrubs, and their traditional uses.",
      "Learn fascinating facts about insects, birds, and smaller wildlife.",
      "Understand animal behaviour and the relationships between different species.",
      "Discover basic tracking techniques and wilderness awareness.",
      "Explore the importance of plants within the local ecosystem.",
      "Learn about conservation and the delicate balance of life in Laikipia.",
      "Enjoy opportunities for close-up nature photography."
    ]
  },
  {
    title: "Cultural Visits",
    subtitle: "Beyond the wildlife, discover the people.",
    image: EXPERIENCE_IMAGES.culturalVisits,
    intro: "The beauty of Laikipia extends far beyond its landscapes and wildlife. It is also found in the rich traditions, knowledge, and hospitality of the communities who call this remarkable region home.",
    description: "Our cultural visits offer guests an opportunity to experience local life, meet community members, and discover the traditions that have been passed down through generations. These experiences are arranged respectfully with participating community members, creating opportunities for authentic connections and shared learning.",
    highlights: [
      "Visit a neighbouring community and learn about its way of life.",
      "Discover traditional homes and local building techniques.",
      "Learn about customs, family life, and cultural heritage.",
      "Explore the importance of livestock in local communities.",
      "Discover traditional beadwork and handmade crafts.",
      "Hear stories and knowledge passed down through generations.",
      "Learn about the relationship between local communities, wildlife, and conservation.",
      "Support local artisans through the purchase of handmade souvenirs.",
      "Enjoy genuine cultural exchange and meaningful conversations."
    ]
  },
  {
    title: "Village Market Visits",
    subtitle: "A colourful glimpse into everyday Laikipia.",
    image: EXPERIENCE_IMAGES.marketVisits,
    intro: "For guests curious to explore life beyond the safari trails, a visit to a nearby village market provides a wonderful opportunity to experience the everyday rhythm of rural Kenya.",
    description: "Immerse yourself in the lively atmosphere of local traders, colourful stalls, fresh produce, traditional crafts, and friendly conversations. Sometimes, the most memorable travel experiences come from the simplest interactions. (Visits are arranged around local market days).",
    highlights: [
      "Explore a traditional local marketplace.",
      "Meet traders and learn about their daily lives.",
      "Browse fresh produce, locally made goods, and household items.",
      "Discover beautiful beadwork, fabrics, and handcrafted souvenirs.",
      "Sample local snacks and experience everyday Kenyan flavours.",
      "Learn about the role village markets play in the surrounding communities.",
      "Enjoy candid travel photography and cultural interaction.",
      "Support local businesses and small-scale traders."
    ]
  },
  {
    title: "Black Leopard Tracking",
    subtitle: "In search of the elusive shadow of Laikipia.",
    image: EXPERIENCE_IMAGES.leopardTracking,
    intro: "Few wildlife encounters capture the imagination quite like the possibility of seeing a black leopard. Laikipia has gained international recognition for sightings of these remarkable melanistic leopards, whose striking dark coats make them among Africa's most fascinating big cats.",
    description: "For wildlife enthusiasts, adventurous travellers, and photographers, we offer an opportunity to explore suitable leopard habitat in search of this extraordinary animal. Black leopard sightings are never guaranteed, and this is part of what makes searching for one such an extraordinary experience.",
    highlights: [
      "Explore leopard territory with knowledgeable local guides.",
      "Learn about melanism and the genetics behind the leopard's dark coat.",
      "Discover leopard behaviour, habitat preferences, and territorial habits.",
      "Search for footprints, tracks, and signs of leopard activity.",
      "Learn about the conservation challenges facing these magnificent predators.",
      "Enjoy exciting photographic opportunities throughout the tracking experience.",
      "Discover other wildlife while exploring the surrounding wilderness.",
      "Experience the anticipation and excitement of searching for one of nature's most elusive creatures."
    ]
  },
  {
    title: "Scenic Kopje Hikes",
    subtitle: "Climb higher. See further. Feel closer to nature.",
    image: EXPERIENCE_IMAGES.kopjeHikes,
    intro: "For guests who love a little adventure, our scenic kopje hikes offer an opportunity to discover the breathtaking beauty of Laikipia from above.",
    description: "Accompanied by a guide, make your way through the surrounding bushland and climb our beautiful rocky outcrops, where spectacular panoramic views await. From the top, take a moment to appreciate the seemingly endless wilderness stretching towards the horizon. Some views are worth the climb.",
    highlights: [
      "Guided hikes through natural bushland and rocky terrain.",
      "Discover interesting rock formations and indigenous vegetation.",
      "Look out for birds, wildlife, and animal tracks along the way.",
      "Enjoy spectacular views across the surrounding landscape.",
      "Capture breathtaking photographs from elevated viewpoints.",
      "Experience beautiful sunrise or late-afternoon lighting.",
      "Stop for refreshments and enjoy the peaceful surroundings.",
      "Discover the geological and ecological importance of these ancient formations."
    ]
  },
  {
    title: "Bush Sundowners",
    subtitle: "Where golden sunsets meet unforgettable moments.",
    image: EXPERIENCE_IMAGES.sundowners,
    intro: "Picture this: the sun slowly sinking behind the Laikipia horizon, the sky painted in shades of gold and amber, a refreshing drink in your hand, and the gentle crackle of a campfire filling the evening air.",
    description: "At Goshen Camp, our bush sundowners are more than just a drink at sunset. They are a celebration of the beauty and tranquillity of the African wilderness. A beautiful sunset. A warm fire. A cold drink. Nowhere else you need to be.",
    highlights: [
      "A carefully selected location with beautiful wilderness views.",
      "Comfortable safari chairs and a beautifully arranged table.",
      "A selection of refreshing drinks and delicious light bites.",
      "A crackling campfire to gather around as evening approaches.",
      "Spectacular sunset photography opportunities.",
      "Uninterrupted views of the surrounding African landscape.",
      "Time to share stories from the day's adventures.",
      "Listen to the sounds of the bush as daytime gives way to night.",
      "Enjoy the first stars appearing in the vast African sky."
    ]
  }
];

const memorableMoments = [
  {
    title: "Bush Breakfasts",
    desc: "Begin your morning with a freshly prepared breakfast in the heart of the wilderness. Enjoy tea, coffee, delicious food, and beautiful views after an early morning safari."
  },
  {
    title: "Birdwatching",
    desc: "Discover Laikipia's fascinating birdlife with our guides. Explore the river corridor and surrounding bushland, and identify birds by their unique calls."
  },
  {
    title: "Stargazing",
    desc: "When darkness falls, settle into a comfortable chair and discover the beauty of the African night sky, identifying constellations while listening to nocturnal wildlife."
  },
  {
    title: "Wildlife Photography",
    desc: "Capture the magic of Laikipia through your lens. Our guides can help you make the most of the photographic opportunities, from striking landscapes to golden sunsets."
  },
  {
    title: "Private Bush Dining",
    desc: "Celebrate a special occasion with an intimate dining experience beneath the African sky. Enjoy a beautifully arranged table, lantern lighting, and delicious food."
  }
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function ExperiencesPage() {
  return (
    <main className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <Navbar/>
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="relative w-full h-[70svh] flex flex-col items-center justify-center overflow-hidden bg-[#1A1817]">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERIENCE_IMAGES.hero} 
            alt="Laikipia Wilderness" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#F4F1EB]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#F4F1EB]/60"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#F4F1EB]">
              The Ewaso Enclave
            </span>
            <span className="w-12 h-[1px] bg-[#F4F1EB]/60"></span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F4F1EB] tracking-tight uppercase leading-[0.9]">
            Signature <br />
            <span className="italic font-light lowercase text-[#F4F1EB]/90">experiences.</span>
          </h1>
        </div>
      </section>

      {/* ========================================================
          2. THE SIGNATURE EXPERIENCES (Alternating Grid)
      ======================================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col gap-32 md:gap-48">
        {signatureExperiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* IMAGE COLUMN */}
              <div className={`lg:col-span-6 w-full aspect-[4/5] overflow-hidden bg-[#2C2A25] shadow-2xl group ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
                />
              </div>

              {/* TEXT COLUMN */}
              <div className={`lg:col-span-6 flex flex-col ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#2C2A25] mb-2">
                  {exp.title}
                </h2>
                <h3 className="font-serif text-xl md:text-2xl italic font-light text-[#591C27] mb-8">
                  {exp.subtitle}
                </h3>
                
                <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-6 font-semibold">
                  {exp.intro}
                </p>
                <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-10">
                  {exp.description}
                </p>

                <div className="bg-[#EAE7E0] p-8 md:p-10 border-l-4 border-[#591C27]">
                  <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27] mb-6">
                    Experience Highlights
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#591C27]/50 mt-2 flex-shrink-0"></span>
                        <span className="font-sans text-sm leading-relaxed text-[#2C2A25]/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* ========================================================
          3. SLOW DOWN AT GOSHEN (Burgundy Interstitial)
      ======================================================== */}
      <section className="w-full bg-[#591C27] text-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#F4F1EB] selection:text-[#591C27]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Slow Down at Goshen
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/80 uppercase tracking-[0.1em]">
              Because sometimes the greatest adventure is having nowhere to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
            
            {/* Fishing */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#2C2A25] mb-8 shadow-2xl border-[6px] border-[#F4F1EB]/10">
                <img src={EXPERIENCE_IMAGES.fishing} alt="Fishing" className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-3xl mb-2">Fishing by the River</h3>
              <h4 className="font-serif text-lg italic font-light text-[#F4F1EB]/70 mb-6">Cast a line. Unwind. Let the river set the pace.</h4>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#F4F1EB]/80 mb-6">
                Not every adventure needs to be fast-paced. For guests who enjoy quieter moments, the Ewaso Nyiro River offers a beautiful setting to relax, reconnect with nature, and perhaps try your luck at fishing.
              </p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> Enjoy a relaxed fishing outing</li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> Birdwatching along the riverbank</li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> The simple pleasure of being outdoors</li>
              </ul>
            </div>

            {/* Doing Nothing */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#2C2A25] mb-8 shadow-2xl border-[6px] border-[#F4F1EB]/10">
                <img src={EXPERIENCE_IMAGES.doingNothing} alt="The Art of Doing Nothing" className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-3xl mb-2">The Art of Doing Nothing</h3>
              <h4 className="font-serif text-lg italic font-light text-[#F4F1EB]/70 mb-6">Stay a little longer. Slow down a little more.</h4>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#F4F1EB]/80 mb-6">
                At Goshen Camp, we believe that one of the greatest luxuries is the freedom to do absolutely nothing. You do not have to fill every moment with an activity. There is no pressure to be anywhere.
              </p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> Wake up naturally to the sounds of the bush</li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> Enjoy a leisurely breakfast without the clock</li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70"><span className="w-1 h-1 bg-[#F4F1EB]"></span> Find a comfortable chair and a good book</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. MORE MEMORABLE MOMENTS (Bento Grid)
      ======================================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-[1px] bg-[#591C27]"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
            More Memorable Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memorableMoments.map((moment, i) => (
            <div key={i} className="bg-[#EAE7E0] p-8 md:p-10 border border-[#2C2A25]/5 hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors duration-500 group">
              <h3 className="font-serif text-2xl mb-4 group-hover:text-[#F4F1EB] text-[#2C2A25] transition-colors duration-500">
                {moment.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#2C2A25]/70 group-hover:text-[#F4F1EB]/70 transition-colors duration-500">
                {moment.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}