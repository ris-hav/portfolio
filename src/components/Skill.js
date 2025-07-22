import React from "react";

export default function Skill({ name, knowledge }) {
  return (
    <>
      <div className="progress-bar">
        <p className="prog-title">{name}</p>
        <div className="progress-con">
          <p className="prog-text">{knowledge}</p>
          <div className="progress">
            <span style={{ width: `${knowledge}` }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
