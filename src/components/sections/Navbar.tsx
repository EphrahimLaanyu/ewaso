'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current active route

  // Define navigation items with explicit paths
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Camp', href: '/camp' },
    { name: 'About', href: '/about' },
    { name: 'Activities', href: '/activities' },
    { name: 'Ethos', href: '/#ethos' },
    { name: 'Gallery', href: '/#gallery' }
  ];

  // Track scroll to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Determine text and line color based on scroll OR if the menu is open
  const textColor = isSolid && !isOpen ? 'text-[#2C2A25]' : 'text-[#F4F1EB]';
  const bgColor = isSolid && !isOpen ? 'bg-[#2C2A25]' : 'bg-[#F4F1EB]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSolid && !isOpen
            ? 'bg-[#F4F1EB] py-4 md:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          
          {/* LEFT: The Masthead / Logo */}
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className={`font-serif text-2xl md:text-3xl tracking-tight transition-colors duration-500 hover:opacity-70 ${textColor}`}
          >
            Goshen
          </a>

          {/* RIGHT: CTA & Menu Toggle (Always visible on all screens) */}
          <div className="flex items-center gap-6 md:gap-10">
            {/* Primary Action (Inquire) */}
            <a
              href="/#reservations"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-500 ${textColor}`}
            >
              Inquire
              <span className={`hidden sm:block w-6 h-[1px] group-hover:w-10 transition-all duration-300 ${bgColor}`}></span>
            </a>

            {/* Hamburger Menu Icon */}
            <button
              className="flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none z-50 group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-[1px] transition-all duration-300 ease-in-out ${bgColor} ${
                  isOpen ? 'w-7 rotate-45 translate-y-[3.5px]' : 'w-7 group-hover:w-5'
                }`}
              ></span>
              <span
                className={`block h-[1px] transition-all duration-300 ease-in-out ${bgColor} ${
                  isOpen ? 'w-7 -rotate-45 -translate-y-[3.5px]' : 'w-5 group-hover:w-7'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1817] flex flex-col justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center mt-12">
          {menuItems.map((item, i) => {
            // Determine if the current item is the active page
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/');

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight transition-colors duration-300 ${
                  isActive
                    ? 'text-[#591C27] italic' // Highlighted active state
                    : 'text-[#F4F1EB] hover:text-[#591C27] hover:italic' // Default & hover states
                }`}
                style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#F4F1EB]/40 font-bold">
            Goshen • Laikipia
          </p>
        </div>
      </div>
    </>
  );
}