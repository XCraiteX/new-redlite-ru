'use client'
import "@/css/adaptation/header.css"

// MODULES & HOOKS
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { useMe } from "@/hooks/useMe"

// COMPONENTS 
import UserHead from "./UserHead"
import NavLink from "@/ui/nav.link"
import Divider from "@/components/global/Divider"

// STORES & UTILS
import { GlobalStores } from "@/stores/global"
import { useAnimationStore } from "@/stores/animation"
import { handleHash } from "@/utils/handle.hash"
import { handleNavigation } from "@/utils/animated.nav"

// ICONS
import { AiFillHome } from "react-icons/ai"
import { FaProjectDiagram, FaRegUserCircle } from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa6"
import { GiStarSattelites } from "react-icons/gi"
import { MdMarkEmailUnread } from "react-icons/md"
import { RiHeart2Fill, RiCoupon2Fill } from "react-icons/ri"


export default function Header() {

    // STORES
    const { login, authorized, setMe } = GlobalStores.me();
    const { setPageVisible, isPageVisible } = useAnimationStore();
    
    // HOOKS
    const router = useRouter();
    const pathname = usePathname();
    const { data, isLoading } = useMe();


    useEffect(() => {
        if (data){
            setMe(data)
        }
    }, [data])
    

    // Проверка хэша при загрузке страницы
    useEffect(() => {
        handleHash()
        setTimeout(handleHash, 100);
    }, [pathname]); 


    // Анимированный переход
    const handleLink = ( path: string ) => {
        handleNavigation({ path: path, router: router, pathname: pathname, onReady:() => setPageVisible(false) });
    }

    return (
        <AnimatePresence mode="wait">
            {isPageVisible && (
                <motion.header 
                    initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex gap-2 fixed top-2 left-0 right-0 w-full justify-center items-center text-xl z-100">

                    <Link href="/" className="glass px-5 nav-a py-[0.4rem] rounded-full flex gap-2 items-center bg-[#ff1111]/10 backdrop-blur-[12px] border-1 border-white/10 shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/16" id="header_logo">
                        <GiStarSattelites/>
                        <h1>REDLITE</h1>
                    </Link>

                    <div className="flex header-links rounded-full items-center bg-[#ff1111]/10 backdrop-blur-[12px] border-1 border-white/10 ">
                        <NavLink path='/#home' title="Главная" icon={<AiFillHome/>} action={handleLink}/><Divider/>
                        <NavLink path='/#about' title="О нас" icon={<RiHeart2Fill/>} action={handleLink}/><Divider/>
                        <NavLink path='/#projects' title="Проекты" icon={<FaProjectDiagram/>} action={handleLink}/><Divider/>
                        <NavLink path='/#codes' title="Коды" icon={<RiCoupon2Fill/>} action={handleLink}/> <Divider/>
                        <NavLink path='/#contacts' title="Контакты" icon={<MdMarkEmailUnread/>} action={handleLink}/>
                    </div>

                    <div>
                        {authorized && (
                            <UserHead 
                                action={handleLink}
                                login_link="/login"
                                profile_link={`/profile/${login}`}
                                isAuth={authorized ? true : false}
                                login={authorized ? login : ''}
                                logged_icon={<FaRegUserCircle/>}
                                default_icon={<FaUserAstronaut/>}
                            />
                        )}
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}