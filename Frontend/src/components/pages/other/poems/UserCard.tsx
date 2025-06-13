'use client'
import { motion } from 'framer-motion'

type Card = {
	name: string
	url: string
	desc: string
	langs: string[]
}

export default function UserCard({ name, url, desc, langs }: Card) {
	return (
		<motion.div
			className='flex justify-center'
			// initial={{ x: -10, opacity: 0 }}
			// animate={{ x: 0, opacity: 1 }}
			// transition={{ duration: 0.6 }}
		>
			<div className='user_card bg-black/40 backdrop-blur-[2px] rounded-[6px] border-t-[1px] border-b-[1px] border-[#ff003d] w-[800px] flex justify-center'>
				<div className='card_block flex gap-2 w-[100%] h-[100%]'>
					<div className='card_img flex w-[30%]'>
						<img src={url} className='rounded-[8px] w-[200px]' />
					</div>
					<div className='text-white text-left p-2 flex flex-col justify-center'>
						<motion.div
							initial={{ x: 10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className='text-[2.4em]'>
								{name} <span className='text-[#ff003d]'>x REDLITE</span>
							</h2>
						</motion.div>
						<h3 className='text-[1.4em] text-[#9f9f9f]'>{desc}</h3>
						{/* <motion.div
							initial={{ x: -10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
						>
							<div className='lang_list inline-flex gap-[12px] mt-2 w-[100%]'>
								{langs.map((link, index) => (
									<img
										key={index}
										src={`/langs/${link}.png`}
										className='lang'
										title={link}
									/>
								))}
							</div>
						</motion.div> */}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
