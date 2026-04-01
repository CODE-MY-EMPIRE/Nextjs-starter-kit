'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { featuresSplitData } from './features.data';

const FeaturesSplit = () => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="space-y-20">
				<SectionHeader
					heading="Everything you need to grow"
					subheading="Powerful features to help you build, launch, and scale faster."
				/>
				{featuresSplitData.map((feature, index) => {
					const isReversed = index % 2 !== 0;

					return (
						<div
							key={index}
							className={`flex flex-col md:flex-row items-center gap-10 ${
								isReversed ? 'md:flex-row-reverse' : ''
							}`}
						>
							<div className="flex-1 space-y-4 text-center md:text-left">
								<h2>{feature.title}</h2>
								<p>{feature.description}</p>

								{feature.cta && (
									<div className="pt-4">
										<Button
											onClick={() =>
												(window.location.href = feature.cta?.text as string)
											}
										>
											{feature.cta?.text}
										</Button>
									</div>
								)}
							</div>

							{/* IMAGE */}
							<div className="flex-1 flex justify-center">
								<Image
									src={feature.image as string}
									alt={feature.title as string}
									width={500}
									height={400}
									className="rounded-xl shadow"
								/>
							</div>
						</div>
					);
				})}
			</Container>
		</section>
	);
};

export default FeaturesSplit;
