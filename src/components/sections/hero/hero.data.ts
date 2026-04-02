export type HeroDefaultData = {
	headline: string;
	subheadline: string;
	image: string;
	primaryCTA: {
		text: string;
		href: string;
	};
	secondaryCTA: {
		text: string;
		href: string;
	};
};

export type HeroMobileAppData = {
	headline: string;
	subheadline: string;
	image: string;
	iosCTA: {
		text: string;
		href: string;
	};
	androidCTA: {
		text: string;
		href: string;
	};
};

export type HeroFeaturesData = {
	headline: string;
	subheadline: string;
	image: string;
	cta: {
		text: string;
		href: string;
	};
	features: {
		title: string;
		description: string;
		icon: string;
	}[];
};

export type HeroCenteredData = {
	badge: string;
	headline: string;
	subheadline: string;
	image: string;
	primaryCTA: {
		text: string;
		href: string;
	};
	secondaryCTA: {
		text: string;
		href: string;
	};
};

export const heroDefaultData: HeroDefaultData = {
	headline: 'Build modern SaaS apps faster',
	subheadline:
		'A clean and scalable starter kit for building landing pages and products.',
	image: '/images/dashboard.png',
	primaryCTA: {
		text: 'Get Started',
		href: '#',
	},
	secondaryCTA: {
		text: 'Learn More',
		href: '#',
	},
};

export const heroMobileAppData: HeroMobileAppData = {
	headline: 'Track Your Fitness Anywhere',
	subheadline: 'Your personal fitness coach in your pocket.',
	image: '/images/mobile.png',
	iosCTA: {
		text: 'Download on iOS',
		href: '#',
	},
	androidCTA: {
		text: 'Get it on Android',
		href: '#',
	},
};

export const heroFeaturesData: HeroFeaturesData = {
	headline: 'All-in-one platform to grow your business',
	subheadline:
		'Everything you need to manage, analyze, and scale your product.',
	image: '/images/dashboard.png',
	cta: {
		text: 'Start Free Trial',
		href: '#',
	},
	features: [
		{
			title: 'Fast Setup',
			description: 'Get started in minutes',
			icon: 'zap',
		},
		{
			title: 'Team Collaboration',
			description: 'Work together seamlessly',
			icon: 'users',
		},
		{
			title: 'Advanced Analytics',
			description: 'Track performance easily',
			icon: 'analytics',
		},
	],
};

export const heroCenteredData: HeroCenteredData = {
	badge: '🚀 New Release',
	headline: 'Build faster. Launch smarter.',
	subheadline:
		'A modern starter kit to help you build SaaS products and landing pages quickly.',
	image: '/images/dashboard.png',
	primaryCTA: {
		text: 'Get Started',
		href: '#',
	},
	secondaryCTA: {
		text: 'Live Demo',
		href: '#',
	},
};
