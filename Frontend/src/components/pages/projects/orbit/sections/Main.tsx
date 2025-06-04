'use client'
import {motion} from 'motion/react'
import Link from 'next/link'
import { MdOutlineDoubleArrow } from 'react-icons/md'

export default function Main() {
    return(
    <section id="home" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center overflow-hidden">
        <div className="flex gap-8">
            <motion.img initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} src='/global/projects/verse.png' width='340px'/>
            <div className="flex flex-col justify-center">
                <motion.h1 initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.8}} className="text-8xl">ORBIT VERSE</motion.h1>
                <motion.h2 initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}} className="text-6xl">ASSISTANT</motion.h2>
                <motion.div initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.6}}>
                <div className='flex gap-6'>
                    <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-blue-500/60 w-fit mt-2 rounded-sm items-center arrow_btn shadow-[0_0_6px_1px] shadow-blue-800">Подробнее<MdOutlineDoubleArrow/></Link>
                    <Link href='#price' className="flex gap-2 py-2 px-6 text-2xl bg-blue-500/60 w-fit mt-2 rounded-sm items-center arrow_btn shadow-[0_0_6px_1px] shadow-blue-800">Купить<MdOutlineDoubleArrow/></Link>
                </div>
                </motion.div>
            </div>
        </div>
    </section>
    )
}