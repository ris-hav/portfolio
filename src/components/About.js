import React from "react";
import skilldata from "./skilldata";
import Skill from "./Skill";

export default function About() {
  return (
    <>
      <section class="section sec2 about" id="about">
        <div class="main-title">
          <h2>
            About <span>me</span>
            <span class="bg-text">my stats</span>
          </h2>
        </div>
        <div class="about-container">
          <div class="left-about">
            <h4>Information about me</h4>
            <p>
              Stepped into the corporate world as a Software Engineer. I have a
              strong foundation in HTML, CSS and JavaScript, as well as
              experience working with modern frontend frameworks such as React,
              Bootstrap and jQuery.
              <br />
              <br />I believe that collaboration and communication are key to
              delivering successful projects, and I work closely with clients
              and stakeholders to ensure that their vision is realized in the
              final product.
            </p>
            {/* <div class="btn-con">
              <a href="" class="main-btn">
                <span class="btn-text">Download CV</span>
                <span class="btn-icon"
                  ><i class="fa-solid fa-download"></i
                ></span>
              </a>
            </div>  */}
          </div>
          <div class="right-about">
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">30+</p>
                <p class="small-text">
                  React <br />
                  Projects
                </p>
              </div>
            </div>
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">2.5</p>
                <p class="small-text">
                  Years of <br />
                  Experience
                </p>
              </div>
            </div>
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">80+</p>
                <p class="small-text">
                  Coded <br />
                  iOS siri shortcuts
                </p>
              </div>
            </div>
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">4</p>
                <p class="small-text">
                  Happy <br />
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-stats">
          <h4 class="stat-title">My Skills</h4>
          <div class="progress-bars">
            {skilldata.map((sk) => {
              const { name, knowledge } = sk;
              return <Skill name={name} knowledge={knowledge} />;
            })}
          </div>
        </div>
        <h4 class="stat-title">My Timeline</h4>
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Jul 2020 - Dec 2022</p>
            <h5>
              Programmer Analyst <span> - cognizant technology solutions</span>
            </h5>
            <p>
              I've developed user interfaces using HTML, CSS, and JavaScript,
              automated web testing using Selenium, and developed custom
              solutions using SAP ABAP. I have a strong understanding of these
              technologies and how they can be leveraged to create efficient and
              effective solutions.
              {/* I have extensive experience working on
              projects that utilize a variety of technologies, including
              frontend development, Selenium automation testing, and SAP ABAP.
              My work in frontend development has focused on creating visually
              appealing and user-friendly websites and applications using HTML,
              CSS, and JavaScript. In addition, I have expertise in using
              Selenium to automate functional testing and regression testing of
              web applications. Finally, I have worked extensively with SAP ABAP
              to develop custom solutions and integrations for clients in a
              variety of industries.  */}
            </p>
          </div>
          <div class="timeline-item">
            {/* remove the div tl-icon if you don't want igt for the other items  */}
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Apr 2018 - Jun 2018</p>
            <h5>
              Intern <span> - Tata Motors</span>
            </h5>
            <p>
              I have experience working on projects that involved utilizing
              Python to manipulate CSV files for data analysis, conducting
              energy audits to assess building efficiency, and volunteering for
              World Environment Day to promote environmental awareness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
