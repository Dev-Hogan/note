"use client"

import { useState } from "react"
import { getLocal, setLocal } from "@/utils"
import { THEME_KEY } from "@/const"
import { useTheme, NtButton } from "@/components"
import { useDialog } from "@/hooks"

type Theme = "light" | "dark" | "origin"
export default function Page() {
	const themes = ["light", "dark", "origin"]
	const [the, setThe] = useState(() => {
		if (typeof window !== "undefined") {
			const theme = getLocal(THEME_KEY)

			return theme || themes[0]
		}
		return themes[0]
	})
	const { setTheme, theme } = useTheme()
	console.log(theme, "主题")

	// const Dialog = useDialog({})

	return (
		<main>
			开发工具
			<div className="space-x-2">
				<div className="text-theme">更换主题色</div>
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
							<div className="text-theme-6">{t}</div>
						</label>
					)
				})}
			</div>
			<br />
			<div>
				{useDialog({
					title: "123",
					content: <div>测试内容</div>,
					footer: <NtButton type="theme">关闭</NtButton>,
				})}
			</div>
		</main>
	)
}
