import type { Metadata } from 'next'; 
import Navbar from '@/components/sections/Navbar'; 
import Footer from '@/components/sections/Footer'; 
import React from 'react'; 

export const metadata: Metadata = { 
  title: 'Terms of Reserve | Goshen Safari Camp · Laikipia, Kenya', 
  description:
    'Terms of Reserve and reservation policies for Goshen safari camp in Ewaso Enclave Conservancy, Laikipia, Kenya.', 
  alternates: {
    canonical: 'https://goshencamp.com/terms',
  },
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
            <p> 
              All reservations for Goshen are managed through authorized conservancy booking channels. Confirmation of reservation requires designated deposit commitments as outlined in your personalized itinerary schedule. 
            </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">2. Rates</h2> 
            <p> 
              Rates are quoted per person, per night on a full-board basis, and exclude statutory conservancy fees. Minimum length-of-stay requirements apply during peak wildlife seasons. 
            </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">3. Activities & Conservation Vehicle Regulations</h2> 
            <p> 
              To safeguard wilderness corridors, private outside vehicles are strictly prohibited within Ewaso Enclave Conservancy. All game drives, foot safaris, and transfers are conducted exclusively in Goshen&apos;s specialized open 4x4 vehicles. 
            </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">4. Guided Wilderness Exploration</h2> 
            <p> 
              Guided bush walks and black leopard tracking excursions are accompanied by certified naturalist guides and armed Kenya Wildlife Service / conservancy rangers to ensure strict adherence to conservation protocols. 
            </p> 
          </div> 
          <div> 
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">5. Inquiries & Cancellations</h2> 
            <p> 
              For cancellations, amendments, or custom group buyouts, please correspond directly with our reservations team at info@goshencamp.com. 
            </p> 
          </div> 
        </div> 
      </section> 
      <Footer /> 
    </main> 
  ); 
}
