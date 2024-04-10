import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface FeatureItemProps {
	imageUrl: string
	title: string
	description: string
	link: string
}

const FeatureItem = ({
	description,
	imageUrl,
	link,
	title,
}: FeatureItemProps) => {
	return (
		<div className='flex flex-row lg:flex-col items-center justify-center gap-2 hover:bg-accent p-2 rounded-md transition-all'>
			<Image
				src={imageUrl}
				alt={title}
				width={150}
				height={150}
				className='size-[200px] md:size-[300px]'
			/>
			<div className='flex flex-col items-center'>
				<h2 className='font-bold text-xl text-center'>{title}</h2>
				<span className='text-balance text-center max-w-60'>
					{description}
				</span>
				<Link
					href={link}
					className='text-primary hover:underline font-bold mt-2 flex items-center'
				>
					Get Started
					<ArrowRight />
				</Link>
			</div>
		</div>
	)
}

export default function FeaturesSection() {
	return (
		<section className='container place-items-center grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5'>
			<FeatureItem
				imageUrl='/features/cooking.svg'
				title='Promote your business'
				description='Grow your business and reach new customers by partnering with us.'
				link='#'
			/>
			<FeatureItem
				imageUrl='/features/eating.svg'
				title='Find your favorite food'
				description='Order from your favorite restaurants and get it delivered to your doorstep.'
				link='#'
			/>
			<FeatureItem
				imageUrl='/features/street_food.svg'
				title='No more waiting in line'
				description='Skip the line and order ahead to save time and avoid the wait.'
				link='#'
			/>
		</section>
	)
}
