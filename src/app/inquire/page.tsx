'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import InquireForm from '@/components/inquire/InquireForm';
import BookForm from '@/components/inquire/BookForm';

type ModalType = 'inquire' | 'book' | null;

export default function InquireClient() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal opens
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  const closeModal = () => {
    setActiveModal(null);
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#2C2A25] selection:bg-[#591C27] selection:text-[#F4F1EB] flex flex-col justify-between">
      <Navbar />

      {/* ============================== LANDING VIEW ============================== */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-40 pb-32 flex-grow flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight mb-16 text-[#2C2A25] text-center">
          How can we help?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <button 
            onClick={() => setActiveModal('inquire')}
            className="group flex flex-col items-center justify-center bg-transparent border-[3px] border-[#2C2A25] p-16 md:p-24 hover:bg-[#2C2A25] transition-colors duration-300"
          >
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-4 text-[#2C2A25] group-hover:text-[#F4F1EB] transition-colors">
              Ask A Question
            </span>
            <span className="font-serif text-4xl md:text-5xl text-[#2C2A25] group-hover:text-[#F4F1EB] transition-colors">
              Inquire
            </span>
            <div className="mt-10 overflow-hidden">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2C2A25] group-hover:text-[#F4F1EB] transform transition-transform duration-500 ease-out group-hover:translate-x-4">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
          
          <button 
            onClick={() => setActiveModal('book')}
            className="group flex flex-col items-center justify-center bg-[#2C2A25] border-[3px] border-[#2C2A25] p-16 md:p-24 hover:bg-[#591C27] hover:border-[#591C27] transition-colors duration-300"
          >
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-4 text-[#F4F1EB]/70 group-hover:text-[#F4F1EB] transition-colors">
              Secure Your Dates
            </span>
            <span className="font-serif text-4xl md:text-5xl text-[#F4F1EB]">
              Book Safari
            </span>
            <div className="mt-10 overflow-hidden">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#F4F1EB] transform transition-transform duration-500 ease-out group-hover:translate-x-4">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* ============================== MODAL OVERLAY ============================== */}
      {activeModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 bg-[#1A1817]/90 backdrop-blur-sm animate-fade-in">
          
          <div className="bg-[#F4F1EB] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl z-50">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-[#2C2A25]/50 hover:text-[#591C27] transition-colors z-50"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8 md:p-16">
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-[#591C27]/10 flex items-center justify-center text-[#591C27] mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h2 className="font-serif text-3xl text-[#2C2A25] mb-4">Request Received</h2>
                  <p className="font-sans text-sm text-[#2C2A25]/70 max-w-md leading-relaxed mb-8">
                    Your details have been successfully transmitted. A member of the Goshen reservations team will review your request and correspond with you shortly.
                  </p>
                  <button onClick={closeModal} className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#2C2A25] border border-[#2C2A25]/20 px-8 py-4 hover:bg-[#2C2A25]/5 transition-colors">
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  {activeModal === 'inquire' && <InquireForm onSuccess={() => setIsSubmitted(true)} />}
                  {activeModal === 'book' && <BookForm onSuccess={() => setIsSubmitted(true)} />}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}