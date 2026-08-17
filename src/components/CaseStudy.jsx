import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CaseStudy({
  company,
  role,
  period,
  title,
  problem,
  bullets,
  impact,
  tech,
  demoUrl,
}) {
  return (
    <article className="case-study">
      <div className="case-study-meta">
        <span className="case-study-company">{company}</span>
        <span className="case-study-period">{period}</span>
      </div>
      <h3 className="case-study-title">{title}</h3>
      <p className="case-study-role">{role}</p>
      <p className="case-study-problem">{problem}</p>
      <ul className="case-study-bullets">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      {impact.length > 0 && (
        <div className="case-study-impact">
          {impact.map(({ value, label }) => (
            <div key={label} className="impact-item">
              <span className="impact-value">{value}</span>
              <span className="impact-label">{label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="case-study-footer">
        <div className="case-study-tech">
          {tech.map((item) => (
            <span key={item} className="tech-tag">
              {item}
            </span>
          ))}
        </div>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-link"
          >
            View live <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </article>
  );
}
