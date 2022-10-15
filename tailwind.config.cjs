/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
		extend: {
      colors: {
        highlightRed: '#FF6060',
        dimBackground: 'rgba(0, 0, 0, 0.5)'
      },
    },
	},
	plugins: [],
}
