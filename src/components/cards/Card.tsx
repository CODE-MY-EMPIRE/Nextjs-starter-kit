import React from 'react'

type Props = {
    title: string;
    description: string;
}

const Card = ({ title, description }: Props) => {
  return (
		<div className="bg-card border border-border rounded-xl p-6">
			<h2 className="text-xl font-semibold">{title}</h2>
			<p className="text-muted-foreground mt-2">
				{description}
			</p>
		</div>
	);
}

export default Card