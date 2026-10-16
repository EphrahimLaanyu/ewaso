import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Goshen · Laikipia, Kenya',
  description: 'Privacy Policy for Goshen safari sanctuary in Laikipia, Kenya.',
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
              When inquiring about availability or requesting reservations, we collect personal details including names, contact email addresses, phone numbers, preferred travel dates, group composition, and any specialized dietary or safari requirements you voluntarily provide.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">2. Booking Partner Relationship</h2>
            <p>
              Booking is exclusive with Ewaso Enclave Conservacy. Reservation information submitted through our site is securely processed in coordination with Goshen Camp to facilitate bookings, private transfers, conservancy registrations, and guest services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">3. Use of Information</h2>
            <p>
              Guest information is strictly utilized to process reservations, coordinate conservancy logistics, arrange custom safari activities, and provide responsive customer service. We do not sell or monetize personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#591C27] mb-3">4. Inquiries & Contact</h2>
            <p>
              For questions concerning this Privacy Policy or data requests, please contact our guest concierge at{' '}
              <a href="mailto:info@goshendomain.com" className="text-[#591C27] underline underline-offset-4 hover:opacity-80">
                info@goshendomain.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
