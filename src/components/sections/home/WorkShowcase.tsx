import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function WorkShowcase() {
  const chartHeights = [28, 42, 34, 54, 44, 61, 53, 68, 64, 74, 70, 83];

  return (
    <section id="work" className="w-full bg-[#E8EDE1]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 overflow-hidden">
          <div className="flex-1 max-w-2xl flex flex-col items-start gap-[24px] overflow-hidden">
          <SectionLabel theme="light">02 / Engineering in practice</SectionLabel>
          <h2 className="w-full text-[#11150E] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
            Different challenges. Same rigor.
          </h2>
        </div>
        <div className="w-[300px] text-[#384031] text-xs sm:text-sm font-semibold font-sans leading-relaxed tracking-wider">
          Illustrative build concepts
          <br />
          A look at what we can create
        </div>
      </div>

      {/* Projects Row */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        {/* Project 1 — Orbit Platform */}
        <div className="flex-1 flex flex-col items-start gap-[20px] overflow-hidden">
          <div className="w-full h-[382px] p-[32px] bg-[#B8C8A2] flex flex-col justify-center items-start overflow-hidden">
            <div className="w-full h-[310px] bg-[#F5F7F0] rounded-[6px] flex flex-col items-start overflow-hidden shadow-sm">
              {/* Browser Chrome */}
              <div className="w-full h-[38px] px-[16px] bg-[#E5EADD] flex justify-between items-center overflow-hidden shrink-0">
                <div className="flex items-center gap-[4px] overflow-hidden">
                  <div className="w-[5px] h-[5px] bg-[#A1AD95] rounded-full" />
                  <div className="w-[5px] h-[5px] bg-[#A1AD95] rounded-full" />
                  <div className="w-[5px] h-[5px] bg-[#A1AD95] rounded-full" />
                </div>
                <span className="text-[#596151] text-xs font-normal font-sans">
                  console.orbit / overview
                </span>
                <span className="text-[#596151] text-xs font-normal font-sans">
                  ↗
                </span>
              </div>

              {/* App Body */}
              <div className="w-full flex-1 flex items-start overflow-hidden">
                {/* Sidebar */}
                <div className="w-[108px] h-full p-[14px] bg-[#11150E] flex flex-col items-start gap-[17px] overflow-hidden shrink-0">
                  <span className="text-[#F2F4EC] text-sm font-bold font-sans">
                    orbit.
                  </span>
                  <span className="text-[#CEFF69] text-xs font-normal font-sans">
                    Overview
                  </span>
                  {["Projects", "Resources", "Reports", "Settings"].map((item) => (
                    <span
                      key={item}
                      className="text-[#A4ADA0] text-xs font-normal font-sans"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 h-full p-[16px] flex flex-col items-start gap-[12px] overflow-hidden">
                  <div className="w-full flex justify-between items-start overflow-hidden">
                    <span className="text-[#11150E] text-base sm:text-lg font-semibold font-sans">
                      Operations overview
                    </span>
                    <span className="text-[#596151] text-xs font-normal font-sans">
                      This month ↓
                    </span>
                  </div>

                  {/* Stat Cards */}
                  <div className="w-full flex items-start gap-[10px] overflow-hidden">
                    {[
                      { label: "Active projects", value: "24" },
                      { label: "Tasks completed", value: "1,284" },
                      { label: "Team capacity", value: "86%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 p-[12px] bg-[#E9EEDF] rounded-[3px] flex flex-col items-start gap-[6px] overflow-hidden"
                      >
                        <span className="text-[#596151] text-xs font-normal font-sans">
                          {stat.label}
                        </span>
                        <span className="text-[#11150E] text-xl sm:text-2xl font-semibold font-sans">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Velocity Chart */}
                  <div className="w-full flex flex-col items-start gap-[9px] overflow-hidden">
                    <span className="text-[#11150E] text-xs font-semibold font-sans">
                      Delivery velocity
                    </span>
                    <div className="w-full h-[84px] flex items-end gap-[9px] overflow-hidden">
                      {chartHeights.map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}px` }}
                          className={`flex-1 rounded-t-[2px] ${
                            i >= 9 ? "bg-[#527237]" : "bg-[#B2C498]"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="w-full flex justify-between items-center text-[#596151] text-xs font-normal font-sans">
                      <span>W01</span>
                      <span>W04</span>
                      <span>W08</span>
                      <span>W12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-[8px] overflow-hidden">
              <span className="text-[#384031] text-xs sm:text-sm font-bold font-sans tracking-wider">
                Custom software / Operations
              </span>
              <h3 className="text-[#11150E] text-2xl sm:text-3xl font-bold font-sans tracking-tight group-hover:underline">
                Complex workflows. One clear view.
              </h3>
            </div>
            <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0 rounded-full border border-[#11150E]/20 group-hover:border-[#11150E] transition-colors">
              <ArrowUpRight size={14} color="#11150E" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <p className="w-full text-[#353D2F] text-sm sm:text-base font-medium font-sans leading-relaxed">
            A connected operations platform with real-time reporting, role-based
            access, and fewer manual handoffs.
          </p>
        </div>

        {/* Project 2 — Afterlight Game */}
        <div className="flex-1 flex flex-col items-start gap-[20px] overflow-hidden">
          <div className="w-full h-[382px] relative bg-[#101211] flex flex-col items-start overflow-hidden">
            <img
              src="/images/exploration-game.png"
              alt="Afterlight game"
              className="w-full flex-1 object-cover"
            />
            <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-b from-[#101211]/[0.38] via-transparent to-[#101211]/[0.50] pointer-events-none" />
            <span className="left-[26px] top-[24px] absolute text-[#F2F4EC] text-lg sm:text-xl font-bold font-sans">
              Afterlight
            </span>
            <div className="left-[26px] top-[346px] absolute flex items-center gap-[10px] overflow-hidden">
              <div className="w-[5px] h-[5px] bg-[#CEFF69] rounded-full" />
              <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide">
                World exploration / Concept 01
              </span>
            </div>
          </div>

          {/* Title Row */}
          <div className="w-full flex justify-between items-center overflow-hidden group cursor-pointer">
            <div className="flex flex-col items-start gap-[8px] overflow-hidden">
              <span className="text-[#384031] text-xs sm:text-sm font-bold font-sans tracking-wider">
                Game development / Interactive
              </span>
              <h3 className="text-[#11150E] text-2xl sm:text-3xl font-bold font-sans tracking-tight group-hover:underline">
                A world worth getting lost in.
              </h3>
            </div>
            <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0 rounded-full border border-[#11150E]/20 group-hover:border-[#11150E] transition-colors">
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
