/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				BACKGROUND_DESKTOP: "url('/BACKGROUND-DESKTOP.webp')",
				BACKGROUND_MOBILE: "url('/BACKGROUND_MOBILE.webp')",
				BACKGROUND_PROJECT: "url('/BACKGROUND_PROJECT.webp')",
			},
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
