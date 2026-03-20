'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

type HeroMobileAppProps = {
	headline: string;
	subheadline?: string;
	iosCTA?: { text: string; href: string };
	androidCTA?: { text: string; href: string };
	mockup: React.ReactNode;
};

const HeroMobileApp = ({
	headline,
	subheadline,
	iosCTA,
	androidCTA,
	mockup,
}: HeroMobileAppProps) => {
	return (
		<section className="py-20 bg-background text-foreground">
			<Container className="flex flex-col md:flex-row items-center gap-12">
				{/* LEFT CONTENT */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1>{headline}</h1>

					{subheadline && <p>{subheadline}</p>}

					{/* CTA Buttons */}
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

				{/* RIGHT MOCKUP */}
				<div className="flex-1 flex justify-center md:justify-end">
					{mockup}
				</div>
			</Container>
		</section>
	);
};

export default HeroMobileApp;
