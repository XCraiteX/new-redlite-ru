'use client'
import "@/css/globals.css";
import "@/css/header.css";
import { useEffect, useState } from "react";

import { IoMdSwap } from "react-icons/io";

import { IoMailUnread } from "react-icons/io5";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { AnimatePresence, motion } from 'motion/react';
import { api } from "@/api/api";
import Alert from "@/components/global/Alert";
import { useRouter } from "next/navigation";
import { AlertScheme } from "@/schemas/global/alert.scheme";
import { GlobalStores } from "@/stores/global";
import { useAnimationStore } from "@/stores/animation";

export default function Page() {

    const { fetch: fetchMe } = GlobalStores.me()
    const { isPageVisible, setPageVisible } = useAnimationStore()

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [alertData, setAlertData] = useState<null | AlertScheme>()
    const [active, setActive] = useState(false)

    useEffect(() => {
        setPageVisible(true)
    }, [])

    const apiLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = await api.post('login', { email: email, password: password })

        console.log(data)

        setAlertData({message: data.detail, type: data.status === 'OK' ? "success" : "error"})
        setActive(true)

        if (data.status == 'OK'){
            setTimeout(() => {     
                setPageVisible(false)
                setTimeout(() => {
                    router.push('/')
                    setTimeout(() => {
                        fetchMe()
                    }, 400)
                }, 600)
            }, 3200)
        }
    }

    const changeForm = async () => {
        setPageVisible(false)
        setTimeout(() => {
            router.push('/registration')
        }, 600)
    }

    return(
        <section className="w-full h-screen flex justify-center items-center">
            <AnimatePresence mode="wait">
            { isPageVisible && <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                
                className="w-[260px] flex flex-col gap-1" onSubmit={apiLogin}>
                <motion.div 
                    initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} 
                    className="flex justify-between items-center">
                    <h1 className="text-4xl">Вход</h1>
                    <button onClick={changeForm} className="p-2 border-1 border-white/0 hover:border-white duration-[0.2s] rounded-sm"><IoMdSwap size={30}/></button>
                </motion.div>
                
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, delay: 0.4}}>
                    <hr/>
                </motion.div>
                    
                <motion.label 
                    initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.6}} 
                    htmlFor="email" className="flex gap-2 text-2xl py-2 items-center"><IoMailUnread/>Почта</motion.label>
                <motion.input 
                    initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}}
                    className="input_bg p-1 rounded-sm text-xl outline-none" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                
                <motion.label 
                    initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} 
                    htmlFor="password" className="flex gap-2 text-2xl py-2 items-center"><RiShieldKeyholeFill/>Пароль</motion.label>
                <motion.input
                    initial={{x: 20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.2}}
                    className="input_bg p-1 rounded-sm text-xl outline-none" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <motion.button
                    initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 1.4}}
                    className="bg-red-400/20 rounded-sm text-2xl py-1 hover:shadow-[0_0_4px_1px] duration-[0.2s] mt-2"
                    onClick={apiLogin}>Войти</motion.button>
                    
            </motion.div>
            }
            </AnimatePresence>

            {active && alertData && (
                <Alert 
                    message={alertData.message} 
                    color={alertData.type === 'error' ? 'red' :  'green'}
                    image={alertData.type === 'error' ? 'error' :  'smile'}
                    duration={3000}
                    onClose={() => setTimeout(() => setActive(false), 400)}
                />
            )}
        </section>
    )
}