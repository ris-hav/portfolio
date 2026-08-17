import React from "react";

export default function Skill({ category, skills }) {
  return (
    <div className="skill-group">
      <p className="skill-category">{category}</p>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
