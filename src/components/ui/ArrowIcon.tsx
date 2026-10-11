import React from "react";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`size-4 relative overflow-hidden shrink-0 ${className}`}>
      <div className="size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-[1.5px] outline-current" />
    </div>
  );
}

export default ArrowIcon;
