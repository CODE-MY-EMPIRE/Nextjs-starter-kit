import React from 'react';
import Link from 'next/link';

type Props = {
	href: string;
	children: React.ReactNode;
	className?: string;
};

const NavLink = ({ href, children, className = '' }: Props) => {
	return (
		<Link
			href={href}
			className={`text-sm font-medium text-foreground hover:text-primary transition-colors ${className}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
