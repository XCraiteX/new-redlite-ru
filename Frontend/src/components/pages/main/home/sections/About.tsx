import { RiHeart2Fill } from "react-icons/ri";
import { motion } from "motion/react"

export default function About() {

    const words = ["REDLITE", "-", "Маленький", "клан", "программистов.", "Команда", "людей,", "желающих", "сделать", "что-то", " хорошее", "для", "этого", "мира.", "Мы", "занимаемся", "устранением", "Telegram-каналов,", "связанных", "с", "живодёрством,", " мошенничеством", "и", "терроризмом,", "проводим", "DDoS-атаки", "на", "мошеннические", "сайты,", "разрабатываем", "полезное", "программное", "обеспечение,", "создаём", "Telegram", "и", "Discord", "ботов", "и", "разрабатываем", "игры."]

    return(
        <section id="about" className="min-h-screen w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col overflow-hidden">
            <motion.h2
                initial={{x: 10, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                className="text-5xl font-bold flex gap-2 headers-text">
                    <RiHeart2Fill/>
                    О нас
            </motion.h2>

            <div className="p-8 rounded-2xl min-w-[32%] max-w-[42%] border-red-500" id="main-about-text">
                
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
                            {index === 0 ? (
                                <>
                                    <span className="text-red-500">RED</span>
                                    <span>LITE</span>
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