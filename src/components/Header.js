import React from "react";
import "../styles/styles.css";
import profileImage from "../asset/img/profile.webp";
// import profileImage from '../img/original.png';
import cv from "../asset/Rishav_Saha_Frontend_Developer_CV.pdf";
import { FaDownload } from "react-icons/fa";
// import FaDownload from 'react-icons/fa/FaDownload';

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
            Hi, I'm <span>Rishav</span>. A Front-end Developer.
          </h1>
          <p>
            Frontend Developer with serious problem-solving capabilities and
            team collaboration experience in delivering efficient solutions.
            Specializes in writing clean, optimized code with focus on
            performance and maintainability.. Driven and creative individual
            with a passion for innovation and problem-solving. Outside of work,
            I enjoy exploring new technologies and engaging with the tech
            community.
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
