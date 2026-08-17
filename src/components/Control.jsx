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
      <nav className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-10 md:inset-x-auto md:bottom-auto md:left-1/2 md:top-6 md:-translate-x-1/2">
        <div
          ref={trackRef}
          className="relative flex items-center gap-1 rounded-[28px] border border-[var(--nav-glass-border)] bg-[var(--nav-glass-bg)] px-1 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[20px] backdrop-saturate-[180%] transition-colors duration-300 md:w-auto md:rounded-full md:p-1.5"
        >
          <div
            className="absolute left-0 top-1.5 z-0 hidden h-[calc(100%-12px)] rounded-full bg-secondary transition-[transform,width] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)] md:block"
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
              className={`relative z-10 flex flex-1 flex-col items-center gap-1 rounded-full py-1 text-[0.7rem] font-medium transition-colors duration-300 md:flex-none md:flex-row md:gap-2 md:px-[1.3rem] md:py-2.5 md:text-[0.95rem] ${
                controlIndex === activeIndex
                  ? "text-secondary md:text-ink"
                  : "text-grey-2 hover:text-secondary md:hover:text-ink"
              }`}
            >
              <i className={`${icon} text-lg md:text-base`}></i>
              <span>{text}</span>
            </button>
          ))}
        </div>
      </nav>
      <button
        type="button"
        onClick={handleTheme}
        aria-label="Toggle light/dark theme"
        aria-pressed={isLight}
        className={`fixed right-[2.6%] top-[5%] z-10 hidden h-8 w-14 rounded-full p-1 shadow-[0_3px_15px_rgba(0,0,0,0.3)] transition-colors duration-300 md:block ${
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
