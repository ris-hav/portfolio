import React, { useLayoutEffect, useRef, useState } from "react";
import controlData from "../data/controlData";

function Control({ activeIndex, setActiveIndex, setIsLight }) {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  function handleControl(index) {
    setActiveIndex(index);
  }

  function handleTheme() {
    setIsLight((prevTheme) => !prevTheme);
  }

  useLayoutEffect(() => {
    const measure = () => {
      const activeEl = itemRefs.current[activeIndex];
      const trackEl = trackRef.current;
      if (!activeEl || !trackEl) return;
      const trackRect = trackEl.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: itemRect.left - trackRect.left,
        width: itemRect.width,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  return (
    <>
      <nav className="pill-nav">
        <div className="pill-track" ref={trackRef}>
          <div
            className="pill-indicator"
            style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
          />
          {controlData.map(({ text, icon }, controlIndex) => (
            <button
              type="button"
              ref={(el) => (itemRefs.current[controlIndex] = el)}
              onClick={() => handleControl(controlIndex)}
              key={controlIndex}
              className={`pill-item ${
                controlIndex === activeIndex ? "pill-item-active" : ""
              }`}
            >
              <i className={icon}></i>
              <span className="pill-label">{text}</span>
            </button>
          ))}
        </div>
      </nav>
      <div className="theme-btn" onClick={handleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
}

export default React.memo(Control);
