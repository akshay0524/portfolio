import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DockItem = ({ mouseX, children, onClick, label }) => {
    let ref = React.useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [45, 80, 45]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square flex items-center justify-center cursor-pointer relative group"
            onClick={onClick}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="w-full h-full">
                {children}
            </div>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm">
                {label}
            </span>
        </motion.div>
    );
};

export default DockItem;
