"use client"
import { createContext, useContext, useState, ReactNode } from "react"
import { THEME_KEY } from "@/const"
import { getLocal } from "@/utils"
import antdTheme from "@/theme"
export type Theme = "light" | "dark" | "origin"
import { ConfigProvider } from "antd"

interface ThemeContextType {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	setTheme: () => {},
})
export const useTheme = () => useContext(ThemeContext)

export const NtProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== "undefined") {
			return getLocal(THEME_KEY) || "light"
		}
		return "light" // 在服务器端渲染时提供默认值
	})
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ConfigProvider theme={antdTheme}>
				<main className={`theme-${theme}`}> {children}</main>
			</ConfigProvider>
		</ThemeContext.Provider>
	)
}
