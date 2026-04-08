export type HowItWorksStep = {
	step: string;
	title: string;
	description: string;
};

export const steps: HowItWorksStep[] = [
	{
		step: '01',
		title: 'Choose your plan',
		description:
			'Pick the package that fits your needs and get started instantly.',
	},
	{
		step: '02',
		title: 'Submit your content',
		description:
			'Share your text, images, or let us help generate content for you.',
	},
	{
		step: '03',
		title: 'Launch in a day',
		description: 'We build and deliver your site fast — ready to go live.',
	},
];
