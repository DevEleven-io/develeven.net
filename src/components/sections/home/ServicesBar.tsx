const services = [
  "WEB EXPERIENCES",
  "CUSTOM SOFTWARE",
  "GAME DEVELOPMENT",
  "CONTINUOUS CARE",
];

function ServicesBar() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-16 h-20 border-t border-b border-neutral-700 flex items-center justify-between">
      <span className="font-mono text-xs text-neutral-400">
        FROM IDEA TO INFRASTRUCTURE
      </span>
      {services.map((svc) => (
        <div key={svc} className="flex items-center gap-3">
          <span className="text-lime-300 text-base font-sans">+</span>
          <span className="font-mono text-xs text-stone-100">{svc}</span>
        </div>
      ))}
    </div>
  );
}

export default ServicesBar;
