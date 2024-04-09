'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={cn(
				'flex justify-between py-2 px-4',
				scrollY > 150 &&
					'bg-white shadow-md fixed inset-x-0 top-0 z-50'
			)}
		>
			<motion.div
				className='flex items-center gap-x-1'
				initial={{
					opacity: 0,
					y: -50,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<Image
					src='/logo.png'
					width={50}
					height={50}
					alt='Epic Eats logo'
				/>
				<span className='leading-none font-bold text-primary'>
					Epic
					<br />
					Eats
				</span>
			</motion.div>
			<div className='md:flex items-center gap-x-2 hidden'>
				<motion.button
					className='bg-primary text-white px-4 py-2 rounded-lg font-bold'
					initial={{
						opacity: 0,
						y: -50,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.5,
					}}
				>
					Order Now
				</motion.button>
				<motion.button
					className='bg-white text-black px-4 py-2 rounded-lg font-bold'
					initial={{
						opacity: 0,
						y: -50,
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
					Sign In
				</motion.button>
			</div>
			<div className='md:hidden'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size={'icon'} variant={'ghost'}>
							<Menu className='text-primary' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>
							<Button variant={'ghost'}>Order Now</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button variant={'ghost'}>Sign In</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
