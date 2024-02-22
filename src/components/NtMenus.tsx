"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { UrlObject } from "url"
import { cn } from "@/utils"
export const NtMenuItem = ({
	name,
	icon,
	children,
	path,
	className,
}: {
	children?: React.ReactNode
	path?: string | UrlObject
	icon?: any
	name?: string
	className?: string
}) => {
	const pathName = usePathname()

	return (
		<Link
			href={path || ""}
			className={cn(
				"flex items-center space-x-2 py-[6px] pl-2 transition-colors  hover:bg-light-2 rounded-[6px]",
				className,
				pathName === path ? "bg-light-2" : ""
			)}
		>
			<div>{icon}</div>
			{children}
			<div>{name}</div>
		</Link>
	)
}

export type Menus = { name?: string; icon?: any; path?: string }[]

export const NtMenus = ({
	children,
	options,
	className,
}: {
	children?: React.ReactNode
	options?: Menus
	className?: string
}) => {
	return (
		<div className={cn("space-y-2", className)}>
			{children}
			{options?.map((m, i) => (
				<NtMenuItem
					key={i}
					path={m.path}
					icon={m.icon}
					className="space-x-2 text-center"
				>
					<div className="text-m text-light-7">{m.name}</div>
				</NtMenuItem>
			))}
		</div>
	)
}
