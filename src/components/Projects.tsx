import { projects } from "../../data/portfolio";

const CrackedEgg = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto">
    <style>{`
      @keyframes wobble {
        0%,100%{transform:rotate(0deg)}
        15%{transform:rotate(-8deg)}
        35%{transform:rotate(8deg)}
        55%{transform:rotate(-6deg)}
        75%{transform:rotate(6deg)}
        90%{transform:rotate(-3deg)}
      }
      @media (prefers-reduced-motion: no-preference) {
        .egg { animation: wobble 1.4s ease-in-out infinite; transform-origin: 100px 155px; }
      }
    `}</style>
    <ellipse cx="100" cy="155" rx="42" ry="12" fill="#2C2C2A" opacity="0.08"/>
    <g className="egg">
      <ellipse cx="100" cy="100" rx="55" ry="68" fill="#9FE1CB"/>
      <ellipse cx="100" cy="100" rx="55" ry="68" fill="none" stroke="#085041" strokeWidth="1.5"/>
      <circle cx="78" cy="88" r="6" fill="#5DCAA5"/>
      <circle cx="88" cy="115" r="4" fill="#5DCAA5"/>
      <circle cx="68" cy="108" r="3" fill="#5DCAA5"/>
      <circle cx="122" cy="85" r="5" fill="#5DCAA5"/>
      <circle cx="118" cy="115" r="4" fill="#5DCAA5"/>
      <polyline points="94,48 100,60 91,70 100,84 92,95" fill="none" stroke="#085041" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="104,50 109,62 102,72 110,85" fill="none" stroke="#085041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

export const Projects = () => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                <span className="text-red-500">Monster</span>
                <span className="text-blue-500"> Study Tracker</span>
              </h3>
              <CrackedEgg />
            </div>
            <div className="mt-2 text-sm leading-relaxed text-gray-600 space-y-1">
              {project.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
