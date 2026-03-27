'use client';

import React from 'react';
import { FiZap, FiUsers, FiBarChart2 } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
	zap: <FiZap />,
	users: <FiUsers />,
	analytics: <FiBarChart2 />,
};

type Props = {
	title: string;
	description: string;
	icon: string;
};

const FeatureCardCentered = ({ title, description, icon }: Props) => {
	return (
		<div className="p-6 text-center space-y-4">
			{/* Icon */}
			<div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">
				{iconMap[icon]}
			</div>

			{/* Title */}
			<h3>{title}</h3>

			{/* Description */}
			<p>{description}</p>
		</div>
	);
};

export default FeatureCardCentered;
