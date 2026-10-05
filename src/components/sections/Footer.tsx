import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#591C27] text-[#F4F1EB] pt-24 pb-8 px-6 md:px-12 lg:px-20 selection:bg-[#F4F1EB] selection:text-[#591C27]">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* 
          TOP ROW: Brand & Contact Grid
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
              Ewaso
              <span className="block italic font-light opacity-90 mt-2">Elephant Crossing</span>
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60">
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

            {/* Direct Contact Column */}
            <div className="flex flex-col">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-[#F4F1EB]/50"></span>
                Direct Inquiries
              </span>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:info@rhinowatchlodge.com" 
                  className="group flex flex-col w-max"
                >
                  <span className="font-serif text-xl md:text-2xl leading-snug opacity-90 group-hover:opacity-100 transition-opacity">
                    info@rhinowatchlodge.com
                  </span>
                  <span className="w-0 h-[1px] bg-[#F4F1EB] group-hover:w-full transition-all duration-500 ease-out mt-1"></span>
                </a>

                <a 
                  href="https://wa.me/254758940187" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex flex-col w-max mt-2"
                >
                  <span className="font-sans text-sm tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
                    WhatsApp: +254 758 940 187
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 
          BOTTOM ROW: Legal & Copyright
        */}
        <div className="w-full border-t border-[#F4F1EB]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase opacity-50 text-center md:text-left">
            © 2026 Ewaso Elephant Crossing. All rights reserved.
          </p>

          <div className="flex items-center gap-8 font-sans text-[10px] tracking-[0.15em] uppercase opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Terms of Reserve</a>
          </div>

        </div>

      </div>
    </footer>
  );
}