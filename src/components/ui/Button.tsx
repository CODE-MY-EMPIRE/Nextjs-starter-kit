'use client';

import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
	variant?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	variant = 'primary',
	size = 'md',
	className = '',
	children,
	...props
}: ButtonProps) => {
	// Variant styles
	const variantClasses = {
		primary: `
      bg-primary border-2 border-primary text-primary-foreground
      hover:bg-transparent hover:text-primary active:bg-primary/80
    `,
		secondary: `
      border-2 border-primary text-primary
      bg-transparent
      hover:bg-primary active:bg-primary/20
      hover:text-primary-foreground
    `,
	};

	// Size styles
	const sizeClasses = {
		sm: 'px-3 py-1 text-sm rounded-md',
		md: 'px-4 py-2 text-base rounded-lg',
		lg: 'px-6 py-3 text-lg rounded-xl',
	};

	return (
		<button
			className={`font-medium transition flex items-center justify-center cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
