import Banner from '@/components/pages/other/couples/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Счастливые | REDLITE',
	icons: '/favicons/redlite.ico',
	description: '',
}

export default function Home() {
	return (
		<>
			<div className='couples_page flex justify-center py-20 px-80'>
				<div>

					<Banner
						name2='akinashi'
						name1='Нелла'
						img2='/images/couples/akinashi.png'
						img1='/images/couples/nela.png'
						start_time='2024-09-14T21:25:00'
					/>

					<Banner
						name2='Кейсу'
						name1='Крайтекс'
						img2='/images/couples/keisu.jpg'
						img1='/images/couples/xcraitex2.jpg'
						start_time='2025-07-29T08:21:59'
					/>


					{/* <StoppedBanner
						name2='Devil'
						name1='Крайтекс'
						img2='/images/couples/devil.jpg'
						img1='/images/couples/xcraitex.jpg'
						start_time='2025-05-18T05:25:25'
						end_time='2025-07-24T03:50:00'
					/> */}

					<Banner
						name2='Ангелина'
						name1='Лёня'
						img2='/images/couples/angelina.webp'
						img1='/images/couples/lenya.webp'
						start_time='2025-01-10T13:13:13'
					/>
				</div>
			</div>
		</>
	)
}
