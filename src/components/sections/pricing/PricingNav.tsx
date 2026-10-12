import React from "react";
import {
  WebDevIcon,
  CustomSoftwareIcon,
  FoundationIcon,
  FaqIcon,
  ArrowDown,
} from "@/components/ui/Icons";

const links = [
  {
    label: "01 / Websites & maintenance",
    href: "#websites",
    icon: <WebDevIcon size={15} color="#CEFF69" />,
  },
  {
    label: "02 / Software & games",
    href: "#software",
    icon: <CustomSoftwareIcon size={15} color="#CEFF69" />,
  },
  {
    label: "03 / Process",
    href: "#process",
    icon: <FoundationIcon size={15} color="#CEFF69" />,
  },
  {
    label: "04 / Pricing FAQ",
    href: "#pricing-faq",
    icon: <FaqIcon size={15} color="#CEFF69" />,
  },
];

export default function PricingNav() {
  return (
    <nav className="w-full border-t border-b border-[#2A3029] bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto h-12 lg:h-14 px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center gap-2 text-[#F2F4EC] text-xs sm:text-sm font-bold font-sans tracking-wide hover:text-[#CEFF69] transition-colors whitespace-nowrap"
          >
            <span className="shrink-0 flex items-center justify-center">
              {link.icon}
            </span>
            <span>{link.label}</span>
            <ArrowDown
              size={13}
              color="currentColor"
              className="text-[#A4ADA0] group-hover:text-[#CEFF69] transition-transform duration-200 group-hover:translate-y-0.5 shrink-0"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
