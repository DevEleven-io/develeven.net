import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";

function WorkShowcase() {
  return (
    <section id="work" className="w-full max-w-[1440px] mx-auto px-16 py-24 bg-stone-200 flex flex-col gap-12">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[820px] flex flex-col gap-6">
          <SectionLabel theme="light">02 / ENGINEERING IN PRACTICE</SectionLabel>
          <h2 className="text-neutral-900 text-6xl font-sans leading-[1.02]">
            Different challenges. Same rigor.
          </h2>
        </div>
        <div className="w-72">
          <p className="font-mono text-xs text-stone-600 leading-4">
            ILLUSTRATIVE BUILD CONCEPTS
            <br />A LOOK AT WHAT WE CAN CREATE
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="flex gap-6">
        {/* Project 1 — Custom Software */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="h-96 p-8 bg-stone-400 flex flex-col justify-center">
            {/* Mock dashboard UI */}
            <div className="h-80 bg-stone-100 rounded-md flex flex-col overflow-hidden">
              {/* Browser chrome */}
              <div className="h-9 px-4 bg-stone-200 flex justify-between items-center shrink-0">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="size-[5px] bg-stone-400 rounded-full" />
                  ))}
                </div>
                <span className="font-mono text-[8px] text-stone-600">
                  console.orbit / overview
                </span>
                <span className="text-stone-600 text-[8px]">↗</span>
              </div>
              {/* App layout */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-28 p-3.5 bg-neutral-900 flex flex-col gap-4 shrink-0">
                  <span className="text-stone-100 text-base font-bold font-sans">orbit.</span>
                  <span className="text-lime-300 text-[9px] font-sans">Overview</span>
                  {["Projects", "Resources", "Reports", "Settings"].map((item) => (
                    <span key={item} className="text-neutral-400 text-[9px] font-sans">{item}</span>
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <span className="text-neutral-900 text-lg font-semibold font-sans">Operations overview</span>
                    <span className="font-mono text-[8px] text-stone-600">THIS MONTH ↓</span>
                  </div>
                  {/* Stats */}
                  <div className="flex gap-2.5">
                    {[
                      { label: "Active projects", value: "24" },
                      { label: "Tasks completed", value: "1,284" },
                      { label: "Team capacity", value: "86%" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex-1 p-3 bg-stone-200 rounded-[3px] flex flex-col gap-1.5">
                        <span className="text-stone-600 text-[8px] font-sans">{stat.label}</span>
                        <span className="text-neutral-900 text-xl font-semibold font-sans">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  {/* Chart */}
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900 text-[10px] font-semibold font-sans">Delivery velocity</span>
                    <div className="h-20 flex items-end gap-2">
                      {[28, 40, 32, 56, 44, 64, 56, 64, 64, 80, 64, 80].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-tl-sm rounded-tr-sm ${i >= 9 ? "bg-stone-600" : "bg-stone-400"}`}
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[7px] text-stone-600">
                      W01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W08&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-stone-600">CUSTOM SOFTWARE / OPERATIONS</span>
              <h3 className="text-neutral-900 text-3xl font-sans">Complex workflows. One clear view.</h3>
            </div>
            <button className="size-6 relative overflow-hidden group">
              <ArrowIcon className="text-neutral-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </button>
          </div>
          <p className="text-stone-600 text-base leading-6 font-sans">
            A connected operations platform with real-time reporting, role-based
            access, and fewer manual handoffs.
          </p>
        </div>

        {/* Project 2 — Game */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="h-96 relative bg-neutral-900 overflow-hidden">
            <img
              src="https://placehold.co/644x382/171717/404040?text=."
              alt="Afterlight game concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-transparent to-neutral-900/50" />
            <span className="absolute top-6 left-6 text-stone-100 text-xl font-medium font-sans">
              AFTERLIGHT
            </span>
            <div className="absolute bottom-[18px] left-6 flex items-center gap-2.5">
              <div className="size-[5px] bg-lime-300 rounded-full" />
              <span className="font-mono text-[9px] text-stone-100">
                WORLD EXPLORATION / CONCEPT 01
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-stone-600">GAME DEVELOPMENT / INTERACTIVE</span>
              <h3 className="text-neutral-900 text-3xl font-sans">A world worth getting lost in.</h3>
            </div>
            <button className="size-6 relative overflow-hidden">
              <ArrowIcon className="text-neutral-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </button>
          </div>
          <p className="text-stone-600 text-base leading-6 font-sans">
            An atmospheric exploration experience combining immersive
            environments, responsive gameplay, and scalable systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkShowcase;
