import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const educationItems = [
  {
    type: "Graduação",
    title: "Sistema da Informação",
    institution: "Estácio",
    period: "2023 - 2026",
    description: "Formação em desenvolvimento de software com foco em tecnologias web e mobile."
  },
  {
    type: "Técnico",
    title: "Técnico em T.I",
    institution: "SENAI",
    period: "2022 - 2024",
    description: "Curso completo de Técnico em T.I"
  }
];

const certifications = [
  {
    title: "Técnico em T.I",
    institution: "SENAI",
    year: "2022 - 2024",
    description: "Curso completo de Técnico em T.I"
  },
  {
    title: "React.js Avançado",
    institution: "Nome do Curso",
    year: "2023",
    description: "Especialização em React.js e suas melhores práticas"
  }
];

export default function Education() {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Educação</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Formação Acadêmica</h3>
            </div>
            {educationItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-2">{item.institution}</p>
                <p className="text-blue-500 mb-2">{item.period}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Certificações</h3>
            </div>
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="text-xl font-semibold mb-2">{cert.title}</h4>
                <p className="text-gray-600 mb-2">{cert.institution}</p>
                <p className="text-blue-500 mb-2">{cert.year}</p>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}