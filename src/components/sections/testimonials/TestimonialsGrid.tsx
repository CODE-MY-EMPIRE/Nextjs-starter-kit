'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { testimonials } from './testimonials.data';

export function TestimonialsGrid() {
	return (
		<section className="py-20">
			<Container>
				<SectionHeader
					heading="Testimonials"
					subheading="See what our customers are saying about us."
				/>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.name}
							className="flex flex-col"
						>
							<p className="text-muted-foreground leading-relaxed">
								“{testimonial.quote}”
							</p>

							<div className="flex items-center gap-3 mt-6">
								<Image
									src={testimonial.avatar}
									alt={testimonial.name}
									width={50}
									height={50}
									className="rounded-full object-cover"
								/>

								<div>
									<p className="text-sm font-medium text-foreground">
										{testimonial.name}
									</p>
									<p className="text-sm text-muted-foreground">
										{testimonial.role}
										{testimonial.company && ` · ${testimonial.company}`}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
}
