'use client'
import { motion } from 'framer-motion'
import { TbBrandReact } from 'react-icons/tb'

export default function Functions() {
	return (
		<section
			className="h-screen w-screen flex-shrink-0 snap-center flex flex-col overflow-y-auto"
			id='features'
		>
			<div className='flex text-center items-center justify-center flex-col gap-2 mt-20'>
            <motion.h2
                initial={{x: 10, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                className="text-5xl font-bold flex gap-2">
                    <TbBrandReact />
                    Функции
            </motion.h2>
            <motion.h3 
                initial={{x: 10, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                className="text-3xl font-bold flex gap-2 text-white/50"> 
                Функции указаны для Whisper Assistant
            </motion.h3>
			</div>
			<div className='func_elem_container flex w-90% flex-wrap text-white text-center justify-center mt-5 gap-12 pb-10'>
				<div className='flex-col text-left text-xl flex gap-8'>
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.4 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление компьютером</h2>
							<li>Выключи/Перезагрузи ПК</li>
							<li>Сделай тише/громче</li>
							<li>Выключи/включи звук</li>
							<li>
								Звук на <span className='arg'>[10-100] (%)</span>
							</li>
						</div>
					</motion.div>

					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.8 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление окнами</h2>
							<li>
								Закрой окно <span className='arg'>(Alt+F4)</span>
							</li>
							<li>Сверни/Разверни окно</li>
							<li>Сверни/Покажи все окна</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.2 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Показатели времени</h2>
							<li>Сколько время/Который час</li>
							<li>Какой сегодня день/число</li>
							<li>Какой сейчас год</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.6 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление браузером</h2>
							<li>Создай новую вкладку</li>
							<li>Закрой вкладку</li>
							<li>Добавь/убери закладку</li>
							<li>Обнови страницу</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 2 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление файлами</h2>
							<li>
								Выдели всё <span className='arg'>(Ctrl+A)</span>
							</li>
							<li>
								Удали <span className='arg'>(Del)</span>
							</li>
						</div>
					</motion.div>
				</div>

				<div className='flex-col text-left text-xl flex gap-8'>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.4 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление YouTube</h2>
							<li>На весь экран</li>
							<li>
								Выйди <span className='arg'>(Esc)</span>
							</li>
							<li>
								Перемотай на <span className='arg'>[10-90]</span> процентов
							</li>
							<li>Включи следующее видео</li>
							<li>Поставь на паузу/возобнови</li>
							<li>
								Дальше/Назад <span className='arg'>(Shorts/TikTok)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.8 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Поиск информации</h2>
							<li>
								Найди <span className='arg'>[запрос]</span>
							</li>
							<li>
								Найди что такое <span className='arg'>[термин] (Wiki)</span>
							</li>
							<li>
								Найди в ютубе <span className='arg'>[запрос]</span>
							</li>
							<li>
								Найди это <span className='arg'>(выделенный текст)</span>
							</li>
							<li>
								Переведи это/<span className='arg'>[запрос]</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.2 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Управление текстом</h2>
							<li>
								Напиши <span className='arg'>[текст]</span>
							</li>
							<li>
								Напиши <span className='arg'> [кейворд] (кастом)</span>
							</li>
							<li>
								Выдели всё <span className='arg'>(Ctrl+A)</span>
							</li>
							<li>
								Сотри/Удали <span className='arg'>(del)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.6 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Wallpaper Engine</h2>
							<li>
								След./Переключи обои <span className='arg'>(Ctrl+M)</span>
							</li>
							<li>
								Выкл./Вкл. обои <span className='arg'>(Shift+Ctrl+M)</span>
							</li>
						</div>
					</motion.div>
				</div>

				<div className='flex-col text-left text-xl flex gap-8'>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.4 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Музыка (Spotify)</h2>
							<li>Включи/Выключи музыку</li>
							<li>
								Включи <span className='arg'>[кейворд] (локально)</span>
							</li>
							<li>Включи след./прошлый трек</li>
							<li>Сделай громче/тише</li>
							<li>
								Стой/остановись <span className='arg'>(локально)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.8 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Сайты</h2>
							<li>Открой браузер, ютуб, вики</li>
							<li>Открой гугл/яндекс карты</li>
							<li>Открой ворд/эксель/паверпоинт</li>
							<li>Открой тикток, алиэкспресс</li>
							<li>
								Открой <span className='arg'>[кейворд] (кастом)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.2 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Системные программы</h2>
							<li>Открой команд. строку, реестр</li>
							<li>Открой проводник, апп дату</li>
							<li>Открой диспетчер задач/устр.</li>
							<li>Открой панель управления, </li>
							<li>Открой калькулятор/пэйнт</li>
						</div>
					</motion.div>
				</div>
				<div className='flex-col text-left text-xl flex gap-8'>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.4 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Кастомные программы</h2>
							<li>
								Открой <span className='arg'>[кейворд] (ссылка steam)</span>
							</li>
							<li>
								Открой <span className='arg'>[кейворд] (путь к .exe)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.8 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Прочие функции</h2>
							<li>Сделай скриншот</li>
							<li>Поменяй/смени язык</li>
							<li>Орёл или решка</li>
							<li>Покажи все команды</li>
							<li>
								Позиция <span className='arg'>(позиция курсора)</span>
							</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.2 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Коммуникация</h2>
							<li>Привет/Пока</li>
							<li>Как дела</li>
							<li>Спасибо</li>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.75, delay: 1.6 }}
					>
						<div>
							<h2 className='text-blue-400 text-2xl'>Самоуправление</h2>
							<li>Открой настройки</li>
							<li>
								Открой логи <span className='arg'>(распознавание)</span>
							</li>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
