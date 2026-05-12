import React from 'react';
import { TrendingUp, Package, BarChart3, CheckCircle, ExternalLink } from 'lucide-react';

const sigoproFeatures = [
  {
    icon: <Package className="w-8 h-8 text-blue-500" />,
    title: "Gestão de Estoque Inteligente",
    description: "Controle preciso de inventário, rastreabilidade de produtos e alertas automáticos de divergências."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Otimização de Processos",
    description: "Automação de rotinas operacionais que eliminam retrabalho e aumentam a eficiência do time."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    title: "Análise de Dados em Tempo Real",
    description: "Dashboards e relatórios que facilitam a tomada de decisão baseada em dados concretos."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    title: "Compliance e Auditoria",
    description: "Estrutura preparada para auditorias com rastreabilidade completa de operações."
  }
];

const results = [
  "Redução significativa de divergências de estoque",
  "Aumento da produtividade da equipe operacional",
  "Melhoria na rastreabilidade de dados críticos",
  "Facilita processos de auditoria e classificação",
  "Integração eficiente entre setores da operação"
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Projeto Principal</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Solução desenvolvida a partir da identificação de GAPs reais na operação de revendas AMBEV
        </p>

        {/* SigoPro Hero Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-lg mr-4">
                <Package className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">SigoPro</h3>
                <p className="text-blue-100 text-xl">Sistema de Gestão e Otimização de Processos</p>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              Plataforma desenvolvida para resolver desafios reais identificados durante a atuação no Grupo Revalle (revenda AMBEV). 
              O SigoPro nasceu da necessidade de melhorar a eficiência operacional, facilitar a rastreabilidade de dados 
              e proporcionar controle preciso sobre processos críticos em distribuidoras.
            </p>
            <div className="mt-6">
              <a 
                href="https://sigopro.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Acessar SigoPro
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="p-12">
            <h4 className="text-2xl font-bold mb-8 text-gray-800">Funcionalidades Principais</h4>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {sigoproFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">{feature.title}</h5>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-800">Resultados e Impactos</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-600 italic">
                <strong>Contexto:</strong> O SigoPro é resultado direto da experiência prática em operações logísticas 
                e da identificação de oportunidades de melhoria durante processos de auditoria e gestão de estoque. 
                Representa a transformação de conhecimento operacional em solução tecnológica aplicável.
              </p>
            </div>
          </div>
        </div>

        {/* Stack Técnico */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h4 className="text-xl font-bold mb-6 text-center">Stack Tecnológico</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Nest.js", "Node.js", "MySQL", "Tailwind CSS", "REST APIs"].map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}