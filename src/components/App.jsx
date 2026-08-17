import { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Control from "./Control";

export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (isLight) document.body.classList.toggle("light-mode");
    return () => document.body.classList.remove("light-mode");
  }, [isLight]);

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
        setIsLight={setIsLight}
      />
    </div>
  );
}
