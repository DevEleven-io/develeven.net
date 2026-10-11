const anchors = [
  { label: "01 / WEBSITES ↓", href: "#websites" },
  { label: "02 / MAINTENANCE ↓", href: "#maintenance" },
  { label: "03 / SOFTWARE & GAMES ↓", href: "#software" },
  { label: "04 / ENGINEERING ↓", href: "#engineering" },
  { label: "05 / PRICING FAQ ↓", href: "#pricing-faq" },
];

function PricingNav() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-16 h-16 border-t border-b border-neutral-700 flex items-center justify-between">
      {anchors.map((a) => (
        <a
          key={a.href}
          href={a.href}
          className="font-mono text-xs text-stone-100 hover:text-lime-300 transition-colors"
        >
          {a.label}
        </a>
      ))}
    </div>
  );
}

export default PricingNav;
