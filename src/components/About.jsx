import React from 'react';

const About = () => {
  return (
    <section id="apropos" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">À propos de nous</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              TechVision est une entreprise innovante spécialisée dans les solutions technologiques de pointe. Notre équipe d'experts est dédiée à vous aider à atteindre vos objectifs digitaux.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto md:mx-0">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Années d'expérience</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">1000+</div>
                <div className="text-sm sm:text-base text-gray-600">Projets réalisés</div>
              </div>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="À propos"
              className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 