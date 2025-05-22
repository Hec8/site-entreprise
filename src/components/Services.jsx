import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création de sites web modernes et applications web sur mesure.',
      icon: '🌐'
    },
    {
      title: 'Applications Mobiles',
      description: 'Développement d\'applications iOS et Android innovantes.',
      icon: '📱'
    },
    {
      title: 'Intelligence Artificielle',
      description: 'Solutions d\'IA pour automatiser et optimiser vos processus.',
      icon: '🤖'
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Des solutions adaptées à vos besoins</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 