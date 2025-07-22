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
              Stepped into the corporate world as a Software Engineer. I have a
              strong foundation in JavaScript and React as well as experience
              working with modern frontend libraries such as Tailwind CSS,
              Material UI and React Query.
              <br />
              <br />I believe that collaboration and communication are key to
              delivering successful projects, and I work closely with clients
              and stakeholders to ensure that their vision is realized in the
              final product.
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
          <div className="progress-bars">
            {skilldata.map((skill, skillIndex) => {
              const { name, knowledge } = skill;
              return (
                <Skill key={skillIndex} name={name} knowledge={knowledge} />
              );
            })}
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
