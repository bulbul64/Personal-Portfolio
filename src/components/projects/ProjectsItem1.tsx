import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/project_img1.png",
    stack: "HTML • SCSS • Python • Flask",
    title: "Landing Page",
    description: "Modern responsive landing page design",
    live: "#",
    cached: "#",
  },
  {
    id: 2,
    image: "/project_img2.png",
    stack: "React • Tailwind • Node.js",
    title: "Portfolio Website",
    description: "Showcase of my personal projects & skills",
    live: "#",
    cached: "#",
  },
  {
    id: 3,
    image: "/project_img3.png",
    stack: "HTML • SCSS • Python • Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting platform",
    live: "#",
    cached: "#",
  },
];

export default function ProjectsItem1() {
  return (
    <section className="p-10">
      {/* Header */}
      <div className="flex justify-between items-center text-2xl mb-10">
        <h4 className="font-bold text-amber-400">#Projects</h4>
        <div className="flex items-center gap-3 text-lg text-amber-400 hover:text-amber-300 transition">
          <a href="">View all</a>
          <FaLongArrowAltRight />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#111] rounded-xl border border-gray-800 hover:border-amber-400/50 shadow-md hover:shadow-amber-400/20 overflow-hidden transform hover:-translate-y-2 transition duration-300"
          >
            {/* Image with Overlay */}
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold transition">
                {project.title}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h6 className="text-sm text-amber-400">{project.stack}</h6>
              <p className="font-bold text-lg">{project.title}</p>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex gap-3 mt-4">
                <Button className="bg-amber-400 text-black hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-400/40 transition">
                  Live
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-black hover:bg-gray-800 hover:text-white transition"
                >
                  Cached
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
