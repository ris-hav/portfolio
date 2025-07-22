import React from "react";

export default function ImageSlider({ src, name, file }) {
  return (
    <div className="portfolio-item">
      <img className="image" src={src} draggable="false" alt={name} />
      <div className="hover-items">
        <h3>{name}</h3>
        <div className="icons">
          <a
            href={`https://ris-hav.github.io/${file}/`}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={`https://github.com/ris-hav/${file}`}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
