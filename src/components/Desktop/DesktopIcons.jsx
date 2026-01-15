import React from 'react';
import DesktopIcon from './DesktopIcon';
import { useStore } from '../../context/useStore';
import MacFolder from './MacFolder';
import About from '../Apps/About';
import Projects from '../Apps/Projects';
import Skills from '../Apps/Skills';
import Contact from '../Apps/Contact';
import Resume from '../Apps/Resume';

const DesktopIcons = () => {
    const { openWindow } = useStore();

    const icons = [
        { id: 'finder', title: 'Finder', icon: <MacFolder />, component: <About />, label: 'About Me' },
        { id: 'safari', title: 'Safari', icon: <MacFolder />, component: <Projects />, label: 'Projects' },
        { id: 'notes', title: 'Notes', icon: <MacFolder />, component: <Skills />, label: 'Skills' },
        { id: 'mail', title: 'Mail', icon: <MacFolder />, component: <Contact />, label: 'Contact' },
        { id: 'preview', title: 'Preview', icon: <MacFolder />, component: <Resume />, label: 'Resume' },
    ];

    return (
        <div className="absolute top-8 left-0 bottom-20 right-0 p-4 flex flex-col flex-wrap content-start gap-4 pointer-events-none z-0">
            <div className="pointer-events-auto contents">
                {icons.map((item) => (
                    <DesktopIcon
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        onClick={() => openWindow(item.id, item.component, item.title)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopIcons;
