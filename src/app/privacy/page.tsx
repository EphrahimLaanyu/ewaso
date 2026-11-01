import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Goshen Safari Camp · Laikipia, Kenya',
  description:
    'Privacy Policy for Goshen luxury safari camp in Ewaso Enclave Conservancy, Laikipia, Kenya.',
  alternates: {
    canonical: 'https://goshencamp.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col justify-between">
      <Navbar />

      <section className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-40 pb-24 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-[#591C27]/40"></span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#591C27]">
            Legal & Governance
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 font-sans text-sm md:text-base leading-relaxed tracking-wide text-[#2C2A25]/85">
          <p>
            At Goshen, we are committed to safeguarding the personal privacy of our guests, partners, and visitors. This Privacy Policy details how personal information is collected, utilized, and protected in connection with reservations and website inquiries.
          </p>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">1. Information Collection</h2>
            <p>
              We collect information provided directly through booking requests, reservation inquiry forms, and communication channels. This includes guest names, contact details, travel party size, and arrival itineraries.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">2. Booking Partner Relationship</h2>
            <p>
              Goshen operates in partnership with authorized booking partners and Ewaso Enclave Conservancy management. Data shared during booking is utilized strictly for reservation coordination, park entry clearance, and personalized service delivery.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">3. Use of Information</h2>
            <p>
              Guest information is never sold or distributed to third-party commercial entities. Information is retained solely for communication regarding your stay, compliance with Kenyan hospitality regulations, and safety oversight.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">4. Inquiries & Contact</h2>
            <p>
              For privacy-related inquiries or to request correction of your personal data, please contact the Goshen management team at info@goshencamp.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
