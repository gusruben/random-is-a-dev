import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: 'Pixelify Sans',
				mono: 'Space Mono',
			},
			colors: {
				primary: {
					500: '#3535FF',
					600: '#4949ff',
				},
				background: {
					100: '#18181B',
					200: '#2C2C3B',
					300: '#373749',
				},
			},
		},
	},

	plugins: [],
} satisfies Config;
