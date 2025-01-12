import { FaReact, FaJs, FaGit, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiTypescript, SiExpo } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";

const skills = [
  { name: "React Native", icon: FaReact, color: "text-blue-500" },
  { name: "Expo", icon: SiExpo },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  { name: "Supabase", icon: RiSupabaseFill, color: "text-green-700" },
  {
    name: "Banco de Dados",
    icon: FaDatabase,
    color: "text-gray-700",
  },
  { name: "Git", icon: FaGit, color: "text-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 text-gray-800">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className={`text-5xl mb-2 ${skill.color}`} />
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
