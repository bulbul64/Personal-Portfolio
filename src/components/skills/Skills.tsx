import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiDjango,
  SiPostman,
  SiGithubactions,
  SiLinux,
} from 'react-icons/si';

const frontendSkills = [
  { id: 1, name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { id: 4, name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { id: 5, name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { id: 6, name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
  { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { id: 8, name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { id: 9, name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

const backendSkills = [
  { id: 10, name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { id: 11, name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { id: 12, name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { id: 13, name: 'Python', icon: <FaPython className="text-blue-400" /> },
  { id: 14, name: 'Django', icon: <SiDjango className="text-green-800" /> },
  { id: 15, name: 'Java', icon: <FaJava className="text-red-600" /> },
  { id: 16, name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  { id: 17, name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { id: 18, name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-600" /> },
  { id: 19, name: 'Linux', icon: <SiLinux className="text-gray-500" /> },
  { id: 20, name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
];

export default function SkillsSection() {
  const [tab, setTab] = useState<'frontend' | 'backend'>('frontend');
  const [prevTab, setPrevTab] = useState<'frontend' | 'backend' | null>(null);

  const skills = tab === 'frontend' ? frontendSkills : backendSkills;
  const slideDirection = prevTab === 'frontend' && tab === 'backend' ? 1 : -1;

  const containerVariants = {
    hidden: { opacity: 0, x: 50 * slideDirection },
    show: { opacity: 1, x: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, x: -50 * slideDirection },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const handleTabChange = (newTab: 'frontend' | 'backend') => {
    if (newTab !== tab) {
      setPrevTab(tab);
      setTab(newTab);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">#Skills</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Technologies & tools I use for modern web development.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-5">
        {['frontend', 'backend'].map((t) => (
          <button
            key={t}
            onClick={() => handleTabChange(t as 'frontend' | 'backend')}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              tab === t
                ? 'bg-amber-400 text-black shadow-sm'
                : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black'
            }`}
          >
            {t === 'frontend' ? 'Frontend' : 'Backend / Tools'}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center p-3 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-amber-400 hover:text-black transition-all duration-200 relative overflow-hidden h-28"
            >
              {/* Floating sparkle */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    x: [0, 6, -3, 0],
                    y: [0, -6, 3, 0],
                    opacity: [0.7, 0.2, 0.7, 0.1],
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                />
              </motion.div>

              {/* Icon & Name */}
              <div className="text-2xl sm:text-3xl mb-1 z-10">{skill.icon}</div>
              <p className="text-xs sm:text-sm text-center z-10">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
