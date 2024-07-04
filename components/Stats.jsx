"use client";
import Countup from "react-countup";

const stats = [
  {
    num: 12,
    text: "Months of experience",
  },
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 7,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];
function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
            >
              <Countup
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extralight"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
