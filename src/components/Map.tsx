import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <section className="py-20 bg-gray-50" id="location">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Localização</h2>
          </div>
          <p className="text-gray-600">Venha me conhecer em Sua Cidade</p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.18159882534726!3d-22.906847737477492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f7!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1sen!2sbr!4v1709670724039!5m2!1sen!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Minha Localização"
          ></iframe>
        </div>
      </div>
    </section>
  );
}