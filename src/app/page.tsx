'use client';

import Image from 'next/image';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';
import FeaturesSection from '@/components/sections/features/FeatureSection';
import FeaturesSplit from '@/components/sections/features/FeaturesSplit';
import { featuresData, featuresSplitData } from '@/data/features';
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

			<main className="flex-1 py-16 space-y-16">
				<Container>
					{/* Features Section */}
					<FeaturesSection features={featuresData} />
					{/* <FeaturesSplit features={featuresSplitData} /> */}
				</Container>
			</main>

			{/* Footer */}
			<FooterMultiColumn />
		</div>
	);
}
