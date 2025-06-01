import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function Projects() { 
    return(
        <section id="projects" className="h-screen w-screen flex-shrink-0 snap-center flex justify-center overflow-y-scroll">
        
        <div className="p-8 rounded-2xl mt-12 w-full flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-4 flex gap-2"><FaProjectDiagram/>Наши проекты</h2>
          
          <div className="flex flex-col w-[60%] mt-4 gap-12 pb-12">

            <div className="flex justify-start">
              <div className="flex gap-6">
                <img src="global/projects/whisper.png" width={200} className="bg-red-500/10 p-6 rounded-xl"/>
                <div className="flex flex-col gap-1">
                  <h1 className="text-5xl">Whisper Voice Assistant</h1>
                  <h2 className="text-3xl text-white/70">Удобный и лёгкий голосовой помощник</h2>
                  <Link href='#about' className="flex gap-2 py-2 px-6 text-2xl bg-red-800/60 w-fit mt-2 items-center arrow_btn shadow-[0_0_6px_1px] shadow-red-800">Подробнее<MdOutlineDoubleArrow/></Link>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
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
            </div>
          </div>
        </div>
      </section>
    )
}