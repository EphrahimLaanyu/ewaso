'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8 bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-baseline">
        
        {/* LEFT: The Masthead / Logo */}
        <a 
          href="/" 
          className="font-serif text-2xl md:text-3xl tracking-tight text-[#F4F1EB] hover:opacity-70 transition-opacity duration-500"
        >
          Goshen
        </a>

        {/* RIGHT: The Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          <a 
            href="#experiences" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#F4F1EB]/80 hover:text-[#F4F1EB] transition-colors duration-500"
          >
            Experiences
          </a>
          
          <a 
            href="#ethos" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#F4F1EB]/80 hover:text-[#F4F1EB] transition-colors duration-500"
          >
            Ethos
          </a>
          
          <a 
            href="#gallery" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#F4F1EB]/80 hover:text-[#F4F1EB] transition-colors duration-500"
          >
            Gallery
          </a>

          {/* Primary Action */}
          <a 
            href="#reservations" 
            className="group flex items-center gap-3 font-sans text-[9px] tracking-[0.2em] uppercase font-bold text-[#F4F1EB] transition-colors duration-500 ml-4"
          >
            Inquire
            <span className="w-6 h-[1px] bg-[#F4F1EB] group-hover:w-10 transition-all duration-300"></span>
          </a>
        </nav>

        {/* MOBILE: Minimalist Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none group"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[1px] bg-[#F4F1EB] group-hover:w-4 transition-all duration-300"></span>
          <span className="w-6 h-[1px] bg-[#F4F1EB] group-hover:w-5 transition-all duration-300"></span>
        </button>

      </div>
    </header>
  );
}