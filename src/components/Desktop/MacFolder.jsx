import React from 'react';

const MacFolder = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md filter">
        <defs>
            <linearGradient id="folderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#5DC1F7', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3A95E4', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="folderGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7CD0FB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4CA8F0', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        {/* Back part */}
        <path d="M10,20 L40,20 L45,15 L90,15 C92.76,15 95,17.24 95,20 L95,80 C95,82.76 92.76,85 90,85 L10,85 C7.24,85 5,82.76 5,80 L5,25 C5,22.24 7.24,20 10,20 Z" fill="url(#folderGradient)" />
        {/* Front part */}
        <path d="M10,35 L90,35 C92.76,35 95,37.24 95,40 L95,80 C95,82.76 92.76,85 90,85 L10,85 C7.24,85 5,82.76 5,80 L5,40 C5,37.24 7.24,35 10,35 Z" fill="url(#folderGradientTop)" />
    </svg>
);

export default MacFolder;
