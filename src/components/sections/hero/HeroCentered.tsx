'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { heroCenteredData } from './hero.data';


const HeroCentered = () => {
	return (
		<section className="py-24 bg-background text-foreground">
			<Container className="text-center flex flex-col items-center space-y-8">
				{heroCenteredData.badge && (
					<span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
						{heroCenteredData.badge}
					</span>
				)}

				<h1 className="max-w-3xl">{heroCenteredData.headline}</h1>
				{heroCenteredData.subheadline && (
					<p className="max-w-2xl">{heroCenteredData.subheadline}</p>
				)}
				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button
						size="lg"
						onClick={() =>
							(window.location.href = heroCenteredData.primaryCTA.href)
						}
					>
						{heroCenteredData.primaryCTA.text}
					</Button>

					{heroCenteredData.secondaryCTA && (
						<Button
							variant="secondary"
							size="lg"
							onClick={() =>
								(window.location.href = heroCenteredData.secondaryCTA.href)
							}
						>
							{heroCenteredData.secondaryCTA.text}
						</Button>
					)}
				</div>

				{heroCenteredData.image && (
					<div className="pt-10 w-full flex justify-center">
						<Image
							src={heroCenteredData.image as string}
							alt="Hero Image"
							width={900}
							height={500}
							className="rounded-xl shadow"
						/>
					</div>
				)}
			</Container>
		</section>
	);
};

export default HeroCentered;
