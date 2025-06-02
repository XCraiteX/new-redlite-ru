import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from 'motion/react';

export default function Projects() { 
    return(
        <section id="projects" className="h-screen w-screen flex-shrink-0 snap-center flex justify-center overflow-y-scroll">
        
        <div className="p-8 rounded-2xl mt-14 w-full flex flex-col items-center">
          <motion.h2 
            initial={{x: 20, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.4, delay: 0.4}}
            
          className="text-5xl font-bold mb-5 flex gap-2"><FaProjectDiagram/>Наши проекты</motion.h2>
          
          <div className="flex flex-col w-[60%] mt-5 gap-12 pb-12">

            <div className="flex justify-start">
              <div className="flex gap-6">
                <motion.div initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="bg-red-500/10 rounded-xl">
                  <motion.img initial={{x: -25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} src="global/projects/whisper.png" width={200} className="p-6"/>
                </motion.div>
                <div className="flex flex-col gap-1">
                  <motion.h1 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} className="text-5xl">Whisper Voice Assistant</motion.h1>
                  <motion.h2 initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.2}} className="text-3xl text-white/70">Удобный и лёгкий голосовой помощник</motion.h2>
                  <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.4}}>
                    <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1 items-end">
                  <motion.h1 initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} className="text-5xl">Skylite Manager</motion.h1>
                  <motion.h2 initial={{x: -10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.2}} className="text-3xl text-white/70">Удобный менеджер для вашего канала</motion.h2>
                  <motion.div initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.4}}>
                    <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                  </motion.div>
                </div>
                <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="bg-red-500/10 rounded-xl">
                  <motion.img initial={{x: 25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} src="global/projects/skylite.png" width={200} className="p-2"/>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="flex gap-6">
                <motion.div initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="bg-red-500/10 rounded-xl">
                  <motion.img initial={{x: -25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} src="global/projects/redlite.png" width={200} className="p-6"/>
                </motion.div>
                <div className="flex flex-col gap-1">
                  <motion.h1 initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} className="text-5xl">Redlite Manager</motion.h1>
                  <motion.h2 initial={{x: 10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.2}} className="text-3xl text-white/70">Многофункциональный Discord менеджер</motion.h2>
                  <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.4}}>
                    <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1 items-end">
                  <motion.h1 initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} className="text-5xl">Starlite Guard</motion.h1>
                  <motion.h2 initial={{x: -10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.2}} className="text-3xl text-white/70">Лучший защитник вашего Discord сервера</motion.h2>
                  <motion.div initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1.4}}>
                    <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                  </motion.div>
                </div>
                <motion.div initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 0.8}} className="bg-red-500/10 rounded-xl">
                  <motion.img initial={{x: 25, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.4, delay: 1}} src="global/projects/starlite.png" width={200} className="p-5"/>
                </motion.div>
              </div>
            </div>


            {/* <div className="flex justify-end">
              <div className="flex gap-6">
                <div className="flex flex-col items-end gap-1">
                  <h1 className="text-5xl">Skylite Manager</h1>
                  <h2 className="text-3xl text-white/70 text-right">Удобный менеджер для вашего канала</h2>
                  <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                </div>
                <img src="global/projects/skylite.png" width={200} className="bg-red-500/10 p-6 rounded-xl"/>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="flex gap-6">
                <img src="global/projects/starlite.png" width={200} className="bg-red-500/10 p-6 rounded-xl"/>
                <div className="flex flex-col gap-1">
                  <h1 className="text-5xl">Starlite Guard</h1>
                  <h2 className="text-3xl text-white/70">Помощник в защите Discord серверов</h2>
                  <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex gap-6">
                <div className="flex flex-col items-end gap-1">
                  <h1 className="text-5xl">Redlite Manager</h1>
                  <h2 className="text-3xl text-white/70 text-right">Многофункциональный менеджер Discord</h2>
                  <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                </div>
                <img src="global/projects/redlite.png" width={200} className="bg-red-500/10 p-6 rounded-xl"/>
              </div>
            </div> */}


          </div>

        </div>
      </section>
    )
}