import React from "react";

export default function ImageSlider({ src, name, file }) {
  return (
    <div class="portfolio-item">
      <img class="image" src={src} draggable="false" />  
      <div class="hover-items">
        <h3>{name}</h3>
        <div class="icons">
          <a
            href={`https://ris-hav.github.io/${file}/`}
            class="icon"
            target="_blank"
          >
            <i class="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={`https://github.com/ris-hav/${file}`}
            class="icon"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
