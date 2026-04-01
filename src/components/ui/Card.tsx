'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = {
	children: React.ReactNode;
	className?: string;
};

const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn('bg-card border border-border rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300', className)}
		>
			{children}
		</div>
	);
};

export default Card;