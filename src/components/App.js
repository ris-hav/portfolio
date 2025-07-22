import { useState, lazy, Suspense, useEffect } from "react";
// const Header = lazy(() => import("./Header"));
// const About = lazy(() => import("./About"));
// const Portfolio = lazy(() => import("./Portfolio"));
// const Contact = lazy(() => import("./Contact"));
// const Control = lazy(() => import("./Control"));

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
    <>
      {/* <div className={`main-content ${isLight ? "light-mode" : ""}`}> */}
      <div className={`main-content`}>
        {/* <Suspense fallback={<div>Loading…</div>}> */}
        {currentSection()}
        <Control
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsLight={setIsLight}
        />
        {/* </Suspense> */}
      </div>
    </>
  );
}
