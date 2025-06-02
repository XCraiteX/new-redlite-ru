import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { RiEmojiStickerFill } from "react-icons/ri";
import { PiShieldWarningFill } from "react-icons/pi";

interface AlertProps {
    message: string;
    type?: 'success' | 'error';
    duration?: number;
    onClose?: () => void;
}

export default function SuccessAlert({ message, duration = 6000, type = 'error', onClose }: AlertProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        let timer: NodeJS.Timeout;
        
        if (duration > 0) {
            timer = setTimeout(() => {
                handleClose();
            }, duration);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [message, type, duration]);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className={`fixed top-4 right-4 px-3 py-2 rounded-lg border ${type === 'success' ? "bg-green-500/20 border-green-500/50" : "bg-red-500/20 border-red-500/50"} shadow-lg`}
                >
                    <div className="flex items-center gap-2">
                        {type === 'success' ? <RiEmojiStickerFill size={30} className='m-1'/> : <PiShieldWarningFill size={34}/>}
                        
                        <div className='flex flex-col'>                
                            <span className="text-white text-xl px-1">{message}</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
