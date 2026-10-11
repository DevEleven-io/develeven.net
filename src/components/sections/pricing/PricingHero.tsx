import Button from "@/components/ui/Button";

function PricingHero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-16 pt-16 pb-12 flex items-center gap-16">
      {/* Left: copy */}
      <div className="flex-1 flex flex-col gap-6">
        <span className="font-mono text-xs text-lime-300">
          DEVELEVEN / PRICING &amp; ENGAGEMENTS
        </span>
        <h1 className="text-stone-100 text-7xl font-sans leading-[1.02]">
          Clear scope.
          <br />
          Considered investment.
        </h1>
        <p className="w-[670px] text-neutral-400 text-base font-semibold leading-7 font-sans">
          From a focused website to a complex product. Compare ways to work with
          us, understand what&apos;s included, and find the right starting point.
        </p>
        <div className="flex gap-3">
          <Button href="#websites" variant="primary">
            Explore pricing ↓
          </Button>
          <Button href="/#contact" variant="ghost">
            Discuss your project
          </Button>
        </div>
      </div>

      {/* Right: aside image */}
      <div className="w-80 h-72 relative outline outline-1 outline-neutral-700 overflow-hidden shrink-0">
        <img
          src="https://placehold.co/350x304/18181b/404040?text=."
          alt="Built with intent"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 font-mono text-[10px] text-neutral-400">
          FIG. 11 / BUILT WITH INTENT
        </span>
      </div>
    </section>
  );
}

export default PricingHero;
