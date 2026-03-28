import { projects } from "../../data/portfolio";

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
