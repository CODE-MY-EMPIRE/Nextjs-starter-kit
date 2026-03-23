'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import FeatureCard from '@/components/cards/FeatureCard';

type Feature = {
	title: string;
	description: string;
	icon?: React.ReactNode;
};

type FeaturesSectionProps = {
	title?: string;
	subtitle?: string;
	features: Feature[];
};

const FeaturesSection = ({
	title,
	subtitle,
	features,
}: FeaturesSectionProps) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="space-y-12">
				{/* Section Header */}
				{(title || subtitle) && (
					<div className="text-center max-w-2xl mx-auto space-y-4">
						{title && <h2>{title}</h2>}
						{subtitle && <p>{subtitle}</p>}
					</div>
				)}

				{/* Features Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							title={feature.title}
							description={feature.description}
							icon={feature.icon}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default FeaturesSection;
