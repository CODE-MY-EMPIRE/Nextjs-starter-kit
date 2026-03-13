'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Only run on client
	useEffect(() => {
		const timeout = setTimeout(() => setMounted(true), 0);
		return () => clearTimeout(timeout);
	}, []);

	if (!mounted) return null;

	const isDark = theme === 'dark';

	return (
		<button
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className={`
        p-2 rounded-full border
        border-border
        bg-card
        text-primary
        hover:bg-primary hover:text-primary-foreground
        transition
        flex items-center justify-center
      `}
			aria-label="Toggle Dark Mode"
		>
			{isDark ? (
				<MdLightMode className="w-5 h-5" />
			) : (
				<MdDarkMode className="w-5 h-5" />
			)}
		</button>
	);
}
