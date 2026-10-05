"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, Eye } from "lucide-react";

interface HeroProps {
  onOpenEnquire?: () => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<0 | 1>(0);

  const images = [
    {
      src: "/images/ewaso-hero.jpg",
      alt: "Ewaso Camp luxury safari pavilion overlooking golden savannah and Mount Kenya",
      caption: "VERANDAH & INFINITY POOL — LAIKIPIA HORIZON",
      subcaption: "Mount Kenya Silhouette & Elephant Grazing Plains",
    },
    {
      src: "/images/ewaso-detail.jpg",
      alt: "Ewaso Camp stone colonnade suite with linen daybed and savannah breeze",
      caption: "COLONNADE SUITE & TEXTURAL STONEWORK",
      subcaption: "Hand-Hewn Local Stone Colonnade & Pure Linen Sanctuary",
    },
  ];

  return (
    <section
      className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]"
      data-section="hero"
    >
      {/* Top Editorial Eyebrow & Coordinates Bar */}
      <div className="max-w-7xl mx-auto w-full mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#221E1F]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#591C27] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-[#706C66]">
              Private Safari House · Nanyuki, Kenya
            </span>
          </div>

          <div className="flex items-center gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#8E887E]">
            <span className="hidden md:inline">Mount Kenya Foothills</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-[#591C27]" />
              0° 01&apos; 14&quot; N, 37° 04&apos; 28&quot; E
            </span>
            <span>·</span>
            <span className="text-[#591C27] font-semibold">
              Exclusive Buyout
            </span>
          </div>
        </div>
      </div>

      {/* Main Editorial Headline & Introduction Grid */}
      <div className="max-w-7xl mx-auto w-full mb-10 sm:mb-14 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main Title (Editorial Serif Typography) */}
          <div className="lg:col-span-8">
            <h1
              className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.04] text-[#221E1F] font-light tracking-[-0.015em]"
              data-animate="hero-title"
            >
              Where the wild savannah meets{" "}
              <span className="italic font-normal text-[#1E1B18] tracking-normal font-serif">
                quiet architectural
              </span>{" "}
              sanctuary.
            </h1>
          </div>

          {/* Subtext, Curated Details & CTAs */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pl-4">
            <p
              className="text-[#4A4541] text-sm sm:text-base leading-relaxed font-light tracking-wide"
              data-animate="hero-subtext"
            >
              Conceived in rammed earth, hand-hewn stone, and unhurried African
              light. Ewaso Camp is an intimate, four-suite private safari house
              set within the untamed silence of Nanyuki—crafted solely for
              exclusive buyouts and private expeditions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                onClick={onOpenEnquire}
                type="button"
                className="group relative inline-flex items-center justify-between bg-[#591C27] hover:bg-[#6B2737] text-[#FAF8F5] px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-[0_6px_20px_rgba(89,28,39,0.22)] hover:shadow-[0_10px_28px_rgba(89,28,39,0.32)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Reserve Exclusive Buyout</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAF8F5]" />
                </span>
              </button>

              <a
                href="#house"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#4A4541] hover:text-[#591C27] transition-colors py-2 px-1 group"
              >
                <span className="border-b border-[#221E1F]/20 group-hover:border-[#591C27] pb-0.5 transition-colors">
                  Explore Architecture & Estate
                </span>
                <span className="text-[#8E887E] group-hover:text-[#591C27] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Inset Hero Image Frame with Editorial Framing */}
      <div className="max-w-7xl mx-auto w-full relative mb-12 sm:mb-16">
        <div className="relative p-2 sm:p-3 bg-[#FAF8F5] border border-[#221E1F]/15 rounded-sm editorial-frame">
          {/* Architectural Register Tick Marks at Corners */}
          <div className="absolute -top-1.5 -left-1.5 text-xs text-[#221E1F]/40 font-mono select-none">
            +
          </div>
          <div className="absolute -top-1.5 -right-1.5 text-xs text-[#221E1F]/40 font-mono select-none">
            +
          </div>
          <div className="absolute -bottom-1.5 -left-1.5 text-xs text-[#221E1F]/40 font-mono select-none">
            +
          </div>
          <div className="absolute -bottom-1.5 -right-1.5 text-xs text-[#221E1F]/40 font-mono select-none">
            +
          </div>

          {/* Image Container with Inset Aspect Ratio */}
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-[#EAE3D6] group">
            <Image
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
              className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle Gradient Veil for Editorial Warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161414]/50 via-transparent to-[#161414]/15 pointer-events-none" />

            {/* Floating Top Inset Badge: View Switcher */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-auto">
              <div className="bg-[#FAF8F5]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#221E1F]/10 flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#591C27]" />
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#221E1F] font-medium">
                  {images[activeImageIndex].caption}
                </span>
              </div>

              {/* View Perspective Switcher */}
              <div className="hidden sm:flex items-center gap-1 bg-[#161414]/70 backdrop-blur-md p-1 rounded-full border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(0)}
                  className={`text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full transition-all duration-300 ${
                    activeImageIndex === 0
                      ? "bg-[#591C27] text-white font-medium"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Savannah Horizon
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(1)}
                  className={`text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full transition-all duration-300 ${
                    activeImageIndex === 1
                      ? "bg-[#591C27] text-white font-medium"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Suite Colonnade
                </button>
              </div>
            </div>

            {/* Floating Bottom Inset Metadata */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white pointer-events-none">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide drop-shadow-sm">
                  {images[activeImageIndex].subcaption}
                </p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/80 mt-1 font-sans">
                  Private 4-Suite Buyout · Up to 8 Guests · Dedicated Safari Guide &amp; Private Chef
                </p>
              </div>

              <div className="hidden md:flex flex-col text-right text-[10px] tracking-[0.2em] uppercase text-white/75 font-sans">
                <span>Direct Wilderness Frontage</span>
                <span>Latitude 0° Equator Corridor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Perspective Toggle Buttons (visible on small screens) */}
        <div className="flex sm:hidden justify-center items-center gap-2 mt-4">
          <button
            type="button"
            onClick={() => setActiveImageIndex(0)}
            className={`text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border transition-all ${
              activeImageIndex === 0
                ? "bg-[#591C27] text-white border-[#591C27]"
                : "bg-transparent text-[#4A4541] border-[#221E1F]/20"
            }`}
          >
            Horizon View
          </button>
          <button
            type="button"
            onClick={() => setActiveImageIndex(1)}
            className={`text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border transition-all ${
              activeImageIndex === 1
                ? "bg-[#591C27] text-white border-[#591C27]"
                : "bg-transparent text-[#4A4541] border-[#221E1F]/20"
            }`}
          >
            Suite View
          </button>
        </div>
      </div>

      {/* Bottom Editorial Bar & Subtle Typographic Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#221E1F]/10 pt-6">
          {/* Estate Highlights */}
          <div className="flex items-center gap-6 sm:gap-10 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#706C66]">
            <div>
              <span className="text-[#221E1F] font-semibold">04</span> Suites
            </div>
            <div>
              <span className="text-[#221E1F] font-semibold">100%</span> Solar
              Powered
            </div>
            <div>
              <span className="text-[#221E1F] font-semibold">Private</span> 4x4
              Fleet
            </div>
            <div className="hidden lg:block">
              <span className="text-[#591C27] font-semibold">2026/27</span> Bookings Open
            </div>
          </div>

          {/* Typography-Based Subtle Scroll Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E887E] font-medium font-sans">
              Scroll to explore
            </span>
            <div className="w-[1px] h-9 bg-[#221E1F]/15 relative overflow-hidden">
              <div className="w-full h-3 bg-[#591C27] animate-scroll-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
