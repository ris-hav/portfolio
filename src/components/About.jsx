// import React from "react";
import skilldata from "../data/skilldata";
import aboutQuantifiable from "../data/aboutQuantifiable";
import timelineData from "../data/timelineData";
import Skill from "./Skill";

export default function About() {
  return (
    <>
      <section className="section sec2 about active" id="about">
        <div className="main-title">
          <h2>
            About <span>me</span>
            {/* <span className="bg-text">my stats</span> */}
          </h2>
        </div>
        <div className="about-container">
          <div className="left-about">
            <h4>Information about me</h4>
            <p>
              Frontend Developer with 5+ years building performant React and
              Angular applications for B2B SaaS products, including full
              mobile app delivery in React Native. I'm currently expanding
              into backend development with Node.js/NestJS, and I'm known for
              turning complex, hand-rolled UI into scalable, declarative
              systems.
              <br />
              <br />
              Beyond writing code, I care about what the team can build on
              after I'm done&mdash;documenting migrations in markdown guides,
              running internal sessions on patterns I've shipped, and leaving
              systems easier to extend than I found them.
            </p>
          </div>
          <div className="right-about">
            {aboutQuantifiable.map((about, AboutIndex) => (
              <div key={AboutIndex} className="about-item">
                <div className="abt-text">
                  <p className="large-text">{about.quantity}</p>
                  <p className="small-text">{about.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-stats">
          <h4 className="stat-title">My Skills</h4>
          <div className="skill-groups">
            {skilldata.map(({ category, skills }) => (
              <Skill key={category} category={category} skills={skills} />
            ))}
          </div>
        </div>
        <h4 className="stat-title">My Timeline</h4>
        <div className="timeline">
          {timelineData.map((timeline, timelineIndex) => (
            <div key={timelineIndex} className="timeline-item">
              <div className="tl-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <p className="tl-duration">{timeline.duration}</p>
              <h5>
                {timeline.role} <span> {` - ${timeline.company}`}</span>
              </h5>
              <p>{timeline.responsibilities}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
