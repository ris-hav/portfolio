import React, { useEffect } from "react";
import "../styles/styles.css";

export default function Port() {
  useEffect(() => {
    const handleButtonClick = (e) => {
      const selectedBtn = e.target;
      const activeBtn = document.querySelector(".active-btn");
      activeBtn.classList.remove("active-btn");
      selectedBtn.classList.add("active-btn");
    };

    const handleSectionClick = (e) => {
      const id = e.target.dataset.id;
      if (id) {
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
      }
    };

    const handleThemeToggle = () => {
      document.body.classList.toggle("light-mode");
    };

    const sectBtns = document.querySelectorAll(".controls");
    const sectBtn = document.querySelectorAll(".control");
    const allSections = document.querySelector(".main-content");
    const themeBtn = document.querySelector(".theme-btn");

    sectBtn.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    allSections.addEventListener("click", handleSectionClick);

    themeBtn.addEventListener("click", handleThemeToggle);

    return () => {
      sectBtn.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });

      allSections.removeEventListener("click", handleSectionClick);
      themeBtn.removeEventListener("click", handleThemeToggle);
    };
  }, []);

  return <div>{/* Your JSX code */}</div>;
}
