export default function Skill({ category, skills }) {
  return (
    <div>
      <p className="mb-[0.9rem] text-[0.95rem] font-semibold uppercase tracking-wide text-grey-2">
        {category}
      </p>
      <div className="flex flex-wrap gap-[0.7rem]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-[20px] border border-grey-4 bg-grey-6 px-[1.1rem] py-2 text-sm transition hover:border-secondary hover:text-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
