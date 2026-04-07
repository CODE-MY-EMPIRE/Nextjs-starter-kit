'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { faqData } from './faq.data';

export function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className="py-20">
			<Container>
				<SectionHeader
					heading="Frequently Asked Questions"
					subheading="Everything you need to know about the product."
				/>

				<div className="mt-12 max-w-3xl mx-auto flex flex-col gap-4">
					{faqData.map((faq, index) => {
						const isOpen = openIndex === index;

						return (
							<Card
								key={index}
								className="cursor-pointer border-l-3 border-l-primary! p-5"
								onClick={() => toggle(index)}
							>
								{/* Question */}
								<div className="flex items-center justify-between">
									<h3 className="text-base font-medium">{faq.question}</h3>

									<FiPlus
										className={`text-primary transition-transform duration-300 ${
											isOpen ? 'rotate-45' : 'rotate-0'
										}`}
										size={20}
										aria-hidden
									/>
								</div>

								{/* Answer */}
								<div
									className={`grid transition-all duration-300 ease-in-out ${
										isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'
									}`}
								>
									<div className="overflow-hidden">
										<p className="text-sm text-muted-foreground leading-relaxed">
											{faq.answer}
										</p>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
