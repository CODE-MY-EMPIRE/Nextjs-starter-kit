'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { heroDefaultData } from './hero.data';


const Hero = () => {
	return (
		<section className="bg-background text-foreground py-12 md:py-20">
			<Container className="flex flex-col-reverse md:flex-row items-center gap-12">
				<div className="flex-1 text-center md:text-left space-y-6">
					<h1>{heroDefaultData.headline}</h1>

					{heroDefaultData.subheadline && <p>{heroDefaultData.subheadline}</p>}
					<div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
						<Button
							size="lg"
							onClick={() =>
								(window.location.href = heroDefaultData.primaryCTA.href)
							}
						>
							{heroDefaultData.primaryCTA.text}
						</Button>

						{heroDefaultData.secondaryCTA && (
							<Button
								variant="secondary"
								size="lg"
								onClick={() =>
									(window.location.href = heroDefaultData.secondaryCTA.href)
								}
							>
								{heroDefaultData.secondaryCTA.text}
							</Button>
						)}
					</div>
				</div>

				{heroDefaultData.image && (
					<div className="flex-1 flex justify-center md:justify-end">
						<Image
							src={heroDefaultData.image as string}
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
