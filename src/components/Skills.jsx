import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Langages de Programmation',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'R', level: 85 },
                { name: 'SQL', level: 90 },
                { name: 'DAX', level: 80 }
            ]
        },
        {
            category: 'Outils de Visualisation',
            skills: [
                { name: 'Power BI', level: 90 },
                { name: 'Tableau', level: 85 },
                { name: 'Matplotlib/Seaborn', level: 88 },
                { name: 'Plotly', level: 82 }
            ]
        },
        {
            category: 'Machine Learning',
            skills: [
                { name: 'Scikit-learn', level: 85 },
                { name: 'XGBoost', level: 80 },
                { name: 'TensorFlow', level: 75 },
                { name: 'Feature Engineering', level: 90 }
            ]
        },
        {
            category: 'Bases de Données',
            skills: [
                { name: 'PostgreSQL', level: 88 },
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 75 },
                { name: 'SQL Server', level: 82 }
            ]
        }
    ];

    return (
        <section className="section bg-gray-50">
            <div className="container">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Compétences Techniques</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Mon expertise technique au service de vos projets data
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary rounded-full h-2 transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="text-2xl mb-2">📊</div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">Microsoft Power BI</div>
                            <div className="text-xs sm:text-sm text-gray-600">Data Analyst Associate</div>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="text-2xl mb-2">🐍</div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">Python Institute</div>
                            <div className="text-xs sm:text-sm text-gray-600">PCAP Certified</div>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="text-2xl mb-2">☁️</div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">AWS</div>
                            <div className="text-xs sm:text-sm text-gray-600">Cloud Practitioner</div>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="text-2xl mb-2">📈</div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">Google Analytics</div>
                            <div className="text-xs sm:text-sm text-gray-600">Individual Qualification</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
