import React from 'react';

const Skills = () => {
    const skills = {
        'Frontend': ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Redux', 'Vue.js'],
        'Backend': ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'GraphQL'],
        'Tools': ['Git', 'Docker', 'Figma', 'Jest', 'Vite'],
    };

    return (
        <div className="p-8 h-full">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Technical Proficiency</h2>

            <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-xl font-semibold mb-3 text-blue-500">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <div key={skill} className="px-4 py-2 bg-white dark:bg-white/10 rounded-full shadow-sm border border-gray-100 dark:border-white/5 hover:scale-105 transition-transform cursor-default">
                                    <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
