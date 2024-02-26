import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
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
				link: "rgb(var(--color-link) / <alpha-value>)",
				tag: "rgb(var(--color-tag) / <alpha-value>)",
				delete: "rgb(var(--color-delete) / <alpha-value>)",
				iconsel: "rgb(var(--color-iconsel) / <alpha-value>)",
				masked: "rgb(var(--color-masked) / <alpha-value>)",

				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				s: "4px",
				m: "8px",
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
			fontSize: {
				s: "11px",
				m: "13px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
