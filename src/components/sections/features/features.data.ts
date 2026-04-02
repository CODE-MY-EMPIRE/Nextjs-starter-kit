export type FeaturesSplitData = {
	title: string;
	description: string;
	image: string;
	cta: {
		text: string;
		href: string;
	};
};

export type FeaturesData = {
	title: string;
	description: string;
	icon: string;
};

export type FeaturesCenteredData = {
	title: string;
	description: string;
	icon: string;
};

export const featuresSplitData: FeaturesSplitData[] = [
	{
		title: 'Powerful Dashboard',
		description:
			'Manage everything from one place with a clean and intuitive interface.',
		image: '/images/dashboard.png',
		cta: {
			text: 'Learn More',
			href: '#',
		},
	},
	{
		title: 'Real-time Collaboration',
		description: 'Work with your team in real time from anywhere in the world.',
		image: '/images/dashboard-img.png',
		cta: {
			text: 'Learn More',
			href: '#',
		},
	},
	{
		title: 'Advanced Analytics',
		description:
			'Track performance and gain insights with powerful analytics tools.',
		image: '/images/dashboard-img.png',
		cta: {
			text: 'Learn More',
			href: '#',
		},
	},
];

export const featuresData: FeaturesData[] = [
	{
		title: 'Fast Setup',
		description: 'Get your project running in minutes.',
		icon: 'zap',
	},
	{
		title: 'Team Collaboration',
		description: 'Work with your team seamlessly.',
		icon: 'users',
	},
	{
		title: 'Analytics',
		description: 'Track your performance easily.',
		icon: 'analytics',
	},
];

export const featuresCenteredData: FeaturesCenteredData[] = [
	{
		title: 'Powerful Dashboard',
		description:
			'Manage everything from one place with a clean and intuitive interface.',
		icon: 'zap',
	},
];
