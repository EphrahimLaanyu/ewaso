import type { Metadata } from 'next';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import React from 'react';

export const metadata: Metadata = {
  title: 'Experiences & Wilderness Activities',
  description:
    'Track the elusive black leopard Giza, spend hours in dedicated photographic hides, and monitor resident wild dog packs on guided safaris across Goshen in Laikipia.',
  openGraph: {
    title: 'Experiences & Wilderness Activities | Goshen Laikipia',
    description:
      'Track the elusive black leopard Giza, spend hours in dedicated photographic hides, and monitor resident wild dog packs on guided safaris across Goshen in Laikipia.',
  },
};

// ============================================================================
// IMAGE CONFIGURATION
// Paste your Supabase image links here. They will automatically update the page.
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
                  loading="lazy"
                  width={800}
                  height={1000}
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
      {/* ========================================================
          3. OTHER ACTIVITIES (Burgundy Section with Images)
      ======================================================== */}
      <section className="w-full bg-[#591C27] text-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 selection:bg-[#F4F1EB] selection:text-[#591C27]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              Other Activities
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#F4F1EB]/80 uppercase tracking-[0.1em]">
              Because sometimes the greatest adventure is having nowhere to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
            
            {/* Fishing */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#2C2A25] mb-8 shadow-2xl border-[4px] md:border-[6px] border-[#F4F1EB]/10">
                <img 
                  src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/river-fishing-ewaso-nyiro-rock-pools.jpeg" 
                  alt="Fishing by the river" 
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105" 
                />
              </div>
              <h3 className="font-serif text-3xl mb-2">Fishing by the River</h3>
              <h4 className="font-serif text-lg italic font-light text-[#F4F1EB]/70 mb-6">
                Cast a line. Unwind. Let the river set the pace.
              </h4>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#F4F1EB]/80 mb-8">
                Not every adventure needs to be fast-paced. For guests who enjoy quieter moments, the Ewaso Nyiro River offers a beautiful setting to relax, reconnect with nature, and perhaps try your luck at fishing.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  Enjoy a relaxed fishing outing
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  Birdwatching along the riverbank
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  The simple pleasure of being outdoors
                </li>
              </ul>
            </div>

            {/* Doing Nothing */}
            <div className="flex flex-col group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#2C2A25] mb-8 shadow-2xl border-[4px] md:border-[6px] border-[#F4F1EB]/10">
                <img 
                  src="https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/tent-relaxation-armchair-desk-view.jpeg" 
                  alt="Relaxing at the camp" 
                  className="w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105" 
                />
              </div>
              <h3 className="font-serif text-3xl mb-2">The Art of Doing Nothing</h3>
              <h4 className="font-serif text-lg italic font-light text-[#F4F1EB]/70 mb-6">
                Stay a little longer. Slow down a little more.
              </h4>
              <p className="font-sans text-sm leading-relaxed tracking-wide text-[#F4F1EB]/80 mb-8">
                At Goshen, we believe that one of the greatest luxuries is the freedom to do absolutely nothing. You do not have to fill every moment with an activity. There is no pressure to be anywhere.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  Wake up naturally to the sounds of the bush
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  Enjoy a leisurely breakfast without the clock
                </li>
                <li className="flex items-center gap-3 text-sm text-[#F4F1EB]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/50"></span> 
                  Find a comfortable chair and a good book
                </li>
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
<Footer/>
    </main>
  );
}