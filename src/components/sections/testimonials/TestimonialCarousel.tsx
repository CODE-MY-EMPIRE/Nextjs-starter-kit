'use client';

import Image from 'next/image';
import { testimonialsCarousel  } from './testimonials.data';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
export function TestimonialCarousel() {
	return (
    <section className="py-20 overflow-hidden">
      <Container>
        <SectionHeader
          heading="Testimonials"
          subheading="See what our customers are saying about us."
        />

        <div className="relative overflow-hidden">
          {/* Fade + light blur at edges so cards don’t clip to a hard line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background via-background/40 to-transparent backdrop-blur-sm sm:w-6"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background via-background/40 to-transparent backdrop-blur-sm sm:w-6"
          />
          <div className="flex w-max gap-4 animate-marquee">
					{/* Duplicate for seamless loop */}
					{[...testimonialsCarousel, ...testimonialsCarousel].map(
						(testimonial, index) => (
							<Card
								key={index}
								className="w-[300px] shrink-0 flex flex-col gap-2.5 p-4"
							>
								{/* User */}
								<div className="flex items-center gap-2">
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										width={50}
										height={50}
										className="rounded-full object-cover"
									/>

									<div>
										<p className="text-sm font-medium">{testimonial.name}</p>
										<p className="text-sm text-muted-foreground">
											{testimonial.role}
										</p>
									</div>
								</div>
								{/* ⭐ Rating */}
								<div className="flex gap-1">
									{Array.from({ length: testimonial.rating || 5 }).map(
										(_, i) => (
											<span key={i}>⭐</span>
										),
									)}
								</div>

								{/* Quote */}
								<p>
									“{testimonial.quote}”
								</p>
							</Card>
						),
					)}
				</div>
			</div>
      </Container>
			
		</section>
	);
}
