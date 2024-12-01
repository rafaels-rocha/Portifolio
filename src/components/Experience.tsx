import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Desenvolvedor Full Stack",
    company: "EDUTEC",
    period: "2023 - Presente",
    description: "Desenvolvimento e manutenção de aplicações web .",
    responsibilities: [
      "Implementação de novas funcionalidades",
      "Otimização de performance",
      "Integração com APIs",
      "Desenvolvimento de soluções responsivas"
    ]
  },
  {
    position: "Técnico em T.I",
    company: "Petrobras",
    period: "2022 - 2024",
    description: "Responsável pela manutenção de infraestrutura de T.I, garantindo a estabilidade e eficiência das operações.",
    responsibilities: [
      "Manutenção de redes e computadores",
      "Diagnóstico e solução de problemas técnicos",
      "Suporte aos usuários para resolução de problemas de software e hardware",
      "Monitoramento e otimização do desempenho da infraestrutura de T.I"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiência Profissional</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-blue-500">{exp.period}</p>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2">Principais responsabilidades:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}