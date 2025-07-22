import React from "react";
import controlData from "../data/controlData";

function Control({ activeIndex, setActiveIndex, setIsLight }) {
  // console.log("control called");

  function handleControl(index) {
    setActiveIndex(index);
  }

  function handleTheme() {
    setIsLight((prevTheme) => !prevTheme);
  }

  return (
    <>
      <div className="controls">
        {controlData.map(({ text, icon }, controlIndex) => (
          <div
            onClick={() => handleControl(controlIndex)}
            key={controlIndex}
            className={`control control-${controlIndex + 1} ${
              controlIndex === activeIndex ? "active-btn" : ""
            }`}
            data-id={text.toLowerCase()}
          >
            <i className={icon}></i> <span className="tooltiptext">{text}</span>
          </div>
        ))}
      </div>
      <div className={`theme-btn `} onClick={handleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
}

export default React.memo(Control);
