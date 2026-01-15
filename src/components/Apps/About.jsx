import React, { useState } from 'react';
import { User, FileText, Briefcase, Trash2, Github, Linkedin, Mail, MapPin, Calendar, Code } from 'lucide-react';
import { useStore } from '../../context/useStore';
import Projects from './Projects';

const About = () => {
    const [activeTab, setActiveTab] = useState('About Me');
    const { openWindow } = useStore();

    const menuItems = [
        { name: 'About Me', icon: <User size={14} />, category: 'Favorites' },
        { name: 'Projects', icon: <Briefcase size={14} />, category: 'Favorites' },
        { name: 'Resume', icon: <FileText size={14} />, category: 'Favorites' },
        { name: 'Contact', icon: <Mail size={14} />, category: 'Favorites' },
    ];

    return (
        <div className="flex h-full -m-4">
            {/* Sidebar */}
            <div className="w-16 md:w-48 bg-gray-100/50 dark:bg-[#2d2d2d]/50 backdrop-blur-md border-r border-gray-200 dark:border-white/10 flex flex-col pt-4 pb-4 transition-all duration-300">
                <div className="px-4 mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Favorites</span>
                </div>
                <div className="flex flex-col gap-1 px-2">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center justify-center md:justify-start gap-2 px-2 md:px-3 py-1.5 rounded-md cursor-pointer text-sm font-medium transition-colors ${activeTab === item.name ? 'bg-black/10 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'}`}
                            onClick={() => setActiveTab(item.name)}
                        >
                            {item.icon}
                            <span className="hidden md:block">{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="px-4 mt-6 mb-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">iCloud</span>
                </div>
                <div className="flex flex-col gap-1 px-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 px-2 md:px-3 py-1.5 rounded-md cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5">
                        <Briefcase size={14} /> <span className="hidden md:block">Documents</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 px-2 md:px-3 py-1.5 rounded-md cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5">
                        <Trash2 size={14} /> <span className="hidden md:block">Trash</span>
                    </div>
                </div>
            </div>

            {/* Content Content - now scrollable container */}
            <div className="flex-1 bg-white dark:bg-[#1e1e1e] overflow-y-auto">
                <div className="p-4 md:p-8">
                    {activeTab === 'About Me' && (
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-col items-center mb-8">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                                    <img src={`${import.meta.env.BASE_URL}images/avatar.jpg`} alt="K Akshay" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">K Akshay</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">Frontend Engineer</p>
                            </div>

                            <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-xl p-4 md:p-6 mb-6 shadow-sm border border-gray-100 dark:border-white/5">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Hello! 👋</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Frontend-focused developer aspiring Full Stack Engineer with strong experience in building scalable web applications using modern JavaScript frameworks and backend technologies. Passionate about creating clean user interfaces, writing maintainable code, and solving real-world problems through technology.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 ml-0 md:ml-10 gap-4 mt-6">
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <MapPin className="text-blue-500" size={20} />
                                        <span>Guntur, AP</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <Mail className="text-blue-500" size={20} />
                                        <a href="mailto:Akshay246908@gmail.com" className="hover:text-blue-500 hover:underline transition-colors">Akshay246908@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <Calendar className="text-blue-500" size={20} />
                                        <span>Available for new projects</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <Code className="text-blue-500" size={20} />
                                        <span>React / Next.js / Node</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Projects' && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <Briefcase size={48} className="mb-4 opacity-50" />
                            <p>Project files directory is located in the Safari app.</p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
                                onClick={() => openWindow('safari', <Projects />, 'Safari')}
                            >
                                Open Safari
                            </button>
                        </div>
                    )}
                    {activeTab === 'Resume' && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <FileText size={48} className="mb-4 opacity-50" />
                            <p>Resume.pdf</p>
                        </div>
                    )}
                    {activeTab === 'Contact' && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center p-4">
                            <Mail size={48} className="mb-4 opacity-50" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Get in Touch</h3>
                            <p className="mb-6 text-gray-600 dark:text-gray-300">Feel free to reach out for collaborations or just a friendly hello</p>
                            <a href="mailto:Akshay246908@gmail.com" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors flex items-center gap-2">
                                <Mail size={18} />
                                Email Me
                            </a>
                            <p className="mt-4 text-sm text-gray-400">Akshay246908@gmail.com</p>
                        </div>
                    )}
                    {/* Add other placeholders if needed, though they launch separate apps in this OS model, having them here is nice for the 'Finder' feel */}
                </div>
            </div>
        </div>
    );
};

export default About;
