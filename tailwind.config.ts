import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				"primary-1": "rgb(var(--color-theme-10) / <alpha-value>)",
				"primary-2": "rgb(var(--color-theme-15) / <alpha-value>)",
				"primary-3": "rgb(var(--color-theme-20) / <alpha-value>)",
				"primary-4": "rgb(var(--color-theme-40) / <alpha-value>)",
				"primary-5": "rgb(var(--color-theme-60) / <alpha-value>)",
				"primary-6": "rgb(var(--color-theme-80) / <alpha-value>)",

				light: "rgb(var(--color-light-1) / <alpha-value>)",
				"light-2": "rgb(var(--color-light-2) / <alpha-value>)",
				"light-3": "rgb(var(--color-light-3) / <alpha-value>)",
				"light-4": "rgb(var(--color-light-4) / <alpha-value>)",
				"light-5": "rgb(var(--color-light-5) / <alpha-value>)",
				"light-6": "rgb(var(--color-light-6) / <alpha-value>)",
				"light-7": "rgb(var(--color-light-7) / <alpha-value>)",

				base: "rgb(var(--color-base) / <alpha-value>)",
				white: "rgb(var(--color-white) / <alpha-value>)",
				black: "rgb(var(--color-black) / <alpha-value>)",
				link: "rgb(var(--color-link) / <alpha-value>)",
				tag: "rgb(var(--color-tag) / <alpha-value>)",
				delete: "rgb(var(--color-delete) / <alpha-value>)",
				iconsel: "rgb(var(--color-iconsel) / <alpha-value>)",
				masked: "rgb(var(--color-masked) / <alpha-value>)",
			},
		},
	},
	plugins: [],
}
export default config
