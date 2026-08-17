import React, { useLayoutEffect, useRef, useState } from "react";
import controlData from "../data/controlData";

function Control({ activeIndex, setActiveIndex, isLight, setIsLight }) {
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
      <nav className="fixed bottom-4 left-1/2 top-auto z-10 -translate-x-1/2 md:bottom-auto md:top-6">
        <div
          ref={trackRef}
          className="relative flex items-center gap-1 rounded-full border border-[var(--nav-glass-border)] bg-[var(--nav-glass-bg)] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[20px] backdrop-saturate-[180%] transition-colors duration-300"
        >
          <div
            className="absolute left-0 top-1.5 z-0 h-[calc(100%-12px)] rounded-full bg-secondary transition-[transform,width] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
          />
          {controlData.map(({ text, icon }, controlIndex) => (
            <button
              type="button"
              ref={(el) => (itemRefs.current[controlIndex] = el)}
              onClick={() => handleControl(controlIndex)}
              key={controlIndex}
              className={`relative z-10 flex items-center gap-2 rounded-full px-3 py-2.5 text-[0.95rem] font-medium transition-colors duration-300 md:px-[1.3rem] ${
                controlIndex === activeIndex
                  ? "text-ink"
                  : "text-grey-2 hover:text-ink"
              }`}
            >
              <i className={`${icon} text-base`}></i>
              <span className="hidden md:inline">{text}</span>
            </button>
          ))}
        </div>
      </nav>
      <button
        type="button"
        onClick={handleTheme}
        aria-label="Toggle light/dark theme"
        aria-pressed={isLight}
        className={`fixed right-[2.6%] top-[5%] z-10 h-8 w-14 rounded-full p-1 shadow-[0_3px_15px_rgba(0,0,0,0.3)] transition-colors duration-300 ${
          isLight ? "bg-secondary" : "bg-grey-4"
        }`}
      >
        <span
          className={`block h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isLight ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </>
  );
}

export default React.memo(Control);
