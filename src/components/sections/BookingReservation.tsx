'use client';

import React from 'react';

export default function BookingReservation() {
  return (
    <section id="reservations" className="relative w-full bg-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 flex justify-center selection:bg-[#591C27] selection:text-[#F4F1EB] border-t border-[#2C2A25]/10">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* 
          LEFT COLUMN: THE DOSSIER (Booking Details)
          Styled as a physical document or ledger card.
        */}
        <div className="w-full lg:w-5/12 flex flex-col relative z-10">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#591C27]/40"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27]">
              Reservations
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2C2A25] mb-6">
            Inquire
          </h2>
          
          <p className="font-sans text-sm leading-relaxed text-[#591C27] font-medium mb-10">
            Inaugural Season: Opening October 1, 2026.<br />
            <span className="opacity-70 italic font-normal text-[#2C2A25]">Availability is intentionally limited.</span>
          </p>

          {/* The Ledger Card */}
          <div className="bg-[#EAE7E0] border border-[#2C2A25]/10 p-8 md:p-10 relative">
            {/* Decorative corner pins */}
            <div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-[#2C2A25]/30"></div>
            <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-[#2C2A25]/30"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-[#2C2A25]/30"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-[#2C2A25]/30"></div>

            <div className="flex flex-col gap-6">
              
              {/* Rate */}
              <div className="flex items-start gap-5 pb-6 border-b border-[#2C2A25]/10">
                <div className="text-[#591C27] shrink-0 pt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2A25]">Rate</span>
                    <span className="font-serif text-xl text-[#591C27]">From $440</span>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#2C2A25]/60 text-right">Per person, per night (Full Board)</span>
                </div>
              </div>

              {/* Conservancy Fee */}
              <div className="flex items-start gap-5 pb-6 border-b border-[#2C2A25]/10">
                <div className="text-[#591C27] shrink-0 pt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 4 13v-5a2 2 0 0 1 2-2h5a7 7 0 0 1 7 7v0a7 7 0 0 1-7 7z"></path>
                    <path d="M11 20v-6"></path>
                  </svg>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2A25]">Conservancy Fee</span>
                    <span className="font-serif text-xl text-[#591C27]">+$70</span>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#2C2A25]/60 text-right">Per night</span>
                </div>
              </div>

              {/* Minimum Stay */}
              <div className="flex items-start gap-5 pb-6 border-b border-[#2C2A25]/10">
                <div className="text-[#591C27] shrink-0 pt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2A25]">Minimum Stay</span>
                    <span className="font-serif text-xl text-[#591C27]">3 Nights</span>
                  </div>
                </div>
              </div>

              {/* Activities & Vehicles */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-start gap-5">
                  <div className="text-[#591C27] shrink-0 pt-0.5 opacity-70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#2C2A25]/80">
                    <strong className="text-[#2C2A25] font-semibold">Activities:</strong> Game drives and specialized activities are priced separately.
                  </p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="text-[#591C27] shrink-0 pt-0.5 opacity-70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#2C2A25]/80">
                    <strong className="text-[#2C2A25] font-semibold">Vehicles:</strong> No outside vehicles are permitted within the conservancy limits.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 px-2">
            <div className="w-10 h-10 rounded-full border border-[#591C27]/20 flex items-center justify-center shrink-0">
              <span className="font-serif text-sm text-[#591C27] italic">R</span>
            </div>
            <p className="font-sans text-[10px] leading-relaxed uppercase tracking-wider text-[#2C2A25]/70">
              Booking is exclusive with <strong className="text-[#591C27]">Rhino Watch Safaris Ltd.</strong>
              <span className="block mt-0.5 capitalize tracking-normal font-serif italic text-xs text-[#2C2A25]/50">(Part of the Apasio Collection)</span>
            </p>
          </div>
        </div>

        {/* 
          RIGHT COLUMN: THE INQUIRY FORM
        */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-12 lg:border-l border-[#2C2A25]/10">
          <form className="w-full flex flex-col gap-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
              {/* First Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="firstName"
                  required
                  className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent"
                  placeholder="First Name"
                />
                <label 
                  htmlFor="firstName" 
                  className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="lastName"
                  required
                  className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent"
                  placeholder="Last Name"
                />
                <label 
                  htmlFor="lastName" 
                  className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
                >
                  Last Name
                </label>
              </div>
            </div>

            {/* Email Address */}
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent"
                placeholder="Email Address"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
              >
                Email Address
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
              {/* Preferred Dates */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="dates"
                  required
                  className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent"
                  placeholder="Preferred Dates (e.g. Nov 10-15)"
                />
                <label 
                  htmlFor="dates" 
                  className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
                >
                  Preferred Dates
                </label>
              </div>

              {/* Number of Guests */}
              <div className="relative group">
                <input 
                  type="number" 
                  id="guests"
                  min="1"
                  required
                  className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent"
                  placeholder="Number of Guests"
                />
                <label 
                  htmlFor="guests" 
                  className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
                >
                  Number of Guests
                </label>
              </div>
            </div>

            {/* Additional Details */}
            <div className="relative group mt-2">
              <textarea 
                id="message"
                rows={3}
                className="w-full bg-transparent border-b border-[#2C2A25]/30 pb-3 font-sans text-sm text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors peer placeholder-transparent resize-none"
                placeholder="Additional details or special requests..."
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-0 font-sans text-xs uppercase tracking-[0.15em] text-[#2C2A25]/50 transition-all peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-[#591C27] peer-valid:-top-6 peer-valid:text-[9px] cursor-text"
              >
                Additional Details (Optional)
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-6 w-max px-10 py-5 bg-[#591C27] text-[#F4F1EB] font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#2C2A25] transition-colors duration-500 ease-out flex items-center gap-4 group shadow-lg shadow-[#591C27]/10"
            >
              Request Reservation
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}