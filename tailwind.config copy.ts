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
				theme: "rgb(var(--color-theme) / <alpha-value>)",
				"theme-10": "rgb(var(--color-theme-10) / <alpha-value>)",
				"theme-15": "rgb(var(--color-theme-15) / <alpha-value>)",
				"theme-20": "rgb(var(--color-theme-20) / <alpha-value>)",
				"theme-40": "rgb(var(--color-theme-40) / <alpha-value>)",
				"theme-60": "rgb(var(--color-theme-60) / <alpha-value>)",
				"theme-80": "rgb(var(--color-theme-80) / <alpha-value>)",

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
			spacing: {
				1: "4px",
				2: "8px",
				3: "12px",
				4: "16px",
				5: "20px",
				6: "24px",
				7: "28px",
				8: "32px",
			},
			borderRadius: {
				s: "4px",
				m: "8px",
			},
			borderColor: {
				default: "#EAEAEA",
			},
			fontSize: {
				s: "11px",
				m: "13px",
			},
		},
	},
	plugins: [],
}
export default config
