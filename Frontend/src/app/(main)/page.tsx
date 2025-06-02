'use client'
import { RiCoupon2Fill, RiGift2Fill } from "react-icons/ri";
import { useState } from "react";

import { FaDiscord } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { HiGiftTop } from "react-icons/hi2";

import Link from "next/link";
import Projects from "@/components/main/sections/Projects";
import Main from "@/components/main/sections/Main";
import About from "@/components/main/sections/About";
import Header from "@/components/main/Header";

import { motion } from "motion/react";

export default function Home() {

  const [codeStatus, setCodeStatus] = useState('');

  return (
    <>
    <Header/>
    <main className="h-screen w-screen snap-x snap-mandatory flex overflow-x-hidden scroll-smooth">
      <Main/>
      <About/>
      <Projects/>

      <section id="codes" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center overflow-hidden">
        <div className="p-8 rounded-2xl">
          <motion.h2 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className="text-5xl font-bold mb-4 flex gap-3 items-center"><HiGiftTop/>Активировать код</motion.h2>
          <motion.input initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="input_bg w-full p-2 border-1 border-red-500/20 rounded-sm outline-none text-2xl text-center" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"/>
          <motion.button initial={{x: -10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.3, delay: 0.8}} className="bg-red-400/20 rounded-sm text-2xl py-[6px] hover:shadow-[0_0_4px_1px] duration-[0.2s] mt-2 w-full flex gap-2 items-center justify-center"><RiCoupon2Fill/>Активировать</motion.button>
          <p className="text-center text-xl mt-2">{codeStatus}</p>
        </div>
      </section>


      <section id="contacts" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
        <div className="w-[60%] flex justify-center flex-col">
          <motion.h2 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className="text-5xl flex justify-center gap-4"><IoShareSocial/>Наши Сети</motion.h2>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.8}}
           className="flex justify-center gap-8 mt-8">
            <Link href="https://discord.gg/mPKa2sUrmZ" className="glass glow_button py-3 w-[220px] flex justify-center gap-2 text-3xl rounded-full">
              <FaDiscord/>
              Discord
            </Link>

            <Link href="https://t.me/redlite_clan" className="glass glow_button py-3 w-[220px] flex justify-center gap-2 text-3xl rounded-full">
              <FaTelegramPlane/>
              Telegram
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  )
}
