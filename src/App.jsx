import React, { useEffect, useState } from 'react';
import { useStore } from './context/useStore';
import BootScreen from './components/BootScreen';
import MenuBar from './components/MenuBar/MenuBar';
import Dock from './components/Dock/Dock';
import Window from './components/Window/Window';
import DesktopIcons from './components/Desktop/DesktopIcons';
import Spotlight from './components/Spotlight';
import { AnimatePresence, motion } from 'framer-motion';
import { useKonamiCode } from './hooks/useKonamiCode';

function App() {
  const { isBooting, setBooting, windows } = useStore();
  const [contextMenu, setContextMenu] = useState(null);
  const isKonami = useKonamiCode();

  useEffect(() => {
    // Prevent default right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      setContextMenu({ x: e.pageX, y: e.pageY });
    };

    const handleClick = () => {
      setContextMenu(null);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (isBooting) {
    return <BootScreen onComplete={() => setBooting(false)} />;
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-cover bg-center select-none relative"
      style={{
        backgroundImage: 'url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-2020-5120x2880-1455.jpg)',
        // Fallback gradient if image fails
        backgroundColor: '#3b82f6'
      }}
    >
      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 px-4">
        <div className="text-center text-white/90">
          <h2 className="text-xl md:text-2xl font-light mb-2 tracking-wide font-sans cursor-default">Hey, I'm K Akshay! welcome to my</h2>
          <div className="flex justify-center items-center cursor-default select-none flex-wrap">
            {"portfolio.".split("").map((char, index) => (
              <span
                key={index}
                className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter drop-shadow-2xl font-sans inline-block"
                onMouseEnter={(e) => {
                  import('gsap').then(({ default: gsap }) => {
                    gsap.to(e.target, {
                      fontWeight: "700", // Bold
                      scale: 1.1,
                      duration: 0.2,
                      ease: "power1.out"
                    });
                  });
                }}
                onMouseLeave={(e) => {
                  import('gsap').then(({ default: gsap }) => {
                    gsap.to(e.target, {
                      fontWeight: "300", // Light
                      scale: 1,
                      duration: 0.2,
                      ease: "power1.out"
                    });
                  });
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for tint if needed */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Icons */}
      <DesktopIcons />

      {/* Windows Area */}
      <AnimatePresence>
        {windows.map((window) => (
          <Window key={window.windowId || window.id} window={window} />
        ))}
      </AnimatePresence>

      {/* Dock */}
      <Dock />

      {/* Spotlight */}
      <Spotlight />

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="fixed bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-lg py-1 w-48 z-[100] text-sm font-medium text-gray-800 dark:text-gray-200"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">New Folder</div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">Get Info</div>
          <div className="my-1 border-b border-gray-400/20"></div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">Change Desktop Background...</div>
          <div className="my-1 border-b border-gray-400/20"></div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">Use Stacks</div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">Sort By</div>
        </div>
      )}

      {/* Easter Egg */}
      {isKonami && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
        >
          <div className="text-9xl font-bold text-white drop-shadow-2xl animate-bounce">
            🚀 UNLOCKED!
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
