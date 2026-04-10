'use client';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import HeroMobileApp from '@/components/sections/hero/HeroMobileApp';
import FeaturesSplit from '@/components/sections/features/FeaturesSplit';
import Pricing from '@/components/sections/pricing/Pricing';
import { TestimonialCarousel } from '@/components/sections/testimonials/TestimonialCarousel';
import { PartnerMarquee } from '@/components/sections/partners/PartnerMarquee';
import { Faq } from '@/components/sections/faq/Faq';
import CTA from '@/components/ui/CTA';
import HowItWorks from '@/components/sections/how-it-works/HowItWorks';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<NavbarCTA />
			<HeroMobileApp />
			<main className="flex-1 py-16 space-y-16">
				<Container>
					<PartnerMarquee />
					<FeaturesSplit />
					<HowItWorks />
					<Pricing />
					<CTA />
					<TestimonialCarousel />
					<Faq />
					<CTA />
				</Container>
			</main>
			<FooterMultiColumn />
		</div>
	);
}
