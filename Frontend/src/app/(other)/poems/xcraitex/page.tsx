
import CardSection from '@/components/pages/other/poems/xcraitex/CardSection'
import PoemsSection from '@/components/pages/other/poems/xcraitex/PoemsSection'
import { Metadata } from 'next'

import "@/css/other/poems/page.scss"
import "@/css/other/poems/poems.scss"


export const metadata: Metadata = {
  title: 'XCraiteX - Стихотворения',
  description: 'Стихотворения от XCraiteX из REDLITE CLAN',
  keywords: ['xcraitex', 'Крайтекс', 'стихи', 'поэзия', 'REDLITE', 'редлайт', 'авторские стихи', 'современная поэзия'],
  authors: [{ name: 'XCraiteX' }],
  openGraph: {
    title: 'XCraiteX - Стихотворения',
    description: 'Стихотворения от XCraiteX из REDLITE CLAN',
    url: 'https://redlite.ru/poems/xcraitex', 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'XCraiteX - Стихотворения',
    description: 'Стихотворения от XCraiteX из REDLITE CLAN',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
	return (
		<>
			<CardSection />
			<PoemsSection />
		</>
	)
}
