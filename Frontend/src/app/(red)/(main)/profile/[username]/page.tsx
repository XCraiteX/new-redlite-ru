'use client'

import { motion } from "motion/react"
import { GlobalStores } from "@/stores/global"
import Header from "@/components/pages/main/Header"
import { FaCode } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { ProfileScheme } from "@/schemas/response/global/pofile.scheme";
import { api } from "@/api/api";
import { useAnimationStore } from "@/stores/animation";
import { AnimatePresence } from "motion/react";

export default function Profile() {
    const [profileData, setProfileData] = useState<null | ProfileScheme>(null);
    const { isPageVisible, setPageVisible } = useAnimationStore()

    const params = useParams()
    const login = params.username

    useEffect(() => {
        setPageVisible(true)
        if (profileData == null){
            api.get(`profile/${login}`).then(data => setProfileData(data))
        }
    }, [])

    if (profileData == null){
        return <></>
    }

    return (
        <>
        <Header/>
        <section className="h-screen w-screen flex flex-col items-center">
            <div className="w-full max-w-4xl mt-18 px-4 relative z-20">

                <AnimatePresence mode="wait">
                    {isPageVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}>

                            <div className="rounded-2xl overflow-hidden">
                                <div className="w-full mt-32 relative">
                                    <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.4, delay: 0.6}}
                                        className="w-32 h-32 rounded-full border-4 border-red-200/10 absolute -bottom-16 left-8 z-10">
                                        <motion.img 
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 0.4, delay: 0.8}}
                                            src="https://lastfm.freetls.fastly.net/i/u/avatar170s/70e6aaeb2d2a6e55949b96519a6e2752.gif"
                                            alt="Profile Avatar"
                                            className="rounded-full"
                                        />
                                        { profileData.developer ?
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
                                                className="text-4xl font-bold">{profileData.login ? (<>{profileData.login}</>) : (<>Аккаунта не сущетсвует</>)}</motion.h1>
                                            
                                            { profileData.developer ?
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
                                            className="text-white/60">Member since {profileData.created}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
        </>
    )
}
