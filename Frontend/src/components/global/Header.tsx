'use client'
import "@/css/adaptation/header.css"

import { motion, AnimatePresence } from "motion/react"
import { GlobalStores } from "@/stores/global"
import { useRouter, usePathname } from "next/navigation"
import { useAnimationStore } from "@/stores/animation"

import Divider from "@/components/global/Divider"

import { AiFillHome } from "react-icons/ai"
import { FaProjectDiagram, FaRegUserCircle } from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa6"
import { GiStarSattelites } from "react-icons/gi"
import { MdMarkEmailUnread } from "react-icons/md"
import { RiHeart2Fill, RiCoupon2Fill } from "react-icons/ri"
import { useEffect } from "react"
import Link from "next/link"

export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const { authorized, login, fetch: fetchMe } = GlobalStores.me()
    const { setPageVisible, isPageVisible } = useAnimationStore()

    useEffect(() => {
        if (authorized === undefined) {
            fetchMe()
        }
    }, [authorized, fetchMe])


    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView( { behavior: "auto" } );
                }
            }
        };

        setTimeout(handleHash, 100);
    }, [pathname]); 

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

    return (
        <AnimatePresence mode="wait">
            {isPageVisible && (
                <motion.header 
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex gap-2 fixed top-2 left-0 right-0 w-full justify-center items-center text-xl z-100">

                    <Link href="/" className="glass px-5 nav-a py-[0.4rem] rounded-full flex gap-2 items-center bg-[#ff1111]/10 backdrop-blur-[12px] border-1 border-white/10 shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/16" id="header_logo">
                        <GiStarSattelites/>
                        <h1>REDLITE</h1>
                    </Link>

                    <div className="flex header-links rounded-full items-center bg-[#ff1111]/10 backdrop-blur-[12px] border-1 border-white/10 ">
                        <button onClick={() => handleNavigation('/#home')} className="flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a">
                            <AiFillHome/>
                            Главная
                        </button>

                        <Divider/>

                        <button onClick={() => handleNavigation('/#about')} className="flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a">
                            <RiHeart2Fill/>
                            О нас
                        </button>

                        <Divider/>

                        <button onClick={() => handleNavigation('/#projects')} className="flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a">
                            <FaProjectDiagram/>
                            Проекты
                        </button>

                        <Divider/>

                        <button onClick={() => handleNavigation('/#codes')} className="flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a">
                            <RiCoupon2Fill/>
                            Коды
                        </button>

                        <Divider/>

                        <button onClick={() => handleNavigation('/#contacts')} className="flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a">
                            <MdMarkEmailUnread/>
                            Контакты
                        </button>
                    </div>

                    <div>
                        {authorized ? (
                            <button 
                                onClick={() => handleNavigation(`/profile/${login}`)}
                                className="border-1 border-white/10 nav-a rounded-full backdrop-blur-[12px] bg-[#ff0000]/10 shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px] hover:bg-[#ff0000]/16 nav-a gap-2"
                            >
                                <FaRegUserCircle/>
                                <p>{login}</p>
                            </button>
                        ) : (
                            <button 
                                onClick={() => handleNavigation('/login')}
                                className="border-1 border-white/10 nav-a rounded-full backdrop-blur-[12px] bg-[#ff0000]/10 shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px] hover:bg-[#ff0000]/16 nav-a gap-2"
                            >
                                <FaUserAstronaut/>
                                <span id="header_login">Login</span>
                            </button>
                        )}
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}