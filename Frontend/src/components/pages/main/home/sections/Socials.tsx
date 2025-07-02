import Link from "next/link";
import { motion } from "motion/react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaUsers } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { GlobalStores } from "@/stores/global";

export default function Socials() {

  const { data } = GlobalStores.community()

  return(
      <section id="contacts" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
        <div className="social-card-block w-[60%] flex justify-center flex-col">
          <motion.h2 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}} className="text-5xl flex justify-center gap-4 headers-text"><IoShareSocial/>Наши Сети</motion.h2>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="flex justify-center gap-8 mt-8" id="socials-list">
            <Link href="https://discord.gg/mPKa2sUrmZ" className="glass glow_button py-3 px-6 min-w-[220px] flex justify-center gap-3 text-3xl rounded-full social-card">
              <FaDiscord/>
              Discord
              <span className="text-white/10">|</span>
              <span className="flex justify-center items-center gap-2 text-2xl text-white/60"><FaUsers/>120</span>
            </Link>

            <Link href="https://t.me/redlite_clan" className="glass glow_button py-3 px-6 min-w-[220px] flex justify-center gap-3 text-3xl rounded-full social-card ">
              <FaTelegramPlane/>
              Telegram
              <span className="text-white/10">|</span>
              <span className="flex justify-center items-center gap-2 text-2xl text-white/60"><FaUsers/>{data?.telegram_members}</span>
            </Link>
        </motion.div>
      </div>
    </section>
  )
}