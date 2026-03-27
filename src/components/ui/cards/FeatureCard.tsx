import React from 'react';
import { FiZap, FiUsers, FiBarChart2 } from 'react-icons/fi';
import Card from './Card';

const iconMap: Record<string, React.ReactNode> = {
	zap: <FiZap />,
	users: <FiUsers />,
	analytics: <FiBarChart2 />,
};

type FeatureCardProps = {
	title: string;
	description: string;
	icon: string;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
	return (
		<Card
			title={title}
			description={description}
		>
			<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
				{iconMap[icon]}
			</div>
		</Card>
	);
};

export default FeatureCard;
