import React from "react";
import Link from "next/link";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

export interface PricingCardProps {
  name: string;
  tag: string;
  badge?: string;
  icon: React.ReactNode;
  price: string;
  period?: string;
  scope: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

export default function PricingCard({
  name,
  tag,
  badge,
  icon,
  price,
  period = "/ project",
  scope,
  features,
  buttonText,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`p-7 bg-[#191C19] rounded-lg outline outline-1 flex flex-col justify-between items-start gap-8 ${
        featured
          ? "outline-[#CEFF69] -outline-offset-1"
          : "outline-[#2A3029] -outline-offset-1"
      }`}
    >
      <div className="w-full flex flex-col items-start gap-5">
        {/* Header: Icon + Title on left, Badge on right */}
        <div className="w-full flex justify-between items-start gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              {icon}
            </div>
            <h3 className="text-[#F2F4EC] text-2xl sm:text-3xl font-bold font-sans tracking-tight">
              {name}
            </h3>
          </div>
          {badge && (
            <div className="px-2.5 py-1.5 bg-[#CEFF69] rounded-md flex items-start shrink-0">
              <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wider">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Punchy Lime Tag */}
        <span className="text-[#CEFF69] text-sm font-bold font-sans tracking-wide">
          {tag}
        </span>

        {/* Price Block: Price + period beside it */}
        <div className="w-full flex items-baseline gap-2.5 flex-wrap">
          <span className="text-[#F2F4EC] text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
            {price}
          </span>
          <span className="text-[#A4ADA0] text-sm sm:text-base font-semibold font-sans tracking-normal">
            {period}
          </span>
        </div>

        {/* 1px Divider */}
        <div className="w-full h-px bg-[#2A3029]" />

        {/* Scope Title */}
        <span className="w-full text-[#F2F4EC] text-sm sm:text-base font-bold font-sans">
          {scope}
        </span>

        {/* Checklist */}
        <div className="w-full flex flex-col items-start gap-3">
          {features.map((feature) => (
            <CheckItem key={feature}>{feature}</CheckItem>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <Link
        href="/#contact"
        className={`w-full h-14 px-6 rounded-lg flex items-center justify-between transition-colors group cursor-pointer ${
          featured
            ? "bg-[#CEFF69] text-[#11150E] hover:bg-[#b8f050]"
            : "bg-[#101211] outline outline-1 outline-[#2A3029] -outline-offset-1 text-[#F2F4EC] hover:outline-[#A4ADA0]"
        }`}
      >
        <span className="text-sm font-semibold font-sans">
          {buttonText}
        </span>
        <ArrowIcon color={featured ? "dark" : "lime"} />
      </Link>
    </div>
  );
}
