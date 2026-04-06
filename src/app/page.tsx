'use client';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';
import FeaturesSection from '@/components/sections/features/FeatureSection';
import Pricing from '@/components/sections/pricing/Pricing';
import { TestimonialCarousel } from '@/components/sections/testimonials/TestimonialCarousel';
import { PartnerMarquee } from '@/components/sections/partners/PartnerMarquee';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			{/* Navbar */}
			<NavbarCTA />
			{/* Hero Section */}
			<HeroMobileApp />

			<main className="flex-1 py-16 space-y-16">
				<Container>
					<PartnerMarquee />
					{/* Features Section */}
					<FeaturesSection />
					<Pricing />
					<TestimonialCarousel />
				</Container>
			</main>

			{/* Footer */}
			<FooterMultiColumn />
		</div>
	);
}
