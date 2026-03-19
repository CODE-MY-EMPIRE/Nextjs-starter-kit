'use client';

import NavbarCTA from '@/components/layout/Navbar/NavbarCTA';
import Container from '@/components/ui/Container';
import FooterMultiColumn from '@/components/layout/Footer/FooterMultiColumn';
import FooterMinimal from '@/components/layout/Footer/FooterMinimal';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			{/* Navbar */}
			<NavbarCTA />

			{/* Main Content grows to push footer down */}
			<main className="flex-1 py-16 space-y-16">
				<Container>
					{/* Hero Section */}
					<section className="space-y-6 text-center">
						<h1 className="text-4xl font-bold">Starter Template Test</h1>

						<p className="max-w-2xl mx-auto text-muted-foreground">
							If the theme system works, this text should look muted and adapt
							to light and dark mode.
						</p>
					</section>
				</Container>
			</main>

			{/* Footer */}
			<FooterMultiColumn />
		</div>
	);
}
