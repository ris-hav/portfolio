import { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Control from "./Control";

export default function App() {
  const [isLight, setIsLight] = useState(
    () => window.matchMedia("(prefers-color-scheme: light)").matches
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isLight) document.body.classList.toggle("light-mode");
    return () => document.body.classList.remove("light-mode");
  }, [isLight]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (event) => setIsLight(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  function currentSection() {
    switch (activeIndex) {
      case 0:
        return <Header />;
      case 1:
        return <About />;
      case 2:
        return <Portfolio />;
      case 3:
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <div>
      {currentSection()}
      <Control
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        isLight={isLight}
        setIsLight={setIsLight}
      />
    </div>
  );
}
