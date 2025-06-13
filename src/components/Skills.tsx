import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: ["PHP", "Next.js", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: ["MySQL","Postgresql"]
  },
  {
    category: "Others",
    icon: <Code2 className="w-6 h-6" />,
    technologies: ["Git"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Minhas Habilidades</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-gray-600">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}