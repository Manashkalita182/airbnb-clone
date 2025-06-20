'use client';

import React, { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button"; // Assuming you have a Button component`
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    body: React.ReactNode;
    footer?: React.ReactNode;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) return;

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300); // Match your transition duration
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-neutral-800/70">
            <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto lg:h-auto">
                <div
                    className={`
                        translate
                        duration-300
                        h-full
                        ${showModal ? 'translate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <div className="translate h-full md:h-auto lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button
                                className="absolute left-4 p-1 border-0 hover:opacity-70 transition"
                                onClick={handleClose}
                            >
                                <IoMdClose size={18} className="text-gray-500" />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                                {secondaryAction && secondaryLabel && (
                    
                                    <Button 
                                        disabled={disabled}
                                        label={secondaryLabel}
                                        outline
                                        onClick={handleSecondaryAction}
                                    />
                                )}
                                <Button 
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}/>
                                
    
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
