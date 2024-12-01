import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Localização</h4>
                    <p className="text-gray-600">Alagoinhas - BA</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">rafaels.rocha@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Telefone</h4>
                    <p className="text-gray-600">(75) 9 9900-1134</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/rafaels-rocha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rafaelrochasantos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-8">Localização</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62755.84741961454!2d-38.45041535136719!3d-12.133894899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716a015567d8c3b%3A0x6dd2e10c5ca8e214!2sAlagoinhas%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1709671893784!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Minha Localização"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}