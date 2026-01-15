import { useEffect, useState } from 'react';

export const useKonamiCode = () => {
    const [triggered, setTriggered] = useState(false);
    const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a"
    ];

    useEffect(() => {
        let tempInput = [];

        const handleKeyDown = (e) => {
            tempInput.push(e.key);
            if (tempInput.length > konamiCode.length) {
                tempInput.shift();
            }

            if (JSON.stringify(tempInput) === JSON.stringify(konamiCode)) {
                setTriggered(true);
                // Reset after a while or handle in component
                setTimeout(() => setTriggered(false), 5000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return triggered;
};
