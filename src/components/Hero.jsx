import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Solutions technologiques innovantes
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Nous transformons vos idées en réalité digitale avec des solutions sur mesure et une expertise de pointe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary">Découvrir nos services</button>
              <button className="btn btn-outline">En savoir plus</button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute -top-8 -left-8 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Hero"
              className="rounded-2xl shadow-xl relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 