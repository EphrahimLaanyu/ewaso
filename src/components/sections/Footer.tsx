import React from 'react';
import Link from 'next/link';
import GoshenLogo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#591C27] text-[#F4F1EB] pt-24 pb-8 px-6 md:px-12 lg:px-20 selection:bg-[#F4F1EB] selection:text-[#591C27]">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* TOP ROW: Brand & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link 
              href="/" 
              className="inline-block focus:outline-none hover:opacity-90 transition-opacity"
              aria-label="Goshen Laikipia - Return to Homepage"
            >
              <GoshenLogo variant="horizontal" theme="light" className="mb-6 scale-110 origin-left" />
            </Link>
            <h2 className="sr-only">Goshen Laikipia</h2>
            <p className="font-serif text-xl md:text-2xl text-[#F4F1EB] font-light italic mb-2">
              Goshen Laikipia
            </p>
            <p className="font-sans text-xs leading-relaxed opacity-75 max-w-md">
              Ewaso Enclave Conservancy
            </p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 mb-6 mt-1">
              Laikipia, Kenya
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-2">
            
            {/* Location Column */}
            <div className="flex flex-col">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-[#F4F1EB]/50"></span>
                Location
              </span>
              <p className="font-serif text-xl md:text-2xl leading-snug opacity-90">
                Ewaso Enclave Conservancy
              </p>
              <p className="font-sans text-sm tracking-wide opacity-70 mt-3">
                Laikipia County, Kenya
              </p>
            </div>

            {/* Direct Contact & Socials Column */}
            <div className="flex flex-col">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-[#F4F1EB]/50"></span>
                Connect With Us
              </span>
              <div className="flex flex-col gap-4">
                <a href="mailto:info@goshencamp.com" className="group flex flex-col w-max">
                  <span className="font-serif text-xl md:text-2xl leading-snug opacity-90 group-hover:opacity-100 transition-opacity">
                    info@goshencamp.com
                  </span>
                  <span className="w-0 h-[1px] bg-[#F4F1EB] group-hover:w-full transition-all duration-500 ease-out mt-1"></span>
                </a>
                
                <a href="https://wa.me/254769030068" target="_blank" rel="noreferrer" className="group flex flex-col w-max mt-2">
                  <span className="font-sans text-sm tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
                    WhatsApp: + 254 769 030 068 / +254 718 632 994
                  </span>
                </a>

                {/* Horizontal Social Icons Row with Hover Tooltips */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[#F4F1EB]/20">
                  {/* Ewaso Enclave Instagram */}
                  <a href="https://instagram.com/ewaso_enclave" target="_blank" rel="noreferrer" className="group relative opacity-70 hover:opacity-100 transition-all hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F4F1EB] text-[#591C27] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg rounded-sm">
                      @ewaso_enclave
                    </span>
                  </a>

                  {/* Goshen Camp Instagram */}
                  <a href="https://instagram.com/goshen_camp" target="_blank" rel="noreferrer" className="group relative opacity-70 hover:opacity-100 transition-all hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F4F1EB] text-[#591C27] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg rounded-sm">
                      @goshen_camp
                    </span>
                  </a>

                  {/* X (Twitter) */}
                  <a href="https://x.com/goshen_camp?s=11" target="_blank" rel="noreferrer" className="group relative opacity-70 hover:opacity-100 transition-all hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F4F1EB] text-[#591C27] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg rounded-sm">
                      @goshen_camp
                    </span>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/share/1DhMhaJp8L/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="group relative opacity-70 hover:opacity-100 transition-all hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F4F1EB] text-[#591C27] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg rounded-sm">
                      Goshen Camp
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/goshen-camp-60a0a5448?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="group relative opacity-70 hover:opacity-100 transition-all hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F4F1EB] text-[#591C27] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg rounded-sm">
                      Goshen Camp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Legal & Copyright */}
        <div className="w-full border-t border-[#F4F1EB]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase opacity-60 text-center md:text-left">
            © 2026 Goshen Laikipia. All rights reserved.
          </p>
          <div className="flex items-center gap-8 font-sans text-[10px] tracking-[0.15em] uppercase opacity-60">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}