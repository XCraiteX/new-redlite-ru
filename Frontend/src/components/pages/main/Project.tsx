import { ProjectScheme } from "@/schemas/global/project.scheme";
import { useAnimationStore } from "@/stores/animation";
import { GlobalStores } from "@/stores/global";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function Project( props : ProjectScheme ) {

    const router = useRouter()
    const pathname = usePathname()

    const { setPageVisible, isPageVisible } = useAnimationStore()

    const handleNavigation = (path: string) => {
        const getBasePath = (p: string): string => {
            const hashIndex = p.indexOf('#');
            return hashIndex === -1 ? p : p.substring(0, hashIndex);
        };

        const currentBasePath = getBasePath(pathname);
        const targetBasePath = getBasePath(path);

        if (currentBasePath !== targetBasePath) { 
            setPageVisible(false);

            setTimeout(() => {
                router.push(path);
            }, 600);
        } else {
            router.push(path);
        }
    }

    return(
        <div className={`flex ${props.rotate === 'left' ? ('justify-start') : ('justify-end')}`}>
            <div className="flex gap-6">
                { props.rotate === 'left' &&
                    <motion.div initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay}} className="bg-red-500/10 rounded-xl">
                        <motion.img initial={{x: -25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay + 0.2}} src={props.image} width={200} className="p-6"/>
                    </motion.div>
                }
                
                <div className={`flex flex-col gap-1 ${props.rotate === 'left' ? ('items-start') : ('items-end')}`}>
                    <motion.h1 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay + 0.2}} className="text-5xl">{props.name}</motion.h1>
                    <motion.h2 initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay + 0.4}} className={`text-3xl text-white/70 ${props.rotate === 'left' ? ('text-left') : ('text-right')}`}>{props.detail}</motion.h2>
                    <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay + 0.6}}>
                        <button onClick={() => handleNavigation('/orbit')} className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></button>
                    </motion.div>
                </div>

                { props.rotate === 'right' &&
                    <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay}} className="bg-red-500/10 rounded-xl">
                        <motion.img initial={{x: 25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: props.start_delay + 0.2}} src={props.image} width={200} className="p-6"/>
                    </motion.div>
                }   
            </div>
        </div>        
    )
}