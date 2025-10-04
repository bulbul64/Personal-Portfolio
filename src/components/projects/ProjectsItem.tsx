import { Button } from "@/components/ui/button";
import projectsData from "@/data/projectsData";

export default function ProjectsItem() {
  if (!projectsData || projectsData.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No projects available at the moment.
      </p>
    );
  }

  return (
    <section id="projects" className="p-10 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">
        #Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-amber-400/30 transition"
          >
            {/* Tech stack */}
            <h6 className="text-sm text-amber-400 mb-2">{project.stack}</h6>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            {/* GitHub Button */}
            <Button
              asChild
              className="bg-amber-400 text-black hover:bg-amber-500 transition"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
