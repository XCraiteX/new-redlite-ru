import UserCard from "@/components/pages/other/poems/UserCard";


export default function CardSection() {
	return (
		<section className='w-full flex items-center justify-center'>
			<div className='w-[100%] flex justify-center mt-28'>
				<UserCard
					name='XCraiteX'
					url='/images/couples/xcraitex.jpg'
					desc='Скитаюсь в поисках себя, но кто полюбит ли меня..'
					langs={['cs', 'python', 'html', 'css', 'js', 'ts', 'scss', 'react']}
				/>
			</div>
		</section>
	)
}
