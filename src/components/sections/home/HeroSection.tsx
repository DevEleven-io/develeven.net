import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";

function HeroSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-16 py-16 flex items-center gap-8">
      {/* Left: copy */}
      <div className="w-[720px] flex flex-col gap-7">
        <span className="font-mono text-xs text-lime-300">
          INDEPENDENT ENGINEERING STUDIO / DEVELEVEN
        </span>

        <h1 className="text-stone-100 text-8xl font-normal font-sans leading-[1.02]">
          Ambitious ideas.
          <br />
          Precisely
          <br />
          engineered.
        </h1>

        <p className="w-[550px] text-neutral-400 text-base leading-7 font-sans">
          Websites, software, and games built to work beautifully. We turn
          complex challenges into reliable digital products — from first sketch
          to the next release.
        </p>

        <div className="flex items-start gap-3">
          <Button href="/#contact" variant="primary">
            Discuss your project
          </Button>
          <Button href="/#services" variant="secondary">
            Explore our services
          </Button>
        </div>

        <StatusDot label="OPEN FOR NEW COLLABORATIONS" />
      </div>

      {/* Right: image card */}
      <div className="flex-1 h-[548px] relative bg-zinc-900 outline outline-1 outline-neutral-700 flex flex-col overflow-hidden">
        <img
          src="https://placehold.co/560x548/18181b/404040?text=."
          alt="Built with intent"
          className="w-full flex-1 object-cover"
        />
        {/* Top overlay */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <span className="font-mono text-[10px] text-neutral-400">
            FIG. 11 — BUILT WITH INTENT
          </span>
          <span className="font-mono text-[10px] text-lime-300">
            [ X / Y / Z ]
          </span>
        </div>
        {/* Bottom overlay */}
        <div className="absolute bottom-[13px] left-5 flex items-center gap-2.5">
          <div className="w-5 h-0.5 bg-lime-300" />
          <span className="font-mono text-[10px] text-stone-100">
            PRECISION IS A MINDSET, NOT A FEATURE.
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
