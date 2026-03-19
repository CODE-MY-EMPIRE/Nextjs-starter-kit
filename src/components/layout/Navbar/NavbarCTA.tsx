'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

import Button from '../../ui/Button';
import ThemeToggle from '../../ui/ThemeToggle';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import Container from '../../ui/Container';

const NavbarCTA = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full border-b border-border bg-background">
			{/* Use Container here instead of hardcoded max-w-7xl */}
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
					<NavLink href="#features">Features</NavLink>
					<NavLink href="#pricing">Pricing</NavLink>
					<NavLink href="#testimonials">Testimonials</NavLink>
					<NavLink href="#contact">Contact</NavLink>
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

			{/* Mobile Menu Component */}
			<MobileMenu open={open} />
		</header>
	);
};

export default NavbarCTA;
