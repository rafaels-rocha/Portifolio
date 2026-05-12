import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import myImage from '../img/profile.jpg'; // Importa a imagem


export default function Header() {
  return (
    <header className="bg-black text-white min-h-[600px] flex items-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Olá, eu sou<br />
              <span className="text-blue-400">Rafael Rocha Santos</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              Analista de Processos | Gestão Operacional | Soluções em Logística
            </p>
            <p className="text-gray-400 text-base mb-8">
              Especialista em operações logísticas e gestão de estoque em revendas AMBEV, com foco em identificação de GAPs operacionais 
              e desenvolvimento de soluções sistêmicas. Co-fundador da SIGOPRO, plataforma criada para otimizar processos, 
              melhorar rastreabilidade de dados e aumentar a eficiência operacional em distribuidoras. 
              Experiência em auditoria, controle de estoque e transformação digital de processos.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rafaels-rocha" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rafaelrochasantos/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rafaels.rocha@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <div className="flex items-center text-blue-400">
                <MapPin size={24} className="mr-2" />
                <span>Alagoinhas-BA</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-400/10 rounded-lg p-8 w-4/5">
              <img
                src={myImage}
                alt="Developer workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}