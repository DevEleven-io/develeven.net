import SectionLabel from "@/components/ui/SectionLabel";

const traits = ["ENGINEER-LED", "COLLABORATIVE", "LONG-TERM MINDED"];

function StudioSection() {
  return (
    <section id="studio" className="w-full max-w-[1440px] mx-auto px-16 py-24 flex items-center gap-20">
      {/* Left: image */}
      <div className="w-[572px] h-96 relative">
        <img
          src="https://placehold.co/572x430/171717/404040?text=."
          alt="The DevEleven studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 px-3 py-2 bg-neutral-900">
          <span className="font-mono text-[10px] text-stone-100">
            THE DETAILS ARE THE WORK.
          </span>
        </div>
      </div>

      {/* Right: copy */}
      <div className="flex-1 flex flex-col gap-6">
        <SectionLabel>05 / THE PEOPLE BEHIND THE CODE</SectionLabel>
        <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
          Engineers by trade.
          <br />
          Partners by nature.
        </h2>
        <p className="text-neutral-400 text-base leading-7 font-sans">
          DevEleven is a technology studio for teams who care about what they put
          into the world. We bring curious thinking, hands-on engineering, and a
          shared sense of ownership to every project.
        </p>
        <p className="text-neutral-400 text-base leading-7 font-sans">
          You work directly with the people building your product. Less
          translation. Better decisions. A closer partnership.
        </p>

        <div className="w-full h-px bg-neutral-700" />

        <div className="flex justify-between items-start">
          {traits.map((trait) => (
            <span key={trait} className="font-mono text-xs text-lime-300">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioSection;
