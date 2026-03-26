'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

type CTA = {
	text: string;
	href: string;
};

type HeroProps = {
	headline: string;
	subheadline?: string;
	primaryCTA: CTA;
	secondaryCTA?: CTA;
	image?: string;
};

const Hero = ({
	headline,
	subheadline,
	primaryCTA,
	secondaryCTA,
	image,
}: HeroProps) => {
	return (
		<section className="bg-background text-foreground py-12 md:py-20">
			<Container className="flex flex-col-reverse md:flex-row items-center gap-12">
				{/* TEXT */}
				<div className="flex-1 text-center md:text-left space-y-6">
					<h1>{headline}</h1>

					{subheadline && <p>{subheadline}</p>}

					{/* CTA */}
					<div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
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
				</div>

				{/* IMAGE */}
				{image && (
					<div className="flex-1 flex justify-center md:justify-end">
						<Image
							src={image}
							alt="Hero Image"
							width={600}
							height={500}
							className="rounded-xl shadow"
						/>
					</div>
				)}
			</Container>
		</section>
	);
};

export default Hero;
