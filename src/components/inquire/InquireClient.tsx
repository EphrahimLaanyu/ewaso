'use client';

import React, { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function InquireClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Guest Counters State
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // 1. Inject the custom guest counts into the form data before sending
    formData.append('guests', `${adults} Adults, ${children} Children`);
    
    // 2. Append Web3Forms required access key from your .env file
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      formData.append('access_key', accessKey);
    } else {
      console.error("Web3Forms access key is missing from environment variables.");
    }

    // 3. Optional Web3Forms settings for a cleaner email experience
    formData.append('subject', 'New Safari Inquiry - Goshen Website');
    formData.append('from_name', 'Goshen Reservations System');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        alert("There was a problem sending your inquiry. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date formatted for the min attribute (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col justify-between">
      <Navbar />

      <section className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-40 pb-32 flex-grow">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
            Reservations
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-16 text-[#2C2A25]">
          Plan Your Safari
        </h1>

        {/* Conditional Rendering: Form vs Success State */}
        {isSubmitted ? (
          <div className="bg-[#2C2A25] text-[#F4F1EB] p-12 md:p-24 flex flex-col items-center text-center shadow-2xl animate-fade-in">
            <div className="w-px h-16 bg-[#F4F1EB]/20 mb-10"></div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6 text-[#F4F1EB]">
              Inquiry Received
            </h2>
            <p className="font-sans text-sm md:text-base opacity-75 max-w-lg leading-relaxed mb-12">
              Your request has been successfully submitted. A member of the Goshen reservations team will review your details and correspond with you shortly to begin crafting your itinerary.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="font-sans text-[9px] tracking-[0.25em] uppercase font-bold text-[#F4F1EB]/60 hover:text-[#F4F1EB] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-14 animate-fade-in">
            
            {/* ============================== CONTACT DETAILS ============================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="md:col-span-2 border-b border-[#2C2A25]/10 pb-4 mb-2">
                <h3 className="font-serif text-xl md:text-2xl text-[#2C2A25]/80">Contact Details</h3>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-3 group">
                <label htmlFor="name" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
                  Full Name <span className="text-[#591C27]">*</span>
                </label>
                <input 
                  required 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl focus:outline-none focus:border-[#591C27] transition-colors placeholder:text-[#2C2A25]/30 placeholder:italic placeholder:font-light" 
                  placeholder="Your full name" 
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3 group">
                <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#591C27] transition-colors">
                  Email Address <span className="text-[#591C27]">*</span>
                </label>
                <input 
                  required 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl focus:outline-none focus:border-[#591C27] transition-colors placeholder:text-[#2C2A25]/30 placeholder:italic placeholder:font-light" 
                  placeholder="Your email address" 
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-3 group md:col-span-2">
                <label htmlFor="phone" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors flex items-center gap-2">
                  Phone Number <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl focus:outline-none focus:border-[#591C27] transition-colors placeholder:text-[#2C2A25]/30 placeholder:italic placeholder:font-light" 
                  placeholder="Include country code" 
                />
              </div>
            </div>

            {/* ============================== ITINERARY & GUESTS ============================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="md:col-span-2 border-b border-[#2C2A25]/10 pb-4 mb-2 mt-4">
                <h3 className="font-serif text-xl md:text-2xl text-[#2C2A25]/80">Safari Details</h3>
              </div>

              {/* DATES (Arrival & Departure) */}
              <div className="flex flex-col gap-3 group">
                <label htmlFor="arrivalDate" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors flex items-center gap-2">
                  Arrival Date <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>
                </label>
                <input 
                  type="date" 
                  id="arrivalDate" 
                  name="arrivalDate" 
                  min={today}
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-40 hover:[&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer" 
                />
              </div>

              <div className="flex flex-col gap-3 group">
                <label htmlFor="departureDate" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors flex items-center gap-2">
                  Departure Date <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>
                </label>
                <input 
                  type="date" 
                  id="departureDate" 
                  name="departureDate"
                  min={today} 
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl text-[#2C2A25] focus:outline-none focus:border-[#591C27] transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-40 hover:[&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer" 
                />
              </div>

              {/* GUEST STEPPERS */}
              <div className="md:col-span-2 flex flex-col gap-8 mt-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60">
                  Party Size
                </label>
                
                {/* Adults Stepper */}
                <div className="flex items-center justify-between border-b border-[#2C2A25]/20 pb-4">
                  <span className="font-serif text-xl md:text-2xl text-[#2C2A25]">Adults</span>
                  <div className="flex items-center gap-6">
                    <button 
                      type="button" 
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-10 h-10 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-xl text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors focus:outline-none"
                    >
                      -
                    </button>
                    <span className="font-sans text-lg font-semibold w-6 text-center">{adults}</span>
                    <button 
                      type="button" 
                      onClick={() => setAdults(adults + 1)}
                      className="w-10 h-10 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-xl text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Stepper */}
                <div className="flex items-center justify-between border-b border-[#2C2A25]/20 pb-4">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl md:text-2xl text-[#2C2A25]">Children</span>
                    <span className="font-sans text-[10px] tracking-wider uppercase opacity-50 mt-1">Under 16 Years</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <button 
                      type="button" 
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-10 h-10 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-xl text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors focus:outline-none"
                    >
                      -
                    </button>
                    <span className="font-sans text-lg font-semibold w-6 text-center">{children}</span>
                    <button 
                      type="button" 
                      onClick={() => setChildren(children + 1)}
                      className="w-10 h-10 rounded-full border border-[#2C2A25]/20 flex items-center justify-center text-xl text-[#2C2A25] hover:bg-[#2C2A25] hover:text-[#F4F1EB] transition-colors focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Message (Optional) */}
              <div className="flex flex-col gap-3 group md:col-span-2 mt-4">
                <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/60 group-focus-within:text-[#2C2A25] transition-colors flex items-center gap-2">
                  Additional Details <span className="text-[#2C2A25]/40 normal-case tracking-normal italic text-xs font-serif font-normal">(Optional)</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="bg-transparent border-b border-[#2C2A25]/20 pb-3 font-serif text-xl focus:outline-none focus:border-[#591C27] transition-colors resize-none placeholder:text-[#2C2A25]/30 placeholder:italic placeholder:font-light leading-relaxed" 
                  placeholder="Share any special occasions, dietary requirements, or specific interests..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end md:justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-between gap-6 bg-[#2C2A25] text-[#F4F1EB] px-12 py-5 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#591C27] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                {!isSubmitting && <span className="block w-4 h-[1px] bg-current group-hover:w-8 transition-all duration-500 ease-out"></span>}
              </button>
            </div>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}