import skilldata from "../data/skilldata";
import aboutQuantifiable from "../data/aboutQuantifiable";
import timelineData from "../data/timelineData";
import Skill from "./Skill";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-primary text-ink transition-colors duration-300 animate-fadeUp"
    >
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-28 md:px-16">
        <div className="text-center">
          <h2 className="relative z-10 text-3xl font-semibold tracking-[-0.02em] md:text-[3.2rem]">
            About <span className="text-secondary">me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-20 pt-14 md:grid-cols-2">
          <div className="md:pr-20">
            <h4 className="text-2xl font-semibold uppercase tracking-wide">
              Information about me
            </h4>
            <p className="p-4 leading-8 text-grey-1">
              Frontend Developer with 5+ years building performant React and
              Angular applications for B2B SaaS products, including full
              mobile app delivery in React Native. I'm currently expanding
              into backend development with Node.js/NestJS, and I'm known for
              turning complex, hand-rolled UI into scalable, declarative
              systems.
              <br />
              <br />
              Beyond writing code, I care about what the team can build on
              after I'm done&mdash;documenting migrations in markdown guides,
              running internal sessions on patterns I've shipped, and leaving
              systems easier to extend than I found them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {aboutQuantifiable.map((about, AboutIndex) => (
              <div
                key={AboutIndex}
                className="cursor-default rounded-[20px] bg-grey-4 transition hover:-translate-y-1"
              >
                <div className="flex flex-col p-6">
                  <p className="text-5xl font-bold text-secondary">
                    {about.quantity}
                  </p>
                  <p className="stat-label relative pl-12 text-xl uppercase tracking-[2px] text-grey-1">
                    {about.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-16">
          <h4 className="underline-center relative py-14 text-center text-2xl font-semibold tracking-[-0.01em] md:text-[1.7rem]">
            My Skills
          </h4>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skilldata.map(({ category, skills }) => (
              <Skill key={category} category={category} skills={skills} />
            ))}
          </div>
        </div>

        <h4 className="underline-center relative py-14 text-center text-2xl font-semibold tracking-[-0.01em] md:text-[1.7rem]">
          My Timeline
        </h4>
        <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2">
          {timelineData.map((timeline, timelineIndex) => (
            <div
              key={timelineIndex}
              className="relative border-l border-grey-5 pl-12"
            >
              <div className="absolute -left-[26px] top-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-secondary">
                <i className="fa-solid fa-briefcase text-xl"></i>
              </div>
              <p className="inline-block rounded-[15px] bg-grey-5 px-[0.6rem] py-[0.2rem] text-xs font-medium uppercase">
                {timeline.duration}
              </p>
              <h5 className="py-4 text-xl font-semibold uppercase">
                {timeline.role}{" "}
                <span className="text-lg font-medium text-grey-2">
                  {` - ${timeline.company}`}
                </span>
              </h5>
              <p className="text-grey-2">{timeline.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
