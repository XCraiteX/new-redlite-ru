'use client'
import { useEffect } from "react";
import { GlobalStores } from "@/stores/global";
import { useAnimationStore } from "@/stores/animation";
import Header from "@/components/pages/projects/orbit/Header";
import Main from "@/components/pages/projects/orbit/sections/Main";
import About from "@/components/pages/projects/orbit/sections/About";
import { AnimatePresence, motion } from "motion/react";
import Alert from "@/components/global/Alert";
import Functions from "@/components/pages/projects/orbit/sections/Functions";


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
              <Functions/>

            </motion.div>
          )}
        </AnimatePresence>
        <Alert 
          message="Добро пожаловать в Orbit Verse!" 
          image="cosmo"
          color="blue"
          duration={8000}
          delay={2}
        />
      </main>
    </>
  )
}
