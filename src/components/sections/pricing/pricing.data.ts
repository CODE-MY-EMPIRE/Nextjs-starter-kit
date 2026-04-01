// src/app/components/pricing/pricing.data.ts

export type PricingPlan = {
	title: string;
	price: string;
	description: string;
	features: string[];
	ctaText: string;
	ctaLink?: string;
};

export const pricingData: PricingPlan[] = [
	{
		title: 'Starter',
		price: '$150',
		description:
			'Ideal for clients who need a clean simple portfolio or landing page - fast.',
		features: [
			'1-day delivery',
			'1-page: Up to 7 sections',
			'Fully responsive',
			'Basic SEO setup',
			'3 days post-launch support',
			'Contact form integration',
		],
		ctaText: 'Get started',
	},
	{
		title: 'Pro',
		price: '$250',
		description:
			'Best for clients who need a multi-page site with advanced functionality.',
		features: [
			'1–2 days delivery',
			'Everything in Starter, plus:',
			'Multiple-page: Up to 5 pages',
			'Domain setup (if needed)',
			'Advanced SEO setup',
			'7 days post-launch support',
			'Newsletter integration',
		],
		ctaText: 'Get started',
	},
	{
		title: 'Custom',
		price: '$400+',
		description:
			'Ideal for clients who want advanced custom layouts tailored to their brand.',
		features: [
			'1–2 days delivery',
			'Everything in Pro, plus:',
			'Unlimited number of pages',
			'Fully customized',
			'Brand integration',
			'30 days post-launch support',
			'Newsletter integration: Generate Content with AI',
		],
		ctaText: 'Customize & Approve',
	},
];
