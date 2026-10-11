import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

const plans = [
  {
    name: "Essential care",
    subtitle: "For a stable, low-change website.",
    price: "$150–300",
    priceNote: "EXAMPLE USD / MONTH",
    scope: "Routine maintenance only",
    features: [
      "CMS & dependency updates",
      "Scheduled backups + uptime checks",
      "Monthly maintenance summary",
    ],
  },
  {
    name: "Active care",
    subtitle: "For a website that changes with you.",
    price: "$400–750",
    priceNote: "EXAMPLE USD / MONTH",
    scope: "Example: 4 engineering hours / month",
    features: [
      "Everything in Essential care",
      "Content edits & small improvements",
      "Performance review + priority triage",
    ],
  },
  {
    name: "Product care",
    subtitle: "For business-critical web experiences.",
    price: "$1,000–2,000",
    priceNote: "EXAMPLE USD / MONTH",
    scope: "Example: 12 engineering hours / month",
    features: [
      "Everything in Active care",
      "Release support & integration checks",
      "Planned improvement backlog",
    ],
  },
];

function MaintenancePricing() {
  return (
    <section id="maintenance" className="w-full max-w-[1440px] mx-auto px-16 py-20 bg-zinc-900 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[760px] flex flex-col gap-5">
          <SectionLabel>02 / WEBSITE MAINTENANCE</SectionLabel>
          <h2 className="text-stone-100 text-5xl font-sans leading-[1.02]">
            Launch is only the beginning.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            Keep your website secure, current and moving forward. Example care
            plans for different levels of change.
          </p>
        </div>
      </div>

      {/* Plan cards */}
      <div className="flex gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 p-7 bg-neutral-900 rounded-sm outline outline-1 outline-neutral-700 flex flex-col gap-5"
          >
            <h3 className="text-stone-100 text-2xl font-sans">{plan.name}</h3>
            <p className="text-neutral-400 text-sm font-sans">{plan.subtitle}</p>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <span className="text-stone-100 text-4xl font-sans">{plan.price}</span>
              <span className="font-mono text-[10px] text-lime-300">{plan.priceNote}</span>
            </div>

            <div className="w-full h-px bg-neutral-700" />

            <p className="text-neutral-400 text-xs font-sans">{plan.scope}</p>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/#contact"
              className="h-14 px-5 bg-neutral-900 rounded-sm outline outline-1 outline-neutral-700 flex items-center gap-7 hover:outline-neutral-500 transition-colors"
            >
              <span className="flex-1 text-stone-100 text-sm font-semibold font-sans">
                Discuss a care plan
              </span>
              <ArrowIcon className="text-lime-300" />
            </a>
          </div>
        ))}
      </div>

      <p className="text-neutral-400 text-xs leading-5 font-sans">
        Illustrative allowances only. An initial codebase review may be needed.
        Hosting, paid licenses, major redesigns and new features are separate;
        response times, emergency cover, overages and rollover are agreed in your
        proposal.
      </p>
    </section>
  );
}

export default MaintenancePricing;
