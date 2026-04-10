'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import { logos } from './partners.data';
import SectionHeader from '@/components/ui/SectionHeader';

export function PartnerMarquee() {
	return (
		<section className="py-16 overflow-hidden">
			<Container>
				{/* Heading */}
				<SectionHeader subheading="Loved by the best companies in the world." />

				<div className="relative overflow-hidden">
					{/* Moving row */}
					<div className="flex w-max gap-12 animate-marquee">
						{/* Duplicate for infinite loop */}
						{[...logos, ...logos].map((logo, index) => (
							<div
								key={index}
								className="flex items-center justify-center shrink-0"
							>
								<Image
									src={logo.src}
									alt={logo.name}
									width={150}
									height={60}
									sizes="100vw"
									className="object-contain rounded-lg"
								/>
							</div>
						))}
					</div>

					<div
						aria-hidden
						className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/40 to-transparent backdrop-blur-sm sm:w-2"
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/40 to-transparent backdrop-blur-sm sm:w-2"
					/>
				</div>
			</Container>
		</section>
	);
}
