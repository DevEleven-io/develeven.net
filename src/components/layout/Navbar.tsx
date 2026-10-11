"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Our approach", href: "/#approach" },
  { label: "Studio", href: "/#studio" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-[#101211] border-b border-[#343A33]">
      <div className="w-full max-w-[1440px] mx-auto h-[100px] px-[64px] flex justify-between items-center overflow-hidden">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[12px] overflow-hidden group"
        >
          <div className="flex items-start gap-[5px] overflow-hidden">
            <div className="w-[6px] h-[25px] bg-[#CEFF69]" />
            <div className="w-[6px] h-[25px] bg-[#CEFF69]" />
          </div>
          <span className="text-[#F2F4EC] text-[26px] font-normal font-sans tracking-tight">
            DevEleven
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-[32px] overflow-hidden">
          {navLinks.map((link) => {
            const isPricing = link.href === "/pricing";
            const isActive = isPricing && pathname === "/pricing";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-normal font-sans transition-colors ${
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

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="h-[54px] px-[22px] bg-[#CEFF69] rounded-[4px] outline outline-1 outline-[#CEFF69] -outline-offset-1 flex items-center gap-[28px] overflow-hidden hover:bg-[#b8f050] transition-colors"
        >
          <span className="text-[#11150E] text-[14px] font-semibold font-sans">
            Let’s talk
          </span>
          <ArrowIcon color="dark" />
        </Link>
      </div>
    </header>
  );
}
