"use client";   
import React from 'react';

interface ChoiceModalProps {
    open: boolean;
    onClose: () => void;
    option1: {
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    };
    option2: {
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    };
}

const ChoiceModal: React.FC<ChoiceModalProps> = ({
    open,
    onClose,
    option1,
    option2,
}) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-[var(--primary-red)] rounded-lg shadow-lg flex flex-col md:flex-row w-11/12 max-w-xl mx-auto"
                onClick={e => e.stopPropagation()}
            >
                {[option1, option2].map((option, idx) => (
                    <button
                        key={idx}
                        className="flex-1 flex flex-col items-center justify-center p-8 rounded-lg hover:bg-[var(--secondary-dark-red)] focus:outline-none transition"
                        onClick={option.onClick}
                        type="button"
                    >
                        <div className="text-5xl text-white mb-4">{option.icon}</div>
                        <span className="text-lg text-white font-semibold">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChoiceModal;