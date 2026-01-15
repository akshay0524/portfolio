import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../context/useStore';
import About from './Apps/About';
import Projects from './Apps/Projects';
import Skills from './Apps/Skills';
import Contact from './Apps/Contact';
import Resume from './Apps/Resume';

const Spotlight = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const { openWindow } = useStore();

    const apps = [
        { id: 'finder', title: 'Finder', component: <About />, label: 'About Me', type: 'App' },
        { id: 'safari', title: 'Safari', component: <Projects />, label: 'Projects', type: 'App' },
        { id: 'notes', title: 'Notes', component: <Skills />, label: 'Skills', type: 'App' },
        { id: 'mail', title: 'Mail', component: <Contact />, label: 'Contact', type: 'App' },
        { id: 'preview', title: 'Preview', component: <Resume />, label: 'Resume', type: 'App' },
        { id: 'projects-1', title: 'MacOS Portfolio', component: <Projects />, label: 'Project: MacOS Grid', type: 'Project' },
        // Add more mock data if needed
    ];

    const filteredApps = query
        ? apps.filter(app => app.label.toLowerCase().includes(query.toLowerCase()))
        : [];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (app) => {
        openWindow(app.id, app.component, app.title);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]" onClick={() => setIsOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-[600px] max-w-[90vw] bg-white/40 dark:bg-[#1e1e1e]/60 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 overflow-hidden text-gray-800 dark:text-white"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 py-4 border-b border-gray-400/20 gap-3">
                            <Search size={20} className="text-gray-500" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Spotlight Search"
                                className="flex-1 bg-transparent border-none outline-none text-xl placeholder-gray-500 text-gray-800 dark:text-white"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                autoFocus
                            />
                            <div className="text-xs text-gray-500 bg-gray-200 dark:bg-white/10 px-2 py-1 rounded">ESC</div>
                        </div>

                        {query && (
                            <div className="max-h-[300px] overflow-y-auto py-2">
                                {filteredApps.length > 0 ? (
                                    filteredApps.map((app, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center justify-between cursor-pointer group"
                                            onClick={() => handleSelect(app)}
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Simple Icon Placeholder */}
                                                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                                                    {app.label[0]}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-lg">{app.label}</span>
                                                    <span className="text-xs opacity-60 group-hover:text-white/80">{app.type}</span>
                                                </div>
                                            </div>
                                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center text-gray-500">
                                        No results found
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Spotlight;
