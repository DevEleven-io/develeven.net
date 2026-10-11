function DisclaimerBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-16 pb-8">
      <div className="p-5 bg-zinc-900 outline outline-1 outline-neutral-700 flex gap-4">
        {/* Icon */}
        <div className="size-5 relative shrink-0 overflow-hidden">
          <div className="size-4 absolute top-[1.67px] left-[1.67px] outline outline-1 outline-lime-300" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="font-sans text-xs font-semibold text-lime-300">
            INDICATIVE EXAMPLES — NOT A QUOTE
          </span>
          <p className="text-neutral-400 text-xs leading-5 font-sans">
            All amounts below are illustrative USD budgets, pending DevEleven
            confirmation. Rates, currency, taxes, timelines and commercial terms
            are not approved. Your proposal will define the actual price and
            scope.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerBanner;
