import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import { Button } from '../components/ui/button';

export default function ProjectsSection() {
  if (!projectsData || projectsData.length === 0)
    return <p className="text-center text-gray-400 mt-10">No projects yet.</p>;

  return (
    <section id="projects" className="py-16 px-4 sm:px-10 md:px-20 lg:px-24 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 text-center mb-10">#Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p) => (
          <motion.div
            key={p.id}
            className="p-5 rounded-xl flex flex-col justify-between
                       bg-white/5 dark:bg-gray-900/40
                       shadow-md dark:shadow-gray-800
                       hover:shadow-lg hover:shadow-amber-400/40
                       hover:scale-105 transition-all duration-300 h-[300px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-2">
              {p.stack.split(',').map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full
                             bg-amber-400/20 text-amber-400
                             dark:bg-amber-400/30 dark:text-amber-300
                             hover:brightness-125 transition-all duration-200"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{p.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{p.description}</p>
            </div>

            {/* Buttons */}
            <div className="mt-3 flex gap-2 flex-wrap">
              <Button
                asChild
                className="bg-amber-400 text-black dark:text-black text-sm px-3 py-1 rounded-md hover:bg-amber-500 transition-colors flex-1"
              >
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </Button>

              <Button
                asChild
                className="bg-amber-400 text-black dark:text-black text-sm px-3 py-1 rounded-md hover:bg-amber-500 transition-colors flex-1"
              >
                <a target="_blank" rel="noopener noreferrer">
                  Live Link ↗
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
