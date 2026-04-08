'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { steps } from './howItWorks.data';

const HowItWorks = () => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container>
				<SectionHeader
					heading="Launch in 3 simple steps"
					subheading="From idea to live website — fast, simple, and hassle-free."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
					{steps.map((item, index) => (
						<Card
							key={index}
							className="text-center"
						>
							{/* Step Number */}
							<div className="text-primary text-sm font-semibold">
								{item.step}
							</div>

							{/* Title */}
							<h3 className="mt-2">{item.title}</h3>

							{/* Description */}
							<p className="mt-2">{item.description}</p>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
};

export default HowItWorks;
