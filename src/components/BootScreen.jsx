import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BootScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit after 100%
                    return 100;
                }
                return prev + 1; // 100 steps * 20ms = 2000ms = 2s boot time roughly
            });
        }, 30);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-[100]">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="text-6xl mb-4"></div>
            </motion.div>

            <div className="w-48 h-1.5 bg-[#333] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <p className="mt-4 text-xs font-medium text-gray-400">Starting K Akshay OS...</p>
        </div>
    );
};

export default BootScreen;
