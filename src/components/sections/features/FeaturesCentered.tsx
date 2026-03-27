'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCardCentered from '@/components/cards/FeatureCardCentered';

type Feature = {
	title: string;
	description: string;
	icon: string;
};

type Props = {
	features: Feature[];
};

const FeaturesCentered = ({ features }: Props) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container>
				<SectionHeader
					heading="Everything you need to grow"
					subheading="Powerful features to help you build, launch, and scale faster."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<FeatureCardCentered
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

export default FeaturesCentered;
