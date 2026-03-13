'use client';

import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '@/components/ui/Button';

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground flex items-center justify-center">
			<main className="w-full max-w-3xl space-y-8 p-10">
				<ThemeToggle />
				<h1 className="text-4xl font-bold">Starter Template Test</h1>

				<p className="text-muted-foreground">
					If the theme system works, this text should look muted.
				</p>

				{/* Card Example */}
				<div className="bg-card border border-border rounded-xl p-6">
					<h2 className="text-xl font-semibold">Card Component</h2>
					<p className="text-muted-foreground mt-2">
						This card should adapt automatically to light and dark mode.
					</p>
				</div>

				{/* Button Example */}
				<Button
					onClick={() => console.log('clicked')}
					size="lg"
				>
					Primary
				</Button>

				<Button
					variant="secondary"
					size="lg"
				>
					Secondary
				</Button>
			</main>
		</div>
	);
}
