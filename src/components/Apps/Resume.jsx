import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
    return (
        <div className="h-full flex flex-col p-4">
            <div className="flex justify-between items-center mb-4 bg-gray-100 dark:bg-[#2d2d2d] p-3 rounded-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-200">K_Akshay_Resume.pdf</span>
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="resss(5).pdf" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium">
                    <Download size={16} /> Download
                </a>
            </div>

            <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                <iframe
                    src={`${import.meta.env.BASE_URL}resume.pdf`}
                    className="w-full h-full"
                    title="Resume PDF"
                />
            </div>
        </div>
    );
};

export default Resume;
