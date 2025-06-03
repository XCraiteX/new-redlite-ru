'use client'

import { motion } from "motion/react"
import { GlobalStores } from "@/stores/global"
import Header from "@/components/global/Header"
import { FaCode } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Profile() {

    const { data, fetch: fetchCommunity } = GlobalStores.community()
    const { login, authorized, developer, fetch: fetchMe } = GlobalStores.me()

    useEffect(() => {
        if (!data) fetchCommunity()
        fetchMe()
    }, [])

    const router = useRouter()

    if (authorized == false){
        router.push('/') 
    }

    return (
        <>
        <Header/>
        <section className="h-screen w-screen flex flex-col items-center">
            <div className="w-full max-w-4xl mt-18 px-4 relative z-20">
                <div className="rounded-2xl overflow-hidden">
                    <div className="w-full mt-32 relative" 
                    style={{ 
                        // background: 'url("https://i.pinimg.com/originals/12/4a/32/124a32e153c97818d8031594d120e0aa.jpg")',
                        backgroundSize: 'cover', backgroundPosition: 'center'}}>

                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.6}}
                            className="w-32 h-32 rounded-full border-4 border-red-200/10 absolute -bottom-16 left-8 z-10">
                            <motion.img 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.4, delay: 0.8}}
                                src="https://forum.gtaprovince.ru/uploads/monthly_2023_07/RJuc.thumb.gif.128ca8d63e5a94f1a962857f5a53267f.gif"
                                alt="Profile Avatar"
                                className="rounded-full"
                            />
                            { developer ?
                                (<motion.div 
                                    initial={{x: 10, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.4, delay: 1.2}}
                                    className="absolute right-1 -bottom-0 bg-blue-500/90 p-2 rounded-full">
                                    <FaCode className="text-white text-xl"/>
                                </motion.div>) : (<></>)
                            }
                        </motion.div>
                        
                    </div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0.4}}
                        className="w-full bg-gradient-to-b from-red-500/0 to-red-500/30 pt-18 pb-4 px-8">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.h1
                                    initial={{x: 20, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.4, delay: 0.8}}
                                    className="text-4xl font-bold">{login}</motion.h1>
                                
                                { developer ?
                                    (<motion.span 
                                        initial={{x: 10, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{duration: 0.4, delay: 1.2}}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                        Developer
                                    </motion.span>) : (<></>)
                                }
                                
                            </div>
                            <motion.p 
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.4, delay: 0.8}}
                                className="text-white/60">Member since 2024</motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}
