import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function PartnershipBanner() {
  return (
    <section className="w-full bg-[#191C19]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-14 lg:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
        <div className="max-w-3xl flex flex-col items-start gap-3">
          <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wider">
            Partnership & capacity
          </span>
          <h3 className="text-[#F2F4EC] text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight leading-[1.12]">
            Need engineering capacity, not a standalone project?
          </h3>
          {/* <p className="w-full text-[#C5CDC1] text-base sm:text-lg font-normal font-sans leading-relaxed">
            A dedicated partnership can flex around your roadmap. Team size,
            allocation, and monthly budget are agreed after discovery.
          </p> */}
        </div>

        <Link
          href="/#contact"
          className="h-14 px-7 rounded-lg bg-[#CEFF69] text-[#11150E] hover:bg-[#b8f050] flex items-center justify-between gap-4 transition-colors group cursor-pointer shrink-0"
        >
          <span className="text-sm sm:text-base font-semibold font-sans">
            Discuss a partnership
          </span>
          <ArrowIcon color="dark" size="md" />
        </Link>
      </div>
    </section>
  );
}
