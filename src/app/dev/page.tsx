"use client"

import { useState } from "react"
import { getLocal, setLocal } from "@/utils"
import { THEME_KEY } from "@/const"
import { useTheme } from "@/components"

type Theme = "light" | "dark" | "origin"
export default function Page() {
	const themes = ["light", "dark", "origin"]
	const [the, setThe] = useState(() => {
		if (window) {
			const theme = getLocal(THEME_KEY)

			return theme || themes[0]
		}
	})
	const { setTheme } = useTheme()

	return (
		<main>
			开发工具
			<div className="space-x-2">
				<div>更换主题色</div>
				{themes.map((t, i) => {
					return (
						<label
							key={i}
							htmlFor={t}
							className="space-x-2 flex cursor-pointer"
						>
							<input
								type="radio"
								name="theme"
								id={t}
								value={t}
								checked={t === the}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									console.log(e.target.value)
									setThe(e.target.value)
									setLocal(THEME_KEY, e.target.value)
									setTheme(e.target.value as Theme)
								}}
							/>
							<div className="text-primary-6">{t}</div>
						</label>
					)
				})}
			</div>
		</main>
	)
}
