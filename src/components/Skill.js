import React from "react";

export default function Skill({ name, knowledge }) {
  return (
    <>
      <div class="progress-bar">
        <p class="prog-title">{name}</p>
        <div class="progress-con">
          <p class="prog-text">{knowledge}</p>
          <div class="progress">
            <span style={{ width: `${knowledge}` }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
