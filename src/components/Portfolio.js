import { useEffect, useState, useRef } from "react";
import projects from "../data/projects";
import ImageSlider from "./ImageSlider";

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef(null);
  const imageTrackRef = useRef(null);
  const percentageRef = useRef(0);

  console.log("imageTrackRef", imageTrackRef);
  console.log("percentageRef", percentageRef);

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
    <>
      <section className="section sec3 portfolio active" id="portfolio">
        <div className="main-title">
          <h2>
            My <span>portfolio</span>
            {/* <span className="bg-text">my work</span> */}
          </h2>
        </div>
        <p className="port-text">
          Here is some of my work that showcases my skills in front-end
          technologies
        </p>
        {isMobile ? (
          <div className="portfolios">
            {projects.map(({ src, file, name }, projectIndex) => {
              return (
                <ImageSlider
                  key={projectIndex}
                  src={src}
                  name={name}
                  file={file}
                />
              );
            })}
          </div>
        ) : (
          <div
            ref={trackRef}
            id="po"
            data-prev-percentage="0"
            onWheel={handleWheel}
          >
            <div ref={imageTrackRef} id="image-track">
              {projects.map(({ src, file, name }, projectIndex) => {
                return (
                  <ImageSlider
                    key={projectIndex}
                    src={src}
                    name={name}
                    file={file}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
