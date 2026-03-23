'use client';

import React from 'react';

type Props = {
	title: string;
	description: string;
	children?: React.ReactNode;
};

const Card = ({ title, description, children }: Props) => {
	return (
		<div className="bg-card border border-border rounded-xl p-6">
			{children && <div className="mb-4">{children}</div>}
			<h3>{title}</h3>
			<p className="mt-2">{description}</p>
		</div>
	);
};

export default Card;
