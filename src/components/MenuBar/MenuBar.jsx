import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Command } from 'lucide-react';
import { useTime } from '../../hooks/useTime';
import { useStore } from '../../context/useStore';

const MenuBar = () => {
    const { formattedTime } = useTime();
    const { activeWindowId, windows } = useStore();
    const [batteryLevel, setBatteryLevel] = useState(100);

    const activeWindow = windows.find(w => w.id === activeWindowId);
    const appName = activeWindow ? activeWindow.title : 'Finder';

    useEffect(() => {
        // Mock battery level
        if ('getBattery' in navigator) {
            // @ts-ignore
            navigator.getBattery().then((battery) => {
                setBatteryLevel(Math.round(battery.level * 100));
            });
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-md text-white flex items-center justify-between px-4 z-50 shadow-sm border-b border-white/5 select-none text-sm font-medium">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 font-bold hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-4 h-4" />
                </div>
                <div className="hidden sm:flex items-center gap-4 font-bold">
                    <span>{appName}</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-sm font-normal opacity-90">
                    <span className="cursor-pointer hover:text-white/80">File</span>
                    <span className="cursor-pointer hover:text-white/80">Edit</span>
                    <span className="cursor-pointer hover:text-white/80">View</span>
                    <span className="cursor-pointer hover:text-white/80">Go</span>
                    <span className="cursor-pointer hover:text-white/80">Window</span>
                    <span className="cursor-pointer hover:text-white/80">Help</span>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 sm:gap-5">
                <div className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">
                    <Battery size={18} className={batteryLevel < 20 ? 'text-red-500' : ''} />
                    <span className="text-xs">{batteryLevel}%</span>
                </div>
                <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                    <Wifi size={16} />
                </div>
                <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                    <Search size={16} />
                </div>
                <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer hidden sm:block">
                    <Command size={16} />
                </div>
                <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer min-w-[120px] text-center">
                    {formattedTime}
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
