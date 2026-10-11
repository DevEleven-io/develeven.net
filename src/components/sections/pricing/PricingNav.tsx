import React from "react";

const links = [
  { label: "01 / Websites ↓", href: "#websites" },
  { label: "02 / Maintenance ↓", href: "#maintenance" },
  { label: "03 / Software & games ↓", href: "#software" },
  { label: "04 / Engineering ↓", href: "#engineering" },
  { label: "05 / Pricing FAQ ↓", href: "#pricing-faq" },
];

export default function PricingNav() {
  return (
    <nav className="w-full border-t border-b border-[#2A3029] bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto h-[72px] px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#F2F4EC] text-sm sm:text-base font-bold font-sans tracking-wide hover:text-[#CEFF69] transition-colors whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
