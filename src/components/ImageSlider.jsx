export default function ImageSlider({ src, name, file, demoUrl, repoUrl }) {
  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-apple transition sm:h-[50vmin] sm:w-[40vmin]">
      <img
        className="image h-[300px] w-full rounded-[20px] object-cover object-[100%_50%] transition group-hover:scale-110 group-hover:opacity-10 sm:h-[50vmin] sm:w-[40vmin]"
        src={src}
        draggable="false"
        alt={name}
      />
      <div className="absolute left-0 top-0 flex h-[300px] w-full scale-y-[0.8] flex-col items-center justify-center rounded-[20px] bg-[linear-gradient(to_bottom,var(--port-hover-start),var(--port-hover-end))] opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 sm:h-[50vmin] sm:w-[40vmin]">
        <h3 className="mb-10 text-2xl text-ink">{name}</h3>
        <div className="flex items-center justify-center">
          <a
            href={demoUrl ?? `https://ris-hav.github.io/${file}/`}
            className="group/icon mx-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary transition hover:bg-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-up-right-from-square text-2xl text-ink transition group-hover/icon:text-primary"></i>
          </a>
          <a
            href={repoUrl ?? `https://github.com/ris-hav/${file}`}
            className="group/icon mx-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary transition hover:bg-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl text-ink transition group-hover/icon:text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
