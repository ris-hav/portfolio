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
    <article className="rounded-[22px] bg-grey-4 p-10 transition hover:-translate-y-0.5">
      <div className="mb-3 flex items-center justify-between text-[0.85rem] uppercase tracking-wide text-secondary">
        <span>{company}</span>
        <span>{period}</span>
      </div>
      <h3 className="mb-1 text-2xl md:text-[1.6rem]">{title}</h3>
      <p className="mb-5 text-[0.95rem] font-medium text-grey-2">{role}</p>
      <p className="mb-5 italic leading-[1.8rem] text-grey-1">{problem}</p>
      <ul className="mb-6 space-y-2">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="bullet-dot relative pl-6 leading-[1.8rem] text-grey-1"
          >
            {bullet}
          </li>
        ))}
      </ul>
      {impact.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-8">
          {impact.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-bold text-secondary">
                {value}
              </span>
              <span className="text-[0.85rem] uppercase tracking-wide text-grey-2">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(128,128,128,0.2)] pt-5">
        <div className="flex flex-wrap gap-[0.6rem]">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-[20px] bg-grey-6 px-[0.8rem] py-[0.3rem] text-[0.8rem] text-grey-1"
            >
              {item}
            </span>
          ))}
        </div>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.9rem] font-semibold text-secondary hover:underline"
          >
            View live <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </article>
  );
}
