import React from "react";

type Pillar = { title: string; description: string; color: string};

const DATA: Pillar[] = [
  { title: "Hacker's Favorite", description: "Most memorable and favorite project!", color: "#e480d3ff"},
  {
    title: "Best Social Goods",
    description:
      "Focuses the best on addressing social issues such as climate change, renewable energy, waste reduction, and sustainable practices!", color: "#a6a4e2ff"
  },
  {
    title: "Best Entertainment",
    description:
      "Best entertainment product (music, gaming, art, food, culture, outdoor activities, physical activities, fashion, and beauty)!", color: "#eb89adff"
  },
 
  {
    title: "Best Technical",
    description:
      "Best project for the most advanced, challenging, and difficulty in implementation!", color: "#fd85b5ff "
  },
];

// exact ribbon colors (in order)
const HEADER = ["#F7D3F1", "#DAD9F6", "#EFC0D1", "#FBACCC"];

export const Pillars = () => {
  return (
    <section
      id="pillars"
      className="bg-[#DFF9FF] pt-28 md:pt-36 pb-24 scroll-mt-28 md:scroll-mt-36"
    >
      {/* Section title */}
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-12 mt-2 font-nunito [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
          Pillars
        </h2>

        {/* Stacked list */}
        <div className="flex flex-col items-center space-y-12">
          {DATA.map((p, i) => (
            <div key={p.title} className="w-full flex flex-col items-center">
              {/* Ribbon (on top) */}
              <div
                className="
                  relative z-10
                  w-[92%] md:w-[88%] lg:w-[84%]
                  rounded-2xl
                  shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                  ring-1 ring-black/5
                  text-center
                "
                style={{ background: HEADER[i % HEADER.length] }}
              >
                <div className="py-5">
                  {/* if you want white uppercase like the prototype, swap the color & add uppercase */}
                  <h3 className="text-white uppercase tracking-[0.08em] text-[18px] sm:text-[20px] md:text-[22px] font-extrabold">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Card under the ribbon (slightly tucked underneath) */}
              <div
                className="
                  relative z-0
                  w-[86%] md:w-[82%] lg:w-[78%]
                  -mt-4              /* <-- pulls the white card up, under the ribbon */
                  rounded-2xl bg-white
                  shadow-lg ring-1 ring-black/5
                  px-8 py-8
                "
              >
                <p className="text-center font-bold text-[17px] leading-7" style={{color:p.color}}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
