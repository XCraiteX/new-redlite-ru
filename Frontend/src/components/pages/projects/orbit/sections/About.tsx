import { RiHeart2Fill } from "react-icons/ri";
import { motion } from "motion/react"

export default function About() {

    const words = ["Orbit", "Verse", "-", "Многофункциональный", "и", "полность", "настраиваемый", "голосовой", "ассистент", "специально", "для", "тебя.", "Выбирай", "набор", "озвучки", "и", "у", "тебя", "есть", "друг", "(или девушка).", "Orbit", "обеспечит", "максимальную", "скорость", "и", "удобство", "во", "время", "работы", "за", "вашим", "ПК.", "Переходи", "в", "раздел", "функций", "и", "смотри", "возможности", "Orbit."]

    return(
        <section id="about" className="h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
            <motion.h2
                initial={{x: 10, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                className="text-5xl font-bold flex gap-2">
                    <RiHeart2Fill/>
                    О проекте
            </motion.h2>

            <div className="p-8 rounded-2xl min-w-[32%] max-w-[42%] border-blue-500">
                
                <motion.div className="text-2xl text-[1.6em]">
                    {words.map((word, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10, x: 10 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            style={{marginRight: 5}}
                            transition={{ 
                                duration: 0.3,
                                delay: index * 0.1 + 0.8,
                                ease: "easeOut"
                            }}
                            className="inline-block"
                        >
                            {word === "Orbit" ? (
                                <>
                                    <span className="text-blue-400">Orbit</span>
                                </>
                            ) : (
                                word
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}