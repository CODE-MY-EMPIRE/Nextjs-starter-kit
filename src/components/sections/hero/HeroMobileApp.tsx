'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { heroMobileAppData } from './hero.data';

const HeroMobileApp = () => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="flex flex-col md:flex-row items-center gap-12">
				{/* LEFT */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1>{heroMobileAppData.headline}</h1>

					{heroMobileAppData.subheadline && (
						<p>{heroMobileAppData.subheadline}</p>
					)}

					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
						{heroMobileAppData.iosCTA && (
							<Button
								size="lg"
								icon={<FaApple />}
								onClick={() =>
									(window.location.href = heroMobileAppData.iosCTA.href)
								}
							>
								{heroMobileAppData.iosCTA.text}
							</Button>
						)}

						{heroMobileAppData.androidCTA && (
							<Button
								variant="secondary"
								size="lg"
								icon={<FaGooglePlay />}
								onClick={() =>
									(window.location.href = heroMobileAppData.androidCTA.href)
								}
							>
								{heroMobileAppData.androidCTA.text}
							</Button>
						)}
					</div>
				</div>

				{/* RIGHT IMAGE */}
				<div className="flex-1 flex justify-center md:justify-end">
					<Image
						src={heroMobileAppData.image}
						alt="Mobile App"
						width={600}
						height={600}
					/>
				</div>
			</Container>
		</section>
	);
};

export default HeroMobileApp;
