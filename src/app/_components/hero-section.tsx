'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from './header'
export default function HeroSection() {
	return (
		<div className='w-full min-h-[800px] relative bg-[url(/hero/background.png)] bg-cover bg-center flex flex-col gap-y-10'>
			<Header />
			<div className='flex items-center justify-center'>
				<motion.span
					className='text-4xl  md:text-6xl lg:text-9xl font-extrabold -mr-6 md:-mr-9 lg:-mr-12 text-primary'
					initial={{
						opacity: 0,
						x: 150,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 0.4,
						delay: 0.5,
					}}
				>
					Epic
				</motion.span>
				<motion.img
					src='/hero/burger.png'
					width={400}
					height={400}
					className='z-10 w-64 md:w-80 lg:w-96'
					initial={{
						opacity: 0,
						y: 150,
						scale: 0.1,
						rotate: 360,
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
						rotate: 0,
					}}
					transition={{
						duration: 0.5,
					}}
				/>
				<motion.span
					className='text-4xl md:text-6xl lg:text-9xl font-extrabold -ml-6 md:-ml-9 lg:-ml-12 text-primary'
					initial={{
						opacity: 0,
						x: -150,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 0.4,
						delay: 0.5,
					}}
				>
					Eats
				</motion.span>
			</div>
			<div className='flex justify-center items-center flex-col gap-y-4'>
				<motion.span
					className='font-extrabold text-2xl md:text-4xl text-white text-center'
					initial={{
						opacity: 0,
						y: 100,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.5,
					}}
				>
					Discover the best food from over 1000 restaurants and
					fast
				</motion.span>
				<motion.div
					className='bg-white rounded-full px-4 py-2 overflow-hidden flex items-center gap-x-2'
					initial={{
						opacity: 0,
						y: 100,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}
				>
					<MapPin />
					<Input
						className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
						placeholder='Enter your ZIP code'
					/>
					<Button
						variant={'ghost'}
						size={'icon'}
						className='rounded-full size-6'
					>
						<ArrowRight className='text-muted-foreground' />
					</Button>
				</motion.div>
			</div>
		</div>
	)
}
