export default function Skill({ category, skills }) {
  return (
    <div>
      <p className="mb-4 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-grey-2">
        {category}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-full bg-grey-4 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-secondary hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
