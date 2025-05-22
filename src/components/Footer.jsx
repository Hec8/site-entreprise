import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">TechVision</div>
            <p className="text-gray-400 text-sm sm:text-base">
              Votre partenaire de confiance pour la transformation digitale.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>123 Rue de l'Innovation</li>
              <li>75000 Paris</li>
              <li>contact@techvision.com</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Suivez-nous</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} TechVision. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 