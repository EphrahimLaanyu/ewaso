'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

// ============================================================================ // BASE SUPABASE MEDIA URL // ============================================================================ 
const BASE_URL = "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/"; 

// ============================================================================ // IMAGE TYPES & DATA ARRAYS // ============================================================================ 
interface GalleryItem { 
  id: string; 
  src: string; 
  alt: string; 
  title: string; 
  category: string; 
  location?: string; 
  spanClass: string; 
  aspectClass: string; 
}

// 1. THE CAMP 
// 1. THE CAMP 
const campImages: GalleryItem[] = [ 
  { 
    id: "camp-01", 
    src: `${BASE_URL}luxury-tent-suite-master-bed-panorama.jpeg`, 
    alt: "Master Canvas Suite Interior with wooden bed and Panoramic Bush View", 
    title: "Master Canvas Suite", 
    category: "The Suites", 
    location: "Tent 03", 
    spanClass: "col-span-12 lg:col-span-8", 
    aspectClass: "aspect-[4/3] sm:aspect-[16/10]" 
  }, 
  { 
    id: "camp-02", 
    src: `${BASE_URL}Architecture.jpeg`, 
    alt: "Handcrafted Timber and Glass Suite Entrance", 
    title: "Timber & Canvas Entry", 
    category: "Architecture", 
    location: "Private Veranda", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/5]" 
  }, 
  { 
    id: "camp-03", 
    src: `${BASE_URL}Shower-area-with-shower-flowing.jpeg`, 
    alt: "Ensuite Rough-Hewn Stone Shower with flowing water and open window", 
    title: "Bush Stone Shower", 
    category: "En-Suite", 
    location: "Bath Quarters", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/5]" 
  }, 
  { 
    id: "camp-04", 
    src: `${BASE_URL}dining-gallery.jpeg`, 
    alt: "Outdoor dining table with red checkered runner on a wooden deck looking out across the bush", 
    title: "Deck Dining", 
    category: "Dining", 
    location: "Central Ridge", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/5]" 
  }, 
  { 
    id: "camp-05", 
    src: `${BASE_URL}interiors.jpeg`, 
    alt: "Deep Sofas, colorful cushions, and radiating roof poles in the Camp Lounge", 
    title: "Pavilion Lounge", 
    category: "Interiors", 
    location: "Main Hearth", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/5]" 
  }, 
  { 
    id: "camp-06", 
    src: `${BASE_URL}Vantage.jpeg`, 
    alt: "Illuminated safari tent glowing at night under a dark starry sky", 
    title: "Starlit Sanctuary", 
    category: "Vantage", 
    location: "Nightfall", 
    spanClass: "col-span-12 md:col-span-7", 
    aspectClass: "aspect-[16/10]" 
  }, 
  { 
    id: "camp-07", 
    src: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/cuisine.jpeg", 
    alt: "Outdoor buffet station with chafing dishes set on a burgundy tablecloth with bush views", 
    title: "Bush Buffet Setup", 
    category: "Cuisine", 
    location: "Dining Deck", 
    spanClass: "col-span-12 md:col-span-5", 
    aspectClass: "aspect-[16/10]" 
  } 
];
//https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/Shower-area-with-shower-flowing.jpeg
// 2. THE WILDLIFE 
const wildlifeImages: GalleryItem[] = [ 
  { 
    id: "wild-01", 
    src: `${BASE_URL}Giza-licking.jpeg`, 
    alt: "Melanistic black leopard standing in tall dry grass, yawning", 
    title: "Giza the Black Leopard", 
    category: "Rare Sightings", 
    location: "Riverine Corridor", 
    spanClass: "col-span-12 lg:col-span-7", 
    aspectClass: "aspect-[16/11]" 
  }, 
  { 
    id: "wild-02", 
    src: `${BASE_URL}Elephant-in-river-2.jpeg`, 
    alt: "Two large elephants wading through a watering hole surrounded by green bush", 
    title: "Elephants in the Water", 
    category: "Elephant Kingdom", 
    location: "Conservancy Trail", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-5", 
    aspectClass: "aspect-[4/5]" 
  }, 
  { 
    id: "wild-03", 
    src: `${BASE_URL}kudu.jpeg`, 
    alt: "A curious pair of lesser kudus, stopping just long enough to give us a good look.", 
    title: "Lesser Kudu", 
    category: "Endangered Species", 
    location: "Open Savannah", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]" 
  }, 
  { 
    id: "wild-04", 
    src: `${BASE_URL}young-male-lion-golden-morning-sun.jpeg`, 
    alt: "Majestic male lion resting on a dirt mound looking out over the territory", 
    title: "Pride Patrol", 
    category: "Predators", 
    location: "North Ridges", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]" 
  }, 
  { 
    id: "wild-05", 
    src: `${BASE_URL}beisa-oryx-pair-green-bush-portrait.jpeg`, 
    alt: "Beisa Oryx Pair Standing in Green Thicket", 
    title: "Beisa Oryx", 
    category: "Northern Species", 
    location: "Acacia Basin", 
    spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", 
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]" 
  }, 
  { 
    id: "wild-06", 
    src: `${BASE_URL}aerial-elephants-crossing-ewaso-nyiro-river-1.jpeg`, 
    alt: "Aerial drone perspective of wildlife at the muddy Ewaso Nyiro River", 
    title: "The River Crossing", 
    category: "Aerial", 
    location: "Ewaso Nyiro", 
    spanClass: "col-span-12 lg:col-span-8", 
    aspectClass: "aspect-[16/9]" 
  }, 
  { 
    id: "wild-07", 
    src: "https://bfwisxjfneudldalecsl.supabase.co/storage/v1/object/public/Media/zebras-b&w.jpeg", 
    alt: "The incredibly photogenic Grevy’s zebras. See how thin their stripes are", 
    title: "Grevy's Zebra", 
    category: "Endangered Species", 
    location: "Open Savannah", 
    spanClass: "col-span-12 lg:col-span-4", 
    aspectClass: "aspect-[16/9] lg:aspect-[4/5]" 
  } 
];

// 3. THE EXPERIENCE 
const experienceImages: GalleryItem[] = [ 
  { id: "exp-01", src: `${BASE_URL}laikipia-golden-sunset-kopje-silhouette.jpeg`, alt: "Dramatic Silhouette of Kopje and Bush During Laikipia Sunset", title: "Sunset on the Ridge", category: "Golden Hour", location: "Granite Kopje", spanClass: "col-span-12 md:col-span-6", aspectClass: "aspect-[16/10]" }, 
  { id: "exp-02", src: `${BASE_URL}guided-bush-walk-riverbank-trail.jpeg`, alt: "Walking Safari Along Ewaso Riverbank with Resident Naturalist", title: "Guided Nature Walk", category: "Walking Safari", location: "River Trails", spanClass: "col-span-12 md:col-span-6", aspectClass: "aspect-[16/10]" }, 
  { id: "exp-03", src: `${BASE_URL}river-fishing-ewaso-nyiro-rock-pools.jpeg`, alt: "Quiet River Fishing in Natural Granite Pools", title: "Rock Pool Fishing", category: "River Excursion", location: "Ewaso Rapids", spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", aspectClass: "aspect-[4/5]" }, 
  { id: "exp-04", src: `${BASE_URL}nightfall.jpeg`, alt: "Roaring Fire Pit Flames Against Deep Twilight Sky", title: "The last whispers of daylight in the African bush.", category: "Nightfall", location: "Main Hearth", spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", aspectClass: "aspect-[4/5]" }, 
  { id: "exp-05", src: `${BASE_URL}tent-relaxation-armchair-desk-view.jpeg`, alt: "Tranquil Reading and Writing Nook Overlooking Savannah", title: "The Art of Doing Nothing", category: "Sanctuary", location: "Guest Suite", spanClass: "col-span-12 sm:col-span-6 lg:col-span-4", aspectClass: "aspect-[4/5]" }, 
  { id: "exp-06", src: `${BASE_URL}community.jpeg`, alt: "Warm Community Welcome in Neighbouring Samburu Village", title: "Samburu Heritage", category: "Community", location: "Neighbouring Manyatta", spanClass: "col-span-12 md:col-span-7", aspectClass: "aspect-[16/10]" }, 
  { id: "exp-07", src: `${BASE_URL}night-dinner.jpeg`, alt: "Guests Gathered for Twilight Dinner Around Open Fire", title: "Fireside Dinner", category: "Dining", location: "Open Wilderness", spanClass: "col-span-12 md:col-span-5", aspectClass: "aspect-[16/10]" } 
];

// Combine all for fullscreen lightbox navigation 
const allGalleryItems = [...campImages, ...wildlifeImages, ...experienceImages]; 

// ============================================================================ // MAIN GALLERY CLIENT COMPONENT // ============================================================================ 
export default function GalleryClient() { 
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null); 
  
  // Close lightbox 
  const closeLightbox = useCallback(() => { 
    setActiveLightboxIndex(null); 
  }, []); 
  
  // Step Next/Prev in Lightbox 
  const showNext = useCallback(() => { 
    if (activeLightboxIndex === null) return; 
    setActiveLightboxIndex((prev) => (prev! + 1) % allGalleryItems.length); 
  }, [activeLightboxIndex]); 
  
  const showPrev = useCallback(() => { 
    if (activeLightboxIndex === null) return; 
    setActiveLightboxIndex((prev) => (prev! - 1 + allGalleryItems.length) % allGalleryItems.length); 
  }, [activeLightboxIndex]); 
  
  // Keyboard navigation 
  useEffect(() => { 
    const handleKeyDown = (e: KeyboardEvent) => { 
      if (activeLightboxIndex === null) return; 
      if (e.key === 'Escape') closeLightbox(); 
      if (e.key === 'ArrowRight') showNext(); 
      if (e.key === 'ArrowLeft') showPrev(); 
    }; 
    window.addEventListener('keydown', handleKeyDown); 
    return () => window.removeEventListener('keydown', handleKeyDown); 
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]); 
  
  // Prevent background scrolling when lightbox is active 
  useEffect(() => { 
    if (activeLightboxIndex !== null) { 
      document.body.style.overflow = 'hidden'; 
    } else { 
      document.body.style.overflow = ''; 
    } 
    return () => { 
      document.body.style.overflow = ''; 
    }; 
  }, [activeLightboxIndex]); 
  
  // Open lightbox helper 
  const openItem = (item: GalleryItem) => { 
    const idx = allGalleryItems.findIndex((x) => x.id === item.id); 
    if (idx !== -1) setActiveLightboxIndex(idx); 
  }; 
  
  return ( 
    <main className="min-h-screen w-full bg-[#F4F1EB] text-[#2C2A25] flex flex-col selection:bg-[#591C27] selection:text-[#F4F1EB]"> 
      {/* 1. GLOBAL NAVBAR */} 
      <Navbar /> 
      
      {/* 2. DRAMATIC HERO SECTION (70svh) */} 
      <section className="relative w-full h-[70svh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1817]"> 
        <div className="absolute inset-0 z-0"> 
          <img src={`${BASE_URL}elephants-line-drinking-waterhole-monochrome.jpeg`} alt="Goshen Sanctuary Panoramic Bush Landscape" className="w-full h-full object-cover scale-105 animate-[pulse_24s_ease-in-out_infinite]" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#F4F1EB]"></div> 
        </div> 
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center"> 
          <div className="flex items-center justify-center gap-4 mb-6"> 
            <span className="w-10 md:w-16 h-[1px] bg-[#F4F1EB]/50"></span> 
            <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-bold text-[#F4F1EB]/90"> Visual Anthology </span> 
            <span className="w-10 md:w-16 h-[1px] bg-[#F4F1EB]/50"></span> 
          </div> 
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F1EB] tracking-tight uppercase leading-[0.9] drop-shadow-2xl mb-6"> Gallery </h1> 
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#F4F1EB]/90 italic font-light max-w-xl leading-relaxed"> A glimpse into the Goshen experience. </p> 
          
          <div className="mt-10 flex flex-col items-center gap-2 opacity-60"> 
            <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#F4F1EB]"> Explore Collection </span> 
            <span className="w-[1px] h-8 bg-gradient-to-b from-[#F4F1EB] to-transparent"></span> 
          </div> 
        </div> 
      </section> 

      {/* 3. GALLERY CATEGORIES CONTAINER */} 
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 space-y-32 md:space-y-40"> 
        
        {/* ======================================================== CATEGORY 1: THE CAMP ======================================================== */} 
        <section id="the-camp" className="flex flex-col"> 
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[#2C2A25]/10 pb-8"> 
            <div> 
              <div className="flex items-center gap-3 mb-4"> 
                <span className="w-8 h-[1px] bg-[#591C27]"></span> 
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]"> 01 / Sanctuary Architecture </span> 
              </div> 
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2C2A25]"> The Camp </h2> 
            </div> 
            <p className="font-sans text-sm md:text-base text-[#2C2A25]/70 max-w-md leading-relaxed"> Tents, interiors, dining, and the pavilion. Handcrafted stone, heavy canvas, and rough-hewn timber nestled atop the granite ridge. </p> 
          </div> 

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8"> 
            {campImages.map((item) => ( 
              // Notice we moved the aspectClass to this outer wrapping div
              <div 
                key={item.id} 
                onClick={() => openItem(item)} 
                className={`group relative overflow-hidden bg-[#2C2A25] cursor-pointer shadow-xl ${item.spanClass} ${item.aspectClass}`} 
              > 
                {/* The image is now absolute inset-0 so it ALWAYS fills the container regardless of grid stretching */}
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105 z-0" 
                /> 
                
                {/* Ambient dark bottom gradient for caption visibility */} 
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div> 
                
                {/* Category Pill Tag */} 
                <div className="absolute top-4 left-4 z-20"> 
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB] bg-[#1A1817]/70 backdrop-blur-md px-3 py-1 border border-[#F4F1EB]/10"> 
                    {item.category} 
                  </span> 
                </div> 
                
                {/* Bottom Caption Overlay */} 
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between"> 
                  <div> 
                    <h3 className="font-serif text-xl md:text-2xl text-[#F4F1EB] tracking-tight"> {item.title} </h3> 
                    {item.location && ( 
                      <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#F4F1EB]/70 mt-1"> {item.location} </p> 
                    )} 
                  </div> 
                  <span className="hidden sm:inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB]/80"> View </span> 
                </div> 
              </div> 
            ))} 
          </div> 
        </section> 

        {/* ======================================================== CATEGORY 2: THE WILDLIFE ======================================================== */} 
        <section id="the-wildlife" className="flex flex-col"> 
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[#2C2A25]/10 pb-8"> 
            <div> 
              <div className="flex items-center gap-3 mb-4"> 
                <span className="w-8 h-[1px] bg-[#591C27]"></span> 
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]"> 02 / Unscripted Encounters </span> 
              </div> 
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2C2A25]"> The Wildlife </h2> 
            </div> 
            <p className="font-sans text-sm md:text-base text-[#2C2A25]/70 max-w-md leading-relaxed"> Home to Giza the melanistic black leopard, wandering breeding herds of elephants, and the extraordinary biodiversity of Laikipia. </p> 
          </div> 

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8"> 
            {wildlifeImages.map((item) => ( 
              <div 
                key={item.id} 
                onClick={() => openItem(item)} 
                className={`group relative overflow-hidden bg-[#2C2A25] cursor-pointer shadow-xl ${item.spanClass} ${item.aspectClass}`} 
              > 
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105 z-0" 
                /> 
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div> 
                
                <div className="absolute top-4 left-4 z-20"> 
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB] bg-[#1A1817]/70 backdrop-blur-md px-3 py-1 border border-[#F4F1EB]/10"> 
                    {item.category} 
                  </span> 
                </div> 
                
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between"> 
                  <div> 
                    <h3 className="font-serif text-xl md:text-2xl text-[#F4F1EB] tracking-tight"> {item.title} </h3> 
                    {item.location && ( 
                      <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#F4F1EB]/70 mt-1"> {item.location} </p> 
                    )} 
                  </div> 
                  <span className="hidden sm:inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB]/80"> View </span> 
                </div> 
              </div> 
            ))} 
          </div> 
        </section> 

        {/* ======================================================== CATEGORY 3: THE EXPERIENCE ======================================================== */} 
        <section id="the-experience" className="flex flex-col"> 
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[#2C2A25]/10 pb-8"> 
            <div> 
              <div className="flex items-center gap-3 mb-4"> 
                <span className="w-8 h-[1px] bg-[#591C27]"></span> 
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]"> 03 / Rhythm of the Bush </span> 
              </div> 
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2C2A25]"> The Experience </h2> 
            </div> 
            <p className="font-sans text-sm md:text-base text-[#2C2A25]/70 max-w-md leading-relaxed"> Sundowners on granite kopjes, riverbank foot safaris, quiet river fishing, and the deep stillness of doing nothing. </p> 
          </div> 

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8"> 
            {experienceImages.map((item) => ( 
              <div 
                key={item.id} 
                onClick={() => openItem(item)} 
                className={`group relative overflow-hidden bg-[#2C2A25] cursor-pointer shadow-xl ${item.spanClass} ${item.aspectClass}`} 
              > 
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-105 z-0" 
                /> 
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div> 
                
                <div className="absolute top-4 left-4 z-20"> 
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB] bg-[#1A1817]/70 backdrop-blur-md px-3 py-1 border border-[#F4F1EB]/10"> 
                    {item.category} 
                  </span> 
                </div> 
                
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between"> 
                  <div> 
                    <h3 className="font-serif text-xl md:text-2xl text-[#F4F1EB] tracking-tight"> {item.title} </h3> 
                    {item.location && ( 
                      <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#F4F1EB]/70 mt-1"> {item.location} </p> 
                    )} 
                  </div> 
                  <span className="hidden sm:inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB]/80"> View </span> 
                </div> 
              </div> 
            ))} 
          </div> 
        </section> 
      </div> 

      {/* ======================================================== 4. CALL TO ACTION STRIP ======================================================== */} 
      <section className="w-full bg-[#1A1817] text-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-[#F4F1EB]/10 text-center relative overflow-hidden"> 
        <div className="max-w-3xl mx-auto flex flex-col items-center"> 
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#F4F1EB]/60 mb-6"> Begin Your Journey </span> 
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6"> Experience Goshen <br /> <span className="italic font-light text-[#F4F1EB]/90">for yourself.</span> </h2> 
          <p className="font-sans text-sm md:text-base text-[#F4F1EB]/80 max-w-xl mx-auto mb-10 leading-relaxed"> From sunrise tracking on elephant corridors to fireside dining beneath unbroken starlight, our reservations team is ready to assist your safari. </p> 
          <Link href="/inquire" className="group inline-flex items-center justify-between gap-6 bg-[#591C27] text-[#F4F1EB] px-10 py-5 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#F4F1EB] hover:text-[#2C2A25] transition-all duration-500 shadow-2xl" > 
            <span>Plan Your Stay</span> 
            <span className="block w-4 h-[1px] bg-current group-hover:w-8 transition-all duration-500 ease-out"></span> 
          </Link> 
        </div> 
      </section> 

      {/* ======================================================== 5. FULLSCREEN LIGHTBOX MODAL ======================================================== */} 
      {activeLightboxIndex !== null && ( 
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in" onClick={closeLightbox} > 
          {/* Top Bar: Counter & Close Button */} 
          <div className="w-full flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()} > 
            <div className="flex items-center gap-3 text-[#F4F1EB]"> 
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#F4F1EB]/60"> {allGalleryItems[activeLightboxIndex].category} </span> 
              <span className="text-xs text-[#F4F1EB]/40">•</span> 
              <span className="text-xs tracking-wider text-[#F4F1EB]/70 font-mono"> {activeLightboxIndex + 1} / {allGalleryItems.length} </span> 
            </div> 
            <button onClick={closeLightbox} className="group p-2 text-[#F4F1EB]/80 hover:text-white transition-colors" aria-label="Close Lightbox" > 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> 
                <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> 
              </svg> 
            </button> 
          </div> 
          
          {/* Middle: Main Image + Prev/Next Buttons */} 
          <div className="relative flex-grow flex items-center justify-center py-4 my-auto max-h-[82vh]" onClick={(e) => e.stopPropagation()} > 
            <button onClick={showPrev} className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10" aria-label="Previous Image" > 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> 
                <polyline points="15 18 9 12 15 6"></polyline> 
              </svg> 
            </button> 
            
            <img src={allGalleryItems[activeLightboxIndex].src} alt={allGalleryItems[activeLightboxIndex].alt} className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl transition-all duration-300" /> 
            
            <button onClick={showNext} className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10" aria-label="Next Image" > 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> 
                <polyline points="9 18 15 12 9 6"></polyline> 
              </svg> 
            </button> 
          </div> 
          
          {/* Bottom Bar: Title & Alt Information */} 
          <div className="w-full text-center pb-2 z-20 max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()} > 
            <h3 className="font-serif text-2xl md:text-3xl text-[#F4F1EB] tracking-tight mb-1"> {allGalleryItems[activeLightboxIndex].title} </h3> 
            <p className="font-sans text-xs md:text-sm text-[#F4F1EB]/70"> {allGalleryItems[activeLightboxIndex].alt} </p> 
          </div> 
        </div> 
      )} 
      
      {/* 6. GLOBAL FOOTER */} 
      <Footer /> 
    </main> 
  ); 
}