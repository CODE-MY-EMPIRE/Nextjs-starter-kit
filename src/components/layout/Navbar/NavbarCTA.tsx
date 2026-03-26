'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

import Button from '../../ui/Button';
import ThemeToggle from '../../ui/ThemeToggle';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import Container from '../../ui/Container';

// ✅ Navigation data (inside same file)
const navLinks = [
	{ label: 'Features', href: '#features' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Testimonials', href: '#testimonials' },
	{ label: 'Contact', href: '#contact' },
];

const NavbarCTA = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full border-b border-border bg-background">
			<Container className="h-20 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="text-lg font-bold"
				>
					YourLogo
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<NavLink
							key={link.href}
							href={link.href}
						>
							{link.label}
						</NavLink>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className="hidden md:flex items-center gap-4">
					<NavLink href="/login">Login</NavLink>

					<Button variant="primary">Get Started</Button>

					<ThemeToggle />
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-foreground"
					aria-label="Toggle menu"
				>
					{open ? <HiX size={24} /> : <HiMenu size={24} />}
				</button>
			</Container>

			{/* Mobile Menu */}
			<MobileMenu
				open={open}
				links={navLinks}
			/>
		</header>
	);
};

export default NavbarCTA;
