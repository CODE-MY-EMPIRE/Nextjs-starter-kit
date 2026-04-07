'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
};

const Card = ({ children, className, ...props }: CardProps) => {
	return (
		<div
			className={cn(
				'bg-card border border-border rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;