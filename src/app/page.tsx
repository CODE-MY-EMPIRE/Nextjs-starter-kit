'use client';

import Image from 'next/image';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';
import FeaturesSection from '@/components/sections/features/FeatureSection';
import FeaturesSplit from '@/components/sections/features/FeaturesSplit';
import { featuresData, featuresSplitData } from '@/data/features';
import {
	heroCenteredData,
	heroDefaultData,
	heroFeaturesData,
	heroMobileAppData,
} from '@/data/hero';
import HeroFeatures from '@/components/sections/hero/HeroFeatures';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import Hero from '@/components/sections/hero/Hero';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			{/* Navbar */}
			<NavbarCTA />
			{/* Hero Section */}
			<HeroMobileApp {...heroMobileAppData} />
			{/* <HeroFeatures {...heroFeaturesData} />
			<HeroCentered {...heroCenteredData} />
			<Hero {...heroDefaultData} /> */}

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
