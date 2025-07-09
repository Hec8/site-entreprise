import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Collaborons ensemble</h2>
          <p className="text-lg sm:text-xl text-gray-600">Vous avez un projet data ? Discutons de vos besoins !</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Entreprise"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
            />
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base">
              <option value="">Type de projet...</option>
              <option value="analysis">Analyse de données</option>
              <option value="dashboard">Tableau de bord</option>
              <option value="ml">Machine Learning</option>
              <option value="bi">Business Intelligence</option>
              <option value="other">Autre</option>
            </select>
            <textarea
              placeholder="Décrivez votre projet ou vos besoins en analyse de données..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full text-sm sm:text-base">
              Envoyer ma demande
            </button>
          </form>

          {/* Informations de contact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-gray-600 text-sm sm:text-base break-all sm:break-normal">contact@datainsights.fr</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>
                <p className="text-gray-600 text-sm sm:text-base break-all sm:break-normal">linkedin.com/in/dataanalyste</p>
              </div>
              <div>
                <div className="text-2xl mb-2">⏰</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Disponibilité</h4>
                <p className="text-gray-600 text-sm sm:text-base">Lun-Ven, 9h-18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 