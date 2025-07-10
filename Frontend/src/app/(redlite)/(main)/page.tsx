'use client'

// MODULES & CSS
import "@/css/adaptation/main.css"
import { AnimatePresence, motion } from "motion/react";
import { navigationDurationSeconds } from "@/animation/controls";

// COMPONENTS
import Projects from "@/components/pages/main/home/sections/Projects";
import Main from "@/components/pages/main/home/sections/Main";
import About from "@/components/pages/main/home/sections/About";
import Header from "@/components/global/Header";
import Socials from "@/components/pages/main/home/sections/Socials";
import Alert from "@/components/global/Alert";
import Codes from "@/components/pages/main/home/sections/Codes";

// HOOKS & STORES
import { useEffect } from "react";
import { GlobalStores } from "@/stores/global";
import { useAnimationStore } from "@/stores/animation";


export default function Home() {
  // STORES
  const { data, fetch: fetchCommunity } = GlobalStores.community()
  const { isPageVisible, setPageVisible } = useAnimationStore()

  // Включаем видимость страницы (анимации)
  useEffect(() => {
    setPageVisible(true)

    if (!data) fetchCommunity()
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
              transition={{ duration: navigationDurationSeconds, ease: "easeOut" }}
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
