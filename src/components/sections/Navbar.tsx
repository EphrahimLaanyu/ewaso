'use client'; 

import React, { useState, useEffect } from 'react'; 
import { usePathname } from 'next/navigation'; 
import GoshenLogo from '@/components/ui/Logo'; // Make sure this path matches where you saved Logo.tsx

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

  // --- LOGIC: Check if we are on light background routes --- 
  const isDarkTextRoute = pathname === '/inquire'; 

  // Determine colors based on scroll, route, AND if the menu is open 
  const useDarkElements = (isSolid || isDarkTextRoute) && !isOpen; 
  
  const textColor = useDarkElements ? 'text-[#2C2A25]' : 'text-[#F4F1EB]'; 
  const bgColor = useDarkElements ? 'bg-[#2C2A25]' : 'bg-[#F4F1EB]'; 
  const logoTheme = useDarkElements ? 'dark' : 'light';

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
            className="transition-opacity duration-500 hover:opacity-70 focus:outline-none" 
            aria-label="Goshen Laikipia Home"
          > 
            <GoshenLogo variant="horizontal" theme={logoTheme} />
          </a> 

          {/* RIGHT: CTA & Menu Toggle */} 
          <div className="flex items-center gap-6 md:gap-10"> 
            
            {/* Primary Action (Inquire) */} 
            <a 
              href="/inquire" 
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
              <a 
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
              </a> 
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