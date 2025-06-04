'use client'
import { useEffect } from "react";
import Projects from "@/components/pages/main/sections/Projects";
import Main from "@/components/pages/main/sections/Main";
import About from "@/components/pages/main/sections/About";
import Header from "@/components/pages/main/Header";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { GlobalStores } from "@/stores/global";
import Socials from "@/components/pages/main/sections/Socials";
import Alert from "@/components/global/Alert";
import { useAnimationStore } from "@/stores/animation";
import Codes from "@/components/pages/main/sections/Codes";

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
      <main className="h-screen w-screen snap-x snap-mandatory flex overflow-x-hidden scroll-smooth">
        <AnimatePresence mode="wait">
          {isPageVisible && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-row w-full"
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
