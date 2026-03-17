'use client';

import NavLink from './NavLink';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';

type Props = {
	open: boolean;
};

const MobileMenu = ({ open }: Props) => {
	if (!open) return null;

	return (
		<div className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-4 bg-background">
			<NavLink href="#features">Features</NavLink>
			<NavLink href="#pricing">Pricing</NavLink>
			<NavLink href="#testimonials">Testimonials</NavLink>
			<NavLink href="#contact">Contact</NavLink>

			<NavLink href="/login">Login</NavLink>

			<Button
				variant="primary"
				className="w-full"
			>
				Get Started
			</Button>

			<ThemeToggle />
		</div>
	);
};

export default MobileMenu;
