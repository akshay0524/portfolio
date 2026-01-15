import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [

    {
        title: 'crypto-verse',
        description: 'This provides realtime info about the top 10 crypto currencies in the world and you can search any crypto currencies you need to know.',
        tags: ['React', 'TailwindCss', 'CoinGecko API'],
        demo: 'https://crypto-verse-ashy-seven.vercel.app',
        github: 'https://github.com/akshay246908/crypto-verse',
        color: 'bg-purple-500'
    },
    {
        title: 'Event Management System ',
        description: 'An event management system built with React , tailwindcss and mongodb.It is used for creating and managing events.',
        tags: ['React', 'TailwindCss', 'MongoDB', 'Node.js', 'Express.js'],
        demo: 'https://akshay0524.github.io/akeventz/',
        github: 'https://github.com/akshay0524/akeventz',
        color: 'bg-pink-500'
    },
    {
        title: 'To do list',
        description: 'A to do list built with React and TailwindCSS.',
        tags: ['React', 'TailwindCss'],
        demo: 'https://todo-list-eight-psi-10.vercel.app',
        github: 'https://github.com/akshay0524/todoList',
        color: 'bg-green-500'
    },
    {
        title: 'Chat Application',
        description: 'Real-time chat application currently in development. Features will include live messaging, user authentication, and group chats.',
        tags: ['React', 'Node.js', 'Socket.io', 'Building...'],
        demo: '#',
        github: '#',
        color: 'bg-indigo-500',
        isComingSoon: true
    },
];

const Projects = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-[#2d2d2d] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300">
                    <div className={`h-32 ${project.color} flex items-center justify-center`}>
                        <span className="text-white font-bold opacity-50 text-4xl">{project.title[0]}</span>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            {project.isComingSoon ? (
                                <button disabled className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-2 rounded-lg text-center text-sm font-semibold cursor-not-allowed">
                                    🚧 Coming Soon
                                </button>
                            ) : (
                                <>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-center text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                        <ExternalLink size={14} /> Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg text-center text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                                        <Github size={14} /> Code
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
