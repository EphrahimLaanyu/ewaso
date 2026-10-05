'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrinks the vertical padding slightly when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out bg-[#F4F1EB] border-b ${
        isScrolled 
          ? 'py-4 border-[#591C27]/20 shadow-sm' 
          : 'py-6 border-[#591C27]/40'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-baseline">
        
        {/* LEFT: The Masthead / Logo */}
        <a 
          href="/" 
          className="font-serif text-2xl md:text-3xl text-[#591C27] tracking-tight hover:opacity-70 transition-opacity"
        >
          Ewaso
        </a>

        {/* RIGHT: The Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          <a 
            href="#experiences" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25] hover:text-[#591C27] transition-colors"
          >
            Experiences
          </a>
          
          <a 
            href="#ethos" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25] hover:text-[#591C27] transition-colors"
          >
            Ethos
          </a>
          
          <a 
            href="#gallery" 
            className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2C2A25] hover:text-[#591C27] transition-colors"
          >
            Gallery
          </a>

          {/* Primary Action - Distinctive Styling */}
          <a 
            href="#reservations" 
            className="group flex items-center gap-3 font-sans text-[9px] tracking-[0.2em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors ml-4"
          >
            Inquire
            <span className="w-6 h-[1px] bg-[#591C27] group-hover:bg-[#2C2A25] group-hover:w-10 transition-all duration-300"></span>
          </a>
        </nav>

        {/* MOBILE: Minimalist Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none group"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[1px] bg-[#591C27] group-hover:w-4 transition-all duration-300"></span>
          <span className="w-6 h-[1px] bg-[#591C27] group-hover:w-5 transition-all duration-300"></span>
        </button>

      </div>
    </header>
  );
}