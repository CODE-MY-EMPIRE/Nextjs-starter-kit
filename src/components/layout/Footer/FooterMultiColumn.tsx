'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { useState } from 'react';
import Button from '@/components/ui/Button';

const footerLinks = [
	{
		title: 'Product',
		links: [
			{ label: 'Features', href: '#' },
			{ label: 'Pricing', href: '#' },
			{ label: 'Integrations', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '#' },
			{ label: 'Careers', href: '#' },
			{ label: 'Contact', href: '#' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'Blog', href: '#' },
			{ label: 'Docs', href: '#' },
			{ label: 'Help Center', href: '#' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Terms of Service', href: '#' },
		],
	},
];

const FooterMultiColumn = () => {
	const [email, setEmail] = useState('');

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Subscribed email:', email);
		setEmail(''); // reset input
	};

	return (
		<footer className="border-t border-border bg-background">
			<Container className="py-16 space-y-12">
				{/* Top Section */}
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
					{/* Brand + Newsletter */}
					<div className="space-y-4 lg:col-span-2">
						<h3 className="text-lg font-bold">YourLogo</h3>

						{/* Newsletter Info */}
						<p className="text-sm text-muted-foreground max-w-xs">
							Subscribe to our newsletter to get the latest updates, tips, and
							offers straight to your inbox.
						</p>

						{/* Newsletter Form */}
						<form
							onSubmit={handleSubscribe}
							className="mt-4 flex flex-col sm:flex-row gap-2"
						>
							<input
								type="email"
								required
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="flex-1 px-4 py-2 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
							/>

							{/* Use your Button component */}
							<Button
								type="submit"
								variant="primary"
								className="w-full sm:w-auto"
							>
								Subscribe
							</Button>
						</form>
					</div>

					{/* Link Columns */}
					{footerLinks.map((column) => (
						<div
							key={column.title}
							className="space-y-3"
						>
							<h4 className="text-sm font-semibold">{column.title}</h4>
							<ul className="space-y-2">
								{column.links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground transition"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} YourCompany. All rights reserved.
					</p>

					<div className="flex items-center gap-4">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Terms
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default FooterMultiColumn;
