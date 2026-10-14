'use client';

import React from 'react';

export default function CampAtAGlance() {
  const stats = [
    {
      label: 'Suites',
      value: 'Canvas suites with king or twin beds',
    },
    {
      label: 'From',
      value: '$440 per person, per night, full board',
    },
    {
      label: 'Stay',
      value: '3-night minimum',
    },
    {
      label: 'Conservancy fee',
      value: '+$70 per night',
    },
    {
      label: 'Getting here',
      value: 'Transfers available from Nanyuki or local airstrip',
    },
  ];

  return (
    <section className="relative w-full bg-[#EAE7E0] text-[#2C2A25] border-y border-[#2C2A25]/15 py-12 px-6 md:px-12 lg:px-20 selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Horizontal Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 lg:divide-x divide-[#2C2A25]/15 items-start">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col ${index > 0 ? 'lg:pl-6' : ''}`}
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#591C27] mb-2 flex items-center gap-2">
                <span className="w-2 h-[1px] bg-[#591C27]/40 lg:hidden"></span>
                {stat.label}
              </span>
              <p className="font-serif text-lg md:text-xl leading-snug text-[#2C2A25]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Small Print Under Strip */}
        <div className="mt-10 pt-6 border-t border-[#2C2A25]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-sans text-xs md:text-[13px] leading-relaxed text-[#2C2A25]/75 italic">
            Activities are priced separately. No outside vehicles are allowed in the conservancy. Booking is through Rhino Watch Safaris Ltd (Apasio Collection).
          </p>
        </div>

      </div>
    </section>
  );
}
