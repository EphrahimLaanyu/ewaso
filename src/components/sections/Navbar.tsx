'use client'; 

import React, { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import GoshenLogo from '@/components/ui/Logo'; 

export default function Navbar() { 
  const [isSolid, setIsSolid] = useState(false); 
  const [isOpen, setIsOpen] = useState(false); 
  const pathname = usePathname(); 

  const menuItems = [ 
    { name: 'Home', href: '/' }, 
    { name: 'Camp', href: '/camp' }, 
    { name: 'About', href: '/about' }, 
    { name: 'Experiences', href: '/experiences' }, 
    { name: 'Gallery', href: '/gallery' } 
  ]; 

  // Track scroll to change navbar styling 
  useEffect(() => { 
    const handleScroll = () => { 
      if (window.scrollY > 40) { 
        setIsSolid(true); 
      } else { 
        setIsSolid(false); 
      } 
    }; 

    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  // Dynamic colors based on scroll state & open state 
  const textColor = isOpen 
    ? 'text-[#F4F1EB]' 
    : isSolid 
      ? 'text-[#2C2A25]' 
      : 'text-[#F4F1EB]'; 

  const bgColor = isOpen 
    ? 'bg-[#F4F1EB]' 
    : isSolid 
      ? 'bg-[#2C2A25]' 
      : 'bg-[#F4F1EB]'; 

  // Choose the logo theme based on current background
  // When scrolled down, background is light (#F4F1EB) -> use dark logo
  // When at top, background is dark hero -> use light logo
  // When menu is open, background is dark overlay -> use light logo
  const logoTheme = (isSolid && !isOpen) ? 'dark' : 'light';

  return ( 
    <> 
      {/* FIXED TOP HEADER */} 
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${ 
          isSolid && !isOpen 
            ? 'bg-[#F4F1EB] py-4 md:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent py-6 md:py-8' 
        }`} 
      > 
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center"> 
          
          {/* LEFT: The Masthead / Logo */} 
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="transition-opacity duration-500 hover:opacity-70 focus:outline-none" 
            aria-label="Goshen Laikipia - Return to Homepage"
          > 
            <GoshenLogo variant="horizontal" theme={logoTheme} />
          </Link> 

          {/* RIGHT: Coordinates + Inquire Link + Hamburger Menu */} 
          <div className="flex items-center gap-6 sm:gap-10"> 
            


            {/* Inquire Link */} 
            <Link 
              href="/inquire" 
              onClick={() => setIsOpen(false)} 
              className={`group flex items-center gap-3 font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-500 ${textColor}`} 
            > 
              Inquire/ Book
              <span className={`hidden sm:block w-6 h-[1px] group-hover:w-10 transition-all duration-300 ${bgColor}`}></span> 
            </Link> 
            
            {/* Hamburger Menu Icon */} 
            <button 
              className="flex flex-col justify-center gap-[6px] w-8 h-8 focus:outline-none z-50 group" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu" 
            > 
              <span className={`block h-[1px] transition-all duration-300 ease-in-out ${bgColor} ${ isOpen ? 'w-7 rotate-45 translate-y-[3.5px]' : 'w-7 group-hover:w-5' }`} ></span> 
              <span className={`block h-[1px] transition-all duration-300 ease-in-out ${bgColor} ${ isOpen ? 'w-7 -rotate-45 -translate-y-[3.5px]' : 'w-5 group-hover:w-7' }`} ></span> 
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
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/'); 
            return ( 
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className={`font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight transition-colors duration-300 ${ 
                  isActive 
                    ? 'text-[#591C27] italic' 
                    : 'text-[#F4F1EB] hover:text-[#591C27] hover:italic' 
                }`} 
                style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }} 
              > 
                {item.name} 
              </Link> 
            ); 
          })} 
        </nav> 
        
        {/* Menu Footer with Monogram */} 
        <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-6"> 
          <GoshenLogo variant="emblem" theme="light" className="opacity-40" />
        </div> 
      </div> 
    </> 
  ); 
}