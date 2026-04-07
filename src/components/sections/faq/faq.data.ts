export interface FAQItem {
	question: string;
	answer: string;
}

export const faqData: FAQItem[] = [
	{
		question: 'What is this product and who is it for?',
		answer:
			'This is a modern SaaS starter kit designed for developers, startups, and teams who want to build and launch products faster with a clean and scalable foundation.',
	},
	{
		question: 'Can I use this for commercial projects?',
		answer:
			'Yes, you can use this starter kit for both personal and commercial projects without any restrictions.',
	},
	{
		question: 'Does it support dark mode?',
		answer:
			'Yes, the design system is built using CSS variables and fully supports light and dark mode out of the box.',
	},
	{
		question: 'Is this optimized for performance?',
		answer:
			'Absolutely. It uses Next.js App Router, optimized images, and a clean component structure to ensure fast performance.',
	},
	{
		question: 'Can I customize the components?',
		answer:
			'Yes, all components are designed to be reusable and easily customizable to fit your brand and product needs.',
	},
	{
		question: 'Do I need Tailwind knowledge to use this?',
		answer:
			'Basic Tailwind knowledge helps, but the system is structured so you can reuse components without needing to write much styling yourself.',
	},
];
