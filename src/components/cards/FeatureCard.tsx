'use client';

import React from 'react';
import Card from '@/components/cards/Card';

type FeatureCardProps = {
	title: string;
	description: string;
	icon?: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
	return (
		<Card
			title={title}
			description={description}
		>
			{icon && (
				<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
					{icon}
				</div>
			)}
		</Card>
	);
};

export default FeatureCard;
