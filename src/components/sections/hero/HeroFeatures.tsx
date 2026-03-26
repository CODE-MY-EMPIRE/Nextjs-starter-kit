'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FiZap, FiUsers, FiBarChart2 } from 'react-icons/fi';

type Feature = {
	title: string;
	description?: string;
	icon?: string; // ✅ string instead of JSX
};

type HeroFeaturesProps = {
	headline: string;
	subheadline?: string;
	features: Feature[];
	cta: {
		text: string;
		href: string;
	};
	image?: string; // ✅ string instead of ReactNode
};

const iconMap: Record<string, React.ReactNode> = {
	zap: <FiZap />,
	users: <FiUsers />,
	analytics: <FiBarChart2 />,
};

const HeroFeatures = ({
	headline,
	subheadline,
	features,
	cta,
	image,
}: HeroFeaturesProps) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="flex flex-col md:flex-row items-center gap-12">
				{/* LEFT */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1>{headline}</h1>

					{subheadline && <p>{subheadline}</p>}

					{/* Features */}
					<div className="space-y-3">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start gap-3 justify-center md:justify-start"
							>
								{feature.icon && (
									<div className="text-primary mt-1">
										{iconMap[feature.icon]}
									</div>
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

				{/* RIGHT IMAGE */}
				{image && (
					<div className="flex-1 flex justify-center md:justify-end">
						<Image
							src={image}
							alt="Feature Illustration"
							width={500}
							height={400}
							className="rounded-xl shadow"
						/>
					</div>
				)}
			</Container>
		</section>
	);
};

export default HeroFeatures;
