import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transformez vos données en insights stratégiques
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Data Analyste expérimenté, je vous aide à exploiter le plein potentiel de vos données pour prendre des décisions éclairées et optimiser vos performances business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary">Voir mes projets</button>
              <button className="btn btn-outline">Discutons de vos besoins</button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute -top-8 -left-8 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Data Analysis"
              className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 