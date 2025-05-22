import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contactez-nous</h2>
          <p className="text-lg sm:text-xl text-gray-600">Nous sommes là pour répondre à vos questions</p>
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
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full text-sm sm:text-base">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 