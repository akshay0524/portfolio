import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import DockItem from './DockItem';
import { useStore } from '../../context/useStore';
import {
    User, // Finder/About
    Globe, // Safari/Projects
    StickyNote, // Notes/Skills
    Mail, // Mail/Contact
    FileText, // Resume
    Terminal, // Terminal
} from 'lucide-react';
import About from '../Apps/About';
import Projects from '../Apps/Projects';
import Skills from '../Apps/Skills';
import Contact from '../Apps/Contact';
import Resume from '../Apps/Resume';

const Dock = () => {
    const mouseX = useMotionValue(null);
    const { openWindow } = useStore();

    const apps = [
        {
            id: 'finder',
            title: 'Finder',
            icon: <img src={`${import.meta.env.BASE_URL}icons/finder.png`} alt="Finder" className="w-full h-full object-cover" />,
            component: <About />,
            label: 'Finder'
        },
        {
            id: 'safari',
            title: 'Safari',
            icon: <img src={`${import.meta.env.BASE_URL}icons/safari.png`} alt="Safari" className="w-full h-full object-cover" />,
            component: <Projects />,
            label: 'Safari'
        },
        {
            id: 'notes',
            title: 'Notes',
            icon: <img src={`${import.meta.env.BASE_URL}icons/notes.png`} alt="Notes" className="w-full h-full object-cover" />,
            component: <Skills />,
            label: 'Notes'
        },
        {
            id: 'mail',
            title: 'Mail',
            icon: <img src={`${import.meta.env.BASE_URL}icons/mail.svg`} alt="Mail" className="w-full h-full object-cover" />,
            component: <Contact />,
            label: 'Mail'
        },
        {
            id: 'preview',
            title: 'Preview',
            icon: <img src={`${import.meta.env.BASE_URL}icons/resume.png`} alt="Resume" className="w-full h-full object-cover" />,
            component: <Resume />,
            label: 'Resume'
        },
        {
            id: 'terminal',
            title: 'Terminal',
            icon: <img src={`${import.meta.env.BASE_URL}icons/terminal.png`} alt="Terminal" className="w-full h-full object-cover" />,
            component: <div className="w-full h-full bg-black p-4 font-mono text-green-500 text-sm">
                <div className="opacity-50 mb-2">Last login: {new Date().toDateString()} on ttys000</div>
                <div>Welcome to Terminal. Type 'help' to start.</div>
                <div className="mt-2 text-white">➜  ~ <span className="animate-pulse">_</span></div>
            </div>,
            label: 'Terminal'
        }
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 pb-2 z-50 rounded-3xl flex gap-3 h-16 bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl items-end mx-auto origin-bottom scale-[0.6] sm:scale-100 md:scale-100 transition-transform duration-300"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(null)}
        >
            {apps.map((app) => (
                <DockItem key={app.id} mouseX={mouseX} onClick={() => openWindow(app.id, app.component, app.title)} label={app.label}>
                    {app.icon}
                </DockItem>
            ))}
        </div>
    );
};

export default Dock;
