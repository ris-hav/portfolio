import React, { useEffect, useState } from "react";
import Item from "./Item";
import projects from "./data";
import ImageSlider from "./ImageSlider";

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false); //dchcvhcv

  useEffect(() => { //bhbhsbhcs
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window width on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWheel = (event) => {
    event.preventDefault();

    // const track = document.getElementById("image-track");
    const track = document.getElementById("po");
    const track1 = document.getElementById("image-track");
    const swipeDelta = event.deltaX;
    let maxDelta = window.innerWidth / 2;
    const percentage = (swipeDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0); // helps decide the limits of values accepted , that is the range
    track.dataset.percentage = nextPercentage;

    track1.animate(
      {
        // transform: `translate(${nextPercentage}%, 0%)`,
        transform: `translate(${nextPercentage/1.6}%, 0%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = document.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${nextPercentage + 100}% 50%`,
        },
        { duration: 800, fill: "forwards" }
      );
    }
    track.dataset.prevPercentage = nextPercentage;
  };

  return (
    <>
      <section class="section sec3 portfolio" id="portfolio">
        <div class="main-title">
          <h2>
            My <span>portfolio</span>
            <span class="bg-text">my work</span>
          </h2>
        </div>
        <p class="port-text">
          Here is some of my work that showcases my skills in front-end
          technologies
        </p>
        {/* <div id="po" data-prev-percentage="0" onWheel={handleWheel}>
          <div id="image-track">
            {projects.map((project) => {
              const { src, name, file } = project;
              return <ImageSlider src={src} name={name} file={file} />;
            })}
          </div>
        </div> */}
        {!isMobile ? (
        <div id="po" data-prev-percentage="0" onWheel={handleWheel}>
          <div id="image-track">
            {projects.map((item) => {
              const { src, file, name } = item;
              return <ImageSlider src={src} name={name} file={file} />;
            })}
          </div>
        </div>
      ) : null}
      {isMobile ? (
        <div class="portfolios">
          {projects.map((item) => {
            const { src, file, name } = item;
            return <ImageSlider src={src} name={name} file={file} />;
          })}
        </div>
      ) : null}
      </section>
    </>
  );
}
