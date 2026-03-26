'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

type CTA = {
	text: string;
	href: string;
};

type HeroMobileAppProps = {
	headline: string;
	subheadline?: string;
	image: string; // ✅ string instead of JSX
	iosCTA?: CTA;
	androidCTA?: CTA;
};

const HeroMobileApp = ({
	headline,
	subheadline,
	image,
	iosCTA,
	androidCTA,
}: HeroMobileAppProps) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="flex flex-col md:flex-row items-center gap-12">
				{/* LEFT */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1>{headline}</h1>

					{subheadline && <p>{subheadline}</p>}

					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
						{iosCTA && (
							<Button
								size="lg"
								icon={<FaApple />}
								onClick={() => (window.location.href = iosCTA.href)}
							>
								{iosCTA.text}
							</Button>
						)}

						{androidCTA && (
							<Button
								variant="secondary"
								size="lg"
								icon={<FaGooglePlay />}
								onClick={() => (window.location.href = androidCTA.href)}
							>
								{androidCTA.text}
							</Button>
						)}
					</div>
				</div>

				{/* RIGHT IMAGE */}
				<div className="flex-1 flex justify-center md:justify-end">
					<Image
						src={image}
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
