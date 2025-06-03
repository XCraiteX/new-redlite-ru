'use client'

import Link from "next/link"
import { motion } from "motion/react"
import { GlobalStores } from "@/stores/global"

import { AiFillHome } from "react-icons/ai"
import { FaProjectDiagram, FaRegUserCircle } from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa6"
import { GiStarSattelites } from "react-icons/gi"
import { MdMarkEmailUnread } from "react-icons/md"
import { RiHeart2Fill, RiCoupon2Fill } from "react-icons/ri"
import Divider from "./Divider"

export default function Footer() {

    return (
        <motion.header 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="flex gap-2 fixed bottom-2 left-0 right-0 w-full justify-center items-center text-xl z-100">

            <div className="glass flex rounded-full items-center backdrop-blur-[2px]">
                <Link href="/#home" className="flex rounded-full nav-a">
                    <AiFillHome/>
                    Главная
                </Link>

                <Divider/>

                <Link href="/#about" className="flex gap-2 rounded-full nav-a">
                    <RiHeart2Fill/>
                    О нас
                </Link>

                <Divider/>

                <Link href="/#projects" className="flex gap-2 rounded-full nav-a">
                    <FaProjectDiagram/>
                    Проекты
                </Link>

                <Divider/>

                <Link href="/#codes" className="flex gap-2 rounded-full nav-a">
                    <RiCoupon2Fill/>
                    Коды
                </Link>

                <Divider/>

                <Link href="/#contacts" className="flex gap-2 rounded-full nav-a">
                    <MdMarkEmailUnread/>
                    Контакты
                </Link>
            </div>

        </motion.header>
    )
}