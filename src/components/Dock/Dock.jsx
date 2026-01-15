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
            icon: <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-500 rounded-xl flex items-center justify-center border border-white/20 shadow-inner"><div className="text-3xl">😊</div></div>,
            component: <About />,
            label: 'Finder'
        },
        {
            id: 'safari',
            title: 'Safari',
            icon: <div className="w-full h-full bg-white rounded-xl flex items-center justify-center relative overflow-hidden"><div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white"><Globe size={32} /></div></div>,
            component: <Projects />,
            label: 'Safari'
        },
        {
            id: 'notes',
            title: 'Notes',
            icon: <div className="w-full h-full bg-yellow-100 rounded-xl flex items-center justify-center border-t-8 border-yellow-400 relative shadow-inner"><StickyNote className="text-gray-500" /></div>,
            component: <Skills />,
            label: 'Notes'
        },
        {
            id: 'mail',
            title: 'Mail',
            icon: <div className="w-full h-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white"><Mail size={32} /></div>,
            component: <Contact />,
            label: 'Mail'
        },
        {
            id: 'preview',
            title: 'Preview',
            icon: <div className="w-full h-full bg-slate-700/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"><FileText className="text-white" size={32} /></div>,
            component: <Resume />,
            label: 'Resume'
        },
        {
            id: 'terminal',
            title: 'Terminal',
            icon: <div className="w-full h-full bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-gray-600 text-white font-mono text-xs shadow-inner"><span className="text-green-500">$_</span></div>,
            component: <div className="w-full h-full bg-black p-4 font-mono text-green-500 text-sm">Welcome to Terminal...<br />Type 'help' to start.</div>,
            label: 'Terminal'
        }
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 pb-2 z-50 rounded-3xl flex gap-3 h-16 bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl items-end mx-auto"
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
