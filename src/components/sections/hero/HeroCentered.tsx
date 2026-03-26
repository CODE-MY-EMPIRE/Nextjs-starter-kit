'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

type CTA = {
	text: string;
	href: string;
};

type HeroCenteredProps = {
	headline: string;
	subheadline?: string;
	primaryCTA: CTA;
	secondaryCTA?: CTA;
	badge?: string;
	image?: string; // ✅ string instead of ReactNode
};

const HeroCentered = ({
	headline,
	subheadline,
	primaryCTA,
	secondaryCTA,
	badge,
	image,
}: HeroCenteredProps) => {
	return (
		<section className="py-24 bg-background text-foreground">
			<Container className="text-center flex flex-col items-center space-y-8">
				{/* Badge */}
				{badge && (
					<span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
						{badge}
					</span>
				)}

				{/* Headline */}
				<h1 className="max-w-3xl">{headline}</h1>

				{/* Subheadline */}
				{subheadline && <p className="max-w-2xl">{subheadline}</p>}

				{/* CTA */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button
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

				{/* Image */}
				{image && (
					<div className="pt-10 w-full flex justify-center">
						<Image
							src={image}
							alt="Hero Image"
							width={900}
							height={500}
							className="rounded-xl shadow"
						/>
					</div>
				)}
			</Container>
		</section>
	);
};

export default HeroCentered;
