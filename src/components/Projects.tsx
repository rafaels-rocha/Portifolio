import React from 'react';
import { ExternalLink, Github, StickyNote  } from 'lucide-react';
import Acessomix from '../img/acessomix.png'; // Importa a imagem

const projects = [
  {
    title: "Analise de padrão em casa de aposta",
    description: "Uma analise do padrão do jogo AVIATOR com API da Openai.",
    image: "https://images.unsplash.com/photo-1653609848250-0de9437393f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Node.js", "Python", "MySQL"]
  },
  {
    title: "Laning page com React",
    description: "Projeto de lading page com REACT.",
    image: "https://images.unsplash.com/photo-1605725961202-18c2678ea41e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/rafaels-rocha/clinic_online",
    live: "https://rafaels-rocha.github.io/clinic_online/"
  },
 {
  title: "Sistema de Controle de Acesso",
  description: "Sistema real desenvolvido em Next.js para gerenciamento de ingressos e controle de entrada em eventos.",
  image: Acessomix,
  note: "Projeto real. Link e repositório não disponíveis por questões contratuais.",
  technologies: ["Next.js", "React", "Tailwind CSS", "MySQL", "Node.js"],
  github: "", 
  live: "",   
},
{
  title: "Sistema de Venda de Ingressos para Cinema",
  description: "Sistema desenvolvido com Next.js e Tailwind CSS para venda de ingressos e controle de sessões, com foco em interface moderna e intuitiva.",
  image: "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  github: "",
  live: "",
  note: "Projeto autoral inspirado em demandas reais de cinemas locais. Código e link indisponíveis por questões contratuais."
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
            {project.note && (
  <div className="flex items-start gap-2 text-sm italic text-gray-400 mb-4">
    <StickyNote className="w-4 h-4 mt-0.5" />
    <p>{project.note}</p>
  </div>
)}
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