'use client';

import React from 'react';

const CTA = () => {
	return (
		<section className="py-16">
			<div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center space-y-6">
				<h2>Launch your online presence today</h2>
				<p className="max-w-2xl mx-auto text-white/80!">
					Get your website live in just one day. No complexity, no delays - just
					a fast, clean launch.
				</p>
				<button className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:opacity-90 cursor-pointer transition">
					Get Started Now
				</button>
			</div>
		</section>
	);
};

export default CTA;
