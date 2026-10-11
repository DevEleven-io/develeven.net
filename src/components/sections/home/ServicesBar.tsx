import React from "react";
import {
  WebDevIcon,
  CustomSoftwareIcon,
  GameDevIcon,
  MaintenanceIcon,
} from "@/components/ui/Icons";

const services = [
  {
    label: "Web experiences",
    icon: <WebDevIcon size={18} color="#CEFF69" />,
  },
  {
    label: "Custom software",
    icon: <CustomSoftwareIcon size={18} color="#CEFF69" />,
  },
  {
    label: "Game development",
    icon: <GameDevIcon size={18} color="#CEFF69" />,
  },
  {
    label: "Continuous care",
    icon: <MaintenanceIcon size={18} color="#CEFF69" />,
  },
];

export default function ServicesBar() {
  return (
    <div className="w-full border-t border-b border-[#2A3029] bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto h-[84px] px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6">
        <span className="text-[#A4ADA0] text-sm sm:text-base font-bold font-sans tracking-wide whitespace-nowrap">
          From idea to infrastructure
        </span>
        {services.map((svc) => (
          <div key={svc.label} className="flex items-center gap-[10px] sm:gap-[12px] overflow-hidden whitespace-nowrap">
            {svc.icon}
            <span className="text-[#F2F4EC] text-sm sm:text-base font-semibold font-sans tracking-wide">
              {svc.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
