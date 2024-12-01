import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Analise de padrão em casa de aposta",
    description: "Uma analise do padrão do jogo AVIATOR com Tensoflow.",
    image: "https://images.unsplash.com/photo-1653609848250-0de9437393f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Node.js", "Python", "MySQL"]
  },
  {
    title: "Laning page de cadastro e login",
    description: "Projeto de Cadastro com o layout construído com Bootstrap e o login sendo rodado em JavaScript sem Back-end.",
    image: "https://images.unsplash.com/photo-1604403428907-673e7f4cd341?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Html", "CSS", "JavaScript"],
    github: "https://github.com/rafaels-rocha/Login-Cadastro-Bootstrap",
    live: "https://rafaels-rocha.github.io/Login-Cadastro-Bootstrap/"
  }
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Código
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}