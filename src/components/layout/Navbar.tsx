"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Our approach", href: "/#approach" },
  { label: "Studio", href: "/#studio" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#101211] border-b border-[#343A33]">
      <div className="w-full max-w-screen-2xl mx-auto h-[72px] sm:h-[84px] lg:h-[100px] px-6 sm:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 overflow-hidden group"
        >
          <div className="flex items-start gap-1 sm:gap-1.5 overflow-hidden">
            <div className="w-[5px] sm:w-[6px] h-[22px] sm:h-[25px] bg-[#CEFF69]" />
            <div className="w-[5px] sm:w-[6px] h-[22px] sm:h-[25px] bg-[#CEFF69]" />
          </div>
          <span className="text-[#F2F4EC] text-xl sm:text-2xl font-bold font-sans tracking-tight">
            DevEleven
          </span>
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-8 overflow-hidden">
          {navLinks.map((link) => {
            const isPricing = link.href === "/pricing";
            const isActive = isPricing && pathname === "/pricing";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm sm:text-base font-semibold font-sans transition-colors ${
                  isActive
                    ? "text-[#CEFF69]"
                    : "text-[#F2F4EC] hover:text-[#CEFF69]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/#contact"
          className="hidden lg:flex h-[54px] px-[22px] bg-[#CEFF69] rounded-[4px] outline outline-1 outline-[#CEFF69] -outline-offset-1 items-center gap-[28px] overflow-hidden hover:bg-[#b8f050] transition-colors group cursor-pointer"
        >
          <span className="text-[#11150E] text-sm font-semibold font-sans">
            Let’s talk
          </span>
          <ArrowIcon color="dark" />
        </Link>

        {/* Mobile Controls (CTA + Hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="h-[40px] px-3.5 bg-[#CEFF69] rounded-[4px] flex items-center gap-2 hover:bg-[#b8f050] transition-colors cursor-pointer"
          >
            <span className="text-[#11150E] text-xs sm:text-sm font-semibold font-sans">
              Talk
            </span>
            <ArrowIcon color="dark" size="md" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-[4px] bg-[#191C19] border border-[#343A33] hover:border-[#CEFF69] flex items-center justify-center text-[#F2F4EC] transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <CloseIcon size={20} color="#CEFF69" />
            ) : (
              <MenuIcon size={20} color="#F2F4EC" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[84px] bottom-0 bg-[#101211]/98 backdrop-blur-md z-40 flex flex-col justify-between overflow-y-auto border-t border-[#343A33] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-6 sm:px-8 py-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#343A33]/50 pb-2.5">
            <span className="text-[#A4ADA0] text-xs sm:text-sm font-semibold font-sans tracking-wider">
              Navigation
            </span>
            <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans">
              /11
            </span>
          </div>

          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const isPricing = link.href === "/pricing";
              const isActive = isPricing && pathname === "/pricing";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3.5 border-b border-[#343A33]/40 flex items-center justify-between transition-colors group ${
                    isActive ? "text-[#CEFF69]" : "text-[#F2F4EC] hover:text-[#CEFF69]"
                  }`}
                >
                  <span className="text-xl font-bold font-sans">
                    {link.label}
                  </span>
                  <ArrowIcon
                    color={isActive ? "lime" : "dim"}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Drawer CTA */}
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full h-[54px] px-5 bg-[#CEFF69] rounded-[4px] flex items-center justify-between text-[#11150E] font-semibold text-sm sm:text-base hover:bg-[#b8f050] transition-colors group cursor-pointer"
            >
              <span>Discuss your project</span>
              <ArrowIcon color="dark" size="md" />
            </Link>
            <span className="text-[#A4ADA0] text-xs sm:text-sm font-medium font-sans text-center pt-1 tracking-wider">
              No sales script. Just a good conversation.
            </span>
          </div>
        </div>

        {/* Drawer Footer Legal Note */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#343A33]/50 flex justify-between items-center text-xs sm:text-sm font-medium font-sans text-[#A4ADA0]">
          <span>© 2026 DevEleven</span>
          <span className="text-[#CEFF69]">Built with intent</span>
        </div>
      </div>
    </header>
  );
}
