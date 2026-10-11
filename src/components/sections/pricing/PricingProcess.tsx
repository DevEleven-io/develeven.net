const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Your goals, audience, must-haves, budget and target date. An early idea is enough to begin.",
    output: "INPUT / YOUR PROJECT CONTEXT",
  },
  {
    number: "02",
    title: "Define the scope",
    description:
      "We map the requirements, risks and dependencies, then separate essentials from later phases.",
    output: "OUTPUT / A BOUNDED DELIVERY PLAN",
  },
  {
    number: "03",
    title: "Agree the proposal",
    description:
      "Review the price, deliverables, milestones and commercial terms before any build starts.",
    output: "OUTPUT / YOUR ACTUAL PROJECT QUOTE",
  },
];

const proposalItems = [
  "Deliverables & exclusions",
  "Milestones & payment terms",
  "Ownership & support",
];

function PricingProcess() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-16 py-20 bg-stone-200 flex flex-col gap-12">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[740px] flex flex-col gap-5">
          <span className="font-mono text-xs text-stone-600">
            05 / FROM EXAMPLE TO ESTIMATE
          </span>
          <h2 className="text-neutral-900 text-5xl font-sans leading-[1.02]">
            The price follows the plan.
            <br />
            Not the other way around.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-stone-600 text-base leading-7 font-sans">
            Complexity, integrations, content readiness and delivery constraints
            shape your investment. We make those trade-offs visible.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="flex gap-10">
        {steps.map((step) => (
          <div key={step.number} className="flex-1 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-stone-600">{step.number}</span>
              <div className="flex-1 h-px bg-stone-300" />
            </div>
            <h3 className="text-neutral-900 text-2xl font-sans">{step.title}</h3>
            <p className="text-stone-600 text-base leading-6 font-sans">
              {step.description}
            </p>
            <span className="font-mono text-[10px] text-neutral-900 leading-4">
              {step.output}
            </span>
          </div>
        ))}
      </div>

      {/* Proposal checklist footer */}
      <div className="pt-7 border-t border-stone-300 flex justify-between items-center">
        <span className="font-mono text-xs text-stone-600">
          EVERY PROPOSAL SHOULD MAKE CLEAR
        </span>
        {proposalItems.map((item) => (
          <span key={item} className="text-neutral-900 text-sm font-sans">
            + {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default PricingProcess;
