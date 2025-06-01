'use client'
import { RiHeart2Fill } from "react-icons/ri";
import { RiCoupon2Fill } from "react-icons/ri";
import { useState } from "react";

import { FaDiscord } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

import Link from "next/link";
import Projects from "@/components/main/sections/Projects";
import { motion } from "motion/react";

export default function Home() {

  const [codeStatus, setCodeStatus] = useState('');

  return (
    <>
    <main className="h-screen w-screen snap-x snap-mandatory flex overflow-x-hidden scroll-smooth">
      <Home/>


      <section id="about" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
        <h2 className="text-5xl font-bold mb-4 flex gap-2"><RiHeart2Fill/>О нас</h2>
        <div className="p-8 rounded-2xl min-w-[32%] max-w-[42%] border-red-500">
          <p className="text-2xl text-[1.6em]"><span className="text-red-500">RED</span>LITE - Маленький клан программистов. Команда людей, желающих сделать что-то хорошее для этого мира. Мы занимаемся <span className="underline">устранением Telegram-каналов, связанных с живодёрством, мошенничеством и терроризмом</span>, <span className="underline">проводим DDoS-атаки на мошеннические сайты</span>, разрабатываем полезное программное обеспечение, создаём Telegram и Discord ботов и разрабатываем игры.</p>
        </div>
      </section>


      <Projects/>


      <section id="codes" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center overflow-hidden">
        <div className="p-8 rounded-2xl">
          <h2 className="text-5xl font-bold mb-4 flex gap-2"><RiCoupon2Fill/>Активировать код</h2>
          <input className="input_bg w-full p-2 border-1 border-red-500/40 rounded-sm outline-none text-2xl text-center" placeholder="CODE"/>
          <button className="bg-red-400/20 rounded-sm text-2xl py-1 hover:shadow-[0_0_4px_1px] duration-[0.2s] mt-2 w-full">Активировать</button>
          <p className="text-center text-xl mt-2">{codeStatus}</p>
        </div>
      </section>


      <section id="contacts" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
        <div className="w-[60%] flex justify-center flex-col">
          <h2 className="text-5xl flex justify-center gap-4"><IoShareSocial/>Наши Сети</h2>
          <div className="flex justify-center gap-8 mt-8">
            <Link href="https://discord.gg/mPKa2sUrmZ" className="glass glow_button py-3 w-[220px] flex justify-center gap-2 text-3xl rounded-full">
              <FaDiscord/>
              Discord
            </Link>

            <Link href="https://t.me/redlite_clan" className="glass glow_button py-3 w-[220px] flex justify-center gap-2 text-3xl rounded-full">
              <FaTelegramPlane/>
              Telegram
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
