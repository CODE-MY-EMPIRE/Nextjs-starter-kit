'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const footerLinks = [
	{ label: 'Features', href: '#' },
	{ label: 'Pricing', href: '#' },
	{ label: 'Contact', href: '#' },
];

const FooterMinimal = () => {
	return (
		<footer className="border-t border-border bg-background">
			<Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
				{/* Logo */}
				<div className="text-lg font-bold">YourLogo</div>

				{/* Links */}
				<div className="flex gap-6">
					{footerLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-sm text-muted-foreground hover:text-foreground transition"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Social Icons */}
				<div className="flex gap-4 text-muted-foreground">
					<Link
						href="#"
						className="hover:text-foreground transition"
					>
						<FaTwitter size={18} />
					</Link>
					<Link
						href="#"
						className="hover:text-foreground transition"
					>
						<FaGithub size={18} />
					</Link>
					<Link
						href="#"
						className="hover:text-foreground transition"
					>
						<FaLinkedin size={18} />
					</Link>
				</div>
			</Container>

			{/* Copyright */}
			<Container className="border-t border-border my-4 pt-4 text-center">
				<p className="text-sm text-muted-foreground">
					© {new Date().getFullYear()} YourCompany. All rights reserved.
				</p>
			</Container>
		</footer>
	);
};

export default FooterMinimal;
