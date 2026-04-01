'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { featuresData } from './features.data';
import { FiZap, FiUsers, FiBarChart2 } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
	zap: <FiZap />,
	users: <FiUsers />,
	analytics: <FiBarChart2 />,
};

const FeaturesCentered = () => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container>
				<SectionHeader
					heading="Everything you need to grow"
					subheading="Powerful features to help you build, launch, and scale faster."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featuresData.map((feature, index) => (
						<Card
							key={index}
							className="text-center"
						>
							{/* Icon */}
							<div className="w-12 h-12 mx-auto flex items-center justify-center text-center rounded-lg bg-primary/10 text-primary text-xl mb-4">
								{iconMap[feature.icon as string]}
							</div>

							{/* Title */}
							<h3>{feature.title}</h3>

							{/* Description */}
							<p>{feature.description}</p>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
};

export default FeaturesCentered;
