'use client'

// HOOKS
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

// STORES & VARS
import { GlobalStores } from "@/stores/global";
import { navigationDurationSeconds } from "@/animation/controls";

// COMPONENTS
import Header from "@/components/pages/projects/orbit/Header";
import Main from "@/components/pages/projects/orbit/sections/Main";
import About from "@/components/pages/projects/orbit/sections/About";
import Alert from "@/components/global/Alert";
import Functions from "@/components/pages/projects/orbit/sections/Functions";


export default function Home() {
  
  // STORAGES
  const { data, fetch: fetchCommunity } = GlobalStores.community()
  const { isPageVisible, setPageVisible } = GlobalStores.animation()

  // Включаем страницу по умолчанию
  useEffect(() => { 
    setPageVisible(true); 
    if (!data) fetchCommunity() 
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
              transition={{ duration: navigationDurationSeconds, ease: "easeOut" }}
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
