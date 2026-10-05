"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Compass } from "lucide-react";

interface NavbarProps {
  onOpenEnquire?: () => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eatTime, setEatTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Format local East Africa Time (UTC+3)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setEatTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "The House", href: "#house" },
    { label: "Safaris & Fauna", href: "#safaris" },
    { label: "Experiences", href: "#experiences" },
    { label: "Conservation", href: "#conservation" },
    { label: "Private Buyouts", href: "#buyouts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-[#221E1F]/10 shadow-[0_10px_30px_-15px_rgba(34,30,31,0.05)]"
            : "bg-transparent py-7 sm:py-9"
        }`}
        data-component="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex flex-col items-start transition-opacity duration-300 hover:opacity-80"
              aria-label="Ewaso Camp Home"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] uppercase font-light text-[#221E1F]">
                Ewaso Camp
              </span>
              <span className="text-[9px] tracking-[0.32em] uppercase text-[#706C66] group-hover:text-[#591C27] transition-colors duration-300 font-sans pl-0.5">
                Nanyuki · Kenya
              </span>
            </Link>
          </div>

          {/* Desktop Center Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[11px] uppercase tracking-[0.24em] font-medium text-[#4A4541] hover:text-[#591C27] transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#591C27] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right: Metadata & Burgundy Enquire Button */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="hidden xl:flex flex-col text-right pr-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#706C66] flex items-center gap-1.5 justify-end">
                <Compass className="w-2.5 h-2.5 text-[#591C27]" />
                0° 01&apos; N · 37° 04&apos; E
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#8E887E]">
                {eatTime ? `${eatTime} EAT · 1,950m` : "Laikipia · Kenya"}
              </span>
            </div>

            <button
              onClick={onOpenEnquire}
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-[#591C27] hover:bg-[#6B2737] text-[#FAF8F5] text-[11px] uppercase tracking-[0.22em] font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(89,28,39,0.18)] hover:shadow-[0_8px_24px_rgba(89,28,39,0.28)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenEnquire}
              type="button"
              className="bg-[#591C27] text-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] font-medium px-4 py-2 rounded-full"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#221E1F] hover:text-[#591C27] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F5] transition-all duration-500 flex flex-col justify-between px-8 pt-28 pb-12 sm:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#591C27] font-semibold border-b border-[#221E1F]/10 pb-3">
            Navigation Index
          </p>
          <div className="flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-[#221E1F] hover:text-[#591C27] transition-colors flex items-baseline justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans tracking-widest text-[#8E887E]">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6 border-t border-[#221E1F]/10 pt-6">
          <div className="flex flex-col gap-1 text-[11px] tracking-[0.18em] uppercase text-[#706C66]">
            <span>Nanyuki · Foot of Mount Kenya</span>
            <span>0° 01&apos; N · 37° 04&apos; E</span>
            <span>Direct Reservations: reservations@ewasocamp.com</span>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenEnquire) onOpenEnquire();
            }}
            type="button"
            className="w-full bg-[#591C27] hover:bg-[#6B2737] text-[#FAF8F5] py-3.5 text-xs uppercase tracking-[0.24em] font-medium rounded-full text-center transition-colors"
          >
            Enquire for Private Buyout
          </button>
        </div>
      </div>
    </>
  );
}
