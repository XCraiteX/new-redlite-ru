'use client'
import { useEffect, useState } from 'react'

type BannerProps = {
	name1: string
	img1: string
	name2: string
	img2: string
	start_time: string // Дата начала в строковом формате
}

export default function Banner({
	name1,
	img1,
	name2,
	img2,
	start_time,
}: BannerProps) {
	const [elapsedTime, setElapsedTime] = useState({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const startDate = new Date(start_time)

		const calculateElapsedTime = () => {
			const now = new Date()
			const diffMs = Math.max(0, now.getTime() - startDate.getTime())

			const totalSeconds = Math.floor(diffMs / 1000)
			const totalMinutes = Math.floor(diffMs / (1000 * 60))
			const totalHours = Math.floor(diffMs / (1000 * 60 * 60))
			const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

			const years = Math.floor(totalDays / 365)
			const remainingDays = totalDays % 365
			const months = Math.floor(remainingDays / 30)
			const days = remainingDays % 30
			const hours = totalHours % 24
			const minutes = totalMinutes % 60
			const seconds = totalSeconds % 60

			setElapsedTime({ years, months, days, hours, minutes, seconds })
		}

		calculateElapsedTime()
		const interval = setInterval(calculateElapsedTime, 1000) // Обновляем каждую секунду

		return () => clearInterval(interval)
	}, [start_time])

	return (
		<div className='couple_card flex p-9 rounded-[100px] mb-8'>
			<div className='flex justify-between items-center w-[1100px]'>
				<div className='w-[20%] text-center text-[1.6em]'>
					<img
						className='rounded-[50%] ava'
						src={img1}
					/>
					<h2 className='text-[1.2em text-white mt-5 p-0 couple_name'>
						{name1}
					</h2>
				</div>

				<div className='w-[25%] flex justify-center'>
					<div className='flex flex-col'>
						<div className='flex justify-center'>
							<img src='/images/couples/heart.png' className='w-[180px]' />
						</div>
						<div className='p-0 m-0 w-[100%] flex justify-center text-lg'>
							<div className='flex gap-8 mt-4 justify-center '>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Лет</h2>
									<span id='years' className='text-white text-center'>
										{elapsedTime.years}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Мес</h2>
									<span id='months' className='text-white text-center'>
										{elapsedTime.months}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Дн</h2>
									<span id='days' className='text-white text-center'>
										{elapsedTime.days}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Час</h2>
									<span id='hours' className='text-white text-center'>
										{elapsedTime.hours}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Мин</h2>
									<span id='minutes' className='text-white text-center'>
										{elapsedTime.minutes}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Сек</h2>
									<span id='seconds' className='text-white text-center'>
										{elapsedTime.seconds}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[20%] text-center text-[1.6em]'>
					<img
						className='rounded-[50%] ava'
						src={img2}
					/>
					<h2 className='text-[1.2em text-white mt-5 p-0 couple_name'>
						{name2}
					</h2>
				</div>
			</div>
		</div>
	)
}
