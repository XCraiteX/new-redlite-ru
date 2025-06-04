'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { GlobalStores } from "@/stores/global"
import { useRouter, usePathname } from "next/navigation"
import { useAnimationStore } from "@/stores/animation"

import { AiFillHome } from "react-icons/ai"
import { FaRegUserCircle, FaCoins } from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa6"
import { GiStarSattelites } from "react-icons/gi"
import { RiHeart2Fill, RiVoiceprintLine } from "react-icons/ri"
import Divider from "@/components/global/Divider"
import { useEffect } from "react"
import { TbBrandReact } from "react-icons/tb"
import { IoIosPricetags } from "react-icons/io"

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

    // const [isVisible, setIsVisible] = useState(true)

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
            // setIsVisible(false);
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

                    <button onClick={() => handleNavigation('/')} className="px-5 nav-a py-[0.4rem] rounded-full flex gap-2 items-center bg-blue-500/10 backdrop-blur-[12px] border-1 border-white/10 shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/16" id="header_logo">
                        <GiStarSattelites/>
                        <h1>ORBIT VERSE</h1>
                    </button>

                    <div className="flex rounded-full items-center bg-blue-500/10 backdrop-blur-[12px] border-1 border-white/10 ">
                        <Link href='/orbit/#home' className="flex rounded-full shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/10 nav-a">
                            <AiFillHome/>
                            Главная
                        </Link>

                        <Divider/>

                        <Link href='/orbit/#about' className="flex gap-2 rounded-full shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/10 nav-a">
                            <RiHeart2Fill/>
                            О проекте
                        </Link>

                        <Divider/>

                        <Link href='/orbit/#features' className="flex gap-2 rounded-full shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/10 nav-a">
                            <TbBrandReact />
                            Функции
                        </Link>

                        <Divider/>

                        <Link href='/orbit/#price' className="flex gap-2 rounded-full shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/10 nav-a">
                        <IoIosPricetags />
                            Покупка
                        </Link>

                        <Divider/>

                        <Link href='/orbit/#voices' className="flex gap-2 rounded-full shadow-blue-500/50 hover:shadow-[0_0_6px_1px]  hover:bg-blue-500/10 nav-a">
                            <RiVoiceprintLine />
                            Озвучка
                        </Link>
                    </div>

                    <div>
                        {authorized ? (
                            <button 
                                onClick={() => handleNavigation(`/profile/${login}`)}
                                className="border-1 border-white/10 nav-a rounded-full bg-blue-500/10 shadow-blue-500/50 hover:shadow-[0_0_6px_1px] hover:bg-blue-500/16 nav-a gap-2"
                            >
                                <FaRegUserCircle/>
                                <p>{login}</p>
                            </button>
                        ) : (
                            <button 
                                onClick={() => handleNavigation('/login')}
                                className="border-1 border-white/10 nav-a rounded-full bg-blue-500/10 shadow-blue-500/50 hover:shadow-[0_0_6px_1px] hover:bg-blue-500/16 nav-a gap-2"
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