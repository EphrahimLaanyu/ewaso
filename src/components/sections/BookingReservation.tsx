'use client';

import React, { useState } from 'react';

export default function BookingReservation() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '3b970161-e94d-492c-a401-0cae73365c57';
    formData.append('access_key', accessKey);
    formData.append('subject', 'New Reservation Request - Goshen Laikipia');
    formData.append('from_name', 'Goshen Reservation Desk');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="reservations"
      className="relative w-full bg-[#F4F1EB] py-24 md:py-32 px-6 md:px-12 lg:px-20 flex justify-center selection:bg-[#591C27] selection:text-[#F4F1EB] border-t border-[#2C2A25]/10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* 
          LEFT COLUMN: THE DOSSIER (Booking Details)
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
            Now welcoming guests for the 2026/2027 season.
            <br />
            <span className="opacity-70 italic font-normal text-[#2C2A25]">
              Availability is intentionally limited to preserve privacy and wildlife tranquility.
            </span>
          </p>

          {/* The Ledger Card */}
          <div className="bg-[#EAE7E0] border border-[#2C2A25]/10 p-8 md:p-10 relative">
            {/* Decorative corner pins */}
            <div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-[#2C2A25]/30"></div>
            <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-[#2C2A25]/30"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-[#2C2A25]/30"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-[#2C2A25]/30"></div>

            <div className="flex flex-col gap-6">
              {/* Rates Coming Soon Card */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#2C2A25]/10">
                <div className="text-[#591C27] shrink-0 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2A25]">
                      Seasonal Rates
                    </span>
                    <span className="font-serif text-lg text-[#591C27] italic">
                      Rates Coming Soon
                    </span>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#2C2A25]/75 mt-1">
                    Rates for the coming season will be shared on request. Please submit an inquiry below to receive our full rate sheet and bespoke safari options.
                  </p>
                </div>
              </div>

              {/* Private Sanctuary */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#2C2A25]/10">
                <div className="text-[#591C27] shrink-0 pt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase font-semibold text-[#2C2A25]">
                    Exclusive Sanctuary
                  </span>
                  <span className="font-sans text-xs text-[#2C2A25]/70 mt-1">
                    Intimate footprint tailored for private parties, photographic expeditions, and exclusive camp buyouts.
                  </span>
                </div>
              </div>

              {/* Vehicles & Conservancy limits */}
              <div className="flex items-start gap-4 pt-1">
                <div className="text-[#591C27] shrink-0 pt-0.5 opacity-80">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <p className="font-sans text-xs leading-relaxed text-[#2C2A25]/80">
                  <strong className="text-[#2C2A25] font-semibold">Conservancy Access:</strong> No outside vehicles are permitted within the conservancy limits to safeguard wildlife silence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 px-2">
            <p className="font-sans text-[11px] leading-relaxed uppercase tracking-wider text-[#2C2A25]/75">
              Direct Contact:{' '}
              <a
                href="mailto:info@goshencamp.com"
                className="text-[#591C27] font-semibold underline underline-offset-2 hover:text-[#2C2A25] transition-colors"
              >
                info@goshencamp.com
              </a>
            </p>
          </div>
        </div>

        {/* 
          RIGHT COLUMN: THE INQUIRY FORM
        */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-12 lg:border-l border-[#2C2A25]/10">
          {status === 'success' ? (
            <div className="bg-[#EAE7E0] border border-[#591C27]/30 p-10 md:p-14 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#591C27]/10 text-[#591C27] flex items-center justify-center mx-auto mb-5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#2C2A25] mb-3">
                Thank You for Your Inquiry
              </h3>
              <p className="font-sans text-sm md:text-base text-[#2C2A25]/80 max-w-md mx-auto leading-relaxed mb-8">
                Your reservation request has been received. Our team in Laikipia will review your preferred dates and reply with rate details and estate availability within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-[#591C27] text-[#F4F1EB] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#2C2A25] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
              {/* Spam Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                {/* First Name */}
                <div className="relative group">
                  <input
                    type="text"
                    name="firstName"
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
                    name="lastName"
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
                  name="email"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                {/* Preferred Dates */}
                <div className="relative group">
                  <input
                    type="text"
                    name="dates"
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
                    name="guests"
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
                  name="message"
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

              {/* Submit Button & Status */}
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-4 w-max px-10 py-5 bg-[#591C27] text-[#F4F1EB] font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#2C2A25] transition-colors duration-500 ease-out flex items-center gap-4 group shadow-lg shadow-[#591C27]/10 disabled:opacity-60 cursor-pointer"
                >
                  <span>{status === 'submitting' ? 'Submitting Request...' : 'Request Reservation'}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>

                {status === 'error' && (
                  <p className="text-red-700 text-xs font-sans mt-2">
                    An error occurred while sending your request. Please email us directly at info@goshencamp.com.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}