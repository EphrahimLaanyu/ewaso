'use client';

import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import { supabase } from '@/lib/supabase'; // Ensure this path matches your setup

interface FormProps {
  onSuccess: () => void;
}

export default function InquireForm({ onSuccess }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const phoneValue = formData.get('phone') as string;

    try {
      // 1. SAVE TO SUPABASE DATABASE
      const { error: dbError } = await supabase
        .from('inquiries')
        .insert([
          {
            request_type: 'INQUIRY',
            name: formData.get('name'),
            email: formData.get('email'),
            phone: phoneValue || 'Not provided',
            message: formData.get('message'),
            status: 'New'
          }
        ]);

      if (dbError) {
        console.error("Database Error:", dbError);
        alert("Failed to securely save your inquiry. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // 2. TRIGGER EMAIL NOTIFICATION VIA WEB3FORMS
      formData.append('request_type', 'INQUIRY');
      
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (accessKey) formData.append('access_key', accessKey);
      
      formData.append('subject', 'New Safari Inquiry - Goshen Website');
      formData.append('from_name', 'Goshen Reservations System');

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        onSuccess();
      } else {
        alert("Inquiry saved securely, but email notification failed. We will contact you shortly.");
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
          General Inquiry
        </span>
        <h2 className="font-serif text-3xl text-[#2C2A25]">How can we help?</h2>
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
          <PhoneInput required={false} />
        </div>
      </div>

      <div className="flex flex-col gap-3 group mt-4">
        <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors">
          Your Message <span className="text-[#591C27]">*</span>
        </label>
        <textarea required id="message" name="message" rows={4} className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-lg focus:outline-none focus:border-[#591C27] transition-colors resize-none placeholder:text-[#2C2A25]/30" placeholder="How can we assist you?"></textarea>
      </div>

      <div className="pt-6">
        <button type="submit" disabled={isSubmitting} className="w-full group inline-flex items-center justify-center gap-4 bg-[#2C2A25] text-[#F4F1EB] px-8 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#591C27] transition-all duration-300 disabled:opacity-70">
          {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}