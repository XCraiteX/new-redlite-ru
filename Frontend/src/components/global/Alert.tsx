import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { RiEmojiStickerFill } from "react-icons/ri";
import { PiShieldWarningFill } from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";

interface AlertProps {
    message: string;
    color?: 'red' | 'green' | 'blue';
    image?: 'smile' | 'error' | 'cosmo' | 'promo';
    duration?: number;
    delay?: number;
    onClose?: () => void;
}

export default function SuccessAlert({ message, duration = 4000, color = 'red', image = 'error' , delay = 0, onClose }: AlertProps) {
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
    }, [message, duration]);

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
                    transition={{ duration: 0.2, delay: delay }}
                    className={`fixed top-4 right-4 px-3 py-2 rounded-lg border shadow-[0_4px_4px_1px]
                        ${
                            color === 'green' ? "bg-green-500/20 border-green-500/50 shadow-green-800/80" : 
                            color === 'red' ? "bg-red-500/20 border-red-500/50 shadow-red-800/80" :
                            color === 'blue' ? "bg-blue-500/20 border-blue-500/50 shadow-blue-800/60" :
                            "bg-red-500/20 border-red-500/50 shadow-red-800/80"
                        }`}>
                            
                    <div className="flex items-center gap-2">
                        {image === 'smile' ? <RiEmojiStickerFill size={30} className='m-1'/> : 
                         image === 'error' ? <PiShieldWarningFill size={34}/> :
                         image === 'cosmo' ? <FaUserAstronaut size={34} className='p-1'/> : 
                         image === 'promo' ? <IoTicket size={34}/> :
                         <FaUserAstronaut/>
                        }
                        
                        <div className='flex flex-col'>                
                            <span className="text-white text-xl px-1">{message}</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
