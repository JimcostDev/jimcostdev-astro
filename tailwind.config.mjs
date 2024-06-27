/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				...theme("colors"),
				primary: "#03A9F4",
				secondary: "#F2FBFF",
				tertiary: "#00142E",
			  }),
			  textColor: {
				primary: "#03A9F4",
				secondary: "#F2FBFF",
				tertiary: "#00142E",
			  },
		},
	},
	plugins: [],
}
