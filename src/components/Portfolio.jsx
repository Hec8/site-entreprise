import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Analyse des Ventes E-commerce',
            description: 'Analyse complète des données de ventes pour identifier les tendances saisonnières et optimiser la stratégie produit.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
            metrics: 'Augmentation de 25% du ROI'
        },
        {
            title: 'Dashboard BI Marketing',
            description: 'Tableau de bord interactif pour suivre les KPIs marketing et mesurer l\'efficacité des campagnes.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            technologies: ['Power BI', 'DAX', 'SQL Server'],
            metrics: 'Réduction de 40% du temps de reporting'
        },
        {
            title: 'Modèle Prédictif Churn',
            description: 'Développement d\'un modèle de machine learning pour prédire et réduire le taux d\'attrition client.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            technologies: ['Python', 'Scikit-learn', 'XGBoost'],
            metrics: 'Prédiction avec 89% de précision'
        },
        {
            title: 'Optimisation Supply Chain',
            description: 'Analyse des données logistiques pour optimiser la chaîne d\'approvisionnement et réduire les coûts.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            technologies: ['R', 'Tableau', 'PostgreSQL'],
            metrics: 'Économies de 15% sur les coûts logistiques'
        }
    ];

    return (
        <section id="portfolio" className="section bg-white">
            <div className="container">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Portfolio</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Découvrez quelques-uns de mes projets récents et leurs impacts business
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-green-600">{project.metrics}</span>
                                    <button className="text-primary hover:text-primary/80 font-medium">
                                        Voir le détail →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
