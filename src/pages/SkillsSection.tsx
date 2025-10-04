import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  { id: 4, name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  { id: 6, name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
  { id: 7, name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { id: 8, name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

export default function SkillsSection() {
  return (
    <div className="p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h4 className="text-3xl font-bold mb-3">#My Skills</h4>
        <p className="text-gray-400 text-sm">
          Technologies I use to build modern and responsive web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-6 bg-[#111] rounded-xl shadow hover:shadow-amber-400/30 transition"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-gray-200 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
