'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

type HeroProps = {
	headline: string;
	subheadline?: string;
	primaryCTA: { text: string; href: string };
	secondaryCTA?: { text: string; href: string };
	illustration?: React.ReactNode; // optional, for image or SVG
};

const Hero = ({
	headline,
	subheadline,
	primaryCTA,
	secondaryCTA,
	illustration,
}: HeroProps) => {
	return (
		<section className="bg-background text-foreground py-2 md:py-20">
			<Container className="flex flex-col-reverse md:flex-row items-center gap-12">
				{/* Text Content */}
				<div className="flex-1 text-center md:text-left space-y-6">
					<h1>
						{headline}
					</h1>
					{subheadline && (
						<p>
							{subheadline}
						</p>
					)}

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
						<Button
							variant="primary"
							size="lg"
							onClick={() => (window.location.href = primaryCTA.href)}
						>
							{primaryCTA.text}
						</Button>

						{secondaryCTA && (
							<Button
								variant="secondary"
								size="lg"
								onClick={() => (window.location.href = secondaryCTA.href)}
							>
								{secondaryCTA.text}
							</Button>
						)}
					</div>
				</div>

				{/* Illustration / Image */}
				{illustration && (
					<div className="flex-1 flex justify-center md:justify-end">
						{illustration}
					</div>
				)}
			</Container>
		</section>
	);
};

export default Hero;
