import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">TechVision</div>
          
          {/* Menu mobile */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#apropos" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <button className="btn btn-primary">Nous contacter</button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#apropos" className="text-gray-600 hover:text-primary transition-colors">À propos</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
              <button className="btn btn-primary w-full">Nous contacter</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 