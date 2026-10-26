'use client';

import React, { useState } from 'react';
import { COUNTRY_CODES } from './data';

interface PhoneInputProps {
  required?: boolean;
}

export default function PhoneInput({ required = false }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [rawPhone, setRawPhone] = useState('');

  const filteredCountries = COUNTRY_CODES.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase()) || 
    country.code.includes(search)
  );

  return (
    <div className="flex flex-col gap-3 group relative z-[70]">
      <label className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors">
        Phone Number {required ? <span className="text-[#591C27]">*</span> : <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>}
      </label>
      
      <div className="flex items-end border-b border-[#2C2A25]/20 pb-2 focus-within:border-[#591C27] transition-colors">
        
        {/* Hidden input to pass the combined value to Web3Forms/Supabase */}
        <input 
          type="hidden" 
          name="phone" 
          value={rawPhone ? `${selectedCountry.code} ${rawPhone}` : ''} 
        />

        {/* Dropdown Trigger */}
        <button 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 pr-4 mr-4 border-r border-[#2C2A25]/20 hover:text-[#591C27] transition-colors font-sans text-sm"
        >
          <span>{selectedCountry.flag}</span>
          <span className="font-serif text-lg">{selectedCountry.code}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Actual Input */}
        <input 
          required={required}
          type="tel" 
          value={rawPhone}
          onChange={(e) => setRawPhone(e.target.value)}
          className="bg-transparent font-serif text-lg focus:outline-none w-full placeholder:text-[#2C2A25]/30" 
          placeholder="e.g. 712 345 678" 
        />
      </div>

      {/* Invisible Backstop */}
      {isOpen && (
        <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Searchable Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[280px] bg-[#F4F1EB] border border-[#2C2A25]/20 shadow-2xl flex flex-col z-[80] overflow-hidden">
          <div className="p-3 border-b border-[#2C2A25]/10 bg-[#2C2A25]/5">
            <input 
              type="text" 
              placeholder="Search country or code..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-[#2C2A25]/20 pb-1 font-sans text-xs focus:outline-none focus:border-[#591C27]"
              autoFocus
            />
          </div>
          <ul className="max-h-48 overflow-y-auto custom-scrollbar relative z-[80]">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li 
                  key={index} 
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-[#2C2A25] hover:text-[#F4F1EB] cursor-pointer transition-colors font-sans text-xs"
                >
                  <span>{country.flag}</span>
                  <span className="flex-1 truncate">{country.name}</span>
                  <span className="font-serif opacity-70">{country.code}</span>
                </li>
              ))
            ) : (
              <li className="p-4 text-center font-sans text-xs text-[#2C2A25]/50 italic">
                No countries found.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}