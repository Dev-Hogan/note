"use client"
import { cn } from "@/utils"
import { useState } from "react"
import { Link1Icon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import {
	ContextMenu,
	ContextMenuItem,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuSeparator,
} from "@/components"
export type NtTagProp = {
	children?: React.ReactNode
	name?: string
	path?: string
	id?: number
	className?: string
}

export const NtTag = ({ children, className }: NtTagProp) => {
	const [active, setActive] = useState(false)
	return (
		<div
			className={cn(
				"py-[14px] px-2 bg-light rounded-[6px] text-light-6",
				" hover:text-primary transition-colors cursor-pointer",
				active ? "bg-primary-2 text-primary" : "",
				className
			)}
			onClick={() => setActive(!active)}
		>
			{children}
		</div>
	)
}

export type NtTagsProps = {
	children?: React.ReactNode
	tags?: NtTagProp[]
	className?: string
}

const tagContextMenu: {
	name?: string
	icon?: any
	split?: boolean
	action?: () => void
}[] = [
	{
		name: "前往该标签",
		icon: <Link1Icon color="#FFAC0A"></Link1Icon>,
		split: true,
	},
	{
		name: "重命名",
		icon: <Pencil2Icon color="#FFAC0A"></Pencil2Icon>,
	},
	{
		name: "删除标签",
		icon: <TrashIcon color="#FFAC0A"></TrashIcon>,
		split: true,
	},
]

export const NtTags = ({ children, tags, className }: NtTagsProps) => {
	return (
		<div className={cn("space-x-1", className)}>
			{children}
			{tags?.map((t, i) => (
				<ContextMenu key={i}>
					<ContextMenuTrigger>
						<NtTag>{t.name}</NtTag>
					</ContextMenuTrigger>
					<ContextMenuContent className="bg-white">
						{tagContextMenu.map((m, i) => (
							<>
								<ContextMenuItem key={i} className={cn("space-x-1")}>
									{m.icon}
									<div className="text-light-7 font-medium">{m.name}</div>
								</ContextMenuItem>
							</>
						))}
						<ContextMenuItem className="bg-white !text-light-4 space-x-2">
							<span>卡片</span>
							<span>:</span>
							<span>32</span>
						</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenu>
			))}
		</div>
	)
}
