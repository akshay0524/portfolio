import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ icon, label, onClick }) => {
    return (
        <motion.div
            drag
            dragMomentum={false}
            className="flex flex-col items-center gap-1 w-24 p-2 rounded-md hover:bg-white/10 border border-transparent hover:border-white/5 active:bg-white/20 transition-colors cursor-pointer group"
            onDoubleClick={onClick}
        >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center text-white border border-white/20 group-hover:scale-105 transition-transform duration-200">
                {icon}
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md text-center bg-black/0 px-2 rounded group-hover:bg-black/20 transition-colors">
                {label}
            </span>
        </motion.div>
    );
};

export default DesktopIcon;
