"use client";

import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

const expertiseLinks = [
  { label: "Website development", href: "/#services" },
  { label: "Website maintenance", href: "/#services" },
  { label: "Custom software", href: "/#services" },
  { label: "Game development", href: "/#services" },
  { label: "Engineering services", href: "/#services" },
];

const exploreLinks = [
  { label: "Our approach", href: "/#approach" },
  { label: "The studio", href: "/#studio" },
  { label: "Ways to work together", href: "/#engagement" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#101211]">
      <div className="w-full max-w-[1440px] mx-auto pt-[64px] pb-[32px] px-[64px] flex flex-col gap-[48px] overflow-hidden">
        {/* Top Row */}
        <div className="w-full flex justify-between items-start overflow-hidden">
          {/* Brand Column */}
          <div className="w-[390px] flex flex-col gap-[22px] overflow-hidden">
            <Link href="/" className="flex items-center gap-[12px] overflow-hidden">
              <div className="flex items-start gap-[5px] overflow-hidden">
                <div className="w-[6px] h-[25px] bg-[#CEFF69]" />
                <div className="w-[6px] h-[25px] bg-[#CEFF69]" />
              </div>
              <span className="text-[#F2F4EC] text-[26px] font-normal font-sans">
                DevEleven
              </span>
            </Link>
            <p className="text-[#A4ADA0] text-[16px] font-normal font-sans leading-[25.60px]">
              Independent thinking. Precise engineering. Digital products built for the long run.
            </p>
            <Link
              href="/#contact"
              className="text-[#CEFF69] text-[14px] font-normal font-sans hover:underline flex items-center gap-[6px] group"
            >
              <span>Start a conversation</span>
              <ArrowIcon color="lime" size="md" />
            </Link>
          </div>

          {/* Expertise Column */}
          <div className="flex flex-col gap-[14px] overflow-hidden">
            <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
              EXPERTISE
            </span>
            {expertiseLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#F2F4EC] text-[14px] font-normal font-sans hover:text-[#CEFF69] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Explore Column */}
          <div className="flex flex-col gap-[14px] overflow-hidden">
            <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
              EXPLORE
            </span>
            {exploreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#F2F4EC] text-[14px] font-normal font-sans hover:text-[#CEFF69] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* /11 Mark */}
          <div className="flex flex-col items-end gap-[14px] overflow-hidden">
            <span className="text-[#CEFF69] text-[90px] font-medium font-sans leading-[81px]">
              /11
            </span>
            <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
              BUILT WITH INTENT.
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#343A33]" />

        {/* Bottom Legal Bar */}
        <div className="w-full flex justify-between items-center overflow-hidden">
          <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
            © 2026 DEVELEVEN. ALL RIGHTS RESERVED.
          </span>

          <div className="flex items-center gap-[28px] overflow-hidden">
            <Link
              href="/privacy"
              className="text-[#A4ADA0] text-[12px] font-normal font-sans hover:text-[#F2F4EC] transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-[#A4ADA0] text-[12px] font-normal font-sans hover:text-[#F2F4EC] transition-colors"
            >
              Terms of use
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="text-[#F2F4EC] text-[10px] font-normal font-mono hover:text-[#CEFF69] transition-colors cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
