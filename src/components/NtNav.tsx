"use client"
import { cn } from "@/utils"
const url = location.pathname
console.log(url, "地址")

export const NtNav = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				url === "/focus" ? "text-red-500" : "",
				"flex flex-1 flex-col"
			)}
		>
			{children}
		</div>
	)
}