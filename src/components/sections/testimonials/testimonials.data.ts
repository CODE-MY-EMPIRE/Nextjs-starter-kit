export interface Testimonial {
	quote: string;
	name: string;
	role: string;
	avatar: string;
	company?: string;
}

export interface TestimonialCarousel {
	quote: string;
	name: string;
	role: string;
	avatar: string;
	company?: string;
	rating?: number;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			"This product completely transformed how our team works. It's fast, intuitive, and beautifully designed.",
		name: 'Sarah Johnson',
		role: 'Product Manager',
		company: 'TechFlow',
		avatar: '/images/user.png',
	},
	{
		quote:
			'We increased our productivity by 40% after switching. Highly recommended for any growing startup.',
		name: 'Michael Chen',
		role: 'Founder',
		company: 'Startly',
		avatar: '/images/user.png',
	},
	{
		quote:
			"The best SaaS tool we've used in years. The attention to detail is incredible.",
		name: 'Emily Davis',
		role: 'Design Lead',
		company: 'PixelWorks',
		avatar: '/images/user.png',
	},
	{
		quote:
			'A must-have tool for any modern team. It saved us countless hours every week.',
		name: 'David Kim',
		role: 'Engineering Manager',
		company: 'DevCore',
		avatar: '/images/user.png',
	},
	{
		quote:
			'Simple, powerful, and reliable. Exactly what we needed to scale our workflow.',
		name: 'Sophia Martinez',
		role: 'Operations Lead',
		company: 'ScaleOps',
		avatar: '/images/user.png',
	},
	{
		quote:
			'The UI is beautiful and the performance is outstanding. Highly impressed.',
		name: 'James Wilson',
		role: 'Frontend Developer',
		company: 'UIWorks',
		avatar: '/images/user.png',
	},
];

export const testimonialsCarousel: TestimonialCarousel[] = [
	{
		quote:
			"This product completely transformed how our team works. It's fast, intuitive, and beautifully designed.",
		name: 'Sarah Johnson',
		role: 'Product Manager',
		company: 'TechFlow',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'We increased our productivity by 40% after switching. Highly recommended for any growing startup.',
		name: 'Michael Chen',
		role: 'Founder',
		company: 'Startly',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			"The best SaaS tool we've used in years. The attention to detail is incredible.",
		name: 'Emily Davis',
		role: 'Design Lead',
		company: 'PixelWorks',
		avatar: '/images/user.png',
		rating: 4,
	},
	{
		quote:
			'A must-have tool for any modern team. It saved us countless hours every week.',
		name: 'David Kim',
		role: 'Engineering Manager',
		company: 'DevCore',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'Simple, powerful, and reliable. Exactly what we needed to scale our workflow.',
		name: 'Sophia Martinez',
		role: 'Operations Lead',
		company: 'ScaleOps',
		avatar: '/images/user.png',
		rating: 5,
	},
	{
		quote:
			'The UI is beautiful and the performance is outstanding. Highly impressed.',
		name: 'James Wilson',
		role: 'Frontend Developer',
		company: 'UIWorks',
		avatar: '/images/user.png',
		rating: 4,
	},
];
