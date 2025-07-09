import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">EFEE Expertise</div>
            <p className="text-gray-400 text-sm sm:text-base">
              Transformez vos données en avantage concurrentiel avec un expert data analyst.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Compétences</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Portfolio</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Analyse exploratoire</li>
              <li>Visualisation de données</li>
              <li>Machine Learning</li>
              <li>Business Intelligence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <p>📧 contact@datainsights.fr</p>
              <p>💼 LinkedIn: /in/dataanalyste</p>
              <p>📱 GitHub: /dataanalyste</p>
              <p>⏰ Lun-Ven, 9h-18h</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} EFEE Expertise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 