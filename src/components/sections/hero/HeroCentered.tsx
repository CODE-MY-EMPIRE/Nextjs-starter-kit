'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

type HeroCenteredProps = {
	headline: string;
	subheadline?: string;
	primaryCTA: { text: string; onClick?: () => void };
	secondaryCTA?: { text: string; onClick?: () => void };
	badge?: string;
	illustration?: React.ReactNode;
};

const HeroCentered = ({
	headline,
	subheadline,
	primaryCTA,
	secondaryCTA,
	badge,
	illustration,
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

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button
						size="lg"
						onClick={primaryCTA.onClick}
					>
						{primaryCTA.text}
					</Button>

					{secondaryCTA && (
						<Button
							variant="secondary"
							size="lg"
							onClick={secondaryCTA.onClick}
						>
							{secondaryCTA.text}
						</Button>
					)}
				</div>

				{/* Illustration / Screenshot */}
				{illustration && (
					<div className="pt-10 w-full flex justify-center">{illustration}</div>
				)}
			</Container>
		</section>
	);
};

export default HeroCentered;
