import { motion } from "motion/react";
import { HiGiftTop } from "react-icons/hi2";
import { RiCoupon2Fill } from "react-icons/ri";

export default function Codes(){
    return(
        <section id="codes" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center overflow-hidden">
            <div className="p-8 rounded-2xl">
            <motion.h2 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className="text-5xl font-bold mb-4 flex gap-3 items-center"><HiGiftTop/>Активировать код</motion.h2>
            <motion.input initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="input_bg w-full p-2 border-1 border-red-500/20 rounded-sm outline-none text-2xl text-center" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"/>
            <motion.button initial={{x: -10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.3, delay: 0.8}} className="bg-red-400/20 rounded-sm text-2xl py-[6px] hover:shadow-[0_0_4px_1px] duration-[0.2s] mt-2 w-full flex gap-2 items-center justify-center"><RiCoupon2Fill/>Активировать</motion.button>
            </div>
        </section>
    )
}