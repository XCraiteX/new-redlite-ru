"use client"
import React, { useState, useEffect } from 'react';

// Вспомогательная функция для расчета времени до даты
function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime(); // в миллисекундах

  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (difference > 0) {
    // Конвертируем миллисекунды в секунды, минуты, часы, дни и месяцы
    seconds = Math.floor((difference / 1000) % 60);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Очень приблизительный расчет месяцев (30 дней в месяце)
    months = Math.floor(days / 30);
    days = days % 30; // Оставшиеся дни после вычисления месяцев
  }

  return { months, days, hours, minutes, seconds };
}

export default function Home() {
  const targetDate = new Date('2026-02-25T18:00:00');


  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000); 
    
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const { months, days, hours, minutes, seconds } = timeLeft;

  return (
    <section className='w-full min-h-screen flex justify-center'>
        <div className='couple_card flex p-9 rounded-[100px] mb-8'>
			<div className='flex justify-between items-center w-[1100px]'>
				<div className='w-[20%] text-center text-[1.6em]'>
					<img
						className='rounded-[50%] ava'
						src="/images/couples/xcraitex2.jpg"
					/>
					<h2 className='text-[1.2em text-white mt-5 p-0 couple_name'>
						Крайтекс
					</h2>
				</div>

				<div className='w-[25%] flex justify-center'>
					<div className='flex flex-col'>
						<div className='flex justify-center text-4xl text-center'>
							{/* <img src='/images/couples/heart.png' className='w-[180px]' /> */}
                            До встречи солнышек
						</div>
						<div className='p-0 m-0 w-[100%] flex justify-center text-lg'>
							<div className='flex gap-8 mt-4 justify-center '>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Мес</h2>
									<span id='months' className='text-white text-center'>
										{months > 0 && <span style={{ marginRight: '10px' }}>{months}</span>}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Дн</h2>
									<span id='days' className='text-white text-center'>
										{days > 0 && <span style={{ marginRight: '10px' }}>{days}</span>}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Час</h2>
									<span id='hours' className='text-white text-center'>
										{hours > 0 && <span style={{ marginRight: '10px' }}>{hours}</span>}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Мин</h2>
									<span id='minutes' className='text-white text-center'>
										{minutes > 0 && <span style={{ marginRight: '10px' }}>{minutes}</span>}
									</span>
								</div>
								<div className='text-center timer_text'>
									<h2 className='text-white text-[1.2em]'>Сек</h2>
									<span id='seconds' className='text-white text-center'>
										<span>{seconds}</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[20%] text-center text-[1.6em]'>
					<img
						className='rounded-[50%] ava'
						src="/images/couples/keisu.jpg"
					/>
					<h2 className='text-[1.2em text-white mt-5 p-0 couple_name'>
						Кейсу
					</h2>
				</div>
			</div>
		</div>

    </section>
  );
};