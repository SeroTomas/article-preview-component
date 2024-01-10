/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: { "c-monrope": ['Manrope', 'sans-serif'] },
			colors: {
				"c-darkGBlue": "hsl(217, 19%, 35%)",
				"c-desDarkBlue": "hsl(214, 17%, 51%)",
				"c-grayishBlue": "hsl(212, 23%, 69%)",
				"c-lGblue": "hsl(210, 46%, 95%)"
			}
		},
	},
	plugins: [],
}
