import Actions from '@/Components/Actions'
import Maps from '@/Components/Maps'
import NewProducts from '@/Components/NewProducts'
import Purchases from '@/Components/Purchases'
import Slider from '@/Components/Slider/Slider'
import SpecialOffers from '@/Components/SpecialOffers'

export default function Home() {
	return (
		<main className='w-full mx-auto mb-20'>
			<Slider />
			<div className='px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30'>
				<Actions />
				<NewProducts />
				<Purchases />
				<SpecialOffers />
				<Maps />
			</div>
		</main>
	)
}
