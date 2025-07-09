import React from 'react';

const About = () => {
  return (
    <section id="apropos" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">À propos de moi</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Data Analyste passionné avec plus de 5 ans d'expérience dans l'analyse de données et l'intelligence d'affaires.
              Je transforme des données complexes en insights stratégiques pour aider les entreprises à optimiser leurs performances
              et prendre des décisions data-driven.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto md:mx-0">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                <div className="text-sm sm:text-base text-gray-600">Années d'expérience</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Projets complétés</div>
              </div>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Data Analyst"
              className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 