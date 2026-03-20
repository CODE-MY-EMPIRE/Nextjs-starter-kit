'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

type Feature = {
	title: string;
	description?: string;
	icon?: React.ReactNode;
};

type HeroFeaturesProps = {
	headline: string;
	subheadline?: string;
	features: Feature[];
	cta: { text: string; href: string };
	illustration?: React.ReactNode;
};

const HeroFeatures = ({
	headline,
	subheadline,
	features,
	cta,
	illustration,
}: HeroFeaturesProps) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="flex flex-col md:flex-row items-center gap-12">
				{/* LEFT CONTENT */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1>{headline}</h1>

					{subheadline && <p>{subheadline}</p>}

					{/* Features List */}
					<div className="space-y-3">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start gap-3 justify-center md:justify-start"
							>
								{feature.icon && (
									<div className="text-primary mt-1">{feature.icon}</div>
								)}
								<div>
									<p className="font-medium text-foreground">{feature.title}</p>
									{feature.description && <small>{feature.description}</small>}
								</div>
							</div>
						))}
					</div>

					{/* CTA */}
					<div className="pt-4 flex justify-center md:justify-start">
						<Button
							size="lg"
							onClick={() => (window.location.href = cta.href)}
						>
							{cta.text}
						</Button>
					</div>
				</div>

				{/* RIGHT ILLUSTRATION */}
				{illustration && (
					<div className="flex-1 flex justify-center md:justify-end">
						{illustration}
					</div>
				)}
			</Container>
		</section>
	);
};

export default HeroFeatures;
