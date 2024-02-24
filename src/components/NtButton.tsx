'use client'
import { cn } from "@/utils"
export const NtButton = ({
	children,
	className,
	type,
}: {
	children: React.ReactNode
	className?: string
	type?: "primary"
}) => {
	return (
		<div
			className={cn(
				"px-3 py-1 border border-light-2 text-light-2 rounded-s",
				type === "primary" ? "bg-primary text-white border-primary" : "",
				className
			)}
		>
			{children}
		</div>
	)
}
