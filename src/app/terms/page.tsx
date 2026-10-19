import type { Metadata } from 'next'; 
import Navbar from '@/components/sections/Navbar'; 
import Footer from '@/components/sections/Footer'; 
import React from 'react'; 

export const metadata: Metadata = { 
  title: 'Terms of Reserve | Goshen · Laikipia, Kenya', 
  description: 'Terms of Reserve and reservation policies for Goshen in Laikipia, Kenya.', 
}; 

export default function TermsPage() { 
  return ( 
    <main className="min-h-screen bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col justify-between"> 
      <Navbar /> 
      <section className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-40 pb-24 flex-grow"> 
        <div className="flex items-center gap-4 mb-6"> 
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span> 
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]"> 
            Reservations & Policies 
          </span> 
        </div> 
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8"> 
          Terms of Reserve 
        </h1> 
        <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/85"> 
          <p> 
            Please review the following reservation conditions and policies governing stays at Goshen in Laikipia, Kenya. 
          </p> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">1. Exclusive Booking Partner</h2> 
            <p> Reservations are made directly with Goshen Camp. </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">2. Rates</h2> 
            <p> Rates are coming soon. </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">3. Activities & Conservation Vehicle Regulations</h2> 
            <p> Game drives and specialized safari activities are priced separately. In order to preserve the pristine nature of the habitat and minimize disturbances to wildlife, no outside vehicles are allowed in the conservancy. </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">4. Guided Wilderness Exploration</h2> 
            <p> To maintain our strict conservation ethos and protect the safety of both wildlife and guests, walking activities are conducted with respect for natural habitats. Guests explore on foot keeping a respectful distance, guided by an armed ranger. </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">5. Inquiries & Cancellations</h2> 
            <p> For cancellation schedules, seasonal terms, or inquiries, please contact our team at{' '} 
              <a href="mailto:info@goshencamp.com" className="text-[#591C27] underline underline-offset-4 hover:opacity-80"> 
                info@goshencamp.com 
              </a>. 
            </p> 
          </div> 
        </div> 
      </section> 
      <Footer /> 
    </main> 
  ); 
}