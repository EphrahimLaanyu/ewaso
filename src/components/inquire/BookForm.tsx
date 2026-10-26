'use client';

import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import { supabase } from '@/lib/supabase'; // Ensure this path matches your setup

interface FormProps {
  onSuccess: () => void;
}

export default function BookForm({ onSuccess }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const phoneValue = formData.get('phone') as string;

    try {
      // 1. SAVE TO SUPABASE DATABASE
      const { error: dbError } = await supabase
        .from('bookings')
        .insert([
          {
            guest_name: formData.get('name'),
            email: formData.get('email'),
            phone: phoneValue || 'Not provided',
            arrival_date: formData.get('arrivalDate'),
            departure_date: formData.get('departureDate'),
            adults: adults,
            children: children,
            special_requests: formData.get('message'),
            status: 'Pending'
          }
        ]);

      if (dbError) {
        console.error("Database Error:", dbError);
        alert("Failed to secure your dates in our system. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // 2. TRIGGER EMAIL NOTIFICATION VIA WEB3FORMS
      formData.append('request_type', 'BOOKING');
      formData.append('guests', `${adults} Adults, ${children} Children`);
      
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (accessKey) formData.append('access_key', accessKey);
      
      formData.append('subject', 'URGENT: New Booking Request - Goshen Website');
      formData.append('from_name', 'Goshen Reservations System');

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        onSuccess();
      } else {
        alert("Booking saved securely, but email notification failed. We will contact you shortly.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="mb-4 border-b border-[#2C2A25]/10 pb-6">
        <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#591C27] mb-2 block">
          Booking Request
        </span>
        <h2 className="font-serif text-3xl text-[#2C2A25]">Secure Your Dates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <div className="flex flex-col gap-3 group">
          <label htmlFor="name" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
            Full Name <span className="text-[#591C27]">*</span>
          </label>
          <input required type="text" id="name" name="name" className="bg-transparent border-b border-[#2C2A25]/20 pb-2 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors placeholder:text-[#2C2A25]/30" placeholder="Your full name" />
        </div>

        <div className="flex flex-col gap-3 group">
          <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
            Email Address <span className="text-[#591C27]">*</span>
          </label>
          <input required type="email" id="email" name="email" className="bg-transparent border-b border-[#2C2A25]/20 pb-2 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors placeholder:text-[#2C2A25]/30" placeholder="Your email address" />
        </div>

        <div className="md:col-span-2">
          <PhoneInput required={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 border-t border-[#2C2A25]/10 pt-8">
        <div className="flex flex-col gap-3 group">
          <label htmlFor="arrivalDate" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
            Arrival Date <span className="text-[#591C27]">*</span>
          </label>
          <input required type="date" id="arrivalDate" name="arrivalDate" min={today} className="bg-transparent border-b border-[#2C2A25]/20 pb-2 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors cursor-pointer" />
        </div>

        <div className="flex flex-col gap-3 group">
          <label htmlFor="departureDate" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
            Departure Date <span className="text-[#591C27]">*</span>
          </label>
          <input required type="date" id="departureDate" name="departureDate" min={today} className="bg-transparent border-b border-[#2C2A25]/20 pb-2 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors cursor-pointer" />
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row gap-8 mt-2">
          <div className="flex-1 flex items-center justify-between border-b border-[#2C2A25]/20 pb-4">
            <span className="font-serif text-lg text-[#2C2A25]">Adults</span>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors">-</button>
              <span className="font-sans text-sm font-semibold w-4 text-center">{adults}</span>
              <button type="button" onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors">+</button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-between border-b border-[#2C2A25]/20 pb-4">
            <div className="flex flex-col">
              <span className="font-serif text-lg text-[#2C2A25]">Children</span>
              <span className="font-sans text-[9px] tracking-wider uppercase opacity-50 mt-1">Under 16</span>
            </div>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors">-</button>
              <span className="font-sans text-sm font-semibold w-4 text-center">{children}</span>
              <button type="button" onClick={() => setChildren(children + 1)} className="w-8 h-8 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 group mt-4">
        <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors">
          Special Requests <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors resize-none placeholder:text-[#2C2A25]/30" placeholder="Dietary requirements, occasions..."></textarea>
      </div>

      <div className="pt-6">
        <button type="submit" disabled={isSubmitting} className="w-full group inline-flex items-center justify-center gap-4 bg-[#2C2A25] text-[#F4F1EB] px-8 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#591C27] transition-all duration-300 disabled:opacity-70">
          {isSubmitting ? 'Transmitting...' : 'Submit Booking Request'}
        </button>
      </div>
    </form>
  );
}