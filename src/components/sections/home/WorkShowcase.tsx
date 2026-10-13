import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-[#E8EDE1]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex-1 max-w-2xl flex flex-col items-start gap-6">
            <SectionLabel theme="light">02 / Engineering in practice</SectionLabel>
            <h2 className="w-full text-[#11150E] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              Different challenges. Same rigor.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-[#384031] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Illustrative build concepts. A look at what we can create.
            </p>
          </div>
        </div>

      {/* Projects Row */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        {/* Project 1 — Orbit Platform */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden">
          <div className="w-full h-96 relative bg-[#101211] rounded-lg flex flex-col items-start overflow-hidden">
            <img
              src="/images/operations-dashboard.png"
              alt="Orbit operations platform"
              className="w-full flex-1 object-cover object-top"
            />
            <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-b from-[#101211]/[0.38] via-transparent to-[#101211]/[0.50] pointer-events-none" />
            <span className="left-6 top-6 absolute text-[#F2F4EC] text-lg sm:text-xl font-bold font-sans">
              Orbit
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-[#CEFF69] rounded-full" />
              <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide">
                Operations platform / Concept 01
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-[#384031] text-xs sm:text-sm font-bold font-sans tracking-wider">
                Custom software / Operations
              </span>
              <h3 className="text-[#11150E] text-2xl sm:text-3xl font-bold font-sans tracking-tight group-hover:underline">
                Complex workflows. One clear view.
              </h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-full border border-[#11150E]/20 group-hover:border-[#11150E] transition-colors">
              <ArrowUpRight size={14} color="#11150E" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="w-full text-[#353D2F] text-sm sm:text-base font-medium font-sans leading-relaxed">
            A connected operations platform with real-time reporting, role-based
            access, and fewer manual handoffs.
          </p>
        </div>

        {/* Project 2 — Afterlight Game */}
        <div className="flex-1 flex flex-col items-start gap-5 overflow-hidden">
          <div className="w-full h-96 relative bg-[#101211] rounded-lg flex flex-col items-start overflow-hidden">
            <img
              src="/images/exploration-game.png"
              alt="Afterlight game"
              className="w-full flex-1 object-cover"
            />
            <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-b from-[#101211]/[0.38] via-transparent to-[#101211]/[0.50] pointer-events-none" />
            <span className="left-6 top-6 absolute text-[#F2F4EC] text-lg sm:text-xl font-bold font-sans">
              Afterlight
            </span>
            <div className="left-6 bottom-6 absolute flex items-center gap-2.5 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-[#CEFF69] rounded-full" />
              <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide">
                World exploration / Concept 01
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-2 overflow-hidden">
              <span className="text-[#384031] text-xs sm:text-sm font-bold font-sans tracking-wider">
                Game development / Interactive
              </span>
              <h3 className="text-[#11150E] text-2xl sm:text-3xl font-bold font-sans tracking-tight group-hover:underline">
                A world worth getting lost in.
              </h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center shrink-0 rounded-full border border-[#11150E]/20 group-hover:border-[#11150E] transition-colors">
              <ArrowUpRight size={14} color="#11150E" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="w-full text-[#353D2F] text-sm sm:text-base font-medium font-sans leading-relaxed">
            An atmospheric exploration experience combining immersive
            environments, responsive gameplay, and scalable systems.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
