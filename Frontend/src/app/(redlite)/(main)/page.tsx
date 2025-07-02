'use client'
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GlobalStores } from "@/stores/global";
import { useAnimationStore } from "@/stores/animation";

import Projects from "@/components/pages/main/home/sections/Projects";
import Main from "@/components/pages/main/home/sections/Main";
import About from "@/components/pages/main/home/sections/About";
import Header from "@/components/global/Header";
import Socials from "@/components/pages/main/home/sections/Socials";
import Alert from "@/components/global/Alert";
import Codes from "@/components/pages/main/home/sections/Codes";

import "@/css/adaptation/main.css"

export default function Home() {
  const { data, fetch: fetchCommunity } = GlobalStores.community()
  const { isPageVisible, setPageVisible } = useAnimationStore()

  useEffect(() => {
    if (!data) fetchCommunity()
  }, [])

  useEffect(() => {
    setPageVisible(true)
  }, [])

  return (
    <>
      <Header />
      <main className="h-screen w-screen snap-x snap-mandatory flex overflow-x-hidden scroll-smooth" id="main-page-section">
        <AnimatePresence mode="wait">
          {isPageVisible && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-row w-full"
              id="main-page-container"
            >
              <Main/>
              <About/>
              <Projects/>
              <Codes/>
              <Socials/>
            </motion.div>
          )}
        </AnimatePresence>
        <Alert 
          message="Добро пожаловать путник!" 
          image="cosmo"
          color="red"
          duration={8000}
          delay={2}
        />
      </main>
    </>
  )
}
