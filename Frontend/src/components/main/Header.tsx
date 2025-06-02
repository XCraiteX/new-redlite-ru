'use client'
import Link from "next/link";

import { AiFillHome } from "react-icons/ai";
import { RiHeart2Fill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";

import { GiStarSattelites } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Header() {
    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-2 fixed top-2 left-0 right-0 w-full justify-center items-center text-xl z-100">

            <div className="glass px-5 py-[0.4rem] rounded-full flex gap-2 items-center backdrop-blur-[2px]">
                <GiStarSattelites/>
                <h1>REDLITE</h1>
            </div>

            <div className="glass flex rounded-full items-center backdrop-blur-[2px]">
                <Link href="#home" className="flex rounded-full nav-a">
                    <AiFillHome/>
                    Главная
                </Link>
                <span className="text-white/10">|</span>

                <Link href="#about" className="flex gap-2 rounded-full nav-a">
                    <RiHeart2Fill/>
                    О нас
                </Link>
                <span className="text-white/10">|</span>

                <Link href="#projects" className="flex gap-2 rounded-full nav-a">
                    <FaProjectDiagram/>
                    Проекты
                </Link>
                <span className="text-white/10">|</span>

                <Link href="#codes" className="flex gap-2 rounded-full nav-a">
                    <RiCoupon2Fill/>
                    Коды
                </Link>
                <span className="text-white/10">|</span>

                <Link href="#contacts" className="flex gap-2 rounded-full nav-a">
                    <MdMarkEmailUnread/>
                    Контакты
                </Link>
            </div>

            <Link href="/login" className="border-1 border-white/10 nav-a rounded-full bg-[#ff1111]/10 hover:border-[#ff0000]/40 flex items-center gap-2 backdrop-blur-[2px]"><FaUserAstronaut/>Login</Link>
        </motion.header>
    )
}