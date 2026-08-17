import React from "react";
import "../styles/styles.css";
import profileImage from "../asset/img/profile.webp";
import cv from "../asset/Rishav_Saha_Frontend_Developer.pdf";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={profileImage} alt="pro-pic" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Rishav</span>. A React.js & Angular Specialist.
          </h1>
          <p>
            Frontend Developer with 5+ years building performant React and
            Angular applications for B2B SaaS products, including full
            mobile app delivery in React Native. Currently expanding into
            backend development with Node.js/NestJS. Known for turning
            complex, hand-rolled UI into scalable, declarative systems.
          </p>
          <div className="btn-con">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
