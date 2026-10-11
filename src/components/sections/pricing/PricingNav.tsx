import React from "react";

const links = [
  { label: "01 / WEBSITES ↓", href: "#websites" },
  { label: "02 / MAINTENANCE ↓", href: "#maintenance" },
  { label: "03 / SOFTWARE & GAMES ↓", href: "#software" },
  { label: "04 / ENGINEERING ↓", href: "#engineering" },
  { label: "05 / PRICING FAQ ↓", href: "#pricing-faq" },
];

export default function PricingNav() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[72px] px-[64px] border-t border-b border-[#343A33] flex justify-between items-center overflow-hidden">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[#F2F4EC] text-[11px] font-normal font-mono hover:text-[#CEFF69] transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
