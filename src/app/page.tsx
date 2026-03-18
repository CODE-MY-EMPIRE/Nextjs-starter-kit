'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/cards/Card';
import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Navbar */}
			<NavbarCTA />

			{/* Main Content */}
			<main className="py-16 space-y-16">
				<Container>
					{/* Hero Section */}
					<section className="space-y-6 text-center">
						<h1>Starter Template Test</h1>

						<p className="max-w-2xl mx-auto">
							If the theme system works, this text should look muted and adapt
							to light and dark mode.
						</p>
					</section>
				</Container>
			</main>
		</div>
	);
}
