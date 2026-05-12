import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Cofundador",
    company: "SigoPro",
    period: "Fevereiro 2026 - Presente",
    description: "Idealização e desenvolvimento de plataforma para otimização de processos operacionais em revendas AMBEV, nascida da identificação de GAPs durante atuação no Grupo Revalle.",
    responsibilities: [
      "Mapeamento de processos e identificação de oportunidades de melhoria em operações logísticas",
      "Transformação de necessidades reais do negócio em soluções sistêmicas aplicáveis",
      "Desenvolvimento de funcionalidades para controle de estoque, rastreabilidade e gestão operacional",
      "Definição de regras de negócio baseadas em experiência prática em revendas AMBEV",
      "Criação de ferramentas para melhorar eficiência do trabalho e tomada de decisão baseada em dados",
      "Implementação de soluções que reduzem falhas operacionais e aumentam produtividade"
    ]
  },
  {
    position: "Assistente de Controle",
    company: "Grupo Revalle - Revenda AMBEV",
    period: "Julho 2025 - Presente",
    description: "Gestão operacional completa em revenda AMBEV, com foco em controle de estoque e processos logísticos.",
    responsibilities: [
      "Gestão de estoque: controle de inventário, análise de divergências e otimização de materiais de giro",
      "Participação ativa em auditoria interna, colaborando para a classificação e adequação de processos da empresa",
      "Identificação de GAPs operacionais que originaram o desenvolvimento do SigoPro",
      "Controle de faturamento, emissão de notas fiscais e acompanhamento de movimentações operacionais",
      "Desenvolvimento de soluções sistêmicas para melhorar rastreabilidade de dados críticos",
      "Análise de indicadores operacionais e implementação de melhorias de eficiência"
    ]
  },
  {
    position: "Desenvolvedor Fullstack",
    company: "Edutec",
    period: "Novembro 2023 - Fevereiro 2025",
    description: "Desenvolvedor Fullstack focado na criação e manutenção de sites e aplicações web modernas, com soluções personalizadas.",
    responsibilities: [
      "Desenvolvimento com PHP e JavaScript, WordPress, React e Next.js",
      "Criação de interfaces responsivas e intuitivas alinhadas às necessidades do negócio",
      "Entregas rápidas e eficientes em projetos robustos e complexos",
      "Foco em performance, usabilidade e conversão das soluções desenvolvidas",
      "Melhoria de experiência do usuário e otimização de processos"
    ]
  },
  {
    position: "Operador de TI",
    company: "Petrobras",
    period: "Novembro 2022 - Julho 2024",
    description: "Suporte técnico e manutenção de sistemas internos, com forte compromisso em garantir a continuidade e eficiência das operações corporativas.",
    responsibilities: [
      "Identificação e resolução de incidentes de forma proativa",
      "Colaboração com diferentes áreas para manter os sistemas estáveis",
      "Minimização de interrupções e otimização de processos internos",
      "Contribuição para a experiência dos usuários finais",
      "Manutenção de infraestrutura de TI e suporte técnico"
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