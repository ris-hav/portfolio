import React from "react";

export default function Control() {
  return (
    <>
      <div class="controls">
        <div class="control control-1 active-btn" data-id="home">
          <i class="fa-solid fa-house"></i>{" "}
          <span class="tooltiptext">Home</span>
        </div>
        <div class="control control-2" data-id="about">
          <i class="fa-solid fa-user"></i>
          <span class="tooltiptext">About</span>
        </div>
        <div class="control control-3" data-id="portfolio">
          <i class="fa-solid fa-briefcase"></i>
          <span class="tooltiptext">Portfolio</span>
        </div>
        {/* <div class="control control-4" data-id="blogs">
        <i class="fa-solid fa-newspaper"></i
        ><span class="tooltiptext">Blog</span>
      </div>  */}
        <div class="control control-5" data-id="contact">
          <i class="fa-solid fa-envelope-open"></i>
          <span class="tooltiptext">Contact</span>
        </div>
      </div>
      <div class="theme-btn">
        <i class="fas fa-adjust"></i>
        {/* <span class="texttiptheme">Theme</span> */}
      </div>
    </>
  );
}
