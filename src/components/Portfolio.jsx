import { useEffect, useState, useRef } from "react";
import projects from "../data/projects";
import caseStudies from "../data/caseStudies";
import ImageSlider from "./ImageSlider";
import CaseStudy from "./CaseStudy";

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef(null);
  const imageTrackRef = useRef(null);
  const percentageRef = useRef(0);

  const handleWheel = (event) => {
    // event.preventDefault();
    const maxDelta = window.innerWidth / 2; //the distance of total width that needs to be scrolled, if it's /15 then we need to scroll very less to reach the 15% of the entire width
    const swipeDelta = event.deltaX;
    const percentDelta = (swipeDelta / maxDelta) * -100;

    const next = clamp(percentageRef.current + percentDelta, -100, 0);
    percentageRef.current = next;

    if (imageTrackRef.current) {
      imageTrackRef.current.animate(
        { transform: `translate(${next / 1.6}%, 0)` },
        { duration: 1000, fill: "forwards" }
      );
      const images = imageTrackRef.current.querySelectorAll(".image");
      images.forEach((img) =>
        img.animate(
          { objectPosition: `${next + 100}% 50%` },
          { duration: 800, fill: "forwards" }
        )
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile((current) => {
        if (current !== mobile) return mobile;
        return current;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="min-h-screen w-full bg-primary text-ink transition-colors duration-300 animate-fadeUp"
    >
      <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-10 md:pb-16 md:pt-28 md:px-16">
        <div className="text-center">
          <h2 className="relative z-10 text-3xl font-semibold tracking-[-0.02em] md:text-[3.2rem]">
            Selected <span className="text-secondary">work</span>
          </h2>
        </div>
        <p className="py-8 text-center">
          A few of the systems I've built and the impact they had.
        </p>
        <div className="mt-4 flex flex-col gap-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.title} {...caseStudy} />
          ))}
        </div>

        {/* Side Projects section — temporarily disabled, keep for later
        <h4 className="underline-center relative py-14 text-center text-2xl font-semibold tracking-[-0.01em] md:text-[1.7rem]">
          Side Projects
        </h4>
        {isMobile ? (
          <div className="grid grid-cols-1 gap-8 pb-24">
            {projects.map(({ src, file, name, demoUrl, repoUrl }, projectIndex) => {
              return (
                <ImageSlider
                  key={projectIndex}
                  src={src}
                  name={name}
                  file={file}
                  demoUrl={demoUrl}
                  repoUrl={repoUrl}
                />
              );
            })}
          </div>
        ) : (
          <div
            ref={trackRef}
            className="relative mx-auto mb-16 mt-8 h-[56vmin] w-[80vw] overflow-x-hidden"
            onWheel={handleWheel}
          >
            <div
              ref={imageTrackRef}
              className="absolute left-[8%] top-[3vmin] flex gap-[4vmin]"
            >
              {projects.map(({ src, file, name, demoUrl, repoUrl }, projectIndex) => {
                return (
                  <ImageSlider
                    key={projectIndex}
                    src={src}
                    name={name}
                    file={file}
                    demoUrl={demoUrl}
                    repoUrl={repoUrl}
                  />
                );
              })}
            </div>
          </div>
        )}
        */}
      </div>
    </section>
  );
}
