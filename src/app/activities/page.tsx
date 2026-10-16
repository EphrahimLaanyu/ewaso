'use client';

import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import React, { useState, useRef } from 'react';


// ============================================================================
// IMAGE CONFIGURATION
// ============================================================================
const EXPERIENCE_IMAGES = {
  hero: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/elephant-family-wading-river-waters.jpeg",
  dayDrives: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/grevys-zebra-pair-savannah-portrait.jpeg",
  nightDrives: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/night-game-drive-spotlight-elephants.jpeg",
  natureWalks: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/guided-bush-walk-riverbank-trail.jpeg",
  culturalVisits: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/cultural-visit-samburu-village-elders.jpeg",
  marketVisits: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/market-visit-samburu-beadwork-stalls.jpeg",
  leopardTracking: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/black-leopard-and-spotted-leopard-portrait.jpeg",
  kopjeHikes: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/kopje-hike-sunset-viewpoint-couple.jpeg",
  sundowners: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/laikipia-golden-sunset-kopje-silhouette.jpeg",
  fishing: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/river-fishing-ewaso-nyiro-rock-pools.jpeg",
  doingNothing: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/tent-relaxation-armchair-desk-view.jpeg",
};

// ============================================================================
// DATA STRUCTURES (Text Content)
// ============================================================================
const signatureExperiences = [
  {
    title: "Day Game Drives",
    subtitle: "Across the rugged bushveld of Ewaso Enclave.",
    image: EXPERIENCE_IMAGES.dayDrives,
    intro: "Traverse the private Ewaso Enclave Conservancy and surrounding Laikipia wilderness in open 4x4 safari vehicles. Expert local trackers read spoor and navigate terrain shaped by seasonal wildlife corridors.",
    description: "Encounters follow the pulse of the bush, from breeding herds crossing the Ewaso Nyiro River to leopards resting in riverine fig trees.",
    highlights: [
      "Track elephants, lions, reticulated giraffes, and Grevy's zebras.",
      "Explore the riverine habitats of the Ewaso Nyiro River corridor.",
      "Morning and afternoon departures led by licensed local guides.",
      "Scenic wilderness stops for French press coffee and light refreshments."
    ]
  },
  {
    title: "Night Game Drives",
    subtitle: "The bushveld after sunset.",
    image: EXPERIENCE_IMAGES.nightDrives,
    intro: "Dusk shifts the savannah into an active hunting ground. Filtered red spotlights reveal elusive nocturnal species rarely encountered during daylight hours.",
    description: "Drives operate across designated conservancy zones as temperature drops and predators begin their patrol. (Subject to conservancy regulations).",
    highlights: [
      "Spot nocturnal wildlife: leopards, aardwolves, genets, and bush babies.",
      "Observe predator activity under specialized non-disruptive red light.",
      "Acoustic tracking and night-sky orientation across open plains.",
      "Exclusive access to conservancy routes after dark."
    ]
  },
  {
    title: "Guided Nature Walks",
    subtitle: "The wilderness on foot.",
    image: EXPERIENCE_IMAGES.natureWalks,
    intro: "Step beyond the vehicle with resident naturalist Dalmas to decode the landscape at ground level. Walking safaris reveal the intricate micro-ecosystems and subtle wildlife signs missed from a car.",
    description: "Learn spoor identification, traditional ethnobotany, and bird alarm language across ancient game trails.",
    highlights: [
      "Interpret fresh tracks, dung, and signs along active game corridors.",
      "Learn traditional medicinal uses of indigenous trees and shrubs.",
      "Bird identification and insect ecology with resident naturalist Dalmas.",
      "Macro photography opportunities along pristine riverbanks."
    ]
  },
  {
    title: "Cultural Visits",
    subtitle: "Living heritage of the Samburu and Maasai.",
    image: EXPERIENCE_IMAGES.culturalVisits,
    intro: "Visit neighboring pastoralist homesteads through genuine partnerships built on mutual respect. Spend unhurried time with elders, women artisans, and warriors.",
    description: "Engage in direct dialogue on pastoral traditions, indigenous architecture, and community-led conservation coexistence.",
    highlights: [
      "Private visits to authentic Samburu and Maasai manyattas.",
      "First-hand insights into livestock culture and pastoralist traditions.",
      "Beadwork demonstrations with community women's artisan collectives.",
      "Direct financial contributions supporting local schools and health clinics."
    ]
  },
  {
    title: "Village Market Visits",
    subtitle: "Rural commerce and community life.",
    image: EXPERIENCE_IMAGES.marketVisits,
    intro: "Join your guide on market days to experience the trading hub of rural Laikipia. Pastoralists gather weekly from across the district to barter livestock, produce, and goods.",
    description: "Browse stalls of hand-forged tools, bright textiles, and fresh regional harvests. (Arranged on designated weekly market days).",
    highlights: [
      "Experience regional weekly market days with your local guide.",
      "Browse hand-loomed fabrics, beadwork, and artisanal ironcraft.",
      "Observe traditional livestock trading and pastoral commerce.",
      "Directly support small-scale local traders and family enterprises."
    ]
  },
  {
    title: "Black Leopard Tracking",
    subtitle: "Pursuing the melanistic leopard of the plateau.",
    image: EXPERIENCE_IMAGES.leopardTracking,
    intro: "Laikipia hosts one of the world's few documented wild populations of melanistic leopards. Specialized tracking excursions navigate known territories across granite kopjes and dense riverine thickets.",
    description: "Read pugmarks, monitor vervet monkey alarm calls, and glass territory markers alongside dedicated trackers. (Sightings depend on wild movement and are not guaranteed).",
    highlights: [
      "Targeted tracking in documented melanistic leopard territories.",
      "Interpret fresh pugmarks, scrape marks, and kill caches.",
      "Learn about melanism genetics and regional leopard research.",
      "High-probability sightings of other carnivores and plains game."
    ]
  },
  {
    title: "Scenic Kopje Hikes",
    subtitle: "Panoramic vistas from ancient granite inselbergs.",
    image: EXPERIENCE_IMAGES.kopjeHikes,
    intro: "Ascend the weathered granite kopjes rising above the plateau. Guided scrambles through wild bushland yield unbroken 360-degree vistas across the northern frontier toward Mount Kenya.",
    description: "Summit at dawn or late afternoon for cool breezes, raptor sightings, and vantage points unreachable by vehicle.",
    highlights: [
      "Guided ascent through natural rock shelters and wild bush.",
      "Panoramic views across Laikipia toward Mount Kenya.",
      "Spot klipspringers, rock hyraxes, and nesting Verreaux's eagles.",
      "Summit break with refreshments timed for golden-hour light."
    ]
  },
  {
    title: "Bush Sundowners",
    subtitle: "An enduring safari ritual as dusk settles.",
    image: EXPERIENCE_IMAGES.sundowners,
    intro: "As the heat breaks, vehicles gather on elevated ridges or sandy riverbanks. A mobile bar opens with cold drinks, house canapés, and canvas camp chairs circled around an open fire.",
    description: "Toast the sunset against dramatic escarpments as daytime sounds transition into the chorus of the African night.",
    highlights: [
      "Private cliffside or riverbank locations with expansive vistas.",
      "Full bar service, chilled spirits, and freshly prepared canapés.",
      "Open fire pit with classic safari canvas seating.",
      "Unobstructed golden-hour views across the Laikipia plateau."
    ]
  },
  {
    title: "Fishing by the River",
    subtitle: "Cast a line. Unwind. Let the river set the pace.",
    image: EXPERIENCE_IMAGES.fishing,
    intro: "Not every adventure needs to be fast-paced.",
    description: "For guests who enjoy quieter moments, the Ewaso Nyiro River offers a beautiful setting to relax, reconnect with nature, and perhaps try your luck at fishing.",
    highlights: [
      "Enjoy a relaxed fishing outing",
      "Birdwatching along the riverbank",
      "The simple pleasure of being outdoors"
    ]
  },
  {
    title: "The Art of Doing Nothing",
    subtitle: "Stay a little longer. Slow down a little more.",
    image: EXPERIENCE_IMAGES.doingNothing,
    intro: "At Goshen, we believe that one of the greatest luxuries is the freedom to do absolutely nothing.",
    description: "You do not have to fill every moment with an activity. There is no pressure to be anywhere.",
    highlights: [
      "Wake up naturally to the sounds of the bush",
      "Enjoy a leisurely breakfast without the clock",
      "Find a comfortable chair and a good book"
    ]
  }
];

const memorableMoments = [
  {
    title: "Bush Breakfasts",
    desc: "Freshly cooked hot breakfasts laid out along the riverbank after first light. Enjoy brewed Kenyan coffee and freshly prepared orders against open water views."
  },
  {
    title: "Birdwatching",
    desc: "Over 400 recorded species inhabit the river corridor and acacia woodland. Identify vulturine guineafowl, raptors, and endemic hornbills with expert guides."
  },
  {
    title: "Stargazing",
    desc: "Unpolluted equatorial skies provide crisp viewing of the Milky Way and Southern constellations. Campfire guides map celestial paths and local constellations."
  },
  {
    title: "Wildlife Photography",
    desc: "Custom open-sided safari vehicles deliver clean sightlines and low angles. Guides position for optimal morning and afternoon light across dramatic terrain."
  },
  {
    title: "Private Bush Dining",
    desc: "Lantern-lit dinners set in secluded wilderness clearings under the stars. Multi-course seasonal menus paired with fine wines beside an open wood fire."
  },
  {
    title: "Samburu Singing Wells",
    desc: "Experience the traditional Singing Wells where pastoralists water their livestock to the rhythm of distinctive, ancestral songs passed down through generations."
  }
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function ExperiencesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }

    setActiveIndex(index);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        const element = itemRefs.current[index];
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 350); 
    }
  };

  return (
    <main className="w-full bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <Navbar />
      
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
              Goshen • Laikipia
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
          2. THE SIGNATURE EXPERIENCES (Sticky Accordion)
      ======================================================== */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* LEFT: Sticky Image Viewport (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2 h-[75vh] sticky top-24 overflow-hidden shadow-2xl bg-[#2C2A25]">
            {signatureExperiences.map((exp, index) => (
              <img 
                key={index}
                src={exp.image} 
                alt={exp.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeIndex === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                }`}
              />
            ))}
          </div>

          {/* RIGHT: Accordion List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {signatureExperiences.map((exp, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={index} 
                  ref={(el) => { itemRefs.current[index] = el; }} 
                  className="border-b border-[#2C2A25]/10 group/item"
                >
                  
                  {/* Accordion Header / Button */}
                  <button 
                    onClick={() => handleToggle(index)}
                    className={`w-full text-left py-6 md:py-8 flex flex-col focus:outline-none transition-all duration-500 ease-out border-l-2 ${
                      isActive 
                        ? 'pl-6 border-[#591C27]' 
                        : 'pl-0 hover:pl-6 border-transparent hover:border-[#2C2A25]/20'
                    }`}
                  >
                    <div className="w-full flex justify-between items-center gap-4">
                      
                      {/* Title & Subtitle */}
                      <div className="flex flex-col">
                        <span className={`text-[9px] tracking-[0.2em] uppercase font-bold transition-colors duration-300 mb-2 ${
                          isActive ? 'text-[#591C27]' : 'text-[#2C2A25]/40 group-hover/item:text-[#591C27]/70'
                        }`}>
                          {exp.subtitle}
                        </span>
                        <h2 className={`font-serif text-3xl md:text-4xl transition-colors duration-300 ${
                          isActive ? 'text-[#2C2A25]' : 'text-[#2C2A25]/40 group-hover/item:text-[#2C2A25]'
                        }`}>
                          {exp.title}
                        </h2>
                      </div>

                      {/* Clickable Icon Indicator */}
                      <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-[#591C27] bg-[#591C27] text-[#F4F1EB] rotate-45 shadow-md' 
                          : 'border-[#2C2A25]/20 text-[#2C2A25]/40 group-hover/item:border-[#2C2A25]/60 group-hover/item:text-[#2C2A25]'
                      }`}>
                        <span className="text-xl md:text-2xl font-light leading-none relative -top-[1px]">
                          +
                        </span>
                      </div>

                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      
                      {/* Inner Content Wrapper */}
                      <div className="pl-6 pb-10 max-w-md mx-auto lg:mx-0 lg:pr-8">
                        
                        {/* Mobile Image Reveal */}
                        <div className="block lg:hidden w-full aspect-[4/3] overflow-hidden mb-8 shadow-xl mt-4">
                          <img 
                            src={exp.image} 
                            alt={exp.title} 
                            className="w-full h-full object-cover scale-100" 
                          />
                        </div>

                        <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-4 font-semibold">
                          {exp.intro}
                        </p>
                        <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/80 mb-8">
                          {exp.description}
                        </p>
                        
                        <div className="bg-[#EAE7E0] p-6 md:p-8 border-l-2 border-[#591C27]">
                          <ul className="space-y-4">
                            {exp.highlights.map((point, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#591C27]/50 mt-2 flex-shrink-0"></span>
                                <span className="font-sans text-sm leading-relaxed text-[#2C2A25]/80">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MORE MEMORABLE MOMENTS (Bento Grid)
      ======================================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-[1px] bg-[#591C27]"></span>
          <h2 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
            More Memorable Moments
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memorableMoments.map((moment, i) => (
            <div 
              key={i} 
              className="bg-[#EAE7E0] p-8 md:p-10 border border-[#2C2A25]/5 hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors duration-500 group"
            >
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

      <Footer />
    </main>
  );
}