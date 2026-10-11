import React from "react";

const services = [
  "WEB EXPERIENCES",
  "CUSTOM SOFTWARE",
  "GAME DEVELOPMENT",
  "CONTINUOUS CARE",
];

export default function ServicesBar() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-[84px] px-[64px] border-t border-b border-[#343A33] flex justify-between items-center overflow-hidden">
      <span className="text-[#A4ADA0] text-[11px] font-normal font-mono">
        FROM IDEA TO INFRASTRUCTURE
      </span>
      {services.map((svc) => (
        <div key={svc} className="flex items-center gap-[12px] overflow-hidden">
          <span className="text-[#CEFF69] text-[15px] font-normal font-sans">
            +
          </span>
          <span className="text-[#F2F4EC] text-[11px] font-normal font-mono">
            {svc}
          </span>
        </div>
      ))}
    </div>
  );
}
