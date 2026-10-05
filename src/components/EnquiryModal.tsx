"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    season: "Dry Season (June – October)",
    guests: "2 - 4 Guests",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      // setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#161414]/60 backdrop-blur-sm transition-all duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#221E1F]/15 p-6 sm:p-10 shadow-2xl rounded-sm max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 text-[#706C66] hover:text-[#591C27] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#591C27] mx-auto stroke-[1.2]" />
            <h3 className="font-serif text-3xl sm:text-4xl text-[#221E1F] font-light">
              Your Enquiry Has Been Received
            </h3>
            <p className="text-sm text-[#706C66] max-w-md mx-auto leading-relaxed">
              Our private concierge in Nanyuki will review your dates and reach
              out within 24 hours with tailored safari itineraries and estate
              availability.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              type="button"
              className="mt-6 inline-flex items-center gap-2 bg-[#591C27] hover:bg-[#6B2737] text-[#FAF8F5] px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-8 border-b border-[#221E1F]/10 pb-5">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#591C27]">
                Exclusive Residence Buyout
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#221E1F] font-light mt-1">
                Enquire for Ewaso Camp
              </h2>
              <p className="text-xs text-[#706C66] mt-2 tracking-wide font-light">
                Tailored solely for private groups, multi-generational families, and intimate expeditions in Nanyuki, Kenya.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Lord / Lady / Dr / Mr / Ms"
                    className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="client@luxurydomain.com"
                    className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                    Direct Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors"
                  >
                    <option>1 - 2 Guests (Master Pavilion)</option>
                    <option>2 - 4 Guests (Half Buyout)</option>
                    <option>5 - 8 Guests (Full Buyout - 4 Suites)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                  Preferred Travel Window
                </label>
                <select
                  value={formData.season}
                  onChange={(e) =>
                    setFormData({ ...formData, season: e.target.value })
                  }
                  className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors"
                >
                  <option>Dry Season (June – October 2026)</option>
                  <option>Short Green Season (November – December 2026)</option>
                  <option>Calving Season (January – March 2027)</option>
                  <option>2027 Season Early Reservation</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-[0.18em] text-[#706C66] mb-1.5 text-[10px]">
                  Bespoke Requests &amp; Expedition Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Private helicopter transfers from Nairobi, dietary preferences, wildlife photography guides, or anniversary celebrations..."
                  className="w-full bg-[#FAF8F5] border border-[#221E1F]/20 px-3.5 py-2.5 text-xs text-[#221E1F] focus:outline-none focus:border-[#591C27] transition-colors resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#591C27] hover:bg-[#6B2737] text-[#FAF8F5] py-3.5 rounded-full text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-[0_4px_16px_rgba(89,28,39,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transmit Private Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
