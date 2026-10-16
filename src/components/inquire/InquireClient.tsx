'use client';

import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import React, { useState } from 'react';

export default function InquireClient() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(event.currentTarget);
    
    // Securely pull the access key from your .env file
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen w-full bg-[#F4F1EB] text-[#2C2A25] flex flex-col selection:bg-[#591C27] selection:text-[#F4F1EB]">
      <Navbar />
      
      {/* flex-grow ensures the form stays centered between the nav and footer */}
      <div className="flex-grow flex items-center justify-center py-32 px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-10 h-[1px] bg-[#591C27]"></span>
              <h1 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
                Plan Your Safari
              </h1>
              <span className="w-10 h-[1px] bg-[#591C27]"></span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">Send an Inquiry</h2>
            <p className="font-sans text-sm md:text-base text-[#2C2A25]/70 max-w-xl mx-auto leading-relaxed">
              Leave us your email and a brief message about your ideal dates, party size, or experiences, and our team will get back to you shortly to start planning your stay.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-[#EAE7E0] border-l-4 border-[#591C27] p-10 md:p-16 text-center animate-fade-in shadow-sm">
              <h3 className="font-serif text-3xl mb-4 text-[#2C2A25]">Message Sent</h3>
              <p className="font-sans text-sm md:text-base text-[#2C2A25]/80 leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. Your inquiry has been received, and we will be in touch with you very soon.
              </p>
              <a 
                href="/" 
                className="mt-10 inline-block text-[10px] tracking-[0.2em] uppercase font-bold text-[#591C27] hover:text-[#2C2A25] transition-colors duration-300 border-b border-transparent hover:border-[#2C2A25] pb-1"
              >
                Return to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
              
              {/* Honeypot Spam Protection (Hidden from users, catches bots) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Email Field */}
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/50">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b border-[#2C2A25]/20 py-4 text-[#2C2A25] placeholder:text-[#2C2A25]/30 focus:outline-none focus:border-[#591C27] transition-colors font-sans text-lg rounded-none"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25]/50">
                  Your Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={5}
                  placeholder="Tell us about your plans, ideal dates, or party size..."
                  className="w-full bg-transparent border-b border-[#2C2A25]/20 py-4 text-[#2C2A25] placeholder:text-[#2C2A25]/30 focus:outline-none focus:border-[#591C27] transition-colors font-sans text-lg resize-none rounded-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="group inline-flex items-center justify-center gap-6 bg-[#591C27] text-[#F4F1EB] px-10 py-5 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#2C2A25] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto min-w-[250px]"
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Inquiry'}</span>
                </button>

                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center mt-4 font-sans font-medium">
                    Something went wrong connecting to the server. Please try again.
                  </p>
                )}
              </div>

            </form>
          )}

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
