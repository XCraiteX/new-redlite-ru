
import CardSection from '@/components/pages/other/poems/xcraitex/CardSection'
import PoemsSection from '@/components/pages/other/poems/xcraitex/PoemsSection'
import { Metadata } from 'next'

import "@/css/other/poems/page.scss"
import "@/css/other/poems/poems.scss"


export const metadata: Metadata = {
	title: 'XCraiteX - Стихотворения',
	icons: '/favicons/redlite.ico',
	description: '',
}

export default function Home() {
	return (
		<>
			<CardSection />
			<PoemsSection />
		</>
	)
}
