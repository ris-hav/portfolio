import React from "react";
import "../styles/styles.scss";
import profileImage from "../asset/img/profile.webp";
import cv from "../asset/Rishav_Saha_Frontend_Developer.pdf";
import { FaDownload, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="section sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={profileImage} alt="Rishav Saha" />
          </div>
        </div>
        <div className="right-header">
          <p className="eyebrow">Senior Frontend Developer</p>
          <h1 className="name">
            Hi, I'm <span>Rishav</span>. I build React &amp; Angular
            applications that scale.
          </h1>
          <p>
            5+ years shipping performant frontends for B2B SaaS
            products&mdash;from a multi-tenant Angular platform used across
            Italy to a React Native app built from scratch. I turn complex,
            hand-rolled UI into systems other engineers can actually build on.
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
            <a
              href="mailto:saharishav53@gmail.com"
              className="secondary-btn"
              aria-label="Email Rishav"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/rssh/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              aria-label="Rishav's LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
