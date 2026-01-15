import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus } from 'lucide-react';
import { useStore } from '../../context/useStore';

const Window = ({ window }) => {
    const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition } = useStore();
    const constraintsRef = useRef(null);

    const { id, title, component, isMinimized, isMaximized, zIndex, position } = window;

    if (isMinimized) return null;

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 100 }}
            dragMomentum={false}
            onDragStart={() => focusWindow(id)}

            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{
                scale: isMaximized ? 1 : 1,
                opacity: 1,

                width: isMaximized ? '100vw' : 'min(800px, 90vw)',
                height: isMaximized ? '90vh' : 'min(600px, 80vh)',
                x: isMaximized ? 0 : (position?.x || 0),
                y: isMaximized ? 32 : (position?.y || 0), // 32px for menu bar
                borderRadius: isMaximized ? 0 : '12px'
            }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}

            style={{
                position: 'absolute',
                zIndex,
                top: isMaximized ? 0 : '10%',
                left: isMaximized ? 0 : '50%',
                x: isMaximized ? 0 : (position?.x || '-50%'),
                willChange: 'transform, width, height'
            }}
            className={`bg-[#f5f5f7] dark:bg-[#1e1e1e] shadow-2xl overflow-hidden flex flex-col border border-black/10 dark:border-white/10 ${isMaximized ? 'fixed inset-0 top-8' : 'rounded-xl'}`}
            onClick={() => focusWindow(id)}
        >
            {/* Window Header / Titlebar */}
            <div
                className="h-10 bg-[#e3e3e3] dark:bg-[#2d2d2d] flex items-center px-4 justify-between select-none cursor-default"
                onPointerDown={(e) => {
                    // Only allow drag if not maximized
                    if (isMaximized) e.stopPropagation();
                }}
            >
                <div className="flex items-center gap-2 group z-50" onPointerDown={(e) => e.stopPropagation()}>
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                        className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-90 flex items-center justify-center group-hover:block"
                    >
                        <X size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                        className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-90 flex items-center justify-center group-hover:block"
                    >
                        <Minus size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
                        className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-90 flex items-center justify-center group-hover:block"
                    >
                        <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100" />
                        {/* Lucide maximize icon is a bit big for this, using div or just nothing */}
                    </button>
                </div>

                <div className="font-semibold text-sm text-gray-700 dark:text-gray-200 opacity-80 flex-1 text-center ml-[-50px]">
                    {title}
                </div>

                <div className="w-14"></div> {/* Spacer for symmetry */}
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-auto bg-white/50 dark:bg-black/40 backdrop-blur-md p-4 scrollbar-hide">
                {component}
            </div>
        </motion.div>
    );
};

export default Window;
