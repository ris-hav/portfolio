import React from 'react';
import '../styles/styles.css';
import profileImage from '../img/test1.png';
import cv from '../cv.pdf'
import { FaDownload } from 'react-icons/fa';

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
            I specialize in creating beautiful, responsive websites and
            applications that provide a seamless user experience. Driven and
            creative individual with a passion for innovation and
            problem-solving. Outside of work, I enjoy exploring new technologies
            and engaging with the tech community.
          </p>
          <div className="btn-con">
            <a href={cv} target="_blank" className="main-btn">
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
