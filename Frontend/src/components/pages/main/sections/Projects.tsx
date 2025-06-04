import { FaProjectDiagram } from "react-icons/fa";
import { motion } from 'motion/react';
import Project from "../Project";


export default function Projects() { 
    return(
        <section id="projects" className="h-screen w-screen flex-shrink-0 snap-center flex justify-center overflow-y-scroll">
        
        <div className="p-8 rounded-2xl mt-14 w-full flex flex-col items-center">
          <motion.h2 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.4}}
            className="text-5xl font-bold mb-5 flex gap-2"><FaProjectDiagram/>Наши проекты</motion.h2>
          
          <div className="flex flex-col w-[60%] mt-5 gap-12 pb-12">

            <Project 
              name="Orbit Verse Assistant" 
              detail="Улучшенный Whisper Assistant"
              image="/global/projects/verse.png"
              link="/"
              rotate="right"
              start_delay={0.8}
            />

            <Project 
              name="Whisper Voice Assistant" 
              detail="Удобный и лёгкий голосовой помощник"
              image="/global/projects/whisper.png"
              link="/"
              rotate="left"
              start_delay={0.8}
            />

            <Project 
              name="Skylite Manager" 
              detail="Удобный менеджер для вашего канала"
              image="/global/projects/skylite.png"
              link="/"
              rotate="right"
              start_delay={0.8}
            />

            <Project 
              name="Redlite Manager" 
              detail="Многофункциональный Discord менеджер"
              image="/global/projects/redlite.png"
              link="/"
              rotate="left"
              start_delay={0.8}
            />

            <Project 
              name="Starlite Guard" 
              detail="Лучший защитник вашего Discord сервера"
              image="/global/projects/starlite.png"
              link="/"
              rotate="right"
              start_delay={0.8}
            />
          </div>
        </div>
      </section>
    )
}