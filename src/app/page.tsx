'use client';

import Image from 'next/image';
import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import Hero from '@/components/sections/hero/Hero';
import { FiBarChart2, FiUsers, FiZap } from 'react-icons/fi';
import HeroFeatures from '@/components/sections/hero/HeroFeatures';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			{/* Navbar */}
			<NavbarCTA />
			{/* Hero Section */}
			<HeroMobileApp
				headline="Track Your Fitness Anywhere"
				subheadline="Your personal fitness coach in your pocket."
				iosCTA={{ text: 'Download on iOS', href: '#' }}
				androidCTA={{ text: 'Get it on Android', href: '#' }}
				mockup={
					<Image
						src="/images/mobile.png"
						alt="Mobile App"
						width={600}
						height={600}
						className=""
					/>
				}
			/>

			{/* Main Content grows to push footer down */}
			<main className="flex-1 py-16 space-y-16">
				<Container>
					<p>Hello</p>
				</Container>
			</main>

			{/* Footer */}
			<FooterMultiColumn />
		</div>
	);
}
