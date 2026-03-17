import React from 'react';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Container = ({ children, className = '' }: Props) => {
	return (
		<div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
	);
};

export default Container;
